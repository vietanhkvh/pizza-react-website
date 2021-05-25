import React from 'react'
import  {
    FeatureContainer,
    FeatureBtn

} from './FeatureElement'
const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the Day</h1>
            <p>Truffle alfredo sauce topped with 24 carat gold dust</p>
            <FeatureBtn>Order Now</FeatureBtn>
        </FeatureContainer>
    )
}

export default Feature
