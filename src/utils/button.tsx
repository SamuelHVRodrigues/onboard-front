import loader from '../assets/loading.svg';
import { StyledButton } from '../styled';

interface ButtonProps {
  text: string;
  loading: boolean;
  disabled: boolean;
  onClick?: any;
}

const Button = (props: ButtonProps) => {
  return (
    <StyledButton onClick={props.onClick} disabled={props.disabled}>
      {!props.loading ? props.text : <img src={loader} height='14' />}
    </StyledButton>
  );
};

export default Button;
