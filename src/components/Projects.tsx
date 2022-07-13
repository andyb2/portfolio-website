import { Typography, Box } from "@mui/material";
import Nav from './Nav';
import { projectsB2 } from "./style";

const Projects = () => {
    const projectPage = true

    return (
    <Box
        id='projects'
        sx={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'white',
        }}
    >
      <Typography 
            sx={{
                fontSize: '14vw',
                fontWeight: '300',
                lineHeight: '0.65',
                color: 'black',
            }}
        >
           PROJECTS
        </Typography>
        <Box sx={projectsB2}>
            <Nav project={projectPage}/>
        </Box>
    </Box>
    )
}

export default Projects