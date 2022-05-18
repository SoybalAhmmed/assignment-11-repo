import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5'>
            <h2>This is Blogs</h2>
            <table class="table">
                
  <thead>
      <h4>Difference between javascript and nodejs</h4>
    <tr>
      <th scope="col">javascript </th>
      <th scope="col">nodejs</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>It is a programming language. It works in any browser that has a proper browser engine.</td>
      <td>It's a JavaScript interpreter and environment with some valuable libraries that JavaScript programming can use separately.</td>
      
    </tr>
    <tr>
    <td>It is generally used on the client-side server.</td>
      <td>It is generally used on the server-side.</td>
     
    </tr>
    <tr>
    <td>It is designed to build network-centric applications.</td>
      <td>It's designed for data-intensive real-time applications that run on several platforms.</td>
     
    </tr>
    
  </tbody>
</table>
<table class="table">
                
  <thead>
      <h4>Differences between sql and nosql databases.</h4>
    <tr>
      <th scope="col">sql </th>
      <th scope="col">nosql</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>SQL databases are relational</td>
      <td>NoSQL databases are non-relational</td>
      
    </tr>
    <tr>
    <td>SQL databases are vertically scalable.</td>
      <td>NoSQL databases are horizontally scalable.</td>
     
    </tr>
    <tr>
    <td>SQL databases are table-based.</td>
      <td>NoSQL databases are document, key-value, graph, or wide-column stores.</td>
     
    </tr>
    
  </tbody>
</table>
<div className='p-5'>
<h2>When should you use nodejs and when should you use mongodb</h2>
  <p>1.MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.</p>
 <p>2.Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too</p>

<p>3.MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p></div>
        </div>
    );
};

export default Blogs;