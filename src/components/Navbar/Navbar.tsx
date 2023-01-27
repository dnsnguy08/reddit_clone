import { Flex, Image } from "@chakra-ui/react"
import React from 'react';

const Navbar:React.FC = () => {
    
    return (
        <Flex bg="white" height="44px" padding="6px 12px">
            <Flex>
                <Image src='/images/redditFace.svg' height='30px'/>
                <Image 
                src='/images/redditText.svg'
                height='46px'
                display={{ base: "none", md: "unset" }}
                />
            </Flex>
            Navbar
        </Flex>
    );

};
export default Navbar;