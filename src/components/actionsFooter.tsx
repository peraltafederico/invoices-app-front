import styled from '@emotion/styled'
import Button, { ButtonVariants } from './button'

interface Props {
  actions: {
    buttonVariant: ButtonVariants
    text: string
    onClick?: () => void
  }[]
}

const StyledContainer = styled.div`
  height: 9.1rem;
  background-color: ${(props) => props.theme.colors.all.white};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${(props) => props.theme.shadows[0]};
  padding: 0 ${(props) => props.theme.space[12]};
`

const ActionsFooter = ({ actions }: Props) => {
  return (
    <StyledContainer>
      {actions.map((action) => (
        <Button variant={action.buttonVariant} key={action.text}>
          {action.text}
        </Button>
      ))}
    </StyledContainer>
  )
}

export default ActionsFooter
