import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage - 1;
      if (newPage < 0) {
        newPage = data.length - 1;
      }
      return newPage;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage + 1;
      if(newPage > data.length - 1) {
        newPage = 0;
      }
      return newPage;
    })
  };

  // attemp I've tried using dataset & data-*
  // const prevAndNext = (e) => {
  //   const label = e.target.dataset.label;
  //   if (label === 'prev') {
  //     if (page === 0) {
  //       setPage(data.length - 1);
  //     } else {
  //       setPage(page - 1);
  //     }
  //   }
  //   if (label === 'next') {
  //     if (page >= data.length - 1) {
  //       setPage(0);
  //     } else {
  //       setPage(page + 1);
  //     }
  //   }
  // };

  return (
    <main>
      <div className="section-title">
        <h2>{loading ? 'loading...' : 'pagination'}</h2>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            {/* <button
              className="prev-btn"
              onClick={prevAndNext}
              data-label="prev"
            > 
            </button> */}
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : ''}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            {/* <button
              className="next-btn"
              onClick={prevAndNext}
              data-label="next"
            >
              next
            </button> */}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
