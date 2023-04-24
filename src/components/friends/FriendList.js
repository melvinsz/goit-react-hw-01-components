import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';
import PropType from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.container}>
      {friends.map(({ name, isOnline, avatar, id }) => (
        <FriendListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
      ))}
    </ul>
  );
};
export default FriendList;

FriendList.PropType = {
  friends: PropType.arrayOf({
    avatar: PropType.string.isRequired,
    name: PropType.string.isRequired,
    isOnline: PropType.bool.isRequired,
    id: PropType.number.isRequired,
  }),
};
