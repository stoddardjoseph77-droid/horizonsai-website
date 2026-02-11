"use client";

export default function ChatMockup() {
  const messages = [
    {
      sender: "buyer",
      text: "Hi, I saw your listing on Elm Street — is it still available?",
      time: "10:32 AM",
    },
    {
      sender: "ai",
      text: "Hi! Yes, 14 Elm Street is available 🏡 Are you currently pre-approved for a mortgage?",
      time: "10:32 AM",
    },
    {
      sender: "buyer",
      text: "Yes, up to $620K",
      time: "10:33 AM",
    },
    {
      sender: "ai",
      text: "Great — that's within range. When would you like to schedule a viewing? I can connect you with Sarah, who specializes in that area.",
      time: "10:33 AM",
    },
    {
      sender: "buyer",
      text: "This Saturday morning?",
      time: "10:34 AM",
    },
    {
      sender: "ai",
      text: "Done! Sarah will call you within 5 minutes to confirm. Talk soon! ✅",
      time: "10:34 AM",
    },
  ];

  return (
    <div className="max-w-sm mx-auto rounded-[2.5rem] border-2 border-white/[0.08] bg-white/[0.02] p-1.5">
      {/* Notch */}
      <div className="w-24 h-5 rounded-full bg-black mx-auto mb-3" />

      {/* Inner chat area */}
      <div className="rounded-[2rem] bg-white/[0.02] p-4 space-y-3 min-h-[520px] flex flex-col">
        {/* Chat header */}
        <div className="text-center pb-2 border-b border-white/[0.06]">
          <p className="text-text-on-dark text-sm font-heading font-semibold">
            AI Assistant
          </p>
          <p className="text-white/30 text-[10px] mt-0.5">Online</p>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-3 overflow-hidden">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                msg.sender === "buyer" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={
                  msg.sender === "ai"
                    ? "bg-brand-primary/20 text-white/90 rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[80%] text-sm"
                    : "bg-white/[0.08] text-white/80 rounded-2xl rounded-br-md px-4 py-2.5 max-w-[80%] ml-auto text-sm"
                }
              >
                {msg.text}
              </div>
              <span className="text-white/30 text-xs mt-1">{msg.time}</span>
            </div>
          ))}

          {/* Typing indicator */}
          <div className="flex items-start">
            <div className="bg-brand-primary/20 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full bg-white/50 animate-pulse"
                style={{ animationDelay: "0ms", animationDuration: "1.4s" }}
              />
              <span
                className="w-2 h-2 rounded-full bg-white/50 animate-pulse"
                style={{ animationDelay: "200ms", animationDuration: "1.4s" }}
              />
              <span
                className="w-2 h-2 rounded-full bg-white/50 animate-pulse"
                style={{ animationDelay: "400ms", animationDuration: "1.4s" }}
              />
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="rounded-full bg-white/[0.05] border border-white/[0.08] px-4 py-2.5 flex items-center justify-between">
          <span className="text-white/30 text-sm">Type a message...</span>
          <div className="w-7 h-7 rounded-full bg-brand-primary/30 flex items-center justify-center">
            <svg
              className="w-3.5 h-3.5 text-brand-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
