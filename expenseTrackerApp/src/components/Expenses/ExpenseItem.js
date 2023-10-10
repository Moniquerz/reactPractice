import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = ({date, title, amount}) => {
   let title = title;

   const clickedHandler = () => {
        title = 'Updated Title'
        console.log(title)
   }

    return (
        <Card className= 'expense-item'>
           <ExpenseDate date = {date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick = {clickedHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;