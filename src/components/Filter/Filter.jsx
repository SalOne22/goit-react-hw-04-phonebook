import PropTypes from 'prop-types';

export const Filter = ({ onChange }) => {
  return <input type="text" name="filter" onChange={onChange} />;
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
