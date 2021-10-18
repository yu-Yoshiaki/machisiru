import useSWR from "swr";

export const useSWRState = (key: string, fallback?: any) => {
  const { data, mutate } = useSWR(key, { fallback });

  return [data, mutate];
};
