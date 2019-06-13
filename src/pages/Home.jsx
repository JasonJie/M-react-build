import React, { useState } from 'react';
import dayjs from 'dayjs';
import './home.scss';

function Home() {
  const [nowDay] = useState(dayjs().format('YYYY-MM-DD'));
  return (
    <div className="home">
      i am home
      {' '}
      {nowDay}
    </div>
);
}

export default Home;
