
import { PrettyChatWindow } from 'react-chat-engine-pretty';
 // import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) =>{

   // const chatProps = useMultiChatLogic('0cb51083-a339-41dc-8465-0bcb3842b1e3', props.user.username, props.user.secret);
    return (
    
    <div style={{ height: '100vh' }}>

       {/*  <MultiChatSocket {...chatProps} /> 
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} /> */}

    <PrettyChatWindow
      projectId="0cb51083-a339-41dc-8465-0bcb3842b1e3"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100vh' }} />
    </div>
    )
}

export default ChatsPage