// Vendor.jsx
import React from 'react';
import './App.css'; 
function Vendor() {
  const vendors = ['Samsung', 'Oppo', 'Apple', 'Xiaomi', 'Vivo', 'Realme'];

  return (
    <div className="vendor-admin-page">
      <h2>This is the Vendor Page — only for admin!</h2>

      <section>
        <h3>Available Vendors</h3>
        <ul className="vendor-list">
          {vendors.map((vendor, index) => (
            <li key={index} className="vendor-item">
              {vendor}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Vendor;
