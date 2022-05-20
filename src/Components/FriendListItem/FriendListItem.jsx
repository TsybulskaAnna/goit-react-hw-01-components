import PropTypes from 'prop-types';
import s from './FriendListItem.module.scss';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={`${s.status} ${isOnline ? s.online : s.ofline}`}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="60" height="60" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
