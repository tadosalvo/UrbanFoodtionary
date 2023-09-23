import { useState } from "react";

const Definitions: React.FC = () => {
  const [definitions, setDefinitions] = useState([
    { term: "Term 1", definition: "Definition for term 1..." },
    { term: "Term 2", definition: "Definition for term 2..." },
    // ... you can add more sample definitions
  ]);

  const [filteredDefinitions, setFilteredDefinitions] = useState(definitions);

  return (
    <div className="example-definitions">
      {filteredDefinitions.map((def, index) => (
        <div className="definition" key={index}>
          <h3>{def.term}</h3>
          <p>{def.definition}</p>
        </div>
      ))}
    </div>
  );
};

export default Definitions;
