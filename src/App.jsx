import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-25 gap-y-20 my-10 mx-20 p-4">
      <Card
        heading="Card 1"
        para="This is Card 1 Description"
        image="https://images.pexels.com/photos/24877166/pexels-photo-24877166.jpeg"
      />

      <Card
        heading="Card 2"
        para="This is Card 2 Description"
        image="https://images.pexels.com/photos/8140208/pexels-photo-8140208.jpeg"
      />

      <Card
        heading="Card 3"
        para="This is Card 3 Description"
        image="https://images.pexels.com/photos/7405791/pexels-photo-7405791.jpeg"
      />

      <Card
        heading="Card 4"
        para="This is Card 4 Description"
        image="https://images.pexels.com/photos/13248795/pexels-photo-13248795.jpeg"
      />

      <Card
        heading="Card 5"
        para="This is Card 5 Description"
        image="https://images.pexels.com/photos/16771889/pexels-photo-16771889.jpeg"
      />

      <Card
        heading="Card 6"
        para="This is Card 6 Description"
        image="https://images.pexels.com/photos/29270283/pexels-photo-29270283.jpeg"
      />

      <Card
        heading="Card 7"
        para="This is Card 7 Description"
        image="https://images.pexels.com/photos/584420/little-pink-flowers-cute-584420.jpeg"
      />

      <Card
        heading="Card 8"
        para="This is Card 8 Description"
        image="https://images.pexels.com/photos/2583789/pexels-photo-2583789.jpeg"
      />

      <Card
        heading="Card 9"
        para="This is Card 9 Description"
        image="https://images.pexels.com/photos/37163113/pexels-photo-37163113.jpeg"
      />
    </div>
  )
}

export default App
