import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FaHome, 
  FaUsers, 
  FaBoxOpen, 
  FaImages, 
  FaEnvelope, 
  FaChartBar, 
  FaCog, 
  FaBars, 
  FaTimes,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaSearch,
  FaFilter,
  FaBell,
  FaUser,
  FaSignOutAlt
} from 'react-icons/fa'

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('dashboard')
  const [searchTerm, setSearchTerm] = useState('')

  // Mock data for demonstration
  const [stats] = useState({
    totalProducts: 12,
    totalOrders: 156,
    totalCustomers: 89,
    monthlyRevenue: 45000
  })

  const [recentOrders] = useState([
    { id: 1, customer: 'Priya Sharma', product: 'Fresh Whole Milk', quantity: '5L', status: 'Delivered', date: '2024-01-15' },
    { id: 2, customer: 'Rajesh Patel', product: 'Natural Yogurt', quantity: '2kg', status: 'Processing', date: '2024-01-14' },
    { id: 3, customer: 'Meera Joshi', product: 'Farm Butter', quantity: '1kg', status: 'Pending', date: '2024-01-14' },
    { id: 4, customer: 'Amit Kumar', product: 'Artisan Cheese', quantity: '500g', status: 'Delivered', date: '2024-01-13' }
  ])

  const [products] = useState([
    { id: 1, name: 'Fresh Whole Milk', category: 'Milk', price: 60, stock: 150, status: 'Active' },
    { id: 2, name: 'Natural Yogurt', category: 'Dairy', price: 80, stock: 75, status: 'Active' },
    { id: 3, name: 'Farm Butter', category: 'Dairy', price: 120, stock: 45, status: 'Active' },
    { id: 4, name: 'Artisan Cheese', category: 'Cheese', price: 200, stock: 25, status: 'Active' }
  ])

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaHome /> },
    { id: 'products', label: 'Products', icon: <FaBoxOpen /> },
    { id: 'orders', label: 'Orders', icon: <FaUsers /> },
    { id: 'customers', label: 'Customers', icon: <FaUsers /> },
    { id: 'gallery', label: 'Gallery', icon: <FaImages /> },
    { id: 'messages', label: 'Messages', icon: <FaEnvelope /> },
    { id: 'analytics', label: 'Analytics', icon: <FaChartBar /> },
    { id: 'settings', label: 'Settings', icon: <FaCog /> }
  ]

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'bg-green-100 text-green-800'
      case 'processing': return 'bg-yellow-100 text-yellow-800'
      case 'pending': return 'bg-red-100 text-red-800'
      case 'active': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Products</p>
              <p className="text-2xl font-bold text-gray-800">{stats.totalProducts}</p>
            </div>
            <FaBoxOpen className="text-3xl text-blue-500" />
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-800">{stats.totalOrders}</p>
            </div>
            <FaUsers className="text-3xl text-green-500" />
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Customers</p>
              <p className="text-2xl font-bold text-gray-800">{stats.totalCustomers}</p>
            </div>
            <FaUsers className="text-3xl text-yellow-500" />
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Monthly Revenue</p>
              <p className="text-2xl font-bold text-gray-800">₹{stats.monthlyRevenue.toLocaleString()}</p>
            </div>
            <FaChartBar className="text-3xl text-purple-500" />
          </div>
        </motion.div>
      </div>

      {/* Recent Orders */}
      <motion.div 
        className="bg-white rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Products Management</h2>
        <button className="bg-natura-green text-white px-4 py-2 rounded-lg hover:bg-natura-green/90 flex items-center gap-2">
          <FaPlus /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-natura-green"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center gap-2">
              <FaFilter /> Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{product.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <FaEye />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <FaEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard()
      case 'products':
        return renderProducts()
      case 'orders':
        return <div className="bg-white p-8 rounded-lg shadow-md"><h2 className="text-2xl font-bold">Orders Management</h2><p className="mt-4 text-gray-600">Orders management functionality will be implemented here.</p></div>
      case 'customers':
        return <div className="bg-white p-8 rounded-lg shadow-md"><h2 className="text-2xl font-bold">Customers Management</h2><p className="mt-4 text-gray-600">Customer management functionality will be implemented here.</p></div>
      case 'gallery':
        return <div className="bg-white p-8 rounded-lg shadow-md"><h2 className="text-2xl font-bold">Gallery Management</h2><p className="mt-4 text-gray-600">Gallery management functionality will be implemented here.</p></div>
      case 'messages':
        return <div className="bg-white p-8 rounded-lg shadow-md"><h2 className="text-2xl font-bold">Messages</h2><p className="mt-4 text-gray-600">Message management functionality will be implemented here.</p></div>
      case 'analytics':
        return <div className="bg-white p-8 rounded-lg shadow-md"><h2 className="text-2xl font-bold">Analytics</h2><p className="mt-4 text-gray-600">Analytics and reporting functionality will be implemented here.</p></div>
      case 'settings':
        return <div className="bg-white p-8 rounded-lg shadow-md"><h2 className="text-2xl font-bold">Settings</h2><p className="mt-4 text-gray-600">System settings will be implemented here.</p></div>
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-natura-green">Natura Admin</h1>
          <button 
            className="lg:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <nav className="mt-6">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id)
                setSidebarOpen(false)
              }}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                activeSection === item.id ? 'bg-natura-green/10 text-natura-green border-r-2 border-natura-green' : 'text-gray-700'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
              <button 
                className="lg:hidden text-gray-500 hover:text-gray-700 mr-4"
                onClick={() => setSidebarOpen(true)}
              >
                <FaBars />
              </button>
              <h2 className="text-lg font-semibold text-gray-800 capitalize">
                {activeSection}
              </h2>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 relative">
                <FaBell />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-natura-green rounded-full flex items-center justify-center">
                  <FaUser className="text-white text-sm" />
                </div>
                <span className="text-sm font-medium text-gray-700">Tushar Harinkhede</span>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <FaSignOutAlt />
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default Admin