import styled from '@emotion/styled'
import { ErrorMessage, FieldHookConfig, useField } from 'formik'
import Select from 'react-select'
import { css, Theme } from '@emotion/react'
import ArrowDown from '../assets/arrow-down.inline.svg'
import WithLabel from './withLabel'

interface Option {
  value: string
  label: string
}

type Props = {
  label: string
  options: Option[]
} & FieldHookConfig<string>

const TextSelectStlyes = (props: { theme: Theme }) => css`
  color: ${props.theme.colors.text};
  font-weight: ${props.theme.fontWeights[1]};
  font-size: ${props.theme.fontSizes[1]};
  line-height: ${props.theme.lineHeights[2]};
  letter-spacing: ${props.theme.letterSpacings[3]};
`

const StyledErrorMessage = styled.div`
  margin-top: ${(props) => props.theme.space[5]};
  color: ${(props) => props.theme.colors.all.red.redSalsa};
`

const StyledSelectContainer = styled.div`
  .select {
    &__placeholder {
      font-weight: ${(props) => props.theme.fontWeights[0]};
      color: #858bb2;
    }

    &__control {
      height: 4.8rem;
      border-radius: ${(props) => props.theme.radii[4]};
      background-color: ${(props) => props.theme.colors.all.white};
      box-shadow: none;
      border-color: ${(props) => props.theme.colors.all.violet.lavenderWeb};

      &--menu-is-open {
        border-color: ${(props) => props.theme.colors.all.violet.mediumPurple};
      }

      &--is-focused {
        border-color: ${(props) => props.theme.colors.all.violet.mediumPurple};
      }

      &:hover {
        border-color: ${(props) => props.theme.colors.all.violet.mediumPurple};
      }
    }

    &__indicators {
      padding: ${(props) => props.theme.space[8]};
    }

    &__menu {
      background-color: ${(props) => props.theme.colors.all.white};
      box-shadow: ${(props) => props.theme.shadows[1]};
      border-radius: ${(props) => props.theme.radii[0]};
    }

    &__menu-list {
      border-radius: ${(props) => props.theme.radii[0]};
      padding: 0;
    }

    &__option {
      height: 4.8rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      border-bottom: 0.1rem solid
        ${(props) => props.theme.colors.all.violet.lavenderWeb};
      padding: 0 ${(props) => props.theme.space[10]};
      ${TextSelectStlyes}

      &--is-selected,
      &--is-focused,
      &:active {
        background: ${(props) => props.theme.colors.all.white};
      }

      &--is-focused {
        color: ${(props) => props.theme.colors.all.violet.mediumPurple};
      }
    }

    &__value-container {
      ${TextSelectStlyes}
      padding: 0 ${(props) => props.theme.space[10]};
    }

    &__input {
      input {
        ${TextSelectStlyes}
      }
    }
  }
`

const Dropdown = ({ label, id, name, options, value, ...props }: Props) => {
  const [field, , meta] = useField({ name, ...props })

  const selected = options.find((option) => option.value === field.value)

  return (
    <WithLabel label={label} id={id || name}>
      <StyledSelectContainer>
        <Select<Option>
          options={options}
          value={selected}
          onChange={(option) => meta.setValue(option?.value || '')}
          classNamePrefix="select"
          components={{
            IndicatorSeparator: null,
            DropdownIndicator: () => <ArrowDown />,
          }}
        />
      </StyledSelectContainer>
      <ErrorMessage component={StyledErrorMessage} name={name} />
    </WithLabel>
  )
}

export default Dropdown
