import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  
  // Sample data for charts
  const salesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 4500 },
    { name: 'May', sales: 6000 },
    { name: 'Jun', sales: 5500 },
  ];

  const userActivityData = [
    { name: 'Mon', active: 3000, new: 1400 },
    { name: 'Tue', active: 3500, new: 1200 },
    { name: 'Wed', active: 4000, new: 1800 },
    { name: 'Thu', active: 3700, new: 1600 },
    { name: 'Fri', active: 4200, new: 2000 },
    { name: 'Sat', active: 3800, new: 1500 },
    { name: 'Sun', active: 3500, new: 1300 },
  ];

  const revenueData = [
    { name: 'Jan', revenue: 8500 },
    { name: 'Feb', revenue: 7200 },
    { name: 'Mar', revenue: 9000 },
    { name: 'Apr', revenue: 8700 },
    { name: 'May', revenue: 11000 },
    { name: 'Jun', revenue: 10500 },
  ];

  return (
    <div className="content-wrapper">
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card text-white bg-primary">
            <div className="card-body">
              <h5 className="card-title">{t('dashboard.stats.totalUsers')}</h5>
              <h2>1,250</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success">
            <div className="card-body">
              <h5 className="card-title">{t('dashboard.stats.revenue')}</h5>
              <h2>$15,350</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning">
            <div className="card-body">
              <h5 className="card-title">{t('dashboard.stats.orders')}</h5>
              <h2>305</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-danger">
            <div className="card-body">
              <h5 className="card-title">{t('dashboard.stats.products')}</h5>
              <h2>125</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{t('dashboard.charts.monthlySales')}</h5>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{t('dashboard.charts.userActivity')}</h5>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={userActivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="active" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="new" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{t('dashboard.charts.revenueTrends')}</h5>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{t('dashboard.notifications.title')}</h5>
              <div className="notification-item">
                <p>{t('dashboard.notifications.newUser')}</p>
                <small>{t('dashboard.notifications.timeAgo.minutes', { time: 5 })}</small>
              </div>
              <div className="notification-item">
                <p>{t('dashboard.notifications.serverUpdate')}</p>
                <small>{t('dashboard.notifications.timeAgo.hours', { time: 1 })}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
