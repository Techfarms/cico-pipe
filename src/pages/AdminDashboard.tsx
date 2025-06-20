import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAdmin } from '@/contexts/AdminContext';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const AdminDashboard = () => {
    
  useEffect(() => {
    document.title = "Admin Dashboard | CICO Pipes";
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { logout } = useAdmin();
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: 0,
    image: '',
    category: 'pvc-pipes'
  });

  // In a real application, these would be API calls
  const fetchProducts = () => {
    // Simulated products
    setProducts([
      {
        id: '1',
        name: 'PVC Pipe 1',
        description: 'High quality PVC pipe',
        price: 5000,
        image: '/placeholder.jpg',
        category: 'pvc-pipes'
      }
    ]);
  };

  const addProduct = () => {
    // In a real application, this would make an API call
    const newId = Date.now().toString();
    const updatedProducts = [...products, { ...newProduct, id: newId }];
    setProducts(updatedProducts);
    setNewProduct({
      name: '',
      description: '',
      price: 0,
      image: '',
      category: 'pvc-pipes'
    });
  };

  const updateProduct = (product: Product) => {
    // In a real application, this would make an API call
    const updatedProducts = products.map(p => 
      p.id === product.id ? product : p
    );
    setProducts(updatedProducts);
  };

  const deleteProduct = (id: string) => {
    // In a real application, this would make an API call
    const updatedProducts = products.filter(p => p.id !== id);
    setProducts(updatedProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Button onClick={logout}>Logout</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Add New Product Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add New Product</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <Textarea
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Price</label>
                <Input
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <Input
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                  required
                />
              </div>
              <Button onClick={addProduct} className="w-full">
                Add Product
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Products List */}
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="mt-2">Price: ₦{product.price.toLocaleString()}</p>
                  <div className="mt-4 flex space-x-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => deleteProduct(product.id)}>
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
