import React from 'react';
import Button from '@material-ui/core/Button';
import Appbar from './Appbar';

import './App.css';

function App() {
  return (
    <>
    <Appbar />
    <Button variant={"contained"} color={"primary"}>
        Material UI
    </Button>
    </>
  );
}

export default App;
