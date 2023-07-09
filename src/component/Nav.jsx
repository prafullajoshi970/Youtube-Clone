import {
  Box,
  Flex,
  Button,
  Stack,
  Icon,
  Input,
  InputGroup,
  Spacer,
} from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineStorage } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Box bg="white" borderBottom="1px" borderColor="gray.200">
      <Flex align="center" maxW="6xl" mx="auto" px={4} py={2}>
        <Icon as={MdOutlineStorage} boxSize={6} mr={"5px"}></Icon>
        <Icon as={FaYoutube} boxSize={6} color="red.600" />
        <Box h={"max"} fontWeight={"bold"} fontFamily={"sans-serif"}>
          {" "}
          YOUTUBE
        </Box>
        <Spacer />
        <InputGroup maxW="lg">
          <Input
            type="text"
            placeholder="Search"
            borderRadius="full"
            borderColor="gray.400"
          />
          <Button color="gray.500" borderRadius="full" borderColor="gray.400">
            <Icon as={BiSearch}></Icon>
          </Button>
        </InputGroup>
        <Spacer />
        <Box>
          <Stack spacing={4} direction="row" align="center">
            <Button colorScheme="teal" size="xs">
              <Link to={"/"}>Home</Link>
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};
export default Nav;
