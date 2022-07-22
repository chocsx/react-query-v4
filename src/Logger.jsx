import { Stack, Text } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const subscribeToLog = () => {
  let log = [];
  let logIndex = 0;

  setInterval(() => {
    log.push(`${logIndex}: ${Date.now()}`);
    logIndex++;
    log = log.slice(-3);
  }, 100)

  return () => log
}

const logListener = subscribeToLog()
const Logger = () => {

  const { data: log } = useQuery(["log"], logListener, {
    refetchInterval: 100,
  })

  return (
    <Stack>
      {log?.map((entry, index) => <Text key={index}>{entry}</Text>)}
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </Stack>
    
  )
}

export default Logger;