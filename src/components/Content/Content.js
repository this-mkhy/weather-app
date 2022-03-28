import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Content.module.css';

const key = process.env.REACT_APP_DARK_SKY_API_KEY

export default function Content({ location }) {
  const [ city, setCity ] = useState({lat: null, lon: null})
  const [ result, setResult ] = useState({})

  useEffect(() => {
    setCity({lat: location.lat, lon: location.lon})
  }, [location])

  useEffect(() => {
    if (city.lon !== null) {
        fetch(`/forecast/${key}/${city.lat},${city.lon}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setResult(res)
        }).catch(error => console.log(error))
    }
  }, [city])

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
