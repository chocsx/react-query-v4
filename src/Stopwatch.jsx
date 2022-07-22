import { Text } from "@mantine/core"
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";

function createStopwatch() {
  const startTime = Date.now();
  return () => {
    return Math.round((Date.now() - startTime) / 1000);
  }
}

const Stopwatch = () => {
  const timerRef = useRef(createStopwatch());
  const { data: time } = useQuery(["time"], timerRef.current, {
    refetchInterval: 100,
  })

  return (
    <Text>Time {time}</Text>
  )
}

export default Stopwatch