import { useMutation } from '@apollo/client';
import { SIGN_UP} from '../graphql/mutations';

const useSignUp = () => {

  const [mutate, result] = useMutation(SIGN_UP, {
    onError: error => {
      console.error(error);
    }
  });

  const signUp = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const signUpwResponse = await mutate({
      variables: {
        user: {
          username,
          password,
        }
      }
    })

    return signUpwResponse
  };

  return [signUp, result];
};

export default useSignUp;