import Item, { ItemPrototype } from "./item";

interface TodoPrototype {
    items: ItemPrototype[],
    checkItem: (item: ItemPrototype) => void
    unCheckItem: (id: string) => void
}

const Todo = (props: TodoPrototype) => {
    return <ul className="todo-main">
        {
            props.items.map((i, inx) => <Item key={inx} item={i} checkItem={() => props.checkItem(i)} unCheckItem={() => props.unCheckItem(i.id)}></Item>)
        }
    </ul>
}

export default Todo;