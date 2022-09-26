import { StyleSheet } from 'react-native';
import { Link } from "react-router-native";
import Text from '../common/Text';

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 15,
    paddingVertical: 20,
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