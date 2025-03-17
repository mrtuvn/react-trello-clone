import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-ignore
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
// ant core
import { Avatar, Button, Modal, Input, Form, Select } from "antd";
// ant icons
import { PlusOutlined } from "@ant-design/icons";
// components
import TrelloList from "./components/TrelloList";
// mock data
import { useAppContext } from "./context/AppContext";
const { TextArea } = Input;
const { Option } = Select;
const options = [];
for (let i = 10; i < 36; i++) {
    options.push({
        label: i.toString(36) + i,
        value: i.toString(36) + i,
    });
}
function App() {
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const { trello, onDragEndList, onDragEndCard } = useAppContext();
    const handleSubmit = (values) => {
        console.log("values: ", values);
        setConfirmLoading(true);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    // using useCallback is optional
    const onDragEnd = (result) => {
        if (!result.destination)
            return;
        if (result.type === "LIST") {
            onDragEndList(result);
        }
        if (result.type === "CARD") {
            onDragEndCard(result);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("header", { children: _jsxs("div", { className: "header__container", children: [_jsx("div", { className: "header__logo" }), _jsx("div", { className: "header__right", children: _jsx("div", { className: "header__avatar", children: _jsx("img", { src: "/avatar.png", alt: "Avatar" }) }) })] }) }), _jsx("main", { children: _jsx("div", { className: "container", children: _jsx(DragDropContext, { onDragEnd: onDragEnd, children: _jsx(Droppable, { droppableId: "all-lists", direction: "horizontal", type: "LIST", children: (provided, snapshot) => (_jsx("div", { ref: provided.innerRef, style: {
                                // backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
                                }, className: "listContainer", ...provided.droppableProps, children: _jsxs(_Fragment, { children: [trello.columns.map((listId, listIndex) => {
                                            const listItem = trello.lists[listId];
                                            const cards = listItem.cards.map((cardId) => trello.cards[cardId]);
                                            return (_jsx(TrelloList, { index: listIndex, title: listItem.title, cards: cards, listId: listItem.id, setOpen: setOpen }, listItem.id));
                                        }), provided.placeholder, _jsxs(Button, { type: "text", children: [_jsx(PlusOutlined, {}), " Add another list"] })] }) })) }) }) }) }), _jsxs(Modal, { title: "Add Card", open: open, onOk: form.submit, onCancel: handleCancel, confirmLoading: confirmLoading, children: [_jsx("br", {}), _jsxs(Form, { name: "basic", form: form, initialValues: { status: "new" }, onFinish: handleSubmit, autoComplete: "off", labelCol: { flex: "110px" }, labelAlign: "left", wrapperCol: { flex: 1 }, children: [_jsx(Form.Item, { label: "Title", name: "title", rules: [{ required: true, message: "Please input your title!" }], children: _jsx(Input, {}) }), _jsx(Form.Item, { label: "Description", name: "description", rules: [
                                    { required: true, message: "Please input your description!" },
                                ], children: _jsx(TextArea, { rows: 4 }) }), _jsx(Form.Item, { label: "Member", name: "member", rules: [
                                    { required: true, message: "Please input your description!" },
                                ], children: _jsxs(Select, { mode: "multiple", allowClear: true, style: { width: "100%" }, placeholder: "Please select", optionLabelProp: "label", onChange: handleChange, children: [_jsx(Option, { value: "tony123", label: "tony 123", children: _jsxs("div", { className: "selectField", children: [_jsx(Avatar, { src: "https://picsum.photos/id/237/200/300" }), _jsx("span", { children: "Tony Nguyen" })] }) }), _jsx(Option, { value: "phuong123", label: "phuong 123", children: _jsxs("div", { className: "selectField", children: [_jsx(Avatar, { src: "https://picsum.photos/id/237/200/300" }), _jsx("span", { children: "Phuong Nguyen" })] }) })] }) }), _jsx(Form.Item, { label: "Status", name: "status", children: _jsx(Select, { style: { width: 120 }, onChange: handleChange, options: [
                                        {
                                            value: "new",
                                            label: "New",
                                        },
                                        {
                                            value: "inprocess",
                                            label: "In process",
                                        },
                                        {
                                            value: "done",
                                            label: "Done",
                                        },
                                    ] }) })] })] })] }));
}
export default App;
