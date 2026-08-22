import type { Product } from '@/api/get-products'

const productImages = import.meta.glob<string>(
  '@/assets/products/**/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' },
)

const imagesBySlug = new Map(
  Object.entries(productImages).map(([path, url]) => [
    path.replace(/^.*\/assets\/products\//, '').replace(/\.[^.]+$/, ''),
    url,
  ]),
)

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Files are named as slugs, so accents and casing coming from the API are normalized
// before the lookup, and the extension is ignored since not every image is a .png.
export function getProductImage({
  category,
  name,
}: Pick<Product, 'category' | 'name'>) {
  return imagesBySlug.get(`${slugify(category)}/${slugify(name)}`)
}
