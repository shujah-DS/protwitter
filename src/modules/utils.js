import React from 'react';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { SCREEN } from '../constants';

export const connectComponent = (mapStateToProps, propsConfig, Component) => {
  const mapDispatchToProps = dispatch =>
    bindActionCreators({ ...propsConfig, push }, dispatch);
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
};


export const getScreenName = width => {
  if (width <= SCREEN.xs) {
    return 'xs';
  }
  if (width > SCREEN.xs && width < SCREEN.sm) {
    return 'sm';
  }
  if (width > SCREEN.sm && width < SCREEN.md) {
    return 'md';
  }
  if (width > SCREEN.md && width < SCREEN.lg) {
    return 'lg';
  }
  if (width > SCREEN.lg && width < SCREEN.xl) {
    return 'xl';
  }
  return 'xxl';
};


export const getWindowWidth = () =>
  window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

export const getWindowHeight = () =>
  window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

export const joinNodes = (children, render, renderSeparator) =>
  children.reduce((result, child, index) => {
    if (index < children.length - 1) {
      return result.concat([
        render(child, index),
        renderSeparator(`${index}-separator`)
      ]);
    }

    return result.concat(render(child, index));
  }, []);

export const getExpandedRowRender = (
  allColumns,
  columns,
  key = 'id'
) => record => {
  const expandedColumns = _.differenceWith(allColumns, columns, _.isEqual);
  return (
    <div key={record[key]}>
      {expandedColumns.map(col => (
        <div key={col.dataIndex} className="expanded-row-render">
          <span className="title">
            {col.title}
            :
            {' '}
          </span>
          <span className="value">
            {col.render
              ? col.render(record[col.dataIndex], record)
              : record[col.dataIndex]}
          </span>
        </div>
      ))}
    </div>
  );
};

export const showLabel = (node, screen) => (screen === 'xs' ? null : node);

export const fakeApi = ({ data, wait, failure, before, after }) => new Promise((resolve, reject) => {
  const method = failure ? reject : resolve;
  setTimeout(() => {
    if (typeof before === 'function') before();
    method(data);
    if (typeof after === 'function') after();
  }, wait || 1000);
});
