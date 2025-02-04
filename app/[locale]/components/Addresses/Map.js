'use client'
import { useEffect, useRef, useState } from 'react'
import Filter from '@/app/[locale]/components/Addresses/Filter'
import { clinicsLocations } from '@/app/constants/map'
import { useLocale } from 'next-intl'

export default function Map() {
  const YANDEX_API_KEY = process.env.NEXT_PUBLIC_YANDEX_API_KEY
  const [clinics, setClinics] = useState([])
  const [userLocation, setUserLocation] = useState(null)
  const [isSearchButtonVisible, setIsSearchButtonVisible] = useState(true)
  const [activeClinic, setActiveClinic] = useState(null)
  const mapRef = useRef(null)
  const scrollToMap = useRef(null)
  const ymapsRef = useRef(null)
  const userPlacemarkRef = useRef(null)
  const routeRef = useRef(null)
  const clinicsPlacemarksRef = useRef([])
  const locale = useLocale()


  
  useEffect(() => {
    const loadYMaps = () => {
      return new Promise((resolve, reject) => {
        if (typeof window === 'undefined') return
        if (window.ymaps) {
          resolve(window.ymaps)
        } else {
          const script = document.createElement('script')
          script.src = `https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_API_KEY}&lang=ru_RU`
          script.onload = () => {
            window.ymaps.ready(() => {
              ymapsRef.current = window.ymaps
              resolve(window.ymaps)
            })
          }
          script.onerror = reject
          document.head.appendChild(script)
        }
      })
    }

    loadYMaps()
      .then(ymaps => {
        ymapsRef.current = ymaps
        initMap([41.311158, 69.279737]) // Координаты Ташкента
      })
      .catch(error => {
        console.error('Ошибка загрузки Яндекс Карт:', error)
      })

    return () => {
      if (mapRef.current) {
        mapRef.current.destroy()
        mapRef.current = null
      }
    }
  }, [])

  const initMap = center => {
    const ymaps = ymapsRef.current
    if (!ymaps) return

    if (!mapRef.current) {
      mapRef.current = new ymaps.Map('map', {
        center: center,
        zoom: 13,
        controls: ['zoomControl']
      })

      const iconContent = {
        iconLayout: 'default#image',
        iconImageHref: '/images/maps/geolocation.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-25, -27]
      }

      const centerPlacemark = new ymaps.Placemark(center, {}, iconContent)
      mapRef.current.geoObjects.add(centerPlacemark)
      userPlacemarkRef.current = centerPlacemark

      // Adding all clinic markers by default
      clinicsLocations.forEach(clinic => {
        const clinicIconLayout = ymaps.templateLayoutFactory.createClass(`
          <svg width="35" height="35" viewBox="0 0 44 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1226 56.0115C23.2785 56.0115 43.9327 34.1321 43.9327 22.1897C43.9327 10.2473 34.1679 0.56604 22.1226 0.56604C10.0772 0.56604 0.3125 10.2473 0.3125 22.1897C0.3125 34.1321 20.9667 56.0115 22.1226 56.0115ZM22.1226 33.0052C28.2296 33.0052 33.1804 28.0967 33.1804 22.0418C33.1804 15.987 28.2296 11.0786 22.1226 11.0786C16.0156 11.0786 11.0649 15.987 11.0649 22.0418C11.0649 28.0967 16.0156 33.0052 22.1226 33.0052Z" fill="#FB6A68"/>
          </svg>
        `)

        const placemark = new ymaps.Placemark(
          clinic.coords,
          {
            hintContent: clinic.name,
            balloonContent: `<b>${clinic.name}</b><br>${clinic.address}<br>${clinic.graphic}`
          },
          {
            iconLayout: clinicIconLayout,
            iconShape: {
              type: 'Circle',
              coordinates: [0, 0],
              radius: 40
            },
            iconOffset: [-22, -57]
          }
        )

        placemark.events.add('click', () => {
          handleLocationClick(clinic.id, clinic.coords)
        })

        mapRef.current.geoObjects.add(placemark)
        clinicsPlacemarksRef.current.push(placemark)
      })
    } else {
      mapRef.current.setCenter(center, 13)
    }
  }

  const handleSearchClinics = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords
          const userCoords = [latitude, longitude]
          setUserLocation(userCoords)
          updateMapToUserLocation(userCoords)
          searchNearbyClinics(userCoords)
          setIsSearchButtonVisible(false)
        },
        error => {
          alert('Не удалось получить геолокацию: ' + error.message)
        }
      )
    } else {
      alert('Геолокация не поддерживается вашим браузером.')
    }
  }

  const updateMapToUserLocation = location => {
    const ymaps = ymapsRef.current
    if (!ymaps || !mapRef.current) return

    if (userPlacemarkRef.current) {
      userPlacemarkRef.current.geometry.setCoordinates(location)
    } else {
      const iconContent = {
        iconLayout: 'default#image',
        iconImageHref: '/images/maps/geolocation.png',
        iconImageSize: [50, 50],
        iconImageOffset: [-25, -27]
      }

      const userPlacemark = new ymaps.Placemark(location, {}, iconContent)
      mapRef.current.geoObjects.add(userPlacemark)
      userPlacemarkRef.current = userPlacemark
    }

    mapRef.current.setCenter(location, 14)
  }

  const searchNearbyClinics = userCoords => {
    const radius = 3 // Radius in km
    const nearbyClinics = clinicsLocations.filter(clinic => {
      const distance = getDistanceFromLatLonInKm(
        userCoords[0],
        userCoords[1],
        clinic.coords[0],
        clinic.coords[1]
      )
      return distance <= radius
    })

    setClinics(nearbyClinics)
  }

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371
    const dLat = deg2rad(lat2 - lat1)
    const dLon = deg2rad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) ** 2
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  const deg2rad = deg => {
    return deg * (Math.PI / 180)
  }

  const handleLocationClick = (id, coords) => {
    // Scroll to the map section
    if (scrollToMap.current) {
      scrollToMap.current.scrollIntoView({ behavior: 'smooth' })
    }

    setActiveClinic(id)
    if (mapRef.current) {
      mapRef.current.setCenter(coords, 14, { duration: 300 })

      mapRef.current.geoObjects.each(geoObject => {
        const placemarkCoords = geoObject.geometry.getCoordinates()
        if (placemarkCoords.toString() === coords.toString()) {
          geoObject.balloon.open()
        }
      })
    }
  }


  return (
    <div className='w-full relative'>
      <div className='absolute h-[50px] z-10  max-xl:w-full max-xl:h-[50px]'>
        {isSearchButtonVisible && (
          <button
            onClick={handleSearchClinics}
            className='rounded-full px-4 py-3 bg-[#FB6A68] font-bold  w-[320px] text-white shadow-md shadow-red-400 absolute top-4 left-4 z-10'
          >
            {locale === 'ru'
              ? 'Поиск ближайшей поликлиники'
              : 'Yaqin tibbiyot muassasasini topish'}
          </button>
        )}
      </div>
      <div id='map' ref={scrollToMap} className='w-full  h-[500px]'></div>
      <Filter
        sortedClinics={clinicsLocations}
        onLocationClick={handleLocationClick}
        activeClinic={activeClinic}
        clinicsLocations={clinicsLocations}
      />
    </div>
  )
}
