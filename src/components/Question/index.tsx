import './styles.scss';
import { IQuestion } from '../../types';

function Question({
  author,
  content,
  isAnswered = false,
  isHighlighted = false,
  children
}: IQuestion) {
  return (
    <div
      className={
        `question ${isAnswered ? 'answered' : ''}
        ${isHighlighted && !isAnswered ? 'highlighted' : ''}`
      }
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  );
}

export { Question };
