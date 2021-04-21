import styled from '@emotion/styled'
import { PageProps } from 'gatsby'
import React, { useEffect } from 'react'
import DeleteInvoice from '../components/deleteInvoice'
import { DetailsCard } from '../components/detailsCard'
import GoBack from '../components/goBack'
import StatusCard from '../components/statusCard'
import { useModalContext } from '../context/modalContext'

const StyledGoBack = styled(GoBack)`
  margin-bottom: ${(props) => props.theme.space[13]};
`

const Detail: React.FC<PageProps> = () => {
  const { showModal } = useModalContext()

  useEffect(() => {
    showModal({
      component: DeleteInvoice,
      props: {},
    })
  }, [showModal])

  return (
    <div>
      {/* <Modal>asd</Modal> */}
      <StyledGoBack />
      <StatusCard status="asd" />
      <DetailsCard />
    </div>
  )
}

export default Detail
