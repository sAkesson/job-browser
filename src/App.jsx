import React, { useEffect, useState } from 'react';
import ListItem from './components/ListItem/ListItem.jsx';
import './App.css';

const App = () => {
  const [postings, setPostings] = useState([]);

  const getAllJobs = async () => {
    return fetch('https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json')
      .then((response) => response.json())
      .catch((error) => console.warn(error));
  };

  useEffect(async () => {
    const data = await getAllJobs();

    setPostings(data);
  }, []);

  return (
    <div className="container">
      {postings.map((post) => {
        const {
          id,
          title,
          company,
          locations,
          function: jobFunction,
          experience,
          employment_type,
          descr,
          urls,
        } = post;
        const location = locations.map((site) => site?.location?.text ?? '').filter((site) => site);
        const tags = [...location, experience, employment_type];

        return (
          <ListItem
            key={id}
            title={title}
            subTitle={`@ ${company.name}`}
            metadata={`${jobFunction}, ${experience}`}
            body={descr}
            tags={tags}
            action={(event) => {
              event.preventDefault();
              window.open(urls.ad, '_blank');
            }}
          />
        );
      })}
    </div>
  );
};

export default App;
