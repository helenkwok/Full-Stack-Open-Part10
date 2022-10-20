import { FlatList } from 'react-native';
import Review from './Review';
import ItemSeparator from '../common/ItemSeparator';
import useReviews from '../../hooks/useReviews'

const userReview = () => {
  const { me, refetch, fetchMore } = useReviews({
    includeReviews: true,
  });

  const onEndReach = () => {
    fetchMore();
  };

  const reviewNodes = me
    ? me.reviews.edges.map((edge) => edge.node)
    : [];


  console.log(reviewNodes)

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <Review review={item} refetch={refetch} />}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.01}
    />
  )
}


export default userReview;