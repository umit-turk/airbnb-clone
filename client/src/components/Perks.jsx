import { EnteranceIcon, ParkingIcon, PetsIcon, RadioIcon, TvIcon, WifiIcon } from "../assets/svgs";

const Perks = ({selected, onChange}) => {
  const handleCbClick = (ev) => {
    const {checked,name} = ev.target
    if(checked){
      onChange([...selected, name])
    }else{
      onChange([...selected?.filter(selectedName => selectedName !== name)])
    }
  }
  return (
    <>
     <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input checked={selected?.includes('wifi')} name="wifi"  onChange={handleCbClick} type="checkbox" />
                <WifiIcon />
                <span>Wifi</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input checked={selected?.includes('parking')} name="parking" onChange={handleCbClick} type="checkbox" />
                <ParkingIcon />
                <span>Free parking spot</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input checked={selected?.includes('tv')} name="tv" onChange={handleCbClick} type="checkbox" />
                <TvIcon />
                <span>TV</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input checked={selected?.includes('radio')} name="radio" onChange={handleCbClick} type="checkbox" />
                <RadioIcon />
                <span>Radio</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input checked={selected?.includes('pets')} name="pets" onChange={handleCbClick} type="checkbox" />
                <PetsIcon />
                <span>Pets</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center">
                <input checked={selected?.includes('entrance')} name="entrance" onChange={handleCbClick} type="checkbox" />
                <EnteranceIcon />
                <span>Entrace</span>
              </label>
    </>
  )
};

export default Perks;
