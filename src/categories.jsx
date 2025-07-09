// Categories.jsx
import { useEffect, useState } from "react";
import "./App.css";


function Categories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCategories([
        { name: "Electronics" },
        { name: "Clothing" },
        { name: "Books" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const openAddModal = () => {
    setCurrentCategory(null);
    setName("");
    setModalOpen(true);
  };

  const openEditModal = (item, index) => {
    setCurrentCategory({ ...item, index });
    setName(item.name);
    setModalOpen(true);
  };

  const handleSave = () => {
    if (!name.trim()) {
      setError("Category name is required!");
      return;
    }

    if (currentCategory) {
      const updated = [...categories];
      updated[currentCategory.index] = { name };
      setCategories(updated);
    } else {
      setCategories([...categories, { name }]);
    }

    setError("");
    setModalOpen(false);
  };

  const handleDelete = (index) => {
    const updated = [...categories];
    updated.splice(index, 1);
    setCategories(updated);
  };

  return (
    <div className="container">
      <h2>Categories</h2>
       <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
       
        <span className="material-symbols-outlined search-icon">search</span>
       </div>
      
      <button className="btn" onClick={openAddModal}>
        Add Category
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && categories.length === 0 && <p>No categories found</p>}

      <ul>
        {categories
          .filter((category) =>
            category.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => (
            <li key={index}>
              {item.name}
              <button onClick={() => openEditModal(item, index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
      </ul>

      {modalOpen && (
        <div className="modal">
          <h3>{currentCategory ? "Edit Category" : "Add Category"}</h3>
          <input
            type="text"
            placeholder="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setModalOpen(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default Categories;
