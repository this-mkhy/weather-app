import React from 'react'

import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './Content.module.css';

export default function Content() {
  return (
    <Container className={styles.box}>
      <Row>
          <Col xs={12} md={4}>
              <div className={styles.card}>
                <h2>City</h2>
                <p>Friday 20,2020</p>
                <span>Cloud Icon</span>
              </div>
          </Col>
          <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
            <div className={styles.card}>
              <h2>Weather, 72 C</h2>
              <p>81 deg / 63 deg</p>
              <span>Cloud throught the day</span>
            </div>
          </Col>
      </Row>
  </Container>
  )
}
