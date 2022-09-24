import { View, ScrollView, StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.backgroundColors.appBar
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab path='/' tab={'Repositories'}/>
        <AppBarTab path='/signin' tab={'Sign in'}/>
      </ScrollView>
    </View>
  );
};

export default AppBar;