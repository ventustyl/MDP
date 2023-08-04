import React, { useState } from "react";
import "./App.css";
import Choix from "./Choix";
import Bouton from "./Bouton";
import Mdp from "./Mdp";

const App = () => {
  const [generatedPassword, setGeneratedPassword] = useState({
    password: "61146598746216546",
    options: {
      includeNumbers: true,
      includeLowercase: false,
      includeUppercase: false,
      includeSpecialChars: false,
      excludeSimilarChars: false,
      passwordLength: 8,
    },
  });

  const handleGenerate = (options) => {
    const newPassword = generatePassword(options);
    setGeneratedPassword({ password: newPassword, options });
  };

  const generatePassword = (options) => {
    let characters = "";
    if (options.includeNumbers) characters += "0123456789";
    if (options.includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (options.includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.includeSpecialChars) characters += "&é-!?:+è_,çà=~#|*^@%ù$";

    if (options.excludeSimilarChars)
      characters = characters.replace(/[0oO1lI]/g, "");

    let newPassword = "";
    for (let i = 0; i < options.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }

    return newPassword;
  };

  return (
    <div>
      <h1>Projet Mot de passe</h1>
      <Choix onGenerate={handleGenerate} />
      {/* <Bouton
        onGenerateClick={() => handleGenerate(generatedPassword.options)}
      /> */}
      <Mdp generatedPassword={generatedPassword} /> {/* Modification ici */}
    </div>
  );
};

export default App;
