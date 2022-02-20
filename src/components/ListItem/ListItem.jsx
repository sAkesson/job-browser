import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.jsx';
import Tag from '../Tag/Tag.jsx';
import './ListItem.css';

const ListItem = ({ title, subTitle, body, tags, action }) => {
  return (
    <div className={`card ${action ? 'clickable' : ''}`} onClick={action}>
      <div className="card-body">
        <div className="card-text">
          <div className="card-title">{title}</div>
          {subTitle && <div className="card-sub-title">{subTitle}</div>}

          <div
            className="card-description"
            dangerouslySetInnerHTML={{
              __html: body,
            }}
          ></div>
        </div>

        <div className="card-footer">
          <div className="tag-container">
            {tags && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </div>
          {action && <Button text="Read more" />}
        </div>
      </div>
    </div>
  );
};

export default ListItem;

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  body: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  action: PropTypes.func,
};
