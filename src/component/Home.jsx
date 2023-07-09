import React from "react";
import Nav from "./Nav";
import RightHome from "./RightHome";
import LeftHome from "./LeftHome";
import { Box, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Nav></Nav>

      <Box>
        <Flex>
          <LeftHome></LeftHome>
          <RightHome></RightHome>
        </Flex>
      </Box>
    </div>
  );
};

export default Home;
