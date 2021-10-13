import React, { useState, useEffect  } from 'react';
import Axios from "axios";
import './Category.css';



function Category () {
   
var [title,setTitle] = useState("");
  var [description,setdescription] = useState("");
  var [titleList,setTitleList]=useState([]);
  // var [newDescription,setNewDescription]=useState("");
  useEffect(()=>{
    Axios.get("http://localhost:8000/get/all").then((response)=>{
      setTitleList(response.data);
    });
  });
  var submitCategory = ()=>{
   Axios.post("http://localhost:8000/api/insert",{ 
     title: title,
     description:description,
   });
  //  then(()=> {
  //    alert("successfull")
  //  });
  setTitleList([...titleList,{ title: title,description: description},]);
  };

  var updateCategory =(id)=>{
    Axios.put("http://localhost:8000/api/update/"+id,{
      
      description:description,
    });
 
    setdescription("")
  };
  var deleteCategory =(id)=>{
    Axios.delete('http://localhost:8000/api/delete/'+id);

  };

    return(
        
  <div className="Dept">
    <div className="form">
      <label>Title</label>
      <input type="text" name="title" onChange={(e)=>{
        setTitle(e.target.value);
      }}/>
      <label>Description</label>
      <input type="text" name="description" onChange={(e) =>{
        setdescription(e.target.value);
      } }/>
      <button onClick={submitCategory}>Submit</button>
    </div>

 <div className="carBAck">
 {
          titleList.map((val) => {
            return (
              <div className="card" >
              <h1>
                Titile : {val.title}
                </h1>
                <p>Description : {val.description}</p>

                <button onClick={()=>{deleteCategory(val.id)}}>Delete</button>
                <input type="text" placeholder="Type here to update" id="updateInput" onChange={(e)=>{setdescription(e.target.value)}}/>
                <button onClick={()=> {updateCategory(val.id)}}>update</button>
                </div>
            );
          })}
 </div>
   </div>

    );

}



export default Category;