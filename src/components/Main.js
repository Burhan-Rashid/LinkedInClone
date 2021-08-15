import React from 'react'
import "./Main.css"
import { Avatar } from '@material-ui/core'
import MainButton from "../components/MainButton"
import { MdPhoto, MdVideoLibrary, MdEvent } from "react-icons/md"
import { RiArticleLine } from "react-icons/ri"
import Post from './Post'
import { db } from "../Firebase"

function Main() {
    const [post, setPost] = React.useState("")
    const [posts, setPosts] = React.useState([])


    React.useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        ))
        console.log(posts[0])
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: "Burhan Rashid",
            description: "this is a test",
            message: post
        })
        setPost("");
    }

    return (
        <div className="main">
            <div className="main__top">
                <div className="main__topAvatar">
                    <Avatar className="main__Avatar" src="https://media-exp1.licdn.com/dms/image/C4E03AQGAsFbAppKH_A/profile-displayphoto-shrink_200_200/0/1625908476660?e=1632355200&v=beta&t=I6M_uV1plr_jkcsI95FThruYHXgP-eaVintQfaWPB0Q" />
                    <form className="form">
                        <input className="main__topInput" value={post} onChange={(e) => setPost(e.target.value)} type="text" />
                        <button type="submit" onClick={handleSubmit} />
                    </form>
                </div>
                <div className="main__topButtons">
                    <MainButton icon={<MdPhoto size={28} />} title="Photo" />
                    <MainButton icon={<MdVideoLibrary size={28} />} title="Video" />
                    <MainButton icon={<MdEvent size={28} />} title="Event" />
                    <MainButton icon={<RiArticleLine size={28} />} title="Article" />
                </div>
            </div>
            <div className="main__bottom">
                {posts.length > 0 && posts.map(({ id, data: { name, message, description } }) => {
                    console.log(name);
                    return <Post key={id} title={name} description={description} message={message} />
                })}

            </div>
        </div>
    )
}

export default Main
