import React, { createContext, useReducer } from 'react';
import reducer from './appReducer';


// Initial State
// const [block, setBlock] = useState([]);
const initiallState = null;
 

export const SackContext = createContext();
export const DispatchContext = createContext();

export const SackProvider = ({ children }) => {
    const [sack, dispatch] = useReducer(reducer, initiallState);

    return (
        <SackContext.Provider value={sack}>
        <DispatchContext.Provider value={dispatch}>
            {children}
        </DispatchContext.Provider> 
        </SackContext.Provider>
    );
};