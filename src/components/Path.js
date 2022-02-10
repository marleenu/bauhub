const Path = ({ title, ...props }) => {
  const onClick = () => {
    console.log();
  };
  return (
    <div>
      <h1 onClick={onClick}>
        This is a prop: {title} and this is age: {props.age}
      </h1>
    </div>
  );
};

Path.defaultProps = {
  name: 'Marleen',
  age: 29
};

export default Path;
