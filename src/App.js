import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Intro from "./components/Intro"
import Login from "./components/Login"
import Home from "./components/Home"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
