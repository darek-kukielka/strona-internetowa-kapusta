import {defineType, defineField} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export const gallerySection = defineType({
  name: 'gallerySection',
  title: 'Sekcja Galeria',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Tytuł sekcji',
      type: 'string',
      description: 'Nagłówek sekcji galerii',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
    },
    prepare({title}) {
      return {
        title: 'Sekcja Galeria',
        subtitle: title,
      }
    },
  },
})
