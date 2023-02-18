import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";

import { AuthContext } from './/AuthContext.js';

const Home = () => {
    const client = axios.create({
        baseURL: "https://fakestoreapi.com/products"
    });

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client.get('?_limit=10').then((response) => {
            setPosts(response.data);
        });
    }, []);


    const listItems = posts.map((post) =>
        
            <div className="col-sm-4">
                <div className="post-card" key={post.id}>
                    <h2 className="post-title">{post.title}</h2>
                    <img src={post.image} alt="BigCo Inc. logo" />
                </div>
            </div>
    );


    const { logout } = useContext(AuthContext);
    const onLogout = (e) => {
        e.preventDefault();
        logout();
    }

    return (
        <>
            <div className="row">

                <div className="col-sm-8">
                    <h1>
                        Hello Admin
                    </h1>
                </div>

                <div className="col-sm-4">
                    <h1>
                        <a href="#" onClick={onLogout}>Logout</a>
                    </h1>
                </div>
            </div>


            <h2>All Posts 📫</h2>
            <div className="row">
            {listItems}
            </div>


        </>
    );
}

export default Home;