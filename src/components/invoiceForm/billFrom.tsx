/* eslint-disable react/jsx-fragments */
import FormLabel from '../formLabel'
import Grid from '../grid'
import Hidden from '../hidden'
import TextField from '../textField'

const BillFrom = () => {
  const renderContent = (gap: string) => (
    <Grid container gap={gap} rowGap="2.4rem">
      <Grid sm={12}>
        <TextField label="Street Address" name="streetAddress" />
      </Grid>
      <Grid sm={6} md={4}>
        <TextField label="City" name="city" />
      </Grid>
      <Grid sm={6} md={4}>
        <TextField label="Post Code" name="postCode" />
      </Grid>
      <Grid sm={12} md={4}>
        <TextField label="Country" name="country" />
      </Grid>
    </Grid>
  )

  return (
    <div>
      <FormLabel>Bill From</FormLabel>
      <Hidden mobileDown>{renderContent('2.4rem')}</Hidden>
      <Hidden mobileUp>{renderContent('2.3rem')}</Hidden>
    </div>
  )
}

export default BillFrom
