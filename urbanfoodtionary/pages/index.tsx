import { useState } from "react";
import Navbar from "../components/NavBar";
import Definitions from "@/components/Definitions";

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // const results = definitions.filter((def) =>
    //   def.term.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    // setFilteredDefinitions(results);
  };

  return (
    <div>
      <Navbar />
      <main>
        <div className="search-section">
          <header>
            <h1>UrbanFoodtionary</h1>
          </header>
          <input
            type="text"
            placeholder="Search for a term..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <Definitions />
      </main>
    </div>
  );
};

export default HomePage;
