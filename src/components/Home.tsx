import React, { useState } from 'react';
import Socials from './Socials';
import About from './About'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { homeB1, software, developer, andrew, homeB2, homeB3, homeB4 } from './style';
import Nav from './Nav';
import { truncateSync } from 'fs';


const Home = () => {
    const [active, setActive] = useState(false);
    const homePage = true

    return (
        <Box sx={homeB1}>
            <Box sx={{width: '100%'}}>
                <Typography id='about' sx={software}> 
                    SOFTWARE 
                </Typography>
                <Typography sx={developer}>
                    DEVELOPER
                </Typography>
            </Box>
            <Typography sx={andrew}>
                ANDREW BOYLE
            </Typography>
            <Box sx={homeB2}>
                <About active={active} setActive={setActive}/>
            </Box>
            <Box sx={homeB3}>
                <Nav home={homePage}/>
            </Box>
            <Box sx={homeB4}>
                <Socials />
            </Box>
        </Box>
    )
}

export default Home