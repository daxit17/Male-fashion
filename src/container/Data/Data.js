import React from 'react';
import List from '../../component/List/List'

function Data(props) {
    const orgData = [
        {        
        id: 101,        
        name: "Table",        
        quantity: 5000,        
        price: 2500,        
        warrenty: 1        
        },        
        {        
        id: 102,        
        name:"ALIQUAM LOBORTIS",        
        quantity:  1000,        
        price: 3000,        
        warrenty: 2021        
        },        
        {        
        id: 103,        
        name:" CONDIMENTUM POSUERE",        
        quantity: 5000,        
        price: 4000,        
        warrenty: 3        
        },        
        {        
        id: 104,        
        name: " DONEC EU LIBERO AC",        
        quantity:  200,        
        price: 8000,
        warrenty: 1        
        },        
        {        
        id: 105,        
        name:" EPICURI PER LOBORTIS",        
        quantity:  2500,        
        price: 4500,        
        warrenty: 2        
        },
        
        ]

       const clothdata = (id) => {
            alert(id)
        }
        
    return (
        <div>
            <List
            data={orgData}
            id={clothdata}
            />
        </div>
    );
}

export default Data;