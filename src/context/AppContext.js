import { jsx as _jsx } from "react/jsx-runtime";
// @ts-ignore
import React from "react";
// mock data
import { data } from "../mocks/data";
export const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
    const [trello, setTrello] = React.useState(data);
    function onDragEndList(result) {
        console.log("onDragEndList: ", result, trello);
        const columns = [...trello.columns];
        const listSpliced = columns.splice(result.source.index, 1); // get item spliced
        columns.splice(result.destination.index, 0, listSpliced); // add item spliced into column
        setTrello((prevState) => ({
            ...prevState,
            columns,
        }));
    }
    function onDragEndCard(result) {
        console.log("onDragEndCard: ", result);
    }
    return (_jsx(AppContext.Provider, { value: {
            trello,
            onDragEndList,
            onDragEndCard,
        }, children: children }));
};
export const useAppContext = () => React.useContext(AppContext);
