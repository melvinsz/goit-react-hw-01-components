import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

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
