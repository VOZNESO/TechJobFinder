import React, { useEffect } from 'react';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Footer from './common/Footer';
import { DataTable } from "simple-datatables";
import { Link } from 'react-router-dom';

function UserManage(props) {
    useEffect(() => {
        const dataTable = new DataTable(".datatable");
        return () => {
            dataTable.destroy();
        };
    }, []);

    return (
        <div>
            <Header/>
            <Sidebar/>
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
                                                <th>
                                                    <b>Name</b>
                                                </th>
                                                <th>Ext.</th>
                                                <th>City</th>
                                                <th data-type="date" data-format="YYYY/DD/MM">Start Date</th>
                                                <th>Completion</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Unity Pugh</td>
                                                <td>9958</td>
                                                <td>Curicó</td>
                                                <td>2005/02/11</td>
                                                <td>37%</td>
                                                <td><button className="btn btn-success">Update</button>|<button className="btn btn-danger">Ban</button></td>
                                            </tr>
                                            <tr>
                                                <td>Unity Pugh</td>
                                                <td>9958</td>
                                                <td>Curicó</td>
                                                <td>2005/02/11</td>
                                                <td>37%</td>
                                                <td><button className="btn btn-success">Update</button>|<button className="btn btn-danger">Ban</button></td>
                                            </tr>
                                            <tr>
                                                <td>Unity Pugh</td>
                                                <td>9958</td>
                                                <td>Curicó</td>
                                                <td>2005/02/11</td>
                                                <td>37%</td>
                                                <td><button className="btn btn-success">Update</button>|<button className="btn btn-danger">Ban</button></td>
                                            </tr>
                                            <tr>
                                                <td>Unity Pugh</td>
                                                <td>9958</td>
                                                <td>Curicó</td>
                                                <td>2005/02/11</td>
                                                <td>37%</td>
                                                <td><button className="btn btn-success">Update</button>|<button className="btn btn-danger">Ban</button></td>
                                            </tr>
                                            <tr>
                                                <td>Unity Pugh</td>
                                                <td>9958</td>
                                                <td>Curicó</td>
                                                <td>2005/02/11</td>
                                                <td>37%</td>
                                                <td><button className="btn btn-success">Update</button>|<button className="btn btn-danger">Ban</button></td>
                                            </tr>
                                            <tr>
                                                <td>Unity Pugh</td>
                                                <td>9958</td>
                                                <td>Curicó</td>
                                                <td>2005/02/11</td>
                                                <td>37%</td>
                                                <td><button className="btn btn-success">Update</button>|<button className="btn btn-danger">Ban</button></td>
                                            </tr>
                                            <tr>
                                                <td>Unity Pugh</td>
                                                <td>9958</td>
                                                <td>Curicó</td>
                                                <td>2005/02/11</td>
                                                <td>37%</td>
                                                <td><button className="btn btn-success">Update</button>|<button className="btn btn-danger">Ban</button></td>
                                            </tr>
                                            <tr>
                                                <td>Unity Pugh</td>
                                                <td>9958</td>
                                                <td>Curicó</td>
                                                <td>2005/02/11</td>
                                                <td>37%</td>
                                                <td><button className="btn btn-success">Update</button>|<button className="btn btn-danger">Ban</button></td>
                                            </tr>
                                            <tr>
                                                <td>Unity Pugh</td>
                                                <td>9958</td>
                                                <td>Curicó</td>
                                                <td>2005/02/11</td>
                                                <td>37%</td>
                                                <td><button className="btn btn-success">Update</button>|<button className="btn btn-danger">Ban</button></td>
                                            </tr>
                                            <tr>
                                                <td>Unity Pugh</td>
                                                <td>9958</td>
                                                <td>Curicó</td>
                                                <td>2005/02/11</td>
                                                <td>37%</td>
                                                <td><button className="btn btn-success">Update</button>|<button className="btn btn-danger">Ban</button></td>
                                            </tr>
                                            <tr>
                                                <td>Unity Pugh</td>
                                                <td>9958</td>
                                                <td>Curicó</td>
                                                <td>2005/02/11</td>
                                                <td>33%</td>
                                                <td><button className="btn btn-success">Update</button>|<button className="btn btn-danger">Ban</button></td>
                                            </tr>
                                           
                                            
                                        </tbody>
                                    </table>
                                    {/* End Table with stripped rows */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>{/* End #main */}
            <Footer/>

        </div>
    );
}

export default UserManage;
