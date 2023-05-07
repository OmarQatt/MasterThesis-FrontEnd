import { Box, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardHeader, CardBody, CardFooter,Heading ,Image,
  Button,
  IconButton,



} from '@chakra-ui/react'

function Categories() {
  // const [form, setForm] = useState([])

  // useEffect(() => {
  //   axios.get("http://localhost:9999/masterform").then((res) => {
  //     setForm(res.data)
  //     console.log(res.data)
  //   })
  // }, [])
  // how to get data by name
  const [form, setForm] = useState([])
  const [search, setSearchValue] = useState("")
  useEffect(() => {
    axios.get("http://localhost:9999/masterform").then((res) => {
      setForm(res.data)
      console.log(res.data)
    })
  }, [])
  const filtered = form.filter((item) => {
    return item.userName.toLowerCase().includes(search.toLowerCase())
  })
  console.log(filtered)
  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }



  return ( 
   <>
  
      <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            onChange={handleChange}
            style={{width: "370px"}}
          />
      {form.filter((data) =>
            data.userName
              .toLowerCase()
              .includes(search.toLowerCase())
          ).map((data) => (
            <Card bg={"blue.100"} mb={10} mt={5}>
            <CardHeader>
              <Heading size="md">{data.userName}</Heading>
            </CardHeader>
    
            <CardBody>
              <Text>
                {data.studentNumber}
              </Text>
              <Text>
                {data.teacherName}
              </Text>
              <Text>
                {data.academicYear}
              </Text>
              <Text>
                {data.semesterYear}
              </Text>
              <Text>
                {data.collegeName}
              </Text>
              <Text>
                {data.departmentName}
              </Text>
              <Text>
                {data.LetterName}
              </Text>
            </CardBody>
    
            <CardFooter>
              <Button colorScheme="blue" mr={4}>
                <Link to={`/form/${data._id}`}>View</Link>
              </Button>
              <Button colorScheme="red">Delete</Button>
            </CardFooter>
    
    
    
            </Card>
          ))}
          



</>
   
 
  );
}

export default Categories;
