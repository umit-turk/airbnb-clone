import {Link} from 'react-router-dom'

const Place = ({ place }) => {
  return (
    <div>
      <Link to={'/place/'+place?._id}>
      <div className="bg-gray-500 mb-2 rounded-2xl flex">
        {place.photos?.[0] && (
          <img
            className="rounded-2xl object-cover aspect-square"
            src={`http://localhost:4000/uploads/${place?.photos[0]}`}
          />
        )}
      </div>
      <h2 className="font-bold truncate">{place.address}</h2>
      <h2 className="text-sm text-gray-500 truncate">{place.title}</h2>
      { place?.price && <div className="mt-1">
        <span className="font-bold">${place.price}</span><span> per night</span>
      </div>}
      </Link>
    </div>
  );
};

export default Place;
