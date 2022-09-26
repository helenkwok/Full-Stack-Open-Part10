import { StyleSheet, View, Image } from 'react-native';
import RepositoryItemDescription from './RepositoryItemDescription';
import RepositoryItemStat from './RepositoryItemStat';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  flexContainerA: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  flexContainerB: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  avatar: {
    flexGrow: 0,
    marginRight: 20,
    borderRadius: 4,
    width: 50,
    height: 50,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View testID='repositoryItem' style={styles.container}>
      <View style={styles.flexContainerA}>
        <Image
          style={styles.avatar}
          source={{uri: `${item.ownerAvatarUrl}`}}
        />
        <RepositoryItemDescription
          item={item}
        />
      </View>
      <View style={styles.flexContainerB}>
        <RepositoryItemStat
          stat={item.stargazersCount}
          title='Stars'
        />
        <RepositoryItemStat
          stat={item.forksCount}
          title='Forks'
        />
        <RepositoryItemStat
          stat={item.reviewCount}
          title='Reviews'
        />
        <RepositoryItemStat
          stat={item.ratingAverage}
          title='Rating'
        />
      </View>
    </View>
  )
}

export default RepositoryItem