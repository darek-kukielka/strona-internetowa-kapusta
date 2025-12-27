import {defineType, defineField} from 'sanity'
import {TagIcon} from '@sanity/icons'

export const offerSection = defineType({
  name: 'offerSection',
  title: 'Sekcja Oferta',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Tytuł sekcji',
      type: 'string',
      description: 'Nagłówek sekcji oferty',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introText',
      title: 'Tekst wprowadzający',
      type: 'text',
      rows: 3,
      description: 'Krótki tekst pod nagłówkiem sekcji',
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
    },
    prepare({title}) {
      return {
        title: 'Sekcja Oferta',
        subtitle: title,
      }
    },
  },
})
