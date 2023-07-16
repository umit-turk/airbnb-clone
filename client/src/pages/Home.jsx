import { useSelector } from "react-redux";

const Home = () => {
  const auth = useSelector(state => state?.auth?.auth?.user)
  return (
    <div>
        home page
        {auth?.name}
    </div>
  );
};

export default Home;
