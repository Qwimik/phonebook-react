import styled from 'styled-components';

export const FormLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LabelSpan = styled.span`
  margin-right: 10px;
  font-weight: 500;
`;

export const BtnSubmit = styled.button`
  cursor: pointer;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  padding: 5px 25px;
  border: none;
  outline: none;
  text-transform: uppercase;
  border-radius: 25px;
  font-size: 16px;
  letter-spacing: 0.02em;
  font-weight: 500;
  background-color: #eee;
  box-shadow: 0px 0px 5px -2px #242424;
  transition: box-shadow 250ms ease-in-out, background-color 250ms ease-in-out;
  :hover,
  :focus {
    box-shadow: 2px 2px 5px 0px #242424;
    background-color: #fff;
  }
`;

export const Input = styled.input`
  width: 180px;
  font-size: 16px;
  padding: 5px 20px;
`;
