//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function e(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var t = {}, n = [], r = () => {}, i = () => !1, a = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), o = (e) => e.startsWith("onUpdate:"), s = Object.assign, c = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), ee = (e) => x(e).slice(8, -1), te = (e) => x(e) === "[object Object]", ne = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, re = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ie = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ae = /-\w/g, S = ie((e) => e.replace(ae, (e) => e.slice(1).toUpperCase())), oe = /\B([A-Z])/g, se = ie((e) => e.replace(oe, "-$1").toLowerCase()), ce = ie((e) => e.charAt(0).toUpperCase() + e.slice(1)), le = ie((e) => e ? `on${ce(e)}` : ""), ue = (e, t) => !Object.is(e, t), de = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, C = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, fe = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, pe, me = () => pe ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function he(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? ye(r) : he(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (g(e) || v(e)) return e;
}
var ge = /;(?![^(]*\))/g, _e = /:([^]+)/, ve = /\/\*[^]*?\*\//g;
function ye(e) {
	let t = {};
	return e.replace(ve, "").split(ge).forEach((e) => {
		if (e) {
			let n = e.split(_e);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function w(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = w(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var be = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xe = /* @__PURE__ */ e(be);
be + "";
function Se(e) {
	return !!e || e === "";
}
function Ce(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = we(e[r], t[r]);
	return n;
}
function we(e, t) {
	if (e === t) return !0;
	let n = m(e), r = m(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = _(e), r = _(t), n || r) return e === t;
	if (n = d(e), r = d(t), n || r) return n && r ? Ce(e, t) : !1;
	if (n = v(e), r = v(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !we(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function Te(e, t) {
	return e.findIndex((e) => we(e, t));
}
var Ee = (e) => !!(e && e.__v_isRef === !0), T = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? Ee(e) ? T(e.value) : JSON.stringify(e, De, 2) : String(e), De = (e, t) => Ee(t) ? De(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Oe(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Oe(e)) } : _(t) ? Oe(t) : v(t) && !d(t) && !te(t) ? String(t) : t, Oe = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, E, ke = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && E && (E.active ? (this.parent = E, this.index = (E.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = E;
			try {
				return E = this, e();
			} finally {
				E = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = E, E = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (E === this) E = this.prevScope;
			else {
				let e = E;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Ae(e) {
	return new ke(e);
}
function je() {
	return E;
}
function Me(e, t = !1) {
	E && E.cleanups.push(e);
}
var D, Ne = /* @__PURE__ */ new WeakSet(), Pe = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, E && (E.active ? E.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ne.has(this) && (Ne.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Re(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ze(this), Ve(this);
		let e = D, t = qe;
		D = this, qe = !0;
		try {
			return this.fn();
		} finally {
			He(this), D = e, qe = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ge(e);
			this.deps = this.depsTail = void 0, Ze(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ne.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ue(this) && this.run();
	}
	get dirty() {
		return Ue(this);
	}
}, Fe = 0, Ie, Le;
function Re(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Le, Le = e;
		return;
	}
	e.next = Ie, Ie = e;
}
function ze() {
	Fe++;
}
function Be() {
	if (--Fe > 0) return;
	if (Le) {
		let e = Le;
		for (Le = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ie;) {
		let t = Ie;
		for (Ie = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Ve(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function He(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ge(r), Ke(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ue(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (We(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function We(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Qe) || (e.globalVersion = Qe, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ue(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = D, r = qe;
	D = e, qe = !0;
	try {
		Ve(e);
		let n = e.fn(e._value);
		(t.version === 0 || ue(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		D = n, qe = r, He(e), e.flags &= -3;
	}
}
function Ge(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ge(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ke(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var qe = !0, Je = [];
function Ye() {
	Je.push(qe), qe = !1;
}
function Xe() {
	let e = Je.pop();
	qe = e === void 0 ? !0 : e;
}
function Ze(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = D;
		D = void 0;
		try {
			t();
		} finally {
			D = e;
		}
	}
}
var Qe = 0, $e = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, et = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!D || !qe || D === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== D) t = this.activeLink = new $e(D, this), D.deps ? (t.prevDep = D.depsTail, D.depsTail.nextDep = t, D.depsTail = t) : D.deps = D.depsTail = t, tt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = D.depsTail, t.nextDep = void 0, D.depsTail.nextDep = t, D.depsTail = t, D.deps === t && (D.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Qe++, this.notify(e);
	}
	notify(e) {
		ze();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Be();
		}
	}
};
function tt(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) tt(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var nt = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ Symbol(""), it = /* @__PURE__ */ Symbol(""), at = /* @__PURE__ */ Symbol("");
function O(e, t, n) {
	if (qe && D) {
		let t = nt.get(e);
		t || nt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new et()), r.map = t, r.key = n), r.track();
	}
}
function ot(e, t, n, r, i, a) {
	let o = nt.get(e);
	if (!o) {
		Qe++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (ze(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && ne(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === at || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(at)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(rt)), f(e) && s(o.get(it)));
				break;
			case "delete":
				i || (s(o.get(rt)), f(e) && s(o.get(it)));
				break;
			case "set":
				f(e) && s(o.get(rt));
				break;
		}
	}
	Be();
}
function st(e, t) {
	let n = nt.get(e);
	return n && n.get(t);
}
function ct(e) {
	let t = /* @__PURE__ */ k(e);
	return t === e ? t : (O(t, "iterate", at), /* @__PURE__ */ qt(e) ? t : t.map(Xt));
}
function lt(e) {
	return O(e = /* @__PURE__ */ k(e), "iterate", at), e;
}
function ut(e, t) {
	return /* @__PURE__ */ Kt(e) ? Zt(/* @__PURE__ */ Gt(e) ? Xt(t) : t) : Xt(t);
}
var dt = {
	__proto__: null,
	[Symbol.iterator]() {
		return ft(this, Symbol.iterator, (e) => ut(this, e));
	},
	concat(...e) {
		return ct(this).concat(...e.map((e) => d(e) ? ct(e) : e));
	},
	entries() {
		return ft(this, "entries", (e) => (e[1] = ut(this, e[1]), e));
	},
	every(e, t) {
		return mt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return mt(this, "filter", e, t, (e) => e.map((e) => ut(this, e)), arguments);
	},
	find(e, t) {
		return mt(this, "find", e, t, (e) => ut(this, e), arguments);
	},
	findIndex(e, t) {
		return mt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return mt(this, "findLast", e, t, (e) => ut(this, e), arguments);
	},
	findLastIndex(e, t) {
		return mt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return mt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return gt(this, "includes", e);
	},
	indexOf(...e) {
		return gt(this, "indexOf", e);
	},
	join(e) {
		return ct(this).join(e);
	},
	lastIndexOf(...e) {
		return gt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return mt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return _t(this, "pop");
	},
	push(...e) {
		return _t(this, "push", e);
	},
	reduce(e, ...t) {
		return ht(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ht(this, "reduceRight", e, t);
	},
	shift() {
		return _t(this, "shift");
	},
	some(e, t) {
		return mt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return _t(this, "splice", e);
	},
	toReversed() {
		return ct(this).toReversed();
	},
	toSorted(e) {
		return ct(this).toSorted(e);
	},
	toSpliced(...e) {
		return ct(this).toSpliced(...e);
	},
	unshift(...e) {
		return _t(this, "unshift", e);
	},
	values() {
		return ft(this, "values", (e) => ut(this, e));
	}
};
function ft(e, t, n) {
	let r = lt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ qt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var pt = Array.prototype;
function mt(e, t, n, r, i, a) {
	let o = lt(e), s = o !== e && !/* @__PURE__ */ qt(e), c = o[t];
	if (c !== pt[t]) {
		let t = c.apply(e, a);
		return s ? Xt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, ut(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ht(e, t, n, r) {
	let i = lt(e), a = i !== e && !/* @__PURE__ */ qt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ut(e, t)), n.call(this, t, ut(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ut(e, c) : c;
}
function gt(e, t, n) {
	let r = /* @__PURE__ */ k(e);
	O(r, "iterate", at);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Jt(n[0]) ? (n[0] = /* @__PURE__ */ k(n[0]), r[t](...n)) : i;
}
function _t(e, t, n = []) {
	Ye(), ze();
	let r = (/* @__PURE__ */ k(e))[t].apply(e, n);
	return Be(), Xe(), r;
}
var vt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), yt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function bt(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ k(this);
	return O(t, "has", e), t.hasOwnProperty(e);
}
var xt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? zt : Rt : i ? Lt : It).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = dt[t])) return e;
			if (t === "hasOwnProperty") return bt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ A(e) ? e : n);
		if ((_(t) ? yt.has(t) : vt(t)) || (r || O(e, "get", t), i)) return o;
		if (/* @__PURE__ */ A(o)) {
			let e = a && ne(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Ut(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Ut(o) : /* @__PURE__ */ Vt(o) : o;
	}
}, St = class extends xt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && ne(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Kt(i);
			if (!/* @__PURE__ */ qt(n) && !/* @__PURE__ */ Kt(n) && (i = /* @__PURE__ */ k(i), n = /* @__PURE__ */ k(n)), !a && /* @__PURE__ */ A(i) && !/* @__PURE__ */ A(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ A(e) ? e : r);
		return e === /* @__PURE__ */ k(r) && (o ? ue(n, i) && ot(e, "set", t, n, i) : ot(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && ot(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!_(t) || !yt.has(t)) && O(e, "has", t), n;
	}
	ownKeys(e) {
		return O(e, "iterate", d(e) ? "length" : rt), Reflect.ownKeys(e);
	}
}, Ct = class extends xt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, wt = /* @__PURE__ */ new St(), Tt = /* @__PURE__ */ new Ct(), Et = /* @__PURE__ */ new St(!0), Dt = (e) => e, Ot = (e) => Reflect.getPrototypeOf(e);
function kt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ k(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? Dt : t ? Zt : Xt;
		return !t && O(a, "iterate", l ? it : rt), s(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: c ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function At(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function jt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ k(r), a = /* @__PURE__ */ k(n);
			e || (ue(n, a) && O(i, "get", n), O(i, "get", a));
			let { has: o } = Ot(i), s = t ? Dt : e ? Zt : Xt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && O(/* @__PURE__ */ k(t), "iterate", rt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ k(n), i = /* @__PURE__ */ k(t);
			return e || (ue(t, i) && O(r, "has", t), O(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ k(a), s = t ? Dt : e ? Zt : Xt;
			return !e && O(o, "iterate", rt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: At("add"),
		set: At("set"),
		delete: At("delete"),
		clear: At("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ k(this), r = Ot(n), i = /* @__PURE__ */ k(e), a = !t && !/* @__PURE__ */ qt(e) && !/* @__PURE__ */ Kt(e) ? i : e;
			return r.has.call(n, a) || ue(e, a) && r.has.call(n, e) || ue(i, a) && r.has.call(n, i) || (n.add(a), ot(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ qt(n) && !/* @__PURE__ */ Kt(n) && (n = /* @__PURE__ */ k(n));
			let r = /* @__PURE__ */ k(this), { has: i, get: a } = Ot(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ k(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? ue(n, s) && ot(r, "set", e, n, s) : ot(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ k(this), { has: n, get: r } = Ot(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ k(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ot(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ k(this), t = e.size !== 0, n = e.clear();
			return t && ot(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = kt(r, e, t);
	}), n;
}
function Mt(e, t) {
	let n = jt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(u(n, r) && r in t ? n : t, r, i);
}
var Nt = { get: /* @__PURE__ */ Mt(!1, !1) }, Pt = { get: /* @__PURE__ */ Mt(!1, !0) }, Ft = { get: /* @__PURE__ */ Mt(!0, !1) }, It = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap();
function Bt(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return /* @__PURE__ */ Kt(e) ? e : Wt(e, !1, wt, Nt, It);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return Wt(e, !1, Et, Pt, Lt);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return Wt(e, !0, Tt, Ft, Rt);
}
function Wt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Bt(ee(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return /* @__PURE__ */ Kt(e) ? /* @__PURE__ */ Gt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function k(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ k(t) : e;
}
function Yt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && C(e, "__v_skip", !0), e;
}
var Xt = (e) => v(e) ? /* @__PURE__ */ Vt(e) : e, Zt = (e) => v(e) ? /* @__PURE__ */ Ut(e) : e;
// @__NO_SIDE_EFFECTS__
function A(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function j(e) {
	return Qt(e, !1);
}
function Qt(e, t) {
	return /* @__PURE__ */ A(e) ? e : new $t(e, t);
}
var $t = class {
	constructor(e, t) {
		this.dep = new et(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ k(e), this._value = t ? e : Xt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ qt(e) || /* @__PURE__ */ Kt(e);
		e = n ? e : /* @__PURE__ */ k(e), ue(e, t) && (this._rawValue = e, this._value = n ? e : Xt(e), this.dep.trigger());
	}
};
function M(e) {
	return /* @__PURE__ */ A(e) ? e.value : e;
}
var en = {
	get: (e, t, n) => t === "__v_raw" ? e : M(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ A(i) && !/* @__PURE__ */ A(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function tn(e) {
	return /* @__PURE__ */ Gt(e) ? e : new Proxy(e, en);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
	let t = d(e) ? Array(e.length) : {};
	for (let n in e) t[n] = an(e, n);
	return t;
}
var rn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ k(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !ne(this._key)) do
			r = !/* @__PURE__ */ Jt(i) || /* @__PURE__ */ qt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = M(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ A(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ A(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return st(this._raw, this._key);
	}
};
function an(e, t, n) {
	return new rn(e, t, n);
}
var on = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new et(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && D !== this) return Re(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return We(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function sn(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new on(r, i, n);
}
var cn = {}, ln = /* @__PURE__ */ new WeakMap(), un = void 0;
function dn(e, t = !1, n = un) {
	if (n) {
		let t = ln.get(n);
		t || ln.set(n, t = []), t.push(e);
	}
}
function fn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ qt(e) || o === !1 || o === 0 ? pn(e, 1) : pn(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ A(e) ? (g = () => e.value, y = /* @__PURE__ */ qt(e)) : /* @__PURE__ */ Gt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Gt(e) || /* @__PURE__ */ qt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ A(e)) return e.value;
		if (/* @__PURE__ */ Gt(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			Ye();
			try {
				_();
			} finally {
				Xe();
			}
		}
		let t = un;
		un = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			un = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => pn(e(), t);
	}
	let x = je(), ee = () => {
		m.stop(), x && x.active && c(x.effects, m);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			let n = e(...t);
			return ee(), n;
		};
	}
	let te = b ? Array(e.length).fill(cn) : cn, ne = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (n) {
			let t = m.run();
			if (e || o || y || (b ? t.some((e, t) => ue(e, te[t])) : ue(t, te))) {
				_ && _();
				let e = un;
				un = m;
				try {
					let e = [
						t,
						te === cn ? void 0 : b && te[0] === cn ? [] : te,
						v
					];
					te = t, f ? f(n, 3, e) : n(...e);
				} finally {
					un = e;
				}
			}
		} else m.run();
	};
	return u && u(ne), m = new Pe(g), m.scheduler = l ? () => l(ne, !1) : ne, v = (e) => dn(e, !1, m), _ = m.onStop = () => {
		let e = ln.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			ln.delete(m);
		}
	}, n ? a ? ne(!0) : te = m.run() : l ? l(ne.bind(null, !0), !0) : m.run(), ee.pause = m.pause.bind(m), ee.resume = m.resume.bind(m), ee.stop = ee, ee;
}
function pn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ A(e)) pn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) pn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		pn(e, t, n);
	});
	else if (te(e)) {
		for (let r in e) pn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && pn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function mn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		gn(e, t, n);
	}
}
function hn(e, t, n, r) {
	if (h(e)) {
		let i = mn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			gn(e, t, n);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(hn(e[a], t, n, r));
		return i;
	}
}
function gn(e, n, r, i = !0) {
	let a = n ? n.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = n && n.appContext.config || t;
	if (n) {
		let t = n.parent, i = n.proxy, a = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; t;) {
			let n = t.ec;
			if (n) {
				for (let t = 0; t < n.length; t++) if (n[t](e, i, a) === !1) return;
			}
			t = t.parent;
		}
		if (o) {
			Ye(), mn(o, null, 10, [
				e,
				i,
				a
			]), Xe();
			return;
		}
	}
	_n(e, r, a, i, s);
}
function _n(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var vn = [], yn = -1, bn = [], xn = null, Sn = 0, Cn = /* @__PURE__ */ Promise.resolve(), wn = null;
function Tn(e) {
	let t = wn || Cn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function En(e) {
	let t = yn + 1, n = vn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = vn[r], a = Mn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Dn(e) {
	if (!(e.flags & 1)) {
		let t = Mn(e), n = vn[vn.length - 1];
		!n || !(e.flags & 2) && t >= Mn(n) ? vn.push(e) : vn.splice(En(t), 0, e), e.flags |= 1, On();
	}
}
function On() {
	wn ||= Cn.then(Nn);
}
function kn(e) {
	d(e) ? bn.push(...e) : xn && e.id === -1 ? xn.splice(Sn + 1, 0, e) : e.flags & 1 || (bn.push(e), e.flags |= 1), On();
}
function An(e, t, n = yn + 1) {
	for (; n < vn.length; n++) {
		let t = vn[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			vn.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function jn(e) {
	if (bn.length) {
		let e = [...new Set(bn)].sort((e, t) => Mn(e) - Mn(t));
		if (bn.length = 0, xn) {
			xn.push(...e);
			return;
		}
		for (xn = e, Sn = 0; Sn < xn.length; Sn++) {
			let e = xn[Sn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		xn = null, Sn = 0;
	}
}
var Mn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Nn(e) {
	try {
		for (yn = 0; yn < vn.length; yn++) {
			let e = vn[yn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), mn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; yn < vn.length; yn++) {
			let e = vn[yn];
			e && (e.flags &= -2);
		}
		yn = -1, vn.length = 0, jn(e), wn = null, (vn.length || bn.length) && Nn(e);
	}
}
var N = null, Pn = null;
function Fn(e) {
	let t = N;
	return N = e, Pn = e && e.type.__scopeId || null, t;
}
function P(e, t = N, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Ki(-1);
		let i = Fn(t), a;
		try {
			a = e(...n);
		} finally {
			Fn(i), r._d && Ki(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function F(e, n) {
	if (N === null) return e;
	let r = Ta(N), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && pn(o), i.push({
			dir: a,
			instance: r,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function In(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ye(), hn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Xe());
	}
}
function Ln(e, t) {
	if (K) {
		let n = K.provides, r = K.parent && K.parent.provides;
		r === n && (n = K.provides = Object.create(r)), n[e] = t;
	}
}
function Rn(e, t, n = !1) {
	let r = ua();
	if (r || Yr) {
		let i = Yr ? Yr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
function zn() {
	return !!(ua() || Yr);
}
var Bn = /* @__PURE__ */ Symbol.for("v-scx"), Vn = () => Rn(Bn);
function Hn(e, t, n) {
	return Un(e, t, n);
}
function Un(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (ga) {
		if (c === "sync") {
			let e = Vn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = K;
	u.call = (e, t, n) => hn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		Ei(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Dn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = fn(e, n, u);
	return ga && (f ? f.push(h) : d && h()), h;
}
function Wn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Gn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = pa(this), s = Un(i, a.bind(r), n);
	return o(), s;
}
function Gn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Kn = /* @__PURE__ */ Symbol("_vte"), qn = (e) => e.__isTeleport, Jn = /* @__PURE__ */ Symbol("_leaveCb");
function Yn(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, Yn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function I(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function Xn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Zn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Qn = /* @__PURE__ */ new WeakMap();
function $n(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => $n(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (tr(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && $n(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? Ta(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ k(v), b = v === t ? i : (e) => Zn(_, e) ? !1 : u(y, e), x = (e, t) => !(t && Zn(_, t));
	if (m != null && m !== p) {
		if (er(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ A(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) mn(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ A(p);
		if (t || n) {
			let i = () => {
				if (e.f) {
					let n = t ? b(p) ? v[p] : _[p] : x(p) || !e.k ? p.value : _[e.k];
					if (o) d(n) && c(n, s);
					else if (d(n)) n.includes(s) || n.push(s);
					else if (t) _[p] = [s], b(p) && (v[p] = _[p]);
					else {
						let t = [s];
						x(p, e.k) && (p.value = t), e.k && (_[e.k] = t);
					}
				} else t ? (_[p] = l, b(p) && (v[p] = l)) : n && (x(p, e.k) && (p.value = l), e.k && (_[e.k] = l));
			};
			if (l) {
				let t = () => {
					i(), Qn.delete(e);
				};
				t.id = -1, Qn.set(e, t), Ei(t, r);
			} else er(e), i();
		}
	}
}
function er(e) {
	let t = Qn.get(e);
	t && (t.flags |= 8, Qn.delete(e));
}
me().requestIdleCallback, me().cancelIdleCallback;
var tr = (e) => !!e.type.__asyncLoader, nr = (e) => e.type.__isKeepAlive;
function rr(e, t) {
	ar(e, "a", t);
}
function ir(e, t) {
	ar(e, "da", t);
}
function ar(e, t, n = K) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (sr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) nr(e.parent.vnode) && or(r, t, n, e), e = e.parent;
	}
}
function or(e, t, n, r) {
	let i = sr(t, e, r, !0);
	mr(() => {
		c(r[t], i);
	}, n);
}
function sr(e, t, n = K, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ye();
			let i = pa(n), a = hn(t, n, e, r);
			return i(), Xe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var cr = (e) => (t, n = K) => {
	(!ga || e === "sp") && sr(e, (...e) => t(...e), n);
}, lr = cr("bm"), ur = cr("m"), dr = cr("bu"), fr = cr("u"), pr = cr("bum"), mr = cr("um"), hr = cr("sp"), gr = cr("rtg"), _r = cr("rtc");
function vr(e, t = K) {
	sr("ec", e, t);
}
var yr = "components";
function br(e, t) {
	return Sr(yr, e, !0, t) || e;
}
var xr = /* @__PURE__ */ Symbol.for("v-ndc");
function Sr(e, t, n = !0, r = !1) {
	let i = N || K;
	if (i) {
		let n = i.type;
		if (e === yr) {
			let e = Ea(n, !1);
			if (e && (e === t || e === S(t) || e === ce(S(t)))) return n;
		}
		let a = Cr(i[e] || n[e], t) || Cr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Cr(e, t) {
	return e && (e[t] || e[S(t)] || e[ce(S(t))]);
}
function L(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Gt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ qt(e), s = /* @__PURE__ */ Kt(e), e = lt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Zt(Xt(e[n])) : Xt(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (v(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
	else {
		let n = Object.keys(e);
		i = Array(n.length);
		for (let r = 0, o = n.length; r < o; r++) {
			let o = n[r];
			i[r] = t(e[o], o, r, a && a[r]);
		}
	}
	else i = [];
	return n && (n[r] = i), i;
}
function wr(e, t, n = {}, r, i) {
	if (N.ce || N.parent && tr(N.parent) && N.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), z(), V(R, null, [U("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), z();
	let o = a && Tr(a(n)), s = n.key || o && o.key, c = V(R, { key: (s && !_(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Tr(e) {
	return e.some((e) => Ji(e) ? !(e.type === Bi || e.type === R && !Tr(e.children)) : !0) ? e : null;
}
var Er = (e) => e ? ha(e) ? Ta(e) : Er(e.parent) : null, Dr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Er(e.parent),
	$root: (e) => Er(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Ir(e),
	$forceUpdate: (e) => e.f ||= () => {
		Dn(e.update);
	},
	$nextTick: (e) => e.n ||= Tn.bind(e.proxy),
	$watch: (e) => Wn.bind(e)
}), Or = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), kr = {
	get({ _: e }, n) {
		if (n === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (n[0] !== "$") {
			let e = s[n];
			if (e !== void 0) switch (e) {
				case 1: return i[n];
				case 2: return a[n];
				case 4: return r[n];
				case 3: return o[n];
			}
			else if (Or(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else jr && (s[n] = 0);
		}
		let d = Dr[n], f, p;
		if (d) return n === "$attrs" && O(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Or(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Or(n, c) || u(o, c) || u(i, c) || u(Dr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Ar(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var jr = !0;
function Mr(e) {
	let t = Ir(e), n = e.proxy, i = e.ctx;
	jr = !1, t.beforeCreate && Pr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: ee, destroyed: te, unmounted: ne, render: re, renderTracked: ie, renderTriggered: ae, errorCaptured: S, serverPrefetch: oe, expose: se, inheritAttrs: ce, components: le, directives: ue, filters: de } = t;
	if (u && Nr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ Vt(t));
	}
	if (jr = !0, o) for (let e in o) {
		let t = o[e], a = q({
			get: h(t) ? t.bind(n, n) : h(t.get) ? t.get.bind(n, n) : r,
			set: !h(t) && h(t.set) ? t.set.bind(n) : r
		});
		Object.defineProperty(i, e, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		});
	}
	if (c) for (let e in c) Fr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Ln(t, e[t]);
		});
	}
	f && Pr(f, e, "c");
	function C(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (C(lr, p), C(ur, m), C(dr, g), C(fr, _), C(rr, y), C(ir, b), C(vr, S), C(_r, ie), C(gr, ae), C(pr, ee), C(mr, ne), C(hr, oe), d(se)) if (se.length) {
		let t = e.exposed ||= {};
		se.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	re && e.render === r && (e.render = re), ce != null && (e.inheritAttrs = ce), le && (e.components = le), ue && (e.directives = ue), oe && Xn(e);
}
function Nr(e, t, n = r) {
	d(e) && (e = Vr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Rn(r.from || n, r.default, !0) : Rn(r.from || n) : Rn(r), /* @__PURE__ */ A(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Pr(e, t, n) {
	hn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Fr(e, t, n, r) {
	let i = r.includes(".") ? Gn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && Hn(i, n);
	} else if (h(e)) Hn(i, e.bind(n));
	else if (v(e)) if (d(e)) e.forEach((e) => Fr(e, t, n, r));
	else {
		let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
		h(r) && Hn(i, r, e);
	}
}
function Ir(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Lr(c, e, o, !0)), Lr(c, t, o)), v(t) && a.set(t, c), c;
}
function Lr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Lr(e, a, n, !0), i && i.forEach((t) => Lr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Rr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Rr = {
	data: zr,
	props: Wr,
	emits: Wr,
	methods: Ur,
	computed: Ur,
	beforeCreate: Hr,
	created: Hr,
	beforeMount: Hr,
	mounted: Hr,
	beforeUpdate: Hr,
	updated: Hr,
	beforeDestroy: Hr,
	beforeUnmount: Hr,
	destroyed: Hr,
	unmounted: Hr,
	activated: Hr,
	deactivated: Hr,
	errorCaptured: Hr,
	serverPrefetch: Hr,
	components: Ur,
	directives: Ur,
	watch: Gr,
	provide: zr,
	inject: Br
};
function zr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Br(e, t) {
	return Ur(Vr(e), Vr(t));
}
function Vr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Hr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Ur(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Wr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Ar(e), Ar(t ?? {})) : t;
}
function Gr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Hr(e[r], t[r]);
	return n;
}
function Kr() {
	return {
		app: null,
		config: {
			isNativeTag: i,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var qr = 0;
function Jr(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Kr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: qr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Oa,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && h(e.install) ? (a.add(e), e.install(l, ...t)) : h(e) && (a.add(e), e(l, ...t))), l;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), l;
			},
			component(e, t) {
				return t ? (i.components[e] = t, l) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, l) : i.directives[e];
			},
			mount(a, o, s) {
				if (!c) {
					let u = l._ceVNode || U(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, Ta(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (hn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Yr;
				Yr = l;
				try {
					return e();
				} finally {
					Yr = t;
				}
			}
		};
		return l;
	};
}
var Yr = null, Xr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${S(t)}Modifiers`] || e[`${se(t)}Modifiers`];
function Zr(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && Xr(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = r.map(fe)));
	let c, l = i[c = le(n)] || i[c = le(S(n))];
	!l && o && (l = i[c = le(se(n))]), l && hn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, hn(u, e, 6, a);
	}
}
var Qr = /* @__PURE__ */ new WeakMap();
function $r(e, t, n = !1) {
	let r = n ? Qr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = $r(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function ei(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, se(t)) || u(e, t));
}
function ti(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Fn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = na(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = na(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : ni(c);
		}
	} catch (t) {
		Hi.length = 0, gn(t, e, 1), v = U(Bi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = ri(y, a)), b = ea(b, y, !1, !0));
	}
	return n.dirs && (b = ea(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Yn(b, n.transition), v = b, Fn(_), v;
}
var ni = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, ri = (e, t) => {
	let n = {};
	for (let r in e) (!o(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function ii(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? ai(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (oi(o, r, n) && !ei(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? ai(r, o, l) : !0 : !!o;
	return !1;
}
function ai(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (oi(t, e, a) && !ei(n, a)) return !0;
	}
	return !1;
}
function oi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !we(r, i) : r !== i;
}
function si({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var ci = {}, li = () => Object.create(ci), ui = (e) => Object.getPrototypeOf(e) === ci;
function di(e, t, n, r = !1) {
	let i = {}, a = li();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), pi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Ht(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function fi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ k(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (ei(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
				else {
					let t = S(o);
					i[t] = mi(c, s, t, d, e, !1);
				}
				else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		pi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !u(t, a) && ((r = se(a)) === a || !u(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = mi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !u(t, e)) && (delete a[e], l = !0);
	}
	l && ot(e.attrs, "set", "");
}
function pi(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (re(t)) continue;
		let l = n[t], d;
		a && u(a, d = S(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : ei(e.emitsOptions, t) || (!(t in i) || l !== i[t]) && (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ k(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = mi(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function mi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = pa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === se(n)) && (r = !0));
	}
	return r;
}
var hi = /* @__PURE__ */ new WeakMap();
function gi(e, r, i = !1) {
	let a = i ? hi : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = gi(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = S(c[e]);
		_i(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = S(e);
		if (_i(t)) {
			let n = c[e], r = l[t] = d(n) || h(n) ? { type: n } : s({}, n), i = r.type, a = !1, o = !0;
			if (d(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = h(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				} else n === "String" && (o = !1);
			}
			else a = h(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || u(r, "default")) && f.push(t);
		}
	}
	let m = [l, f];
	return v(e) && a.set(e, m), m;
}
function _i(e) {
	return e[0] !== "$" && !re(e);
}
var vi = (e) => e === "_" || e === "_ctx" || e === "$stable", yi = (e) => d(e) ? e.map(na) : [na(e)], bi = (e, t, n) => {
	if (t._n) return t;
	let r = P((...e) => yi(t(...e)), n);
	return r._c = !1, r;
}, xi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (vi(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = bi(n, i, r);
		else if (i != null) {
			let e = yi(i);
			t[n] = () => e;
		}
	}
}, Si = (e, t) => {
	let n = yi(t);
	e.slots.default = () => n;
}, Ci = (e, t, n) => {
	for (let r in t) (n || !vi(r)) && (e[r] = t[r]);
}, wi = (e, t, n) => {
	let r = e.slots = li();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Ci(r, t, n), n && C(r, "_", e, !0)) : xi(t, r);
	} else t && Si(e, t);
}, Ti = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : Ci(a, n, r) : (o = !n.$stable, xi(n, a)), s = n;
	} else n && (Si(e, n), s = { default: 1 });
	if (o) for (let e in a) !vi(e) && s[e] == null && delete a[e];
}, Ei = Ri;
function Di(e) {
	return Oi(e);
}
function Oi(e, i) {
	let a = me();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Yi(e, t) && (r = we(e), w(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case zi:
				y(e, t, n, r);
				break;
			case Bi:
				b(e, t, n, r);
				break;
			case Vi:
				e ?? x(t, n, r, o);
				break;
			case R:
				le(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? ne(e, t, n, r, i, a, o, s, c) : d & 6 ? ue(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, T);
		}
		u != null && i ? $n(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && $n(e.ref, null, a, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, ee = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, te = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ne = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) ie(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), oe(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, ie = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && S(e.children, d, null, r, i, ki(e, a), s, u), _ && In(e, null, r, "created"), ae(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !re(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && oa(f, r, e);
		}
		_ && In(e, null, r, "beforeMount");
		let v = ji(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Ei(() => {
			try {
				f && oa(f, r, e), v && g.enter(d), _ && In(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ae = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Li(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ae(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, S = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? ra(e[l]) : na(e[l]), t, n, r, i, a, o, s);
	}, oe = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Ai(r, !1), (g = h.onVnodeBeforeUpdate) && oa(g, r, n, e), f && In(n, e, r, "beforeUpdate"), r && Ai(r, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? se(e.dynamicChildren, d, l, r, i, ki(n, a), o) : s || ge(e, n, l, null, r, i, ki(n, a), o, !1), u > 0) {
			if (u & 16) ce(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && ce(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && Ei(() => {
			g && oa(g, r, n, e), f && In(n, e, r, "updated");
		}, i);
	}, se = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === R || !Yi(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, ce = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !re(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (re(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, le = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), S(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (se(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Mi(e, t, !0)) : ge(e, t, n, f, i, a, s, c, l);
	}, ue = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : C(t, n, r, i, a, o, c) : fe(e, t, c);
	}, C = (e, t, n, r, i, a, o) => {
		let s = e.component = la(e, r, i);
		if (nr(e) && (s.ctx.renderer = T), _a(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, pe, o), !e.el) {
				let r = s.subTree = U(Bi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else pe(s, e, t, n, i, a, o);
	}, fe = (e, t, n) => {
		let r = t.component = e.component;
		if (ii(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			he(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, pe = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Pi(e);
					if (n) {
						t && (t.el = c.el, he(e, t, o)), n.asyncDep.then(() => {
							Ei(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Ai(e, !1), t ? (t.el = c.el, he(e, t, o)) : t = c, n && de(n), (d = t.props && t.props.onVnodeBeforeUpdate) && oa(d, s, t, c), Ai(e, !0);
				let f = ti(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), we(p), e, i, a), t.el = f.el, u === null && si(e, f.el), r && Ei(r, i), (d = t.props && t.props.onVnodeUpdated) && Ei(() => oa(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = tr(t);
				if (Ai(e, !1), l && de(l), !m && (o = c && c.onVnodeBeforeMount) && oa(o, d, t), Ai(e, !0), s && Oe) {
					let t = () => {
						e.subTree = ti(e), Oe(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = ti(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Ei(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ei(() => oa(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && tr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ei(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Pe(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Dn(u), Ai(e, !0), l();
	}, he = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, fi(e, t.props, r, n), Ti(e, t.children, n), Ye(), An(e), Xe();
	}, ge = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				ve(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				_e(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && Ce(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? ve(l, d, n, r, i, a, o, s, c) : Ce(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && S(d, n, r, i, a, o, s, c));
	}, _e = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let n = t[p] = l ? ra(t[p]) : na(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? Ce(e, a, o, !0, !1, f) : S(t, r, i, a, o, s, c, l, f);
	}, ve = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? ra(t[u]) : na(t[u]);
			if (Yi(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? ra(t[p]) : na(t[p]);
			if (Yi(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? ra(t[u]) : na(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) w(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ra(t[u]) : na(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, ee = 0, te = Array(b);
			for (u = 0; u < b; u++) te[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					w(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (te[_ - h] === 0 && Yi(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? w(n, a, o, !0) : (te[i - h] = u + 1, i >= ee ? ee = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let ne = x ? Ni(te) : n;
			for (_ = ne.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ii(f) : i;
				te[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== ne[_] ? ye(n, r, p, 2) : _--);
			}
		}
	}, ye = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			ye(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, T);
			return;
		}
		if (c === R) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ye(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === Vi) {
			ee(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[Jn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Ei(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[Jn];
				a._isLeaving && a[Jn](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, w = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ye(), $n(s, null, n, e, !0), Xe()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !tr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && oa(_, t, e), u & 6) Se(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && In(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, T, r) : l && !l.hasOnce && (a !== R || d > 0 && d & 64) ? Ce(l, t, n, !1, !0) : (a === R && d & 384 || !i && u & 16) && Ce(c, t, n), r && be(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ei(() => {
			_ && oa(_, t, e), h && In(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, be = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === R) {
			xe(n, r);
			return;
		}
		if (t === Vi) {
			te(e);
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, xe = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, Se = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Fi(c), Fi(l), r && de(r), i.stop(), a && (a.flags |= 8, w(o, e, t, n)), s && Ei(s, t), Ei(() => {
			e.isUnmounted = !0;
		}, t);
	}, Ce = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) w(e[o], t, n, r, i);
	}, we = (e) => {
		if (e.shapeFlag & 6) return we(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Kn];
		return n ? h(n) : t;
	}, Te = !1, Ee = (e, t, n) => {
		let r;
		e == null ? t._vnode && (w(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, Te ||= (Te = !0, An(r), jn(), !1);
	}, T = {
		p: v,
		um: w,
		m: ye,
		r: be,
		mt: C,
		mc: S,
		pc: ge,
		pbc: se,
		n: we,
		o: e
	}, De, Oe;
	return i && ([De, Oe] = i(T)), {
		render: Ee,
		hydrate: De,
		createApp: Jr(Ee, De)
	};
}
function ki({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ai({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ji(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Mi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ra(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Mi(t, a)), a.type === zi && (a.patchFlag === -1 && (a = i[e] = ra(a)), a.el = t.el), a.type === Bi && !a.el && (a.el = t.el);
	}
}
function Ni(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function Pi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Pi(t);
}
function Fi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ii(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Ii(t.subTree) : null;
}
var Li = (e) => e.__isSuspense;
function Ri(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : kn(e);
}
var R = /* @__PURE__ */ Symbol.for("v-fgt"), zi = /* @__PURE__ */ Symbol.for("v-txt"), Bi = /* @__PURE__ */ Symbol.for("v-cmt"), Vi = /* @__PURE__ */ Symbol.for("v-stc"), Hi = [], Ui = null;
function z(e = !1) {
	Hi.push(Ui = e ? null : []);
}
function Wi() {
	Hi.pop(), Ui = Hi[Hi.length - 1] || null;
}
var Gi = 1;
function Ki(e, t = !1) {
	Gi += e, e < 0 && Ui && t && (Ui.hasOnce = !0);
}
function qi(e) {
	return e.dynamicChildren = Gi > 0 ? Ui || n : null, Wi(), Gi > 0 && Ui && Ui.push(e), e;
}
function B(e, t, n, r, i, a) {
	return qi(H(e, t, n, r, i, a, !0));
}
function V(e, t, n, r, i) {
	return qi(U(e, t, n, r, i, !0));
}
function Ji(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Yi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Xi = ({ key: e }) => e ?? null, Zi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ A(e) || h(e) ? {
	i: N,
	r: e,
	k: t,
	f: !!n
} : e);
function H(e, t = null, n = null, r = 0, i = null, a = e === R ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Xi(t),
		ref: t && Zi(t),
		scopeId: Pn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: N
	};
	return s ? (ia(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Gi > 0 && !o && Ui && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Ui.push(c), c;
}
var U = Qi;
function Qi(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === xr) && (e = Bi), Ji(e)) {
		let r = ea(e, t, !0);
		return n && ia(r, n), Gi > 0 && !a && Ui && (r.shapeFlag & 6 ? Ui[Ui.indexOf(e)] = r : Ui.push(r)), r.patchFlag = -2, r;
	}
	if (Da(e) && (e = e.__vccOpts), t) {
		t = $i(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = w(e)), v(n) && (/* @__PURE__ */ Jt(n) && !d(n) && (n = s({}, n)), t.style = he(n));
	}
	let o = g(e) ? 1 : Li(e) ? 128 : qn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return H(e, t, n, r, i, o, a, !0);
}
function $i(e) {
	return e ? /* @__PURE__ */ Jt(e) || ui(e) ? s({}, e) : e : null;
}
function ea(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? aa(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Xi(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(Zi(t)) : [a, Zi(t)] : Zi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== R ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && ea(e.ssContent),
		ssFallback: e.ssFallback && ea(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && Yn(u, c.clone(u)), u;
}
function W(e = " ", t = 0) {
	return U(zi, null, e, t);
}
function ta(e, t) {
	let n = U(Vi, null, e);
	return n.staticCount = t, n;
}
function G(e = "", t = !1) {
	return t ? (z(), V(Bi, null, e)) : U(Bi, null, e);
}
function na(e) {
	return e == null || typeof e == "boolean" ? U(Bi) : d(e) ? U(R, null, e.slice()) : Ji(e) ? ra(e) : U(zi, null, String(e));
}
function ra(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : ea(e);
}
function ia(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), ia(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !ui(t) ? t._ctx = N : r === 3 && N && (N.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else h(t) ? (t = {
		default: t,
		_ctx: N
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [W(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function aa(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = w([t.class, r.class]));
		else if (e === "style") t.style = he([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function oa(e, t, n, r = null) {
	hn(e, t, 7, [n, r]);
}
var sa = Kr(), ca = 0;
function la(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || sa, o = {
		uid: ca++,
		vnode: e,
		type: i,
		parent: n,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new ke(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: n ? n.provides : Object.create(a.provides),
		ids: n ? n.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: gi(i, a),
		emitsOptions: $r(i, a),
		emit: null,
		emitted: null,
		propsDefaults: t,
		inheritAttrs: i.inheritAttrs,
		ctx: t,
		data: t,
		props: t,
		attrs: t,
		slots: t,
		refs: t,
		setupState: t,
		setupContext: null,
		suspense: r,
		suspenseId: r ? r.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = Zr.bind(null, o), e.ce && e.ce(o), o;
}
var K = null, ua = () => K || N, da, fa;
{
	let e = me(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	da = t("__VUE_INSTANCE_SETTERS__", (e) => K = e), fa = t("__VUE_SSR_SETTERS__", (e) => ga = e);
}
var pa = (e) => {
	let t = K;
	return da(e), e.scope.on(), () => {
		e.scope.off(), da(t);
	};
}, ma = () => {
	K && K.scope.off(), da(null);
};
function ha(e) {
	return e.vnode.shapeFlag & 4;
}
var ga = !1;
function _a(e, t = !1, n = !1) {
	t && fa(t);
	let { props: r, children: i } = e.vnode, a = ha(e);
	di(e, r, a, t), wi(e, i, n || t);
	let o = a ? va(e, t) : void 0;
	return t && fa(!1), o;
}
function va(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, kr);
	let { setup: r } = n;
	if (r) {
		Ye();
		let n = e.setupContext = r.length > 1 ? wa(e) : null, i = pa(e), a = mn(r, e, 0, [e.props, n]), o = y(a);
		if (Xe(), i(), (o || e.sp) && !tr(e) && Xn(e), o) {
			if (a.then(ma, ma), t) return a.then((n) => {
				ya(e, n, t);
			}).catch((t) => {
				gn(t, e, 0);
			});
			e.asyncDep = a;
		} else ya(e, a, t);
	} else Sa(e, t);
}
function ya(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = tn(t)), Sa(e, n);
}
var ba, xa;
function Sa(e, t, n) {
	let i = e.type;
	if (!e.render) {
		if (!t && ba && !i.render) {
			let t = i.template || Ir(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: r } = e.appContext.config, { delimiters: a, compilerOptions: o } = i;
				i.render = ba(t, s(s({
					isCustomElement: n,
					delimiters: a
				}, r), o));
			}
		}
		e.render = i.render || r, xa && xa(e);
	}
	{
		let t = pa(e);
		Ye();
		try {
			Mr(e);
		} finally {
			Xe(), t();
		}
	}
}
var Ca = { get(e, t) {
	return O(e, "get", ""), e[t];
} };
function wa(e) {
	return {
		attrs: new Proxy(e.attrs, Ca),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Ta(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(tn(Yt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Dr) return Dr[n](e);
		},
		has(e, t) {
			return t in e || t in Dr;
		}
	}) : e.proxy;
}
function Ea(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Da(e) {
	return h(e) && "__vccOpts" in e;
}
var q = (e, t) => /* @__PURE__ */ sn(e, t, ga), Oa = "3.5.38", ka = void 0, Aa = typeof window < "u" && window.trustedTypes;
if (Aa) try {
	ka = /* @__PURE__ */ Aa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var ja = ka ? (e) => ka.createHTML(e) : (e) => e, Ma = "http://www.w3.org/2000/svg", Na = "http://www.w3.org/1998/Math/MathML", Pa = typeof document < "u" ? document : null, Fa = Pa && /* @__PURE__ */ Pa.createElement("template"), Ia = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Pa.createElementNS(Ma, e) : t === "mathml" ? Pa.createElementNS(Na, e) : n ? Pa.createElement(e, { is: n }) : Pa.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Pa.createTextNode(e),
	createComment: (e) => Pa.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Pa.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Fa.innerHTML = ja(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Fa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, La = /* @__PURE__ */ Symbol("_vtc");
function Ra(e, t, n) {
	let r = e[La];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var za = /* @__PURE__ */ Symbol("_vod"), Ba = /* @__PURE__ */ Symbol("_vsh"), Va = /* @__PURE__ */ Symbol(""), Ha = /(?:^|;)\s*display\s*:/;
function Ua(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) if (g(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Ga(r, t, "");
		}
		else for (let e in t) n[e] ?? Ga(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ga(r, i, "") : Ya(e, i, !g(t) && t ? t[i] : void 0, o) || Ga(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Va];
			e && (n += ";" + e), r.cssText = n, a = Ha.test(n);
		}
	} else t && e.removeAttribute("style");
	za in e && (e[za] = a ? r.display : "", e[Ba] && (r.display = "none"));
}
var Wa = /\s*!important$/;
function Ga(e, t, n) {
	if (d(n)) n.forEach((n) => Ga(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Ja(e, t);
		Wa.test(n) ? e.setProperty(se(r), n.replace(Wa, ""), "important") : e[r] = n;
	}
}
var Ka = [
	"Webkit",
	"Moz",
	"ms"
], qa = {};
function Ja(e, t) {
	let n = qa[t];
	if (n) return n;
	let r = S(t);
	if (r !== "filter" && r in e) return qa[t] = r;
	r = ce(r);
	for (let n = 0; n < Ka.length; n++) {
		let i = Ka[n] + r;
		if (i in e) return qa[t] = i;
	}
	return t;
}
function Ya(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var Xa = "http://www.w3.org/1999/xlink";
function Za(e, t, n, r, i, a = xe(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Xa, t.slice(6, t.length)) : e.setAttributeNS(Xa, t, n) : n == null || a && !Se(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function Qa(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? ja(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = Se(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function $a(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function eo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var to = /* @__PURE__ */ Symbol("_vei");
function no(e, t, n, r, i = null) {
	let a = e[to] || (e[to] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = io(t);
		r ? $a(e, n, a[t] = co(r, i), s) : o && (eo(e, n, o, s), a[t] = void 0);
	}
}
var ro = /(?:Once|Passive|Capture)$/;
function io(e) {
	let t;
	if (ro.test(e)) {
		t = {};
		let n;
		for (; n = e.match(ro);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : se(e.slice(2)), t];
}
var ao = 0, oo = /* @__PURE__ */ Promise.resolve(), so = () => ao ||= (oo.then(() => ao = 0), Date.now());
function co(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (d(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && hn(e, t, 5, a);
			}
		} else hn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = so(), n;
}
var lo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uo = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? Ra(e, r, c) : t === "style" ? Ua(e, n, r) : a(t) ? o(t) || no(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fo(e, t, r, c)) ? (Qa(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Za(e, t, r, c, s, t !== "value")) : e._isVueCE && (po(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? Qa(e, S(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Za(e, t, r, c));
};
function fo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && lo(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return lo(t) && g(n) ? !1 : t in e;
}
function po(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = S(t);
	return Array.isArray(n) ? n.some((e) => S(e) === r) : Object.keys(n).some((e) => S(e) === r);
}
var mo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => de(t, e) : t;
};
function ho(e) {
	e.target.composing = !0;
}
function go(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var _o = /* @__PURE__ */ Symbol("_assign");
function vo(e, t, n) {
	return t && (e = e.trim()), n && (e = fe(e)), e;
}
var yo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[_o] = mo(i);
		let a = r || i.props && i.props.type === "number";
		$a(e, t ? "change" : "input", (t) => {
			t.target.composing || e[_o](vo(e.value, n, a));
		}), (n || a) && $a(e, "change", () => {
			e.value = vo(e.value, n, a);
		}), t || ($a(e, "compositionstart", ho), $a(e, "compositionend", go), $a(e, "change", go));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[_o] = mo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? fe(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, bo = {
	deep: !0,
	created(e, t, n) {
		e[_o] = mo(n), $a(e, "change", () => {
			let t = e._modelValue, n = wo(e), r = e.checked, i = e[_o];
			if (d(t)) {
				let e = Te(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (p(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(To(e, r));
		});
	},
	mounted: xo,
	beforeUpdate(e, t, n) {
		e[_o] = mo(n), xo(e, t, n);
	}
};
function xo(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (d(t)) i = Te(t, r.props.value) > -1;
	else if (p(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = we(t, To(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var So = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = p(t);
		$a(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? fe(wo(e)) : wo(e));
			e[_o](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, Tn(() => {
				e._assigning = !1;
			});
		}), e[_o] = mo(r);
	},
	mounted(e, { value: t }) {
		Co(e, t);
	},
	beforeUpdate(e, t, n) {
		e[_o] = mo(n);
	},
	updated(e, { value: t }) {
		e._assigning || Co(e, t);
	}
};
function Co(e, t) {
	let n = e.multiple, r = d(t);
	if (!(n && !r && !p(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = wo(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Te(t, o) > -1;
			} else a.selected = t.has(o);
			else if (we(wo(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function wo(e) {
	return "_value" in e ? e._value : e.value;
}
function To(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Eo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Do = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => Eo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Oo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Do[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, ko = /* @__PURE__ */ s({ patchProp: uo }, Ia), Ao;
function jo() {
	return Ao ||= Di(ko);
}
var Mo = ((...e) => {
	let t = jo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Po(e);
		if (!r) return;
		let i = t._component;
		!h(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, No(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function No(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Po(e) {
	return g(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/module/apps/common/view/browser-fullscreen.ts
function Fo(e) {
	return {
		active: !!e.fullscreenElement,
		supported: e.fullscreenEnabled === !0 && typeof e.documentElement.requestFullscreen == "function" && typeof e.exitFullscreen == "function"
	};
}
async function Io(e) {
	if (e.fullscreenElement) {
		await e.exitFullscreen();
		return;
	}
	if (!Fo(e).supported) throw Error("Browser fullscreen is unavailable.");
	await e.documentElement.requestFullscreen({ navigationUI: "hide" });
}
//#endregion
//#region src/module/apps/common/view/BrowserFullscreenButton.vue?vue&type=script&setup=true&lang.ts
var Lo = { class: "tw:grid tw:gap-2" }, Ro = [
	"disabled",
	"aria-pressed",
	"aria-busy"
], zo = {
	key: 0,
	class: "tw:m-0 tw:text-sm"
}, Bo = {
	key: 1,
	role: "alert",
	class: "tw:m-0 tw:text-sm"
}, Vo = /* @__PURE__ */ I({
	__name: "BrowserFullscreenButton",
	setup(e) {
		let t = /* @__PURE__ */ j(Fo(document)), n = /* @__PURE__ */ j(!1), r = /* @__PURE__ */ j("");
		function i() {
			t.value = Fo(document);
		}
		function a() {
			i(), r.value = "";
		}
		ur(() => {
			i(), document.addEventListener("fullscreenchange", a);
		}), pr(() => document.removeEventListener("fullscreenchange", a));
		async function o() {
			if (!n.value) {
				n.value = !0, r.value = "";
				try {
					await Io(document);
				} catch {
					r.value = "Browser fullscreen was blocked. You can still use On The Go normally.";
				} finally {
					i(), n.value = !1;
				}
			}
		}
		return (e, i) => (z(), B("div", Lo, [
			H("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-sm tw:h-auto tw:min-h-11 tw:w-full tw:py-2 tw:whitespace-normal",
				disabled: n.value || !t.value.supported && !t.value.active,
				"aria-pressed": t.value.active,
				"aria-busy": n.value,
				onClick: o
			}, [H("i", {
				class: w(["fa-solid", t.value.active ? "fa-compress" : "fa-expand"]),
				"aria-hidden": "true"
			}, null, 2), W(" " + T(t.value.active ? "Exit fullscreen" : "Enter fullscreen"), 1)], 8, Ro),
			!t.value.supported && !t.value.active ? (z(), B("p", zo, " Fullscreen is unavailable in this browser or page. Try your browser's fullscreen or toolbar controls. ")) : G("", !0),
			r.value ? (z(), B("p", Bo, T(r.value), 1)) : G("", !0)
		]));
	}
}), Ho = { class: "mobile-journal-shell__folders" }, Uo = ["aria-expanded", "onClick"], Wo = {
	key: 0,
	class: "mobile-journal-shell__folder-entries"
}, Go = ["onClick"], Ko = /* @__PURE__ */ I({
	name: "MobileJournalFolderTree",
	__name: "MobileJournalFolderTree",
	props: {
		depth: {},
		folders: {},
		hasSearchQuery: { type: Boolean }
	},
	emits: ["openEntry"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(new Set(n.folders.map((e) => e.id)));
		function a(e) {
			let t = new Set(i.value);
			t.has(e) ? t.delete(e) : t.add(e), i.value = t;
		}
		function o(e) {
			return n.hasSearchQuery || i.value.has(e);
		}
		return (t, n) => {
			let i = br("MobileJournalFolderTree", !0);
			return z(), B("div", Ho, [(z(!0), B(R, null, L(e.folders, (t) => (z(), B("section", {
				key: t.id,
				class: "mobile-journal-shell__folder",
				style: he({ "--folder-depth": e.depth })
			}, [H("button", {
				type: "button",
				class: "mobile-journal-shell__folder-button",
				"aria-expanded": o(t.id),
				onClick: (e) => a(t.id)
			}, [
				H("i", {
					class: w(["fa-solid", o(t.id) ? "fa-folder-open" : "fa-folder"]),
					"aria-hidden": "true"
				}, null, 2),
				H("span", null, T(t.name), 1),
				H("small", null, T(t.journalCount), 1),
				n[1] ||= H("i", {
					class: "fa-solid fa-chevron-right mobile-journal-shell__folder-chevron",
					"aria-hidden": "true"
				}, null, -1)
			], 8, Uo), o(t.id) ? (z(), B("div", Wo, [t.folders.length > 0 ? (z(), V(i, {
				key: 0,
				depth: e.depth + 1,
				folders: t.folders,
				"has-search-query": e.hasSearchQuery,
				onOpenEntry: n[0] ||= (e) => r("openEntry", e)
			}, null, 8, [
				"depth",
				"folders",
				"has-search-query"
			])) : G("", !0), (z(!0), B(R, null, L(t.journals, (t) => (z(), B("button", {
				key: t.id,
				type: "button",
				class: "mobile-journal-shell__journal-row",
				style: he({ "--folder-depth": e.depth + 1 }),
				onClick: (e) => r("openEntry", t)
			}, [n[2] ||= H("i", {
				class: "fa-solid fa-book-open",
				"aria-hidden": "true"
			}, null, -1), H("span", null, [H("strong", null, T(t.name), 1), H("small", null, T(t.pages.length) + " pages", 1)])], 12, Go))), 128))])) : G("", !0)], 4))), 128))]);
		};
	}
}), qo = { class: "mobile-journal-shell__list-view" }, Jo = { class: "mobile-journal-shell__search" }, Yo = ["value"], Xo = { class: "mobile-journal-shell__list-summary" }, Zo = {
	class: "mobile-journal-shell__tabs",
	"aria-label": "Journal collections"
}, Qo = ["aria-selected", "onClick"], $o = {
	key: 0,
	class: "mobile-journal-shell__tab-panel"
}, es = { class: "mobile-journal-shell__tab-header" }, ts = {
	key: 1,
	class: "mobile-journal-shell__empty"
}, ns = /* @__PURE__ */ I({
	__name: "MobileJournalList",
	props: {
		journalCount: {},
		searchText: {},
		tabs: {},
		totalPageCount: {}
	},
	emits: ["openEntry", "update:searchText"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(n.tabs[0]?.id ?? ""), a = q(() => n.searchText.trim().length > 0), o = q(() => n.tabs.find((e) => e.id === i.value) ?? n.tabs[0]);
		Hn(() => n.tabs.map((e) => e.id), () => {
			n.tabs.some((e) => e.id === i.value) || (i.value = n.tabs[0]?.id ?? "");
		});
		function s(e) {
			i.value = e;
		}
		function c(e) {
			let t = e.target;
			t instanceof HTMLInputElement && r("update:searchText", t.value);
		}
		return (t, n) => (z(), B("section", qo, [
			H("label", Jo, [n[1] ||= H("span", null, "Search Journals", -1), H("input", {
				value: e.searchText,
				type: "search",
				autocomplete: "off",
				class: "tw:dui-input",
				onInput: c
			}, null, 40, Yo)]),
			H("div", Xo, [H("span", null, T(e.journalCount) + " journals", 1), H("span", null, T(e.totalPageCount) + " pages", 1)]),
			H("nav", Zo, [(z(!0), B(R, null, L(e.tabs, (e) => (z(), B("button", {
				key: e.id,
				type: "button",
				class: "mobile-journal-shell__tab-button",
				"aria-selected": o.value?.id === e.id,
				onClick: (t) => s(e.id)
			}, [H("strong", null, T(e.label), 1), H("small", null, T(e.journalCount), 1)], 8, Qo))), 128))]),
			o.value ? (z(), B("section", $o, [H("header", es, [H("strong", null, T(o.value.label), 1), H("small", null, T(o.value.journalCount) + " journals / " + T(o.value.pageCount) + " pages", 1)]), o.value.folders.length > 0 ? (z(), V(Ko, {
				key: o.value.id,
				depth: 0,
				folders: o.value.folders,
				"has-search-query": a.value,
				onOpenEntry: n[0] ||= (e) => r("openEntry", e)
			}, null, 8, ["folders", "has-search-query"])) : (z(), B("section", ts, [...n[2] ||= [H("h2", null, "No Journals", -1)]]))])) : G("", !0)
		]));
	}
}), rs = {
	key: 0,
	class: "mobile-journal-shell__reader"
}, is = { class: "mobile-journal-shell__reader-bar" }, as = { class: "mobile-journal-shell__reader-title" }, os = { class: "mobile-journal-shell__reader-controls" }, ss = ["disabled"], cs = { class: "mobile-journal-shell__select-control" }, ls = ["value"], us = ["value"], ds = ["disabled"], fs = {
	key: 0,
	class: "mobile-journal-shell__select-control mobile-journal-shell__select-control--wide"
}, ps = ["value"], ms = ["innerHTML"], hs = /* @__PURE__ */ I({
	__name: "MobileJournalReader",
	props: {
		entry: {},
		pageId: {}
	},
	emits: ["back", "update:pageId"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(""), a = /* @__PURE__ */ j(null), o = q(() => n.entry.pages.find((e) => e.id === n.pageId) ?? n.entry.pages[0]), s = q(() => n.entry.pages.findIndex((e) => e.id === o.value?.id)), c = q(() => o.value ? h(o.value) : {
			headers: [],
			html: ""
		}), l = q(() => n.entry.folderName ? `${n.entry.source.label} / ${n.entry.folderName}` : n.entry.source.label);
		Hn(() => n.pageId, () => {
			i.value = "", Tn(() => {
				a.value?.scrollTo({ top: 0 });
			});
		});
		function u() {
			m(-1);
		}
		function d() {
			m(1);
		}
		function f(e) {
			let t = e.target;
			t instanceof HTMLSelectElement && r("update:pageId", t.value);
		}
		function p() {
			i.value && document.getElementById(i.value)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}
		function m(e) {
			let t = n.entry.pages[s.value + e];
			t && r("update:pageId", t.id);
		}
		function h(e) {
			let t = new DOMParser().parseFromString(e.html, "text/html");
			return {
				headers: [...t.body.querySelectorAll("h1, h2, h3, h4, h5, h6")].map((t, n) => {
					let r = t.textContent.trim() || `Heading ${n + 1}`, i = `otg-${e.id}-heading-${n}`;
					return t.id = i, {
						id: i,
						level: Number(t.tagName.slice(1)),
						text: r
					};
				}),
				html: t.body.innerHTML
			};
		}
		return (t, n) => o.value ? (z(), B("article", rs, [
			H("header", is, [H("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-square tw:dui-btn-ghost",
				"aria-label": "Back to journal list",
				onClick: n[0] ||= (e) => r("back")
			}, [...n[2] ||= [H("i", {
				class: "fa-solid fa-chevron-left",
				"aria-hidden": "true"
			}, null, -1)]]), H("div", as, [H("p", null, T(l.value), 1), H("h2", null, T(e.entry.name), 1)])]),
			H("div", os, [
				H("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-square tw:dui-btn-ghost",
					"aria-label": "Previous page",
					disabled: s.value <= 0,
					onClick: u
				}, [...n[3] ||= [H("i", {
					class: "fa-solid fa-arrow-left",
					"aria-hidden": "true"
				}, null, -1)]], 8, ss),
				H("label", cs, [n[4] ||= H("span", null, "Page", -1), H("select", {
					value: e.pageId,
					class: "tw:dui-select",
					onChange: f
				}, [(z(!0), B(R, null, L(e.entry.pages, (e) => (z(), B("option", {
					key: e.id,
					value: e.id
				}, T(e.name), 9, us))), 128))], 40, ls)]),
				H("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-square tw:dui-btn-ghost",
					"aria-label": "Next page",
					disabled: s.value >= e.entry.pages.length - 1,
					onClick: d
				}, [...n[5] ||= [H("i", {
					class: "fa-solid fa-arrow-right",
					"aria-hidden": "true"
				}, null, -1)]], 8, ds),
				c.value.headers.length > 0 ? (z(), B("label", fs, [n[7] ||= H("span", null, "Headings", -1), F(H("select", {
					"onUpdate:modelValue": n[1] ||= (e) => i.value = e,
					class: "tw:dui-select",
					onChange: p
				}, [n[6] ||= H("option", { value: "" }, "Jump to heading", -1), (z(!0), B(R, null, L(c.value.headers, (e) => (z(), B("option", {
					key: e.id,
					value: e.id
				}, T("-".repeat(Math.max(0, e.level - 1))) + " " + T(e.text), 9, ps))), 128))], 544), [[So, i.value]])])) : G("", !0)
			]),
			H("section", {
				ref_key: "pageScrollElement",
				ref: a,
				class: "mobile-journal-shell__page"
			}, [H("h3", null, T(o.value.name), 1), H("div", {
				class: "mobile-journal-shell__content",
				innerHTML: c.value.html
			}, null, 8, ms)], 512)
		])) : G("", !0);
	}
}), gs = {
	class: "mobile-journal-shell",
	"aria-label": "Journal browser"
}, _s = { class: "mobile-journal-shell__app-header" }, vs = { class: "tw:dui-badge tw:dui-badge-primary" }, ys = "compendiums", bs = "No Folder", xs = "World", Ss = "world", Cs = /* @__PURE__ */ I({
	__name: "MobileJournalApp",
	props: { journals: {} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ j(!1), r = /* @__PURE__ */ j(""), i = /* @__PURE__ */ j(""), a = /* @__PURE__ */ j(""), o = q(() => {
			let e = r.value.trim().toLocaleLowerCase();
			return e ? t.journals.filter((t) => {
				let n = t.pages.some((t) => t.name.toLocaleLowerCase().includes(e));
				return t.name.toLocaleLowerCase().includes(e) || t.folderName?.toLocaleLowerCase().includes(e) || t.source.label.toLocaleLowerCase().includes(e) || n;
			}) : t.journals;
		}), s = q(() => {
			let e = u(Ss, "World"), t = u(ys, "Compendiums"), n = /* @__PURE__ */ new Map();
			for (let r of o.value) r.source.type === "world" ? f(e, r) : p(t, n, r);
			return y(e.folders), y(t.folders), [e, t];
		}), c = q(() => o.value.reduce((e, t) => e + t.pages.length, 0)), l = q(() => t.journals.find((e) => e.id === i.value));
		function u(e, t) {
			return {
				folders: [],
				id: e,
				journalCount: 0,
				label: t,
				pageCount: 0
			};
		}
		function d(e, t) {
			return {
				folders: [],
				id: e,
				journalCount: 0,
				journals: [],
				name: t,
				pageCount: 0
			};
		}
		function f(e, t) {
			let n = t.folderName ?? xs;
			h(e.folders, `${e.id}:folder`, n, t), v(e, t);
		}
		function p(e, t, n) {
			let r = m(e, t, n);
			n.folderName ? h(r.folders, `${r.id}:folder`, n.folderName, n) : r.journals.push(n), _(r, n), v(e, n);
		}
		function m(e, t, n) {
			let r = `${e.id}:pack:${n.source.id}`, i = t.get(r);
			if (i) return i;
			let a = d(r, n.source.label);
			return t.set(r, a), e.folders.push(a), a;
		}
		function h(e, t, n, r) {
			let i = n.split("/").map((e) => e.trim()).filter((e) => e.length > 0), a = i.length > 0 ? i : [bs], o = e, s, c = [];
			for (let e of a) {
				c.push(e.toLocaleLowerCase());
				let n = `${t}:${c.join(":")}`;
				s = g(o, n, e), _(s, r), o = s.folders;
			}
			s && s.journals.push(r);
		}
		function g(e, t, n) {
			let r = e.find((e) => e.id === t);
			if (r) return r;
			let i = d(t, n);
			return e.push(i), i;
		}
		function _(e, t) {
			e.journalCount += 1, e.pageCount += t.pages.length;
		}
		function v(e, t) {
			e.journalCount += 1, e.pageCount += t.pages.length;
		}
		function y(e) {
			e.sort(b);
			for (let t of e) t.journals.sort(x), y(t.folders);
		}
		function b(e, t) {
			return e.name.localeCompare(t.name);
		}
		function x(e, t) {
			return e.name.localeCompare(t.name);
		}
		function ee(e) {
			i.value = e.id, a.value = e.pages[0]?.id ?? "", n.value = !0;
		}
		function te() {
			n.value = !1;
		}
		return (e, t) => (z(), B("section", gs, [H("header", _s, [t[2] ||= H("div", null, [H("p", null, "Drowsy's WFRP4e On The Go"), H("h1", null, "Journals")], -1), H("span", vs, T(o.value.length), 1)]), n.value ? l.value ? (z(), V(hs, {
			key: 1,
			"page-id": a.value,
			"onUpdate:pageId": t[1] ||= (e) => a.value = e,
			entry: l.value,
			onBack: te
		}, null, 8, ["page-id", "entry"])) : G("", !0) : (z(), V(ns, {
			key: 0,
			"search-text": r.value,
			"onUpdate:searchText": t[0] ||= (e) => r.value = e,
			"journal-count": o.value.length,
			tabs: s.value,
			"total-page-count": c.value,
			onOpenEntry: ee
		}, null, 8, [
			"search-text",
			"journal-count",
			"tabs",
			"total-page-count"
		]))]));
	}
}), ws = { class: "on-the-go-shell" }, Ts = { class: "on-the-go-shell__top-bar" }, Es = {
	key: 1,
	class: "on-the-go-shell__top-bar-spacer",
	"aria-hidden": "true"
}, Ds = {
	key: 0,
	class: "on-the-go-shell__home",
	"aria-label": "Main menu"
}, Os = {
	key: 1,
	class: "on-the-go-shell__content"
}, ks = { class: "on-the-go-shell__toggle tw:dui-card" }, As = { class: "on-the-go-shell__field" }, js = {
	class: "on-the-go-shell__gm-list",
	"aria-label": "Enabled users"
}, Ms = ["checked", "onChange"], Ns = { class: "on-the-go-shell__actions" }, Ps = { "aria-live": "polite" }, Fs = ["disabled"], Is = ["disabled"], Ls = /* @__PURE__ */ I({
	__name: "MobileShellApp",
	props: {
		activationSettings: {},
		disableForcedMode: { type: Function },
		journals: {},
		saveActivationSettings: { type: Function }
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ j("home"), r = /* @__PURE__ */ j(!1), i = /* @__PURE__ */ j(""), a = /* @__PURE__ */ Vt(m(t.activationSettings)), o = q(() => n.value === "journals" ? "Journals" : n.value === "settings" ? "Settings" : "Home"), s = q(() => t.journals.reduce((e, t) => e + t.pages.length, 0));
		function c(e) {
			n.value = e, i.value = "";
		}
		function l() {
			n.value = "home";
		}
		function u(e, t) {
			let n = a.users.find((t) => t.id === e);
			n && (n.enabled = t);
		}
		function d(e, t) {
			let n = t.target;
			n instanceof HTMLInputElement && u(e, n.checked);
		}
		async function f() {
			r.value = !0, i.value = "";
			try {
				await t.saveActivationSettings(m(a)), i.value = "Saved";
			} finally {
				r.value = !1;
			}
		}
		async function p() {
			r.value = !0, i.value = "";
			try {
				a.forceMobileUi = !1, await t.disableForcedMode(), i.value = "Forced mode is off. Refresh to return to Foundry.";
			} finally {
				r.value = !1;
			}
		}
		function m(e) {
			return {
				forceMobileUi: e.forceMobileUi,
				mobileWidthThreshold: e.mobileWidthThreshold,
				users: e.users.map((e) => ({ ...e }))
			};
		}
		return (t, u) => (z(), B("main", ws, [H("header", Ts, [
			n.value === "home" ? (z(), B("span", Es)) : (z(), B("button", {
				key: 0,
				type: "button",
				class: "tw:dui-btn tw:dui-btn-square tw:dui-btn-ghost",
				"aria-label": "Back to home",
				onClick: l
			}, [...u[4] ||= [H("i", {
				class: "fa-solid fa-chevron-left",
				"aria-hidden": "true"
			}, null, -1)]])),
			H("div", null, [u[5] ||= H("p", null, "Drowsy's WFRP4e On The Go", -1), H("h1", null, T(o.value), 1)]),
			u[6] ||= H("span", {
				class: "on-the-go-shell__top-bar-spacer",
				"aria-hidden": "true"
			}, null, -1)
		]), n.value === "home" ? (z(), B("section", Ds, [
			H("button", {
				type: "button",
				class: "on-the-go-shell__menu-button tw:dui-card",
				onClick: u[0] ||= (e) => c("journals")
			}, [u[8] ||= H("i", {
				class: "fa-solid fa-book-open",
				"aria-hidden": "true"
			}, null, -1), H("span", null, [u[7] ||= H("strong", null, "Journals", -1), H("small", null, T(e.journals.length) + " entries, " + T(s.value) + " pages", 1)])]),
			H("button", {
				type: "button",
				class: "on-the-go-shell__menu-button tw:dui-card",
				onClick: u[1] ||= (e) => c("settings")
			}, [u[10] ||= H("i", {
				class: "fa-solid fa-sliders",
				"aria-hidden": "true"
			}, null, -1), H("span", null, [u[9] ||= H("strong", null, "Settings", -1), H("small", null, T(a.forceMobileUi ? "Forced on this client" : "Automatic activation"), 1)])]),
			U(Vo)
		])) : n.value === "journals" ? (z(), B("section", Os, [U(Cs, { journals: e.journals }, null, 8, ["journals"])])) : (z(), B("form", {
			key: 2,
			class: "on-the-go-shell__settings",
			onSubmit: Oo(f, ["prevent"])
		}, [
			H("label", ks, [H("span", null, [u[11] ||= H("strong", null, "Force On This Client", -1), H("small", null, T(a.forceMobileUi ? "On" : "Off"), 1)]), F(H("input", {
				"onUpdate:modelValue": u[2] ||= (e) => a.forceMobileUi = e,
				type: "checkbox",
				class: "tw:dui-toggle tw:dui-toggle-primary"
			}, null, 512), [[bo, a.forceMobileUi]])]),
			H("label", As, [u[12] ||= H("span", null, "Mobile Width Threshold", -1), F(H("input", {
				"onUpdate:modelValue": u[3] ||= (e) => a.mobileWidthThreshold = e,
				type: "number",
				min: "320",
				max: "1400",
				step: "10",
				class: "tw:dui-input"
			}, null, 512), [[
				yo,
				a.mobileWidthThreshold,
				void 0,
				{ number: !0 }
			]])]),
			H("section", js, [u[13] ||= H("h2", null, "Enabled Users", -1), (z(!0), B(R, null, L(a.users, (e) => (z(), B("label", {
				key: e.id,
				class: w(["on-the-go-shell__toggle tw:dui-card", { "on-the-go-shell__toggle--current": e.isCurrentUser }])
			}, [H("span", null, [H("strong", null, T(e.name), 1), H("small", null, T(e.isGm ? "GM" : "Player") + T(e.isCurrentUser ? " · Current user" : ""), 1)]), H("input", {
				type: "checkbox",
				class: "tw:dui-toggle tw:dui-toggle-primary",
				checked: e.enabled,
				onChange: (t) => d(e.id, t)
			}, null, 40, Ms)], 2))), 128))]),
			H("footer", Ns, [
				H("p", Ps, T(i.value), 1),
				H("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-outline",
					disabled: r.value,
					onClick: p
				}, [...u[14] ||= [H("i", {
					class: "fa-solid fa-power-off",
					"aria-hidden": "true"
				}, null, -1), H("span", null, "Turn Off Forced Mode", -1)]], 8, Fs),
				H("button", {
					type: "submit",
					class: "tw:dui-btn tw:dui-btn-primary",
					disabled: r.value
				}, [u[15] ||= H("i", {
					class: "fa-solid fa-floppy-disk",
					"aria-hidden": "true"
				}, null, -1), H("span", null, T(r.value ? "Saving" : "Save"), 1)], 8, Is)
			])
		], 32))]));
	}
}), J = "wfrp4e-on-the-go", Rs = "Drowsy's WFRP4e On The Go", zs = "wfrp4e";
//#endregion
//#region src/module/foundry/journals/journal-permissions.ts
function Bs(e) {
	if (!Vs(e) || e.visible !== !0) return !1;
	let t = e.testUserPermission;
	if (typeof t != "function") return !1;
	try {
		return t.call(e, game.user, "OBSERVER") === !0;
	} catch {
		return !1;
	}
}
function Vs(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/module/foundry/journals/mobile-journal-adapter.ts
var Hs = {
	id: "world",
	label: "World Journals",
	type: "world"
};
async function Us(e = !1) {
	let t = Gs(e), n = await Ks(e);
	return [...t, ...n].sort(ic);
}
function Ws() {
	return Us(!0);
}
function Gs(e) {
	let t = {
		idPrefix: "world",
		source: Hs
	};
	return qs().filter((t) => !e || Bs(t)).map((n) => Qs(n, t, e)).filter((e) => e !== void 0);
}
async function Ks(e) {
	let t = [];
	for (let n of Js()) {
		if (e && !Bs(n)) continue;
		let r = Zs(n);
		if (!r) continue;
		let i = {
			idPrefix: `compendium:${r.id}`,
			source: {
				id: r.id,
				label: r.label,
				type: "compendium"
			}
		}, a = await Xs(n);
		t.push(...a.filter((t) => !e || Bs(t)).map((t) => Qs(t, i, e)).filter((e) => e !== void 0));
	}
	return t;
}
function qs() {
	let e = game.journal;
	return Array.isArray(e.contents) ? e.contents : [];
}
function Js() {
	return nc(game.packs).filter(Ys);
}
function Ys(e) {
	if (!lc(e)) return !1;
	let t = sc(e.documentName), n = lc(e.metadata) ? e.metadata : {}, r = sc(n.type) ?? sc(n.documentName);
	return t === "JournalEntry" || r === "JournalEntry";
}
async function Xs(e) {
	if (!cc(e)) return [];
	let t = await e.getDocuments();
	return Array.isArray(t) ? t : [];
}
function Zs(e) {
	if (!lc(e)) return;
	let t = lc(e.metadata) ? e.metadata : {}, n = sc(e.collection) ?? sc(t.id) ?? sc(t.name), r = sc(e.title) ?? sc(e.label) ?? sc(t.label) ?? n;
	if (!(!n || !r)) return {
		id: n,
		label: r
	};
}
function Qs(e, t, n) {
	if (!lc(e)) return;
	let r = tc(e);
	if (!r) return;
	let i = rc(e.folder), a = $s(e.pages, n), o = {
		id: `${t.idPrefix}:${r.id}`,
		name: r.name,
		pages: a,
		source: t.source
	};
	return i && (o.folderName = i), o;
}
function $s(e, t) {
	return nc(e).filter((e) => !t || Bs(e)).map(ec).filter((e) => e !== void 0).sort((e, t) => e.sort - t.sort || e.name.localeCompare(t.name));
}
function ec(e) {
	if (!lc(e)) return;
	let t = tc(e);
	if (t) return {
		html: sc((lc(e.text) ? e.text : {}).content) ?? "",
		id: t.id,
		name: t.name,
		sort: oc(e.sort) ?? 0,
		type: sc(e.type) ?? "unknown"
	};
}
function tc(e) {
	let t = sc(e.id), n = sc(e.name);
	if (!(!t || !n)) return {
		id: t,
		name: n
	};
}
function nc(e) {
	return Array.isArray(e) ? e : lc(e) && Array.isArray(e.contents) ? e.contents : [];
}
function rc(e) {
	if (!lc(e)) return;
	let t = [], n = e;
	for (; lc(n);) {
		let e = sc(n.name);
		e && t.unshift(e), n = n.folder;
	}
	return t.length > 0 ? t.join(" / ") : void 0;
}
function ic(e, t) {
	return ac(e.source.type) - ac(t.source.type) || e.source.label.localeCompare(t.source.label) || e.name.localeCompare(t.name);
}
function ac(e) {
	return e === "world" ? 0 : 1;
}
function oc(e) {
	if (typeof e == "number" && Number.isFinite(e)) return e;
}
function sc(e) {
	if (typeof e == "string" && e.trim() !== "") return e;
}
function cc(e) {
	return lc(e) && typeof e.getDocuments == "function";
}
function lc(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/module/foundry/settings/activation-settings.ts
var uc = 1, dc = "activationSettingsVersion", fc = "enabledUserIds", pc = "enabledGmUserIds", mc = "forceMobileUi", hc = "mobileWidthThreshold", gc = 800;
function _c() {
	Tc(fc, []), Tc(pc, []), Tc(dc, 0), game.settings.register(J, hc, {
		name: "WFRP_ON_THE_GO.settings.mobileWidthThreshold.name",
		hint: "WFRP_ON_THE_GO.settings.mobileWidthThreshold.hint",
		scope: "world",
		config: !0,
		restricted: !0,
		default: gc,
		type: Number,
		range: {
			min: 320,
			max: 1400,
			step: 10
		}
	}), game.settings.register(J, mc, {
		name: "WFRP_ON_THE_GO.settings.forceMobileUi.name",
		hint: "WFRP_ON_THE_GO.settings.forceMobileUi.hint",
		scope: "client",
		config: !0,
		default: !1,
		type: Boolean
	});
}
async function vc() {
	if (!game.user.isGM || Ec() >= uc) return;
	let e = Oc(fc), t = Oc(pc);
	await xc(e.length > 0 ? e : t), await game.settings.set(J, dc, uc);
}
function yc() {
	let e = new Set(Dc());
	return Mc().map((t) => ({
		enabled: e.has(t.id),
		id: t.id,
		isCurrentUser: t.id === game.user.id,
		isGm: t.isGM,
		name: t.name
	}));
}
function bc() {
	return {
		forceMobileUi: kc(),
		mobileWidthThreshold: Ac(),
		users: yc()
	};
}
async function xc(e) {
	let t = new Set(Mc().map((e) => e.id)), n = Array.from(new Set(e)).filter((e) => t.has(e));
	await game.settings.set(J, fc, n);
}
async function Sc(e) {
	await xc(e.users.filter((e) => e.enabled).map((e) => e.id)), await game.settings.set(J, hc, jc(e.mobileWidthThreshold)), await game.settings.set(J, mc, e.forceMobileUi);
}
async function Cc(e) {
	await game.settings.set(J, mc, e);
}
function wc(e = window.innerWidth) {
	let t = Dc().includes(game.user.id), n = kc() || e <= Ac();
	return !t || !n ? "none" : game.user.isGM ? "gm" : "player";
}
function Tc(e, t) {
	game.settings.register(J, e, {
		name: e,
		hint: e,
		scope: "world",
		config: !1,
		restricted: !0,
		default: t,
		type: typeof t == "number" ? Number : Object
	});
}
function Ec() {
	let e = game.settings.get(J, dc);
	return typeof e == "number" && Number.isFinite(e) ? e : 0;
}
function Dc() {
	return Oc(fc);
}
function Oc(e) {
	let t = game.settings.get(J, e);
	return Array.isArray(t) ? t.filter((e) => typeof e == "string") : [];
}
function kc() {
	return game.settings.get(J, mc) === !0;
}
function Ac() {
	let e = game.settings.get(J, hc);
	return typeof e != "number" || !Number.isFinite(e) ? gc : e;
}
function jc(e) {
	return Number.isFinite(e) ? Math.min(1400, Math.max(320, Math.round(e))) : gc;
}
function Mc() {
	return game.users.filter(() => !0);
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var Nc = typeof window < "u", Pc, Fc = (e) => Pc = e, Ic = Symbol();
function Lc(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Rc;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Rc ||= {});
var zc = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Bc(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Vc(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Kc(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Hc(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Uc(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"));
	} catch {
		let t = new MouseEvent("click", {
			bubbles: !0,
			cancelable: !0,
			view: window,
			detail: 0,
			screenX: 80,
			screenY: 20,
			clientX: 80,
			clientY: 20,
			ctrlKey: !1,
			altKey: !1,
			shiftKey: !1,
			metaKey: !1,
			button: 0,
			relatedTarget: null
		});
		e.dispatchEvent(t);
	}
}
var Wc = typeof navigator == "object" ? navigator : { userAgent: "" }, Gc = /Macintosh/.test(Wc.userAgent) && /AppleWebKit/.test(Wc.userAgent) && !/Safari/.test(Wc.userAgent), Kc = Nc ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Gc ? qc : "msSaveOrOpenBlob" in Wc ? Jc : Yc : () => {};
function qc(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Uc(r) : Hc(r.href) ? Vc(e, t, n) : (r.target = "_blank", Uc(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Uc(r);
	}, 0));
}
function Jc(e, t = "download", n) {
	if (typeof e == "string") if (Hc(e)) Vc(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			Uc(t);
		});
	}
	else navigator.msSaveOrOpenBlob(Bc(e, n), t);
}
function Yc(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Vc(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(zc.HTMLElement)) || "safari" in zc, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Gc) && typeof FileReader < "u") {
		let t = new FileReader();
		t.onloadend = function() {
			let e = t.result;
			if (typeof e != "string") throw r = null, Error("Wrong reader.result type");
			e = o ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location.assign(e), r = null;
		}, t.readAsDataURL(e);
	} else {
		let t = URL.createObjectURL(e);
		r ? r.location.assign(t) : location.href = t, r = null, setTimeout(function() {
			URL.revokeObjectURL(t);
		}, 4e4);
	}
}
var { assign: Xc } = Object;
function Zc() {
	let e = Ae(!0), t = e.run(() => /* @__PURE__ */ j({})), n = [], r = [], i = Yt({
		install(e) {
			Fc(i), i._a = e, e.provide(Ic, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
		},
		use(e) {
			return this._a ? n.push(e) : r.push(e), this;
		},
		_p: n,
		_a: null,
		_e: e,
		_s: /* @__PURE__ */ new Map(),
		state: t
	});
	return i;
}
var Qc = () => {};
function $c(e, t, n, r = Qc) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && je() && Me(i), i;
}
function el(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var tl = (e) => e(), nl = Symbol(), rl = Symbol();
function il(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		Lc(i) && Lc(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ A(r) && !/* @__PURE__ */ Gt(r) ? e[n] = il(i, r) : e[n] = r;
	}
	return e;
}
var al = Symbol();
function ol(e) {
	return !Lc(e) || !Object.prototype.hasOwnProperty.call(e, al);
}
var { assign: sl } = Object;
function cl(e) {
	return !!(/* @__PURE__ */ A(e) && e.effect);
}
function ll(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), sl(/* @__PURE__ */ nn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Yt(q(() => {
			Fc(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = ul(e, l, t, n, r, !0), c;
}
function ul(e, t, n = {}, r, i, a) {
	let o, s = sl({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Rc.patchFunction,
			storeId: e,
			events: void 0
		}) : (il(r.state.value[e], t), n = {
			type: Rc.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		Tn().then(() => {
			m === i && (l = !0);
		}), u = !0, el(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			sl(e, t);
		});
	} : Qc;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (nl in t) return t[rl] = n, t;
		let i = function() {
			Fc(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			el(f, {
				args: n,
				name: i[rl],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw el(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (el(a, e), e)).catch((e) => (el(o, e), Promise.reject(e))) : (el(a, l), l);
		};
		return i[nl] = !0, i[rl] = n, i;
	}, y = /* @__PURE__ */ Vt({
		_p: r,
		$id: e,
		$onAction: $c.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = $c(d, t, n.detached, () => a()), a = o.run(() => Hn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Rc.direct,
					events: void 0
				}, r);
			}, sl({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || tl)(() => r._e.run(() => (o = Ae()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ A(n) && !cl(n) || /* @__PURE__ */ Gt(n) ? a || (p && ol(n) && (/* @__PURE__ */ A(n) ? n.value = p[t] : il(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return sl(y, b), sl(/* @__PURE__ */ k(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				sl(t, e);
			});
		}
	}), r._p.forEach((e) => {
		sl(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function dl(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = zn();
		return n ||= o ? Rn(Ic, null) : null, n && Fc(n), n = Pc, n._s.has(e) || (i ? ul(e, t, r, n) : ll(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
//#endregion
//#region src/module/foundry/apps/VueMount.ts
var fl = class {
	#e;
	#t = Zc();
	createRoot() {
		let e = document.createElement("div");
		return e.classList.add("wfrp-on-the-go-root"), e.dataset.theme = "wfrp-on-the-go", e;
	}
	mount(e, t, n, r) {
		this.unmount(), t.classList.add("wfrp-on-the-go-app"), t.replaceChildren(e), this.#e = Mo(n, r), this.#e.use(this.#t), this.#e.mount(e);
	}
	unmount() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, pl = class extends foundry.applications.api.ApplicationV2 {
	#e = new fl();
	getVueProps() {}
	async _renderHTML(e, t) {
		return this.#e.createRoot();
	}
	_replaceHTML(e, t, n) {
		this.#e.mount(e, t, this.getVueComponent(), this.getVueProps() ?? {});
	}
	async _preClose(e) {
		this.#e.unmount(), await super._preClose(e);
	}
}, ml = "wfrp-on-the-go-mobile-shell-window", hl = "wfrp-on-the-go-mode-active", gl = /* @__PURE__ */ new Set();
function _l(e) {
	gl.add(e), document.body.classList.add(hl);
}
function vl(e) {
	gl.delete(e), gl.size === 0 && document.body.classList.remove(hl);
}
//#endregion
//#region src/module/foundry/apps/OnTheGoApplication.ts
var yl = class extends pl {
	#e;
	constructor({ windowed: e = !1 } = {}) {
		super(e ? {
			id: `${new.target.DEFAULT_OPTIONS.id}-windowed`,
			classes: ["wfrp-on-the-go-windowed-shell"],
			window: { resizable: !0 }
		} : {
			classes: [ml],
			position: {
				left: 0,
				top: 0
			}
		}), this.#e = !e;
	}
	_replaceHTML(e, t, n) {
		this.#e && _l(this), super._replaceHTML(e, t, n);
	}
	async _preClose(e) {
		vl(this), await super._preClose(e);
	}
}, bl = class extends yl {
	#e = [];
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${J}-mobile-shell`,
		classes: [J],
		tag: "section",
		window: {
			title: Rs,
			icon: "fa-solid fa-mobile-screen-button",
			resizable: !1
		},
		position: {
			width: 430,
			height: 800
		}
	};
	getVueComponent() {
		return Ls;
	}
	getVueProps() {
		return {
			activationSettings: bc(),
			disableForcedMode: async () => {
				await Cc(!1);
			},
			journals: this.#e,
			saveActivationSettings: Sc
		};
	}
	async _renderHTML(e, t) {
		let [n] = await Promise.all([super._renderHTML(e, t), this.loadJournals()]);
		return n;
	}
	async loadJournals() {
		this.#e = await Us();
	}
}, xl = dl("player-sheet", () => {
	let e = /* @__PURE__ */ j("status"), t = /* @__PURE__ */ j(!1), n = /* @__PURE__ */ j(), r = /* @__PURE__ */ j(""), i = /* @__PURE__ */ j(!1), a = q(() => r.value.trim().toLocaleLowerCase());
	function o() {
		t.value = !1;
	}
	function s(e) {
		n.value = e;
	}
	function c(t) {
		e.value = t, n.value = void 0, o();
	}
	function l() {
		n.value = void 0;
	}
	function u() {
		i.value = !1;
	}
	function d() {
		i.value = !0;
	}
	return {
		activeDestination: e,
		closeMenu: o,
		menuOpen: t,
		normalizedSkillFilter: a,
		selectedInventoryItemId: n,
		selectInventoryItem: s,
		showAllSkills: u,
		showDestination: c,
		showInventoryList: l,
		showTrainedSkills: d,
		skillFilter: r,
		trainedSkillsOnly: i
	};
}), Sl = {
	key: 0,
	class: "tw:grid tw:grid-cols-[auto_minmax(0,1fr)] tw:gap-3 tw:border-b tw:border-base-300 tw:bg-linear-to-br tw:from-base-200 tw:to-base-100 tw:p-4 tw:shadow-inner",
	"aria-labelledby": "character-name"
}, Cl = { class: "tw:dui-avatar" }, wl = { class: "tw:h-[5.4rem] tw:w-[4.6rem] tw:overflow-hidden tw:rounded-field tw:border-2 tw:border-secondary tw:bg-neutral tw:ring-3 tw:ring-base-100" }, Tl = ["src", "alt"], El = { class: "tw:grid tw:min-w-0 tw:content-center" }, Dl = { class: "tw:m-0 tw:text-xs tw:font-extrabold tw:text-secondary tw:uppercase" }, Ol = {
	id: "character-name",
	class: "tw:my-1 tw:font-serif tw:text-2xl tw:leading-none tw:font-bold"
}, kl = { class: "tw:text-sm tw:opacity-75" }, Al = { class: "tw:col-span-full tw:grid tw:gap-1" }, jl = { class: "tw:flex tw:items-baseline tw:justify-between" }, Ml = { class: "tw:font-serif tw:text-lg tw:tabular-nums" }, Nl = ["value"], Pl = {
	key: 1,
	class: "tw:grid tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:border-b tw:border-base-300 tw:bg-base-200 tw:px-3 tw:py-2 tw:shadow-inner",
	"aria-label": "Current character"
}, Fl = { class: "tw:dui-avatar" }, Il = { class: "tw:size-10 tw:overflow-hidden tw:rounded-field tw:border tw:border-secondary" }, Ll = ["src"], Rl = { class: "tw:min-w-0" }, zl = { class: "tw:block tw:truncate tw:font-serif" }, Bl = { class: "tw:block tw:truncate tw:opacity-65" }, Vl = { class: "tw:text-right" }, Hl = { class: "tw:font-serif tw:tabular-nums" }, Ul = /* @__PURE__ */ I({
	__name: "CharacterBanner",
	props: { character: {} },
	setup(e) {
		let t = e, n = xl(), r = q(() => n.activeDestination === "status"), i = q(() => {
			let e = t.character.wounds.maximum ?? 0;
			return e > 0 ? Math.max(0, Math.min(100, t.character.wounds.current / e * 100)) : 0;
		});
		return (t, n) => r.value ? (z(), B("section", Sl, [
			H("div", Cl, [H("div", wl, [H("img", {
				src: e.character.imageUrl,
				alt: `${e.character.name} portrait`,
				width: "92",
				height: "108",
				class: "tw:h-full tw:w-full tw:object-cover"
			}, null, 8, Tl)])]),
			H("div", El, [
				H("p", Dl, T(e.character.species || "Unknown species"), 1),
				H("h1", Ol, T(e.character.name), 1),
				H("span", kl, T(e.character.career.name), 1)
			]),
			H("div", Al, [H("div", jl, [n[0] ||= H("span", { class: "tw:text-xs tw:font-extrabold tw:uppercase" }, "Wounds", -1), H("strong", Ml, T(e.character.wounds.current) + " / " + T(e.character.wounds.maximum), 1)]), H("progress", {
				class: "tw:dui-progress tw:dui-progress-error",
				value: i.value,
				max: "100",
				"aria-label": "Current wounds"
			}, null, 8, Nl)])
		])) : (z(), B("section", Pl, [
			H("div", Fl, [H("div", Il, [H("img", {
				src: e.character.imageUrl,
				alt: "",
				width: "40",
				height: "40",
				class: "tw:h-full tw:w-full tw:object-cover"
			}, null, 8, Ll)])]),
			H("div", Rl, [H("strong", zl, T(e.character.name), 1), H("small", Bl, T(e.character.career.name), 1)]),
			H("div", Vl, [n[1] ||= H("span", { class: "tw:block tw:text-[0.6rem] tw:font-black tw:uppercase" }, "Wounds", -1), H("strong", Hl, T(e.character.wounds.current) + " / " + T(e.character.wounds.maximum), 1)])
		]));
	}
}), Wl = { class: "tw:dui-navbar tw:min-h-14 tw:border-b tw:border-secondary/50 tw:bg-neutral tw:px-2 tw:py-2 tw:text-neutral-content" }, Gl = { class: "tw:dui-navbar-start tw:w-auto" }, Kl = ["disabled", "aria-expanded"], ql = { class: "tw:dui-navbar-center tw:min-w-0 tw:flex-1 tw:px-2" }, Jl = { class: "tw:min-w-0 tw:text-center" }, Yl = { class: "tw:block tw:truncate tw:font-serif tw:text-base" }, Xl = { class: "tw:dui-navbar-end tw:w-auto" }, Zl = ["data-tip"], Ql = {
	class: "tw:dui-badge tw:dui-badge-ghost tw:dui-badge-sm",
	role: "status"
}, $l = { class: "tw:sr-only" }, eu = /* @__PURE__ */ I({
	__name: "ShellHeader",
	props: { characterState: {} },
	setup(e) {
		let t = e, n = xl(), r = {
			abilities: "Talents & Traits",
			advancement: "Advancement",
			chat: "Chat & Results",
			combat: "Combat",
			effects: "Effects & Health",
			inventory: "Inventory",
			journals: "Journals",
			magic: "Magic",
			notes: "Notes & Record",
			religion: "Religion",
			skills: "Skills",
			status: "Status"
		}, i = q(() => t.characterState.status === "ready" ? "Live character linked" : t.characterState.status === "missing" ? "No character assigned" : "Character needs attention");
		return (t, a) => (z(), B("header", Wl, [
			H("div", Gl, [H("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-sm tw:min-h-11",
				disabled: e.characterState.status !== "ready",
				"aria-expanded": M(n).menuOpen,
				"aria-controls": "player-adventure-menu-panel",
				onClick: a[0] ||= (e) => M(n).menuOpen = !0
			}, [...a[1] ||= [H("i", {
				class: "fa-solid fa-bars",
				"aria-hidden": "true"
			}, null, -1), W(" Menu ", -1)]], 8, Kl)]),
			H("div", ql, [H("div", Jl, [a[2] ||= H("p", { class: "tw:m-0 tw:text-[0.6rem] tw:font-black tw:tracking-[0.14em] tw:text-secondary tw:uppercase" }, " WFRP4e On The Go ", -1), H("strong", Yl, T(r[M(n).activeDestination]), 1)])]),
			H("div", Xl, [H("span", {
				class: "tw:dui-tooltip tw:dui-tooltip-left",
				"data-tip": i.value
			}, [H("span", Ql, [H("span", {
				class: w(["tw:dui-status tw:dui-status-sm", {
					"tw:dui-status-success": e.characterState.status === "ready",
					"tw:dui-status-warning": e.characterState.status === "missing",
					"tw:dui-status-error": e.characterState.status === "unsupported"
				}]),
				"aria-hidden": "true"
			}, null, 2), H("span", $l, T(i.value), 1)])], 8, Zl)])
		]));
	}
}), tu = {
	class: "tw:flex tw:h-full tw:w-[84vw] tw:max-w-[340px] tw:flex-col tw:border-r tw:border-secondary/50 tw:bg-base-200 tw:text-base-content tw:shadow-2xl",
	"aria-label": "Adventure menu"
}, nu = { class: "tw:grid tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:border-b tw:border-secondary/40 tw:bg-neutral tw:p-4 tw:text-neutral-content" }, ru = { class: "tw:dui-avatar" }, iu = { class: "tw:size-12 tw:overflow-hidden tw:rounded-field tw:border tw:border-secondary tw:bg-base-300" }, au = ["src", "alt"], ou = { class: "tw:min-w-0" }, su = { class: "tw:block tw:truncate tw:font-serif tw:text-lg" }, cu = {
	class: "tw:min-h-0 tw:flex-1 tw:overflow-y-auto tw:p-3",
	"aria-label": "Character pages"
}, lu = { class: "tw:dui-menu tw:w-full tw:gap-2 tw:p-0" }, uu = ["aria-current", "onClick"], du = {
	class: "tw:grid tw:size-9 tw:place-items-center tw:rounded-field tw:border tw:border-secondary/30 tw:bg-base-300 tw:text-secondary tw:shadow-inner",
	"aria-hidden": "true"
}, fu = { class: "tw:min-w-0" }, pu = { class: "tw:block tw:font-serif tw:text-base" }, mu = { class: "tw:block tw:truncate tw:opacity-65" }, hu = { class: "tw:grid tw:gap-3 tw:border-t tw:border-base-300 tw:p-3" }, gu = /* @__PURE__ */ I({
	__name: "AdventureMenu",
	props: { character: {} },
	setup(e) {
		let t = xl(), n = [
			{
				description: "Vitals and characteristics",
				icon: "fa-solid fa-shield-heart",
				id: "status",
				label: "Status"
			},
			{
				description: "Tests and training",
				icon: "fa-solid fa-dice-d20",
				id: "skills",
				label: "Skills"
			},
			{
				description: "Full talent and trait rules",
				icon: "fa-solid fa-star",
				id: "abilities",
				label: "Talents & Traits"
			},
			{
				description: "Loadout, attacks, armour, reload",
				icon: "fa-solid fa-shield-halved",
				id: "combat",
				label: "Combat"
			},
			{
				description: "Carried gear and coin",
				icon: "fa-solid fa-sack-xmark",
				id: "inventory",
				label: "Inventory"
			},
			{
				description: "Cast and channel spells",
				icon: "fa-solid fa-wand-sparkles",
				id: "magic",
				label: "Magic"
			},
			{
				description: "Prayers, blessings, and miracles",
				icon: "fa-solid fa-hands-praying",
				id: "religion",
				label: "Religion"
			},
			{
				description: "Conditions, injuries, and tests",
				icon: "fa-solid fa-heart-crack",
				id: "effects",
				label: "Effects & Health"
			},
			{
				description: "Biography, ambitions, and details",
				icon: "fa-solid fa-feather-pointed",
				id: "notes",
				label: "Notes & Record"
			},
			{
				description: "Career progress and spend XP",
				icon: "fa-solid fa-arrow-trend-up",
				id: "advancement",
				label: "Advancement"
			},
			{
				description: "Live rolls and table activity",
				icon: "fa-solid fa-comments",
				id: "chat",
				label: "Chat & Results"
			},
			{
				description: "Player-visible handouts",
				icon: "fa-solid fa-book-open",
				id: "journals",
				label: "Journals"
			}
		];
		return (r, i) => (z(), B("aside", tu, [
			H("header", nu, [
				H("div", ru, [H("div", iu, [H("img", {
					src: e.character.imageUrl,
					alt: `${e.character.name} portrait`,
					width: "48",
					height: "48",
					class: "tw:h-full tw:w-full tw:object-cover"
				}, null, 8, au)])]),
				H("div", ou, [i[1] ||= H("p", { class: "tw:m-0 tw:text-[0.65rem] tw:font-black tw:tracking-[0.14em] tw:text-secondary tw:uppercase" }, " Adventure menu ", -1), H("strong", su, T(e.character.name), 1)]),
				H("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-sm tw:dui-btn-square",
					"aria-label": "Close menu",
					onClick: i[0] ||= (...e) => M(t).closeMenu && M(t).closeMenu(...e)
				}, [...i[2] ||= [H("i", {
					class: "fa-solid fa-xmark",
					"aria-hidden": "true"
				}, null, -1)]])
			]),
			H("nav", cu, [H("ul", lu, [(z(), B(R, null, L(n, (e) => H("li", { key: e.id }, [H("button", {
				type: "button",
				class: w(["tw:dui-btn tw:dui-btn-ghost tw:grid tw:h-auto tw:min-h-16 tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:items-center tw:justify-start tw:gap-3 tw:border tw:border-transparent tw:bg-base-300/55 tw:px-3 tw:py-2 tw:text-left tw:text-base-content", { "tw:dui-menu-active tw:border-secondary/60": M(t).activeDestination === e.id }]),
				"aria-current": M(t).activeDestination === e.id ? "page" : void 0,
				onClick: (n) => M(t).showDestination(e.id)
			}, [
				H("span", du, [H("i", { class: w(e.icon) }, null, 2)]),
				H("span", fu, [H("strong", pu, T(e.label), 1), H("small", mu, T(e.description), 1)]),
				i[3] ||= H("i", {
					class: "fa-solid fa-chevron-right tw:text-xs tw:opacity-45",
					"aria-hidden": "true"
				}, null, -1)
			], 10, uu)])), 64))])]),
			H("footer", hu, [U(Vo), i[4] ||= H("p", { class: "tw:m-0 tw:text-xs tw:opacity-65" }, [H("i", {
				class: "fa-solid fa-scroll tw:mr-2 tw:text-secondary",
				"aria-hidden": "true"
			}), W(" Live updates are on while this sheet is open ")], -1)])
		]));
	}
}), _u = ["role"], vu = /* @__PURE__ */ I({
	__name: "ActionStatus",
	props: {
		message: {},
		tone: {}
	},
	setup(e) {
		return (t, n) => e.message ? (z(), B("div", {
			key: 0,
			class: w(["tw:dui-alert tw:items-start tw:text-sm", e.tone === "error" ? "tw:dui-alert-error" : "tw:dui-alert-success"]),
			role: e.tone === "error" ? "alert" : "status"
		}, [H("i", {
			class: w([e.tone === "error" ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-check", "tw:mt-1"]),
			"aria-hidden": "true"
		}, null, 2), H("span", null, T(e.message), 1)], 10, _u)) : G("", !0);
	}
}), yu = { class: "tw:dui-collapse tw:dui-collapse-arrow tw:rounded-box tw:border tw:border-base-300 tw:bg-base-200 tw:shadow-sm" }, bu = { class: "tw:dui-collapse-title tw:grid tw:min-h-16 tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:px-3 tw:py-2" }, xu = { class: "tw:grid tw:size-10 tw:place-items-center tw:overflow-hidden tw:rounded-field tw:border tw:border-secondary/35 tw:bg-base-300 tw:text-secondary" }, Su = ["src"], Cu = { class: "tw:min-w-0" }, wu = { class: "tw:block tw:[overflow-wrap:anywhere]" }, Tu = {
	key: 0,
	class: "tw:block tw:opacity-65 tw:[overflow-wrap:anywhere]"
}, Eu = { class: "tw:dui-collapse-content tw:grid tw:gap-3 tw:border-t tw:border-base-300 tw:px-4 tw:py-3" }, Du = ["innerHTML"], Ou = {
	key: 1,
	class: "tw:m-0 tw:text-sm tw:opacity-65"
}, ku = /* @__PURE__ */ I({
	__name: "DescriptionCollapse",
	props: {
		descriptionHtml: {},
		imageUrl: {},
		subtitle: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (z(), B("details", yu, [H("summary", bu, [
			H("span", xu, [e.imageUrl ? (z(), B("img", {
				key: 0,
				src: e.imageUrl,
				alt: "",
				width: "40",
				height: "40",
				loading: "lazy",
				class: "tw:h-full tw:w-full tw:object-cover"
			}, null, 8, Su)) : wr(t.$slots, "icon", { key: 1 }, () => [n[0] ||= H("i", {
				class: "fa-solid fa-book-open",
				"aria-hidden": "true"
			}, null, -1)])]),
			H("span", Cu, [H("strong", wu, T(e.title), 1), e.subtitle ? (z(), B("small", Tu, T(e.subtitle), 1)) : G("", !0)]),
			wr(t.$slots, "badge")
		]), H("div", Eu, [e.descriptionHtml ? (z(), B("div", {
			key: 0,
			class: "player-rich-text",
			innerHTML: e.descriptionHtml
		}, null, 8, Du)) : (z(), B("p", Ou, "No full description is recorded.")), wr(t.$slots, "default")])]));
	}
}), Au = { class: "tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:items-end tw:gap-3" }, ju = { class: "tw:m-0 tw:text-xs tw:font-extrabold tw:tracking-[0.08em] tw:text-secondary tw:uppercase" }, Mu = { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold" }, Nu = {
	key: 0,
	class: "tw:dui-badge tw:dui-badge-sm"
}, Pu = /* @__PURE__ */ I({
	__name: "SectionHeading",
	props: {
		count: {},
		eyebrow: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (z(), B("header", Au, [H("div", null, [H("p", ju, T(e.eyebrow), 1), H("h2", Mu, T(e.title), 1)]), e.count === void 0 ? G("", !0) : (z(), B("span", Nu, T(e.count), 1))]));
	}
});
//#endregion
//#region src/module/apps/player-shell/view/usePlayerAction.ts
function Fu() {
	let e = /* @__PURE__ */ j(""), t = /* @__PURE__ */ j("success"), n = /* @__PURE__ */ j(!1);
	async function r(r, i) {
		e.value = "", n.value = !0;
		try {
			await r(), t.value = "success", e.value = i;
		} catch (n) {
			t.value = "error", e.value = n instanceof Error ? n.message : "That action could not be completed.";
		} finally {
			n.value = !1;
		}
	}
	return {
		actionMessage: e,
		actionTone: t,
		isBusy: n,
		runPlayerAction: r
	};
}
//#endregion
//#region src/module/apps/player-shell/view/abilities/AbilitiesSection.vue?vue&type=script&setup=true&lang.ts
var Iu = {
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Talents and traits"
}, Lu = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "talents-heading"
}, Ru = { class: "tw:dui-badge tw:dui-badge-soft tw:dui-badge-sm" }, zu = {
	key: 0,
	class: "tw:m-0 tw:text-sm tw:opacity-65"
}, Bu = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "traits-heading"
}, Vu = {
	key: 0,
	class: "tw:dui-badge tw:dui-badge-secondary tw:dui-badge-sm"
}, Hu = ["disabled", "onClick"], Uu = {
	key: 0,
	class: "tw:m-0 tw:text-sm tw:opacity-65"
}, Wu = /* @__PURE__ */ I({
	__name: "AbilitiesSection",
	props: {
		actions: {},
		talents: {},
		traits: {}
	},
	setup(e) {
		let t = e, { actionMessage: n, actionTone: r, isBusy: i, runPlayerAction: a } = Fu();
		function o(e) {
			a(() => t.actions.rollTrait(e.id), `${e.name} test sent to chat.`);
		}
		return (t, a) => (z(), B("section", Iu, [
			U(Pu, {
				count: e.talents.length + e.traits.length,
				eyebrow: "Gifts and abilities",
				title: "Talents & Traits"
			}, null, 8, ["count"]),
			a[5] ||= H("p", { class: "tw:m-0 tw:text-sm tw:opacity-70" }, "Tap any entry to open its complete rules text.", -1),
			U(vu, {
				message: M(n),
				tone: M(r)
			}, null, 8, ["message", "tone"]),
			H("section", Lu, [
				a[1] ||= H("h3", {
					id: "talents-heading",
					class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
				}, "Talents", -1),
				(z(!0), B(R, null, L(e.talents, (e) => (z(), V(ku, {
					key: e.id || e.name,
					"description-html": e.descriptionHtml,
					subtitle: e.tests ? `Tests: ${e.tests}` : "No test specialization",
					title: e.name
				}, {
					icon: P(() => [...a[0] ||= [H("i", {
						class: "fa-solid fa-star",
						"aria-hidden": "true"
					}, null, -1)]]),
					badge: P(() => [H("span", Ru, "Rank " + T(e.ranks), 1)]),
					_: 2
				}, 1032, [
					"description-html",
					"subtitle",
					"title"
				]))), 128)),
				e.talents.length === 0 ? (z(), B("p", zu, " No talents recorded. ")) : G("", !0)
			]),
			H("section", Bu, [
				a[4] ||= H("h3", {
					id: "traits-heading",
					class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
				}, "Traits", -1),
				(z(!0), B(R, null, L(e.traits, (e) => (z(), V(ku, {
					key: e.id,
					"description-html": e.descriptionHtml,
					subtitle: e.specification,
					title: e.name
				}, {
					icon: P(() => [...a[2] ||= [H("i", {
						class: "fa-solid fa-paw",
						"aria-hidden": "true"
					}, null, -1)]]),
					badge: P(() => [e.rollable ? (z(), B("span", Vu, " Rollable ")) : G("", !0)]),
					default: P(() => [e.rollable ? (z(), B("button", {
						key: 0,
						type: "button",
						class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11 tw:w-full",
						disabled: M(i),
						onClick: (t) => o(e)
					}, [...a[3] ||= [H("i", {
						class: "fa-solid fa-dice-d20",
						"aria-hidden": "true"
					}, null, -1), W(" Set up trait test ", -1)]], 8, Hu)) : G("", !0)]),
					_: 2
				}, 1032, [
					"description-html",
					"subtitle",
					"title"
				]))), 128)),
				e.traits.length === 0 ? (z(), B("p", Uu, "No traits recorded.")) : G("", !0)
			])
		]));
	}
});
//#endregion
//#region src/module/functions/player-sheet/advancement.ts
function Gu(e, t, n = 0) {
	if (e.length === 0 || e.some((e) => !Number.isFinite(e) || e < 0)) throw Error("The WFRP advancement cost table is invalid.");
	let r = Math.max(0, Math.floor(t / 5)), i = e[Math.min(r, e.length - 1)];
	if (i === void 0) throw Error("The WFRP advancement cost table is incomplete.");
	return i + n;
}
function Ku(e) {
	return (e + 1) * 100;
}
function qu(e, t, n) {
	if (![
		e,
		t,
		n
	].every(Number.isFinite) || e < 0 || t < 0 || n < 0) throw Error("The character experience values are invalid.");
	let r = e - t;
	if (r < n) throw Error(`This advance costs ${n} XP, but only ${Math.max(0, r)} is available.`);
	let i = t + n;
	return {
		available: e - i,
		spent: i,
		total: e
	};
}
function Ju(e, t, n, r) {
	let i = Math.max(1, Math.floor(e.level)) * 5, a = new Set(e.characteristicAdvances.map(Yu)), o = t.filter((e) => [
		e.key,
		e.abbreviation,
		e.label
	].some((e) => a.has(Yu(e)))).map((e) => Xu(e, i)), s = new Map(n.map((e) => [Yu(e.name), e])), c = Zu(e.skillNames).map((e) => {
		let t = s.get(Yu(e)), n = t?.advances ?? 0;
		return {
			advancesNeeded: Math.max(0, i - n),
			complete: n >= i,
			name: e,
			...t ? { skill: t } : {}
		};
	}), l = new Set(e.talentNames.map(Yu)), u = r.filter((e) => l.has(Yu(e.name))), d = e.talentNames.length === 0 || u.length > 0, f = o.length + c.length + +!!e.talentNames.length;
	return {
		advanceTarget: i,
		characteristics: o,
		completedRequirements: o.filter((e) => e.complete).length + c.filter((e) => e.complete).length + (e.talentNames.length && d ? 1 : 0),
		remainingAdvances: [...o, ...c].reduce((e, t) => e + t.advancesNeeded, 0),
		skills: c,
		talentComplete: d,
		talents: u,
		totalRequirements: f
	};
}
function Yu(e) {
	return e.trim().toLowerCase();
}
function Xu(e, t) {
	return {
		advancesNeeded: Math.max(0, t - e.advances),
		characteristic: e,
		complete: e.advances >= t
	};
}
function Zu(e) {
	let t = /* @__PURE__ */ new Set();
	return e.filter((e) => {
		let n = Yu(e);
		return !n || t.has(n) ? !1 : (t.add(n), !0);
	});
}
//#endregion
//#region src/module/apps/player-shell/view/common/ConfirmAction.vue?vue&type=script&setup=true&lang.ts
var Qu = { class: "tw:dui-modal-box tw:bg-base-200" }, $u = { class: "tw:m-0 tw:font-serif tw:text-xl tw:font-bold" }, ed = { class: "tw:dui-modal-action" }, td = /* @__PURE__ */ I({
	__name: "ConfirmAction",
	props: {
		body: {},
		confirmLabel: { default: "Confirm" },
		danger: {
			type: Boolean,
			default: !0
		},
		icon: { default: "fa-solid fa-trash" },
		title: {},
		triggerLabel: {}
	},
	emits: ["confirm"],
	setup(e, { emit: t }) {
		let n = t, r = /* @__PURE__ */ j();
		function i() {
			r.value?.close(), n("confirm");
		}
		return (t, n) => (z(), B(R, null, [H("button", {
			type: "button",
			class: w(["tw:dui-btn tw:min-h-11", e.danger ? "tw:dui-btn-outline tw:dui-btn-error" : "tw:dui-btn-primary"]),
			onClick: n[0] ||= (e) => r.value?.showModal()
		}, [H("i", {
			class: w(e.icon),
			"aria-hidden": "true"
		}, null, 2), W(" " + T(e.triggerLabel), 1)], 2), H("dialog", {
			ref_key: "dialog",
			ref: r,
			class: "tw:dui-modal"
		}, [H("div", Qu, [
			H("h3", $u, T(e.title), 1),
			H("p", null, T(e.body), 1),
			H("div", ed, [n[1] ||= H("form", { method: "dialog" }, [H("button", {
				type: "submit",
				class: "tw:dui-btn"
			}, "Cancel")], -1), H("button", {
				type: "button",
				class: w(["tw:dui-btn", e.danger ? "tw:dui-btn-error" : "tw:dui-btn-primary"]),
				onClick: i
			}, T(e.confirmLabel), 3)])
		]), n[2] ||= H("form", {
			method: "dialog",
			class: "tw:dui-modal-backdrop"
		}, [H("button", { type: "submit" }, "Close")], -1)], 512)], 64));
	}
}), nd = {
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Advancement"
}, rd = { class: "tw:dui-stats tw:grid tw:grid-cols-3 tw:bg-base-200 tw:shadow-md" }, id = { class: "tw:dui-stat tw:min-w-0 tw:p-3" }, ad = { class: "tw:dui-stat-value tw:text-xl tw:text-secondary" }, od = { class: "tw:dui-stat tw:min-w-0 tw:p-3" }, sd = { class: "tw:dui-stat-value tw:text-xl" }, cd = { class: "tw:dui-stat tw:min-w-0 tw:p-3" }, ld = { class: "tw:dui-stat-value tw:text-xl" }, ud = {
	key: 0,
	class: "tw:m-0 tw:text-sm"
}, dd = { class: "tw:grid tw:gap-2 tw:min-[360px]:grid-cols-2" }, fd = ["disabled"], pd = ["disabled"], md = {
	key: 0,
	class: "tw:grid tw:gap-2 tw:rounded-box tw:bg-base-200 tw:p-3"
}, hd = { class: "tw:flex tw:items-center tw:justify-between tw:gap-2 tw:text-sm" }, gd = { class: "tw:dui-badge tw:dui-badge-sm tw:dui-badge-outline" }, _d = ["value", "max"], vd = { class: "tw:opacity-70" }, yd = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "advance-characteristics-heading"
}, bd = { class: "tw:grid tw:size-11 tw:place-items-center tw:rounded-field tw:bg-base-300 tw:font-serif tw:text-xl tw:text-secondary" }, xd = { class: "tw:min-w-0" }, Sd = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, Cd = { class: "tw:block tw:opacity-65" }, wd = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "advance-skills-heading"
}, Td = { class: "tw:grid tw:size-11 tw:place-items-center tw:rounded-field tw:bg-base-300 tw:font-serif tw:text-xl tw:text-secondary" }, Ed = { class: "tw:min-w-0" }, Dd = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, Od = { class: "tw:[overflow-wrap:anywhere]" }, kd = { class: "tw:block tw:opacity-65" }, Ad = ["disabled", "onClick"], jd = {
	key: 1,
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "advance-talents-heading"
}, Md = { class: "tw:min-w-0" }, Nd = { class: "tw:block tw:[overflow-wrap:anywhere]" }, Pd = { class: "tw:opacity-65" }, Fd = /* @__PURE__ */ I({
	__name: "AdvancementSection",
	props: {
		actions: {},
		character: {}
	},
	setup(e) {
		let t = e, { actionMessage: n, actionTone: r, isBusy: i, runPlayerAction: a } = Fu(), o = q(() => Ju(t.character.career, t.character.characteristics, t.character.skills, t.character.talents));
		function s(e) {
			a(() => t.actions.advanceCharacteristic(e.key), `${e.label} advanced for ${e.nextAdvanceCost} XP.`);
		}
		function c(e) {
			a(() => t.actions.advanceSkill(e.id), `${e.name} advanced for ${e.nextAdvanceCost} XP.`);
		}
		function l(e) {
			a(() => t.actions.addCareerSkill(e), `${e} added to the character sheet.`);
		}
		function u(e) {
			a(() => t.actions.advanceTalent(e.id), `${e.name} advanced for ${e.nextAdvanceCost} XP.`);
		}
		function d() {
			let e = !t.character.career.complete;
			a(() => t.actions.setCareerComplete(t.character.career.id, e), e ? "Career marked complete." : "Career marked incomplete.");
		}
		function f() {
			a(t.actions.openCareerSelector, "Career selector opened.");
		}
		return (t, a) => (z(), B("section", nd, [
			U(Pu, {
				eyebrow: "Spend experience",
				title: "Advancement"
			}),
			U(vu, {
				message: M(n),
				tone: M(r)
			}, null, 8, ["message", "tone"]),
			H("div", rd, [
				H("div", id, [a[0] ||= H("div", { class: "tw:dui-stat-title" }, "Available", -1), H("div", ad, T(e.character.experience.available), 1)]),
				H("div", od, [a[1] ||= H("div", { class: "tw:dui-stat-title" }, "Spent", -1), H("div", sd, T(e.character.experience.spent), 1)]),
				H("div", cd, [a[2] ||= H("div", { class: "tw:dui-stat-title" }, "Total", -1), H("div", ld, T(e.character.experience.total), 1)])
			]),
			U(ku, {
				"description-html": e.character.career.descriptionHtml,
				subtitle: [e.character.career.group, e.character.career.level && `Level ${e.character.career.level}`].filter(Boolean).join(" · "),
				title: e.character.career.name
			}, {
				icon: P(() => [...a[3] ||= [H("i", {
					class: "fa-solid fa-briefcase",
					"aria-hidden": "true"
				}, null, -1)]]),
				badge: P(() => [H("span", { class: w(["tw:dui-badge tw:dui-badge-sm", e.character.career.complete ? "tw:dui-badge-success" : "tw:dui-badge-warning"]) }, T(e.character.career.complete ? "Complete" : "In progress"), 3)]),
				default: P(() => [e.character.career.talentNames.length ? (z(), B("p", ud, [a[4] ||= H("strong", null, "Career talents:", -1), W(" " + T(e.character.career.talentNames.join(", ")), 1)])) : G("", !0), H("div", dd, [H("button", {
					type: "button",
					class: "tw:dui-btn tw:min-h-11",
					disabled: M(i) || !e.character.career.id,
					onClick: d
				}, [a[5] ||= H("i", {
					class: "fa-solid fa-check-double",
					"aria-hidden": "true"
				}, null, -1), W(" Mark " + T(e.character.career.complete ? "incomplete" : "complete"), 1)], 8, fd), H("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-secondary tw:min-h-11",
					disabled: M(i),
					onClick: f
				}, [...a[6] ||= [H("i", {
					class: "fa-solid fa-route",
					"aria-hidden": "true"
				}, null, -1), W(" Change career ", -1)]], 8, pd)])]),
				_: 1
			}, 8, [
				"description-html",
				"subtitle",
				"title"
			]),
			o.value.totalRequirements ? (z(), B("div", md, [
				H("div", hd, [a[7] ||= H("strong", null, "Career completion", -1), H("span", gd, T(o.value.completedRequirements) + "/" + T(o.value.totalRequirements) + " ready ", 1)]),
				H("progress", {
					class: "tw:dui-progress",
					value: o.value.completedRequirements,
					max: o.value.totalRequirements,
					"aria-label": "Career completion requirements"
				}, null, 8, _d),
				H("small", vd, [W(T(o.value.remainingAdvances) + " characteristic and skill advances remain. ", 1), e.character.career.talentNames.length ? (z(), B(R, { key: 0 }, [W(T(o.value.talentComplete ? "Career talent owned." : "Choose 1 career talent."), 1)], 64)) : G("", !0)])
			])) : G("", !0),
			H("section", yd, [a[8] ||= H("h3", {
				id: "advance-characteristics-heading",
				class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
			}, " Career characteristics ", -1), (z(!0), B(R, null, L(o.value.characteristics, (e) => (z(), B("article", {
				key: e.characteristic.key,
				class: "tw:grid tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:rounded-box tw:bg-base-200 tw:p-3"
			}, [
				H("strong", bd, T(e.characteristic.value), 1),
				H("span", xd, [H("span", Sd, [H("strong", null, T(e.characteristic.label), 1), H("span", { class: w(["tw:dui-badge tw:dui-badge-sm", e.complete ? "tw:dui-badge-success" : "tw:dui-badge-warning"]) }, T(e.complete ? "Complete" : `${e.advancesNeeded} needed`), 3)]), H("small", Cd, T(e.characteristic.advances) + "/" + T(o.value.advanceTarget) + " career advances · " + T(e.characteristic.nextAdvanceCost) + " XP next", 1)]),
				U(td, {
					body: `Spend ${e.characteristic.nextAdvanceCost} XP to advance ${e.characteristic.label}?`,
					danger: !1,
					"confirm-label": "Spend XP",
					icon: "fa-solid fa-arrow-up",
					title: `Advance ${e.characteristic.label}?`,
					"trigger-label": "Advance",
					onConfirm: (t) => s(e.characteristic)
				}, null, 8, [
					"body",
					"title",
					"onConfirm"
				])
			]))), 128))]),
			H("section", wd, [a[9] ||= H("h3", {
				id: "advance-skills-heading",
				class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
			}, " Career skills ", -1), (z(!0), B(R, null, L(o.value.skills, (e) => (z(), B("article", {
				key: e.name,
				class: w(["tw:grid tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:rounded-box tw:bg-base-200 tw:p-3", { "tw:opacity-65": !e.skill }])
			}, [
				H("strong", Td, T(e.skill?.total ?? "—"), 1),
				H("span", Ed, [H("span", Dd, [H("strong", Od, T(e.name), 1), H("span", { class: w(["tw:dui-badge tw:dui-badge-sm", e.complete ? "tw:dui-badge-success" : "tw:dui-badge-warning"]) }, T(e.complete ? "Complete" : `${e.advancesNeeded} needed`), 3)]), H("small", kd, [e.skill ? (z(), B(R, { key: 0 }, [W(T(e.skill.advances) + "/" + T(o.value.advanceTarget) + " career advances · " + T(e.skill.nextAdvanceCost) + " XP next ", 1)], 64)) : (z(), B(R, { key: 1 }, [W("Not on character sheet")], 64))])]),
				e.skill ? (z(), V(td, {
					key: 0,
					body: `Spend ${e.skill.nextAdvanceCost} XP to advance ${e.skill.name}?`,
					danger: !1,
					"confirm-label": "Spend XP",
					icon: "fa-solid fa-arrow-up",
					title: `Advance ${e.skill.name}?`,
					"trigger-label": "Advance",
					onConfirm: (t) => c(e.skill)
				}, null, 8, [
					"body",
					"title",
					"onConfirm"
				])) : (z(), B("button", {
					key: 1,
					type: "button",
					class: "tw:dui-btn tw:dui-btn-sm tw:min-h-11",
					disabled: M(i),
					onClick: (t) => l(e.name)
				}, " Add to sheet ", 8, Ad))
			], 2))), 128))]),
			o.value.talents.length ? (z(), B("section", jd, [a[10] ||= H("h3", {
				id: "advance-talents-heading",
				class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
			}, " Owned career talents ", -1), (z(!0), B(R, null, L(o.value.talents, (e) => (z(), B("article", {
				key: e.id,
				class: "tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:rounded-box tw:bg-base-200 tw:p-3"
			}, [H("span", Md, [H("strong", Nd, T(e.name), 1), H("small", Pd, "Rank " + T(e.ranks) + " · " + T(e.nextAdvanceCost) + " XP next", 1)]), U(td, {
				body: `Spend ${e.nextAdvanceCost} XP to buy another rank of ${e.name}?`,
				danger: !1,
				"confirm-label": "Spend XP",
				icon: "fa-solid fa-arrow-up",
				title: `Advance ${e.name}?`,
				"trigger-label": "Advance",
				onConfirm: (t) => u(e)
			}, null, 8, [
				"body",
				"title",
				"onConfirm"
			])]))), 128))])) : G("", !0)
		]));
	}
}), Id = {
	class: "tw:flex tw:h-full tw:min-h-0 tw:flex-col",
	"aria-label": "Chat and results"
}, Ld = { class: "tw:grid tw:gap-2 tw:border-b tw:border-base-300 tw:bg-base-100 tw:p-3" }, Rd = { class: "tw:dui-chat-header tw:flex tw:gap-2 tw:text-xs" }, zd = ["datetime"], Bd = {
	key: 0,
	class: "tw:mt-0 tw:mb-2 tw:text-xs tw:font-bold tw:text-secondary"
}, Vd = ["innerHTML"], Hd = {
	key: 0,
	class: "tw:dui-alert tw:items-start",
	role: "status"
}, Ud = /* @__PURE__ */ I({
	__name: "ChatSection",
	props: { activity: {} },
	setup(e) {
		let t = /* @__PURE__ */ j();
		ur(() => {
			Tn(() => t.value?.scrollTo({ top: t.value.scrollHeight }));
		});
		function n(e) {
			return e ? new Intl.DateTimeFormat(void 0, {
				hour: "numeric",
				minute: "2-digit"
			}).format(e) : "";
		}
		return (r, i) => (z(), B("section", Id, [H("header", Ld, [U(Pu, {
			count: e.activity.length,
			eyebrow: "Live from the table",
			title: "Chat & Results"
		}, null, 8, ["count"]), i[0] ||= H("div", { class: "tw:flex tw:items-center tw:gap-2 tw:text-xs tw:opacity-70" }, [H("span", {
			class: "tw:dui-status tw:dui-status-success",
			"aria-hidden": "true"
		}), W(" New visible messages appear automatically ")], -1)]), H("div", {
			ref_key: "feed",
			ref: t,
			class: "tw:min-h-0 tw:flex-1 tw:overflow-y-auto tw:p-3",
			"aria-live": "polite"
		}, [(z(!0), B(R, null, L(e.activity, (e) => (z(), B("article", {
			key: e.id,
			class: w(["tw:dui-chat", e.isOwn ? "tw:dui-chat-end" : "tw:dui-chat-start"])
		}, [H("div", Rd, [H("strong", null, T(e.author), 1), e.timestamp ? (z(), B("time", {
			key: 0,
			datetime: new Date(e.timestamp).toISOString()
		}, T(n(e.timestamp)), 9, zd)) : G("", !0)]), H("div", { class: w(["tw:dui-chat-bubble tw:max-w-[92%] tw:bg-base-200 tw:text-base-content tw:shadow-md", { "tw:border tw:border-secondary/50": e.isOwn }]) }, [e.flavor ? (z(), B("p", Bd, T(e.flavor), 1)) : G("", !0), H("div", {
			class: "player-chat-content",
			innerHTML: e.contentHtml
		}, null, 8, Vd)], 2)], 2))), 128)), e.activity.length === 0 ? (z(), B("div", Hd, [...i[1] ||= [H("i", {
			class: "fa-solid fa-comments tw:mt-1",
			"aria-hidden": "true"
		}, null, -1), H("span", null, "No visible chat messages yet. Tests and rolls will appear here.", -1)]])) : G("", !0)], 512)]));
	}
}), Wd = {
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Combat"
}, Gd = {
	class: "tw:grid tw:grid-cols-2 tw:gap-2",
	"aria-label": "Combat state"
}, Kd = { class: "tw:rounded-box tw:bg-base-200 tw:p-3 tw:shadow-md" }, qd = { class: "tw:block tw:font-serif tw:text-xl tw:tabular-nums" }, Jd = { class: "tw:dui-join tw:mt-2 tw:w-full" }, Yd = ["disabled"], Xd = ["disabled"], Zd = { class: "tw:rounded-box tw:bg-base-200 tw:p-3 tw:shadow-md" }, Qd = { class: "tw:block tw:font-serif tw:text-xl tw:tabular-nums" }, $d = { class: "tw:dui-join tw:mt-2 tw:w-full" }, ef = ["disabled"], tf = ["disabled"], nf = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "weapons-heading"
}, rf = { class: "tw:flex tw:items-center tw:justify-between" }, af = { class: "tw:dui-badge tw:dui-badge-sm" }, of = {
	key: 0,
	class: "tw:dui-badge tw:dui-badge-secondary tw:dui-badge-sm",
	title: "Equipped",
	"aria-label": "Equipped"
}, sf = { class: "tw:m-0 tw:grid tw:grid-cols-2 tw:gap-2 tw:text-sm" }, cf = { key: 0 }, lf = { class: "tw:m-0 tw:font-bold" }, uf = { key: 1 }, df = { class: "tw:m-0 tw:font-bold" }, ff = { key: 2 }, pf = { class: "tw:m-0" }, mf = { key: 3 }, hf = { class: "tw:m-0" }, gf = {
	key: 0,
	class: "tw:m-0 tw:text-sm"
}, _f = { class: "tw:grid tw:gap-2 tw:min-[360px]:grid-cols-2" }, vf = ["disabled", "onClick"], yf = ["disabled", "onClick"], bf = {
	key: 0,
	class: "tw:m-0 tw:text-sm tw:opacity-65"
}, xf = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "armour-heading"
}, Sf = { class: "tw:grid tw:grid-cols-3 tw:gap-2" }, Cf = { class: "tw:block tw:opacity-65" }, wf = { class: "tw:font-serif tw:text-xl tw:text-secondary" }, Tf = {
	key: 0,
	class: "tw:dui-badge tw:dui-badge-secondary tw:dui-badge-sm"
}, Ef = {
	key: 0,
	class: "tw:m-0 tw:text-sm"
}, Df = {
	key: 1,
	class: "tw:m-0 tw:text-sm"
}, Of = /* @__PURE__ */ I({
	__name: "CombatSection",
	props: {
		actions: {},
		character: {}
	},
	setup(e) {
		let t = e, { actionMessage: n, actionTone: r, isBusy: i, runPlayerAction: a } = Fu(), o = q(() => t.character.resources.find((e) => e.key === "advantage"));
		function s(e, n) {
			a(() => t.actions.adjustResource(e, n), "Combat state updated.");
		}
		function c(e) {
			a(() => t.actions.rollWeapon(e.id), `${e.name} test sent to chat.`);
		}
		function l(e) {
			a(() => t.actions.reloadWeapon(e.id), `${e.name} reload updated.`);
		}
		return (t, a) => (z(), B("section", Wd, [
			U(Pu, {
				eyebrow: "At the ready",
				title: "Combat"
			}),
			U(vu, {
				message: M(n),
				tone: M(r)
			}, null, 8, ["message", "tone"]),
			H("section", Gd, [H("article", Kd, [
				a[4] ||= H("span", { class: "tw:text-xs tw:font-bold tw:opacity-65" }, "Wounds", -1),
				H("strong", qd, T(e.character.wounds.current) + " / " + T(e.character.wounds.maximum), 1),
				H("div", Jd, [H("button", {
					class: "tw:dui-btn tw:dui-btn-sm tw:dui-join-item tw:min-h-11 tw:flex-1",
					disabled: M(i),
					onClick: a[0] ||= (e) => s("wounds", -1)
				}, " − ", 8, Yd), H("button", {
					class: "tw:dui-btn tw:dui-btn-sm tw:dui-join-item tw:min-h-11 tw:flex-1",
					disabled: M(i),
					onClick: a[1] ||= (e) => s("wounds", 1)
				}, " + ", 8, Xd)])
			]), H("article", Zd, [
				a[5] ||= H("span", { class: "tw:text-xs tw:font-bold tw:opacity-65" }, "Advantage", -1),
				H("strong", Qd, T(o.value?.current ?? 0), 1),
				H("div", $d, [H("button", {
					class: "tw:dui-btn tw:dui-btn-sm tw:dui-join-item tw:min-h-11 tw:flex-1",
					disabled: M(i),
					onClick: a[2] ||= (e) => s("advantage", -1)
				}, " − ", 8, ef), H("button", {
					class: "tw:dui-btn tw:dui-btn-sm tw:dui-join-item tw:min-h-11 tw:flex-1",
					disabled: M(i),
					onClick: a[3] ||= (e) => s("advantage", 1)
				}, " + ", 8, tf)])
			])]),
			H("section", nf, [
				H("div", rf, [a[6] ||= H("h3", {
					id: "weapons-heading",
					class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
				}, "Weapons", -1), H("span", af, T(e.character.combat.weapons.length), 1)]),
				(z(!0), B(R, null, L(e.character.combat.weapons, (e) => (z(), V(ku, {
					key: e.id,
					"description-html": e.descriptionHtml,
					"image-url": e.imageUrl,
					subtitle: [
						e.damage && `Damage ${e.damage}`,
						e.range && `Range ${e.range}`,
						e.reach && `Reach ${e.reach}`
					].filter(Boolean).join(" · "),
					title: e.name
				}, {
					badge: P(() => [e.equipped ? (z(), B("span", of, [...a[7] ||= [H("i", {
						class: "fa-solid fa-check",
						"aria-hidden": "true"
					}, null, -1)]])) : G("", !0)]),
					default: P(() => [
						H("dl", sf, [
							e.ammunitionName ? (z(), B("div", cf, [a[8] ||= H("dt", { class: "tw:opacity-60" }, "Ammunition", -1), H("dd", lf, T(e.ammunitionName), 1)])) : G("", !0),
							e.range ? (z(), B("div", uf, [a[9] ||= H("dt", { class: "tw:opacity-60" }, "Loaded", -1), H("dd", df, T(e.loaded ? "Yes" : "No"), 1)])) : G("", !0),
							e.qualities.length ? (z(), B("div", ff, [a[10] ||= H("dt", { class: "tw:opacity-60" }, "Qualities", -1), H("dd", pf, T(e.qualities.join(", ")), 1)])) : G("", !0),
							e.flaws.length ? (z(), B("div", mf, [a[11] ||= H("dt", { class: "tw:opacity-60" }, "Flaws", -1), H("dd", hf, T(e.flaws.join(", ")), 1)])) : G("", !0)
						]),
						e.special ? (z(), B("p", gf, [a[12] ||= H("strong", null, "Special:", -1), W(" " + T(e.special), 1)])) : G("", !0),
						H("div", _f, [H("button", {
							type: "button",
							class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11",
							disabled: M(i),
							onClick: (t) => c(e)
						}, [...a[13] ||= [H("i", {
							class: "fa-solid fa-dice-d20",
							"aria-hidden": "true"
						}, null, -1), W(" Set up attack ", -1)]], 8, vf), e.range ? (z(), B("button", {
							key: 0,
							type: "button",
							class: "tw:dui-btn tw:min-h-11",
							disabled: M(i),
							onClick: (t) => l(e)
						}, [...a[14] ||= [H("i", {
							class: "fa-solid fa-rotate",
							"aria-hidden": "true"
						}, null, -1), W(" Reload ", -1)]], 8, yf)) : G("", !0)])
					]),
					_: 2
				}, 1032, [
					"description-html",
					"image-url",
					"subtitle",
					"title"
				]))), 128)),
				e.character.combat.weapons.length === 0 ? (z(), B("p", bf, " No weapons recorded. ")) : G("", !0)
			]),
			H("section", xf, [
				a[17] ||= H("h3", {
					id: "armour-heading",
					class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
				}, " Armour by location ", -1),
				H("div", Sf, [(z(!0), B(R, null, L(e.character.combat.armourByLocation, (e) => (z(), B("div", {
					key: e.key,
					class: "tw:rounded-field tw:bg-base-300 tw:p-2 tw:text-center"
				}, [H("small", Cf, T(e.label), 1), H("strong", wf, T(e.armourPoints), 1)]))), 128))]),
				(z(!0), B(R, null, L(e.character.combat.armour, (e) => (z(), V(ku, {
					key: e.id,
					"description-html": e.descriptionHtml,
					"image-url": e.imageUrl,
					subtitle: e.locations.map((e) => `${e.label} ${e.armourPoints}`).join(" · "),
					title: e.name
				}, {
					badge: P(() => [e.worn ? (z(), B("span", Tf, "Worn")) : G("", !0)]),
					default: P(() => [e.qualities.length ? (z(), B("p", Ef, [a[15] ||= H("strong", null, "Qualities:", -1), W(" " + T(e.qualities.join(", ")), 1)])) : G("", !0), e.flaws.length ? (z(), B("p", Df, [a[16] ||= H("strong", null, "Flaws:", -1), W(" " + T(e.flaws.join(", ")), 1)])) : G("", !0)]),
					_: 2
				}, 1032, [
					"description-html",
					"image-url",
					"subtitle",
					"title"
				]))), 128))
			])
		]));
	}
}), kf = {
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Effects and health"
}, Af = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "conditions-heading"
}, jf = { class: "tw:grid tw:gap-2 tw:min-[360px]:grid-cols-2" }, Mf = { class: "tw:min-w-0" }, Nf = { class: "tw:block tw:[overflow-wrap:anywhere]" }, Pf = { class: "tw:opacity-65" }, Ff = { class: "tw:dui-join" }, If = [
	"disabled",
	"aria-label",
	"onClick"
], Lf = [
	"disabled",
	"aria-label",
	"onClick"
], Rf = {
	key: 0,
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "extended-heading"
}, zf = { class: "tw:dui-badge tw:dui-badge-secondary tw:dui-badge-sm" }, Bf = ["value", "max"], Vf = ["disabled", "onClick"], Hf = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "ailments-heading"
}, Uf = {
	key: 0,
	class: "tw:m-0 tw:text-sm tw:opacity-65"
}, Wf = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "active-effects-heading"
}, Gf = {
	key: 0,
	class: "tw:dui-badge tw:dui-badge-ghost tw:dui-badge-sm"
}, Kf = {
	key: 0,
	class: "tw:m-0 tw:text-sm tw:opacity-65"
}, qf = /* @__PURE__ */ I({
	__name: "EffectsSection",
	props: {
		actions: {},
		effects: {}
	},
	setup(e) {
		let t = e, { actionMessage: n, actionTone: r, isBusy: i, runPlayerAction: a } = Fu();
		function o(e, n) {
			a(() => n > 0 ? t.actions.addCondition(e.id) : t.actions.removeCondition(e.id), `${e.name} updated.`);
		}
		function s(e) {
			a(() => t.actions.rollExtendedTest(e.id), `${e.name} result sent to chat.`);
		}
		function c(e) {
			let t = e.details.map((e) => `${e.label}: ${e.value}`).join(" · ");
			return t ? `${e.type} · ${t}` : e.type;
		}
		return (t, a) => (z(), B("section", kf, [
			U(Pu, {
				eyebrow: "What ails you",
				title: "Effects & Health"
			}),
			U(vu, {
				message: M(n),
				tone: M(r)
			}, null, 8, ["message", "tone"]),
			H("section", Af, [a[0] ||= H("div", { class: "tw:flex tw:items-center tw:justify-between" }, [H("h3", {
				id: "conditions-heading",
				class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
			}, " Conditions "), H("span", { class: "tw:dui-badge tw:dui-badge-sm" }, "Immediate controls")], -1), H("div", jf, [(z(!0), B(R, null, L(e.effects.conditions, (e) => (z(), B("article", {
				key: e.id,
				class: w(["tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:rounded-box tw:border tw:border-base-300 tw:bg-base-200 tw:p-3", { "tw:border-secondary/60": e.value > 0 }])
			}, [H("div", Mf, [H("strong", Nf, T(e.name), 1), H("small", Pf, "Current " + T(e.value), 1)]), H("div", Ff, [H("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-sm tw:dui-join-item tw:min-h-11",
				disabled: M(i) || e.value <= 0,
				"aria-label": `Remove one ${e.name}`,
				onClick: (t) => o(e, -1)
			}, " − ", 8, If), H("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-sm tw:dui-join-item tw:min-h-11",
				disabled: M(i),
				"aria-label": `Add one ${e.name}`,
				onClick: (t) => o(e, 1)
			}, " + ", 8, Lf)])], 2))), 128))])]),
			e.effects.extendedTests.length ? (z(), B("section", Rf, [a[2] ||= H("h3", {
				id: "extended-heading",
				class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
			}, " Extended tests ", -1), (z(!0), B(R, null, L(e.effects.extendedTests, (e) => (z(), V(ku, {
				key: e.id,
				"description-html": e.descriptionHtml,
				"image-url": e.imageUrl,
				subtitle: `${e.test} · ${e.difficulty || "Challenging"}`,
				title: e.name
			}, {
				badge: P(() => [H("span", zf, T(e.currentSL) + " / " + T(e.targetSL) + " SL", 1)]),
				default: P(() => [H("progress", {
					class: "tw:dui-progress tw:dui-progress-secondary",
					value: e.currentSL,
					max: Math.max(1, e.targetSL)
				}, null, 8, Bf), H("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11 tw:w-full",
					disabled: M(i),
					onClick: (t) => s(e)
				}, [...a[1] ||= [H("i", {
					class: "fa-solid fa-dice-d20",
					"aria-hidden": "true"
				}, null, -1), W(" Continue test ", -1)]], 8, Vf)]),
				_: 2
			}, 1032, [
				"description-html",
				"image-url",
				"subtitle",
				"title"
			]))), 128))])) : G("", !0),
			H("section", Hf, [
				a[3] ||= H("h3", {
					id: "ailments-heading",
					class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
				}, " Injuries & Ailments ", -1),
				(z(!0), B(R, null, L(e.effects.ailments, (e) => (z(), V(ku, {
					key: e.id,
					"description-html": e.descriptionHtml,
					"image-url": e.imageUrl,
					subtitle: c(e),
					title: e.name
				}, null, 8, [
					"description-html",
					"image-url",
					"subtitle",
					"title"
				]))), 128)),
				e.effects.ailments.length === 0 ? (z(), B("p", Uf, " No injuries, diseases, mutations, critical wounds, or psychology entries. ")) : G("", !0)
			]),
			H("section", Wf, [
				a[4] ||= H("h3", {
					id: "active-effects-heading",
					class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
				}, " Active effects ", -1),
				(z(!0), B(R, null, L(e.effects.active, (e) => (z(), V(ku, {
					key: e.id,
					"description-html": e.descriptionHtml,
					"image-url": e.imageUrl,
					subtitle: e.source,
					title: e.name
				}, {
					badge: P(() => [e.disabled ? (z(), B("span", Gf, "Disabled")) : G("", !0)]),
					_: 2
				}, 1032, [
					"description-html",
					"image-url",
					"subtitle",
					"title"
				]))), 128)),
				e.effects.active.length === 0 ? (z(), B("p", Kf, " No additional active effects. ")) : G("", !0)
			])
		]));
	}
}), Jf = {
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Inventory item"
}, Yf = {
	class: "tw:dui-breadcrumbs tw:text-sm",
	"aria-label": "Inventory location"
}, Xf = { class: "tw:dui-card tw:dui-card-border tw:overflow-hidden tw:bg-base-200 tw:shadow-lg" }, Zf = { class: "tw:relative tw:h-40 tw:bg-base-300" }, Qf = ["src", "alt"], $f = {
	key: 1,
	class: "tw:grid tw:h-full tw:place-items-center tw:text-4xl tw:text-secondary"
}, ep = {
	key: 2,
	class: "tw:dui-badge tw:dui-badge-secondary tw:absolute tw:top-3 tw:right-3"
}, tp = { class: "tw:dui-card-body tw:gap-4 tw:p-4" }, np = { class: "tw:m-0 tw:text-xs tw:font-black tw:text-secondary tw:uppercase" }, rp = { class: "tw:dui-card-title tw:font-serif tw:text-2xl" }, ip = { class: "tw:grid tw:grid-cols-2 tw:rounded-box tw:bg-base-300" }, ap = { class: "tw:p-3" }, op = { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold" }, sp = { class: "tw:p-3" }, cp = { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold" }, lp = { class: "tw:flex tw:gap-2" }, up = ["disabled"], dp = ["disabled"], fp = { class: "tw:flex tw:gap-2" }, pp = ["disabled"], mp = ["value"], hp = ["disabled"], gp = ["disabled"], _p = /* @__PURE__ */ I({
	__name: "InventoryItemDetail",
	props: {
		actions: {},
		containers: {},
		item: {}
	},
	emits: ["back"],
	setup(e, { emit: t }) {
		let n = e, r = t, { actionMessage: i, actionTone: a, isBusy: o, runPlayerAction: s } = Fu(), c = /* @__PURE__ */ j(n.item.quantity), l = /* @__PURE__ */ j(n.item.containerId), u = q(() => c.value !== n.item.quantity);
		Hn(() => [
			n.item.id,
			n.item.quantity,
			n.item.containerId
		], ([, e, t]) => {
			c.value = e, l.value = t;
		});
		function d() {
			!Number.isInteger(c.value) || c.value < 0 || s(() => n.actions.updateInventoryQuantity(n.item.id, c.value), "Quantity updated.");
		}
		function f() {
			s(() => n.actions.toggleInventoryEquipped(n.item.id), n.item.equipped ? "Item unequipped." : "Item equipped.");
		}
		function p() {
			s(() => n.actions.moveInventoryItem(n.item.id, l.value), l.value ? "Item moved into container." : "Item moved to carried gear.");
		}
		function m() {
			s(() => n.actions.deleteInventoryItem(n.item.id), "Item deleted.").then(() => {
				a.value === "success" && r("back");
			});
		}
		return (t, n) => (z(), B("article", Jf, [
			H("nav", Yf, [H("ul", null, [H("li", null, [H("button", {
				type: "button",
				class: "tw:font-bold tw:text-secondary",
				onClick: n[0] ||= (e) => r("back")
			}, " Inventory ")]), H("li", null, T(e.item.name), 1)])]),
			U(vu, {
				message: M(i),
				tone: M(a)
			}, null, 8, ["message", "tone"]),
			H("section", Xf, [H("figure", Zf, [e.item.imageUrl ? (z(), B("img", {
				key: 0,
				src: e.item.imageUrl,
				alt: `${e.item.name} illustration`,
				width: "400",
				height: "240",
				class: "tw:h-full tw:w-full tw:object-cover"
			}, null, 8, Qf)) : (z(), B("div", $f, [...n[3] ||= [H("i", {
				class: "fa-solid fa-sack-xmark",
				"aria-hidden": "true"
			}, null, -1)]])), e.item.equipped ? (z(), B("span", ep, "Equipped")) : G("", !0)]), H("div", tp, [
				H("div", null, [H("p", np, T(e.item.category), 1), H("h2", rp, T(e.item.name), 1)]),
				H("dl", ip, [H("div", ap, [n[4] ||= H("dt", { class: "tw:text-xs tw:opacity-65" }, "Encumbrance", -1), H("dd", op, T(e.item.encumbrance), 1)]), H("div", sp, [n[5] ||= H("dt", { class: "tw:text-xs tw:opacity-65" }, "Quantity", -1), H("dd", cp, T(e.item.quantity), 1)])]),
				U(ku, {
					"description-html": e.item.descriptionHtml,
					title: "Full description"
				}, {
					icon: P(() => [...n[6] ||= [H("i", {
						class: "fa-solid fa-scroll",
						"aria-hidden": "true"
					}, null, -1)]]),
					_: 1
				}, 8, ["description-html"]),
				H("form", {
					class: "tw:grid tw:gap-2",
					onSubmit: Oo(d, ["prevent"])
				}, [n[7] ||= H("label", {
					for: "inventory-item-quantity",
					class: "tw:text-sm tw:font-bold"
				}, "Quantity", -1), H("div", lp, [F(H("input", {
					id: "inventory-item-quantity",
					"onUpdate:modelValue": n[1] ||= (e) => c.value = e,
					type: "number",
					min: "0",
					step: "1",
					inputmode: "numeric",
					class: "tw:dui-input tw:min-h-11 tw:min-w-0 tw:flex-1",
					disabled: M(o)
				}, null, 8, up), [[
					yo,
					c.value,
					void 0,
					{ number: !0 }
				]]), H("button", {
					type: "submit",
					class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11",
					disabled: M(o) || !u.value
				}, " Apply ", 8, dp)])], 32),
				H("form", {
					class: "tw:grid tw:gap-2",
					onSubmit: Oo(p, ["prevent"])
				}, [n[9] ||= H("label", {
					for: "inventory-container",
					class: "tw:text-sm tw:font-bold"
				}, "Stored in", -1), H("div", fp, [F(H("select", {
					id: "inventory-container",
					"onUpdate:modelValue": n[2] ||= (e) => l.value = e,
					class: "tw:dui-select tw:min-h-11 tw:min-w-0 tw:flex-1",
					disabled: M(o)
				}, [n[8] ||= H("option", { value: "" }, "Carried gear", -1), (z(!0), B(R, null, L(e.containers.filter((t) => t.id !== e.item.id), (e) => (z(), B("option", {
					key: e.id,
					value: e.id
				}, T(e.name), 9, mp))), 128))], 8, pp), [[So, l.value]]), H("button", {
					type: "submit",
					class: "tw:dui-btn tw:min-h-11",
					disabled: M(o) || l.value === e.item.containerId
				}, " Move ", 8, hp)])], 32),
				e.item.canEquip ? (z(), B("button", {
					key: 0,
					type: "button",
					class: w(["tw:dui-btn tw:min-h-11 tw:w-full", e.item.equipped ? "tw:dui-btn-outline" : "tw:dui-btn-secondary"]),
					disabled: M(o),
					onClick: f
				}, [H("i", {
					class: w(e.item.equipped ? "fa-solid fa-box-archive" : "fa-solid fa-hand-fist"),
					"aria-hidden": "true"
				}, null, 2), W(" " + T(e.item.equipped ? "Unequip" : "Equip"), 1)], 10, gp)) : G("", !0),
				U(td, {
					body: `Delete ${e.item.name} from this character? This cannot be undone.`,
					"confirm-label": "Delete item",
					title: "Delete item?",
					"trigger-label": "Delete item",
					onConfirm: m
				}, null, 8, ["body"])
			])])
		]));
	}
}), vp = {
	key: 1,
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Inventory"
}, yp = { class: "tw:rounded-box tw:border tw:border-secondary/35 tw:bg-base-200 tw:p-3 tw:shadow-inner" }, bp = { class: "tw:flex tw:items-baseline tw:justify-between tw:gap-3" }, xp = { class: "tw:font-serif tw:text-lg tw:tabular-nums" }, Sp = ["value"], Cp = { class: "tw:dui-collapse tw:dui-collapse-arrow tw:rounded-box tw:border tw:border-base-300 tw:bg-base-200" }, wp = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, Tp = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, Ep = ["disabled"], Dp = { class: "tw:grid tw:gap-4" }, Op = { class: "tw:mb-2 tw:flex tw:items-center tw:justify-between tw:px-1" }, kp = { class: "tw:m-0 tw:font-serif tw:text-base tw:font-bold" }, Ap = { class: "tw:text-xs tw:font-bold tw:opacity-55" }, jp = { class: "tw:dui-list tw:m-0 tw:overflow-hidden tw:rounded-box tw:border tw:border-base-300 tw:bg-base-200 tw:p-0 tw:[list-style:none]" }, Mp = ["onClick"], Np = { class: "tw:grid tw:size-11 tw:place-items-center tw:overflow-hidden tw:rounded-field tw:bg-base-300 tw:text-secondary" }, Pp = ["src"], Fp = {
	key: 1,
	class: "fa-solid fa-sack-xmark",
	"aria-hidden": "true"
}, Ip = { class: "tw:min-w-0" }, Lp = { class: "tw:block tw:[overflow-wrap:anywhere]" }, Rp = { class: "tw:flex tw:flex-wrap tw:gap-x-2 tw:opacity-65" }, zp = {
	key: 0,
	class: "tw:font-bold tw:text-secondary"
}, Bp = { class: "tw:grid tw:justify-items-end tw:gap-1" }, Vp = { class: "tw:dui-badge tw:dui-badge-sm tw:tabular-nums" }, Hp = {
	key: 0,
	class: "tw:dui-alert",
	role: "status"
}, Up = /* @__PURE__ */ I({
	__name: "InventorySection",
	props: {
		actions: {},
		inventory: {}
	},
	setup(e) {
		let t = e, n = xl(), { actionMessage: r, actionTone: i, isBusy: a, runPlayerAction: o } = Fu(), s = /* @__PURE__ */ j(""), c = /* @__PURE__ */ j("trapping"), l = [
			{
				id: "arms-armour",
				label: "Arms & Armour"
			},
			{
				id: "packs-containers",
				label: "Packs & Containers"
			},
			{
				id: "provisions",
				label: "Provisions"
			},
			{
				id: "tools-lore",
				label: "Tools & Lore"
			},
			{
				id: "belongings",
				label: "Belongings"
			},
			{
				id: "coin",
				label: "Coin"
			}
		], u = q(() => l.map((e) => ({
			...e,
			items: t.inventory.items.filter((t) => t.group === e.id)
		})).filter((e) => e.items.length > 0)), d = q(() => t.inventory.items.find((e) => e.id === n.selectedInventoryItemId)), f = q(() => t.inventory.items.filter((e) => e.type === "container")), p = q(() => t.inventory.maximumEncumbrance > 0 ? Math.max(0, Math.min(100, t.inventory.currentEncumbrance / t.inventory.maximumEncumbrance * 100)) : 0);
		function m() {
			o(() => t.actions.createInventoryItem({
				name: s.value,
				type: c.value
			}), `${s.value.trim()} created.`).then(() => {
				i.value === "success" && (s.value = "");
			});
		}
		return (t, o) => d.value ? (z(), V(_p, {
			key: 0,
			actions: e.actions,
			containers: f.value,
			item: d.value,
			onBack: M(n).showInventoryList
		}, null, 8, [
			"actions",
			"containers",
			"item",
			"onBack"
		])) : (z(), B("section", vp, [
			U(Pu, {
				count: e.inventory.items.length,
				eyebrow: "Pack and purse",
				title: "Inventory"
			}, null, 8, ["count"]),
			U(vu, {
				message: M(r),
				tone: M(i)
			}, null, 8, ["message", "tone"]),
			H("section", yp, [H("div", bp, [o[2] ||= H("h3", { class: "tw:m-0 tw:text-sm tw:font-bold" }, "Encumbrance", -1), H("strong", xp, T(e.inventory.currentEncumbrance) + " / " + T(e.inventory.maximumEncumbrance), 1)]), H("progress", {
				class: w(["tw:dui-progress tw:mt-2", { "tw:dui-progress-warning": e.inventory.currentEncumbrance >= e.inventory.maximumEncumbrance }]),
				value: p.value,
				max: "100",
				"aria-label": "Current encumbrance"
			}, null, 10, Sp)]),
			H("details", Cp, [o[7] ||= H("summary", { class: "tw:dui-collapse-title tw:font-bold" }, "Create a simple item", -1), H("form", {
				class: "tw:dui-collapse-content tw:grid tw:gap-3",
				onSubmit: Oo(m, ["prevent"])
			}, [
				H("label", wp, [o[3] ||= W(" Name ", -1), F(H("input", {
					"onUpdate:modelValue": o[0] ||= (e) => s.value = e,
					class: "tw:dui-input tw:min-h-11 tw:w-full",
					required: ""
				}, null, 512), [[yo, s.value]])]),
				H("label", Tp, [o[5] ||= W(" Type ", -1), F(H("select", {
					"onUpdate:modelValue": o[1] ||= (e) => c.value = e,
					class: "tw:dui-select tw:min-h-11 tw:w-full"
				}, [...o[4] ||= [ta("<option value=\"trapping\">Trapping</option><option value=\"weapon\">Weapon</option><option value=\"armour\">Armour</option><option value=\"ammunition\">Ammunition</option><option value=\"container\">Container</option><option value=\"money\">Money</option>", 6)]], 512), [[So, c.value]])]),
				H("button", {
					type: "submit",
					class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11",
					disabled: M(a) || !s.value.trim()
				}, [...o[6] ||= [H("i", {
					class: "fa-solid fa-plus",
					"aria-hidden": "true"
				}, null, -1), W(" Create item ", -1)]], 8, Ep)
			], 32)]),
			H("div", Dp, [(z(!0), B(R, null, L(u.value, (e) => (z(), B("section", { key: e.id }, [H("div", Op, [H("h3", kp, T(e.label), 1), H("span", Ap, T(e.items.length), 1)]), H("ul", jp, [(z(!0), B(R, null, L(e.items, (e) => (z(), B("li", {
				key: e.id,
				class: "tw:dui-list-row tw:block tw:border-b tw:border-base-300 tw:p-0 last:tw:border-b-0"
			}, [H("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-ghost tw:grid tw:h-auto tw:min-h-16 tw:w-full tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:gap-3 tw:rounded-none tw:p-3 tw:text-left tw:text-base-content",
				onClick: (t) => M(n).selectInventoryItem(e.id)
			}, [
				H("span", Np, [e.imageUrl ? (z(), B("img", {
					key: 0,
					src: e.imageUrl,
					alt: "",
					width: "44",
					height: "44",
					class: "tw:h-full tw:w-full tw:object-cover"
				}, null, 8, Pp)) : (z(), B("i", Fp))]),
				H("span", Ip, [H("strong", Lp, T(e.name), 1), H("small", Rp, [
					H("span", null, T(e.category), 1),
					H("span", null, "Enc " + T(e.encumbrance), 1),
					e.equipped ? (z(), B("span", zp, "Equipped")) : G("", !0)
				])]),
				H("span", Bp, [H("span", Vp, "×" + T(e.quantity), 1), o[8] ||= H("i", {
					class: "fa-solid fa-chevron-right tw:text-xs tw:opacity-45",
					"aria-hidden": "true"
				}, null, -1)])
			], 8, Mp)]))), 128))])]))), 128))]),
			e.inventory.items.length === 0 ? (z(), B("div", Hp, " No carried items yet. ")) : G("", !0)
		]));
	}
}), Wp = {
	class: "player-journals tw:flex tw:h-full tw:min-h-0 tw:flex-col",
	"aria-label": "Journals"
}, Gp = { class: "tw:border-b tw:border-base-300 tw:p-3" }, Kp = { class: "tw:flex tw:items-center tw:justify-between" }, qp = { class: "tw:dui-badge tw:dui-badge-sm" }, Jp = {
	key: 0,
	role: "alert",
	class: "tw:dui-alert tw:dui-alert-error tw:m-3 tw:text-sm"
}, Yp = { class: "tw:min-h-0 tw:flex-1" }, Xp = /* @__PURE__ */ I({
	__name: "JournalsSection",
	props: {
		error: {},
		journals: {}
	},
	setup(e) {
		return (t, n) => (z(), B("section", Wp, [
			H("header", Gp, [
				n[1] ||= H("p", { class: "tw:m-0 tw:text-xs tw:font-extrabold tw:text-secondary tw:uppercase" }, " Player handouts ", -1),
				H("div", Kp, [n[0] ||= H("h2", { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold" }, "Journals", -1), H("span", qp, T(e.journals.length), 1)]),
				n[2] ||= H("p", { class: "tw:mt-1 tw:mb-0 tw:text-xs tw:opacity-65" }, " Only entries your user can observe are shown. ", -1)
			]),
			e.error ? (z(), B("div", Jp, [H("span", null, "Journals could not refresh: " + T(e.error), 1)])) : G("", !0),
			H("div", Yp, [U(Cs, { journals: e.journals }, null, 8, ["journals"])])
		]));
	}
}), Zp = {
	class: "tw:grid tw:gap-3 tw:p-3",
	"aria-label": "Magic"
}, Qp = { class: "tw:grid tw:gap-2" }, $p = { class: "tw:dui-badge tw:dui-badge-soft tw:dui-badge-sm" }, em = { class: "tw:m-0 tw:grid tw:grid-cols-2 tw:gap-2 tw:text-sm" }, tm = { key: 0 }, nm = { class: "tw:m-0 tw:font-bold" }, rm = { key: 1 }, im = { class: "tw:m-0 tw:font-bold" }, am = { key: 2 }, om = { class: "tw:m-0 tw:font-bold" }, sm = { key: 3 }, cm = { class: "tw:m-0 tw:font-bold" }, lm = { class: "tw:grid tw:grid-cols-2 tw:gap-2" }, um = ["disabled", "onClick"], dm = ["disabled", "onClick"], fm = {
	key: 0,
	class: "tw:dui-alert tw:items-start",
	role: "status"
}, pm = /* @__PURE__ */ I({
	__name: "MagicSection",
	props: {
		actions: {},
		spells: {}
	},
	setup(e) {
		let t = e, { actionMessage: n, actionTone: r, isBusy: i, runPlayerAction: a } = Fu();
		function o(e, n) {
			a(() => t.actions.rollSpell(e.id, n), `${e.name} ${n === "cast" ? "casting" : "channelling"} result sent to chat.`);
		}
		return (t, a) => (z(), B("section", Zp, [
			U(Pu, {
				count: e.spells.length,
				eyebrow: "The Winds of Magic",
				title: "Spells"
			}, null, 8, ["count"]),
			U(vu, {
				message: M(n),
				tone: M(r)
			}, null, 8, ["message", "tone"]),
			H("div", Qp, [(z(!0), B(R, null, L(e.spells, (e) => (z(), V(ku, {
				key: e.id,
				"description-html": e.descriptionHtml,
				"image-url": e.imageUrl,
				subtitle: [
					e.lore,
					`CN ${e.castingNumber}`,
					e.memorized && "Memorized"
				].filter(Boolean).join(" · "),
				title: e.name
			}, {
				badge: P(() => [H("span", $p, "SL " + T(e.channellingSL), 1)]),
				default: P(() => [H("dl", em, [
					e.range ? (z(), B("div", tm, [a[0] ||= H("dt", { class: "tw:opacity-60" }, "Range", -1), H("dd", nm, T(e.range), 1)])) : G("", !0),
					e.target ? (z(), B("div", rm, [a[1] ||= H("dt", { class: "tw:opacity-60" }, "Target", -1), H("dd", im, T(e.target), 1)])) : G("", !0),
					e.duration ? (z(), B("div", am, [a[2] ||= H("dt", { class: "tw:opacity-60" }, "Duration", -1), H("dd", om, T(e.duration), 1)])) : G("", !0),
					e.damage ? (z(), B("div", sm, [a[3] ||= H("dt", { class: "tw:opacity-60" }, "Damage", -1), H("dd", cm, T(e.damage), 1)])) : G("", !0)
				]), H("div", lm, [H("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11",
					disabled: M(i),
					onClick: (t) => o(e, "cast")
				}, [...a[4] ||= [H("i", {
					class: "fa-solid fa-wand-sparkles",
					"aria-hidden": "true"
				}, null, -1), W(" Cast ", -1)]], 8, um), H("button", {
					type: "button",
					class: "tw:dui-btn tw:min-h-11",
					disabled: M(i),
					onClick: (t) => o(e, "channel")
				}, [...a[5] ||= [H("i", {
					class: "fa-solid fa-bolt",
					"aria-hidden": "true"
				}, null, -1), W(" Channel ", -1)]], 8, dm)])]),
				_: 2
			}, 1032, [
				"description-html",
				"image-url",
				"subtitle",
				"title"
			]))), 128))]),
			e.spells.length === 0 ? (z(), B("div", fm, [...a[6] ||= [H("i", {
				class: "fa-solid fa-wand-sparkles tw:mt-1",
				"aria-hidden": "true"
			}, null, -1), H("span", null, "No spells are recorded on this character.", -1)]])) : G("", !0)
		]));
	}
}), mm = {
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Notes and character record"
}, hm = { class: "tw:dui-card tw:dui-card-border tw:bg-base-200" }, gm = { class: "tw:dui-card-body tw:gap-3 tw:p-4" }, _m = { class: "tw:m-0 tw:grid tw:grid-cols-2 tw:gap-2" }, vm = { class: "tw:text-xs tw:opacity-60" }, ym = { class: "tw:m-0 tw:font-bold tw:[overflow-wrap:anywhere]" }, bm = { class: "tw:dui-card tw:dui-card-border tw:bg-base-200" }, xm = { class: "tw:dui-card-body tw:gap-3 tw:p-4" }, Sm = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, Cm = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, wm = { class: "tw:dui-card tw:dui-card-border tw:bg-base-200" }, Tm = { class: "tw:dui-card-body tw:gap-3 tw:p-4" }, Em = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, Dm = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, Om = { class: "tw:dui-card tw:dui-card-border tw:bg-base-200" }, km = { class: "tw:dui-card-body tw:gap-3 tw:p-4" }, Am = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, jm = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, Mm = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, Nm = ["disabled"], Pm = /* @__PURE__ */ I({
	__name: "NotesSection",
	props: {
		actions: {},
		character: {}
	},
	setup(e) {
		let t = e, { actionMessage: n, actionTone: r, isBusy: i, runPlayerAction: a } = Fu(), o = /* @__PURE__ */ Vt({ ...t.character.notes });
		Hn(() => t.character.notes, (e) => Object.assign(o, e), { deep: !0 });
		function s() {
			a(() => t.actions.updateNotes({ ...o }), "Character notes saved.");
		}
		return (t, a) => (z(), B("section", mm, [
			U(Pu, {
				eyebrow: "Your story",
				title: "Notes & Record"
			}),
			U(vu, {
				message: M(n),
				tone: M(r)
			}, null, 8, ["message", "tone"]),
			H("section", hm, [H("div", gm, [a[7] ||= H("h3", { class: "tw:dui-card-title tw:font-serif" }, "Personal details", -1), H("dl", _m, [(z(!0), B(R, null, L(e.character.personalDetails, (e) => (z(), B("div", {
				key: e.key,
				class: "tw:rounded-field tw:bg-base-300 tw:p-2"
			}, [H("dt", vm, T(e.label), 1), H("dd", ym, T(e.value || "—"), 1)]))), 128))])])]),
			H("form", {
				class: "tw:grid tw:gap-4",
				onSubmit: Oo(s, ["prevent"])
			}, [
				H("section", bm, [H("div", xm, [
					a[10] ||= H("h3", { class: "tw:dui-card-title tw:font-serif" }, "Biography & Motivation", -1),
					H("label", Sm, [a[8] ||= W(" Motivation ", -1), F(H("input", {
						"onUpdate:modelValue": a[0] ||= (e) => o.motivation = e,
						class: "tw:dui-input tw:min-h-11 tw:w-full"
					}, null, 512), [[yo, o.motivation]])]),
					H("label", Cm, [a[9] ||= W(" Biography ", -1), F(H("textarea", {
						"onUpdate:modelValue": a[1] ||= (e) => o.biography = e,
						rows: "8",
						class: "tw:dui-textarea tw:w-full"
					}, null, 512), [[yo, o.biography]])])
				])]),
				H("section", wm, [H("div", Tm, [
					a[13] ||= H("h3", { class: "tw:dui-card-title tw:font-serif" }, "Personal ambitions", -1),
					H("label", Em, [a[11] ||= W("Short term", -1), F(H("textarea", {
						"onUpdate:modelValue": a[2] ||= (e) => o.personalShortTermAmbition = e,
						rows: "3",
						class: "tw:dui-textarea tw:w-full"
					}, null, 512), [[yo, o.personalShortTermAmbition]])]),
					H("label", Dm, [a[12] ||= W("Long term", -1), F(H("textarea", {
						"onUpdate:modelValue": a[3] ||= (e) => o.personalLongTermAmbition = e,
						rows: "3",
						class: "tw:dui-textarea tw:w-full"
					}, null, 512), [[yo, o.personalLongTermAmbition]])])
				])]),
				H("section", Om, [H("div", km, [
					a[17] ||= H("h3", { class: "tw:dui-card-title tw:font-serif" }, "Party ambitions", -1),
					H("label", Am, [a[14] ||= W("Party name", -1), F(H("input", {
						"onUpdate:modelValue": a[4] ||= (e) => o.partyName = e,
						class: "tw:dui-input tw:min-h-11 tw:w-full"
					}, null, 512), [[yo, o.partyName]])]),
					H("label", jm, [a[15] ||= W("Short term", -1), F(H("textarea", {
						"onUpdate:modelValue": a[5] ||= (e) => o.partyShortTermAmbition = e,
						rows: "3",
						class: "tw:dui-textarea tw:w-full"
					}, null, 512), [[yo, o.partyShortTermAmbition]])]),
					H("label", Mm, [a[16] ||= W("Long term", -1), F(H("textarea", {
						"onUpdate:modelValue": a[6] ||= (e) => o.partyLongTermAmbition = e,
						rows: "3",
						class: "tw:dui-textarea tw:w-full"
					}, null, 512), [[yo, o.partyLongTermAmbition]])])
				])]),
				H("button", {
					type: "submit",
					class: "tw:dui-btn tw:dui-btn-primary tw:min-h-12 tw:w-full",
					disabled: M(i)
				}, [a[18] ||= H("i", {
					class: "fa-solid fa-floppy-disk",
					"aria-hidden": "true"
				}, null, -1), W(" " + T(M(i) ? "Saving…" : "Save notes"), 1)], 8, Nm)
			], 32)
		]));
	}
}), Fm = {
	class: "tw:grid tw:gap-3 tw:p-3",
	"aria-label": "Religion"
}, Im = {
	key: 0,
	class: "tw:dui-alert tw:items-center",
	role: "status"
}, Lm = { class: "tw:grid tw:gap-2" }, Rm = { class: "tw:m-0 tw:grid tw:grid-cols-2 tw:gap-2 tw:text-sm" }, zm = { key: 0 }, Bm = { class: "tw:m-0 tw:font-bold" }, Vm = { key: 1 }, Hm = { class: "tw:m-0 tw:font-bold" }, Um = { key: 2 }, Wm = { class: "tw:m-0 tw:font-bold" }, Gm = { key: 3 }, Km = { class: "tw:m-0 tw:font-bold" }, qm = ["disabled", "onClick"], Jm = {
	key: 1,
	class: "tw:dui-alert tw:items-start",
	role: "status"
}, Ym = /* @__PURE__ */ I({
	__name: "ReligionSection",
	props: {
		actions: {},
		god: {},
		prayers: {}
	},
	setup(e) {
		let t = e, { actionMessage: n, actionTone: r, isBusy: i, runPlayerAction: a } = Fu();
		function o(e) {
			a(() => t.actions.rollPrayer(e.id), `${e.name} result sent to chat.`);
		}
		return (t, a) => (z(), B("section", Fm, [
			U(Pu, {
				count: e.prayers.length,
				eyebrow: "Faith and favour",
				title: "Religion"
			}, null, 8, ["count"]),
			e.god ? (z(), B("div", Im, [a[1] ||= H("i", {
				class: "fa-solid fa-place-of-worship",
				"aria-hidden": "true"
			}, null, -1), H("span", null, [a[0] ||= H("strong", null, "Deity:", -1), W(" " + T(e.god), 1)])])) : G("", !0),
			U(vu, {
				message: M(n),
				tone: M(r)
			}, null, 8, ["message", "tone"]),
			H("div", Lm, [(z(!0), B(R, null, L(e.prayers, (t) => (z(), V(ku, {
				key: t.id,
				"description-html": t.descriptionHtml,
				"image-url": t.imageUrl,
				subtitle: [t.god || e.god, t.type].filter(Boolean).join(" · "),
				title: t.name
			}, {
				default: P(() => [H("dl", Rm, [
					t.range ? (z(), B("div", zm, [a[2] ||= H("dt", { class: "tw:opacity-60" }, "Range", -1), H("dd", Bm, T(t.range), 1)])) : G("", !0),
					t.target ? (z(), B("div", Vm, [a[3] ||= H("dt", { class: "tw:opacity-60" }, "Target", -1), H("dd", Hm, T(t.target), 1)])) : G("", !0),
					t.duration ? (z(), B("div", Um, [a[4] ||= H("dt", { class: "tw:opacity-60" }, "Duration", -1), H("dd", Wm, T(t.duration), 1)])) : G("", !0),
					t.damage ? (z(), B("div", Gm, [a[5] ||= H("dt", { class: "tw:opacity-60" }, "Damage", -1), H("dd", Km, T(t.damage), 1)])) : G("", !0)
				]), H("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11 tw:w-full",
					disabled: M(i),
					onClick: (e) => o(t)
				}, [...a[6] ||= [H("i", {
					class: "fa-solid fa-hands-praying",
					"aria-hidden": "true"
				}, null, -1), W(" Set up prayer test ", -1)]], 8, qm)]),
				_: 2
			}, 1032, [
				"description-html",
				"image-url",
				"subtitle",
				"title"
			]))), 128))]),
			e.prayers.length === 0 ? (z(), B("div", Jm, [...a[7] ||= [H("i", {
				class: "fa-solid fa-hands-praying tw:mt-1",
				"aria-hidden": "true"
			}, null, -1), H("span", null, "No prayers or blessings are recorded on this character.", -1)]])) : G("", !0)
		]));
	}
}), Xm = {
	class: "tw:grid tw:gap-3 tw:p-3",
	"aria-label": "Skills"
}, Zm = { class: "tw:flex tw:min-h-11 tw:items-center tw:justify-between tw:gap-3" }, Qm = { class: "tw:grid tw:gap-2" }, $m = { class: "tw:dui-badge tw:dui-badge-secondary tw:font-bold tw:tabular-nums" }, eh = ["disabled", "onClick"], th = {
	key: 0,
	class: "tw:m-0 tw:p-4 tw:text-center tw:opacity-70"
}, nh = /* @__PURE__ */ I({
	__name: "SkillsSection",
	props: {
		actions: {},
		skills: {}
	},
	setup(e) {
		let t = e, n = xl(), { actionMessage: r, actionTone: i, isBusy: a, runPlayerAction: o } = Fu(), s = q(() => {
			let e = n.trainedSkillsOnly ? t.skills.filter((e) => e.advances > 0) : t.skills, r = n.normalizedSkillFilter;
			return r ? e.filter((e) => e.name.toLocaleLowerCase().includes(r)) : e;
		});
		function c(e) {
			o(() => t.actions.rollSkill(e.id), `${e.name} test sent to chat.`);
		}
		return (e, t) => (z(), B("section", Xm, [
			U(Pu, {
				count: s.value.length,
				eyebrow: "Tests at a glance",
				title: "Skills"
			}, null, 8, ["count"]),
			U(vu, {
				message: M(r),
				tone: M(i)
			}, null, 8, ["message", "tone"]),
			t[4] ||= H("label", {
				for: "player-skill-filter",
				class: "tw:text-xs tw:font-bold"
			}, "Filter skills", -1),
			F(H("input", {
				id: "player-skill-filter",
				"onUpdate:modelValue": t[0] ||= (e) => M(n).skillFilter = e,
				type: "search",
				class: "tw:dui-input tw:min-h-11 tw:w-full",
				placeholder: "Name or specialization"
			}, null, 512), [[yo, M(n).skillFilter]]),
			H("label", Zm, [t[2] ||= H("span", { class: "tw:text-sm tw:font-bold" }, "Trained skills only", -1), F(H("input", {
				"onUpdate:modelValue": t[1] ||= (e) => M(n).trainedSkillsOnly = e,
				type: "checkbox",
				class: "tw:dui-toggle tw:dui-toggle-secondary"
			}, null, 512), [[bo, M(n).trainedSkillsOnly]])]),
			H("div", Qm, [(z(!0), B(R, null, L(s.value, (e) => (z(), V(ku, {
				key: e.id,
				"description-html": e.descriptionHtml,
				subtitle: `${e.characteristic} · ${e.advances} advances`,
				title: e.name
			}, {
				badge: P(() => [H("span", $m, T(e.total), 1)]),
				default: P(() => [H("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11 tw:w-full",
					disabled: M(a),
					onClick: (t) => c(e)
				}, [t[3] ||= H("i", {
					class: "fa-solid fa-dice-d20",
					"aria-hidden": "true"
				}, null, -1), W(" Set up " + T(e.name) + " test ", 1)], 8, eh)]),
				_: 2
			}, 1032, [
				"description-html",
				"subtitle",
				"title"
			]))), 128))]),
			s.value.length === 0 ? (z(), B("p", th, " No skills match that filter. ")) : G("", !0)
		]));
	}
}), rh = {
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Status"
}, ih = { class: "tw:dui-card tw:dui-card-border tw:bg-base-200 tw:shadow-md" }, ah = { class: "tw:dui-card-body tw:gap-2 tw:p-3" }, oh = { class: "tw:grid tw:gap-2 tw:min-[360px]:grid-cols-2" }, sh = { class: "tw:min-w-0" }, ch = { class: "tw:block tw:text-xs tw:font-bold tw:opacity-65" }, lh = { class: "tw:font-serif tw:text-xl tw:text-secondary tw:tabular-nums" }, uh = { class: "tw:dui-join" }, dh = [
	"disabled",
	"aria-label",
	"onClick"
], fh = [
	"disabled",
	"aria-label",
	"onClick"
], ph = { class: "tw:dui-card tw:dui-card-border tw:bg-base-200 tw:shadow-md" }, mh = { class: "tw:dui-card-body tw:gap-3 tw:p-3" }, hh = { class: "tw:grid tw:grid-cols-2 tw:gap-2 tw:min-[360px]:grid-cols-5" }, gh = [
	"disabled",
	"aria-label",
	"onClick"
], _h = { class: "tw:text-xs tw:font-black tw:text-secondary" }, vh = { class: "tw:font-serif tw:text-xl tw:tabular-nums" }, yh = { class: "tw:text-[0.6rem] tw:opacity-65" }, bh = { class: "tw:dui-stats tw:grid tw:grid-cols-3 tw:bg-base-200 tw:shadow-md" }, xh = { class: "tw:dui-stat tw:min-w-0 tw:p-3" }, Sh = { class: "tw:dui-stat-value tw:text-xl" }, Ch = { class: "tw:dui-stat tw:min-w-0 tw:p-3" }, wh = { class: "tw:dui-stat-value tw:text-xl" }, Th = { class: "tw:dui-stat tw:min-w-0 tw:p-3" }, Eh = { class: "tw:dui-stat-value tw:text-xl" }, Dh = /* @__PURE__ */ I({
	__name: "StatusSection",
	props: {
		actions: {},
		character: {}
	},
	setup(e) {
		let t = e, { actionMessage: n, actionTone: r, isBusy: i, runPlayerAction: a } = Fu(), o = q(() => [t.character.wounds, ...t.character.resources]);
		function s(e) {
			return e.maximum === void 0 ? String(e.current) : `${e.current} / ${e.maximum}`;
		}
		function c(e, n) {
			a(() => t.actions.adjustResource(e.key, n), `${e.label} ${n > 0 ? "increased" : "decreased"}.`);
		}
		function l(e, n) {
			a(() => t.actions.rollCharacteristic(e), `${n} test sent to chat.`);
		}
		return (t, a) => (z(), B("section", rh, [
			U(Pu, {
				eyebrow: "At the table",
				title: "Status & Controls"
			}),
			a[5] ||= H("p", { class: "tw:m-0 tw:text-sm tw:opacity-70" }, " Changes write to the character immediately and refresh every open mobile sheet. ", -1),
			U(vu, {
				message: M(n),
				tone: M(r)
			}, null, 8, ["message", "tone"]),
			H("section", ih, [H("div", ah, [a[0] ||= H("h3", { class: "tw:dui-card-title tw:font-serif" }, "State controls", -1), H("div", oh, [(z(!0), B(R, null, L(o.value, (e) => (z(), B("article", {
				key: e.key,
				class: "tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:rounded-box tw:bg-base-300 tw:p-3"
			}, [H("div", sh, [H("span", ch, T(e.label), 1), H("strong", lh, T(s(e)), 1)]), H("div", uh, [H("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-sm tw:dui-join-item tw:min-h-11",
				disabled: M(i) || e.current <= 0,
				"aria-label": `Decrease ${e.label}`,
				onClick: (t) => c(e, -1)
			}, " − ", 8, dh), H("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-sm tw:dui-join-item tw:min-h-11",
				disabled: M(i) || e.maximum !== void 0 && e.current >= e.maximum,
				"aria-label": `Increase ${e.label}`,
				onClick: (t) => c(e, 1)
			}, " + ", 8, fh)])]))), 128))])])]),
			H("section", ph, [H("div", mh, [a[1] ||= H("div", { class: "tw:flex tw:items-center tw:justify-between tw:gap-2" }, [H("h3", { class: "tw:dui-card-title tw:font-serif" }, "Characteristics"), H("span", { class: "tw:dui-badge tw:dui-badge-sm" }, "Tap to test")], -1), H("div", hh, [(z(!0), B(R, null, L(e.character.characteristics, (e) => (z(), B("button", {
				key: e.key,
				type: "button",
				class: "tw:dui-btn tw:dui-btn-ghost tw:grid tw:h-auto tw:min-h-20 tw:min-w-0 tw:place-items-center tw:gap-0 tw:border tw:border-secondary/30 tw:bg-base-300 tw:px-1 tw:py-2 tw:text-base-content",
				disabled: M(i),
				"aria-label": `Set up ${e.label} test`,
				onClick: (t) => l(e.key, e.label)
			}, [
				H("span", _h, T(e.abbreviation), 1),
				H("strong", vh, T(e.value), 1),
				H("small", yh, "Bonus " + T(e.bonus), 1)
			], 8, gh))), 128))])])]),
			H("div", bh, [
				H("div", xh, [a[2] ||= H("div", { class: "tw:dui-stat-title" }, "Move", -1), H("div", Sh, T(e.character.movement.move), 1)]),
				H("div", Ch, [a[3] ||= H("div", { class: "tw:dui-stat-title" }, "Walk", -1), H("div", wh, T(e.character.movement.walk), 1)]),
				H("div", Th, [a[4] ||= H("div", { class: "tw:dui-stat-title" }, "Run", -1), H("div", Eh, T(e.character.movement.run), 1)])
			])
		]));
	}
}), Oh = /* @__PURE__ */ I({
	__name: "PlayerContent",
	props: {
		actions: {},
		activity: {},
		character: {},
		journalError: {},
		journals: {}
	},
	setup(e) {
		let t = xl();
		return (n, r) => (z(), B("div", { class: w(["tw:min-h-0 tw:flex-1 tw:overscroll-contain", ["chat", "journals"].includes(M(t).activeDestination) ? "tw:overflow-hidden" : "tw:overflow-y-auto"]) }, [M(t).activeDestination === "status" ? (z(), V(Dh, {
			key: 0,
			actions: e.actions,
			character: e.character
		}, null, 8, ["actions", "character"])) : M(t).activeDestination === "skills" ? (z(), V(nh, {
			key: 1,
			actions: e.actions,
			skills: e.character.skills
		}, null, 8, ["actions", "skills"])) : M(t).activeDestination === "abilities" ? (z(), V(Wu, {
			key: 2,
			actions: e.actions,
			talents: e.character.talents,
			traits: e.character.traits
		}, null, 8, [
			"actions",
			"talents",
			"traits"
		])) : M(t).activeDestination === "combat" ? (z(), V(Of, {
			key: 3,
			actions: e.actions,
			character: e.character
		}, null, 8, ["actions", "character"])) : M(t).activeDestination === "inventory" ? (z(), V(Up, {
			key: 4,
			actions: e.actions,
			inventory: e.character.inventory
		}, null, 8, ["actions", "inventory"])) : M(t).activeDestination === "magic" ? (z(), V(pm, {
			key: 5,
			actions: e.actions,
			spells: e.character.magic.spells
		}, null, 8, ["actions", "spells"])) : M(t).activeDestination === "religion" ? (z(), V(Ym, {
			key: 6,
			actions: e.actions,
			god: e.character.god,
			prayers: e.character.magic.prayers
		}, null, 8, [
			"actions",
			"god",
			"prayers"
		])) : M(t).activeDestination === "effects" ? (z(), V(qf, {
			key: 7,
			actions: e.actions,
			effects: e.character.effects
		}, null, 8, ["actions", "effects"])) : M(t).activeDestination === "notes" ? (z(), V(Pm, {
			key: 8,
			actions: e.actions,
			character: e.character
		}, null, 8, ["actions", "character"])) : M(t).activeDestination === "advancement" ? (z(), V(Fd, {
			key: 9,
			actions: e.actions,
			character: e.character
		}, null, 8, ["actions", "character"])) : M(t).activeDestination === "chat" ? (z(), V(Ud, {
			key: 10,
			activity: e.activity
		}, null, 8, ["activity"])) : (z(), V(Xp, {
			key: 11,
			error: e.journalError,
			journals: e.journals
		}, null, 8, ["error", "journals"]))], 2));
	}
}), kh = { class: "tw:grid tw:flex-1 tw:place-items-start tw:p-4" }, Ah = {
	key: 0,
	role: "alert",
	class: "tw:dui-alert tw:dui-alert-warning tw:dui-alert-vertical"
}, jh = {
	key: 1,
	role: "alert",
	class: "tw:dui-alert tw:dui-alert-error tw:dui-alert-vertical"
}, Mh = { class: "tw:grid tw:gap-1" }, Nh = { class: "tw:m-0 tw:font-serif tw:text-xl tw:font-bold" }, Ph = { class: "tw:m-0" }, Fh = /* @__PURE__ */ I({
	__name: "PlayerSheetStateAlert",
	props: { characterState: {} },
	setup(e) {
		return (t, n) => (z(), B("section", kh, [e.characterState.status === "missing" ? (z(), B("div", Ah, [...n[0] ||= [H("i", {
			class: "fa-solid fa-user-shield",
			"aria-hidden": "true"
		}, null, -1), H("div", { class: "tw:grid tw:gap-1" }, [H("h1", { class: "tw:m-0 tw:font-serif tw:text-xl tw:font-bold" }, "No character assigned"), H("p", { class: "tw:m-0" }, " Ask your GM to assign your character to this Foundry user, then refresh. ")], -1)]])) : e.characterState.status === "unsupported" ? (z(), B("div", jh, [n[2] ||= H("i", {
			class: "fa-solid fa-triangle-exclamation",
			"aria-hidden": "true"
		}, null, -1), H("div", Mh, [
			H("h1", Nh, T(e.characterState.actorName), 1),
			H("p", Ph, T(e.characterState.reason), 1),
			n[1] ||= H("p", { class: "tw:m-0" }, "Ask your GM to check the assigned character, then refresh.", -1)
		])])) : G("", !0)]));
	}
}), Ih = { class: "tw:dui-drawer tw:mx-auto tw:h-full tw:min-h-0 tw:w-full tw:max-w-[430px] tw:overflow-hidden tw:[&_*]:box-border tw:[&_*::after]:box-border tw:[&_*::before]:box-border" }, Lh = ["disabled"], Rh = { class: "tw:dui-drawer-content tw:min-h-0" }, zh = { class: "tw:flex tw:h-full tw:min-h-0 tw:w-full tw:flex-col tw:overflow-hidden tw:border-x tw:border-base-300 tw:bg-base-100 tw:text-base-content tw:shadow-2xl" }, Bh = {
	key: 0,
	id: "player-adventure-menu-panel",
	class: "tw:dui-drawer-side tw:z-50"
}, Vh = /* @__PURE__ */ I({
	__name: "PlayerShellApp",
	props: {
		actions: {},
		activity: {},
		characterState: {},
		journalError: {},
		journals: {}
	},
	setup(e) {
		let t = e, n = xl(), r = q(() => t.characterState.status === "ready" ? t.characterState.character : void 0);
		return (t, i) => (z(), B("div", Ih, [
			F(H("input", {
				id: "player-adventure-menu",
				"onUpdate:modelValue": i[0] ||= (e) => M(n).menuOpen = e,
				type: "checkbox",
				class: "tw:dui-drawer-toggle",
				disabled: !r.value,
				"aria-label": "Open adventure menu"
			}, null, 8, Lh), [[bo, M(n).menuOpen]]),
			H("div", Rh, [H("main", zh, [U(eu, { "character-state": e.characterState }, null, 8, ["character-state"]), e.characterState.status === "ready" ? r.value ? (z(), B(R, { key: 1 }, [U(Ul, { character: r.value }, null, 8, ["character"]), U(Oh, {
				actions: e.actions,
				activity: e.activity,
				character: r.value,
				"journal-error": e.journalError,
				journals: e.journals
			}, null, 8, [
				"actions",
				"activity",
				"character",
				"journal-error",
				"journals"
			])], 64)) : G("", !0) : (z(), V(Fh, {
				key: 0,
				"character-state": e.characterState
			}, null, 8, ["character-state"]))])]),
			r.value ? (z(), B("div", Bh, [i[1] ||= H("label", {
				for: "player-adventure-menu",
				class: "tw:dui-drawer-overlay",
				"aria-label": "Close adventure menu"
			}, null, -1), U(gu, { character: r.value }, null, 8, ["character"])])) : G("", !0)
		]));
	}
});
//#endregion
//#region src/module/functions/player-sheet/sorting.ts
function Hh(e, t) {
	return e.name.localeCompare(t.name);
}
//#endregion
//#region src/module/functions/player-sheet/inventory.ts
var Uh = [
	"arms-armour",
	"packs-containers",
	"provisions",
	"tools-lore",
	"belongings",
	"coin"
];
function Wh(e, t = "") {
	return e === "weapon" ? {
		category: "Weapon",
		group: "arms-armour"
	} : e === "armour" ? {
		category: "Armour",
		group: "arms-armour"
	} : e === "ammunition" ? {
		category: "Ammunition",
		group: "arms-armour"
	} : e === "container" ? {
		category: "Container",
		group: "packs-containers"
	} : e === "money" ? {
		category: "Coin",
		group: "coin"
	} : [
		"foodAndDrink",
		"drugsPoisonsHerbsDraughts",
		"ingredient"
	].includes(t) ? {
		category: "Provision",
		group: "provisions"
	} : [
		"booksAndDocuments",
		"toolsAndKits",
		"tradeTools"
	].includes(t) ? {
		category: "Tool or lore",
		group: "tools-lore"
	} : t === "clothingAccessories" ? {
		category: "Clothing",
		group: "belongings"
	} : {
		category: "Belonging",
		group: "belongings"
	};
}
function Gh(e, t) {
	return Uh.indexOf(e.group) - Uh.indexOf(t.group) || e.name.localeCompare(t.name);
}
//#endregion
//#region src/module/wfrp/value-readers.ts
function Y(e) {
	return typeof e == "object" && e ? e : void 0;
}
function X(e) {
	return typeof e == "string" ? e : "";
}
function Kh(e) {
	return typeof e == "number" && Number.isFinite(e) ? e : void 0;
}
function qh(e) {
	return e === !0;
}
function Jh(e) {
	let t = e.equipped;
	if (typeof t == "boolean") return t;
	let n = Y(t)?.value;
	if (typeof n == "boolean") return n;
	let r = e.worn;
	return qh(r) || qh(Y(r)?.value);
}
function Yh(e) {
	let t = Y(e);
	return t ? Object.entries(t).filter(([, e]) => qh(e)).map(([e]) => e) : [];
}
function Z(e) {
	if (typeof e == "number" && Number.isFinite(e)) return e;
	if (typeof e != "string" || !e.trim()) return;
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function Q(e, t, n) {
	return X(Y(e?.[t])?.[n]);
}
function Xh(e, t, n) {
	return Kh(Y(e?.[t])?.[n]);
}
function Zh(e, t, n) {
	return Z(Y(e?.[t])?.[n]);
}
function Qh(e, t, n) {
	return Y(e?.[t])?.[n] === !0;
}
function $h(e) {
	return Q(e, "description", "value");
}
//#endregion
//#region src/module/wfrp/player-inventory-adapter.ts
var eg = new Set([
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
]);
function tg(e, t) {
	let n = Y(e.encumbrance), r = t.map(ig).filter((e) => e !== void 0).sort(Gh);
	return {
		currentEncumbrance: Z(n?.current) ?? 0,
		items: r,
		maximumEncumbrance: Z(n?.max) ?? 0
	};
}
async function ng(e, t) {
	if (!Number.isInteger(t) || t < 0) throw Error("Quantity must be a whole number of zero or more.");
	await og(e).update({ "system.quantity.value": t });
}
async function rg(e) {
	let t = og(e), n = Y(t.system)?.toggleEquip;
	if (typeof n != "function") throw Error(`${t.name} cannot be equipped.`);
	await n.call(t.system);
}
function ig(e) {
	let t = Y(e), n = X(t?.type);
	if (!t || !ag(n)) return;
	let r = X(t.id) || X(t._id), i = X(t.name), a = Y(t.system);
	if (!r || !i || !a) return;
	let o = Math.max(0, Math.floor(Zh(a, "quantity", "value") ?? 1)), s = Zh(a, "encumbrance", "value") ?? 0, { category: c, group: l } = Wh(n, Q(a, "trappingType", "value"));
	return {
		canEquip: typeof a.toggleEquip == "function",
		category: c,
		containerId: Q(a, "location", "value"),
		descriptionHtml: $h(a),
		encumbrance: Zh(a, "encumbrance", "total") ?? s * o,
		equipped: Jh(a),
		group: l,
		id: r,
		imageUrl: X(t.img),
		name: i,
		quantity: o,
		type: n
	};
}
function ag(e) {
	return eg.has(e);
}
function og(e) {
	let t = game.user.character;
	if (!t || t.type !== "character") throw Error("No supported player character is assigned.");
	let n = sg(t.items).find((t) => X(Y(t)?.id) === e);
	if (!cg(n)) throw Error("That inventory item is no longer available.");
	return n;
}
function sg(e) {
	return Array.isArray(e.contents) ? e.contents : [];
}
function cg(e) {
	let t = Y(e);
	return t !== void 0 && eg.has(X(t.type)) && typeof t.update == "function";
}
//#endregion
//#region src/module/wfrp/player/data.ts
function lg(e) {
	return (Array.isArray(e.items.contents) ? e.items.contents : []).filter(hg);
}
function $() {
	let e = game.user.character;
	if (!e || e.type !== "character") throw Error("No supported player character is assigned.");
	return e;
}
function ug(e, t, n) {
	let r = lg(e).find((e) => e.id === t);
	if (!r || n && !n.includes(r.type)) throw Error("That character entry is no longer available.");
	return r;
}
function dg(e) {
	return Y(Y(e)?.system);
}
function fg(e) {
	let t = Y(e);
	return X(t?.id) || X(t?._id);
}
function pg(e) {
	if (Array.isArray(e)) return e;
	let t = Y(e);
	return Array.isArray(t?.contents) ? t.contents : [];
}
function mg(e) {
	return Array.isArray(e) ? e.map((e) => {
		if (typeof e == "string") return e;
		let t = Y(e), n = X(t?.display || t?.name || t?.label), r = Z(t?.value);
		return n && r ? `${n} ${r}` : n;
	}).filter(Boolean) : [];
}
function hg(e) {
	let t = Y(e);
	return !!(t && X(t.id) && X(t.type) && typeof t.update == "function");
}
//#endregion
//#region src/module/wfrp/player/abilities.ts
function gg(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.filter((e) => e.type === "talent")) {
		let e = dg(n), r = t.get(n.name), i = Xh(e, "advances", "value") ?? 1;
		r ? (r.ranks += i, r.nextAdvanceCost = Ku(r.ranks)) : t.set(n.name, {
			descriptionHtml: $h(e),
			id: n.id,
			name: n.name,
			nextAdvanceCost: Ku(i),
			ranks: i,
			tests: Q(e, "tests", "value")
		});
	}
	return [...t.values()].sort(Hh);
}
function _g(e) {
	return e.filter((e) => e.type === "trait").map((e) => {
		let t = dg(e);
		return {
			descriptionHtml: $h(t),
			id: e.id,
			name: e.name,
			rollable: Qh(t, "rollable", "value"),
			specification: Q(t, "specification", "value")
		};
	}).sort(Hh);
}
function vg(e, t) {
	let n = t.find((e) => {
		let t = dg(e);
		return e.type === "career" && (Qh(t, "current", "value") || qh(t?.current));
	}), r = n ? dg(n) : void 0, i = Y(e.career), a = n?.name || X(i?.name) || X(i?.value), o = bg([...mg(r?.skills), ...mg(r?.addedSkills)]);
	return {
		characteristicAdvances: yg(r?.characteristics),
		complete: Qh(r, "complete", "value") || qh(r?.complete),
		descriptionHtml: $h(r),
		group: Q(r, "careergroup", "value"),
		id: n?.id ?? "",
		level: Zh(r, "level", "value") ?? 0,
		name: a || "No current career",
		skillNames: o,
		talentNames: mg(r?.talents)
	};
}
function yg(e) {
	let t = mg(e);
	return t.length ? t : Yh(e);
}
function bg(e) {
	let t = /* @__PURE__ */ new Set();
	return e.filter((e) => {
		let n = e.trim().toLowerCase();
		return !n || t.has(n) ? !1 : (t.add(n), !0);
	});
}
//#endregion
//#region src/module/wfrp/player/advancement.ts
function xg(e, t, n = 0) {
	return Gu(Sg()[t], e, n);
}
function Sg() {
	return {
		characteristic: Cg("characteristic"),
		skill: Cg("skill")
	};
}
function Cg(e) {
	let t = game.wfrp4e?.config?.xpCost?.[e];
	if (!Array.isArray(t) || t.length === 0 || !t.every((e) => typeof e == "number")) throw Error(`The WFRP ${e} advancement costs are unavailable.`);
	return t;
}
async function wg(e) {
	let t = $(), n = Y(t.system), r = Y(Y(n?.characteristics)?.[e]);
	if (!r) throw Error("That characteristic is no longer available.");
	let i = Kh(r.advances) ?? 0, a = xg(i, "characteristic", Kh(r.costModifier) ?? 0), o = Dg(n, a), s = {
		[`system.characteristics.${e}.advances`]: i + 1,
		"system.details.experience.spent": o
	};
	Og(s, t, a, e.toUpperCase(), o), await t.update(s, { skipExperienceChecks: !0 });
}
async function Tg(e) {
	let t = $(), n = ug(t, e, ["skill"]), r = Y(t.system), i = dg(n), a = Xh(i, "advances", "value") ?? 0, o = xg(a, "skill", Xh(i, "advances", "costModifier") ?? 0), s = Dg(r, o), c = {
		items: [{
			_id: n.id,
			"system.advances.value": a + 1
		}],
		"system.details.experience.spent": s
	};
	Og(c, t, o, n.name, s), await t.update(c, { skipExperienceChecks: !0 });
}
async function Eg(e) {
	let t = $(), n = ug(t, e, ["talent"]), r = Y(t.system), i = Ku(lg(t).filter((e) => e.type === "talent" && e.name === n.name).reduce((e, t) => e + (Xh(dg(t), "advances", "value") ?? 1), 0)), a = Dg(r, i), o = { "system.details.experience.spent": a };
	if (Og(o, t, i, n.name, a), !t.createEmbeddedDocuments || !n.toObject) throw Error("Talent advancement is unavailable.");
	await t.update(o, { skipExperienceChecks: !0 });
	let s = n.toObject();
	delete s._id, delete s.id, await t.createEmbeddedDocuments("Item", [s]);
}
function Dg(e, t) {
	let n = Y(Y(e?.details)?.experience), r = Kh(n?.total), i = Kh(n?.spent);
	if (r === void 0 || i === void 0) throw Error("The character experience values are unavailable.");
	return qu(r, i, t).spent;
}
function Og(e, t, n, r, i) {
	let a = Y(t.system)?.addToExpLog;
	if (typeof a != "function") throw Error("The WFRP experience log is unavailable.");
	e["system.details.experience.log"] = a.call(t.system, n, r, i);
}
//#endregion
//#region src/module/wfrp/player/combat.ts
var kg = [
	{
		key: "head",
		label: "Head"
	},
	{
		key: "lArm",
		label: "Left arm"
	},
	{
		key: "rArm",
		label: "Right arm"
	},
	{
		key: "body",
		label: "Body"
	},
	{
		key: "lLeg",
		label: "Left leg"
	},
	{
		key: "rLeg",
		label: "Right leg"
	}
];
function Ag(e, t) {
	return {
		armour: t.map(Mg).filter((e) => e !== void 0),
		armourByLocation: Ng(e),
		weapons: t.map((e) => jg(e, t)).filter((e) => e !== void 0)
	};
}
function jg(e, t) {
	let n = Y(e), r = dg(e);
	if (n?.type !== "weapon" || !r) return;
	let i = Q(r, "currentAmmo", "value") || X(r.currentAmmo);
	return {
		ammunitionName: X(Y(t.find((e) => fg(e) === i))?.name),
		damage: Q(r, "damage", "value"),
		descriptionHtml: $h(r),
		equipped: Jh(r),
		flaws: mg(Y(r.flaws)?.value),
		id: fg(e),
		imageUrl: X(n.img),
		loaded: qh(Y(r.loaded)?.value),
		name: X(n.name),
		qualities: mg(Y(r.qualities)?.value),
		range: Q(r, "range", "value"),
		reach: Q(r, "reach", "value"),
		special: Q(r, "special", "value")
	};
}
function Mg(e) {
	let t = Y(e), n = dg(e);
	if (t?.type !== "armour" || !n) return;
	let r = Y(n.AP);
	return {
		descriptionHtml: $h(n),
		flaws: mg(Y(n.flaws)?.value),
		id: fg(e),
		imageUrl: X(t.img),
		locations: kg.map(({ key: e, label: t }) => ({
			armourPoints: Z(r?.[e]) ?? 0,
			key: e,
			label: t
		})).filter((e) => e.armourPoints > 0),
		name: X(t.name),
		qualities: mg(Y(n.qualities)?.value),
		worn: Jh(n)
	};
}
function Ng(e) {
	let t = Y(e.armour);
	return kg.map(({ key: e, label: n }) => ({
		armourPoints: Z(Y(t?.[e])?.value) ?? Z(t?.[e]) ?? 0,
		key: e,
		label: n
	}));
}
//#endregion
//#region src/module/wfrp/player/details.ts
var Pg = [
	["gender", "Gender"],
	["age", "Age"],
	["height", "Height"],
	["weight", "Weight"],
	["haircolour", "Hair colour"],
	["eyecolour", "Eye colour"],
	["distinguishingmark", "Distinguishing mark"],
	["starsign", "Star sign"],
	["size", "Size"]
];
function Fg(e) {
	let t = Y(e["personal-ambitions"]), n = Y(e["party-ambitions"]);
	return {
		biography: Q(e, "biography", "value"),
		motivation: Q(e, "motivation", "value"),
		partyLongTermAmbition: X(n?.["long-term"]),
		partyName: X(n?.name),
		partyShortTermAmbition: X(n?.["short-term"]),
		personalLongTermAmbition: X(t?.["long-term"]),
		personalShortTermAmbition: X(t?.["short-term"])
	};
}
function Ig(e) {
	return Pg.map(([t, n]) => ({
		key: t,
		label: n,
		value: Q(e, t, "value")
	}));
}
//#endregion
//#region src/module/wfrp/player/effects.ts
var Lg = [
	["ablaze", "Ablaze"],
	["bleeding", "Bleeding"],
	["blinded", "Blinded"],
	["broken", "Broken"],
	["deafened", "Deafened"],
	["entangled", "Entangled"],
	["fatigued", "Fatigued"],
	["poisoned", "Poisoned"],
	["prone", "Prone"],
	["stunned", "Stunned"],
	["surprised", "Surprised"],
	["unconscious", "Unconscious"]
], Rg = new Set([
	"critical",
	"disease",
	"injury",
	"mutation",
	"psychology"
]);
function zg(e, t) {
	let n = pg(e.appliedEffects ?? e.effects);
	return {
		active: n.map(Vg).filter((e) => e !== void 0).sort(Hh),
		ailments: t.map(Hg).filter((e) => e !== void 0).sort(Hh),
		conditions: Bg(n),
		extendedTests: t.map(Wg).filter((e) => e !== void 0).sort(Hh)
	};
}
function Bg(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Y(n);
		if (!e || e.isCondition !== !0) continue;
		let r = Y(Y(e.system)?.condition), i = X(e.conditionId) || X(e.key) || X(e.statusId);
		i && t.set(i, {
			id: i,
			imageUrl: X(e.img || e.icon),
			name: X(e.name) || Gg(i),
			value: Z(e.conditionValue) ?? Z(r?.value) ?? 1
		});
	}
	return Lg.map(([e, n]) => t.get(e) ?? {
		id: e,
		imageUrl: "",
		name: n,
		value: 0
	});
}
function Vg(e) {
	let t = Y(e);
	if (!t || t.isCondition === !0 || t.show === !1) return;
	let n = X(t.id), r = X(t.name);
	if (!n || !r) return;
	let i = Y(t.system);
	return {
		descriptionHtml: X(t.description) || $h(i) || X(i?.description),
		disabled: qh(t.disabled),
		id: n,
		imageUrl: X(t.img || t.icon),
		name: r,
		source: X(t.sourceName || t.origin)
	};
}
function Hg(e) {
	let t = Y(e), n = X(t?.type), r = dg(e);
	if (!(!t || !r || !Rg.has(n))) return {
		descriptionHtml: $h(r),
		details: Ug(n, r),
		id: fg(e),
		imageUrl: X(t.img),
		name: X(t.name),
		type: Gg(n)
	};
}
function Ug(e, t) {
	return ({
		critical: [
			["Wounds", "wounds"],
			["Location", "location"],
			["Modifier", "modifier"]
		],
		disease: [
			["Contraction", "contraction"],
			["Incubation", "incubation"],
			["Duration", "duration"],
			["Symptoms", "symptoms"]
		],
		injury: [
			["Location", "location"],
			["Penalty", "penalty"],
			["Duration", "duration"]
		],
		mutation: [["Type", "mutationType"], ["Modifier", "modifier"]]
	}[e] ?? []).map(([e, n]) => ({
		label: e,
		value: Q(t, n, "value")
	})).filter((e) => e.value);
}
function Wg(e) {
	let t = Y(e), n = dg(e);
	if (t?.type !== "extendedTest" || !n) return;
	let r = Y(n.SL);
	return {
		currentSL: Z(r?.current) ?? 0,
		descriptionHtml: $h(n),
		difficulty: Q(n, "difficulty", "value"),
		id: fg(e),
		imageUrl: X(t.img),
		name: X(t.name),
		targetSL: Z(r?.target) ?? 0,
		test: Q(n, "test", "value")
	};
}
function Gg(e) {
	return e.replaceAll(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (e) => e.toUpperCase());
}
//#endregion
//#region src/module/wfrp/player/magic.ts
function Kg(e) {
	return {
		prayers: e.map(Jg).filter((e) => e !== void 0).sort(Hh),
		spells: e.map(qg).filter((e) => e !== void 0).sort(Hh)
	};
}
function qg(e) {
	let t = Y(e), n = dg(e);
	if (!(t?.type !== "spell" || !n)) return {
		castingNumber: Xh(n, "cn", "value") ?? 0,
		channellingSL: Xh(n, "cn", "SL") ?? 0,
		damage: Q(n, "damage", "value"),
		descriptionHtml: $h(n),
		duration: Q(n, "duration", "value"),
		id: fg(e),
		imageUrl: X(t.img),
		lore: Q(n, "lore", "value"),
		memorized: Qh(n, "memorized", "value"),
		name: X(t.name),
		range: Q(n, "range", "value"),
		target: Q(n, "target", "value")
	};
}
function Jg(e) {
	let t = Y(e), n = dg(e);
	if (!(t?.type !== "prayer" || !n)) return {
		damage: Q(n, "damage", "value"),
		descriptionHtml: $h(n),
		duration: Q(n, "duration", "value"),
		god: Q(n, "god", "value"),
		id: fg(e),
		imageUrl: X(t.img),
		name: X(t.name),
		range: Q(n, "range", "value"),
		target: Q(n, "target", "value"),
		type: Q(n, "type", "value")
	};
}
//#endregion
//#region src/module/wfrp/player-character-adapter.ts
var Yg = [
	[
		"WS",
		"ws",
		"Weapon Skill"
	],
	[
		"BS",
		"bs",
		"Ballistic Skill"
	],
	[
		"S",
		"s",
		"Strength"
	],
	[
		"T",
		"t",
		"Toughness"
	],
	[
		"I",
		"i",
		"Initiative"
	],
	[
		"Ag",
		"ag",
		"Agility"
	],
	[
		"Dex",
		"dex",
		"Dexterity"
	],
	[
		"Int",
		"int",
		"Intelligence"
	],
	[
		"WP",
		"wp",
		"Willpower"
	],
	[
		"Fel",
		"fel",
		"Fellowship"
	]
];
function Xg() {
	let e = game.user.character;
	if (!e) return { status: "missing" };
	if (e.type !== "character") return {
		actorName: e.name,
		reason: "The assigned actor is not a WFRP4e player character.",
		status: "unsupported"
	};
	let t;
	try {
		t = Zg(e, Sg());
	} catch (t) {
		return {
			actorName: e.name,
			reason: t instanceof Error ? t.message : "The assigned character uses an unsupported WFRP4e runtime shape.",
			status: "unsupported"
		};
	}
	return t ? {
		character: t,
		status: "ready"
	} : {
		actorName: e.name,
		reason: "The assigned character data does not match the supported WFRP4e shape.",
		status: "unsupported"
	};
}
function Zg(e, t) {
	let n = Y(e.system), r = Y(n?.status), i = Y(n?.details), a = e_(r, "wounds", "Wounds");
	if (!n || !r || !i || !a) return;
	let o = Qg(n, t.characteristic);
	if (!o) return;
	let s = lg(e);
	return {
		career: vg(i, s),
		characteristics: o,
		combat: Ag(r, s),
		effects: zg(e, s),
		experience: t_(i),
		god: Q(i, "god", "value"),
		id: e.id,
		imageUrl: e.img,
		inventory: tg(r, s),
		magic: Kg(s),
		movement: {
			move: Zh(i, "move", "value") ?? 0,
			run: Zh(i, "move", "run") ?? 0,
			walk: Zh(i, "move", "walk") ?? 0
		},
		name: e.name,
		notes: Fg(i),
		personalDetails: Ig(i),
		resources: $g(r),
		skills: n_(s, o, t.skill),
		species: Q(i, "species", "value"),
		talents: gg(s),
		traits: _g(s),
		wounds: a
	};
}
function Qg(e, t) {
	let n = Y(e.characteristics);
	if (!n) return;
	let r = Yg.map(([e, r, i]) => {
		let a = Y(n[r]), o = Kh(a?.value);
		return o === void 0 ? void 0 : {
			abbreviation: e,
			advances: Kh(a?.advances) ?? 0,
			bonus: Kh(a?.bonus) ?? Math.floor(o / 10),
			key: r,
			label: i,
			nextAdvanceCost: Gu(t, Kh(a?.advances) ?? 0, Kh(a?.costModifier) ?? 0),
			value: o
		};
	}).filter((e) => e !== void 0);
	return r.length === Yg.length ? r : void 0;
}
function $g(e) {
	return [
		e_(e, "fortune", "Fortune"),
		e_(e, "fate", "Fate"),
		e_(e, "resolve", "Resolve"),
		e_(e, "resilience", "Resilience"),
		e_(e, "advantage", "Advantage"),
		e_(e, "criticalWounds", "Critical wounds"),
		e_(e, "corruption", "Corruption"),
		e_(e, "sin", "Sin")
	].filter((e) => e !== void 0);
}
function e_(e, t, n) {
	let r = Y(e?.[t]), i = Z(r?.value);
	if (i === void 0) return;
	let a = Z(r?.max);
	return a === void 0 ? {
		current: i,
		key: t,
		label: n
	} : {
		current: i,
		key: t,
		label: n,
		maximum: a
	};
}
function t_(e) {
	let t = Y(e.experience), n = Kh(t?.total) ?? 0, r = Kh(t?.spent) ?? 0;
	return {
		available: Math.max(0, n - r),
		spent: r,
		total: n
	};
}
function n_(e, t, n) {
	let r = new Map(t.map((e) => [e.key, e.value]));
	return e.filter((e) => e.type === "skill").map((e) => {
		let t = dg(e), i = Q(t, "characteristic", "value"), a = Xh(t, "advances", "value") ?? 0, o = Xh(t, "modifier", "value") ?? 0;
		return {
			advances: a,
			characteristic: i.toUpperCase(),
			descriptionHtml: $h(t),
			id: e.id,
			name: e.name,
			nextAdvanceCost: Gu(n, a, Xh(t, "advances", "costModifier") ?? 0),
			total: Xh(t, "total", "value") ?? (r.get(i) ?? 0) + a + o
		};
	}).sort(Hh);
}
//#endregion
//#region src/module/functions/player-sheet/resources.ts
function r_(e, t, n) {
	if (![e, t].every(Number.isFinite) || n !== void 0 && !Number.isFinite(n)) throw Error("The resource values are invalid.");
	return Math.max(0, Math.min(n ?? Infinity, e + t));
}
//#endregion
//#region src/module/wfrp/player/notes.ts
async function i_(e) {
	await $().update({
		"system.details.biography.value": e.biography,
		"system.details.motivation.value": e.motivation,
		"system.details.party-ambitions.long-term": e.partyLongTermAmbition,
		"system.details.party-ambitions.name": e.partyName,
		"system.details.party-ambitions.short-term": e.partyShortTermAmbition,
		"system.details.personal-ambitions.long-term": e.personalLongTermAmbition,
		"system.details.personal-ambitions.short-term": e.personalShortTermAmbition
	});
}
//#endregion
//#region src/module/wfrp/player/actions.ts
var a_ = new Set([
	"corruption",
	"criticalWounds",
	"fate",
	"fortune",
	"resilience",
	"resolve",
	"sin"
]), o_ = {
	addCondition: async (e) => {
		let t = $();
		h_(t.addCondition, "Condition controls are unavailable."), await t.addCondition(e, 1);
	},
	addCareerSkill: s_,
	adjustResource: l_,
	advanceCharacteristic: wg,
	advanceSkill: Tg,
	advanceTalent: Eg,
	createInventoryItem: u_,
	deleteInventoryItem: d_,
	moveInventoryItem: f_,
	openCareerSelector: m_,
	reloadWeapon: p_,
	removeCondition: async (e) => {
		let t = $();
		h_(t.removeCondition, "Condition controls are unavailable."), await t.removeCondition(e, 1);
	},
	rollCharacteristic: async (e) => {
		let t = $();
		h_(t.setupCharacteristic, "Characteristic tests are unavailable."), await c_(() => t.setupCharacteristic(e));
	},
	rollExtendedTest: async (e) => {
		let t = $(), n = ug(t, e, ["extendedTest"]);
		h_(t.setupExtendedTest, "Extended tests are unavailable."), await t.setupExtendedTest(n);
	},
	rollPrayer: async (e) => {
		let t = $(), n = ug(t, e, ["prayer"]);
		h_(t.setupPrayer, "Prayer tests are unavailable."), await c_(() => t.setupPrayer(n));
	},
	rollSkill: async (e) => {
		let t = $(), n = ug(t, e, ["skill"]);
		h_(t.setupSkill, "Skill tests are unavailable."), await c_(() => t.setupSkill(n));
	},
	rollSpell: async (e, t) => {
		let n = $(), r = ug(n, e, ["spell"]), i = t === "channel" ? n.setupChannell : n.setupCast;
		h_(i, `${t === "channel" ? "Channelling" : "Casting"} is unavailable.`), await c_(() => i.call(n, r));
	},
	rollTrait: async (e) => {
		let t = $(), n = ug(t, e, ["trait"]);
		h_(t.setupTrait, "Trait tests are unavailable."), await c_(() => t.setupTrait(n));
	},
	rollWeapon: async (e) => {
		let t = $(), n = ug(t, e, ["weapon"]);
		h_(t.setupWeapon, "Weapon tests are unavailable."), await c_(() => t.setupWeapon(n));
	},
	setCareerComplete: async (e, t) => {
		await ug($(), e, ["career"]).update({ "system.complete.value": t });
	},
	toggleInventoryEquipped: rg,
	updateInventoryQuantity: ng,
	updateNotes: i_
};
async function s_(e) {
	let t = $(), n = e.trim().toLowerCase();
	if (!n) throw Error("That career skill is unavailable.");
	if (lg(t).some((e) => e.type === "skill" && e.name.trim().toLowerCase() === n)) return;
	let r = game.wfrp4e?.utility?.findSkill;
	h_(r, "The WFRP skill library is unavailable.");
	let i = (await r(e)).toObject?.();
	if (!i) throw Error(`The ${e} skill could not be prepared.`);
	h_(t.createEmbeddedDocuments, "Adding skills is unavailable."), await t.createEmbeddedDocuments("Item", [i], { career: !0 });
}
async function c_(e) {
	let t = await e();
	if (!t || typeof t.roll != "function") throw Error("The WFRP test setup was cancelled or unavailable.");
	await t.roll();
}
async function l_(e, t) {
	let n = $();
	if (e === "wounds") {
		h_(n.modifyWounds, "Wound controls are unavailable."), await n.modifyWounds(t);
		return;
	}
	if (e === "advantage") {
		h_(n.modifyAdvantage, "Advantage controls are unavailable."), await n.modifyAdvantage(t);
		return;
	}
	if (!a_.has(e)) throw Error("That resource cannot be changed here.");
	let r = Y(Y(Y(n.system)?.status)?.[e]), i = Z(r?.value), a = Z(r?.max);
	if (i === void 0) throw Error("That resource is no longer available.");
	let o = r_(i, t, a);
	await n.update({ [`system.status.${e}.value`]: o });
}
async function u_(e) {
	let t = $(), n = e.name.trim();
	if (!n) throw Error("Enter a name for the new item.");
	h_(t.createEmbeddedDocuments, "Creating items is unavailable."), await t.createEmbeddedDocuments("Item", [{
		name: n,
		type: e.type
	}]);
}
async function d_(e) {
	let t = $();
	ug(t, e, [
		"ammunition",
		"armour",
		"container",
		"money",
		"trapping",
		"weapon"
	]), h_(t.deleteEmbeddedDocuments, "Deleting items is unavailable."), await t.deleteEmbeddedDocuments("Item", [e]);
}
async function f_(e, t) {
	let n = $(), r = ug(n, e);
	t && ug(n, t, ["container"]), await r.update({ "system.location.value": t });
}
async function p_(e) {
	let t = $(), n = ug(t, e, ["weapon"]);
	if (t.rollReloadTest) await t.rollReloadTest(n);
	else if (t.checkReloadExtendedTest) await t.checkReloadExtendedTest(n, t);
	else throw Error("Reload tests are unavailable.");
}
async function m_() {
	let e = $(), t = game.wfrp4e?.apps?.CareerSelector;
	if (!t) throw Error("The WFRP career selector is unavailable.");
	await Promise.resolve(new t(e).render(!0));
}
function h_(e, t) {
	if (typeof e != "function") throw Error(t);
}
//#endregion
//#region src/module/wfrp/player/activity.ts
function g_() {
	return pg(game.messages).map(__).filter((e) => e !== void 0).sort((e, t) => e.timestamp - t.timestamp).slice(-80);
}
function __(e) {
	let t = Y(e);
	if (!t || t.visible !== !0 || t.isContentVisible !== !0) return;
	let n = X(t.id), r = X(t.content);
	if (!n || !r) return;
	let i = Y(t.author ?? t.user), a = Y(t.speaker), o = X(i?.id);
	return {
		author: X(a?.alias) || X(i?.name) || "The Old World",
		contentHtml: r,
		flavor: X(t.flavor),
		id: n,
		isOwn: o ? o === game.user.id : qh(t.isAuthor),
		timestamp: Z(t.timestamp ?? t.time) ?? 0
	};
}
//#endregion
//#region src/module/apps/player-shell/view/PlayerShellApplication.ts
var v_ = class extends yl {
	#e = [];
	#t = "";
	#n = [];
	#r = !1;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${J}-player-shell`,
		classes: [J],
		tag: "section",
		window: {
			title: `${Rs} Character`,
			icon: "fa-solid fa-shield-halved",
			resizable: !1
		},
		position: {
			width: 430,
			height: 800
		}
	};
	getVueComponent() {
		return Vh;
	}
	getVueProps() {
		return {
			actions: o_,
			activity: g_(),
			characterState: Xg(),
			journalError: this.#t,
			journals: this.#n
		};
	}
	async _renderHTML(e, t) {
		let [n] = await Promise.all([super._renderHTML(e, t), this.loadJournals()]);
		return n;
	}
	_replaceHTML(e, t, n) {
		super._replaceHTML(e, t, n), this.registerRefreshHooks();
	}
	async _preClose(e) {
		for (let [e, t] of this.#e) Hooks.off(e, t);
		this.#e = [], await super._preClose(e);
	}
	registerRefreshHooks() {
		if (!(this.#e.length > 0)) {
			this.#e.push(["updateActor", Hooks.on("updateActor", (e) => {
				e.id === game.user.character?.id && this.render(!0);
			})]);
			for (let e of [
				"createItem",
				"deleteItem",
				"updateItem"
			]) this.#e.push([e, Hooks.on(e, (e) => {
				e.parent?.id === game.user.character?.id && this.render(!0);
			})]);
			for (let e of [
				"createActiveEffect",
				"deleteActiveEffect",
				"updateActiveEffect"
			]) this.#e.push([e, Hooks.on(e, (e) => {
				let t = e.parent, n = t?.id, r = t && "parent" in t ? t.parent?.id : void 0;
				(n === game.user.character?.id || r === game.user.character?.id) && this.render(!0);
			})]);
			for (let e of [
				"createChatMessage",
				"deleteChatMessage",
				"updateChatMessage"
			]) this.#e.push([e, Hooks.on(e, () => {
				this.render(!0);
			})]);
			for (let e of [
				"createJournalEntry",
				"deleteJournalEntry",
				"updateJournalEntry",
				"createJournalEntryPage",
				"deleteJournalEntryPage",
				"updateJournalEntryPage"
			]) this.#e.push([e, Hooks.on(e, () => {
				this.#r = !1, this.render(!0);
			})]);
		}
	}
	async loadJournals() {
		if (!this.#r) try {
			this.#n = await Ws(), this.#t = "";
		} catch (e) {
			this.#n = [], this.#t = e instanceof Error ? e.message : "The available journals could not be loaded.", console.error(`${Rs} could not load player journals.`, e);
		} finally {
			this.#r = !0;
		}
	}
}, y_ = { class: "starter-workbench" }, b_ = {
	class: "starter-workbench__panel",
	"aria-labelledby": "status-heading"
}, x_ = { class: "starter-workbench__facts" }, S_ = /* @__PURE__ */ I({
	__name: "StarterWorkbenchApp",
	props: {
		hostName: { default: "Unknown user" },
		systemId: { default: "preview" }
	},
	setup(e) {
		return (t, n) => (z(), B("main", y_, [
			n[3] ||= H("header", { class: "starter-workbench__header" }, [H("p", { class: "starter-workbench__eyebrow" }, "Drowsy's WFRP4e On The Go"), H("h1", null, "Diagnostic Workbench")], -1),
			H("section", b_, [n[2] ||= H("h2", { id: "status-heading" }, "Runtime Context", -1), H("dl", x_, [H("div", null, [n[0] ||= H("dt", null, "User", -1), H("dd", null, T(e.hostName), 1)]), H("div", null, [n[1] ||= H("dt", null, "System", -1), H("dd", null, T(e.systemId), 1)])])]),
			n[4] ||= H("section", {
				class: "starter-workbench__panel",
				"aria-labelledby": "next-heading"
			}, [H("h2", { id: "next-heading" }, "Current Slice"), H("p", null, " On The Go now routes enabled GMs to mobile prep and enabled players to a read-only assigned character sheet. Keep Foundry document work in the module layer, then pass plain data into Vue. ")], -1)
		]));
	}
}), C_ = class extends pl {
	static DEFAULT_OPTIONS = {
		id: `${J}-starter-workbench`,
		tag: "section",
		window: {
			title: `${Rs} Diagnostic Workbench`,
			icon: "fa-solid fa-flask",
			resizable: !0
		},
		position: {
			width: 720,
			height: "auto"
		}
	};
	getVueComponent() {
		return S_;
	}
	getVueProps() {
		return {
			hostName: game.user.name,
			systemId: game.system.id
		};
	}
};
//#endregion
//#region src/module/foundry/open-mobile-ui.ts
async function w_(e = {}) {
	await new (game.user.isGM ? bl : v_)(e).render(!0);
}
async function T_() {
	wc() !== "none" && await w_();
}
//#endregion
//#region src/module/foundry/api/create-package-api.ts
function E_() {
	return {
		getMobileUiMode: wc,
		isMobileUiActive() {
			return wc() !== "none";
		},
		async openDiagnosticWorkbench() {
			await new C_().render(!0);
		},
		async openMobileJournals(e) {
			await new bl(e).render(!0);
		},
		openMobileUi: w_,
		async openPlayerUi(e) {
			await new v_(e).render(!0);
		}
	};
}
//#endregion
//#region src/module/foundry/api/register-package-api.ts
function D_() {
	let e = game.modules.get(J);
	if (!e) throw Error(`Foundry module registry entry was not found for ${J}.`);
	e.api = E_();
}
//#endregion
//#region src/module/apps/activation-settings/view/ActivationSettingsApp.vue?vue&type=script&setup=true&lang.ts
var O_ = { class: "wfrp-on-the-go-settings" }, k_ = {
	key: 0,
	class: "wfrp-on-the-go-settings__users"
}, A_ = ["value"], j_ = {
	key: 1,
	class: "wfrp-on-the-go-settings__empty"
}, M_ = { class: "wfrp-on-the-go-settings__actions" }, N_ = { "aria-live": "polite" }, P_ = ["disabled"], F_ = /* @__PURE__ */ I({
	__name: "ActivationSettingsApp",
	props: {
		saveEnabledUserIds: { type: Function },
		users: {}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ j(s()), r = /* @__PURE__ */ j(!1), i = /* @__PURE__ */ j(!1), a = q(() => t.users.length > 0);
		Hn(() => t.users, () => {
			n.value = s(), i.value = !1;
		});
		async function o() {
			r.value = !0;
			try {
				await t.saveEnabledUserIds(n.value), i.value = !0;
			} finally {
				r.value = !1;
			}
		}
		function s() {
			return t.users.filter((e) => e.enabled).map((e) => e.id);
		}
		return (t, s) => (z(), B("main", O_, [s[1] ||= H("header", { class: "wfrp-on-the-go-settings__header" }, [H("p", { class: "wfrp-on-the-go-settings__eyebrow" }, "Drowsy's WFRP4e On The Go"), H("h1", null, "Enabled Users")], -1), H("form", {
			class: "wfrp-on-the-go-settings__form",
			onSubmit: Oo(o, ["prevent"])
		}, [a.value ? (z(), B("div", k_, [(z(!0), B(R, null, L(e.users, (e) => (z(), B("label", {
			key: e.id,
			class: w(["wfrp-on-the-go-settings__user", { "wfrp-on-the-go-settings__user--current": e.isCurrentUser }])
		}, [
			F(H("input", {
				"onUpdate:modelValue": s[0] ||= (e) => n.value = e,
				type: "checkbox",
				value: e.id
			}, null, 8, A_), [[bo, n.value]]),
			H("span", null, T(e.name), 1),
			H("strong", null, T(e.isGm ? "GM" : "Player") + T(e.isCurrentUser ? " · Current" : ""), 1)
		], 2))), 128))])) : (z(), B("p", j_, "No Foundry users are available.")), H("footer", M_, [H("p", N_, T(i.value ? "Saved" : ""), 1), H("button", {
			type: "submit",
			class: "tw:dui-btn tw:dui-btn-primary",
			disabled: r.value || !a.value
		}, T(r.value ? "Saving" : "Save"), 9, P_)])], 32)]));
	}
}), I_ = class extends pl {
	static DEFAULT_OPTIONS = {
		id: `${J}-activation-settings`,
		tag: "section",
		window: {
			title: `${Rs} Activation`,
			icon: "fa-solid fa-mobile-screen-button",
			resizable: !0
		},
		position: {
			width: 520,
			height: "auto"
		}
	};
	getVueComponent() {
		return F_;
	}
	getVueProps() {
		return {
			saveEnabledUserIds: xc,
			users: yc()
		};
	}
}, L_ = class extends foundry.applications.api.ApplicationV2 {
	async render(e) {
		return await w_({ windowed: !0 }), this;
	}
};
//#endregion
//#region src/module/foundry/settings/register-module-settings.ts
function R_() {
	_c(), game.settings.registerMenu(J, "enabledUsers", {
		name: "WFRP_ON_THE_GO.settings.activation.enabledUsers.name",
		label: "WFRP_ON_THE_GO.settings.activation.enabledUsers.label",
		hint: "WFRP_ON_THE_GO.settings.activation.enabledUsers.hint",
		icon: "fa-solid fa-mobile-screen-button",
		restricted: !0,
		type: I_
	}), game.settings.registerMenu(J, "openWindowedUi", {
		name: "WFRP_ON_THE_GO.settings.openWindowedUi.name",
		label: "WFRP_ON_THE_GO.settings.openWindowedUi.label",
		hint: "WFRP_ON_THE_GO.settings.openWindowedUi.hint",
		icon: "fa-solid fa-window-restore",
		restricted: !1,
		type: L_
	}), game.settings.registerMenu(J, "openDiagnosticWorkbench", {
		name: "WFRP_ON_THE_GO.settings.openDiagnosticWorkbench.name",
		label: "WFRP_ON_THE_GO.settings.openDiagnosticWorkbench.label",
		hint: "WFRP_ON_THE_GO.settings.openDiagnosticWorkbench.hint",
		icon: "fa-solid fa-window-restore",
		restricted: !0,
		type: C_
	}), game.settings.registerMenu(J, "openMobileUi", {
		name: "WFRP_ON_THE_GO.settings.openMobileUi.name",
		label: "WFRP_ON_THE_GO.settings.openMobileUi.label",
		hint: "WFRP_ON_THE_GO.settings.openMobileUi.hint",
		icon: "fa-solid fa-mobile-screen-button",
		restricted: !0,
		type: bl
	});
}
//#endregion
//#region src/module/init/register-hooks.ts
function z_() {
	Hooks.once("init", () => {
		R_();
	}), Hooks.once("ready", async () => {
		if (game.system.id !== "wfrp4e") {
			console.warn(`${J} | Loaded outside ${zs}; activation skipped.`);
			return;
		}
		await vc(), D_(), await T_();
	});
}
//#endregion
//#region src/module/init/index.ts
z_();
//#endregion

//# sourceMappingURL=wfrp4e-on-the-go.mjs.map