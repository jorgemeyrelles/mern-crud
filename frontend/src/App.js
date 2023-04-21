import React from 'react';
import './App.css';
import MainContainer from './components/Container';
import Header from './components/Header';
import List from './components/List';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <MainContainer>
      <Header />
      <List />
    </MainContainer>
  );
}

export default App;
