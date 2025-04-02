import React from 'react'
import { useNavigate } from 'react-router-dom'

function Clickchat() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="bx-livechat-wrapper bx-livechat-position-bottom-right bx-livechat-logo-en bx-livechat-mobile bx-livechat-custom-scroll bx-livechat-chat-start bx-livechat-bright-header"
        style={{ userSelect: "auto" }}
      >
        <div className="bx-livechat-box">
          <div className="bx-livechat-widget-resize-handle" />
          <div className="bx-livechat-head-wrap">
            <div
              className="bx-livechat-head"
              style={{ backgroundColor: "rgb(255, 243, 0) !important" }}
            >
              <div className="bx-livechat-title">Kheloyar.Club</div>
              <div className="bx-livechat-control-box" onClick={() => navigate("/afterlogin")} style={{ cursor: "pointer" }}>
                <button
                  title="Close widget"
                  className="bx-livechat-control-btn bx-livechat-control-btn-close"
                />
              </div>
            </div>
          </div>
          <div className="bx-livechat-body">
            <div className="bx-livechat-mobile-orientation-box">
              <div className="bx-livechat-mobile-orientation-icon" />
              <div className="bx-livechat-mobile-orientation-text">
                Rotate the device
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Clickchat
