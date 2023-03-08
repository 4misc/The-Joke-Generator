
import { useEffect, useState } from "react";
import "./App.scss";

export function App() {
  const [joke, setJoke] = useState("");

  const getJoke = async () => {
    await fetch(`https://official-joke-api.appspot.com/jokes/random`)
      .then((res: any) => res.json())
      .then((data: any) => {
        setJoke(data.setup + " " + data.punchline);
      });
  };

  useEffect(() => {
    getJoke();
  }, []);


  
  // const joke = useJoke()

  // const somRef: any = useRef(null)

  // const [some, setSome] = useState('')

  // const generateJoke = (e: any) => {
  //   e.preventDefault()

  //   setSome(somRef.current.value);

  // }

  return (
    <div className="app__container">
      <div className="app__container__title">The Joke Generator</div>
      <div className="app__container__text question">{joke}</div>
      <button className="app__container__btn" onClick={getJoke}>
        Generate Joke
      </button>
      {/* <input ref={somRef} />
      <button onClick={generateJoke}>New Booton</button>
      <p>{some}</p> */}
    </div>
  );
}
