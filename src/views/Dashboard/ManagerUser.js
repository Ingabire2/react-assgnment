import React ,{useState}  from "react";
import Dashboard from "../../component/DashboardLayout";
import UsersTable from "../../component/admin/UsersTable";
import users from "../../assets/data/users.json";
import { Drawer } from "antd";
import SingleUser from "../../component/admin/ViewSingleUser";
const ManagerUsers =()=>{
    const [showDrawer, setShowDrawer] = useState(false);
    return(
        <>
        <Dashboard menuSelectorIndex="3">
             <UsersTable/>
        </Dashboard>
         
       </>
    )
}
export default ManagerUsers;