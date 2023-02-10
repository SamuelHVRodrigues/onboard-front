import loader from '../assets/loading.svg';

interface PageButtonProps {
  type: 'previous' | 'next';
  loading: boolean;
  disabled: boolean;
  onClick: any;
}

const PageButton = (props: PageButtonProps) => {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      {!props.loading ? props.type : <img src={loader} height='14' />}
    </button>
  );
};

export default PageButton;
