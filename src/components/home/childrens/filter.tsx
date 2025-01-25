import React from 'react'

export type ActiveKeyType = 'new' | 'all' | 'top' | 'price'

interface FilterProps {
  activeKey: ActiveKeyType
  onChange: (value: ActiveKeyType) => void
}

export const Filter: React.FC<FilterProps> = ({ activeKey, onChange }) => {
  return (
    <div className="flex justify-center gap-4">
      <button
        className={
          activeKey === 'new' ? 'border-b-2 border-primary-default' : ''
        }
        onClick={function () {
          onChange('new')
        }}
      >
        <div className="text-t4">New Arrival</div>
      </button>
      <button
        className={
          activeKey === 'all' ? 'border-b-2 border-primary-default' : ''
        }
        onClick={function () {
          onChange('all')
        }}
      >
        <div className="text-t4">All</div>
      </button>
      <button
        className={
          activeKey === 'price' ? 'border-b-2 border-primary-default' : ''
        }
        onClick={function () {
          onChange('price')
        }}
      >
        <div className="text-t4">Price</div>
      </button>

      <button
        className={
          activeKey === 'top' ? 'border-b-2 border-primary-default' : ''
        }
        onClick={function () {
          onChange('top')
        }}
      >
        <div className="text-t4">Top Rated</div>
      </button>
    </div>
  )
}
