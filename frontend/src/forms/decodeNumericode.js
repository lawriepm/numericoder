import { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Api from 'api';
import { useMessageContext, useLocalStorage } from 'hooks';
import settings from 'settings';

const schema = Yup.object({
  numericode: Yup
    .string()
    .required()
    .matches(/^[0-9\s]*$/, { message: settings.ERRORS.NUMERICODE_VALIDATION_ERROR }),
});

export default function DecodeNumericode() {
  const api = new Api();
  const context = useMessageContext();
  const [getLocalStorage, setLocalStorage] = useLocalStorage('numericode');
  const [submissionError, setSubmissionError] = useState(null);

  const handleSubmit = (data, actions) => {
    actions.setSubmitting(true);
    api.get('decode', data)
      .then(({ message }) => {
        context.setMessage(message);
      })
      .catch((err) => {
        setSubmissionError(err.message || settings.ERRORS.GENERIC_FORM_ERROR);
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  };

  console.log(Formik);

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          numericode: getLocalStorage(''),
        }}
      >
        {({
          handleSubmit: onSubmit,
          errors,
          isSubmitting,
          values,
          setFieldValue,
        }) => (
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Enter numericode"
                value={values.numericode}
                onChange={(e) => {
                  setFieldValue('numericode', e.target.value);
                  setLocalStorage(e.target.value);
                }}
              />
              {errors.numericode && <small className="text-danger">{errors.numericode}</small>}
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button type="submit">
                {isSubmitting ? (
                  <Spinner animation="grow" />
                ) : (
                  <>Decode</>
                )}
              </Button>
            </div>
            {submissionError && (
              <div className="text-center w-100">
                <small className="text-danger">{submissionError}</small>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
