import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useStateContext } from './context/ContextProvider';
import { AddNew, Dashboard, Profile, Settings, DataTable, Charts } from './pages';
import {productColumns, productRows, transacColumns, transacRows, orderColumns, orderRows, userInputs, productInputs, employeeColumns, employeeRows, userColumns, userRows} from './assets/data';

function App() {
  const {activeMenu} = useStateContext();

  return (
    <BrowserRouter>
      <div className='flex justify-between h-screen bg-slate-100'>
        {/* Sidebar */}
        {activeMenu ? (
          <div className='sticky top-0 w-72 bg-gray-800  screen-full'>
            <Sidebar />
          </div>
        ): ""}

        {/* main page */}
        <div className='felx-5 w-full'>
          {/* Navbar */}
          <header>
            <Navbar />
          </header>

          {/* pages */}
          <main className='p-4'>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/orders" element={<DataTable tdata={orderRows} tcolumn={orderColumns} title="Order" addNew="none" />} />
              <Route path="/add-new-product" element={<AddNew inputs={productInputs} title="Product" />} />
              <Route path="/customers" element={<DataTable tdata={userRows} tcolumn={userColumns} title="Customer" addNew="user" />} />
              <Route path="/employee" element={<DataTable tdata={employeeRows} tcolumn={employeeColumns} title="Employee" addNew="user" />} />
              <Route path="/products" element={<DataTable tdata={productRows} tcolumn={productColumns} title="Product" addNew="product" />} />
              <Route path="/add-new-user" element={<AddNew inputs={userInputs} title="User" />} />
              <Route path="/statistics" element={<Charts />} />
              <Route path="/transaction" element={<DataTable tdata={transacRows} tcolumn={transacColumns} title="Transaction" addNew="none" />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
