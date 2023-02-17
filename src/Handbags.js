const Handbags = () => {
  const allItems = [
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
  ];
  
  return (
    <main style={{ display: "flex", flexWrap: "wrap" }}>
      {allItems.map((item) => (
        <div key={item.id} style={{ width: "33.33%", padding: "10px" }}>
          <div style={{ textAlign: "center" }} className="w-50 h-50">
            <img src={item.handbagPhoto} alt="handbag" />
          </div>
          <div style={{ textAlign: "center" }}> <h4 className="price text-lg">${item.price}</h4></div>
          <div style={{ textAlign: "center" }}> <p>{item.handbagName}</p> </div>
        </div>
      ))}
    </main>
  );
}
export default Handbags;