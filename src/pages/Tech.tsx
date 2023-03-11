import styled from '@emotion/styled';
import { IProps } from './Home';
import { Animate } from '../App';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TechTitle = styled.p<IProps>`
  font-size: ${({ height }) => (height <= 450 ? '8vw' : '13vw')};
  line-height: 0.65;
  margin: 0;
  padding: 0;
  color: black;
`;

const TechContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const CenterTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 250px;
  padding-top: 56px;
  @media (min-width: 500px) {
    max-width: 375px;
  }
`;

const TechItem = styled.div`
  display: flex;
  font-size: 1rem;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  @media (min-width: 500px) {
    font-size: 2rem;
  }
`;

const Tech = ({ height }: IProps) => {
  const technologies = [
    'REACT',
    'NEXT',
    'EXPRESS',
    'NODE',
    'GRAPHQL',
    'REST API',
    'MYSQL',
    'MONGODB',
  ];
  return (
    <Container>
      <TechTitle height={height}>TECHNOLOGIES</TechTitle>
      <TechContainer>
        <Animate className='hidden'>
          <CenterTech>
            {technologies.map((tech, idx) => {
              if (idx % 2 === 0) {
                return (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <TechItem>{tech}</TechItem>
                    <div
                      style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
                    >
                      -
                    </div>
                  </div>
                );
              }
              return <TechItem>{tech}</TechItem>;
            })}
          </CenterTech>
        </Animate>
      </TechContainer>
    </Container>
  );
};

export default Tech;
