
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Responsive Sidebar with Navbar Button</title>
//   <style>
//     /* Reset some default styles */
//     * {
//       box-sizing: border-box;
//       margin: 0;
//       padding: 0;
//     }

//     /* Body styles */
//     body {
//       font-family: Arial, sans-serif;
//       background-color: #f4f4f4;
//     }

//     /* Navbar styles */
//     .navbar {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       background-color: #333;
//       color: #fff;
//       padding: 10px 20px;
//     }

//     .navbar-brand {
//       font-size: 20px;
//       font-weight: bold;
//     }

//     .navbar-toggler {
//       background-color: transparent;
//       border: none;
//       color: #fff;
//       font-size: 24px;
//       cursor: pointer;
//     }

//     /* Sidebar styles */
//     .sidebar {
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 200px;
//       height: 100%;
//       background-color: #333;
//       color: #fff;
//       padding: 20px;
//       transition: transform 0.3s ease-in-out;
//     }

//     .sidebar.hidden {
//       transform: translateX(-100%);
//     }

//     .sidebar-nav {
//       list-style-type: none;
//       padding: 0;
//     }

//     .sidebar-nav li {
//       margin-bottom: 10px;
//     }

//     .sidebar-nav li a {
//       color: #fff;
//       text-decoration: none;
//     }

//     /* Responsive styles */
//     @media (max-width: 768px) {
//       .sidebar {
//         width: 100%;
//         height: auto;
//         position: static;
//         transform: translateX(0);
//       }

//       .sidebar.hidden {
//         transform: translateX(-100%);
//       }
//     }
//   </style>
// </head>
// <body>
//   <div id="root"></div>

//   <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
//   <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
//   <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

//   <script type="text/babel">
//     function App() {
//       const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);

//       const toggleSidebar = () => {
//         setIsSidebarVisible(!isSidebarVisible);
//       };

//       return (
//         <div>
//           <nav className="navbar">
//             <div className="navbar-brand">My App</div>
//             <button className="navbar-toggler" onClick={toggleSidebar}>
//               {isSidebarVisible ? '✕' : '☰'}
//             </button>
//           </nav>

//           <div className={`sidebar ${isSidebarVisible ? '' : 'hidden'}`}>
//             <ul className="sidebar-nav">
//               <li><a href="#">Home</a></li>
//               <li><a href="#">About</a></li>
//               <li><a href="#">Services</a></li>
//               <li><a href="#">Contact</a></li>
//             </ul>
//           </div>
//         </div>
//       );
//     }

//     ReactDOM.render(<App />, document.getElementById('root'));
//   </script>
// </body>
// </html>