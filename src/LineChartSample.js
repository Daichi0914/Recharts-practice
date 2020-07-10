import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Legend,
  YAxis,
  Tooltip,
} from 'recharts';

export const LineChartSample = () => {
  const data = [
    {
      name: 1,
      日平均: 5.6,
      日最高: 10.3,
      日最低: 1.4,
    },
    {
      name: 2,
      日平均: 7.2,
      日最高: 11.6,
      日最低: 3.3,
    },
    {
      name: 3,
      日平均: 10.6,
      日最高: 15.4,
      日最低: 6.2,
    },
    {
      name: 4,
      日平均: 13.6,
      日最高: 19.0,
      日最低: 9.2,
    },
    {
      name: 5,
      日平均: 20.0,
      日最高: 25.3,
      日最低: 15.3,
    },
    {
      name: 6,
      日平均: 21.8,
      日最高: 25.8,
      日最低: 18.5,
    },
    {
      name: 7,
      日平均: 24.1,
      日最高: 27.5,
      日最低: 21.6,
    },
    {
      name: 8,
      日平均: 28.4,
      日最高: 32.8,
      日最低: 25.2,
    },
    {
      name: 9,
      日平均: 25.1,
      日最高: 29.4,
      日最低: 21.7,
    },
    {
      name: 10,
      日平均: 19.4,
      日最高: 23.3,
      日最低: 16.4,
    },
    {
      name: 11,
      日平均: 13.1,
      日最高: 17.7,
      日最低: 9.3,
    },
    {
      name: 12,
      日平均: 8.5,
      日最高: 12.6,
      日最低: 5.2,
    },
  ];

  return (
    <div>
      <h1>2019年 東京の平均気温(折れ線グラフ)</h1>
      <LineChart width={700} height={500} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' interval='preserveStartEnd' unit='月' />
        <YAxis interval='preserveStartEnd' unit='℃' />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='日平均'
          stroke='#82ca9d'
          activeDot={{ r: 3 }}
        />
        <Line type='monotone' dataKey='日最高' stroke='#ff5500' />
        <Line type='monotone' dataKey='日最低' stroke='#8884d8' />
      </LineChart>
    </div>
  );
};

export default LineChartSample;
