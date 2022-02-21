import  React from 'react'
import { Box, Image, Button, useMediaQuery, useColorModeValue,  Text, Stack, WrapItem, Heading, Icon, HStack, Link, AccordionItem, AccordionPanel, AccordionButton, Flex } from '@chakra-ui/react'
import {FiArrowUpRight} from 'react-icons/fi'
import $ from 'jquery'
const Card = props =>{
    const [phone] = useMediaQuery('(max-width: 800px)')
    return(
        <WrapItem>
        <div data-aos="zoom-in-up">
            <Box height={'350px'} cursor={'default'} marginLeft={!phone ? ('20px'): (0)} marginBottom={!phone ? (0): ('20px')} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'} w={'100%'} maxW={'300px'} bg={useColorModeValue('gray.100', 'gray.900')} transition={'ease-in-out 0.2s'} _hover={{
                boxShadow:'lg',
                transform: 'translateY(10px)'

            }}>
                <Stack>
                <Image
          h={'120px'}
          w={'full'}
        fallback={
            <Box h={'120px'} w={'full'} bg={useColorModeValue('gray.200', 'gray.700')} />
        }         
          src={
            props.img
          }
          objectFit={'cover'}
        />
            <Box p={6}>
                <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                {props.title}
                            </Heading>
                            <Text color={'gray.500'}>{props.desc}</Text>
                        </Stack>
                        {props.href && 
                            <Button
                                w={'full'}
                                mt={8}
                                colorScheme={'green'}
                                rounded={'md'}
                                onClick={function(){
                                    window.open(props.href)
                                }}
                                _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                                }}>
                                Learn More <Icon as={FiArrowUpRight}/>
                            </Button>
                        }
            </Box>
                </Stack>

            </Box>
            </div>
        </WrapItem>
    )
}
export {Card}
const HCard = props =>{
    const [phone] = useMediaQuery('(max-width: 800px)')
    const height = phone ? ('200px') : ('150px')
    return (
        <div  data-aos={props.animate}>
            <HStack cursor={'default'} bg={useColorModeValue('gray.100', 'gray.900')} marginBottom={'20px'} as={Box} height={height} overflow={'hidden'} rounded={'sm'} transition={'ease-in-out all 0.5s'} _hover={{
                transform: 'translateX(20px)',
            }}>
                <Image fallback={<Box h={height} w={height} bg={useColorModeValue('gray.200', 'gray.700')} />}  width={'150px'} height={height} src={props.img}/>
                <Box padding={'10px'} overflow={'auto'} height={height}>
                    <Heading fontSize={'22px'}>{props.title}</Heading>
                    <HStack><Text color={useColorModeValue('gray.500','gray.400')}>{props.desc}</Text>{props.link && <Link href={props.link} color={'teal.300'}>Learn More </Link>}</HStack>
                </Box>
            </HStack>
        </div>
    )
}
export {HCard}
const AccordionItem2 = props =>{
    return(        
    <div data-aos="zoom-out">
        <AccordionItem bg={useColorModeValue('gray.100','gray.700')}  outline={'green.400'} border={'none'}>
            {props.children}
        </AccordionItem>
    </div>
    )
}
export {AccordionItem2}
const AccordionPanel2 = props =>{
    return(
            <AccordionPanel className='align-center' bg={useColorModeValue('gray.100','gray.700')}  outline={'green.400'} border={'none'}>
                {props.children}
            </AccordionPanel>
    )
}
export {AccordionPanel2}
const AccordionButton2 = props =>{
    return(
        <div data-aos="fade-up">
        <AccordionButton padding={'15px'} _expanded={{ bg: '#48BB78', color: 'white'}} id={props.id} className={'accordion'} fontSize={'20px'} onClick={function(){
            $(props.id).toggleClass('accordion-active')
        }}>
            {props.children}
        </AccordionButton>
        </div>
    )
}
export {AccordionButton2}
const DisplayImg = props =>{
    return(
        <>
            <Box cursor={'pointer'} onClick={function(){window.location.href = props.href}} overflow={'hidden'} borderRadius={'10px'}> 
            <Flex overflow={'hidden'} transition={'linear all 0.25s'} bg={'gray.900'} zIndex={10} position={'absolute'} width={props.width ? (props.width) : ('400px')} height={props.height ? (props.height): ('500px')} opacity={'0'} borderRadius={'10px'} _hover={{opacity: '0.75'}}>
            <Flex overflow={'hidden'} width={props.width ? (props.width) : ('400px')} transform={"scale(1.1)"} _hover={{transform: 'scale(1)'}} height={props.height ? (props.height): ('500px')} alignItems={'center'} justifyContent={'center'} transition={'linear all 0.2s'}>
            <Box verticalAlign={'center'} textAlign={'center'} padding={'20px'}>
                <Text fontSize={'40px'}>{props.item}</Text>
                <Text fontSize={'18px'}>{props.desc}</Text>
            </Box>
            </Flex>
            </Flex>    
            <Image width={props.width ? (props.width) : ('400px')} height={props.height ? (props.height): ('500px')} src={props.src} effect='blur' />
            </Box>
        </>
    )
}
export {DisplayImg}