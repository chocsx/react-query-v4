import { Text } from "@mantine/core"
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const fetchLogin = () => fetch("/login.json").then((resp) => resp.json());
const fetchUser = (id) => fetch(`/${id}.json`).then((resp) => resp.json());

const login = async () => {
  const loginResp = await fetchLogin();
  return await fetchUser(loginResp.id);
}

const Login = () => {
  const {isLoading, error, data: user, isFetching} = useQuery(["login"], login)

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <Text>{JSON.stringify(user)}</Text>
      <div>{isFetching ? "Updating..." : ""}</div>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </div>
    
  );
};

export default Login;