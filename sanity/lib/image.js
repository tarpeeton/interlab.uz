// Пример использования в компоненте

// sanity/lib/image.js
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}


// В вашем компоненте
{/* <img src={urlFor(service.icon).url()} alt={service.name[locale]} />  */}
