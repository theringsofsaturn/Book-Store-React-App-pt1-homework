import React from "react";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

export default function LatestRelease() {
  return (
    <div className="d-flex flex-wrap">
      {history.map((book) => {
        return <img className="book-cover" src={book.img} />;
      })}
    </div>
  );
}

// const BookCategories = ["fantasty", "history", "romance", "scifi", "horror"];
// const books = {
//   fantasty,
//   history,
//   romance,
//   scifi,
//   horror,
// };

// class LatestRelease extends React.Component {
//   state = {
//     data: books.fantasty,
//     categorySelected: "fantasy",
//   };

//   render() {}
// }

// export default LatestRelease;
