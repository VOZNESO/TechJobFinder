import React, { useEffect, useState } from 'react';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Footer from './common/Footer';
import { DataTable } from "simple-datatables";
import { Link } from 'react-router-dom';
import UserService from '../../service/UserService'

function UserManage(props) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        // Fetch users data when the component mounts
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        try {

            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await UserService.getAllUser(token);
            //   console.log(response);
            setUsers(response.ourUsersList); // Assuming the list of users is under the key 'ourUsersList'
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleUpdateUser = (userId) => {
        // Navigate to update user page using programmatic navigation
        window.location.href = `/update-user/${userId}`;
    };


    const deleteUser = async (userId) => {
        try {
            // Prompt for confirmation before deleting the user
            const confirmDelete = window.confirm('Are you sure you want to delete this user?');

            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            if (confirmDelete) {
                await UserService.deleteUser(userId, token);
                // After deleting the user, fetch the updated list of users
                fetchUsers();
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    useEffect(() => {
        const dataTable = new DataTable(".datatable");
        return () => {
            dataTable.destroy();
        };
    }, []);


    return (
        <div>
            <Header />
            <Sidebar />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>User - Management</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                            <li className="breadcrumb-item active">User</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    {/* Table with stripped rows */}
                                    <table className="datatable">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>
                                                    <b>Name</b>
                                                </th>
                                                <th>Email.</th>
                                                <th>City</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map(user => (
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.city}</td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>|
                                                        <button className='btn btn-primary' onClick={() => handleUpdateUser(user.id)}>Update</button>
                                                        <button className='btn btn-warning' >Ban</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {/* End Table with stripped rows */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>{/* End #main */}
            <Footer />

        </div>
    );
}

export default UserManage;
