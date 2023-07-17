import React from 'react'
import './Widgets.css'
import { Button } from '@material-ui/core'

function Widgets() {
  return (
    <div className='Widgets'>
        <div className='widgets__header'>
            <h2>Linkedin News</h2>
            <Button className='widgets__headerButton'
            style={{backgroundColor: 'black', color: 'white', 
            textTransform:'unset', minWidth:'unset', height:'unset'}}><em>i</em></Button>
        </div>
        <div className="widgets__body">
            <ul>
                <li><b>Driving Social impact at scale</b>
                <p>Top newes 8128 readers</p>
                </li>
                <li><b>Millions out of proverty in India</b>
                <p>Top newes 8128 readers</p></li>
                <li><b>Heavy rains batter North India</b>
                <p>Top newes 8128 readers</p></li>
                <li><b>Finance competes for tech talent</b>
                <p>Top newes 8128 readers</p></li>
            </ul>
        </div>

    </div>
  )
}

export default Widgets