import React from 'react';
import './ReviewTemplate.css';

const ReviewTemplate = ({ header, select, children }) => (
  <main className="review-template">
    <div className="title">
      <img  class="logo" src="https://cloud.plating.co.kr/images/logos/230x78-white.png" /><br/>
      <strong>Review Page</strong></div>

    <section className="menu-wrapper">
      {header}
      {select}
    </section>
    <section className="review-wrapper">{children}</section>
  </main>
);

export default ReviewTemplate;
