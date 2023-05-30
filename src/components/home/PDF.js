import React from 'react';
import { Document, Text, Page,View } from '@react-pdf/renderer';
import { Box, Center, Flex, Grid, GridItem } from "@chakra-ui/react";
import {
    Card, CardHeader, CardBody, CardFooter, Heading, Image,
    Button,
    IconButton,
  } from '@chakra-ui/react'
  
const MyDocument = () => (
  <Document>
      {/** Page defines a single page of content. */}
      <Page size="A4" >
        <View >
          <Text>S.0</Text>
        </View>
        <View >
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
);

export default MyDocument;