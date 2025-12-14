import { useState, useRef, useCallback, useEffect } from 'react';

const useTimer = (
  limit: number,
  stopTimerCallback?: VoidFunction,
): {
  countDownTime: number;
  startTimer: VoidFunction;
  resetTimer: VoidFunction;
} => {
  const [countDownTime, setCountDownTime] = useState<number>(limit);
  const intervalId = useRef<NodeJS.Timeout>(null);

  const countDown = useCallback(() => {
    setCountDownTime((time) => time - 1);
  }, []);

  const startTimer = useCallback(() => {
    intervalId.current = setInterval(countDown, 1000);
  }, [countDown]);

  const stopTimer = useCallback(() => {
    if (intervalId.current) clearInterval(intervalId.current);
    stopTimerCallback?.();
  }, [stopTimerCallback]);

  const resetTimer = useCallback(() => {
    setCountDownTime(limit);
  }, [limit]);

  useEffect(() => {
    if (countDownTime === 0) {
      stopTimer();
    }
  }, [countDownTime, stopTimer]);

  return { countDownTime, startTimer, resetTimer };
};

export default useTimer;
