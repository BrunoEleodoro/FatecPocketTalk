import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Impress, Step } from 'react-impressjs';
import './react-impressjs.css';
import { Container, Row, Col } from 'react-grid-system';
import { Stepper, StepLabel } from "@material-ui/core";
import StepMaterial from "@material-ui/core/Step"

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

        <Step id={'historia'}
          data={{
            x: 950,
            y: 3000,
            rotateZ: 90,

          }} className="slide">
          <Container>
            <Row>
              <Col xs={12}>
                História do App
                <br></br>
                <br></br>
                <Stepper alternativeLabel activeStep={3}>
                  <StepMaterial key={"2018"}>
                    <StepLabel>2018</StepLabel>
                  </StepMaterial>
                  <StepMaterial key={"2018"}>
                    <StepLabel>2019</StepLabel>
                  </StepMaterial>
                  <StepMaterial key={"2020"}>
                    <StepLabel>2020</StepLabel>
                  </StepMaterial>
                </Stepper>
              </Col>
            </Row>
          </Container>
        </Step>

        <Step id={'sobre_app_2018'}
          data={{
            x: 950,
            y: 3000,
            z: -5000,
            rotateZ: 90,

          }} className="slide">
          <Container>
            <Row>
              <Col xs={12}>
                <br></br>
                <h1>2018</h1>
                <br></br>
                <br></br>
                - 7 de Julho de 2018 Primeira Versão
                <br></br>
                <br></br>
                - Coletava os dados do SIGA simulando um browser no app.
                <br></br>
                <br></br>
                - Super Instável
                <br></br>
                <br></br>
                - Java (Somente Android) - Realm Database
              </Col>
            </Row>
          </Container>
        </Step>

        <Step id={'print_2018_1'}
          data={{
            x: 950,
            y: 4000,
            z: -5000,
            rotateZ: 90,

          }} >
          <center>
            <img src={require('./assets/images/2018/horarios.png')} width="50%" />
          </center>
        </Step>

        <Step id={'print_2018_2'}
          data={{
            x: 950,
            y: 4500,
            z: -5000,
            rotateZ: 90,

          }} >
          <center>
            <img src={require('./assets/images/2018/faltas.png')} width="50%" />
          </center>
        </Step>

        <Step id={'print_2018_3'}
          data={{
            x: 950,
            y: 5000,
            z: -5000,
            rotateZ: 90,

          }} >
          <center>
            <img src={require('./assets/images/2018/notas.png')} width="50%" />
          </center>
        </Step>

        <Step id={'print_2018_4'}
          data={{
            x: 950,
            y: 5500,
            z: -5000,
            rotateZ: 90,

          }} >
          <center>
            <img src={require('./assets/images/2018/detalhes_disciplina.png')} width="50%" />
          </center>
        </Step>


        {/* 
        <Step id={'2018_prints1'}
          data={{
            x: 100,
            y: 4500,
            z: -5000,
            rotateZ: 90,
            scale: 4
          }}>
          <center>
            <img src={require('./assets/images/2018/horarios.png')} width="50%" />
          </center>
        </Step> */}


      </Impress>
    </div>
  );
}

export default App;
