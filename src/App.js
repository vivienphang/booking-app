
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NavLayout from "./NavLayout";
import RoomDisplay from "./pages/RoomDisplay";
import ViewAvailability from "./pages/ViewAvailability";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Landing />} />
          <Route path="/room/:id" element={<RoomDisplay />} />
          <Route path="/room/:id/availability" element={<ViewAvailability />} />
        </Route>
        <Route path="*" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
