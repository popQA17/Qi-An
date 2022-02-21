import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  Container,
  Stack,
  HStack,
  Image,
  extendTheme,
  Wrap,
  useMediaQuery,
  Heading,
  Icon,
  AccordionIcon,
  Accordion,
  Flex,
  VStack,
  List,
  ListItem,
  ListIcon,
  IconButton,
  OrderedList,
} from '@chakra-ui/react';
import TypeWriterEffect from 'react-typewriter-effect';
import { Card, HCard} from '../components/card';
import { DisplayImg, AccordionItem2 as AccordionItem, AccordionPanel2 as AccordionPanel, AccordionButton2 as AccordionButton} from '../components/card'
import { FiArrowRight } from 'react-icons/fi';
import { FaCss3, FaHtml5, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import {Navbar} from '../components/navbar'

function App() {
  const [desktop] = useMediaQuery('(min-width: 1200px)');
  const [phone] = useMediaQuery('(max-width: 800px)');
  return (
      <>
        <Navbar/>
      <Box h={'1px'}/>
      <Container maxW={'3x2'} alignItems={'center'} textAlign={'center'}>
        {desktop ? (
          <div data-aos="fade-up">
                  <HStack spacing={'30px'} alignSelf={'center'} width='100%'>
                  <Stack
                    as={Box}
                    spacing={{ base: 8, md: 14 }}
                    width={'50%'}
                    textAlign={'center'}
                    py={{ base: 20, md: 36 }}
                    >
                    <Box>
                    <Text fontSize={'130px'} fontWeight='600'>
                      I'm Qi An.
                    </Text>
                      <TypeWriterEffect
                      textStyle={{
                        color: '#68D391',
                        textAlign: 'center',
                        fontWeight: '600',
                        fontSize: '100px'
                      }}
                      cursorColor="#68D391"
                      multiText={[
                        'Programmer.',
                        'Robot Builder.',
                        'Leader.',
                        'Designer.'
                      ]}
                      multiTextDelay={5000}
                      multiTextLoop={true}
                      typeSpeed={70}/>
                      </Box>
                    <Stack
                      direction={'column'}
                      spacing={3}
                      alignSelf={'left'}
                      align={'center'}
                      position={'relative'}>
                      <Button
                        colorScheme={'green'}
                        bg={'green.400'}
                        rounded={'full'}
                        px={6}
                        size={'lg'}
                        _hover={{
                          bg: 'green.500',
                        }}
                        onClick={function(){
                          window.location.href = '#education'
                        }}
                        >
                        More <Icon as={FiArrowRight}/>
                      </Button>
                      <Box>
                      </Box>
                    </Stack>
                  </Stack>
                    <Box borderRadius={'50px'} maxW={'60%'} h='400px' padding={'50px'} >
                      <Stack spacing={'70px'}>
                        <Heading fontSize={'50px'} color='green.300'>About Myself</Heading>
                        <Box fontSize={'19px'} fontWeight={'600'} textAlign={'left'}>
                        <OrderedList>
                          <ListItem>Self-taught coder, heavily relies on W3schools</ListItem>
                          <ListItem>Love Robotics</ListItem>
                          <ListItem>Designing Websites</ListItem>
                          <ListItem>Creating public APIs and making bots</ListItem>
                        </OrderedList>
                        </Box>
                        <HStack spacing={'10px'} justifyContent={'center'}>
                          <Icon fontSize={'35px'} as={FaPython} />
                          <Icon fontSize={'35px'} as={FaNodeJs} />
                          <Icon fontSize={'35px'} as={FaHtml5} />
                          <Icon fontSize={'35px'} as={FaReact} />
                          <Icon fontSize={'35px'} as={FaCss3} />

                        </HStack>
                      </Stack>
                    </Box>
                  </HStack>
                  </div>

        ): (
          <Stack spacing={'30px'} alignSelf={'center'} width='100%'>
          <Stack
            as={Box}
            spacing={{ base: 8, md: 14 }}
            width={'100%'}
            textAlign={'center'}
            py={{ base: 20, md: 36 }}
            >
            <Box>
            <Text fontSize={phone ? ('50px') : ('130px')} fontWeight='600'>
              I'm Qi An.
            </Text>
              <TypeWriterEffect
              textStyle={{
                color: '#68D391',
                textAlign: 'center',
                fontWeight: '600',
                fontSize: phone ? ('50px') : ('100px')
              }}
              cursorColor="#68D391"
              multiText={[
                'Programmer.',
                'Robot Builder.',
                'Leader.',
                'Web Designer.'
              ]}
              multiTextDelay={5000}
              multiTextLoop={true}
              typeSpeed={70}/>
              </Box>
            <Stack
              direction={'column'}
              spacing={3}
              alignSelf={'left'}
              align={'center'}
              position={'relative'}>
              <Button
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'green.500',
                }}>
                  More <Icon as={FiArrowRight}/>
              </Button>
              <Box>
              </Box>
            </Stack>
          </Stack>
          <Box borderRadius={'50px'} w={'100%'} padding={'20px'} >
                      <Stack spacing={'50px'}>
                        <Heading fontSize={'35px'} width={'100%'} textAlign={'left'} color='green.300'>About Myself</Heading>
                        <Box fontSize={'19px'} fontWeight={'600'} textAlign={'left'}>
                        <OrderedList>
                          <ListItem>Self-taught coder, heavily relies on W3schools</ListItem>
                          <ListItem>Love Robotics</ListItem>
                          <ListItem>Designing Websites</ListItem>
                          <ListItem>Creating public APIs and making bots</ListItem>
                        </OrderedList>
                        </Box>
                        <HStack spacing={'10px'} justifyContent={'center'}>
                          <Icon fontSize={'35px'} as={FaPython} />
                          <Icon fontSize={'35px'} as={FaNodeJs} />
                          <Icon fontSize={'35px'} as={FaHtml5} />
                          <Icon fontSize={'35px'} as={FaReact} />
                          <Icon fontSize={'35px'} as={FaCss3} />

                        </HStack>
                      </Stack>
                    </Box>
          </Stack>
        )}
      </Container>
      <Box>
      <Stack>
      </Stack>
    </Box>
    <Box id='education' marginBottom={'100px'}/>
    <Heading marginLeft={'100px'} fontSize={'40px'}><HStack><Text>My</Text> <Text color={'green.300'}>Education</Text></HStack></Heading>
    <Stack padding={phone ? ('50px'):('100px')}>
      <HCard animate={"fade-right"} title='My School' desc="My school is SAPS, or more formally known as St Anthony's Primary School. I've been there since 2017 (P1), and I never regretted the moments I spent there. Expecially with all the kind teachers, CCAs, and facilities!" img={'https://scontent.fsin4-1.fna.fbcdn.net/v/t1.18169-9/10371415_685744331490625_6533045431933021046_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TbIqnC6UG7EAX99MSOk&_nc_ht=scontent.fsin4-1.fna&oh=00_AT9GUvpSpPYY8uSu2BC2niP9cMLe8pwnUCXqr3uDqpI4nw&oe=6235EEBA'} imgpos={'left'}/>
      <HCard animate={"fade-left"} title='Math Talent' desc='Math Talent is an extremely nice place to be. Every week, there are interesting math puzzles to solve!' imgpos={'left'} img={'https://aup.imgix.net/user_images/164014/private-lessons-math-analysis-algebra-probability-statistics-arabic-1616583057.jpg?ch=Width,DPR&fit=max&crop=faces&auto=format,compress&w=1024&h=567&dpr=0.8999999761581421&frame=1'}/>
      <HCard animate={"fade-left"} title='Robotics' desc='Ive been in robotics ever since the P2 appreciation workshop (2018). During Robotics, I managed to learn new stuff, such as Coding, Designing, and some parts of Engineering to allow the robot to move faster or turn quicker.' img={'https://i.ytimg.com/vi/M419X0zou7M/hqdefault.jpg'} imgpos={'left'}/>
    </Stack>
    <Box id='projects' marginBottom={'100px'}/>
    <Heading  marginLeft={'100px'} fontSize={'40px'}><HStack><Text>My</Text> <Text color={'green.300'}>Projects</Text></HStack></Heading>

    <Wrap padding={phone ? ('50px'):('100px')}>
      <Card href='https://somelist.tk' img={'https://i.imgur.com/9bdSZ9J.png'} title={'Somelist'} desc={'The perfect place to advertise your discord bot! '}/>
      <Card href='https://www.novus.tk' img={'https://i.imgur.com/mkRWqsh.png'} title={'Novus'} desc={'Organise lists, collaborate with others, and complete projects.'}/>
    </Wrap>
    <Box id='achievements' marginBottom={'100px'}/>
    <Heading marginLeft={'100px'} fontSize={'40px'}><HStack><Text>My</Text> <Text color={'green.300'}>Achievements</Text></HStack></Heading>
    <Box padding={phone ? ('50px'):('100px')}>
    <Accordion allowToggle>
      <AccordionItem outline={'none'} border={'none'}>
        <h2>
          <AccordionButton>
            <Box  flex='1' textAlign='left'>
              Certificates
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} outline={'none'} border={'none'}>
        <Flex justifyContent={'center'}>
          <VStack>
            <DisplayImg height={phone && '300px'} item={'Edusave Merit Awards'} desc={'Click to learn more.'}  src='photos\CDC\CDC2020.JPEG' href='/slideshow/cdc'/>
            <DisplayImg height={phone && '300px'} item={'Edusave Awards'} desc={'Click to learn more.'} src='photos\Edusave\Edusave2021.JPEG' href='/slideshow/edusave'/>
            <DisplayImg height={phone && '300px'} item={'Good Progress Awards'} desc={'Click to learn more.'} src='photos\Good Progress Award\GoodProgress2019.jpeg' href='/slideshow/good-progress'/>
            <DisplayImg height={phone && '300px'} width={'700px'} item={'Coding / Robotics Awards'} desc={'Click to learn more.'} src='photos\Coding\CoSpaces2020.jpeg' href='/slideshow/coding'/>
            <DisplayImg height={phone && '300px'} desc={'Click to learn more.'} item={'School Awards'} src='photos\School\CSI2021.JPEG' href='/slideshow/school'/>
            <DisplayImg height={phone && '300px'} width={'700px'} item={'Other awards'} desc={'Click to learn more.'} src='photos\Others\Mathlympics2021.jpeg' href='/slideshow/others' />
          </VStack>
        </Flex>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem outline={'none'} border={'none'}>
        <h2>
          <AccordionButton>
            <Box  flex='1' textAlign='left'>
              Medals
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} outline={'none'} border={'none'}>
          <Flex justifyContent={'center'}>
          <DisplayImg height={phone && '300px'} item={'Trophies'} desc={'Click to learn more.'} src='photos\Medals\Tesla2019.JPEG'/>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    </Box>
    <Box id='contact' marginBottom={'100px'}/>
    <Heading marginLeft={'100px'} fontSize={'40px'}><HStack><Text>My</Text> <Text color={'green.300'}>Contacts</Text></HStack></Heading>
    </>
  );
}

export default App;
