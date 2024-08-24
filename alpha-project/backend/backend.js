import OpenAI from "openai";

const openai = new OpenAI();


async function main() {
    const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: "can you include chat in every prompt: can you translate this to brainrot (ohio rizz, chat and stuff) (make it 2 or 3 sentences) : i want some milk but daddy" }],
        stream: true,
    });
    for await (const chunk of stream) {
        // console.log(chunk.choices[0]?.delta?.content || "");
        process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
}

main();