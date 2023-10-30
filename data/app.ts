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
  private pianoRollData: any[];

  constructor(csvURL?: string) {
    this.csvURL = csvURL;

    this.pianoRollData = [];
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

  preparePianoRollCard(rollId: number) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("piano-roll-card");

    // Create and append other elements to the card container as needed
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    descriptionDiv.textContent = `This is a piano roll number ${rollId}`;
    cardDiv.appendChild(descriptionDiv);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svg.classList.add("piano-roll-svg");
    svg.setAttribute("width", "80%");
    svg.setAttribute("height", "150");

    // Append the SVG to the card container
    cardDiv.appendChild(svg);

    return { svg, cardDiv };
  }

  async generateSVGs() {
    if (!this.data) await this.loadPianoRollData();

    const pianoRollContainer = document.getElementById("pianoRollContainer");
    if (!pianoRollContainer) return;
    pianoRollContainer.innerHTML = "";
    for (let it = 0; it < 20; it++) {
      const start = it * 60;
      const end = start + 60;
      const partData = this.data.slice(start, end);

      const { svg, cardDiv } = this.preparePianoRollCard(it);

      pianoRollContainer.appendChild(cardDiv);
      const pianoRoll = new PianoRoll(svg, partData);

      // Pushed data because my react commponents need it
      this.pianoRollData.push({
        svg,
        partData,
      });
    }
    return this.pianoRollData;
  }
}
