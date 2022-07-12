import React from 'react';

class ProductsScreen extends React.Component{
    constructor(){
        super()
    }


    render(){
        const aList = []

        for(var i=0; i<10; i++){
            aList.push(<li key={i}><a href={'products/'+i}>Item {i}</a></li>)
        }



        return(
            <div className ='Main'>
                <h1>ProductScreen</h1>
                <u1>{aList}</u1>
            </div>
        )
    }


    
}

export default ProductsScreen;