import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './StudentDetail.css';

const StudentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  const fetchStudent = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/students/${id}`);
      setStudent(response.data);
    } catch (error) {
      console.error('Error fetching student:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchStudent();
  }, [fetchStudent]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/students/${id}`);
      navigate('/students');
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleBack = () => {
    navigate('/students');
  };

  if (!student) return <div>Loading...</div>;

  return (
    <div className="student-detail">
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>Hobby: {student.hobby}</p>
      <div className="buttons">
        <button onClick={handleDelete}>Delete Student</button>
        <button onClick={handleBack} className="back-button">Back to Students</button>
      </div>
    </div>
  );
};

export default StudentDetail;
