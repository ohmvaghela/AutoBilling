import React, { createContext, useContext } from "react";

export const UserStatContext = createContext({
    stat:undefined,
    setStat:undefined,
});

export const UserDataContext = createContext({
    userData:undefined,
    setUserData:undefined,
})

export const CountContext = createContext({
    count:undefined,
    setCount:undefined,
})

export function useCountContext(){
    const counterContext = useContext(CountContext);
    if(counterContext.count === undefined){
        throw new Error("count undefined");
    }
    else if(counterContext.setCount === undefined){
        throw new Error("set Count undefined");
    }
    else{
        return counterContext;
    }
}

export function useUserStatContext() {
    const statContext = useContext(UserStatContext);

    if(statContext.stat === undefined){
        throw new Error('stat undefined');
    }
    else if(statContext.setStat === undefined){
        throw new Error('setStat undefined');
    }
    else{
        return statContext;
    }
}

export function useUserDataContext(){
    const userContext = useContext(UserDataContext);

    if(userContext.userData === undefined){
        throw new Error('userData not defined');
    }
    if(userContext.setUserData === undefined){
        throw new Error('setUserData not defined');
    }
    else{
        return userContext;
    }
}