import { Text, TextInput, Stack } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

import client from "./client";

const useRQSGlobalState = (key, initialValue) => [
  useQuery(["sharedText"], () => initialValue, {
    enabled: false,
    initialValue,
  }).data,
  (value) => client.setQueryData(key, value),
];

const StateEditor = () => {
  const [value, setValue] = useRQSGlobalState(["sharedText"], "")
  
  return (
    <TextInput value={value} 
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

const StateViewer = () => {
  const [value] = useRQSGlobalState(["sharedText"], "")
  return (
    <Text>{value}</Text>
  )
}

const GlobalState = () => {
  return (
    <Stack>
      <StateEditor />
      <StateViewer />
    </Stack>
  )
}

export default GlobalState