import React, {useState} from 'react'
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn
} from './HeroElements'
const Hero = () => {
   
    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Delicious Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 second</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
