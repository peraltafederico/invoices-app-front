import useBreakpoints from '../../hooks/useBreakpoints'
import FormLabel from '../formLabel'
import Grid from '../grid'
import TextField from '../textField'

const BillFrom = () => {
  const { isTablet } = useBreakpoints()

  return (
    <div>
      <FormLabel>Bill From</FormLabel>
      <Grid container gap={isTablet ? '2.4rem' : '2.3rem'} rowGap="2.4rem">
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
    </div>
  )
}

export default BillFrom
