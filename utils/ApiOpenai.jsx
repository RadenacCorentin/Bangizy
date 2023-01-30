import { Configuration, OpenAIApi } from "openai";

import "react-native-url-polyfill/auto";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getResultCatchOpenApi = async (catchForm) => {
  const sentenceToPast = `Write me a ${
    catchForm.style || "Romantic"
  } phrase to use for a first message on my dating app, be creative.
  It addresses to a ${catchForm.gender || "Man"} ${
    catchForm.name ? " is name is " + catchForm.name : " "
  } 
  ${catchForm.age ? ", she/he is" + catchForm.age + "years old" : " "} ${
    catchForm.eyesColor ? ", have " + catchForm.eyesColor + " eyes" : ""
  } and she/he like ${catchForm.hobby || "something"} 
  and ${catchForm.hobby2 || "other things"}`;
  const result = await getResultOpenApi(sentenceToPast);
  return result;
};

export const getResultDescriptionOpenApi = async (descriptionForm) => {
  const sentenceToPast = `Write me a ${descriptionForm.style} phrase to use for a first message on my dating app, be creative.
  It addresses to a ${descriptionForm.gender} is name is ${descriptionForm.name} she is ${descriptionForm.age} years old,
  have ${descriptionForm.yesColor} eyes
  and she like ${descriptionForm.hobby} and ${descriptionForm.hobby2}`;
  console.log(sentenceToPast);
  const result = await getResultOpenApi(sentenceToPast);
  return result;
};

const getResultOpenApi = async (sentenceToPast) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: sentenceToPast,
      max_tokens: 100,
      temperature: 0.3,
    });
    if (response.status === 200) {
      console.log(response);
      console.log(response.data.choices[0].text);
      return response.data.choices[0].text;
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    return error.message;
  }
};
