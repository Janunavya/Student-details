const Student = require('../model/studentModel');

const studentCtrl = {
    read:async (req,res) => {
        try {
            // res.json('read is working')
            const allStudents = await Student.find();
            res.status(200).json(allStudents)

        } catch (err) {
            res.status(500).json({msg:err.message})
        }
    },
    create:async (req,res) => {
        const student = req.body;
        const newStudent = new Student(student);
        try {
            // res.json('create is working')
            await newStudent.save();
            res.status(201).json(newStudent)
        } catch (err) {
            res.status(500).json({msg:err.message})
        }
    },
    edit:async(req,res) =>{
        try {
            let id = await req.params.id;
            let student = await Student.findById({ _id: id });
            res.status(200).json(student)
        } catch (err) {
            res.status(500).json({msg:err.message})
        }
    },
    update: async(req,res) => {
        try {
            // res.json('update is working')
            let id = req.params.id;
            let data = await req.body;
            // console.log("updated data =", data);
            const { name, usn, batch,semester,branch } = data;
            await Student.findByIdAndUpdate({ _id: id },{name, usn, batch,semester,branch});
            console.log('Student update successfully');
            // res.redirect('/')

        } catch (err) {
            res.status(500).json({msg:err.message})
        }
    },
    delete:async(req,res) => {
        try {
            // res.json('delete is working')
            let id = await req.params.id;
            await Student.findByIdAndDelete({_id:id});
            
        } catch (err) {
            res.status(500).json({msg:err.message})
        }
    }
};

module.exports = studentCtrl;