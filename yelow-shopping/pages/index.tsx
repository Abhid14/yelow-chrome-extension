import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Flex,
  Progress,
  Button,
  Center,
  ButtonGroup,
  Spacer,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
export default function HoePage() {
  return (
    <Box
      h={575}
      w={410}
      border={"1px"}
      //bg={useColorModeValue('blue.100', 'gray.900')}
      //color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Flex flexDirection={"row"}>
        <Flex
          h={574}
          w={50}
          border={"1px"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <Flex mt={5} gap={8} flexDirection={"column"} alignItems={"center"}>
          <Icon icon="charm:menu-hamburger" />
            <Icon icon="akar-icons:cart" />
            <Icon icon="lucide:package-search" />
            <Icon icon="akar-icons:heart" />
          </Flex>
          <Flex mb={5} gap={8} flexDirection={"column"} alignItems={"center"}>
            <div>1</div>
            <div>2</div>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Flex
            border={"1px"}
            h={50}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={"row"}
          >
            <Image h={8} src="/images/logo.png"></Image>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
