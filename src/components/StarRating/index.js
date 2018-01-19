/**
 * node module import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { range } from 'lodash';
import Star from 'react-icons/lib/md/star';
import StarEmpty from 'react-icons/lib/md/star-outline';
import StarHalf from 'react-icons/lib/md/star-half';
/**
 * src module import
 */

/**
 * relative path import
 */
import css from './index.scss';

const cx = classnames.bind(css);

const MAX_RATING = 5;

const StarRating = ({
  id,
  color,
  emptyColor,
  rating,
  maxRating,
  size,
  hover,
  onClick,
  params,
}) => {
  if (hover) {
    return (
      <div className={cx(`StarRating`)}>
        {range(maxRating).map(idx => {
          const newPramas = {
            ...params,
            rating: maxRating - idx,
          };
          if (rating - (maxRating - idx) + 1 > 0.5) {
            return (
              <span
                onClick={() => {
                  onClick(newPramas);
                  // console.log('id', `${id}-star${maxRating - idx}`);
                }}
              >
                <Star
                  key={`${id}-star${maxRating - idx}`}
                  color={color}
                  size={size}
                />
              </span>
            );
          }
          return (
            <span
              onClick={() => {
                onClick(newPramas);
                // console.log('id', `${id}-star${maxRating - idx}`);
              }}
            >
              <Star
                key={`${id}-star${maxRating - idx}`}
                color={emptyColor}
                size={size}
              />
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cx(`StarRating`)}>
      {range(maxRating).map(idx => {
        if (rating - idx > 0.5) {
          return <Star key={idx} color={color} size={size} />;
        } else if (rating - idx > 0) {
          return <StarHalf key={idx} color={color} size={size} />;
        }
        return <StarEmpty key={idx} color={color} size={size} />;
      })}
    </div>
  );
};

StarRating.propTypes = {
  color: PropTypes.string, // color는 css color에 해당하는 string으로, react-icons의 color option을 참고하면된다.
  rating: PropTypes.number, // 별점.
  maxRating: PropTypes.number, // 최대별점.
};

StarRating.defaultProps = {
  color: 'black',
  rating: 0,
  maxRating: MAX_RATING,
};

export default StarRating;
