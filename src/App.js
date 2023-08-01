
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NavLayout from "./NavLayout";
import RoomDisplay from "./components/RoomDisplay";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Landing />} />
          <Route path="/:id" element={<RoomDisplay />} />
        </Route>
        <Route path="*" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
