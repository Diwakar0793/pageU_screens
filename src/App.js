// import ConsumerHomePage from "./app/consumer/ConsumerHomePage";
import MerchantHomePage from "./app/merchant/MerchantHomePage";
import CardsListPage from "./app/merchant/CardsListPage";
import CardDetailedView from "./app/merchant/CardDetailedView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MerchantHomePage />} />
        <Route path="/merchantHomePage" element={<MerchantHomePage />} />
        <Route path="/cardsListPage" element={<CardsListPage />} />
        <Route path="/cardDetailedView" element={<CardDetailedView />} />
      </Routes>
    </Router>
  );
};

export default App;
