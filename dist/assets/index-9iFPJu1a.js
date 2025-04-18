(function () {
  const O = document.createElement("link").relList;
  if (O && O.supports && O.supports("modulepreload")) return;
  for (const H of document.querySelectorAll('link[rel="modulepreload"]')) r(H);
  new MutationObserver((H) => {
    for (const C of H)
      if (C.type === "childList")
        for (const k of C.addedNodes)
          k.tagName === "LINK" && k.rel === "modulepreload" && r(k);
  }).observe(document, { childList: !0, subtree: !0 });
  function p(H) {
    const C = {};
    return (
      H.integrity && (C.integrity = H.integrity),
      H.referrerPolicy && (C.referrerPolicy = H.referrerPolicy),
      H.crossOrigin === "use-credentials"
        ? (C.credentials = "include")
        : H.crossOrigin === "anonymous"
        ? (C.credentials = "omit")
        : (C.credentials = "same-origin"),
      C
    );
  }
  function r(H) {
    if (H.ep) return;
    H.ep = !0;
    const C = p(H);
    fetch(H.href, C);
  }
})();
function Q1(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default")
    ? y.default
    : y;
}
var ui = { exports: {} },
  Au = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nr;
function V1() {
  if (nr) return Au;
  nr = 1;
  var y = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.fragment");
  function p(r, H, C) {
    var k = null;
    if (
      (C !== void 0 && (k = "" + C),
      H.key !== void 0 && (k = "" + H.key),
      "key" in H)
    ) {
      C = {};
      for (var cl in H) cl !== "key" && (C[cl] = H[cl]);
    } else C = H;
    return (
      (H = C.ref),
      { $$typeof: y, type: r, key: k, ref: H !== void 0 ? H : null, props: C }
    );
  }
  return (Au.Fragment = O), (Au.jsx = p), (Au.jsxs = p), Au;
}
var cr;
function w1() {
  return cr || ((cr = 1), (ui.exports = V1())), ui.exports;
}
var E = w1(),
  ni = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fr;
