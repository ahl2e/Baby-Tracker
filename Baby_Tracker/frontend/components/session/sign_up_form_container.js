import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, logout, signup} from '../.././actions/session_actions';
// you can take the actions you don't need out.  They can just live here for now.

const mapStateToProps =({errors}) => {
  return{
    errors: errors.session,
    formType: 'Sign Up',
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    dispatchForm : (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
