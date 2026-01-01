import React, { useEffect, useState } from "react";
import { API_URL } from "./data/ApiPath";

export default function UserDetails() {
  const [vender, setVender] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const venderId = localStorage.getItem("venderId");

  const fetchData = async () => {
    try {
      // 1️⃣ Fetch Vendor (firm also comes here)
      const res = await fetch(`${API_URL}/vender/single-vender/${venderId}`);
      const data = await res.json();
      setVender(data.vender);

      // 2️⃣ Fetch Products by firmId
      const firmId = data.venderFirmId;
      if (firmId) {
       const prodRes = await fetch(`${API_URL}/product/${firmId}/products`);
       const prodData = await prodRes.json();
       setProducts(prodData.product || []); // avoid when Product is Empty...
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="user-details">
      <h1>👤 Vendor Dashboard</h1>

      {/* Vendor Card */}
      <div className="detail-card">
        <h2>Vendor Information</h2>
        <p><strong>Name :</strong> {vender.username}</p>
        <p><strong>Email :</strong> {vender.email}</p>
      </div>
      {/* Firm Card */}
      <div className="detail-card">
        <h2>🏢 Firm Details</h2>
        {vender.firm.length > 0 ? (
          vender.firm.map((f) => (
            <div key={f._id} className="firm-box">
              <p><b>Firm Name :</b> {f.firmname}</p>
              <p><b>Location :</b> {f.area}</p>
            </div>
          ))
        ) : (
          <p>No Firm Added</p>
        )}
      </div>

      <div className="detail-card">
        <h2>🍔 Products Details </h2>
        {products.length > 0 ? (
          <ul className="productlist">
            {products.map((p) => (
              <li key={p._id}>
                <strong> {p.productName} -- ₹{p.price}</strong>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Products Found</p>
        )}
      </div>
    </div>
  );
}
