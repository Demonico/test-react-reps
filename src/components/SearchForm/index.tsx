import React, { Fragment } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import SearchFields from './SearchFields'

// interface Props {}

const initialValues = {
  repType: '',
  state: '',
}

const initialErrors = {
  repType: 'Please select a Representative Type.',
  state: 'Please select a State.',
}

const searchSchema = Yup.object().shape({
  repType: Yup.string().required('Please select a Representative Type.'),
  state: Yup.string().required('Please select a State.'),
})

export default function index(): JSX.Element {
  return (
    <Fragment>
      <Formik
        initialErrors={initialErrors}
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={searchSchema}
      >
        {() => <SearchFields />}
      </Formik>
    </Fragment>
  )
}
