import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Diversity3Icon from '@mui/icons-material/Diversity3';

import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';

import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';

export const NavLinks = [
  {
    id: 1,
    title: 'main',
    links: [
      {name: 'dashboard', icon: <DashboardIcon/>,}
    ]
  },
  {
    id: 2,
    title: 'list',
    links:[
      {name: 'customers', icon:<PersonOutlineIcon/>},
      {name: 'products', icon:<StoreIcon/>},
      {name: 'orders', icon:<CreditCardIcon/>},
      {name: 'delivery', icon:<LocalShippingIcon/>},
    ]
  },
  {
    id: 3,
    title: 'useful',
    links:[
      {name: 'employee', icon:<Diversity3Icon/>},
      {name: 'statistics', icon:<InsertChartIcon/>},
      {name: 'transaction', icon:<AccountBalanceIcon/>},
    ]
  },
  {
    id: 4,
    title: 'services',
    links:[
      {name: 'system health', icon:<SettingsSystemDaydreamOutlinedIcon/>},
      {name: 'logs', icon:<PsychologyOutlinedIcon/>},
      {name: 'settings', icon:<SettingsApplicationsIcon/>},
    ]
  },
  {
    id: 5,
    title: 'user',
    links:[
      {name: 'profile', icon:<AccountCircleOutlinedIcon/>},
      {name: 'logout', icon:<ExitToAppIcon/>},
    ]
  }
]

export const WidgetItems = [
  {id: 2, title: 'Earnings', qty: '$238,234', icon: <AttachMoneyIcon/>},
  {id: 3, title: 'Products', qty: '79,235', icon: <LocalShippingIcon/>},
  {id: 4, title: 'Orders', qty: '87,234', icon: <CreditCardIcon/>},
  {id: 1, title: 'Users', qty: '23,432', icon: <AccountCircleOutlinedIcon/>},
]

// Transaction DataSource
export const transacColumns = [
  { field: "id", headerName: "Tracking ID", width: 100 },
  {
    field: "product",
    headerName: "Product",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="flex items-center justify-around gap-3">
          <img className="w-10 h-10 rounded-full object-cover" src={params.row.img} alt="product" />
          {params.row.product}
        </div>
      );
    },
  },
  {
    field: "customer",
    headerName: "Customer",
    width: 100,
  },

  {
    field: "date",
    headerName: "Date",
    width: 100,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 80,
  },
  {
    field: "method",
    headerName: "Payment Method",
    width: 150,
  },
  {
    field: "status",
    headerName: "status",
    width: 100,
    renderCell: (params) => {
      return (
        <div>
          {params.row.status}
        </div>
      );
    },
  },
];

export const transacRows = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
    color: "green",
  },
  {
    id: 2235235,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Michael Doe",
    date: "1 March",
    amount: 900,
    method: "Online Payment",
    status: "Pending",
    color: "red",
  },
  {
    id: 2342353,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 35,
    method: "Cash on Delivery",
    status: "Pending",
    color: "red",
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    date: "1 March",
    amount: 920,
    method: "Online",
    status: "Approved",
    color: "green",
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
    color: "red",
  },
]

// User DataSource
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="flex items-center justify-around gap-3">
          <img className="w-10 h-10 rounded-full object-cover" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithstatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

// Product DataSource
export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="flex items-center justify-around gap-3">
          <img className="w-10 h-10 rounded-full object-cover" src={params.row.product} alt="product" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "qty",
    headerName: "Quantity",
    width: 80,
  },
  {
    field:"price",
    headerName: "Price",
    width: 90,
  },
  {
    field: "category",
    headerName: "Category",
    width: 100,
  },
  {
    field: "status",
    headerName: "status",
    width: 160,
  },
];

