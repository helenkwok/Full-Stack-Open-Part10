import { StyleSheet, View, Pressable } from 'react-native';
import FormikTextInput from '../common/FormikTextInput';
import Text from '../common/Text';

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

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput testID="username" style={styles.input} name="username" placeholder='Username'/>
      <FormikTextInput testID="password" style={styles.input} name="password" placeholder='Password'secureTextEntry />
      <Pressable testID="signIn" onPress={onSubmit}>
        <Text style={styles.button} color='white' backgroundColor='primary' fontWeight='bold'>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignInForm