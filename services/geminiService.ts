import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a garden visualization based on a user description using the specialized image model.
 */
export const generateGardenImage = async (userPrompt: string): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{
          text: `Generate a photorealistic, high-quality image of a garden design. 
          Context: Professional landscaping by Bashir Salah Gardens. 
          Specific request: ${userPrompt}. 
          Style: Lush, vibrant, architectural, sunlight.`,
        }],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString: string = part.inlineData.data;
        // The API returns raw base64, we format it for the img src
        return `data:image/png;base64,${base64EncodeString}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};

/**
 * Generates gardening advice or a description of the design.
 */
export const generateGardenAdvice = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a short, professional paragraph (in Hebrew) about garden design focusing on: ${topic}. 
      Tone: Expert, welcoming, visionary. 
      Limit to 50 words.`,
    });
    return response.text || "לא ניתן היה ליצור תוכן כרגע.";
  } catch (error) {
    console.error("Error generating text:", error);
    return "שגיאה ביצירת התוכן. אנא נסה שנית.";
  }
};