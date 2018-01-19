import React from 'react';
import './ReviewTemplate.css';

const ReviewTemplate = ({ header, select, children }) => (
  <main className="review-template">
    <div className="title">PLATING 리뷰 페이지</div>

    <section className="menu-wrapper">
      {header}
      {select}
    </section>
    <section className="review-wrapper">{children}</section>
  </main>
);

export default ReviewTemplate;
