import PropTypes from 'prop-types';

const studentTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  favoriteColor: PropTypes.string.isRequired
};

export {studentTypes};