function Z1() {
  if (fr) return V;
  fr = 1;
  var y = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.portal"),
    p = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    H = Symbol.for("react.profiler"),
    C = Symbol.for("react.consumer"),
    k = Symbol.for("react.context"),
    cl = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    z = Symbol.for("react.memo"),
    j = Symbol.for("react.lazy"),
    fl = Symbol.iterator;
  function ll(s) {
    return s === null || typeof s != "object"
      ? null
      : ((s = (fl && s[fl]) || s["@@iterator"]),
        typeof s == "function" ? s : null);
  }
  var zl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    xl = Object.assign,
    J = {};
  function yl(s, x, R) {
    (this.props = s),
      (this.context = x),
      (this.refs = J),
      (this.updater = R || zl);
  }
  (yl.prototype.isReactComponent = {}),
    (yl.prototype.setState = function (s, x) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, s, x, "setState");
    }),
    (yl.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    });
  function Ll() {}
  Ll.prototype = yl.prototype;
  function nt(s, x, R) {
    (this.props = s),
      (this.context = x),
      (this.refs = J),
      (this.updater = R || zl);
  }
  var Ol = (nt.prototype = new Ll());
  (Ol.constructor = nt), xl(Ol, yl.prototype), (Ol.isPureReactComponent = !0);
  var mt = Array.isArray,
    F = { H: null, A: null, T: null, S: null, V: null },
    Kl = Object.prototype.hasOwnProperty;
  function Jl(s, x, R, N, B, $) {
    return (
      (R = $.ref),
      { $$typeof: y, type: s, key: x, ref: R !== void 0 ? R : null, props: $ }
    );
  }
  function kl(s, x) {
    return Jl(s.type, x, void 0, void 0, void 0, s.props);
  }
  function St(s) {
    return typeof s == "object" && s !== null && s.$$typeof === y;
  }
  function Ba(s) {
    var x = { "=": "=0", ":": "=2" };
    return (
      "$" +
      s.replace(/[=:]/g, function (R) {
        return x[R];
      })
    );
  }
  var pt = /\/+/g;
  function Hl(s, x) {
    return typeof s == "object" && s !== null && s.key != null
      ? Ba("" + s.key)
      : x.toString(36);
  }
  function va() {}
  function ha(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (
          (typeof s.status == "string"
            ? s.then(va, va)
            : ((s.status = "pending"),
              s.then(
                function (x) {
                  s.status === "pending" &&
                    ((s.status = "fulfilled"), (s.value = x));
                },
                function (x) {
                  s.status === "pending" &&
                    ((s.status = "rejected"), (s.reason = x));
                }
              )),
          s.status)
        ) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function _l(s, x, R, N, B) {
    var $ = typeof s;
    ($ === "undefined" || $ === "boolean") && (s = null);
    var Q = !1;
    if (s === null) Q = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          Q = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case y:
            case O:
              Q = !0;
              break;
            case j:
              return (Q = s._init), _l(Q(s._payload), x, R, N, B);
          }
      }
    if (Q)
      return (
        (B = B(s)),
        (Q = N === "" ? "." + Hl(s, 0) : N),
        mt(B)
          ? ((R = ""),
            Q != null && (R = Q.replace(pt, "$&/") + "/"),
            _l(B, x, R, "", function (Vt) {
              return Vt;
            }))
          : B != null &&
            (St(B) &&
              (B = kl(
                B,
                R +
                  (B.key == null || (s && s.key === B.key)
                    ? ""
                    : ("" + B.key).replace(pt, "$&/") + "/") +
                  Q
              )),
            x.push(B)),
        1
      );
    Q = 0;
    var Wl = N === "" ? "." : N + ":";
    if (mt(s))
      for (var rl = 0; rl < s.length; rl++)
        (N = s[rl]), ($ = Wl + Hl(N, rl)), (Q += _l(N, x, R, $, B));
    else if (((rl = ll(s)), typeof rl == "function"))
      for (s = rl.call(s), rl = 0; !(N = s.next()).done; )
        (N = N.value), ($ = Wl + Hl(N, rl++)), (Q += _l(N, x, R, $, B));
    else if ($ === "object") {
      if (typeof s.then == "function") return _l(ha(s), x, R, N, B);
      throw (
        ((x = String(s)),
        Error(
          "Objects are not valid as a React child (found: " +
            (x === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : x) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return Q;
  }
  function S(s, x, R) {
    if (s == null) return s;
    var N = [],
      B = 0;
    return (
      _l(s, N, "", "", function ($) {
        return x.call(R, $, B++);
      }),
      N
    );
  }
  function M(s) {
    if (s._status === -1) {
      var x = s._result;
      (x = x()),
        x.then(
          function (R) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 1), (s._result = R));
          },
          function (R) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 2), (s._result = R));
          }
        ),
        s._status === -1 && ((s._status = 0), (s._result = x));
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var X =
    typeof reportError == "function"
      ? reportError
      : function (s) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var x = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof s == "object" &&
                s !== null &&
                typeof s.message == "string"
                  ? String(s.message)
                  : String(s),
              error: s,
            });
            if (!window.dispatchEvent(x)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", s);
            return;
          }
          console.error(s);
        };
  function il() {}
  return (
    (V.Children = {
      map: S,
      forEach: function (s, x, R) {
        S(
          s,
          function () {
            x.apply(this, arguments);
          },
          R
        );
      },
      count: function (s) {
        var x = 0;
        return (
          S(s, function () {
            x++;
          }),
          x
        );
      },
      toArray: function (s) {
        return (
          S(s, function (x) {
            return x;
          }) || []
        );
      },
      only: function (s) {
        if (!St(s))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return s;
      },
    }),
    (V.Component = yl),
    (V.Fragment = p),
    (V.Profiler = H),
    (V.PureComponent = nt),
    (V.StrictMode = r),
    (V.Suspense = D),
    (V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
    (V.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (s) {
        return F.H.useMemoCache(s);
      },
    }),
    (V.cache = function (s) {
      return function () {
        return s.apply(null, arguments);
      };
    }),
    (V.cloneElement = function (s, x, R) {
      if (s == null)
        throw Error(
          "The argument must be a React element, but you passed " + s + "."
        );
      var N = xl({}, s.props),
        B = s.key,
        $ = void 0;
      if (x != null)
        for (Q in (x.ref !== void 0 && ($ = void 0),
        x.key !== void 0 && (B = "" + x.key),
        x))
          !Kl.call(x, Q) ||
            Q === "key" ||
            Q === "__self" ||
            Q === "__source" ||
            (Q === "ref" && x.ref === void 0) ||
            (N[Q] = x[Q]);
      var Q = arguments.length - 2;
      if (Q === 1) N.children = R;
      else if (1 < Q) {
        for (var Wl = Array(Q), rl = 0; rl < Q; rl++)
          Wl[rl] = arguments[rl + 2];
        N.children = Wl;
      }
      return Jl(s.type, B, void 0, void 0, $, N);
    }),
    (V.createContext = function (s) {
      return (
        (s = {
          $$typeof: k,
          _currentValue: s,
          _currentValue2: s,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (s.Provider = s),
        (s.Consumer = { $$typeof: C, _context: s }),
        s
      );
    }),
    (V.createElement = function (s, x, R) {
      var N,
        B = {},
        $ = null;
      if (x != null)
        for (N in (x.key !== void 0 && ($ = "" + x.key), x))
          Kl.call(x, N) &&
            N !== "key" &&
            N !== "__self" &&
            N !== "__source" &&
            (B[N] = x[N]);
      var Q = arguments.length - 2;
      if (Q === 1) B.children = R;
      else if (1 < Q) {
        for (var Wl = Array(Q), rl = 0; rl < Q; rl++)
          Wl[rl] = arguments[rl + 2];
        B.children = Wl;
      }
      if (s && s.defaultProps)
        for (N in ((Q = s.defaultProps), Q)) B[N] === void 0 && (B[N] = Q[N]);
      return Jl(s, $, void 0, void 0, null, B);
    }),
    (V.createRef = function () {
      return { current: null };
    }),
    (V.forwardRef = function (s) {
      return { $$typeof: cl, render: s };
    }),
    (V.isValidElement = St),
    (V.lazy = function (s) {
      return { $$typeof: j, _payload: { _status: -1, _result: s }, _init: M };
    }),
    (V.memo = function (s, x) {
      return { $$typeof: z, type: s, compare: x === void 0 ? null : x };
    }),
    (V.startTransition = function (s) {
      var x = F.T,
        R = {};
      F.T = R;
      try {
        var N = s(),
          B = F.S;
        B !== null && B(R, N),
          typeof N == "object" &&
            N !== null &&
            typeof N.then == "function" &&
            N.then(il, X);
      } catch ($) {
        X($);
      } finally {
        F.T = x;
      }
    }),
    (V.unstable_useCacheRefresh = function () {
      return F.H.useCacheRefresh();
    }),
    (V.use = function (s) {
      return F.H.use(s);
    }),
    (V.useActionState = function (s, x, R) {
      return F.H.useActionState(s, x, R);
    }),
    (V.useCallback = function (s, x) {
      return F.H.useCallback(s, x);
    }),
    (V.useContext = function (s) {
      return F.H.useContext(s);
    }),
    (V.useDebugValue = function () {}),
    (V.useDeferredValue = function (s, x) {
      return F.H.useDeferredValue(s, x);
    }),
    (V.useEffect = function (s, x, R) {
      var N = F.H;
      if (typeof R == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return N.useEffect(s, x);
    }),
    (V.useId = function () {
      return F.H.useId();
    }),
    (V.useImperativeHandle = function (s, x, R) {
      return F.H.useImperativeHandle(s, x, R);
    }),
    (V.useInsertionEffect = function (s, x) {
      return F.H.useInsertionEffect(s, x);
    }),
    (V.useLayoutEffect = function (s, x) {
      return F.H.useLayoutEffect(s, x);
    }),
    (V.useMemo = function (s, x) {
      return F.H.useMemo(s, x);
    }),
    (V.useOptimistic = function (s, x) {
      return F.H.useOptimistic(s, x);
    }),
    (V.useReducer = function (s, x, R) {
      return F.H.useReducer(s, x, R);
    }),
    (V.useRef = function (s) {
      return F.H.useRef(s);
    }),
    (V.useState = function (s) {
      return F.H.useState(s);
    }),
    (V.useSyncExternalStore = function (s, x, R) {
      return F.H.useSyncExternalStore(s, x, R);
    }),
    (V.useTransition = function () {
      return F.H.useTransition();
    }),
    (V.version = "19.1.0"),
    V
  );
}
var ir;
function ri() {
  return ir || ((ir = 1), (ni.exports = Z1())), ni.exports;
}
var Zl = ri();
const _a = Q1(Zl);
var ci = { exports: {} },
  Tu = {},
  fi = { exports: {} },
  ii = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sr;
function L1() {
  return (
    sr ||
      ((sr = 1),
      (function (y) {
        function O(S, M) {
          var X = S.length;
          S.push(M);
          l: for (; 0 < X; ) {
            var il = (X - 1) >>> 1,
              s = S[il];
            if (0 < H(s, M)) (S[il] = M), (S[X] = s), (X = il);
            else break l;
          }
        }
        function p(S) {
          return S.length === 0 ? null : S[0];
        }
        function r(S) {
          if (S.length === 0) return null;
          var M = S[0],
            X = S.pop();
          if (X !== M) {
            S[0] = X;
            l: for (var il = 0, s = S.length, x = s >>> 1; il < x; ) {
              var R = 2 * (il + 1) - 1,
                N = S[R],
                B = R + 1,
                $ = S[B];
              if (0 > H(N, X))
                B < s && 0 > H($, N)
                  ? ((S[il] = $), (S[B] = X), (il = B))
                  : ((S[il] = N), (S[R] = X), (il = R));
              else if (B < s && 0 > H($, X)) (S[il] = $), (S[B] = X), (il = B);
              else break l;
            }
          }
          return M;
        }
        function H(S, M) {
          var X = S.sortIndex - M.sortIndex;
          return X !== 0 ? X : S.id - M.id;
        }
        if (
          ((y.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var C = performance;
          y.unstable_now = function () {
            return C.now();
          };
        } else {
          var k = Date,
            cl = k.now();
          y.unstable_now = function () {
            return k.now() - cl;
          };
        }
        var D = [],
          z = [],
          j = 1,
          fl = null,
          ll = 3,
          zl = !1,
          xl = !1,
          J = !1,
          yl = !1,
          Ll = typeof setTimeout == "function" ? setTimeout : null,
          nt = typeof clearTimeout == "function" ? clearTimeout : null,
          Ol = typeof setImmediate < "u" ? setImmediate : null;
        function mt(S) {
          for (var M = p(z); M !== null; ) {
            if (M.callback === null) r(z);
            else if (M.startTime <= S)
              r(z), (M.sortIndex = M.expirationTime), O(D, M);
            else break;
            M = p(z);
          }
        }
        function F(S) {
          if (((J = !1), mt(S), !xl))
            if (p(D) !== null) (xl = !0), Kl || ((Kl = !0), Hl());
            else {
              var M = p(z);
              M !== null && _l(F, M.startTime - S);
            }
        }
        var Kl = !1,
          Jl = -1,
          kl = 5,
          St = -1;
        function Ba() {
          return yl ? !0 : !(y.unstable_now() - St < kl);
        }
        function pt() {
          if (((yl = !1), Kl)) {
            var S = y.unstable_now();
            St = S;
            var M = !0;
            try {
              l: {
                (xl = !1), J && ((J = !1), nt(Jl), (Jl = -1)), (zl = !0);
                var X = ll;
                try {
                  t: {
                    for (
                      mt(S), fl = p(D);
                      fl !== null && !(fl.expirationTime > S && Ba());

                    ) {
                      var il = fl.callback;
                      if (typeof il == "function") {
                        (fl.callback = null), (ll = fl.priorityLevel);
                        var s = il(fl.expirationTime <= S);
                        if (((S = y.unstable_now()), typeof s == "function")) {
                          (fl.callback = s), mt(S), (M = !0);
                          break t;
                        }
                        fl === p(D) && r(D), mt(S);
                      } else r(D);
                      fl = p(D);
                    }
                    if (fl !== null) M = !0;
                    else {
                      var x = p(z);
                      x !== null && _l(F, x.startTime - S), (M = !1);
                    }
                  }
                  break l;
                } finally {
                  (fl = null), (ll = X), (zl = !1);
                }
                M = void 0;
              }
            } finally {
              M ? Hl() : (Kl = !1);
            }
          }
        }
        var Hl;
        if (typeof Ol == "function")
          Hl = function () {
            Ol(pt);
          };
        else if (typeof MessageChannel < "u") {
          var va = new MessageChannel(),
            ha = va.port2;
          (va.port1.onmessage = pt),
            (Hl = function () {
              ha.postMessage(null);
            });
        } else
          Hl = function () {
            Ll(pt, 0);
          };
        function _l(S, M) {
          Jl = Ll(function () {
            S(y.unstable_now());
          }, M);
        }
        (y.unstable_IdlePriority = 5),
          (y.unstable_ImmediatePriority = 1),
          (y.unstable_LowPriority = 4),
          (y.unstable_NormalPriority = 3),
          (y.unstable_Profiling = null),
          (y.unstable_UserBlockingPriority = 2),
          (y.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (y.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (kl = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (y.unstable_getCurrentPriorityLevel = function () {
            return ll;
          }),
          (y.unstable_next = function (S) {
            switch (ll) {
              case 1:
              case 2:
              case 3:
                var M = 3;
                break;
              default:
                M = ll;
            }
            var X = ll;
            ll = M;
            try {
              return S();
            } finally {
              ll = X;
            }
          }),
          (y.unstable_requestPaint = function () {
            yl = !0;
          }),
          (y.unstable_runWithPriority = function (S, M) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var X = ll;
            ll = S;
            try {
              return M();
            } finally {
              ll = X;
            }
          }),
          (y.unstable_scheduleCallback = function (S, M, X) {
            var il = y.unstable_now();
            switch (
              (typeof X == "object" && X !== null
                ? ((X = X.delay),
                  (X = typeof X == "number" && 0 < X ? il + X : il))
                : (X = il),
              S)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (s = X + s),
              (S = {
                id: j++,
                callback: M,
                priorityLevel: S,
                startTime: X,
                expirationTime: s,
                sortIndex: -1,
              }),
              X > il
                ? ((S.sortIndex = X),
                  O(z, S),
                  p(D) === null &&
                    S === p(z) &&
                    (J ? (nt(Jl), (Jl = -1)) : (J = !0), _l(F, X - il)))
                : ((S.sortIndex = s),
                  O(D, S),
                  xl || zl || ((xl = !0), Kl || ((Kl = !0), Hl()))),
              S
            );
          }),
          (y.unstable_shouldYield = Ba),
          (y.unstable_wrapCallback = function (S) {
            var M = ll;
            return function () {
              var X = ll;
              ll = M;
              try {
                return S.apply(this, arguments);
              } finally {
                ll = X;
              }
            };
          });
      })(ii)),
    ii
  );
}
var or;
function K1() {
  return or || ((or = 1), (fi.exports = L1())), fi.exports;
}
var si = { exports: {} },
  ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rr;
function J1() {
  if (rr) return ql;
  rr = 1;
  var y = ri();
  function O(D) {
    var z = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      z += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        z += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return (
      "Minified React error #" +
      D +
      "; visit " +
      z +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function p() {}
  var r = {
      d: {
        f: p,
        r: function () {
          throw Error(O(522));
        },
        D: p,
        C: p,
        L: p,
        m: p,
        X: p,
        S: p,
        M: p,
      },
      p: 0,
      findDOMNode: null,
    },
    H = Symbol.for("react.portal");
  function C(D, z, j) {
    var fl =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: H,
      key: fl == null ? null : "" + fl,
      children: D,
      containerInfo: z,
      implementation: j,
    };
  }
  var k = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function cl(D, z) {
    if (D === "font") return "";
    if (typeof z == "string") return z === "use-credentials" ? z : "";
  }
  return (
    (ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (ql.createPortal = function (D, z) {
      var j =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!z || (z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11))
        throw Error(O(299));
      return C(D, z, null, j);
    }),
    (ql.flushSync = function (D) {
      var z = k.T,
        j = r.p;
      try {
        if (((k.T = null), (r.p = 2), D)) return D();
      } finally {
        (k.T = z), (r.p = j), r.d.f();
      }
    }),
    (ql.preconnect = function (D, z) {
      typeof D == "string" &&
        (z
          ? ((z = z.crossOrigin),
            (z =
              typeof z == "string"
                ? z === "use-credentials"
                  ? z
                  : ""
                : void 0))
          : (z = null),
        r.d.C(D, z));
    }),
    (ql.prefetchDNS = function (D) {
      typeof D == "string" && r.d.D(D);
    }),
    (ql.preinit = function (D, z) {
      if (typeof D == "string" && z && typeof z.as == "string") {
        var j = z.as,
          fl = cl(j, z.crossOrigin),
          ll = typeof z.integrity == "string" ? z.integrity : void 0,
          zl = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
        j === "style"
          ? r.d.S(D, typeof z.precedence == "string" ? z.precedence : void 0, {
              crossOrigin: fl,
              integrity: ll,
              fetchPriority: zl,
            })
          : j === "script" &&
            r.d.X(D, {
              crossOrigin: fl,
              integrity: ll,
              fetchPriority: zl,
              nonce: typeof z.nonce == "string" ? z.nonce : void 0,
            });
      }
    }),
    (ql.preinitModule = function (D, z) {
      if (typeof D == "string")
        if (typeof z == "object" && z !== null) {
          if (z.as == null || z.as === "script") {
            var j = cl(z.as, z.crossOrigin);
            r.d.M(D, {
              crossOrigin: j,
              integrity: typeof z.integrity == "string" ? z.integrity : void 0,
              nonce: typeof z.nonce == "string" ? z.nonce : void 0,
            });
          }
        } else z == null && r.d.M(D);
    }),
    (ql.preload = function (D, z) {
      if (
        typeof D == "string" &&
        typeof z == "object" &&
        z !== null &&
        typeof z.as == "string"
      ) {
        var j = z.as,
          fl = cl(j, z.crossOrigin);
        r.d.L(D, j, {
          crossOrigin: fl,
          integrity: typeof z.integrity == "string" ? z.integrity : void 0,
          nonce: typeof z.nonce == "string" ? z.nonce : void 0,
          type: typeof z.type == "string" ? z.type : void 0,
          fetchPriority:
            typeof z.fetchPriority == "string" ? z.fetchPriority : void 0,
          referrerPolicy:
            typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0,
          imageSrcSet:
            typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0,
          imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0,
          media: typeof z.media == "string" ? z.media : void 0,
        });
      }
    }),
    (ql.preloadModule = function (D, z) {
      if (typeof D == "string")
        if (z) {
          var j = cl(z.as, z.crossOrigin);
          r.d.m(D, {
            as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
            crossOrigin: j,
            integrity: typeof z.integrity == "string" ? z.integrity : void 0,
          });
        } else r.d.m(D);
    }),
    (ql.requestFormReset = function (D) {
      r.d.r(D);
    }),
    (ql.unstable_batchedUpdates = function (D, z) {
      return D(z);
    }),
    (ql.useFormState = function (D, z, j) {
      return k.H.useFormState(D, z, j);
    }),
    (ql.useFormStatus = function () {
      return k.H.useHostTransitionStatus();
    }),
    (ql.version = "19.1.0"),
    ql
  );
}
var dr;
function k1() {
  if (dr) return si.exports;
  dr = 1;
  function y() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (O) {
        console.error(O);
      }
  }
  return y(), (si.exports = J1()), si.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vr;
function W1() {
  if (vr) return Tu;
  vr = 1;
  var y = K1(),
    O = ri(),
    p = k1();
  function r(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function H(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function C(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function k(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function cl(l) {
    if (C(l) !== l) throw Error(r(188));
  }
  function D(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = C(l)), t === null)) throw Error(r(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((e = u.return), e !== null)) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return cl(u), l;
          if (n === e) return cl(u), t;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== e.return) (a = u), (e = n);
      else {
        for (var c = !1, f = u.child; f; ) {
          if (f === a) {
            (c = !0), (a = u), (e = n);
            break;
          }
          if (f === e) {
            (c = !0), (e = u), (a = n);
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = n.child; f; ) {
            if (f === a) {
              (c = !0), (a = n), (e = u);
              break;
            }
            if (f === e) {
              (c = !0), (e = n), (a = u);
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (a.alternate !== e) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? l : t;
  }
  function z(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = z(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var j = Object.assign,
    fl = Symbol.for("react.element"),
    ll = Symbol.for("react.transitional.element"),
    zl = Symbol.for("react.portal"),
    xl = Symbol.for("react.fragment"),
    J = Symbol.for("react.strict_mode"),
    yl = Symbol.for("react.profiler"),
    Ll = Symbol.for("react.provider"),
    nt = Symbol.for("react.consumer"),
    Ol = Symbol.for("react.context"),
    mt = Symbol.for("react.forward_ref"),
    F = Symbol.for("react.suspense"),
    Kl = Symbol.for("react.suspense_list"),
    Jl = Symbol.for("react.memo"),
    kl = Symbol.for("react.lazy"),
    St = Symbol.for("react.activity"),
    Ba = Symbol.for("react.memo_cache_sentinel"),
    pt = Symbol.iterator;
  function Hl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (pt && l[pt]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var va = Symbol.for("react.client.reference");
  function ha(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === va ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case xl:
        return "Fragment";
      case yl:
        return "Profiler";
      case J:
        return "StrictMode";
      case F:
        return "Suspense";
      case Kl:
        return "SuspenseList";
      case St:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case zl:
          return "Portal";
        case Ol:
          return (l.displayName || "Context") + ".Provider";
        case nt:
          return (l._context.displayName || "Context") + ".Consumer";
        case mt:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case Jl:
          return (
            (t = l.displayName || null), t !== null ? t : ha(l.type) || "Memo"
          );
        case kl:
          (t = l._payload), (l = l._init);
          try {
            return ha(l(t));
          } catch {}
      }
    return null;
  }
  var _l = Array.isArray,
    S = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    M = p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = { pending: !1, data: null, method: null, action: null },
    il = [],
    s = -1;
  function x(l) {
    return { current: l };
  }
  function R(l) {
    0 > s || ((l.current = il[s]), (il[s] = null), s--);
  }
  function N(l, t) {
    s++, (il[s] = l.current), (l.current = t);
  }
  var B = x(null),
    $ = x(null),
    Q = x(null),
    Wl = x(null);
  function rl(l, t) {
    switch ((N(Q, t), N($, l), N(B, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? H0(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = H0(t)), (l = _0(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    R(B), N(B, l);
  }
  function Vt() {
    R(B), R($), R(Q);
  }
  function Vn(l) {
    l.memoizedState !== null && N(Wl, l);
    var t = B.current,
      a = _0(t, l.type);
    t !== a && (N($, l), N(B, a));
  }
  function zu(l) {
    $.current === l && (R(B), R($)),
      Wl.current === l && (R(Wl), (mu._currentValue = X));
  }
  var wn = Object.prototype.hasOwnProperty,
    Zn = y.unstable_scheduleCallback,
    Ln = y.unstable_cancelCallback,
    Sr = y.unstable_shouldYield,
    Ar = y.unstable_requestPaint,
    At = y.unstable_now,
    Tr = y.unstable_getCurrentPriorityLevel,
    di = y.unstable_ImmediatePriority,
    vi = y.unstable_UserBlockingPriority,
    xu = y.unstable_NormalPriority,
    Er = y.unstable_LowPriority,
    hi = y.unstable_IdlePriority,
    zr = y.log,
    xr = y.unstable_setDisableYieldValue,
    ze = null,
    Fl = null;
  function wt(l) {
    if (
      (typeof zr == "function" && xr(l),
      Fl && typeof Fl.setStrictMode == "function")
    )
      try {
        Fl.setStrictMode(ze, l);
      } catch {}
  }
  var $l = Math.clz32 ? Math.clz32 : Nr,
    Or = Math.log,
    pr = Math.LN2;
  function Nr(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((Or(l) / pr) | 0)) | 0;
  }
  var Ou = 256,
    pu = 4194304;
  function ma(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Nu(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var f = e & 134217727;
    return (
      f !== 0
        ? ((e = f & ~n),
          e !== 0
            ? (u = ma(e))
            : ((c &= f),
              c !== 0
                ? (u = ma(c))
                : a || ((a = f & ~l), a !== 0 && (u = ma(a)))))
        : ((f = e & ~n),
          f !== 0
            ? (u = ma(f))
            : c !== 0
            ? (u = ma(c))
            : a || ((a = e & ~l), a !== 0 && (u = ma(a)))),
      u === 0
        ? 0
        : t !== 0 &&
          t !== u &&
          (t & n) === 0 &&
          ((n = u & -u),
          (a = t & -t),
          n >= a || (n === 32 && (a & 4194048) !== 0))
        ? t
        : u
    );
  }
  function xe(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Mr(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function mi() {
    var l = Ou;
    return (Ou <<= 1), (Ou & 4194048) === 0 && (Ou = 256), l;
  }
  function yi() {
    var l = pu;
    return (pu <<= 1), (pu & 62914560) === 0 && (pu = 4194304), l;
  }
  function Kn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Oe(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function Dr(l, t, a, e, u, n) {
    var c = l.pendingLanes;
    (l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0);
    var f = l.entanglements,
      i = l.expirationTimes,
      h = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var b = 31 - $l(a),
        T = 1 << b;
      (f[b] = 0), (i[b] = -1);
      var m = h[b];
      if (m !== null)
        for (h[b] = null, b = 0; b < m.length; b++) {
          var g = m[b];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~T;
    }
    e !== 0 && gi(l, e, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function gi(l, t, a) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var e = 31 - $l(t);
    (l.entangledLanes |= t),
      (l.entanglements[e] = l.entanglements[e] | 1073741824 | (a & 4194090));
  }
  function bi(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var e = 31 - $l(a),
        u = 1 << e;
      (u & t) | (l[e] & t) && (l[e] |= t), (a &= ~u);
    }
  }
  function Jn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function kn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Si() {
    var l = M.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : P0(l.type));
  }
  function Rr(l, t) {
    var a = M.p;
    try {
      return (M.p = l), t();
    } finally {
      M.p = a;
    }
  }
  var Zt = Math.random().toString(36).slice(2),
    Bl = "__reactFiber$" + Zt,
    Xl = "__reactProps$" + Zt,
    Ya = "__reactContainer$" + Zt,
    Wn = "__reactEvents$" + Zt,
    Ur = "__reactListeners$" + Zt,
    jr = "__reactHandles$" + Zt,
    Ai = "__reactResources$" + Zt,
    pe = "__reactMarker$" + Zt;
  function Fn(l) {
    delete l[Bl], delete l[Xl], delete l[Wn], delete l[Ur], delete l[jr];
  }
  function qa(l) {
    var t = l[Bl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Ya] || a[Bl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = C0(l); l !== null; ) {
            if ((a = l[Bl])) return a;
            l = C0(l);
          }
        return t;
      }
      (l = a), (a = l.parentNode);
    }
    return null;
  }
  function Ca(l) {
    if ((l = l[Bl] || l[Ya])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Ne(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(r(33));
  }
  function Xa(l) {
    var t = l[Ai];
    return (
      t ||
        (t = l[Ai] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function pl(l) {
    l[pe] = !0;
  }
  var Ti = new Set(),
    Ei = {};
  function ya(l, t) {
    Ga(l, t), Ga(l + "Capture", t);
  }
  function Ga(l, t) {
    for (Ei[l] = t, l = 0; l < t.length; l++) Ti.add(t[l]);
  }
  var Hr = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    zi = {},
    xi = {};
  function _r(l) {
    return wn.call(xi, l)
      ? !0
      : wn.call(zi, l)
      ? !1
      : Hr.test(l)
      ? (xi[l] = !0)
      : ((zi[l] = !0), !1);
  }
  function Mu(l, t, a) {
    if (_r(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Du(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Nt(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
    }
  }
  var $n, Oi;
  function Qa(l) {
    if ($n === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ($n = (t && t[1]) || ""),
          (Oi =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      $n +
      l +
      Oi
    );
  }
  var In = !1;
  function Pn(l, t) {
    if (!l || In) return "";
    In = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var T = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(T.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(T, []);
                } catch (g) {
                  var m = g;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (g) {
                  m = g;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                m = g;
              }
              (T = l()) &&
                typeof T.catch == "function" &&
                T.catch(function () {});
            }
          } catch (g) {
            if (g && m && typeof g.stack == "string") return [g.stack, m.stack];
          }
          return [null, null];
        },
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = e.DetermineComponentFrameRoot(),
        c = n[0],
        f = n[1];
      if (c && f) {
        var i = c.split(`
`),
          h = f.split(`
`);
        for (
          u = e = 0;
          e < i.length && !i[e].includes("DetermineComponentFrameRoot");

        )
          e++;
        for (; u < h.length && !h[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (e === i.length || u === h.length)
          for (
            e = i.length - 1, u = h.length - 1;
            1 <= e && 0 <= u && i[e] !== h[u];

          )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (i[e] !== h[u]) {
            if (e !== 1 || u !== 1)
              do
                if ((e--, u--, 0 > u || i[e] !== h[u])) {
                  var b =
                    `
` + i[e].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      b.includes("<anonymous>") &&
                      (b = b.replace("<anonymous>", l.displayName)),
                    b
                  );
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      (In = !1), (Error.prepareStackTrace = a);
    }
    return (a = l ? l.displayName || l.name : "") ? Qa(a) : "";
  }
  function Br(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Qa(l.type);
      case 16:
        return Qa("Lazy");
      case 13:
        return Qa("Suspense");
      case 19:
        return Qa("SuspenseList");
      case 0:
      case 15:
        return Pn(l.type, !1);
      case 11:
        return Pn(l.type.render, !1);
      case 1:
        return Pn(l.type, !0);
      case 31:
        return Qa("Activity");
      default:
        return "";
    }
  }
  function pi(l) {
    try {
      var t = "";
      do (t += Br(l)), (l = l.return);
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function ct(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Ni(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Yr(l) {
    var t = Ni(l) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      e = "" + l[t];
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (c) {
            (e = "" + c), n.call(this, c);
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (c) {
            e = "" + c;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function Ru(l) {
    l._valueTracker || (l._valueTracker = Yr(l));
  }
  function Mi(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      e = "";
    return (
      l && (e = Ni(l) ? (l.checked ? "true" : "false") : l.value),
      (l = e),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function Uu(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var qr = /[\n"\\]/g;
  function ft(l) {
    return l.replace(qr, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function lc(l, t, a, e, u, n, c, f) {
    (l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + ct(t))
          : l.value !== "" + ct(t) && (l.value = "" + ct(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? tc(l, c, ct(t))
        : a != null
        ? tc(l, c, ct(a))
        : e != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.name = "" + ct(f))
        : l.removeAttribute("name");
  }
  function Di(l, t, a, e, u, n, c, f) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) return;
      (a = a != null ? "" + ct(a) : ""),
        (t = t != null ? "" + ct(t) : a),
        f || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (e = e ?? u),
      (e = typeof e != "function" && typeof e != "symbol" && !!e),
      (l.checked = f ? l.checked : !!e),
      (l.defaultChecked = !!e),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c);
  }
  function tc(l, t, a) {
    (t === "number" && Uu(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function Va(l, t, a, e) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
      for (a = 0; a < l.length; a++)
        (u = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== u && (l[a].selected = u),
          u && e && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + ct(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          (l[u].selected = !0), e && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ri(l, t, a) {
    if (
      t != null &&
      ((t = "" + ct(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ct(a) : "";
  }
  function Ui(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(r(92));
        if (_l(e)) {
          if (1 < e.length) throw Error(r(93));
          e = e[0];
        }
        a = e;
      }
      a == null && (a = ""), (t = a);
    }
    (a = ct(t)),
      (l.defaultValue = a),
      (e = l.textContent),
      e === a && e !== "" && e !== null && (l.value = e);
  }
  function wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Cr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ji(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? e
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : e
      ? l.setProperty(t, a)
      : typeof a != "number" || a === 0 || Cr.has(t)
      ? t === "float"
        ? (l.cssFloat = a)
        : (l[t] = ("" + a).trim())
      : (l[t] = a + "px");
  }
  function Hi(l, t, a) {
    if (t != null && typeof t != "object") throw Error(r(62));
    if (((l = l.style), a != null)) {
      for (var e in a)
        !a.hasOwnProperty(e) ||
          (t != null && t.hasOwnProperty(e)) ||
          (e.indexOf("--") === 0
            ? l.setProperty(e, "")
            : e === "float"
            ? (l.cssFloat = "")
            : (l[e] = ""));
      for (var u in t)
        (e = t[u]), t.hasOwnProperty(u) && a[u] !== e && ji(l, u, e);
    } else for (var n in t) t.hasOwnProperty(n) && ji(l, n, t[n]);
  }
  function ac(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Xr = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Gr =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ju(l) {
    return Gr.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var ec = null;
  function uc(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Za = null,
    La = null;
  function _i(l) {
    var t = Ca(l);
    if (t && (l = t.stateNode)) {
      var a = l[Xl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (lc(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + ft("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[Xl] || null;
                if (!u) throw Error(r(90));
                lc(
                  e,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              (e = a[t]), e.form === l.form && Mi(e);
          }
          break l;
        case "textarea":
          Ri(l, a.value, a.defaultValue);
          break l;
        case "select":
          (t = a.value), t != null && Va(l, !!a.multiple, t, !1);
      }
    }
  }
  var nc = !1;
  function Bi(l, t, a) {
    if (nc) return l(t, a);
    nc = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (
        ((nc = !1),
        (Za !== null || La !== null) &&
          (bn(), Za && ((t = Za), (l = La), (La = Za = null), _i(t), l)))
      )
        for (t = 0; t < l.length; t++) _i(l[t]);
    }
  }
  function Me(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[Xl] || null;
    if (e === null) return null;
    a = e[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (e = !e.disabled) ||
          ((l = l.type),
          (e = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !e);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(r(231, t, typeof a));
    return a;
  }
  var Mt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    cc = !1;
  if (Mt)
    try {
      var De = {};
      Object.defineProperty(De, "passive", {
        get: function () {
          cc = !0;
        },
      }),
        window.addEventListener("test", De, De),
        window.removeEventListener("test", De, De);
    } catch {
      cc = !1;
    }
  var Lt = null,
    fc = null,
    Hu = null;
  function Yi() {
    if (Hu) return Hu;
    var l,
      t = fc,
      a = t.length,
      e,
      u = "value" in Lt ? Lt.value : Lt.textContent,
      n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++);
    var c = a - l;
    for (e = 1; e <= c && t[a - e] === u[n - e]; e++);
    return (Hu = u.slice(l, 1 < e ? 1 - e : void 0));
  }
  function _u(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Bu() {
    return !0;
  }
  function qi() {
    return !1;
  }
  function Gl(l) {
    function t(a, e, u, n, c) {
      (this._reactName = a),
        (this._targetInst = u),
        (this.type = e),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null);
      for (var f in l)
        l.hasOwnProperty(f) && ((a = l[f]), (this[f] = a ? a(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Bu
          : qi),
        (this.isPropagationStopped = qi),
        this
      );
    }
    return (
      j(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Bu));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Bu));
        },
        persist: function () {},
        isPersistent: Bu,
      }),
      t
    );
  }
  var ga = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Yu = Gl(ga),
    Re = j({}, ga, { view: 0, detail: 0 }),
    Qr = Gl(Re),
    ic,
    sc,
    Ue,
    qu = j({}, Re, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: rc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Ue &&
              (Ue && l.type === "mousemove"
                ? ((ic = l.screenX - Ue.screenX), (sc = l.screenY - Ue.screenY))
                : (sc = ic = 0),
              (Ue = l)),
            ic);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : sc;
      },
    }),
    Ci = Gl(qu),
    Vr = j({}, qu, { dataTransfer: 0 }),
    wr = Gl(Vr),
    Zr = j({}, Re, { relatedTarget: 0 }),
    oc = Gl(Zr),
    Lr = j({}, ga, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Kr = Gl(Lr),
    Jr = j({}, ga, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    kr = Gl(Jr),
    Wr = j({}, ga, { data: 0 }),
    Xi = Gl(Wr),
    Fr = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    $r = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Ir = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Pr(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = Ir[l])
      ? !!t[l]
      : !1;
  }
  function rc() {
    return Pr;
  }
  var ld = j({}, Re, {
      key: function (l) {
        if (l.key) {
          var t = Fr[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = _u(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? $r[l.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: rc,
      charCode: function (l) {
        return l.type === "keypress" ? _u(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? _u(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    td = Gl(ld),
    ad = j({}, qu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Gi = Gl(ad),
    ed = j({}, Re, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: rc,
    }),
    ud = Gl(ed),
    nd = j({}, ga, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cd = Gl(nd),
    fd = j({}, qu, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    id = Gl(fd),
    sd = j({}, ga, { newState: 0, oldState: 0 }),
    od = Gl(sd),
    rd = [9, 13, 27, 32],
    dc = Mt && "CompositionEvent" in window,
    je = null;
  Mt && "documentMode" in document && (je = document.documentMode);
  var dd = Mt && "TextEvent" in window && !je,
    Qi = Mt && (!dc || (je && 8 < je && 11 >= je)),
    Vi = " ",
    wi = !1;
  function Zi(l, t) {
    switch (l) {
      case "keyup":
        return rd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Li(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ka = !1;
  function vd(l, t) {
    switch (l) {
      case "compositionend":
        return Li(t);
      case "keypress":
        return t.which !== 32 ? null : ((wi = !0), Vi);
      case "textInput":
        return (l = t.data), l === Vi && wi ? null : l;
      default:
        return null;
    }
  }
  function hd(l, t) {
    if (Ka)
      return l === "compositionend" || (!dc && Zi(l, t))
        ? ((l = Yi()), (Hu = fc = Lt = null), (Ka = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Qi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var md = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ki(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!md[l.type] : t === "textarea";
  }
  function Ji(l, t, a, e) {
    Za ? (La ? La.push(e) : (La = [e])) : (Za = e),
      (t = xn(t, "onChange")),
      0 < t.length &&
        ((a = new Yu("onChange", "change", null, a, e)),
        l.push({ event: a, listeners: t }));
  }
  var He = null,
    _e = null;
  function yd(l) {
    M0(l, 0);
  }
  function Cu(l) {
    var t = Ne(l);
    if (Mi(t)) return l;
  }
  function ki(l, t) {
    if (l === "change") return t;
  }
  var Wi = !1;
  if (Mt) {
    var vc;
    if (Mt) {
      var hc = "oninput" in document;
      if (!hc) {
        var Fi = document.createElement("div");
        Fi.setAttribute("oninput", "return;"),
          (hc = typeof Fi.oninput == "function");
      }
      vc = hc;
    } else vc = !1;
    Wi = vc && (!document.documentMode || 9 < document.documentMode);
  }
  function $i() {
    He && (He.detachEvent("onpropertychange", Ii), (_e = He = null));
  }
  function Ii(l) {
    if (l.propertyName === "value" && Cu(_e)) {
      var t = [];
      Ji(t, _e, l, uc(l)), Bi(yd, t);
    }
  }
  function gd(l, t, a) {
    l === "focusin"
      ? ($i(), (He = t), (_e = a), He.attachEvent("onpropertychange", Ii))
      : l === "focusout" && $i();
  }
  function bd(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Cu(_e);
  }
  function Sd(l, t) {
    if (l === "click") return Cu(t);
  }
  function Ad(l, t) {
    if (l === "input" || l === "change") return Cu(t);
  }
  function Td(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var Il = typeof Object.is == "function" ? Object.is : Td;
  function Be(l, t) {
    if (Il(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!wn.call(t, u) || !Il(l[u], t[u])) return !1;
    }
    return !0;
  }
  function Pi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ls(l, t) {
    var a = Pi(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (((e = l + a.textContent.length), l <= t && e >= t))
          return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Pi(a);
    }
  }
  function ts(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? ts(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function as(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Uu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Uu(l.document);
    }
    return t;
  }
  function mc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Ed = Mt && "documentMode" in document && 11 >= document.documentMode,
    Ja = null,
    yc = null,
    Ye = null,
    gc = !1;
  function es(l, t, a) {
    var e =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    gc ||
      Ja == null ||
      Ja !== Uu(e) ||
      ((e = Ja),
      "selectionStart" in e && mc(e)
        ? (e = { start: e.selectionStart, end: e.selectionEnd })
        : ((e = (
            (e.ownerDocument && e.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (e = {
            anchorNode: e.anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset,
          })),
      (Ye && Be(Ye, e)) ||
        ((Ye = e),
        (e = xn(yc, "onSelect")),
        0 < e.length &&
          ((t = new Yu("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: e }),
          (t.target = Ja))));
  }
  function ba(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var ka = {
      animationend: ba("Animation", "AnimationEnd"),
      animationiteration: ba("Animation", "AnimationIteration"),
      animationstart: ba("Animation", "AnimationStart"),
      transitionrun: ba("Transition", "TransitionRun"),
      transitionstart: ba("Transition", "TransitionStart"),
      transitioncancel: ba("Transition", "TransitionCancel"),
      transitionend: ba("Transition", "TransitionEnd"),
    },
    bc = {},
    us = {};
  Mt &&
    ((us = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ka.animationend.animation,
      delete ka.animationiteration.animation,
      delete ka.animationstart.animation),
    "TransitionEvent" in window || delete ka.transitionend.transition);
  function Sa(l) {
    if (bc[l]) return bc[l];
    if (!ka[l]) return l;
    var t = ka[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in us) return (bc[l] = t[a]);
    return l;
  }
  var ns = Sa("animationend"),
    cs = Sa("animationiteration"),
    fs = Sa("animationstart"),
    zd = Sa("transitionrun"),
    xd = Sa("transitionstart"),
    Od = Sa("transitioncancel"),
    is = Sa("transitionend"),
    ss = new Map(),
    Sc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Sc.push("scrollEnd");
  function yt(l, t) {
    ss.set(l, t), ya(t, [l]);
  }
  var os = new WeakMap();
  function it(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = os.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: pi(t) }), os.set(l, t), t);
    }
    return { value: l, source: t, stack: pi(t) };
  }
  var st = [],
    Wa = 0,
    Ac = 0;
  function Xu() {
    for (var l = Wa, t = (Ac = Wa = 0); t < l; ) {
      var a = st[t];
      st[t++] = null;
      var e = st[t];
      st[t++] = null;
      var u = st[t];
      st[t++] = null;
      var n = st[t];
      if (((st[t++] = null), e !== null && u !== null)) {
        var c = e.pending;
        c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
          (e.pending = u);
      }
      n !== 0 && rs(a, u, n);
    }
  }
  function Gu(l, t, a, e) {
    (st[Wa++] = l),
      (st[Wa++] = t),
      (st[Wa++] = a),
      (st[Wa++] = e),
      (Ac |= e),
      (l.lanes |= e),
      (l = l.alternate),
      l !== null && (l.lanes |= e);
  }
  function Tc(l, t, a, e) {
    return Gu(l, t, a, e), Qu(l);
  }
  function Fa(l, t) {
    return Gu(l, null, null, t), Qu(l);
  }
  function rs(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = l.return; n !== null; )
      (n.childLanes |= a),
        (e = n.alternate),
        e !== null && (e.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return);
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          t !== null &&
          ((u = 31 - $l(a)),
          (l = n.hiddenUpdates),
          (e = l[u]),
          e === null ? (l[u] = [t]) : e.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Qu(l) {
    if (50 < fu) throw ((fu = 0), (Mf = null), Error(r(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var $a = {};
  function pd(l, t, a, e) {
    (this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = e),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Pl(l, t, a, e) {
    return new pd(l, t, a, e);
  }
  function Ec(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Dt(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = Pl(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function ds(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Vu(l, t, a, e, u, n) {
    var c = 0;
    if (((e = l), typeof l == "function")) Ec(l) && (c = 1);
    else if (typeof l == "string")
      c = M1(l, a, B.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case St:
          return (l = Pl(31, a, t, u)), (l.elementType = St), (l.lanes = n), l;
        case xl:
          return Aa(a.children, u, n, t);
        case J:
          (c = 8), (u |= 24);
          break;
        case yl:
          return (
            (l = Pl(12, a, t, u | 2)), (l.elementType = yl), (l.lanes = n), l
          );
        case F:
          return (l = Pl(13, a, t, u)), (l.elementType = F), (l.lanes = n), l;
        case Kl:
          return (l = Pl(19, a, t, u)), (l.elementType = Kl), (l.lanes = n), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Ll:
              case Ol:
                c = 10;
                break l;
              case nt:
                c = 9;
                break l;
              case mt:
                c = 11;
                break l;
              case Jl:
                c = 14;
                break l;
              case kl:
                (c = 16), (e = null);
                break l;
            }
          (c = 29),
            (a = Error(r(130, l === null ? "null" : typeof l, ""))),
            (e = null);
      }
    return (
      (t = Pl(c, a, t, u)), (t.elementType = l), (t.type = e), (t.lanes = n), t
    );
  }
  function Aa(l, t, a, e) {
    return (l = Pl(7, l, e, t)), (l.lanes = a), l;
  }
  function zc(l, t, a) {
    return (l = Pl(6, l, null, t)), (l.lanes = a), l;
  }
  function xc(l, t, a) {
    return (
      (t = Pl(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var Ia = [],
    Pa = 0,
    wu = null,
    Zu = 0,
    ot = [],
    rt = 0,
    Ta = null,
    Rt = 1,
    Ut = "";
  function Ea(l, t) {
    (Ia[Pa++] = Zu), (Ia[Pa++] = wu), (wu = l), (Zu = t);
  }
  function vs(l, t, a) {
    (ot[rt++] = Rt), (ot[rt++] = Ut), (ot[rt++] = Ta), (Ta = l);
    var e = Rt;
    l = Ut;
    var u = 32 - $l(e) - 1;
    (e &= ~(1 << u)), (a += 1);
    var n = 32 - $l(t) + u;
    if (30 < n) {
      var c = u - (u % 5);
      (n = (e & ((1 << c) - 1)).toString(32)),
        (e >>= c),
        (u -= c),
        (Rt = (1 << (32 - $l(t) + u)) | (a << u) | e),
        (Ut = n + l);
    } else (Rt = (1 << n) | (a << u) | e), (Ut = l);
  }
  function Oc(l) {
    l.return !== null && (Ea(l, 1), vs(l, 1, 0));
  }
  function pc(l) {
    for (; l === wu; )
      (wu = Ia[--Pa]), (Ia[Pa] = null), (Zu = Ia[--Pa]), (Ia[Pa] = null);
    for (; l === Ta; )
      (Ta = ot[--rt]),
        (ot[rt] = null),
        (Ut = ot[--rt]),
        (ot[rt] = null),
        (Rt = ot[--rt]),
        (ot[rt] = null);
  }
  var Cl = null,
    hl = null,
    P = !1,
    za = null,
    Tt = !1,
    Nc = Error(r(519));
  function xa(l) {
    var t = Error(r(418, ""));
    throw (Xe(it(t, l)), Nc);
  }
  function hs(l) {
    var t = l.stateNode,
      a = l.type,
      e = l.memoizedProps;
    switch (((t[Bl] = l), (t[Xl] = e), a)) {
      case "dialog":
        K("cancel", t), K("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        K("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < su.length; a++) K(su[a], t);
        break;
      case "source":
        K("error", t);
        break;
      case "img":
      case "image":
      case "link":
        K("error", t), K("load", t);
        break;
      case "details":
        K("toggle", t);
        break;
      case "input":
        K("invalid", t),
          Di(
            t,
            e.value,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name,
            !0
          ),
          Ru(t);
        break;
      case "select":
        K("invalid", t);
        break;
      case "textarea":
        K("invalid", t), Ui(t, e.value, e.defaultValue, e.children), Ru(t);
    }
    (a = e.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      e.suppressHydrationWarning === !0 ||
      j0(t.textContent, a)
        ? (e.popover != null && (K("beforetoggle", t), K("toggle", t)),
          e.onScroll != null && K("scroll", t),
          e.onScrollEnd != null && K("scrollend", t),
          e.onClick != null && (t.onclick = On),
          (t = !0))
        : (t = !1),
      t || xa(l);
  }
  function ms(l) {
    for (Cl = l.return; Cl; )
      switch (Cl.tag) {
        case 5:
        case 13:
          Tt = !1;
          return;
        case 27:
        case 3:
          Tt = !0;
          return;
        default:
          Cl = Cl.return;
      }
  }
  function qe(l) {
    if (l !== Cl) return !1;
    if (!P) return ms(l), (P = !0), !1;
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Zf(l.type, l.memoizedProps))),
        (a = !a)),
      a && hl && xa(l),
      ms(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(r(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((a = l.data), a === "/$")) {
              if (t === 0) {
                hl = bt(l.nextSibling);
                break l;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          l = l.nextSibling;
        }
        hl = null;
      }
    } else
      t === 27
        ? ((t = hl), fa(l.type) ? ((l = kf), (kf = null), (hl = l)) : (hl = t))
        : (hl = Cl ? bt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ce() {
    (hl = Cl = null), (P = !1);
  }
  function ys() {
    var l = za;
    return (
      l !== null &&
        (wl === null ? (wl = l) : wl.push.apply(wl, l), (za = null)),
      l
    );
  }
  function Xe(l) {
    za === null ? (za = [l]) : za.push(l);
  }
  var Mc = x(null),
    Oa = null,
    jt = null;
  function Kt(l, t, a) {
    N(Mc, t._currentValue), (t._currentValue = a);
  }
  function Ht(l) {
    (l._currentValue = Mc.current), R(Mc);
  }
  function Dc(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), e !== null && (e.childLanes |= t))
          : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function Rc(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var f = n;
          n = u;
          for (var i = 0; i < t.length; i++)
            if (f.context === t[i]) {
              (n.lanes |= a),
                (f = n.alternate),
                f !== null && (f.lanes |= a),
                Dc(n.return, a, l),
                e || (c = null);
              break l;
            }
          n = f.next;
        }
      } else if (u.tag === 18) {
        if (((c = u.return), c === null)) throw Error(r(341));
        (c.lanes |= a),
          (n = c.alternate),
          n !== null && (n.lanes |= a),
          Dc(c, a, l),
          (c = null);
      } else c = u.child;
      if (c !== null) c.return = u;
      else
        for (c = u; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (((u = c.sibling), u !== null)) {
            (u.return = c.return), (c = u);
            break;
          }
          c = c.return;
        }
      u = c;
    }
  }
  function Ge(l, t, a, e) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(r(387));
        if (((c = c.memoizedProps), c !== null)) {
          var f = u.type;
          Il(u.pendingProps.value, c.value) ||
            (l !== null ? l.push(f) : (l = [f]));
        }
      } else if (u === Wl.current) {
        if (((c = u.alternate), c === null)) throw Error(r(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(mu) : (l = [mu]));
      }
      u = u.return;
    }
    l !== null && Rc(t, l, a, e), (t.flags |= 262144);
  }
  function Lu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Il(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function pa(l) {
    (Oa = l),
      (jt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Yl(l) {
    return gs(Oa, l);
  }
  function Ku(l, t) {
    return Oa === null && pa(l), gs(l, t);
  }
  function gs(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), jt === null)) {
      if (l === null) throw Error(r(308));
      (jt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else jt = jt.next = t;
    return a;
  }
  var Nd =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, e) {
                  l.push(e);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                });
            };
          },
    Md = y.unstable_scheduleCallback,
    Dd = y.unstable_NormalPriority,
    Tl = {
      $$typeof: Ol,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Uc() {
    return { controller: new Nd(), data: new Map(), refCount: 0 };
  }
  function Qe(l) {
    l.refCount--,
      l.refCount === 0 &&
        Md(Dd, function () {
          l.controller.abort();
        });
  }
  var Ve = null,
    jc = 0,
    le = 0,
    te = null;
  function Rd(l, t) {
    if (Ve === null) {
      var a = (Ve = []);
      (jc = 0),
        (le = Bf()),
        (te = {
          status: "pending",
          value: void 0,
          then: function (e) {
            a.push(e);
          },
        });
    }
    return jc++, t.then(bs, bs), t;
  }
  function bs() {
    if (--jc === 0 && Ve !== null) {
      te !== null && (te.status = "fulfilled");
      var l = Ve;
      (Ve = null), (le = 0), (te = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Ud(l, t) {
    var a = [],
      e = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      l.then(
        function () {
          (e.status = "fulfilled"), (e.value = t);
          for (var u = 0; u < a.length; u++) (0, a[u])(t);
        },
        function (u) {
          for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        }
      ),
      e
    );
  }
  var Ss = S.S;
  S.S = function (l, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Rd(l, t),
      Ss !== null && Ss(l, t);
  };
  var Na = x(null);
  function Hc() {
    var l = Na.current;
    return l !== null ? l : ol.pooledCache;
  }
  function Ju(l, t) {
    t === null ? N(Na, Na.current) : N(Na, t.pool);
  }
  function As() {
    var l = Hc();
    return l === null ? null : { parent: Tl._currentValue, pool: l };
  }
  var we = Error(r(460)),
    Ts = Error(r(474)),
    ku = Error(r(542)),
    _c = { then: function () {} };
  function Es(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function Wu() {}
  function zs(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(Wu, Wu), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Os(l), l);
      default:
        if (typeof t.status == "string") t.then(Wu, Wu);
        else {
          if (((l = ol), l !== null && 100 < l.shellSuspendCounter))
            throw Error(r(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "fulfilled"), (u.value = e);
                }
              },
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "rejected"), (u.reason = e);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Os(l), l);
        }
        throw ((Ze = t), we);
    }
  }
  var Ze = null;
  function xs() {
    if (Ze === null) throw Error(r(459));
    var l = Ze;
    return (Ze = null), l;
  }
  function Os(l) {
    if (l === we || l === ku) throw Error(r(483));
  }
  var Jt = !1;
  function Bc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Yc(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function kt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Wt(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (((e = e.shared), (tl & 2) !== 0)) {
      var u = e.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (e.pending = t),
        (t = Qu(l)),
        rs(l, null, a),
        t
      );
    }
    return Gu(l, e, t, a), Qu(l);
  }
  function Le(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var e = t.lanes;
      (e &= l.pendingLanes), (a |= e), (t.lanes = a), bi(l, a);
    }
  }
  function qc(l, t) {
    var a = l.updateQueue,
      e = l.alternate;
    if (e !== null && ((e = e.updateQueue), a === e)) {
      var u = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          n === null ? (u = n = c) : (n = n.next = c), (a = a.next);
        } while (a !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      (a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks,
      }),
        (l.updateQueue = a);
      return;
    }
    (l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t);
  }
  var Cc = !1;
  function Ke() {
    if (Cc) {
      var l = te;
      if (l !== null) throw l;
    }
  }
  function Je(l, t, a, e) {
    Cc = !1;
    var u = l.updateQueue;
    Jt = !1;
    var n = u.firstBaseUpdate,
      c = u.lastBaseUpdate,
      f = u.shared.pending;
    if (f !== null) {
      u.shared.pending = null;
      var i = f,
        h = i.next;
      (i.next = null), c === null ? (n = h) : (c.next = h), (c = i);
      var b = l.alternate;
      b !== null &&
        ((b = b.updateQueue),
        (f = b.lastBaseUpdate),
        f !== c &&
          (f === null ? (b.firstBaseUpdate = h) : (f.next = h),
          (b.lastBaseUpdate = i)));
    }
    if (n !== null) {
      var T = u.baseState;
      (c = 0), (b = h = i = null), (f = n);
      do {
        var m = f.lane & -536870913,
          g = m !== f.lane;
        if (g ? (W & m) === m : (e & m) === m) {
          m !== 0 && m === le && (Cc = !0),
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var G = l,
              Y = f;
            m = t;
            var nl = a;
            switch (Y.tag) {
              case 1:
                if (((G = Y.payload), typeof G == "function")) {
                  T = G.call(nl, T, m);
                  break l;
                }
                T = G;
                break l;
              case 3:
                G.flags = (G.flags & -65537) | 128;
              case 0:
                if (
                  ((G = Y.payload),
                  (m = typeof G == "function" ? G.call(nl, T, m) : G),
                  m == null)
                )
                  break l;
                T = j({}, T, m);
                break l;
              case 2:
                Jt = !0;
            }
          }
          (m = f.callback),
            m !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = u.callbacks),
              g === null ? (u.callbacks = [m]) : g.push(m));
        } else
          (g = {
            lane: m,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            b === null ? ((h = b = g), (i = T)) : (b = b.next = g),
            (c |= m);
        if (((f = f.next), f === null)) {
          if (((f = u.shared.pending), f === null)) break;
          (g = f),
            (f = g.next),
            (g.next = null),
            (u.lastBaseUpdate = g),
            (u.shared.pending = null);
        }
      } while (!0);
      b === null && (i = T),
        (u.baseState = i),
        (u.firstBaseUpdate = h),
        (u.lastBaseUpdate = b),
        n === null && (u.shared.lanes = 0),
        (ea |= c),
        (l.lanes = c),
        (l.memoizedState = T);
    }
  }
  function ps(l, t) {
    if (typeof l != "function") throw Error(r(191, l));
    l.call(t);
  }
  function Ns(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) ps(a[l], t);
  }
  var ae = x(null),
    Fu = x(0);
  function Ms(l, t) {
    (l = Gt), N(Fu, l), N(ae, t), (Gt = l | t.baseLanes);
  }
  function Xc() {
    N(Fu, Gt), N(ae, ae.current);
  }
  function Gc() {
    (Gt = Fu.current), R(ae), R(Fu);
  }
  var Ft = 0,
    w = null,
    el = null,
    Sl = null,
    $u = !1,
    ee = !1,
    Ma = !1,
    Iu = 0,
    ke = 0,
    ue = null,
    jd = 0;
  function gl() {
    throw Error(r(321));
  }
  function Qc(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Il(l[a], t[a])) return !1;
    return !0;
  }
  function Vc(l, t, a, e, u, n) {
    return (
      (Ft = n),
      (w = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (S.H = l === null || l.memoizedState === null ? ro : vo),
      (Ma = !1),
      (n = a(e, u)),
      (Ma = !1),
      ee && (n = Rs(t, a, e, u)),
      Ds(l),
      n
    );
  }
  function Ds(l) {
    S.H = un;
    var t = el !== null && el.next !== null;
    if (((Ft = 0), (Sl = el = w = null), ($u = !1), (ke = 0), (ue = null), t))
      throw Error(r(300));
    l === null ||
      Nl ||
      ((l = l.dependencies), l !== null && Lu(l) && (Nl = !0));
  }
  function Rs(l, t, a, e) {
    w = l;
    var u = 0;
    do {
      if ((ee && (ue = null), (ke = 0), (ee = !1), 25 <= u))
        throw Error(r(301));
      if (((u += 1), (Sl = el = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (S.H = Xd), (n = t(a, e));
    } while (ee);
    return n;
  }
  function Hd() {
    var l = S.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? We(t) : t),
      (l = l.useState()[0]),
      (el !== null ? el.memoizedState : null) !== l && (w.flags |= 1024),
      t
    );
  }
  function wc() {
    var l = Iu !== 0;
    return (Iu = 0), l;
  }
  function Zc(l, t, a) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a);
  }
  function Lc(l) {
    if ($u) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      $u = !1;
    }
    (Ft = 0), (Sl = el = w = null), (ee = !1), (ke = Iu = 0), (ue = null);
  }
  function Ql() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Sl === null ? (w.memoizedState = Sl = l) : (Sl = Sl.next = l), Sl;
  }
  function Al() {
    if (el === null) {
      var l = w.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = el.next;
    var t = Sl === null ? w.memoizedState : Sl.next;
    if (t !== null) (Sl = t), (el = l);
    else {
      if (l === null)
        throw w.alternate === null ? Error(r(467)) : Error(r(310));
      (el = l),
        (l = {
          memoizedState: el.memoizedState,
          baseState: el.baseState,
          baseQueue: el.baseQueue,
          queue: el.queue,
          next: null,
        }),
        Sl === null ? (w.memoizedState = Sl = l) : (Sl = Sl.next = l);
    }
    return Sl;
  }
  function Kc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function We(l) {
    var t = ke;
    return (
      (ke += 1),
      ue === null && (ue = []),
      (l = zs(ue, l, t)),
      (t = w),
      (Sl === null ? t.memoizedState : Sl.next) === null &&
        ((t = t.alternate),
        (S.H = t === null || t.memoizedState === null ? ro : vo)),
      l
    );
  }
  function Pu(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return We(l);
      if (l.$$typeof === Ol) return Yl(l);
    }
    throw Error(r(438, String(l)));
  }
  function Jc(l) {
    var t = null,
      a = w.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var e = w.alternate;
      e !== null &&
        ((e = e.updateQueue),
        e !== null &&
          ((e = e.memoCache),
          e != null &&
            (t = {
              data: e.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Kc()), (w.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = Ba;
    return t.index++, a;
  }
  function _t(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function ln(l) {
    var t = Al();
    return kc(t, el, l);
  }
  function kc(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue,
      n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        (u.next = n.next), (n.next = c);
      }
      (t.baseQueue = u = n), (e.pending = null);
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var f = (c = null),
        i = null,
        h = t,
        b = !1;
      do {
        var T = h.lane & -536870913;
        if (T !== h.lane ? (W & T) === T : (Ft & T) === T) {
          var m = h.revertLane;
          if (m === 0)
            i !== null &&
              (i = i.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: h.action,
                  hasEagerState: h.hasEagerState,
                  eagerState: h.eagerState,
                  next: null,
                }),
              T === le && (b = !0);
          else if ((Ft & m) === m) {
            (h = h.next), m === le && (b = !0);
            continue;
          } else
            (T = {
              lane: 0,
              revertLane: h.revertLane,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
              i === null ? ((f = i = T), (c = n)) : (i = i.next = T),
              (w.lanes |= m),
              (ea |= m);
          (T = h.action),
            Ma && a(n, T),
            (n = h.hasEagerState ? h.eagerState : a(n, T));
        } else
          (m = {
            lane: T,
            revertLane: h.revertLane,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          }),
            i === null ? ((f = i = m), (c = n)) : (i = i.next = m),
            (w.lanes |= T),
            (ea |= T);
        h = h.next;
      } while (h !== null && h !== t);
      if (
        (i === null ? (c = n) : (i.next = f),
        !Il(n, l.memoizedState) && ((Nl = !0), b && ((a = te), a !== null)))
      )
        throw a;
      (l.memoizedState = n),
        (l.baseState = c),
        (l.baseQueue = i),
        (e.lastRenderedState = n);
    }
    return u === null && (e.lanes = 0), [l.memoizedState, e.dispatch];
  }
  function Wc(l) {
    var t = Al(),
      a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch,
      u = a.pending,
      n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var c = (u = u.next);
      do (n = l(n, c.action)), (c = c.next);
      while (c !== u);
      Il(n, t.memoizedState) || (Nl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n);
    }
    return [n, e];
  }
  function Us(l, t, a) {
    var e = w,
      u = Al(),
      n = P;
    if (n) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = t();
    var c = !Il((el || u).memoizedState, a);
    c && ((u.memoizedState = a), (Nl = !0)), (u = u.queue);
    var f = _s.bind(null, e, u, l);
    if (
      (Fe(2048, 8, f, [l]),
      u.getSnapshot !== t || c || (Sl !== null && Sl.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        ne(9, tn(), Hs.bind(null, e, u, a, t), null),
        ol === null)
      )
        throw Error(r(349));
      n || (Ft & 124) !== 0 || js(e, t, a);
    }
    return a;
  }
  function js(l, t, a) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = w.updateQueue),
      t === null
        ? ((t = Kc()), (w.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l));
  }
  function Hs(l, t, a, e) {
    (t.value = a), (t.getSnapshot = e), Bs(t) && Ys(l);
  }
  function _s(l, t, a) {
    return a(function () {
      Bs(t) && Ys(l);
    });
  }
  function Bs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Il(l, a);
    } catch {
      return !0;
    }
  }
  function Ys(l) {
    var t = Fa(l, 2);
    t !== null && ut(t, l, 2);
  }
  function Fc(l) {
    var t = Ql();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Ma)) {
        wt(!0);
        try {
          a();
        } finally {
          wt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _t,
        lastRenderedState: l,
      }),
      t
    );
  }
  function qs(l, t, a, e) {
    return (l.baseState = a), kc(l, el, typeof e == "function" ? e : _t);
  }
  function _d(l, t, a, e, u) {
    if (en(l)) throw Error(r(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      S.T !== null ? a(!0) : (n.isTransition = !1),
        e(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), Cs(t, n))
          : ((n.next = a.next), (t.pending = a.next = n));
    }
  }
  function Cs(l, t) {
    var a = t.action,
      e = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = S.T,
        c = {};
      S.T = c;
      try {
        var f = a(u, e),
          i = S.S;
        i !== null && i(c, f), Xs(l, t, f);
      } catch (h) {
        $c(l, t, h);
      } finally {
        S.T = n;
      }
    } else
      try {
        (n = a(u, e)), Xs(l, t, n);
      } catch (h) {
        $c(l, t, h);
      }
  }
  function Xs(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (e) {
            Gs(l, t, e);
          },
          function (e) {
            return $c(l, t, e);
          }
        )
      : Gs(l, t, a);
  }
  function Gs(l, t, a) {
    (t.status = "fulfilled"),
      (t.value = a),
      Qs(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Cs(l, a)));
  }
  function $c(l, t, a) {
    var e = l.pending;
    if (((l.pending = null), e !== null)) {
      e = e.next;
      do (t.status = "rejected"), (t.reason = a), Qs(t), (t = t.next);
      while (t !== e);
    }
    l.action = null;
  }
  function Qs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Vs(l, t) {
    return t;
  }
  function ws(l, t) {
    if (P) {
      var a = ol.formState;
      if (a !== null) {
        l: {
          var e = w;
          if (P) {
            if (hl) {
              t: {
                for (var u = hl, n = Tt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = bt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (hl = bt(u.nextSibling)), (e = u.data === "F!");
                break l;
              }
            }
            xa(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return (
      (a = Ql()),
      (a.memoizedState = a.baseState = t),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vs,
        lastRenderedState: t,
      }),
      (a.queue = e),
      (a = io.bind(null, w, e)),
      (e.dispatch = a),
      (e = Fc(!1)),
      (n = af.bind(null, w, !1, e.queue)),
      (e = Ql()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (e.queue = u),
      (a = _d.bind(null, w, u, n, a)),
      (u.dispatch = a),
      (e.memoizedState = l),
      [t, a, !1]
    );
  }
  function Zs(l) {
    var t = Al();
    return Ls(t, el, l);
  }
  function Ls(l, t, a) {
    if (
      ((t = kc(l, t, Vs)[0]),
      (l = ln(_t)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var e = We(t);
      } catch (c) {
        throw c === we ? ku : c;
      }
    else e = t;
    t = Al();
    var u = t.queue,
      n = u.dispatch;
    return (
      a !== t.memoizedState &&
        ((w.flags |= 2048), ne(9, tn(), Bd.bind(null, u, a), null)),
      [e, n, l]
    );
  }
  function Bd(l, t) {
    l.action = t;
  }
  function Ks(l) {
    var t = Al(),
      a = el;
    if (a !== null) return Ls(t, a, l);
    Al(), (t = t.memoizedState), (a = Al());
    var e = a.queue.dispatch;
    return (a.memoizedState = l), [t, e, !1];
  }
  function ne(l, t, a, e) {
    return (
      (l = { tag: l, create: a, deps: e, inst: t, next: null }),
      (t = w.updateQueue),
      t === null && ((t = Kc()), (w.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((e = a.next), (a.next = l), (l.next = e), (t.lastEffect = l)),
      l
    );
  }
  function tn() {
    return { destroy: void 0, resource: void 0 };
  }
  function Js() {
    return Al().memoizedState;
  }
  function an(l, t, a, e) {
    var u = Ql();
    (e = e === void 0 ? null : e),
      (w.flags |= l),
      (u.memoizedState = ne(1 | t, tn(), a, e));
  }
  function Fe(l, t, a, e) {
    var u = Al();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    el !== null && e !== null && Qc(e, el.memoizedState.deps)
      ? (u.memoizedState = ne(t, n, a, e))
      : ((w.flags |= l), (u.memoizedState = ne(1 | t, n, a, e)));
  }
  function ks(l, t) {
    an(8390656, 8, l, t);
  }
  function Ws(l, t) {
    Fe(2048, 8, l, t);
  }
  function Fs(l, t) {
    return Fe(4, 2, l, t);
  }
  function $s(l, t) {
    return Fe(4, 4, l, t);
  }
  function Is(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function Ps(l, t, a) {
    (a = a != null ? a.concat([l]) : null), Fe(4, 4, Is.bind(null, t, l), a);
  }
  function Ic() {}
  function lo(l, t) {
    var a = Al();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && Qc(t, e[1]) ? e[0] : ((a.memoizedState = [l, t]), l);
  }
  function to(l, t) {
    var a = Al();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && Qc(t, e[1])) return e[0];
    if (((e = l()), Ma)) {
      wt(!0);
      try {
        l();
      } finally {
        wt(!1);
      }
    }
    return (a.memoizedState = [e, t]), e;
  }
  function Pc(l, t, a) {
    return a === void 0 || (Ft & 1073741824) !== 0
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = n0()), (w.lanes |= l), (ea |= l), a);
  }
  function ao(l, t, a, e) {
    return Il(a, t)
      ? a
      : ae.current !== null
      ? ((l = Pc(l, a, e)), Il(l, t) || (Nl = !0), l)
      : (Ft & 42) === 0
      ? ((Nl = !0), (l.memoizedState = a))
      : ((l = n0()), (w.lanes |= l), (ea |= l), t);
  }
  function eo(l, t, a, e, u) {
    var n = M.p;
    M.p = n !== 0 && 8 > n ? n : 8;
    var c = S.T,
      f = {};
    (S.T = f), af(l, !1, t, a);
    try {
      var i = u(),
        h = S.S;
      if (
        (h !== null && h(f, i),
        i !== null && typeof i == "object" && typeof i.then == "function")
      ) {
        var b = Ud(i, e);
        $e(l, t, b, et(l));
      } else $e(l, t, e, et(l));
    } catch (T) {
      $e(l, t, { then: function () {}, status: "rejected", reason: T }, et());
    } finally {
      (M.p = n), (S.T = c);
    }
  }
  function Yd() {}
  function lf(l, t, a, e) {
    if (l.tag !== 5) throw Error(r(476));
    var u = uo(l).queue;
    eo(
      l,
      u,
      t,
      X,
      a === null
        ? Yd
        : function () {
            return no(l), a(e);
          }
    );
  }
  function uo(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _t,
        lastRenderedState: X,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: _t,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function no(l) {
    var t = uo(l).next.queue;
    $e(l, t, {}, et());
  }
  function tf() {
    return Yl(mu);
  }
  function co() {
    return Al().memoizedState;
  }
  function fo() {
    return Al().memoizedState;
  }
  function qd(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = et();
          l = kt(a);
          var e = Wt(t, l, a);
          e !== null && (ut(e, t, a), Le(e, t, a)),
            (t = { cache: Uc() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Cd(l, t, a) {
    var e = et();
    (a = {
      lane: e,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      en(l)
        ? so(t, a)
        : ((a = Tc(l, t, a, e)), a !== null && (ut(a, l, e), oo(a, t, e)));
  }
  function io(l, t, a) {
    var e = et();
    $e(l, t, a, e);
  }
  function $e(l, t, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (en(l)) so(t, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var c = t.lastRenderedState,
            f = n(c, a);
          if (((u.hasEagerState = !0), (u.eagerState = f), Il(f, c)))
            return Gu(l, t, u, 0), ol === null && Xu(), !1;
        } catch {
        } finally {
        }
      if (((a = Tc(l, t, u, e)), a !== null))
        return ut(a, l, e), oo(a, t, e), !0;
    }
    return !1;
  }
  function af(l, t, a, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: Bf(),
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      en(l))
    ) {
      if (t) throw Error(r(479));
    } else (t = Tc(l, a, e, 2)), t !== null && ut(t, l, 2);
  }
  function en(l) {
    var t = l.alternate;
    return l === w || (t !== null && t === w);
  }
  function so(l, t) {
    ee = $u = !0;
    var a = l.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t);
  }
  function oo(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      (e &= l.pendingLanes), (a |= e), (t.lanes = a), bi(l, a);
    }
  }
  var un = {
      readContext: Yl,
      use: Pu,
      useCallback: gl,
      useContext: gl,
      useEffect: gl,
      useImperativeHandle: gl,
      useLayoutEffect: gl,
      useInsertionEffect: gl,
      useMemo: gl,
      useReducer: gl,
      useRef: gl,
      useState: gl,
      useDebugValue: gl,
      useDeferredValue: gl,
      useTransition: gl,
      useSyncExternalStore: gl,
      useId: gl,
      useHostTransitionStatus: gl,
      useFormState: gl,
      useActionState: gl,
      useOptimistic: gl,
      useMemoCache: gl,
      useCacheRefresh: gl,
    },
    ro = {
      readContext: Yl,
      use: Pu,
      useCallback: function (l, t) {
        return (Ql().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: Yl,
      useEffect: ks,
      useImperativeHandle: function (l, t, a) {
        (a = a != null ? a.concat([l]) : null),
          an(4194308, 4, Is.bind(null, t, l), a);
      },
      useLayoutEffect: function (l, t) {
        return an(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        an(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = Ql();
        t = t === void 0 ? null : t;
        var e = l();
        if (Ma) {
          wt(!0);
          try {
            l();
          } finally {
            wt(!1);
          }
        }
        return (a.memoizedState = [e, t]), e;
      },
      useReducer: function (l, t, a) {
        var e = Ql();
        if (a !== void 0) {
          var u = a(t);
          if (Ma) {
            wt(!0);
            try {
              a(t);
            } finally {
              wt(!1);
            }
          }
        } else u = t;
        return (
          (e.memoizedState = e.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (e.queue = l),
          (l = l.dispatch = Cd.bind(null, w, l)),
          [e.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Ql();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = Fc(l);
        var t = l.queue,
          a = io.bind(null, w, t);
        return (t.dispatch = a), [l.memoizedState, a];
      },
      useDebugValue: Ic,
      useDeferredValue: function (l, t) {
        var a = Ql();
        return Pc(a, l, t);
      },
      useTransition: function () {
        var l = Fc(!1);
        return (
          (l = eo.bind(null, w, l.queue, !0, !1)),
          (Ql().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var e = w,
          u = Ql();
        if (P) {
          if (a === void 0) throw Error(r(407));
          a = a();
        } else {
          if (((a = t()), ol === null)) throw Error(r(349));
          (W & 124) !== 0 || js(e, t, a);
        }
        u.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (u.queue = n),
          ks(_s.bind(null, e, n, l), [l]),
          (e.flags |= 2048),
          ne(9, tn(), Hs.bind(null, e, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Ql(),
          t = ol.identifierPrefix;
        if (P) {
          var a = Ut,
            e = Rt;
          (a = (e & ~(1 << (32 - $l(e) - 1))).toString(32) + a),
            (t = "«" + t + "R" + a),
            (a = Iu++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "»");
        } else (a = jd++), (t = "«" + t + "r" + a.toString(32) + "»");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: tf,
      useFormState: ws,
      useActionState: ws,
      useOptimistic: function (l) {
        var t = Ql();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a), (t = af.bind(null, w, !0, a)), (a.dispatch = t), [l, t]
        );
      },
      useMemoCache: Jc,
      useCacheRefresh: function () {
        return (Ql().memoizedState = qd.bind(null, w));
      },
    },
    vo = {
      readContext: Yl,
      use: Pu,
      useCallback: lo,
      useContext: Yl,
      useEffect: Ws,
      useImperativeHandle: Ps,
      useInsertionEffect: Fs,
      useLayoutEffect: $s,
      useMemo: to,
      useReducer: ln,
      useRef: Js,
      useState: function () {
        return ln(_t);
      },
      useDebugValue: Ic,
      useDeferredValue: function (l, t) {
        var a = Al();
        return ao(a, el.memoizedState, l, t);
      },
      useTransition: function () {
        var l = ln(_t)[0],
          t = Al().memoizedState;
        return [typeof l == "boolean" ? l : We(l), t];
      },
      useSyncExternalStore: Us,
      useId: co,
      useHostTransitionStatus: tf,
      useFormState: Zs,
      useActionState: Zs,
      useOptimistic: function (l, t) {
        var a = Al();
        return qs(a, el, l, t);
      },
      useMemoCache: Jc,
      useCacheRefresh: fo,
    },
    Xd = {
      readContext: Yl,
      use: Pu,
      useCallback: lo,
      useContext: Yl,
      useEffect: Ws,
      useImperativeHandle: Ps,
      useInsertionEffect: Fs,
      useLayoutEffect: $s,
      useMemo: to,
      useReducer: Wc,
      useRef: Js,
      useState: function () {
        return Wc(_t);
      },
      useDebugValue: Ic,
      useDeferredValue: function (l, t) {
        var a = Al();
        return el === null ? Pc(a, l, t) : ao(a, el.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Wc(_t)[0],
          t = Al().memoizedState;
        return [typeof l == "boolean" ? l : We(l), t];
      },
      useSyncExternalStore: Us,
      useId: co,
      useHostTransitionStatus: tf,
      useFormState: Ks,
      useActionState: Ks,
      useOptimistic: function (l, t) {
        var a = Al();
        return el !== null
          ? qs(a, el, l, t)
          : ((a.baseState = l), [l, a.queue.dispatch]);
      },
      useMemoCache: Jc,
      useCacheRefresh: fo,
    },
    ce = null,
    Ie = 0;
  function nn(l) {
    var t = Ie;
    return (Ie += 1), ce === null && (ce = []), zs(ce, l, t);
  }
  function Pe(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function cn(l, t) {
    throw t.$$typeof === fl
      ? Error(r(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function ho(l) {
    var t = l._init;
    return t(l._payload);
  }
  function mo(l) {
    function t(d, o) {
      if (l) {
        var v = d.deletions;
        v === null ? ((d.deletions = [o]), (d.flags |= 16)) : v.push(o);
      }
    }
    function a(d, o) {
      if (!l) return null;
      for (; o !== null; ) t(d, o), (o = o.sibling);
      return null;
    }
    function e(d) {
      for (var o = new Map(); d !== null; )
        d.key !== null ? o.set(d.key, d) : o.set(d.index, d), (d = d.sibling);
      return o;
    }
    function u(d, o) {
      return (d = Dt(d, o)), (d.index = 0), (d.sibling = null), d;
    }
    function n(d, o, v) {
      return (
        (d.index = v),
        l
          ? ((v = d.alternate),
            v !== null
              ? ((v = v.index), v < o ? ((d.flags |= 67108866), o) : v)
              : ((d.flags |= 67108866), o))
          : ((d.flags |= 1048576), o)
      );
    }
    function c(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function f(d, o, v, A) {
      return o === null || o.tag !== 6
        ? ((o = zc(v, d.mode, A)), (o.return = d), o)
        : ((o = u(o, v)), (o.return = d), o);
    }
    function i(d, o, v, A) {
      var U = v.type;
      return U === xl
        ? b(d, o, v.props.children, A, v.key)
        : o !== null &&
          (o.elementType === U ||
            (typeof U == "object" &&
              U !== null &&
              U.$$typeof === kl &&
              ho(U) === o.type))
        ? ((o = u(o, v.props)), Pe(o, v), (o.return = d), o)
        : ((o = Vu(v.type, v.key, v.props, null, d.mode, A)),
          Pe(o, v),
          (o.return = d),
          o);
    }
    function h(d, o, v, A) {
      return o === null ||
        o.tag !== 4 ||
        o.stateNode.containerInfo !== v.containerInfo ||
        o.stateNode.implementation !== v.implementation
        ? ((o = xc(v, d.mode, A)), (o.return = d), o)
        : ((o = u(o, v.children || [])), (o.return = d), o);
    }
    function b(d, o, v, A, U) {
      return o === null || o.tag !== 7
        ? ((o = Aa(v, d.mode, A, U)), (o.return = d), o)
        : ((o = u(o, v)), (o.return = d), o);
    }
    function T(d, o, v) {
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return (o = zc("" + o, d.mode, v)), (o.return = d), o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case ll:
            return (
              (v = Vu(o.type, o.key, o.props, null, d.mode, v)),
              Pe(v, o),
              (v.return = d),
              v
            );
          case zl:
            return (o = xc(o, d.mode, v)), (o.return = d), o;
          case kl:
            var A = o._init;
            return (o = A(o._payload)), T(d, o, v);
        }
        if (_l(o) || Hl(o))
          return (o = Aa(o, d.mode, v, null)), (o.return = d), o;
        if (typeof o.then == "function") return T(d, nn(o), v);
        if (o.$$typeof === Ol) return T(d, Ku(d, o), v);
        cn(d, o);
      }
      return null;
    }
    function m(d, o, v, A) {
      var U = o !== null ? o.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return U !== null ? null : f(d, o, "" + v, A);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ll:
            return v.key === U ? i(d, o, v, A) : null;
          case zl:
            return v.key === U ? h(d, o, v, A) : null;
          case kl:
            return (U = v._init), (v = U(v._payload)), m(d, o, v, A);
        }
        if (_l(v) || Hl(v)) return U !== null ? null : b(d, o, v, A, null);
        if (typeof v.then == "function") return m(d, o, nn(v), A);
        if (v.$$typeof === Ol) return m(d, o, Ku(d, v), A);
        cn(d, v);
      }
      return null;
    }
    function g(d, o, v, A, U) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (d = d.get(v) || null), f(o, d, "" + A, U);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case ll:
            return (
              (d = d.get(A.key === null ? v : A.key) || null), i(o, d, A, U)
            );
          case zl:
            return (
              (d = d.get(A.key === null ? v : A.key) || null), h(o, d, A, U)
            );
          case kl:
            var Z = A._init;
            return (A = Z(A._payload)), g(d, o, v, A, U);
        }
        if (_l(A) || Hl(A)) return (d = d.get(v) || null), b(o, d, A, U, null);
        if (typeof A.then == "function") return g(d, o, v, nn(A), U);
        if (A.$$typeof === Ol) return g(d, o, v, Ku(o, A), U);
        cn(o, A);
      }
      return null;
    }
    function G(d, o, v, A) {
      for (
        var U = null, Z = null, _ = o, q = (o = 0), Dl = null;
        _ !== null && q < v.length;
        q++
      ) {
        _.index > q ? ((Dl = _), (_ = null)) : (Dl = _.sibling);
        var I = m(d, _, v[q], A);
        if (I === null) {
          _ === null && (_ = Dl);
          break;
        }
        l && _ && I.alternate === null && t(d, _),
          (o = n(I, o, q)),
          Z === null ? (U = I) : (Z.sibling = I),
          (Z = I),
          (_ = Dl);
      }
      if (q === v.length) return a(d, _), P && Ea(d, q), U;
      if (_ === null) {
        for (; q < v.length; q++)
          (_ = T(d, v[q], A)),
            _ !== null &&
              ((o = n(_, o, q)),
              Z === null ? (U = _) : (Z.sibling = _),
              (Z = _));
        return P && Ea(d, q), U;
      }
      for (_ = e(_); q < v.length; q++)
        (Dl = g(_, d, q, v[q], A)),
          Dl !== null &&
            (l &&
              Dl.alternate !== null &&
              _.delete(Dl.key === null ? q : Dl.key),
            (o = n(Dl, o, q)),
            Z === null ? (U = Dl) : (Z.sibling = Dl),
            (Z = Dl));
      return (
        l &&
          _.forEach(function (da) {
            return t(d, da);
          }),
        P && Ea(d, q),
        U
      );
    }
    function Y(d, o, v, A) {
      if (v == null) throw Error(r(151));
      for (
        var U = null, Z = null, _ = o, q = (o = 0), Dl = null, I = v.next();
        _ !== null && !I.done;
        q++, I = v.next()
      ) {
        _.index > q ? ((Dl = _), (_ = null)) : (Dl = _.sibling);
        var da = m(d, _, I.value, A);
        if (da === null) {
          _ === null && (_ = Dl);
          break;
        }
        l && _ && da.alternate === null && t(d, _),
          (o = n(da, o, q)),
          Z === null ? (U = da) : (Z.sibling = da),
          (Z = da),
          (_ = Dl);
      }
      if (I.done) return a(d, _), P && Ea(d, q), U;
      if (_ === null) {
        for (; !I.done; q++, I = v.next())
          (I = T(d, I.value, A)),
            I !== null &&
              ((o = n(I, o, q)),
              Z === null ? (U = I) : (Z.sibling = I),
              (Z = I));
        return P && Ea(d, q), U;
      }
      for (_ = e(_); !I.done; q++, I = v.next())
        (I = g(_, d, q, I.value, A)),
          I !== null &&
            (l && I.alternate !== null && _.delete(I.key === null ? q : I.key),
            (o = n(I, o, q)),
            Z === null ? (U = I) : (Z.sibling = I),
            (Z = I));
      return (
        l &&
          _.forEach(function (G1) {
            return t(d, G1);
          }),
        P && Ea(d, q),
        U
      );
    }
    function nl(d, o, v, A) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === xl &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case ll:
            l: {
              for (var U = v.key; o !== null; ) {
                if (o.key === U) {
                  if (((U = v.type), U === xl)) {
                    if (o.tag === 7) {
                      a(d, o.sibling),
                        (A = u(o, v.props.children)),
                        (A.return = d),
                        (d = A);
                      break l;
                    }
                  } else if (
                    o.elementType === U ||
                    (typeof U == "object" &&
                      U !== null &&
                      U.$$typeof === kl &&
                      ho(U) === o.type)
                  ) {
                    a(d, o.sibling),
                      (A = u(o, v.props)),
                      Pe(A, v),
                      (A.return = d),
                      (d = A);
                    break l;
                  }
                  a(d, o);
                  break;
                } else t(d, o);
                o = o.sibling;
              }
              v.type === xl
                ? ((A = Aa(v.props.children, d.mode, A, v.key)),
                  (A.return = d),
                  (d = A))
                : ((A = Vu(v.type, v.key, v.props, null, d.mode, A)),
                  Pe(A, v),
                  (A.return = d),
                  (d = A));
            }
            return c(d);
          case zl:
            l: {
              for (U = v.key; o !== null; ) {
                if (o.key === U)
                  if (
                    o.tag === 4 &&
                    o.stateNode.containerInfo === v.containerInfo &&
                    o.stateNode.implementation === v.implementation
                  ) {
                    a(d, o.sibling),
                      (A = u(o, v.children || [])),
                      (A.return = d),
                      (d = A);
                    break l;
                  } else {
                    a(d, o);
                    break;
                  }
                else t(d, o);
                o = o.sibling;
              }
              (A = xc(v, d.mode, A)), (A.return = d), (d = A);
            }
            return c(d);
          case kl:
            return (U = v._init), (v = U(v._payload)), nl(d, o, v, A);
        }
        if (_l(v)) return G(d, o, v, A);
        if (Hl(v)) {
          if (((U = Hl(v)), typeof U != "function")) throw Error(r(150));
          return (v = U.call(v)), Y(d, o, v, A);
        }
        if (typeof v.then == "function") return nl(d, o, nn(v), A);
        if (v.$$typeof === Ol) return nl(d, o, Ku(d, v), A);
        cn(d, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          o !== null && o.tag === 6
            ? (a(d, o.sibling), (A = u(o, v)), (A.return = d), (d = A))
            : (a(d, o), (A = zc(v, d.mode, A)), (A.return = d), (d = A)),
          c(d))
        : a(d, o);
    }
    return function (d, o, v, A) {
      try {
        Ie = 0;
        var U = nl(d, o, v, A);
        return (ce = null), U;
      } catch (_) {
        if (_ === we || _ === ku) throw _;
        var Z = Pl(29, _, null, d.mode);
        return (Z.lanes = A), (Z.return = d), Z;
      } finally {
      }
    };
  }
  var fe = mo(!0),
    yo = mo(!1),
    dt = x(null),
    Et = null;
  function $t(l) {
    var t = l.alternate;
    N(El, El.current & 1),
      N(dt, l),
      Et === null &&
        (t === null || ae.current !== null || t.memoizedState !== null) &&
        (Et = l);
  }
  function go(l) {
    if (l.tag === 22) {
      if ((N(El, El.current), N(dt, l), Et === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (Et = l);
      }
    } else It();
  }
  function It() {
    N(El, El.current), N(dt, dt.current);
  }
  function Bt(l) {
    R(dt), Et === l && (Et = null), R(El);
  }
  var El = x(0);
  function fn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || Jf(a))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function ef(l, t, a, e) {
    (t = l.memoizedState),
      (a = a(e, t)),
      (a = a == null ? t : j({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var uf = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var e = et(),
        u = kt(e);
      (u.payload = t),
        a != null && (u.callback = a),
        (t = Wt(l, u, e)),
        t !== null && (ut(t, l, e), Le(t, l, e));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var e = et(),
        u = kt(e);
      (u.tag = 1),
        (u.payload = t),
        a != null && (u.callback = a),
        (t = Wt(l, u, e)),
        t !== null && (ut(t, l, e), Le(t, l, e));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = et(),
        e = kt(a);
      (e.tag = 2),
        t != null && (e.callback = t),
        (t = Wt(l, e, a)),
        t !== null && (ut(t, l, a), Le(t, l, a));
    },
  };
  function bo(l, t, a, e, u, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(e, n, c)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Be(a, e) || !Be(u, n)
        : !0
    );
  }
  function So(l, t, a, e) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, e),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, e),
      t.state !== l && uf.enqueueReplaceState(t, t.state, null);
  }
  function Da(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t) e !== "ref" && (a[e] = t[e]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = j({}, a));
      for (var u in l) a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  var sn =
    typeof reportError == "function"
      ? reportError
      : function (l) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == "object" &&
                l !== null &&
                typeof l.message == "string"
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", l);
            return;
          }
          console.error(l);
        };
  function Ao(l) {
    sn(l);
  }
  function To(l) {
    console.error(l);
  }
  function Eo(l) {
    sn(l);
  }
  function on(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function zo(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function nf(l, t, a) {
    return (
      (a = kt(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        on(l, t);
      }),
      a
    );
  }
  function xo(l) {
    return (l = kt(l)), (l.tag = 3), l;
  }
  function Oo(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      (l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          zo(t, a, e);
        });
    }
    var c = a.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        zo(t, a, e),
          typeof u != "function" &&
            (ua === null ? (ua = new Set([this])) : ua.add(this));
        var f = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function Gd(l, t, a, e, u) {
    if (
      ((a.flags |= 32768),
      e !== null && typeof e == "object" && typeof e.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && Ge(t, a, u, !0),
        (a = dt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              Et === null ? Rf() : a.alternate === null && ml === 0 && (ml = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              e === _c
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([e])) : t.add(e),
                  jf(l, e, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              e === _c
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([e]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([e])) : a.add(e)),
                  jf(l, e, u)),
              !1
            );
        }
        throw Error(r(435, a.tag));
      }
      return jf(l, e, u), Rf(), !1;
    }
    if (P)
      return (
        (t = dt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            e !== Nc && ((l = Error(r(422), { cause: e })), Xe(it(l, a))))
          : (e !== Nc && ((t = Error(r(423), { cause: e })), Xe(it(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (e = it(e, a)),
            (u = nf(l.stateNode, e, u)),
            qc(l, u),
            ml !== 4 && (ml = 2)),
        !1
      );
    var n = Error(r(520), { cause: e });
    if (
      ((n = it(n, a)),
      cu === null ? (cu = [n]) : cu.push(n),
      ml !== 4 && (ml = 2),
      t === null)
    )
      return !0;
    (e = it(e, a)), (a = t);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = u & -u),
            (a.lanes |= l),
            (l = nf(a.stateNode, e, l)),
            qc(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ua === null || !ua.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = xo(u)),
              Oo(u, l, a, e),
              qc(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var po = Error(r(461)),
    Nl = !1;
  function Rl(l, t, a, e) {
    t.child = l === null ? yo(t, null, a, e) : fe(t, l.child, a, e);
  }
  function No(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var c = {};
      for (var f in e) f !== "ref" && (c[f] = e[f]);
    } else c = e;
    return (
      pa(t),
      (e = Vc(l, t, a, c, n, u)),
      (f = wc()),
      l !== null && !Nl
        ? (Zc(l, t, u), Yt(l, t, u))
        : (P && f && Oc(t), (t.flags |= 1), Rl(l, t, e, u), t.child)
    );
  }
  function Mo(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !Ec(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), Do(l, t, n, e, u))
        : ((l = Vu(a.type, null, e, t, t.mode, u)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !hf(l, u))) {
      var c = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Be), a(c, e) && l.ref === t.ref)
      )
        return Yt(l, t, u);
    }
    return (
      (t.flags |= 1),
      (l = Dt(n, e)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Do(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Be(n, e) && l.ref === t.ref)
        if (((Nl = !1), (t.pendingProps = e = n), hf(l, u)))
          (l.flags & 131072) !== 0 && (Nl = !0);
        else return (t.lanes = l.lanes), Yt(l, t, u);
    }
    return cf(l, t, a, e, u);
  }
  function Ro(l, t, a) {
    var e = t.pendingProps,
      u = e.children,
      n = l !== null ? l.memoizedState : null;
    if (e.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((e = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (u = t.child = l.child, n = 0; u !== null; )
            (n = n | u.lanes | u.childLanes), (u = u.sibling);
          t.childLanes = n & ~e;
        } else (t.childLanes = 0), (t.child = null);
        return Uo(l, t, e, a);
      }
      if ((a & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Ju(t, n !== null ? n.cachePool : null),
          n !== null ? Ms(t, n) : Xc(),
          go(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Uo(l, t, n !== null ? n.baseLanes | a : a, a)
        );
    } else
      n !== null
        ? (Ju(t, n.cachePool), Ms(t, n), It(), (t.memoizedState = null))
        : (l !== null && Ju(t, null), Xc(), It());
    return Rl(l, t, u, a), t.child;
  }
  function Uo(l, t, a, e) {
    var u = Hc();
    return (
      (u = u === null ? null : { parent: Tl._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: a, cachePool: u }),
      l !== null && Ju(t, null),
      Xc(),
      go(t),
      l !== null && Ge(l, t, e, !0),
      null
    );
  }
  function rn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(r(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function cf(l, t, a, e, u) {
    return (
      pa(t),
      (a = Vc(l, t, a, e, void 0, u)),
      (e = wc()),
      l !== null && !Nl
        ? (Zc(l, t, u), Yt(l, t, u))
        : (P && e && Oc(t), (t.flags |= 1), Rl(l, t, a, u), t.child)
    );
  }
  function jo(l, t, a, e, u, n) {
    return (
      pa(t),
      (t.updateQueue = null),
      (a = Rs(t, e, a, u)),
      Ds(l),
      (e = wc()),
      l !== null && !Nl
        ? (Zc(l, t, n), Yt(l, t, n))
        : (P && e && Oc(t), (t.flags |= 1), Rl(l, t, a, n), t.child)
    );
  }
  function Ho(l, t, a, e, u) {
    if ((pa(t), t.stateNode === null)) {
      var n = $a,
        c = a.contextType;
      typeof c == "object" && c !== null && (n = Yl(c)),
        (n = new a(e, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = uf),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = e),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Bc(t),
        (c = a.contextType),
        (n.context = typeof c == "object" && c !== null ? Yl(c) : $a),
        (n.state = t.memoizedState),
        (c = a.getDerivedStateFromProps),
        typeof c == "function" && (ef(t, a, c, e), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && uf.enqueueReplaceState(n, n.state, null),
          Je(t, e, n, u),
          Ke(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (e = !0);
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps,
        i = Da(a, f);
      n.props = i;
      var h = n.context,
        b = a.contextType;
      (c = $a), typeof b == "object" && b !== null && (c = Yl(b));
      var T = a.getDerivedStateFromProps;
      (b =
        typeof T == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = t.pendingProps !== f),
        b ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || h !== c) && So(t, n, e, c)),
        (Jt = !1);
      var m = t.memoizedState;
      (n.state = m),
        Je(t, e, n, u),
        Ke(),
        (h = t.memoizedState),
        f || m !== h || Jt
          ? (typeof T == "function" && (ef(t, a, T, e), (h = t.memoizedState)),
            (i = Jt || bo(t, a, i, e, m, h, c))
              ? (b ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = e),
                (t.memoizedState = h)),
            (n.props = e),
            (n.state = h),
            (n.context = c),
            (e = i))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (e = !1));
    } else {
      (n = t.stateNode),
        Yc(l, t),
        (c = t.memoizedProps),
        (b = Da(a, c)),
        (n.props = b),
        (T = t.pendingProps),
        (m = n.context),
        (h = a.contextType),
        (i = $a),
        typeof h == "object" && h !== null && (i = Yl(h)),
        (f = a.getDerivedStateFromProps),
        (h =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== T || m !== i) && So(t, n, e, i)),
        (Jt = !1),
        (m = t.memoizedState),
        (n.state = m),
        Je(t, e, n, u),
        Ke();
      var g = t.memoizedState;
      c !== T ||
      m !== g ||
      Jt ||
      (l !== null && l.dependencies !== null && Lu(l.dependencies))
        ? (typeof f == "function" && (ef(t, a, f, e), (g = t.memoizedState)),
          (b =
            Jt ||
            bo(t, a, b, e, m, g, i) ||
            (l !== null && l.dependencies !== null && Lu(l.dependencies)))
            ? (h ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(e, g, i),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(e, g, i)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && m === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && m === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = e),
              (t.memoizedState = g)),
          (n.props = e),
          (n.state = g),
          (n.context = i),
          (e = b))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && m === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && m === l.memoizedState) ||
            (t.flags |= 1024),
          (e = !1));
    }
    return (
      (n = e),
      rn(l, t),
      (e = (t.flags & 128) !== 0),
      n || e
        ? ((n = t.stateNode),
          (a =
            e && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && e
            ? ((t.child = fe(t, l.child, null, u)),
              (t.child = fe(t, null, a, u)))
            : Rl(l, t, a, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Yt(l, t, u)),
      l
    );
  }
  function _o(l, t, a, e) {
    return Ce(), (t.flags |= 256), Rl(l, t, a, e), t.child;
  }
  var ff = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function sf(l) {
    return { baseLanes: l, cachePool: As() };
  }
  function of(l, t, a) {
    return (l = l !== null ? l.childLanes & ~a : 0), t && (l |= vt), l;
  }
  function Bo(l, t, a) {
    var e = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (El.current & 2) !== 0),
      c && ((u = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (P) {
        if ((u ? $t(t) : It(), P)) {
          var f = hl,
            i;
          if ((i = f)) {
            l: {
              for (i = f, f = Tt; i.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break l;
                }
                if (((i = bt(i.nextSibling)), i === null)) {
                  f = null;
                  break l;
                }
              }
              f = i;
            }
            f !== null
              ? ((t.memoizedState = {
                  dehydrated: f,
                  treeContext: Ta !== null ? { id: Rt, overflow: Ut } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (i = Pl(18, null, null, 0)),
                (i.stateNode = f),
                (i.return = t),
                (t.child = i),
                (Cl = t),
                (hl = null),
                (i = !0))
              : (i = !1);
          }
          i || xa(t);
        }
        if (
          ((f = t.memoizedState),
          f !== null && ((f = f.dehydrated), f !== null))
        )
          return Jf(f) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Bt(t);
      }
      return (
        (f = e.children),
        (e = e.fallback),
        u
          ? (It(),
            (u = t.mode),
            (f = dn({ mode: "hidden", children: f }, u)),
            (e = Aa(e, u, a, null)),
            (f.return = t),
            (e.return = t),
            (f.sibling = e),
            (t.child = f),
            (u = t.child),
            (u.memoizedState = sf(a)),
            (u.childLanes = of(l, c, a)),
            (t.memoizedState = ff),
            e)
          : ($t(t), rf(t, f))
      );
    }
    if (
      ((i = l.memoizedState), i !== null && ((f = i.dehydrated), f !== null))
    ) {
      if (n)
        t.flags & 256
          ? ($t(t), (t.flags &= -257), (t = df(l, t, a)))
          : t.memoizedState !== null
          ? (It(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (It(),
            (u = e.fallback),
            (f = t.mode),
            (e = dn({ mode: "visible", children: e.children }, f)),
            (u = Aa(u, f, a, null)),
            (u.flags |= 2),
            (e.return = t),
            (u.return = t),
            (e.sibling = u),
            (t.child = e),
            fe(t, l.child, null, a),
            (e = t.child),
            (e.memoizedState = sf(a)),
            (e.childLanes = of(l, c, a)),
            (t.memoizedState = ff),
            (t = u));
      else if (($t(t), Jf(f))) {
        if (((c = f.nextSibling && f.nextSibling.dataset), c)) var h = c.dgst;
        (c = h),
          (e = Error(r(419))),
          (e.stack = ""),
          (e.digest = c),
          Xe({ value: e, source: null, stack: null }),
          (t = df(l, t, a));
      } else if (
        (Nl || Ge(l, t, a, !1), (c = (a & l.childLanes) !== 0), Nl || c)
      ) {
        if (
          ((c = ol),
          c !== null &&
            ((e = a & -a),
            (e = (e & 42) !== 0 ? 1 : Jn(e)),
            (e = (e & (c.suspendedLanes | a)) !== 0 ? 0 : e),
            e !== 0 && e !== i.retryLane))
        )
          throw ((i.retryLane = e), Fa(l, e), ut(c, l, e), po);
        f.data === "$?" || Rf(), (t = df(l, t, a));
      } else
        f.data === "$?"
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = i.treeContext),
            (hl = bt(f.nextSibling)),
            (Cl = t),
            (P = !0),
            (za = null),
            (Tt = !1),
            l !== null &&
              ((ot[rt++] = Rt),
              (ot[rt++] = Ut),
              (ot[rt++] = Ta),
              (Rt = l.id),
              (Ut = l.overflow),
              (Ta = t)),
            (t = rf(t, e.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (It(),
        (u = e.fallback),
        (f = t.mode),
        (i = l.child),
        (h = i.sibling),
        (e = Dt(i, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = i.subtreeFlags & 65011712),
        h !== null ? (u = Dt(h, u)) : ((u = Aa(u, f, a, null)), (u.flags |= 2)),
        (u.return = t),
        (e.return = t),
        (e.sibling = u),
        (t.child = e),
        (e = u),
        (u = t.child),
        (f = l.child.memoizedState),
        f === null
          ? (f = sf(a))
          : ((i = f.cachePool),
            i !== null
              ? ((h = Tl._currentValue),
                (i = i.parent !== h ? { parent: h, pool: h } : i))
              : (i = As()),
            (f = { baseLanes: f.baseLanes | a, cachePool: i })),
        (u.memoizedState = f),
        (u.childLanes = of(l, c, a)),
        (t.memoizedState = ff),
        e)
      : ($t(t),
        (a = l.child),
        (l = a.sibling),
        (a = Dt(a, { mode: "visible", children: e.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function rf(l, t) {
    return (
      (t = dn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function dn(l, t) {
    return (
      (l = Pl(22, l, null, t)),
      (l.lanes = 0),
      (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      l
    );
  }
  function df(l, t, a) {
    return (
      fe(t, l.child, null, a),
      (l = rf(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Yo(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    e !== null && (e.lanes |= t), Dc(l.return, t, a);
  }
  function vf(l, t, a, e, u) {
    var n = l.memoizedState;
    n === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: e,
          tail: a,
          tailMode: u,
        })
      : ((n.isBackwards = t),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = e),
        (n.tail = a),
        (n.tailMode = u));
  }
  function qo(l, t, a) {
    var e = t.pendingProps,
      u = e.revealOrder,
      n = e.tail;
    if ((Rl(l, t, e.children, a), (e = El.current), (e & 2) !== 0))
      (e = (e & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && Yo(l, a, t);
          else if (l.tag === 19) Yo(l, a, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      e &= 1;
    }
    switch ((N(El, e), u)) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          (l = a.alternate),
            l !== null && fn(l) === null && (u = a),
            (a = a.sibling);
        (a = u),
          a === null
            ? ((u = t.child), (t.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          vf(t, !1, u, a, n);
        break;
      case "backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && fn(l) === null)) {
            t.child = u;
            break;
          }
          (l = u.sibling), (u.sibling = a), (a = u), (u = l);
        }
        vf(t, !0, a, null, n);
        break;
      case "together":
        vf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Yt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (ea |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((Ge(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        l = t.child, a = Dt(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (a = a.sibling = Dt(l, l.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function hf(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Lu(l)));
  }
  function Qd(l, t, a) {
    switch (t.tag) {
      case 3:
        rl(t, t.stateNode.containerInfo),
          Kt(t, Tl, l.memoizedState.cache),
          Ce();
        break;
      case 27:
      case 5:
        Vn(t);
        break;
      case 4:
        rl(t, t.stateNode.containerInfo);
        break;
      case 10:
        Kt(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? ($t(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
            ? Bo(l, t, a)
            : ($t(t), (l = Yt(l, t, a)), l !== null ? l.sibling : null);
        $t(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((e = (a & t.childLanes) !== 0),
          e || (Ge(l, t, a, !1), (e = (a & t.childLanes) !== 0)),
          u)
        ) {
          if (e) return qo(l, t, a);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          N(El, El.current),
          e)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ro(l, t, a);
      case 24:
        Kt(t, Tl, l.memoizedState.cache);
    }
    return Yt(l, t, a);
  }
  function Co(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Nl = !0;
      else {
        if (!hf(l, a) && (t.flags & 128) === 0) return (Nl = !1), Qd(l, t, a);
        Nl = (l.flags & 131072) !== 0;
      }
    else (Nl = !1), P && (t.flags & 1048576) !== 0 && vs(t, Zu, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var e = t.elementType,
            u = e._init;
          if (((e = u(e._payload)), (t.type = e), typeof e == "function"))
            Ec(e)
              ? ((l = Da(e, l)), (t.tag = 1), (t = Ho(null, t, e, l, a)))
              : ((t.tag = 0), (t = cf(null, t, e, l, a)));
          else {
            if (e != null) {
              if (((u = e.$$typeof), u === mt)) {
                (t.tag = 11), (t = No(null, t, e, l, a));
                break l;
              } else if (u === Jl) {
                (t.tag = 14), (t = Mo(null, t, e, l, a));
                break l;
              }
            }
            throw ((t = ha(e) || e), Error(r(306, t, "")));
          }
        }
        return t;
      case 0:
        return cf(l, t, t.type, t.pendingProps, a);
      case 1:
        return (e = t.type), (u = Da(e, t.pendingProps)), Ho(l, t, e, u, a);
      case 3:
        l: {
          if ((rl(t, t.stateNode.containerInfo), l === null))
            throw Error(r(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          (u = n.element), Yc(l, t), Je(t, e, null, a);
          var c = t.memoizedState;
          if (
            ((e = c.cache),
            Kt(t, Tl, e),
            e !== n.cache && Rc(t, [Tl], a, !0),
            Ke(),
            (e = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: e, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = _o(l, t, e, a);
              break l;
            } else if (e !== u) {
              (u = it(Error(r(424)), t)), Xe(u), (t = _o(l, t, e, a));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                hl = bt(l.firstChild),
                  Cl = t,
                  P = !0,
                  za = null,
                  Tt = !0,
                  a = yo(t, null, e, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
            }
          else {
            if ((Ce(), e === u)) {
              t = Yt(l, t, a);
              break l;
            }
            Rl(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          rn(l, t),
          l === null
            ? (a = V0(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : P ||
                ((a = t.type),
                (l = t.pendingProps),
                (e = pn(Q.current).createElement(a)),
                (e[Bl] = t),
                (e[Xl] = l),
                jl(e, a, l),
                pl(e),
                (t.stateNode = e))
            : (t.memoizedState = V0(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          Vn(t),
          l === null &&
            P &&
            ((e = t.stateNode = X0(t.type, t.pendingProps, Q.current)),
            (Cl = t),
            (Tt = !0),
            (u = hl),
            fa(t.type) ? ((kf = u), (hl = bt(e.firstChild))) : (hl = u)),
          Rl(l, t, t.pendingProps.children, a),
          rn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            P &&
            ((u = e = hl) &&
              ((e = m1(e, t.type, t.pendingProps, Tt)),
              e !== null
                ? ((t.stateNode = e),
                  (Cl = t),
                  (hl = bt(e.firstChild)),
                  (Tt = !1),
                  (u = !0))
                : (u = !1)),
            u || xa(t)),
          Vn(t),
          (u = t.type),
          (n = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (e = n.children),
          Zf(u, n) ? (e = null) : c !== null && Zf(u, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Vc(l, t, Hd, null, null, a)), (mu._currentValue = u)),
          rn(l, t),
          Rl(l, t, e, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            P &&
            ((l = a = hl) &&
              ((a = y1(a, t.pendingProps, Tt)),
              a !== null
                ? ((t.stateNode = a), (Cl = t), (hl = null), (l = !0))
                : (l = !1)),
            l || xa(t)),
          null
        );
      case 13:
        return Bo(l, t, a);
      case 4:
        return (
          rl(t, t.stateNode.containerInfo),
          (e = t.pendingProps),
          l === null ? (t.child = fe(t, null, e, a)) : Rl(l, t, e, a),
          t.child
        );
      case 11:
        return No(l, t, t.type, t.pendingProps, a);
      case 7:
        return Rl(l, t, t.pendingProps, a), t.child;
      case 8:
        return Rl(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return Rl(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return (
          (e = t.pendingProps),
          Kt(t, t.type, e.value),
          Rl(l, t, e.children, a),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (e = t.pendingProps.children),
          pa(t),
          (u = Yl(u)),
          (e = e(u)),
          (t.flags |= 1),
          Rl(l, t, e, a),
          t.child
        );
      case 14:
        return Mo(l, t, t.type, t.pendingProps, a);
      case 15:
        return Do(l, t, t.type, t.pendingProps, a);
      case 19:
        return qo(l, t, a);
      case 31:
        return (
          (e = t.pendingProps),
          (a = t.mode),
          (e = { mode: e.mode, children: e.children }),
          l === null
            ? ((a = dn(e, a)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a))
            : ((a = Dt(l.child, e)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a)),
          t
        );
      case 22:
        return Ro(l, t, a);
      case 24:
        return (
          pa(t),
          (e = Yl(Tl)),
          l === null
            ? ((u = Hc()),
              u === null &&
                ((u = ol),
                (n = Uc()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= a),
                (u = n)),
              (t.memoizedState = { parent: e, cache: u }),
              Bc(t),
              Kt(t, Tl, u))
            : ((l.lanes & a) !== 0 && (Yc(l, t), Je(t, null, null, a), Ke()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  Kt(t, Tl, e))
                : ((e = n.cache),
                  Kt(t, Tl, e),
                  e !== u.cache && Rc(t, [Tl], a, !0))),
          Rl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function qt(l) {
    l.flags |= 4;
  }
  function Xo(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !J0(t))) {
      if (
        ((t = dt.current),
        t !== null &&
          ((W & 4194048) === W
            ? Et !== null
            : ((W & 62914560) !== W && (W & 536870912) === 0) || t !== Et))
      )
        throw ((Ze = _c), Ts);
      l.flags |= 8192;
    }
  }
  function vn(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? yi() : 536870912), (l.lanes |= t), (re |= t));
  }
  function lu(l, t) {
    if (!P)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var e = null; a !== null; )
            a.alternate !== null && (e = a), (a = a.sibling);
          e === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (e.sibling = null);
      }
  }
  function vl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      e = 0;
    if (t)
      for (var u = l.child; u !== null; )
        (a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags & 65011712),
          (e |= u.flags & 65011712),
          (u.return = l),
          (u = u.sibling);
    else
      for (u = l.child; u !== null; )
        (a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags),
          (e |= u.flags),
          (u.return = l),
          (u = u.sibling);
    return (l.subtreeFlags |= e), (l.childLanes = a), t;
  }
  function Vd(l, t, a) {
    var e = t.pendingProps;
    switch ((pc(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return vl(t), null;
      case 1:
        return vl(t), null;
      case 3:
        return (
          (a = t.stateNode),
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          Ht(Tl),
          Vt(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (qe(t)
              ? qt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ys())),
          vl(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          l === null
            ? (qt(t),
              a !== null ? (vl(t), Xo(t, a)) : (vl(t), (t.flags &= -16777217)))
            : a
            ? a !== l.memoizedState
              ? (qt(t), vl(t), Xo(t, a))
              : (vl(t), (t.flags &= -16777217))
            : (l.memoizedProps !== e && qt(t), vl(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        zu(t), (a = Q.current);
        var u = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== e && qt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(r(166));
            return vl(t), null;
          }
          (l = B.current),
            qe(t) ? hs(t) : ((l = X0(u, e, a)), (t.stateNode = l), qt(t));
        }
        return vl(t), null;
      case 5:
        if ((zu(t), (a = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== e && qt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(r(166));
            return vl(t), null;
          }
          if (((l = B.current), qe(t))) hs(t);
          else {
            switch (((u = pn(Q.current)), l)) {
              case 1:
                l = u.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                l = u.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    l = u.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    l = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (l = u.createElement("div")),
                      (l.innerHTML = "<script></script>"),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case "select":
                    (l =
                      typeof e.is == "string"
                        ? u.createElement("select", { is: e.is })
                        : u.createElement("select")),
                      e.multiple
                        ? (l.multiple = !0)
                        : e.size && (l.size = e.size);
                    break;
                  default:
                    l =
                      typeof e.is == "string"
                        ? u.createElement(a, { is: e.is })
                        : u.createElement(a);
                }
            }
            (l[Bl] = t), (l[Xl] = e);
            l: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) l.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === t) break l;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) break l;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            t.stateNode = l;
            l: switch ((jl(l, a, e), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!e.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && qt(t);
          }
        }
        return vl(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== e && qt(t);
        else {
          if (typeof e != "string" && t.stateNode === null) throw Error(r(166));
          if (((l = Q.current), qe(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (e = null),
              (u = Cl),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            (l[Bl] = t),
              (l = !!(
                l.nodeValue === a ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                j0(l.nodeValue, a)
              )),
              l || xa(t);
          } else (l = pn(l).createTextNode(e)), (l[Bl] = t), (t.stateNode = l);
        }
        return vl(t), null;
      case 13:
        if (
          ((e = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = qe(t)), e !== null && e.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(r(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(r(317));
              u[Bl] = t;
            } else
              Ce(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            vl(t), (u = !1);
          } else
            (u = ys()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
        }
        if ((Bt(t), (t.flags & 128) !== 0)) return (t.lanes = a), t;
        if (
          ((a = e !== null), (l = l !== null && l.memoizedState !== null), a)
        ) {
          (e = t.child),
            (u = null),
            e.alternate !== null &&
              e.alternate.memoizedState !== null &&
              e.alternate.memoizedState.cachePool !== null &&
              (u = e.alternate.memoizedState.cachePool.pool);
          var n = null;
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
            n !== u && (e.flags |= 2048);
        }
        return (
          a !== l && a && (t.child.flags |= 8192),
          vn(t, t.updateQueue),
          vl(t),
          null
        );
      case 4:
        return Vt(), l === null && Xf(t.stateNode.containerInfo), vl(t), null;
      case 10:
        return Ht(t.type), vl(t), null;
      case 19:
        if ((R(El), (u = t.memoizedState), u === null)) return vl(t), null;
        if (((e = (t.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) lu(u, !1);
          else {
            if (ml !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = fn(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      lu(u, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      vn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;

                  )
                    ds(a, l), (a = a.sibling);
                  return N(El, (El.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            u.tail !== null &&
              At() > yn &&
              ((t.flags |= 128), (e = !0), lu(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!e)
            if (((l = fn(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (e = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                vn(t, l),
                lu(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !P)
              )
                return vl(t), null;
            } else
              2 * At() - u.renderingStartTime > yn &&
                a !== 536870912 &&
                ((t.flags |= 128), (e = !0), lu(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = u.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = At()),
            (t.sibling = null),
            (l = El.current),
            N(El, e ? (l & 1) | 2 : l & 1),
            t)
          : (vl(t), null);
      case 22:
      case 23:
        return (
          Bt(t),
          Gc(),
          (e = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== e && (t.flags |= 8192)
            : e && (t.flags |= 8192),
          e
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (vl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : vl(t),
          (a = t.updateQueue),
          a !== null && vn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (e = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          e !== a && (t.flags |= 2048),
          l !== null && R(Na),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Ht(Tl),
          vl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function wd(l, t) {
    switch ((pc(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ht(Tl),
          Vt(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return zu(t), null;
      case 13:
        if (
          (Bt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          Ce();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return R(El), null;
      case 4:
        return Vt(), null;
      case 10:
        return Ht(t.type), null;
      case 22:
      case 23:
        return (
          Bt(t),
          Gc(),
          l !== null && R(Na),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return Ht(Tl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Go(l, t) {
    switch ((pc(t), t.tag)) {
      case 3:
        Ht(Tl), Vt();
        break;
      case 26:
      case 27:
      case 5:
        zu(t);
        break;
      case 4:
        Vt();
        break;
      case 13:
        Bt(t);
        break;
      case 19:
        R(El);
        break;
      case 10:
        Ht(t.type);
        break;
      case 22:
      case 23:
        Bt(t), Gc(), l !== null && R(Na);
        break;
      case 24:
        Ht(Tl);
    }
  }
  function tu(l, t) {
    try {
      var a = t.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create,
              c = a.inst;
            (e = n()), (c.destroy = e);
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (f) {
      sl(t, t.return, f);
    }
  }
  function Pt(l, t, a) {
    try {
      var e = t.updateQueue,
        u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var c = e.inst,
              f = c.destroy;
            if (f !== void 0) {
              (c.destroy = void 0), (u = t);
              var i = a,
                h = f;
              try {
                h();
              } catch (b) {
                sl(u, i, b);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (b) {
      sl(t, t.return, b);
    }
  }
  function Qo(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Ns(t, a);
      } catch (e) {
        sl(l, l.return, e);
      }
    }
  }
  function Vo(l, t, a) {
    (a.props = Da(l.type, l.memoizedProps)), (a.state = l.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (e) {
      sl(l, t, e);
    }
  }
  function au(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(e)) : (a.current = e);
      }
    } catch (u) {
      sl(l, t, u);
    }
  }
  function zt(l, t) {
    var a = l.ref,
      e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          sl(l, t, u);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          sl(l, t, u);
        }
      else a.current = null;
  }
  function wo(l) {
    var t = l.type,
      a = l.memoizedProps,
      e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? (e.src = a.src) : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      sl(l, l.return, u);
    }
  }
  function mf(l, t, a) {
    try {
      var e = l.stateNode;
      o1(e, l.type, a, t), (e[Xl] = t);
    } catch (u) {
      sl(l, l.return, u);
    }
  }
  function Zo(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && fa(l.type)) ||
      l.tag === 4
    );
  }
  function yf(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Zo(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && fa(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function gf(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      (l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = On));
    else if (
      e !== 4 &&
      (e === 27 && fa(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (gf(l, t, a), l = l.sibling; l !== null; )
        gf(l, t, a), (l = l.sibling);
  }
  function hn(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      (l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (
      e !== 4 &&
      (e === 27 && fa(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (hn(l, t, a), l = l.sibling; l !== null; )
        hn(l, t, a), (l = l.sibling);
  }
  function Lo(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      jl(t, e, a), (t[Bl] = l), (t[Xl] = a);
    } catch (n) {
      sl(l, l.return, n);
    }
  }
  var Ct = !1,
    bl = !1,
    bf = !1,
    Ko = typeof WeakSet == "function" ? WeakSet : Set,
    Ml = null;
  function Zd(l, t) {
    if (((l = l.containerInfo), (Vf = jn), (l = as(l)), mc(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var u = e.anchorOffset,
              n = e.focusNode;
            e = e.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var c = 0,
              f = -1,
              i = -1,
              h = 0,
              b = 0,
              T = l,
              m = null;
            t: for (;;) {
              for (
                var g;
                T !== a || (u !== 0 && T.nodeType !== 3) || (f = c + u),
                  T !== n || (e !== 0 && T.nodeType !== 3) || (i = c + e),
                  T.nodeType === 3 && (c += T.nodeValue.length),
                  (g = T.firstChild) !== null;

              )
                (m = T), (T = g);
              for (;;) {
                if (T === l) break t;
                if (
                  (m === a && ++h === u && (f = c),
                  m === n && ++b === e && (i = c),
                  (g = T.nextSibling) !== null)
                )
                  break;
                (T = m), (m = T.parentNode);
              }
              T = g;
            }
            a = f === -1 || i === -1 ? null : { start: f, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      wf = { focusedElem: l, selectionRange: a }, jn = !1, Ml = t;
      Ml !== null;

    )
      if (
        ((t = Ml), (l = t.child), (t.subtreeFlags & 1024) !== 0 && l !== null)
      )
        (l.return = t), (Ml = l);
      else
        for (; Ml !== null; ) {
          switch (((t = Ml), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                (l = void 0),
                  (a = t),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (e = a.stateNode);
                try {
                  var G = Da(a.type, u, a.elementType === a.type);
                  (l = e.getSnapshotBeforeUpdate(G, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = l);
                } catch (Y) {
                  sl(a, a.return, Y);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  Kf(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Kf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(r(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (Ml = l);
            break;
          }
          Ml = t.return;
        }
  }
  function Jo(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        la(l, a), e & 4 && tu(5, a);
        break;
      case 1:
        if ((la(l, a), e & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              sl(a, a.return, c);
            }
          else {
            var u = Da(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              sl(a, a.return, c);
            }
          }
        e & 64 && Qo(a), e & 512 && au(a, a.return);
        break;
      case 3:
        if ((la(l, a), e & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Ns(l, t);
          } catch (c) {
            sl(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && e & 4 && Lo(a);
      case 26:
      case 5:
        la(l, a), t === null && e & 4 && wo(a), e & 512 && au(a, a.return);
        break;
      case 12:
        la(l, a);
        break;
      case 13:
        la(l, a),
          e & 4 && Fo(l, a),
          e & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = Pd.bind(null, a)), g1(l, a))));
        break;
      case 22:
        if (((e = a.memoizedState !== null || Ct), !e)) {
          (t = (t !== null && t.memoizedState !== null) || bl), (u = Ct);
          var n = bl;
          (Ct = e),
            (bl = t) && !n ? ta(l, a, (a.subtreeFlags & 8772) !== 0) : la(l, a),
            (Ct = u),
            (bl = n);
        }
        break;
      case 30:
        break;
      default:
        la(l, a);
    }
  }
  function ko(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), ko(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && Fn(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var dl = null,
    Vl = !1;
  function Xt(l, t, a) {
    for (a = a.child; a !== null; ) Wo(l, t, a), (a = a.sibling);
  }
  function Wo(l, t, a) {
    if (Fl && typeof Fl.onCommitFiberUnmount == "function")
      try {
        Fl.onCommitFiberUnmount(ze, a);
      } catch {}
    switch (a.tag) {
      case 26:
        bl || zt(a, t),
          Xt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        bl || zt(a, t);
        var e = dl,
          u = Vl;
        fa(a.type) && ((dl = a.stateNode), (Vl = !1)),
          Xt(l, t, a),
          ru(a.stateNode),
          (dl = e),
          (Vl = u);
        break;
      case 5:
        bl || zt(a, t);
      case 6:
        if (
          ((e = dl),
          (u = Vl),
          (dl = null),
          Xt(l, t, a),
          (dl = e),
          (Vl = u),
          dl !== null)
        )
          if (Vl)
            try {
              (dl.nodeType === 9
                ? dl.body
                : dl.nodeName === "HTML"
                ? dl.ownerDocument.body
                : dl
              ).removeChild(a.stateNode);
            } catch (n) {
              sl(a, t, n);
            }
          else
            try {
              dl.removeChild(a.stateNode);
            } catch (n) {
              sl(a, t, n);
            }
        break;
      case 18:
        dl !== null &&
          (Vl
            ? ((l = dl),
              q0(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                a.stateNode
              ),
              Su(l))
            : q0(dl, a.stateNode));
        break;
      case 4:
        (e = dl),
          (u = Vl),
          (dl = a.stateNode.containerInfo),
          (Vl = !0),
          Xt(l, t, a),
          (dl = e),
          (Vl = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        bl || Pt(2, a, t), bl || Pt(4, a, t), Xt(l, t, a);
        break;
      case 1:
        bl ||
          (zt(a, t),
          (e = a.stateNode),
          typeof e.componentWillUnmount == "function" && Vo(a, t, e)),
          Xt(l, t, a);
        break;
      case 21:
        Xt(l, t, a);
        break;
      case 22:
        (bl = (e = bl) || a.memoizedState !== null), Xt(l, t, a), (bl = e);
        break;
      default:
        Xt(l, t, a);
    }
  }
  function Fo(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Su(l);
      } catch (a) {
        sl(t, t.return, a);
      }
  }
  function Ld(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Ko()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new Ko()),
          t
        );
      default:
        throw Error(r(435, l.tag));
    }
  }
  function Sf(l, t) {
    var a = Ld(l);
    t.forEach(function (e) {
      var u = l1.bind(null, l, e);
      a.has(e) || (a.add(e), e.then(u, u));
    });
  }
  function lt(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e],
          n = l,
          c = t,
          f = c;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (fa(f.type)) {
                (dl = f.stateNode), (Vl = !1);
                break l;
              }
              break;
            case 5:
              (dl = f.stateNode), (Vl = !1);
              break l;
            case 3:
            case 4:
              (dl = f.stateNode.containerInfo), (Vl = !0);
              break l;
          }
          f = f.return;
        }
        if (dl === null) throw Error(r(160));
        Wo(n, c, u),
          (dl = null),
          (Vl = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) $o(t, l), (t = t.sibling);
  }
  var gt = null;
  function $o(l, t) {
    var a = l.alternate,
      e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        lt(t, l),
          tt(l),
          e & 4 && (Pt(3, l, l.return), tu(3, l), Pt(5, l, l.return));
        break;
      case 1:
        lt(t, l),
          tt(l),
          e & 512 && (bl || a === null || zt(a, a.return)),
          e & 64 &&
            Ct &&
            ((l = l.updateQueue),
            l !== null &&
              ((e = l.callbacks),
              e !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? e : a.concat(e)))));
        break;
      case 26:
        var u = gt;
        if (
          (lt(t, l),
          tt(l),
          e & 512 && (bl || a === null || zt(a, a.return)),
          e & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((e = l.memoizedState), a === null))
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  (e = l.type),
                    (a = l.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (e) {
                    case "title":
                      (n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[pe] ||
                          n[Bl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        jl(n, e, a),
                        (n[Bl] = l),
                        pl(n),
                        (e = n);
                      break l;
                    case "link":
                      var c = L0("link", "href", u).get(e + (a.href || ""));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      (n = u.createElement(e)),
                        jl(n, e, a),
                        u.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (c = L0("meta", "content", u).get(
                          e + (a.content || "")
                        ))
                      ) {
                        for (f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      (n = u.createElement(e)),
                        jl(n, e, a),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, e));
                  }
                  (n[Bl] = l), pl(n), (e = n);
                }
                l.stateNode = e;
              } else K0(u, l.type, l.stateNode);
            else l.stateNode = Z0(u, e, l.memoizedProps);
          else
            n !== e
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                e === null
                  ? K0(u, l.type, l.stateNode)
                  : Z0(u, e, l.memoizedProps))
              : e === null &&
                l.stateNode !== null &&
                mf(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        lt(t, l),
          tt(l),
          e & 512 && (bl || a === null || zt(a, a.return)),
          a !== null && e & 4 && mf(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (lt(t, l),
          tt(l),
          e & 512 && (bl || a === null || zt(a, a.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            wa(u, "");
          } catch (g) {
            sl(l, l.return, g);
          }
        }
        e & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), mf(l, u, a !== null ? a.memoizedProps : u)),
          e & 1024 && (bf = !0);
        break;
      case 6:
        if ((lt(t, l), tt(l), e & 4)) {
          if (l.stateNode === null) throw Error(r(162));
          (e = l.memoizedProps), (a = l.stateNode);
          try {
            a.nodeValue = e;
          } catch (g) {
            sl(l, l.return, g);
          }
        }
        break;
      case 3:
        if (
          ((Dn = null),
          (u = gt),
          (gt = Nn(t.containerInfo)),
          lt(t, l),
          (gt = u),
          tt(l),
          e & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Su(t.containerInfo);
          } catch (g) {
            sl(l, l.return, g);
          }
        bf && ((bf = !1), Io(l));
        break;
      case 4:
        (e = gt),
          (gt = Nn(l.stateNode.containerInfo)),
          lt(t, l),
          tt(l),
          (gt = e);
        break;
      case 12:
        lt(t, l), tt(l);
        break;
      case 13:
        lt(t, l),
          tt(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Of = At()),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), Sf(l, e)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var i = a !== null && a.memoizedState !== null,
          h = Ct,
          b = bl;
        if (
          ((Ct = h || u),
          (bl = b || i),
          lt(t, l),
          (bl = b),
          (Ct = h),
          tt(l),
          e & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (a === null || i || Ct || bl || Ra(l)),
              a = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                i = a = t;
                try {
                  if (((n = i.stateNode), u))
                    (c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    f = i.stateNode;
                    var T = i.memoizedProps.style,
                      m =
                        T != null && T.hasOwnProperty("display")
                          ? T.display
                          : null;
                    f.style.display =
                      m == null || typeof m == "boolean" ? "" : ("" + m).trim();
                  }
                } catch (g) {
                  sl(i, i.return, g);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = u ? "" : i.memoizedProps;
                } catch (g) {
                  sl(i, i.return, g);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), (t = t.return);
            }
            a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        e & 4 &&
          ((e = l.updateQueue),
          e !== null &&
            ((a = e.retryQueue),
            a !== null && ((e.retryQueue = null), Sf(l, a))));
        break;
      case 19:
        lt(t, l),
          tt(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), Sf(l, e)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        lt(t, l), tt(l);
    }
  }
  function tt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (Zo(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              n = yf(l);
            hn(l, n, u);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (wa(c, ""), (a.flags &= -33));
            var f = yf(l);
            hn(l, f, c);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo,
              h = yf(l);
            gf(l, h, i);
            break;
          default:
            throw Error(r(161));
        }
      } catch (b) {
        sl(l, l.return, b);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Io(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Io(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function la(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Jo(l, t.alternate, t), (t = t.sibling);
  }
  function Ra(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Pt(4, t, t.return), Ra(t);
          break;
        case 1:
          zt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Vo(t, t.return, a),
            Ra(t);
          break;
        case 27:
          ru(t.stateNode);
        case 26:
        case 5:
          zt(t, t.return), Ra(t);
          break;
        case 22:
          t.memoizedState === null && Ra(t);
          break;
        case 30:
          Ra(t);
          break;
        default:
          Ra(t);
      }
      l = l.sibling;
    }
  }
  function ta(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate,
        u = l,
        n = t,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ta(u, n, a), tu(4, n);
          break;
        case 1:
          if (
            (ta(u, n, a),
            (e = n),
            (u = e.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (h) {
              sl(e, e.return, h);
            }
          if (((e = n), (u = e.updateQueue), u !== null)) {
            var f = e.stateNode;
            try {
              var i = u.shared.hiddenCallbacks;
              if (i !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < i.length; u++)
                  ps(i[u], f);
            } catch (h) {
              sl(e, e.return, h);
            }
          }
          a && c & 64 && Qo(n), au(n, n.return);
          break;
        case 27:
          Lo(n);
        case 26:
        case 5:
          ta(u, n, a), a && e === null && c & 4 && wo(n), au(n, n.return);
          break;
        case 12:
          ta(u, n, a);
          break;
        case 13:
          ta(u, n, a), a && c & 4 && Fo(u, n);
          break;
        case 22:
          n.memoizedState === null && ta(u, n, a), au(n, n.return);
          break;
        case 30:
          break;
        default:
          ta(u, n, a);
      }
      t = t.sibling;
    }
  }
  function Af(l, t) {
    var a = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Qe(a));
  }
  function Tf(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Qe(l));
  }
  function xt(l, t, a, e) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Po(l, t, a, e), (t = t.sibling);
  }
  function Po(l, t, a, e) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        xt(l, t, a, e), u & 2048 && tu(9, t);
        break;
      case 1:
        xt(l, t, a, e);
        break;
      case 3:
        xt(l, t, a, e),
          u & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Qe(l)));
        break;
      case 12:
        if (u & 2048) {
          xt(l, t, a, e), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              c = n.id,
              f = n.onPostCommit;
            typeof f == "function" &&
              f(
                c,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (i) {
            sl(t, t.return, i);
          }
        } else xt(l, t, a, e);
        break;
      case 13:
        xt(l, t, a, e);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? xt(l, t, a, e)
              : eu(l, t)
            : n._visibility & 2
            ? xt(l, t, a, e)
            : ((n._visibility |= 2),
              ie(l, t, a, e, (t.subtreeFlags & 10256) !== 0)),
          u & 2048 && Af(c, t);
        break;
      case 24:
        xt(l, t, a, e), u & 2048 && Tf(t.alternate, t);
        break;
      default:
        xt(l, t, a, e);
    }
  }
  function ie(l, t, a, e, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l,
        c = t,
        f = a,
        i = e,
        h = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ie(n, c, f, i, u), tu(8, c);
          break;
        case 23:
          break;
        case 22:
          var b = c.stateNode;
          c.memoizedState !== null
            ? b._visibility & 2
              ? ie(n, c, f, i, u)
              : eu(n, c)
            : ((b._visibility |= 2), ie(n, c, f, i, u)),
            u && h & 2048 && Af(c.alternate, c);
          break;
        case 24:
          ie(n, c, f, i, u), u && h & 2048 && Tf(c.alternate, c);
          break;
        default:
          ie(n, c, f, i, u);
      }
      t = t.sibling;
    }
  }
  function eu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          e = t,
          u = e.flags;
        switch (e.tag) {
          case 22:
            eu(a, e), u & 2048 && Af(e.alternate, e);
            break;
          case 24:
            eu(a, e), u & 2048 && Tf(e.alternate, e);
            break;
          default:
            eu(a, e);
        }
        t = t.sibling;
      }
  }
  var uu = 8192;
  function se(l) {
    if (l.subtreeFlags & uu)
      for (l = l.child; l !== null; ) l0(l), (l = l.sibling);
  }
  function l0(l) {
    switch (l.tag) {
      case 26:
        se(l),
          l.flags & uu &&
            l.memoizedState !== null &&
            R1(gt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        se(l);
        break;
      case 3:
      case 4:
        var t = gt;
        (gt = Nn(l.stateNode.containerInfo)), se(l), (gt = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = uu), (uu = 16777216), se(l), (uu = t))
            : se(l));
        break;
      default:
        se(l);
    }
  }
  function t0(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function nu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          (Ml = e), e0(e, l);
        }
      t0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) a0(l), (l = l.sibling);
  }
  function a0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        nu(l), l.flags & 2048 && Pt(9, l, l.return);
        break;
      case 3:
        nu(l);
        break;
      case 12:
        nu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), mn(l))
          : nu(l);
        break;
      default:
        nu(l);
    }
  }
  function mn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          (Ml = e), e0(e, l);
        }
      t0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          Pt(8, t, t.return), mn(t);
          break;
        case 22:
          (a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), mn(t));
          break;
        default:
          mn(t);
      }
      l = l.sibling;
    }
  }
  function e0(l, t) {
    for (; Ml !== null; ) {
      var a = Ml;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Pt(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Qe(a.memoizedState.cache);
      }
      if (((e = a.child), e !== null)) (e.return = a), (Ml = e);
      else
        l: for (a = l; Ml !== null; ) {
          e = Ml;
          var u = e.sibling,
            n = e.return;
          if ((ko(e), e === a)) {
            Ml = null;
            break l;
          }
          if (u !== null) {
            (u.return = n), (Ml = u);
            break l;
          }
          Ml = n;
        }
    }
  }
  var Kd = {
      getCacheForType: function (l) {
        var t = Yl(Tl),
          a = t.data.get(l);
        return a === void 0 && ((a = l()), t.data.set(l, a)), a;
      },
    },
    Jd = typeof WeakMap == "function" ? WeakMap : Map,
    tl = 0,
    ol = null,
    L = null,
    W = 0,
    al = 0,
    at = null,
    aa = !1,
    oe = !1,
    Ef = !1,
    Gt = 0,
    ml = 0,
    ea = 0,
    Ua = 0,
    zf = 0,
    vt = 0,
    re = 0,
    cu = null,
    wl = null,
    xf = !1,
    Of = 0,
    yn = 1 / 0,
    gn = null,
    ua = null,
    Ul = 0,
    na = null,
    de = null,
    ve = 0,
    pf = 0,
    Nf = null,
    u0 = null,
    fu = 0,
    Mf = null;
  function et() {
    if ((tl & 2) !== 0 && W !== 0) return W & -W;
    if (S.T !== null) {
      var l = le;
      return l !== 0 ? l : Bf();
    }
    return Si();
  }
  function n0() {
    vt === 0 && (vt = (W & 536870912) === 0 || P ? mi() : 536870912);
    var l = dt.current;
    return l !== null && (l.flags |= 32), vt;
  }
  function ut(l, t, a) {
    ((l === ol && (al === 2 || al === 9)) || l.cancelPendingCommit !== null) &&
      (he(l, 0), ca(l, W, vt, !1)),
      Oe(l, a),
      ((tl & 2) === 0 || l !== ol) &&
        (l === ol &&
          ((tl & 2) === 0 && (Ua |= a), ml === 4 && ca(l, W, vt, !1)),
        Ot(l));
  }
  function c0(l, t, a) {
    if ((tl & 6) !== 0) throw Error(r(327));
    var e = (!a && (t & 124) === 0 && (t & l.expiredLanes) === 0) || xe(l, t),
      u = e ? Fd(l, t) : Uf(l, t, !0),
      n = e;
    do {
      if (u === 0) {
        oe && !e && ca(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !kd(a))) {
          (u = Uf(l, t, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            (c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            t = c;
            l: {
              var f = l;
              u = cu;
              var i = f.current.memoizedState.isDehydrated;
              if ((i && (he(f, c).flags |= 256), (c = Uf(f, c, !1)), c !== 2)) {
                if (Ef && !i) {
                  (f.errorRecoveryDisabledLanes |= n), (Ua |= n), (u = 4);
                  break l;
                }
                (n = wl),
                  (wl = u),
                  n !== null && (wl === null ? (wl = n) : wl.push.apply(wl, n));
              }
              u = c;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          he(l, 0), ca(l, t, 0, !0);
          break;
        }
        l: {
          switch (((e = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ca(e, t, vt, !aa);
              break l;
            case 2:
              wl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && ((u = Of + 300 - At()), 10 < u)) {
            if ((ca(e, t, vt, !aa), Nu(e, 0, !0) !== 0)) break l;
            e.timeoutHandle = B0(
              f0.bind(null, e, a, wl, gn, xf, t, vt, Ua, re, aa, n, 2, -0, 0),
              u
            );
            break l;
          }
          f0(e, a, wl, gn, xf, t, vt, Ua, re, aa, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ot(l);
  }
  function f0(l, t, a, e, u, n, c, f, i, h, b, T, m, g) {
    if (
      ((l.timeoutHandle = -1),
      (T = t.subtreeFlags),
      (T & 8192 || (T & 16785408) === 16785408) &&
        ((hu = { stylesheets: null, count: 0, unsuspend: D1 }),
        l0(t),
        (T = U1()),
        T !== null))
    ) {
      (l.cancelPendingCommit = T(
        h0.bind(null, l, t, n, a, e, u, c, f, i, b, 1, m, g)
      )),
        ca(l, n, c, !h);
      return;
    }
    h0(l, t, n, a, e, u, c, f, i);
  }
  function kd(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var e = 0; e < a.length; e++) {
          var u = a[e],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!Il(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        (a.return = t), (t = a);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ca(l, t, a, e) {
    (t &= ~zf),
      (t &= ~Ua),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      e && (l.warmLanes |= t),
      (e = l.expirationTimes);
    for (var u = t; 0 < u; ) {
      var n = 31 - $l(u),
        c = 1 << n;
      (e[n] = -1), (u &= ~c);
    }
    a !== 0 && gi(l, a, t);
  }
  function bn() {
    return (tl & 6) === 0 ? (iu(0), !1) : !0;
  }
  function Df() {
    if (L !== null) {
      if (al === 0) var l = L.return;
      else (l = L), (jt = Oa = null), Lc(l), (ce = null), (Ie = 0), (l = L);
      for (; l !== null; ) Go(l.alternate, l), (l = l.return);
      L = null;
    }
  }
  function he(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && ((l.timeoutHandle = -1), d1(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      Df(),
      (ol = l),
      (L = a = Dt(l.current, null)),
      (W = t),
      (al = 0),
      (at = null),
      (aa = !1),
      (oe = xe(l, t)),
      (Ef = !1),
      (re = vt = zf = Ua = ea = ml = 0),
      (wl = cu = null),
      (xf = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var u = 31 - $l(e),
          n = 1 << u;
        (t |= l[u]), (e &= ~n);
      }
    return (Gt = t), Xu(), a;
  }
  function i0(l, t) {
    (w = null),
      (S.H = un),
      t === we || t === ku
        ? ((t = xs()), (al = 3))
        : t === Ts
        ? ((t = xs()), (al = 4))
        : (al =
            t === po
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (at = t),
      L === null && ((ml = 1), on(l, it(t, l.current)));
  }
  function s0() {
    var l = S.H;
    return (S.H = un), l === null ? un : l;
  }
  function o0() {
    var l = S.A;
    return (S.A = Kd), l;
  }
  function Rf() {
    (ml = 4),
      aa || ((W & 4194048) !== W && dt.current !== null) || (oe = !0),
      ((ea & 134217727) === 0 && (Ua & 134217727) === 0) ||
        ol === null ||
        ca(ol, W, vt, !1);
  }
  function Uf(l, t, a) {
    var e = tl;
    tl |= 2;
    var u = s0(),
      n = o0();
    (ol !== l || W !== t) && ((gn = null), he(l, t)), (t = !1);
    var c = ml;
    l: do
      try {
        if (al !== 0 && L !== null) {
          var f = L,
            i = at;
          switch (al) {
            case 8:
              Df(), (c = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              dt.current === null && (t = !0);
              var h = al;
              if (((al = 0), (at = null), me(l, f, i, h), a && oe)) {
                c = 0;
                break l;
              }
              break;
            default:
              (h = al), (al = 0), (at = null), me(l, f, i, h);
          }
        }
        Wd(), (c = ml);
        break;
      } catch (b) {
        i0(l, b);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (jt = Oa = null),
      (tl = e),
      (S.H = u),
      (S.A = n),
      L === null && ((ol = null), (W = 0), Xu()),
      c
    );
  }
  function Wd() {
    for (; L !== null; ) r0(L);
  }
  function Fd(l, t) {
    var a = tl;
    tl |= 2;
    var e = s0(),
      u = o0();
    ol !== l || W !== t
      ? ((gn = null), (yn = At() + 500), he(l, t))
      : (oe = xe(l, t));
    l: do
      try {
        if (al !== 0 && L !== null) {
          t = L;
          var n = at;
          t: switch (al) {
            case 1:
              (al = 0), (at = null), me(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Es(n)) {
                (al = 0), (at = null), d0(t);
                break;
              }
              (t = function () {
                (al !== 2 && al !== 9) || ol !== l || (al = 7), Ot(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              al = 7;
              break l;
            case 4:
              al = 5;
              break l;
            case 7:
              Es(n)
                ? ((al = 0), (at = null), d0(t))
                : ((al = 0), (at = null), me(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (L.tag) {
                case 26:
                  c = L.memoizedState;
                case 5:
                case 27:
                  var f = L;
                  if (!c || J0(c)) {
                    (al = 0), (at = null);
                    var i = f.sibling;
                    if (i !== null) L = i;
                    else {
                      var h = f.return;
                      h !== null ? ((L = h), Sn(h)) : (L = null);
                    }
                    break t;
                  }
              }
              (al = 0), (at = null), me(l, t, n, 5);
              break;
            case 6:
              (al = 0), (at = null), me(l, t, n, 6);
              break;
            case 8:
              Df(), (ml = 6);
              break l;
            default:
              throw Error(r(462));
          }
        }
        $d();
        break;
      } catch (b) {
        i0(l, b);
      }
    while (!0);
    return (
      (jt = Oa = null),
      (S.H = e),
      (S.A = u),
      (tl = a),
      L !== null ? 0 : ((ol = null), (W = 0), Xu(), ml)
    );
  }
  function $d() {
    for (; L !== null && !Sr(); ) r0(L);
  }
  function r0(l) {
    var t = Co(l.alternate, l, Gt);
    (l.memoizedProps = l.pendingProps), t === null ? Sn(l) : (L = t);
  }
  function d0(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = jo(a, t, t.pendingProps, t.type, void 0, W);
        break;
      case 11:
        t = jo(a, t, t.pendingProps, t.type.render, t.ref, W);
        break;
      case 5:
        Lc(t);
      default:
        Go(a, t), (t = L = ds(t, Gt)), (t = Co(a, t, Gt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? Sn(l) : (L = t);
  }
  function me(l, t, a, e) {
    (jt = Oa = null), Lc(t), (ce = null), (Ie = 0);
    var u = t.return;
    try {
      if (Gd(l, u, t, a, W)) {
        (ml = 1), on(l, it(a, l.current)), (L = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((L = u), n);
      (ml = 1), on(l, it(a, l.current)), (L = null);
      return;
    }
    t.flags & 32768
      ? (P || e === 1
          ? (l = !0)
          : oe || (W & 536870912) !== 0
          ? (l = !1)
          : ((aa = l = !0),
            (e === 2 || e === 9 || e === 3 || e === 6) &&
              ((e = dt.current),
              e !== null && e.tag === 13 && (e.flags |= 16384))),
        v0(t, l))
      : Sn(t);
  }
  function Sn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        v0(t, aa);
        return;
      }
      l = t.return;
      var a = Vd(t.alternate, t, Gt);
      if (a !== null) {
        L = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        L = t;
        return;
      }
      L = t = l;
    } while (t !== null);
    ml === 0 && (ml = 5);
  }
  function v0(l, t) {
    do {
      var a = wd(l.alternate, l);
      if (a !== null) {
        (a.flags &= 32767), (L = a);
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        L = l;
        return;
      }
      L = l = a;
    } while (l !== null);
    (ml = 6), (L = null);
  }
  function h0(l, t, a, e, u, n, c, f, i) {
    l.cancelPendingCommit = null;
    do An();
    while (Ul !== 0);
    if ((tl & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === l.current) throw Error(r(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= Ac),
        Dr(l, a, n, c, f, i),
        l === ol && ((L = ol = null), (W = 0)),
        (de = t),
        (na = l),
        (ve = a),
        (pf = n),
        (Nf = u),
        (u0 = e),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            t1(xu, function () {
              return S0(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (e = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || e)
      ) {
        (e = S.T), (S.T = null), (u = M.p), (M.p = 2), (c = tl), (tl |= 4);
        try {
          Zd(l, t, a);
        } finally {
          (tl = c), (M.p = u), (S.T = e);
        }
      }
      (Ul = 1), m0(), y0(), g0();
    }
  }
  function m0() {
    if (Ul === 1) {
      Ul = 0;
      var l = na,
        t = de,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        (a = S.T), (S.T = null);
        var e = M.p;
        M.p = 2;
        var u = tl;
        tl |= 4;
        try {
          $o(t, l);
          var n = wf,
            c = as(l.containerInfo),
            f = n.focusedElem,
            i = n.selectionRange;
          if (
            c !== f &&
            f &&
            f.ownerDocument &&
            ts(f.ownerDocument.documentElement, f)
          ) {
            if (i !== null && mc(f)) {
              var h = i.start,
                b = i.end;
              if ((b === void 0 && (b = h), "selectionStart" in f))
                (f.selectionStart = h),
                  (f.selectionEnd = Math.min(b, f.value.length));
              else {
                var T = f.ownerDocument || document,
                  m = (T && T.defaultView) || window;
                if (m.getSelection) {
                  var g = m.getSelection(),
                    G = f.textContent.length,
                    Y = Math.min(i.start, G),
                    nl = i.end === void 0 ? Y : Math.min(i.end, G);
                  !g.extend && Y > nl && ((c = nl), (nl = Y), (Y = c));
                  var d = ls(f, Y),
                    o = ls(f, nl);
                  if (
                    d &&
                    o &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== d.node ||
                      g.anchorOffset !== d.offset ||
                      g.focusNode !== o.node ||
                      g.focusOffset !== o.offset)
                  ) {
                    var v = T.createRange();
                    v.setStart(d.node, d.offset),
                      g.removeAllRanges(),
                      Y > nl
                        ? (g.addRange(v), g.extend(o.node, o.offset))
                        : (v.setEnd(o.node, o.offset), g.addRange(v));
                  }
                }
              }
            }
            for (T = [], g = f; (g = g.parentNode); )
              g.nodeType === 1 &&
                T.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < T.length;
              f++
            ) {
              var A = T[f];
              (A.element.scrollLeft = A.left), (A.element.scrollTop = A.top);
            }
          }
          (jn = !!Vf), (wf = Vf = null);
        } finally {
          (tl = u), (M.p = e), (S.T = a);
        }
      }
      (l.current = t), (Ul = 2);
    }
  }
  function y0() {
    if (Ul === 2) {
      Ul = 0;
      var l = na,
        t = de,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        (a = S.T), (S.T = null);
        var e = M.p;
        M.p = 2;
        var u = tl;
        tl |= 4;
        try {
          Jo(l, t.alternate, t);
        } finally {
          (tl = u), (M.p = e), (S.T = a);
        }
      }
      Ul = 3;
    }
  }
  function g0() {
    if (Ul === 4 || Ul === 3) {
      (Ul = 0), Ar();
      var l = na,
        t = de,
        a = ve,
        e = u0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ul = 5)
        : ((Ul = 0), (de = na = null), b0(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (ua = null),
        kn(a),
        (t = t.stateNode),
        Fl && typeof Fl.onCommitFiberRoot == "function")
      )
        try {
          Fl.onCommitFiberRoot(ze, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        (t = S.T), (u = M.p), (M.p = 2), (S.T = null);
        try {
          for (var n = l.onRecoverableError, c = 0; c < e.length; c++) {
            var f = e[c];
            n(f.value, { componentStack: f.stack });
          }
        } finally {
          (S.T = t), (M.p = u);
        }
      }
      (ve & 3) !== 0 && An(),
        Ot(l),
        (u = l.pendingLanes),
        (a & 4194090) !== 0 && (u & 42) !== 0
          ? l === Mf
            ? fu++
            : ((fu = 0), (Mf = l))
          : (fu = 0),
        iu(0);
    }
  }
  function b0(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Qe(t)));
  }
  function An(l) {
    return m0(), y0(), g0(), S0();
  }
  function S0() {
    if (Ul !== 5) return !1;
    var l = na,
      t = pf;
    pf = 0;
    var a = kn(ve),
      e = S.T,
      u = M.p;
    try {
      (M.p = 32 > a ? 32 : a), (S.T = null), (a = Nf), (Nf = null);
      var n = na,
        c = ve;
      if (((Ul = 0), (de = na = null), (ve = 0), (tl & 6) !== 0))
        throw Error(r(331));
      var f = tl;
      if (
        ((tl |= 4),
        a0(n.current),
        Po(n, n.current, c, a),
        (tl = f),
        iu(0, !1),
        Fl && typeof Fl.onPostCommitFiberRoot == "function")
      )
        try {
          Fl.onPostCommitFiberRoot(ze, n);
        } catch {}
      return !0;
    } finally {
      (M.p = u), (S.T = e), b0(l, t);
    }
  }
  function A0(l, t, a) {
    (t = it(a, t)),
      (t = nf(l.stateNode, t, 2)),
      (l = Wt(l, t, 2)),
      l !== null && (Oe(l, 2), Ot(l));
  }
  function sl(l, t, a) {
    if (l.tag === 3) A0(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          A0(t, l, a);
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof e.componentDidCatch == "function" &&
              (ua === null || !ua.has(e)))
          ) {
            (l = it(a, l)),
              (a = xo(2)),
              (e = Wt(t, a, 2)),
              e !== null && (Oo(a, e, t, l), Oe(e, 2), Ot(e));
            break;
          }
        }
        t = t.return;
      }
  }
  function jf(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new Jd();
      var u = new Set();
      e.set(t, u);
    } else (u = e.get(t)), u === void 0 && ((u = new Set()), e.set(t, u));
    u.has(a) ||
      ((Ef = !0), u.add(a), (l = Id.bind(null, l, t, a)), t.then(l, l));
  }
  function Id(l, t, a) {
    var e = l.pingCache;
    e !== null && e.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      ol === l &&
        (W & a) === a &&
        (ml === 4 || (ml === 3 && (W & 62914560) === W && 300 > At() - Of)
          ? (tl & 2) === 0 && he(l, 0)
          : (zf |= a),
        re === W && (re = 0)),
      Ot(l);
  }
  function T0(l, t) {
    t === 0 && (t = yi()), (l = Fa(l, t)), l !== null && (Oe(l, t), Ot(l));
  }
  function Pd(l) {
    var t = l.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), T0(l, a);
  }
  function l1(l, t) {
    var a = 0;
    switch (l.tag) {
      case 13:
        var e = l.stateNode,
          u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    e !== null && e.delete(t), T0(l, a);
  }
  function t1(l, t) {
    return Zn(l, t);
  }
  var Tn = null,
    ye = null,
    Hf = !1,
    En = !1,
    _f = !1,
    ja = 0;
  function Ot(l) {
    l !== ye &&
      l.next === null &&
      (ye === null ? (Tn = ye = l) : (ye = ye.next = l)),
      (En = !0),
      Hf || ((Hf = !0), e1());
  }
  function iu(l, t) {
    if (!_f && En) {
      _f = !0;
      do
        for (var a = !1, e = Tn; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = e.suspendedLanes,
                f = e.pingedLanes;
              (n = (1 << (31 - $l(42 | l) + 1)) - 1),
                (n &= u & ~(c & ~f)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((a = !0), O0(e, n));
          } else
            (n = W),
              (n = Nu(
                e,
                e === ol ? n : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1
              )),
              (n & 3) === 0 || xe(e, n) || ((a = !0), O0(e, n));
          e = e.next;
        }
      while (a);
      _f = !1;
    }
  }
  function a1() {
    E0();
  }
  function E0() {
    En = Hf = !1;
    var l = 0;
    ja !== 0 && (r1() && (l = ja), (ja = 0));
    for (var t = At(), a = null, e = Tn; e !== null; ) {
      var u = e.next,
        n = z0(e, t);
      n === 0
        ? ((e.next = null),
          a === null ? (Tn = u) : (a.next = u),
          u === null && (ye = a))
        : ((a = e), (l !== 0 || (n & 3) !== 0) && (En = !0)),
        (e = u);
    }
    iu(l);
  }
  function z0(l, t) {
    for (
      var a = l.suspendedLanes,
        e = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - $l(n),
        f = 1 << c,
        i = u[c];
      i === -1
        ? ((f & a) === 0 || (f & e) !== 0) && (u[c] = Mr(f, t))
        : i <= t && (l.expiredLanes |= f),
        (n &= ~f);
    }
    if (
      ((t = ol),
      (a = W),
      (a = Nu(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (e = l.callbackNode),
      a === 0 ||
        (l === t && (al === 2 || al === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        e !== null && e !== null && Ln(e),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || xe(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((e !== null && Ln(e), kn(a))) {
        case 2:
        case 8:
          a = vi;
          break;
        case 32:
          a = xu;
          break;
        case 268435456:
          a = hi;
          break;
        default:
          a = xu;
      }
      return (
        (e = x0.bind(null, l)),
        (a = Zn(a, e)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      e !== null && e !== null && Ln(e),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function x0(l, t) {
    if (Ul !== 0 && Ul !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var a = l.callbackNode;
    if (An() && l.callbackNode !== a) return null;
    var e = W;
    return (
      (e = Nu(
        l,
        l === ol ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      e === 0
        ? null
        : (c0(l, e, t),
          z0(l, At()),
          l.callbackNode != null && l.callbackNode === a
            ? x0.bind(null, l)
            : null)
    );
  }
  function O0(l, t) {
    if (An()) return null;
    c0(l, t, !0);
  }
  function e1() {
    v1(function () {
      (tl & 6) !== 0 ? Zn(di, a1) : E0();
    });
  }
  function Bf() {
    return ja === 0 && (ja = mi()), ja;
  }
  function p0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : ju("" + l);
  }
  function N0(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function u1(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = p0((u[Xl] || null).action),
        c = e.submitter;
      c &&
        ((t = (t = c[Xl] || null)
          ? p0(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((n = t), (c = null)));
      var f = new Yu("action", "action", null, e, u);
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (ja !== 0) {
                  var i = c ? N0(u, c) : new FormData(u);
                  lf(
                    a,
                    { pending: !0, data: i, method: u.method, action: n },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (i = c ? N0(u, c) : new FormData(u)),
                  lf(
                    a,
                    { pending: !0, data: i, method: u.method, action: n },
                    n,
                    i
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Yf = 0; Yf < Sc.length; Yf++) {
    var qf = Sc[Yf],
      n1 = qf.toLowerCase(),
      c1 = qf[0].toUpperCase() + qf.slice(1);
    yt(n1, "on" + c1);
  }
  yt(ns, "onAnimationEnd"),
    yt(cs, "onAnimationIteration"),
    yt(fs, "onAnimationStart"),
    yt("dblclick", "onDoubleClick"),
    yt("focusin", "onFocus"),
    yt("focusout", "onBlur"),
    yt(zd, "onTransitionRun"),
    yt(xd, "onTransitionStart"),
    yt(Od, "onTransitionCancel"),
    yt(is, "onTransitionEnd"),
    Ga("onMouseEnter", ["mouseout", "mouseover"]),
    Ga("onMouseLeave", ["mouseout", "mouseover"]),
    Ga("onPointerEnter", ["pointerout", "pointerover"]),
    Ga("onPointerLeave", ["pointerout", "pointerover"]),
    ya(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    ya(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    ya("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ya(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    ya(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    ya(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var su =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    f1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(su)
    );
  function M0(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a],
        u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = e.length - 1; 0 <= c; c--) {
            var f = e[c],
              i = f.instance,
              h = f.currentTarget;
            if (((f = f.listener), i !== n && u.isPropagationStopped()))
              break l;
            (n = f), (u.currentTarget = h);
            try {
              n(u);
            } catch (b) {
              sn(b);
            }
            (u.currentTarget = null), (n = i);
          }
        else
          for (c = 0; c < e.length; c++) {
            if (
              ((f = e[c]),
              (i = f.instance),
              (h = f.currentTarget),
              (f = f.listener),
              i !== n && u.isPropagationStopped())
            )
              break l;
            (n = f), (u.currentTarget = h);
            try {
              n(u);
            } catch (b) {
              sn(b);
            }
            (u.currentTarget = null), (n = i);
          }
      }
    }
  }
  function K(l, t) {
    var a = t[Wn];
    a === void 0 && (a = t[Wn] = new Set());
    var e = l + "__bubble";
    a.has(e) || (D0(t, l, 2, !1), a.add(e));
  }
  function Cf(l, t, a) {
    var e = 0;
    t && (e |= 4), D0(a, l, e, t);
  }
  var zn = "_reactListening" + Math.random().toString(36).slice(2);
  function Xf(l) {
    if (!l[zn]) {
      (l[zn] = !0),
        Ti.forEach(function (a) {
          a !== "selectionchange" && (f1.has(a) || Cf(a, !1, l), Cf(a, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[zn] || ((t[zn] = !0), Cf("selectionchange", !1, t));
    }
  }
  function D0(l, t, a, e) {
    switch (P0(t)) {
      case 2:
        var u = _1;
        break;
      case 8:
        u = B1;
        break;
      default:
        u = Pf;
    }
    (a = u.bind(null, t, a, l)),
      (u = void 0),
      !cc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      e
        ? u !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: u })
          : l.addEventListener(t, a, !0)
        : u !== void 0
        ? l.addEventListener(t, a, { passive: u })
        : l.addEventListener(t, a, !1);
  }
  function Gf(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (;;) {
        if (e === null) return;
        var c = e.tag;
        if (c === 3 || c === 4) {
          var f = e.stateNode.containerInfo;
          if (f === u) break;
          if (c === 4)
            for (c = e.return; c !== null; ) {
              var i = c.tag;
              if ((i === 3 || i === 4) && c.stateNode.containerInfo === u)
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (((c = qa(f)), c === null)) return;
            if (((i = c.tag), i === 5 || i === 6 || i === 26 || i === 27)) {
              e = n = c;
              continue l;
            }
            f = f.parentNode;
          }
        }
        e = e.return;
      }
    Bi(function () {
      var h = n,
        b = uc(a),
        T = [];
      l: {
        var m = ss.get(l);
        if (m !== void 0) {
          var g = Yu,
            G = l;
          switch (l) {
            case "keypress":
              if (_u(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = td;
              break;
            case "focusin":
              (G = "focus"), (g = oc);
              break;
            case "focusout":
              (G = "blur"), (g = oc);
              break;
            case "beforeblur":
            case "afterblur":
              g = oc;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Ci;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = wr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = ud;
              break;
            case ns:
            case cs:
            case fs:
              g = Kr;
              break;
            case is:
              g = cd;
              break;
            case "scroll":
            case "scrollend":
              g = Qr;
              break;
            case "wheel":
              g = id;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = kr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Gi;
              break;
            case "toggle":
            case "beforetoggle":
              g = od;
          }
          var Y = (t & 4) !== 0,
            nl = !Y && (l === "scroll" || l === "scrollend"),
            d = Y ? (m !== null ? m + "Capture" : null) : m;
          Y = [];
          for (var o = h, v; o !== null; ) {
            var A = o;
            if (
              ((v = A.stateNode),
              (A = A.tag),
              (A !== 5 && A !== 26 && A !== 27) ||
                v === null ||
                d === null ||
                ((A = Me(o, d)), A != null && Y.push(ou(o, A, v))),
              nl)
            )
              break;
            o = o.return;
          }
          0 < Y.length &&
            ((m = new g(m, G, null, a, b)), T.push({ event: m, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((m = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            m &&
              a !== ec &&
              (G = a.relatedTarget || a.fromElement) &&
              (qa(G) || G[Ya]))
          )
            break l;
          if (
            (g || m) &&
            ((m =
              b.window === b
                ? b
                : (m = b.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
            g
              ? ((G = a.relatedTarget || a.toElement),
                (g = h),
                (G = G ? qa(G) : null),
                G !== null &&
                  ((nl = C(G)),
                  (Y = G.tag),
                  G !== nl || (Y !== 5 && Y !== 27 && Y !== 6)) &&
                  (G = null))
              : ((g = null), (G = h)),
            g !== G)
          ) {
            if (
              ((Y = Ci),
              (A = "onMouseLeave"),
              (d = "onMouseEnter"),
              (o = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((Y = Gi),
                (A = "onPointerLeave"),
                (d = "onPointerEnter"),
                (o = "pointer")),
              (nl = g == null ? m : Ne(g)),
              (v = G == null ? m : Ne(G)),
              (m = new Y(A, o + "leave", g, a, b)),
              (m.target = nl),
              (m.relatedTarget = v),
              (A = null),
              qa(b) === h &&
                ((Y = new Y(d, o + "enter", G, a, b)),
                (Y.target = v),
                (Y.relatedTarget = nl),
                (A = Y)),
              (nl = A),
              g && G)
            )
              t: {
                for (Y = g, d = G, o = 0, v = Y; v; v = ge(v)) o++;
                for (v = 0, A = d; A; A = ge(A)) v++;
                for (; 0 < o - v; ) (Y = ge(Y)), o--;
                for (; 0 < v - o; ) (d = ge(d)), v--;
                for (; o--; ) {
                  if (Y === d || (d !== null && Y === d.alternate)) break t;
                  (Y = ge(Y)), (d = ge(d));
                }
                Y = null;
              }
            else Y = null;
            g !== null && R0(T, m, g, Y, !1),
              G !== null && nl !== null && R0(T, nl, G, Y, !0);
          }
        }
        l: {
          if (
            ((m = h ? Ne(h) : window),
            (g = m.nodeName && m.nodeName.toLowerCase()),
            g === "select" || (g === "input" && m.type === "file"))
          )
            var U = ki;
          else if (Ki(m))
            if (Wi) U = Ad;
            else {
              U = bd;
              var Z = gd;
            }
          else
            (g = m.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (m.type !== "checkbox" && m.type !== "radio")
                ? h && ac(h.elementType) && (U = ki)
                : (U = Sd);
          if (U && (U = U(l, h))) {
            Ji(T, U, a, b);
            break l;
          }
          Z && Z(l, m, h),
            l === "focusout" &&
              h &&
              m.type === "number" &&
              h.memoizedProps.value != null &&
              tc(m, "number", m.value);
        }
        switch (((Z = h ? Ne(h) : window), l)) {
          case "focusin":
            (Ki(Z) || Z.contentEditable === "true") &&
              ((Ja = Z), (yc = h), (Ye = null));
            break;
          case "focusout":
            Ye = yc = Ja = null;
            break;
          case "mousedown":
            gc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (gc = !1), es(T, a, b);
            break;
          case "selectionchange":
            if (Ed) break;
          case "keydown":
          case "keyup":
            es(T, a, b);
        }
        var _;
        if (dc)
          l: {
            switch (l) {
              case "compositionstart":
                var q = "onCompositionStart";
                break l;
              case "compositionend":
                q = "onCompositionEnd";
                break l;
              case "compositionupdate":
                q = "onCompositionUpdate";
                break l;
            }
            q = void 0;
          }
        else
          Ka
            ? Zi(l, a) && (q = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (q = "onCompositionStart");
        q &&
          (Qi &&
            a.locale !== "ko" &&
            (Ka || q !== "onCompositionStart"
              ? q === "onCompositionEnd" && Ka && (_ = Yi())
              : ((Lt = b),
                (fc = "value" in Lt ? Lt.value : Lt.textContent),
                (Ka = !0))),
          (Z = xn(h, q)),
          0 < Z.length &&
            ((q = new Xi(q, l, null, a, b)),
            T.push({ event: q, listeners: Z }),
            _ ? (q.data = _) : ((_ = Li(a)), _ !== null && (q.data = _)))),
          (_ = dd ? vd(l, a) : hd(l, a)) &&
            ((q = xn(h, "onBeforeInput")),
            0 < q.length &&
              ((Z = new Xi("onBeforeInput", "beforeinput", null, a, b)),
              T.push({ event: Z, listeners: q }),
              (Z.data = _))),
          u1(T, l, h, a, b);
      }
      M0(T, t);
    });
  }
  function ou(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function xn(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Me(l, a)),
          u != null && e.unshift(ou(l, u, n)),
          (u = Me(l, t)),
          u != null && e.push(ou(l, u, n))),
        l.tag === 3)
      )
        return e;
      l = l.return;
    }
    return [];
  }
  function ge(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function R0(l, t, a, e, u) {
    for (var n = t._reactName, c = []; a !== null && a !== e; ) {
      var f = a,
        i = f.alternate,
        h = f.stateNode;
      if (((f = f.tag), i !== null && i === e)) break;
      (f !== 5 && f !== 26 && f !== 27) ||
        h === null ||
        ((i = h),
        u
          ? ((h = Me(a, n)), h != null && c.unshift(ou(a, h, i)))
          : u || ((h = Me(a, n)), h != null && c.push(ou(a, h, i)))),
        (a = a.return);
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var i1 = /\r\n?/g,
    s1 = /\u0000|\uFFFD/g;
  function U0(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        i1,
        `
`
      )
      .replace(s1, "");
  }
  function j0(l, t) {
    return (t = U0(t)), U0(l) === t;
  }
  function On() {}
  function ul(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string"
          ? t === "body" || (t === "textarea" && e === "") || wa(l, e)
          : (typeof e == "number" || typeof e == "bigint") &&
            t !== "body" &&
            wa(l, "" + e);
        break;
      case "className":
        Du(l, "class", e);
        break;
      case "tabIndex":
        Du(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Du(l, a, e);
        break;
      case "style":
        Hi(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          Du(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "symbol" ||
          typeof e == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        (e = ju("" + e)), l.setAttribute(a, e);
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && ul(l, t, "name", u.name, u, null),
                ul(l, t, "formEncType", u.formEncType, u, null),
                ul(l, t, "formMethod", u.formMethod, u, null),
                ul(l, t, "formTarget", u.formTarget, u, null))
              : (ul(l, t, "encType", u.encType, u, null),
                ul(l, t, "method", u.method, u, null),
                ul(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        (e = ju("" + e)), l.setAttribute(a, e);
        break;
      case "onClick":
        e != null && (l.onclick = On);
        break;
      case "onScroll":
        e != null && K("scroll", l);
        break;
      case "onScrollEnd":
        e != null && K("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(r(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(r(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "boolean" ||
          typeof e == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (a = ju("" + e)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "" + e)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0
          ? l.setAttribute(a, "")
          : e !== !1 &&
            e != null &&
            typeof e != "function" &&
            typeof e != "symbol"
          ? l.setAttribute(a, e)
          : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null &&
        typeof e != "function" &&
        typeof e != "symbol" &&
        !isNaN(e) &&
        1 <= e
          ? l.setAttribute(a, e)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e)
          ? l.removeAttribute(a)
          : l.setAttribute(a, e);
        break;
      case "popover":
        K("beforetoggle", l), K("toggle", l), Mu(l, "popover", e);
        break;
      case "xlinkActuate":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        Nt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        Nt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        Nt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        Mu(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Xr.get(a) || a), Mu(l, a, e));
    }
  }
  function Qf(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        Hi(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(r(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(r(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string"
          ? wa(l, e)
          : (typeof e == "number" || typeof e == "bigint") && wa(l, "" + e);
        break;
      case "onScroll":
        e != null && K("scroll", l);
        break;
      case "onScrollEnd":
        e != null && K("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = On);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ei.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (t = a.slice(2, u ? a.length - 7 : void 0)),
              (n = l[Xl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, u),
              typeof e == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, e, u);
              break l;
            }
            a in l
              ? (l[a] = e)
              : e === !0
              ? l.setAttribute(a, "")
              : Mu(l, a, e);
          }
    }
  }
  function jl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        K("error", l), K("load", l);
        var e = !1,
          u = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  ul(l, t, n, c, a, null);
              }
          }
        u && ul(l, t, "srcSet", a.srcSet, a, null),
          e && ul(l, t, "src", a.src, a, null);
        return;
      case "input":
        K("invalid", l);
        var f = (n = c = u = null),
          i = null,
          h = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var b = a[e];
            if (b != null)
              switch (e) {
                case "name":
                  u = b;
                  break;
                case "type":
                  c = b;
                  break;
                case "checked":
                  i = b;
                  break;
                case "defaultChecked":
                  h = b;
                  break;
                case "value":
                  n = b;
                  break;
                case "defaultValue":
                  f = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null) throw Error(r(137, t));
                  break;
                default:
                  ul(l, t, e, b, a, null);
              }
          }
        Di(l, n, f, i, h, c, u, !1), Ru(l);
        return;
      case "select":
        K("invalid", l), (e = c = n = null);
        for (u in a)
          if (a.hasOwnProperty(u) && ((f = a[u]), f != null))
            switch (u) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                e = f;
              default:
                ul(l, t, u, f, a, null);
            }
        (t = n),
          (a = c),
          (l.multiple = !!e),
          t != null ? Va(l, !!e, t, !1) : a != null && Va(l, !!e, a, !0);
        return;
      case "textarea":
        K("invalid", l), (n = u = e = null);
        for (c in a)
          if (a.hasOwnProperty(c) && ((f = a[c]), f != null))
            switch (c) {
              case "value":
                e = f;
                break;
              case "defaultValue":
                u = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(r(91));
                break;
              default:
                ul(l, t, c, f, a, null);
            }
        Ui(l, e, u, n), Ru(l);
        return;
      case "option":
        for (i in a)
          if (a.hasOwnProperty(i) && ((e = a[i]), e != null))
            switch (i) {
              case "selected":
                l.selected =
                  e && typeof e != "function" && typeof e != "symbol";
                break;
              default:
                ul(l, t, i, e, a, null);
            }
        return;
      case "dialog":
        K("beforetoggle", l), K("toggle", l), K("cancel", l), K("close", l);
        break;
      case "iframe":
      case "object":
        K("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < su.length; e++) K(su[e], l);
        break;
      case "image":
        K("error", l), K("load", l);
        break;
      case "details":
        K("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        K("error", l), K("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (h in a)
          if (a.hasOwnProperty(h) && ((e = a[h]), e != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                ul(l, t, h, e, a, null);
            }
        return;
      default:
        if (ac(t)) {
          for (b in a)
            a.hasOwnProperty(b) &&
              ((e = a[b]), e !== void 0 && Qf(l, t, b, e, a, void 0));
          return;
        }
    }
    for (f in a)
      a.hasOwnProperty(f) && ((e = a[f]), e != null && ul(l, t, f, e, a, null));
  }
  function o1(l, t, a, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          c = null,
          f = null,
          i = null,
          h = null,
          b = null;
        for (g in a) {
          var T = a[g];
          if (a.hasOwnProperty(g) && T != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = T;
              default:
                e.hasOwnProperty(g) || ul(l, t, g, null, e, T);
            }
        }
        for (var m in e) {
          var g = e[m];
          if (((T = a[m]), e.hasOwnProperty(m) && (g != null || T != null)))
            switch (m) {
              case "type":
                n = g;
                break;
              case "name":
                u = g;
                break;
              case "checked":
                h = g;
                break;
              case "defaultChecked":
                b = g;
                break;
              case "value":
                c = g;
                break;
              case "defaultValue":
                f = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(r(137, t));
                break;
              default:
                g !== T && ul(l, t, m, g, e, T);
            }
        }
        lc(l, c, f, i, h, b, n, u);
        return;
      case "select":
        g = c = f = m = null;
        for (n in a)
          if (((i = a[n]), a.hasOwnProperty(n) && i != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = i;
              default:
                e.hasOwnProperty(n) || ul(l, t, n, null, e, i);
            }
        for (u in e)
          if (
            ((n = e[u]),
            (i = a[u]),
            e.hasOwnProperty(u) && (n != null || i != null))
          )
            switch (u) {
              case "value":
                m = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== i && ul(l, t, u, n, e, i);
            }
        (t = f),
          (a = c),
          (e = g),
          m != null
            ? Va(l, !!a, m, !1)
            : !!e != !!a &&
              (t != null ? Va(l, !!a, t, !0) : Va(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        g = m = null;
        for (f in a)
          if (
            ((u = a[f]),
            a.hasOwnProperty(f) && u != null && !e.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                ul(l, t, f, null, e, u);
            }
        for (c in e)
          if (
            ((u = e[c]),
            (n = a[c]),
            e.hasOwnProperty(c) && (u != null || n != null))
          )
            switch (c) {
              case "value":
                m = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== n && ul(l, t, c, u, e, n);
            }
        Ri(l, m, g);
        return;
      case "option":
        for (var G in a)
          if (
            ((m = a[G]),
            a.hasOwnProperty(G) && m != null && !e.hasOwnProperty(G))
          )
            switch (G) {
              case "selected":
                l.selected = !1;
                break;
              default:
                ul(l, t, G, null, e, m);
            }
        for (i in e)
          if (
            ((m = e[i]),
            (g = a[i]),
            e.hasOwnProperty(i) && m !== g && (m != null || g != null))
          )
            switch (i) {
              case "selected":
                l.selected =
                  m && typeof m != "function" && typeof m != "symbol";
                break;
              default:
                ul(l, t, i, m, e, g);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Y in a)
          (m = a[Y]),
            a.hasOwnProperty(Y) &&
              m != null &&
              !e.hasOwnProperty(Y) &&
              ul(l, t, Y, null, e, m);
        for (h in e)
          if (
            ((m = e[h]),
            (g = a[h]),
            e.hasOwnProperty(h) && m !== g && (m != null || g != null))
          )
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(r(137, t));
                break;
              default:
                ul(l, t, h, m, e, g);
            }
        return;
      default:
        if (ac(t)) {
          for (var nl in a)
            (m = a[nl]),
              a.hasOwnProperty(nl) &&
                m !== void 0 &&
                !e.hasOwnProperty(nl) &&
                Qf(l, t, nl, void 0, e, m);
          for (b in e)
            (m = e[b]),
              (g = a[b]),
              !e.hasOwnProperty(b) ||
                m === g ||
                (m === void 0 && g === void 0) ||
                Qf(l, t, b, m, e, g);
          return;
        }
    }
    for (var d in a)
      (m = a[d]),
        a.hasOwnProperty(d) &&
          m != null &&
          !e.hasOwnProperty(d) &&
          ul(l, t, d, null, e, m);
    for (T in e)
      (m = e[T]),
        (g = a[T]),
        !e.hasOwnProperty(T) ||
          m === g ||
          (m == null && g == null) ||
          ul(l, t, T, m, e, g);
  }
  var Vf = null,
    wf = null;
  function pn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function H0(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function _0(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Zf(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Lf = null;
  function r1() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Lf
        ? !1
        : ((Lf = l), !0)
      : ((Lf = null), !1);
  }
  var B0 = typeof setTimeout == "function" ? setTimeout : void 0,
    d1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Y0 = typeof Promise == "function" ? Promise : void 0,
    v1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Y0 < "u"
        ? function (l) {
            return Y0.resolve(null).then(l).catch(h1);
          }
        : B0;
  function h1(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function fa(l) {
    return l === "head";
  }
  function q0(l, t) {
    var a = t,
      e = 0,
      u = 0;
    do {
      var n = a.nextSibling;
      if ((l.removeChild(a), n && n.nodeType === 8))
        if (((a = n.data), a === "/$")) {
          if (0 < e && 8 > e) {
            a = e;
            var c = l.ownerDocument;
            if ((a & 1 && ru(c.documentElement), a & 2 && ru(c.body), a & 4))
              for (a = c.head, ru(a), c = a.firstChild; c; ) {
                var f = c.nextSibling,
                  i = c.nodeName;
                c[pe] ||
                  i === "SCRIPT" ||
                  i === "STYLE" ||
                  (i === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(c),
                  (c = f);
              }
          }
          if (u === 0) {
            l.removeChild(n), Su(t);
            return;
          }
          u--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? u++
            : (e = a.charCodeAt(0) - 48);
      else e = 0;
      a = n;
    } while (a);
    Su(t);
  }
  function Kf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Kf(a), Fn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function m1(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[pe])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = bt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function y1(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = bt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Jf(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState === "complete")
    );
  }
  function g1(l, t) {
    var a = l.ownerDocument;
    if (l.data !== "$?" || a.readyState === "complete") t();
    else {
      var e = function () {
        t(), a.removeEventListener("DOMContentLoaded", e);
      };
      a.addEventListener("DOMContentLoaded", e), (l._reactRetry = e);
    }
  }
  function bt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var kf = null;
  function C0(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return l;
          t--;
        } else a === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function X0(l, t, a) {
    switch (((t = pn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(r(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(r(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  function ru(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    Fn(l);
  }
  var ht = new Map(),
    G0 = new Set();
  function Nn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var Qt = M.d;
  M.d = { f: b1, r: S1, D: A1, C: T1, L: E1, m: z1, X: O1, S: x1, M: p1 };
  function b1() {
    var l = Qt.f(),
      t = bn();
    return l || t;
  }
  function S1(l) {
    var t = Ca(l);
    t !== null && t.tag === 5 && t.type === "form" ? no(t) : Qt.r(l);
  }
  var be = typeof document > "u" ? null : document;
  function Q0(l, t, a) {
    var e = be;
    if (e && typeof t == "string" && t) {
      var u = ft(t);
      (u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        G0.has(u) ||
          (G0.add(u),
          (l = { rel: l, crossOrigin: a, href: t }),
          e.querySelector(u) === null &&
            ((t = e.createElement("link")),
            jl(t, "link", l),
            pl(t),
            e.head.appendChild(t)));
    }
  }
  function A1(l) {
    Qt.D(l), Q0("dns-prefetch", l, null);
  }
  function T1(l, t) {
    Qt.C(l, t), Q0("preconnect", l, t);
  }
  function E1(l, t, a) {
    Qt.L(l, t, a);
    var e = be;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + ft(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + ft(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + ft(a.imageSizes) + '"]'))
        : (u += '[href="' + ft(l) + '"]');
      var n = u;
      switch (t) {
        case "style":
          n = Se(l);
          break;
        case "script":
          n = Ae(l);
      }
      ht.has(n) ||
        ((l = j(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a
        )),
        ht.set(n, l),
        e.querySelector(u) !== null ||
          (t === "style" && e.querySelector(du(n))) ||
          (t === "script" && e.querySelector(vu(n))) ||
          ((t = e.createElement("link")),
          jl(t, "link", l),
          pl(t),
          e.head.appendChild(t)));
    }
  }
  function z1(l, t) {
    Qt.m(l, t);
    var a = be;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + ft(e) + '"][href="' + ft(l) + '"]',
        n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ae(l);
      }
      if (
        !ht.has(n) &&
        ((l = j({ rel: "modulepreload", href: l }, t)),
        ht.set(n, l),
        a.querySelector(u) === null)
      ) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(vu(n))) return;
        }
        (e = a.createElement("link")),
          jl(e, "link", l),
          pl(e),
          a.head.appendChild(e);
      }
    }
  }
  function x1(l, t, a) {
    Qt.S(l, t, a);
    var e = be;
    if (e && l) {
      var u = Xa(e).hoistableStyles,
        n = Se(l);
      t = t || "default";
      var c = u.get(n);
      if (!c) {
        var f = { loading: 0, preload: null };
        if ((c = e.querySelector(du(n)))) f.loading = 5;
        else {
          (l = j({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = ht.get(n)) && Wf(l, a);
          var i = (c = e.createElement("link"));
          pl(i),
            jl(i, "link", l),
            (i._p = new Promise(function (h, b) {
              (i.onload = h), (i.onerror = b);
            })),
            i.addEventListener("load", function () {
              f.loading |= 1;
            }),
            i.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Mn(c, t, e);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: f }),
          u.set(n, c);
      }
    }
  }
  function O1(l, t) {
    Qt.X(l, t);
    var a = be;
    if (a && l) {
      var e = Xa(a).hoistableScripts,
        u = Ae(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(vu(u))),
        n ||
          ((l = j({ src: l, async: !0 }, t)),
          (t = ht.get(u)) && Ff(l, t),
          (n = a.createElement("script")),
          pl(n),
          jl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function p1(l, t) {
    Qt.M(l, t);
    var a = be;
    if (a && l) {
      var e = Xa(a).hoistableScripts,
        u = Ae(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(vu(u))),
        n ||
          ((l = j({ src: l, async: !0, type: "module" }, t)),
          (t = ht.get(u)) && Ff(l, t),
          (n = a.createElement("script")),
          pl(n),
          jl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function V0(l, t, a, e) {
    var u = (u = Q.current) ? Nn(u) : null;
    if (!u) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Se(a.href)),
            (a = Xa(u).hoistableStyles),
            (e = a.get(t)),
            e ||
              ((e = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = Se(a.href);
          var n = Xa(u).hoistableStyles,
            c = n.get(l);
          if (
            (c ||
              ((u = u.ownerDocument || u),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, c),
              (n = u.querySelector(du(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              ht.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                ht.set(l, a),
                n || N1(u, l, a, c.state))),
            t && e === null)
          )
            throw Error(r(528, ""));
          return c;
        }
        if (t && e !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ae(a)),
              (a = Xa(u).hoistableScripts),
              (e = a.get(t)),
              e ||
                ((e = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, e)),
              e)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, l));
    }
  }
  function Se(l) {
    return 'href="' + ft(l) + '"';
  }
  function du(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function w0(l) {
    return j({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function N1(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (e.loading = 1)
      : ((t = l.createElement("link")),
        (e.preload = t),
        t.addEventListener("load", function () {
          return (e.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (e.loading |= 2);
        }),
        jl(t, "link", a),
        pl(t),
        l.head.appendChild(t));
  }
  function Ae(l) {
    return '[src="' + ft(l) + '"]';
  }
  function vu(l) {
    return "script[async]" + l;
  }
  function Z0(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var e = l.querySelector('style[data-href~="' + ft(a.href) + '"]');
          if (e) return (t.instance = e), pl(e), e;
          var u = j({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (l.ownerDocument || l).createElement("style")),
            pl(e),
            jl(e, "style", u),
            Mn(e, a.precedence, l),
            (t.instance = e)
          );
        case "stylesheet":
          u = Se(a.href);
          var n = l.querySelector(du(u));
          if (n) return (t.state.loading |= 4), (t.instance = n), pl(n), n;
          (e = w0(a)),
            (u = ht.get(u)) && Wf(e, u),
            (n = (l.ownerDocument || l).createElement("link")),
            pl(n);
          var c = n;
          return (
            (c._p = new Promise(function (f, i) {
              (c.onload = f), (c.onerror = i);
            })),
            jl(n, "link", e),
            (t.state.loading |= 4),
            Mn(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Ae(a.src)),
            (u = l.querySelector(vu(n)))
              ? ((t.instance = u), pl(u), u)
              : ((e = a),
                (u = ht.get(n)) && ((e = j({}, a)), Ff(e, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                pl(u),
                jl(u, "link", e),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((e = t.instance), (t.state.loading |= 4), Mn(e, a.precedence, l));
    return t.instance;
  }
  function Mn(l, t, a) {
    for (
      var e = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = e.length ? e[e.length - 1] : null,
        n = u,
        c = 0;
      c < e.length;
      c++
    ) {
      var f = e[c];
      if (f.dataset.precedence === t) n = f;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function Wf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function Ff(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var Dn = null;
  function L0(l, t, a) {
    if (Dn === null) {
      var e = new Map(),
        u = (Dn = new Map());
      u.set(a, e);
    } else (u = Dn), (e = u.get(a)), e || ((e = new Map()), u.set(a, e));
    if (e.has(l)) return e;
    for (
      e.set(l, null), a = a.getElementsByTagName(l), u = 0;
      u < a.length;
      u++
    ) {
      var n = a[u];
      if (
        !(
          n[pe] ||
          n[Bl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var f = e.get(c);
        f ? f.push(n) : e.set(c, [n]);
      }
    }
    return e;
  }
  function K0(l, t, a) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function M1(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function J0(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var hu = null;
  function D1() {}
  function R1(l, t, a) {
    if (hu === null) throw Error(r(475));
    var e = hu;
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var u = Se(a.href),
          n = l.querySelector(du(u));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (e.count++, (e = Rn.bind(e)), l.then(e, e)),
            (t.state.loading |= 4),
            (t.instance = n),
            pl(n);
          return;
        }
        (n = l.ownerDocument || l),
          (a = w0(a)),
          (u = ht.get(u)) && Wf(a, u),
          (n = n.createElement("link")),
          pl(n);
        var c = n;
        (c._p = new Promise(function (f, i) {
          (c.onload = f), (c.onerror = i);
        })),
          jl(n, "link", a),
          (t.instance = n);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(t, l),
        (l = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (e.count++,
          (t = Rn.bind(e)),
          l.addEventListener("load", t),
          l.addEventListener("error", t));
    }
  }
  function U1() {
    if (hu === null) throw Error(r(475));
    var l = hu;
    return (
      l.stylesheets && l.count === 0 && $f(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((l.stylesheets && $f(l, l.stylesheets), l.unsuspend)) {
                var e = l.unsuspend;
                (l.unsuspend = null), e();
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function Rn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) $f(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Un = null;
  function $f(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Un = new Map()),
        t.forEach(j1, l),
        (Un = null),
        Rn.call(l));
  }
  function j1(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Un.get(l);
      if (a) var e = a.get(null);
      else {
        (a = new Map()), Un.set(l, a);
        for (
          var u = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (a.set(c.dataset.precedence, c), (e = c));
        }
        e && a.set(null, e);
      }
      (u = t.instance),
        (c = u.getAttribute("data-precedence")),
        (n = a.get(c) || e),
        n === e && a.set(null, u),
        a.set(c, u),
        this.count++,
        (e = Rn.bind(this)),
        u.addEventListener("load", e),
        u.addEventListener("error", e),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var mu = {
    $$typeof: Ol,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0,
  };
  function H1(l, t, a, e, u, n, c, f) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Kn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Kn(0)),
      (this.hiddenUpdates = Kn(null)),
      (this.identifierPrefix = e),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map());
  }
  function k0(l, t, a, e, u, n, c, f, i, h, b, T) {
    return (
      (l = new H1(l, t, a, c, f, i, h, T)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = Pl(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Uc()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: e, isDehydrated: a, cache: t }),
      Bc(n),
      l
    );
  }
  function W0(l) {
    return l ? ((l = $a), l) : $a;
  }
  function F0(l, t, a, e, u, n) {
    (u = W0(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = kt(t)),
      (e.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (a = Wt(l, e, t)),
      a !== null && (ut(a, l, t), Le(a, l, t));
  }
  function $0(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function If(l, t) {
    $0(l, t), (l = l.alternate) && $0(l, t);
  }
  function I0(l) {
    if (l.tag === 13) {
      var t = Fa(l, 67108864);
      t !== null && ut(t, l, 67108864), If(l, 67108864);
    }
  }
  var jn = !0;
  function _1(l, t, a, e) {
    var u = S.T;
    S.T = null;
    var n = M.p;
    try {
      (M.p = 2), Pf(l, t, a, e);
    } finally {
      (M.p = n), (S.T = u);
    }
  }
  function B1(l, t, a, e) {
    var u = S.T;
    S.T = null;
    var n = M.p;
    try {
      (M.p = 8), Pf(l, t, a, e);
    } finally {
      (M.p = n), (S.T = u);
    }
  }
  function Pf(l, t, a, e) {
    if (jn) {
      var u = li(e);
      if (u === null) Gf(l, t, e, Hn, a), lr(l, e);
      else if (q1(u, l, t, a, e)) e.stopPropagation();
      else if ((lr(l, e), t & 4 && -1 < Y1.indexOf(l))) {
        for (; u !== null; ) {
          var n = Ca(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = ma(n.pendingLanes);
                  if (c !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var i = 1 << (31 - $l(c));
                      (f.entanglements[1] |= i), (c &= ~i);
                    }
                    Ot(n), (tl & 6) === 0 && ((yn = At() + 500), iu(0));
                  }
                }
                break;
              case 13:
                (f = Fa(n, 2)), f !== null && ut(f, n, 2), bn(), If(n, 2);
            }
          if (((n = li(e)), n === null && Gf(l, t, e, Hn, a), n === u)) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else Gf(l, t, e, null, a);
    }
  }
  function li(l) {
    return (l = uc(l)), ti(l);
  }
  var Hn = null;
  function ti(l) {
    if (((Hn = null), (l = qa(l)), l !== null)) {
      var t = C(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = k(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (Hn = l), null;
  }
  function P0(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Tr()) {
          case di:
            return 2;
          case vi:
            return 8;
          case xu:
          case Er:
            return 32;
          case hi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ai = !1,
    ia = null,
    sa = null,
    oa = null,
    yu = new Map(),
    gu = new Map(),
    ra = [],
    Y1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function lr(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ia = null;
        break;
      case "dragenter":
      case "dragleave":
        sa = null;
        break;
      case "mouseover":
      case "mouseout":
        oa = null;
        break;
      case "pointerover":
      case "pointerout":
        yu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gu.delete(t.pointerId);
    }
  }
  function bu(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: e,
          nativeEvent: n,
          targetContainers: [u],
        }),
        t !== null && ((t = Ca(t)), t !== null && I0(t)),
        l)
      : ((l.eventSystemFlags |= e),
        (t = l.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l);
  }
  function q1(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return (ia = bu(ia, l, t, a, e, u)), !0;
      case "dragenter":
        return (sa = bu(sa, l, t, a, e, u)), !0;
      case "mouseover":
        return (oa = bu(oa, l, t, a, e, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return yu.set(n, bu(yu.get(n) || null, l, t, a, e, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), gu.set(n, bu(gu.get(n) || null, l, t, a, e, u)), !0
        );
    }
    return !1;
  }
  function tr(l) {
    var t = qa(l.target);
    if (t !== null) {
      var a = C(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = k(a)), t !== null)) {
            (l.blockedOn = t),
              Rr(l.priority, function () {
                if (a.tag === 13) {
                  var e = et();
                  e = Jn(e);
                  var u = Fa(a, e);
                  u !== null && ut(u, a, e), If(a, e);
                }
              });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function _n(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = li(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(a.type, a);
        (ec = e), a.target.dispatchEvent(e), (ec = null);
      } else return (t = Ca(a)), t !== null && I0(t), (l.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function ar(l, t, a) {
    _n(l) && a.delete(t);
  }
  function C1() {
    (ai = !1),
      ia !== null && _n(ia) && (ia = null),
      sa !== null && _n(sa) && (sa = null),
      oa !== null && _n(oa) && (oa = null),
      yu.forEach(ar),
      gu.forEach(ar);
  }
  function Bn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      ai ||
        ((ai = !0),
        y.unstable_scheduleCallback(y.unstable_NormalPriority, C1)));
  }
  var Yn = null;
  function er(l) {
    Yn !== l &&
      ((Yn = l),
      y.unstable_scheduleCallback(y.unstable_NormalPriority, function () {
        Yn === l && (Yn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            e = l[t + 1],
            u = l[t + 2];
          if (typeof e != "function") {
            if (ti(e || a) === null) continue;
            break;
          }
          var n = Ca(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            lf(n, { pending: !0, data: u, method: a.method, action: e }, e, u));
        }
      }));
  }
  function Su(l) {
    function t(i) {
      return Bn(i, l);
    }
    ia !== null && Bn(ia, l),
      sa !== null && Bn(sa, l),
      oa !== null && Bn(oa, l),
      yu.forEach(t),
      gu.forEach(t);
    for (var a = 0; a < ra.length; a++) {
      var e = ra[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < ra.length && ((a = ra[0]), a.blockedOn === null); )
      tr(a), a.blockedOn === null && ra.shift();
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (e = 0; e < a.length; e += 3) {
        var u = a[e],
          n = a[e + 1],
          c = u[Xl] || null;
        if (typeof n == "function") c || er(a);
        else if (c) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (c = n[Xl] || null))) f = c.formAction;
            else if (ti(u) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? (a[e + 1] = f) : (a.splice(e, 3), (e -= 3)),
            er(a);
        }
      }
  }
  function ei(l) {
    this._internalRoot = l;
  }
  (qn.prototype.render = ei.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var a = t.current,
        e = et();
      F0(a, e, l, t, null, null);
    }),
    (qn.prototype.unmount = ei.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          F0(l.current, 2, null, l, null, null), bn(), (t[Ya] = null);
        }
      });
  function qn(l) {
    this._internalRoot = l;
  }
  qn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Si();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ra.length && t !== 0 && t < ra[a].priority; a++);
      ra.splice(a, 0, l), a === 0 && tr(l);
    }
  };
  var ur = O.version;
  if (ur !== "19.1.0") throw Error(r(527, ur, "19.1.0"));
  M.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(r(188))
        : ((l = Object.keys(l).join(",")), Error(r(268, l)));
    return (
      (l = D(t)),
      (l = l !== null ? z(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var X1 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cn.isDisabled && Cn.supportsFiber)
      try {
        (ze = Cn.inject(X1)), (Fl = Cn);
      } catch {}
  }
  return (
    (Tu.createRoot = function (l, t) {
      if (!H(l)) throw Error(r(299));
      var a = !1,
        e = "",
        u = Ao,
        n = To,
        c = Eo,
        f = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (f = t.unstable_transitionCallbacks)),
        (t = k0(l, 1, !1, null, null, a, e, u, n, c, f, null)),
        (l[Ya] = t.current),
        Xf(l),
        new ei(t)
      );
    }),
    (Tu.hydrateRoot = function (l, t, a) {
      if (!H(l)) throw Error(r(299));
      var e = !1,
        u = "",
        n = Ao,
        c = To,
        f = Eo,
        i = null,
        h = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (e = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (c = a.onCaughtError),
          a.onRecoverableError !== void 0 && (f = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (i = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (h = a.formState)),
        (t = k0(l, 1, !0, t, a ?? null, e, u, n, c, f, i, h)),
        (t.context = W0(null)),
        (a = t.current),
        (e = et()),
        (e = Jn(e)),
        (u = kt(e)),
        (u.callback = null),
        Wt(a, u, e),
        (a = e),
        (t.current.lanes = a),
        Oe(t, a),
        Ot(t),
        (l[Ya] = t.current),
        Xf(l),
        new qn(t)
      );
    }),
    (Tu.version = "19.1.0"),
    Tu
  );
}
var hr;
function F1() {
  if (hr) return ci.exports;
  hr = 1;
  function y() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (O) {
        console.error(O);
      }
  }
  return y(), (ci.exports = W1()), ci.exports;
}
var $1 = F1();
const I1 = "" + new URL("bg-Bdn7zoU6.jpg", import.meta.url).href,
  P1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAtCAYAAADcMyneAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJASURBVHgB7ZjtccIwDIYVrv8bNkgnaDZoukFHSCcoG6QbABMUJoANgAmgE5gNYANVIsqdy/krCVD3judOR4hl+00kfwVAQMSKTOHfsyUrQYdurDA+xqwtoYsR/Y4hTt5Z4JYucoiTNQtEiJgBRM5dYF/uAvvyAN04kn2T7chewD5NcflGyp/JUmhJ22lmTzaV30Jsp5Xp5CLokeskSTLDegmryDIIpcXS80mW8cojFtwJ+RZSv5D/o9BOQwV+ScO9V5ymDRHsJTTETxSiPVwQ6pbDr8CTlyGjeHNpcQy1yQNt4/MLETiD6zHxOYSEeChPexWo+wM4wux7gxubOM4hsrIZmRYfHr1v4GbuLPUMopGlDk83SvOrDD6VVq5kUJjaKl0CfAILS6OmeSzVylNs97BWfCHeWe77lqw0tI7MEPYcd4hXjjo52UHzXRp8Vlo5+2aO9rY2ES6Ba3AgoZlgHe7UUN4MIvbJPW3NLiIQLYneBsvDTGwiXDloCjG/tdOmAdoLO9UFcy52ysGDKTTSEYdkJeEtHG3n4rOQBzO9vQJ/53NwiBuRpaXzwuCrNNPvZ4b6nKMVegjdbimsEz7T3qLCcJQIYitE2CGkYpeDe5MvvQdMCPcvC325C+zLvxB4td2yA95c7EMcWeAUbg9PUa8QIJKnGXbmr6wZ3JYh1EIX4PjCO5AzBz/NHG5LKZtV7ntpc0rOb2CHnUpHjvqBjPrlI+gHxAwaPodAbODZgQxiBOt9pIp6n9Bs6SBmWOQPRmfA9SbrdZsAAAAASUVORK5CYII=",
  lv =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAlCAYAAADfosCNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHlSURBVHgB7ZffbcIwEMa/kCLxUikjZAPYoIzQERihGyRM0mxCRoAN2CBIfWyLe0dsfISEGPKHPvgnWQEn57t8tu8cwOPxeDyeMQjQBwpRCCwVEE+A6AgcaOD9L5CThwOeisLiRWFDTTW1UOGTnovRgYeVpAASuqT6L6u1o8G2qlQxouuC+t6ESfoTYI2xYHWEWilFFNU9NyMF+f6FqmPACmqnBbWli820XBaFtkswKKUyJ1XYceVeNFH4YOVIsVV1HfILNdr2CTnPzBTL/mkZXN3GSSqBmqnfYBBIKeN8JlQS01/b+AUqY5ymHQ3ruBOk4rt2nAun8a0ATZMBmZTF47n6ntzxYKx/bs+Bw3HjgNaoZVcZz8W3G5T3jBrnChI4OhK2Z/tK302cgwxscFFNX5vtXvyN7rFlnIM8Wkdz0/cNZC62IcQ61vbHy8B7wu7uQm6EG+lHXaUrsdEG2d3Miz1MpJX+tDX9wKar6ZDlUZc3E8RS3uPcSfdXHDAHd1XPhe2s46moFaFa4Vre+IVCW7tTjIEoj2Xpa1KmXMeJOAVleIAu58mULrI25ygTNacWnuo5nykDm7LWdJ5MMTZ6HWYtuzvveurp5RuHN8kXlUgudVxJOFFzHnwldQ9P/8bxeDz/lz8ssUc8miwUlAAAAABJRU5ErkJggg==",
  Te = "" + new URL("image3-6xvTHx4d.png", import.meta.url).href,
  Ee =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA9iSURBVHgBpVh7cFTXff723n0/tKuVhEAIkAQ4iAQQdnGB4CI5NQONE+MWxqlbp2T6cNxmxspkUvuPzgDT6TSZOoNoPYnTlCAzcZPBxrg2NiY4sOJhFANGUEDCSGglJCFpV/t+P+7td86uVIJxcJzV3N3VvXvv+c7v9/2+33eOAZ/xteNHP29dvai6pbbCvj4SDbfYnRUexaB4PG4PDr71emRp0zx/1wfn/W8d7b6YyCR8I319PnyGl/F3+fGOvXs9Ns35LAxozxSKHugGKIoKs8UCndezmSS0Cg/mVXs8C5uaWrpP+lqCscTmjRs3bV/018/4T/cO+q5/2L3T39Pt/7RjGj7Nj8rAtmvQ2+VNBgNyBQ2rFnhRV+VCPBVHIZsjWCOqqmchl4sjM+nHy/+9H977/gCVFZUYjaTx0a1J9F84h+Ylizo3r1218xvPPOO/19jKvX7w/T0H2u1wDeqKod2gKFB5KAYROYWzK0UwE0tAKxYYUB2KakQxHsSen+7BY1ueQPOCBpy7PoR4OgG72cz7VRhUddulQPz44s3f3PZ7AfxB54FdqoJdHNdj5Js4VMac5/hdk2mFeDeIdyPMRjKGwCdHBlA3axbc7llg/nF1YAzFQhEmVYXNaUcgnMCxKyMNDzXX7X3xpR/u+m0Y7ppikdIK1XVQ19GKMozpnxr00ve8VsTyuV7U17gxPj4Ci9XByOrw1szBRP8FRMdvYCrvxPP/uhtGxQRNL3IKOsxmGzRy9rE//wt88b56xBIpFHX0dF+92tbZ0RG5E8tdi8StuI8TTovAwjogHH0Gp6Ecc0VX5EVN1+S1QjbJ6HgIsvSDy72DuHSpDy9886tIZLL4sOcajvWNQ9MKUHPAT3/wfQw9sgFf/8uv4eiF3hbfQOYgb2u7E4t654mOfQd2MUubJRjBKQHwjkOkmbBQ7bSg0mlDLBKA1eGGw1kBi8WK3otn4PZ48Q/PfxeOKi8WzfMC47dwOabA5bAjmSQf7TYMDw3h3WMnoTYux/pF3oYnv7bVc/jQoSOfCHDXvv3bGIHvyQgRmajWOw9FolRkOt0czG03IZfPwVXhJTd53WRGjgXRsmYtJifGYUgFMXnyV4gkC7g8Hpcc1ZiTHKveaGTB5LLwmot46qsbkUhmVy95cF30/WNHu6cxzRTJrr0HG1TVtF0AmKnUuxz/D1aRqRfn7C6PPJekDpp575L7H0R4chx2TmC0pwf/duw69vzaD4NJRSQWRzafK6mAGMuiotvnQzJHFeAfz21vb2/3fCyCX9n6RAcvtpYiV9I6wT7DXcpIFSfJvQqbBR6nFUVNRzaXgsVowZtvvo63DxzAQw8sRbzvDDZ8dw/IOoSTSdR6XJjrtSGf05GiLEmekL8mkxFT4SkY1SIsdrc1noX13OmuIzMAf/RzET1lrwSHEs9EcSgSnC4LQ51Juz4TdherscpjRzg0gZqa2fjOc88hOBXDa13dWFBIo+a++dh/5AO4bTYUNA1OqwmJeA5NNQ6C0zGVSlOuFAJTMT4ZoDJkoPB3xmJy9RfXrtvd3d2dUUp5VnaIhIlD5Q0qvxnFdx7yAfxfnJfXocyk2WFRUCwW4XRVYeTqWczxVsCaj0OLxvHUt59G8Ox5rF/RhCh5ZibfbGYTMgYVY4kcwuk8FnqdEOIvZq8RcDijY3j0Ji71D2FkbKR9hoOqalh/O8fuLJBSHEsvvRziGpuRwPPyhMPpwsI1m7B13RJ4kgHsf+VFvPLij7Hz8HWkokn83erP46WnN2AknKNYG0oUIbCJRAHVFU7McjhRwWf87ZZH4XK5UeM0wYbssxLbT159q5Uo20Uay7QrcVD8idnJoi2DF9PRDKiyqTDmkzCS9A5HhazKbDwMpXoBNm7dCtvw/8KkZ/Cz4x+So05s3LAWuWgMJ24EYOIzsuwq2UweLrtVZkAxMktsg5s2bEBRtaJgpOjnk9baxuYuoxlaq8YmD10vVVE5UtOCrJffdKbBUAS8BKfmEjCZjZhTN58XCtS1GAqFPOw2OxS2tyNHjsL3fi9mM+UppnfPwSN4aPFcma4CU5ki9zRyrVAoiPShkNcwe84sZsIBo8UGh82BKed8WIuhFsWgGltURZNpFTo2zTVDWZWlnAiToCmoJMkVOhWzxYyGxsWsxowcKBYKwOZwwWR1Yvj4a0gNjWL/q/+B73xhNoLZPDKpLH5xzo9CLo10KlWaOAOS58QTSZ6LR/Dkk1tx+qofsUyRADkOVUJV1VaFoBaI9qQqpa6h8JOTYv+ENAdGWTxAhZlAczEZpQUNTVLzEumU5ITd5Sr16ALfciEsf+xR/MvOF7BvKIpadhpRIG6jznRqLF5dtkcRgHQ6I9Ojkn/HRxI4eHkcWRKGUSulTVVW0PwoDaW8lgukXM3Tgq0TsJvpVIpxzozgaJ8EuHQ6KWaIfCGHqakQeWRAgQTrO/oevIYoVta50UyyVzPqoXQBgWSOACnGBKcRaJFmo4IayvCh+uEncGVgFK1NlahzmJGV12ksjCaPCJBH0W5zXTIUArEmaEnOWZBLhPgwB+bWzaOvSyKZIAdNJpmm0NSUnFg0FIKZaU5VL8bQB5fQPZnHrZwBVydjJfpIfhuknIj7xLPNeh7uVRswx23D+mWzKeRuDIciCCApI8hocxkhhFfRcfunwaCVK1nH3Co3qiu9mDOH1ojOOZWMw0YSC6MqBpqKxHDl2nUptoI3X372n3Dk2iSmNBXXpuKkCvOh6yVFKHNPtjkeBVZw2x+uwJYv1GN2dRWzpUg6CV6L6pYVzsdGfkP7btNA8TATy7+qulo64jQ5Z6XvMxpNZb1UkMoW5DkTXUyS7SxD0v/jf+5F7+AINc8Mp40uWpiCsgMXMzeZLPB6HPSGFmy6fynJTkVlWg2coOzThulmoERIXS1KUB4hIdIZlxU5zy+zGD0BOEVgGabWZnNK3mlafka6xYwtpIGIho0trUi/l8po2PfC03j7lxcQpKMZDmUwFMkgxqhW2u3s2znYCcpZwZbHySrkZp7ALkzEMBKKYy55qHBSbI9+CqChR9ENC8RIImIzkePAVSRxOpNGNpthlGwER6ukFWdSZeQgItViQBHNIiMQDU6ymAh88cPY8vkNMCRG4apbAsvoeTz+9AuIUqTtNitsLCgb/aNazCKQyOD00CQuBjJorrJSPUrPZyENCWb4putDKbc1qYGMXJzFkKN2TQMXYiwiVGqPFGzKQWN9HR5YvowG1MmBHYgN9CJ8/jCMVjvTnUQ8y5bmv4abY1EaghAbkQqLdLwGVNgdOMX1yqtXxjCa0vGlRdVYM9ddaqeiAoroUXhDzzRAvQyuZExLTkwQVqp+Lg8zzaiDAzusVjjITbKYwCyw8ZyWLyBCD1i5bBVcSzch3HsexUyKfFMxcWI/8koBr3c8gwfm2OVAQp7GMwUcuhZAAy3YtpXz8Ufza0gBGwNikNkqaAWfsvUrj/hIyUjZaM0so0RFC0JLt0Ihra6dzSrVMTE6gjNdp3H4neM4330WU2M3ZVqTqRhsXLQ7hPywaFwLV3FiZoQmI0jY5uP9N4+gfvkKpOIx9mOxeDIjzdXfxvlubFnWAI+LiykhR+wQYmyWjP/Qz/7LZyxFrribIds+402lcaCMULMqK2tk1er5LJKxKENaxHsXBlBQTXKVNm88grYHFssBDYoqSS/4WqAkJWnrY3QsY5oHfeYGtP3NvyNXrISXUVeUIszeBnT5TsKK1Vi3cql023mxrmZQGEbfdBFCcVo7pLyUF+aiH+sEUukurTMsVgsu9Vyk5kXR2NSEUCyGYDiONNeLNwJJBINh9tSEcFBMXZ5yFGPPTcqIi8IZHArgo/EUVFLBanMRhA05azXTbpTL0PfPX8Yv3j6BHHl5bngSKU20VvPOGYCPt7VFVF3dbZJmlUDJAW6vwGY3Iz4V5OLIih/u/yVqa2vxYW8/5tV4WLlZRFMZjBBcnGbAxvVHghPIk3esJMpGXoKzmKxomjebUmSD010NJ1d7Nno+G2njog+0UqJURn04GEHn/xxHfyAhVoadL3V8zz8DUBaDTd1BbBHhs4Six24NyRtT6bQkQZCtTFTzxQs9WLiwkdKTRob7M8vnVeH+5Z+TjT+VTDFyaUTCIblmET1XZEYT6w4hxiy0nAQuJERDmgslQaU0xb6QK3K/hxo6OuK/1n9j521sK71EFBm5naLV1VW78Q7Xq26Xk303LCu4gn322o0h2i3uBDCNefbvWRVWfOuJP5YrshyBBdlH4+RpLBpFMs7VW1oAjiNG4MFwhEAysoK1glbqxwQZ4D0OhwN5XsvwGcl0fucbL3X4PwZQvB7d+KUOzmI32DUmYlkC447A5X7YmQ6v24G+GzdRxWqbDEfltc5//hY+8o8hFAgwMlmMB0IYujkh2+PI6DiukA4TEyEM8jALfhKEAC0/c8JYlXr/1b4+eLweIWe7T77+k87bMX1s8+hPv7yx/Upfr28sEGZUxOyTcl+luakegzfHpL1fsagea5cvpEF1YGRkBGO3AjQLZln1I4EI6ufU4tjFQZzpn8SFoSn0j05BlTtbijQhwtGISs2xA4nq97grcOHsuZ4TBzvb78Rz192trtPdj0fj8R4h0AMDfgzfGMCaVcvw6/OXqFXsBFoaz/39X8Hn68KP3ziORx5eQ64m4WQxWc2KrPzRYBQ3RgP4oHcI4XiSnM3JhXyx7AX1IrlJg5vK5FiM9q56d2Xb3bDcdfOos7NT7DKtDIef7+Dns0J++ns/woMrmpnGIJ586uskv44du/fhzzY9TCNtYDex0LnkYan10tBSM8k7abFEm2TBRCJcKphNpYIsltYjZla2MTS4+9ihE+34hNdv3R9cubatPZsrfsNutvrHA2P43KJFGBgchoNScerEKQyNB7Fu1XKu0rgoZ1+1sK15K90STBHl3iQ9psrCyrLHTi9huR7JpiN6KvTtU6c+Gdw9AYrXu++80ZkvZtuuXx98+U/aVnPwEKJU/F9197A3K2iYWwuVPVr0b4/bTe9YhSDXwoJs085HKbco8b/YYaU+7mbXaTzz3lsd9xr/ngDFq3nlGv+hw+9ua5hX29i4YO7L5850+cfGJxkxBd6qajGyXJMYzapceAdY5QKUxkIQXUlswTCnEa1Q2OnStMrLJw619/jeiHyasX+nXf45jc1+fmzb+8prWLK6tXXzxvWtFOgWrtIaYuHIgvqmhR4To8ktjgipF6Ul6yloRR+T3XP17DEfPsPr/wBLeho3yuy4VQAAAABJRU5ErkJggg==",
  tv = "" + new URL("music-CyXgJPQu.mp3", import.meta.url).href,
  av = "" + new URL("music1-CzRypXeT.mp3", import.meta.url).href,
  ev = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free 30-minute onboarding call to get you up and running.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free 30-minute onboarding call to get you up and running.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free 30-minute onboarding call to get you up and running.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free 30-minute onboarding call to get you up and running.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free 30-minute onboarding call to get you up and running.",
    },
  ],
  uv = [
    {
      backgroundImage: Te,
      profilePhoto: Ee,
      name: "kannan",
      role: "developer",
      desc: "Passionate about building scalable apps and solving problems. Always learning.",
      github: "www.google.com",
      x: "www.google.com",
      linkedIN: "www.google.com",
    },
    {
      backgroundImage: Te,
      profilePhoto: Ee,
      name: "kannan",
      role: "developer",
      desc: "Passionate about building scalable apps and solving problems. Always learning.",
      github: "www.google.com",
      x: "www.google.com",
      linkedIN: "www.google.com",
    },
    {
      backgroundImage: Te,
      profilePhoto: Ee,
      name: "kannan",
      role: "developer",
      desc: "Passionate about building scalable apps and solving problems. Always learning.",
      github: "www.google.com",
      x: "www.google.com",
      linkedIN: "www.google.com",
    },
    {
      backgroundImage: Te,
      profilePhoto: Ee,
      name: "kannan",
      role: "developer",
      desc: "Passionate about building scalable apps and solving problems. Always learning.",
      github: "www.google.com",
      x: "www.google.com",
      linkedIN: "www.google.com",
    },
  ],
  nv = [
    {
      backgroundImage: Te,
      profilePhoto: Ee,
      name: "kannan",
      whiteText: "Benefits of Drinking Coffee,",
      purpleText: "Can Lower the Risk of Cancer to Stroke",
      desc: `  Coffee is the most popular drink in the world and drinking coffee in
          the morning has become a routine for many people before their
          activities. Besides being able to provide energy intake, it turns out
          that the ...`,
      date: Date.now(),
    },
    {
      backgroundImage: Te,
      profilePhoto: Ee,
      name: "kannan",
      whiteText: "Benefits of Drinking Coffee,",
      purpleText: "Can Lower the Risk of Cancer to Stroke",
      desc: `  Coffee is the most popular drink in the world and drinking coffee in
          the morning has become a routine for many people before their
          activities. Besides being able to provide energy intake, it turns out
          that the ...`,
      date: Date.now(),
    },
  ],
  Eu = {
    title: "Home Land Role Play",
    desc1:
      "Home Land Role Play (HLRP) is a serious FiveM server offering immersive and realistic roleplay. Be a cop, EMS, criminal, or civilian—your story is yours to write.",
    desc2:
      "With custom scripts, active staff, and community-driven events, HLRP keeps RP fresh and exciting. Start your second life today in Home Land.",
    discordname: "Home Land RP",
    onlineplayers: "123 online members",
  },
  Ha = [
    { src: tv, title: "Baby Blue", artist: "Luke Hemmings" },
    { src: av, title: "Song Title 2", artist: "Artist 2" },
  ],
  cv = "https://discord.gg/your-discord-link",
  fv = () => {
    const [y, O] = Zl.useState(0),
      [p, r] = Zl.useState(!0),
      [H, C] = Zl.useState(10),
      [k, cl] = Zl.useState(204),
      D = Zl.useRef(new Audio(Ha[0].src));
    Zl.useEffect(() => {
      const J = D.current,
        yl = () => {
          cl(J.duration),
            (J.currentTime = 10),
            C(10),
            p && J.play().catch((Ol) => console.error("Playback failed:", Ol));
        },
        Ll = () => {
          C(J.currentTime);
        },
        nt = () => {
          ll();
        };
      return (
        J.addEventListener("loadedmetadata", yl),
        J.addEventListener("timeupdate", Ll),
        J.addEventListener("ended", nt),
        () => {
          J.removeEventListener("loadedmetadata", yl),
            J.removeEventListener("timeupdate", Ll),
            J.removeEventListener("ended", nt);
        }
      );
    }, [y]),
      Zl.useEffect(() => {
        const J = D.current;
        (J.src = Ha[y].src), J.load();
      }, [y]),
      Zl.useEffect(() => {
        z();
      }, []);
    const z = () => {
        D.current.play().catch((yl) => console.error("Playback failed:", yl)),
          r(!0);
      },
      j = () => {
        const J = D.current;
        p ? (J.pause(), r(!1)) : z();
      },
      fl = () => {
        const J = (y - 1 + Ha.length) % Ha.length;
        O(J), r(!0);
      },
      ll = () => {
        const J = (y + 1) % Ha.length;
        O(J), r(!0);
      },
      zl = (J) => {
        const yl = Math.floor(J / 60),
          Ll = Math.floor(J % 60);
        return `${yl}:${Ll < 10 ? "0" : ""}${Ll}`;
      },
      xl = (H / k) * 100;
    return E.jsxs("div", {
      className:
        "bg-[#0c0b0b] text-white p-7 rounded-xl shadow-lg flex items-center justify-between w-full max-w-md",
      children: [
        E.jsxs("div", {
          className: "flex items-center space-x-3",
          children: [
            E.jsx("div", {
              className:
                "w-12 h-12 bg-gray-700 rounded-md flex items-center justify-center",
              children: E.jsx("span", {
                className: "text-gray-400 text-sm",
                children: "Art",
              }),
            }),
            E.jsxs("div", {
              children: [
                E.jsx("h3", {
                  className: "text-base font-semibold",
                  children: Ha[y].title,
                }),
                E.jsx("p", {
                  className: "text-sm text-gray-400",
                  children: Ha[y].artist,
                }),
              ],
            }),
          ],
        }),
        E.jsxs("div", {
          className: "flex flex-col items-center space-y-2 w-1/2",
          children: [
            E.jsxs("div", {
              className: "w-full flex items-center space-x-2",
              children: [
                E.jsx("span", { className: "text-xs", children: zl(H) }),
                E.jsxs("div", {
                  className: "relative w-full h-1 bg-gray-600 rounded-full",
                  children: [
                    E.jsx("div", {
                      className: "absolute h-1 bg-white rounded-full",
                      style: { width: `${xl}%` },
                    }),
                    E.jsx("div", {
                      className:
                        "absolute w-4 h-4 bg-white rounded-full -mt-1.5",
                      style: { left: `${xl}%`, transform: "translateX(-50%)" },
                    }),
                  ],
                }),
                E.jsxs("span", {
                  className: "text-xs",
                  children: ["-", zl(k - H)],
                }),
              ],
            }),
            E.jsxs("div", {
              className: "flex space-x-4",
              children: [
                E.jsx("button", {
                  onClick: fl,
                  className: "text-gray-400 hover:text-white",
                  children: E.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    className: "w-6 h-6",
                    children: E.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M15 19l-7-7 7-7",
                    }),
                  }),
                }),
                E.jsx("button", {
                  onClick: j,
                  className: "text-white hover:text-gray-300",
                  children: p
                    ? E.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        className: "w-6 h-6",
                        children: E.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M10 9v6m4-6v6",
                        }),
                      })
                    : E.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        className: "w-6 h-6",
                        children: E.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M14 5l7 7m0 0l-7 7m7-7H3",
                        }),
                      }),
                }),
                E.jsx("button", {
                  onClick: ll,
                  className: "text-gray-400 hover:text-white",
                  children: E.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    className: "w-6 h-6",
                    children: E.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M9 5l7 7-7 7",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  iv = ({ className: y }) =>
    E.jsx("div", {
      className: `${y}`,
      children: E.jsx("div", {
        className: "pt-20 space-y-5",
        children: nv.map((O, p) =>
          E.jsx(
            sv,
            {
              whiteHeding: O.whiteText,
              prupleText: O.purpleText,
              description: O.desc,
              backgroundImage: O.backgroundImage,
              profilePhoto: O.profilePhoto,
              name: O.name,
              date: O.date,
            },
            p
          )
        ),
      }),
    });
function sv({
  whiteHeding: y,
  prupleText: O,
  description: p,
  backgroundImage: r,
  profilePhoto: H,
  name: C,
  date: k,
}) {
  return E.jsxs("div", {
    className:
      "flex bg-[#141921]/35 text-white rounded-lg p-4 shadow-lg max-w-3xl",
    children: [
      E.jsx("div", {
        className: "w-1/2",
        children: E.jsx("img", {
          src: r,
          alt: "Coffee cup",
          className: "w-full h-full object-cover rounded-lg",
        }),
      }),
      E.jsxs("div", {
        className: "w-1/2 pl-4 flex flex-col justify-between",
        children: [
          E.jsxs("h2", {
            className: "text-xl font-bold",
            children: [
              y,
              " ",
              E.jsx("br", {}),
              " ",
              E.jsx("span", { className: "text-purple-500", children: O }),
            ],
          }),
          E.jsx("p", { className: "text-sm text-gray-300 mt-2", children: p }),
          E.jsxs("div", {
            className: "flex items-center mt-4",
            children: [
              E.jsx("img", {
                src: H,
                alt: "Author",
                className: "w-8 h-8 rounded-full mr-2",
              }),
              E.jsxs("div", {
                children: [
                  E.jsx("p", {
                    className: "text-sm font-semibold",
                    children: C,
                  }),
                  E.jsx("p", {
                    className: "text-xs text-gray-400",
                    children: k,
                  }),
                ],
              }),
              E.jsx("svg", {
                className: "ml-auto w-5 h-5 text-gray-400",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: E.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M8.684 13.342C9.104 12.949 9.684 12.75 10.316 12.75H13v-2.25a2.25 2.25 0 014.5 0v6a2.25 2.25 0 01-4.5 0v-2.25h-2.684c-.632 0-1.212.199-1.632.592l-4.316 3.75a2.25 2.25 0 01-3.568-1.834V7.5a2.25 2.25 0 013.568-1.834l4.316 3.75z",
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var gr = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  mr = _a.createContext && _a.createContext(gr),
  ov = ["attr", "size", "title"];
function rv(y, O) {
  if (y == null) return {};
  var p = dv(y, O),
    r,
    H;
  if (Object.getOwnPropertySymbols) {
    var C = Object.getOwnPropertySymbols(y);
    for (H = 0; H < C.length; H++)
      (r = C[H]),
        !(O.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(y, r) &&
          (p[r] = y[r]);
  }
  return p;
}
function dv(y, O) {
  if (y == null) return {};
  var p = {};
  for (var r in y)
    if (Object.prototype.hasOwnProperty.call(y, r)) {
      if (O.indexOf(r) >= 0) continue;
      p[r] = y[r];
    }
  return p;
}
function Xn() {
  return (
    (Xn = Object.assign
      ? Object.assign.bind()
      : function (y) {
          for (var O = 1; O < arguments.length; O++) {
            var p = arguments[O];
            for (var r in p)
              Object.prototype.hasOwnProperty.call(p, r) && (y[r] = p[r]);
          }
          return y;
        }),
    Xn.apply(this, arguments)
  );
}
function yr(y, O) {
  var p = Object.keys(y);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(y);
    O &&
      (r = r.filter(function (H) {
        return Object.getOwnPropertyDescriptor(y, H).enumerable;
      })),
      p.push.apply(p, r);
  }
  return p;
}
function Gn(y) {
  for (var O = 1; O < arguments.length; O++) {
    var p = arguments[O] != null ? arguments[O] : {};
    O % 2
      ? yr(Object(p), !0).forEach(function (r) {
          vv(y, r, p[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(p))
      : yr(Object(p)).forEach(function (r) {
          Object.defineProperty(y, r, Object.getOwnPropertyDescriptor(p, r));
        });
  }
  return y;
}
function vv(y, O, p) {
  return (
    (O = hv(O)),
    O in y
      ? Object.defineProperty(y, O, {
          value: p,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (y[O] = p),
    y
  );
}
function hv(y) {
  var O = mv(y, "string");
  return typeof O == "symbol" ? O : O + "";
}
function mv(y, O) {
  if (typeof y != "object" || !y) return y;
  var p = y[Symbol.toPrimitive];
  if (p !== void 0) {
    var r = p.call(y, O);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (O === "string" ? String : Number)(y);
}
function br(y) {
  return (
    y &&
    y.map((O, p) =>
      _a.createElement(O.tag, Gn({ key: p }, O.attr), br(O.child))
    )
  );
}
function Qn(y) {
  return (O) =>
    _a.createElement(yv, Xn({ attr: Gn({}, y.attr) }, O), br(y.child));
}
function yv(y) {
  var O = (p) => {
    var { attr: r, size: H, title: C } = y,
      k = rv(y, ov),
      cl = H || p.size || "1em",
      D;
    return (
      p.className && (D = p.className),
      y.className && (D = (D ? D + " " : "") + y.className),
      _a.createElement(
        "svg",
        Xn(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          p.attr,
          r,
          k,
          {
            className: D,
            style: Gn(Gn({ color: y.color || p.color }, p.style), y.style),
            height: cl,
            width: cl,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        C && _a.createElement("title", null, C),
        y.children
      )
    );
  };
  return mr !== void 0
    ? _a.createElement(mr.Consumer, null, (p) => O(p))
    : O(gr);
}
function gv(y) {
  return Qn({
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
        child: [],
      },
    ],
  })(y);
}
function bv(y) {
  return Qn({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(y);
}
function Sv(y) {
  return Qn({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
        child: [],
      },
    ],
  })(y);
}
function Av(y) {
  return Qn({
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z",
        },
        child: [],
      },
    ],
  })(y);
}
const oi = ({ icon: y, link: O }) =>
    E.jsx("a", {
      href: O,
      target: "_blank",
      rel: "noreferrer",
      className: "text-gray-500 hover:text-blue-500 transition-colors",
      children: y,
    }),
  Tv = ({ className: y }) =>
    E.jsx("div", {
      className: `${y} pt-20 space-y-5 flex flex-wrap justify-center gap-5 w-xl`,
      children: uv.map((O, p) =>
        E.jsx(
          Ev,
          {
            backgroundImage: O.backgroundImage,
            profilePhoto: O.profilePhoto,
            name: O.name,
            role: O.role,
            desc: O.desc,
            github: O.github,
            x: O.x,
            linkedIN: O.linkedIN,
          },
          p
        )
      ),
    }),
  Ev = ({
    className: y,
    backgroundImage: O,
    profilePhoto: p,
    name: r,
    role: H,
    desc: C,
    github: k,
    x: cl,
    linkedIN: D,
  }) =>
    E.jsx("div", {
      className: `${y}`,
      children: E.jsxs("div", {
        className:
          "w-60  bg-[#141921]/35 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 text-white",
        children: [
          E.jsxs("div", {
            className: "relative",
            children: [
              E.jsx("img", {
                className: "w-full h-32 object-cover",
                src: O,
                alt: "Profile",
              }),
              E.jsx("div", {
                className:
                  "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2",
                children: E.jsx("div", {
                  className:
                    "w-16 h-16 rounded-full border-4 border-[#6610F2] overflow-hidden",
                  children: E.jsx("img", {
                    className: "w-full h-full object-cover",
                    src: p,
                    alt: "Profile Avatar",
                  }),
                }),
              }),
            ],
          }),
          E.jsxs("div", {
            className: "pt-10 pb-4 px-4 text-center",
            children: [
              E.jsx("h2", {
                className: "text-xl font-bold text-white",
                children: r,
              }),
              E.jsx("p", { className: "text-xs text-gray-500", children: H }),
              E.jsx("p", {
                className: "mt-3 text-gray-600 text-xs",
                children: C,
              }),
              E.jsxs("div", {
                className: "mt-4 flex justify-center space-x-3 text-sm",
                children: [
                  E.jsx(oi, { icon: E.jsx(bv, {}), link: D }),
                  E.jsx(oi, { icon: E.jsx(gv, {}), link: k }),
                  E.jsx(oi, { icon: E.jsx(Sv, {}), link: cl }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  zv = ({ className: y }) =>
    E.jsx("div", {
      className: `${y} pt-20 space-y-7`,
      children: ev.map((O, p) =>
        E.jsx(xv, { question: O.question, answer: O.answer }, p)
      ),
    }),
  xv = ({ question: y, answer: O }) =>
    E.jsxs("div", {
      className:
        "flex items-start space-x-4 p-4  rounded-lg bg-[#141921]/35 shadow-sm max-w-xl",
      children: [
        E.jsx("div", {
          className: "text-2xl text-white mt-1",
          children: E.jsx(Av, {}),
        }),
        E.jsxs("div", {
          children: [
            E.jsx("h3", {
              className: "font-semibold text-white text-sm mb-1",
              children: y,
            }),
            E.jsx("p", {
              className: "text-white text-sm leading-relaxed",
              children: O,
            }),
          ],
        }),
      ],
    }),
  Ov = () => {
    const [y, O] = Zl.useState(!0),
      [p, r] = Zl.useState(!1),
      [H, C] = Zl.useState(!1),
      [k, cl] = Zl.useState(!1),
      D = (j) => {
        j === "home"
          ? (O(!y), r(!1), C(!1), cl(!1))
          : j === "news"
          ? (r(!p), O(!1), C(!1), cl(!1))
          : j === "team"
          ? (C(!H), O(!1), r(!1), cl(!1))
          : j === "rules" && (cl(!k), O(!1), r(!1), C(!1));
      },
      z = () => {
        window.open(`${cv}`, "_blank");
      };
    return E.jsx("div", {
      children: E.jsxs("div", {
        className: "absolute inset-0 bg-[#030910]/90 z-20",
        children: [
          E.jsxs("div", {
            className: "absolute z-10 left-30 top-35",
            children: [
              E.jsxs("div", {
                className:
                  "flex bg-[#141921]/35 justify-between items-center p-2 text-white gap-x-4 rounded-2xl w-xl",
                children: [
                  E.jsx("img", {
                    src: "./assets/logo.png",
                    alt: "logo",
                    className: "",
                  }),
                  E.jsx("button", {
                    className: `bg-[#6610F2] p-2 px-6 rounded-[6px] ${
                      y ? "bg-[#6610F2]" : "bg-black"
                    }`,
                    onClick: () => D("home"),
                    children: "Home",
                  }),
                  E.jsx("button", {
                    className: `bg-[#6610F2] p-2 px-6 rounded-[6px] ${
                      p ? "bg-[#6610F2]" : "bg-black"
                    }`,
                    onClick: () => D("news"),
                    children: "News",
                  }),
                  E.jsx("button", {
                    className: `bg-[#6610F2] p-2 px-6 rounded-[6px] ${
                      H ? "bg-[#6610F2]" : "bg-black"
                    }`,
                    onClick: () => D("team"),
                    children: "Team",
                  }),
                  E.jsx("button", {
                    className: `bg-[#6610F2] p-2 px-6 rounded-[6px] ${
                      k ? "bg-[#6610F2]" : "bg-black"
                    }`,
                    onClick: () => D("rules"),
                    children: "Rules",
                  }),
                ],
              }),
              E.jsxs("div", {
                className: `pt-20 ${y ? "block" : "hidden"}`,
                children: [
                  E.jsx("h1", {
                    className: "text-white font-extrabold text-5xl",
                    children: Eu.title,
                  }),
                  E.jsx("p", {
                    className: "text-white font-medium text-xl w-[600px] pt-7",
                    children: Eu.desc1,
                  }),
                  E.jsx("p", {
                    className: "text-white font-medium text-xl w-[600px] pt-7",
                    children: Eu.desc2,
                  }),
                ],
              }),
              E.jsx(iv, { className: `${p ? "block" : "hidden"}` }),
              E.jsx(Tv, { className: `${H ? "block" : "hidden"}` }),
              E.jsx(zv, { className: `${k ? "block" : "hidden"}` }),
              E.jsxs("div", {
                className: `flex bg-[#141921]/35  gap-x-7 items-center p-4 w-md rounded-2xl mt-24 ${
                  y ? "block" : "hidden"
                }`,
                children: [
                  E.jsx("img", { src: `${P1}`, alt: "" }),
                  E.jsxs("div", {
                    children: [
                      E.jsx("h1", {
                        className: "text-md font-medium text-white",
                        children: Eu.discordname,
                      }),
                      E.jsxs("h1", {
                        className:
                          "flex flex-row justify-center items-center text-md font-medium text-white",
                        children: [
                          E.jsx("img", { src: `${lv}` }),
                          " ",
                          Eu.onlineplayers,
                        ],
                      }),
                    ],
                  }),
                  E.jsx("button", {
                    className:
                      "bg-[#6610F2] p-2 px-6 rounded-[6px] font-medium text-white",
                    onClick: z,
                    children: "Connect",
                  }),
                ],
              }),
            ],
          }),
          E.jsxs("div", {
            className: "w-full h-screen relative overflow-hidden ",
            children: [
              E.jsx("img", {
                src: "./assets/image1.png",
                className: "absolute right-0 z-10",
              }),
              E.jsx("img", {
                src: "./assets/image2.png",
                className: "absolute right-0 z-0",
              }),
              E.jsx("div", {
                className:
                  " flex items-center justify-center absolute right-10 bottom-10 z-30 w-xl rounded-3xl",
                children: E.jsx(fv, {}),
              }),
            ],
          }),
        ],
      }),
    });
  };
function pv() {
  return E.jsxs("div", {
    className: "w-full h-screen bg-cover bg-no-repeat ",
    style: { backgroundImage: `url(${I1})` },
    children: [
      E.jsx(Ov, {}),
      E.jsx("div", {
        className: "absolute bottom-20 z-20 left-30",
        children: E.jsxs("div", {
          className: "bg-[#BEACDB] w-2xl h-[6px]",
          children: [
            E.jsx("div", { className: "bg-[#6610F2] w-2 h-[6px] bar" }),
            E.jsxs("h1", {
              className: "text-white font-bold ",
              children: [
                E.jsx("span", { className: "bartext", children: "2" }),
                "% Loading...",
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
$1.createRoot(document.getElementById("root")).render(
  E.jsx(Zl.StrictMode, { children: E.jsx(pv, {}) })
);

window.addEventListener("message", (event) => {
  // Check for loadProgress event
  if (event.data.eventName === "loadProgress") {
    // Get the loadFraction (0 to 1)
    const loadFraction = event.data.loadFraction;
    // Update progress bar
    const progressBar = document.getElementsByClassName("bar")[0]; // Access first element
    progressBar.style.width = `${Math.round(loadFraction * 100)}%`; // Set width as percentage
    // Update percentage text
    const progressText = document.getElementsByClassName("bartext")[0]; // Access first element
    progressText.textContent = `${Math.round(loadFraction * 100)}%`;
  }
});
