import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
export const Button = styled.button`
  width:100px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  background-color: rgb(243, 231, 64);
  color: #000000;
  font-weight: 500;
  cursor: pointer;

  text-align: center;
  transition: box-shadow 250ms linear;

  &:hover,
  &:focus {
     box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 0.75);`;
