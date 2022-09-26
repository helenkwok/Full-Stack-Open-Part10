import { Formik } from 'formik';
import * as yup from 'yup';
import SigninForm from './SigninForm';
import useSignIn from '../../hooks/useSignIn'

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
  const [signIn] = useSignIn();

  const onSubmit = async (values, {setSubmitting, resetForm}) => {
    const { username, password } = values;

    try {
      const { data }  = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    ;
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