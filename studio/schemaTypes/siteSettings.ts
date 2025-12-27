import {defineType, defineField} from 'sanity'
import {CogIcon} from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Ustawienia strony',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteName',
      title: 'Nazwa firmy',
      type: 'string',
      description: 'Nazwa wyświetlana w logo i stopce',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'siteTagline',
      title: 'Slogan',
      type: 'string',
      description: 'Krótki slogan wyświetlany w stopce',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Tytuł strony',
          type: 'string',
          description: 'Główny tytuł strony (wyświetlany w zakładce przeglądarki)',
          validation: (rule) => rule.required().max(60),
        }),
        defineField({
          name: 'description',
          title: 'Opis strony',
          type: 'text',
          rows: 3,
          description: 'Opis strony dla wyszukiwarek (maks. 160 znaków)',
          validation: (rule) => rule.required().max(160),
        }),
        defineField({
          name: 'keywords',
          title: 'Słowa kluczowe',
          type: 'string',
          description: 'Słowa kluczowe oddzielone przecinkami',
        }),
        defineField({
          name: 'ogImage',
          title: 'Obrazek Open Graph',
          type: 'image',
          description: 'Obrazek wyświetlany przy udostępnianiu w mediach społecznościowych (1200x630px)',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Dane kontaktowe',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Numer telefonu',
          type: 'string',
          description: 'Format: +48 123 456 789',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'email',
          title: 'Adres email',
          type: 'string',
          validation: (rule) => rule.required().email(),
        }),
        defineField({
          name: 'address',
          title: 'Adres',
          type: 'string',
          description: 'Pełny adres firmy',
        }),
        defineField({
          name: 'mapCoordinates',
          title: 'Współrzędne mapy',
          type: 'object',
          fields: [
            defineField({
              name: 'lat',
              title: 'Szerokość geograficzna',
              type: 'string',
            }),
            defineField({
              name: 'lng',
              title: 'Długość geograficzna',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'openingHours',
      title: 'Godziny otwarcia',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'days',
              title: 'Dni',
              type: 'string',
              description: 'np. Poniedziałek - Piątek',
            }),
            defineField({
              name: 'hours',
              title: 'Godziny',
              type: 'string',
              description: 'np. 8:00 - 18:00',
            }),
          ],
          preview: {
            select: {
              title: 'days',
              subtitle: 'hours',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Ustawienia strony',
      }
    },
  },
})
