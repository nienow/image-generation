
const SAMPLES = [
  {
    style: 'Inkpunk',
    prompt: 'Irish Wolfhound',
    src: 'https://storage.googleapis.com/randombits/images/inkpunk1.jfif'
  },
  {
    style: 'Inkpunk',
    prompt: 'Bedroom at dusk',
    src: 'https://storage.googleapis.com/randombits/images/inkpunk2.jfif'
  },
  {
    style: 'Anime',
    prompt: 'Girl in coffeeshop, red hair, reading',
    src: 'https://storage.googleapis.com/randombits/images/anime1.jfif'
  },
  {
    style: 'Highly Detailed',
    prompt: 'Cat face',
    src: 'https://storage.googleapis.com/randombits/images/detailed1.jfif'
  }
]

export const Samples = () => {
  return <div style="border-top: 1px solid #ccc">
    <h1>Samples</h1>
    <div style="display: flex; flex-wrap: wrap; justify-content: center">
      {
        SAMPLES.map(s => <div style="padding: 10px;">
          <div>{s.style}</div>
          <div>{s.prompt}</div>
          <img src={s.src}/>
        </div>)
      }
    </div>
  </div>;
};
