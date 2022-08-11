import { useState } from 'react';
import Socials from './Socials';
import About from './About'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { homeB3 } from './style';
import Nav from './Nav';
import Intro from './Intro';

export const homeB1 = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    minHeight: '100%',
    background: 'black',
}

export const software = {
    display: 'inline-block',
    fontSize: '6vw',
    fontWeight:'600', 
    lineHeight: '0.65',
}

export const developer = {
    display: 'inline-block', 
    border: '1px solid #d4db96',
    fontSize: '5vw',
    fontWeight: '200',
    ml: 1,
    lineHeight: '0.65',
}


export const andrew = {
    fontSize: '14vw',
    fontWeight: '300',
    margin: '0',
    padding: '0',
    lineHeight: '0.65',
    paddingBottom: '0.5rem',
    // '@media (orientation: landscape)': {
    //     fontSize: '11vw',
    // }
}

const about = {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const introduction = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const homeB4 = {
    position: 'absolute',
    zIndex: '100',
    bottom: '0',
    left: '0',
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.1rem',  
}

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
            <Box sx={about}>
                {
                    !active && <About active={active}/>
                }
            </Box>
            { active && 
                <Box sx={introduction}>
                    <Intro active={active} setActive={setActive}/>
                </Box>
            }
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