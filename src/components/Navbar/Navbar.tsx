import { Flex } from "@chakra-ui/react"
import React from 'react';

const Navbar:React.FC = () => {
    
    return (
        <Flex bg="white" height="44px" padding="6px 12px">
            <Flex>
                <Image src='' height='30px'/>
                <Image src='' height='46px'/>
            </Flex>
            Navbar
        </Flex>
    );

};
export default Navbar;