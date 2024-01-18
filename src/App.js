import ConsumerHomePage from "./app/consumer/ConsumerHomePage";
import MerchantHomePage from "./app/merchant/MerchantHomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MerchantHomePage />} />
      </Routes>
      <Routes>
        <Route path="/merchantHomePage" element={<MerchantHomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
