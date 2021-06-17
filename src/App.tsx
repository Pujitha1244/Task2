import './styles.css'
import IMAGE from './react.png'
import ClickCounter from './ClickCounter'
// import LOGO from './logo.svg'

export const App = () => {
 const name="pooji"
  return (
    <>
      <h1>
        React TypeScript Webpack Starter Template - {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
      {/* <img src={LOGO} alt="React Logo" width="300"/> */}
      <ClickCounter />
    </>
  )
}
