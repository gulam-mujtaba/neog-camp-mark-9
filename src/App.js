import "./styles.css";
import React from "react";
import { useState } from "react";

var podcast = {
  Finance: [
    { name: "The Dave Ramsey Show", rating: "4.5/5" },
    { name: "Millennial Investing", rating: "4.1/5" },
    { name: "Planet Money", rating: "4/5" }
  ],
  Mindset: [
    { name: "The Tim Ferriss Show", rating: "4.3/5" },
    { name: "Mindvalley Podcast", rating: "4/5" },
    { name: "TED Radio Hour", rating: "3.9/5" }
  ],
  Tech: [
    { name: "SyntaxFM", rating: "4.6/5" },
    { name: "Learn to Code With Me", rating: "4.1/5" },
    { name: "Developer Tea", rating: "3.7/5" }
  ]
};

export default function App() {
  const [genre, setgenre] = useState("Finance");
  function genrehandler(genre) {
    setgenre(genre);
  }

  return (
    <div className="Podcast Recommendation">
      <h1 key={podcast.heading}>Podcast Radio</h1>
      <h2>
        Do you listen to Podcast? If you do, then checkout my recommendation for
        some of my favorite shows you must listen to!
      </h2>
      <h3>Check them out below!</h3>
      <div>
        {Object.keys(podcast).map((genre) => (
          <button
            onClick={() => genrehandler(genre)}
            style={{
              margin: "20px",
              padding: "10px",
              border: "solid",
              borderRadius: "15px",
              borderColor: "orange",
              textAlign: "center",
              backgroundColor: "white",
              fontSize: "large"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <div>
        <ul style={{ display: "block" }}>
          {podcast[genre].map((podcast) => (
            <li
              key={podcast.name}
              style={{
                margin: "auto",
                marginBlock: "15px",
                listStyle: "none",
                padding: "0.6rem",
                alignContent: "center",
                border: "solid black",
                width: "50%",
                textAlign: "center",
                borderRadius: "0.5rem",
                borderColor: "darkblue",
                backgroundColor: "lightblue",
                maxWidth: "250px"
              }}
            >
              <div style={{ fontSize: "larger" }}>{podcast.name}</div>
              <div style={{ color: "blue" }}>{podcast.heading}</div>
              <div style={{ fontSize: "smaller", color: "maroon" }}>
                {" "}
                {podcast.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
