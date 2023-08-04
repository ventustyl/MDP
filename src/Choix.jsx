import React, { useState } from "react";

const Choix = ({ onGenerate }) => {
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [excludeSimilarChars, setExcludeSimilarChars] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8);

  const handleGenerateClick = () => {
    const options = {
      includeNumbers,
      includeLowercase,
      includeUppercase,
      includeSpecialChars,
      excludeSimilarChars,
      passwordLength,
    };
    onGenerate(options);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
        Inclure les caractères numériques (0-9)
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
        />
        Inclure les caractères minuscules (a-z)
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
        Inclure les caractères majuscules (A-Z)
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={includeSpecialChars}
          onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
        />
        Inclure les caractères spéciaux (&é-!?:+è_,çà=~#|*^@%ù$)
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={excludeSimilarChars}
          onChange={() => setExcludeSimilarChars(!excludeSimilarChars)}
        />
        Exclure les caractères similaire (0, o, O, 1, l, I)
      </label>
      <br />
      <label>
        Password Length:
        <select
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
        >
          {Array.from({ length: 64 }, (_, i) => i + 1).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={handleGenerateClick}>Créer un Mot de Passe</button>
    </div>
  );
};

export default Choix;
