import React from "react";
import styled from "styled-components";
import "./App.css";



const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  border: ${({isActive})=>
  isActive? '2px solid palevioletred' : '2px dotted palevioletred'};

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`

function App() {
  return <Button isActive={true} className="App">hello</Button>;
}

export default App;
