// function App() {
//     return (
//         <>hello world</>
//     );
// };
// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProducts from './allProducts';
import SingleProduct from './singleProduct';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/product/:id" component={singleProduct} />
        <Route path="/" component={allProducts} />
      </Switch>
    </Router>
  );
};

export default App;