import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Form from 'features/Form/Form';

const Root = () => {
  const showValues = (values) => {
    console.log(values);
  };
  return (

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Form formValues={showValues} />
      </div>
    </ThemeProvider>
  );
};
export default Root;
