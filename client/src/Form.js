//ThIS IS A CODE STASH ONLY, so far. Hopefully Formik skeleton will help build a better validation system with the form used for validation..

import React, { Component } from 'react'
import TextInput from './TextInputFormik'
import { Formik, Form, Field } from 'formik'
import Yup from 'yup'
import isEmpty from 'lodash/isEmpty'

export default class Form extends Component {
  render() {
    return (
      <div className="addRegistrationForm">
        <Formik
          validationSchema={Yup.object().shape({
            first_name: Yup.string()
              .min(3, 'Title must be at least 3 characters long.')
              .required('Title is required.'),
          })}
          initialValues={{
            title: 'asdf',
            releaseYear: '',
            genre: '',
            price: '12',
          }}
          onSubmit={(values, actions) => {
            // this could also easily use props or other
            // local state to alter the behavior if needed
            // this.props.sendValuesToServer(values)

            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
          render={({ values, touched, errors, dirty, isSubmitting }) => (
            <Form>
              <Field
                type="text"
                name="title"
                label="Title"
                component={TextInput}
              />
              <Field
                type="text"
                name="releaseYear"
                label="Release Year"
                component={TextInput}
              />
              <Field
                type="text"
                name="genre"
                label="Genre"
                component={TextInput}
              />
              <Field
                type="text"
                name="price"
                label="Price"
                component={TextInput}
              />
              <button
                type="submit"
                className="btn btn-default"
                disabled={isSubmitting || !isEmpty(errors) || !dirty}
              >
                Add Game
              </button>
            </Form>
          )}
        />
      </div>
    )
  }
}
