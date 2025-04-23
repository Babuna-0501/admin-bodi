import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  // Simple stats for dashboard
  const stats = {
    totalProducts: 52,
    totalOrders: 128,
    totalRevenue: '$15,840',
    pendingOrders: 9
  };

  return (
    <div>
      <h2 className="mb-4">Bodios</h2>
      
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Нийт бүтээгдэхүүн</h5>
              <h2>{stats.totalProducts}</h2>
              <Link to="/products" className="text-white">Бүтээгдэхүүн харах</Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 mb-4">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Нийт захиалга</h5>
              <h2>{stats.totalOrders}</h2>
              <p className="mb-0">Захиалга харах</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 mb-4">
          <div className="card bg-info text-white">
            <div className="card-body">
              <h5 className="card-title">Total Revenue</h5>
              <h2>{stats.totalRevenue}</h2>
              <p className="mb-0">View Revenue</p>
            </div>
          </div>
        </div>
        
        {/* <div className="col-md-3 mb-4">
          <div className="card bg-warning text-white">
            <div className="card-body">
              <h5 className="card-title">Pending Orders</h5>
              <h2>{stats.pendingOrders}</h2>
              <p className="mb-0">View Pending</p>
            </div>
          </div>
        </div> */}
      </div>
      
      <div className="row mt-4">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              Сүүлийн мэдээлэл
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Шинэ захиалга
                  <span className="badge bg-primary rounded-pill">Just now</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                   "Bodios цамц" бүтээгдэхүүн шинэчэллээ
                  <span className="badge bg-primary rounded-pill">2 hours ago</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Шшинэ бүтээгдэхүүн "Ороолт" нэмэгдлээ
                  <span className="badge bg-primary rounded-pill">5 hours ago</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Захиалга #1082 Амжилттай
                  <span className="badge bg-primary rounded-pill">Yesterday</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Quick Actions
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <Link to="/products" className="btn btn-primary">Add New Product</Link>
                <button className="btn btn-outline-secondary">View Orders</button>
                <button className="btn btn-outline-secondary">Update Inventory</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;