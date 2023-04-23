import Profile from './user/Profile';
import user from './user/user.json';
import Statistics from './statistics/Statistics';
import data from './statistics/data.json';
import FriendList from './friends/FriendList';
import friends from './friends/friends.json';
import transactions from './transactions/transactions.json';
import TransactionHistory from './transactions/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
