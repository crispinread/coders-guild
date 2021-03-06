/* res_id: a8f1d9d65f206908d4d67438b46c972e */

/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
! function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "1.12.4",
    n = function(a, b) {
      return new n.fn.init(a, b)
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function(a, b) {
      return b.toUpperCase()
    };
  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function() {
      return e.call(this)
    },
    get: function(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
    },
    pushStack: function(a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    },
    each: function(a) {
      return n.each(this, a)
    },
    map: function(a) {
      return this.pushStack(n.map(this, function(b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function() {
      return this.pushStack(e.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: g,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (e = arguments[h]))
        for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
    return g
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {
      throw new Error(a)
    },
    noop: function() {},
    isFunction: function(a) {
      return "function" === n.type(a)
    },
    isArray: Array.isArray || function(a) {
      return "array" === n.type(a)
    },
    isWindow: function(a) {
      return null != a && a == a.window
    },
    isNumeric: function(a) {
      var b = a && a.toString();
      return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
    },
    isEmptyObject: function(a) {
      var b;
      for (b in a) return !1;
      return !0
    },
    isPlainObject: function(a) {
      var b;
      if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
      try {
        if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
      } catch (c) {
        return !1
      }
      if (!l.ownFirst)
        for (b in a) return k.call(a, b);
      for (b in a);
      return void 0 === b || k.call(a, b)
    },
    type: function(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
    },
    globalEval: function(b) {
      b && n.trim(b) && (a.execScript || function(b) {
        a.eval.call(a, b)
      })(b)
    },
    camelCase: function(a) {
      return a.replace(p, "ms-").replace(q, r)
    },
    nodeName: function(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function(a, b) {
      var c, d = 0;
      if (s(a)) {
        for (c = a.length; c > d; d++)
          if (b.call(a[d], d, a[d]) === !1) break
      } else
        for (d in a)
          if (b.call(a[d], d, a[d]) === !1) break;
      return a
    },
    trim: function(a) {
      return null == a ? "" : (a + "").replace(o, "")
    },
    makeArray: function(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
    },
    inArray: function(a, b, c) {
      var d;
      if (b) {
        if (h) return h.call(b, a, c);
        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
          if (c in b && b[c] === a) return c
      }
      return -1
    },
    merge: function(a, b) {
      var c = +b.length,
        d = 0,
        e = a.length;
      while (c > d) a[e++] = b[d++];
      if (c !== c)
        while (void 0 !== b[d]) a[e++] = b[d++];
      return a.length = e, a
    },
    grep: function(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    },
    map: function(a, b, c) {
      var d, e, g = 0,
        h = [];
      if (s(a))
        for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
      else
        for (g in a) e = b(a[g], g, c), null != e && h.push(e);
      return f.apply([], h)
    },
    guid: 1,
    proxy: function(a, b) {
      var c, d, f;
      return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
        return a.apply(b || this, c.concat(e.call(arguments)))
      }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
    },
    now: function() {
      return +new Date
    },
    support: l
  }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
    i["[object " + b + "]"] = b.toLowerCase()
  });

  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }
  var t = function(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function(a, b) {
        return a === b && (l = !0), 0
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
          if (a[c] === b) return c;
        return -1
      },
      K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
      O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function(a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
      },
      da = function() {
        m()
      };
    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
    } catch (ea) {
      H = {
        apply: E.length ? function(a, b) {
          G.apply(a, I.call(b))
        } : function(a, b) {
          var c = a.length,
            d = 0;
          while (a[c++] = b[d++]);
          a.length = c - 1
        }
      }
    }

    function fa(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a)))
          if (f = o[1]) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
          } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
            while (h--) r[h] = l + " " + qa(r[h]);
            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
          }
          if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d
          } catch (y) {} finally {
            k === u && b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e)
    }

    function ga() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }
      return b
    }

    function ha(a) {
      return a[u] = !0, a
    }

    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function ja(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b
    }

    function ka(a, b) {
      var c = b && a,
        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c)
        while (c = c.nextSibling)
          if (c === b) return -1;
      return a ? 1 : -1
    }

    function la(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function ma(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function na(a) {
      return ha(function(b) {
        return b = +b, ha(function(c, d) {
          var e, f = a([], c.length, b),
            g = f.length;
          while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a
    }
    c = fa.support = {}, f = fa.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, m = fa.setDocument = function(a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ia(function(a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
      }), c.getById ? (d.find.ID = function(a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c ? [c] : []
        }
      }, d.filter.ID = function(a) {
        var b = a.replace(ba, ca);
        return function(a) {
          return a.getAttribute("id") === b
        }
      }) : (delete d.find.ID, d.filter.ID = function(a) {
        var b = a.replace(ba, ca);
        return function(a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
      } : function(a, b) {
        var c, d = [],
          e = 0,
          f = b.getElementsByTagName(a);
        if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
      }), ia(function(a) {
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function(a, b) {
        if (b)
          while (b = b.parentNode)
            if (b === a) return !0;
        return !1
      }, B = b ? function(a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
      } : function(a, b) {
        if (a === b) return l = !0, 0;
        var c, d = 0,
          e = a.parentNode,
          f = b.parentNode,
          g = [a],
          h = [b];
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return ka(a, b);
        c = a;
        while (c = c.parentNode) g.unshift(c);
        c = b;
        while (c = c.parentNode) h.unshift(c);
        while (g[d] === h[d]) d++;
        return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
      }, n) : n
    }, fa.matches = function(a, b) {
      return fa(a, null, null, b)
    }, fa.matchesSelector = function(a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
      } catch (e) {}
      return fa(b, n, null, [a]).length > 0
    }, fa.contains = function(a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b)
    }, fa.attr = function(a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
        f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    }, fa.error = function(a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, fa.uniqueSort = function(a) {
      var b, d = [],
        e = 0,
        f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));
        while (e--) a.splice(d[e], 1)
      }
      return k = null, a
    }, e = fa.getText = function(a) {
      var b, c = "",
        d = 0,
        f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
        } else if (3 === f || 4 === f) return a.nodeValue
      } else
        while (b = a[d++]) c += e(b);
      return c
    }, d = fa.selectors = {
      cacheLength: 50,
      createPseudo: ha,
      match: W,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        },
        CHILD: function(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
        },
        PSEUDO: function(a) {
          var b, c = !a[6] && a[2];
          return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function(a) {
          var b = a.replace(ba, ca).toLowerCase();
          return "*" === a ? function() {
            return !0
          } : function(a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function(a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
          })
        },
        ATTR: function(a, b, c) {
          return function(d) {
            var e = fa.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
          }
        },
        CHILD: function(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
            g = "last" !== a.slice(-4),
            h = "of-type" === b;
          return 1 === d && 0 === e ? function(a) {
            return !!a.parentNode
          } : function(b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
              q = b.parentNode,
              r = h && b.nodeName.toLowerCase(),
              s = !i && !h,
              t = !1;
            if (q) {
              if (f) {
                while (p) {
                  m = b;
                  while (m = m[p])
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];
                    break
                  }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                  if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              return t -= e, t === d || t % d === 0 && t / d >= 0
            }
          }
        },
        PSEUDO: function(a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
            var d, f = e(a, b),
              g = f.length;
            while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
          }) : function(a) {
            return e(a, 0, c)
          }) : e
        }
      },
      pseudos: {
        not: ha(function(a) {
          var b = [],
            c = [],
            d = h(a.replace(Q, "$1"));
          return d[u] ? ha(function(a, b, c, e) {
            var f, g = d(a, null, e, []),
              h = a.length;
            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function(a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
          }
        }),
        has: ha(function(a) {
          return function(b) {
            return fa(a, b).length > 0
          }
        }),
        contains: ha(function(a) {
          return a = a.replace(ba, ca),
            function(b) {
              return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
            }
        }),
        lang: ha(function(a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
            function(b) {
              var c;
              do
                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
              return !1
            }
        }),
        target: function(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        },
        root: function(a) {
          return a === o
        },
        focus: function(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },
        enabled: function(a) {
          return a.disabled === !1
        },
        disabled: function(a) {
          return a.disabled === !0
        },
        checked: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        },
        selected: function(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        },
        empty: function(a) {
          for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType < 6) return !1;
          return !0
        },
        parent: function(a) {
          return !d.pseudos.empty(a)
        },
        header: function(a) {
          return Y.test(a.nodeName)
        },
        input: function(a) {
          return X.test(a.nodeName)
        },
        button: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        },
        text: function(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },
        first: na(function() {
          return [0]
        }),
        last: na(function(a, b) {
          return [b - 1]
        }),
        eq: na(function(a, b, c) {
          return [0 > c ? c + b : c]
        }),
        even: na(function(a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);
          return a
        }),
        odd: na(function(a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);
          return a
        }),
        lt: na(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
          return a
        }),
        gt: na(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
          return a
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = la(b);
    for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = ma(b);

    function pa() {}
    pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
      var c, e, f, g, h, i, j, k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(Q, " ")
        }), h = h.slice(c.length));
        for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));
        if (!c) break
      }
      return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
    };

    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d
    }

    function ra(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first ? function(b, c, f) {
        while (b = b[d])
          if (1 === b.nodeType || e) return a(b, c, f)
      } : function(b, c, g) {
        var h, i, j, k = [w, f];
        if (g) {
          while (b = b[d])
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
        } else
          while (b = b[d])
            if (1 === b.nodeType || e) {
              if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
              if (i[d] = k, k[2] = a(b, c, g)) return !0
            }
      }
    }

    function sa(a) {
      return a.length > 1 ? function(b, c, d) {
        var e = a.length;
        while (e--)
          if (!a[e](b, c, d)) return !1;
        return !0
      } : a[0]
    }

    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
      return c
    }

    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      return g
    }

    function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
        var j, k, l, m = [],
          n = [],
          o = g.length,
          p = f || ta(b || "*", h.nodeType ? [h] : h, []),
          q = !a || !f && b ? p : ua(p, m, a, h, i),
          r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;
          while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)(l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i)
            }
            k = r.length;
            while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
      })
    }

    function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
          return a === b
        }, h, !0), l = ra(function(a) {
          return J(b, a) > -1
        }, h, !0), m = [function(a, c, d) {
          var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
          return b = null, e
        }]; f > i; i++)
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
        else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++)
              if (d.relative[a[e].type]) break;
            return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
          }
          m.push(c)
        } return sa(m)
    }

    function xa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function(f, g, h, i, k) {
          var l, o, q, r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;
          for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
            if (e && l) {
              o = 0, g || l.ownerDocument === n || (m(l), h = !p);
              while (q = a[o++])
                if (q(l, g || n, h)) {
                  i.push(l);
                  break
                } k && (w = y)
            }
            c && ((l = !q && l) && r--, f && t.push(l))
          }
          if (r += s, c && s !== r) {
            o = 0;
            while (q = b[o++]) q(t, u, g, h);
            if (f) {
              if (r > 0)
                while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ua(u)
            }
            H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
          }
          return k && (w = y, j = v), t
        };
      return c ? ha(f) : f
    }
    return h = fa.compile = function(a, b) {
      var c, d = [],
        e = [],
        f = A[a + " "];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, xa(e, d)), f.selector = a
      }
      return f
    }, i = fa.select = function(a, b, e, f) {
      var i, j, k, l, m, n = "function" == typeof a && a,
        o = !f && g(a = n.selector || a);
      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length)
        }
        i = W.needsContext.test(a) ? 0 : j.length;
        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;
          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
            break
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"))
    }), ia(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || ja("type|href|height|width", function(a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), c.attributes && ia(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || ja("value", function(a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), ia(function(a) {
      return null == a.getAttribute("disabled")
    }) || ja(K, function(a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), fa
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = function(a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a)
        } return d
    },
    v = function(a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;

  function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function(a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType) return n.grep(a, function(a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a)
    }
    return n.grep(a, function(a) {
      return n.inArray(a, b) > -1 !== c
    })
  }
  n.filter = function(a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
      return 1 === a.nodeType
    }))
  }, n.fn.extend({
    find: function(a) {
      var b, c = [],
        d = this,
        e = d.length;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
        for (b = 0; e > b; b++)
          if (n.contains(d[b], this)) return !0
      }));
      for (b = 0; e > b; b++) n.find(a, d[b], c);
      return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
    },
    filter: function(a) {
      return this.pushStack(z(this, a || [], !1))
    },
    not: function(a) {
      return this.pushStack(z(this, a || [], !0))
    },
    is: function(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
    }
  });
  var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = n.fn.init = function(a, b, c) {
      var e, f;
      if (!a) return this;
      if (c = c || A, "string" == typeof a) {
        if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
        if (e[1]) {
          if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
            for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this
        }
        if (f = d.getElementById(e[2]), f && f.parentNode) {
          if (f.id !== e[2]) return A.find(a);
          this.length = 1, this[0] = f
        }
        return this.context = d, this.selector = a, this
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
  C.prototype = n.fn, A = n(d);
  var D = /^(?:parents|prev(?:Until|All))/,
    E = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  n.fn.extend({
    has: function(a) {
      var b, c = n(a, this),
        d = c.length;
      return this.filter(function() {
        for (b = 0; d > b; b++)
          if (n.contains(this, c[b])) return !0
      })
    },
    closest: function(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break
          } return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
    },
    index: function(a) {
      return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
    },
    addBack: function(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  });

  function F(a, b) {
    do a = a[b]; while (a && 1 !== a.nodeType);
    return a
  }
  n.each({
    parent: function(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    parents: function(a) {
      return u(a, "parentNode")
    },
    parentsUntil: function(a, b, c) {
      return u(a, "parentNode", c)
    },
    next: function(a) {
      return F(a, "nextSibling")
    },
    prev: function(a) {
      return F(a, "previousSibling")
    },
    nextAll: function(a) {
      return u(a, "nextSibling")
    },
    prevAll: function(a) {
      return u(a, "previousSibling")
    },
    nextUntil: function(a, b, c) {
      return u(a, "nextSibling", c)
    },
    prevUntil: function(a, b, c) {
      return u(a, "previousSibling", c)
    },
    siblings: function(a) {
      return v((a.parentNode || {}).firstChild, a)
    },
    children: function(a) {
      return v(a.firstChild)
    },
    contents: function(a) {
      return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
    }
  }, function(a, b) {
    n.fn[a] = function(c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
    }
  });
  var G = /\S+/g;

  function H(a) {
    var b = {};
    return n.each(a.match(G) || [], function(a, c) {
      b[c] = !0
    }), b
  }
  n.Callbacks = function(a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);
    var b, c, d, e, f = [],
      g = [],
      h = -1,
      i = function() {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
        }
        a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
      },
      j = {
        add: function() {
          return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
            n.each(b, function(b, c) {
              n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
            })
          }(arguments), c && !b && i()), this
        },
        remove: function() {
          return n.each(arguments, function(a, b) {
            var c;
            while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
          }), this
        },
        has: function(a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0
        },
        empty: function() {
          return f && (f = []), this
        },
        disable: function() {
          return e = g = [], f = c = "", this
        },
        disabled: function() {
          return !f
        },
        lock: function() {
          return e = !0, c || j.disable(), this
        },
        locked: function() {
          return !!e
        },
        fireWith: function(a, c) {
          return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
        },
        fire: function() {
          return j.fireWith(this, arguments), this
        },
        fired: function() {
          return !!d
        }
      };
    return j
  }, n.extend({
    Deferred: function(a) {
      var b = [
          ["resolve", "done", n.Callbacks("once memory"), "resolved"],
          ["reject", "fail", n.Callbacks("once memory"), "rejected"],
          ["notify", "progress", n.Callbacks("memory")]
        ],
        c = "pending",
        d = {
          state: function() {
            return c
          },
          always: function() {
            return e.done(arguments).fail(arguments), this
          },
          then: function() {
            var a = arguments;
            return n.Deferred(function(c) {
              n.each(b, function(b, f) {
                var g = n.isFunction(a[b]) && a[b];
                e[f[1]](function() {
                  var a = g && g.apply(this, arguments);
                  a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                })
              }), a = null
            }).promise()
          },
          promise: function(a) {
            return null != a ? n.extend(a, d) : d
          }
        },
        e = {};
      return d.pipe = d.then, n.each(b, function(a, f) {
        var g = f[2],
          h = f[3];
        d[f[1]] = g.add, h && g.add(function() {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function(a) {
      var b = 0,
        c = e.call(arguments),
        d = c.length,
        f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
        g = 1 === f ? a : n.Deferred(),
        h = function(a, b, c) {
          return function(d) {
            b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
          }
        },
        i, j, k;
      if (d > 1)
        for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      return f || g.resolveWith(k, c), g.promise()
    }
  });
  var I;
  n.fn.ready = function(a) {
    return n.ready.promise().done(a), this
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(a) {
      a ? n.readyWait++ : n.ready(!0)
    },
    ready: function(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
    }
  });

  function J() {
    d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
  }

  function K() {
    (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
  }
  n.ready.promise = function(b) {
    if (!I)
      if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
      else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
    else {
      d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
      var c = !1;
      try {
        c = null == a.frameElement && d.documentElement
      } catch (e) {}
      c && c.doScroll && ! function f() {
        if (!n.isReady) {
          try {
            c.doScroll("left")
          } catch (b) {
            return a.setTimeout(f, 50)
          }
          J(), n.ready()
        }
      }()
    }
    return I.promise(b)
  }, n.ready.promise();
  var L;
  for (L in n(l)) break;
  l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
      var a, b, c, e;
      c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
    }),
    function() {
      var a = d.createElement("div");
      l.deleteExpando = !0;
      try {
        delete a.test
      } catch (b) {
        l.deleteExpando = !1
      }
      a = null
    }();
  var M = function(a) {
      var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    },
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;

  function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();
      if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
        } catch (e) {}
        n.data(a, b, c)
      } else c = void 0;
    }
    return c
  }

  function Q(a) {
    var b;
    for (b in a)
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0
  }

  function R(a, b, d, e) {
    if (M(a)) {
      var f, g, h = n.expando,
        i = a.nodeType,
        j = i ? n.cache : a,
        k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
        toJSON: n.noop
      }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
    }
  }

  function S(a, b, c) {
    if (M(a)) {
      var d, e, f = a.nodeType,
        g = f ? n.cache : a,
        h = f ? a[n.expando] : n.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
          while (e--) delete d[b[e]];
          if (c ? !Q(d) : !n.isEmptyObject(d)) return
        }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
      }
    }
  }
  n.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      },
      hasData: function(a) {
        return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
      },
      data: function(a, b, c) {
        return R(a, b, c)
      },
      removeData: function(a, b) {
        return S(a, b)
      },
      _data: function(a, b, c) {
        return R(a, b, c, !0)
      },
      _removeData: function(a, b) {
        return S(a, b, !0)
      }
    }), n.fn.extend({
      data: function(a, b) {
        var c, d, e, f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
            c = g.length;
            while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
            n._data(f, "parsedAttrs", !0)
          }
          return e
        }
        return "object" == typeof a ? this.each(function() {
          n.data(this, a)
        }) : arguments.length > 1 ? this.each(function() {
          n.data(this, a, b)
        }) : f ? P(f, a, n.data(f, a)) : void 0
      },
      removeData: function(a) {
        return this.each(function() {
          n.removeData(this, a)
        })
      }
    }), n.extend({
      queue: function(a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
      },
      dequeue: function(a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function() {
            n.dequeue(a, b)
          };
        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
      },
      _queueHooks: function(a, b) {
        var c = b + "queueHooks";
        return n._data(a, c) || n._data(a, c, {
          empty: n.Callbacks("once memory").add(function() {
            n._removeData(a, b + "queue"), n._removeData(a, c)
          })
        })
      }
    }), n.fn.extend({
      queue: function(a, b) {
        var c = 2;
        return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
          var c = n.queue(this, a, b);
          n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
        })
      },
      dequeue: function(a) {
        return this.each(function() {
          n.dequeue(this, a)
        })
      },
      clearQueue: function(a) {
        return this.queue(a || "fx", [])
      },
      promise: function(a, b) {
        var c, d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function() {
            --d || e.resolveWith(f, [f])
          };
        "string" != typeof a && (b = a, a = void 0), a = a || "fx";
        while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b)
      }
    }),
    function() {
      var a;
      l.shrinkWrapBlocks = function() {
        if (null != a) return a;
        a = !1;
        var b, c, e;
        return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
      }
    }();
  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
    V = ["Top", "Right", "Bottom", "Left"],
    W = function(a, b) {
      return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    };

  function X(a, b, c, d) {
    var e, f = 1,
      g = 20,
      h = d ? function() {
        return d.cur()
      } : function() {
        return n.css(a, b, "")
      },
      i = h(),
      j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
      k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
    if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;
      do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
    }
    return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
  }
  var Y = function(a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) Y(a, b, h, c[h], !0, f, g)
      } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
          return j.call(n(a), c)
        })), b))
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
    Z = /^(?:checkbox|radio)$/i,
    $ = /<([\w:-]+)/,
    _ = /^$|\/(?:java|ecma)script/i,
    aa = /^\s+/,
    ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

  function ca(a) {
    var b = ba.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement)
      while (b.length) c.createElement(b.pop());
    return c
  }! function() {
    var a = d.createElement("div"),
      b = d.createDocumentFragment(),
      c = d.createElement("input");
    a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
  }();
  var da = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

  function ea(a, b) {
    var c, d, e = 0,
      f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
  }

  function fa(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
  }
  var ga = /<|&#?\w+;/,
    ha = /<tbody/i;

  function ia(a) {
    Z.test(a.type) && (a.defaultChecked = a.checked)
  }

  function ja(a, b, c, d, e) {
    for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
      if (g = a[r], g || 0 === g)
        if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
        else if (ga.test(g)) {
      i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
      while (f--) i = i.lastChild;
      if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
        g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
        while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
      }
      n.merge(q, i.childNodes), i.textContent = "";
      while (i.firstChild) i.removeChild(i.firstChild);
      i = p.lastChild
    } else q.push(b.createTextNode(g));
    i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
    while (g = q[r++])
      if (d && n.inArray(g, d) > -1) e && e.push(g);
      else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
      f = 0;
      while (g = i[f++]) _.test(g.type || "") && c.push(g)
    }
    return i = null, p
  }! function() {
    var b, c, e = d.createElement("div");
    for (b in {
        submit: !0,
        change: !0,
        focusin: !0
      }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
    e = null
  }();
  var ka = /^(?:input|select|textarea)$/i,
    la = /^key/,
    ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    na = /^(?:focusinfocus|focusoutblur)$/,
    oa = /^([^.]*)(?:\.(.+)|)/;

  function pa() {
    return !0
  }

  function qa() {
    return !1
  }

  function ra() {
    try {
      return d.activeElement
    } catch (a) {}
  }

  function sa(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);
      for (h in b) sa(a, h, c, d, b[h], f);
      return a
    }
    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
    else if (!e) return a;
    return 1 === f && (g = e, e = function(a) {
      return n().off(a), g.apply(this, arguments)
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
      n.event.add(this, b, e, d, c)
    })
  }
  n.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
      if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
          return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
        }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
        while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && n.expr.match.needsContext.test(e),
          namespace: p.join(".")
        }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
        a = null
      }
    },
    remove: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
      if (r && (k = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;
        while (j--)
          if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
            while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
            i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
          } else
            for (o in k) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
      }
    },
    trigger: function(b, c, e, f) {
      var g, h, i, j, l, m, o, p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
          m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
        }
        o = 0;
        while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
        if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
          m = e[h], m && (e[h] = null), n.event.triggered = q;
          try {
            e[q]()
          } catch (s) {}
          n.event.triggered = void 0, m && (e[h] = m)
        }
        return b.result
      }
    },
    dispatch: function(a) {
      a = n.event.fix(a);
      var b, c, d, f, g, h = [],
        i = e.call(arguments),
        j = (n._data(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result
      }
    },
    handlers: function(a, b) {
      var c, d, e, f, g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
            d.length && g.push({
              elem: i,
              handlers: d
            })
          } return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g
    },
    fix: function(a) {
      if (a[n.expando]) return a;
      var b, c, e, f = a.type,
        g = a,
        h = this.fixHooks[f];
      h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
      while (b--) c = e[b], a[c] = g[c];
      return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(a, b) {
        var c, e, f, g = b.button,
          h = b.fromElement;
        return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== ra() && this.focus) try {
            return this.focus(), !1
          } catch (a) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === ra() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
        },
        _default: function(a) {
          return n.nodeName(a.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    },
    simulate: function(a, b, c) {
      var d = n.extend(new n.Event, c, {
        type: a,
        isSimulated: !0
      });
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
    }
  }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c)
  } : function(a, b, c) {
    var d = "on" + b;
    a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
  }, n.Event = function(a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
  }, n.Event.prototype = {
    constructor: n.Event,
    isDefaultPrevented: qa,
    isPropagationStopped: qa,
    isImmediatePropagationStopped: qa,
    preventDefault: function() {
      var a = this.originalEvent;
      this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
    },
    stopPropagation: function() {
      var a = this.originalEvent;
      this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {
        var c, d = this,
          e = a.relatedTarget,
          f = a.handleObj;
        return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), l.submit || (n.event.special.submit = {
    setup: function() {
      return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
        var b = a.target,
          c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
        c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
          a._submitBubble = !0
        }), n._data(c, "submit", !0))
      })
    },
    postDispatch: function(a) {
      a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
    },
    teardown: function() {
      return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
    }
  }), l.change || (n.event.special.change = {
    setup: function() {
      return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
        "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
      }), n.event.add(this, "click._change", function(a) {
        this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
      })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
        var b = a.target;
        ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
          !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
        }), n._data(b, "change", !0))
      })
    },
    handle: function(a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
    },
    teardown: function() {
      return n.event.remove(this, "._change"), !ka.test(this.nodeName)
    }
  }), l.focusin || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = function(a) {
      n.event.simulate(b, a.target, n.event.fix(a))
    };
    n.event.special[b] = {
      setup: function() {
        var d = this.ownerDocument || this,
          e = n._data(d, b);
        e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
      },
      teardown: function() {
        var d = this.ownerDocument || this,
          e = n._data(d, b) - 1;
        e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
      }
    }
  }), n.fn.extend({
    on: function(a, b, c, d) {
      return sa(this, a, b, c, d)
    },
    one: function(a, b, c, d) {
      return sa(this, a, b, c, d, 1)
    },
    off: function(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
        n.event.remove(this, a, c, b)
      })
    },
    trigger: function(a, b) {
      return this.each(function() {
        n.event.trigger(a, b, this)
      })
    },
    triggerHandler: function(a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0
    }
  });
  var ta = / jQuery\d+="(?:null|\d+)"/g,
    ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
    va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    wa = /<script|<style|<link/i,
    xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ya = /^true\/(.*)/,
    za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Aa = ca(d),
    Ba = Aa.appendChild(d.createElement("div"));

  function Ca(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }

  function Da(a) {
    return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
  }

  function Ea(a) {
    var b = ya.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function Fa(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c, d, e, f = n._data(a),
        g = n._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, g.events = {};
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
      }
      g.data && (g.data = n.extend({}, g.data))
    }
  }

  function Ga(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
        e = n._data(b);
        for (d in e.events) n.removeEvent(b, d, e.handle);
        b.removeAttribute(n.expando)
      }
      "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }
  }

  function Ha(a, b, c, d) {
    b = f.apply([], b);
    var e, g, h, i, j, k, m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
      var f = a.eq(e);
      r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
    });
    if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
      for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
      if (h)
        for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
      k = e = null
    }
    return a
  }

  function Ia(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
    return a
  }
  n.extend({
    htmlPrefilter: function(a) {
      return a.replace(va, "<$1></$2>")
    },
    clone: function(a, b, c) {
      var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
      if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
        for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
      if (b)
        if (c)
          for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
        else Fa(a, f);
      return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
    },
    cleanData: function(a, b) {
      for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
        if ((b || M(d)) && (f = d[i], g = f && j[f])) {
          if (g.events)
            for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
        }
    }
  }), n.fn.extend({
    domManip: Ha,
    detach: function(a) {
      return Ia(this, a, !0)
    },
    remove: function(a) {
      return Ia(this, a)
    },
    text: function(a) {
      return Y(this, function(a) {
        return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
      }, null, a, arguments.length)
    },
    append: function() {
      return Ha(this, arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function() {
      return Ha(this, arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function() {
      return Ha(this, arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function() {
      return Ha(this, arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    empty: function() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && n.cleanData(ea(a, !1));
        while (a.firstChild) a.removeChild(a.firstChild);
        a.options && n.nodeName(a, "select") && (a.options.length = 0)
      }
      return this
    },
    clone: function(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
        return n.clone(this, a, b)
      })
    },
    html: function(a) {
      return Y(this, function(a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
        if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);
          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function() {
      var a = [];
      return Ha(this, arguments, function(b) {
        var c = this.parentNode;
        n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
      }, a)
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    n.fn[a] = function(a) {
      for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
      return this.pushStack(e)
    }
  });
  var Ja, Ka = {
    HTML: "block",
    BODY: "block"
  };

  function La(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
      d = n.css(c[0], "display");
    return c.detach(), d
  }

  function Ma(a) {
    var b = d,
      c = Ka[a];
    return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
  }
  var Na = /^margin/,
    Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
    Pa = function(a, b, c, d) {
      var e, f, g = {};
      for (f in b) g[f] = a.style[f], a.style[f] = b[f];
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e
    },
    Qa = d.documentElement;
  ! function() {
    var b, c, e, f, g, h, i = d.createElement("div"),
      j = d.createElement("div");
    if (j.style) {
      j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
        reliableHiddenOffsets: function() {
          return null == b && k(), f
        },
        boxSizingReliable: function() {
          return null == b && k(), e
        },
        pixelMarginRight: function() {
          return null == b && k(), c
        },
        pixelPosition: function() {
          return null == b && k(), b
        },
        reliableMarginRight: function() {
          return null == b && k(), g
        },
        reliableMarginLeft: function() {
          return null == b && k(), h
        }
      });

      function k() {
        var k, l, m = d.documentElement;
        m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
          width: "4px"
        }).width, j.style.marginRight = "50%", c = "4px" === (l || {
          marginRight: "4px"
        }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
      }
    }
  }();
  var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Ra = function(b) {
    var c = b.ownerDocument.defaultView;
    return c && c.opener || (c = a), c.getComputedStyle(b)
  }, Sa = function(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
  }) : Qa.currentStyle && (Ra = function(a) {
    return a.currentStyle
  }, Sa = function(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
  });

  function Ua(a, b) {
    return {
      get: function() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }
  var Va = /alpha\([^)]*\)/i,
    Wa = /opacity\s*=\s*([^)]*)/i,
    Xa = /^(none|table(?!-c[ea]).+)/,
    Ya = new RegExp("^(" + T + ")(.*)$", "i"),
    Za = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    $a = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    _a = ["Webkit", "O", "Moz", "ms"],
    ab = d.createElement("div").style;

  function bb(a) {
    if (a in ab) return a;
    var b = a.charAt(0).toUpperCase() + a.slice(1),
      c = _a.length;
    while (c--)
      if (a = _a[c] + b, a in ab) return a
  }

  function cb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a
  }

  function db(a, b, c) {
    var d = Ya.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }

  function eb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
    return g
  }

  function fb(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ra(a),
      g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
      d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
    }
    return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {
          if (b) {
            var c = Sa(a, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": l.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = n.camelCase(b),
          i = a.style;
        if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c
        } catch (j) {}
      }
    },
    css: function(a, b, c, d) {
      var e, f, g, h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
    }
  }), n.each(["height", "width"], function(a, b) {
    n.cssHooks[b] = {
      get: function(a, c, d) {
        return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
          return fb(a, b, d)
        }) : fb(a, b, d) : void 0
      },
      set: function(a, c, d) {
        var e = d && Ra(a);
        return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
      }
    }
  }), l.opacity || (n.cssHooks.opacity = {
    get: function(a, b) {
      return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
    },
    set: function(a, b) {
      var c = a.style,
        d = a.currentStyle,
        e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
        f = d && d.filter || c.filter || "";
      c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
    }
  }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
    return b ? Pa(a, {
      display: "inline-block"
    }, Sa, [a, "marginRight"]) : void 0
  }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
    return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
      marginLeft: 0
    }, function() {
      return a.getBoundingClientRect().left
    }) : 0)) + "px" : void 0
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(a, b) {
    n.cssHooks[a + b] = {
      expand: function(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, Na.test(a) || (n.cssHooks[a + b].set = db)
  }), n.fn.extend({
    css: function(a, b) {
      return Y(this, function(a, b, c) {
        var d, e, f = {},
          g = 0;
        if (n.isArray(b)) {
          for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
      }, a, b, arguments.length > 1)
    },
    show: function() {
      return cb(this, !0)
    },
    hide: function() {
      return cb(this)
    },
    toggle: function(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
        W(this) ? n(this).show() : n(this).hide()
      })
    }
  });

  function gb(a, b, c, d, e) {
    return new gb.prototype.init(a, b, c, d, e)
  }
  n.Tween = gb, gb.prototype = {
    constructor: gb,
    init: function(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
    },
    cur: function() {
      var a = gb.propHooks[this.prop];
      return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
    },
    run: function(a) {
      var b, c = gb.propHooks[this.prop];
      return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
    }
  }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
    _default: {
      get: function(a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
      },
      set: function(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
      }
    }
  }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
    set: function(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, n.easing = {
    linear: function(a) {
      return a
    },
    swing: function(a) {
      return .5 - Math.cos(a * Math.PI) / 2
    },
    _default: "swing"
  }, n.fx = gb.prototype.init, n.fx.step = {};
  var hb, ib, jb = /^(?:toggle|show|hide)$/,
    kb = /queueHooks$/;

  function lb() {
    return a.setTimeout(function() {
      hb = void 0
    }), hb = n.now()
  }

  function mb(a, b) {
    var c, d = {
        height: a
      },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
    return b && (d.opacity = d.width = a), d
  }

  function nb(a, b, c) {
    for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
      if (d = e[f].call(c, b, a)) return d
  }

  function ob(a, b, c) {
    var d, e, f, g, h, i, j, k, m = this,
      o = {},
      p = a.style,
      q = a.nodeType && W(a),
      r = n._data(a, "fxshow");
    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
      h.unqueued || i()
    }), h.unqueued++, m.always(function() {
      m.always(function() {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
    }));
    for (d in b)
      if (e = b[d], jb.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0
        }
        o[d] = r && r[d] || n.style(a, d)
      } else j = void 0;
    if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
    else {
      r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
        n(a).hide()
      }), m.done(function() {
        var b;
        n._removeData(a, "fxshow");
        for (b in o) n.style(a, b, o[b])
      });
      for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }

  function pb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f) c in a || (a[c] = f[c], b[c] = e)
      } else b[d] = e
  }

  function qb(a, b, c) {
    var d, e, f = 0,
      g = qb.prefilters.length,
      h = n.Deferred().always(function() {
        delete i.elem
      }),
      i = function() {
        if (e) return !1;
        for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, {
          specialEasing: {},
          easing: n.easing._default
        }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: hb || lb(),
        duration: c.duration,
        tweens: [],
        createTween: function(b, c) {
          var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d
        },
        stop: function(b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
        }
      }),
      k = j.props;
    for (pb(k, j.opts.specialEasing); g > f; f++)
      if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }
  n.Animation = n.extend(qb, {
      tweeners: {
        "*": [function(a, b) {
          var c = this.createTween(a, b);
          return X(c.elem, a, U.exec(b), c), c
        }]
      },
      tweener: function(a, b) {
        n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
        for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
      },
      prefilters: [ob],
      prefilter: function(a, b) {
        b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
      }
    }), n.speed = function(a, b, c) {
      var d = a && "object" == typeof a ? n.extend({}, a) : {
        complete: c || !c && b || n.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !n.isFunction(b) && b
      };
      return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
        n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
      }, d
    }, n.fn.extend({
      fadeTo: function(a, b, c, d) {
        return this.filter(W).css("opacity", 0).show().end().animate({
          opacity: b
        }, a, c, d)
      },
      animate: function(a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function() {
            var b = qb(this, n.extend({}, a), f);
            (e || n._data(this, "finish")) && b.stop(!0)
          };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function(a, b, c) {
        var d = function(a) {
          var b = a.stop;
          delete a.stop, b(c)
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
          var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = n._data(this);
          if (e) g[e] && g[e].stop && d(g[e]);
          else
            for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
          for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          !b && c || n.dequeue(this, a)
        })
      },
      finish: function(a) {
        return a !== !1 && (a = a || "fx"), this.each(function() {
          var b, c = n._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;
          for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish
        })
      }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
      var c = n.fn[b];
      n.fn[b] = function(a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
      }
    }), n.each({
      slideDown: mb("show"),
      slideUp: mb("hide"),
      slideToggle: mb("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(a, b) {
      n.fn[a] = function(a, c, d) {
        return this.animate(b, a, c, d)
      }
    }), n.timers = [], n.fx.tick = function() {
      var a, b = n.timers,
        c = 0;
      for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
      b.length || n.fx.stop(), hb = void 0
    }, n.fx.timer = function(a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
      ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
      a.clearInterval(ib), ib = null
    }, n.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, n.fn.delay = function(b, c) {
      return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
        var e = a.setTimeout(c, b);
        d.stop = function() {
          a.clearTimeout(e)
        }
      })
    },
    function() {
      var a, b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));
      c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
    }();
  var rb = /\r/g,
    sb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function(a) {
      var b, c, d, e = this[0]; {
        if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
            return null == a ? "" : a + ""
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function(a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
        }
      },
      select: {
        get: function(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;
              g.push(b)
            } return g
        },
        set: function(a, b) {
          var c, d, e = a.options,
            f = n.makeArray(b),
            g = e.length;
          while (g--)
            if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
              d.selected = c = !0
            } catch (h) {
              d.scrollHeight
            } else d.selected = !1;
          return c || (a.selectedIndex = -1), e
        }
      }
    }
  }), n.each(["radio", "checkbox"], function() {
    n.valHooks[this] = {
      set: function(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
      }
    }, l.checkOn || (n.valHooks[this].get = function(a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  });
  var tb, ub, vb = n.expr.attrHandle,
    wb = /^(?:checked|selected)$/i,
    xb = l.getSetAttribute,
    yb = l.input;
  n.fn.extend({
    attr: function(a, b) {
      return Y(this, n.attr, a, b, arguments.length > 1)
    },
    removeAttr: function(a) {
      return this.each(function() {
        n.removeAttr(this, a)
      })
    }
  }), n.extend({
    attr: function(a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
    },
    attrHooks: {
      type: {
        set: function(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    },
    removeAttr: function(a, b) {
      var c, d, e = 0,
        f = b && b.match(G);
      if (f && 1 === a.nodeType)
        while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
    }
  }), ub = {
    set: function(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = vb[b] || n.find.attr;
    yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
      var e, f;
      return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
    } : vb[b] = function(a, b, c) {
      return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
    }
  }), yb && xb || (n.attrHooks.value = {
    set: function(a, b, c) {
      return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
    }
  }), xb || (tb = {
    set: function(a, b, c) {
      var d = a.getAttributeNode(c);
      return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
    }
  }, vb.id = vb.name = vb.coords = function(a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
  }, n.valHooks.button = {
    get: function(a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value : void 0
    },
    set: tb.set
  }, n.attrHooks.contenteditable = {
    set: function(a, b, c) {
      tb.set(a, "" === b ? !1 : b, c)
    }
  }, n.each(["width", "height"], function(a, b) {
    n.attrHooks[b] = {
      set: function(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
      }
    }
  })), l.style || (n.attrHooks.style = {
    get: function(a) {
      return a.style.cssText || void 0
    },
    set: function(a, b) {
      return a.style.cssText = b + ""
    }
  });
  var zb = /^(?:input|select|textarea|button|object)$/i,
    Ab = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function(a, b) {
      return Y(this, n.prop, a, b, arguments.length > 1)
    },
    removeProp: function(a) {
      return a = n.propFix[a] || a, this.each(function() {
        try {
          this[a] = void 0, delete this[a]
        } catch (b) {}
      })
    }
  }), n.extend({
    prop: function(a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
    },
    propHooks: {
      tabIndex: {
        get: function(a) {
          var b = n.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
    n.propHooks[b] = {
      get: function(a) {
        return a.getAttribute(b, 4)
      }
    }
  }), l.optSelected || (n.propHooks.selected = {
    get: function(a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
    },
    set: function(a) {
      var b = a.parentNode;
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    n.propFix[this.toLowerCase()] = this
  }), l.enctype || (n.propFix.enctype = "encoding");
  var Bb = /[\t\r\n\f]/g;

  function Cb(a) {
    return n.attr(a, "class") || ""
  }
  n.fn.extend({
    addClass: function(a) {
      var b, c, d, e, f, g, h, i = 0;
      if (n.isFunction(a)) return this.each(function(b) {
        n(this).addClass(a.call(this, b, Cb(this)))
      });
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while (c = this[i++])
          if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
            g = 0;
            while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            h = n.trim(d), e !== h && n.attr(c, "class", h)
          }
      }
      return this
    },
    removeClass: function(a) {
      var b, c, d, e, f, g, h, i = 0;
      if (n.isFunction(a)) return this.each(function(b) {
        n(this).removeClass(a.call(this, b, Cb(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while (c = this[i++])
          if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
            g = 0;
            while (f = b[g++])
              while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
            h = n.trim(d), e !== h && n.attr(c, "class", h)
          }
      }
      return this
    },
    toggleClass: function(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
        n(this).toggleClass(a.call(this, c, Cb(this), b), b)
      }) : this.each(function() {
        var b, d, e, f;
        if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];
          while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
        } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
      })
    },
    hasClass: function(a) {
      var b, c, d = 0;
      b = " " + a + " ";
      while (c = this[d++])
        if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
      return !1
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    n.fn[b] = function(a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), n.fn.extend({
    hover: function(a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    }
  });
  var Db = a.location,
    Eb = n.now(),
    Fb = /\?/,
    Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  n.parseJSON = function(b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c, d = null,
      e = n.trim(b + "");
    return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
    })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
  }, n.parseXML = function(b) {
    var c, d;
    if (!b || "string" != typeof b) return null;
    try {
      a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
    } catch (e) {
      c = void 0
    }
    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
  };
  var Hb = /#.*$/,
    Ib = /([?&])_=[^&]*/,
    Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Lb = /^(?:GET|HEAD)$/,
    Mb = /^\/\//,
    Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ob = {},
    Pb = {},
    Qb = "*/".concat("*"),
    Rb = Db.href,
    Sb = Nb.exec(Rb.toLowerCase()) || [];

  function Tb(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function Ub(a, b, c, d) {
    var e = {},
      f = a === Pb;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function(a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function Vb(a, b) {
    var c, d, e = n.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && n.extend(!0, a, c), a
  }

  function Wb(a, b, c) {
    var d, e, f, g, h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break
        } if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break
        }
        d || (d = g)
      }
      f = f || d
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function Xb(a, b, c, d) {
    var e, f, g, h, i, j = {},
      k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)
        for (e in j)
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break
          } if (g !== !0)
        if (g && a["throws"]) b = g(b);
        else try {
          b = g(b)
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          }
        }
    }
    return {
      state: "success",
      data: b
    }
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Rb,
      type: "GET",
      isLocal: Kb.test(Sb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Qb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
    },
    ajaxPrefilter: Tb(Ob),
    ajaxTransport: Tb(Pb),
    ajax: function(b, c) {
      "object" == typeof b && (c = b, b = void 0), c = c || {};
      var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
        m = l.context || l,
        o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
        p = n.Deferred(),
        q = n.Callbacks("once memory"),
        r = l.statusCode || {},
        s = {},
        t = {},
        u = 0,
        v = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function(a) {
            var b;
            if (2 === u) {
              if (!k) {
                k = {};
                while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
              }
              b = k[a.toLowerCase()]
            }
            return null == b ? null : b
          },
          getAllResponseHeaders: function() {
            return 2 === u ? g : null
          },
          setRequestHeader: function(a, b) {
            var c = a.toLowerCase();
            return u || (a = t[c] = t[c] || a, s[a] = b), this
          },
          overrideMimeType: function(a) {
            return u || (l.mimeType = a), this
          },
          statusCode: function(a) {
            var b;
            if (a)
              if (2 > u)
                for (b in a) r[b] = [r[b], a[b]];
              else w.always(a[w.status]);
            return this
          },
          abort: function(a) {
            var b = a || v;
            return j && j.abort(b), y(0, b), this
          }
        };
      if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
      i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
      for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
      if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
      v = "abort";
      for (e in {
          success: 1,
          error: 1,
          complete: 1
        }) w[e](l[e]);
      if (j = Ub(Pb, l, c, w)) {
        if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
        l.async && l.timeout > 0 && (h = a.setTimeout(function() {
          w.abort("timeout")
        }, l.timeout));
        try {
          u = 1, j.send(s, y)
        } catch (x) {
          if (!(2 > u)) throw x;
          y(-1, x)
        }
      } else y(-1, "No Transport");

      function y(b, c, d, e) {
        var k, s, t, v, x, y = c;
        2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
      }
      return w
    },
    getJSON: function(a, b, c) {
      return n.get(a, b, c, "json")
    },
    getScript: function(a, b) {
      return n.get(a, void 0, b, "script")
    }
  }), n.each(["get", "post"], function(a, b) {
    n[b] = function(a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, n.isPlainObject(a) && a))
    }
  }), n._evalUrl = function(a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    })
  }, n.fn.extend({
    wrapAll: function(a) {
      if (n.isFunction(a)) return this.each(function(b) {
        n(this).wrapAll(a.call(this, b))
      });
      if (this[0]) {
        var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
          var a = this;
          while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
          return a
        }).append(this)
      }
      return this
    },
    wrapInner: function(a) {
      return n.isFunction(a) ? this.each(function(b) {
        n(this).wrapInner(a.call(this, b))
      }) : this.each(function() {
        var b = n(this),
          c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    },
    wrap: function(a) {
      var b = n.isFunction(a);
      return this.each(function(c) {
        n(this).wrapAll(b ? a.call(this, c) : a)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
      }).end()
    }
  });

  function Yb(a) {
    return a.style && a.style.display || n.css(a, "display")
  }

  function Zb(a) {
    if (!n.contains(a.ownerDocument || d, a)) return !0;
    while (a && 1 === a.nodeType) {
      if ("none" === Yb(a) || "hidden" === a.type) return !0;
      a = a.parentNode
    }
    return !1
  }
  n.expr.filters.hidden = function(a) {
    return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
  }, n.expr.filters.visible = function(a) {
    return !n.expr.filters.hidden(a)
  };
  var $b = /%20/g,
    _b = /\[\]$/,
    ac = /\r?\n/g,
    bc = /^(?:submit|button|image|reset|file)$/i,
    cc = /^(?:input|select|textarea|keygen)/i;

  function dc(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function(b, e) {
      c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
    });
    else if (c || "object" !== n.type(b)) d(a, b);
    else
      for (e in b) dc(a + "[" + e + "]", b[e], c, d)
  }
  n.param = function(a, b) {
    var c, d = [],
      e = function(a, b) {
        b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
      };
    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
      e(this.name, this.value)
    });
    else
      for (c in a) dc(c, a[c], b, e);
    return d.join("&").replace($b, "+")
  }, n.fn.extend({
    serialize: function() {
      return n.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this
      }).filter(function() {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
      }).map(function(a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
          return {
            name: b.name,
            value: a.replace(ac, "\r\n")
          }
        }) : {
          name: b.name,
          value: c.replace(ac, "\r\n")
        }
      }).get()
    }
  }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
    return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
  } : hc;
  var ec = 0,
    fc = {},
    gc = n.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function() {
    for (var a in fc) fc[a](void 0, !0)
  }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {
    if (!b.crossDomain || l.cors) {
      var c;
      return {
        send: function(d, e) {
          var f, g = b.xhr(),
            h = ++ec;
          if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
            for (f in b.xhrFields) g[f] = b.xhrFields[f];
          b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
          for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
          g.send(b.hasContent && b.data || null), c = function(a, d) {
            var f, i, j;
            if (c && (d || 4 === g.readyState))
              if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
              else {
                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                try {
                  i = g.statusText
                } catch (k) {
                  i = ""
                }
                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
              } j && e(f, i, j, g.getAllResponseHeaders())
          }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
        },
        abort: function() {
          c && c(void 0, !0)
        }
      }
    }
  });

  function hc() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {}
  }

  function ic() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP")
    } catch (b) {}
  }
  n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(a) {
        return n.globalEval(a), a
      }
    }
  }), n.ajaxPrefilter("script", function(a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
  }), n.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
      var b, c = d.head || n("head")[0] || d.documentElement;
      return {
        send: function(e, f) {
          b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
          }, c.insertBefore(b, c.firstChild)
        },
        abort: function() {
          b && b.onload(void 0, !0)
        }
      }
    }
  });
  var jc = [],
    kc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var a = jc.pop() || n.expando + "_" + Eb++;
      return this[a] = !0, a
    }
  }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
      return g || n.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
      g = arguments
    }, d.always(function() {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
    }), "script") : void 0
  }), n.parseHTML = function(a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || d;
    var e = x.exec(a),
      f = !c && [];
    return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
  };
  var lc = n.fn.load;
  n.fn.load = function(a, b, c) {
    if ("string" != typeof a && lc) return lc.apply(this, arguments);
    var d, e, f, g = this,
      h = a.indexOf(" ");
    return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function(a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
    }).always(c && function(a, b) {
      g.each(function() {
        c.apply(this, f || [a.responseText, b, a])
      })
    }), this
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
    n.fn[b] = function(a) {
      return this.on(b, a)
    }
  }), n.expr.filters.animated = function(a) {
    return n.grep(n.timers, function(b) {
      return a === b.elem
    }).length
  };

  function mc(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
  }
  n.offset = {
    setOffset: function(a, b, c) {
      var d, e, f, g, h, i, j, k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
    }
  }, n.fn.extend({
    offset: function(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function(b) {
        n.offset.setOffset(this, a, b)
      });
      var b, c, d = {
          top: 0,
          left: 0
        },
        e = this[0],
        f = e && e.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
      }) : d
    },
    position: function() {
      if (this[0]) {
        var a, b, c = {
            top: 0,
            left: 0
          },
          d = this[0];
        return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - c.top - n.css(d, "marginTop", !0),
          left: b.left - c.left - n.css(d, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        var a = this.offsetParent;
        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
        return a || Qa
      })
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(a, b) {
    var c = /Y/.test(b);
    n.fn[a] = function(d) {
      return Y(this, function(a, d, e) {
        var f = mc(a);
        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
      }, a, d, arguments.length, null)
    }
  }), n.each(["top", "left"], function(a, b) {
    n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
      return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
    })
  }), n.each({
    Height: "height",
    Width: "width"
  }, function(a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function(c, d) {
      n.fn[d] = function(d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
          g = c || (d === !0 || e === !0 ? "margin" : "border");
        return Y(this, function(b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), n.fn.extend({
    bind: function(a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function(a, b) {
      return this.off(a, null, b)
    },
    delegate: function(a, b, c, d) {
      return this.on(b, a, c, d)
    },
    undelegate: function(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  }), n.fn.size = function() {
    return this.length
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return n
  });
  var nc = a.jQuery,
    oc = a.$;
  return n.noConflict = function(b) {
    return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
  }, b || (a.jQuery = a.$ = n), n
});
$(function() {
  $('span.unicorn').each(function() {
    $(this).replaceWith('@');
  });
  $('a[href^="javascript:decryptUnicorn"]').each(function() {
    var emails = $(this).attr('href').match(/\((.*)\)/)[1];
    emails = emails.replace(/[a-z]/gi, function(s) {
      return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13))
    }).replace(/\|/g, '@');
    $(this).attr('href', 'mailto:' + emails);
  });
});
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});
  while (length--) {
    method = methods[length];
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

function setCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  var name_eq = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(name_eq) == 0) return c.substring(name_eq.length, c.length);
  }
  return null;
}
(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }
  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
}());
$.inview = function(el) {
  var element = el.get(0),
    bounds = element.getBoundingClientRect(),
    viewport = {};
  viewport.bottom = window.innerHeight || document.documentElement.clientHeight;
  viewport.right = window.innerWidth || document.documentElement.clientWidth;
  viewport.top = 0;
  viewport.left = 0;
  return bounds.right >= viewport.left && bounds.bottom >= viewport.top && bounds.left <= viewport.right && bounds.top <= viewport.bottom;
};
! function(t, e) {
  "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.Blazy = e()
}(this, function() {
  "use strict";

  function t(t) {
    var o = t._util;
    o.elements = v(t.options), o.count = o.elements.length, o.destroyed && (o.destroyed = !1, t.options.container && w(t.options.container, function(t) {
      h(t, "scroll", o.validateT)
    }), h(window, "resize", o.saveViewportOffsetT), h(window, "resize", o.validateT), h(window, "scroll", o.validateT)), w(o.elements, function(e) {
      if (!d(e, t.options.successClass)) {
        var o = u(e, "img");
        if (o) {
          var n = $(e),
            s = $(e).parent().width(),
            i = n.data("height") && n.data("width") ? s * (n.data("height") / n.data("width")) : .665 * n.data("width");
          $(e).height(i)
        }
      }
    }), e(t)
  }

  function e(t) {
    for (var e = t._util, n = 0; n < e.count; n++) {
      var s = e.elements[n];
      d(s, "preload") && (o(s, t.options) || d(s, t.options.successClass)) && (t.load(s), e.elements.splice(n, 1), e.count--, n--)
    }
    0 === e.count && t.destroy()
  }

  function o(t, e) {
    var o = t.getBoundingClientRect();
    if (e.container && T) {
      var s = t.closest(e.containerClass);
      if (s) {
        var i = s.getBoundingClientRect();
        if (n(i, C)) {
          var r = i.top - e.offset,
            a = i.right + e.offset,
            c = i.bottom + e.offset,
            l = i.left - e.offset,
            f = {
              top: r > C.top ? r : C.top,
              right: a < C.right ? a : C.right,
              bottom: c < C.bottom ? c : C.bottom,
              left: l > C.left ? l : C.left
            };
          return n(o, f)
        }
        return !1
      }
    }
    return n(o, C)
  }

  function n(t, e) {
    return t.right >= e.left && t.bottom >= e.top && t.left <= e.right && t.top <= e.bottom
  }

  function s(t, e, o) {
    if (!d(t, o.successClass) && (e || o.loadInvisible || t.offsetWidth > 0 && t.offsetHeight > 0)) {
      var n = l(t, b) || l(t, o.src);
      if (n) {
        var s = n.split(o.separator),
          c = s[E && s.length > 1 ? 1 : 0],
          f = l(t, o.srcset),
          v = u(t, "img"),
          m = t.parentNode,
          y = m && u(m, "picture");
        if (v || void 0 === t.src) {
          var C = new Image,
            T = function() {
              o.error && o.error(t, "invalid"), p(t, o.errorClass), g(C, "error", T), g(C, "load", D)
            },
            D = function() {
              v ? y || a(t, c, f) : t.style.backgroundImage = 'url("' + c + '")', i(t, o), g(C, "load", D), g(C, "error", T)
            };
          y && (C = t, w(m.getElementsByTagName("source"), function(t) {
            r(t, A, o.srcset)
          })), h(C, "error", T), h(C, "load", D), a(C, c, f)
        } else t.src = c, i(t, o)
      } else u(t, "video") ? (w(t.getElementsByTagName("source"), function(t) {
        r(t, k, o.src)
      }), t.load(), i(t, o)) : (o.error && o.error(t, "missing"), p(t, o.errorClass))
    }
  }

  function i(t, e) {
    p(t, e.successClass), e.success && e.success(t), f(t, e.src), f(t, e.srcset), w(e.breakpoints, function(e) {
      f(t, e.src)
    }), t.style.height = null, $(t).parents(".img-cell").addClass("loaded").find(".img-spinner").remove()
  }

  function r(t, e, o) {
    var n = l(t, o);
    n && (c(t, e, n), f(t, o))
  }

  function a(t, e, o) {
    o && c(t, A, o), t.src = e
  }

  function c(t, e, o) {
    t.setAttribute(e, o)
  }

  function l(t, e) {
    return t.getAttribute(e)
  }

  function f(t, e) {
    t.removeAttribute(e)
  }

  function u(t, e) {
    return t.nodeName.toLowerCase() === e
  }

  function d(t, e) {
    return (" " + t.className + " ").indexOf(" " + e + " ") !== -1
  }

  function p(t, e) {
    d(t, e) || (t.className += " " + e)
  }

  function v(t) {
    for (var e = [], o = t.root.querySelectorAll(t.selector), n = o.length; n--; e.unshift(o[n]));
    return e
  }

  function m(t) {
    C.bottom = (window.innerHeight || document.documentElement.clientHeight) + t, C.right = (window.innerWidth || document.documentElement.clientWidth) + t
  }

  function h(t, e, o) {
    t.attachEvent ? t.attachEvent && t.attachEvent("on" + e, o) : t.addEventListener(e, o, {
      capture: !1,
      passive: !0
    })
  }

  function g(t, e, o) {
    t.detachEvent ? t.detachEvent && t.detachEvent("on" + e, o) : t.removeEventListener(e, o, {
      capture: !1,
      passive: !0
    })
  }

  function w(t, e) {
    if (t && e)
      for (var o = t.length, n = 0; n < o && e(t[n], n) !== !1; n++);
  }

  function y(t, e, o) {
    var n = 0;
    return function() {
      var s = +new Date;
      s - n < e || (n = s, t.apply(o, arguments))
    }
  }
  var b, C, E, T, k = "src",
    A = "srcset";
  return function o(n) {
    if (!document.querySelectorAll) {
      var i = document.createStyleSheet();
      document.querySelectorAll = function(t, e, o, n, s) {
        for (s = document.all, e = [], t = t.replace(/\[for\b/gi, "[htmlFor").split(","), o = t.length; o--;) {
          for (i.addRule(t[o], "k:v"), n = s.length; n--;) s[n].currentStyle.k && e.push(s[n]);
          i.removeRule(0)
        }
        return e
      }
    }
    var r = this,
      a = r._util = {};
    a.elements = [], a.destroyed = !0, r.options = n || {}, r.options.error = r.options.error || !1, r.options.offset = r.options.offset || 100, r.options.root = r.options.root || document, r.options.success = r.options.success || !1, r.options.selector = r.options.selector || ".b-lazy", r.options.separator = r.options.separator || "|", r.options.containerClass = r.options.container, r.options.container = !!r.options.containerClass && document.querySelectorAll(r.options.containerClass), r.options.errorClass = r.options.errorClass || "b-error", r.options.breakpoints = r.options.breakpoints || !1, r.options.loadInvisible = r.options.loadInvisible || !0, r.options.successClass = r.options.successClass || "b-loaded", r.options.validateDelay = r.options.validateDelay || 25, r.options.saveViewportOffsetDelay = r.options.saveViewportOffsetDelay || 50, r.options.srcset = r.options.srcset || "data-srcset", r.options.src = b = r.options.src || "data-src", T = Element.prototype.closest, E = window.devicePixelRatio > 1, C = {}, C.top = 0 - r.options.offset, C.left = 0 - r.options.offset, r.revalidate = function() {
      t(r)
    }, r.load = function(t, e) {
      var o = this.options;
      t && void 0 === t.length ? s(t, e, o) : w(t, function(t) {
        s(t, e, o)
      })
    }, r.destroy = function() {
      var t = r._util;
      r.options.container && w(r.options.container, function(e) {
        g(e, "scroll", t.validateT)
      }), g(window, "scroll", t.validateT), g(window, "resize", t.validateT), g(window, "resize", t.saveViewportOffsetT), t.count = 0, t.elements.length = 0, t.destroyed = !0
    }, a.validateT = y(function() {
      e(r)
    }, r.options.validateDelay, r), a.saveViewportOffsetT = y(function() {
      m(r.options.offset)
    }, r.options.saveViewportOffsetDelay, r), m(r.options.offset), w(r.options.breakpoints, function(t) {
      if (t.width >= window.innerWidth) return b = t.src, !1
    }), setTimeout(function() {
      t(r)
    })
  }
});
"use strict";



function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

var isIosDevice =
  typeof window !== "undefined" &&
  window.navigator &&
  window.navigator.platform &&
  /iPad|iPhone|iPod|(iPad Simulator)|(iPhone Simulator)|(iPod Simulator)/.test(
    window.navigator.platform
  );
// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var firstTargetElement = null;
var allTargetElements = [];
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event;
  if (e.preventDefault) e.preventDefault();

  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
  // the responsiveness for some reason. Setting within a setTimeout fixes this.
  setTimeout(function() {
    // If previousBodyPaddingRight is already set, don't set it again.
    if (previousBodyPaddingRight === undefined) {
      var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
      var scrollBarGap =
        window.innerWidth - document.documentElement.clientWidth;

      if (_reserveScrollBarGap && scrollBarGap > 0) {
        previousBodyPaddingRight = document.body.style.paddingRight;
        document.body.style.paddingRight = scrollBarGap + "px";
      }
    }
    // If previousBodyOverflowSetting is already set, don't set it again.
    if (previousBodyOverflowSetting === undefined) {
      previousBodyOverflowSetting = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
  });
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
  // the responsiveness for some reason. Setting within a setTimeout fixes this.
  setTimeout(function() {
    if (previousBodyPaddingRight !== undefined) {
      document.body.style.paddingRight = previousBodyPaddingRight;

      // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
      // can be set again.
      previousBodyPaddingRight = undefined;
    }

    if (previousBodyOverflowSetting !== undefined) {
      document.body.style.overflow = previousBodyOverflowSetting;

      // Restore previousBodyOverflowSetting to undefined
      // so setOverflowHidden knows it can be set again.
      previousBodyOverflowSetting = undefined;
    }
  });
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(
  targetElement
) {
  return targetElement ?
    targetElement.scrollHeight - targetElement.scrollTop <=
    targetElement.clientHeight :
    false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the top of its scroll
    return preventDefault(event);
  }

  return true;
};

var disableBodyScroll = function disableBodyScroll(
  targetElement,
  options
) {
  if (isIosDevice) {
    // targetElement must be provided, and disableBodyScroll must not have been
    // called on this targetElement before.
    if (targetElement && !allTargetElements.includes(targetElement)) {
      allTargetElements = [].concat(_toConsumableArray(allTargetElements), [
        targetElement
      ]);

      targetElement.ontouchstart = function(event) {
        if (event.targetTouches.length === 1) {
          // detect single touch
          initialClientY = event.targetTouches[0].clientY;
        }
      };
      targetElement.ontouchmove = function(event) {
        if (event.targetTouches.length === 1) {
          // detect single touch
          handleScroll(event, targetElement);
        }
      };
    }
  } else {
    setOverflowHidden(options);

    if (!firstTargetElement) firstTargetElement = targetElement;
  }
};

var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all allTargetElements ontouchstart/ontouchmove handlers, and the references
    allTargetElements.forEach(function(targetElement) {
      targetElement.ontouchstart = null;
      targetElement.ontouchmove = null;
    });

    allTargetElements = [];

    // Reset initial clientY
    initialClientY = -1;
  } else {
    restoreOverflowSetting();

    firstTargetElement = null;
  }
};

