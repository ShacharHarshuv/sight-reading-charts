import React, { CSSProperties } from 'react';
import './Note.scss';
import {
  noteToText,
  noteToScaleDegree,
} from './noteToText';

const noteColors = ['#d81616', '#f5ad29', '#ffe432', '#07bd07', '#126efe', '#710bbc', '#f469f4'];

export function Note(props: {
  number: number,
  style?: CSSProperties | undefined,
}): React.ReactElement {

  const style: CSSProperties = {
    backgroundColor: noteColors[noteToScaleDegree(props.number) - 1],
    ...props.style,
  }

  return (
    <div
      className="Note"
      style={style}
    >
      {noteToText(props.number)}
    </div>
  );
}
