import { useState } from "react"
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from '@ant-design/icons'
import sound from "../sounds/messagesound.mp3"


const MessageForm = (props) => {

    const [value, setValue] = useState('')
    const { chatId, creds } = props

    const handleSumbit = (e) => {
        e.preventDefault()
        const text = value.trim()
        if (text.length > 0) {
            sendMessage(creds, chatId, { text })
        }
        setValue('')
        new Audio(sound).play()
    }

    const handleChnage = (e) => {
        setValue(e.target.value)
        isTyping(props, chatId)
    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' })
        new Audio(sound).play()
    }




    return (
        <form className="message-form" onSubmit={handleSumbit}>
            <input className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChnage}
                onSubmit={handleSumbit}
            />
            <label htmlFor="upload-buttton">
                <span className="image-button">
                    <PictureOutlined className="picture-iocn" />
                </span>
            </label>
            <input type="file" multiple={false} id="upload-buttton" style={{ display: 'none' }}
                onChange={handleUpload}
            />
            <button type="submut" className="send-button">
                <SendOutlined className="send-icon"/>
            </button>
        </form>
    )
}

export default MessageForm