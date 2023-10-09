import './Card.css'


function Card(props){
    //this is used so that anything received as a class name from outside is added to that string.
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>

}

export default Card;