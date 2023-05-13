import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { useFetchCryptosQuery } from '../services/CryptoApi';
import { Link } from 'react-router-dom';

import { Cryptocurrencies, News } from '../components'

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useFetchCryptosQuery(10);
    const globalStats = data?.data?.stats

    console.log(data)

    if(isFetching) return 'Loading...'
  return (
    <>
      <Title level={2} className='heading'>Global Cryptocurrency Statistics</Title>
      <Row>
        <Col span = {12}><Statistic title = "Total Cryptocurrencies" value = {globalStats.total} /></Col><Col span = {12}><Statistic title = "Total Cryptocurrencies" value = "5" /></Col>
        <Col span = {12}><Statistic title = "Total Exchanges" value = {millify(globalStats.totalExchanges)} /></Col>
        <Col span = {12}><Statistic title = "Total Market Cap" value = {millify(globalStats.totalMarketCap)} /></Col>
        <Col span = {12}><Statistic title = "Total 24 Hour Volume" value = {millify(globalStats.total24hVolume)} /></Col>
        <Col span = {12}><Statistic title = "Total Markets " value = {millify(globalStats.totalMarkets)} /></Col>
        <div className='home-heading-container'>
        <Row gutter={[32, 32]}>
          <Col xs={24}>
            <Title level={2} className='home-title'>Top 10 Cryptocurrencies Across the Globe</Title>
            <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
          </Col>
          <Col xs={24}>
            <Cryptocurrencies simplified/>
          </Col>
        </Row>
      </div>
        <div className='home-heading-container'>
        <Title level = {2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to="/news">Show More</Link></Title>
        <News simplified/>
      </div>
      </Row>
    </>
  );
};

export default Homepage;

