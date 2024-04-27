import React from 'react';
import moment from 'moment'; // Nepali locale package

const Post = ({ post }) => {

  moment.locale('ne'); // Set Nepali locale
  const utcDate = new Date(post.date_posted);
  const nptDate = utcDate.getTime() + (5.75 * 60 * 60 * 1000); // Add 5 hours 45 minutes offset in milliseconds
  const formattedDate = moment(nptDate).format('YYYY/MM/DD HH:mm:ss'); // Nepali format

  return (
    <li key={post.id} className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>{formattedDate}</p>
    </li>
  );
};

export default Post;

