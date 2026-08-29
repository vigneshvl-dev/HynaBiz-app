import React, { useState } from 'react'
import { Target, Plus, Check, ArrowRight } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'
import Toast from '../../components/Toast'

export default function OwnerMissions() {
  const { missions, addMission, toggleTaskCompleted } = useOwner()

  const [showCreateModal, setShowCreateModal] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  const [missionForm, setMissionForm] = useState({
    title: '',
    targetGoal: '',
    timeline: '60 Days',
    taskInputs: ['', '', ''],
  })

  const handleCreateMission = (e) => {
    e.preventDefault()
    if (missionForm.title) {
      const validTasks = missionForm.taskInputs
        .filter((t) => t.trim().length > 0)
        .map((label, idx) => ({
          id: `task-${Date.now()}-${idx}`,
          label,
          completed: false,
        }))

      addMission({
        title: missionForm.title,
        targetGoal: missionForm.targetGoal,
        timeline: missionForm.timeline,
        tasks: validTasks.length > 0 ? validTasks : [{ id: 't1', label: 'Initial planning', completed: false }],
      })

      setShowCreateModal(false)
      setToastMessage('New Business Mission created!')
      setToastVisible(true)
    }
  }

  return (
    <OwnerLayout>
      <Toast message={toastMessage} visible={toastVisible} onDismiss={() => setToastVisible(false)} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
            Business Missions
          </h1>
          <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
            Set strategic, long-term business expansion missions and track milestone execution.
          </p>
        </div>

        <button type="button" className="btn-primary-owner" onClick={() => setShowCreateModal(true)}>
          <Plus size={18} />
          <span>Create Mission</span>
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {missions.map((m) => (
          <div key={m.id} className="opportunity-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0066ff' }}>
                  <Target size={22} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    {m.title}
                  </h3>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Timeline: {m.timeline}</div>
                </div>
              </div>

              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: '#0066ff' }}>
                {m.progress}%
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#334155', marginBottom: '14px' }}>{m.targetGoal}</p>

            <div className="progress-track" style={{ height: '8px', marginBottom: '16px' }}>
              <div className="progress-fill" style={{ width: `${m.progress}%` }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>MILESTONE TASKS</span>
              {m.tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleTaskCompleted(m.id, task.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    background: task.completed ? '#f8fafc' : '#ffffff',
                    border: '1px solid #e2e8f0',
                    cursor: 'pointer',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: task.completed ? '#64748b' : '#0f172a',
                    textDecoration: task.completed ? 'line-through' : 'none',
                  }}
                >
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: task.completed ? 'none' : '1.5px solid #cbd5e1',
                      background: task.completed ? '#0066ff' : '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                    }}
                  >
                    {task.completed && <Check size={12} />}
                  </div>
                  <span>{task.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CREATE MISSION MODAL */}
      {showCreateModal && (
        <div className="modal-overlay-owner" onClick={() => setShowCreateModal(false)}>
          <div className="modal-card-owner" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '16px' }}>
              Create Business Mission
            </h3>
            <form onSubmit={handleCreateMission} className="owner-form-grid">
              <div>
                <label className="owner-input-label">Mission Title</label>
                <input
                  type="text"
                  className="owner-input-field"
                  value={missionForm.title}
                  onChange={(e) => setMissionForm({ ...missionForm, title: e.target.value })}
                  placeholder="e.g. Expand into UAE & GCC Region"
                  required
                />
              </div>

              <div>
                <label className="owner-input-label">Target Outcome / Goal</label>
                <textarea
                  className="owner-input-field owner-textarea-field"
                  value={missionForm.targetGoal}
                  onChange={(e) => setMissionForm({ ...missionForm, targetGoal: e.target.value })}
                  placeholder="e.g. Find 3 qualified regional distributors and sign contracts."
                />
              </div>

              <div>
                <label className="owner-input-label">Timeline</label>
                <input
                  type="text"
                  className="owner-input-field"
                  value={missionForm.timeline}
                  onChange={(e) => setMissionForm({ ...missionForm, timeline: e.target.value })}
                  placeholder="e.g. 90 Days"
                />
              </div>

              <div>
                <label className="owner-input-label">Key Milestones (3 Tasks)</label>
                {missionForm.taskInputs.map((val, idx) => (
                  <input
                    key={idx}
                    type="text"
                    className="owner-input-field"
                    style={{ marginBottom: '8px' }}
                    value={val}
                    onChange={(e) => {
                      const updated = [...missionForm.taskInputs]
                      updated[idx] = e.target.value
                      setMissionForm({ ...missionForm, taskInputs: updated })
                    }}
                    placeholder={`Milestone task ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="onboarding-btn-row">
                <button type="button" className="btn-secondary-owner" onClick={() => setShowCreateModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary-owner">
                  <span>Create Mission</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </OwnerLayout>
  )
}
