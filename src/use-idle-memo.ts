import * as React from "react";
import { schedule } from "./schedule";

export const useIdleMemo = <TReturn>(
  cb: () => TReturn,
  deps: ReadonlyArray<unknown>,
) => {
  const [state, setState] = React.useState(cb);
  const mountedRef = React.useRef(false);

  React.useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    return schedule(() => {
      const newState = cb();
      setState(newState);
    });
  }, deps);

  return state;
};
