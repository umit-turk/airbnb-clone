import { Link, Navigate, useParams } from "react-router-dom";
import { AddIcon } from "../assets/svgs.jsx";
import { useEffect, useState } from "react";
import Perks from "../components/Perks.jsx";
import PhotosUploader from "../components/PhotosUploader.jsx";
import axios from "axios";
const Places = () => {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [addedPotos, setAddedPhotos] = useState([]);
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [redirect, setRedirect] = useState('')

  const addNewPlace = async (ev) => {
    ev.preventDefault();
    const placeData = {
      title,
      address,
      description,
      addedPotos,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    };
  //  setRedirect("/account/places")
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get("/places",
         {withCredentials:true, headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },});
        console.log(data);
      } catch (error) {
        console.error("Hata oluştu:", error);
      }
    };
  
    fetchData();
  }, []);

  // if(redirect){
  //   return <Navigate to={redirect} />
  // }

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="bg-primary inline-flex gap-1 text-white py-2 px-4 rounded-full"
            to={"/account/places/new"}
          >
            <AddIcon />
            Add new place
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form onSubmit={addNewPlace}>
            <h2 className="text-2xl mt-4">Title</h2>
            <p className="text-gray-500 text-sm">
              title for your place. should be short and catchy as in
              advertisment
            </p>
            <input
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              type="text"
              placeholder="title, for example: My lovely apt."
            />
            <h2 className="text-2xl mt-4">Address</h2>
            <p className="text-gray-500 text-sm">address to this places</p>
            <input
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
              type="text"
              placeholder="address"
            />
            <h2 className="text-2xl mt-4">Photos</h2>
            <p className="text-gray-500 text-sm">more = better</p>
            <PhotosUploader addedPotos={addedPotos} onChange={setAddedPhotos} />
            <h2 className="text-2xl mt-4">Description</h2>
            <p className="text-gray-500 text-sm">description of the places</p>
            <textarea
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            ></textarea>
            <h2 className="text-2xl mt-4">Perks</h2>
            <p className="text-gray-500 text-sm">
              select all the perks of your place
            </p>
            <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <Perks selected={perks} onChange={setPerks} />
            </div>
            <h2 className="text-2xl mt-4">Extra Info</h2>
            <p className="text-gray-500 text-sm">house rules, etc</p>
            <textarea
              value={extraInfo}
              onChange={(ev) => setExtraInfo(ev.target.value)}
            />
            <h2 className="text-2xl mt-4">Check in&out times</h2>
            <p className="text-gray-500 text-sm">
              add check in and out times, remember to have some time window for
              cleaning the room between guests
            </p>
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <input
                  value={checkIn}
                  onChange={(ev) => setCheckIn(ev.target.value)}
                  type="text"
                  placeholder="14"
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check out time</h3>
                <input
                  value={checkOut}
                  onChange={(ev) => setCheckOut(ev.target.value)}
                  placeholder="11"
                  type="text"
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max number of guests</h3>
                <input
                  value={maxGuests}
                  onChange={(ev) => setMaxGuests(ev.target.value)}
                  type="number"
                />
              </div>
            </div>
            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Places;
