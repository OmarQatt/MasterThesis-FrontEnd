import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';

import axios from "axios";


export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [studentName, setStudentName] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [supervisorName, setSupervisorName] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [semester, setSemester] = useState('');
  const [college, setCollege] = useState('');
  const [section, setSection] = useState('');
  const [aboutThesis, setAboutThesis] = useState('');


  function handleSubmit(e, toast){
    
    e.preventDefault();
    const data = {
      userName: studentName,
      studentNumber: studentNumber,
      teacherName: supervisorName,
      academicYear: academicYear,
      semesterYear: semester,
      collegeName: college,
      departmentName: section,
      LetterName: aboutThesis, 
    };
    console.log("data",data);
   
    axios.post("http://localhost:9999/masterform", data)
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
   

  };
   
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
      
        m="10px auto"
        as="form"
        onSubmit={handleSubmit}>
          
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        الرجاء ملئ البيانات التالية
      </Heading>
     
      <Flex>
        
        <FormControl mr="5%">
          <FormLabel htmlFor="userName" fontWeight={'normal'}>
            اسم الطالب
          </FormLabel>
          <Input id="userName" className='userName' placeholder="اسم الطالب" value={studentName} 
          onChange={e => setStudentName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="studentNumber" fontWeight={'normal'}>
            رقم الطالب
          </FormLabel>
          <Input id="studentNumber" className='studentNumber' placeholder="رقم الطالب" value={studentNumber}
          onChange={e => setStudentNumber(e.target.value)}
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
      <FormLabel htmlFor="teacherName" fontWeight={'normal'}>
            اسم المشرف
          </FormLabel>
          <Input id="teacherName" className='teacherName' placeholder="اسم المشرف" value={supervisorName}
          onChange={e => setSupervisorName(e.target.value)}
          />
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="academicYear"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          السنة الدراسية
        </FormLabel>
        <Input
          type="text"
          name="academicYear"
          id="academicYear"
          className='academicYear'
          value={academicYear}
          onChange={e => setAcademicYear(e.target.value)}
          autoComplete="academic-year"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="semesterYear"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          الفصل الدراسي
        </FormLabel>
        <Select
          id="semesterYear"
          name="semesterYear"
          className='semesterYear'
          value={semester}
          onChange={e => setSemester(e.target.value)}
          autoComplete="semester"
          placeholder="اختر الفصل الدراسي"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>الاول</option>
          <option>الثاني</option>
          <option>الصيفي</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="collegeName"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          الكلية
        </FormLabel>
        <Input
          type="text"
          name="collegeName"
          id="collegeName"
          className='collegeName'
          value={college}
          onChange={e => setCollege(e.target.value)}
          autoComplete="college"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="departmentName"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          القسم
        </FormLabel>
        <Input
          type="text"
          name="departmentName"
          id="departmentName"
          className='departmentName'
          value={section}
          onChange={e => setSection(e.target.value)}
          autoComplete="section"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
      <SimpleGrid columns={1} spacing={6}>
        
        <FormControl id="LetterName" className='LetterName' 
        value={aboutThesis}
        onChange={e => setAboutThesis(e.target.value)}
        
        mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            عنوان الرسالة
          </FormLabel>
          <Textarea
            placeholder="عنوان الرسالة"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          <FormHelperText>
           !الرجاء التاكد من المعلومات المدخلة قبل الارسال
          </FormHelperText>
        </FormControl>
      </SimpleGrid>


        <ButtonGroup mt="5%" w="100%" >
          <Flex w="100%" justifyContent="space-between" >
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                type='submit'
                
                   >
                Submit
              </Button>

          </Flex>
        </ButtonGroup>
  
      </Box>
    </>
  );
}