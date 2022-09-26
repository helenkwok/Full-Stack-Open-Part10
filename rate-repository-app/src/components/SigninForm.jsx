import { StyleSheet, View, Pressable } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
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

const SigninForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.input} name="username" placeholder='Username'/>
      <FormikTextInput style={styles.input} name="password" placeholder='Password'secureTextEntry />
      <Pressable onPress={onSubmit}>
        <Text style={styles.button} color='white' backgroundColor='primary' fontWeight='bold'>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SigninForm