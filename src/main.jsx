import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import * as $ from "jquery";
import "./assets/css/bootstrap.css";
import 'owl.carousel/dist/assets/owl.carousel.css'; {/* this line */ }
import 'owl.carousel/dist/assets/owl.theme.default.css'; {/* this line */ }
import "./assets/css/style.css";
import App from './App.jsx'
import "./assets/lib/easing/easing.min.js";
import "./assets/lib/waypoints/waypoints.min.js";
import "./assets/lib/counterup/counterup.min.js";
import "./assets/js/main.js";
import { BrowserRouter } from 'react-router'
import { Provider } from "react-redux";
import store from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
