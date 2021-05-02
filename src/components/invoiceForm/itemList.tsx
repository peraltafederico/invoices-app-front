/* eslint-disable react/jsx-fragments */
/* eslint-disable react/no-array-index-key */
import styled from '@emotion/styled'
import { FieldArray, useFormikContext } from 'formik'
import React from 'react'
import Grid from '../grid'
import InputLabel from '../inputLabel'
import Text from '../text'
import TextField from '../textField'
import TrashIcon from '../../assets/trash.inline.svg'
import Button from '../button'
import { MIN_TABLET_MEDIA_QUERY } from '../../theme/base'

const StyledContainer = styled.div`
  margin-top: 6.6rem;

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-top: ${(props) => props.theme.space[12]};
  }
`

const StyledTitle = styled.h3`
  font-size: 1.8rem;
  line-height: 1.78;
  letter-spacing: -0.0375rem;
  color: #777f98;
  margin-bottom: ${(props) => props.theme.space[12]};

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-bottom: ${(props) => props.theme.space[8]};
  }
`

const StyledGridContainer = styled(Grid)`
  margin-bottom: ${(props) => props.theme.space[14]};

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-bottom: ${(props) => props.theme.space[9]};
  }
`

const StyledTotalGrid = styled(Grid)`
  display: flex;
  align-items: space-between;
  flex-direction: column;
`

const StyledTotalPriceContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`

const StyledTrashIcon = styled(TrashIcon)`
  margin-right: 0.7rem;
  cursor: pointer;
  flex-shrink: 0;
`

const StyledPriceValue = styled(Text)`
  overflow: auto;
`

const ItemList = () => {
  const { values } = useFormikContext<{
    items: { name: string; qty: number; price: number; total: string }[]
  }>()

  return (
    <StyledContainer>
      <StyledTitle>Items List</StyledTitle>
      <FieldArray name="items" validateOnChange={false}>
        {(arrayHelper) => (
          <React.Fragment>
            {values.items.map((item, index) => (
              <StyledGridContainer
                key={index}
                container
                gap="1.6rem"
                rowGap="2.4rem"
              >
                <Grid sm={12} md={5.308}>
                  <TextField label="Item Name" name={`items[${index}].name`} />
                </Grid>
                <Grid sm={2.799} md={1.431}>
                  <TextField
                    type="number"
                    label="Qty."
                    name={`items[${index}].qty`}
                  />
                </Grid>
                <Grid sm={4.0588} md={2.677}>
                  <TextField
                    type="number"
                    label="Price"
                    name={`items[${index}].price`}
                  />
                </Grid>
                <StyledTotalGrid
                  sm={12 - 2.799 - 4.0588}
                  md={12 - 5.308 - 1.431 - 2.677}
                >
                  <InputLabel>Total</InputLabel>
                  <StyledTotalPriceContainer>
                    <StyledPriceValue variant="body2" isMuted isBold>
                      {(item.price * item.qty).toFixed(2)}
                    </StyledPriceValue>
                    <StyledTrashIcon
                      onClick={() => arrayHelper.remove(index)}
                    />
                  </StyledTotalPriceContainer>
                </StyledTotalGrid>
              </StyledGridContainer>
            ))}
            <Button
              fullWidth
              variant="secondary"
              onClick={() =>
                arrayHelper.push({
                  name: '',
                  qty: '',
                  price: '',
                })
              }
            >
              + Add New Item
            </Button>
          </React.Fragment>
        )}
      </FieldArray>
    </StyledContainer>
  )
}

export default ItemList
