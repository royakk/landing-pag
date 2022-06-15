import Home from './component/Home';
import './input.css';
import 'antd/dist/antd.css';
import LanguageDetector from 'i18next-browser-languagedetector';



function App() {
  return (
    <div className="App"  direction ={LanguageDetector === 'en' ? 'ltr' : 'rtl'}>
      <Home />
    </div>
  );
}

export default App;
