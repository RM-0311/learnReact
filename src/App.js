import './App.css'
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'


function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])
  console.log(showModal)

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const subtitle = "All the latest events in Marioland"

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle}/>

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick}/>}

      {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae turpis facilisis mi luctus dignissim. 
          Donec congue eget risus a interdum. Ut eget ex vestibulum, tristique orci sit amet, euismod nunc. Nulla ut congue purus. Aliquam sit amet sagittis dui. Pellentesque tortor urna, tincidunt nec pellentesque a,
           hendrerit at velit. Aliquam viverra sed erat ac porta. Maecenas ac consectetur nunc, et dapibus massa. Donec lacus magna, imperdiet eget elit quis, sodales malesuada lectus. Pellentesque eu elit at orci finibus semper 
           et a augue. Morbi vulputate lacus nec diam porttitor rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
      </Modal>}

      <div>
      <button onClick={() => setShowModal(true)}>Show Terms</button>
      </div>

    </div>
  );
}

export default App;
