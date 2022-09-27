import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-native";
import SignInForm from './SignInForm';
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

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) =>
        <SignInForm onSubmit={handleSubmit} />
      }
    </Formik>
  );
}

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
  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;