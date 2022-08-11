import { useState } from "react";
import { Typography, Box, Link } from "@mui/material";
import Nav from './Nav';
import { projectsB2 } from "./style";
import { projects } from '../projects';

const Projects = () => {
    const [transitioned, setTransitioned] = useState<boolean | number>(false);
    const projectPage = true;
    let timeout: NodeJS.Timeout;

    const boxExpanded = (idx: number) => {
        timeout = setTimeout(() => setTransitioned(idx), 600);     
    }

    const boxClosed = (bool: boolean) => {
        clearTimeout(timeout);
        setTransitioned(bool);
    }

    return (
    <Box
        id='projects'
        sx={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
      <Typography sx={{
                    fontSize: '14vw',
                    fontWeight: '300',
                    lineHeight: '0.65',
                    paddingBottom: '1.8rem',
                    color: 'black',
                }}
        >
           PROJECTS
        </Typography>
        <Box sx={{
                position: 'relative',
                display: 'flex',
                color: 'black',
                gap: '1rem',
                height: '100%',
                maxWidth: '1000px',
            }}>
            {
                projects.map((project, idx) => {
                    
                    return (
                        <Box onMouseEnter={() => boxExpanded(idx)}
                             onMouseLeave={() => boxClosed(false)}
                             key={`${project.title}${idx}`}
                             sx={{
                                height: '100%',
                                background: 'lightgrey',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                flexDirection: transitioned === idx ? 'row' : 'column',
                                // gap: '10rem',
                                padding: '1rem',
                                transition: '1s',
                                ':hover': {
                                    background: 'white',
                                    flex: '2',
                                    border: 'none',
                            },  
                        }}>
                            <Typography sx={{
                                    display: transitioned === idx ? 'none' : 'flex',
                                    whiteSpace: 'pre',
                                    fontSize: '30px',
                                    width: transitioned === idx ? 'none' : '1rem',
                                    zIndex: '100',
                                    color: 'black',        
                                    transform: 'rotate(90deg)',
                                    // '@media (max-width: 1000px)': {
                                    //     fontSize: '25px',
                                    // }
                                }}>
                                    { project.title }
                            </Typography>
                            {
                                transitioned === idx &&
                                <Box sx={{
                                    width: '100%', 
                                    padding: '2rem',
                                    '@media (max-width: 600px)': {
                                        padding: '0'
                                    }
                                }}>
                                    <Box component='h1'
                                         sx={{
                                            '@media (max-width: 600px)': {
                                                fontSize: '22px',
                                            }
                                        }}
                                    >
                                        {project.title}
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginBottom: '1rem',
                                    }}>
                                        {
                                            project.tech.map((tech, idx) => {
                                                return (
                                                    <Box key={`${tech}${Math.random()*idx*7}`} sx={{
                                                        '@media (max-width: 600px)': {
                                                            fontSize: '14px',
                                                        }    
                                                    }}>
                                                        { tech }
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Box>
                                    <Box sx={{
                                            padding: '2rem', 
                                            maxWidth: '60%',
                                            minWidth: '60%',
                                            width: '60%',
                                            '@media (max-width: 600px)': {
                                                padding: '0',
                                                fontSize: '16px',
                                                width: '100%',
                                                maxWidth: 'none',
                                                minWidth: 'none',
                                            }
                                            }}>
                                        { project.description }
                                    </Box>
                                    <Box sx={{
                                            padding: '2rem',
                                            '@media (max-width: 600px)': {
                                                padding: '0',
                                                fontSize: '12px',
                                                marginTop: '2rem',
                                            }
                                        }}>
                                        <Link href={`${idx === 0 ? 'https://github.com/andyb2/Spotify-User-Profile' : project.link}`} target='_blank'>
                                            { project.link }
                                        </Link>
                                    </Box>
                                </Box>
                            }
                        </Box>
                    )
                })
            }
        </Box>
        <Box sx={projectsB2}>
            <Nav project={projectPage}/>
        </Box>
    </Box>
    )
}

export default Projects