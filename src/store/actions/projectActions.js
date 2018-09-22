export const createProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {

    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    // make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};