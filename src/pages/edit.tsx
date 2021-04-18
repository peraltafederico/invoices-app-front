import styled from '@emotion/styled'
import { Formik } from 'formik'
import { PageProps } from 'gatsby'
import { noop } from 'lodash'
import React from 'react'
import * as Yup from 'yup'
import GoBack from '../components/goBack'
import InvoiceForm from '../components/invoiceForm'

const StyledId = styled.span`
  color: ${(props) => props.theme.colors.muted};
`

const StyledTitle = styled.h1`
  margin-bottom: ${(props) => props.theme.space[12]};
`

const Edit: React.FC<PageProps> = () => {
  return (
    <div>
      <GoBack />
      <StyledTitle>
        Edit <StyledId>#</StyledId>XM9141
      </StyledTitle>

      <Formik
        initialValues={{
          streetAddress: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
          clientName: '',
          clientEmail: '',
          clientStreetAddress: '',
          clientCity: '',
          clientPostCode: '',
          clientCountry: '',
          invoiceDate: '',
          paymentTems: '',
          projectDescription: '',
          items: [
            {
              name: '1',
              qty: '1',
              price: '1',
              total: '1',
            },
            {
              name: '2',
              qty: '2',
              price: '2',
              total: '2',
            },
          ],
        }}
        onSubmit={() => noop()}
        validationSchema={Yup.object({
          name: Yup.string().required(),
          select: Yup.string().required(),
          datepicker: Yup.string().required(),
        })}
      >
        <InvoiceForm />
      </Formik>
    </div>
  )
}

export default Edit
