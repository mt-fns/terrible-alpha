import OpenAI from "openai";
import fs from "fs";
import path from "path";

const speechFile = path.resolve("./src/assets/speech.mp3");

const openai = new OpenAI({
  apiKey: 'aint letting ya have it',
  // dangerouslyAllowBrowser: true
});

export async function textToSpeech() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: "skibidi toilet Ohio rizz",
  });

  const buffer = Buffer.from(await mp3.arrayBuffer());
  fs.promises.writeFile(speechFile, buffer);

  return;
}

textToSpeech();