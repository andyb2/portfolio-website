import { Icon } from "@mui/material";
import { Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const style = {
    color: '#c3ca86',
    fontSize: '35px',
    marginLeft: '0.1rem',
    // '@media (orientation: landscape)': {
    //     fontSize: '40px',
    // },
}

const Socials = () => {
    return (
        <>
            <Link href="https://github.com/andyb2" target='_blank'>
                <Icon sx={style} component={GitHubIcon}/>
            </Link>
            <Link href="https://www.linkedin.com/in/andrew-boyle-a9a596204/" target='_blank'>
                <Icon sx={style} component={LinkedInIcon}/>
            </Link>
        </>
    )
}

export default Socials