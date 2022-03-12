import { Typography, Box } from "@mui/material";
import Nav from './Nav';
import { homeB3, projectsB2 } from "./style";
// import { projects } from "../projects"

const Projects = () => {
    const projectPage = true

    return (
    <Box
        id='projects'
        sx={{
            position: 'relative',
            // padding: 0,
            width: '100vw',
            height: '100vh',
            border: '1px solid red',
        }}
    >
      <Typography 
            sx={{
                fontSize: '14vw',
                fontWeight: '300',
                lineHeight: '0.6',
                border: '1px solid red',
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