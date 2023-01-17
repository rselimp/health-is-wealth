import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className='max-w-[1400px] mx-auto'>
     <RouterProvider router={router}/>
     <Toaster/>
    </div>
  );
}

export default App;
