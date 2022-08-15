import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";

interface Height {
    height: number
}

const AboutTextContainer = styled.div<Height>`
    display: flex; 
    max-width: 800px; 
    gap: ${({ height }) => height <= 420 ? '0.1rem' : '1rem'};
    flex-direction: column; 
    justify-content: center;
    align-items: center; 
    padding: 0 2rem 0 2rem;
    @media (max-width: 600px) {
        gap: 0.1rem;
    }
`

const AboutText = styled.p<Height>`
    font-size: ${({ height }) => height <= 420 ? '16px' : '25px'};
    color: #c3ca86;
    display: flex;
    justify-content: center;
    margin: ${({ height }) => height <= 420 ? '0.1rem' : '1rem'};
    text-align: center;
    width: 100%;
    @media (max-width: 600px) {
        margin: 0;
        padding: 0.5rem;
        width: 90%;
    }
    @media (max-width: 550px) {
        font-size: 18px;
    }
`

const line = {
    display: 'flex',
    border: 'none',
    width: '0px',
    transition: '5s',
    '&.active': {
        width: 'none',
        flex: '2',
        height: '6px',
        backgroundColor: '#c3ca86',
    }
}

const aboutText: any = {
    fontSize: '25px',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    '@media (max-width: 900px)': {
        fontSize: '20px',
    },
    '@media (max-width: 700px)': {
        '@media (orientation: landscape)': {
            fontSize: '16px',
        }
    }
}

const aboutTextContainer: any = {
    display: 'flex', 
    maxWidth: '800px', 
    gap: '1rem',
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center', 
    padding: '0 2rem 0 2rem',
    '@media (max-width: 700px)': {
        '@media (orientation: landscape)': {
            gap: '0.1rem',
        }
    }
}

interface Active {
    active: boolean
    height: number
}

const About = ({ active, height }: Active) => {
    const [ animate, setAnimate ] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 100);
    }, [active])

    return (
        <Box sx={{
            minWidth: '100%',
            padding: '0.5rem 0 0.5rem 0',
            zIndex: '100',
            height: '100%',
            minHeight: '100%',
        }}>
            <Box sx={{display: 'flex', flexDirection: 'column', height:'100%', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', width: '100%', justifyContent: 'flex-start'}}>
                    <Box className={`${ animate ? 'active' : '' }`} sx={line}>
                    
                    </Box>
                </Box>
                <Box sx={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <AboutTextContainer height={height}>
                        <AboutText height={height}> 
                            Hi! I'm Andrew, and I'm an aspiring software developer.
                        </AboutText>
                        <AboutText height={height}>
                            I enjoy spending my time researching and developing various types of applications.
                        </AboutText>
                        <AboutText height={height}>
                            Sprinkle a little golf, hockey and videogames in there and you've got me figured out.
                        </AboutText>
                    </AboutTextContainer>
                </Box>
                <Box sx={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                    <Box className={`${ animate ? 'active' : '' }`} sx={line}>
                    
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default About