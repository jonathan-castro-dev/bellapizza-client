import { Home, Store, Truck } from 'lucide-react'
import type { OrderType } from '../api/submit-order'
import { Checkbox } from './checkbox'

type OrderTypeSectionProps = {
  orderType: OrderType
  onOrderTypeChange: (orderType: OrderType) => void
}

export function OrderTypeSection({ orderType, onOrderTypeChange }: OrderTypeSectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Truck className="size-4 text-red-700" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-gray-900">Tipo de Pedido</h2>
      </div>

      <div className="flex gap-3">
        <Checkbox
          name="order-type"
          label="Entrega"
          checked={orderType === 'delivery'}
          onChange={() => onOrderTypeChange('delivery')}
          icon={<Home className="size-4 text-red-700" aria-hidden="true" />}
        />
        <Checkbox
          name="order-type"
          label="Retirada"
          checked={orderType === 'pickup'}
          onChange={() => onOrderTypeChange('pickup')}
          icon={<Store className="size-4 text-amber-800" aria-hidden="true" />}
        />
      </div>
    </section>
  )
}
