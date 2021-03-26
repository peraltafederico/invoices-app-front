import { Form, Formik } from 'formik'
import { PageProps } from 'gatsby'
import { noop } from 'lodash'
import React from 'react'
import TextField from '../components/input'

const Edit: React.FC<PageProps> = () => {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      onSubmit={() => noop()}
    >
      {() => (
        <Form>
          <TextField name="name" />
        </Form>
      )}
    </Formik>
  )
}

export default Edit
