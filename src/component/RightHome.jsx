import React, { useEffect, useState } from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import {
  Flex,
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ActionCreator from "../Redux/Action";
import { Link } from "react-router-dom";

const RightHome = () => {
  const [gener, setGener] = useState("Drama");

  const dispatch = useDispatch();

  console.log(gener);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://imdb-top-100-movies.p.rapidapi.com/",
      headers: {
        "X-RapidAPI-Key": "dbe569d3b0mshc62552d56585c26p1de279jsn3104a7072d00",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    try {
      axios.request(options).then((resp) => dispatch(ActionCreator(resp.data)));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);
  let productData = useSelector((storeData) => {
    return storeData.product;
  });
  const filterData = productData.filter((ele) => ele.genre.includes(gener));
  return (
    <div>
      <div className="top">
        <Tabs>
          <TabList>
            <Tab value={"Drama"} onClick={(e) => setGener(e.target.value)}>
              Drama
            </Tab>
            <Tab value={"Crime"} onClick={(e) => setGener(e.target.value)}>
              Crime
            </Tab>
            <Tab value={"Biography"} onClick={(e) => setGener(e.target.value)}>
              Biography
            </Tab>
            <Tab value={"History"} onClick={(e) => setGener(e.target.value)}>
              History
            </Tab>
            <Tab value={"Action"} onClick={(e) => setGener(e.target.value)}>
              Action
            </Tab>
            <Tab value={"Adventure"} onClick={(e) => setGener(e.target.value)}>
              Adventure
            </Tab>
            <Tab value={"Western"} onClick={(e) => setGener(e.target.value)}>
              Western
            </Tab>
            <Tab value={"Horror"} onClick={(e) => setGener(e.target.value)}>
              Horror
            </Tab>
            <Tab value={"Mystery"} onClick={(e) => setGener(e.target.value)}>
              Mystery
            </Tab>
            <Tab value={"Thriller"} onClick={(e) => setGener(e.target.value)}>
              Thriller
            </Tab>
          </TabList>
        </Tabs>
      </div>
      <div className="bottom">
        {filterData.map((ele, idx) => {
          return (
            <Card
              key={idx}
              w="310px"
              h="350px"
              m="4px auto"
              boxShadow="dark-lg"
              p="6"
              rounded="md"
              bg="white"
            >
              <Image
                src={ele.image}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
                mt="-23px"
                h="150px"
                w="55vw"
              />
              <Stack mt="6" spacing="3">
                <Flex>
                  <Image
                    src={ele.thumbnail}
                    h="30px"
                    w="30px"
                    mr="10px"
                    style={{ borderRadius: "50%" }}
                  />
                  <Heading size="xs" mt="4px">
                    {ele.title}
                  </Heading>
                </Flex>
                <Text fontSize={"xx-small"} color={"gray"}>
                  {ele.director}
                </Text>
                <Text fontSize={"xx-small"}>{ele.description}</Text>
                <Text color="gray" fontSize="xx-small">
                  Rank :{ele.rank} &nbsp; Year :{ele.year}
                  <Button ml="15px" colorScheme="teal" size="xs">
                    <Link to={`/Watch/${ele.id}`}>Watch</Link>
                  </Button>
                </Text>
              </Stack>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default RightHome;
