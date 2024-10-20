import { useQuery } from '@apollo/client';
import { GET_BOOK } from '../queries/Get_Book'; // adjust the path if needed


export default function BookComponent() {
  const { loading, error, data } = useQuery(GET_BOOK);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return <div>{data.bookById.name}</div>;
};