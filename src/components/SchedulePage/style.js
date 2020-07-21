import styled from "styled-components";
import { Accordion } from "semantic-ui-react";

export const Container = styled.div`
  width: 100%;
  padding: 3% 10%;
  box-sizing: border-box;

  @media (max-width: 769px) {
    padding: 3% 10px;
  }
`;
export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const DivGroup = styled.div`
  margin-bottom: 2em;
  width: 100%;
`;
export const Label = styled.label`
  display: block;
  font-size: 1em;
  padding-bottom: 0.5em;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8em 1em;
  outline: none;
  border: 1px solid #999999;
  border-radius: 5px;
`;
export const DivGroupCollapsible = styled.div`
  background: teal;
  color: #ffffff;
  padding: 0.5em 1em;
  border-radius: 0.3em;
  margin-bottom: 2em;
`;
export const AccordionStyle = styled(Accordion)`
  width: 100% !important;
  margin-bottom: 2em;
`;
export const Flex = styled.div`
  width: 100% !important;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  margin-bottom: 2em;
  div {
    border: 0.5px solid #999999;
    padding: 1em;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export const Grid = styled.div`
  width: 100% !important;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
`;
export const DivGroupAccordion = styled.div`
  padding: 1em 0;
`;
export const Select = styled.select`
  padding: 0.8em 1em;
  border: 1px solid #999999;
  border-radius: 5px;
  width: 100%;
  outline: none;
`;
export const Button = styled.button`
  padding: 1em;
  border: none;
  outline: none;
  border-radius: 0.4em;
  background-color: teal;
  color: #ffffff;
  cursor: pointer;
`;
export const ErrorLabel = styled.div`
  color: orangered;
  padding-top: 4px;
`;
