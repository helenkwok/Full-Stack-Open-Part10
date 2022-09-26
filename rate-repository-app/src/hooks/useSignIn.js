import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN, {
    onError: error => {
      console.error(error);
    }
  });

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const tokenResponse = await mutate({
      variables: {
        credentials: {
          username,
          password,
        }
      }
    })
    return tokenResponse
  };

  return [signIn, result];
};

export default useSignIn;