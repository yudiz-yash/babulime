"use client";

import { Button } from "../Button/Button";
import styles from "./Modal.module.scss";

export function Modal({ title, isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} role="presentation" onClick={onClose}>
      <div
        className={styles.content}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </header>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
