import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { RiDownloadLine } from "react-icons/ri";
import styles from "../Styles/Home.module.css";

export const Home = () => {
  return (
    <Box
      id="home"
      className={`${styles.rootCont}`}
      display="grid"
      gridTemplateAreas={{
        base: `"nameCont" "photoCont" "socialCont"`,
        md: `"nameCont photoCont" "socialCont socialCont"`,
      }}
      gridTemplateColumns={{
        base: "1fr",
        md: "1fr 1fr",
      }}
      width={{
        base: "90%",
        md: "80%",
      }}
      margin="auto"
      alignItems="center"
      justifyContent="center"
      height={{
        base: "100vh",
        md: "80vh",
      }}
    >
      <HStack
        className="nameCont"
        width="100%"
        fontSize={{
          base: "30px",
          md: "50px",
        }}
        fontWeight="800"
        color="rgb(14, 36, 49)"
        textAlign="center"
        maxH={{
          base: "50vh",
          md: "60vh",
        }}
        spacing={2}
      >
        <div>Hi,</div>
        <div id="user-detail-name">
          I am{" "}
          <Text as="span" color="rgb(8, 111, 143)">
            S Naveen Kumar
          </Text>
        </div>
        <Text>Web Developer</Text>
        <Link href="" isExternal>
          <Button
            variant="solid"
            colorScheme="teal"
            size="sm"
            leftIcon={<RiDownloadLine />}
          >
            Resume
          </Button>
        </Link>
      </HStack>

      <Flex className="photoCont" gridArea="photoCont">
        <Image
          src="https://camo.githubusercontent.com/e4a569755580f96dce0e6d65bc761e0d9aef0fecae524ec73a1b0be60fc934fa/68747470733a2f2f7777772e6d79676f2e67652f75706c6f6164732f626c6f672f313538343032333739352e6a7067"
          alt=""
          className="heroImg"
          width="100%"
          borderRadius="5px"
          maxH="60vh"
        />
      </Flex>

      <Flex
        className="socialCont"
        gridArea="socialCont"
        width="100%"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        marginTop={{
          base: "20px",
          md: "0",
        }}
      >
        <Link href="" isExternal>
          <AiFillLinkedin className="linkedInIcon" />
        </Link>
        <Link href="" isExternal>
          <AiOutlineGithub className="gitIcon" />
        </Link>
      </Flex>
    </Box>
  );
};
