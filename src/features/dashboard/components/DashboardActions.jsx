"use client";

import { Button, Modal } from "@/components/ui";
import { useDisclosure } from "@/hooks";

export function DashboardActions() {
  const { isOpen, open, close } = useDisclosure(false);

  return (
    <>
      <Button onClick={open}>Open Quick Insights</Button>
      <Modal title="Quick Insights" isOpen={isOpen} onClose={close}>
        <p className="text-slate-600">
          This modal demonstrates a reusable client-side interaction pattern.
        </p>
      </Modal>
    </>
  );
}
