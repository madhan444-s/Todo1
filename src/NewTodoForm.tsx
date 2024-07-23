import { useState } from "react";

export default function NewTodoForm(props: any) {

    const [newItem, setNewItem] = useState("");

    function handleSubmit(e: any) {
        e.preventDefault();
        if (newItem == "") return
        props.onSubmit(newItem);
        setNewItem("");
    }

    return <form onSubmit={handleSubmit} className="NewFormItem" autoComplete="off">
        <div className="formRow">
            <label htmlFor="item"> New Item </label>
            <input
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type="text" id="item" />
        </div>
        <button className="btn">Add Item</button>
    </form>
}