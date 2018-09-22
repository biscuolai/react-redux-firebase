export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    // const firestore = getFirestore();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {

      // const userRef = firestore.collection('users').doc(getState().firebase.auth.uid);
      // console.log('userRef', userRef);
      // const getDoc = userRef.get()
      //   .then(doc => {
      //     if (!doc.exists) {
      //       console.log('No such document!');
      //     } else {
      //       console.log('Document data:', doc.data());
      //       const userDoc = doc.data();
      //       dispatch({ type: 'LOGIN_SUCCESS', userDoc });
      //     }
      //   })
      //   .catch(err => {
      //     console.log('Error getting document', err);
      //   });
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });

  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err });
    });
  }
}