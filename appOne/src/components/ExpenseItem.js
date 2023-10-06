import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className= 'expense-item'>
            <div > January 11th 2023</div>
            <div className='expense-item__description'>
                <h2>Lease Deposit</h2>
                <div className='expense-item__price'>$7,000</div>
            </div>
        </div>
    )
    
    
}

export default ExpenseItem;