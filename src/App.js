import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Impress, Step } from 'react-impressjs';
import './react-impressjs.css';
import { Container, Row, Col } from 'react-grid-system';

function App() {
  return (
    <div >
      <Impress fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>} progressOn={true}>
        <Step id={'primeiro'}
          data={{
            x: 100,
            y: 100,
          }} >
          <h1>Fatec Pocket</h1>

          {/* <img className="positioning" src={require('./imgs/flutter_talks.jpg')} width="300" alt="Flutter Talks" /> */}

        </Step>
        <Step id={'about1'}
          data={{
            x: 1400,
            y: 100,
            z: -1500,
          }} className="slide">
          <q>

            <br /><br />
            Bruno Eleodoro Roza
            <br /><br />
            Information Security at Fatec Americana
          </q>


          {/* <img className="positioning" src={require('./imgs/flutter_talks.jpg')} width="300" alt="Flutter Talks" /> */}

        </Step>
      </Impress>
    </div>
  );
}

export default App;
