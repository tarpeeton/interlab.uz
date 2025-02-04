// checkup.js
export default {
    name: 'checkup',
    title: 'Чек-апы',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Заголовок',
        type: 'object',
        fields: [
          { name: 'ru', title: 'Русский', type: 'string' },
          { name: 'uz', title: 'Узбекский', type: 'string' },
        ],
        validation: Rule => Rule.required(),
      },
      {
        name: 'description',
        title: 'Краткое описание',
        type: 'object',
        fields: [
          { name: 'ru', title: 'Русский', type: 'text' },
          { name: 'uz', title: 'Узбекский', type: 'text' },
        ],
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title.ru'
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'icon',
        title: 'Иконка',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'color',
        title: 'Цвет',
        type: 'string', // Используем строку вместо color
        description: 'Введите цвет в формате HEX, например, #FF5733',
      },
      {
        name: 'secondaryColor',
        title: 'Дополнительный цвет',
        type: 'string', // Используем строку вместо color
        description: 'Введите дополнительный цвет в формате HEX, например, #33FF57',
      },
      {
        name: 'checkupComposition',
        title: 'Состав чекапа',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Заголовок',
                type: 'object',
                fields: [
                  { name: 'ru', title: 'Русский', type: 'string' },
                  { name: 'uz', title: 'Узбекский', type: 'string' },
                ],
                validation: Rule => Rule.required(),
              },
              {
                name: 'description',
                title: 'Описание',
                type: 'object',
                fields: [
                  { name: 'ru', title: 'Русский', type: 'blockContent' },
                  { name: 'uz', title: 'Узбекский', type: 'blockContent' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'stages',
        title: 'Этапы обследования',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Заголовок',
                type: 'object',
                fields: [
                  { name: 'ru', title: 'Русский', type: 'string' },
                  { name: 'uz', title: 'Узбекский', type: 'string' },
                ],
                validation: Rule => Rule.required(),
              },
              {
                name: 'description',
                title: 'Описание',
                type: 'object',
                fields: [
                  { name: 'ru', title: 'Русский', type: 'blockContent' },
                  { name: 'uz', title: 'Узбекский', type: 'blockContent' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'price',
        title: 'Цена',
        type: 'string',
        validation: Rule => Rule.required().positive(),
      },
      {
        name: 'hasDiscount',
        title: 'Скидочный процент',
        type: 'boolean',
        initialValue: false,
      },
      {
        name: 'discountPercentage',
        title: 'Процент скидки',
        type: 'string',
        hidden: ({ document }) => !document?.hasDiscount,
        validation: Rule => Rule.min(0).max(100),
      },
    ],
  };
  