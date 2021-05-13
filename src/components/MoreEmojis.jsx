import React from "react";

function moreEmojis(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.char}
        </span>
        <span>{props.name}</span>
      </dt>
    </div>
  );
}

export default moreEmojis;
