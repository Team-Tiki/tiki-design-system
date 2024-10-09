import Toast from "ui/components/Toast/Toast";

import { useToastAction, useToastList } from "ui/store";

const ToastFactory = () => {
  const toastList = useToastList();

  const { removeToast } = useToastAction();

  return (
    <>
      {toastList.map((toast) => (
        <Toast
          key={toast.id}
          onClose={() => removeToast(toast.id)}
          variant={toast.variant}
        >
          {toast.message}
        </Toast>
      ))}
    </>
  );
};

export default ToastFactory;
