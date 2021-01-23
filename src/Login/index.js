import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { withRouter } from "react-router-dom"
import { setUserSession, generateToken } from "../Utils/Common";

function Login({ history }) {
  const [uname, setUname] = useState('Luke Skywalker');
  const [password, setPassword] = useState('19BBY');
  const handleSubmit = event => {
    event.preventDefault();
    setUserSession(generateToken(), uname);
    history.push("/");
  };

  return (
    <>
    <Flex width="full" align="center" justifyContent="center" alignItems="center" height="full">
      <Box p={5} w="300px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Welcome back</Heading>
        </Box>
        <Box my={6} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>User name</FormLabel>
              <Input type="text" placeholder="Luke Skywalker" value={uname} onChange={event => setUname(event.currentTarget.value)} />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="19BBY" value={password} onChange={event => setPassword(event.currentTarget.value)} />
            </FormControl>
            <Button width="full" mt={4} type="submit" colorScheme="blue">
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>

    <Global
      styles={{
        '#root': {
          height: "100vh"
        }
      }}
    />
    </>
  )
}

export default withRouter(Login);