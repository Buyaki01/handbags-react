import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import AddHandbag from './AddHandbag';

const Handbags = () => {
  const [handbags, setHandbags] = useState([
    {
      id: 1,
      handbagName: "Designer Bag",
      handbagPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqtAEw0fV4HctesXh41R5Cam6x-QQjYjWncKImYZuBA&s",
      price: 50
    },
    {
      id: 2,
      handbagName: "Designer Bag",
      handbagPhoto: "https://media.dior.com/couture/ecommerce/media/catalog/product/J/r/1644525914_M1296ZRGO_M928_E01_ZH.jpg",
      price: 30
    },
    {
      id: 3,
      handbagName: "Designer Bag",
      handbagPhoto: "https://e7.pngegg.com/pngimages/961/867/png-clipart-handbag-christian-dior-se-lady-dior-fashion-bag-luggage-bags-leather.png",
      price: 20
    },
    {
      id: 4,
      handbagName: "Designer Bag",
      handbagPhoto: "https://media.dior.com/couture/ecommerce/media/catalog/product/J/r/1644525914_M1296ZRGO_M928_E01_ZH.jpg",
      price: 60
    }
  ]);

  const handbagDelete = (id) => {
    const newHandbags = handbags.filter((handbag) => (handbag.id !== id));
    setHandbags(newHandbags);
  }

  const addHandbag = () => {
    
  }
  
  return (
    <main className="m-4" style={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        {handbags.map((handbag) => (
          <div key={handbag.id} style={{ width: "33.33%", padding: "10px" }}>
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
          handbags={handbags}
        />
      </div>
    </main>
  );
}
export default Handbags;