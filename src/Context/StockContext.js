import React, {useState, createContext, useEffect} from 'react';
import Items from './StockData'

export const StockContext = createContext();

export const StockProvider = (props) => {

    const [itemData, setItemData] = useState({
        items: Items,
        sortedItems: [...Items],
        popular: [Items[0], Items[1], Items[2]],
        type: [],
        flavour: [],
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        shoppingCart: []
    })

    useEffect(() => {
       

        const sortItems = () => {
            let sorting = [...itemData.items];
            let {type, flavour, price} = itemData;
    
            if(type.length > 0) {
                sorting = sorting.filter((item) => {       
                    for(let i = 0; i < type.length; i++){
                        if(item.type === type[i]) {
                            return true
                        }
                    }
                    return false
                });
            }
            
    
            if(flavour.length > 0){
                sorting = sorting.filter((item) => {
                    for(let i = 0; i < flavour.length; i++){
                    if(item.flavour === flavour[i]){
                        return true
                    }
                    }
                    return false
                })
            }
    
            if(price > 0) {
                sorting = sorting.filter(item => item.price <= price);
            }
    
    
            setItemData({
                ...itemData,
                sortedItems: sorting
            })
            
        }

        sortItems();


    }, [itemData.type, itemData.flavour, itemData.price])

    useEffect(() => {
        let items = itemData.items;
        let maxPrice = Math.max(...items.map(item => item.price));

        setItemData({
            ...itemData,
            maxPrice
        })
    }, [])



    const handleChecked = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name
        const checked = target.checked;
        let newTypes = [...itemData[name]];

        if(checked) {
            newTypes.push(value);
            newTypes = [...new Set(newTypes)];

            setItemData({
                ...itemData,
                [name]: newTypes 
            })
        } else if(!checked) {
            let index = newTypes.indexOf(value);
            newTypes.splice(index, 1);
            
            setItemData({
                ...itemData,
                [name]: newTypes 
            })
        }
    }

    const handlePrice = event => {
        const target = event.target;
        const value = target.value; 
        const name = target.name;

        setItemData({
        ...itemData,
        [name]: value
        })
    }

    const addToCart = event => {
        let cart = itemData.shoppingCart;
        let name = event.target.previousSibling.innerHTML;
        let stock = itemData.items;

        let item = stock.filter(item => item.name === name);
        countCartItems(cart, item[0]);


        setItemData({
             ...itemData,
             shoppingCart: cart
        })
    }

    const countCartItems = (cart, selectedItem) => {
        let items = cart.find((item) => {
            return item.name === selectedItem.name;
        });       

        if(cart.length > 0) {
            for(let i = 0; i < cart.length; i++){
                if(cart[i].name === selectedItem.name){
                    cart[i].count ++;
                }
            }
        }

        if(cart.length === 0 || items === undefined) {
            selectedItem.count = 1;
            cart.push(selectedItem);
        }
        
        return cart;
    }

    const removeItem = (event) => {
        let itemName = event.target.dataset.name;
        let shoppingCart = [...itemData.shoppingCart];

        let index = shoppingCart.findIndex(item => item.name === itemName);

        shoppingCart.splice(index, 1);

        setItemData({
            ...itemData,
            shoppingCart
        })

    }

    const itemCountControl = event => {
        let itemName = event.target.parentNode.dataset.name;
        let action = event.target.innerHTML;
        let shoppingCart = [...itemData.shoppingCart];
        
        shoppingCart.map((item) => {
            if(item.name === itemName && action === '-'){
                 item.count --;
             
            } else if(item.name === itemName && action === '+'){
                 item.count ++;
              
            }
            return
        })

        if(action === '-'){
            let index = shoppingCart.findIndex(item => item.name === itemName && item.count === 0);
            if(index !== -1){
                shoppingCart.splice(index, 1);
            }
        }

        setItemData({
            ...itemData,
            shoppingCart
        })
    }

    // const checkItemCount = (itemName, shoppingCart) => {
    //     let index = shoppingCart.findIndex(item => item.name === itemName && item.count === 0);
    //     shoppingCart.splice(index, 1);

    //     return shoppingCart;
    // }
    

    return(
        <StockContext.Provider value={{
            itemData: itemData, 
            handleChecked, 
            handlePrice, 
            addToCart,
            removeItem,
            itemCountControl
            }}>
            {props.children}
        </StockContext.Provider>
    )
}