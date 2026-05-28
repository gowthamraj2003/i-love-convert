"use client";

import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const breadcrumbs = [
    { label: "Contact Us" }
  ];

  return (
    <div style={{ padding: "3rem 0" }}>
      <div className="container" style={{ maxWidth: "700px" }}>
        <Breadcrumbs items={breadcrumbs} />
        
        <h1 className="heading-lg" style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Contact Us</h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", lineHeight: "1.6" }}>
          Have any feedback, tool requests, or custom optimization ideas? Send us a message and our development team will review it.
        </p>

        <div className="glass-card" style={{ padding: "2rem" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "1.5rem", border: "1px solid var(--success)", backgroundColor: "var(--success-light)", color: "var(--success)", borderRadius: "8px" }}>
              <MessageSquare size={32} style={{ marginBottom: "0.5rem" }} />
              <h3>Message Sent Successfully!</h3>
              <p style={{ fontSize: "0.9rem", marginTop: "0.25rem" }}>Thank you for reaching out to ILoveConvert. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Your Name</label>
                <input 
                  type="text" 
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{ width: "100%", padding: "0.6rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)" }} 
                />
              </div>

              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Your Email</label>
                <input 
                  type="email" 
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{ width: "100%", padding: "0.6rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)" }} 
                />
              </div>

              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Message Content</label>
                <textarea 
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ width: "100%", padding: "0.6rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)" }} 
                />
              </div>

              <div style={{ textAlign: "right" }}>
                <button type="submit" className="btn btn-primary" style={{ display: "inline-flex", gap: "0.5rem" }}>
                  <Send size={16} /> Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
