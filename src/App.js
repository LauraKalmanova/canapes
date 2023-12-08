import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Best from './Best';
import Last from './Last';
import Footer from './Footer';

const products =[
  {id:1,title:"Canapé cuir",price:1000,rating:4.5,isPublished:true,},
  {id:2,title:"Canapé tissu",price:800,rating:3.5,isPublished:false,},
  {id:3,title:"Canapé velours",price:1200,rating:5,isPublished:true,},
  {id:4,title:"Canapé lin",price:900,rating:2.5, isPublished:false,},
  {id:5,title:"Canapé cotton",price:900,rating:2.2,isPublished:true,},
  {id:6,title:"Canapé cuir de vache",price:600,rating:1.5,isPublished:false,},
  {id:7,title:"Canapé cuir de chèvre",price:700,rating:2,isPublished:true,},
];


const App = () => {


  return (
    <div className="App">
      <Header />
      <Best canapeProp = {products} />
      <Last canapeProp = {products} />
      <Footer />
    </div>
  );
}

export default App;
