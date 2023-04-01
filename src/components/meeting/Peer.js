import { useVideo } from "@100mslive/react-sdk";
import './meeting.css'
import ChatContainer from "./Chat/ChatContainer";
function Peer({ peer }) {
  const { videoRef } = useVideo({
    trackId: peer.videoTrack
  });
  return (
    <div className="peer-container">
      <video
        ref={videoRef}
        className={`peer-video ${peer.isLocal ? "local" : ""}`}
        autoPlay
        muted
        playsInline
      />
      <div className="peer-name">
        {peer.name} {peer.isLocal ? "(You)" : ""}
      </div>
      <ChatContainer />
    </div>
  );
}

export default Peer;
