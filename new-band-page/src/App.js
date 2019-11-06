import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import MainBandImage from './NavComponent/MainBandImage';
import NavPage from './NavComponent/NavPage';
import BannerSlide from './PageBody/BannerSlide';
import BandInfoCard from './PageBody/BandInfoCard';
import BandMembers from './PageBody/BandMembers';
import FooterMain from './Footer/FooterMain';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainBandImage />
        <NavPage />
        <Row>
          <Col>
            <BannerSlide />
          </Col>
        </Row>
        <Row>
          <Col>
            <BandInfoCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <BandMembers />
          </Col>
        </Row>
        <Row>
          <Col>
            <FooterMain />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
