import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { Form } from "pages/Form";
import { Listing } from "pages/Listing";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":moveId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
