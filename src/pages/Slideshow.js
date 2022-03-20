import { Box, Button, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";
import "./overrides.css"
import {Navbar2} from '../components/navbar'
const edusave = [
    {
      url: '/photos/Edusave/Edusave2021.jpeg',
    },
    {
      url: '/photos/Edusave/Edusave2020.jpeg',
    },
    {
      url: '/photos/Edusave/Edusave2019.jpeg',
    },
    {
        url: '/photos/Edusave/Edusave2018.jpeg',
      },
      {
        url: '/photos/Edusave/Edusave2017.jpeg',
      },
  ];
  const cdc = [
    {
      url: '/photos/CDC/CDC2021.jpeg',
    },
    {
      url: '/photos/CDC/CDC2020.jpeg',
    },
    {
      url: '/photos/CDC/CDC2018.jpeg',
    },
    {
      url: '/photos/CDC/CDC2017.jpeg',
    },

  ];
  const coding = [
    {
      url: '/photos/Coding/CoSpaces2020.jpeg',
    },
    {
      url: '/photos/Coding/CodersPassion2021.jpeg',
    },
    {
      url: '/photos/Coding/CodersPassion2020.jpeg',
    },
  ];
  const progress = [
    {
      url: '/photos/Good Progress Award/GoodProgress2019.jpeg',
    }
  ];
  const school = [
    {
      url: '/photos/School/CSI2021.jpeg',
    }
  ];
  const others = [
    {
        url: '/photos/Others/Mathlympics2021.jpeg',
    },
    {
      url: '/photos/Others/FLS2021.jpeg',
    },
    {
      url: '/photos/Others/Music2019.jpeg',
    },
    {
      url: '/photos/Others/Swimming2019.jpeg',
    },
  ];
const Slideshow = () => {
    let { category } = useParams();
  if (category === 'edusave'){
    return (
        <>
        <Navbar2/>
        <Box height={'200px'} >
            <Carousel showArrows={true} swipeable={true} showThumbs={true} showStatus={true}>
        
                    {edusave.map((data) => <div><img className="carouselimg" src={data.url} alt={'hi'} /></div>)}
                </Carousel>
          </Box>
        </>
      )
    } else if (category === 'cdc'){
        return (
            <>
            <Navbar2/>
            <Box height={'200px'} >
                <Carousel showArrows={true} swipeable={true} showThumbs={true} showStatus={true}>
            
                        {cdc.map((data) => <div><img className="carouselimg" src={data.url} alt={'hi'} /></div>)}
                    </Carousel>
              </Box>
            </>
          )
    } else if (category === 'coding') {
        return (
            <>
            <Navbar2/>
            <Box height={'200px'} >
                <Carousel showArrows={true} swipeable={true} showThumbs={true} showStatus={true}>
            
                        {coding.map((data) => <div><img className="carouselimg" src={data.url} alt={'hi'} /></div>)}
                    </Carousel>
              </Box>
            </>
          )
    } else if (category === 'good-progress') {
        return (
            <>
            <Navbar2/>
            <Box height={'200px'} >
                <Carousel showArrows={true} swipeable={true} showThumbs={true} showStatus={true}>
            
                        {progress.map((data) => <div><img className="carouselimg" src={data.url} alt={'hi'} /></div>)}
                    </Carousel>
              </Box>
            </>
          )
    } else if (category === 'school') {
        return (
            <>
            <Navbar2/>
            <Box height={'200px'} >
                <Carousel showArrows={true} swipeable={true} showThumbs={true} showStatus={true}>
            
                        {school.map((data) => <div><img className="carouselimg" src={data.url} alt={'hi'} /></div>)}
                    </Carousel>
              </Box>
            </>
          )
    } else if (category === 'others') {
        return (
            <>
            <Navbar2/>
            <Box height={'200px'} >
                <Carousel showArrows={true} swipeable={true} showThumbs={true} showStatus={true}>
            
                        {others.map((data) => <div><img className="carouselimg" src={data.url} alt={'hi'} /></div>)}
                    </Carousel>
              </Box>
            </>
          )
    }
  }

export default Slideshow;