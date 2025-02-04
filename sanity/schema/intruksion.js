export default {
    name: 'intruksion',
    type: 'document',
    title: 'Инструкция',
    fields: [
      {
        name: 'title',
        type: 'object',
        title: 'Заголовок',
        fields: [
          {
            name: 'uz',
            type: 'string',
            title: 'Узбекский заголовок',
          },
          {
            name: 'ru',
            type: 'string',
            title: 'Русский заголовок',
          },
        ],
      },
      {
        name: 'description',
        type: 'object',
        title: 'Описание',
        fields: [
          {
            name: 'uz',
            type: 'text',
            title: 'Узбекское описание',
          },
          {
            name: 'ru',
            type: 'text',
            title: 'Русское описание',
          },
        ],
      },
      {
        name: 'steps',
        type: 'array',
        title: 'Шаги инструкции',
        of: [
          {
            type: 'object',
            title: 'Шаг',
            fields: [
              {
                name: 'title',
                type: 'object',
                title: 'Заголовок шага',
                fields: [
                  {
                    name: 'uz',
                    type: 'string',
                    title: 'Узбекский заголовок шага',
                  },
                  {
                    name: 'ru',
                    type: 'string',
                    title: 'Русский заголовок шага',
                  },
                ],
              },
              {
                name: 'description',
                type: 'object',
                title: 'Описание шага',
                fields: [
                  {
                    name: 'uz',
                    type: 'text',
                    title: 'Узбекское описание шага',
                  },
                  {
                    name: 'ru',
                    type: 'text',
                    title: 'Русское описание шага',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title.ru', // генерируем slug из русского заголовка
          maxLength: 96,
          slugify: input => {
            // Функция транслитерации русского текста в узбекский
            const ruToUz = {
              а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'j', з: 'z',
              и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r',
              с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sch',
              ы: 'y', э: 'e', ю: 'yu', я: 'ya', ь: '', ъ: '', ' ': '-'
            };
  
            return input
              .toLowerCase()
              .split('')
              .map(char => ruToUz[char] || char)
              .join('')
              .replace(/[^a-z0-9-]/g, '') // убираем все ненужные символы
              .replace(/-+/g, '-') // заменяем несколько дефисов подряд на один
              .trim('-');
          },
        },
      },
    ],
  };
  