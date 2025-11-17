import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Wallet from "./pages/Wallet";
import Analytics from "./pages/Analytics";
import Upload from "./pages/Upload";
import Scan from "./pages/Scan";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="upload" element={<Upload />} />
          <Route path="scan" element={<Scan />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<Users />} />
          <Route index element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
