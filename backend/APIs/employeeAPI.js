import exp from 'express';
import { EmployeeModel } from '../Models/EmployeeModel.js';


export const empApp = exp.Router()

//creating employee
empApp.post("/employee", async (req, res, next) => {
  try {
    //get new employee object from req
    const newEmployee = req.body;
    //create new employee document 
    const newEmployeeDocument = new EmployeeModel(newEmployee)
    //save
    await newEmployeeDocument.save()
    //send res 
    res.status(201).json({ message: "employee created" });
  } catch (err) {
    next(err);
  }
})


//reading all employees
empApp.get('/employees', async (req, res, next) => {
  try {
    //read all employees
    let employeeList = await EmployeeModel.find();
    //send res
    res.status(200).json({ message: "employees", payLoad: employeeList })
  } catch (err) {
    next(err);
  }
})

//update the employee
empApp.put('/employee/:id', async (req, res, next) => {
  try {
    //get employee by id
    const empID = req.params.id;
    const modifiedEmployee = req.body;
    //update employee
    const updatedEmployee = await EmployeeModel.findByIdAndUpdate(empID, { $set: { ...modifiedEmployee } }, { new: true })
    //if no employee found
    if (!updatedEmployee) {
      return res.status(400).json({ message: "employee not found" })
    }
    //send res
    res.status(200).json({ message: "employee Updated.", payLoad: updatedEmployee })
  } catch (err) {
    next(err);
  }
})

//delete employee 
empApp.delete('/employee/:id', async (req, res, next) => {
  try {
    //get deleted id from req
    const deleteId = req.params.id;
    //find by id and delete
    const deletedEmployee = await EmployeeModel.findByIdAndDelete(deleteId);
    //send res
    res.status(200).json({ message: "employee deleted.", payLoad: deletedEmployee });
  } catch (err) {
    next(err);
  }
})

