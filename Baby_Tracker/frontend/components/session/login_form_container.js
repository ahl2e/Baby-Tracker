import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, logout, signup} from '../../actions/session_actions';
// you can take the actions you don't need out.  They can just live here for now.


const mapStateToProps =(state) => {
  return{
    errors: state.errors.session,
    formType: 'Log In',
    user: state.entities.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    dispatchForm : (user) => dispatch(login(user)),
    logOut : () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
