import openai from './chatgpt';
const query = async (prompt: string, model: string, chatId: string) => {
  const res = await openai.completions
    .create({
      model,
      prompt,
      temperature: 0.9,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => {
      console.log(res);
      return res.choices[0].text;
    })
    .catch((err) => {
      console.log(err);

      return `ChatGpt couldn't generate response for your text : ${err.message}`;
    });
  return res;
};

export default query;
