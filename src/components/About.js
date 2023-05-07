import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Spacer,
  Stack,
  Text,
  useColorModeValue,

} from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdFingerprint, MdOutlineSecurity } from "react-icons/md";
import { SiFreecodecamp } from "react-icons/si";

import Ahmad from "../assets/img/Ahmad.jpg";


function AboutT() {
  return (
    <>
      <Box display={{ base: "none", md: "block" }} p='4'>
        <Flex direction="column" align="center" justify="center" position="relative" h={{ md: "30rem", lg: "40rem" }}>
          <Box
            w="100%"
            h="100%"
            position="absolute"
            top="0"
            left="0"
            bgImage="url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
            bgSize="cover"
            bgPosition="center center"
            filter="brightness(0.2)"
            zIndex="-1"
          />

          <Box zIndex="2" w="70%" textAlign="center">
            <Heading as="h1" size="4xl" color="gray.100" fontWeight="semibold">
              About Us
            </Heading>
            <Text color="gray.200" fontSize="md" mixW="60%" textAlign="center" letterSpacing={1.2} lineHeight={1.8}>
            MasterThesis is an online platform that provides a safe and secure environment for students to conduct research and complete their Master's thesis. With its user-friendly interface and easy-to-use features, MasterThesis offers a wide variety of comprehensive resources and real-time access to a vast number of research opportunities.
            Join us today and embark on your journey towards academic success within minutes at MasterThesis!
            </Text>
          </Box>
        </Flex>

        <Center>
          <Box pos="absolute" justifyContent="center" top={{ md: "30rem", lg: "40rem" }}>
            <Center>
              <Grid
                templateColumns={"repeat(3,1fr)"}
                gap={5}
                maxW="80%"
                margin="auto 0"
                padding={{ base: "4", md: "8" }}
              >
                <Box px={{ base: "4", md: "8" }} py="6" mb="10">
                  <Box
                    bg={useColorModeValue("gray.200", "gray.700")}
                    zIndex="10"
                    as={Flex}
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                    shadow="base"
                    rounded="lg"
                    overflow="hidden"
                    p="50px 24px"
                    w="100%"
                    h="100%"
                  >
                    <Icon as={MdOutlineSecurity} w={8} h={8} color={useColorModeValue("green.400", "green.200")} />
                    <Text color={useColorModeValue("gray.700", "gray.200")} fontSize="xl" fontWeight="bold" p="6">
                      Secure
                    </Text>
                    <Box p="6" flex="1 1 auto">
                      <Text color={useColorModeValue("gray.600", "gray.400")} fontSize="md" textAlign="center">
                        Your data is safe with us. We use the latest technologies to protect your data.
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box px={{ base: "4", md: "8" }}>
                  <Box
                    bg={useColorModeValue("gray.200", "gray.700")}
                    zIndex="10"
                    as={Flex}
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                    shadow="base"
                    rounded="lg"
                    overflow="hidden"
                    p="48px 24px"
                  >
                    <Icon as={SiFreecodecamp} w={10} h={10} color={useColorModeValue("blue.400", "blue.200")} />
                    <Text color={useColorModeValue("gray.700", "gray.200")} fontSize="xl" fontWeight="bold" p="6">
                      Free
                    </Text>
                    <Box p="6" flex="1 1 auto">
                      <Text color={useColorModeValue("gray.600", "gray.400")} fontSize="md" textAlign="center">
                      You can create a free account and begin your academic journey with MasterThesis. No hidden fees, just unlimited access to comprehensive resources and research opportunities.
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box px={{ base: "4", md: "8" }} py="6" mb="10">
                  <Box
                    bg={useColorModeValue("gray.200", "gray.700")}
                    zIndex="10"
                    as={Flex}
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                    shadow="base"
                    rounded="lg"
                    overflow="hidden"
                    p="48px 24px"
                    w="100%"
                    h="100%"
                  >
                    <Icon as={MdFingerprint} w={8} h={8} color={useColorModeValue("red.400", "red.200")} />
                    <Text color={useColorModeValue("gray.700", "gray.200")} fontSize="xl" fontWeight="bold" p="6">
                      Simple Interface
                    </Text>
                    <Box p="6" flex="1 1 auto">
                      <Text color={useColorModeValue("gray.600", "gray.400")} fontSize="md" textAlign="center">
                      Sign up now and experience the user-friendly interface of our website dedicated to Master Thesis! Join us and discover just how easy it is to use.
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Center>
          </Box>
        </Center>
      </Box>

      
      <Box
        as={Flex}
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        mt={{ base: "50%", md: "40%", lg: "23%" }}
        mb="3rem"
        p='32'
      >
        <Heading as="h2" size="4xl" color="gray.700" fontWeight="semibold">
          Meet our Developers
        </Heading>
        <Text
          mt="1rem"
          color="gray.400"
          fontSize="md"
          mixW="50%"
          textAlign="center"
          // letterSpacing={1.2}
          // lineHeight={1.8}
        >
          Take a moment to meet our amazing team of developers. They work hard to make sure you have the best experience
          possible.
        </Text>
      </Box>
     
      {/* card tems  */}
      <Center py={12}>
        <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3,1fr)" }} gap={20} >
 
          
          <Box
            role={"group"}
            p={4}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("gray.200", "gray.900")}
            border="1px solid"
            borderColor={useColorModeValue("gray.300", "gray.700")}
            boxShadow={"lg"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              mx={6}
              pos={"relative"}
              height={"250px"}
              boxShadow={"2xl"}
              border="1px solid"
              borderColor={useColorModeValue("gray.300", "gray.700")}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                boxShadow: "inset 0 0 50px rgba(0,0,0,.2)",
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image rounded={"lg"} height={250} width={250} objectFit={"cover"} src={Ahmad} />
            </Box>
            <Spacer />
            <Stack pt={10} align={"center"} gap="3" mb="3">
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              Ahmad
              </Heading>
              <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
                FULL STACK DEVELOPER
              </Text>
              <Stack direction={"row"} align={"center"} justify={"center"} gap="2">
                <Icon
                  as={FaLinkedinIn}
                  w={6}
                  h={6}
                  color={useColorModeValue("blue.400", "blue.200")}
                  _hover={{
                    color: "blue.600",
                    scale: 1.3,
                    cursor: "pointer",
                  }}
                />

                <Icon
                  as={FaGithub}
                  w={6}
                  h={6}
                  color={useColorModeValue("blue.400", "blue.200")}
                  _hover={{
                    color: "blue.600",
                    scale: 1.3,
                    cursor: "pointer",
                  }}
                />
                <Icon
                  as={FaFacebookF}
                  w={6}
                  h={6}
                  color={useColorModeValue("blue.400", "blue.200")}
                  _hover={{
                    color: "blue.600",
                    scale: 1.3,
                    cursor: "pointer",
                  }}
                />
              </Stack>
            </Stack>
          </Box>
          <Spacer />
          <Box
            role={"group"}
            p={4}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("gray.200", "gray.900")}
            border="1px solid"
            borderColor={useColorModeValue("gray.300", "gray.700")}
            boxShadow={"lg"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
            
          >
            <Box
              rounded={"lg"}
              mt={-12}
              mx={6}
              pos={"relative"}
              height={"250px"}
              boxShadow={"2xl"}
              border="1px solid"
              borderColor={useColorModeValue("gray.300", "gray.700")}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                boxShadow: "inset 0 0 50px rgba(0,0,0,.2)",
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image rounded={"lg"} height={250} width={250} objectFit={"cover"} src={Ahmad} />
            </Box>
            <Stack pt={10} align={"center"} gap="3" m="3">
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                Ahmad
              </Heading>
              <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
                FULL STACK DEVELOPER
              </Text>
              <Stack direction={"row"} align={"center"} justify={"center"} gap="2">
                <Icon
                  as={FaLinkedinIn}
                  w={6}
                  h={6}
                  color={useColorModeValue("blue.400", "blue.200")}
                  _hover={{
                    color: "blue.600",
                    scale: 1.3,
                    cursor: "pointer",
                  }}
                />

                <Icon
                  as={FaGithub}
                  w={6}
                  h={6}
                  color={useColorModeValue("blue.400", "blue.200")}
                  _hover={{
                    color: "blue.600",
                    scale: 1.3,
                    cursor: "pointer",
                  }}
                />
                <Icon
                  as={FaFacebookF}
                  w={6}
                  h={6}
                  color={useColorModeValue("blue.400", "blue.200")}
                  _hover={{
                    color: "blue.600",
                    scale: 1.3,
                    cursor: "pointer",
                  }}
                />
              </Stack>
            </Stack>
          </Box>
        </Grid>
        {/* </Box> */}
      </Center>

      {/* </Flex> */}
    </>
    // </div>
  );
}

export default AboutT;
