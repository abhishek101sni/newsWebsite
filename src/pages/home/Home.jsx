import React, { useEffect } from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import { getArticles } from "../../Redux/actions/Home"
import { useSelector } from "react-redux"

export const Home = () => {
  const {Articles} = useSelector(state=>state.HomeReducer)
  
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      {/*  <Slider />*/}
      <Category />
      <Card data={Articles} />
    </>
  )
}
