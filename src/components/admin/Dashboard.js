import React, { useEffect } from 'react';

import Admin from './Admin';

import {
    Flex,
    Box,
    Grid,
} from "@chakra-ui/react";


import Categories from '../home/Categories';

function Dashboard() {

    useEffect(() => {
      
    }, [])
    return (
        <>
        
        <Admin  >
            <Flex flexDir='column' w='100%' overflow='auto' bg='#EDF2F7' alignContent='center' alignItems='center' display= 'flex'> 
            <Categories/>
            </Flex>
        

        </Admin>
 
        </>

    )
}

export default Dashboard;
