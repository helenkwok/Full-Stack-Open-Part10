import { Formik } from 'formik';
import * as yup from 'yup';
import SigninForm from './SigninForm';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const onSubmit = (values, {setSubmitting, resetForm}) => {
    console.log(values);
    resetForm(initialValues)
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) =>
        <SigninForm onSubmit={handleSubmit} />
      }
    </Formik>
  );
};

export default SignIn;