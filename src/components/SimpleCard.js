import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-ignore
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card, Avatar, Tooltip, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined, AntDesignOutlined, UserOutlined, FileTextOutlined, } from "@ant-design/icons";
const { Meta } = Card;
function SimpleCard({ card, index }) {
    return (_jsx(Draggable, { draggableId: card.id, index: index, children: (provided) => (_jsx("div", { ref: provided.innerRef, ...provided.draggableProps, ...provided.dragHandleProps, className: "card", children: _jsx(Card, { className: "cardItem", cover: _jsx("img", { alt: "example", src: "https://picsum.photos/265/160" }), actions: [
                    _jsx(Tooltip, { title: "View", children: _jsx(FileTextOutlined, {}, "view") }),
                    _jsx(Tooltip, { title: "Edit", children: _jsx(EditOutlined, {}, "edit") }),
                    _jsx(Popconfirm, { title: "Delete the card", description: "Are you sure to delete this card?", onConfirm: () => { }, onCancel: () => { }, okText: "Yes", cancelText: "No", className: "ml-10", children: _jsx(Tooltip, { title: "Delete", children: _jsx(DeleteOutlined, {}, "ellipsis") }) }),
                ], children: _jsx(Meta, { title: card.title, description: _jsxs(_Fragment, { children: [_jsx("div", { children: card.description }), _jsxs(Avatar.Group, { max: {
                                    count: 2,
                                    style: {
                                        color: "#f56a00",
                                        backgroundColor: "#fde3cf",
                                        cursor: "pointer",
                                    },
                                }, size: "large", className: "avatarGroup", children: [card.member.map((member) => (_jsxs(React.Fragment, { children: [_jsx(Avatar, { src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" }), _jsx(Avatar, { style: { backgroundColor: "#f56a00" }, children: "K" })] }, member.id))), _jsx(Tooltip, { title: "Ant User", placement: "top", children: _jsx(Avatar, { style: { backgroundColor: "#87d068" }, icon: _jsx(UserOutlined, {}) }) }), _jsx(Avatar, { style: { backgroundColor: "#1890ff" }, icon: _jsx(AntDesignOutlined, {}) })] })] }) }) }) })) }));
}
export default SimpleCard;
