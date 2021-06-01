import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Form from 'features/Form/Form';
import Seats from 'features/Seats/Seats';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Root = () => {
  const showValues = (values) => {
    console.log(values);
  };
  return (

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper className="App">
        <Form formValues={showValues} />
        <Seats />
      </Wrapper>
    </ThemeProvider>
  );
};
export default Root;
