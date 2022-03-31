import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Content.module.css';

//const key = process.env.REACT_APP_DARK_SKY_API_KEY

export default function Content({temperature, description, img, region, country}) {
  console.log('hello temperature', temperature)

  return (
    <Container className={styles.box}>
      <Row>
          <Col xs={12} md={9}>
              <div className={styles.card}>
                <h2>{region} | {country}</h2>
                <p>{new Date().toLocaleDateString()}</p>
                <img src={img} alt="weather" className="ml-md-5" />
              </div>
          </Col>
          <Col xs={12} md={3} className="d-flex flex-column justify-content-between">
            <div className={styles.card}>
              <h2>Weather, {temperature} <sup>o</sup></h2>
              <p>{description}</p>

            </div>
          </Col>
      </Row>
  </Container>
  )
}
