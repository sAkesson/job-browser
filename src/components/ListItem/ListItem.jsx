import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.jsx';
import Tag from '../Tag/Tag.jsx';
import './ListItem.css';

const ListItem = ({ title, subTitle, body, tags, action }) => {
  return (
    <div className={`list-item ${action ? 'clickable' : ''}`} onClick={action}>
      <div className="list-item-title">{title}</div>
      {subTitle && <div className="list-item-sub-title">{subTitle}</div>}

      <div
        className="list-item-description"
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      ></div>
      {(tags || action) && (
        <div className="list-item-footer">
          <div className="list-item-footer-tag-container">
            {tags && tags.map((tag) => <Tag key={tag} text={tag} />)}
          </div>
          {action && <Button label="Read more" />}
        </div>
      )}
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
