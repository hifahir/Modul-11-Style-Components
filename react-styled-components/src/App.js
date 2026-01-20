import styled from 'styled-components';

// 1. Component WRAPPER (Wadah utama dari tugas sebelumnya)
const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

// 2. Component HEADING (Tugas Baru: h1..h6)
const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
  margin-bottom: 0.5em;

  border-bottom: 3px dashed palevioletred;
  padding-bottom: 10px;

  &:hover {
    color: #d65d83;
    cursor: default;
  }
`;

// 3. Component BUTTON (Tugas Baru: Button dengan pseudo-classes)
const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1.2em;
  margin: 1em;
  padding: 0.5em 1.5em;
  border: 2px solid palevioletred;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${props => props.primary ? "#d65d83" : "palevioletred"};
    color: white;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px); /* Tombol turun sedikit */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>
        Tugas React Styled-Components
      </Title>

      <div>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </div>
    </Wrapper>
  );
}

export default App;