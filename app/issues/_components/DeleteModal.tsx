import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  PropsWithChildren,
} from "react";

const DeleteModal = forwardRef(({ children }: PropsWithChildren, ref) => {
  const [isVisible, setVisible] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setVisible(true),
      close: () => setVisible(false),
    };
  });

  return (
    <>
      {isVisible && (
        <>
          <div
            className="fixed cursor-pointer inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={() => setVisible(false)}
          />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
});

export default DeleteModal;

/**
 * 
 *  return (
    <>
      {isVisible && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={() => setVisible(false)}
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
 */
