import FormLabel from '../formLabel'
import Grid from '../grid'
import TextField from '../textField'

const BillFrom = () => {
  return (
    <div>
      <FormLabel>Bill From</FormLabel>
      <Grid container gap="2.3rem" rowGap="2.4rem">
        <Grid column={12}>
          <TextField label="Street Address" name="streetAddress" />
        </Grid>
        <Grid column={6}>
          <TextField label="City" name="city" />
        </Grid>
        <Grid column={6}>
          <TextField label="Post Code" name="postCode" />
        </Grid>
        <Grid column={12}>
          <TextField label="Country" name="country" />
        </Grid>
      </Grid>
    </div>
  )
}

export default BillFrom
