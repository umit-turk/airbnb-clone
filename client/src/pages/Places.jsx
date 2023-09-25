import { Link, useParams } from "react-router-dom";
import { AddIcon } from "../assets/svgs.jsx";
import PlacesForm from "../components/PlacesForm.jsx";
import AccountNav from "../components/AccountNav.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
const Places = () => {
  const [places, setPlaces] = useState([]);
  const { action } = useParams();
  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const { data } = await axios.get("/places", {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    setPlaces(data);
  };
  return (
    <div>
      <AccountNav />
      {action !== "new" && (
        <div className="text-center">
          list of all aded places
          <br />
          <Link
            className="bg-primary inline-flex gap-1 text-white py-2 px-4 rounded-full"
            to={"/account/places/new"}
          >
            <AddIcon />
            Add new place
          </Link>
        </div>
      )}
      <div className="mt-4">
        {places.length > 0 &&
          places.map((place, idx) => (
            <Link to={'/account/places/'+place._id} className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl" key={idx}>
              <div className="w-32 h-32 bg-gray-300">
                {place.photos.length > 0 && <img src={place.photos[0]} />}
              </div>
              <div>
                <h2 className="text-xl">{place.title}</h2>
                <p className="text-sm mt-2 ">{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
      {action === "new" && <PlacesForm />}
    </div>
  );
};

export default Places;
