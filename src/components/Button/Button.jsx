import { Button as StyledButton } from './Button.style';

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

export default Button;
