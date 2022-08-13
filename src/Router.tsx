import { Route, Routes } from "react-router-dom";
import Board from "./components/Board";
import Home from "./components/Home";
import { UserStorage } from "./UserContext";

const Router = () => {
  return (
    <UserStorage>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Board/" element={<Board />} />
      </Routes>
    </UserStorage>
  );
};

export default Router;
