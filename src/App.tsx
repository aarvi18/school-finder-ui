import { Navbar } from "./components/navbar";
import SchoolCard from "./components/schoolCard/SchoolCard";
import { SearchPanel } from "./components/searchPanel/SearchPanel";
import TopBar from "./components/topbar/TopBar";
import { mockDataList } from "./data/schoolData";
import { Breadcrumb } from "./ui";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />
        <SearchPanel />
        <TopBar />
        {mockDataList.map((school, idx) => (
          <SchoolCard key={idx} data={school} />
        ))}
      </main>
    </>
  );
}

export default App;
