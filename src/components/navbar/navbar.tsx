'use client'
import { AppDispatch, RootState } from '@/redux/store'
import { setUser } from '@/redux/user.store'
import { getUser } from '@/services/product/user'
import {
  HeartIcon,
  PhoneIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { Affix, Badge, Tour, TourProps } from 'antd'
import { isBoolean, size } from 'lodash'
import { useRouter } from 'next/navigation'
import { PlaytoriumIcon } from 'public/icons'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface NavbarComponentProps {}
const NavbarComponent: React.FC<NavbarComponentProps> = () => {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const carts = useSelector((state: RootState) => state.carts.carts)
  const userInfo = useSelector((state: RootState) => state.user.user)
  const [affixCartDisplay, setAffixCartDisplay] = useState(false)
  const [open, setOpen] = useState<boolean>(false)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  const { data: userData } = getUser()

  const steps: TourProps['steps'] = [
    {
      title: 'You can use playtorium point for discount',
      style: { width: 400 },
      description:
        'Users spent points for a fixed amount of discount (1 point = 1 THB). The amount will be capped at 20% of total price',
      target: () => ref1.current,
    },
    {
      title: 'You can check your products in cart',
      description:
        'Total amount to be paid and discount here. You can remove the selected items from the cart.',
      target: () => ref2.current,
    },
    {
      title: 'Click to back home page',
      description:
        'The main page for selecting the products you want, along with displaying current discounts and promotions.',
      target: () => ref3.current,
    },
  ]

  useEffect(() => {
    if (userData) dispatch(setUser(userData))
  }, [userData])

  useEffect(() => {
    const getToureLocalStore = localStorage.getItem('toure_display')
    if (getToureLocalStore !== 'y') {
      setOpen(true)
      localStorage.setItem('toure_display', 'y')
    }
  }, [])

  return (
    <div className="w-full flex flex-col mb-6 ">
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        scrollIntoViewOptions
      />
      <div className="h-11 bg-primary-default w-full flex items-center justify-between p-2 px-6">
        <div className="flex items-center">
          <div className="text-secondary-600 text-a6   whitespace-nowrap">
            arnonrungrueng08@gmail.com {'  |  '}
          </div>
          <PhoneIcon className="size-4 text-secondary-600 mx-2" />
          <div className="text-secondary-600 text-a6   whitespace-nowrap">
            098-443-7173
          </div>
        </div>

        <div className="flex gap-2 items-center text-secondary-600">
          <div className=" ">Welcome to my shopping</div> |
          <div className=" ">English</div>
        </div>
      </div>
      <div className="flex w-full h-19 bg-white px-6 py-2">
        <div className="flex-1">
          <button
            ref={ref3}
            className=" text-secondary-default text-h2   cursor-pointer"
            onClick={function () {
              router.push('/')
            }}
          >
            <div>PlayMart.</div>
          </button>
        </div>

        <div className="flex items-center flex-nowrap gap-4">
          <div ref={ref1} className="flex items-center gap-2">
            <div className="text-t5">{userInfo?.point ?? 0}</div>
            <PlaytoriumIcon className="size-6" />
          </div>
          <UserIcon className="size-7 text-secondary-default cursor-pointer" />
          <HeartIcon className="size-7 text-secondary-default cursor-pointer" />

          <Affix
            offsetTop={0}
            onChange={(affixed) => {
              if (isBoolean(affixed)) setAffixCartDisplay(affixed)
            }}
          >
            <div
              className={
                affixCartDisplay
                  ? 'shadow-lg mt-12 p-3 ml-[-32px] rounded-full w-fit h-fit border-outline-grey border-2'
                  : ''
              }
            >
              <Badge
                ref={ref2}
                onClick={function () {
                  router.push('/cart')
                }}
                count={size(carts)}
              >
                <ShoppingCartIcon
                  className={`size-7 text-secondary-default cursor-pointer ${affixCartDisplay && 'size-8'} transform active:scale-95 transition-transform duration-300 ease-in-out`}
                />
              </Badge>
            </div>
          </Affix>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponent
