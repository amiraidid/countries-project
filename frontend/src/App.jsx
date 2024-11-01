import { Header } from "./components"
import AllRoutes from "./routes/AllRoutes"


function App() {

  return (
    <div className="App dark:bg-slate-900 h-full">
      <Header />
      <AllRoutes />
    </div>
  )
}

export default App
