import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
export const Col = styled.div`
  flex-grow: 1;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  height: 400px;
  margin-top: 70px;
`;
export const H2 = styled.h2`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #3dcc91;
  text-transform: capitalize;
  padding-bottom: 10px;
`;
export const H6 = styled.h6`
  color: red;
  text-align: center;
  font-style: bold;
  font-size: 12px;
`;
export const SubHeading = styled.p`
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: 12px;
`;
export const LegalCopy = styled.p`
  text-align: center;
  margin-top: 10px;
  color: red;
  text-transform: capitalize;
  color: #333;
  font-size: 12px;
  line-height: 1.5em;
`;
export const H3 = styled.h4`
  text-align: right;
  font-size: 10px;
  padding-bottom: 10px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;
export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const InputWrapper = styled.div`
  flex-grow: 1;
  margin-right: 10px;
  margin-bottom: 5px;
`;
export const NameWrapperInput = styled.div`
  flex-grow: 1;
  margin-left: 10px;
`;
export const SpanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  flex-grow: 1;
  text-align: center;
  display: block;
  text-transform: uppercase;
`;

export const SpanBorder = styled.span`
  flex-grow: 1;
  margin-bottom: 5px;
  display: block;
  border-bottom: 1px solid grey;
`;
