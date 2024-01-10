import React, {Component} from 'react'

class HeaderComponent extends Component {
    
    constructor(props){
        super(props)

        this.state = {

        }
    }
    

    render(){
        return (
            <div>
                <header >
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://javaguides.net" style ={{marginLeft: 20}} className="navbar-brand">G-1450 Form App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent