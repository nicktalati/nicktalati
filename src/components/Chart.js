import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

// Function to generate the previous 7 days formatted dates
const generateLast7Days = () => {
  return [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return { date: `${d.getMonth() + 1}/${d.getDate()}` };
  }).reverse();
};

// Initial data generation with the previous 7 days
const initialData = generateLast7Days().map(day => ({
  name: day.date,
  Frustration: Math.random() * 10,
  Annoyance: Math.random() * 10,
  Attitude: Math.random() * 10,
}));

function Chart() {
  const theme = useTheme();

  return (
    <>
      <LineChart width={600} height={300} data={initialData} margin={{ top: 0, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 10]} />
        <Tooltip contentStyle={{ fontFamily: theme.typography.fontFamily }} />
        <Legend wrapperStyle={{ fontFamily: theme.typography.fontFamily }} />
        <Line type="monotone" dataKey="Frustration" stroke="#fbc4ab" />
        <Line type="monotone" dataKey="Annoyance" stroke="#bdf2d5" />
        <Line type="monotone" dataKey="Attitude" stroke="#a2cffe" />
      </LineChart>
    </>
  );
}

export default Chart;
