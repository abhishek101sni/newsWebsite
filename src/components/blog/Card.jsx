import React from "react"
import "./blog.css"
import { blog } from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"

export const Card = ({ data }) => {
  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {data?.map((item) => (
            <div className='box boxItems' key={item._id}>
              <div className='img'>
                <img src={item?.photo} alt='' />
              </div>
              <div className='details'>
                {/* <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <a href='/'>#{item?.category[0]}</a>
                </div> */}
                <Link to={{ pathname: `/details/${item._id}`, item: item }} className='link'>
                  <h3>{item?.title}</h3>
                </Link>
                <p>{item.description.slice(0, 180)}...</p>
                {/* <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}