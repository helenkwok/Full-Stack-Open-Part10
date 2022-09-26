import { Pressable, StyleSheet } from 'react-native';
import { Link } from "react-router-native";
import Text from '../common/Text';

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  }
});

const AppBarTab = ({ path, tab, ...props }) => {
  const content = (
    <Text style={styles.text} color='white' fontSize='subheading' fontWeight='bold'>
      {tab}
    </Text>
  );

  return path ?
    <Link to={path} {...props}>
      {content}
    </Link>
  :
    <Pressable {...props}>{content}</Pressable>
};

export default AppBarTab;