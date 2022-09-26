import { StyleSheet, View, Pressable } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    //alignItems: 'center',
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#586069',
  },
  button: {
    padding: 8,
    borderRadius: 4,
    overflow: 'hidden',
    textAlign: 'center',
  }
});

const SignIn = () => {
  const onSubmit = (values, {setSubmitting, resetForm}) => {
    console.log(values);
    resetForm(initialValues)

    setSubmitting(false);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) =>
      <View style={styles.container}>
        <FormikTextInput style={styles.input} name="username" placeholder='Username'/>
        <FormikTextInput style={styles.input} name="password" placeholder='Password'secureTextEntry />
        <Pressable onPress={handleSubmit}>
          <Text style={styles.button} color='white' backgroundColor='primary' fontWeight='bold'>Sign in</Text>
        </Pressable>
        </View>
      }
    </Formik>
  );
};

export default SignIn;