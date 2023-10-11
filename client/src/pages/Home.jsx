import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from 'axios'
import { useState } from "react";
import Place from "../components/Place";
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
              <Place place={place} />
            </div>
          ))
        }
    </div>
  );
};

export default Home;
