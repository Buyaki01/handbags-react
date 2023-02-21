import { useState } from "react";
import Header from './Header';
import Handbags from './Handbags';
import AddHandbag from './AddHandbag';
import Footer from './Footer';

function App() {
  const [handbags, setHandbags] = useState(JSON.parse(localStorage.getItem('handbagslist')))

  const [handbagName, setHandbagName] = useState("")
  const [handbagPhoto, setHandbagPhoto] = useState("")
  const [price, setPrice] = useState("")

  const handbagDelete = (id) => {
    const handbagsList = handbags.filter((handbag) => (handbag.id !== id));
    setHandbags(handbagsList);
    localStorage.setItem('handbagslist', JSON.stringify(handbagsList));
  }

  const newHandbag = (handbagName, handbagPhoto, price) => {
    const id = handbags.length ? handbags[handbags.length - 1].id + 1 : 1;
    const myNewHandbag = {id, handbagName, handbagPhoto, price}
    const handbagsList = [...handbags, myNewHandbag]
    setHandbags(handbagsList);
    localStorage.setItem('handbagslist', JSON.stringify(handbagsList));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handbagName || !handbagPhoto || !price) return;
    newHandbag(handbagName, handbagPhoto, price)
    setHandbagName('');
    setHandbagPhoto('');
    setPrice('');
  }
  return (
    <div className="App">
      <Header/>
      <Handbags
        handbags={handbags}
        handbagDelete={handbagDelete}
      />
      <AddHandbag
        handbagPhoto={handbagPhoto}
        handbagName={handbagName}
        price={price}
        handleSubmit={handleSubmit}
        setHandbagName={setHandbagName}
        setHandbagPhoto={setHandbagPhoto}
        setPrice={setPrice}
      />
      <Footer/>
    </div>
  );
}

export default App;
