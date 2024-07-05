import React from "react";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Project: {id}</h1>
      {/* Add Task Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a new task"
          className="border p-2 rounded w-full"
        />
        <button className="mt-2 p-2 bg-blue-500 text-white rounded">Add Task</button>
      </div>
      {/* Task List */}
      <ul>
        {/* Example Task */}
        <li className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span>Example Task</span>
        </li>
      </ul>
    </div>
  );
};

export default ProjectPage;