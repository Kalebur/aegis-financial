import { Route, Routes } from "react-router-dom";
import { Home, AccountOverview } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<AccountOverview />} />
      </Routes>
    </>
  );
};
