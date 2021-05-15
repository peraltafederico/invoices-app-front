import styled from '@emotion/styled'
import useBreakpoints from '../../hooks/useBreakpoints'
import { InvoiceFormMode } from '../../interfaces'
import { MIN_TABLET_MEDIA_QUERY } from '../../theme/base'
import DatePicker from '../datePicker'
import Dropdown from '../dropdown'
import FormLabel from '../formLabel'
import Grid from '../grid'
import TextField from '../textField'

const StyledContainer = styled.div`
  margin-top: 4rem;

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-top: ${(props) => props.theme.space[14]};
  }
`

const StyledInvoiceDatePicker = styled(DatePicker)`
  margin-top: ${(props) => props.theme.space[8]};

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-top: ${(props) => props.theme.space[12]};
  }
`

const StyledPaymentsDropdown = styled(Dropdown)`
  ${MIN_TABLET_MEDIA_QUERY} {
    margin-top: ${(props) => props.theme.space[12]};
  }
`

interface Props {
  mode: InvoiceFormMode
}

const BillTo = ({ mode }: Props) => {
  const { isTablet } = useBreakpoints()

  return (
    <StyledContainer>
      <FormLabel>Bill To</FormLabel>
      <Grid container gap={isTablet ? '2.4rem' : '2.3rem'} rowGap="2.4rem">
        <Grid sm={12}>
          <TextField label="Client's Name" name="clientName" />
        </Grid>
        <Grid sm={12}>
          <TextField label="Client's Email" name="clientEmail" />
        </Grid>
        <Grid sm={12}>
          <TextField label="Street Address" name="clientStreetAddress" />
        </Grid>
        <Grid sm={6} md={4}>
          <TextField label="City" name="clientCity" />
        </Grid>
        <Grid sm={6} md={4}>
          <TextField label="Post Code" name="clientPostCode" />
        </Grid>
        <Grid sm={12} md={4}>
          <TextField label="Country" name="clientCountry" />
        </Grid>
        <Grid sm={12} md={6}>
          <StyledInvoiceDatePicker
            disabled={mode === 'edit'}
            label="Invoice Date"
            name="invoiceDate"
          />
        </Grid>
        <Grid sm={12} md={6}>
          <StyledPaymentsDropdown
            options={[
              { label: 'Net 1 Day', value: '1' },
              { label: 'Net 7 Day', value: '12' },
              { label: 'Net 14 Day', value: '3' },
              { label: 'Net 30 Day', value: '4' },
            ]}
            label="Payment Terms"
            name="paymentTems"
          />
        </Grid>
        <Grid sm={12}>
          <TextField label="Project Description" name="projectDescription" />
        </Grid>
      </Grid>
    </StyledContainer>
  )
}

export default BillTo
