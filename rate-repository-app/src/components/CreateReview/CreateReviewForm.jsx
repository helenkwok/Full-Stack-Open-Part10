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

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput testID="ownerName" style={styles.input} name="ownerName" placeholder='Repository owner name'/>
      <FormikTextInput testID="repositoryName" style={styles.input} name="repositoryName" placeholder='Repository name'/>
      <FormikTextInput testID="rating" style={styles.input} name="rating" placeholder='Rating between 0 and 100'/>
      <FormikTextInput testID="text" style={styles.input} name="text" placeholder='Review' multiline />
      <Pressable testID="signIn" onPress={onSubmit}>
        <Text style={styles.button} color='white' backgroundColor='primary' fontWeight='bold' >Create a review</Text>
      </Pressable>
    </View>
  )
}

export default CreateReviewForm