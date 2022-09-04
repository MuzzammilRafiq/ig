import { Avatar } from '@mui/material'
import React from 'react'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import SendIcon from '@mui/icons-material/Send'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
const Post = () => {
    return (
        <div className='post'>
            <div className="post_top">
                <Avatar />
                <p>breakingbad_irony</p>
                <MoreHorizIcon />
            </div>
            <div className="post_middle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi blanditiis, dicta consectetur deserunt neque id voluptatibus dolorum earum ea perferendis fuga quod reiciendis? Non velit repellat culpa aperiam aspernatur nobis provident sunt. Quibusdam reprehenderit beatae soluta. Eligendi dolorum hic tenetur doloremque quidem ducimus aliquam sed doloribus maxime iusto? Deserunt quis odio, quod voluptatum numquam suscipit labore nemo itaque aperiam, eveniet iure praesentium unde nisi vero velit. Iste fugit et consequuntur unde temporibus. Voluptatibus numquam cumque ea facere ducimus necessitatibus tempora odit. Eius consequatur obcaecati tenetur non. In nesciunt labore sequi aspernatur, provident recusandae tempora, architecto debitis accusamus culpa possimus eum.
            </div>
            <div className="post_bottom">
                <FavoriteBorderIcon />
                <ChatBubbleOutlineOutlinedIcon />
                <SendIcon />
                <BookmarkBorderOutlinedIcon />
            </div>
        </div>
    )
}

export default Post