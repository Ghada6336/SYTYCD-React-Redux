import React from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

import { connect } from "react-redux";

const AuthorsList = ({ filteredAuthors }) => {
  const authorCards = filteredAuthors.map(author => (
    <AuthorCard key={author.id} author={author} />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <SearchBar  onChange={filteredAuthors} />
      <div className="row">{authorCards}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filteredAuthors: state.rootAuthors.filteredAuthors
    // authors: state.authorsState.authors
  };
};

export default connect(mapStateToProps)(AuthorsList);
