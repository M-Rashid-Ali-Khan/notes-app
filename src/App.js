//import logo from './logo.svg';
// import './App.css';
import Header from './Layers/Header.jsx';
import TodoList from './Layers/TodoList.jsx';
import Footer from './Layers/Footer.jsx';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header/>
      <div  className="flex flex-col flex-grow bg-[url('http://localhost:3000/shaggy_looking_up.jpeg')]">
      <div className='h-[3em]'/>
      <TodoList />
      <div className='flex-grow'/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

// export default function App() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-blue-100">
//       <h1 className="text-4xl font-bold text-blue-700">Tailwind Works!</h1>
//     </div>
//   );
// }