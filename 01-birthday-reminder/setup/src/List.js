import React from 'react';

const List = ({ people }) => {
  /* Design choice for coding:
   * You can map over the people state in App.js or you can do it in the child component
   * In this case, we mapped over in the child component by passing people state as prop
   */

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;

/*
First design choice I made without looking at tutorial
const List = ({ id, image, age, name }) => {
  return (
    <article className="person">
      <img src={image} alt="{name}" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default List;
*/
