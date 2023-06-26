import { useState } from 'react';
import ReactDOM from 'react-dom/client';

// export default function MyForm(){

//     const [myInput, setInput] = useState('');

//     console.log(myInput);
    
//     return(
//         <form>
//             <label>Enter here:</label>
//             <input
//                 type='text'
//                 value={myInput}
//                 onChange={
//                     e => {
//                         setInput(
//                             myInput => myInput = e.target.value
//                         )
//                     }
//                 }
//             />
//         </form>
//     )
// }

export default function MyForm(){

    var username = 'ATS';
    var passwd = '123';

    const [myLogin, setLogin] = useState({});


    const eventHadleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name
        setLogin(
            myLogin => {
                return ({...myLogin,[name]: value})
            }
        )
    }

    const eventHandleSubmit = (e) => {
        if(myLogin.username == username && myLogin.passwd == passwd)
            alert('Login succeed');
        else
            alert('Failed to login');
    }

    return(
        <>
            <form onSubmit={eventHandleSubmit}>
            <label>Username: </label>  <br/>
            <input
                name='username'
                type='text'
                value={myLogin.username || ""}
                onChange ={
                    e => {
                        setLogin ({...myLogin,username : e.target.value})                       
                    }
                }
            />
            <br/>
            <label>Password: </label>  <br/>
            <input
                name='passwd'
                type='password'
                value={myLogin.passwd || ""}
                onChange = {
                    e => {
                        setLogin(
                            myLogin => {
                                return ({...myLogin,passwd:e.target.value});
                            }
                        )
                    }
                }
            /> <br/>
            <button type='submit'>Login</button>
            </form>
        </>
    )
}