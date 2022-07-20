import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Icon, Spacer, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
 import "./slide.css"

import {Image} from "@chakra-ui/react"

const imgArray=[
    "https://files.myglamm.com/site-images/original/1920x527-(5).jpg",
    "https://files.myglamm.com/site-images/original/Homepage-desktop-lipstikcks.jpg",
    "https://files.myglamm.com/site-images/original/SK-Survey-1920x527_1.jpg",
    "https://files.myglamm.com/site-images/original/1920-x-527-(1).jpg",
    "https://files.myglamm.com/site-images/original/Carousel-(Desktop)---1920-527-_1.gif",
    "https://files.myglamm.com/site-images/original/1920-x-527-(1).jpg",
    
]
let slideIndex = 0;

function SlideShow(){
    const [slideContent, setSlideContent] = useState([imgArray[0]]);

    function slideScroll(scroll) {
      slideIndex = slideIndex + scroll;
      if (slideIndex < 0) {
        slideIndex = imgArray.length - 1;
      }
      if (slideIndex >= imgArray.length) {
        slideIndex = 0;
      }
      setSlideContent([imgArray[slideIndex]]);
    }

    return (
        <Box w="1500px" ml="-150px">
          <div className="slide-show">
          <div className="slide">
            <div className="slide-text">{slideContent[1]}</div>
            <div className="image">
              <img className="expand" alt="imageSlide" src={slideContent[0]} />
            </div>
          </div>
  
          <div onClick={() => slideScroll(-1)} className="arrows left-arrow">
            <Icon as={ArrowBackIcon} color='red.500'/>
          </div>
          <div onClick={() => slideScroll(1)} className="arrows right-arrow">
          <Icon as={ArrowForwardIcon} color='red.500' ml="-350px"/>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <Spacer/>
        <VStack spacing={4} w="700px" ml="400px" justifyContent={"center"} alignItems={"center"} textAlign={"center"} mb="55px">
        <Image src="https://files.myglamm.com/site-images/original/proposition-banner-2240x614_1.jpg"></Image>
      
        <br/>
        <Image src="https://files.myglamm.com/site-images/original/1920x527-(6).jpg"></Image>
        </VStack>
        </Box>
    
    )
}
export default SlideShow;