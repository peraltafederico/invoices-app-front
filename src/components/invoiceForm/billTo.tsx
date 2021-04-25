import styled from '@emotion/styled'
import DatePicker from '../datePicker'
import Dropdown from '../dropdown'
import FormLabel from '../formLabel'
import Grid from '../grid'
import TextField from '../textField'

const StyledContainer = styled.div`
  margin-top: 4rem;
`

const StyledDatePicker = styled(DatePicker)`
  margin-top: ${(props) => props.theme.space[8]};
`

interface Props {
  mode: 'create' | 'edit'
}

const BillTo = ({ mode }: Props) => {
  return (
    <StyledContainer>
      <FormLabel>Bill To</FormLabel>
      <Grid container gap="2.3rem" rowGap="2.4rem">
        <Grid column={12}>
          <TextField label="Client's Name" name="clientName" />
        </Grid>
        <Grid column={12}>
          <TextField label="Client's Email" name="clientEmail" />
        </Grid>
        <Grid column={12}>
          <TextField label="Street Address" name="clientStreetAddress" />
        </Grid>
        <Grid column={6}>
          <TextField label="City" name="clientCity" />
        </Grid>
        <Grid column={6}>
          <TextField label="Post Code" name="clientPostCode" />
        </Grid>
        <Grid column={12}>
          <TextField label="Country" name="clientCountry" />
        </Grid>
        <Grid column={12}>
          <StyledDatePicker
            disabled={mode === 'edit'}
            label="Invoice Date"
            name="invoiceDate"
          />
        </Grid>
        <Grid column={12}>
          <Dropdown options={[]} label="Payment Terms" name="paymentTems" />
        </Grid>
        <Grid column={12}>
          <TextField label="Project Description" name="projectDescription" />
        </Grid>
      </Grid>
    </StyledContainer>
  )
}

export default BillTo
