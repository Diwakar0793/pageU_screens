import ConsumerHomePage from "./app/consumer/ConsumerHomePage";
import MerchantHomePage from "./app/merchant/MerchantHomePage";
import CardsListPage from "./app/merchant/CardsListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConsumerHomePage />} />
        <Route path="/merchantHomePage" element={<MerchantHomePage />} />
        <Route path="/cardsListPage" element={<CardsListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
