import { useState } from 'react';
import Socials from './Socials';
import About from './About'
import { Box } from '@mui/system';
import Nav from './Nav';
import Intro from './Intro';
import styled from '@emotion/styled';

export interface Height {
    height: number
}

const Andrew = styled.div<Height>`
    color: #c3ca86;
    font-size: ${({ height }) => height <= 420 ? '8vw' : '13vw'};
    font-weight: 300;
    margin: 0;
    margin-bottom: 0.1rem;
    padding: 0;
    line-height: 0.65;
    padding-bottom: 0.5rem;
`

const Software = styled.div<Height>`
    display: inline-block;
    color: #c3ca86;
    font-size: ${({ height }) => height <= 420 ? '4vw' : '6vw'};
    font-weight: 600; 
    line-height: 0.65;
`

const Developer = styled.div<Height>`
    display: inline-block; 
    color: #c3ca86;
    border: 1px solid #d4db96;
    font-size: ${({ height }) => height <= 420 ? '3vw' : '5vw'};
    font-weight: 200;
    margin-left: 1;
    line-height: 0.65;
`

const homeB1 = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    minHeight: '100%',
    background: 'black',
}

const about = {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const introduction = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const homeB3 = {
    position: 'absolute',
    bottom: '0',
    right: '0',
}

const socials = {
    position: 'absolute',
    zIndex: '100',
    bottom: '0',
    left: '0',
    marginBottom: '0.4rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.1rem',
}

const Home = ({ height }: Height) => {
    const [active, setActive] = useState(true);
    const homePage = true;
    
    return (
        <Box id='about' sx={homeB1}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Box sx={{width: '100%'}}>
                    <Software height={height}> 
                        SOFTWARE 
                    </Software>
                    <Developer height={height}>
                        DEVELOPER
                    </Developer>
                </Box>
                <Andrew height={height}>
                    ANDREW BOYLE
                </Andrew>
            </Box>
            <Box sx={about}>
                {
                    !active && <About active={active} height={height}/>
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
            <Box sx={socials}>
                <Socials />
            </Box>
        </Box>
    )
}

export default Home