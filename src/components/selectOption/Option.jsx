function Option({ children, className }) {
  return (
    <option className={className} value={children}>
      {children}
    </option>
  );
}

export default Option;
