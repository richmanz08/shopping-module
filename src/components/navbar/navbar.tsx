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
import { Badge } from 'antd'
import { size } from 'lodash'
import { useRouter } from 'next/navigation'
import { PlaytoriumIcon } from 'public/icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const NavbarComponent: React.FC<NavbarComponentProps> = () => {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const carts = useSelector((state: RootState) => state.carts.carts)
  const userInfo = useSelector((state: RootState) => state.user.user)

  const { data: userData } = getUser()

  console.log({ userInfo })
  useEffect(() => {
    if (userData) dispatch(setUser(userData))
  }, [userData])

  return (
    <div className="w-full flex flex-col mb-6 ">
      <div className="h-11 bg-primary-default w-full flex items-center justify-between p-2">
        <div className="flex items-center">
          <div className="text-white text-a6   whitespace-nowrap">
            arnonrungrueng08@gmail.com {'  |  '}
          </div>
          <PhoneIcon className="size-4 text-white mx-2" />
          <div className="text-white text-a6   whitespace-nowrap">
            098-443-7173
          </div>
        </div>

        <div className="flex gap-2 items-center text-white">
          <div className=" ">Welcome to my shopping</div> |
          <div className=" ">English</div>
        </div>
      </div>
      <div className="flex w-full h-19 bg-white px-6 py-2">
        <div className="flex-1">
          <button
            className=" text-secondary-default text-h1   cursor-pointer"
            onClick={function () {
              router.push('/')
            }}
          >
            <div>Playtorium Shopping</div>
          </button>
        </div>

        <div className="flex items-center flex-nowrap gap-4">
          <div className="flex items-center gap-2">
            {userInfo?.point ?? 0}
            <PlaytoriumIcon />
          </div>
          <UserIcon className="size-7 text-secondary-default cursor-pointer" />
          <HeartIcon className="size-7 text-secondary-default cursor-pointer" />

          <Badge
            onClick={function () {
              router.push('/cart')
            }}
            count={size(carts)}
          >
            <ShoppingCartIcon className="size-7 text-secondary-default cursor-pointer" />
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponent
