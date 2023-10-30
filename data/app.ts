import PianoRoll from "./pianoroll";

export type PianoRollType = {
  backgroundColormap: string[];
  end: number;
  noteColormap: string[];
  note_height: number | null;
  start: number;
  svgElement: SVGElement;
};
export class PianoRollDisplay {
  private csvURL?: string;
  private data: any;
  private rollData: PianoRollType[];

  constructor(csvURL?: string) {
    this.csvURL = csvURL;
    this.data = null;
    this.rollData = [];
  }

  async loadPianoRollData() {
    try {
      const response = await fetch("https://pianoroll.ai/random_notes");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      this.data = await response.json();
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  getRollData() {
    return this.rollData;
  }

  preparePianoRollCard() {
    // const cardDiv = document.createElement("div");
    // cardDiv.classList.add("piano-roll-card");

    // // Create and append other elements to the card container as needed
    // const descriptionDiv = document.createElement("div");
    // descriptionDiv.classList.add("description");
    // descriptionDiv.textContent = `This is a piano roll number ${rollId}`;
    // cardDiv.appendChild(descriptionDiv);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svg.classList.add("piano-roll-svg");
    svg.setAttribute("width", "80%");
    svg.setAttribute("height", "150");

    // Append the SVG to the card container
    // cardDiv.appendChild(svg);

    return { svg };
  }

  async generateSVGs() {
    if (!this.data) await this.loadPianoRollData();
    if (!this.data) return;

    const pianoRollContainer = document.getElementById("pianoRollContainer");
    if (!pianoRollContainer) return;
    pianoRollContainer.innerHTML = "";
    for (let it = 0; it < 20; it++) {
      const start = it * 60;
      const end = start + 60;
      const partData = this.data.slice(start, end);

      const { svg } = this.preparePianoRollCard();

      // pianoRollContainer.appendChild(cardDiv);
      const roll = new PianoRoll(svg, partData);
      const rollData = roll.getPianoData();
      console.log("roll", roll);
      this.rollData.push(rollData);
    }
  }
}
