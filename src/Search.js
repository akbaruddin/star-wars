import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Heading,
  Icon,
  Stack,
  InputGroup,
  InputRightElement ,
  Input,
  Button,
  ListItem,
  List
} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import axios from "axios";

function Search() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanet = async () => {
      setIsLoading(true);
      setPlanets([]);
      const { data } = await axios.get(`https://swapi.dev/api/planets/?search=${search}`);
      setIsLoading(false);
      setPlanets(data.results);
    }

    getPlanet();
  }, [search])

  return (
    <>
      <Flex width="full" justifyContent="center" alignItems="center" height="full">
        <Box w="100%" maxWidth="1200px" pt={10}>
          <Heading>
            <Icon viewBox="0 0 200 200" color="blue.500">
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon> Search Planet
          </Heading>

          <Stack spacing={4} pt={5}>
            <InputGroup>
              <Input type="text" placeholder="Planets" pr="10rem" size="lg" onChange={e => setSearch(e.target.value)} />
              <InputRightElement width="10rem">
              <Button h="3rem" w="100%" mt={2} onClick={e => setSearch(search)}>
               Search <SearchIcon ml={2} />
              </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>

          <Stack spacing={4} pt={5}>
            {isLoading && <span>Loading....</span>}

            <List spacing={3}>
              {planets.sort((a, b) => b.population - a.population).map(({ name, population, climate }, index) => (
                <ListItem key={name} mb={5}>
                  <div fontWeight="light" style={{ fontSize: index < 5 && planets.length > 5 ? (planets.length - index) * 4 : 16 }}>{ name }</div>
                  <Flex direction="row" style={{ fontSize: 12 }}>
                    <Box mr={10} w="100%" maxWidth="200px">
                      <strong>Population</strong>: { population }
                    </Box>
                    <Box>
                      <strong>Climate</strong>: { climate }
                    </Box>
                  </Flex>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Box>
      </Flex>
    </>
  )
}

export default Search;