const paginate = (followers) => {
  const itemsPerPage = 10;
  const pages = Math.ceil(followers.length / itemsPerPage);

  // the second argument with _ is used there since we don't care about what we 
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers;
};

export default paginate;
