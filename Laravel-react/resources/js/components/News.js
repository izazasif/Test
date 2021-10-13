import React, { useState,useEffect } from 'react';
import './News.css';
import Axios from "axios";


function News (){
    
        var [title,setTitle] = useState("");
        var [category,setCategory] = useState("");
        var [description,setDescription] = useState("");
        var [author,setAuthor] = useState("");
        var [image,setImage] = useState("");
        var [titleList,setTitleList]=useState([]);
        var [deatils,setDetailsList]=useState([]);

        var fileOnChnage =(e)=>{
            setImage(e.target.files[0]);
        };
       
        useEffect(()=>{
            Axios.get("http://localhost:8000/get/all").then((response)=>{
              setTitleList(response.data);
            });
          });

          useEffect(()=>{
            Axios.get("http://localhost:8000/api/news/").then((response)=>{
                setDetailsList(response.data);
            });
          });

        var createIteam = ()=>{
            var data = new FormData();
            data.append("title", title); 
            data.append("category", category);
            data.append("description", description); 
            data.append("author", author);
            data.append("image", image); 
            Axios.post("http://localhost:8000/api/news/add",data)
        

            .then(res => res.text()) 
            .catch(err => console.log(err));
        };
        
                // productName: productName,
                // productPrice:productPrice,
                // productDescription:productDescription,
                // productsType:productsType,
                // productsImage:productsImage,
        //    };
       

    return(
        

            <div className="product">
                    <div className="form1">
                        <div className="form input">
                                                    <label>Title</label>
                                                    <input type="text" name="title" onChange={(e)=>{
                                        setTitle(e.target.value);}}/>
                                <label for="products">Category Type </label>
                                    <select id="productsType" onChange={(e)=>{
                                        setCategory(e.target.value);}}>
                                            {
                                            titleList.map(item => (
                                                        <option
                                                        key={item.id}
                                                        value={item.id}
                                                        >
                                                        {item.title}
                                                        </option>
                                        ))}
                                    </select>
                                
                                    <br/>
                                            <label>Description</label>
                                                <input type="text" name="description" onChange={(e)=>{
                                    setDescription(e.target.value);}}/>
                                                            
                                            <label>Author</label>
                                            <input type="text" name="author" onChange={(e)=>{
                                setAuthor(e.target.value);}}/>
                            
                            <label>News Image PNG</label>
                            <input type="file" name="image" onChange={fileOnChnage}/>
                            <button onClick={createIteam} >Submit</button>
                    </div>
                    </div>
                    
                 {
                deatils.map((val) => {
             return (
                    <div className="card1" >
                       <img src={`/images/new/${val.image}`} alt="Image"/>
                        <h1>
                            Titile : {val.title}
                            </h1>
                            <h2>  <p>Description : {val.description}</p> </h2>

                        
                            </div>
                            );
                        })}
                    
                </div>
  
        

           );
    }

export default News;