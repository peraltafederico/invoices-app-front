import styled from '@emotion/styled'

const StyledWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`

interface Props {
  onClick: () => void
}

const Backdrop: React.FC<Props> = ({ onClick }) => (
  <StyledWrapper onClick={onClick} />
)

export default Backdrop
