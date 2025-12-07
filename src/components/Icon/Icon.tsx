interface IconProps {
  iconName: string;
  width?: number;
  height?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  iconName,
  width = 24,
  height = 24,
  className = "",
}) => {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`/sprite.svg#${iconName}`} />
    </svg>
  );
};

export default Icon;
