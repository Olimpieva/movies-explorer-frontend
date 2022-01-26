import React from 'react';

import './More.css';

const More = ({ isVisible }) => {
  return (
    <section className={`more ${!isVisible && 'more_hidden'}`}>
      <button className="more__button">Ещё</button>
    </section>
  );
}

export default More;
