import { useState, useEffect } from "react";

export const Home = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async function fetchLocation() {
      const response = await fetch("http://ip-api.com/json/");
      const data = await response.json();
      setLocation(data);
    }

    fetchLocation();
  }, []);

  return (
    <main>
      <section className="left-bar">Left Content</section>
      <section className="main-content">Main Content</section>
      <section className="right-bar">Right Content</section>
    </main>
  );
};
