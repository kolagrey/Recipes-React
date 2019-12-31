import React from 'react';
import Card from '../components/Card';
const Featured = (props) => {
  return (
    <div className="columns is-mobile is-vcentered is-multiline">
      {props.data.map(item => {
        return (
          <Card key={item.recipecode} data={item} className="column is-full-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd"/>
        );
      })}
    </div >
  )
}

export default Featured;