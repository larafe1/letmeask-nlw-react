import { useState, useEffect } from 'react';

import { IQuestion, FirebaseQuestions } from '../types';
import { useAuth } from './useAuth';
import { database } from '../services/firebase';

function useRoom(roomId: string) {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const roomRef = database.ref(`/rooms/${roomId}`);
    roomRef.on('value', room => {
      const firebaseQuestions: FirebaseQuestions = room.val().questions;
      if (firebaseQuestions) {
        const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isAnswered: value.isAnswered,
            isHighlighted: value.isHighlighted,
            likeCount: Object.values(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0]
          }
        });
        setTitle(room.val().title);
        setQuestions(parsedQuestions);
      }
    });

    return () => {
      roomRef.off('value');
    }
  }, [roomId, user?.id]);

  return { title, questions };
}

export { useRoom };
