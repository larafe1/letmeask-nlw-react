import '../styles/button.scss';
import { ButtonProps } from '../types';

function Button(props: ButtonProps) {
  return (
    <button className="button" {...props} />
  );
}

export { Button };
