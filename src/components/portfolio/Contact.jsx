import React, { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Reveal, SectionLabel } from './Reveal';

// Simple validation without zod
function validateForm({ name, email, message }) {
  const errors = {};
  if (!name || !name.trim()) errors.name = 'Required';
  else if (name.trim().length > 100) errors.name = 'Too long';

  if (!email || !email.trim()) errors.email = 'Required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Invalid email';
  else if (email.trim().length > 255) errors.email = 'Too long';

  if (!message || !message.trim()) errors.message = 'Required';
  else if (message.trim().length < 10) errors.message = 'Tell me a bit more';
  else if (message.trim().length > 2000) errors.message = 'Too long';

  return errors;
}

export function Contact() {
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: fd.get('name'),
      email: fd.get('email'),
      message: fd.get('message'),
    };
    const errs = validateForm(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setStatus('error');
      return;
    }
    setErrors({});
    setStatus('ok');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-pad border-t border-hairline">
      <div className="container-px mx-auto max-w-6xl">
        <SectionLabel index="07" label="Contact" />

        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <h2 className="font-display text-balance text-5xl leading-[0.98] tracking-tight md:text-6xl">
              Let's build something that lasts.
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Open to freelance, collaboration, and full-time conversations.
              If you're building something thoughtful on the web — product,
              platform, or polish — I'd like to hear about it.
            </p>

            <div className="mt-10 space-y-3">
              {[
                { icon: Mail, label: 'haseeb.ahmad@example.com', href: 'mailto:haseeb.ahmad@example.com' },
                { icon: Github, label: 'github.com/Haseebahmad22', href: 'https://github.com/Haseebahmad22' },
                { icon: Linkedin, label: 'linkedin.com/in/haseeb-ahmad', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center justify-between border-b border-hairline py-3 text-sm transition-colors hover:border-foreground/40"
                >
                  <span className="flex items-center gap-3 text-foreground/90">
                    <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
                    {label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal className="md:col-span-6" delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-hairline bg-surface/50 p-7"
            >
              <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
                Project enquiry
              </div>

              <div className="mt-6 space-y-5">
                <Field label="Name" name="name" error={errors.name} />
                <Field label="Email" name="email" type="email" error={errors.email} />
                <Field label="Project" name="message" textarea error={errors.message} />
              </div>

              <button
                type="submit"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-foreground/90"
              >
                Send message
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {status === 'ok' && (
                <p className="mt-4 text-center text-[12.5px] text-accent">
                  Thanks — I'll be in touch within 48 hours.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', textarea, error }) {
  const base =
    'w-full bg-transparent border-b border-hairline pb-2.5 pt-1 text-[14.5px] text-foreground outline-none transition-colors placeholder:text-muted-foreground/40 focus:border-foreground/60';
  return (
    <label className="block">
      <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
      <div className="mt-2">
        {textarea ? (
          <textarea name={name} rows={4} placeholder="Tell me about it…" className={base} maxLength={2000} />
        ) : (
          <input name={name} type={type} placeholder={type === 'email' ? 'you@company.com' : 'Your name'} className={base} maxLength={255} />
        )}
      </div>
      {error && <p className="mt-1.5 text-[11.5px] text-destructive">{error}</p>}
    </label>
  );
}
