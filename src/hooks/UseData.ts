// generic hook for fetching data

import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

interface Props<T> {
  qKey: (string | number)[];
  qFunction: () => Promise<FetchResponse<T>>;
}

const useData = <T>({ qKey, qFunction }: Props<T>) => {
  const { data, error, isLoading } = useQuery<FetchResponse<T>>({
    queryKey: qKey,
    queryFn: qFunction,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return { responseData: data?.results, error, isLoading };
};

export default useData;
