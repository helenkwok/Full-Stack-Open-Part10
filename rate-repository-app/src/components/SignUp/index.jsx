import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-native";
import SignUpForm from './SignUpForm';
import useSignUp from '../../hooks/useSignUp'
import useSignIn from '../../hooks/useSignIn'

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Length between 1 and 30')
    .max(30, 'Length between 1 and 30')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Length between 5 and 50')
    .max(50, 'Length between 5 and 50')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is required'),
});

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) =>
        <SignUpForm onSubmit={handleSubmit} />
      }
    </Formik>
  );
}

const SignUp = () => {
  const navigate = useNavigate();
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();

  const onSubmit = async (values, {setSubmitting, resetForm}) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
    } catch (e) {
      console.log(e);
    };
    resetForm(initialValues);

    try {
      await signIn({ username, password });
    } catch (e) {
      console.log(e);
    };

    setSubmitting(false);
    navigate('/');
  };
  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;