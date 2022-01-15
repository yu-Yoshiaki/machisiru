import useSWR from "swr";

export const useSWRState = (key: string, fallbackData?: any) => {
  const { data, mutate } = useSWR(key, null, { fallbackData });

  return [data, mutate];
};
