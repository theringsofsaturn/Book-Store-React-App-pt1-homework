const BookCategories = ["fantasty", "history", "romance", "scifi", "horror"];
const books = {
  fantasty,
  history,
  romance,
  scifi,
  horror,
};

class LatestRelease extends React.Component {
  state = {
    data: books.fantasty,
    categorySelected: "fantasy",
  };

  render() {}
}

export default LatestRelease;
