import PropTypes from 'prop-types';

import { Button as StyledButton } from './Button.style';

/**
 * Button component for user interaction
 */
function Button({ label, outline, children, backgroundColor, color }) {
  return (
    <StyledButton
      outline={outline}
      backgroundColor={backgroundColor}
      color={color}
    >
      {label || children}
    </StyledButton>
  );
}

Button.propTypes = {
  /**
   * What appears inside of the button
   */
  label: PropTypes.string,
  /**
   * The outlined style of the button
   */
  outline: PropTypes.bool,
  /**
   * Custom content of the button
   */
  children: PropTypes.elementType,
  /**
   * Background color of the button
   */
  backgroundColor: PropTypes.string,
  /**
   * Color of the text inside the button
   */
  color: PropTypes.string,
};

Button.defaultProps = {
  label: 'Primary Button',
  outline: false,
  children: <></>,
  backgroundColor: 'teal',
  color: 'white',
};

export default Button;
