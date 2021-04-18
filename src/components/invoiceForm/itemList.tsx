/* eslint-disable react/jsx-fragments */
/* eslint-disable react/no-array-index-key */
import styled from '@emotion/styled'
import { FieldArray, useFormikContext } from 'formik'
import React from 'react'
import Grid from '../grid'
import TextField from '../textField'

const StyledContainer = styled.div`
  margin-top: 6.6rem;
`

const StyledTitle = styled.h3`
  font-size: 1.8rem;
  line-height: 1.78;
  letter-spacing: -0.0375rem;
  color: #777f98;
  margin-bottom: ${(props) => props.theme.space[12]};
`

const ItemList = () => {
  const { values } = useFormikContext<{
    items: { name: string; qty: string; price: string; total: string }[]
  }>()

  return (
    <StyledContainer>
      <StyledTitle>Items List</StyledTitle>
      <FieldArray name="items" validateOnChange={false}>
        {() => (
          <React.Fragment>
            {values.items.map((_, index) => (
              <Grid key={index} container gap="1.6rem" rowGap="2.4rem">
                <Grid span={12}>
                  <TextField label="Item Name" name={`items[${index}].name`} />
                </Grid>
                <Grid span={2.799}>
                  <TextField label="Qty." name={`items[${index}].qty`} />
                </Grid>
                <Grid span={4.0588}>
                  <TextField label="Price" name={`items[${index}].price`} />
                </Grid>
                <Grid span={12 - 2.799 - 4.0588}>
                  <TextField label="Total" name={`items[${index}].total`} />
                </Grid>
              </Grid>
            ))}
          </React.Fragment>
        )}
      </FieldArray>
    </StyledContainer>
  )
}

export default ItemList
