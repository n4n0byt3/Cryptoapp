import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { useGetCryptosQuery } from '../services/CryptoApi';
import { Link } from 'react-router-dom';

import { Cryptocurrencies, News } from '../components'

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  console.log(data)

  if(isFetching) return 'Loading...'

  return (
    <>
      <Title level={2} className='heading'>Global Cryptocurrency Statistics</Title>
      {data && (
        <Row gutter={[32, 32]}>
        <Col xs={24} sm={12} lg={6}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Statistic title="Total 24 Hour Volume" value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>
      )}
  
      <div className='home-heading-container'>
        <Row gutter={[32, 32]}>
          <Col xs={24}>
            <Title level={2} className='home-title'>Top 10 Cryptocurrencies Across the Globe</Title>
            <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
          </Col>
          <Col xs={24}>
            <Cryptocurrencies simplified />
          </Col>
        </Row>
      </div>
  
      <div className='home-heading-container'>
        <Row gutter={[32, 32]}>
          <Col xs={24}>
            <Title level={2} className='home-title'>Latest Crypto News</Title>
            <Title level={3} className='show-more'><Link to="/news">Show More</Link></Title>
          </Col>
          <Col xs={24}>
            <News simplified/>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Homepage;