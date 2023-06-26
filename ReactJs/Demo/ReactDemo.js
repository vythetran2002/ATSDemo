// 1. render method

// const ulReact = React.createElement('ul',
//         {id:'test'},
//             React.createElement('li',null,'JS'),
//             React.createElement('li',null,'ReactJs')
//         );
    
// console.log(ulReact);

// ReactDOM.render(ulReact,document.querySelector('#root'));

// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(ulReact);
// 2. JSX

// const ulReact = React.createElement(React.Fragment,
//     null,
//     React.createElement('h1',null,'Hello'),
//     React.createElement('h1',null,'ATS'));

// const ulReact = (
//     <React.Fragment>
//     <h1>Hello</h1>
//     <h1>ATS</h1>
//     </React.Fragment>
// )

// ReactDOM.render(ulReact,document.querySelector('#root'));

// 3. React Component

// 3.1 Class component
// class Grettings extends React.Component{
//     render(){
//         return <h1> Hello ATS </h1>;
//     }
// }

// 3.2 Object component
// function Greetings(){
//     return(
//         <React.Fragment>
//         <h1> Hello ATS </h1>
//         <br/>
//         <h1>Hello Chau</h1>
//         </React.Fragment>
//     );
// }

// 3.3 props
// function Greetings(props){
//     return (
//         <h1> Hello {props.name} </h1>
//     )
// }

// 3.4 Component in Component

// function Ats(){
//     return (<h2> ATS </h2>);
// }

// function Greetings(){
//     return(
//         <React.Fragment>
//         <h1>Hello</h1>
//         <Ats />
//         </React.Fragment>
//     )
// }
// ReactDOM.render(<Greetings/>,document.querySelector('#root'));

// ReactDOM.render(<Greetings name='ATS1'/>,document.querySelector('#root'));

// 4. Props

// function Phone(props){
//     return (
//         <h2>This is a {props.brand.model} - price: {props.brand.price}</h2>
//     )
// }

// function MyPhone(){
//     const myIphone = {
//         model: "IPhone 6",
//         price: "12$",
//         buyDate: "Oct 25 2002"
//     }

//     return(
//         <React.Fragment>
//             <h1>This is my phone</h1>
//             <Phone brand={myIphone}/>
//         </React.Fragment>
//     )
// }

// ReactDOM.render(<MyPhone />,document.querySelector('#root'));

// 5. React Event


// function FillForm(){
//     const Alert = (message) =>{
//         alert(message);
//     }

//     return(
//             <form>
//             <button onClick={() => Alert("Hello ATS")}>Enter</button>
//             </form>
//     )
// }
// ReactDOM.render(<FillForm />,document.querySelector('#root'));

// 6. React Conditional

// function Celebrate(){
//     return <h1>Happy</h1>
// }
// function NotCelebrate(){
//     return <h1>Depressed</h1>
// }

// function Result(props){
//     const isPassed = props.isPassed;
//     if(isPassed == 'true'){
//         return <Celebrate/>
//     }else{
//         return <NotCelebrate/>
//     }
// }

// ReactDOM.render(<Result isPassed='ss'/>,document.querySelector('#root'));

// 7.React Lists
const myArray = [
    {
        id: 1,
        name: 'Jack',
        age: 15
    },
    {
        id: 2,
        name: 'Jolie',
        age: 20
    },
    {
        id: 3,
        name: 'Joshua',
        age: 15
    }
];

console.log(myArray);

function Introduction(props){
    return (<li >I am {props.student.name} - {props.student.age} years old </li>)
}

function StudentList(){
    return(
        <React.Fragment>
        <h1>ATS members:</h1>
        <ul>
            {myArray.map(
                (student,index) => {
                    return(
                        <Introduction student={student} key={'a'+index}></Introduction>
                    )
                }
            )}
        </ul>
        </React.Fragment>
    )
}

ReactDOM.render(<StudentList/>,document.querySelector('#root'));

// 8. React Form

// Handling form

// function HandlingForm(){

//     const [input, setInput] = useState('grey');

//     const handleForm = (event) => {
//         console.log(input);
//     }

//     return(
//         <React.Fragment>
//         <label>Enter here:</label>
//         <form>
//             <input type="text"
//             value={input}
//             onChange = {
//                 e => {
//                     setInput((input) => input=e.target.value);
//                 }
//             }></input>
//         </form>
//         </React.Fragment>
//     )
// }

// ReactDOM.render(<HandlingForm/>,document.querySelector('#root'));

// 8. React CSS Styling

// const Greetings = () => {
//     return (
//         <React.Fragment> 
//         <h1 style={{color: "grey"}}>Hello ATS</h1>
//         </React.Fragment>
//     );
//   }



// 9. useState

// function SetColor(){
//     const [color, setColor] = useState('grey');

//     return(
//         <React.Fragment> 
//             <h1 style={{color:{color}}}>Hello ATS</h1>
//             <button type='button' onClick = {
//                 ()=>setColor('green')
//             }></button>
//         </React.Fragment>
//     )

// }
// ReactDOM.render(<SetColor/>,document.querySelector('#root'));






