import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { decrement, increment } from '../store/slices/counterSlice'
const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector(state => state.counter);
  const handleIncrement = () => {
    dispatch(increment());
  }
  const handleDerement = () =>{
    dispatch(decrement());
  }
  return (
    <Layout>
      <h1 className="ml-10 pl-10">{count}</h1>
      <button onClick={handleIncrement} className="border rounded px-10 py-1 bg-green-400 text-white">Increment</button> &nbsp;
      <button onClick={handleDerement} className="border rounded px-10 py-1 bg-red-500 text-white">Decrement</button> &nbsp;
    </Layout>
  )
}

export default Home
