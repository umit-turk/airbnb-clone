import { Link, useParams } from "react-router-dom";
import { AddIcon } from "../assets/svgs.jsx";
import PlacesForm from "../components/PlacesForm.jsx";
import AccountNav from "../components/AccountNav.jsx";
const Places = () => {
  const { action } = useParams();
  return (
    <div>
      <AccountNav />
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
      {action === "new" && <PlacesForm />}
    </div>
  );
};

export default Places;
