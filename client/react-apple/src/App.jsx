import React from "react";

import Layout from "./pages/Layout.jsx";
import Four04 from "./pages/four04/Four04.jsx"
import Iphone from "./pages/iphone/Iphone.jsx";
import Mac from "./pages/mac/Mac.jsx";
import Ipad from "./pages/ipad/Ipad.jsx";
import Watch from "./pages/watch/Watch.jsx";
import Tv from "./pages/tv/Tv.jsx";
import Support from "./pages/support/Support.jsx";
import Music from "./pages/music/Music.jsx";
import Cart from "./pages/cart/Cart.jsx";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
// import YoutubeVideos from "./components/YoutubeVideos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route path="/" element={<Layout />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/music" element={<Music />} />
          <Route path="/support" element={<Support />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>

      {/* <Alert /> */}

      {/* <YoutubeVideos /> */}
    </>
  );
}

export default App;
