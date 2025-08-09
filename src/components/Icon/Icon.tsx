interface IConProps {
  iconName: string;
}

const Icon: React.FC<IConProps> = ({ iconName }) => {
  return (
    <svg width={24} height={24}>
      <use href={`/sprite.svg#${iconName}`} />
    </svg>
  );
};

export default Icon;
