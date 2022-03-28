import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';

import HourlyDayDescription from './HourlyDayDescription';
import UpcomingDaily from './UpcomingDaily';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <Container className={styles.box}>
        <Row>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                <HourlyDayDescription />
                <UpcomingDaily/>
            </Col>
        </Row>
    </Container>
  )
}
