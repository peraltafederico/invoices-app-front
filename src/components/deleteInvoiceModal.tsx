import styled from '@emotion/styled'
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
  return (
    <BaseModal title="Confirm Deletion">
      <StyledText variant="body2" isMuted>
        Are you sure you want to delete invoice #XM9141? This action cannot be
        undone.
      </StyledText>
    </BaseModal>
  )
}

export default DeleteInvoiceModal
