import { Navbar } from "./components/navbar"
import { Breadcrumb } from "./ui"

function App() {

  return (
    <>
      <Navbar />
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />
        <h1>Hello!</h1>
      </main>
    </>
  )
}

export default App
