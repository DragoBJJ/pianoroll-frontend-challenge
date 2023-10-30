import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className="navbar">
        <div className="logo-container">
          <img src="assets/white.svg" alt="Logo" />
        </div>
      </nav>

      <h1>Welcome to PianoRoll frontend coding challenge!</h1>

      <div id="buttonContainer">
        <button id="loadCSV">Load Piano Rolls!</button>
      </div>
      <div id="pianoRollContainer"></div>
    </main>
  );
}
