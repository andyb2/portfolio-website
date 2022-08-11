import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const About = () => {
    const [ letters, setLetters ] = useState<string[]>([]);
    const about = ['B', 'O', 'U', 'T'];

    useEffect(() => {
        const showLetters = () => {
            for (let i=0; i<4; i++) {
                setTimeout(() => {
                    setLetters(letters => [...letters, about[i]])
                }, i*500);
            }
        }
        showLetters();
    }, [])

    return (
        <Box>
            {/* <Box> */}
                {
                    letters.map(letter => {
                        return (
                            <Typography key={letter} 
                                        sx={{
                                            fontSize: '150px',
                                            lineHeight: '0.8',
                                            textAlign: 'center',
                                            '@media (max-width: 1100px)': {
                                                fontSize: '125px'
                                            },
                                            '@media (max-width: 900px)': {
                                                fontSize: '100px',
                                            },
                                            '@media (max-width: 700px)': {
                                                fontSize: '75px',
                                            },
                                            '@media (max-width: 530px)': {
                                                fontSize: '50px',
                                            },
                                            '@media (max-width: 350px)': {
                                                fontSize: '40px',
                                            },
                                        }}
                            >
                                { letter }
                            </Typography>
                        )
                    })
                }
        </Box>
    )
}

export default About