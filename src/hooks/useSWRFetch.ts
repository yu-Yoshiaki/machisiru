import { fetcher } from "src/libs/fetcher";
import useSWR from "swr";

export const useSWRFetch = (url: string) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoding: !error && !data,
    isEmpty: data && data.length === 0,
  };
};
