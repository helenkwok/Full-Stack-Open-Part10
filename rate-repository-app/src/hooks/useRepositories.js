import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (selectedOrder) => {
  let orderBy, orderDirection;

  switch (selectedOrder) {
    case "Highest rated repositories":
      orderBy = "RATING_AVERAGE";
      orderDirection = "DESC";
      break;

    case "Lowest rated repositories":
      orderBy = "RATING_AVERAGE";
      orderDirection = "ASC";
      break;

    default:
      orderBy = "CREATED_AT";
      orderDirection = "DESC";
      break;
  }

  const { data, ...result } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy,
      orderDirection,
    },
    fetchPolicy: 'cache-and-network',
  });

  return { repositories: data ? data.repositories : undefined, ...result };
};

export default useRepositories;