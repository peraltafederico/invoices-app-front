import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { InvoiceStatus } from '../interfaces'
import Text from './text'

interface Props {
  type: InvoiceStatus
}

const StyledWrapper = styled.div<{ type: InvoiceStatus }>`
  width: 10.4rem;
  height: 4rem;
  border-radius: ${(props) => props.theme.radii[1]};
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.type === 'paid' &&
    css`
      color: rgba(51, 214, 159);
      background: rgba(51, 214, 159, 0.06);
    `};

  ${(props) =>
    props.type === 'pending' &&
    css`
      color: rgb(255, 143, 0);
      background: rgb(255, 143, 0, 0.06);
    `};

  ${(props) =>
    props.type === 'draft' &&
    css`
      color: rgb(55, 59, 83);
      background: rgb(55, 59, 83, 0.06);
    `};
`

const StyledText = styled(Text)`
  justify-content: center;
  margin-left: ${(props) => props.theme.space[4]};
`

const StyledCircle = styled.div<{ type: InvoiceStatus }>`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;

  ${(props) =>
    props.type === 'paid' &&
    css`
      background: rgba(51, 214, 159);
    `};

  ${(props) =>
    props.type === 'pending' &&
    css`
      background: rgb(255, 143, 0);
    `};

  ${(props) =>
    props.type === 'draft' &&
    css`
      background: rgb(55, 59, 83);
    `};
`

const StyledTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Status: React.FC<Props> = ({ type }: Props) => {
  return (
    <StyledWrapper type={type}>
      <StyledTextContainer>
        <StyledCircle type={type} />
        <StyledText variant="body2" isBold>
          {type === 'paid' && 'Paid'}
          {type === 'draft' && 'Draft'}
          {type === 'pending' && 'Pending'}
        </StyledText>
      </StyledTextContainer>
    </StyledWrapper>
  )
}

export default Status
