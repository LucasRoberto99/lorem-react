import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  console.log(props);
  return (
    <div className="carreGris">
      <Title title={props.title} />
      <Description paragraph={props.paragraph} />
    </div>
  );
};

export default Content;
