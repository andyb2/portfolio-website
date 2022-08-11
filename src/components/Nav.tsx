import { FC } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-scroll";

interface IProps {
  home?: boolean,
  project?: boolean,
}

const Nav: FC<IProps> = ({ home, project }) => {

    return (
      <>
        { 
          home &&
            <Link to='projects' spy={true} smooth={true} duration={500}>
              <Typography sx={{ 
                position: 'relative',
                            zIndex: '100',
                            fontSize: '3rem',
                            fontWeight: '300',
                            margin: '0',
                            padding: '0',
                            '&:hover': { 
                                cursor: 'pointer'
                            },
                            '@media (max-width: 700px)': {
                              fontSize: '2.5rem',
                            }
                          }}
              >
                PROJECTS
              </Typography>
            </Link>  
        }
        {
          project && 
              <Link to="about" spy={true} smooth={true} duration={500}>
                <Typography sx={{padding: 0, fontSize: '3rem', fontWeight: '300', color: 'black', '&:hover': { cursor: 'pointer' } }}>
                  ABOUT
                </Typography>
              </Link>
        }
      </>
    )
}
export default Nav