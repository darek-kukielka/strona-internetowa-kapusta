import {defineType, defineField} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Zdjęcie galerii',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Tekst alternatywny',
      type: 'string',
      description: 'Opis zdjęcia dla osób niewidomych i SEO',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Kolejność',
      type: 'number',
      description: 'Kolejność wyświetlania (mniejsza liczba = wcześniej)',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Kolejność wyświetlania',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image',
    },
    prepare({title, media}) {
      return {
        title: title || 'Zdjęcie bez opisu',
        media: media,
      }
    },
  },
})
