import {defineType, defineField} from 'sanity'
import {BasketIcon} from '@sanity/icons'

export const product = defineType({
  name: 'product',
  title: 'Produkt',
  type: 'document',
  icon: BasketIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Nazwa produktu',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Opis produktu',
      type: 'text',
      rows: 3,
      description: 'Krótki opis produktu',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isAvailable',
      title: 'Dostępność',
      type: 'boolean',
      description: 'Czy produkt jest aktualnie dostępny?',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Kolejność',
      type: 'number',
      description: 'Kolejność wyświetlania (mniejsza liczba = wyżej)',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Kolejność wyświetlania',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Nazwa A-Z',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      isAvailable: 'isAvailable',
    },
    prepare({title, isAvailable}) {
      return {
        title: title,
        subtitle: isAvailable ? 'Dostępny' : 'Niedostępny',
      }
    },
  },
})
