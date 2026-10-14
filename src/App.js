import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [strasse, setStrasse] = useState("");
  const [hausnummer, setHausnummer] = useState(0);

  return (
    <div id="app">
      <header>Übung WID 4 - Object State </header>
      <h4>Lieferung an</h4>
      <div id="adressEingabe">
        <div className="container">
          <span>Nachname</span>
          <input
            className="input"
            placeholder="Nachname"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="container">
          <span>Strasse</span>
          <input
            className="input"
            placeholder="Strassenname"
            type="text"
            value={strasse}
            onChange={(e) => setStrasse(e.target.value)}
          />
        </div>
        <div className="container">
          <span>Hausnummer</span>
          <input
            className="input"
            type="number"
            value={hausnummer}
            onChange={(e) => setHausnummer(parseInt(e.target.value))} // String aus Event wird zu Zahl
          />
        </div>
        <button
          className="Button"
          onClick={() => {
            // Zeigt die Eingaben aus den Feldern als Popup:
            alert(`Gesendet an ${name}, in ${strasse} ${hausnummer}`);
          }}
        >
          Absenden!
        </button>
        <button className="Button" onClick={() => null}>
          Zurücksetzen
        </button>
      </div>
    </div>
  );
}
