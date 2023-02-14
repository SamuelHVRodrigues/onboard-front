import loader from '../assets/loading.svg';

interface ButtonProps {
  text: string;
  loading: boolean;
  disabled: boolean;
  onClick?: any;
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      {!props.loading ? props.text : <img src={loader} height='14' />}
    </button>
  );
};

export default Button;
