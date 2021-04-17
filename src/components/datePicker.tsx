import styled from '@emotion/styled'
import { noop } from 'lodash'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const StyledWrapper = styled.div`
  .react-datepicker {
    border: none;
    border-radius: ${(props) => props.theme.radii[0]};
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
    padding: 0 11.5px 24px 11.5px;

    &__header {
      height: 6.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: ${(props) => props.theme.colors.all.white};
    }

    &__current-month {
      font-family: ${(props) => props.theme.fonts[0]};
      font-size: ${(props) => props.theme.fontSizes[1]};
    }

    &__month {
      /* margin: 11.5px; */
      margin: 0;
    }

    &__day-names {
      display: none;
    }

    &__day {
      font-family: ${(props) => props.theme.fonts[0]};
      font-size: ${(props) => props.theme.fontSizes[1]};
      font-weight: ${(props) => props.theme.fontWeights[1]};
      width: 16px;
      height: 15px;
      margin: 0.8rem 0.75rem;

      &:hover,
      &--selected,
      &--keyboard-selected {
        background-color: ${(props) => props.theme.colors.all.white};
        color: ${(props) => props.theme.colors.secondary};
      }
    }

    &__navigation--next,
    &__navigation--previous {
      top: 32.5px;
      transform: translateY(-50%);
    }
  }
`

const DatePicker = () => {
  return (
    <StyledWrapper>
      <ReactDatePicker
        selected={new Date()}
        onChange={noop}
        wrapperClassName="wrapper"
        calendarClassName="calendar"
        previousMonthButtonLabel="prev"
        nextMonthButtonLabel="next"
        showPopperArrow={false}
      />
    </StyledWrapper>
  )
}

export default DatePicker
