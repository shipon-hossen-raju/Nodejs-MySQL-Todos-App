import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/todos`)
      .then((res) => console.log("res -> ", res))
      .catch((err) => console.log("error -> ", err));
  });
  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <h2> Student List </h2>
          <div>
            <Link to="create" className="btn btn-success">
              Create +
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos?.map((student, idx) => (
                <tr key={idx}>
                  <td>{student?.ID}</td>
                  <td>{student?.Name}</td>
                  <td>{student?.Email}</td>
                  <td>
                    <button className="btn btn-sm btn-info">Read</button>
                    <button className="btn btn-sm btn-primary mx-2">
                      Read
                    </button>
                    <button className="btn btn-sm btn-danger">Read</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
