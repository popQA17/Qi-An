import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Button, useMediaQuery, HStack, Spacer, Stack, Icon, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import {FiAlignLeft} from 'react-icons/fi'
import $ from 'jquery'
import { FaChevronDown } from 'react-icons/fa';
const Navbar = () => {
    const [phone] = useMediaQuery('(max-width: 800px)')
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        $('.mobilenav').removeClass('mobilenav-active')
        if (window.scrollY <= 10) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
    return (
        <>
        {phone ? (
        <div data-aos="fade-down">
            <Stack spacing={'20px'} className={`mobilenav ${show && 'mobilenav-show'}`}>
            <HStack>
            <Button variant={'ghost'} width={'30px'} height={'30px'} padding={'30px'} size={'lg'} fontSize={'22px'} color={show && 'white'} onClick={
                function(){
                    $('.mobilenav').toggleClass('mobilenav-active')
                }
            }>
                <Icon as={FiAlignLeft}/>
            </Button>
            <Spacer/>
            <ColorModeSwitcher/>
            </HStack>
            <Button className='navlink' fontSize={'22px'} color={show && 'white'} size={'lg'} padding={'30px'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '#'
            }}
            >Home</Button>
            <Button className='navlink' fontSize={'20px'} color={show && 'white'} size={'lg'} padding={'30px'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '#education'
            }}>Education</Button>
            <Button className='navlink' fontSize={'20px'} color={show && 'white'} size={'lg'} padding={'30px'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '#projects'
            }}>Projects</Button>
            <Button className='navlink' fontSize={'20px'} color={show && 'white'} size={'lg'} padding={'30px'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '#achievements'
            }}>Acheivements</Button>
            <Button className='navlink' fontSize={'20px'} color={show && 'white'} size={'lg'} padding={'30px'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '#contact'
            }}>Contact</Button>
            </Stack>
        </div>
        ) : (
        <div data-aos="fade-down">
        <HStack className={`nav ${show && 'nav-show'}`}>
            <Button className='normalnavlink' fontSize={'25px'} color={show && 'white'} size={'lg'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '#'
            }}>Home</Button>
            <Button className='normalnavlink' fontSize={'20px'} color={show && 'white'} size={'lg'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '#education'
            }}>Education</Button>
            <Button className='normalnavlink' fontSize={'20px'} color={show && 'white'} size={'lg'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '#projects'
            }}>Projects</Button>
            <Button className='normalnavlink' fontSize={'20px'} color={show && 'white'} size={'lg'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '#achievements'
            }}>Achievements</Button>
            <Button className='normalnavlink' fontSize={'20px'} color={show && 'white'} size={'lg'} colorScheme={!show&& 'green'} variant={'ghost'} onClick={function(){
                window.location.href = '#contact'
            }}>Contact </Button>
            <Spacer/>
            <ColorModeSwitcher/>
        </HStack>
        </div>
        )}
        <Box height={'100px'} />
        </>
    )
}

export {Navbar}
const Navbar2 = () => {
    const [phone] = useMediaQuery('(max-width: 800px)')
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        $('.mobilenav').removeClass('mobilenav-active')
        if (window.scrollY <= 10) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
    return (
        <>
        {phone ? (
        <div data-aos="fade-down">
            <Stack spacing={'20px'} className={`mobilenav ${show && 'mobilenav-show'}`}>
            <HStack>
            <Button variant={'ghost'} width={'30px'} height={'30px'} padding={'30px'} size={'lg'} fontSize={'22px'} color={show && 'white'} onClick={
                function(){
                    $('.mobilenav').toggleClass('mobilenav-active')
                }
            }>
                <Icon as={FiAlignLeft}/>
            </Button>
            <Spacer/>
            <ColorModeSwitcher/>
            </HStack>
            <Button className='navlink' fontSize={'22px'} color={show && 'white'} size={'lg'} padding={'30px'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '#'
            }}
            >Home</Button>
            <Button className='navlink' fontSize={'20px'} color={show && 'white'} size={'lg'} padding={'30px'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '#education'
            }}>Education</Button>
            <Button className='navlink' fontSize={'20px'} color={show && 'white'} size={'lg'} padding={'30px'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '#projects'
            }}>Projects</Button>
            <Button className='navlink' fontSize={'20px'} color={show && 'white'} size={'lg'} padding={'30px'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '#achievements'
            }}>Acheivements</Button>
            <Button className='navlink' fontSize={'20px'} color={show && 'white'} size={'lg'} padding={'30px'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '#contact'
            }}>Contact</Button>
            </Stack>
        </div>
        ) : (
        <div data-aos="fade-down">
        <HStack className={`nav ${show && 'nav-show'}`}>
            <Button className='normalnavlink' fontSize={'25px'} color={show && 'white'} size={'lg'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '/#'
            }}>Home</Button>
            <Button className='normalnavlink' fontSize={'20px'} color={show && 'white'} size={'lg'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '/#achievements'
            }}>Achievements</Button>
            <Button className='normalnavlink' fontSize={'20px'} color={show && 'white'} size={'lg'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '/slideshow/cdc'
            }}>CDC</Button>
            <Button className='normalnavlink' fontSize={'20px'} color={show && 'white'} size={'lg'} colorScheme={!show&& 'green'} variant={'ghost'}onClick={function(){
                window.location.href = '/slideshow/edusave'
            }}>Edusave</Button>
            <Button className='normalnavlink' fontSize={'20px'} color={show && 'white'} size={'lg'} colorScheme={!show&& 'green'} variant={'ghost'} onClick={function(){
                window.location.href = '/slideshow/coding'
            }}>Coding </Button>
            <Menu>
            <MenuButton className='normalnavlink' fontSize={'20px'} color={show && 'white'} size={'lg'} colorScheme={!show&& 'green'} variant={'ghost'} as={Button} rightIcon={<FaChevronDown/>}>
                More
            </MenuButton>
            <MenuList border={'none'} outline={'none'} fontSize={'20px'}>
                <MenuItem onClick={function(){window.location.href='/slideshow/Medals'}}>Medals</MenuItem>
                <MenuItem onClick={function(){window.location.href='/slideshow/good-progress'}}>Good Progress</MenuItem>
                <MenuItem onClick={function(){window.location.href='/slideshow/school'}}>School</MenuItem>
                <MenuItem onClick={function(){window.location.href='/slideshow/others'}}>Others</MenuItem>
            </MenuList>
            </Menu>
            <Spacer/>
            <ColorModeSwitcher/>
        </HStack>
        </div>
        )}
        <Box height={'100px'} />
        </>
    )
}

export {Navbar2}