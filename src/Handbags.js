import { FaTrashAlt } from "react-icons/fa";

const Handbags = ({handbags, handbagDelete}) => {
  return (
    <main className="m-4 text-center" style={{ display: "flex", flexWrap: "wrap" }}>
      {handbags.length ? (
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
      ) : (
        <p className="text-center text-2xl" style={{ marginTop: '2rem' }}>Your list is empty.</p>
      )} 
    </main>
  );
}
export default Handbags;