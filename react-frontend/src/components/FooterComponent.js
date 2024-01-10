import React, {Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className="footer" style={{ position: 'fixed', bottom: 0, width: '100%', marginTop: '20px' }}>
                <span className="text-muted" style={{ marginLeft: '20px' }}>
                    All Rights Reserved 2023 @Megan Wu
                </span>
                </footer>
            </div>
        );
        // return (
        //     <div >
        //         <footer className = "footer">
        //             <span className="text-muted" style ={{marginLeft: 20 }} >All Rights Reserved 2023 @Megan Wu</span>
        //         </footer>
        //     </div>
        // )
    }
}

export default FooterComponent


// import React, {Component } from 'react'

// class FooterComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
                 
//         }
//     }

//     render() {
//         return (
//             <div >
//                 <footer className = "footer">
//                     <span className="text-muted" style ={{marginLeft: 20 }} >All Rights Reserved 2023 @Megan Wu</span>
//                 </footer>
//             </div>
//         )
//     }
// }

// export default FooterComponent
