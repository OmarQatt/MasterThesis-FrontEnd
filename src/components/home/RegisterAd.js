import { Box, Button, Container, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import masterThesis from "../../assets/img/MasterThesis.jpg";

export default function RegisterAd() {


  return (
    <Box bg="gray.100" py="24">
      <Container
        maxW={"85%"}
        maxH={"30rem"}
        bg="blue.500"
        bgGradient="linear-gradient(90deg, blue.600 0%, blue.500 35%, blue.400 100%)"
        my={"24px"}
        borderRadius={"2xl"}
        boxShadow={"2xl"}
      >
        <Stack direction={{ base: "column", md: "row" }} p="12" align="center" justify="center" spacing="24">
          <Stack align="left" justify="center" gap="8">
            <Text position={"relative"} color="white" textStyle={"h1"} fontSize="2.2rem">
            Are You Ready to Begin Your Thesis Journey?
            </Text>
            <Link >
              <Button
                colorScheme="gray"
                w="50%"
                _hover={{ bg: "gray.300" }}
                boxShadow="md"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
               
              </Button>
            </Link>
          </Stack>
          <Stack>
            <Image
              src={masterThesis}
              alt="coin"
              width="200px"
              filter="drop-shadow(0px 0px 0.75rem rgba(0, 0, 0, 0.5)) grayscale(100%)"
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
