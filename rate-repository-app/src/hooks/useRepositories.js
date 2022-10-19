import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (value, selectedOrder) => {
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

  console.log(value)

  const { data, ...result } = useQuery(GET_REPOSITORIES, {
    variables: {
      searchKeyword: value,
      orderBy,
      orderDirection,
    },
    fetchPolicy: 'cache-and-network',
  });

  return { repositories: data ? data.repositories : undefined, ...result };
};

export default useRepositories;