function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

export function noteToScaleDegree(noteNumber: number): number {
  return mod(noteNumber - 1,7) + 1
}

export function noteToText(noteNumber: number): string {
  const solfegeSyllables = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Ti'];
  const degree: number = noteToScaleDegree(noteNumber);
  return solfegeSyllables[degree - 1];
}
