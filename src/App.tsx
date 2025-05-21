import { Navbar } from "./components/navbar"
import { SearchPanel } from "./components/searchPanel/SearchPanel"
import { Breadcrumb } from "./ui"

function App() {

  return (
    <>
      <Navbar />
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />
        <SearchPanel />
      </main>
    </>
  )
}

export default App
