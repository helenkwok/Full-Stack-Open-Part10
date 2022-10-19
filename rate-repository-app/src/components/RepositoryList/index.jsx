import { useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import { useNavigate } from "react-router-native";
import RepositoryItem from '../RepositoryItem';
import ListHeader from './ListHeader';
import ItemSeparator from '../common/ItemSeparator';
import useRepositories from '../../hooks/useRepositories'

export const RepositoryListContainer = ({ repositories, selectedOrder, setSelectedOrder }) => {
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
      ListHeaderComponent={<ListHeader selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />}
    />
  );
};

const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState('Latest repositories');
  const { repositories } = useRepositories(selectedOrder);

  return <RepositoryListContainer repositories={repositories} selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />;
};

export default RepositoryList;