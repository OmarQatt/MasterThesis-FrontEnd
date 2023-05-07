import React, { useState, useEffect } from 'react';
import {
    Text,
    Flex,
    Avatar,
    Link,
    Icon,
    useMediaQuery
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiHome } from "react-icons/fi";
import { FaUsersSlash } from "react-icons/fa";
import { TbDatabase, TbDatabaseOff } from "react-icons/tb";
import { MdReport } from "react-icons/md";

import { GiHamburgerMenu } from "react-icons/gi";


function Admin({ children }) {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const [isLessThan971] = useMediaQuery("(max-width: 971px)");
    const [sizeSlide, SetSizeSlide] = useState(!isLessThan971);

    useEffect(() => {
        SetSizeSlide(!isLessThan971);
    }, [isLessThan971]);
    return (
        <div>
            <Flex
                flexDir='row'
                overflow='auto'
                h='calc(100vh - 80px)'
                w='100%'
            >
                <Flex
                    flexDir='row'
                    maxW='2000px'
                    h='calc(100vh - 120px)'
                    position='static'
                >
                    <Flex
                        w={sizeSlide ? '250px' : '100px'}
                        flexDir='column'
                        alignItems='center'
                        justifyContent='space-evenly'
                        bg='gray.100'
                        borderRight='1px solid'
                        borderColor='gray.200'
                    >
                        {isLessThan971 &&
                            <Flex flexDir="column" pr={sizeSlide ? '55%' : '0'}>
                                <Icon as={GiHamburgerMenu} fontSize='3xl'
                                    _hover={{ color: '#5BCCD9', cursor: 'pointer' }}
                                    onClick={() => {
                                        SetSizeSlide(!sizeSlide);
                                    }}
                                />
                            </Flex>
                        }

                        <Flex
                            flexDir='column'
                            alignItems={'center'}
                            justifyContent='space-evenly'
                            gap='5'

                        >
                            {/* <Avatar size={sizeSlide ? '2xl' : 'md'} src={user.image} alt="admin" borderRadius='full' /> */}
                            <Text as="h1" size="xl">Admin :
                                {/* {user.fullName} */}
                            </Text>
                        </Flex>

                        <Flex flexDir="column" alignItems={sizeSlide ? 'flex-start' : 'center'} justifyContent='center' gap='8' as='nav' >

                            <Flex flexDir="row" alignItems='center' justifyContent='center' gap='3' fontSize='xl'
                                fontWeight='bold' _hover={{ color: '#5BCCD9' }}>
                                <Link
                                    as={ReachLink}
                                    to='/admin/dashboard'
                                >
                                    <Icon as={FiHome} fontSize='3xl' color='blue.500' />
                                </Link>
                                <Link
                                    as={ReachLink}
                                    to='/admin/dashboard'
                                    display={sizeSlide ? 'flex' : 'none'}
                                    _hover={{ textDecor: 'none', color: 'blue.500' }}
                                >
                                    Dashboard
                                </Link>
                            </Flex>




                        </Flex>

                        <Flex textAlign='center' w="70%">
                            <Text>Create By Thesis Team
                                &#169; 2023</Text>
                        </Flex>
                    </Flex>
                </Flex>
                {children}

            </Flex>
        </div >
    )
}

export default Admin;
