import React, { useState } from 'react';
import axios from 'axios';
import './StudentForm.css';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [age, setAge] = useState('');
  const [hobby, setHobby] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    let formErrors = {};
    if (!name) formErrors.name = 'Name is required';
    if (!course) formErrors.course = 'Course is required';
    if (!age) formErrors.age = 'Age is required';
    if (age && isNaN(age)) formErrors.age = 'Age must be a number';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    try {
      const student = { name, course, age, hobby };
      await axios.post('http://localhost:8080/students', student);
      // Clear form fields
      setName('');
      setCourse('');
      setAge('');
      setHobby('');
      setErrors({});
      setSuccessMessage('Student added successfully!');
    } catch (error) {
      console.error('Error adding student:', error);
      setErrors({ submit: 'Failed to add student. Please try again.' });
    }
  };

  const handleCloseMessage = () => {
    setSuccessMessage('');
  };

  return (
    <div className="student-form">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="course">Course</label>
        <input
          type="text"
          id="course"
          name="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        {errors.course && <p className="error">{errors.course}</p>}

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {errors.age && <p className="error">{errors.age}</p>}

        <label htmlFor="hobby">Hobby</label>
        <input
          type="text"
          id="hobby"
          name="hobby"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
        />

        {errors.submit && <p className="error">{errors.submit}</p>}

        <button type="submit">Add Student</button>
      </form>
      {successMessage && (
        <div className="success-message">
          {successMessage}
          <button className="close-button" onClick={handleCloseMessage}>×</button>
        </div>
      )}
    </div>
  );
};

export default StudentForm;
