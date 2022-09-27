import { FlatList, View, Pressable, StyleSheet } from 'react-native';
import { useNavigate } from "react-router-native";
import RepositoryItem from '../RepositoryItem';
import ItemSeparator from '../common/ItemSeparator';
import useRepositories from '../../hooks/useRepositories'

export const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigate(`/repository/${item.id}`)}
        >
          <RepositoryItem item={item} />
        </Pressable>
      )}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.id}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;