import OpenAI from "openai";
// import fs from "fs";


export async function textToSpeech(text) {
  const speechFile = "./src/assets/speech.mp3";

  const openai = new OpenAI({
    apiKey: 'YOUR API KEY',
    dangerouslyAllowBrowser: true
  });
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: text,
  });

  const blob = new Blob([await mp3.arrayBuffer()], { type: "audio/mpeg" });
  const objectUrl = URL.createObjectURL(blob);

  return objectUrl;
}