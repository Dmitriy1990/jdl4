import { FC, ReactNode, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import { Portal } from "../portal";
import clsx from "clsx";
import styled from "./style.module.scss";
import { ReactComponent as IconClose } from "../../assets/svg/close.svg";

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  small?: boolean;
  wide?: boolean;
};

export const Modal: FC<Props> = ({
  open,
  onClose,
  children,
  small,
  wide,
}: Props) => {
  const pc = {
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    // leave: { opacity: 0, transform: "translateY(100%)" },
  };
  console.log("wide", wide);
  const transitions = useTransition(open, pc);

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return transitions(
    (styles, item) =>
      item && (
        <Portal>
          <div className={styled.wrap} onClick={handleContainerClick}>
            <animated.div style={styles} className={clsx(styled.anim)}>
              <div
                className={clsx(
                  styled.modal,
                  small && styled.small,
                  wide && styled.wide
                )}
              >
                <IconClose className={styled.close} onClick={onClose} />
                <>{children}</>
              </div>
            </animated.div>
          </div>
        </Portal>
      )
  );
};
