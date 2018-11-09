import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/lib/Table';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

import { requestApiList, requestApiRecord } from '../redux/action';
import Pagination from '../Pagination';

class Home extends Component {
  static propTypes = {
    requestApiList: PropTypes.func.isRequired,
    requestApiRecord: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    record: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageSize: 25,
      isModal: false
    }
  }

  componentDidMount() {
    this.props.requestApiList('/appraisaldemo/propertytest/search');
  }

  onChangePage = (page) => {
    this.setState({ page });
  }

  onIDClick = (propID) => {
    this.setState({ isModal: true });
    this.props.requestApiRecord(`/appraisaldemo/propertytest/${propID}`);
  }

  onModalHide = () => {
    this.setState({ isModal: false });
  }

  renderTable = (data) => {
    const { page, pageSize } = this.state;
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>PropID</th>
              <th>OwnerName</th>
              <th>DbaName</th>
              <th>LegalDescription</th>
              <th>SitusStreet</th>
            </tr>
          </thead>
          <tbody>
            {data.slice((page - 1) * pageSize, page * pageSize).map((item) =>
              <tr key={item.propID}>
                <td>
                  <button onClick={() => this.onIDClick(item.propID)}>
                    {item.propID}
                  </button>
                </td>
                <td>{item.ownerName}</td>
                <td>{item.dbaName}</td>
                <td>{item.legalDescription}</td>
                <td>{item.situsStreet}</td>
              </tr>
            )}
          </tbody>
        </Table>
        <Pagination
          total={data.length}
          currentPage={page}
          onChange={this.onChangePage}
          perPage={pageSize}
        />
      </div>
    )
  }

  renderModal = (record) => (
    <Modal
        show={this.state.isModal}
        onHide={this.onModalHide}
        container={this}
        aria-labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">
          Record
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table>
          <thead>
            <tr>
              <th>PropID</th>
              <th>OwnerName</th>
              <th>DbaName</th>
              <th>LegalDescription</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{record.propID}</td>
              <td>{record.subdivisionCd}</td>
              <td>{record.geoID}</td>
              <td>{record.reconciledMarket}</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-danger" onClick={this.onModalHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );

  renderLoading = () => (<h3>loading...</h3>)

  render() {
    const { list = [], record = [] } = this.props;
    return (
      <div>
        {list.length
          ? this.renderTable(list)
          : this.renderLoading()
        }
        {!!record.length && this.renderModal(record[0])}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.data.list,
  record: state.data.record
});

const mapDispatchToProps = dispatch => ({
  requestApiList: (endpoint) => dispatch(requestApiList(endpoint)),
  requestApiRecord: (propID) => dispatch(requestApiRecord(propID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
