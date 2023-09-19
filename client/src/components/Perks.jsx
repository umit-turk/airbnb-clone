import { EnteranceIcon, ParkingIcon, PetsIcon, RadioIcon, TvIcon, WifiIcon } from "../assets/svgs";

const Perks = ({selected, onChange}) => {
  const handleCbClick = (ev) => {
    const {checked,name} = ev.target
    if(checked){
      onChange([...selected, name])
    }else{
      onChange([...selected.filter(selectedName => selectedName !== name)])
    }
  }
  return (
    <>
     <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input name="wifi"  onChange={handleCbClick} type="checkbox" />
                <WifiIcon />
                <span>Wifi</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input name="parking" onChange={handleCbClick} type="checkbox" />
                <ParkingIcon />
                <span>Free parking spot</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input name="tv" onChange={handleCbClick} type="checkbox" />
                <TvIcon />
                <span>TV</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input name="radio" onChange={handleCbClick} type="checkbox" />
                <RadioIcon />
                <span>Radio</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input name="pets" onChange={handleCbClick} type="checkbox" />
                <PetsIcon />
                <span>Pets</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center">
                <input name="entrance" onChange={handleCbClick} type="checkbox" />
                <EnteranceIcon />
                <span>Entrace</span>
              </label>
    </>
  )
};

export default Perks;
