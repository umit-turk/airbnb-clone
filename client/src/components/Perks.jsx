import { EnteranceIcon, ParkingIcon, PetsIcon, RadioIcon, TvIcon, WifiIcon } from "../assets/svgs";

const Perks = ({selected, onChange}) => {
  return (
    <>
     <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <WifiIcon />
                <span>Wifi</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <ParkingIcon />
                <span>Free parking spot</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <TvIcon />
                <span>TV</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <RadioIcon />
                <span>Radio</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <PetsIcon />
                <span>Pets</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center">
                <input type="checkbox" />
                <EnteranceIcon />
                <span>Entrace</span>
              </label>
    </>
  )
};

export default Perks;
