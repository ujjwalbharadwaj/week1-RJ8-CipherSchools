import React  from "react";
import "./test.css";

// const Test = () => {
//         return (
//             <div>
//                 <h1 id="testId"> Hello, I am Ujjwal</h1>
//             </div>
//         );
//     };

// class Test extends React.Component {
    // render() {
    //     console.log("Hello");
    //     return (
    //         <div>
    //             <h1 id="testId">Hello, I am Ujjwal</h1>
    //         </div>
    //     );
    // }
    class Test extends React.Component {
     state = { isLoggedIn: false };
   
    render() {
        return (
            <div>
                {!this.state.isLoggedIn ? ( 
                <h1>You are not Logged In!</h1>
                ) : (
                <h1>Congratulation, you are logged In!</h1>
                )}
                <button 
                onClick ={(e) => this.setState({ isLoggedIn: !this.state.isLoggedIn })}>
                    Login!
                </button>
            </div>
        );
    }
}

export default Test;