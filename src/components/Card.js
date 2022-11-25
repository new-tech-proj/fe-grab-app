import React from "react";

/*
1. Card Class
2. Defaults 
*/

// 1. Card Class /////////////////////////////////////////////
function CardImage(props) {
  const isImageURL = props.image;
  let listOfClasses = null;

  if (props.effect) {
    listOfClasses = "styleImage bw";
  } else {
    listOfClasses = "styleImage";
  }

  if (isImageURL) {
    return (
      <div className={listOfClasses} onClick={props.onClick}>
        <img
          style={{ width: props.width + "px", marginTop: "-8%" }}
          src={props.image}
          alt="Seattle"
        />
      </div>
    );
  }
  return null;
}

function CardContent(props) {
  return (
    <div className="styleCardContent">
      <p className="styleCardTitle">{props.title}</p>
      <p className="styleLocationLabel">{props.location}</p>
      <p className="styleDescription">{props.description}</p>
    </div>
  );
}

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bwEffect: false };
    this.toggleEffect = this.toggleEffect.bind(this);
  }

  toggleEffect() {
    this.setState((prevState) => ({
      bwEffect: !prevState.bwEffect
    }));
  }

  render() {
    return (
      <div style={{ width: this.props.width + "px" }}>
        <div className="styleCard" id={this.props.id}>
          <CardImage
            image={this.props.image}
            width={this.props.width}
            effect={this.state.bwEffect}
            onClick={this.toggleEffect}
          />
          <CardContent
            title={this.props.title}
            location={this.props.location}
            description={this.props.description}
          />
        </div>
      </div>
    );
  }
}

// 2. Defaults /////////////////////////////////////////////
Card.defaultProps = {
  width: 350,
  title: "Template - Card Title",
  location: "Location label",
  description: "Template description textbox"
};
