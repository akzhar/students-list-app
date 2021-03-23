import PropTypes from 'prop-types';

const studentTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  spec: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  favcolor: PropTypes.string.isRequired
};

export {studentTypes};
