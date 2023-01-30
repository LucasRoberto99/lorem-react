const Blocgris = (props) => {
  console.log(props);
  return (
    <div className="carreGris">
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
    </div>
  );
};

export default Blocgris;
