import React from 'react'

function Grapaatchlogo() {
  return (
    <>
      <div>
        <div
          className="grecaptcha-badge"
          data-style="bottomright"
          style={{
            width: "256px",
            height: "60px",
            position: "fixed",
            visibility: "hidden",
            display: "block",
            transition: "right 0.3s",
            bottom: "14px",
            right: "-186px",
            boxShadow: "gray 0px 0px 5px",
            borderRadius: 2,
            overflow: "hidden"
          }}
        >
          <div className="grecaptcha-logo">
            <iframe
              title="reCAPTCHA"
              width={256}
              height={60}
              role="presentation"
              name="a-ex7ozbcr17rg"
              frameBorder={0}
              scrolling="no"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
              src="assets/images/anchor.html"
            />
          </div>
          <div className="grecaptcha-error" />
          <textarea
            id="g-recaptcha-response-100000"
            name="g-recaptcha-response"
            className="g-recaptcha-response"
            style={{
              width: "250px",
              height: "40px",
              border: "1px solid rgb(193, 193, 193)",
              margin: "10px 25px",
              padding: 0,
              resize: "none",
              display: "none"
            }}
            defaultValue={""}
          />
        </div>
        <iframe
          style={{ display: "none" }}
          src="assets/images/saved_resource(1).html"
        />
      </div>
    </>
  )
}

export default Grapaatchlogo
