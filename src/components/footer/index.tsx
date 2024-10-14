import { ItemPrototype } from "../todo/item";

interface FooterPrototype {
    deleteAll: () => void,
    deleteAction: () => void,
    total: number,
    finished: number
}

const Footer = (props: FooterPrototype) => {
    return <div className="todo-footer">
        <label>
            <input type="checkbox" onClick={props.deleteAll} />
        </label>
        <span>
            <span>Finished {props.finished}</span> / total {props.total}
        </span>
        <button className="btn btn-danger" onClick={props.deleteAction}>Delete Finished Tasks</button>
    </div>
}

export default Footer;