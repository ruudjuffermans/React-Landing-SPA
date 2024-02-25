import PageTitle from "../../components/PageTitle"
import useData from "../../hooks/useData";

// import data from "./data.json";

const Projecten = () => {
  const {data, loading} = useData("contact");

  if (loading) return null

  return (
    <div>
      <PageTitle>Projecten</PageTitle>
    </div>
  );
};

export default Projecten