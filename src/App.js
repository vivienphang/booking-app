
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NavLayout from "./NavLayout";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Landing />} />
          {/* <Route path="edit" element={<EditUser  userToken={userToken}/>} /> */}
        </Route>
        <Route path="*" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
