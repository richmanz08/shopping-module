import { map } from 'lodash'
import React from 'react'

export type ActiveKeyType = 'new' | 'all' | 'top' | 'price'

interface FilterProps {
  activeKey: ActiveKeyType
  onChange: (value: ActiveKeyType) => void
}

export const Filter: React.FC<FilterProps> = ({ activeKey, onChange }) => {
  const arrayButton = [
    {
      key: 'new',
      name: 'New Arrival',
    },
    {
      key: 'all',
      name: 'All',
    },
    {
      key: 'price',
      name: 'Price',
    },
    {
      key: 'top',
      name: 'Top Rated',
    },
  ]
  return (
    <div className="flex justify-center gap-4">
      {map(arrayButton, function (i) {
        return (
          <button
            key={i.key}
            className={
              activeKey === i.key ? 'border-b-2 border-primary-default' : ''
            }
            onClick={function () {
              onChange(i.key)
            }}
          >
            <div className="text-t4">{i.name}</div>
          </button>
        )
      })}
    </div>
  )
}
