import React, { useState } from "react";

import {
  VStack,
  Text,
  Heading,
  Alert,
  AlertIcon,
  FormControl,
  Select,
  FormHelperText,
  Input,
  Button,
  Flex,
  InputGroup,
  InputLeftElement,
  Box,
  HStack,
  InputRightElement,
  Avatar,
  useToast,
  FormLabel,

} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { BsFillPersonFill, BsFillTelephoneFill, BsFillCalendarDateFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaUserAstronaut, FaLock, FaGenderless } from "react-icons/fa";
import { BiShow, BiHide } from "react-icons/bi";
import { IoAddCircle } from "react-icons/io5";

import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../store/actions/authActions";
import axios from "axios";

export default function Signup() {


  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  

  const toast = useToast();


function handleSubmit(e) {
  e.preventDefault();

  const data = {
    userName: e.target.userName.value,
    userEmail: e.target.email.value,
    password: e.target.password.value,
  }
  console.log(data);
  axios.post(`${process.env.REACT_APP_RENDER_URL}/signup`, data)
    .then((res) => {
      if (res.error) {
        toast({
          title: "Error",
          description: res.error,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Success",
          description: res.message,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    }
    )
    alert('تم ارسال الطلب بنجاح');
    setUserName('');
    setEmail('');
    setPassword('');
    // signUp(dispatch, e,  toast);
}



  


  

 

  return (
    <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" w="100%" h="100%">
      <VStack
        w="100%"
        h="100%"
        // bgImage="https://bia.lighting/wp-content/uploads/2016/04/Sign-Up-Background.png"
        justify="center"
        align="center"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        pt="5em"
        pb="5em"
      >
        <Heading textStyle="h1" color="white.100" mb="1em">
          Create Account
        </Heading>

        <Box 
          rounded={"lg"} p={8} 
          boxShadow={{ base: 'none', sm: '0 0 60px rgba(0, 0, 0, 0.5)' }} 
          filter={{ base: 'none', sm: 'drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.3))' }}
          >
          <form onSubmit={(e) => handleSubmit(e)}>

          
          
           

            <FormControl pb="1em" isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaUserAstronaut />} />
                <Input type="text" name="userName" placeholder="Username" autoComplete="username" variant="auth" value={userName}
                 onChange={(e) => setUserName(e.target.value)}
                />
              </InputGroup>
              <FormHelperText textAlign="left" color="white">
                Choose a unique username.
              </FormHelperText>
            </FormControl>

            <FormControl pb="1em" isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<TfiEmail />} />
                <Input type="email" name="email" placeholder="Email" autoComplete="email" variant="auth" value={email}
                 onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
              <FormHelperText textAlign="left" color="white">
                We'll never share your email.
              </FormHelperText>
            </FormControl>

            <FormControl pb="1em" isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaLock />} />
                <Input
                  type= {showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="password"
                  autoComplete="new-password"
                  variant="auth"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement 
                  onClick={() =>setShowPassword((showPassword) => !showPassword)}
                  children={showPassword ? <BiShow /> : <BiHide />}
                  />
              </InputGroup>
            </FormControl>

        

            {/* <Text color="white">{loading ? "Submitting" : ""}</Text> */}

            <Button variant="primary" type="submit" mb="1rem" w="100%">
              Sign Up
            </Button>

            <Text textAlign="center">
              Already Registered?{" "}
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
                Login
              </Link>
            </Text>
          </form>
        </Box>
      </VStack>
    </Flex>
  );

}

