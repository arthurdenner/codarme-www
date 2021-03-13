export const Button = ({ bg = 'bg-green', ...props }) => (
  <button
    className={`p-4 rounded-md ${bg} ${props.disabled && 'opacity-50'} w-full border-2 border-transparent`}
    {...props}
  />
);