export const productRows = [
  {
    id: 10248,
    price: 32.38,
    name: 'Fresh Tomato',
    status: 'In Stock',
    statusBg: '#FB9678',
    qty: 290,
    category: 'vegetables',
    product:
      product6,
  },
  {
    id: 345653,
    price: 56.34,
    name: 'Butter Scotch',
    status: 'Out of Stock',
    statusBg: '#8BE78B',
    qty: 0,
    category: 'Butter',
    product:
      product5,
  },
  {
    id: 390457,
    price: 93.31,
    name: 'Candy Gucci',
    status: 'In Stock',
    statusBg: '#03C9D7',
    qty: 290,
    category: 'candy',
    product:
      product7,
  },
  {
    id: 893486,
    price: 93.31,
    name: 'Night Lamp',
    status: 'Out of stock',
    statusBg: '#FF5C8E',
    qty: 0,
    category: 'fashion',
    product:
      product4,
  },
  {
    id: 748975,
    price: 23.99,
    name: 'Healthcare Erbology',
    status: 'In Stock',
    statusBg: 'red',
    qty: 300,
    category: 'vehicle',
    product:
    product1,
  },
];

// Employee DataSource
export const employeeColumns = [
  { field: "id", headerName: "ID", width: 40 },
  {
    field: "employee",
    headerName: "Employee",
    width: 200,
    renderCell: (params)=>{
      return(
        <div className="flex items-center justify-around gap-3">
          <img className="w-10 h-10 rounded-full object-cover" src={params.row.EmployeeImage} alt="product" />
          {params.row.Name}
        </div>
      )
    }
  },
  {
    field: "title",
    headerName: "Title",
    width: 190,
  },

  {
    field: "hireDate",
    headerName: "Hire Date",
    width: 130,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },

  {
    field: "reportsTo",
    headerName: "Reports To",
    width: 120,
  },
]

export const employeeRows = [
  {
    id: 1,
    Name: 'Nancy Davolio',
    title: 'Sales Representative',
    hireDate: '01/02/2021',
    country: 'USA',
    reportsTo: 'Carson',
    EmployeeImage:
    avatar3,
  },
  {
    id: 2,
    Name: 'Nasimiyu Danai',
    title: 'Marketing Head',
    hireDate: '01/02/2021',
    country: 'USA',
    reportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    id: 3,
    Name: 'Iulia Albu',
    title: 'HR',
    hireDate: '01/02/2021',
    country: 'USA',
    reportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    id: 4,
    Name: 'Siegbert Gottfried',
    title: 'Marketing Head',
    hireDate: '01/02/2021',
    country: 'USA',
    reportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    id: 5,
    Name: 'Omar Darobe',
    title: 'HR',
    hireDate: '01/02/2021',
    country: 'USA',
    reportsTo: 'Carson',
    EmployeeImage:avatar,
  },
  {
    id: 6,
    Name: 'Nancy Davolio',
    title: 'Sales Representative',
    hireDate: '01/02/2021',
    country: 'USA',
    reportsTo: 'Carson',
    EmployeeImage:
    avatar3,
  },
  {
    id: 7,
    Name: 'Nasimiyu Danai',
    title: 'Marketing Head',
    hireDate: '01/02/2021',
    country: 'USA',
    reportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    id: 8,
    Name: 'Iulia Albu',
    title: 'HR',
    hireDate: '01/02/2021',
    country: 'USA',
    reportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    id: 9,
    Name: 'Siegbert Gottfried',
    title: 'Marketing Head',
    hireDate: '01/02/2021',
    country: 'USA',
    reportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    id: 10,
    Name: 'Omar Darobe',
    title: 'HR',
    hireDate: '01/02/2021',
    country: 'USA',
    reportsTo: 'Carson',
    EmployeeImage:avatar,
  },
];

// Orders DataSource
export const orderColumns=[
  { field: "id", headerName: "ID", width: 100 },
  {field: "customerName", headerName: "Customer", width: 150 },
  {
    field: "product",
    headerName: "Product",
    width: 250,
    renderCell: (params)=>{
      return(
        <div className="flex items-center justify-around gap-3">
          <img className="w-10 h-10 rounded-full object-cover" src={params.row.product} alt="product" />
          {params.row.orderItems}
        </div>
      )
    }
  },
  {
    field: "totalAmount",
    headerName: "Amount",
    width: 100,
  },

  {
    field: "location",
    headerName: "Location",
    width: 130,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
  },
]

