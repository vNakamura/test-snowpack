import React, { useState } from 'react';
import { Flex, Box } from 'reflexbox';
import logo from './logo.svg';
import './App.css';

import Card from './Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Flex>
          <img src={logo} className="App-logo" alt="logo" />
          <Box>
            <Card css="color: red">Hello!!</Card>
            <p>
              Edit <code>src/App.jsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </Box>
        </Flex>
      </header>
    </div>
  );
}

export default App;
