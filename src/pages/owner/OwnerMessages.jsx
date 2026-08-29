import React, { useState } from 'react'
import { Send, Sparkles, Search, Paperclip, MessageSquare, Building, FileText, CheckCheck } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerMessages() {
  const { messages, sendMessageToChat } = useOwner()
  const [activeChatId, setActiveChatId] = useState(messages[0]?.id || '')
  const [inputText, setInputText] = useState('')

  const activeChat = messages.find((c) => c.id === activeChatId) || messages[0]

  const handleSend = (e) => {
    e.preventDefault()
    if (inputText.trim() && activeChat) {
      sendMessageToChat(activeChat.id, inputText.trim())
      setInputText('')
    }
  }

  const handleAIAction = (actionType) => {
    if (actionType === 'suggest') {
      setInputText('Thank you for reaching out Tariq. We have full inventory capacity for biodegradable mailers and can arrange sample shipments to Dubai immediately.')
    } else if (actionType === 'summarize') {
      alert('Hyna AI Summary: Dubai Distribution Co. is seeking exclusive regional distribution of compostable mailers with initial order volume of 50k units.')
    } else if (actionType === 'questions') {
      setInputText('Could you share your current warehousing distribution channels in Dubai and projected quarterly order volumes?')
    }
  }

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '16px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0' }}>
          Business Messaging
        </h1>
        <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
          Communicate directly with verified business buyers, partners, and suppliers.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr 260px',
          gap: '16px',
          height: 'calc(100vh - 170px)',
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
        }}
      >
        {/* Left Conversations Panel */}
        <div style={{ borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '14px', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f1f5f9', borderRadius: '10px', padding: '6px 12px' }}>
              <Search size={16} color="#64748b" />
              <input type="text" placeholder="Search chats..." style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.82rem', width: '100%' }} />
            </div>
          </div>

          <div style={{ flex: 1, overflowY: 'auto' }}>
            {messages.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setActiveChatId(chat.id)}
                style={{
                  padding: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: chat.id === activeChatId ? '#eff6ff' : 'transparent',
                  borderLeft: chat.id === activeChatId ? '3px solid #0066ff' : '3px solid transparent',
                  cursor: 'pointer',
                }}
              >
                <img src={chat.avatarUrl} alt={chat.contactName} style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }} />
                <div style={{ flex: 1, overflow: 'hidden' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.86rem', color: '#0f172a' }}>{chat.contactName}</span>
                    <span style={{ fontSize: '0.68rem', color: '#64748b' }}>{chat.lastActive}</span>
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {chat.businessName}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Chat Area */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {activeChat ? (
            <>
              {/* Chat Header */}
              <div style={{ padding: '14px 20px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>
                    {activeChat.contactName}
                  </h3>
                  <span style={{ fontSize: '0.76rem', color: '#64748b' }}>{activeChat.businessName}</span>
                </div>

                {/* AI Assistant Action Buttons */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={() => handleAIAction('suggest')}
                    style={{ background: '#eff6ff', border: '1px solid #bfdbfe', color: '#0066ff', padding: '6px 12px', borderRadius: '8px', fontSize: '0.74rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <Sparkles size={12} />
                    <span>Suggest Reply</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAIAction('questions')}
                    style={{ background: '#f8fafc', border: '1px solid #cbd5e1', color: '#475569', padding: '6px 12px', borderRadius: '8px', fontSize: '0.74rem', fontWeight: 700, cursor: 'pointer' }}
                  >
                    Meeting Questions
                  </button>
                </div>
              </div>

              {/* Messages Feed */}
              <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px', background: '#f8fafc' }}>
                {activeChat.messages.map((m) => (
                  <div
                    key={m.id}
                    style={{
                      alignSelf: m.sender === 'me' ? 'flex-end' : 'flex-start',
                      maxWidth: '75%',
                      background: m.sender === 'me' ? 'linear-gradient(135deg, #0066ff 0%, #0052cc 100%)' : '#ffffff',
                      color: m.sender === 'me' ? '#ffffff' : '#0f172a',
                      padding: '12px 16px',
                      borderRadius: m.sender === 'me' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                      border: m.sender === 'me' ? 'none' : '1px solid #e2e8f0',
                    }}
                  >
                    <div style={{ fontSize: '0.88rem', lineHeight: 1.4 }}>{m.text}</div>
                    <div style={{ fontSize: '0.65rem', textAlign: 'right', marginTop: '4px', opacity: 0.7 }}>{m.time}</div>
                  </div>
                ))}
              </div>

              {/* Input Bar */}
              <form onSubmit={handleSend} style={{ padding: '14px', borderTop: '1px solid #e2e8f0', background: '#ffffff', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  style={{ flex: 1, border: '1px solid #cbd5e1', borderRadius: '12px', padding: '10px 14px', outline: 'none', fontSize: '0.88rem' }}
                />
                <button type="submit" className="btn-primary-owner" style={{ padding: '10px 18px', borderRadius: '12px' }}>
                  <Send size={16} />
                </button>
              </form>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#64748b' }}>Select a conversation</div>
          )}
        </div>

        {/* Right Side Business Preview */}
        {activeChat && (
          <div style={{ borderLeft: '1px solid #e2e8f0', padding: '20px', background: '#f8fafc', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ textAlign: 'center' }}>
              <img src={activeChat.avatarUrl} alt={activeChat.contactName} style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', marginBottom: '8px' }} />
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>{activeChat.contactName}</h4>
              <p style={{ fontSize: '0.76rem', color: '#64748b', margin: '2px 0 0 0' }}>{activeChat.businessName}</p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '14px', padding: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0066ff', textTransform: 'uppercase' }}>MATCH INSIGHT</div>
              <p style={{ fontSize: '0.8rem', color: '#334155', marginTop: '4px', margin: 0 }}>94% AI Compatibility for Middle East distribution partnership.</p>
            </div>

            <button type="button" className="btn-secondary-owner" style={{ width: '100%', padding: '8px', fontSize: '0.78rem' }}>
              View Business Profile
            </button>
          </div>
        )}
      </div>
    </OwnerLayout>
  )
}
