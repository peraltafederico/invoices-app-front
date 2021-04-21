import styled from '@emotion/styled'
import BaseModal from './baseModal'
import Text from './text'

const StyledText = styled(Text)`
  max-width: 26.3rem;
  line-height: 1.9;
`

const DeleteInvoice = (): JSX.Element => {
  return (
    <BaseModal title="Confirm Deletion">
      <StyledText variant="body2" isMuted>
        Are you sure you want to delete invoice #XM9141? This action cannot be
        undone.
      </StyledText>
    </BaseModal>
  )
}

export default DeleteInvoice
