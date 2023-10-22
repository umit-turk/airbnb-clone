import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function PlacePage() {
    const {id} = useParams();
    const [place, setPlace] = useState(null)
    useEffect(() => {
        if(!id) return
        get()
    },[id])

    const get = async () => {
        const {data} = await axios.get(`/place/${id}`)
        setPlace(data);
    }
    return (
        <div className="mt-8 bg-gray-100 -mx-8 px-8 py-4">
           <div className="text-3xl truncate">{place?.title}</div>
           <a className="block my-2 font-semibold underline" target="_blank" href={`https://maps.google.com/?q=${place?.address}`} rel="noreferrer">{place?.address}</a>
           <div className="grid gap-2 grid-cols-[2fr_1fr]">
            <div>
                {
                    place?.photos?.[0] && (
                        <div>
                            <img className="aspect-square object-cover" src={`http://localhost:4000/uploads/${place.photos[0]}`}/>
                        </div>
                    )
                }
            </div>
            <div className="grid gap-2">
            {
                    place?.photos?.[1] && (
                        <img className="aspect-square object-cover" src={`http://localhost:4000/uploads/${place.photos[1]}`}/>
                    )
            }
             {
                    place?.photos?.[2] && (
                        <img  className="aspect-square object-cover" src={`http://localhost:4000/uploads/${place.photos[2]}`}/>
                    )
            }
            </div>
           </div>
        </div>
    )
}