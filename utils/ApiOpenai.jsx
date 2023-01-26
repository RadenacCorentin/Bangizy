import { Configuration, OpenAIApi } from "openai";

import "react-native-url-polyfill/auto";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getResultDescriptionOpenApi = async (descriptionForm) => {
  const sentenceToPast =
    "Ecrit moi une description sur une application de rencontre pour un " +
    descriptionForm.gender +
    " qui s'appel " +
    descriptionForm.name +
    ", " +
    descriptionForm.age +
    "ans, d'une taille de " +
    descriptionForm.height +
    "cm et d'un poid de";
  const result = await getResultOpenApi(sentenceToPast);
  return result;
};

const getResultOpenApi = async (sentenceToPast) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: sentenceToPast,
      temperature: 0.9,
      max_tokens: 150,
    });
    if (response.status === 200) {
      return response.data.choices[0].text;
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    return error.message;
  }
};
