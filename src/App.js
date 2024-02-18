import { createPortal } from "react-dom"

function App(){
  return(
    <div style={{
      height:300,
      overflow:'scroll',
      background:'#EEE',
      margin: 20,
      position:'relative'
    }}>
      <p>
        Incididunt consequat mollit consequat ea nisi sint ex reprehenderit. Sunt velit id duis nulla laboris nostrud in. Nulla veniam excepteur ipsum esse incididunt sint. In nostrud labore ad quis ea ipsum incididunt veniam anim exercitation consectetur. Occaecat eiusmod commodo in ea adipisicing ipsum voluptate irure velit cupidatat. Est veniam reprehenderit occaecat dolore dolor anim aute incididunt exercitation ut. Exercitation dolore id dolor irure laborum fugiat deserunt mollit qui sit ea.

        Enim sit deserunt duis officia aute ut non laborum tempor qui qui pariatur occaecat veniam. Sit amet voluptate minim duis qui id ad. Laborum ad deserunt et ex ullamco aliqua reprehenderit id consequat qui fugiat.

        Eiusmod voluptate aliqua pariatur laborum sit. Nulla laborum est sit ea nulla ad fugiat. Magna culpa ad ex veniam nostrud aliqua laboris sit ullamco aliqua mollit. Sunt aute cillum est et veniam qui consectetur ea sint tempor culpa reprehenderit.
      </p>
      <p>
        Incididunt consequat mollit consequat ea nisi sint ex reprehenderit. Sunt velit id duis nulla laboris nostrud in. Nulla veniam excepteur ipsum esse incididunt sint. In nostrud labore ad quis ea ipsum incididunt veniam anim exercitation consectetur. Occaecat eiusmod commodo in ea adipisicing ipsum voluptate irure velit cupidatat. Est veniam reprehenderit occaecat dolore dolor anim aute incididunt exercitation ut. Exercitation dolore id dolor irure laborum fugiat deserunt mollit qui sit ea.

        Enim sit deserunt duis officia aute ut non laborum tempor qui qui pariatur occaecat veniam. Sit amet voluptate minim duis qui id ad. Laborum ad deserunt et ex ullamco aliqua reprehenderit id consequat qui fugiat.

        Eiusmod voluptate aliqua pariatur laborum sit. Nulla laborum est sit ea nulla ad fugiat. Magna culpa ad ex veniam nostrud aliqua laboris sit ullamco aliqua mollit. Sunt aute cillum est et veniam qui consectetur ea sint tempor culpa reprehenderit.
      </p>
      <p>
        Incididunt consequat mollit consequat ea nisi sint ex reprehenderit. Sunt velit id duis nulla laboris nostrud in. Nulla veniam excepteur ipsum esse incididunt sint. In nostrud labore ad quis ea ipsum incididunt veniam anim exercitation consectetur. Occaecat eiusmod commodo in ea adipisicing ipsum voluptate irure velit cupidatat. Est veniam reprehenderit occaecat dolore dolor anim aute incididunt exercitation ut. Exercitation dolore id dolor irure laborum fugiat deserunt mollit qui sit ea.

        Enim sit deserunt duis officia aute ut non laborum tempor qui qui pariatur occaecat veniam. Sit amet voluptate minim duis qui id ad. Laborum ad deserunt et ex ullamco aliqua reprehenderit id consequat qui fugiat.

        Eiusmod voluptate aliqua pariatur laborum sit. Nulla laborum est sit ea nulla ad fugiat. Magna culpa ad ex veniam nostrud aliqua laboris sit ullamco aliqua mollit. Sunt aute cillum est et veniam qui consectetur ea sint tempor culpa reprehenderit.
      </p>
       <Modal/>
      </div>
  )

  function Modal(){
    return(
      createPortal(<div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        padding:0,
        border: 'solid 1px grey',
        background: '#FFF'
      }} >
        je suis une Modal

      </div>, document.body)
    
  )}
}
export default App