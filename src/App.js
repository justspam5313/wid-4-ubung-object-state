import { useState } from "react";
import "./styles.css";

// Der Ausgangszustand liegt außerhalb der Komponente. So wird er nur einmal angelegt
// und sowohl vom useState-Hook als auch vom Zurücksetzen-Button verwendet.
const defaultAdresse = {
  name: "",
  strasse: "",
  hausnummer: 0,
};

export default function App() {
  // Statt drei einzelner useState-Hooks (name, strasse, hausnummer) gibt es jetzt
  // nur noch einen Hook. Der State ist ein Objekt "adresse", das alle drei Werte bündelt.
  // Vorteil: Zusammengehörige Daten liegen an einer Stelle und lassen sich gemeinsam
  // verwenden, z. B. im Popup oder später beim Senden an einen Server.
  // setAdresse ersetzt den gesamten State. Einzelne Felder werden deshalb nie direkt geändert.
  const [adresse, setAdresse] = useState(defaultAdresse);

  function handleAbsenden() {
    alert(
      `Name: ${adresse.name} \nStrasse: ${adresse.strasse} \nHausnummer ${adresse.hausnummer}`,
    );
  }

  return (
    <div id="app">
      <header>Übung WID 4 - Object State </header>
      <h4>Lieferung an</h4>
      <div id="adressEingabe">
        <div className="container">
          <span>Nachname</span>
          {/* value liest die Eigenschaft "name" aus dem Objekt. Das Feld zeigt damit immer
              den aktuellen Stand von adresse.name an, nicht eine eigene Variable. */}
          <input
            className="input"
            placeholder="Nachname"
            type="text"
            value={adresse.name}
            // Bei jeder Eingabe passiert Folgendes:
            // 1. ...adresse kopiert alle bestehenden Eigenschaften in ein neues Objekt.
            // 2. name: e.target.value überschreibt nur "name" mit dem neuen Text.
            // 3. strasse und hausnummer bleiben unverändert erhalten.
            // Ohne den Spread-Operator würde das Objekt nur noch { name: ... } enthalten
            // und die anderen beiden Felder wären verloren.
            onChange={(e) => setAdresse({ ...adresse, name: e.target.value })}
          />
        </div>
        <div className="container">
          <span>Strasse</span>
          {/* Wie beim Nachnamen: value zeigt adresse.strasse an */}
          <input
            className="input"
            placeholder="Strassenname"
            type="text"
            value={adresse.strasse}
            // Kopiert das Objekt und ändert nur "strasse". name und hausnummer bleiben erhalten.
            onChange={(e) =>
              setAdresse({ ...adresse, strasse: e.target.value })
            }
          />
        </div>
        <div className="container">
          <span>Hausnummer</span>
          {/* value zeigt adresse.hausnummer an, also eine Zahl */}
          <input
            className="input"
            type="number"
            value={adresse.hausnummer}
            // e.target.value ist immer ein String, auch bei type="number". parseInt wandelt
            // ihn in eine ganze Zahl um, damit hausnummer als Zahl im State landet.
            // Danach wird wie bei den anderen Feldern nur "hausnummer" geändert.
            onChange={(e) =>
              setAdresse({ ...adresse, hausnummer: parseInt(e.target.value) })
            }
          />
        </div>
        <button
          className="Button"
          onClick={() => {
            // Das Popup liest die Werte jetzt aus dem Objekt adresse statt aus einzelnen Variablen.
            // Da adresse immer den aktuellen Stand enthält, werden die eingegebenen Werte angezeigt.
            alert(
              `Gesendet an ${adresse.name}, in ${adresse.strasse} ${adresse.hausnummer}`,
            );
          }}
        >
          Absenden!
        </button>
        {/* Noch ohne Funktion. Wird in Aufgabe 2 mit setAdresse(defaultAdresse) umgesetzt. */}
        <button className="Button" onClick={() => setAdresse(defaultAdresse)}>
          Zurücksetzen!
        </button>
      </div>
    </div>
  );
}
