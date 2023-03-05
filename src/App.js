import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useLocation
} from "react-router-dom";
import HomePage from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Error404 from "./Components/Error404Page/Error404";
import DetailsPage from "./Pages/DetailPage";
import { AnimatePresence } from "framer-motion";

function App() {


  function DetailPage() {
    // Get the userId param from the URL.
    let { serviceId } = useParams();
    return <DetailsPage serviceId={serviceId} />;
  }
  return (
    <>
      <Router>
        <AnimatePresence>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route
              exact
              path="/detailPage/:serviceId"
              element={<DetailPage />}
            />

            <Route exact path="*" element={<Error404 />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
