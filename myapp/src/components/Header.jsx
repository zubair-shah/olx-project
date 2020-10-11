import React from 'react';
import Logo from './src/images/OLX_New_Logo'

class Header extends React.Component{
    render(){
        return(

            <header>
<div className="main">
    <div className="row">
        <div className="col-md-2">
            <div className="logo">
                <img src="./src/images/OLX_NEW_Logo" alt=""/>
            </div>
        </div>
    </div>
</div>
            </header>
        )
    }
}
export default Header;