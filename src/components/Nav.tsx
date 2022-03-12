import React, { FC } from "react"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Link } from "react-scroll"

interface IProps {
  home?: boolean,
  project?: boolean,
}

const Nav: FC<IProps> = ({ home, project }) => {
    return (
      <>
        { 
          home &&
            <Link to="projects" spy={true} smooth={true} duration={500}>
              <Typography sx={{ fontSize: '3rem', fontWeight: '300', padding: '0.5rem', '&:hover': { cursor: 'pointer' } }}>PROJECTS</Typography>
            </Link>  
        }
        {
          project && 
              <Link to="about" spy={true} smooth={true} duration={500}>
                <Typography sx={{padding: 0, fontSize: '3rem', fontWeight: '300', color: 'black', '&:hover': { cursor: 'pointer' } }}>ABOUT</Typography>
              </Link>
        }
      </>
    )
}
export default Nav