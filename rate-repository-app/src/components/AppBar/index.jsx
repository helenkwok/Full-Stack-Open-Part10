import { View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useQuery } from '@apollo/client';
import AppBarTab from './AppBarTab';
import theme from '../../utils/theme';
import { GET_ME } from '../../graphql/queries';
import SignOut from './SignOut';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    backgroundColor: theme.backgroundColors.appBar
  },
});

const AppBar = () => {
  const { loading, error, data } = useQuery(GET_ME);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab path='/' tab={'Repositories'}/>
        {!loading && data.me?
          <SignOut />
        :
          <AppBarTab
            path='/signin'
            tab='Sign in'
          />
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;