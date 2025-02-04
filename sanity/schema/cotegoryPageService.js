// schemas/category.js

export default {
    name: 'categorypage',
    title: 'Внутренний сервис Категория',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'object',
        fields: [
          {
            name: 'ru',
            title: 'Russian',
            type: 'string'
          },
          {
            name: 'uz',
            title: 'Uzbek',
            type: 'string'
          }
        ]
      },
      
    ]
  }
  