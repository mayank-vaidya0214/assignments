import React,{useState, useEffect} from "react";
import Post from "./Post";
import jsonPlaceholder from "../Api/jsonPlaceholder";
import "./Css/post.css";
import SideMenu from "./SideMenu";

const PostLists = () => {
  const[userName, setUserName] = useState([]);
  const[userPost, setUserPost] = useState([]);
  const[singleUserID, setSingleUserID] = useState(1);
  
  useEffect(() => {
      const soloUser = async () => { 
        const response = await jsonPlaceholder.get('/users',{
          params : {
            id : singleUserID
          }
        });
        setUserName(JSON.parse(JSON.stringify(response.data))[0].name);
        post();
      }
      soloUser();
  },[]);
  
  const post = async() => {
      const response = await jsonPlaceholder.get('./posts',{
        params : {
          userId : singleUserID
        }
      });
      setUserPost(JSON.parse(JSON.stringify(response.data)));
    }

  const postList = userPost && userPost.map(singlePost => {
      return <Post key = {singlePost.id} singlePost = {singlePost} currentUsername = {userName} />
   });
  return (
    <div>
      {postList}
      <div>
        <button className="ui primary button load-more" >LoadMore
      </button>
    </div>
    </div>
  );
      
};

export default PostLists;