import type { NextPage } from "next";
import { Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import NarwhalToken from "../components/NarwhalToken";
import RewardToken from "../components/RewardToken";
import Stake from "../components/Stake";

const Home: NextPage = () => {
  const address = useAddress();

  if(!address) {
    return (
      <Container maxW={"1200px"}>
        <Flex h={"50vh"} justifyContent={"center"} alignItems={"center"}>
          <Heading>Please Connect your Wallet</Heading>
        </Flex>
      </Container>
    )
  }
  return (
    <Container maxW={"1200px"}>
      <SimpleGrid columns={2} spacing={4} mt={10}>
        <NarwhalToken />
        <RewardToken />
      </SimpleGrid>
      <Stake />
    </Container>
  );
};

export default Home;
