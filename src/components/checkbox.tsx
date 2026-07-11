import type { ComponentProps, ReactNode } from 'react'

type CheckboxProps = ComponentProps<'input'> & {
  label: string
  icon?: ReactNode
}

export function Checkbox({ label, icon, className, checked, ...props }: CheckboxProps) {
  return (
    <label
      className={`flex flex-1 cursor-pointer flex-col items-center gap-2 rounded-xl bg-gray-100 p-[18px] ${
        checked ? 'border-2 border-red-700' : 'border-2 border-transparent'
      } ${className ?? ''}`}
    >
      <input type="radio" className="sr-only" checked={checked} {...props} />
      {icon}
      <span className="text-sm font-semibold text-gray-900">{label}</span>
    </label>
  )
}
