import { Container, Stack, Title } from "@mantine/core"
import { QueryClientProvider } from "@tanstack/react-query";

import client from "./client";
import Login from './Login'
import Stopwatch from './Stopwatch'

function App() {
  return (
    <Container>
      <Stack>
        <Title>Hello World</Title>
        <Login />

        <Title>Stopwatch</Title>
        <Stopwatch />
      </Stack>
    </Container>
  );
}

function WrappedApp() {
  return (
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  )
}

export default WrappedApp;
