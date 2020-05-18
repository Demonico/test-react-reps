import React, { Fragment, useEffect, useState } from 'react'
import { ErrorMessage, Field, Form, useFormikContext } from 'formik'
import { Alert, Button, Col, FormGroup, Label, Row } from 'reactstrap'

export default function SearchFields(): JSX.Element {
  const [isDisabled, setIsDisabled] = useState(true)
  const { errors } = useFormikContext()

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [errors])

  return (
    <Fragment>
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <Label for="repType">Representative Type</Label>
              <Field className="form-control" name="repType" />
              <ErrorMessage
                name="repType"
                render={(msg) => <Alert color="danger">{msg}</Alert>}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="state">State</Label>
              <Field className="form-control" name="state" />
              <ErrorMessage
                name="state"
                render={(msg) => <Alert color="danger">{msg}</Alert>}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col className="text-right">
            <Button color="primary" type="submit" disabled={isDisabled}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  )
}
