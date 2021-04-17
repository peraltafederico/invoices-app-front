import { Form, Formik } from 'formik'
import { PageProps } from 'gatsby'
import { noop } from 'lodash'
import React from 'react'
import * as Yup from 'yup'
import DatePicker from '../components/datePicker'
import Dropdown from '../components/dropdown'
import TextField from '../components/textField'

const Edit: React.FC<PageProps> = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        select: '',
      }}
      onSubmit={() => noop()}
      validationSchema={Yup.object({
        name: Yup.string().required(),
        select: Yup.string().required(),
      })}
    >
      {() => (
        <Form>
          <TextField name="name" label="text" />
          <Dropdown
            options={[
              { label: 'Net 30 Days', value: '1' },
              { label: 'Net 1 Days', value: '2' },
              { label: 'Net 14 Days', value: '3' },
              { label: 'Net 30 Days', value: '4' },
            ]}
            name="select"
            label="select"
          />
          <DatePicker />
        </Form>
      )}
    </Formik>
  )
}

export default Edit
