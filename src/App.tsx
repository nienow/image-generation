import {createSignal} from "solid-js";
import {AI_STYLES, AIStyle} from "styles";
import './index.scss';
import {Samples} from "./Samples";

const STATUS = {
  0: '',
  1: 'Generating...',
  2: 'Loading the model. This can take a minute...',
  3: 'An error occurred. This happens sometimes. Please try again later.',
  4: 'Rate limit reached. Please try again later.'
};

const App = () => {
  const [text, setText] = createSignal('A futuristic city');
  const [style, setStyle] = createSignal<AIStyle>(AI_STYLES[0]);
  const [status, setStatus] = createSignal(0);
  const [src, setSrc] = createSignal(null);

  const generate = async (retries = 0) => {
    try {
      setStatus(status() ? status() : 1);
      const response = await fetch(`https://api-inference.huggingface.co/models/${style().model}`, {
        method: 'POST',
        body: JSON.stringify({inputs: style().format(text())}),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const blob = await response.blob();
        setSrc(() => URL.createObjectURL(blob));
        setStatus(0);
      } else if (response.status === 429) {
        setStatus(4);
      } else if (response.status === 503) {
        const json = await response.json();

        if (retries < 20) {
          setStatus(2);
          // model is loading...
          setTimeout(() => {
            generate(retries + 1);
          }, json.estimated_time * 1000);
        } else {
          setStatus(3);
        }
      } else {
        setStatus(3);
      }
    } catch (e) {
      setStatus(3);
    }
  };

  const updateInput = (e) => {
    setText(() => e.target.value);
  };

  const updateSelect = (e) => {
    setStyle(AI_STYLES.find(item => item.name === e.target.value));
  };

  return <div style="text-align: center">
    <h1>AI Stable Diffusion Image Generator</h1>
    <h3>Optimized for different graphic styles</h3>
    <div>
      <span>Style: </span>
      <select value={style().name} onChange={updateSelect}>
        {
          AI_STYLES.map(a => <option>{a.name}</option>)
        }
      </select>
    </div>
    <div>
    <textarea rows={3} cols={80} value={text()} onChange={updateInput} placeholder="Enter a prompt..."/>
    </div>
    <div>

    {
      (status() < 1 || status() > 2) && <button onClick={() => generate()}>Generate</button>
    }
    </div>
    <div style="margin: 50px 0;">
    <div>{STATUS[status()]}</div>
    { src && !status() && (
      <div>
      <img src={src()}/>
      </div>
      ) }
    </div>
    <Samples/>
  </div>;
}

export default App;
