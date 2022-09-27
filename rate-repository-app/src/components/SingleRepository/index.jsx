import { FlatList, View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import RepositoryItem from '../RepositoryItem';
import ReviewItem from '../ReviewItem';
import ItemSeparator from '../common/ItemSeparator';
import useRepository from '../../hooks/useRepository'

const RepositoryInfo = ({ repository }) => {
  // Repository's information implemented in the previous exercise
  return repository && <>
    <RepositoryItem item={repository} url />
    <ItemSeparator />
  </>;
};

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository({ id });

  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
}

export default SingleRepository