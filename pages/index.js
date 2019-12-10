//index .js 

import Nav from '../comps/Nav'
import Link from 'next/link'
import App from '../comps/sound'
//import dynamic from 'next/dynamic'

  /*const App2 = dynamic(() => import('../comps/p5app'),{
  ssr: false

});*/

const Index = () => (
  <div>
    <Nav />
    <App />
  </div>
)


export default Index
