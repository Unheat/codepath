import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "../client";

const ViewCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Set up the teleporter
  const [creator, setCreator] = useState(null);
  useEffect(() => {
    const fetchSingleCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        console.error("Could not fetch creator", error);
      } else {
        setCreator(data);
      }
    };
    fetchSingleCreator();
  }, [id]); // if the URL ID changes, it runs again

  if (!creator) {
    return <h2>Loading Creator Data...</h2>;
  }

  // The Delete Function
  const deleteCreator = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this creator?",
    );
    if (confirmDelete) {
      await supabase.from("creators").delete().eq("id", id);
      navigate("/"); // Teleport home after deleting
    }
  };
  // the creator page layout
  return (
    <div
      className="ViewCreator"
      style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
    >
      {/* Top Section: Flexbox puts Image on the Left, Info on the Right */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* 1. The Image (Only shows if they provided an imageURL) */}
        {creator.imageURL && (
          <img
            src={creator.imageURL}
            alt={creator.name}
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        )}

        {/* 2. The Info (Name, Desc, Socials) */}
        <div
          className="social-links"
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <h1 style={{ margin: "0" }}>{creator.name}</h1>
          <p style={{ fontSize: "18px", color: "#ccc" }}>
            {creator.description}
          </p>

          {creator.twitter && (
            <a
              href={`https://twitter.com/${creator.twitter}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                color: "white",
              }}
            >
              <img
                src="/icons/twitter.svg"
                alt="Twitter"
                style={{ width: "24px" }}
              />
              @{creator.twitter}
            </a>
          )}

          {creator.instagram && (
            <a
              href={`https://www.instagram.com/${creator.instagram}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                color: "white",
              }}
            >
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                style={{ width: "24px" }}
              />
              @{creator.instagram}
            </a>
          )}

          {creator.youtube && (
            <a
              href={`https://www.youtube.com/@${creator.youtube}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                color: "white",
              }}
            >
              <img
                src="/icons/youtube.svg"
                alt="YouTube"
                style={{ width: "24px" }}
              />
              @{creator.youtube}
            </a>
          )}
        </div>
      </div>

      {/* Bottom Section: Action Buttons */}
      <div className="action-buttons" style={{ display: "flex", gap: "15px" }}>
        {/* Edit Button: Teleports to the Edit Page */}
        <Link to={`/edit/${creator.id}`}>
          <button
            style={{
              backgroundColor: "#4a90e2",
              color: "white",
              padding: "10px 30px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            className="w-[378px]"
          >
            EDIT
          </button>
        </Link>

        {/* Delete Button: Triggers the delete function */}
        <button
          onClick={deleteCreator}
          style={{
            backgroundColor: "#ff4a4a",
            color: "white",
            padding: "10px 30px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          className="w-[662px]"
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default ViewCreator;
