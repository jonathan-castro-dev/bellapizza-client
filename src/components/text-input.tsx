import type { ComponentProps } from 'react'

type TextInputProps = ComponentProps<'input'> & {
  label: string
}

export function TextInput({ label, className, id, ...props }: TextInputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputId} className="text-sm font-semibold text-stone-600">
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full rounded-lg border-2 border-rose-200 bg-gray-50 px-3.5 py-2.5 text-base text-gray-900 placeholder:text-gray-500 focus:outline-none ${className ?? ''}`}
        {...props}
      />
    </div>
  )
}
