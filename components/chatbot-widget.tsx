"use client"

import { useEffect } from "react"

export function ChatbotWidget() {
  useEffect(() => {
    const container = document.createElement("div")
    container.id = "botpress-chatbot-container"
    container.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 400px;
      height: 600px;
      z-index: 9999;
      border-radius: 12px;
      box-shadow: 0 5px 40px rgba(0, 0, 0, 0.16);
      overflow: hidden;
    `

    const iframe = document.createElement("iframe")
    iframe.src =
      "https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/10/17/03/20251017030650-P7ZF3FKX.json"
    iframe.style.cssText = `
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 12px;
    `
    iframe.allow = "microphone; camera"

    container.appendChild(iframe)
    document.body.appendChild(container)

    const handleResize = () => {
      if (window.innerWidth < 640) {
        container.style.width = "320px"
        container.style.height = "500px"
        container.style.bottom = "10px"
        container.style.right = "10px"
      } else {
        container.style.width = "400px"
        container.style.height = "600px"
        container.style.bottom = "20px"
        container.style.right = "20px"
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
      if (container.parentNode) {
        container.parentNode.removeChild(container)
      }
    }
  }, [])

  return null
}
