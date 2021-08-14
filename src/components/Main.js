import React from 'react'
import "./Main.css"
import { Avatar } from '@material-ui/core'
import MainButton from "../components/MainButton"
import { MdPhoto, MdVideoLibrary, MdEvent } from "react-icons/md"
import { RiArticleLine } from "react-icons/ri"
import Post from './Post'

function Main() {
    return (
        <div className="main">
            <div className="main__top">
                <div className="main__topAvatar">
                    <Avatar className="main__Avatar" src="https://media-exp1.licdn.com/dms/image/C4E03AQGAsFbAppKH_A/profile-displayphoto-shrink_200_200/0/1625908476660?e=1632355200&v=beta&t=I6M_uV1plr_jkcsI95FThruYHXgP-eaVintQfaWPB0Q" />
                    <input className="main__topInput" type="text" />
                </div>
                <div className="main__topButtons">
                    <MainButton icon={<MdPhoto size={28} />} title="Photo" />
                    <MainButton icon={<MdVideoLibrary size={28} />} title="Video" />
                    <MainButton icon={<MdEvent size={28} />} title="Event" />
                    <MainButton icon={<RiArticleLine size={28} />} title="Article" />
                </div>
            </div>
            <div className="main__bottom">
                <Post />
            </div>
        </div>
    )
}

export default Main
