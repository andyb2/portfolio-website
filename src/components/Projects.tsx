import { useState } from "react";
import { Typography, Box, Link } from "@mui/material";
import Nav from './Nav';
import { projects } from '../projects';
import styled from "@emotion/styled";

const projectContainer = {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
}

interface Height {
    height: number
}

const ProjectsTitle = styled.div<Height>`
    font-size: ${({ height }) => height <= 420 ? '8vw' : '13vw'};
    font-weight: 300;
    line-height: 0.65;
    padding-bottom: 1.8rem;
    color: black;
`

const projectsB2 = {
    position: 'absolute',
    color: 'red',
    bottom: '0',
    verticalAlign: 'text-bottom',
    right: '0',
    pr: '1rem'
}

interface Height {
    height: number
}

const Projects = ({ height }: Height) => {
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
    <Box id='projects' sx={projectContainer}>
        <ProjectsTitle height={height}>
           PROJECTS
        </ProjectsTitle>
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
                                background: 'lightgrey',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                flexDirection: transitioned === idx ? 'row' : 'column',
                                padding: '2rem',
                                transition: '1s',
                                ':hover': {
                                    background: 'white',
                                    flex: '2',
                                    border: 'none',
                                    '@media (max-width: 330px)': {
                                        padding: '0.1rem',
                                    },
                                    '@media (max-width: 1000px)': {
                                        '@media (orientation: landscape)': {
                                            padding: '0.1rem',
                                        }
                                    }
                                },
                                '@media (max-width: 1000px)': {
                                    padding: '1rem',
                                },
                             }}
                        >
                            <Typography sx={{
                                    display: transitioned === idx ? 'none' : 'flex',
                                    whiteSpace: 'pre',
                                    fontSize: '30px',
                                    width: transitioned === idx ? 'none' : '1rem',
                                    zIndex: '100',
                                    color: 'black',        
                                    transform: 'rotate(90deg)',
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
                                    },
                                    '@media (orientation: landscape)': {
                                        '@media (max-width: 1000px)': {
                                            padding: '0',
                                        }
                                    }
                                }}>
                                    <Box component='h1'
                                         sx={{
                                            '@media (max-width: 600px)': {
                                                fontSize: '22px',
                                            },
                                            '@media (max-width: 1000px)': {
                                                '@media (orientation: landscape)': {
                                                    fontSize: '18px',
                                                }
                                            }
                                        }}
                                    >
                                        {project.title}
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginBottom: '1rem',
                                        '@media (max-width: 1000px)': {
                                            '@media (orientation: landscape)': {
                                                flexDirection: 'row',
                                                gap: '0.5rem',
                                                marginBottom: '0.5rem',
                                             },  
                                        },  
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
                                            overflow: 'hidden', 
                                            maxWidth: '60%',
                                            minWidth: '60%',
                                            width: '60%',
                                            '@media (max-width: 600px)': {
                                                padding: '0',
                                                fontSize: '16px',
                                                width: '100%',
                                                maxWidth: 'none',
                                                minWidth: 'none',
                                            },
                                            '@media (max-width: 330px)': {
                                                fontSize: '12px',
                                            },
                                            '@media (max-width: 900px)': {
                                                '@media (orientation: landscape)': {
                                                    padding: '0',
                                                    width: '100%',
                                                    maxWidth: '600px',
                                                    minWidth: 'none',
                                                },
                                            },
                                            }}>
                                        { project.description }
                                    </Box>
                                    <Box sx={{
                                            padding: '2rem',
                                            '@media (max-width: 600px)': {
                                                padding: '0',
                                                fontSize: '12px',
                                                marginTop: '2rem',
                                            },
                                            '@media (max-width: 1000px)': {
                                                '@media (orientation: landscape)': {
                                                    padding: '0',
                                                    marginTop: '1rem',
                                                },
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