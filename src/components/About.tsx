import React, { useState, FC, Dispatch, SetStateAction } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import './style.tsx';
import { aboutB1, firstAnimation, secondAnimation } from "./style";

interface IProps {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
}

const About: FC<IProps> = ({active, setActive}) => {
    const [finish, setFinish] = useState(false);
    const contents = ["I'm a", 'software developer', 'located north of Toronto.'];

    const eventTrigger = () => {
        if(!finish){
            setFinish(true);
        } else {
            setTimeout(() => setActive(true), 2000);
        }
    }

    return (
        <Box sx={aboutB1}>
            <Typography component='div'>
                {
                    contents.map((snippet, idx) => {
                        return (
                            <Typography
                                key={`${snippet}`}
                                onAnimationEnd={ idx === 2 ? () => eventTrigger() : undefined}
                                sx={
                                    !finish ?
                                    {
                                        fontSize: '8vmin',
                                        color: '#c3ca86',
                                        textTransform: 'uppercase',
                                        lineHeight: 0.8,
                                        animation: idx !== 1 ? `${firstAnimation} ease-in 5s` : `${firstAnimation} ease-in 2s`,
                                    } : 
                                    {   
                                        display: active ? 'none' : 'block',
                                        opacity: '0',
                                        fontSize: '8vmin',
                                        color: '#c3ca86',
                                        textTransform: 'uppercase',
                                        lineHeight: 0.8,
                                        animation: idx !== 1 ? `${secondAnimation} ease-in 1s`: `${secondAnimation} ease-in 2s`,
                                    }
                            }>
                                {snippet}
                            </Typography >
                        )
                    })
                }
            </Typography>
        </Box>
    )
}

export default About