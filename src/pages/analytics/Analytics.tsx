import React, { JSX } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Define types for our data
interface ActivityData {
  name: string;
  users: number;
}

interface TrafficData {
  name: string;
  value: number;
}

// Define type for custom label props
interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}

const Analytics: React.FC = () => {
  // User Activity Data
  const activityData: ActivityData[] = [
    { name: 'Jan', users: 4000 },
    { name: 'Feb', users: 3000 },
    { name: 'Mar', users: 2000 },
    { name: 'Apr', users: 2780 },
    { name: 'May', users: 1890 },
    { name: 'Jun', users: 2390 },
  ];

  // Traffic Sources Data
  const trafficData: TrafficData[] = [
    { name: 'Direct', value: 400 },
    { name: 'Social', value: 300 },
    { name: 'Organic', value: 300 },
    { name: 'Referral', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ 
    cx, 
    cy, 
    midAngle, 
    innerRadius, 
    outerRadius, 
    percent 
  }: CustomLabelProps): JSX.Element => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="analytics-page">
      <div className="analytics-header">
        <h1>Analytics Dashboard</h1>
        <p>Monitor your business performance</p>
      </div>

      <div className="analytics-grid">
        {/* Overview Stats */}
        <div className="stats-container">
          <div className="stat-card">
            <h4>Total Users</h4>
            <div className="stat-value">1,234</div>
            <div className="stat-change positive">+12.5%</div>
          </div>
          
          <div className="stat-card">
            <h4>Active Sessions</h4>
            <div className="stat-value">856</div>
            <div className="stat-change positive">+5.3%</div>
          </div>
          
          <div className="stat-card">
            <h4>Bounce Rate</h4>
            <div className="stat-value">32.4%</div>
            <div className="stat-change negative">-2.1%</div>
          </div>
          
          <div className="stat-card">
            <h4>Avg. Session Time</h4>
            <div className="stat-value">4m 32s</div>
            <div className="stat-change positive">+8.7%</div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-container">
          <div className="chart-card">
            <h3>User Activity</h3>
            <div className="chart-content">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={activityData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="chart-card">
            <h3>Traffic Sources</h3>
            <div className="chart-content">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={trafficData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {trafficData.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 