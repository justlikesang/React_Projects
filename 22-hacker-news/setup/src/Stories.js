import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  /* 
    you don't need to make another function to invoke the removeStory like a
    prop drill, simply use removeStory function directly from useContext!
  */
  // const handleRemove = (id) => {
  //   removeStory(id);
  // }

  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span>
              {num_comments} comments
            </p>
            <div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-link"
              >
                read more
              </a>
              <button className="remove-btn" onClick={() => removeStory(objectID)}>remove</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
