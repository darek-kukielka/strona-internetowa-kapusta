import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: '7wtsinui',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Types for Sanity documents
export interface SiteSettings {
  siteName: string;
  siteTagline?: string;
  seo: {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: SanityImageSource;
  };
  contact: {
    phone: string;
    email: string;
    address?: string;
    mapCoordinates?: {
      lat: string;
      lng: string;
    };
  };
  openingHours?: Array<{
    _key: string;
    days: string;
    hours: string;
  }>;
}

export interface Hero {
  title: string;
  titleHighlight?: string;
  description: string;
  primaryButton?: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
}

export interface AboutFeature {
  _key: string;
  icon?: string;
  title: string;
  description?: string;
}

export interface About {
  sectionTitle: string;
  description: string;
  features?: AboutFeature[];
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  isAvailable: boolean;
  order: number;
}

export interface OfferSection {
  sectionTitle: string;
  introText?: string;
}

export interface GalleryImage {
  _id: string;
  image: SanityImageSource;
  alt: string;
  order: number;
}

export interface GallerySection {
  sectionTitle: string;
}

export interface ContactSection {
  sectionTitle: string;
  showMap: boolean;
}

export interface NavigationItem {
  _key: string;
  label: string;
  href: string;
}

export interface Navigation {
  items: NavigationItem[];
}

// Queries
export const queries = {
  siteSettings: `*[_type == "siteSettings"][0]`,
  hero: `*[_type == "hero"][0]`,
  about: `*[_type == "about"][0]`,
  products: `*[_type == "product"] | order(order asc)`,
  offerSection: `*[_type == "offerSection"][0]`,
  galleryImages: `*[_type == "galleryImage"] | order(order asc) { _id, image, alt, order }`,
  gallerySection: `*[_type == "gallerySection"][0]`,
  contactSection: `*[_type == "contactSection"][0]`,
  navigation: `*[_type == "navigation"][0]`,
};

// Fetch functions
export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(queries.siteSettings);
}

export async function getHero(): Promise<Hero | null> {
  return client.fetch(queries.hero);
}

export async function getAbout(): Promise<About | null> {
  return client.fetch(queries.about);
}

export async function getProducts(): Promise<Product[]> {
  return client.fetch(queries.products);
}

export async function getOfferSection(): Promise<OfferSection | null> {
  return client.fetch(queries.offerSection);
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  return client.fetch(queries.galleryImages);
}

export async function getGallerySection(): Promise<GallerySection | null> {
  return client.fetch(queries.gallerySection);
}

export async function getContactSection(): Promise<ContactSection | null> {
  return client.fetch(queries.contactSection);
}

export async function getNavigation(): Promise<Navigation | null> {
  return client.fetch(queries.navigation);
}

// Get all page data in one request
export async function getPageData() {
  const query = `{
    "siteSettings": ${queries.siteSettings},
    "hero": ${queries.hero},
    "about": ${queries.about},
    "products": ${queries.products},
    "offerSection": ${queries.offerSection},
    "galleryImages": ${queries.galleryImages},
    "gallerySection": ${queries.gallerySection},
    "contactSection": ${queries.contactSection},
    "navigation": ${queries.navigation}
  }`;

  return client.fetch<{
    siteSettings: SiteSettings | null;
    hero: Hero | null;
    about: About | null;
    products: Product[];
    offerSection: OfferSection | null;
    galleryImages: GalleryImage[];
    gallerySection: GallerySection | null;
    contactSection: ContactSection | null;
    navigation: Navigation | null;
  }>(query);
}
