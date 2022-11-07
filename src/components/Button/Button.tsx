import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  classCss?: string;
  content?: string;
  action?: () => void;
}

const Button = ({
  text,
  classCss,
  content,
  action,
}: ButtonProps): JSX.Element => {
  if (text === "Delete" || text === "Edit") {
    text = "";
  }
  return (
    <ButtonStyled className={`button ${classCss}`} onClick={action}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
