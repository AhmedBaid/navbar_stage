import React, { Fragment } from 'react';
import 'boxicons';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route,NavLink } from 'react-router-dom';
import {
  Acceuil,
  Commandes,
  Stocks,
  Fournisseurs,
  Client,
  Historiques,
  LogOut,
  User,
} from './Pages/index';

const App = () => {
  return (
    <Fragment>
      <Navbar />
        <Routes>
          <Route path="/Acceuil" element={<Acceuil />} />
          <Route path="/Stock" element={<Stocks />} />
          <Route path="/Commandes" element={<Commandes />} />
          <Route path="/Fournisseurs" element={<Fournisseurs />} />
          <Route path="/Historiques" element={<Historiques />} />
          <Route path="/Utilisateurs" element={<User />} />
          <Route path="/LogOut" element={<LogOut />} />
          <Route path="/Client" element={<Client />} />
        </Routes>
    </Fragment>
  );
};

export default App;
