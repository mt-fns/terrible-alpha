import OpenAI from "openai";

async function callAPI(prompt) {
    const openai = new OpenAI({apiKey: "YOUR API KEY", dangerouslyAllowBrowser: true});
    let output = "";
    const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: `can you include chat in every prompt: can you translate this to brainrot (ohio rizz, chat, sigma, gyatt, skibidi and stuff) (make it 2 or 3 sentences) : ${prompt}` }],
        stream: true,
    });

    for await (const chunk of stream) {
        output += chunk.choices[0]?.delta?.content || "";
    }

    return output;
}

export {
    callAPI
}