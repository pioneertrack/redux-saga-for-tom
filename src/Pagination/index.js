import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pager from 'react-bootstrap/lib/Pager';

class Pagination extends Component {
  onPageChange = (pageNum) => () => {
    this.props.onChange(pageNum);
  }

  onPrev = () => {
    const { currentPage } = this.props;
    this.onPageChange(currentPage - 1)();
  }

  onNext = () => {
    const { currentPage } = this.props;
    this.onPageChange(currentPage + 1)();
  }

  get pageCount() {
    const { total, perPage } = this.props;
    return Math.ceil(total / perPage) || 1;
  }

  renderPages = () => {
    const { currentPage } = this.props;
    const pageCount = this.pageCount;
    return Array(pageCount).fill().map((val, index) => {
      const pageNum = index + 1;
      return (
        <button
          key={`page_${pageNum}`}
          disabled={pageNum !== currentPage}
          onClick={this.onPageChange(pageNum)}
        >
          {`${pageNum}`}
        </button>
      );
    });
  }

  render() {
    const { currentPage } = this.props;
    const { pageCount } = this;

    return (
      <Pager>
        <Pager.Item disabled={currentPage === 1} previous onClick={this.onPrev}>
          &larr; Previous
        </Pager.Item>
        <Pager.Item disabled={currentPage === pageCount} next onClick={this.onNext}>
          Next &rarr;
        </Pager.Item>
      </Pager>
    );
  }
}

Pagination.propTypes = {
  total: PropTypes.number,
  perPage: PropTypes.number,
  currentPage: PropTypes.number,
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  total: 0,
  perPage: 20,
  currentPage: 1,
  onChange: () => {},
};

export default Pagination;
