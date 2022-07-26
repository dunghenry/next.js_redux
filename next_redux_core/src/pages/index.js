import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/userActions';
const Home = () => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleSetUser = () => {
    dispatch(setUser({ i: 1, username: "Tran Dung" }));
  }
  return (
    <div>
      <h1>Hello Next.js</h1>
      <h1>Home Page</h1>
      <p>{JSON.stringify(user)}</p>
      <button onClick={handleSetUser}>Set User</button>
    </div>
  )
}
export default Home;