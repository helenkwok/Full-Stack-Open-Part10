import { View,  StyleSheet, Pressable, Alert } from 'react-native';
import { openURL } from 'expo-linking';
import { format, parseISO } from 'date-fns'
import useDeleteReview from '../../hooks/useDeleteReview';
import Text from '../common/Text';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  reviewContainer: {
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
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderWidth: 0,
    borderRadius: 4,
    overflow: 'hidden',
  },
})

const Review= ({ review, refetch }) => {
  const [deleteReview] = useDeleteReview();

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "CANCEL",
          onPress: () => {},
          style: "cancel"
        },
        { text: "DELETE", onPress: () => {
          deleteReview(review.id);
          refetch();
        } }
      ]
    );

  return (
    <View style={styles.container}>
      <View>
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
      <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => openURL(review.repository.url)}
          >
            <Text
                style={styles.button}
                backgroundColor='primary'
                color='white'
                fontWeight='bold'
              >
                View repository
              </Text>
          </Pressable>
          <Pressable
            onPress={createTwoButtonAlert}
          >
            <Text
                style={styles.button}
                backgroundColor='secondary'
                color='white'
                fontWeight='bold'
              >
                Delete review
              </Text>
          </Pressable>
        </View>
    </View>
  );
}

export default Review;