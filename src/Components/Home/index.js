import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import {AiOutlinePlusCircle} from 'react-icons/ai'
// import {v4 as uuidv4} from 'uuid'

import Cards from '../Cards'

import './index.css'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}

/*
let userAddedPlaces = [
    {
        id: uuidv4(),
        name: 'Mumbai'
    },
    {
        id: uuidv4(),
        name: 'Delhi'
    },
    {
        id: uuidv4(),
        name: 'Bangalore'
    },
    {
        id: uuidv4(),
        name: 'chennai'
    },
    {
        id: uuidv4(),
        name: 'Hyderabad'
    }
]
*/

class Home extends Component{
    state = {
        apiStatus: apiStatusConstants.initial,
        userAddedPlaces: [],
        userInputLocation: ''
    }

    onUserInput = (event) => {
        console.log(event.target.value)
        this.setState({userInputLocation: event.target.value})
    }

    render(){
        return(
            <div className=''>
                <div className='main-home-container'>
                    <div className='container-1'>
                        <div className='user-input-container'>
                            <div className='input-container'>
                                <input type='text' placeholder='Enter Location' className='user-input' onChange={this.onUserInput}/>
                                <button className='search-btn'>
                                    <BsSearch/>
                                </button>
                            </div>
                            <button type='button' className='add-btn'>
                                <AiOutlinePlusCircle className='plus'/>
                                Add
                            </button>
                        </div>
                    </div>
                    <div className='container-2'>
                    </div>
                </div>
                <div>
                    <h3>Belower are Forecast of next 5 Days</h3>
                </div>
                <Cards/>
            </div>
        )
    }
}

export default Home