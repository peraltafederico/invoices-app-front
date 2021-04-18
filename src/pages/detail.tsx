import styled from '@emotion/styled'
import { PageProps } from 'gatsby'
import React from 'react'
import { DetailsCard } from '../components/detailsCard'
import GoBack from '../components/goBack'
import StatusCard from '../components/statusCard'

const StyledGoBack = styled(GoBack)`
  margin-bottom: ${(props) => props.theme.space[13]};
`

const Detail: React.FC<PageProps> = () => {
  return (
    <div>
      <StyledGoBack />
      <StatusCard status="asd" />
      <DetailsCard />
    </div>
  )
}

export default Detail
