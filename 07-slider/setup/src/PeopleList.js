import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

const PeopleSlide = ({ people, index, incrementIndex, decrementIndex }) => {
  return (
    <div className="section-center">
      {people.map((person, personIdx) => {
        const { id, image, name, title, quote } = person;
        let position = 'nextSlide';
        if (personIdx === index) {
          position = 'activeSlide';
        }
        if (
          personIdx === index - 1 ||
          (index === 0 && personIdx === people.length - 1)
        ) {
          position = 'lastSlide';
        }
        return (
          <article className={position} key={id}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="prev" onClick={() => decrementIndex()}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => incrementIndex()}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default PeopleSlide;
