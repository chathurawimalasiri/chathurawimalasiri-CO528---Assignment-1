// src/components/StudentList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './StudentList.css';

// SearchBar component to handle search input
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name or ID"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get('http://localhost:8080/students');
      setStudents(response.data);
      setFilteredStudents(response.data); // Initialize filteredStudents with all students
    };
    fetchStudents();
  }, []);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const results = students.filter(student =>
      student.name.toLowerCase().includes(lowercasedQuery) ||
      student._id.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredStudents(results);
  };

  return (
    <div className="student-list">
      <h2>Student List</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="student-cards">
        {filteredStudents.length > 0 ? (
          filteredStudents.map(student => (
            <div key={student._id} className="student-card">
              <Link to={`/students/${student._id}`} className="student-link">
                <h3 className="student-name">{student.name}</h3>
                <p className="student-course">{student.course}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No students found</p>
        )}
      </div>
    </div>
  );
};

export default StudentList;
