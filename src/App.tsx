import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { ClientRoutes } from "./routes/client/ClientRoutes"



function App() {


  return (
    <>
    <AppLayout/>
    </>
  )
}


function AppLayout(){

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<ClientRoutes/>}/>
      </Routes>
    </Router>
  )
}

export default App
