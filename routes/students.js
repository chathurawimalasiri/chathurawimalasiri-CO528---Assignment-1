const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Create a new student record
router.post('/', async (req, res) => {
    const data = req.body;

    // Validate input
    if (!data.name || !data.age || !data.course) {
        return res.status(400).json({ error: 'Name, age, and course are required' });
    }

    try {
        const student = new Student(data);
        await student.save();
        res.status(201).json({ id: student._id, student: data });
    } catch (err) {
        res.status(500).json({ error: 'Error creating student record' });
    }
});

// Retrieve a student record by ID
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving student record' });
    }
});

// Retrieve all student records
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving students' });
    }
});

// Update an existing student record by ID
router.put('/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ error: 'Error updating student record' });
    }
});

// Delete a student record by ID
router.delete('/:id', async (req, res) => {
    try {
        const result = await Student.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Error deleting student record' });
    }
});

module.exports = router;
