export const Icon = ({ name, ...props }) => {
  return (
    <svg {...props}>
      <use href={`/symbol-defs.svg#${name}`} />
    </svg>
  );
};
