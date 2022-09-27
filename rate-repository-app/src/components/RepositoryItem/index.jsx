import { StyleSheet, View, Image, Pressable } from 'react-native';
import { openURL } from 'expo-linking';
import Text from '../common/Text';
import theme from '../../utils/theme';
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
    width: theme.icon.width,
    height: theme.icon.height,
  },
  button: {
    marginTop: 15,
    padding: 15,
    textAlign: 'center',
    borderWidth: 0,
    borderRadius: 4,
    overflow: 'hidden', //fix border radius issue on iOS
  },
});

const RepositoryItem = ({ item, url }) => {
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
      {url &&
        <Pressable
          onPress={() => openURL(item.url)}
        >
          <Text
            style={styles.button}
            backgroundColor='primary'
            color='white'
            fontWeight='bold'
          >
            Open in GitHub
          </Text>
        </Pressable>
      }
    </View>
  )
}

export default RepositoryItem