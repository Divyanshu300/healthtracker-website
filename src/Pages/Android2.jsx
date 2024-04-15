import React from 'react'
import image2 from "../data/image2.jpeg";
import button2 from "../data/button2.png"

import InitialScreen from '../components/InitialScreen';


const Android2 = () => {
    return ( 
        <InitialScreen
            image={image2}
            text1="Get Burn"
            text2="Let’s keep burning to achieve your goals, it hurts only temporarily,
            if you give up now you will be in pain forever"
            Ellipse1={button2}
            classname1="mt-10"
            value="Android2"
        />
    )
  }
  
  export default Android2