import React from "react";

// import fs from "fs";
// import path from "path";

// const speechFile = path.resolve("./speech.mp3");
const audio = new Audio('./src/assets/speech.mp3');

const playSpeech = () => {
  console.log("Ct");
  try {
    audio.play();
  }
  catch {
    console.log("TEST");
  }
}

const Brain_Damage = () => {
  // console.log(speechFile);
  // const buffer = Buffer.from(await mp3.arrayBuffer());
  // await fs.promises.writeFile(speechFile, buffer);

  return (
    <div>
      <button onClick={playSpeech}>Play Test</button>
    </div>
  );
}

export default Brain_Damage;