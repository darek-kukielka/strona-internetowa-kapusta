import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {CogIcon, HomeIcon, UsersIcon, TagIcon, ImagesIcon, EnvelopeIcon, MenuIcon, BasketIcon, ImageIcon} from '@sanity/icons'

// Singleton document IDs
const singletonTypes = new Set([
  'siteSettings',
  'hero',
  'about',
  'offerSection',
  'gallerySection',
  'contactSection',
  'navigation',
])

// Custom structure for Polish UI
const structure = (S: any) =>
  S.list()
    .title('Zawartość strony')
    .items([
      // Singletons - Ustawienia
      S.listItem()
        .title('Ustawienia strony')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Ustawienia strony')
        ),
      S.listItem()
        .title('Nawigacja')
        .icon(MenuIcon)
        .child(
          S.document()
            .schemaType('navigation')
            .documentId('navigation')
            .title('Nawigacja')
        ),
      S.divider(),
      // Singletons - Sekcje
      S.listItem()
        .title('Sekcja Hero')
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType('hero')
            .documentId('hero')
            .title('Sekcja Hero')
        ),
      S.listItem()
        .title('Sekcja O nas')
        .icon(UsersIcon)
        .child(
          S.document()
            .schemaType('about')
            .documentId('about')
            .title('Sekcja O nas')
        ),
      S.listItem()
        .title('Sekcja Oferta')
        .icon(TagIcon)
        .child(
          S.document()
            .schemaType('offerSection')
            .documentId('offerSection')
            .title('Sekcja Oferta')
        ),
      S.listItem()
        .title('Sekcja Galeria')
        .icon(ImagesIcon)
        .child(
          S.document()
            .schemaType('gallerySection')
            .documentId('gallerySection')
            .title('Sekcja Galeria')
        ),
      S.listItem()
        .title('Sekcja Kontakt')
        .icon(EnvelopeIcon)
        .child(
          S.document()
            .schemaType('contactSection')
            .documentId('contactSection')
            .title('Sekcja Kontakt')
        ),
      S.divider(),
      // Collections
      S.listItem()
        .title('Produkty')
        .icon(BasketIcon)
        .child(
          S.documentTypeList('product')
            .title('Produkty')
        ),
      S.listItem()
        .title('Zdjęcia galerii')
        .icon(ImageIcon)
        .child(
          S.documentTypeList('galleryImage')
            .title('Zdjęcia galerii')
        ),
    ])

export default defineConfig({
  name: 'default',
  title: 'AgrosPol - Panel administracyjny',

  projectId: '7wtsinui',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Prevent creation of multiple singleton documents
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    // Prevent deletion of singleton documents
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action !== 'delete' && action !== 'duplicate')
        : input,
  },
})
