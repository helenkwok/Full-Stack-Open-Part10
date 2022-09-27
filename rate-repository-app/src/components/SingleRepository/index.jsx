import { useParams } from 'react-router-native';
import RepositoryItem from '../RepositoryItem';
import useRepository from '../../hooks/useRepository'

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository({ id });

  return repository && <RepositoryItem item={repository} url />;
}

export default SingleRepository