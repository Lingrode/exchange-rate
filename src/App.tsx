import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";

import Home from "./pages/Home";
import Rates from "./pages/Rates";
import Header from "./components/Header";

import { useAppDispatch } from "./hooks/reduxHooks";
import { getBaseCurrency } from "./redux/currency/operations";
import { setDefaultCurrency } from "./redux/currency/slice";

import "./App.css";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const crd = pos.coords;
        await dispatch(getBaseCurrency(crd));
      },
      (error) => {
        console.log("Unable to get your position: ", error.message);
        dispatch(setDefaultCurrency("USD"));
      }
    );
  });

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
