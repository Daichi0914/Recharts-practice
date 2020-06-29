import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export const BarChartSample = () => {
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
      <h1>2019年 東京の平均気温(棒グラフ)</h1>
      <BarChart
        width={700}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' unit='月' />
        <YAxis unit='℃' />
        <Tooltip />
        <Legend />
        <Bar dataKey='日平均' fill='#82ca9d' />
        <Bar dataKey='日最高' fill='#ff5500' />
        <Bar dataKey='日最低' fill='#8884d8' />
      </BarChart>
    </div>
  );
};

export default BarChartSample;
