import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {

    if (!localStorage.getItem('username')) {
        return <LoginForm />
    }

    return (
        <ChatEngine
            height="100vh"
            projectID="0a43d058-be65-489a-b9ec-59202e4d6da5"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}


export default App