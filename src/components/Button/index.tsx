import './styles.scss';
import { ButtonProps } from '../../types';

function Button({
  isOutlined = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props} 
    />
  );
}

export { Button };
