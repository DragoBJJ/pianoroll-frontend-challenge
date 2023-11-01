import { Sequence } from "./types";

export type PianoRollData = {
  backgroundColormap: string[];
  end: number;
  noteColormap: string[];
  note_height: number | null;
  start: number;
  svgElement: SVGElement;
};

export type PianoSequenceData = {
  id: number;
  sequence: Sequence;
};

export class PianoRollDisplay {
  private csvURL?: string;
  private data: Sequence;
  private pianoSequenceData: PianoSequenceData[];
  private API_URL: string;

  constructor(csvURL?: string) {
    this.csvURL = csvURL;
    this.data = [];
    this.pianoSequenceData = [];
    this.API_URL = "https://pianoroll.ai/random_notes";
  }

  async loadPianoRollData() {
    try {
      const response = await fetch(this.API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      this.data = await response.json();
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  async getPianoSequences(): Promise<PianoSequenceData[]> {
    if (!this.data.length) await this.loadPianoRollData();
    const CONST_SIZE = 60;
    for (let it = 0; it < 20; it++) {
      const start = it * CONST_SIZE;
      const end = start + CONST_SIZE;
      const partData = this.data.slice(start, end);
      const pianoSequence: PianoSequenceData = {
        id: it,
        sequence: partData,
      };
      this.pianoSequenceData.push(pianoSequence);
    }
    return this.pianoSequenceData;
  }

  getPianoSequenceByID(
    id: PianoSequenceData["id"]
  ): PianoSequenceData | undefined {
    return this.pianoSequenceData.find((sequence) => sequence.id === id);
  }
}
