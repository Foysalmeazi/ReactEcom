import styled from 'styled-components';

export let ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.2rem;
  background:transparent;
  border:0.4rem solid var(--lightBlue);
  border-color:${props => props.cart? "var(--mainYellow)":"var(--lightBlue)"};
  color:${prop => prop.cart? "var(--mainYellow)":"var(--lightBlue)"};
  cursor:pointer;
  transitions:all 0.5s ease-in-out;
  &:hover
  {
    background:${prop => prop.cart? "var(--mainYellow)":"var(--lightBlue)"};
    color:var(--mainDark);
  }
  
  `;