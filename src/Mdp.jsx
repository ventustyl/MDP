import React, { useState, useEffect } from "react";

const Mdp = ({ generatedPassword }) => {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    if (generatedPassword) {
      // Régénérer le mot de passe lorsque les options changent
      const regenPassword = generatePassword(generatedPassword.options);
      setPasswords([regenPassword]);
    }
  }, [generatedPassword]);

  const handleRegenerateClick = () => {
    if (generatedPassword) {
      const regenPassword = generatePassword(generatedPassword.options);
      setPasswords([regenPassword]);
    }
  };

  const handleCopyClick = (password) => {
    navigator.clipboard.writeText(password);
  };

  const generatePassword = (options) => {
    let characters = "";
    if (options && options.includeNumbers) characters += "0123456789";
    if (options && options.includeLowercase)
      characters += "abcdefghijklmnopqrstuvwxyz";
    if (options && options.includeUppercase)
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options && options.includeSpecialChars)
      characters += "&é-!?:+è_,çà=~#|*^@%ù$";

    if (options && options.excludeSimilarChars)
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
      {passwords.map((password, index) => (
        <div className="mdp" key={index}>
          <div>{password}</div>
          <button onClick={handleRegenerateClick}>Actualiser</button>
          <button onClick={() => handleCopyClick(password)}>Copier</button>
        </div>
      ))}
    </div>
  );
};

export default Mdp;
