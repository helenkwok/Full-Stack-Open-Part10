import { View, Pressable, StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.backgroundColors.appBar
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab path='/' tab={'Repositories'}/>
    <AppBarTab path='/signin' tab={'Sign in'}/>
  </View>;
};

export default AppBar;