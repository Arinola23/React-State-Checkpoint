import { Component } from 'react'

class App extends Component {
  state = {
    person: {
      fullName: 'Maryam Oladipo',
      bio: 'I specialize in various areas such as web development, mobile app development and backend systems.',
      image: 'lady.webp',
      profession: 'Software Engineer '
    },
    show: false,
    mountTime: null
  }
  
  toggleShow =() => {
    this.setState(prevState => ({
        show: !prevState.show
    }))
  }

  componentDidMount(){
    this.setState({
      mountTime: new Date()
    })

    this.interval = setInterval(() => {
      this.setState({
        mountTime: new Date()
    })
  }, 1000)
}

componentWillUnmount() {
  clearInterval(this.interval);
}

    render() {
      const { fullName, bio,  image, profession} = this.state.person
      const{ show, mountTime } = this.state

      return (
        <div className='app'>
            <button onClick={this.toggleShow}> Toggle Profile</button>
            { show && (
              <div>
                <img src ={image} alt = {fullName}/>
                <h2>{fullName}</h2>
                <p>{bio}</p>
                <p>Profession: {profession}</p>
              </div>
            )}
            <p>Time since mount: {Math.floor((new Date() - mountTime) / 1000)} seconds</p>
        </div>   
      )
    }  
}

export default App;