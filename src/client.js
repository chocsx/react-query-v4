import { QueryClient, QueryCache } from "@tanstack/react-query";

export default new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.log('ERROR: ', error);
    },
  }),
});