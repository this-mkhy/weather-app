import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';

//import HourlyDayDescription from './HourlyDayDescription';
//import UpcomingDaily from './UpcomingDaily';

import styles from './Footer.module.css';

export default function Footer({ wind_speed, wind_degree, pressure, precip, humidity, location}) {
  return (
    <Container className={styles.box}>
      <Row>
          <Col xs={12} md={2}>
              <div className={styles.card}>
                <h2>Wind Speed</h2>
                <p>{wind_speed}</p>
              </div>
          </Col>
          <Col xs={12} md={2}>
            <div className={styles.card}>
              <h2>Wind Degree</h2>
              <p>{wind_degree}</p>
            </div>
          </Col>
          <Col xs={12} md={2}>
              <div className={styles.card}>
                <h2>Pressure</h2>
                <p>{pressure}</p>
              </div>
          </Col>
          <Col xs={12} md={2}>
            <div className={styles.card}>
              <h2>Precip</h2>
              <p>{precip}</p>
            </div>
          </Col>
          <Col xs={12} md={2}>
              <div className={styles.card}>
                <h2>Humidity</h2>
                <p>{humidity}</p>
              </div>
          </Col>
          <Col xs={12} md={2}>
            <div className={styles.card}>
              <h2>Location</h2>
              <p>{location}</p>
            </div>
          </Col>
      </Row>
  </Container>
  )
}
