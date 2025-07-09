import React ,{useState} from 'react'
export function Cart(){
    const [cart_items,setcart_items]=useState(
        [
        {
            image:'https://satyanarayanaakula26.github.io/edualtech_frontend/assets/dsa.jpg',
            title:'Data Structures and Algorithms',
            faculty:'names',
            product_id:1,
        },  
        {
            image:'https://satyanarayanaakula26.github.io/edualtech_frontend/assets/dsa.jpg',
            title:'Data Structures and Algorithms',
            faculty:'names',
            product_id:1,
        },

    ]);
        // function additem(product_id){
        //     setcart_items(previtems=>
        //         previtems.map(item => item.product_id===product_id ?
        //             {...item, quantity:item.quantity+1}:item
        //         )
        //     );
        // }
        // function removeitem(product_id){
        //     setcart_items(previtems=>
        //         previtems.map(item=>{
        //             if(item.product_id===product_id){
        //                 if(item.quantity===0){alert("no items present");
        //                         return item;
        //                 }
        //                 return {...item,quantity:item.quantity-1};
        //             }
        //             return item;
        //         }
        //                 )
        //     );
        //         }
        
  return(
    <section className='cart-page'>
        <h1>Welcome to the Cart</h1>
        <div className='cart-objects'>
           {
            cart_items.map((item)=>{
                return(
                     <div className='cart-object'>
                <div className='cart-object-left'>
                    <img src={item.image} alt="cart-item"/>
                </div>
                    <div className='cart-object-right'>
                    <div className='cart-object-info'>
                    <h5>{item.title}</h5>
                    <p>will teach by {item.faculty}</p>
                    </div>
                    <button className='btn btn-success'>check out the course here</button>
                    </div>
            </div>
                );
            })
           }
        </div>
    </section>
  );
}