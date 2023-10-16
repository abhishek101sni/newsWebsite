// import React from "react"
// import "./blog.css"
// import { blog } from "../../assets/data/data"
// import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
// import { Link } from "react-router-dom"

// export const Card = ({ data }) => {
//   return (
//     <>
//       <section className='blog'>
//         <div className='container grid3'>
//           {data?.map((item) => (
//             <div className='box boxItems' key={item._id}>
//               <div className='img'>
//                 <img src={item?.photo} alt='' />
//               </div>
//               <div className='details'>
//                 {/* <div className='tag'>
//                   <AiOutlineTags className='icon' />
//                   <a href='/'>#{item?.category[0]}</a>
//                 </div> */}
//                 <Link to={{ pathname: `/details/${item._id}`, item: item }} className='link'>
//                   <h3>{item?.title}</h3>
//                 </Link>
//                 <p>{item.description.slice(0, 100)}...</p>
//                 {/* <div className='date'>
//                   <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
//                   <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
//                   <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
//                 </div> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }

// import React from "react"
// import "./Card.css"
// import { Link } from "react-router-dom"
// import { MdHeight } from "react-icons/md"

// export const Card = ({ data }) => {
//   return (
//     <>
//       <section>
//         {data?.map((item) => (
//           <div style={{ width: "27%", height: "125px", backgroundColor: "#C8C8C8", marginTop: "30px", marginLeft: "10px", borderRadius: "10px" }}>
//             <div className='box' key={item._id}>
//               <div className='boxContent'>
//                 <div style={{width:"120px", height:"100px" , marginTop:"-2  5px" , marginRight:"10px" }}>
//                   <img className="img" src={item?.photo} alt='' />
//                 </div>
//                 <div className='details'>
//                   <Link to={{ pathname: `/details/${item._id}`, item: item }} className='link'>
//                     <h3 style={{ fontSize: 13 }}>{item?.title}</h3>
//                   </Link>
//                   <p style={{ fontSize: 10, fontWeight: 500 }}>{item.description.slice(0, 100)}...</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>
//     </>
//   )
// }


import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import myimage from "../../assets/images/2.jpg"

export const Card = ({ data }) => {
  return (
    <>
      <div className="wholewidth">
        <div className="card-container">
          {data?.map((item) => (
            <div className="card" key={item._id}>
              <div className="boxContent">
                <div className="image-container">
                  <img className="img" src={item?.photo} alt="" />
                </div>
                <div className="details">
                  <Link to={{ pathname: `/details/${item._id}`, item: item }} className="link">
                    <h3 className="hover-red">{item?.title}</h3>
                  </Link>
                  <p style={{ fontSize: 10, fontWeight: 500 }}>{item.description.slice(0, 60)}...</p>
                </div>
              </div>
            </div>
          ))}
        
        </div>
        <div>
            <img style={{ height: "550px", width: "400px", marginRight:"100px" , marginTop:"20px"}} src={myimage} alt="error 404" />
          </div>
      </div>

    </>
  );
};

