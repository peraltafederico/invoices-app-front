import styled from '@emotion/styled'
import reactStringReplace from 'react-string-replace'
import { MIN_TABLET_MEDIA_QUERY } from '../theme/base'

interface Props {
  text: string
  className?: string
}

const StyledTitle = styled.h2`
  font-size: 2.4rem;
  line-height: 1.33;
  margin-bottom: ${(props) => props.theme.space[12]};

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-bottom: ${(props) => props.theme.space[14]};
  }
`

const StyledId = styled.span`
  color: ${(props) => props.theme.colors.muted};
`

const FormTitle = ({ text, className }: Props) => {
  return (
    <StyledTitle className={className}>
      {reactStringReplace(text, /(#)/g, (hash, i) => (
        <StyledId key={i}>{hash}</StyledId>
      ))}
    </StyledTitle>
  )
}

export default FormTitle
