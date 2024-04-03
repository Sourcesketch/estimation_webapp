import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/Auth/SignIn";
import CreateEstimation from "./components/CreateEstimation";
import Costing from "./components/Costing";
import Languages from "./components/Languages";
import Timeline from "./components/timeline";
//css
import "./index.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    const userToken = localStorage.getItem("access-token");
    const token = JSON.parse(userToken);
    // console.log(token);
    if (!token) {
      setIsLoggedIn(false);
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/new" element={<CreateEstimation />}></Route>
        <Route path="/costing" element={<Costing />}></Route>
        <Route path="/languages" element={<Languages />}></Route>
        <Route path="/timeline/:id" element={<Timeline />}></Route>
        {/* <Route path="/newtimeline" element={<NewTimeline />}></Route> */}
        <Route path="*" element={<NotFoundpage />} />
      </Routes>
    </>
  );
}

export default App;
const NotFoundpage = () => <h1>Page Not Found</h1>;
