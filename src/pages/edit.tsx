import { Form, Formik } from 'formik'
import { PageProps } from 'gatsby'
import { noop } from 'lodash'
import React from 'react'
import * as Yup from 'yup'
import TextField from '../components/textField'

const Edit: React.FC<PageProps> = () => {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      onSubmit={() => noop()}
      validationSchema={Yup.object({
        name: Yup.string().required(),
      })}
    >
      {() => (
        <Form>
          <TextField name="name" label="label" />
        </Form>
      )}
    </Formik>
  )
}

export default Edit
