import { createContext, useState, useEffect } from 'react';

import { IAuthContext, AuthContextProviderProps, IUser } from '../types';
import { firebase, auth } from '../services/firebase';

export const AuthContext = createContext({} as IAuthContext);

function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<IUser | undefined>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });        
      }
    });

    return () => {
      unsubscribe();
    }
  }, []);

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(res => {
        if (res.user) {
          const { displayName, photoURL, uid } = res.user;

          if (!displayName || !photoURL) {
            throw new Error('Missing information from Google Account.');
          }

          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          });
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider };
