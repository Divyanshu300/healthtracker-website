import React from 'react'
import image1 from "../data/image1.jpeg";
import Ellipse1 from "../data/button1.png";

import InitialScreen from '../components/InitialScreen';

const Android1 = () => {
    return (
        <InitialScreen
            image={image1}
            text1="Track Your Goal"
            text2="Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals"
            Ellipse1 = {Ellipse1}
            linkto = "/next"
        />
    )
  }
  
  export default Android1