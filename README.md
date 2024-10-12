# use-idle-memo
This is `React.useMemo`, but made with `requestIdleCallback` under the hood.
This simple hook memoizes `useMemo` computations (and preserves references), but uses `requestIdleCallback`, so the first computation is done during the component mount, and all further will be deferred.