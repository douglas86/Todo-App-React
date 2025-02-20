import Layout from "./components/templates/Layout.tsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/HomePage.tsx";
import NewTaskPage from "./components/pages/NewTaskPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-task" element={<NewTaskPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
