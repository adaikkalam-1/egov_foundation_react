import { useEffect } from "react";

const DebounceSearch = ({ searchTerm, setSearchTerm }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, setSearchTerm]);

  return (
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      className="form-control"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default DebounceSearch;
