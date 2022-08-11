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
                            <Typography key={letter} sx={{fontSize: '14vw', lineHeight: '0.8', textAlign: 'center'}}>
                                { letter }
                            </Typography>
                        )
                    })
                }
        </Box>
    )
}

export default About