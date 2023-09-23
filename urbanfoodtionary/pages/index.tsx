import { useState } from "react";
import Navbar from "../components/NavBar";

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definitions, setDefinitions] = useState([
    { term: "Term 1", definition: "Definition for term 1..." },
    { term: "Term 2", definition: "Definition for term 2..." },
    // ... you can add more sample definitions
  ]);
  const [filteredDefinitions, setFilteredDefinitions] = useState(definitions);

  const handleSearch = () => {
    const results = definitions.filter((def) =>
      def.term.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDefinitions(results);
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
        <div className="example-definitions">
          {filteredDefinitions.map((def, index) => (
            <div className="definition" key={index}>
              <h3>{def.term}</h3>
              <p>{def.definition}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
