import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  // Load fake products on mount
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching products");
        setLoading(false);
      });
  }, []);

  // Auto-clear error message after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // Open edit modal
  const openEditModal = (product) => {
    setCurrentProduct(product);
    setName(product.title);
    setModalOpen(true);
  };

  // Save edited product
  const handleSave = () => {
    if (!name.trim()) {
      setError("Product name is required");
      return;
    }

    const updated = products.map((p) =>
      p.id === currentProduct.id ? { ...p, title: name } : p
    );
    setProducts(updated);
    setModalOpen(false);
    setCurrentProduct(null);
    setName("");
    setError("");
  };

  // Open delete confirmation
  const askDelete = (product) => {
    setProductToDelete(product);
    setConfirmDelete(true);
  };

  // Confirm delete
  const confirmDeleteYes = () => {
    const updated = products.filter((p) => p.id !== productToDelete.id);
    setProducts(updated);
    setConfirmDelete(false);
    setProductToDelete(null);
  };

  // Cancel delete — show error message
  const confirmDeleteNo = () => {
    setError("Deletion cancelled");
    // alert("Cancel clicked");

    setConfirmDelete(false);
    setProductToDelete(null);
  };

  console.log("modalOpen:", modalOpen, "confirmDelete:", confirmDelete);

  return (
    <div className="container">
      <h2>🛒 Products</h2>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
          
        />
        <span className="material-symbols-outlined search-icon">search</span>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p className="error">{error}</p>}

      <div className="product-list">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <button onClick={() => openEditModal(product)}>Edit</button>
              <button onClick={() => askDelete(product)}>Delete</button>
            </div>
          ))}
      </div>

      {/* Edit Modal */}
      {modalOpen && (
        <div className="modal">
          <h3>Edit Product</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setModalOpen(false)}>Cancel</button>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {confirmDelete && (
        <div className="modal">
          <h3>
            Are you sure you want to delete
            <br />"{productToDelete?.title}"?
          </h3>
          <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <button onClick={confirmDeleteYes}>Yes</button>
            <button onClick={confirmDeleteNo}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
