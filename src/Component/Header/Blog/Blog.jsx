import { useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [blog, setblog] = useState([]);
  const [ctg, setctg] = useState();
  const [title, setTitle] = useState();
  const [dec, setdec] = useState();
  const [img, setimg] = useState();

  const handleCetagory = (e) => {
    setctg(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handledec = (e) => {
    setdec(e.target.value);
  };
  const handleimg = (e) => {
    setimg(e.target.value);
  };

  const handlePost = () => {
    if (ctg !== "" || title !== "" || dec !== "" || img !== "") {
      setblog((prevstate)=>{
        return [{ctg, title, dec , img},...prevstate] 
      })
      setctg("")
    setTitle("")
    setdec("")
    setimg("")
      
   
    } else {
      alert("All field Are requred");
    }
  };
  return (
    <>
      <div className="main">
        <div className="blogInputArea">
          <label htmlFor="">Catagory-</label>
          <input
            type="text"
            placeholder="type your Cetagory"
            value={ctg}
            onChange={handleCetagory}
          />
        </div>
        <div className="blogInputArea">
          <label htmlFor="">Title-</label>
          <input
            type="text"
            placeholder="type your Title"
            value={title}
            onChange={handleTitle}
          />
        </div>
        <div className="blogInputArea">
          <label htmlFor="">Discription-</label>
          <input
            type="text"
            placeholder="type your Discription"
            value={dec}
            onChange={handledec}
          />
        </div>
        <div className="blogInputArea">
          <label htmlFor="">Photo-</label>
          <input
            type="text"
            placeholder="pest your image url"
            value={img}
            onChange={handleimg}
          />
        </div>
        <button onClick={handlePost}>Post Your Blog</button>
      </div>

      {/* blog section */}
      <div className="blogarea">
        {blog.map((item)=>{
            return <div key={item} className="blog">
            <img
              src={item.img}
              alt="your Url is wrong"
            />
            <p className="catagory">{item.ctg}</p>
            <h2>{item.title}</h2>
            <p>
             {item.dec}.
            </p>
            <a href="#">Learn More</a>
          </div>
        })}
       
      </div>
    </>
  );
};

export default Blog;
