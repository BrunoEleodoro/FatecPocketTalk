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

                    <img
                        className="positioning"
                        src={"https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/88/1d/ef/881defdd-4db7-2356-983a-6ba7229560ce/AppIcon-0-1x_U007emarketing-0-0-85-220-10.png/690x0w.jpg"}
                        width="200"
                        alt="Fatec Pocket Logo"
                        style={{ borderRadius: '50%' }} />
                    <br></br>
                    <h2>Fatec Pocket</h2>
                    <br></br>
                    <p>Bruno Eleodoro Roza</p>
                </Step>
                <Step id={'about1'}
                    data={{
                        x: 1400,
                        y: 100,
                        z: -1500,
                    }} className="slide">
                    <Container>
                        <Row>
                            <Col xs={6}>
                                <img
                                    className="positioning"
                                    src={"https://raw.githubusercontent.com/BrunoEleodoro/brunoeleodoro.github.io/master/img/portfolio/69765719_412857762914209_1940159241545318400_n.jpg"}
                                    width="100%"
                                    alt="Foto Bruno" />
                            </Col>

                            <Col xs={6}>
                                <b>Bruno Eleodoro Roza</b>
                                <br /><br />
                                20 anos
                                <br /><br />
                                Segurança da Informação na Fatec de Americana
                                <br /><br />
                                Estagiário - Front End na IBM
                            </Col>
                        </Row>
                    </Container>
                </Step>
            </Impress>
        </div>
    );
}

export default App;
