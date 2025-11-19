interface IconProps {
  iconName: string;
}

const Icon: React.FC<IconProps> = ({ iconName }) => {
  return (
    <svg width={24} height={24}>
      <use href={`/sprite.svg#${iconName}`} />
    </svg>
  );
};

export default Icon;
