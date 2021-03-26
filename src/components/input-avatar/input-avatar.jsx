import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions.js';
import {VALID_AVATAR_EXTENSIONS, Class, Message} from '../../const.js';

import defaultAvatar from '../../img/avatar.svg';

const InputAvatar = ({avatarImageRef, showPopup}) => {

  const avatarInputRef = useRef();
  const avatarDropZoneRef = useRef();

  const renderAvatarIfFileIsValid = (file) => {
    const mimeType = file.type.toLowerCase();
    const fileExtension = mimeType.slice(mimeType.indexOf(`/`) + 1);
    if (VALID_AVATAR_EXTENSIONS.includes(fileExtension)) {
      const fReader = new FileReader();
      fReader.readAsDataURL(file);
      fReader.addEventListener(`load`, (evt) => {
        avatarImageRef.current.src = evt.target.result;
      });
      const dt = new DataTransfer();
      dt.items.add(file);
      const fileList = dt.files;
      avatarInputRef.current.files = fileList;
    } else {
      showPopup(Message.ERROR.NOT_VALID_AVATAR);
    }
  };

  const avatarDropZoneHighlight = () => {
    avatarDropZoneRef.current.classList.add(`${Class.AVATAR_DROPZONE}--dragged-over`);
  };

  const avatarDropZoneLowlight = () => {
    avatarDropZoneRef.current.classList.remove(`${Class.AVATAR_DROPZONE}--dragged-over`);
  };

  const onAvatarDropZoneDragOver = (evt) => {
    evt.preventDefault();
    avatarDropZoneHighlight();
  };

  const onAvatarDropZoneDragLeave = (evt) => {
    evt.preventDefault();
    avatarDropZoneLowlight();
  };

  const onAvatarDropZoneDrop = (evt) => {
    evt.preventDefault();
    avatarDropZoneLowlight();
    const file = evt.dataTransfer.files[0];
    renderAvatarIfFileIsValid(file);
  };

  const onAvatarInputChange = () => {
    const file = avatarInputRef.current.files[0];
    renderAvatarIfFileIsValid(file);
  };

  return <fieldset
    className={Class.AVATAR_DROPZONE}
    ref={avatarDropZoneRef}
    onDragOver={onAvatarDropZoneDragOver}
    onDragLeave={onAvatarDropZoneDragLeave}
    onDrop={onAvatarDropZoneDrop}
  >
    <legend className="visually-hidden">Загрузка аватара нового студента</legend>
    <div className="student-form__avatar">
      <img src={defaultAvatar} alt="Аватар нового студента" ref={avatarImageRef}/>
    </div>
    <div className="student-form__avatar-upload">
      <input id="avatar" type="file" name="avatar" ref={avatarInputRef} onChange={onAvatarInputChange}/>
      <label htmlFor="avatar">Сменить аватар</label>
      <span>500x500</span>
    </div>
  </fieldset>;
};

const mapDispatchToProps = (dispatch) => ({
  showPopup: (message) => dispatch(ActionCreator.showPopup(message))
});

InputAvatar.propTypes = {
  avatarImageRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(HTMLImageElement)})
  ]),
  showPopup: PropTypes.func.isRequired
};

export {InputAvatar};
export default connect(null, mapDispatchToProps)(InputAvatar);
