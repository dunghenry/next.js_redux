import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { increase } from '../store/slices/counterSlice'
const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector(state => state.counter);
  const handleIncrement = () => {
    dispatch(increase());
  }
  return (
    <Layout>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </Layout>
  )
}

export default Home
