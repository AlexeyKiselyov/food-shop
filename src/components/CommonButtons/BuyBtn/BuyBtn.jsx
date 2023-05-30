import { Button } from './BuyBtn.styled';

export const BuyBtn = ({ onClick, active }) => {
  const handleButtonClick = () => {
    onClick();
  };
  return (
    <>
      <Button type="button" onClick={handleButtonClick} active={active}>
        {active === 'clicked' ? 'У кошику' : 'Купити'}
      </Button>
    </>
  );
};
