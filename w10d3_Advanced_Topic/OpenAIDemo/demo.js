require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

(async() => {
  const gptResponse = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Create an outline for an essay about new applications made possible by AI.",
  temperature: 0,
  max_tokens: 200
  })

  console.log(gptResponse.data)
})()