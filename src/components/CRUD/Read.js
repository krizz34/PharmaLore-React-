import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Delete from "./Card";
import checkAuth from "../Authenticate/CheckAuth";

function ListPosts() {
  var user = useSelector(store => store.auth.user);
  var [posts, setPosts] = useState([]);

  function fetchPosts() {
    if (user && user.token) {
      axios
        .get('https://medicalstore.mashupstack.com/api/medicine', {
          headers: { 'Authorization': "bearer " + user.token }
        })
        .then(response => {
          setPosts(response.data);
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    } else {
      console.error('User or user token is null');
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [user]);

  return (
    <div className="customBg">
      <Navbar />
      <div className="container w-50 bg-white rounded mt-5 p-3">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center my-4" style={{ fontWeight: 'bold', color: '#531251' }}>Medicine List</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2">
            <Link to="/createAPI" className="btn customBtnClrAlt mb-2">Add Medicine</Link>
            {posts.map(post => <Delete key={post.id} post={post} refresh={fetchPosts} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPosts;
