export function Button({onClick, label}) {
    return (
        <button 
            className="btn btn-primary"
            onClick={onClick}>
            {label}
        </button>
    )
}