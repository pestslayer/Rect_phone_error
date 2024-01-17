interface ButtonProps {
    children: React.ReactNode
    className?: string;
    onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function button ( props: ButtonProps ) {
    return (
        <button onClick={ props.onclick } className={ props.className } >
            {props.children}
        </button>
    )
}