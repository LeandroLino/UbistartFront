import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./component/Header/index.jsx";
import Container from "./component/Container/index.jsx";
import Home from "./pages/Home/index.jsx";
import Tasks from "./pages/Tasks/index.jsx";
import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [openCreateTasks, setCreateTask] = useState(false);

  return (
    <Container>
      <Router>
        <Header setSearch={setSearch} setCreateTask={setCreateTask} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/home"
            element={
              <Tasks
                search={search}
                openCreateTasks={openCreateTasks}
                setCreateTask={setCreateTask}
              />
            }
          />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
