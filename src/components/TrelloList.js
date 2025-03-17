import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Draggable, Droppable } from "react-beautiful-dnd";
// ant core
import { Card, Tooltip, Button, Popconfirm } from "antd";
// ant icons
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
// components
import SimpleCard from "./SimpleCard";
function TrelloList({ index, listId, title, cards, setOpen }) {
    return (_jsx(Draggable, { draggableId: String(listId), index: index, children: (provided) => (_jsx("div", { ref: provided.innerRef, ...provided.draggableProps, ...provided.dragHandleProps, className: "todoList", children: _jsx(Droppable, { droppableId: String(listId), type: "CARD", children: (provided) => (_jsxs(Card, { title: title, className: "cardList", extra: _jsxs(_Fragment, { children: [_jsx(Tooltip, { title: "Add a card", children: _jsx(Button, { shape: "circle", icon: _jsx(PlusOutlined, {}), onClick: () => setOpen(true) }) }), _jsx(Popconfirm, { title: "Delete the list", description: "Are you sure to delete this list?", onConfirm: () => { }, onCancel: () => { }, okText: "Yes", cancelText: "No", className: "ml-10", children: _jsx(Tooltip, { title: "Delete this list", children: _jsx(Button, { shape: "circle", icon: _jsx(DeleteOutlined, {}) }) }) })] }), children: [_jsx("div", { ref: provided.innerRef, ...provided.droppableProps, className: "trelloList_content", children: cards.map((card, cardIndex) => (_jsx(SimpleCard, { index: cardIndex, card: card }, card.id))) }), provided.placeholder] })) }) })) }));
}
export default TrelloList;
