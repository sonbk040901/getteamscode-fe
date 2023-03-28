function Title({ children, ...other }) {
  return <p {...other}>{children}</p>;
}

export default Title;
