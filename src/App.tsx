import React from 'react';
import './App.scss';
import { Staff } from './Staff';
import { Melody } from './Melody';
import { noteToText } from './noteToText';

const melody: Melody = [1, 2, 3, 0, -1];
const exercises: {
  including: number[],
  melodies: Melody[]
}[] = [
  {
    including: [1, 2, 3],
    melodies: [
      [1, 2, 1, 2, 3, 1, 2, 3, 2],
      [3, 2, 1, 2, 1, 3, 1, 3, 2],
      [1, 2, 3, 1, 3, 3, 1, 2, 2],
    ],
  },
  {
    including: [1, 2, 3, 4, 5],
    melodies: [
      [1, 3, 4, 5, 2, 3, 1, 4, 3],
      [2, 4, 5, 1, 3, 4, 2, 5, 4],
      [1, 3, 5, 4, 2, 3, 1, 2, 1],
      [5, 4, 2, 3, 1, 2, 3, 1, 4],
      [1, 2, 1, 4, 3, 5, 1, 3, 4],
    ],
  },
  {
    including: [7, 1, 2, 3],
    melodies: [
      [1, 0, 1, 2, 3, 1, 2, 0, 1],
      [0, 2, 1, 0, 1, 3, 2, 0, 2],
      [2, 1, 3, 0, 2, 0, 1, 3, 0],
    ],
  },
  {
    including: [5, 6, 7, 1],
    melodies: [
      [8, 5, 8, 7, 8, 6, 7, 8, 5],
      [7, 5, 7, 6, 5, 7, 5, 8, 7],
      [6, 5, 6, 8, 7, 5, 6, 5, 8],
    ],
  },
  {
    including: [1, 2, 3, 4, 5, 6, 7],
    melodies: [
      // [1, 2, 3, 4, 5, 6, 7, 1, 2],
    ],
  },
]

function App() {
  return (
    <div>
      <h1>Sight Reading Exercises</h1>
      {exercises.map((exercise, index) => ([
        <h2>Melodies Including {exercise.including.map(noteToText).join(', ')}</h2>,
        ...exercise.melodies.map((melody, index) => [
          <h3>Melody {index + 1}</h3>,
          Staff({melody}),
        ]),
      ]))}
    </div>
  );
}

export default App;
