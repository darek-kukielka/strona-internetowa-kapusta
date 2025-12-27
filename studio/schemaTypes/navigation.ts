import {defineType, defineField, defineArrayMember} from 'sanity'
import {MenuIcon} from '@sanity/icons'

export const navigation = defineType({
  name: 'navigation',
  title: 'Nawigacja',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'items',
      title: 'Elementy menu',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Etykieta',
              type: 'string',
              description: 'Tekst wyświetlany w menu',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Link',
              type: 'string',
              description: 'Adres docelowy, np. #oferta lub /kontakt',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Nawigacja',
      }
    },
  },
})
