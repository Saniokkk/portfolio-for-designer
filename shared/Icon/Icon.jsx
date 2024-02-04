export const Icon = ({ name, ...props }) => {
  return (
      <svg {...props}>
          <use href={`/sprite.svg#${name}`} />
      </svg>
  );
};
