import logo from './logo.svg';
// import './App.css';
import Header from './Layers/Header.jsx';
import TodoList from './Layers/TodoList.jsx';
import Footer from './Layers/Footer.jsx';

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <TodoList/>
//       <Footer/>
//     </div>
//   );
// }

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-700">Tailwind Works!</h1>
    </div>
  );
}


// export default App;
