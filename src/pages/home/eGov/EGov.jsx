import { useEffect, useState } from "react";
import Common from "../../../common/Common";
import EGovCard from "../../../components/eGovCard/EGovCard";
import NoData from "../../../components/noData/NoData";
import EGovSkyLoading from "../../../components/skyLoading/EGovSkyLoading";

const EGov = () => {
  const { eGovData } = Common();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setData(eGovData);
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-3">
        Latest at <span className="text-primary">eGov</span>
      </h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <div className="col" key={index}>
              <EGovSkyLoading />
            </div>
          ))
        ) : data?.length > 0 ? (
          data?.map((item) => (
            <div className="col" key={item.id}>
              <EGovCard items={item} />
            </div>
          ))
        ) : (
          <NoData />
        )}
      </div>
    </section>
  );
};

export default EGov;
