import React, { useEffect } from 'react';

import Admin from './Admin';

import {
    Flex,
    Box,
    Grid,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../home/Categories';

function Dashboard() {
    const dispatch = useDispatch();
    const admin = useSelector(state => state.admin);
    useEffect(() => {
      
    }, [dispatch])
    return (
        <>
        
        <Admin  >
            <Flex flexDir='column' w='100%' overflow='auto' bg='#EDF2F7' alignContent='center' alignItems='center'> 
            <Categories/>
            </Flex>
        

        </Admin>
 
        </>

    )
}

export default Dashboard;
