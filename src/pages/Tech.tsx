import styled from '@emotion/styled';
import { IProps } from './Home';
import { Animate } from '../App';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 3.5rem;
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
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 700px;
  padding-top: 56px;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const TechItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const Title = styled.p`
  text-align: center;
  font-size: 55px;
  padding: 0;
  margin: 0;
  @media (max-width: 700px) {
    font-size: 45px;
  }
  @media (max-width: 450px) {
    font-size: 35px;
  }
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  font-size: 1rem;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 15px;
  @media (min-width: 500px) {
    font-size: 2rem;
  }
`;

// const Dash = styled.div`
//   padding: 0 0 0 1rem;
// `;

const Tech = ({ height }: IProps) => {
  const technologies = [
    { title: 'FRONT END', tech: ['REACT', 'NEXT JS'] },
    { title: 'BACK END', tech: ['NODE', 'EXPRESS'] },
    { title: 'API', tech: ['GRAPHQL', 'REST API'] },
    { title: 'DATABASE', tech: ['MYSQL', 'MONGODB', 'AIRTABLE'] },
  ];

  return (
    <Container id='technology'>
      <TechTitle height={height}>TECHNOLOGIES</TechTitle>
      <TechContainer>
        {/* <Animate className='hidden'> */}
        <CenterTech>
          {technologies.map(({ title, tech }) => {
            return (
              <Animate className='hidden'>
                <Stack>
                  <Title>{title}</Title>
                  <TechItemContainer>
                    {tech.map(item => {
                      return <TechItem>{item}</TechItem>;
                    })}
                  </TechItemContainer>
                </Stack>
              </Animate>
            );
          })}
        </CenterTech>
        {/* </Animate> */}
      </TechContainer>
    </Container>
  );
};

export default Tech;
