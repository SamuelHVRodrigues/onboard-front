import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1``;

export const FormWrapper = styled.div``;

export const Form = styled.form`
  margin: 15px 0;
`;

export const Label = styled.label``;

export const Input = styled.input`
  border-style: solid;
  border-radius: 10px;
  height: 30px;
  width: 220px;
  display: block;
  margin-bottom: 10px;
`;

export const InputRadio = styled(Input)`
  height: 17px;
  width: 17px;
  display: inline;
  margin-left: 10px;
`;

export const StyledButton = styled.button`
  display: block;
  color: #fff;
  background-color: #3d7ec5;
  font-size: 15px;
  font-weight: bold;
  border-style: none;
  border-radius: 10px;
  width: 220px;
  height: 30px;
`;
