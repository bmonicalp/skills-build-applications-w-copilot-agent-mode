import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://glowing-funicular-7jj9667jv7j2xjvx-8000.app.github.dev/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <div>
      <h1 className="mb-4">Activities</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Activities;
