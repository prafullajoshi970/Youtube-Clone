import React from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import {
  AiFillHome,
  AiOutlineFire,
  AiFillBell,
  AiOutlineHistory,
  AiOutlineClockCircle,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { Icon } from "@chakra-ui/icons";
const LeftHome = () => {
  return (
    <Box w="60" bg="white" h="100vh" boxShadow="md" py="6" px="4">
      <VStack spacing="6" align="start">
        <Flex align="center" justify="center" w="full">
          <Icon as={AiFillHome} boxSize={6} />
          <Text ml="2" fontSize="lg" fontWeight="bold">
            Home
          </Text>
        </Flex>
        <Flex align="center" justify="center" w="full">
          <Icon as={AiOutlineFire} boxSize={6} />
          <Text ml="2" fontSize="lg" fontWeight="bold">
            Trending
          </Text>
        </Flex>
        <Flex align="center" justify="center" w="full">
          <Icon as={AiFillBell} boxSize={6} />
          <Text ml="2" fontSize="lg" fontWeight="bold">
            Subscriptions
          </Text>
        </Flex>
        <Flex align="center" justify="center" w="full">
          <Icon as={AiOutlineHistory} boxSize={6} />
          <Text ml="2" fontSize="lg" fontWeight="bold">
            History
          </Text>
        </Flex>
        <Flex align="center" justify="center" w="full">
          <Icon as={BiLibrary} boxSize={6} />
          <Text ml="2" fontSize="lg" fontWeight="bold">
            Library
          </Text>
        </Flex>
        <Flex align="center" justify="center" w="full">
          <Icon as={AiOutlineClockCircle} boxSize={6} />
          <Text ml="2" fontSize="lg" fontWeight="bold">
            Watch Later
          </Text>
        </Flex>
        <Flex align="center" justify="center" w="full">
          <Icon as={AiOutlinePlayCircle} boxSize={6} />
          <Text ml="2" fontSize="lg" fontWeight="bold">
            Playlists
          </Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default LeftHome;
