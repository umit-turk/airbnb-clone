import { Link, useParams } from "react-router-dom";
import {
  AddIcon,
  UploadIcon,
} from "../assets/svgs.jsx";
import { useState } from "react";
import Perks from "../components/Perks.jsx";
import axios from 'axios'
const Places = () => {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

  const addPhotoByLink = async (ev) => {
    ev.preventDefault()
    if(!photoLink) return
   const {data:fileName} = await axios.post('/upload-by-link', {link:photoLink})
    setAddedPhotos(prev => {
      return [...prev, fileName];
    })
    setPhotoLink('')
  }

  const uploadPhoto = async (ev) => {
    const files = ev.target.files
    const data = new FormData()
    for(let i=0;i < files.length; i++){
      data.append('photos',files[i])
    }
    const {data:fileNames} = await axios.post('/upload',data,{
      headers:{'Content-type':'multipart/form-data'}
    })
    setAddedPhotos(prev => {
      return [...prev, ...fileNames];
    })
  }

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
          <form>
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
            <input value={address} onChange={(ev) => setAddress(ev.target.value)} type="text" placeholder="address" />
            <h2 className="text-2xl mt-4">Photos</h2>
            <p className="text-gray-500 text-sm">more = better</p>
            <div className="flex gap-2">
              <input value={photoLink} onChange={(ev) => setPhotoLink(ev.target.value)} type="text" placeholder="Add using a link ...jpg" />
              <button onClick={addPhotoByLink}  className="bg-gray-200 px-4 rounded-2xl">
                Add&nbsp;photo
              </button>
            </div>
            <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {
                addedPotos.length > 0 && addedPotos.map((link,index) => (
                  <div className="h-32 flex" key={index}>
                    <img className="rounded-2xl w-full object-cover" src={'http://localhost:4000/uploads/'+link} />
                  </div>
                ))
              }
              <label className="h-32 border flex items-center justify-center cursor-pointer gap-1 bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
              <input multiple type="file" className="hidden" onChange={uploadPhoto} />
                <UploadIcon />
                Upload
              </label>
            </div>
            <h2 className="text-2xl mt-4">Description</h2>
            <p className="text-gray-500 text-sm">description of the places</p>
            <textarea value={description} onChange={(ev) => setDescription(ev.target.value)} ></textarea>
            <h2 className="text-2xl mt-4">Perks</h2>
            <p className="text-gray-500 text-sm">
              select all the perks of your place
            </p>
            <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
             <Perks selected={perks} onChange={setPerks} />
            </div>
            <h2 className="text-2xl mt-4">Extra Info</h2>
            <p className="text-gray-500 text-sm">house rules, etc</p>
            <textarea value={extraInfo} onChange={(ev) => setExtraInfo(ev.target.value)} />
            <h2 className="text-2xl mt-4">Check in&out times</h2>
            <p className="text-gray-500 text-sm">
              add check in and out times, remember to have some time window for
              cleaning the room between guests
            </p>
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <input value={checkIn} onChange={(ev) => setCheckIn(ev.target.value)} type="text" placeholder="14" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check out time</h3>
                <input value={checkOut} onChange={(ev) => setCheckOut(ev.target.value)} placeholder="11" type="text" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max number of guests</h3>
                <input value={maxGuests} onChange={(ev) => setMaxGuests(ev.target.value)} type="number" />
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
