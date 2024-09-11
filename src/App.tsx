import { Suspense, useState } from 'react'
import { BrowserRouter }from "react-router-dom";
import {routes} from "./router/router";
import Loading from './components/common/loaders/Loading';

function App() : JSX.Element {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        {routes()}
      </Suspense>
    </BrowserRouter>
  )
}

export default App
