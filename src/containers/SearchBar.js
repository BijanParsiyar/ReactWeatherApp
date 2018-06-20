import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchWeather } from "../actions/weatherActions";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }

  renderErrors() {
    if (this.props.errors.message) {
      return (
        <div className="errors">
          <small>*{this.props.errors.message} please try again</small>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.onFormSubmit}
          className="form-row align-items-center mt-3"
        >
          <div className="col-md-8">
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type="text"
              className="form-control"
              placeholder="Enter a city please"
            />
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-secondary mr-2">
              Submit
            </button>
          </div>
        </form>
        {this.renderErrors()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { fetchWeather }
)(SearchBar);
