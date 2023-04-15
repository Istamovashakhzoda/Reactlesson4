import React,{useState} from "react";
import axios from "axios";

const Home = () =>{
  const[getData, setgetData] = useState ()
const handleClick = async () =>{
  try {
    const getData = await axios.get("https://jsonplaceholder.typicode.com/users")
    setgetData(getData?.data)
    // const respons = getDta
    console.log(getData.data[0]);
  } catch (error) {
    console.log(error);
  }
}

  return(
    <div className="container">
      {/* {getData.map(data)=>()}
      {getData .map((data)=>(
      ))} */}
        <div className="card">
        <p className="name">your name</p>
        <p className="email">@gmail.com</p>
        <p className="addres">addres</p>
        <p className="company">Company</p>
        <p className="phone">number phone</p>
        <p className="site">web site</p>
      </div>
    
    <div className="card">
      <p className="name">your name</p>
      <p className="email">@gmail.com</p>
      <p className="addres">addres</p>
      <p className="company">Company</p>
      <p className="phone">number phone</p>
      <p className="site">web site</p>
    </div>
    <div className="card">
      <p className="name">your name</p>
      <p className="email">@gmail.com</p>
      <p className="addres">addres</p>
      <p className="company">Company</p>
      <p className="phone">number phone</p>
      <p className="site">web site</p>
    </div>
    <div className="card">
      <p className="name">your name</p>
      <p className="email">@gmail.com</p>
      <p className="addres">addres</p>
      <p className="company">Company</p>
      <p className="phone">number phone</p>
      <p className="site">web site</p>
    </div>
    <div className="card">
      <p className="name">your name</p>
      <p className="email">@gmail.com</p>
      <p className="addres">addres</p>
      <p className="company">Company</p>
      <p className="phone">number phone</p>
      <p className="site">web site</p>
    </div>
    <button className="btnn" onClick={handleClick}>Enter Data</button>
    </div>
  )
}

export default Home