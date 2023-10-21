import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Dnavbar";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";
import { createContext, useContext, useState } from 'react';
import Form from "./Form";
import DataContext from './context';
import DisplayOrder from "./DisplayOrder";

const Dashboard = ({children}) => {

    const [load, setLoad] = useState(0);
    const dark = "dark_val";
    const renderContent = () => {
        switch (load) {
            case "bill":
                return <div className="text-center"><DisplayOrder/></div>;
            case "setting":
                return <div className="text-center">Setting</div>;
            case "NewBill":
                return <Form/>;
            default:
                return <div className="text-center">Unknown load state {load}</div>;
        }
    };

    return (


        <DataContext.Provider value={{load,setLoad}}>
            <div className="dashboard">
                <h1> hello world</h1>

                <div className="left-component">
                    <Sidebar />
                </div>
                <div className="right-component">
                    <div className="top-right-component">
                        <Navbar />

                        {/* <button className="mr-5" onClick={() => setLoad(1)}>set1</button>
                        <button className="mr-5" onClick={() => setLoad(2)}>set2</button>
                        <button className="mr-5" onClick={() => setLoad(3)}>set3</button>
                        <button className="mr-5" onClick={() => setLoad(0)}>set0</button> */}
                    </div>
                    <div className="bottom-right-component"></div>
                </div>
                <div className="content">
                    <hr />
                    {renderContent()}
                </div>
            </div>
        </DataContext.Provider>

    );
};

export default Dashboard;
