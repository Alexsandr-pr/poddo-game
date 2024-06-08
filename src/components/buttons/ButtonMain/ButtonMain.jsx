
import "./button-main.scss"
const ButtonMain = ({text}) => {
    return (
        
        <button className="button-main">{text}
        <div className="layer">
            <div className="blob hover" style={{ top: '-25%', left: '25%' }}></div>
            <div className="blob hover" style={{ top: '-25%', left: '110%' }}></div>
            <div className="blob hover" style={{ top: '125%', left: '90%' }}></div>
            <div className="blob hover" style={{ top: '125%', left: '50%' }}></div>
            <div className="blob hover" style={{ top: '125%', left: '-25%' }}></div>
        </div>
        <div className="layer">
            <div className="blob active" style={{ top: '-25%', left: '50%' }}></div>
            <div className="blob active" style={{ top: '0%', left: '110%' }}></div>
            <div className="blob active" style={{ top: '125%', left: '75%' }}></div>
            <div className="blob active" style={{ top: '125%', left: '10%' }}></div>
            <div className="blob active" style={{ top: '50%', left: '-25%' }}></div>
        </div>
        <div className="text">{text}</div>
        <svg style={{ position: 'absolute', top: '0' }}>
            <defs>
                <filter id="blob">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
                    <feComposite in="SourceGraphic" in2="blob" operator="atop"></feComposite>
                </filter>
            </defs>
        </svg>
    </button>
    )
}

export default ButtonMain