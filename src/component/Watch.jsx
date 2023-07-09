import React from "react";
import Nav from "./Nav";
import { Flex, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, Text, CardBody, Image, Divider } from "@chakra-ui/react";
import { BiLike } from "react-icons/bi";
import { Icon } from "@chakra-ui/icons";

const Watch = () => {
  var { id } = useParams();
  console.log(id);
  let productData = useSelector((storeData) => {
    return storeData.product;
  });

  const filterData = productData.filter((ele) => ele.id.includes(id));

  console.log(filterData);
  const filterData1 = filterData[0];
  return (
    <div>
      <Nav></Nav>
      <Flex>
        <Box ml="40px">
          {filterData1 && (
            <>
              <iframe
                src={filterData1.trailer}
                title="youtube"
                width="500px"
                height="390px"
              ></iframe>
              <h1>{filterData1.title}</h1>
              <Flex>
                <Image
                  src={filterData1.thumbnail}
                  h="30px"
                  w="30px"
                  mr="10px"
                  style={{ borderRadius: "50%" }}
                />
                <Text fontSize={"xx-small"}>{filterData1.director}</Text>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Icon>{BiLike}</Icon>
              </Flex>
            </>
          )}
        </Box>
        <Box overflow={"scroll"} h="80vh" ml={"80px"}>
          {filterData.map((ele) => {
            return (
              <Card w="250px">
                <CardBody>
                  <Flex>
                    <Box>
                      {" "}
                      <Image src={ele.image} h="100px" w="220px" mr="10px" />
                    </Box>
                    <Box>
                      <Text>{ele.title}</Text>
                      <Text fontSize={"xx-small"}>{ele.description}</Text>
                    </Box>
                  </Flex>
                </CardBody>
                <Divider />
              </Card>
            );
          })}
        </Box>
      </Flex>
    </div>
  );
};

export default Watch;
