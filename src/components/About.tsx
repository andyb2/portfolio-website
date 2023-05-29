import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import { IProps } from '../pages/Home';
import { Animate } from '../App';

const aboutContainer = {
  minWidth: '100%',
  padding: '0.5rem 0 0.5rem 0',
};

const aboutContentSpacer = {
  display: 'flex',
  flexDirection: 'column',
};

const topLineContainer = {
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-start',
};

const aboutTextCenterContent = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
};

const AboutTextContainer = styled.div<IProps>`
  display: flex;
  max-width: 800px;
  padding: 10rem 3.5rem;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    gap: 0.1rem;
    padding: 10rem 1rem;
  }
`;

const AboutText = styled.p<IProps>`
  font-size: ${({ height }) => (height <= 450 ? '16px' : '25px')};
  display: flex;
  justify-content: center;
  margin: ${({ height }) => (height <= 450 ? '0.1rem' : '1rem')};
  text-align: center;
  width: 100%;
  padding: 0.5rem;
  text-transform: uppercase;
  margin: 0;
  @media (max-width: 600px) {
    margin: 0;
    padding: 0.5rem;
    width: 90%;
  }
  @media (max-width: 550px) {
    font-size: 18px;
  }
`;

const line = {
  display: 'flex',
  border: 'none',
  width: '0px',
  transition: '5s',
  '&.active': {
    width: 'none',
    flex: '2',
    height: '1px',
    backgroundColor: 'black',
  },
};

interface Active {
  active?: boolean;
  height: number;
}

const About = ({ active, height }: Active) => {
  const [animate, setAnimate] = useState(false);
  const aboutMe = [
    `Hi! I'm Andrew, and I'm a software developer specializing in the front end.`,
    ` I enjoy spending my time researching and developing various
  types of applications.`,
    `Sprinkle a little golf, hockey and videogames in there and
  you've got me figured out.`,
  ];

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, [active]);

  return (
    <Box sx={aboutContainer}>
      <Box sx={aboutContentSpacer}>
        <Box sx={topLineContainer}>
          <Box className={`${animate ? 'active' : ''}`} sx={line} />
        </Box>
        <Box sx={aboutTextCenterContent}>
          <AboutTextContainer height={height}>
            {aboutMe.map(text => {
              return (
                <Animate className='about hidden'>
                  <AboutText height={height}>{text}</AboutText>
                </Animate>
              );
            })}
          </AboutTextContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
