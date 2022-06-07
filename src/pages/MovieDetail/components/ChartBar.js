import { BarChart, Bar, XAxis, Tooltip } from 'recharts';

export default function ChartBar({ data }) {
  return (
    <BarChart width={300} height={200} data={data}>
      <Tooltip />
      <XAxis dataKey="name" />
      <Bar dataKey="preference" fill="#027b94" />
    </BarChart>
  );
}
