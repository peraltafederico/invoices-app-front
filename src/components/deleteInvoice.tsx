import { useMutation } from '@apollo/client'
import styled from '@emotion/styled'
import { useModalContext } from '../context/modalContext'
import { usePageContext } from '../context/pageContext'
import { Invoice } from '../interfaces'
import { DELETE_INVOICE } from '../schema/mutations/deleteInvoice'
import { MIN_TABLET_MEDIA_QUERY } from '../theme/base'
import BaseModal from './baseModal'
import Text from './text'

const StyledText = styled(Text)`
  max-width: 26.3rem;
  line-height: 1.9;

  ${MIN_TABLET_MEDIA_QUERY} {
    max-width: 38.4rem;
  }
`

const DeleteInvoiceModal = (): JSX.Element => {
  const [deleteInvoice] = useMutation(DELETE_INVOICE)
  const {
    pageContext: { id },
  } = usePageContext<Invoice>()
  const { hideModal } = useModalContext()

  const handleDelete = async () => {
    deleteInvoice({ variables: { id } })
    hideModal()
  }

  return (
    <BaseModal title="Confirm Deletion" onAccept={handleDelete}>
      <StyledText variant="body2" isMuted>
        Are you sure you want to delete invoice #XM9141? This action cannot be
        undone.
      </StyledText>
    </BaseModal>
  )
}

export default DeleteInvoiceModal
