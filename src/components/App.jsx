import React from "react";
import emojipedia from "../emojipedia";
import moreEmojis from "./MoreEmojis";
import emoji from "emoji.json";
import Info from "./Info";

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(Info)}</dl>

      <h1>
        <span>More Emojis</span>
      </h1>

      <dl className="dictionary">{emoji.map(moreEmojis)}</dl>
    </div>
  );
}

export default App;
