export default {
    name: 'profitLegal',
    title: 'Юридические преимущества',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Заголовок / Sarlavha',
        type: 'object',
        fields: [
          {
            name: 'ru',
            title: 'Русский',
            type: 'string',
            validation: (Rule) => Rule.required().error('Заголовок на русском языке обязателен'),
          },
          {
            name: 'uz',
            title: 'O‘zbekcha',
            type: 'string',
            validation: (Rule) => Rule.required().error('Sarlavha o‘zbek tilida majburiy'),
          },
        ],
      },
      {
        name: 'description',
        title: 'Описание / Tavsif',
        type: 'object',
        fields: [
          {
            name: 'ru',
            title: 'Русский',
            type: 'string',
          },
          {
            name: 'uz',
            title: 'O‘zbekcha',
            type: 'string',
          },
        ],
      },
      {
        name: 'image',
        title: 'Изображение / Rasm',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required().error('Загрузка изображения обязательна'),
      },
    ],
  };
  