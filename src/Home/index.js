import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { requestApiData } from '../redux/action';

class Home extends Component {
  static propTypes = {
    requestApiData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.requestApiData('/appraisaldemo/propertytest/search');
  }

  displayData = (x, i) =>
    <div key={i}>
      <h3>
        {x.propID}
      </h3>
      <h3>
        {x.ownerName}
      </h3>
      <h3>
        {x.dbaName}
      </h3>
      <h3>
        {x.legalDescription}
      </h3>
      <h3>
        {x.situsStreet}
      </h3>
    </div>;

  render() {
    const { results = [] } = this.props.data;
    return results.length
      ? <h3>
          {results.map(this.displayData)}
        </h3>
      : <h3>loading...</h3>;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => ({
  requestApiData: (endpoint) => dispatch(requestApiData(endpoint))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
