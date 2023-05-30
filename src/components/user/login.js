import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Flex,
    FormControl,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    useToast,
    Image,
    FormLabel,
    VStack,
  } from "@chakra-ui/react";
  
  import React from "react";
  import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
  import { FaLock } from "react-icons/fa";
  import { TfiEmail } from "react-icons/tfi";
  import { Link } from "react-router-dom";
  import { useState } from "react";
  import axios from "axios";
  
  import { useSelector, useDispatch } from "react-redux";
  import Home from "../home/Home";
  import { login } from "../store/actions/authActions";
  export default function Login() {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth);
  
    const error = useSelector((state) => state.auth.error);
    const loading = useSelector((state) => state.auth.loading);
    const toast = useToast();
    function login(e) {
      e.preventDefault();
      
    
      
      const data = {
        userName: e.target.userName.value,
        userEmail: e.target.email.value,
        password: e.target.password.value,
      }
      console.log(data);
      axios.post(`${process.env.REACT_APP_RENDER_URL}/login`, data)
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
        isAuth = true;
        login(dispatch, e,  toast);
    }

    return (
      <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" w="100%" h="100%">
        <VStack 
          w="100%"
          h="100%"
          bgImage="https://bia.lighting/wp-content/uploads/2016/04/Sign-Up-Background.png"
          justify="center"
          align="center"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          pt="5em"
          pb="5em"
        >
          <Heading textStyle="h1" color="white.100" mb="1em">
            Welcome Back!
          </Heading>
  
          <Box 
            rounded={"lg"} p={8} 
            boxShadow={{ base: 'none', sm: '0 0 60px rgba(0, 0, 0, 0.5)' }} 
            filter={{ base: 'none', sm: 'drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.3))' }}
            align="center"
          >
  
          {/* <Image src={logo} 
          alt="logo" 
          w="70%" 
          mb="1em" 
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.1)" }}
  
          /> */}
          <form onSubmit={(e) => login(e)}>
          <FormControl pb="2em" isRequired>
              <FormLabel color="white.100">Enter Your Email</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<TfiEmail/>} />
                <Input type="userName" name="userName" placeholder="userName" autoComplete="userName" variant='auth'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                />
              </InputGroup>
            </FormControl>

            <FormControl pb="2em" isRequired>
              <FormLabel color="white.100">Enter Your Email</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<TfiEmail/>} />
                <Input type="email" name="email" placeholder="email" autoComplete="email" variant='auth'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </FormControl>
  
            <FormControl pb="2em" isRequired>
              <FormLabel color="white.100">Enter Your Password</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaLock />} />
                <Input type="password" name="password" placeholder="password" autoComplete="current-password" variant='auth'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
            </FormControl>
  
  
              {error && (
                <Alert status="error" variant="left-accent" mb="1em">
                  <AlertIcon />
                  {error}
                </Alert>
              )}
  
              <Text>{loading ? "Loading..." : ""}</Text>
  
              <Button variant="primary" type="submit" mb="1rem" w="100%">
                <Link to="/">Login</Link>
              </Button>
  
              <Text textAlign="center">
                Don't have an account?{" "}
                <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>
                  Signup
                </Link>
                
              </Text>
            </form>
          </Box>
        </VStack>
      </Flex>
    );
  }
  

  