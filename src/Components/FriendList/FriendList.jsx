import PropTypes from 'prop-types';
import s from './FriendList.scss';
import FriendListItem from 'Components/FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
}
export default FriendList;

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ),
  };
