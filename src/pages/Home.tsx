import About from '../components/About';
import { Box } from '@mui/system';
import Intro from '../components/Intro';
import styled from '@emotion/styled';

export interface IProps {
  height: number;
  active?: boolean;
  setActive?: any;
}

const Andrew = styled.div<IProps>`
  font-size: ${({ height }) => (height <= 450 ? '8vw' : '13vw')};
  font-weight: 300;
  margin: 0;
  margin-bottom: 0.1rem;
  padding: 0;
  line-height: 0.65;
  padding-bottom: 0.5rem;
`;

const Software = styled.div<IProps>`
  display: inline-block;
  font-size: ${({ height }) => (height <= 450 ? '4vw' : '6vw')};
  font-weight: 600;
  line-height: 0.65;
`;

const Developer = styled.div<IProps>`
  display: inline-block;
  border: 1px solid black;
  font-size: ${({ height }) => (height <= 450 ? '3vw' : '5vw')};
  font-weight: 200;
  margin-left: 1;
  line-height: 0.65;
`;

const homeB1 = {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '55px',
};

const about = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const introduction = {
  paddingTop: '2.5rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Home = ({ height, active, setActive }: IProps) => {
  return (
    <Box id='about' sx={homeB1}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ width: '100%' }}>
          <Software height={height}>SOFTWARE</Software>
          <Developer height={height}>DEVELOPER</Developer>
        </Box>
        <Andrew height={height}>ANDREW BOYLE</Andrew>
      </Box>
      {active && (
        <Box sx={introduction}>
          <Intro active={active} setActive={setActive} />
        </Box>
      )}
      <Box sx={about}>
        {!active && <About active={active} height={height} />}
      </Box>
    </Box>
  );
};

export default Home;
