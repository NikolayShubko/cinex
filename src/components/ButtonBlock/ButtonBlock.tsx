import s from "./ButtonBlock.module.scss";
type Props = {
  children: React.ReactNode;
};
const ButtonBlock = ({ children }: Props) => {
  return <div className={s.buttons_holder}>{children}</div>;
};

export default ButtonBlock;
