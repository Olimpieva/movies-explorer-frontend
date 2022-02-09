import React from 'react';

import './More.css';

const More = ({ onClick }) => {

  return (
    <section className={`more`}>
      <button className="more__button" onClick={onClick}>Ещё</button>
    </section>
  );
}

export default More;
