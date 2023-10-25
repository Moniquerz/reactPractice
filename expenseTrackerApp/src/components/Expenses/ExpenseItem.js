import React, {useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = ({date, title, amount}) => {
    
    const [itemTitle, setTitle] = useState(title);


   const clickedHandler = () => {
        setTitle("updated title");
        console.log(itemTitle)
   }

    return (
        <Card className= 'expense-item'>
           <ExpenseDate date = {date}/>
            <div className='expense-item__description'>
                <h2>{itemTitle}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick = {clickedHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;