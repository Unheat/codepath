import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import Card from "../components/Card";

const ShowCreators = () => {
  // Start with an empty list
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("creators").select(); // SQL: SELECT * FROM creators;

      if (error) {
        console.error("Could not fetch creators", error);
      } else {
        // Update the memory
        setCreators(data);
      }
    };
    fetchCreators();
  }, []);

  return (
    <div className="ShowCreators grid grid-cols-[repeat(2,_1fr)] grid-rows-[repeat(,_1fr)]">
      {/* 3. The Mapping: Transform data into UI */}
      {creators && creators.length > 0 ? (
        creators.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            youtube={item.youtube}
            twitter={item.twitter}
            instagram={item.instagram}
            description={item.description}
            imageURL={item.imageURL}
          />
        ))
      ) : (
        <h2 className="text-center text-[#E3E8ED]">
          No creators found. Add some!
        </h2>
      )}
    </div>
  );
};

export default ShowCreators;
