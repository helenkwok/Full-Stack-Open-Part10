import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  text: {
    padding: 20,
    paddingTop: Constants.statusBarHeight + 20,
  }
});

const AppBarTab = ({ tab }) => {
  return (
    <Text style={styles.text} backgroundColor='appBar' color='white' fontSize='subheading' fontWeight='bold'>
      {tab}
    </Text>
)};

export default AppBarTab;