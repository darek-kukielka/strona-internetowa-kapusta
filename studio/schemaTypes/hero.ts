import {defineType, defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const hero = defineType({
  name: 'hero',
  title: 'Sekcja Hero',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł główny',
      type: 'string',
      description: 'Główny nagłówek sekcji hero',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleHighlight',
      title: 'Wyróżniona część tytułu',
      type: 'string',
      description: 'Część tytułu wyświetlana w kolorze zielonym',
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
      rows: 4,
      description: 'Tekst opisowy pod tytułem',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'primaryButton',
      title: 'Przycisk główny',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Tekst przycisku',
          type: 'string',
        }),
        defineField({
          name: 'link',
          title: 'Link',
          type: 'string',
          description: 'np. #oferta lub /kontakt',
        }),
      ],
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Przycisk dodatkowy',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Tekst przycisku',
          type: 'string',
        }),
        defineField({
          name: 'link',
          title: 'Link',
          type: 'string',
          description: 'np. tel:+48123456789',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: 'Sekcja Hero',
        subtitle: title,
      }
    },
  },
})
