import { PianoSequence, Sequence } from "./types";

export class PianoRollDisplay {
  private csvURL?: string;
  private data: Sequence;
  private PianoSequence: PianoSequence[];
  private API_URL: string;

  constructor(csvURL?: string) {
    this.csvURL = csvURL;
    this.data = [];
    this.PianoSequence = [];
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

  async getPianoSequences(): Promise<PianoSequence[]> {
    if (!this.data.length) await this.loadPianoRollData();
    const CONST_SIZE = 60;
    for (let it = 0; it < 20; it++) {
      const start = it * CONST_SIZE;
      const end = start + CONST_SIZE;
      const partData = this.data.slice(start, end);
      const pianoSequence: PianoSequence = {
        id: it,
        sequence: partData,
      };
      this.PianoSequence.push(pianoSequence);
    }
    return this.PianoSequence;
  }

  getPianoSequenceByID(id: PianoSequence["id"]): PianoSequence | undefined {
    return this.PianoSequence.find((sequence) => sequence.id === id);
  }
}
