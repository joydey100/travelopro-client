import { useEffect, useState } from "react";

const usePackages = () => {
  // essential states
  const [packages, setPackages] = useState();

  // Get packages
  useEffect(() => {
    fetch(`https://howling-treat-27967.herokuapp.com/packages`)
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return {
    packages,
  };
};

export default usePackages;
