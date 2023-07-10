import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

function useFetch(module) {
  const query = useQuery({
    queryKey: [module],
    queryFn: () => api.get(`/v1/${module}`),
  });
  return {
    ...query,
    items: query.data?.data || [],
  };
}

export default useFetch;
