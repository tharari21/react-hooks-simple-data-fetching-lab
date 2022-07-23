import { useEffect, useState } from "react";

// create your App component here
const App = () => {
  const [dogImage, setDogImage] = useState("");
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message);
      });
  }, []);
  //   if (!dogImage) return <p>Loading...</p>;

  //   return <img src={dogImage} alt="A Random Dog" />;
  return (
    <div>
      {dogImage ? <img src={dogImage} alt="A Random Dog" /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
