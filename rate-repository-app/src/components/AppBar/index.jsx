import { View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useApolloClient, useQuery } from '@apollo/client';
import { useNavigate } from "react-router-native";
import AppBarTab from './AppBarTab';
import theme from '../../utils/theme';
import { GET_ME } from '../../graphql/queries';
import useAuthStorage from '../../hooks/useAuthStorage';
import useSignOut from '../../hooks/useSignOut';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    backgroundColor: theme.backgroundColors.appBar
  },
});

const AppBar = () => {
  const onSignOut = useSignOut();

  const { loading, error, data } = useQuery(GET_ME);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab path='/' tab={'Repositories'}/>
        {!loading && data.me?
          <>
            <AppBarTab path='/createreview' tab={'Create a review'} />
            <AppBarTab
              onPress={onSignOut}
              tab='Sign out'
            />
          </>
          :
          <>
            <AppBarTab
              path='/signin'
              tab='Sign in'
            />
            <AppBarTab
              path='/signup'
              tab='Sign up'
            />
          </>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;