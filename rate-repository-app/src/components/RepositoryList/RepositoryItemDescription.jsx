import { StyleSheet, View} from 'react-native';
import Text from '../common/Text';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  flexItemA: {
    padding: 4,
    flexShrink: 1
  },
  flexItemB: {
    padding: 4,
    borderWidth: 0,
    borderRadius: 4,
    overflow: 'hidden', //fix border radius issue on iOS
  },
  text: {
    paddingBottom: 8,
  }
});

const RepositoryItemDescription = ({ item }) => {
  return (
    <View style={styles.flexItemA}>
      <Text style={styles.text} fontSize='subheading' fontWeight='bold'>
        {item.fullName}
      </Text>
      <Text style={styles.text} color='textSecondary'>
        {item.description}
      </Text>
      <View style={styles.flexContainer}>
        <Text style={styles.flexItemB} backgroundColor='primary' color='white'>
          {item.language}
        </Text>
      </View>
    </View>
  )
}

export default RepositoryItemDescription