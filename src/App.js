import { useEffect, useState } from "react";
import Header from './Header';
import Handbags from './Handbags';
import AddHandbag from './AddHandbag';
import Footer from './Footer';
import apiRequest from "./apiRequest";

function App() {
  const API_URL = 'http://localhost:3500/handbags';
  const [handbags, setHandbags] = useState([])

  const [handbagName, setHandbagName] = useState("")
  const [handbagPhoto, setHandbagPhoto] = useState("")
  const [price, setPrice] = useState("")
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchHandbags = async () => {
      try{
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const handbagsList = await response.json();
        setHandbags(handbagsList);
        setFetchError(null);
      }catch(err){
        setFetchError(err.message);
      }finally{
        setIsLoading(false);
      }
    }
    
    setTimeout(() => {
      fetchHandbags();
    }, 2000)

  }, [])

  const handbagDelete = (id) => {
    const handbagsList = handbags.filter((handbag) => (handbag.id !== id));
    setHandbags(handbagsList);
  }

  const newHandbag = async (handbagName, handbagPhoto, price) => {
    const id = handbags.length ? handbags[handbags.length - 1].id + 1 : 1;
    const myNewHandbag = {id, handbagName, handbagPhoto, price}
    const handbagsList = [...handbags, myNewHandbag]
    setHandbags(handbagsList);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewHandbag)
    }

    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result);
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
      <main>
        {isLoading && <p className="text-center">Loading Handbags...</p>}
        {fetchError && <p className="text-red-600 text-center">{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Handbags handbags={handbags} handbagDelete={handbagDelete}/>}
      </main>
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
