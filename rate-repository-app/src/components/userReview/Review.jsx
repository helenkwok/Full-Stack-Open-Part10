import { View,  StyleSheet } from 'react-native';
import { format, parseISO } from 'date-fns'
import Text from '../common/Text';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rating: {
    marginRight: 8,
    width: theme.icon.width,
    height: theme.icon.height,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: theme.icon.width / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    flexShrink: 1
  },
})

const Review= ({ review }) => {
  // Single review item
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text color='primary' fontWeight='bold'>
          {review.rating}
        </Text>
      </View>
      <View style={styles.details}>
        <Text fontWeight='bold'>
          {review.repository.fullName}
        </Text>
        <Text color='textSecondary'>
          {format(parseISO(review.createdAt), 'dd.MM.yyyy')}
        </Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
}

export default Review