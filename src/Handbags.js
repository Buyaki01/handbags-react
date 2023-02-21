import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import AddHandbag from './AddHandbag';

const Handbags = () => {
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
    <main className="m-4" style={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        {handbags.map((handbag) => (
          <div key={handbag.id} style={{ padding: "10px" }}>
            <div>
              <img src={handbag.handbagPhoto} alt="Design handbag" />
            </div>
            <div> <h4 className="price text-lg">${handbag.price}</h4></div>
            <div className="flex handbagName" style={{ display: "flex", justifyContent: "space-between" }}>
              <h6>{handbag.handbagName}</h6>
              <div>
                <FaTrashAlt 
                  role="button"
                  className="trash-icon" 
                  onClick={() => handbagDelete(handbag.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <AddHandbag
          handbagPhoto={handbagPhoto}
          handbagName={handbagName}
          price={price}
          handleSubmit={handleSubmit}
          setHandbagName={setHandbagName}
          setHandbagPhoto={setHandbagPhoto}
          setPrice={setPrice}
        />
      </div>
    </main>
  );
}
export default Handbags;