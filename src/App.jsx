import React, { useEffect, useState } from 'react';
import ListItem from './components/ListItem/ListItem.jsx';
import './App.css';

const App = () => {
  const [jobAds, setJobAdds] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const getAllJobAds = async () => {
    return fetch(
      'https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json'
    ).then((response) => {
      if (response.status === 200) {
        return response.json();
      }

      throw new Error('Something went wrong, reload the page to try again');
    });
  };

  useEffect(async () => {
    try {
      const data = await getAllJobAds();

      setJobAdds(data);
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }, []);

  return (
    <div className="container">
      {!errorMessage.length &&
        !loading &&
        jobAds.map((post) => {
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
          const location = locations
            .map((site) => site?.location?.text ?? '')
            .filter((site) => site);
          const tags = [...location, experience, employment_type];

          return (
            <ListItem
              key={id}
              title={title}
              subTitle={`@ ${company.name}`}
              metadata={`${jobFunction}, ${experience}`}
              body={descr}
              tags={tags}
              action={() => window.open(urls.ad, '_blank')}
            />
          );
        })}
      {errorMessage && !loading && <p>{errorMessage}</p>}
      {loading && <p>Loading content... </p>}
    </div>
  );
};

export default App;