var enableBodyScroll = function enableBodyScroll(
  targetElement
) {
  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    allTargetElements = allTargetElements.filter(function(element) {
      return element !== targetElement;
    });
  } else if (firstTargetElement === targetElement) {
    restoreOverflowSetting();

    firstTargetElement = null;
  }
};
/*! npm.im/object-fit-images 3.2.3 */
var objectFitImages = function() {
  "use strict";

  function t(t, e) {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E"
  }

  function e(t) {
    if (t.srcset && !m && window.picturefill) {
      var e = window.picturefill._;
      t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
        reselect: !0
      }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
        reselect: !0
      })), t.currentSrc = t[e.ns].curSrc || t.src
    }
  }

  function i(t) {
    for (var e, i = getComputedStyle(t).fontFamily, r = {}; null !== (e = l.exec(i));) r[e[1]] = e[2];
    return r
  }

  function r(e, i, r) {
    var n = t(i || 1, r || 0);
    p.call(e, "src") !== n && b.call(e, "src", n)
  }

  function n(t, e) {
    t.naturalWidth ? e(t) : setTimeout(n, 100, t, e)
  }

  function c(t) {
    var c = i(t),
      o = t[a];
    if (c["object-fit"] = c["object-fit"] || "fill", !o.img) {
      if ("fill" === c["object-fit"]) return;
      if (!o.skipTest && g && !c["object-position"]) return
    }
    if (!o.img) {
      o.img = new Image(t.width, t.height), o.img.srcset = p.call(t, "data-ofi-srcset") || t.srcset, o.img.src = p.call(t, "data-ofi-src") || t.src, b.call(t, "data-ofi-src", t.src), t.srcset && b.call(t, "data-ofi-srcset", t.srcset), r(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");
      try {
        s(t)
      } catch (t) {
        window.console && console.warn("https://bit.ly/ofi-old-browser")
      }
    }
    e(o.img), t.style.backgroundImage = 'url("' + (o.img.currentSrc || o.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = c["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(c["object-fit"]) ? n(o.img, function() {
      o.img.naturalWidth > t.width || o.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto"
    }) : t.style.backgroundSize = c["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), n(o.img, function(e) {
      r(t, e.naturalWidth, e.naturalHeight)
    })
  }

  function s(t) {
    var e = {
      get: function(e) {
        return t[a].img[e || "src"]
      },
      set: function(e, i) {
        return t[a].img[i || "src"] = e, b.call(t, "data-ofi-" + i, e), c(t), e
      }
    };
    Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", {
      get: function() {
        return e.get("currentSrc")
      }
    }), Object.defineProperty(t, "srcset", {
      get: function() {
        return e.get("srcset")
      },
      set: function(t) {
        return e.set(t, "srcset")
      }
    })
  }

  function o(t, e) {
    var i = !h && !t;
    if (e = e || {}, t = t || "img", f && !e.skipTest || !d) return !1;
    "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]);
    for (var r = 0; r < t.length; r++) t[r][a] = t[r][a] || {
      skipTest: e.skipTest
    }, c(t[r]);
    i && (document.body.addEventListener("load", function(t) {
      "IMG" === t.target.tagName && o(t.target, {
        skipTest: e.skipTest
      })
    }, !0), h = !0, t = "img"), e.watchMQ && window.addEventListener("resize", o.bind(null, t, {
      skipTest: e.skipTest
    }))
  }
  var a = "bfred-it:object-fit-images",
    l = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
    u = "undefined" == typeof Image ? {
      style: {
        "object-position": 1
      }
    } : new Image,
    g = "object-fit" in u.style,
    f = "object-position" in u.style,
    d = "background-size" in u.style,
    m = "string" == typeof u.currentSrc,
    p = u.getAttribute,
    b = u.setAttribute,
    h = !1;
  return o.supportsObjectFit = g, o.supportsObjectPosition = f,
    function() {
      function t(t, e) {
        return t[a] && t[a].img && ("src" === e || "srcset" === e) ? t[a].img : t
      }
      f || (HTMLImageElement.prototype.getAttribute = function(e) {
        return p.call(t(this, e), e)
      }, HTMLImageElement.prototype.setAttribute = function(e, i) {
        return b.call(t(this, e), e, String(i))
      })
    }(), o
}();
/*! smooth-scroll v15.1.2 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
  var t, n = (this.document || this.ownerDocument).querySelectorAll(e),
    o = this;
  do {
    for (t = n.length; 0 <= --t && n.item(t) !== o;);
  } while (t < 0 && (o = o.parentElement));
  return o
}), (function() {
  if ("function" == typeof window.CustomEvent) return;

  function e(e, t) {
    t = t || {
      bubbles: !1,
      cancelable: !1,
      detail: void 0
    };
    var n = document.createEvent("CustomEvent");
    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
  }
  e.prototype = window.Event.prototype, window.CustomEvent = e
})(), (function() {
  for (var i = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
  window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
    var n = (new Date).getTime(),
      o = Math.max(0, 16 - (n - i)),
      a = window.setTimeout((function() {
        e(n + o)
      }), o);
    return i = n + o, a
  }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
    clearTimeout(e)
  })
})(), (function(e, t) {
  "function" == typeof define && define.amd ? define([], (function() {
    return t(e)
  })) : "object" == typeof exports ? module.exports = t(e) : e.SmoothScroll = t(e)
})("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, (function(M) {
  "use strict";
  var I = {
      ignore: "[data-scroll-ignore]",
      header: null,
      topOnEmptyHash: !0,
      speed: 500,
      speedAsDuration: !1,
      durationMax: null,
      durationMin: null,
      clip: !0,
      offset: 0,
      easing: "easeInOutCubic",
      customEasing: null,
      updateURL: !0,
      popstate: !0,
      emitEvents: !0
    },
    F = function() {
      var n = {};
      return Array.prototype.forEach.call(arguments, (function(e) {
        for (var t in e) {
          if (!e.hasOwnProperty(t)) return;
          n[t] = e[t]
        }
      })), n
    },
    i = function(e) {
      "#" === e.charAt(0) && (e = e.substr(1));
      for (var t, n = String(e), o = n.length, a = -1, i = "", r = n.charCodeAt(0); ++a < o;) {
        if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
        1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === r ? i += "\\" + t.toString(16) + " " : i += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a)
      }
      return "#" + i
    },
    L = function() {
      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
    },
    x = function(e) {
      return e ? (t = e, parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
      var t
    },
    H = function(e, t, n, o) {
      if (t.emitEvents && "function" == typeof M.CustomEvent) {
        var a = new CustomEvent(e, {
          bubbles: !0,
          detail: {
            anchor: n,
            toggle: o
          }
        });
        document.dispatchEvent(a)
      }
    };
  return function(o, e) {
    var A, a, O, C, q = {};
    q.cancelScroll = function(e) {
      cancelAnimationFrame(C), C = null, e || H("scrollCancel", A)
    }, q.animateScroll = function(r, c, e) {
      var s = F(A || I, e || {}),
        u = "[object Number]" === Object.prototype.toString.call(r),
        t = u || !r.tagName ? null : r;
      if (u || t) {
        var l = M.pageYOffset;
        s.header && !O && (O = document.querySelector(s.header));
        var n, o, a, m, i, d, f, h, p = x(O),
          g = u ? r : (function(e, t, n, o) {
            var a = 0;
            if (e.offsetParent)
              for (; a += e.offsetTop, e = e.offsetParent;);
            return a = Math.max(a - t - n, 0), o && (a = Math.min(a, L() - M.innerHeight)), a
          })(t, p, parseInt("function" == typeof s.offset ? s.offset(r, c) : s.offset, 10), s.clip),
          y = g - l,
          w = L(),
          v = 0,
          E = (n = y, a = (o = s).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && a > o.durationMax ? o.durationMax : o.durationMin && a < o.durationMin ? o.durationMin : a),
          S = function(e, t) {
            var n, o, a, i = M.pageYOffset;
            if (e == t || i == t || (l < t && M.innerHeight + i) >= w) return q.cancelScroll(!0), o = t, a = u, 0 === (n = r) && document.body.focus(), a || (n.focus(), document.activeElement !== n && (n.setAttribute("tabindex", "-1"), n.focus(), n.style.outline = "none"), M.scrollTo(0, o)), H("scrollStop", s, r, c), !(C = m = null)
          },
          b = function(e) {
            var t, n, o;
            m || (m = e), i = (v += e - m) / parseInt(E, 10), d = l + y * (n = i = 1 < i ? 1 : i, "easeInQuad" === (t = s).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), t.customEasing && (o = t.customEasing(n)), o || n), M.scrollTo(0, Math.floor(d)), S(d, g) || (C = M.requestAnimationFrame(b), m = e)
          };
        0 === M.pageYOffset && M.scrollTo(0, 0), f = r, h = s, u || history.pushState && h.updateURL && history.pushState({
          smoothScroll: JSON.stringify(h),
          anchor: f.id
        }, document.title, f === document.documentElement ? "#top" : "#" + f.id), H("scrollStart", s, r, c), q.cancelScroll(!0), M.requestAnimationFrame(b)
      }
    };
    var t = function(e) {
        if (!("matchMedia" in M && M.matchMedia("(prefers-reduced-motion)").matches) && 0 === e.button && !e.metaKey && !e.ctrlKey && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(A.ignore) && a.hostname === M.location.hostname && a.pathname === M.location.pathname && /#/.test(a.href)) {
          var t = i(a.hash),
            n = A.topOnEmptyHash && "#" === t ? document.documentElement : document.querySelector(t);
          (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), (function(e) {
            if (history.replaceState && e.updateURL && !history.state) {
              var t = M.location.hash;
              t = t || M.pageYOffset, history.replaceState({
                smoothScroll: JSON.stringify(e),
                anchor: t || M.pageYOffset
              }, document.title, t || M.location.href)
            }
          })(A), q.animateScroll(n, a))
        }
      },
      n = function(e) {
        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(A)) {
          var t = history.state.anchor;
          t && 0 !== t && !(t = document.querySelector(i(history.state.anchor))) || q.animateScroll(t, null, {
            updateURL: !1
          })
        }
      };
    return q.destroy = function() {
      A && (document.removeEventListener("click", t, !1), M.removeEventListener("popstate", n, !1), q.cancelScroll(), C = O = a = A = null)
    }, q.init = function(e) {
      if (!("querySelector" in document && "addEventListener" in M && "requestAnimationFrame" in M && "closest" in M.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
      q.destroy(), A = F(I, e || {}), O = A.header ? document.querySelector(A.header) : null, document.addEventListener("click", t, !1), A.updateURL && A.popstate && M.addEventListener("popstate", n, !1)
    }, q.init(e), q
  }
}));
/*!
 * headroom.js v0.9.3 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2016 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

! function(a, b) {
  "use strict";
  "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? module.exports = b() : a.Headroom = b()
}(this, function() {
  "use strict";

  function a(a) {
    this.callback = a, this.ticking = !1
  }

  function b(a) {
    return a && "undefined" != typeof window && (a === window || a.nodeType)
  }

  function c(a) {
    if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
    var d, e, f = a || {};
    for (e = 1; e < arguments.length; e++) {
      var g = arguments[e] || {};
      for (d in g) "object" != typeof f[d] || b(f[d]) ? f[d] = f[d] || g[d] : f[d] = c(f[d], g[d])
    }
    return f
  }

  function d(a) {
    return a === Object(a) ? a : {
      down: a,
      up: a
    }
  }

  function e(a, b) {
    b = c(b, e.options), this.lastKnownScrollY = 0, this.elem = a, this.tolerance = d(b.tolerance), this.classes = b.classes, this.offset = b.offset, this.scroller = b.scroller, this.initialised = !1, this.onPin = b.onPin, this.onUnpin = b.onUnpin, this.onTop = b.onTop, this.onNotTop = b.onNotTop, this.onBottom = b.onBottom, this.onNotBottom = b.onNotBottom
  }
  var f = {
    bind: !! function() {}.bind,
    classList: "classList" in document.documentElement,
    rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
  };
  return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, a.prototype = {
    constructor: a,
    update: function() {
      this.callback && this.callback(), this.ticking = !1
    },
    requestTick: function() {
      this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0)
    },
    handleEvent: function() {
      this.requestTick()
    }
  }, e.prototype = {
    constructor: e,
    init: function() {
      return e.cutsTheMustard ? (this.debouncer = new a(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this) : void 0
    },
    destroy: function() {
      var a = this.classes;
      this.initialised = !1, this.elem.classList.remove(a.unpinned, a.pinned, a.top, a.notTop, a.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1)
    },
    attachEvent: function() {
      this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent())
    },
    unpin: function() {
      var a = this.elem.classList,
        b = this.classes;
      !a.contains(b.pinned) && a.contains(b.unpinned) || (a.add(b.unpinned), a.remove(b.pinned), this.onUnpin && this.onUnpin.call(this))
    },
    pin: function() {
      var a = this.elem.classList,
        b = this.classes;
      a.contains(b.unpinned) && (a.remove(b.unpinned), a.add(b.pinned), this.onPin && this.onPin.call(this))
    },
    top: function() {
      var a = this.elem.classList,
        b = this.classes;
      a.contains(b.top) || (a.add(b.top), a.remove(b.notTop), this.onTop && this.onTop.call(this))
    },
    notTop: function() {
      var a = this.elem.classList,
        b = this.classes;
      a.contains(b.notTop) || (a.add(b.notTop), a.remove(b.top), this.onNotTop && this.onNotTop.call(this))
    },
    bottom: function() {
      var a = this.elem.classList,
        b = this.classes;
      a.contains(b.bottom) || (a.add(b.bottom), a.remove(b.notBottom), this.onBottom && this.onBottom.call(this))
    },
    notBottom: function() {
      var a = this.elem.classList,
        b = this.classes;
      a.contains(b.notBottom) || (a.add(b.notBottom), a.remove(b.bottom), this.onNotBottom && this.onNotBottom.call(this))
    },
    getScrollY: function() {
      return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop
    },
    getViewportHeight: function() {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    },
    getElementPhysicalHeight: function(a) {
      return Math.max(a.offsetHeight, a.clientHeight)
    },
    getScrollerPhysicalHeight: function() {
      return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller)
    },
    getDocumentHeight: function() {
      var a = document.body,
        b = document.documentElement;
      return Math.max(a.scrollHeight, b.scrollHeight, a.offsetHeight, b.offsetHeight, a.clientHeight, b.clientHeight)
    },
    getElementHeight: function(a) {
      return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight)
    },
    getScrollerHeight: function() {
      return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
    },
    isOutOfBounds: function(a) {
      var b = 0 > a,
        c = a + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
      return b || c
    },
    toleranceExceeded: function(a, b) {
      return Math.abs(a - this.lastKnownScrollY) >= this.tolerance[b]
    },
    shouldUnpin: function(a, b) {
      var c = a > this.lastKnownScrollY,
        d = a >= this.offset;
      return c && d && b
    },
    shouldPin: function(a, b) {
      var c = a < this.lastKnownScrollY,
        d = a <= this.offset;
      return c && b || d
    },
    update: function() {
      var a = this.getScrollY(),
        b = a > this.lastKnownScrollY ? "down" : "up",
        c = this.toleranceExceeded(a, b);
      this.isOutOfBounds(a) || (a <= this.offset ? this.top() : this.notTop(), a + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(a, c) ? this.unpin() : this.shouldPin(a, c) && this.pin(), this.lastKnownScrollY = a)
    }
  }, e.options = {
    tolerance: {
      up: 0,
      down: 0
    },
    offset: 0,
    scroller: window,
    classes: {
      pinned: "headroom--pinned",
      unpinned: "headroom--unpinned",
      top: "headroom--top",
      notTop: "headroom--not-top",
      bottom: "headroom--bottom",
      notBottom: "headroom--not-bottom",
      initial: "headroom"
    }
  }, e.cutsTheMustard = "undefined" != typeof f && f.rAF && f.bind && f.classList, e
});

! function(o) {
  o && (o.fn.headroom = function(t) {
    return this.each(function() {
      var a = o(this),
        e = a.data("headroom"),
        n = "object" == typeof t && t;
      n = o.extend(!0, {}, Headroom.options, n), e || (e = new Headroom(this, n), e.init(), a.data("headroom", e)), "string" == typeof t && (e[t](), "destroy" === t && a.removeData("headroom"))
    })
  }, o("[data-headroom]").each(function() {
    var t = o(this);
    t.headroom(t.data())
  }))
}(window.Zepto || window.jQuery);
/*!
 * VERSION: 0.1.12
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com/jquery-gsap-plugin/
 *
 * Requires TweenLite version 1.8.0 or higher and CSSPlugin.
 *
 * @license Copyright (c) 2013-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
! function(a) {
  "use strict";
  var b, c, d, e = a.fn.animate,
    f = a.fn.stop,
    g = !0,
    h = function(a) {
      var b, c = {};
      for (b in a) c[b] = a[b];
      return c
    },
    i = {
      overwrite: 1,
      delay: 1,
      useFrames: 1,
      runBackwards: 1,
      easeParams: 1,
      yoyo: 1,
      immediateRender: 1,
      repeat: 1,
      repeatDelay: 1,
      autoCSS: 1
    },
    j = ",scrollTop,scrollLeft,show,hide,toggle,",
    k = j,
    l = function(a, b) {
      for (var c in i) i[c] && void 0 !== a[c] && (b[c] = a[c])
    },
    m = function(a) {
      return function(b) {
        return a.getRatio(b)
      }
    },
    n = {},
    o = function() {
      var e, f, g, h = window.GreenSockGlobals || window;
      if (b = h.TweenMax || h.TweenLite, b && (e = (b.version + ".0.0").split("."), f = !(Number(e[0]) > 0 && Number(e[1]) > 7), h = h.com.greensock, c = h.plugins.CSSPlugin, n = h.easing.Ease.map || {}), !b || !c || f) return b = null, void(!d && window.console && (window.console.log("The jquery.gsap.js plugin requires the TweenMax (or at least TweenLite and CSSPlugin) JavaScript file(s)." + (f ? " Version " + e.join(".") + " is too old." : "")), d = !0));
      if (a.easing) {
        for (g in n) a.easing[g] = m(n[g]);
        o = !1
      }
    };
  a.fn.animate = function(d, f, i, j) {
    if (d = d || {}, o && (o(), !b || !c)) return e.call(this, d, f, i, j);
    if (!g || d.skipGSAP === !0 || "object" == typeof f && "function" == typeof f.step) return e.call(this, d, f, i, j);
    var m, p, q, r, s = a.speed(f, i, j),
      t = {
        ease: n[s.easing] || (s.easing === !1 ? n.linear : n.swing)
      },
      u = this,
      v = "object" == typeof f ? f.specialEasing : null;
    for (p in d) {
      if (m = d[p], m instanceof Array && n[m[1]] && (v = v || {}, v[p] = m[1], m = m[0]), "show" === m || "hide" === m || "toggle" === m || -1 !== k.indexOf(p) && -1 !== k.indexOf("," + p + ",")) return e.call(this, d, f, i, j);
      t[-1 === p.indexOf("-") ? p : a.camelCase(p)] = m
    }
    if (v) {
      t = h(t), r = [];
      for (p in v) m = r[r.length] = {}, l(t, m), m.ease = n[v[p]] || t.ease, -1 !== p.indexOf("-") && (p = a.camelCase(p)), m[p] = t[p], delete t[p];
      0 === r.length && (r = null)
    }
    return q = function(c) {
      var d, e = h(t);
      if (r)
        for (d = r.length; --d > -1;) b.to(this, a.fx.off ? 0 : s.duration / 1e3, r[d]);
      e.onComplete = function() {
        c ? c() : s.old && a(this).each(s.old)
      }, b.to(this, a.fx.off ? 0 : s.duration / 1e3, e)
    }, s.queue !== !1 ? (u.queue(s.queue, q), "function" == typeof s.old && a(u[u.length - 1]).queue(s.queue, function(a) {
      s.old.call(u), a()
    })) : q.call(u), u
  }, a.fn.stop = function(a, c) {
    if (f.call(this, a, c), b) {
      if (c)
        for (var d, e = b.getTweensOf(this), g = e.length; --g > -1;) d = e[g].totalTime() / e[g].totalDuration(), d > 0 && 1 > d && e[g].seek(e[g].totalDuration());
      b.killTweensOf(this)
    }
    return this
  }, a.gsap = {
    enabled: function(a) {
      g = a
    },
    version: "0.1.12",
    legacyProps: function(a) {
      k = j + a + ","
    }
  }
}(jQuery);
/*!
 * VERSION: 1.20.4
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
! function(a, b) {
  "use strict";
  var c = {},
    d = a.document,
    e = a.GreenSockGlobals = a.GreenSockGlobals || a;
  if (!e.TweenLite) {
    var f, g, h, i, j, k = function(a) {
        var b, c = a.split("."),
          d = e;
        for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
        return d
      },
      l = k("com.greensock"),
      m = 1e-10,
      n = function(a) {
        var b, c = [],
          d = a.length;
        for (b = 0; b !== d; c.push(a[b++]));
        return c
      },
      o = function() {},
      p = function() {
        var a = Object.prototype.toString,
          b = a.call([]);
        return function(c) {
          return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
        }
      }(),
      q = {},
      r = function(d, f, g, h) {
        this.sc = q[d] ? q[d].sc : [], q[d] = this, this.gsClass = null, this.func = g;
        var i = [];
        this.check = function(j) {
          for (var l, m, n, o, p = f.length, s = p; --p > -1;)(l = q[f[p]] || new r(f[p], [])).gsClass ? (i[p] = l.gsClass, s--) : j && l.sc.push(this);
          if (0 === s && g) {
            if (m = ("com.greensock." + d).split("."), n = m.pop(), o = k(m.join("."))[n] = this.gsClass = g.apply(g, i), h)
              if (e[n] = c[n] = o, "undefined" != typeof module && module.exports)
                if (d === b) {
                  module.exports = c[b] = o;
                  for (p in c) o[p] = c[p]
                } else c[b] && (c[b][n] = o);
            else "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
              return o
            });
            for (p = 0; p < this.sc.length; p++) this.sc[p].check()
          }
        }, this.check(!0)
      },
      s = a._gsDefine = function(a, b, c, d) {
        return new r(a, b, c, d)
      },
      t = l._class = function(a, b, c) {
        return b = b || function() {}, s(a, [], function() {
          return b
        }, c), b
      };
    s.globals = e;
    var u = [0, 0, 1, 1],
      v = t("easing.Ease", function(a, b, c, d) {
        this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? u.concat(b) : u
      }, !0),
      w = v.map = {},
      x = v.register = function(a, b, c, d) {
        for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
          for (f = i[j], e = d ? t("easing." + f, null, !0) : l.easing[f] || {}, g = k.length; --g > -1;) h = k[g], w[f + "." + h] = w[h + f] = e[h] = a.getRatio ? a : a[h] || new a
      };
    for (h = v.prototype, h._calcEnd = !1, h.getRatio = function(a) {
        if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
        var b = this._type,
          c = this._power,
          d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
        return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
      }, f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], g = f.length; --g > -1;) h = f[g] + ",Power" + g, x(new v(null, null, 1, g), h, "easeOut", !0), x(new v(null, null, 2, g), h, "easeIn" + (0 === g ? ",easeNone" : "")), x(new v(null, null, 3, g), h, "easeInOut");
    w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
    var y = t("events.EventDispatcher", function(a) {
      this._listeners = {}, this._eventTarget = a || this
    });
    h = y.prototype, h.addEventListener = function(a, b, c, d, e) {
      e = e || 0;
      var f, g, h = this._listeners[a],
        k = 0;
      for (this !== i || j || i.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
      h.splice(k, 0, {
        c: b,
        s: c,
        up: d,
        pr: e
      })
    }, h.removeEventListener = function(a, b) {
      var c, d = this._listeners[a];
      if (d)
        for (c = d.length; --c > -1;)
          if (d[c].c === b) return void d.splice(c, 1)
    }, h.dispatchEvent = function(a) {
      var b, c, d, e = this._listeners[a];
      if (e)
        for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {
          type: a,
          target: c
        }) : d.c.call(d.s || c))
    };
    var z = a.requestAnimationFrame,
      A = a.cancelAnimationFrame,
      B = Date.now || function() {
        return (new Date).getTime()
      },
      C = B();
    for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z;) z = a[f[g] + "RequestAnimationFrame"], A = a[f[g] + "CancelAnimationFrame"] || a[f[g] + "CancelRequestAnimationFrame"];
    t("Ticker", function(a, b) {
      var c, e, f, g, h, k = this,
        l = B(),
        n = b !== !1 && z ? "auto" : !1,
        p = 500,
        q = 33,
        r = "tick",
        s = function(a) {
          var b, d, i = B() - C;
          i > p && (l += i - q), C += i, k.time = (C - l) / 1e3, b = k.time - h, (!c || b > 0 || a === !0) && (k.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && k.dispatchEvent(r)
        };
      y.call(k), k.time = k.frame = 0, k.tick = function() {
        s(!0)
      }, k.lagSmoothing = function(a, b) {
        return arguments.length ? (p = a || 1 / m, void(q = Math.min(b, p, 0))) : 1 / m > p
      }, k.sleep = function() {
        null != f && (n && A ? A(f) : clearTimeout(f), e = o, f = null, k === i && (j = !1))
      }, k.wake = function(a) {
        null !== f ? k.sleep() : a ? l += -C + (C = B()) : k.frame > 10 && (C = B() - p + 5), e = 0 === c ? o : n && z ? z : function(a) {
          return setTimeout(a, 1e3 * (h - k.time) + 1 | 0)
        }, k === i && (j = !0), s(2)
      }, k.fps = function(a) {
        return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void k.wake()) : c
      }, k.useRAF = function(a) {
        return arguments.length ? (k.sleep(), n = a, void k.fps(c)) : n
      }, k.fps(a), setTimeout(function() {
        "auto" === n && k.frame < 5 && "hidden" !== (d || {}).visibilityState && k.useRAF(!1)
      }, 1500)
    }), h = l.Ticker.prototype = new l.events.EventDispatcher, h.constructor = l.Ticker;
    var D = t("core.Animation", function(a, b) {
      if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, X) {
        j || i.wake();
        var c = this.vars.useFrames ? W : X;
        c.add(this, c._time), this.vars.paused && this.paused(!0)
      }
    });
    i = D.ticker = new l.Ticker, h = D.prototype, h._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1;
    var E = function() {
      j && B() - C > 2e3 && ("hidden" !== (d || {}).visibilityState || !i.lagSmoothing()) && i.wake();
      var a = setTimeout(E, 2e3);
      a.unref && a.unref()
    };
    E(), h.play = function(a, b) {
      return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
    }, h.pause = function(a, b) {
      return null != a && this.seek(a, b), this.paused(!0)
    }, h.resume = function(a, b) {
      return null != a && this.seek(a, b), this.paused(!1)
    }, h.seek = function(a, b) {
      return this.totalTime(Number(a), b !== !1)
    }, h.restart = function(a, b) {
      return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
    }, h.reverse = function(a, b) {
      return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
    }, h.render = function(a, b, c) {}, h.invalidate = function() {
      return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
    }, h.isActive = function() {
      var a, b = this._timeline,
        c = this._startTime;
      return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1e-7
    }, h._enabled = function(a, b) {
      return j || i.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
    }, h._kill = function(a, b) {
      return this._enabled(!1, !1)
    }, h.kill = function(a, b) {
      return this._kill(a, b), this
    }, h._uncache = function(a) {
      for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
      return this
    }, h._swapSelfInParams = function(a) {
      for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
      return c
    }, h._callback = function(a) {
      var b = this.vars,
        c = b[a],
        d = b[a + "Params"],
        e = b[a + "Scope"] || b.callbackScope || this,
        f = d ? d.length : 0;
      switch (f) {
        case 0:
          c.call(e);
          break;
        case 1:
          c.call(e, d[0]);
          break;
        case 2:
          c.call(e, d[0], d[1]);
          break;
        default:
          c.apply(e, d)
      }
    }, h.eventCallback = function(a, b, c, d) {
      if ("on" === (a || "").substr(0, 2)) {
        var e = this.vars;
        if (1 === arguments.length) return e[a];
        null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = p(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
      }
      return this
    }, h.delay = function(a) {
      return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
    }, h.duration = function(a) {
      return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
    }, h.totalDuration = function(a) {
      return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
    }, h.time = function(a, b) {
      return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
    }, h.totalTime = function(a, b, c) {
      if (j || i.wake(), !arguments.length) return this._totalTime;
      if (this._timeline) {
        if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
          this._dirty && this.totalDuration();
          var d = this._totalDuration,
            e = this._timeline;
          if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
            for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
        }
        this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (J.length && Z(), this.render(a, b, !1), J.length && Z())
      }
      return this
    }, h.progress = h.totalProgress = function(a, b) {
      var c = this.duration();
      return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
    }, h.startTime = function(a) {
      return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
    }, h.endTime = function(a) {
      return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
    }, h.timeScale = function(a) {
      if (!arguments.length) return this._timeScale;
      var b, c;
      for (a = a || m, this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime(), this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;) c._dirty = !0, c.totalDuration(), c = c.timeline;
      return this
    }, h.reversed = function(a) {
      return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
    }, h.paused = function(a) {
      if (!arguments.length) return this._paused;
      var b, c, d = this._timeline;
      return a != this._paused && d && (j || a || i.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
    };
    var F = t("core.SimpleTimeline", function(a) {
      D.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    h = F.prototype = new D, h.constructor = F, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function(a, b, c, d) {
      var e, f;
      if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
        for (f = a._startTime; e && e._startTime > f;) e = e._prev;
      return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
    }, h._remove = function(a, b) {
      return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
    }, h.render = function(a, b, c) {
      var d, e = this._first;
      for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
    }, h.rawTime = function() {
      return j || i.wake(), this._totalTime
    };
    var G = t("TweenLite", function(b, c, d) {
        if (D.call(this, c, d), this.render = G.prototype.render, null == b) throw "Cannot tween a null target.";
        this.target = b = "string" != typeof b ? b : G.selector(b) || b;
        var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
          i = this.vars.overwrite;
        if (this._overwrite = i = null == i ? V[G.defaultOverwrite] : "number" == typeof i ? i >> 0 : V[i], (h || b instanceof Array || b.push && p(b)) && "number" != typeof b[0])
          for (this._targets = g = n(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(n(f))) : (this._siblings[e] = $(f, this, !1), 1 === i && this._siblings[e].length > 1 && aa(f, this, null, 1, this._siblings[e])) : (f = g[e--] = G.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
        else this._propLookup = {}, this._siblings = $(b, this, !1), 1 === i && this._siblings.length > 1 && aa(b, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -m, this.render(Math.min(0, -this._delay)))
      }, !0),
      H = function(b) {
        return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
      },
      I = function(a, b) {
        var c, d = {};
        for (c in a) U[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!R[c] || R[c] && R[c]._autoCSS) || (d[c] = a[c], delete a[c]);
        a.css = d
      };
    h = G.prototype = new D, h.constructor = G, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, G.version = "1.20.4", G.defaultEase = h._ease = new v(null, null, 1, 1), G.defaultOverwrite = "auto", G.ticker = i, G.autoSleep = 120, G.lagSmoothing = function(a, b) {
      i.lagSmoothing(a, b)
    }, G.selector = a.$ || a.jQuery || function(b) {
      var c = a.$ || a.jQuery;
      return c ? (G.selector = c, c(b)) : "undefined" == typeof d ? b : d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
    };
    var J = [],
      K = {},
      L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      M = /[\+-]=-?[\.\d]/,
      N = function(a) {
        for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
      },
      O = function(a, b, c, d) {
        var e, f, g, h, i, j, k, l = [],
          m = 0,
          n = "",
          o = 0;
        for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(L) || [], f = b.match(L) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
          _next: l._firstPT,
          t: l,
          p: l.length - 1,
          s: g,
          c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
          f: 0,
          m: o && 4 > o ? Math.round : 0
        }), m += k.length;
        return n += b.substr(m), n && l.push(n), l.setRatio = N, M.test(b) && (l.end = null), l
      },
      P = function(a, b, c, d, e, f, g, h, i) {
        "function" == typeof d && (d = d(i || 0, a));
        var j, k = typeof a[b],
          l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
          m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b],
          n = "string" == typeof d && "=" === d.charAt(1),
          o = {
            t: a,
            p: b,
            s: m,
            f: "function" === k,
            pg: 0,
            n: e || b,
            m: f ? "function" == typeof f ? f : Math.round : 0,
            pr: 0,
            c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
          };
        return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = O(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || G.defaultStringFilter, o), o = {
          t: j,
          p: "setRatio",
          s: 0,
          c: 1,
          f: 2,
          pg: 0,
          n: e || b,
          pr: 0,
          m: 0
        }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0
      },
      Q = G._internals = {
        isArray: p,
        isSelector: H,
        lazyTweens: J,
        blobDif: O
      },
      R = G._plugins = {},
      S = Q.tweenLookup = {},
      T = 0,
      U = Q.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1,
        lazy: 1,
        onOverwrite: 1,
        callbackScope: 1,
        stringFilter: 1,
        id: 1,
        yoyoEase: 1
      },
      V = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        "true": 1,
        "false": 0
      },
      W = D._rootFramesTimeline = new F,
      X = D._rootTimeline = new F,
      Y = 30,
      Z = Q.lazyRender = function() {
        var a, b = J.length;
        for (K = {}; --b > -1;) a = J[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
        J.length = 0
      };
    X._startTime = i.time, W._startTime = i.frame, X._active = W._active = !0, setTimeout(Z, 1), D._updateRoot = G.render = function() {
      var a, b, c;
      if (J.length && Z(), X.render((i.time - X._startTime) * X._timeScale, !1, !1), W.render((i.frame - W._startTime) * W._timeScale, !1, !1), J.length && Z(), i.frame >= Y) {
        Y = i.frame + (parseInt(G.autoSleep, 10) || 120);
        for (c in S) {
          for (b = S[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
          0 === b.length && delete S[c]
        }
        if (c = X._first, (!c || c._paused) && G.autoSleep && !W._first && 1 === i._listeners.tick.length) {
          for (; c && c._paused;) c = c._next;
          c || i.sleep()
        }
      }
    }, i.addEventListener("tick", D._updateRoot);
    var $ = function(a, b, c) {
        var d, e, f = a._gsTweenID;
        if (S[f || (a._gsTweenID = f = "t" + T++)] || (S[f] = {
            target: a,
            tweens: []
          }), b && (d = S[f].tweens, d[e = d.length] = b, c))
          for (; --e > -1;) d[e] === b && d.splice(e, 1);
        return S[f].tweens
      },
      _ = function(a, b, c, d) {
        var e, f, g = a.vars.onOverwrite;
        return g && (e = g(a, b, c, d)), g = G.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
      },
      aa = function(a, b, c, d, e) {
        var f, g, h, i;
        if (1 === d || d >= 4) {
          for (i = e.length, f = 0; i > f; f++)
            if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
            else if (5 === d) break;
          return g
        }
        var j, k = b._startTime + m,
          l = [],
          n = 0,
          o = 0 === b._duration;
        for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || ba(b, 0, o), 0 === ba(h, j, o) && (l[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (l[n++] = h)));
        for (f = n; --f > -1;)
          if (h = l[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
            if (2 !== d && !_(h, b)) continue;
            h._enabled(!1, !1) && (g = !0)
          } return g
      },
      ba = function(a, b, c) {
        for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
          if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
          d = d._timeline
        }
        return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * m > f - b ? m : (f += a.totalDuration() / a._timeScale / e) > b + m ? 0 : f - b - m
      };
    h._init = function() {
      var a, b, c, d, e, f, g = this.vars,
        h = this._overwrittenProps,
        i = this._duration,
        j = !!g.immediateRender,
        k = g.ease;
      if (g.startAt) {
        this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
        for (d in g.startAt) e[d] = g.startAt[d];
        if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = G.to(this.target, 0, e), j)
          if (this._time > 0) this._startAt = null;
          else if (0 !== i) return
      } else if (g.runBackwards && 0 !== i)
        if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
        else {
          0 !== this._time && (j = !1), c = {};
          for (d in g) U[d] && "autoCSS" !== d || (c[d] = g[d]);
          if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = G.to(this.target, 0, c), j) {
            if (0 === this._time) return
          } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
        } if (this._ease = k = k ? k instanceof v ? k : "function" == typeof k ? new v(k, g.easeParams) : w[k] || G.defaultEase : G.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
        for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
      else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
      if (b && G._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
        for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
      this._onUpdate = g.onUpdate, this._initted = !0
    }, h._initProps = function(b, c, d, e, f) {
      var g, h, i, j, k, l;
      if (null == b) return !1;
      K[b._gsTweenID] && Z(), this.vars.css || b.style && b !== a && b.nodeType && R.css && this.vars.autoCSS !== !1 && I(this.vars, b);
      for (g in this.vars)
        if (l = this.vars[g], U[g]) l && (l instanceof Array || l.push && p(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
        else if (R[g] && (j = new R[g])._onInitTween(b, this.vars[g], this, f)) {
        for (this._firstPT = k = {
            _next: this._firstPT,
            t: j,
            p: "setRatio",
            s: 0,
            c: 1,
            f: 1,
            n: g,
            pg: 1,
            pr: j._priority,
            m: 0
          }, h = j._overwriteProps.length; --h > -1;) c[j._overwriteProps[h]] = this._firstPT;
        (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k)
      } else c[g] = P.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
      return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && aa(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (K[b._gsTweenID] = !0), i)
    }, h.render = function(a, b, c) {
      var d, e, f, g, h = this._time,
        i = this._duration,
        j = this._rawPrevTime;
      if (a >= i - 1e-7 && a >= 0) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === m && "isPause" !== this.data) && j !== a && (c = !0, j > m && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : m);
      else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : m)), (!this._initted || this._startAt && this._startAt.progress()) && (c = !0);
      else if (this._totalTime = this._time = a, this._easeType) {
        var k = a / i,
          l = this._easeType,
          n = this._easePower;
        (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2
      } else this.ratio = this._ease.getRatio(a / i);
      if (this._time !== h || c) {
        if (!this._initted) {
          if (this._init(), !this._initted || this._gc) return;
          if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, J.push(this), void(this._lazy = [a, b]);
          this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
        }
        for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, !0, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
        this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, !0, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, !0, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === m && g !== m && (this._rawPrevTime = 0))
      }
    }, h._kill = function(a, b, c) {
      if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
      b = "string" != typeof b ? b || this._targets || this.target : G.selector(b) || b;
      var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
      if ((p(b) || H(b)) && "number" != typeof b[0])
        for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
      else {
        if (this._targets) {
          for (d = this._targets.length; --d > -1;)
            if (b === this._targets[d]) {
              h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
              break
            }
        } else {
          if (b !== this.target) return !1;
          h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
        }
        if (h) {
          if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (G.onOverwrite || this.vars.onOverwrite)) {
            for (f in j) h[f] && (l || (l = []), l.push(f));
            if ((l || !a) && !_(this, c, b, l)) return !1
          }
          for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
          !this._firstPT && this._initted && this._enabled(!1, !1)
        }
      }
      return i
    }, h.invalidate = function() {
      return this._notifyPluginsOfEnabled && G._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -m, this.render(Math.min(0, -this._delay))), this
    }, h._enabled = function(a, b) {
      if (j || i.wake(), a && this._gc) {
        var c, d = this._targets;
        if (d)
          for (c = d.length; --c > -1;) this._siblings[c] = $(d[c], this, !0);
        else this._siblings = $(this.target, this, !0)
      }
      return D.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
    }, G.to = function(a, b, c) {
      return new G(a, b, c)
    }, G.from = function(a, b, c) {
      return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new G(a, b, c)
    }, G.fromTo = function(a, b, c, d) {
      return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new G(a, b, d)
    }, G.delayedCall = function(a, b, c, d, e) {
      return new G(b, 0, {
        delay: a,
        onComplete: b,
        onCompleteParams: c,
        callbackScope: d,
        onReverseComplete: b,
        onReverseCompleteParams: c,
        immediateRender: !1,
        lazy: !1,
        useFrames: e,
        overwrite: 0
      })
    }, G.set = function(a, b) {
      return new G(a, 0, b)
    }, G.getTweensOf = function(a, b) {
      if (null == a) return [];
      a = "string" != typeof a ? a : G.selector(a) || a;
      var c, d, e, f;
      if ((p(a) || H(a)) && "number" != typeof a[0]) {
        for (c = a.length, d = []; --c > -1;) d = d.concat(G.getTweensOf(a[c], b));
        for (c = d.length; --c > -1;)
          for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
      } else if (a._gsTweenID)
        for (d = $(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
      return d || []
    }, G.killTweensOf = G.killDelayedCallsTo = function(a, b, c) {
      "object" == typeof b && (c = b, b = !1);
      for (var d = G.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
    };
    var ca = t("plugins.TweenPlugin", function(a, b) {
      this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ca.prototype
    }, !0);
    if (h = ca.prototype, ca.version = "1.19.0", ca.API = 2, h._firstPT = null, h._addTween = P, h.setRatio = N, h._kill = function(a) {
        var b, c = this._overwriteProps,
          d = this._firstPT;
        if (null != a[this._propName]) this._overwriteProps = [];
        else
          for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
        for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
        return !1
      }, h._mod = h._roundProps = function(a) {
        for (var b, c = this._firstPT; c;) b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next
      }, G._onPluginEvent = function(a, b) {
        var c, d, e, f, g, h = b._firstPT;
        if ("_onInitAllProps" === a) {
          for (; h;) {
            for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
            (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
          }
          h = b._firstPT = e
        }
        for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
        return c
      }, ca.activate = function(a) {
        for (var b = a.length; --b > -1;) a[b].API === ca.API && (R[(new a[b])._propName] = a[b]);
        return !0
      }, s.plugin = function(a) {
        if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
        var b, c = a.propName,
          d = a.priority || 0,
          e = a.overwriteProps,
          f = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_mod",
            mod: "_mod",
            initAll: "_onInitAllProps"
          },
          g = t("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
            ca.call(this, c, d), this._overwriteProps = e || []
          }, a.global === !0),
          h = g.prototype = new ca(c);
        h.constructor = g, g.API = a.API;
        for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
        return g.version = a.version, ca.activate([g]), g
      }, f = a._gsQueue) {
      for (g = 0; g < f.length; g++) f[g]();
      for (h in q) q[h].func || a.console.log("GSAP encountered missing dependency: " + h)
    }
    j = !1
  }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
/*!
 * VERSION: 1.20.4
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
      var c, d, e, f, g = function() {
          a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
        },
        h = _gsScope._gsDefine.globals,
        i = {},
        j = g.prototype = new a("css");
      j.constructor = g, g.version = "1.20.4", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
        top: j,
        right: j,
        bottom: j,
        left: j,
        width: j,
        height: j,
        fontSize: j,
        padding: j,
        margin: j,
        perspective: j,
        lineHeight: ""
      };
      var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
        t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        w = /(?:\d|\-|\+|=|#|\.)*/g,
        x = /opacity *= *([^)]*)/i,
        y = /opacity:([^;]*)/i,
        z = /alpha\(opacity *=.+?\)/i,
        A = /^(rgb|hsl)/,
        B = /([A-Z])/g,
        C = /-([a-z])/gi,
        D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        E = function(a, b) {
          return b.toUpperCase()
        },
        F = /(?:Left|Right|Width)/i,
        G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        I = /,(?=[^\)]*(?:\(|$))/gi,
        J = /[\s,\(]/i,
        K = Math.PI / 180,
        L = 180 / Math.PI,
        M = {},
        N = {
          style: {}
        },
        O = _gsScope.document || {
          createElement: function() {
            return N
          }
        },
        P = function(a, b) {
          return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a)
        },
        Q = P("div"),
        R = P("img"),
        S = g._internals = {
          _specialProps: i
        },
        T = (_gsScope.navigator || {}).userAgent || "",
        U = function() {
          var a = T.indexOf("Android"),
            b = P("a");
          return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1
        }(),
        V = function(a) {
          return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        },
        W = function(a) {
          _gsScope.console && console.log(a)
        },
        X = "",
        Y = "",
        Z = function(a, b) {
          b = b || Q;
          var c, d, e = b.style;
          if (void 0 !== e[a]) return a;
          for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
          return d >= 0 ? (Y = 3 === d ? "ms" : c[d], X = "-" + Y.toLowerCase() + "-", Y + a) : null
        },
        $ = O.defaultView ? O.defaultView.getComputedStyle : function() {},
        _ = g.getStyle = function(a, b, c, d, e) {
          var f;
          return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || $(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a)
        },
        aa = S.convertToPixels = function(a, c, d, e, f) {
          if ("px" === e || !e && "lineHeight" !== c) return d;
          if ("auto" === e || !d) return 0;
          var h, i, j, k = F.test(c),
            l = a,
            m = Q.style,
            n = 0 > d,
            o = 1 === d;
          if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e)
            if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
            else {
              if (m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
              else {
                if (l = a.parentNode || O.body, -1 !== _(l, "display").indexOf("flex") && (m.position = "absolute"), i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                m[k ? "width" : "height"] = d + e
              }
              l.appendChild(Q), h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(Q), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = aa(a, c, d, e, !0))
            }
          else i = $(a).lineHeight, a.style.lineHeight = d, h = parseFloat($(a).lineHeight), a.style.lineHeight = i;
          return o && (h /= 100), n ? -h : h
        },
        ba = S.calculateOffset = function(a, b, c) {
          if ("absolute" !== _(a, "position", c)) return 0;
          var d = "left" === b ? "Left" : "Top",
            e = _(a, "margin" + d, c);
          return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0)
        },
        ca = function(a, b) {
          var c, d, e, f = {};
          if (b = b || $(a, null))
            if (c = b.length)
              for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
            else
              for (c in b)(-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
          else if (b = a.currentStyle || a.style)
            for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
          return U || (f.opacity = V(a)), d = Ra(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Fa && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
        },
        da = function(a, b, c, d, e) {
          var f, g, h, i = {},
            j = a.style;
          for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ba(a, g), void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
          if (d)
            for (g in d) "className" !== g && (i[g] = d[g]);
          return {
            difs: i,
            firstMPT: h
          }
        },
        ea = {
          width: ["Left", "Right"],
          height: ["Top", "Bottom"]
        },
        fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        ga = function(a, b, c) {
          if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0;
          if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
          var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
            e = ea[b],
            f = e.length;
          for (c = c || $(a, null); --f > -1;) d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0;
          return d
        },
        ha = function(a, b) {
          if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
          (null == a || "" === a) && (a = "0 0");
          var c, d = a.split(" "),
            e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
            f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
          if (d.length > 3 && !b) {
            for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ha(d[c]));
            return a.join(",")
          }
          return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a
        },
        ia = function(a, b) {
          return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
        },
        ja = function(a, b) {
          return "function" == typeof a && (a = a(r, q)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
        },
        ka = function(a, b, c, d) {
          var e, f, g, h, i, j = 1e-6;
          return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h
        },
        la = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          fuchsia: [255, 0, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0]
        },
        ma = function(a, b, c) {
          return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
        },
        na = g.parseColor = function(a, b) {
          var c, d, e, f, g, h, i, j, k, l, m;
          if (a)
            if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];
            else {
              if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a]) c = la[a];
              else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];
              else if ("hsl" === a.substr(0, 3))
                if (c = m = a.match(s), b) {
                  if (-1 !== a.indexOf("=")) return a.match(t)
                } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(c[3])), c[0] = ma(g + 1 / 3, d, e), c[1] = ma(g, d, e), c[2] = ma(g - 1 / 3, d, e);
              else c = a.match(s) || la.transparent;
              c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
            }
          else c = la.black;
          return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
        },
        oa = function(a, b) {
          var c, d, e, f = a.match(pa) || [],
            g = 0,
            h = "";
          if (!f.length) return a;
          for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = na(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
          return h + a.substr(g)
        },
        pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
      for (j in la) pa += "|" + j + "\\b";
      pa = new RegExp(pa + ")", "gi"), g.colorStringFilter = function(a) {
        var b, c = a[0] + " " + a[1];
        pa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = oa(a[0], b), a[1] = oa(a[1], b)), pa.lastIndex = 0
      }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
      var qa = function(a, b, c, d) {
          if (null == a) return function(a) {
            return a
          };
          var e, f = b ? (a.match(pa) || [""])[0] : "",
            g = a.split(f).join("").match(u) || [],
            h = a.substr(0, a.indexOf(g[0])),
            i = ")" === a.charAt(a.length - 1) ? ")" : "",
            j = -1 !== a.indexOf(" ") ? " " : ",",
            k = g.length,
            l = k > 0 ? g[0].replace(s, "") : "";
          return k ? e = b ? function(a) {
            var b, m, n, o;
            if ("number" == typeof a) a += l;
            else if (d && I.test(a)) {
              for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
              return o.join(",")
            }
            if (b = (a.match(pa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--)
              for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
            return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
          } : function(a) {
            var b, f, m;
            if ("number" == typeof a) a += l;
            else if (d && I.test(a)) {
              for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
              return f.join(",")
            }
            if (b = a.match(u) || [], m = b.length, k > m--)
              for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
            return h + b.join(j) + i
          } : function(a) {
            return a
          }
        },
        ra = function(a) {
          return a = a.split(","),
            function(b, c, d, e, f, g, h) {
              var i, j = (c + "").split(" ");
              for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
              return e.parse(b, h, f, g)
            }
        },
        sa = (S._setPluginRatio = function(a) {
          this.plugin.setRatio(a);
          for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) b = h[i.v], i.r ? b = Math.round(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
          if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod(h.rotation, this.t) : h.rotation), 1 === a || 0 === a)
            for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
              if (c = i.t, c.type) {
                if (1 === c.type) {
                  for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                  c[f] = e
                }
              } else c[f] = c.s + c.xs0;
              i = i._next
            }
        }, function(a, b, c, d, e) {
          this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
        }),
        ta = (S._parseToProxy = function(a, b, c, d, e, f) {
          var g, h, i, j, k, l = d,
            m = {},
            n = {},
            o = c._transform,
            p = M;
          for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
            if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new sa(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
              for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new sa(d, i, h, j, d.rxp[i]));
            d = d._next
          }
          return {
            proxy: m,
            end: n,
            firstMPT: j,
            pt: k
          }
        }, S.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
          this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ta || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
        }),
        ua = function(a, b, c, d, e, f) {
          var g = new ta(a, b, c, d - c, e, -1, f);
          return g.b = c, g.e = g.xs0 = d, g
        },
        va = g.parseComplex = function(a, b, c, d, e, f, h, i, j, l) {
          c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && pa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
          var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "),
            E = d.split(", ").join(",").split(" "),
            F = D.length,
            G = k !== !1;
          for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, pa.lastIndex = 0, m = 0; F > m; m++)
            if (p = D[m], u = E[m], x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px"), !0);
            else if (e && pa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && U, z = u, p = na(p, C), u = na(u, C), y = p.length + u.length > 6, y && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ia(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ia(u[1], p[1]), "%,", !1).appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", !0, !0).appendXtra("", p[1], u[1] - p[1], ",", !0).appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), pa.lastIndex = 0;
          else if (v = p.match(s)) {
            if (w = u.match(t), !w || w.length !== v.length) return h;
            for (o = 0, n = 0; n < v.length; n++) A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2), 0 === n), o = z + A.length;
            h["xs" + h.l] += p.substr(o)
          } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
          if (-1 !== d.indexOf("=") && h.data) {
            for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
            h.e = B + h["xs" + m]
          }
          return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h
        },
        wa = 9;
      for (j = ta.prototype, j.l = j.pr = 0; --wa > 0;) j["xn" + wa] = 0, j["xs" + wa] = "";
      j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function(a, b, c, d, e, f) {
        var g = this,
          h = g.l;
        return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
          s: b + c
        }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
      };
      var xa = function(a, b) {
          b = b || {}, this.p = b.prefix ? Z(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
        },
        ya = S._registerComplexSpecialProp = function(a, b, c) {
          "object" != typeof b && (b = {
            parser: c
          });
          var d, e, f = a.split(","),
            g = b.defaultValue;
          for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new xa(f[d], b)
        },
        za = S._registerPluginProp = function(a) {
          if (!i[a]) {
            var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
            ya(a, {
              parser: function(a, c, d, e, f, g, j) {
                var k = h.com.greensock.plugins[b];
                return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f)
              }
            })
          }
        };
      j = xa.prototype, j.parseComplex = function(a, b, c, d, e, f) {
        var g, h, i, j, k, l, m = this.keyword;
        if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) {
          for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
          b = h.join(", "), c = i.join(", ")
        }
        return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
      }, j.parse = function(a, b, c, d, f, g, h) {
        return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
      }, g.registerSpecialProp = function(a, b, c) {
        ya(a, {
          parser: function(a, d, e, f, g, h, i) {
            var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
            return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
          },
          priority: c
        })
      }, g.useSVGTransformAttr = !0;
      var Aa, Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
        Ca = Z("transform"),
        Da = X + "transform",
        Ea = Z("transformOrigin"),
        Fa = null !== Z("perspective"),
        Ga = S.Transform = function() {
          this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1
        },
        Ha = _gsScope.SVGElement,
        Ia = function(a, b, c) {
          var d, e = O.createElementNS("http://www.w3.org/2000/svg", a),
            f = /([a-z])([A-Z])/g;
          for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
          return b.appendChild(e), e
        },
        Ja = O.documentElement || {},
        Ka = function() {
          var a, b, c, d = p || /Android/i.test(T) && !_gsScope.chrome;
          return O.createElementNS && !d && (a = Ia("svg", Ja), b = Ia("rect", a, {
            width: 100,
            height: 50,
            x: 100
          }), c = b.getBoundingClientRect().width, b.style[Ea] = "50% 50%", b.style[Ca] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Fa), Ja.removeChild(a)), d
        }(),
        La = function(a, b, c, d, e, f) {
          var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform,
            w = Qa(a, !0);
          v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = {
            x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
            y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
            width: 0,
            height: 0
          }), b = ha(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Pa && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "))
        },
        Ma = function(a) {
          var b, c = P("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            d = this.parentNode,
            e = this.nextSibling,
            f = this.style.cssText;
          if (Ja.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
            b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ma
          } catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());
          return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), this.style.cssText = f, b
        },
        Na = function(a) {
          try {
            return a.getBBox()
          } catch (b) {
            return Ma.call(a, !0)
          }
        },
        Oa = function(a) {
          return !(!Ha || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Na(a))
        },
        Pa = [1, 0, 0, 1, 0, 0],
        Qa = function(a, b) {
          var c, d, e, f, g, h, i = a._gsTransform || new Ga,
            j = 1e5,
            k = a.style;
          if (Ca ? d = _(a, Da, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, !Ca || !(h = !$(a) || "none" === $(a).display) && a.parentNode || (h && (f = k.display, k.display = "block"), a.parentNode || (g = 1, Ja.appendChild(a)), d = _(a, Da, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? k.display = f : h && Va(k, "display"), g && Ja.removeChild(a)), (i.svg || a.getCTM && Oa(a)) && (c && -1 !== (k[Ca] + "").indexOf("matrix") && (d = k[Ca], c = 0), e = a.getAttribute("transform"), c && e && (e = a.transform.baseVal.consolidate().matrix, d = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")", c = 0)), c) return Pa;
          for (e = (d || "").match(s) || [], wa = e.length; --wa > -1;) f = Number(e[wa]), e[wa] = (g = f - (f |= 0)) ? (g * j + (0 > g ? -.5 : .5) | 0) / j + f : f;
          return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
        },
        Ra = S.getTransform = function(a, c, d, e) {
          if (a._gsTransform && d && !e) return a._gsTransform;
          var f, h, i, j, k, l, m = d ? a._gsTransform || new Ga : new Ga,
            n = m.scaleX < 0,
            o = 2e-5,
            p = 1e5,
            q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
            r = parseFloat(g.defaultTransformPerspective) || 0;
          if (m.svg = !(!a.getCTM || !Oa(a)), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Aa = g.useSVGTransformAttr || Ka), f = Qa(a), f !== Pa) {
            if (16 === f.length) {
              var s, t, u, v, w, x = f[0],
                y = f[1],
                z = f[2],
                A = f[3],
                B = f[4],
                C = f[5],
                D = f[6],
                E = f[7],
                F = f[8],
                G = f[9],
                H = f[10],
                I = f[12],
                J = f[13],
                K = f[14],
                M = f[11],
                N = Math.atan2(D, H);
              m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(N), w = Math.sin(N), s = x * v + y * w, t = B * v + C * w, u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, B = t, F = u), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * L, B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C))
            } else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
              var O = f.length >= 6,
                P = O ? f[0] : 1,
                Q = f[1] || 0,
                R = f[2] || 0,
                S = O ? f[3] : 1;
              m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Fa && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S))
            }
            Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q;
            for (h in m) m[h] < o && m[h] > -o && (m[h] = 0)
          }
          return d && (a._gsTransform = m, m.svg && (Aa && a.style[Ca] ? b.delayedCall(.001, function() {
            Va(a.style, Ca)
          }) : !Aa && a.getAttribute("transform") && b.delayedCall(.001, function() {
            a.removeAttribute("transform")
          }))), m
        },
        Sa = function(a) {
          var b, c, d = this.data,
            e = -d.rotation * K,
            f = e + d.skewX * K,
            g = 1e5,
            h = (Math.cos(e) * d.scaleX * g | 0) / g,
            i = (Math.sin(e) * d.scaleX * g | 0) / g,
            j = (Math.sin(f) * -d.scaleY * g | 0) / g,
            k = (Math.cos(f) * d.scaleY * g | 0) / g,
            l = this.t.style,
            m = this.t.currentStyle;
          if (m) {
            c = i, i = -j, j = -c, b = m.filter, l.filter = "";
            var n, o, q = this.t.offsetWidth,
              r = this.t.offsetHeight,
              s = "absolute" !== m.position,
              t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
              u = d.x + q * d.xPercent / 100,
              v = d.y + r * d.yPercent / 100;
            if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
              var y, z, A, B = 8 > p ? 1 : -1;
              for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), wa = 0; 4 > wa; wa++) z = fa[wa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > wa ? -d.ieOffsetX : -d.ieOffsetY : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px"
            }
          }
        },
        Ta = S.set3DTransformRatio = S.setTransformRatio = function(a) {
          var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
            A = this.t.style,
            B = z.rotation,
            C = z.rotationX,
            D = z.rotationY,
            E = z.scaleX,
            F = z.scaleY,
            G = z.scaleZ,
            H = z.x,
            I = z.y,
            J = z.z,
            L = z.svg,
            M = z.perspective,
            N = z.force3D,
            O = z.skewY,
            P = z.skewX;
          if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Aa && L || !Fa) return void(B || P || L ? (B *= K, x = P * K, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * K), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b)), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Aa && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
          if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= K, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * K, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * K), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;
          else {
            if (!(D || C || 1 !== G || M || L)) return void(A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
            c = g = 1, d = f = 0
          }
          k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * K, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * K, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || L) && (p && (H += e * -p, I += h * -p, J += k * -p + p), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ca] = u
        };
      j = Ga.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
        parser: function(a, b, c, d, f, h, i) {
          if (d._lastParsedTransform === i) return f;
          d._lastParsedTransform = i;
          var j, k = i.scale && "function" == typeof i.scale ? i.scale : 0;
          "function" == typeof i[c] && (j = i[c], i[c] = b), k && (i.scale = k(r, a));
          var l, m, n, o, p, s, t, u, v, w = a._gsTransform,
            x = a.style,
            y = 1e-6,
            z = Ba.length,
            A = i,
            B = {},
            C = "transformOrigin",
            D = Ra(a, e, !0, A.parseTransform),
            E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform);
          if (D.skewType = A.skewType || D.skewType || g.defaultSkewType, d._transform = D, E && "string" == typeof E && Ca) m = Q.style, m[Ca] = E, m.display = "block", m.position = "absolute", O.body.appendChild(Q), l = Ra(Q, null, !1), "simple" === D.skewType && (l.scaleY *= Math.cos(l.skewX * K)), D.svg && (s = D.xOrigin, t = D.yOrigin, l.x -= D.xOffset, l.y -= D.yOffset, (A.transformOrigin || A.svgOrigin) && (E = {}, La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), s = E.xOrigin, t = E.yOrigin, l.x -= E.xOffset - D.xOffset, l.y -= E.yOffset - D.yOffset), (s || t) && (u = Qa(Q, !0), l.x -= s - (s * u[0] + t * u[2]), l.y -= t - (s * u[1] + t * u[3]))), O.body.removeChild(Q), l.perspective || (l.perspective = D.perspective), null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)), null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent));
          else if ("object" == typeof A) {
            if (l = {
                scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX),
                scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY),
                scaleZ: ja(A.scaleZ, D.scaleZ),
                x: ja(A.x, D.x),
                y: ja(A.y, D.y),
                z: ja(A.z, D.z),
                xPercent: ja(A.xPercent, D.xPercent),
                yPercent: ja(A.yPercent, D.yPercent),
                perspective: ja(A.transformPerspective, D.perspective)
              }, p = A.directionalRotation, null != p)
              if ("object" == typeof p)
                for (m in p) A[m] = p[m];
              else A.rotation = p;
            "string" == typeof A.x && -1 !== A.x.indexOf("%") && (l.x = 0, l.xPercent = ja(A.x, D.xPercent)), "string" == typeof A.y && -1 !== A.y.indexOf("%") && (l.y = 0, l.yPercent = ja(A.y, D.yPercent)), l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : "rotationZ" in A ? A.rotationZ : D.rotation, D.rotation, "rotation", B), Fa && (l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B), l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B)), l.skewX = ka(A.skewX, D.skewX), l.skewY = ka(A.skewY, D.skewY)
          }
          for (Fa && null != A.force3D && (D.force3D = A.force3D, o = !0), n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, n || null == A.scale || (l.scaleZ = 1); --z > -1;) v = Ba[z], E = l[v] - D[v], (E > y || -y > E || null != A[v] || null != M[v]) && (o = !0, f = new ta(D, v, D[v], E, f), v in B && (f.e = B[v]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
          return E = A.transformOrigin, D.svg && (E || A.svgOrigin) && (s = D.xOffset, t = D.yOffset, La(a, ha(E), l, A.svgOrigin, A.smoothOrigin), f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C), f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C), (s !== D.xOffset || t !== D.yOffset) && (f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C), f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C)), E = "0px 0px"), (E || Fa && n && D.zOrigin) && (Ca ? (o = !0, v = Ea, E = (E || _(a, v, e, !1, "50% 50%")) + "", f = new ta(x, v, 0, 0, f, -1, C), f.b = x[v], f.plugin = h, Fa ? (m = D.zOrigin, E = E.split(" "), D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0, f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px", f = new ta(D, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = D.zOrigin) : f.xs0 = f.e = E) : ha(E + "", D)), o && (d._transformType = D.svg && Aa || !n && 3 !== this._transformType ? 2 : 3), j && (i[c] = j), k && (i.scale = k), f
        },
        prefix: !0
      }), ya("boxShadow", {
        defaultValue: "0px 0px 0px 0px #999",
        prefix: !0,
        color: !0,
        multi: !0,
        keyword: "inset"
      }), ya("borderRadius", {
        defaultValue: "0px",
        parser: function(a, b, c, f, g, h) {
          b = this.format(b);
          var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
            z = a.style;
          for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = Z(y[j])), m = l = _(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = aa(a, "borderLeft", o, t), w = aa(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = aa(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
          return g
        },
        prefix: !0,
        formatter: qa("0px 0px 0px 0px", !1, !0)
      }), ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
        defaultValue: "0px",
        parser: function(a, b, c, d, f, g) {
          return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f)
        },
        prefix: !0,
        formatter: qa("0px 0px", !1, !0)
      }), ya("backgroundPosition", {
        defaultValue: "0 0",
        parser: function(a, b, c, d, f, g) {
          var h, i, j, k, l, m, n = "background-position",
            o = e || $(a, null),
            q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
            r = this.format(b);
          if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = _(a, "backgroundImage").replace(D, ""), m && "none" !== m)) {
            for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
            q = h.join(" ")
          }
          return this.parseComplex(a.style, q, r, f, g)
        },
        formatter: ha
      }), ya("backgroundSize", {
        defaultValue: "0 0",
        formatter: function(a) {
          return a += "", ha(-1 === a.indexOf(" ") ? a + " " + a : a)
        }
      }), ya("perspective", {
        defaultValue: "0px",
        prefix: !0
      }), ya("perspectiveOrigin", {
        defaultValue: "50% 50%",
        prefix: !0
      }), ya("transformStyle", {
        prefix: !0
      }), ya("backfaceVisibility", {
        prefix: !0
      }), ya("userSelect", {
        prefix: !0
      }), ya("margin", {
        parser: ra("marginTop,marginRight,marginBottom,marginLeft")
      }), ya("padding", {
        parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft")
      }), ya("clip", {
        defaultValue: "rect(0px,0px,0px,0px)",
        parser: function(a, b, c, d, f, g) {
          var h, i, j;
          return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(_(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
        }
      }), ya("textShadow", {
        defaultValue: "0px 0px 0px #999",
        color: !0,
        multi: !0
      }), ya("autoRound,strictUnits", {
        parser: function(a, b, c, d, e) {
          return e
        }
      }), ya("border", {
        defaultValue: "0px solid #000",
        parser: function(a, b, c, d, f, g) {
          var h = _(a, "borderTopWidth", e, !1, "0px"),
            i = this.format(b).split(" "),
            j = i[0].replace(w, "");
          return "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
        },
        color: !0,
        formatter: function(a) {
          var b = a.split(" ");
          return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0]
        }
      }), ya("borderWidth", {
        parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
      }), ya("float,cssFloat,styleFloat", {
        parser: function(a, b, c, d, e, f) {
          var g = a.style,
            h = "cssFloat" in g ? "cssFloat" : "styleFloat";
          return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
        }
      });
      var Ua = function(a) {
        var b, c = this.t,
          d = c.filter || _(this.data, "filter") || "",
          e = this.s + this.c * a | 0;
        100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !_(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e))
      };
      ya("opacity,alpha,autoAlpha", {
        defaultValue: "1",
        parser: function(a, b, c, d, f, g) {
          var h = parseFloat(_(a, "opacity", e, !1, "1")),
            i = a.style,
            j = "autoAlpha" === c;
          return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0), U ? f = new ta(i, "opacity", h, b - h, f) : (f = new ta(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ua), j && (f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
        }
      });
      var Va = function(a, b) {
          b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b))
        },
        Wa = function(a) {
          if (this.t._gsClassPT = this, 1 === a || 0 === a) {
            this.t.setAttribute("class", 0 === a ? this.b : this.e);
            for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Va(c, b.p), b = b._next;
            1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
          } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
      ya("className", {
        parser: function(a, b, d, f, g, h, i) {
          var j, k, l, m, n, o = a.getAttribute("class") || "",
            p = a.style.cssText;
          if (g = f._classNamePT = new ta(a, d, 0, 0, g, 2), g.setRatio = Wa, g.pr = -11, c = !0, g.b = o, k = ca(a, e), l = a._gsClassPT) {
            for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
            l.setRatio(1)
          }
          return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = da(a, k, ca(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)
        }
      });
      var Xa = function(a) {
        if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
          var b, c, d, e, f, g = this.t.style,
            h = i.transform.parse;
          if ("all" === this.e) g.cssText = "", e = !0;
          else
            for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ea : i[c].p), Va(g, c);
          e && (Va(g, Ca), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
        }
      };
      for (ya("clearProps", {
          parser: function(a, b, d, e, f) {
            return f = new ta(a, d, 0, 0, f, 2), f.setRatio = Xa, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
          }
        }), j = "bezier,throwProps,physicsProps,physics2D".split(","), wa = j.length; wa--;) za(j[wa]);
      j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function(a, b, h, j) {
        if (!a.nodeType) return !1;
        this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = $(a, ""), f = this._overwriteProps;
        var n, p, s, t, u, v, w, x, z, A = a.style;
        if (l && "" === A.zIndex && (n = _(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ca(a, e), A.cssText = t + ";" + b, n = da(a, n, ca(a)).difs, !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
          for (z = 3 === this._transformType, Ca ? m && (l = !0, "" === A.zIndex && (w = _(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) s = s._next;
          x = new ta(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ca ? Ta : Sa, x.data = this._transform || Ra(a, e, !0), x.tween = h, x.pr = -1, f.pop()
        }
        if (c) {
          for (; p;) {
            for (v = p._next, s = t; s && s.pr > p.pr;) s = s._next;
            (p._prev = s ? s._prev : u) ? p._prev._next = p: t = p, (p._next = s) ? s._prev = p : u = p, p = v
          }
          this._firstPT = t
        }
        return !0
      }, j.parse = function(a, b, c, f) {
        var g, h, j, l, m, n, o, p, s, t, u = a.style;
        for (g in b) {
          if (n = b[g], "function" == typeof n && (n = n(r, q)), h = i[g]) c = h.parse(a, n, g, this, c, f, b);
          else {
            if ("--" === g.substr(0, 2)) {
              this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", $(a).getPropertyValue(g) + "", n + "", g, !1, g);
              continue
            }
            m = _(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = na(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = va(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = va(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ga(a, g, e), o = "px") : "left" === g || "top" === g ? (j = ba(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = aa(a, g, j, o), "%" === p ? (j /= aa(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= aa(a, g, 1, p) : "px" !== p && (l = aa(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ta(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p))
          }
          f && c && !c.plugin && (c.plugin = f)
        }
        return c
      }, j.setRatio = function(a) {
        var b, c, d, e = this._firstPT,
          f = 1e-6;
        if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
          if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
            for (; e;) {
              if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type)
                if (1 === e.type)
                  if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                  else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
              else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
              else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
              else {
                for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                e.t[e.p] = c
              } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
              else e.t[e.p] = b + e.xs0;
              e = e._next
            } else
              for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
          else
            for (; e;) {
              if (2 !== e.type)
                if (e.r && -1 !== e.type)
                  if (b = Math.round(e.s + e.c), e.type) {
                    if (1 === e.type) {
                      for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                      e.t[e.p] = c
                    }
                  } else e.t[e.p] = b + e.xs0;
              else e.t[e.p] = e.e;
              else e.setRatio(a);
              e = e._next
            }
      }, j._enableTransforms = function(a) {
        this._transform = this._transform || Ra(this._target, e, !0), this._transformType = this._transform.svg && Aa || !a && 3 !== this._transformType ? 2 : 3
      };
      var Ya = function(a) {
        this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
      };
      j._addLazySet = function(a, b, c) {
        var d = this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2);
        d.e = c, d.setRatio = Ya, d.data = this
      }, j._linkCSSP = function(a, b, c, d) {
        return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
      }, j._mod = function(a) {
        for (var b = this._firstPT; b;) "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1), b = b._next
      }, j._kill = function(b) {
        var c, d, e, f = b;
        if (b.autoAlpha || b.alpha) {
          f = {};
          for (d in b) f[d] = b[d];
          f.opacity = 1, f.autoAlpha && (f.visibility = 1)
        }
        for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
        return a.prototype._kill.call(this, f)
      };
      var Za = function(a, b, c) {
        var d, e, f, g;
        if (a.slice)
          for (e = a.length; --e > -1;) Za(a[e], b, c);
        else
          for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(ca(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Za(f, b, c)
      };
      return g.cascadeTo = function(a, c, d) {
        var e, f, g, h, i = b.to(a, c, d),
          j = [i],
          k = [],
          l = [],
          m = [],
          n = b._internals.reservedProps;
        for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
          if (f = da(m[e], k[e], l[e]), f.firstMPT) {
            f = f.difs;
            for (g in d) n[g] && (f[g] = d[g]);
            h = {};
            for (g in f) h[g] = k[e][g];
            j.push(b.fromTo(m[e], c, h, f))
          } return j
      }, a.activate([g]), g
    }, !0)
  }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  function(a) {
    "use strict";
    var b = function() {
      return (_gsScope.GreenSockGlobals || _gsScope)[a]
    };
    "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = b()) : "function" == typeof define && define.amd && define(["TweenLite"], b)
  }("CSSPlugin"); //var initializeMaps;
(function(document, window) {

  "use strict";

  var $win = $(window),
    $doc = $(document),
    $html = $('html:first'),
    $body = $html.find('body:first'),
    $wrapper = $body.find('.wrapper:first'),
    $header = $wrapper.find('.row-header:first'),
    isMobile = $('html:first').hasClass('is-mobile'),
    mobile = (!$header.find('.menu-trigger').is(':visible') && !isMobile) ? false : true,
    isIE = /*@cc_on!@*/ false || !!document.documentMode,
    isEdge = !isIE && !!window.StyleMedia,
    scrollBarWidth = 0,

    $nav, $slickNav,

    app = {

      init: function() {

        var app = this;

        scrollBarWidth = app.getScrollBarWidth();

        app.emailObfuscator();

        app.nav();

        app.images();

        //app.anchorNavFilter();

        /*$("a.to-top").headroom({
        	"offset": 120
        });*/

        $header.headroom({
          "offset": 0
        });

        // Unpin header on URL fragments
        //app.fixTouchHover();

        /*var scroll = new SmoothScroll();
        $('.to-content[href*="#"]').on('click', function(e){
        	e.preventDefault();
        	var $el = $($(this).attr('href').substring($(this).attr('href').indexOf("#")));
        	//console.log($el);
        	scroll.animateScroll($el.get(0), $(this).get(0), { header: '.row-header' });
        });*/
        /*
        var $firstOuter = $('.row-footer:first');
        var scroll = new SmoothScroll('.anchor-nav a[href*="#"]', {
        	offset: function(){
        		return parseInt($firstOuter.css('padding-top'));
        	}
        });
        */
        //var scrollToContent = new SmoothScroll('.to-content[href*="#"]');
        var scroll = new SmoothScroll('a[href*="#"]', {
          offset: function() {
            if (isMobile) {
              return 0;
            } else {
              var offset = (($header.hasClass('headroom--not-top')) ? $header.outerHeight() : $header.outerHeight() / 2);
              if (isIE) {
                offset += 10;
              }
              return offset;
            }
          }
        });

        $('.to-content').on('click', function(e) {
          e.preventDefault();
          scroll.animateScroll($('#start').get(0));
        });

        $doc.ready(function() {
          var $wrapper = $('.wrapper:first');
          var $head = $wrapper.find('> header:first');
          app.moreText();

          if ($body.hasClass('addon-page')) {
            scroll.animateScroll($('#content').get(0));
          }
          //app.team();
          //app.maps();
          //app.applicationForm();
          //app.forms();
          //app.shareButtons();

        });

        $win.on('load', function() {
          //app.videos();
          app.scrollHandler();
          if (window.location.hash) {
            $(".row-header").removeClass("headroom--pinned").addClass("headroom--unpinned");
          }
        });

      },

      moreText: function() {

        var $moreLink = $('.more-link');
        var $moreBodies = $('.more-text');

        if ($moreLink.length) {
          $moreBodies.slideUp(0);
          $moreLink.each(function() {
            var $this = $(this);
            var $body = $($this.data('id'));
            $this.on('click', function(e) {
              e.stopImmediatePropagation();
              if ($this.hasClass('active')) {
                $this.removeClass('active').find('.icon').toggleClass('icon-Mehr icon-Weniger');
                $body.slideUp(350);
              } else {
                $moreLink.not($this).removeClass('active').find('.icon').addClass('icon-Mehr').removeClass('icon-Weniger');
                $moreBodies.not($body).slideUp(350);
                $this.toggleClass('active').find('.icon').toggleClass('icon-Mehr icon-Weniger');
                $body.slideDown(350);
              }
              $this.trigger('blur');
            });
          });
        }

      },

      fixTouchHover: function() {

        var $els = $(''),
          $lastEl;

        $els.data('touched', false);

        $doc.on('touchend', function(e) {
          var $el = $(e.target);
          if ($el != $lastEl) {
            $els.data('touched', false);
          }
        });
        $els.on('touchend', function(e) {
          var $this = $(this);
          $els.not($this).data('touched', false);
          if (!$this.data('touched')) {
            // Don't trigger mouseenter even if they hold
            e.stopImmediatePropagation();
            // If $item is a link (<a>), don't go to said link on mobile, show menu instead
            e.preventDefault();
            $(this).data('touched', true);
          }
        });
      },

      images: function() {

        // focuspoints
        if ('undefined' != typeof Modernizr && !Modernizr.objectfit) {
          $('.img-cell img').each(function() {
            var $img = $(this),
              $cont = $img.parent(),
              bgData = window.getComputedStyle(this).fontFamily.replace(/"/g, '').split(";"),
              bgSize = bgData[0] == 'cover' ? 'cover' : 'contain',
              bgPos = bgData[1];
            bgPos = $img.data('bg-pos') ? $img.data('bg-pos') : bgPos;
            $cont.addClass('b-lazy preload')
              .attr({
                'data-src': $img.data('src'),
                'data-src-mobile': $img.data('src-mobile')
              })
              .css({
                'background-position': bgPos,
                'background-size': bgSize,
                'background-repeat': 'no-repeat'
              });
            $img.css('opacity', 0);
          });
        } else if ('undefined' == typeof Modernizr) {
          $html.removeClass('no-js').addClass('js');
          objectFitImages($('.img-cell img'));
        }

        // bLazy
        window.bLazy = new Blazy({
          breakpoints: [{
              width: 420,
              src: 'data-src-mobile'
            },
            {
              width: 1024,
              src: 'data-src-tablet'
            }
          ]
        });
        /*
        $(".rslides").responsiveSlides({
        	pager: false,
        	nav: true,
        	auto: false,
        	pause: false,
        	timeout: 7000,
        	speed: 1000,
        	prevText: prevText,
        	nextText: nextText
        });

        var responsive = {
        	768: {
        		margin: 20,
        		items: 3
        	},
        	1024: {
        		margin: 30,
        		items: 4
        	}
        };

        $(".rslides").responsiveSlides({
        	pager: true,
        	nav: false,
        	auto: false,
        	pause: true,
        	timeout: 7000,
        	speed: 1000
        });

        $('.owl-carousel').owlCarousel({
        	loop:true,
            items:1,
            margin:0,
            nav: false,
        	dots: true,
        	autoplay: true,
        	autoplayTimeout: 5000,
        	autoplayHoverPause: true,
            responsive: responsive,
        	onChanged: function() {
        		setTimeout(function(){
        			window.bLazy.revalidate();
        		}, 250);
        	},
        	onInitialized: function(){
        		setTimeout(function(){
        			window.bLazy.revalidate();
        		}, 250);
        	}
        });


        */
      },

      preloader: function() {
        var $preloader = $(".preloader");
        if ($preloader.length) {
          var $preloaderWrap = $('.preloader-ani');
          $body.addClass("noscroll");
          $doc.ready(function($) {
            $preloaderWrap.fadeIn("fast");
          });
          $win.load(function() {
            TweenLite.to($preloader, 0.4, {
              scale: 1.4,
              autoAlpha: 0,
              onComplete: function() {
                $preloader.remove();
                //app.smoothScroll();
                //$body.removeClass("noscroll");
              }
            });
          });
        }
      },

      resizeHandler: function() {
        var $barba = $('#barba-wrapper');

        var updating = false,
          execute = function() {
            $header.data('headroom').offset = $header.height();
          },
          update = function() {
            execute();
            updating = false;
          },
          handler = function() {
            if (!updating) {
              updating = true;
              update();
            }
          };

        $win.on("resize.resizehandler", function() {
          requestAnimationFrame(handler);
        }).trigger("resize.resizehandler");
      },

      nav: function() {

        $nav = $('#main-menu');
        var $lis = $nav.find('.main-nav > ul > li');
        var from = {
          y: "-100%",
          autoAlpha: 0
        };
        var to = {
          y: "0%",
          autoAlpha: 1
        };

        var $menuTriggers = $('.menu-trigger'),
          closeMenu = function($trigger) {
            var $menu = $('#' + $trigger.data('id'));
            var $padder = $menu.find('.padder');

            if ($trigger.hasClass('active')) {
              $trigger.removeClass('active');
              $menu.removeClass('open');
              $html.addClass($trigger.data('id') + '-closed');
              $html.removeClass($trigger.data('id') + '-open');
              TweenLite.to($menu, 0.3, {
                y: "-100%",
                autoAlpha: 0,
                onComplete: function() {
                  TweenLite.set($lis, {
                    scale: 1.1,
                    autoAlpha: 0
                  });
                }
              });
              $html.off('click.close-menu');
              //enableBodyScroll($nav.get(0));
              app.setBodyScroll('on', $nav.get(0));
            }

          };

        $menuTriggers.each(function() {

          var $this = $(this),
            $menu = $('#' + $this.data('id')),
            $closeBtn = $('.menu-close', $menu);
          var $padder = $menu.find('.padder');

          TweenLite.set($lis, {
            scale: 1.1,
            autoAlpha: 0
          });
          $menu.css('display', 'block');
          TweenLite.set($menu, from);
          $html.addClass($this.data('id') + '-closed');
          closeMenu($this);

          $menu.on('click.close-menu', function(e) {
            e.stopPropagation();
          });

          $this.on('click.menu', function(e) {
            e.preventDefault();
            this.blur();
            if ($this.hasClass('active')) {
              closeMenu($this);
            } else {
              //mobile = ($wrapper.css('padding-top') === '0px' && !isMobile) ? false : true;
              $html.removeClass($this.data('id') + '-closed');
              $menu.addClass('open');
              $html.addClass($this.data('id') + '-open');
              //disableBodyScroll($nav.get(0));
              app.setBodyScroll('off', $nav.get(0));
              $this.addClass('active');
              to = $.extend(to, {
                onComplete: function() {
                  $html.on('click.close-menu', function() {
                    closeMenu($this);
                  });
                }
              })
              TweenLite.fromTo($menu, 0.3, from, to);
              $lis.each(function(i) {
                var $li = $(this);
                var to = (i == 0) ? 150 : 250 + (50 * i);
                setTimeout(function() {
                  TweenLite.to($li, 0.2, {
                    scale: 1,
                    autoAlpha: 1
                  });
                }, to);
              });
            }

          });

        });

        var $dropdowns = $nav.find('.has-dropdown');
        //var $dds = $dropdowns.find('> ul');
        $dropdowns.each(function() {
          var $li = $(this);
          //var $a = $li.find('> a');
          var $dd = $li.find('> ul');
          $dd.slideUp(0);
          $li.find('.fa').on('click', function(e) {
            e.preventDefault();
          });
          $li.on('click', function(e) {
            e.stopPropagation();

            var $target = $(e.target);
            if ($target.is('a') && !$target.parent().hasClass('dd-only')) {
              return true;
            }
            var $el = $li;

            var $activeDds = $dropdowns.filter('.dd-active').not($el).not($el.parents('li'));
            if ($activeDds.length) {
              $activeDds.removeClass('dd-active').find('>ul').slideUp(350);
            }
            if ($el.hasClass('dd-active')) {
              $el.removeClass('dd-active');
              $dd.slideUp(350);
            } else {
              $el.addClass('dd-active');
              $dd.slideDown(350);
            }
          });
        });

        /*

        var $menuTriggers = $('.menu-trigger'),
        	closeMenu = function($trigger){
        		var $menu = $('#' + $trigger.data('id'));
        		var $padder = $menu.find('.padder');

        		if($trigger.hasClass('active')) {
        			$trigger.removeClass('active');
        			$menu.removeClass('open');
        			$html.addClass($trigger.data('id')+'-closed');
        			$html.removeClass($trigger.data('id')+'-open');
        			//$win.scrollTop(scrollPos);
        			//TweenLite.to( $menu, 0.3, { scaleY: 0, autoAlpha: 0 });
        			$menu.slideUp(300, function(){
        				TweenLite.set( $lis, { scale: 1.1, autoAlpha: 0 });
        			});
        			//TweenLite.to( $logo, 0.3, { x: "0%" });
        			//TweenLite.to( $wrapper, 0.3, from);
        			$html.off('click.close-menu');
        			setBodyScroll('off', $trigger);
        		}

        	}
        ;

        $menuTriggers.each(function(){

        	var $this = $(this),
        		$menu = $('#' + $this.data('id')),
        		$closeBtn = $('.menu-close', $menu);

        	$html.addClass($this.data('id')+'-closed');
        	//TweenLite.set( $menu, { scaleY: 0, autoAlpha: 0 });
        	$menu.css('display','block').slideUp(0);
        	TweenLite.set( $lis, { scale: 1.1, autoAlpha: 0 });
        	//closeMenu($this);

        	$menu.on('click.close-menu', function(e){
        		e.stopPropagation();
        	});

        	$this.on('click.menu', function(e){
        		e.preventDefault();

        		this.blur();
        		if($this.hasClass('active')) {
        	        closeMenu($this);
        		} else {
        			$this.addClass('active');
        			$html.removeClass($this.data('id')+'-closed');
        			$menu.addClass('open');
        			$html.addClass($this.data('id')+'-open');
        			setBodyScroll('on', $this);
        			to = $.extend(to, {onComplete: function(){
        				$html.on('click.close-menu', function(){
        					closeMenu($this);
        				});
        			}});
        			//TweenLite.fromTo( $menu, 0.3, { scaleY: 0, autoAlpha: 0 }, { scaleY: 1, autoAlpha: 1 });
        			$menu.slideDown(300);
        			$lis.each(function(i){
        				var $li = $(this);
        				var to = (i==0) ? 150 : 250 + (50 * i);
        				setTimeout(function(){
        					TweenLite.to( $li, 0.2, { scale: 1, autoAlpha: 1 });
        				}, to);
        			});
        			//TweenLite.fromTo( $logo, 0.3, { x: "0%" }, { x: "100%" });
        			//TweenLite.fromTo( $wrapper, 0.3, from, to);
        		}

        	});

        });

        */
      },

      maps: function() {

        var $gmap = $('#gmap'),
          loadedMaps = false;

        if ($gmap.length) {

          var checking = false,
            check = function() {
              if ($.inview($gmap) && $gmap.is(':visible')) {
                loadMap();
                $win.off("scroll.isinviewmap resize.isinviewmap");
              }
              checking = false;
            },
            handler = function() {
              if (!checking) {
                checking = true;
                check();
              }
            },
            loadMap = function() {
              var name = $gmap.data('name'),
                street = $gmap.data('street'),
                zip = $gmap.data('zip'),
                city = $gmap.data('city'),
                geocoder,
                map,
                geocoderAddr = '',
                linkAddr,
                address,
                res,
                checking = false,
                check = function() {
                  checking = false;
                  map.setCenter(res[0].geometry.location);
                  google.maps.event.trigger(map, 'resize');
                  map.panTo(res[0].geometry.location);
                },
                handler = function() {
                  if (!checking) {
                    checking = true;
                    check();
                  }
                };

              //geocoderAddr = name + ', ';
              geocoderAddr += (street) ? street + ', ' : '';
              geocoderAddr += (zip) ? zip + ' ' : '';
              geocoderAddr += (city) ? city : '';

              //linkAddr = name + ', ' + geocoderAddr;
              linkAddr = geocoderAddr;

              //console.log(geocoderAddr);

              address = '<b>' + name + '</b><br />';
              address += (street) ? street + '<br />' : '';
              address += (zip) ? zip + ' ' : '';
              address += (city) ? city + '<br /><br />' : '<br /><br />';

              //console.log(geocoderAddr);

              if (!loadedMaps) {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = '//maps.googleapis.com/maps/api/js?key=AIzaSyBdITskfR7nAlee58G7KCYicxgrSj5Me5c&v=3&language=' + globals.langCode + '&callback=initializeMaps';
                document.body.appendChild(script);
                loadedMaps = true;
              } else {
                initializeMaps();
              }

              window.initializeMaps = function() {
                geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(-34.397, 150.644),
                  mapStyles = [{
                    stylers: [{
                      saturation: -100
                    }]
                  }],
                  mapOptions = {
                    zoom: 16,
                    center: latlng,
                    styles: mapStyles,
                    mapTypeControl: true,
                    mapTypeControlOptions: {
                      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                    },
                    navigationControl: true,
                    scrollwheel: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                  };

                map = new google.maps.Map(document.getElementById("gmap"), mapOptions);

                if (geocoder) {

                  geocoder.geocode({
                    'address': geocoderAddr
                  }, function(results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {

                      if (status !== google.maps.GeocoderStatus.ZERO_RESULTS) {

                        res = results;

                        var winOpen = false;
                        var txtPlanRoute = 'Route planen';
                        var txtOpenMaps = 'Google Maps öffnen';
                        if (globals.lang == 'en') {
                          txtPlanRoute = 'Plan route';
                          txtOpenMaps = 'Open Google Maps';
                        }
                        if (globals.lang == 'fr') {
                          txtPlanRoute = 'Planifier une route';
                          txtOpenMaps = 'Ouvrir Google Maps';
                        }

                        address += '<a href="https://maps.google.ch/maps?f=d&mrt=yp&saddr=&daddr=' + encodeURI(linkAddr) + '" target="_blank" title="' + txtPlanRoute + '">' + txtPlanRoute + '</a><br />';
                        address += '<a href="https://maps.google.ch/maps?mrt=yp&z=14&q=' + encodeURI(linkAddr) + '&ll=' + results[0].geometry.location.lat() + ',' + results[0].geometry.location.lng() + '&Iwloc=A" target="_blank" title="' + txtOpenMaps + '">' + txtOpenMaps + '</a>';

                        var infowindow = new google.maps.InfoWindow({
                          content: address,
                          size: new google.maps.Size(150, 50)
                        });

                        var marker = new google.maps.Marker({
                          position: results[0].geometry.location,
                          map: map,
                          title: linkAddr,
                          icon: {
                            path: 'M18.45 36.91a18.46 18.46 0 1 1 18.46-18.46 18.48 18.48 0 0 1-18.46 18.46zm0-28.91a10.46 10.46 0 1 0 10.46 10.45A10.46 10.46 0 0 0 18.45 8z',
                            anchor: new google.maps.Point(18, 18),
                            scale: 1,
                            strokeColor: '#00003c',
                            strokeWeight: 0,
                            fillColor: '#00003c',
                            fillOpacity: 1,
                            optimized: false
                          }
                        });
                        google.maps.event.addListener(marker, 'click', function() {
                          if (!winOpen) {
                            infowindow.open(map, marker);
                            winOpen = true;
                          } else {
                            infowindow.close(map, marker);
                            winOpen = false;
                          }
                        });
                        google.maps.event.addListener(infowindow, 'closeclick', function() {
                          winOpen = false;
                        });
                        //infowindow.open(map,marker);

                        $gmap.addClass('loaded');

                        $win.on("resize.gmap", function() {
                          requestAnimationFrame(handler);
                        }).trigger("resize.gmap");
                      } else {
                        console.log('gmap: no results');
                      }
                    } else {
                      console.log(status);
                    }
                  });
                }
              };
            };

          $win.on("scroll.isinviewmap resize.isinviewmap", function() {
            requestAnimationFrame(handler);
          }).trigger("scroll.isinviewmap");

        }

      },

      forms: function() {

        var $forms = $('form'),
          addCaptcha = function($form) {
            var $recaptcha = $('#recaptcha');
            var initCaptcha = function() {
              window.grecaptcha.render('recaptcha', {
                'sitekey': '6LeGEUcUAAAAAM5RArTov0q0mkRAqg01hcyrIOgu',
                'callback': function() {
                  onSubmit(arguments[0], $form);
                },
                'size': 'invisible'
              });
            };
            if ($recaptcha.length) {
              if (!loadedRecaptcha) {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = '//www.google.com/recaptcha/api.js?onload=renderCaptcha&render=explicit&hl=' + globals.langCode;
                document.body.appendChild(script);
                loadedRecaptcha = true;
                window.renderCaptcha = initCaptcha;
              } else {
                initCaptcha();
              }
            }
          },
          onSubmit = function(token, $form) {
            //$form.submit();

            $form.ajaxSubmit({
              //clearForm: true,
              success: function(responseText, statusText, xhr, $form) {
                console.log('submit');
                var $alert = $('.alert', responseText);
                if ($('.alert', responseText).length) {
                  $('#rex-yform').find('.alert').remove();
                  $('#rex-yform').prepend($alert);
                  if ($alert.hasClass('success')) {
                    $form.trigger('reset');
                  }
                  $('button[type=submit]', $form).removeClass('loading').removeAttr('disabled');

                  grecaptcha.reset();
                } else {
                  $('#rex-yform').replaceWith($('.alert:first', responseText));
                }
              }
            });

            $('button[type=submit]', $form).attr('disabled', 'disabled').addClass('loading');

            return false;


          };

        if ($forms.length > 0) {

          $forms.each(function() {

            var $this = $(this),
              $hp = $this.find('.hpadress'),
              $btn = $this.find('button[type="submit"]');

            $hp.on("focus", function() {
              this.blur();
              $btn.focus();
            });


          });

          var $yform = $('.rex-yform');

          addCaptcha($yform);

          /*
          $yform.find('input,textarea').each(function(){
          	var $el = $(this);
          	var $label = $el.siblings('label');
          	var labelText = $label.text();
          	$label.hide();
          	$el.attr('placeholder', labelText);
          });
          */
        }
      },

      shareButtons: function() {

        var $buttons = $('a.sharer');

        if ($buttons.length) {


          var href = $(location).attr('href'),
            title = encodeURI($('.share-title').text()),
            desc = encodeURI($('.share-summary').text()),
            completeUrl = window.location.href,
            arr = completeUrl.split("/"),
            domain = arr[0] + "//" + arr[2],
            sharePopup = function(url) {
              var w = 800,
                h = 600,
                y = window.top.outerHeight / 2 + window.top.screenY - (h / 2),
                x = window.top.outerWidth / 2 + window.top.screenX - (w / 2);

              return window.open(url, 'Teilen', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + y + ', left=' + x);
            };

          window.fbAsyncInit = function() {
            FB.init({
              appId: globals.fbAppId,
              autoLogAppEvents: true,
              xfbml: true,
              version: 'v2.11'
            });

            $buttons.filter('.share-fb').on('click.share', function(e) {

              e.preventDefault();

              FB.ui({
                method: 'share',
                href: href
              });

            });

          };

          $buttons.filter('.share-xing').on('click.share', function(e) {
            e.preventDefault();
            sharePopup('https://www.xing.com/spi/shares/new?url=' + encodeURI(href) + '&follow_url=' + encodeURI('https://www.xing.com/companies/onikoag'));
          });
          $buttons.filter('.share-linkedin').on('click.share', function(e) {
            e.preventDefault();
            sharePopup('https://www.linkedin.com/shareArticle?mini=true&url=' + href + '&title=' + title + '&summary=' + desc + '&source=' + domain);
          });
          $buttons.filter('.share-gplus').on('click.share', function(e) {
            e.preventDefault();
            sharePopup('https://plus.google.com/share?url=' + href);
          });

          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
              return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_GB/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));

        }
      },

      videos: function() {

        var $htmlVideos = $('video');
        if ($htmlVideos.length > 0) {
          $htmlVideos.each(function() {

            var $vid = $(this);
            var mp4 = (isMobile) ? $vid.data('mp4-mobile') : $vid.data('mp4');
            var webm = (isMobile) ? $vid.data('webm-mobile') : $vid.data('webm');

            $vid.append('<source src="' + mp4 + '" type="video/mp4">');
            $vid.append('<source src="' + webm + '" type="video/webm">');

            //('.mp4').attr('src', mp4);
            //$vid.find('.webm').attr('src', webm);

            $vid.get(0).play();
          });

        }

        var $videos = $(".yt-video");

        if ($videos.length > 0) {

          $videos.each(function() {

            var $vid = $(this),
              id = $vid.data('id'),
              regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
              match = id.match(regExp);

            if (match && match[2].length == 11) {
              id = match[2];
            } else {
              return;
            }

            $vid.on('click.youtube', function(e) {

              e.preventDefault();

              if ($vid.data('loaded')) {
                return;
              }
              $vid.empty();
              $vid.data('loaded', true);

              var $wrap = $('<div class="video iframe-scalar"/>'),
                $iframe = $('<iframe frameborder="0" allowfullscreen />');

              $iframe.attr("src", "https://www.youtube.com/embed/" + id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");
              $wrap.append($iframe);

              $vid.append($wrap);

            });

          });
        }

      },

      fadeCaption: function(scrollPos) {

        /*$('.banner-area.b-def header.caption-wrap').css({
        	'margin-top'	: -(scrollPos/3)+"px",
        	'opacity'			: 1-(scrollPos/220)
        });*/

        /*
        $('.row-caption .wrap').css({
        	'margin-top'	: -(scrollPos/3)+"px",
        	'opacity'			: 1-(scrollPos/360)
        });
        */

        /*
        $('.row-caption').css({
        	'margin-top'	: -(scrollPos/3)+"px",
        	'opacity'			: 1-(scrollPos/360)
        });
        */
        if (!isMobile) {
          $('.ol-def .h1, .ol-dark').each(function(i) {
            var $this = $(this);
            if ($.inview($this)) {
              var bounds = $this.parent().get(0).getBoundingClientRect();
              var viewportBottom = (window.innerHeight || document.documentElement.clientHeight);
              var scrollOffset = viewportBottom - bounds.bottom;
              if (viewportBottom > bounds.bottom && scrollPos > 0) {
                TweenLite.set($this, {
                  css: {
                    transform: "translateY(-" + Math.round(scrollOffset / 5) + "px)",
                    opacity: 1 - (scrollOffset / 250)
                  }
                });
              } else {
                TweenLite.set($this, {
                  css: {
                    transform: "translateY(0px)",
                    opacity: 1
                  }
                });
              }
            }
          });
        }

      },

      scrollHandler: function() {

        //if(!isMobile) {

        var $els = $('.inview');

        var updating = false,
          execute = function() {

            var scrollTop = $doc.scrollTop();
            app.fadeCaption(scrollTop);
            //app.parallax(scrollTop);

            $els.each(function(i) {
              var $el = $(this);
              if ($el.hasClass('inview')) {
                if ($.inview($el)) {
                  $el.addClass('animate');
                  $els = $els.not($el);
                }
              }
            });

          },
          update = function() {
            execute();
            updating = false;
          },
          handler = function() {
            if (!updating) {
              updating = true;
              update();
            }
          };

        $win.on("scroll.scrollhandler", function() {
          requestAnimationFrame(handler);
        }).trigger("scroll.scrollhandler");
        //}
      },

      parallax: function(scrollTop) {
        $('div[data-type="parallax"]').each(function() {
          // declare the variable to affect the defined data-type
          var $el = $(this);

          var pos = -(scrollTop / $el.data('speed'));
          var offset = $el.offset();
          pos = pos + (offset.top / $el.data('speed'));
          var coords = '50% ' + pos + 'px';

          $el.css({
            backgroundPosition: coords
          });
        });
      },

      emailObfuscator: function() {
        $('span.unicorn').each(function() {
          $(this).replaceWith('@');
        });

        // Ersetze mailto-Links
        $('a[href^="javascript:decryptUnicorn"]').each(function() {

          // Selektiere Einhorn-Werte
          var emails = $(this).attr('href').match(/\((.*)\)/)[1];

          emails = emails
            // ROT13-Transformation
            .replace(/[a-z]/gi, function(s) {
              return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13))
            })
            // Ersetze # durch @
            .replace(/\|/g, '@');

          // Ersetze Einhörner
          $(this).attr('href', 'mailto:' + emails);
        });
      },

      setBodyScroll: function(s, el) {
        if (s === 'on') {
          enableBodyScroll(el);
          $body.add($header.find('.menu-trigger')).removeAttr('style');
        } else if (s === 'off') {
          disableBodyScroll(el);
          if (mobile) {
            $body.add($header.find('.menu-trigger')).css('margin-right', scrollBarWidth + "px");
          } else {
            $body.add($header.find('.menu-trigger')).css('margin-right', scrollBarWidth + "px");
          }
        }
      },

      getScrollBarWidth: function() {
        var inner = document.createElement('p');
        inner.style.width = "100%";
        inner.style.height = "200px";

        var outer = document.createElement('div');
        outer.style.position = "absolute";
        outer.style.top = "0px";
        outer.style.left = "0px";
        outer.style.visibility = "hidden";
        outer.style.width = "200px";
        outer.style.height = "150px";
        outer.style.overflow = "hidden";
        outer.appendChild(inner);

        document.body.appendChild(outer);
        var w1 = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var w2 = inner.offsetWidth;
        if (w1 == w2) w2 = outer.clientWidth;

        document.body.removeChild(outer);

        return (w1 - w2);
      }

    };

  app.init();

}(document, window));
