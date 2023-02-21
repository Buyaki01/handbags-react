const AddHandbag = ({setHandbagName, setHandbagPhoto, handbagPhoto, handbagName, price, setPrice, handleSubmit}) => {
  return(
    <form className="m-3" onSubmit={handleSubmit}>
      <h3 className="text-2xl text-center">Add Handbag</h3>
      <div className="mt-2">
        <input 
          type="file"
          placeholder="Handbag Photo" 
          className="border border-slate-400 p-2"
          id="handbagPhoto"
          value={handbagPhoto}
          onChange={(e) => setHandbagPhoto(e.target.value)}
        />
      </div>

      <div className="mt-2">
        <input 
          type="text" 
          placeholder="Price"
          className="border border-slate-400 p-2"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="mt-2">
        <input 
          type="text" 
          placeholder="Handbag Name"
          className="border border-slate-400 p-2"
          id="handbagName"
          value={handbagName}
          onChange={(e) => setHandbagName(e.target.value)}
        />
      </div>
      <button 
        className="addButton m-2 mx-auto block text-white font-bold py-2 px-4 rounded" 
        type="submit"
      >
        Submit
      </button>

    </form>
  ) 
}
export default AddHandbag;