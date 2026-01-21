import React, { useState, useEffect, useRef } from 'react';
import API_ENDPOINTS from '../../config/apiConfig';

function AttemptQuiz({ quiz, studentId, quizId, onClose, onComplete, onCoinsEarned }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [lives, setLives] = useState(3);
  const [disableOptions, setDisableOptions] = useState(false);
  const [timer, setTimer] = useState(30);

  const timerRef = useRef(null);

  /* ================= HANDLERS ================= */
  const handleOption = idx => {
    if (!disableOptions) setSelected(idx);
  };

  // Accepts auto (true if timer runs out, false if user clicks skip)
  const handleSkip = (auto = false) => {
    setDisableOptions(true);
    setAnswers(a => [...a, { selected: null }]);
    setLives(l => {
      const newLives = l - 1;
      // Use functional update for current as well
      setCurrent(c => {
        if (c + 1 < questions.length && newLives > 0) {
          return c + 1;
        } else {
          handleSubmit(true);
          return c;
        }
      });
      return newLives;
    });
  };

  const handleNext = () => {
    setDisableOptions(true);
    setAnswers(a => [...a, { selected }]);
    setCurrent(c => c + 1);
  };

  const handleSubmit = async (auto = false) => {
    setDisableOptions(true);

    if (!auto) setAnswers(a => [...a, { selected }]);

    const payload = {};
    questions.forEach((q, i) => {
      if (answers[i]?.selected !== undefined) {
        payload[q.id] = answers[i].selected;
      } else if (i === current && selected !== null && !auto) {
        payload[q.id] = selected;
      }
    });

    try {
      const res = await fetch(
        `${API_ENDPOINTS.SUBMIT_QUIZ}?studentId=${studentId}&quizId=${quizId}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
      );

      if (!res.ok) throw new Error();

      const data = await res.json();
      setResult(data);

      if (onCoinsEarned) onCoinsEarned(data.coinsAdded || 0);

    } catch {
      setResult({ error: "Quiz submission failed." });
    }
  };

  /* ================= FETCH QUESTIONS ================= */
  useEffect(() => {
    if (!studentId || !quizId) return;

    setLoading(true);
    fetch(`${API_ENDPOINTS.QUIZ_STUDENT_ATTEMPTS}?studentId=${studentId}&quizId=${quizId}`)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        setQuestions(Array.isArray(data.questions) ? data.questions : data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load quiz questions.");
        setLoading(false);
      });
  }, [studentId, quizId]);

  /* ================= TIMER ================= */
  useEffect(() => {
    if (!questions.length || result) return;

    setTimer(questions[current]?.timer || 30);
    setSelected(null);
    setDisableOptions(false);

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev === 1) {
          clearInterval(timerRef.current);
          // Use the latest handleSkip, but always pass true for auto
          handleSkip(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
    // Only depend on current, questions, result
  }, [current, questions, result]);

  /* ================= RESULT SCREEN ================= */
  if (result) {
    return (
      <div className="quiz-attempt-modal" style={modalStyle}>
        <div style={resultCard}>
          <h2>Quiz Completed 🎉</h2>

          {result.error ? (
            <p style={{ color: '#f87171' }}>{result.error}</p>
          ) : (
            <>
              <p><b>Coins Earned:</b> {result.coinsAdded}</p>
              <p><b>Total Coins Till Date:</b> {result.totalCoins}</p>
              <p><b>Correct:</b> {result.correctCount} / {result.totalQuestions}</p>
            </>
          )}

          <button
            onClick={() => {
              if (onComplete) onComplete(result.score, result.totalCoins);
              onClose();
              window.location.reload();
              // Scroll to top after closing modal
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            style={primaryBtn}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  /* ================= LOADING / ERROR ================= */
  if (loading) return <div style={center}>Loading...</div>;
  if (error) return <div style={center}>{error}</div>;



  /* ================= QUIZ UI ================= */
  // Calculate score and percent complete
  const score = answers.reduce((acc, ans, idx) => {
    if (
      questions[idx] &&
      ans.selected !== null &&
      ans.selected === questions[idx].answer
    ) {
      return acc + (questions[idx].points || 0);
    }
    return acc;
  }, 0);

  const percentComplete = questions.length
    ? Math.round(((current + 1) / questions.length) * 100)
    : 0;

  const question = questions[current] || {};

  return (
    <div className="quiz-attempt-modal" style={{
      position: "fixed", inset: 0, background: "#18181b", zIndex: 1000, overflow: "auto"
    }}>
      <div style={{
        maxWidth: 1200, margin: "40px auto", background: "linear-gradient(135deg, #18181b 70%, #2d1a2d 100%)",
        borderRadius: 16, boxShadow: "0 4px 32px #0008", padding: 32, color: "#fff", position: "relative"
      }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
          <button onClick={onClose} style={{
            background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", marginRight: 16
          }} aria-label="Back">←</button>
          <div style={{ flex: 1, textAlign: "center", fontWeight: 600, fontSize: 22 }}>
            {quiz?.title || "Quiz"}
          </div>
        </div>
        {/* Progress Bar */}
        <div style={{ display: "flex", gap: 32 }}>
          <div style={{ flex: 2 }}>
            <div style={{ marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 15 }}>Question {current + 1} of {questions.length}</span>
              <span style={{ fontSize: 15, color: "#bdbdbd" }}>{percentComplete}% Complete</span>
            </div>
            <div style={{ height: 6, background: "#23232b", borderRadius: 4, marginBottom: 24 }}>
              <div style={{
                width: `${percentComplete}%`, height: "100%",
                background: "linear-gradient(90deg, #a855f7, #6366f1)", borderRadius: 4
              }} />
            </div>
            {/* Question Card */}
            <div style={{
              background: "#23232b", borderRadius: 12, padding: 24, marginBottom: 24, position: "relative"
            }}>
              <span style={{
                position: "absolute", left: 24, top: 16, background: "#a855f7", color: "#fff",
                borderRadius: 8, padding: "2px 14px", fontSize: 13, fontWeight: 600
              }}>{question.points} points</span>
              <span style={{
                position: "absolute", left: "50%", top: 16, transform: "translateX(-50%)",
                color: "#f87171", fontWeight: 600, fontSize: 15
              }}>⏰ {question.timer ? `${question.timer}s` : `${timer}s`}</span>
              {question.difficulty && (
                <span style={{
                  position: "absolute", right: 24, top: 16, background: "#23232b", color: "#fff",
                  borderRadius: 8, padding: "2px 14px", fontSize: 13, fontWeight: 600, border: "1px solid #444"
                }}>{question.difficulty}</span>
              )}
              <div style={{ fontSize: 20, fontWeight: 600, marginTop: 32 }}>{question.text}</div>
            </div>
            {/* Options */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              {(question.options || []).map((opt, idx) => (
                <button key={idx} style={{
                  background: selected === idx ? "#a855f7" : "#18181b", color: "#fff",
                  border: selected === idx ? "2px solid #a855f7" : "1px solid #333",
                  borderRadius: 10, padding: "18px 18px", fontSize: 17, fontWeight: 500,
                  textAlign: "left", display: "flex", alignItems: "center", gap: 12,
                  cursor: disableOptions ? "not-allowed" : "pointer", transition: "background 0.2s"
                }} onClick={() => handleOption(idx)} disabled={disableOptions}>
                  <span style={{
                    background: "#23232b", borderRadius: "50%", width: 32, height: 32,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: 16, border: "1px solid #444"
                  }}>{String.fromCharCode(65 + idx)}</span>
                  {opt}
                </button>
              ))}
            </div>
            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 16 }}>
              <button style={{
                background: "#23232b", color: "#fff", border: "1px solid #444", borderRadius: 8,
                padding: "10px 24px", fontWeight: 500, fontSize: 16, cursor: "pointer"
              }} onClick={() => handleSkip(false)} disabled={disableOptions}>Skip</button>
              {(current + 1 === questions.length || lives === 1) ? (
                <button style={{
                  background: "#a855f7", color: "#fff", border: "none", borderRadius: 8,
                  padding: "10px 32px", fontWeight: 600, fontSize: 16, marginLeft: "auto", cursor: "pointer"
                }} onClick={() => handleSubmit(false)} disabled={false}>Submit</button>
              ) : (
                <button style={{
                  background: "#a855f7", color: "#fff", border: "none", borderRadius: 8,
                  padding: "10px 32px", fontWeight: 600, fontSize: 16, marginLeft: "auto",
                  cursor: selected !== null ? "pointer" : "not-allowed"
                }} onClick={handleNext} disabled={selected === null}>Next Question &rarr;</button>
              )}
            </div>
          </div>
          {/* Quiz Stats */}
          <div style={{ flex: 1, marginLeft: 24 }}>
            <div style={{
              background: "#23232b", borderRadius: 12, padding: 24, minWidth: 220
            }}>
              <div style={{ marginBottom: 18 }}>
                <div style={{ color: "#bdbdbd", fontSize: 15 }}>Score</div>
                <div style={{ fontWeight: 700, fontSize: 22, marginTop: 2 }}>{score}</div>
              </div>
              <div style={{ marginBottom: 18 }}>
                <div style={{ color: "#bdbdbd", fontSize: 15 }}>Lives</div>
                <div style={{ fontSize: 22, color: "#f87171" }}>{lives > 0 ? "❤️".repeat(lives) : "0"}</div>
              </div>
              <div style={{ marginBottom: 18 }}>
                <div style={{ color: "#bdbdbd", fontSize: 15 }}>Progress</div>
                <div style={{ fontSize: 18 }}>{current + 1}/{questions.length}</div>
              </div>
              <div>
                <div style={{ color: "#bdbdbd", fontSize: 15 }}>Position</div>
                <div style={{ fontSize: 18, color: "#a855f7" }}>2nd</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */
const modalStyle = {
  position: 'fixed',
  inset: 0,
  background: '#18181b',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  zIndex: 1000
};



const resultCard = {
  background: '#23232b',
  padding: 40,
  borderRadius: 16,
  textAlign: 'center'
};



const primaryBtn = {
  background: '#a855f7',
  color: '#fff',
  border: 'none',
  padding: '10px 28px',
  borderRadius: 8,
  marginLeft: 12,
  cursor: 'pointer'
};



const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  color: '#fff'
};

export default AttemptQuiz;
