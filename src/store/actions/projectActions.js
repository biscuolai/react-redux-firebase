export const createProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {

    // console.log('getstate', getState().firebase.auth.uid);

    // make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Ilson',
      authorLastName: 'Biscuola',
      authorId: '1',
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};