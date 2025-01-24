import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface CounterProps {
  value: number
  onChange: (value: number) => void
  limit: number
}

export const Counter: React.FC<CounterProps> = (props) => {
  const { value, limit, onChange } = props

  return (
    <div className="flex items-center gap-4">
      <button
        disabled={value === limit}
        className="shadow-md rounded-full p-3 disabled:cursor-not-allowed"
        onClick={function () {
          if (value < limit) onChange(value + 1)
        }}
      >
        <PlusIcon className="size-6 text-secondary-default" />
      </button>
      <div className="text-t3">{value}</div>
      <button
        disabled={value === 0}
        className="shadow-md rounded-full p-3 disabled:cursor-not-allowed disabled:text-secondary-300"
        onClick={function () {
          if (value > 0) onChange(value - 1)
        }}
      >
        <MinusIcon className="size-6 text-secondary-default" />
      </button>
    </div>
  )
}
