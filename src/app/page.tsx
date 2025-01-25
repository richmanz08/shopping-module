'use client'
import HomeComponent from '@/components/home/home'
import { loadCampaigns } from '@/redux/campaign.store'
import { AppDispatch } from '@/redux/store'
import { getCampaignList } from '@/services/product/campaign-list'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()

  /*
  fetch campaign list data from api
  */

  const { data } = getCampaignList()

  useEffect(() => {
    if (data) dispatch(loadCampaigns(data))
  }, [data])

  return (
    <div className="flex flex-col bg-white items-center">
      <HomeComponent />
    </div>
  )
}
