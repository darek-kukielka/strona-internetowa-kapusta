import {siteSettings} from './siteSettings'
import {hero} from './hero'
import {about} from './about'
import {product} from './product'
import {offerSection} from './offerSection'
import {galleryImage} from './galleryImage'
import {gallerySection} from './gallerySection'
import {contactSection} from './contactSection'
import {navigation} from './navigation'

export const schemaTypes = [
  // Singleton documents
  siteSettings,
  hero,
  about,
  offerSection,
  gallerySection,
  contactSection,
  navigation,
  // Collection documents
  product,
  galleryImage,
]
