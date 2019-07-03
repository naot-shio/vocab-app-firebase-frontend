import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Pagination extends Component {
  state = {
    open: false
  };

  render() {
    const pageNumbers = [];
    const { sentencesPerPage, totalSentences, paginate } = this.props;

    for (let i = 1; i <= Math.ceil(totalSentences / sentencesPerPage); i++) {
      pageNumbers.push(i * 10);
    }

    return (
      <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          Open
        </Button>
        {pageNumbers.map(number => (
          <Button
            style={{ display: this.state.open ? "block" : "none" }}
            key={number}
            onClick={() => paginate(number)}
          >
            {number - 9} ~ {number}
          </Button>
        ))}
      </div>
    );
  }
}

export default Pagination;
