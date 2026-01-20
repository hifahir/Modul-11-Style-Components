import styled from 'styled-components';

// Membuat komponen Button dengan style
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  &:hover {
    background: palevioletred;
    color: white;
  }
`;

// Membuat komponen Wrapper (div) dengan style
const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <Button>Normal Button</Button>
      <Button>Styled Button</Button>
    </Wrapper>
  );
}

export default App;