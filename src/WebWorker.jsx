import { useState } from "react";
import { Group, TextInput, Button, Text } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";


import worker from "workerize-loader!./worker" // eslint-disable-line import/no-webpack-loader-syntax
const workerInstance = worker();

const multiplyNumbers = async (args) =>
  new Promise((resolve) => {
    workerInstance.addEventListener("message", (message) => {
      if (message.data.type === "result") {
        resolve(message.data.result);
      }
    });
    workerInstance.multiplyNumbers(args.a, args.b);
  })

const WebWorker = () => {
  const { data: value, mutate } = useMutation(
    ["multiplyNumbers"],
    multiplyNumbers
  )

  const [valueA, setValueA] = useState("10");
  const [valueB, setValueB] = useState("20");

  return (

    <Group>
      <TextInput
        value={valueA}
        onChange={(e) => setValueA(e.target.value)}
      />
      <TextInput
        value={valueB}
        onChange={(e) => setValueB(e.target.value)}
      />
      <Button
        onClick={() => mutate({ a: +valueA, b: +valueB })}>Multiply</Button>
      <Text>{value}</Text>

    </Group>
  )
}

export default WebWorker