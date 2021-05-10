import styled from '@emotion/styled'
import { PageProps, navigate } from 'gatsby'
import React from 'react'
import ActionsFooter from '../components/actionsFooter'
import { DetailsCard } from '../components/detailsCard'
import GoBack from '../components/goBack'
import StatusCard from '../components/statusCard'
import { useModalContext } from '../context/modalContext'
import DeleteInvoiceModal from '../components/deleteInvoiceModal'
import useBreakpoints from '../hooks/useBreakpoints'
import InvoiceDrawer from '../components/invoiceDrawer'

const StyledGoBack = styled(GoBack)`
  margin-bottom: ${(props) => props.theme.space[13]};
`

const Detail: React.FC<PageProps> = () => {
  const { showModal } = useModalContext()
  const { isMobileOnly } = useBreakpoints()

  const handleDelete = () =>
    showModal({
      component: DeleteInvoiceModal,
    })

  const handleEdit = () =>
    showModal({
      component: InvoiceDrawer,
      props: {
        mode: 'edit',
      },
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
