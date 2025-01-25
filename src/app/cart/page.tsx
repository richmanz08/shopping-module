'use client'

import { CartComponent } from '@/components/cart/cart'
import { loadCampaigns } from '@/redux/campaign.store'
import { AppDispatch, RootState } from '@/redux/store'
import { getCampaignList } from '@/services/product/campaign-list'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Page() {
  const dispatch = useDispatch<AppDispatch>()
  const campaigns = useSelector((state: RootState) => state.campaigns.campaigns)

  /*
  fetch campaign list data from api
  */

  const { data } = getCampaignList()

  useEffect(() => {
    if (data) dispatch(loadCampaigns(data))
  }, [data])

  return (
    <div className="flex flex-col bg-white items-center ">
      <CartComponent />
    </div>
  )
}
