const AddHandbag = ({handbags}) => {
  return(
    <form className="m-3">
      <h3 className="text-2xl text-center">Add Handbag</h3>
      <div className="mt-2">
        <input 
          type="text"
          placeholder="Handbag Photo" 
          className="border border-slate-400 p-2"
          id="handbagPhoto"
          value={handbags.handbagPhoto}
        />
      </div>

      <div className="mt-2">
        <input 
          type="text" 
          placeholder="Price"
          className="border border-slate-400 p-2"
          id="price"
          value={handbags.price}
        />
      </div>

      <div className="mt-2">
        <input 
          type="text" 
          placeholder="Handbag Name"
          className="border border-slate-400 p-2"
          id="handbagName"
          value={handbags.handbagName}
        />
      </div>
      <button class="addButton m-2 mx-auto block text-white font-bold py-2 px-4 rounded" type="submit">
        Submit
      </button>

    </form>
  ) 
}
export default AddHandbag;