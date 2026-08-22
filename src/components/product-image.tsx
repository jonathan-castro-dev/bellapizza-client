import { ImageOff } from 'lucide-react'
import type { Product } from '@/api/get-products'
import { getProductImage } from '@/utils/product-image'

type ProductImageProps = {
  product: Product
  className?: string
}

export function ProductImage({ product, className }: ProductImageProps) {
  const image = getProductImage(product)

  if (!image) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 ${className}`}
        role="img"
        aria-label={product.name}
      >
        <ImageOff className="size-6 text-stone-400" aria-hidden="true" />
      </div>
    )
  }

  return <img src={image} alt={product.name} className={className} />
}
