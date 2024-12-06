import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";

export default function App() {
  const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: "Poppins", sans-serif;
      color:rgba(30, 57, 50, 1);
    }
  `;

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
