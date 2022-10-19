import { useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import { memo } from 'react'
import { useNavigate } from "react-router-native";
import { useDebounce } from 'use-debounce';
import RepositoryItem from '../RepositoryItem';
import ListHeader from './ListHeader';
import ItemSeparator from '../common/ItemSeparator';
import useRepositories from '../../hooks/useRepositories'

export const RepositoryListContainer = memo(({ repositories, keyword, setKeyword, selectedOrder, setSelectedOrder }) => {
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
      ListHeaderComponent={<ListHeader keyword={keyword} setKeyword={setKeyword} selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />}
    />
  );
});

const RepositoryList = () => {
  const [keyword, setKeyword] = useState('')
  const [selectedOrder, setSelectedOrder] = useState('Latest repositories');
  const [value] = useDebounce(keyword, 500);
  const { repositories } = useRepositories(value, selectedOrder);

  return <RepositoryListContainer repositories={repositories} keyword={keyword} setKeyword={setKeyword} selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />;
};

export default RepositoryList;