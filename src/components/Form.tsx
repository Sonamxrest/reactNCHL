import axios from "axios";
import { useState } from "react";
import { Employees } from "./Person";


const Form = (props: any) => {
    console.log(props);
    const [person, setPerson] = useState(props?.person);
    const [employee, setEmployee] = useState(props?.employee);

    const onEdit = (e: any) => {
        // setHobbi(e);
        console.log('button in clicked and event is binded', e);
        axios.get('https://dummy.restapiexample.com/api/v1/employees').then((res) => {
            console.log('this is response', res);
            setEmployee(res?.data?.data);
        }).catch(err => {
            alert()
        })
    }

    return (
        <div>
            {person?.name ? person?.name : 'This person has no name'}

            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employee?.map((employee: any, i: number) =>
                        <tr key={employee?.id}>
                            <td>{employee?.id}</td>
                            <td>{employee?.employee_name}</td>
                            <td>{employee?.employee_age}</td>
                            <td>{employee?.employee_salary}</td>
                            <td><button onClick={(e) => onEdit(employee)}> Edit</button></td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    );

}
export default Form;