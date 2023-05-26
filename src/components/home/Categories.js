import { Box, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react"
import axios from "axios";
import {
  Card, CardHeader, CardBody, CardFooter, Heading, Image,
  Button,
  IconButton,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react';
import {
  Progress,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

function Categories() {

  const [form, setForm] = useState([])
  const [search, setSearchValue] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(100);
  const [studentName, setStudentName] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [supervisorName, setSupervisorName] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [semester, setSemester] = useState('');
  const [college, setCollege] = useState('');
  const [section, setSection] = useState('');
  const [aboutThesis, setAboutThesis] = useState('');
  const [LetterNameinEnglish, setLetterNameinEnglish] = useState('');
  const [id, setId] = useState('');
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_RENDER_URL}/masterform`).then((res) => {
      setForm(res.data)
      console.log(res.data)
    })

  }, [])

  const filtered = form.filter((item) => {
    return item.userName.toLowerCase().includes(search.toLowerCase()) && item.studentNumber.toLowerCase().includes(search.toLowerCase())

  })
  console.log(filtered)
  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }
  const deleteForm = (id) => {
    axios.delete(`${process.env.REACT_APP_RENDER_URL}/masterform/${id}`).then((res) => {
      const del = form.filter((item) => item.id !== id)
      setForm(del)
    })
  }
  const handleEdit = (id) => {
    console.log("id", id)
    axios.put(`${process.env.REACT_APP_RENDER_URL}/masterform/${id}`, {
      userName: studentName,
      studentNumber: studentNumber,
      teacherName: supervisorName,
      academicYear: academicYear,
      semesterYear: semester,
      collegeName: college,
      departmentName: section,
      LetterName: aboutThesis,
      LetterNameinEnglish: LetterNameinEnglish,
    })
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
    alert('تم تعديل الطلب بنجاح');
  }
  return (
    <>
      <Box>
        <Center>
          <Heading>Admin Page</Heading>
        </Center>
        <Center>
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            value={search}
          />
        </Center>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={6}
          marginLeft="10%"
          marginRight="10%"
          marginTop="5%"
        >
          {form.filter((data) =>
            data.userName
              .toLowerCase()
              .includes(search.toLowerCase())
          ).reverse().map((data) => (
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
                <Text>
                  {data.LetterNameinEnglish}
                </Text>
              </CardBody>
              <CardFooter>
                <Button onClick={onOpen} colorScheme="blue" >Open Modal</Button>
                <Modal isOpen={isOpen} onClose={onClose} >
                  <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Box
                        borderWidth="1px"
                        rounded="lg"
                        shadow="1px 1px 3px rgba(0,0,0,0.3)"
                        maxWidth={800}
                        p={6}
                        m="10px auto"
                        as="form"
                      >
                        <Progress
                          hasStripe
                          value={progress}
                          mb="5%"
                          mx="5%"
                          isAnimated
                        ></Progress>
                        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                          الرجاء ملئ البيانات التالية
                        </Heading>
                        <Flex>
                          <FormControl mr="5%">
                            <FormLabel htmlFor="userName" fontWeight={'normal'}>
                              اسم الطالب
                            </FormLabel>
                            <Input id="userName" className='userName' placeholder="اسم الطالب" value={studentName} required
                              onChange={e => setStudentName(e.target.value)}
                            />
                          </FormControl>
                          <FormControl>
                            <FormLabel htmlFor="studentNumber" fontWeight={'normal'}>
                              رقم الطالب
                            </FormLabel>
                            <Input id="studentNumber" className='studentNumber' placeholder="رقم الطالب" value={studentNumber} required
                              onChange={e => setStudentNumber(e.target.value)}
                            />
                          </FormControl>
                        </Flex>
                        <FormControl mt="2%">
                          <FormLabel htmlFor="teacherName" fontWeight={'normal'}>
                            اسم المشرف
                          </FormLabel>
                          <Input id="teacherName" className='teacherName' placeholder="اسم المشرف" value={supervisorName} required
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
                          <Select
                            id="academicYear"
                            name="academicYear"
                            className='academicYear'
                            value={academicYear}
                            required
                            onChange={e => setAcademicYear(e.target.value)}
                            autoComplete="academicYear"
                            placeholder="اختر السنة الدراسية"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md">
                            <option>1990</option>
                            <option>1991</option>
                            <option>1992</option>
                            <option>1993</option>
                            <option>1994</option>
                            <option>1995</option>
                            <option>1996</option>
                            <option>1997</option>
                            <option>1998</option>
                            <option>1999</option>
                            <option>2000</option>
                            <option>2001</option>
                            <option>2002</option>
                            <option>2003</option>
                            <option>2004</option>
                            <option>2005</option>
                            <option>2006</option>
                            <option>2007</option>
                            <option>2008</option>
                            <option>2009</option>
                            <option>2010</option>
                            <option>2011</option>
                            <option>2012</option>
                            <option>2013</option>
                            <option>2014</option>
                            <option>2015</option>
                            <option>2016</option>
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                          </Select>
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
                            required
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
                        <FormControl as={GridItem} colSpan={[6, 3]}>
                          <FormLabel
                            htmlFor="collegeName"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                              color: 'gray.50',
                            }}>
                            الكلية
                          </FormLabel>
                          <Select
                            id="collegeName"
                            name="collegeName"
                            className='collegeName'
                            value={college}
                            required
                            onChange={e => setCollege(e.target.value)}
                            autoComplete="college"
                            placeholder="اختر كلية"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md">
                            <option>كلية الاميرة سلمى بنت عبد الله للتمريض</option>
                            <option>كلية الاداب والعلوم الانسانية</option>
                            <option>كلية العلوم التربوية</option>
                            <option>كلية الشريعة</option>
                            <option>كلية العلوم</option>
                            <option>كلية الامير الحسين بن عبد الله لتكنلوجيا المعلومات</option>
                            <option>كلية اللغات الاجنبية</option>
                            <option>كلية الهندسة</option>
                            <option>كلية الاعمال</option>
                            <option>كلية القانون</option>
                            <option>كلية بيت الحكمة للعلوم السياسية والدراسات الدولية</option>
                            <option>كلية علوم الارض والبيئة</option>
                          </Select>
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
                            required
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
                              required
                              shadow="sm"
                              focusBorderColor="brand.400"
                              fontSize={{
                                sm: 'sm',
                              }}
                            />
                          </FormControl>
                        </SimpleGrid>
                        <SimpleGrid columns={1} spacing={6}>
                          <FormControl id="LetterNameinEnglish" className='LetterNameinEnglish'
                            value={LetterNameinEnglish}
                            onChange={e => setLetterNameinEnglish(e.target.value)}
                            mt={1}>
                            <FormLabel
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{
                                color: 'gray.50',
                              }}>
                              Title Thesis
                            </FormLabel>
                            <Textarea
                              placeholder="Title Thesis"
                              rows={3}
                              required
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
                              onClick={
                                () => handleEdit(data.id)
                              }
                            >
                              Submit
                            </Button>

                          </Flex>
                        </ButtonGroup>
                      </Box>
                    </ModalBody>
                    <ModalFooter>
                      <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                <Button colorScheme="red"
                  onClick={
                    () => deleteForm(data.id)
                  }
                >Delete</Button>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Categories;
