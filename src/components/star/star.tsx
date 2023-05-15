import { ChangeEvent } from 'react';

type StarProps = {
  star: string;
  number: string;
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}
export default function Star({star, number, value, onChange}: StarProps) {
  return (
    <>
      <input className="rating__input" id={`star-${star}`} type="radio" name="rating" value={star} onChange={onChange} checked={value === number}/>
      <label className="rating__label" htmlFor={`star-${star}`}>{`Rating ${star}`}</label>
    </>
  );
}
