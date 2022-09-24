import { StyleSheet } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  text: {
    padding: 20,
    paddingTop: Constants.statusBarHeight + 20,
  }
});

const AppBarTab = ({ path, tab }) => {
  return (
    <Link to={path}>
      <Text style={styles.text} color='white' fontSize='subheading' fontWeight='bold'>
        {tab}
      </Text>
    </Link>
)};

export default AppBarTab;