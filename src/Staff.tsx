import { Melody } from './Melody';
import { Note } from './Note';
import { ReactElement } from 'react';
import './Staff.scss';

export function Staff(props: {
  melody: Melody,
}): ReactElement {
  const maxNote = Math.max(...props.melody);
  const minNote = Math.min(...props.melody);
  const noteRange = maxNote - minNote;

  return (
    <div className="Staff">
      {props.melody.map((note, index) => (
        <div
          className="Staff-beat"
          style={{gridTemplateRows: `repeat(${noteRange + 1}, 2em)`}}
        >
          <Note
            key={index}
            number={note}
            style={{gridRow: maxNote - note + 1}}
          ></Note>
        </div>
      ))}
    </div>
  );
}
