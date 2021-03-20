import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions.js';
import {Message} from '../../const.js';

import Container from '../container/container.jsx';
import Header from '../header/header.jsx';
import Menu from '../menu/menu.jsx';
import Students from '../students/students.jsx';
import StudentsEmpty from '../students-empty/students-empty.jsx';
import Popup from '../popup/popup.jsx';

const StudentsScreen = ({hasStudents, updateStudents, showPopup}) => {

  useEffect(() => {
    // const onSuccess = () => showPopup(Message.OK.DATA_WAS_LOADED);
    const onFail = () => showPopup(Message.ERROR.DATA_WAS_NOT_LOADED);
    updateStudents(null, onFail);
  }, []);

  return <React.Fragment>
    <Header/>
    <main>
      <Container>
        <Menu/>
        {hasStudents ? <Students/> : <StudentsEmpty/>}
      </Container>
    </main>
    <Popup/>
  </React.Fragment>;
};

const mapStateToProps = (state) => ({
  hasStudents: state.students.items.length !== 0
});

const mapDispatchToProps = (dispatch) => ({
  updateStudents: (onSuccess, onFail) => dispatch(ActionCreator.updateStudents(onSuccess, onFail)),
  showPopup: (message) => dispatch(ActionCreator.showPopup(message))
});

StudentsScreen.propTypes = {
  hasStudents: PropTypes.bool.isRequired,
  updateStudents: PropTypes.func.isRequired,
  showPopup: PropTypes.func.isRequired
};

export {StudentsScreen};
export default connect(mapStateToProps, mapDispatchToProps)(StudentsScreen);
