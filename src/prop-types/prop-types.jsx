import PropTypes from 'prop-types';

const studentTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  favoriteColor: PropTypes.string.isRequired
};

export {studentTypes};
