import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css"


import Error from "./pages/Error";
import Home from "./pages/Home";
import Register from "./pages/Register";

import {SharedLayout} from "./pages/Dashboard";
import {Stats} from "./pages/Dashboard";
import {AllJobs} from "./pages/Dashboard";
import {Profile} from "./pages/Dashboard";
import {AddNewJob} from "./pages/Dashboard";

function App() {
  return (
      <div>
          <BrowserRouter>
              <ToastContainer />
              <Routes>
                  <Route path="/" element={<Home />} />

                  <Route path="/dashboard" element={<SharedLayout />}>
                      <Route index element={<Stats />} />

                      <Route path="add-new-job" element={<AddNewJob />} />

                      <Route path="all-jobs" element={<AllJobs />} />

                      <Route path="profile" element={<Profile />} />
                  </Route>

                  <Route path="/register" element={<Register />} />

                  <Route path="*" element={<Error />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
