import React, { useState } from 'react';

function Products() {
  // Sample product data
  const initialProducts = [
    { id: 1, name: 'Цамц', category: 'Woman', price: 699.99, stock: 25 },
    { id: 2, name: 'Ороолт', category: 'Men', price: 1299.99, stock: 10 },
    { id: 3, name: 'Малгай', category: 'Men', price: 149.99, stock: 30 },
    { id: 4, name: 'Өмд', category: 'Woman', price: 89.99, stock: 15 },
    { id: 5, name: 'Цув', category: 'Men', price: 24.99, stock: 50 }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [showForm, setShowForm] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({ id: null, name: '', category: '', price: '', stock: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleAddNewClick = () => {
    setCurrentProduct({ id: null, name: '', category: '', price: '', stock: '' });
    setIsEditing(false);
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Validate inputs
    if (!currentProduct.name || !currentProduct.category || !currentProduct.price || !currentProduct.stock) {
      alert('Please fill in all fields');
      return;
    }

    if (isEditing) {
      // Update existing product
      setProducts(products.map(product => 
        product.id === currentProduct.id ? 
        { ...currentProduct, price: parseFloat(currentProduct.price), stock: parseInt(currentProduct.stock) } : 
        product
      ));
    } else {
      // Add new product
      const newId = Math.max(...products.map(product => product.id), 0) + 1;
      setProducts([
        ...products, 
        { 
          ...currentProduct, 
          id: newId,
          price: parseFloat(currentProduct.price), 
          stock: parseInt(currentProduct.stock)
        }
      ]);
    }
    
    // Reset form
    setShowForm(false);
    setCurrentProduct({ id: null, name: '', category: '', price: '', stock: '' });
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setCurrentProduct({ id: null, name: '', category: '', price: '', stock: '' });
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Бүтээгдэхүүн</h2>
        <button 
          className="btn btn-primary" 
          onClick={handleAddNewClick}
          disabled={showForm}
        >
          Бүтээгдэхүүн нэмэх
        </button>
      </div>

      {showForm && (
        <div className="card mb-4">
          <div className="card-header">
            {isEditing ? 'Edit Product' : 'Add New Product'}
          </div>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">Бүтээгдэхүүн нэр</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={currentProduct.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="category" className="form-label">Ангилал</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    name="category"
                    value={currentProduct.category}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="price" className="form-label">Үнэ ($)</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={currentProduct.price}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="stock" className="form-label">Үлдэгдэл</label>
                  <input
                    type="number"
                    className="form-control"
                    id="stock"
                    name="stock"
                    value={currentProduct.stock}
                    onChange={handleInputChange}
                    min="0"
                    required
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-secondary me-2" onClick={handleCancel}>Цуцлах</button>
                <button type="submit" className="btn btn-primary">{isEditing ? 'Шинэчлэх' : 'Нэмэх'} </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="card">
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col">Бүтээгдэхүүн жагсаалт</div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Хайх..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Нэр</th>
                  <th>Ангилал</th>
                  <th>Үнэ</th>
                  <th>Үлдэгдэл</th>
                  <th>Үйлдэл</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(product => (
                    <tr key={product.id}>
                      <td>#{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>${product.price.toFixed(2)}</td>
                      <td>{product.stock}</td>
                      <td>
                        <button 
                          className="btn btn-sm btn-outline-primary me-2" 
                          onClick={() => handleEdit(product)}
                          disabled={showForm}
                        >
                          Edit
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-danger" 
                          onClick={() => handleDelete(product.id)}
                          disabled={showForm}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">Бүтээгдэхүүн олдсонгүй</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;