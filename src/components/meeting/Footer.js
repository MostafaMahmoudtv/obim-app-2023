import { useAVToggle } from "@100mslive/react-sdk";
import './meeting.css'
function Footer() {
  const {
    isLocalAudioEnabled,
    isLocalVideoEnabled,
    toggleAudio,
    toggleVideo
  } = useAVToggle();
  return (
    <div className="control-bar">
      <button className="btn-control" onClick={toggleAudio}>
        {isLocalAudioEnabled ? "كتم" : "إلغاء الكتم"}
      </button>
      <button className="btn-control" onClick={toggleVideo}>
        {isLocalVideoEnabled ? "إخفاء" : "إظهار"}
      </button>
    </div>
  );
}

export default Footer;
