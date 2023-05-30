import { Box, Button, Container, IconButton, Image, Input, SimpleGrid, Stack, Text, useToast } from "@chakra-ui/react";
import { BiMailSend } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";
import footerLogo from "../../assets/img/logo/footerLogo.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";


export default function LargeWithNewsletter() {

  const toast = useToast();

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm("service_xq50kw5", "template_ui2hs4l", form.current, "IX5VyXcqhp-pd31y4").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    toast({
      title: "You have subscribed successfully",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  }

  return (
    <Box bg="gray.50" boxShadow={"0 0 10px 0 rgba(0,0,0,0.1)"} >
      <Container as={Stack} maxW={"6xl"} py={10} >
        <SimpleGrid templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }} spacing={8}>
          <Stack spacing={2} justify="center" align="center">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <Image src={footerLogo} alt="footer-logo" w="250px" />
            </Link>
            <Text fontSize={"sm"}>© 2022 Master Thesis All rights reserved</Text>
            <Stack direction={"row"} spacing={3}>
              <Button label={"Facebook"} href={"#"} borderRadius="full">
                <FaFacebook />
              </Button>
              <Button label={"Twitter"} href={"#"} borderRadius="full">
                <FaTwitter />
              </Button>
              <Button label={"YouTube"} href={"#"} borderRadius="full">
                <FaYoutube />
              </Button>
              <Button label={"Instagram"} href={"#"} borderRadius="full">
                <RiInstagramFill />
              </Button>
            </Stack>
          </Stack>
          
          
        </SimpleGrid>
        
      </Container>
      
    </Box>
  );
}
