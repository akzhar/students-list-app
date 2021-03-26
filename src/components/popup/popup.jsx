import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions.js';

import {Class} from '../../const.js';

import ButtonClose from '../button-close/button-close.jsx';

const Popup = ({isOpen, message, hidePopup}) => {

  const handleKeyDown = (evt) => {
    if (evt.key === `Escape`) {
      hidePopup();
    }
  };

  useEffect(() => {
    document.body.addEventListener(`keydown`, handleKeyDown);
    return () => {
      document.body.removeEventListener(`keydown`, handleKeyDown);
    };
  }, []);

  return <div className={`${Class.POPUP} ${isOpen && `${Class.POPUP}--open`}`} id="popup">
    <div className={`${Class.POPUP}__window`}>
      <p className={`${Class.POPUP}__message`}>{message}</p>
      <ButtonClose
        title="Закрыть"
        onClick={hidePopup}
      />
    </div>
  </div>;
};

const mapStateToProps = (state) => ({
  isOpen: state.popup.isOpen,
  message: state.popup.message
});

const mapDispatchToProps = (dispatch) => ({
  hidePopup: () => dispatch(ActionCreator.hidePopup())
});

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  hidePopup: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
