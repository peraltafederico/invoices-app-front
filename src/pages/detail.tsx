import styled from '@emotion/styled'
import { PageProps, navigate } from 'gatsby'
import React from 'react'
import ActionsFooter from '../components/actionsFooter'
import { DetailsCard } from '../components/detailsCard'
import GoBack from '../components/goBack'
import StatusCard from '../components/statusCard'
import { useModalContext } from '../context/modalContext'
import DeleteInvoice from '../components/deleteInvoice'
import useBreakpoints from '../hooks/useBreakpoints'
import EditInvoiceDrawer from '../components/editInvoiceDrawer'

const StyledGoBack = styled(GoBack)`
  margin-bottom: ${(props) => props.theme.space[13]};
`

const Detail: React.FC<PageProps> = () => {
  const { showModal } = useModalContext()
  const { isMobileOnly } = useBreakpoints()

  const handleDelete = () =>
    showModal({
      component: DeleteInvoice,
      props: {},
    })

  const handleEdit = () =>
    showModal({
      component: EditInvoiceDrawer,
      props: {},
    })

  return (
    <div>
      <StyledGoBack />
      <StatusCard onEdit={handleEdit} onDelete={handleDelete} />
      <DetailsCard />
      {isMobileOnly && (
        <ActionsFooter
          actions={[
            {
              buttonVariant: 'secondary',
              text: 'Edit',
              onClick: () => navigate('/edit'),
            },
            {
              buttonVariant: 'danger',
              text: 'Delete',
              onClick: handleDelete,
            },
            { buttonVariant: 'primary', text: 'Mark as Paid' },
          ]}
        />
      )}
    </div>
  )
}

export default Detail
