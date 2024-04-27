import React, {useState} from 'react';
import moment from 'moment'; // Nepali locale package


const Post = ({ post }) => {

  moment.locale('ne'); // Set Nepali locale
  const utcDate = new Date(post.date_posted);
  const nptDate = utcDate.getTime() + (5.75 * 60 * 60 * 1000); // Add 5 hours 45 minutes offset in milliseconds
  const formattedDate = moment(nptDate).format('YYYY/MM/DD HH:mm:ss'); // Nepali format


  const [isExpanded, setIsExpanded] = useState(false); // State for card expansion

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded); 
  };

  const shortContent = post.content.slice(0, 100); 
  const fullContent = post.content; 



  return (
    <div className="blog-wrapper">
      <div className="blog-card">
        <div className="card-img">
          <h2>{post.title}</h2>
        </div>
        <div className="card-details"><span><i class="fa fa-calendar"></i>{formattedDate}</span></div>
        <div className="card-text">
          <p className={isExpanded ? 'expanded-content' : ''}>{isExpanded ? fullContent : shortContent}</p>
          {!isExpanded && (
          <button className="read-more" onClick={handleReadMoreClick}>
             Read More
          </button>
        )}
        </div>
      </div>
    </div>
  );
};

export default Post;

