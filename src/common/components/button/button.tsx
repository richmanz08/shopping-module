import React from 'react'

interface ButtonProps {
  className?: string
  buttonText?: string
  disabled?: boolean
  type?: 'primary' | 'primaryOutline' | 'danger'
  onClick?: () => void
  size?: 'small' | 'large'
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, type, buttonText, disabled, className, size } = props
  const includeStyle = {
    primary: 'bg-primary-default text-white hover:bg-primary-default',
    primaryOutline:
      'bg-white border border-primary-default text-primary-default hover:bg-white',
    danger: 'bg-red-600 text-white hover:bg-red-500',
  }
  return (
    <button
      disabled={disabled ?? false}
      onClick={() => {
        if (onClick) {
          onClick()
        }
      }}
      type="button"
      className={`w-32 disabled:bg-secondary-400 disabled:text-secondary-500 inline-flex text-a5 justify-center rounded-md px-3 py-2 shadow-xs ${
        includeStyle[type ?? 'primary']
      } ${className}`}
    >
      <div className={size === 'small' ? 'text-t5' : 'text-t4'}>
        {buttonText ?? 'Button'}
      </div>
    </button>
  )
}
