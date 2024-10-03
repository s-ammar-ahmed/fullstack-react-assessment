import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { store } from "./redux/store";
import ApiList from "./components/ApiList";
import UserList from "./components/UserList";
import MultiStepForm from "./components/MultiStepForm";
import LazyComponent from "./components/LazyComponent";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/users">Users</Link> |{" "}
          <Link to="/form">Multi-step Form</Link> |{" "}
          <Link to="/lazy">Lazy Load</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ApiList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/form" element={<MultiStepForm />} />
          <Route path="/lazy" element={<LazyComponent />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
