import styled from 'styled-components';

export const ContactUl = styled.ul`
  list-style: circle;
  margin: 0;
  padding: 30px 0px 30px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContactLi = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #bdbdbd;
`;
export const ContactBtn = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;
  color: tomato;
  background-color: #fff;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 250ms ease-in-out;
  :hover,
  :focus {
    color: red;
  }
`;
export const ContactInfo = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
