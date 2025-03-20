import { useState, useRef, useCallback } from 'react';

const useTimer = (
  limit: number,
): {
  countDownTime: number;
  startTimer: VoidFunction;
  stopTimer: VoidFunction;
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
  }, []);

  const resetTimer = useCallback(() => {
    setCountDownTime(limit);
  }, [limit]);

  return { countDownTime, startTimer, stopTimer, resetTimer };
};

export default useTimer;
