import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from 'Redux/users/usersSelectors';
import { deleteUser } from 'Redux/users/usersSlice';

export const HomePage = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  // console.log(users);
  return (
    <ul>
      {users.map(({ id, name, age }) => (
        <li key={id}>
          <p> Name: {name}</p>
          <p>Age: {age}</p>
          <button onClick={() => dispatch(deleteUser(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
