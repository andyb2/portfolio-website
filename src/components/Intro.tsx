import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { keyframes } from '@emotion/react';

const firstAnimation = keyframes`
    0% {
        color: white
    } 
    15% {
        color: white
    }
    25% {
        color: white
    }
    75% {
        color: black
    }
    100% {
        color: black
    }
`;

const secondAnimation = keyframes`
    0%,
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`;

const introBox1 = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '11rem 0 7.5rem 0',
  // height: '400px',
};

interface IProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Intro = ({ active, setActive }: IProps) => {
  const [finish, setFinish] = useState(false);
  const contents = ["I'm a", 'software developer', 'located north of Toronto.'];

  const eventTrigger = () => {
    if (!finish) {
      setFinish(true);
    }
  };

  useEffect(() => {
    if (finish) {
      setTimeout(() => setActive(false), 2000);
    }
  }, [finish, setActive]);

  return (
    <Box sx={introBox1}>
      {contents.map((snippet, idx) => {
        return (
          <Typography
            key={`${snippet}`}
            onAnimationEnd={idx === 2 ? () => eventTrigger() : undefined}
            sx={
              !finish
                ? {
                    fontSize: '8vmin',
                    color: 'black',
                    textTransform: 'uppercase',
                    lineHeight: 0.8,
                    animation:
                      idx !== 1
                        ? `${firstAnimation} ease-in 5s`
                        : `${firstAnimation} ease-in 2s`,
                  }
                : {
                    display: !active ? 'none' : 'block',
                    opacity: '0',
                    fontSize: '8vmin',
                    color: 'black',
                    textTransform: 'uppercase',
                    lineHeight: 0.8,
                    animation:
                      idx !== 1
                        ? `${secondAnimation} ease-in 1s`
                        : `${secondAnimation} ease-in 2s`,
                  }
            }
          >
            {snippet}
          </Typography>
        );
      })}
    </Box>
  );
};

export default Intro;
