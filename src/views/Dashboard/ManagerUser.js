import React from "react";
import Dashboard from "../../component/DashboardLayout";
import UsersTable from "../../component/admin/UsersTable";
const ManagerUsers =()=>{
    return(
        <Dashboard>
             <UsersTable/>
        </Dashboard>
    )
}
export default ManagerUsers;