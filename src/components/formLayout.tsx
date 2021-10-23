import React from 'react'
import styled from '@emotion/styled'
import { MIN_LARGE_DISPLAY_MEDIA_QUERY } from '../theme/base'

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${(props) => props.theme.sizes[0]};

  ${MIN_LARGE_DISPLAY_MEDIA_QUERY} {
    padding-bottom: 10rem;
  }
`

const FormLayout: React.FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default FormLayout
