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
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Icon } from "@iconify/react";

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  const btnRef = React.useRef();
  return (
    <Box
      h={575}
      w={410}
      border={"1px"}
      //bg={useColorModeValue('blue.100', 'gray.900')}
      //color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Drawer
        h={575}
        placement={placement}
        size={"x"}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex
            h={"575"}
            w={"69px"}
            justifyContent={"space-between"}
            flexDirection={"column"}
          >
            <Flex mt={5} gap={9} flexDirection={"column"} alignItems={"center"}>
              <Icon
                ref={btnRef}
                onClick={onOpen}
                height={22}
                icon="charm:menu-hamburger"
              />
              <Icon height={22} icon="akar-icons:cart" />
              <Icon height={22} icon="lucide:package-search" />
              <Icon height={22} icon="akar-icons:heart" />
            </Flex>
            <Flex mb={5} gap={9} flexDirection={"column"} alignItems={"center"}>
              <Icon height={22} icon="bi:person" />
              <Icon height={22} icon="ic:round-logout" />
            </Flex>
          </Flex>
        </DrawerContent>
      </Drawer>
      <Flex flexDirection={"row"}>
        <Flex
          h={"575"}
          w={"69px"}
          border={"1px"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <Flex mt={5} gap={9} flexDirection={"column"} alignItems={"center"}>
            <Icon
              ref={btnRef}
              onClick={onOpen}
              height={22}
              icon="charm:menu-hamburger"
            />
            <Icon height={22} icon="akar-icons:cart" />
            <Icon height={22} icon="lucide:package-search" />
            <Icon height={22} icon="akar-icons:heart" />
          </Flex>
          <Flex mb={5} gap={9} flexDirection={"column"} alignItems={"center"}>
            <Icon height={22} icon="bi:person" />
            <Icon height={22} icon="ic:round-logout" />
          </Flex>
        </Flex>
        <Flex w={"full"} mt={"22.5px"} ml={4} mr={7} flexDirection={"column"}>
          <Flex
            className="rItems"
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={"row"}
          >
            <Image h={5} src="/images/logo.png"></Image>
            <Icon height={22} icon="bytesize:close" />
          </Flex>
          <Text fontSize={17} ml={0.9} mt={8}>
            My Orders
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
