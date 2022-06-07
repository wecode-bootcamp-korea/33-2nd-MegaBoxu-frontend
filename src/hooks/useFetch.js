import { useState, useEffect } from 'react';

// To Do: 추후 통신시  setSources(data.result); 로 변경 예정

const useFetch = url => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data.result));
  }, [url]);

  return data;
};

export default useFetch;
