// import React from "react";
// import { Line } from 'react-chartjs-2'
// import { Col, Row, Typography } from "antd";

// const { Title } = Typography

// const LineChart = ({coinHistory, currentPrice, coinName}) => {
//     const coinPrice = []
//     const coinTimeStamp = []

//     for (let i = 0; i < coinHistory?.data?.history?.length; i+= 1) {
//         coinPrice.push(coinHistory.data.history[i].price)
//         coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString())
//     }

//     const data = {
//         labels: coinTimeStamp,
//         datasets: [
//             {
//                 label: 'Price in USD',
//                 data: coinPrice,
//                 fill: false,
//                 backgroundColor: '#0071bd',
//                 borderColor: '#0071bd'
//             }
//         ]
//     }

//     const options = {
//         scales: {
//             yAxes: [
//                 {
//                     ticks: {
//                         beginAtZero: true
//                     }
//                 }
//             ]
//         }
//     }

//     return (
//         <>
//             <Row classname='chart-header'>
//                 <Title level={2} className="chart-title">{coinName} Price Chart
//                     <Col className="price-container">
//                         <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
//                         <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
//                     </Col>
//                 </Title>

//             </Row>
//             <Line data = {data} options={options} />
//         </>
//     )
// }

// export default LineChart

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement);

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  if (!coinHistory || coinHistory.length === 0) {
    return null; // or render a loading state or an error message
  }

  const coinPrice = [];
  const coinTimestamp = [];

  coinHistory.forEach((price) => {
    const date = new Date(price[0]);
    const formattedDate = date.toLocaleDateString();

    coinPrice.push(price[1]);
    coinTimestamp.push(formattedDate);
  });

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: `Price in USD`,
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart</Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;