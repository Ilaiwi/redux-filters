import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import ReactList from 'react-list';
import cn from 'classname'

import { 
  updateData,
  updateIdProp,
  toggleFilter,
  activateFilter,
  addBitmaskFilter,
  selectFiltersStatus,
  selectFilteredDataIds,
  addBitmaskFilterCategory,
} from 'redux-filters';

import './App.css';
// generated from https://www.json-generator.com/
import phones from './bigData.json';

import {
  HDR_FILTER,
  WATER_PROOF_FILTER,
  DUAL_CAMERA_FILTER,
  TOUCH_FOCUS_FILTER,
  FEATURES_FILTER_CATEGORY,
} from './filters';

class App extends Component {
  constructor(props) {
    super(props);
    this.addFilters();
  }

  addFilters = () => {
    const {
      addBitmaskFilterCategory,
      addBitmaskFilter,
      activateFilter,
      updateIdProp,
      updateData
    } = this.props;

    addBitmaskFilterCategory(FEATURES_FILTER_CATEGORY);
    addBitmaskFilter(HDR_FILTER);
    addBitmaskFilter(DUAL_CAMERA_FILTER);
    addBitmaskFilter(TOUCH_FOCUS_FILTER);
    addBitmaskFilter(WATER_PROOF_FILTER);
  }

  componentWillUpdate() {
    console.timeEnd('hdrTime')
    console.time('updateTime')
  }
  componentDidUpdate() {
    console.timeEnd('updateTime')
  }
  componentDidMount() {
    const { updateData } = this.props;
    this.props.updateData(phones)
  }
  renderItem = (index, key) => {
    const {
      data
    } = this.props;
    const id = data.toJS()[index];
    const phone = phones.find(phone => phone.id === id);
    return (
      <div className="row"  key={key}>
        <pre className="column column-20">
          <code>
            {phone.id}
          </code>
        </pre>
        <pre className="column column-10">
          <code>
            {phone.price}
          </code>
        </pre>
        <pre className="column column-50">
          <code>
            {phone.features.reduce((acc, feature) => acc + (acc ? ', ' : '') + feature, '')}
          </code>
        </pre>
        <pre className="column column-20">
          <code>
            {phone.isWaterProof ? 'Water proof' : 'Not Water Proof'}
          </code>
        </pre>
      </div>);
  }

  isFilterActive = (filterID) => {
     const { 
       status
      } = this.props
      console.log("isActive", status.getIn(['features', filterID]) === 'active')
      return status.getIn(['features', filterID]) === 'active'
  }
  render() {
    const {
      data,
      toggleFilter,
      status
    } = this.props;
    console.log("s", status)
    return (
      <div>
        <h1>Open In Full Screen</h1>
        <button 
          className={cn('column', {'filter-on': this.isFilterActive('hdr')})}
          onClick={() => {toggleFilter(HDR_FILTER); console.time('hdrTime')}}
          >
          HDR
        </button>
        <button 
          className={cn('column', {'filter-on': this.isFilterActive('dualCamera')})}
          onClick={() => toggleFilter(DUAL_CAMERA_FILTER)}
          >
          Dual Camera
        </button>
        <button 
          className={cn('column', {'filter-on': this.isFilterActive('touchFocus')})}
          onClick={() => toggleFilter(TOUCH_FOCUS_FILTER)}
          >
          Touch Focus
        </button>
        <button 
          className={cn('column', {'filter-on': this.isFilterActive('waterProof')})}
          onClick={() => toggleFilter(WATER_PROOF_FILTER)}
          >
          Water proof
        </button>
        <h2>Total: {data.toJS().length}</h2>
        <div>{status}</div>
        <div className="row outlined">
          <pre className="column column-20">
            <code>
              id
            </code>
          </pre>
          <pre className="column column-10">
            <code>
              price
            </code>
          </pre>
          <pre className="column column-50">
            <code>
              features
            </code>
          </pre>
          <pre className="column column-20">
            <code>
              water proof
            </code>
          </pre>
        </div>
        <div style={{'overflow': 'scroll', maxHeight: 400}}>
          <ReactList
            length={data.toJS().length}
            itemRenderer={this.renderItem}
            />
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectFilteredDataIds(),
  status: selectFiltersStatus(),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addBitmaskFilterCategory,
  addBitmaskFilter,
  activateFilter,
  toggleFilter,
  updateIdProp,
  updateData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*generator code
[
  '{{repeat(3000)}}',
  {
    id: '{{guid()}}',
    price: '{{floating(1000, 4000, 2)}}',
    rating: '{{integer(1, 10)}}',
    isWaterProof: '{{bool()}}',
    owner: '{{firstName()}} {{surname()}}',
    features: function (tags, index) {
      var allFeatures = [
        "touch focus",
        "panorama",
        "Auto HDR",
        "HDR",
        "Apple Pay",
        "Dual cameras"
      ];
      var d = Math.ceil(Math.random()*allFeatures.length);
      for (var i = 0; i < d; i++) {
        allFeatures.splice(Math.ceil(Math.random()*allFeatures.length -1), 1);
      }
      return allFeatures;
    }
  }
]
*/