import styled from 'styled-components';

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  :hover:nth-child(1) {
    
    border: 4px solid brown;
    border-radius: 5px;
    cursor: pointer;
    color: brown;
  }
  :hover:nth-child(2) {
  
    border: 4px solid brown;
    border-radius: 5px;
    cursor: pointer;
    color: brown;
  }
  :hover:nth-child(3) {
   
    border: 4px solid brown;
    border-radius: 5px;
    cursor: pointer;
    color: brown;
  }
`;

export const ButtonBack = styled.button`
  width: 75px;
  padding: 10px;
  font-size: medium;
  border: 1px solid linen;
  background-color: linen;
  color: brown;
  border-radius: 5px;
`;