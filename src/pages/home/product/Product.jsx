import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/productCard/ProductCard";
import Common from "../../../common/Common";
import SkyLoading from "../../../components/skyLoading/SkyLoading";
import DebounceSearch from "../../../components/debounce/DebounceSearch";
import NoData from "../../../components/noData/NoData";

const Product = () => {
  const { categories, productData } = Common();
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let data = productData;

    if (category !== "All") {
      data = data?.filter((item) => item.category === category);
    }

    if (searchTerm) {
      data = data?.filter((item) =>
        item?.name?.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    const timer = setTimeout(() => {
      setFilteredData(data);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [category, searchTerm]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
  };
  const handleReset = () => {
    setCategory("All");
    setSearchTerm("");
  };

  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between mb-3">
        <h2 className="fw-bold">Product</h2>
      </div>

      <div className="d-flex gap-4 mb-3">
        <DebounceSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <select
          className="form-select"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="All">All</option>

          {categories?.map((item) => (
            <option key={item.id} value={item?.name}>
              {item.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleReset}
          className="btn btn-outline-secondary d-flex align-items-center gap-2 "
        >
          <i className="fa-solid fa-rotate-left"></i>
          Reset
        </button>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
        {loading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <div className="col" key={index}>
              <SkyLoading />
            </div>
          ))
        ) : filteredData?.length > 0 ? (
          filteredData.map((item) => (
            <div className="col" key={item.id}>
              <ProductCard item={item} />
            </div>
          ))
        ) : (
          <NoData />
        )}
      </div>
    </section>
  );
};

export default Product;
