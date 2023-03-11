import { Icon } from '@mui/material';
import { Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from '@emotion/styled';

const style = {
  color: 'black',
  fontSize: '35px',
  marginLeft: '0.1rem',
};

const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
`;

const iconCenter = { display: 'flex', justifyContent: 'center' };

const Socials = () => {
  return (
    <SocialsContainer>
      <Link
        href='https://github.com/andyb2'
        aria-label='Github icon'
        target='_blank'
        style={iconCenter}
      >
        <Icon sx={style} component={GitHubIcon} />
      </Link>
      <Link
        href='https://www.linkedin.com/in/andrew-boyle-a9a596204/'
        aria-label='LinkedIn Icon'
        target='_blank'
        style={iconCenter}
      >
        <Icon
          sx={{ color: 'black', fontSize: '41.76px', marginLeft: '0.1rem' }}
          component={LinkedInIcon}
        />
      </Link>
    </SocialsContainer>
  );
};

export default Socials;
