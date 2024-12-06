import React from 'react'
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar() {
  return (
    <div>
      <div className='sidebar'>
        <div className='sidebarLeft'>
            <div className='serverIcon'>
                <img src="./logo192.png" alt=""></img>
            </div>
            <div className='serverIcon'>
                <img src="./logo192.png" alt=""></img>
            </div>
            <div className='serverIcon'>
                <img src="./logo192.png" alt=""></img>
            </div>
        </div>

        <div className='sidebarRight'>
            <div className='sidebarTop'>
                <h3>Discord</h3>
                <ExpandMoreIcon />
            </div>

            <div className='sidebarChannnels'>
                <div className='sidebarChannelsHeader'>
                    <div className='sidebarHeader'>
                        <ExpandMoreIcon />
                        <h4>プログラミングチャネル</h4>
                    </div>
                    <AddIcon className='sidebarAddIcon'/>
                </div>

                <div className='sidebarChannelList'>
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>

                <div className='sidebarFooter'>
                    <div className='sidebarAccount'>
                        <img src="./shiba_brown.png" alt=""></img>
                        <div className='accountName'>
                            <h4>Haru</h4>
                            <span>fte9tg8</span>
                        </div>
                    </div>

                    <div className='sidebarVoice'>
                        <MicIcon />
                        <HeadphonesIcon />
                        <SettingsIcon />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar