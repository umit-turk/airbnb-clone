import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from 'axios'
import { useState } from "react";
const Home = () => {
  const auth = useSelector(state => state?.auth?.auth?.user)
  const [places, setPlaces] = useState([])
  useEffect(() => {
    getAll()
  },[])

  const getAll = async () => {
    try {
      const {data} = await axios.get("/places")
      setPlaces(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mt-8 gap-x-6 gap-y-8 grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {
          places.length > 0 && places.map((place,idx) => (
            <div key={idx}>
              <div className="bg-gray-500 mb-2 rounded-2xl flex">
              { place.photos?.[0] && (
              <img className="rounded-2xl object-cover aspect-square" src={`http://localhost:4000/uploads/${place?.photos[0]}`}/>
              )}
              </div>
              <h2 className="font-bold">{place.address}</h2>
              <h2 className="text-sm text-gray-500">{place.title}</h2>
              <div className="mt-1"><span className="font-bold">${place.price}</span>  per night</div>
            </div>
          ))
        }
    </div>
  );
};

export default Home;
