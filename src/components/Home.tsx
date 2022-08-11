import { useState } from 'react';
import Socials from './Socials';
import About from './About'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { homeB1, software, developer, andrew, homeB2, homeB3, homeB4 } from './style';
import Nav from './Nav';
import Intro from './Intro';

const Home = () => {
    const [active, setActive] = useState(true);
    const homePage = true;

    return (
        <Box id='about' sx={homeB1}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Box sx={{width: '100%'}}>
                    <Typography sx={software}> 
                        SOFTWARE 
                    </Typography>
                    <Typography sx={developer}>
                        DEVELOPER
                    </Typography>
                </Box>
                <Typography sx={andrew}>
                    ANDREW BOYLE
                </Typography>
            </Box>
            {
                !active && 
                    <Box sx={{
                        display: 'flex',
                    }}>
                        <About />
                    </Box>
            }
            <Box sx={homeB2}>
                { active && <Intro active={active} setActive={setActive}/> }
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