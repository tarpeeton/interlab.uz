import axios from 'axios';

export async function POST(req) {
  try {
    // Получаем тело запроса
    const body = await req.json();

    // Шаг 1: Получаем токен
    const loginResponse = await axios.post('http://192.168.150.12:6746/api/v1/Entegrasyon/Login', body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const token = loginResponse.data.data.accessToken;

    // Шаг 2: Запрашиваем данные анализов, используя полученный токен
    const testsResponse = await axios.post('http://192.168.150.12:6746/api/v1/Entegrasyon/GetTestDescriptionAndFee', {}, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    // Возвращаем данные анализов
    return new Response(JSON.stringify(testsResponse.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Ошибка при отправке запроса:', error.message);
    return new Response(
      JSON.stringify({ message: error.message }),
      { status: error.response?.status || 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