export const orderRows = [
  {
    id: 10248,
    customerName: 'Vinet',
    totalAmount: 32.38,
    orderItems: 'Fresh Tomato',
    location: 'USA',
    status: 'pending',
    statusBg: '#FB9678',
    product:
      product6,
  },
  {
    id: 345653,
    customerName: 'Carson Darrin',
    totalAmount: 56.34,
    orderItems: 'Butter Scotch',
    location: 'Delhi',
    status: 'complete',
    statusBg: '#8BE78B',
    product:
      product5,
  },
  {
    id: 390457,
    customerName: 'Fran Perez',
    totalAmount: 93.31,
    orderItems: 'Candy Gucci',
    location: 'New York',
    status: 'active',
    statusBg: '#03C9D7',
    product:
      product7,
  },
  {
    id: 893486,
    customerName: 'Anika Viseer',
    totalAmount: 93.31,
    orderItems: 'Night Lamp',
    location: 'Germany',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      product4,
  },
  {
    id: 748975,
    customerName: 'Miron Vitold',
    totalAmount: 23.99,
    orderItems: 'Healthcare Erbology',
    location: 'Spain',
    status: 'rejected',
    statusBg: 'red',
    product:
    product1,
  },
  {
    id: 94757,
    customerName: 'Omar Darobe',
    totalAmount: 95.99,
    orderItems: 'Makeup Lancome Rouge',
    location: 'USA',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      product2,
  },
  {
    id: 944895,
    customerName: 'Lulia albu',
    totalAmount: 17.99,
    orderItems: 'Skincare',
    location: 'USA',
    status: 'active',
    statusBg: '#03C9D7',
    product:
      product3,
  },
  {
    id: 845954,
    customerName: 'Penjani',
    totalAmount: 59.99,
    orderItems: 'Headphone',
    location: 'USA',
    status: 'complete',
    statusBg: '#8BE78B',
    product:
      product4,
  },
  {
    id: 845954,
    customerName: 'Jie Yan',
    totalAmount: 87.99,
    orderItems: 'Shoes',
    location: 'USA',
    status: 'pending',
    statusBg: '#FB9678',
    product:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    id: 874534,
    customerName: 'Danai',
    totalAmount: 122.99,
    orderItems: 'Watch',
    location: 'USA',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    id: 38489,
    customerName: 'Miron',
    totalAmount: 87.99,
    orderItems: 'Ice Cream',
    location: 'USA',
    status: 'active',
    statusBg: '#03C9D7',
    product:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    id: 24546,
    customerName: 'Frank',
    totalAmount: 84.99,
    orderItems: 'Pan Cake',
    location: 'Delhi',
    status: 'complete',
    statusBg: '#8BE78B',
    product:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    id: 874534,
    customerName: 'Danai',
    totalAmount: 122.99,
    orderItems: 'Watch',
    location: 'USA',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    id: 10248,
    customerName: 'Vinet',

    totalAmount: 32.38,
    orderItems: 'Fresh Tomato',
    location: 'USA',
    status: 'pending',
    statusBg: '#FB9678',
    product:
      product6,
  },
  {
    id: 345653,
    customerName: 'Carson Darrin',
    totalAmount: 56.34,
    orderItems: 'Butter Scotch',
    location: 'Delhi',
    status: 'complete',
    statusBg: '#8BE78B',
    product:
      product5,
  },
  {
    id: 390457,
    customerName: 'Fran Perez',
    totalAmount: 93.31,
    orderItems: 'Candy Gucci',
    location: 'New York',
    status: 'active',
    statusBg: '#03C9D7',
    product:
      product7,
  },
  {
    id: 893486,
    customerName: 'Anika Viseer',
    totalAmount: 93.31,
    orderItems: 'Night Lamp',
    location: 'Germany',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      product4,
  },
  {
    id: 748975,
    customerName: 'Miron Vitold',
    totalAmount: 23.99,
    orderItems: 'Healthcare Erbology',
    location: 'Spain',
    status: 'rejected',
    statusBg: 'red',
    product:
      product1,
  },
  {
    id: 94757,
    customerName: 'Omar Darobe',
    totalAmount: 95.99,
    orderItems: 'Makeup Lancome Rouge',
    location: 'USA',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      product2,
  },
  {
    id: 944895,
    customerName: 'Lulia albu',
    totalAmount: 17.99,
    orderItems: 'Skincare',
    location: 'USA',
    status: 'active',
    statusBg: '#03C9D7',
    product:
      product3,
  },
  {
    id: 845954,
    customerName: 'Penjani',
    totalAmount: 59.99,
    orderItems: 'Headphone',
    location: 'USA',
    status: 'complete',
    statusBg: '#8BE78B',
    product:
      product4,
  },
  {
    id: 845954,
    customerName: 'Jie Yan',
    totalAmount: 87.99,
    orderItems: 'Shoes',
    location: 'USA',
    status: 'pending',
    statusBg: '#FB9678',
    product:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    id: 874534,
    customerName: 'Danai',
    totalAmount: 122.99,
    orderItems: 'Watch',
    location: 'USA',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    id: 38489,
    customerName: 'Miron',
    totalAmount: 87.99,
    orderItems: 'Ice Cream',
    location: 'USA',
    status: 'active',
    statusBg: '#03C9D7',
    product:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    id: 24546,
    customerName: 'Frank',
    totalAmount: 84.99,
    orderItems: 'Pan Cake',
    location: 'Delhi',
    status: 'complete',
    statusBg: '#8BE78B',
    product:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    id: 874534,
    customerName: 'Danai',
    totalAmount: 122.99,
    orderItems: 'Watch',
    location: 'USA',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    id: 10248,
    customerName: 'Vinet',

    totalAmount: 32.38,
    orderItems: 'Fresh Tomato',
    location: 'USA',
    status: 'pending',
    statusBg: '#FB9678',
    product:
      product6,
  },
  {
    id: 345653,
    customerName: 'Carson Darrin',
    totalAmount: 56.34,
    orderItems: 'Butter Scotch',
    location: 'Delhi',
    status: 'complete',
    statusBg: '#8BE78B',
    product:
      product5,
  },
  {
    id: 390457,
    customerName: 'Fran Perez',
    totalAmount: 93.31,
    orderItems: 'Candy Gucci',
    location: 'New York',
    status: 'active',
    statusBg: '#03C9D7',
    product:
      product7,
  },
  {
    id: 893486,
    customerName: 'Anika Viseer',
    totalAmount: 93.31,
    orderItems: 'Night Lamp',
    location: 'Germany',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      product4,
  },
  {
    id: 748975,
    customerName: 'Miron Vitold',
    totalAmount: 23.99,
    orderItems: 'Healthcare Erbology',
    location: 'Spain',
    status: 'rejected',
    statusBg: 'red',
    product:
      product1,
  },
  {
    id: 94757,
    customerName: 'Omar Darobe',
    totalAmount: 95.99,
    orderItems: 'Makeup Lancome Rouge',
    location: 'USA',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      product2,
  },
  {
    id: 944895,
    customerName: 'Lulia albu',
    totalAmount: 17.99,
    orderItems: 'Skincare',
    location: 'USA',
    status: 'active',
    statusBg: '#03C9D7',
    product:
      product3,
  },
  {
    id: 845954,
    customerName: 'Penjani',
    totalAmount: 59.99,
    orderItems: 'Headphone',
    location: 'USA',
    status: 'complete',
    statusBg: '#8BE78B',
    product:
      product4,
  },
  {
    id: 845954,
    customerName: 'Jie Yan',
    totalAmount: 87.99,
    orderItems: 'Shoes',
    location: 'USA',
    status: 'pending',
    statusBg: '#FB9678',
    product:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    id: 874534,
    customerName: 'Danai',
    totalAmount: 122.99,
    orderItems: 'Watch',
    location: 'USA',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    id: 38489,
    customerName: 'Miron',
    totalAmount: 87.99,
    orderItems: 'Ice Cream',
    location: 'USA',
    status: 'active',
    statusBg: '#03C9D7',
    product:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    id: 24546,
    customerName: 'Frank',
    totalAmount: 84.99,
    orderItems: 'Pan Cake',
    location: 'Delhi',
    status: 'complete',
    statusBg: '#8BE78B',
    product:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    id: 874534,
    customerName: 'Danai',
    totalAmount: 122.99,
    orderItems: 'Watch',
    location: 'USA',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    id: 10248,
    customerName: 'Vinet',

    totalAmount: 32.38,
    orderItems: 'Fresh Tomato',
    location: 'USA',
    status: 'pending',
    statusBg: '#FB9678',
    product:
      product6,
  },
  {
    id: 345653,
    customerName: 'Carson Darrin',
    totalAmount: 56.34,
    orderItems: 'Butter Scotch',
    location: 'Delhi',
    status: 'complete',
    statusBg: '#8BE78B',
    product:
      product5,
  },
  {
    id: 390457,
    customerName: 'Fran Perez',
    totalAmount: 93.31,
    orderItems: 'Candy Gucci',
    location: 'New York',
    status: 'active',
    statusBg: '#03C9D7',
    product:
      product7,
  },
  {
    id: 893486,
    customerName: 'Anika Viseer',
    totalAmount: 93.31,
    orderItems: 'Night Lamp',
    location: 'Germany',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      product4,
  },
  {
    id: 748975,
    customerName: 'Miron Vitold',
    totalAmount: 23.99,
    orderItems: 'Healthcare Erbology',
    location: 'Spain',
    status: 'rejected',
    statusBg: 'red',
    product:
      product1,
  },
  {
    id: 94757,
    customerName: 'Omar Darobe',
    totalAmount: 95.99,
    orderItems: 'Makeup Lancome Rouge',
    location: 'USA',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      product2,
  },
  {
    id: 944895,
    customerName: 'Lulia albu',
    totalAmount: 17.99,
    orderItems: 'Skincare',
    location: 'USA',
    status: 'active',
    statusBg: '#03C9D7',
    product:
      product3,
  },
  {
    id: 845954,
    customerName: 'Penjani',
    totalAmount: 59.99,
    orderItems: 'Headphone',
    location: 'USA',
    status: 'complete',
    statusBg: '#8BE78B',
    product:
      product4,
  },
  {
    id: 845954,
    customerName: 'Jie Yan',
    totalAmount: 87.99,
    orderItems: 'Shoes',
    location: 'USA',
    status: 'pending',
    statusBg: '#FB9678',
    product:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    id: 874534,
    customerName: 'Danai',
    totalAmount: 122.99,
    orderItems: 'Watch',
    location: 'USA',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    id: 38489,
    customerName: 'Miron',
    totalAmount: 87.99,
    orderItems: 'Ice Cream',
    location: 'USA',
    status: 'active',
    statusBg: '#03C9D7',
    product:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    id: 24546,
    customerName: 'Frank',
    totalAmount: 84.99,
    orderItems: 'Pan Cake',
    location: 'Delhi',
    status: 'complete',
    statusBg: '#8BE78B',
    product:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    id: 874534,
    customerName: 'Danai',
    totalAmount: 122.99,
    orderItems: 'Watch',
    location: 'USA',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    id: 10248,
    customerName: 'Vinet',

    totalAmount: 32.38,
    orderItems: 'Fresh Tomato',
    location: 'USA',
    status: 'pending',
    statusBg: '#FB9678',
    product:
      product6,
  },
  {
    id: 345653,
    customerName: 'Carson Darrin',
    totalAmount: 56.34,
    orderItems: 'Butter Scotch',
    location: 'Delhi',
    status: 'complete',
    statusBg: '#8BE78B',
    product:
      product5,
  },
  {
    id: 390457,
    customerName: 'Fran Perez',
    totalAmount: 93.31,
    orderItems: 'Candy Gucci',
    location: 'New York',
    status: 'active',
    statusBg: '#03C9D7',
    product:
      product7,
  },
  {
    id: 893486,
    customerName: 'Anika Viseer',
    totalAmount: 93.31,
    orderItems: 'Night Lamp',
    location: 'Germany',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      product4,
  },
  {
    id: 748975,
    customerName: 'Miron Vitold',
    totalAmount: 23.99,
    orderItems: 'Healthcare Erbology',
    location: 'Spain',
    status: 'rejected',
    statusBg: 'red',
    product:
      product1,
  },
  {
    id: 94757,
    customerName: 'Omar Darobe',
    totalAmount: 95.99,
    orderItems: 'Makeup Lancome Rouge',
    location: 'USA',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      product2,
  },
  {
    id: 944895,
    customerName: 'Lulia albu',
    totalAmount: 17.99,
    orderItems: 'Skincare',
    location: 'USA',
    status: 'active',
    statusBg: '#03C9D7',
    product:
      product3,
  },
  {
    id: 845954,
    customerName: 'Penjani',
    totalAmount: 59.99,
    orderItems: 'Headphone',
    location: 'USA',
    status: 'complete',
    statusBg: '#8BE78B',
    product:
      product4,
  },
  {
    id: 845954,
    customerName: 'Jie Yan',
    totalAmount: 87.99,
    orderItems: 'Shoes',
    location: 'USA',
    status: 'pending',
    statusBg: '#FB9678',
    product:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    id: 874534,
    customerName: 'Danai',
    totalAmount: 122.99,
    orderItems: 'Watch',
    location: 'USA',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    id: 38489,
    customerName: 'Miron',
    totalAmount: 87.99,
    orderItems: 'Ice Cream',
    location: 'USA',
    status: 'active',
    statusBg: '#03C9D7',
    product:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    id: 24546,
    customerName: 'Frank',
    totalAmount: 84.99,
    orderItems: 'Pan Cake',
    location: 'Delhi',
    status: 'complete',
    statusBg: '#8BE78B',
    product:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    id: 874534,
    customerName: 'Danai',
    totalAmount: 122.99,
    orderItems: 'Watch',
    location: 'USA',
    status: 'canceled',
    statusBg: '#FF5C8E',
    product:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
];

// Form DataSource
export const userInputs = [
  {
    id: 1,
    label: "Username",
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: 2,
    label: "Name and surname",
    type: "text",
    placeholder: "John Doe",
  },
  {
    id: 3,
    label: "Email",
    type: "mail",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: 4,
    label: "Phone",
    type: "text",
    placeholder: "+1 234 567 89",
  },
  {
    id: 5,
    label: "Password",
    type: "password",
  },
  {
    id: 6,
    label: "Address",
    type: "text",
    placeholder: "Elton St. 216 NewYork",
  },
  {
    id: 7,
    label: "Country",
    type: "text",
    placeholder: "USA",
  },
];

export const productInputs = [
  {
    id: 1,
    label: "Title",
    type: "text",
    placeholder: "Apple Macbook Pro",
  },
  {
    id: 2,
    label: "Description",
    type: "text",
    placeholder: "Description",
  },
  {
    id: 3,
    label: "Category",
    type: "text",
    placeholder: "Computers",
  },
  {
    id: 4,
    label: "Price",
    type: "text",
    placeholder: "100",
  },
  {
    id: 5,
    label: "Stock",
    type: "text",
    placeholder: "in stock",
  },
];


// Charts DataSource
// 1. Bar Chart
export const barData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];