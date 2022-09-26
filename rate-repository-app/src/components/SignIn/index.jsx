import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-native";
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
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const onSubmit = async (values, {setSubmitting, resetForm}) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
    ;
    resetForm(initialValues)
    setSubmitting(false);
    navigate('/')
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