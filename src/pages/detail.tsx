import { PageProps } from 'gatsby'
import React from 'react'
import { DetailsCard } from '../components/detailsCard'
import GoBack from '../components/goBack'
import StatusCard from '../components/statusCard'

const Detail: React.FC<PageProps> = () => {
  return (
    <div>
      <GoBack />
      <StatusCard status="asd" />
      <DetailsCard />
    </div>
  )
}

export default Detail
