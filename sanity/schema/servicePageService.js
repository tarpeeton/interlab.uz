export default {
    name: 'servicepage',
    title: 'Услуга внутренний  (Услугы)',
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
      {
        name: 'category',
        title: 'Категория',
        type: 'reference',
        to: [{ type: 'categorypage' }],
        description: 'Select the category this service belongs to'
      }
    ]
  }
  