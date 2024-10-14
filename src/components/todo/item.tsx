export interface Item {
    item: ItemPrototype
    checkItem: () => void
    unCheckItem: () => void
}
export interface ItemPrototype {
    id: string
    name: string
    isChecked: boolean
}

const Item = (props: Item) => {
    return <li>
        <label>
            <input type="checkbox" checked={props.item.isChecked} onChange={(e) => {
                e.target.checked ? props.checkItem() : props.unCheckItem()
            }} />
            <span>{props.item.name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>Delete</button>
    </li>
}

export default Item;