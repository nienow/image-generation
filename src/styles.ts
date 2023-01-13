export type AIStyle = {
  name: string;
  format: (text: string) => string;
  model: string;
};

export const AI_STYLES: AIStyle[] = [
  {
    name: 'Inkpunk',
    model: 'Envvi/Inkpunk-Diffusion',
    format: (text) => `${text} | nvinkpunk | vivid colors`
  },
  {
    name: 'Anime',
    model: 'eimiss/EimisAnimeDiffusion_1.0v',
    format: (text) => `${text}`
  },
  {
    name: 'Highly Detailed',
    model: 'runwayml/stable-diffusion-v1-5',
    format: (text) => `picture of a ${text}, intricate, elegant, highly detailed, octane render, hyper-realistic, digital painting, artstation, concept art, fantasy art, gaming, smooth, sharp focus, illustration, 3D render`,
  },
  // {
  //   name: 'Anime',
  //   model: 'hakurei/waifu-diffusion',
  //   format: (text) => `${text}`
  // },

];
