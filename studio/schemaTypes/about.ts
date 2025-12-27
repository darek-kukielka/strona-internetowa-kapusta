import {defineType, defineField, defineArrayMember} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const about = defineType({
  name: 'about',
  title: 'Sekcja O nas',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Tytuł sekcji',
      type: 'string',
      description: 'Nagłówek sekcji "O nas"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
      rows: 5,
      description: 'Główny tekst opisujący firmę',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Cechy / Zalety',
      type: 'array',
      description: 'Lista cech wyróżniających firmę',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Ikona (emoji)',
              type: 'string',
              description: 'Emoji jako ikona, np. 🌱',
            }),
            defineField({
              name: 'title',
              title: 'Tytuł',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Opis',
              type: 'text',
              rows: 2,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              icon: 'icon',
            },
            prepare({title, icon}) {
              return {
                title: title,
                subtitle: icon,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
    },
    prepare({title}) {
      return {
        title: 'Sekcja O nas',
        subtitle: title,
      }
    },
  },
})
