import styled from '@emotion/styled'
import { ErrorMessage, FieldHookConfig, useField } from 'formik'
import Select from 'react-select'
import { css, Theme } from '@emotion/react'
import ArrowDown from '../assets/arrow-down.inline.svg'
import InputLabel from './inputLabel'

interface Option {
  value: string
  label: string
}

type Props = {
  label: string
  options: Option[]
  className?: string
} & FieldHookConfig<string>

const TextSelectStlyes = (props: { theme: Theme }) => css`
  font-weight: ${props.theme.fontWeights[1]};
  font-size: ${props.theme.fontSizes[1]};
  line-height: ${props.theme.lineHeights[2]};
  letter-spacing: ${props.theme.letterSpacings[3]};
  color: ${props.theme.colors.text} !important;
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
      box-shadow: none;

      ${(props) =>
        props.theme.mode === 'light' &&
        css`
          border-color: ${props.theme.colors.all.violet.lavenderWeb};
          background-color: ${props.theme.colors.all.white};
        `}

      ${(props) =>
        props.theme.mode === 'dark' &&
        css`
          background-color: ${props.theme.colors.primary};
          border-color: ${props.theme.colors.all.darkBlue.spaceCadet[200]};
        `}

      &--menu-is-open, &--is-focused, &:hover {
        border-color: ${(props) => props.theme.colors.all.violet.mediumPurple};
      }
    }

    &__indicators {
      padding: ${(props) => props.theme.space[8]};
    }

    &__menu {
      border-radius: ${(props) => props.theme.radii[0]};

      ${(props) =>
        props.theme.mode === 'light' &&
        css`
          background-color: ${props.theme.colors.all.white};
          box-shadow: ${props.theme.shadows[1]};
        `}

      ${(props) =>
        props.theme.mode === 'dark' &&
        css`
          background-color: ${props.theme.colors.all.darkBlue.spaceCadet[200]};
          box-shadow: ${props.theme.shadows[2]};
        `}
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
      padding: 0 ${(props) => props.theme.space[10]};

      ${TextSelectStlyes}

      ${(props) =>
        props.theme.mode === 'dark' &&
        css`
          color: ${props.theme.colors.muted} !important;
        `}

      &--is-selected,
      &--is-focused,
      &:active {
        ${(props) =>
          props.theme.mode === 'light' &&
          css`
            background-color: ${props.theme.colors.all.white};
          `}

        ${(props) =>
          props.theme.mode === 'dark' &&
          css`
            background-color: ${props.theme.colors.all.darkBlue
              .spaceCadet[200]};
          `}
      }

      &--is-focused {
        color: ${(props) =>
          props.theme.colors.all.violet.mediumPurple} !important;
      }

      &:not(:last-child) {
        border-bottom: 0.1rem solid;

        ${(props) =>
          props.theme.mode === 'light' &&
          css`
            border-color: ${props.theme.colors.all.violet.lavenderWeb};
          `}

        ${(props) =>
          props.theme.mode === 'dark' &&
          css`
            border-color: ${props.theme.colors.primary};
          `}
      }
    }

    &__value-container,
    &__single-value {
      ${TextSelectStlyes}
    }

    &__value-container {
      padding: 0 ${(props) => props.theme.space[10]};
    }

    &__input {
      input {
        ${TextSelectStlyes}
      }
    }
  }
`

const Dropdown = ({
  label,
  id,
  name,
  options,
  value,
  className,
  ...props
}: Props) => {
  const [field, , meta] = useField({ name, ...props })

  const selected = options.find((option) => option.value === field.value)

  return (
    <div className={className}>
      <InputLabel htmlFor={id || name}>{label}</InputLabel>
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
    </div>
  )
}

export default Dropdown
