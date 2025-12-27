import {defineType, defineField} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export const contactSection = defineType({
  name: 'contactSection',
  title: 'Sekcja Kontakt',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Tytuł sekcji',
      type: 'string',
      description: 'Nagłówek sekcji kontaktu',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'showMap',
      title: 'Pokaż mapę',
      type: 'boolean',
      description: 'Czy wyświetlać mapę Google?',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
    },
    prepare({title}) {
      return {
        title: 'Sekcja Kontakt',
        subtitle: title,
      }
    },
  },
})
