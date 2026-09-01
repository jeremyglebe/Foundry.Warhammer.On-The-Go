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
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), ee = (e) => x(e).slice(8, -1), S = (e) => x(e) === "[object Object]", te = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ne = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), re = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ie = /-\w/g, C = re((e) => e.replace(ie, (e) => e.slice(1).toUpperCase())), ae = /\B([A-Z])/g, oe = re((e) => e.replace(ae, "-$1").toLowerCase()), se = re((e) => e.charAt(0).toUpperCase() + e.slice(1)), ce = re((e) => e ? `on${se(e)}` : ""), le = (e, t) => !Object.is(e, t), ue = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, w = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, de = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, fe, pe = () => fe ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function me(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? ve(r) : me(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (g(e) || v(e)) return e;
}
var he = /;(?![^(]*\))/g, ge = /:([^]+)/, _e = /\/\*[^]*?\*\//g;
function ve(e) {
	let t = {};
	return e.replace(_e, "").split(he).forEach((e) => {
		if (e) {
			let n = e.split(ge);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function T(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = T(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var ye = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", be = /* @__PURE__ */ e(ye);
ye + "";
function xe(e) {
	return !!e || e === "";
}
function Se(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = Ce(e[r], t[r]);
	return n;
}
function Ce(e, t) {
	if (e === t) return !0;
	let n = m(e), r = m(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = _(e), r = _(t), n || r) return e === t;
	if (n = d(e), r = d(t), n || r) return n && r ? Se(e, t) : !1;
	if (n = v(e), r = v(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !Ce(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function we(e, t) {
	return e.findIndex((e) => Ce(e, t));
}
var Te = (e) => !!(e && e.__v_isRef === !0), E = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? Te(e) ? E(e.value) : JSON.stringify(e, Ee, 2) : String(e), Ee = (e, t) => Te(t) ? Ee(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[De(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => De(e)) } : _(t) ? De(t) : v(t) && !d(t) && !S(t) ? String(t) : t, De = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, D, Oe = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && D && (D.active ? (this.parent = D, this.index = (D.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = D;
			try {
				return D = this, e();
			} finally {
				D = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = D, D = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (D === this) D = this.prevScope;
			else {
				let e = D;
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
function ke(e) {
	return new Oe(e);
}
function Ae() {
	return D;
}
function je(e, t = !1) {
	D && D.cleanups.push(e);
}
var O, Me = /* @__PURE__ */ new WeakSet(), Ne = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, D && (D.active ? D.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Me.has(this) && (Me.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Le(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Xe(this), Be(this);
		let e = O, t = Ke;
		O = this, Ke = !0;
		try {
			return this.fn();
		} finally {
			Ve(this), O = e, Ke = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) We(e);
			this.deps = this.depsTail = void 0, Xe(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Me.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		He(this) && this.run();
	}
	get dirty() {
		return He(this);
	}
}, Pe = 0, Fe, Ie;
function Le(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Ie, Ie = e;
		return;
	}
	e.next = Fe, Fe = e;
}
function Re() {
	Pe++;
}
function ze() {
	if (--Pe > 0) return;
	if (Ie) {
		let e = Ie;
		for (Ie = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Fe;) {
		let t = Fe;
		for (Fe = void 0; t;) {
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
function Be(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ve(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), We(r), Ge(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function He(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ue(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ue(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ze) || (e.globalVersion = Ze, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !He(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = O, r = Ke;
	O = e, Ke = !0;
	try {
		Be(e);
		let n = e.fn(e._value);
		(t.version === 0 || le(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		O = n, Ke = r, Ve(e), e.flags &= -3;
	}
}
function We(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) We(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ge(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ke = !0, qe = [];
function Je() {
	qe.push(Ke), Ke = !1;
}
function Ye() {
	let e = qe.pop();
	Ke = e === void 0 ? !0 : e;
}
function Xe(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = O;
		O = void 0;
		try {
			t();
		} finally {
			O = e;
		}
	}
}
var Ze = 0, Qe = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, $e = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!O || !Ke || O === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== O) t = this.activeLink = new Qe(O, this), O.deps ? (t.prevDep = O.depsTail, O.depsTail.nextDep = t, O.depsTail = t) : O.deps = O.depsTail = t, et(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = O.depsTail, t.nextDep = void 0, O.depsTail.nextDep = t, O.depsTail = t, O.deps === t && (O.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Ze++, this.notify(e);
	}
	notify(e) {
		Re();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			ze();
		}
	}
};
function et(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) et(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var tt = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ Symbol(""), rt = /* @__PURE__ */ Symbol(""), it = /* @__PURE__ */ Symbol("");
function k(e, t, n) {
	if (Ke && O) {
		let t = tt.get(e);
		t || tt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new $e()), r.map = t, r.key = n), r.track();
	}
}
function at(e, t, n, r, i, a) {
	let o = tt.get(e);
	if (!o) {
		Ze++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Re(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && te(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === it || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(it)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(nt)), f(e) && s(o.get(rt)));
				break;
			case "delete":
				i || (s(o.get(nt)), f(e) && s(o.get(rt)));
				break;
			case "set":
				f(e) && s(o.get(nt));
				break;
		}
	}
	ze();
}
function ot(e, t) {
	let n = tt.get(e);
	return n && n.get(t);
}
function st(e) {
	let t = /* @__PURE__ */ A(e);
	return t === e ? t : (k(t, "iterate", it), /* @__PURE__ */ Kt(e) ? t : t.map(Yt));
}
function ct(e) {
	return k(e = /* @__PURE__ */ A(e), "iterate", it), e;
}
function lt(e, t) {
	return /* @__PURE__ */ Gt(e) ? Xt(/* @__PURE__ */ Wt(e) ? Yt(t) : t) : Yt(t);
}
var ut = {
	__proto__: null,
	[Symbol.iterator]() {
		return dt(this, Symbol.iterator, (e) => lt(this, e));
	},
	concat(...e) {
		return st(this).concat(...e.map((e) => d(e) ? st(e) : e));
	},
	entries() {
		return dt(this, "entries", (e) => (e[1] = lt(this, e[1]), e));
	},
	every(e, t) {
		return pt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return pt(this, "filter", e, t, (e) => e.map((e) => lt(this, e)), arguments);
	},
	find(e, t) {
		return pt(this, "find", e, t, (e) => lt(this, e), arguments);
	},
	findIndex(e, t) {
		return pt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return pt(this, "findLast", e, t, (e) => lt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return pt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return pt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return ht(this, "includes", e);
	},
	indexOf(...e) {
		return ht(this, "indexOf", e);
	},
	join(e) {
		return st(this).join(e);
	},
	lastIndexOf(...e) {
		return ht(this, "lastIndexOf", e);
	},
	map(e, t) {
		return pt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return gt(this, "pop");
	},
	push(...e) {
		return gt(this, "push", e);
	},
	reduce(e, ...t) {
		return mt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return mt(this, "reduceRight", e, t);
	},
	shift() {
		return gt(this, "shift");
	},
	some(e, t) {
		return pt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return gt(this, "splice", e);
	},
	toReversed() {
		return st(this).toReversed();
	},
	toSorted(e) {
		return st(this).toSorted(e);
	},
	toSpliced(...e) {
		return st(this).toSpliced(...e);
	},
	unshift(...e) {
		return gt(this, "unshift", e);
	},
	values() {
		return dt(this, "values", (e) => lt(this, e));
	}
};
function dt(e, t, n) {
	let r = ct(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Kt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ft = Array.prototype;
function pt(e, t, n, r, i, a) {
	let o = ct(e), s = o !== e && !/* @__PURE__ */ Kt(e), c = o[t];
	if (c !== ft[t]) {
		let t = c.apply(e, a);
		return s ? Yt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, lt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function mt(e, t, n, r) {
	let i = ct(e), a = i !== e && !/* @__PURE__ */ Kt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = lt(e, t)), n.call(this, t, lt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? lt(e, c) : c;
}
function ht(e, t, n) {
	let r = /* @__PURE__ */ A(e);
	k(r, "iterate", it);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ qt(n[0]) ? (n[0] = /* @__PURE__ */ A(n[0]), r[t](...n)) : i;
}
function gt(e, t, n = []) {
	Je(), Re();
	let r = (/* @__PURE__ */ A(e))[t].apply(e, n);
	return ze(), Ye(), r;
}
var _t = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), vt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function yt(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ A(this);
	return k(t, "has", e), t.hasOwnProperty(e);
}
var bt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Rt : Lt : i ? It : Ft).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = ut[t])) return e;
			if (t === "hasOwnProperty") return yt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ j(e) ? e : n);
		if ((_(t) ? vt.has(t) : _t(t)) || (r || k(e, "get", t), i)) return o;
		if (/* @__PURE__ */ j(o)) {
			let e = a && te(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Ht(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Ht(o) : /* @__PURE__ */ Bt(o) : o;
	}
}, xt = class extends bt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && te(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Gt(i);
			if (!/* @__PURE__ */ Kt(n) && !/* @__PURE__ */ Gt(n) && (i = /* @__PURE__ */ A(i), n = /* @__PURE__ */ A(n)), !a && /* @__PURE__ */ j(i) && !/* @__PURE__ */ j(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ j(e) ? e : r);
		return e === /* @__PURE__ */ A(r) && (o ? le(n, i) && at(e, "set", t, n, i) : at(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && at(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!_(t) || !vt.has(t)) && k(e, "has", t), n;
	}
	ownKeys(e) {
		return k(e, "iterate", d(e) ? "length" : nt), Reflect.ownKeys(e);
	}
}, St = class extends bt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Ct = /* @__PURE__ */ new xt(), wt = /* @__PURE__ */ new St(), Tt = /* @__PURE__ */ new xt(!0), Et = (e) => e, Dt = (e) => Reflect.getPrototypeOf(e);
function Ot(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ A(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? Et : t ? Xt : Yt;
		return !t && k(a, "iterate", l ? rt : nt), s(Object.create(u), { next() {
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
function kt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function At(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ A(r), a = /* @__PURE__ */ A(n);
			e || (le(n, a) && k(i, "get", n), k(i, "get", a));
			let { has: o } = Dt(i), s = t ? Et : e ? Xt : Yt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && k(/* @__PURE__ */ A(t), "iterate", nt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ A(n), i = /* @__PURE__ */ A(t);
			return e || (le(t, i) && k(r, "has", t), k(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ A(a), s = t ? Et : e ? Xt : Yt;
			return !e && k(o, "iterate", nt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: kt("add"),
		set: kt("set"),
		delete: kt("delete"),
		clear: kt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ A(this), r = Dt(n), i = /* @__PURE__ */ A(e), a = !t && !/* @__PURE__ */ Kt(e) && !/* @__PURE__ */ Gt(e) ? i : e;
			return r.has.call(n, a) || le(e, a) && r.has.call(n, e) || le(i, a) && r.has.call(n, i) || (n.add(a), at(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Kt(n) && !/* @__PURE__ */ Gt(n) && (n = /* @__PURE__ */ A(n));
			let r = /* @__PURE__ */ A(this), { has: i, get: a } = Dt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ A(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? le(n, s) && at(r, "set", e, n, s) : at(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ A(this), { has: n, get: r } = Dt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ A(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && at(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ A(this), t = e.size !== 0, n = e.clear();
			return t && at(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Ot(r, e, t);
	}), n;
}
function jt(e, t) {
	let n = At(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(u(n, r) && r in t ? n : t, r, i);
}
var Mt = { get: /* @__PURE__ */ jt(!1, !1) }, Nt = { get: /* @__PURE__ */ jt(!1, !0) }, Pt = { get: /* @__PURE__ */ jt(!0, !1) }, Ft = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap();
function zt(e) {
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
function Bt(e) {
	return /* @__PURE__ */ Gt(e) ? e : Ut(e, !1, Ct, Mt, Ft);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return Ut(e, !1, Tt, Nt, It);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return Ut(e, !0, wt, Pt, Lt);
}
function Ut(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = zt(ee(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return /* @__PURE__ */ Gt(e) ? /* @__PURE__ */ Wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function A(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ A(t) : e;
}
function Jt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && w(e, "__v_skip", !0), e;
}
var Yt = (e) => v(e) ? /* @__PURE__ */ Bt(e) : e, Xt = (e) => v(e) ? /* @__PURE__ */ Ht(e) : e;
// @__NO_SIDE_EFFECTS__
function j(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function M(e) {
	return Zt(e, !1);
}
function Zt(e, t) {
	return /* @__PURE__ */ j(e) ? e : new Qt(e, t);
}
var Qt = class {
	constructor(e, t) {
		this.dep = new $e(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ A(e), this._value = t ? e : Yt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Kt(e) || /* @__PURE__ */ Gt(e);
		e = n ? e : /* @__PURE__ */ A(e), le(e, t) && (this._rawValue = e, this._value = n ? e : Yt(e), this.dep.trigger());
	}
};
function N(e) {
	return /* @__PURE__ */ j(e) ? e.value : e;
}
var $t = {
	get: (e, t, n) => t === "__v_raw" ? e : N(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ j(i) && !/* @__PURE__ */ j(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function en(e) {
	return /* @__PURE__ */ Wt(e) ? e : new Proxy(e, $t);
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
	let t = d(e) ? Array(e.length) : {};
	for (let n in e) t[n] = rn(e, n);
	return t;
}
var nn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ A(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !te(this._key)) do
			r = !/* @__PURE__ */ qt(i) || /* @__PURE__ */ Kt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = N(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ j(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ j(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return ot(this._raw, this._key);
	}
};
function rn(e, t, n) {
	return new nn(e, t, n);
}
var an = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new $e(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ze - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && O !== this) return Le(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ue(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function on(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new an(r, i, n);
}
var sn = {}, cn = /* @__PURE__ */ new WeakMap(), ln = void 0;
function un(e, t = !1, n = ln) {
	if (n) {
		let t = cn.get(n);
		t || cn.set(n, t = []), t.push(e);
	}
}
function dn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Kt(e) || o === !1 || o === 0 ? fn(e, 1) : fn(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ j(e) ? (g = () => e.value, y = /* @__PURE__ */ Kt(e)) : /* @__PURE__ */ Wt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Wt(e) || /* @__PURE__ */ Kt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ j(e)) return e.value;
		if (/* @__PURE__ */ Wt(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			Je();
			try {
				_();
			} finally {
				Ye();
			}
		}
		let t = ln;
		ln = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			ln = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => fn(e(), t);
	}
	let x = Ae(), ee = () => {
		m.stop(), x && x.active && c(x.effects, m);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			let n = e(...t);
			return ee(), n;
		};
	}
	let S = b ? Array(e.length).fill(sn) : sn, te = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (n) {
			let t = m.run();
			if (e || o || y || (b ? t.some((e, t) => le(e, S[t])) : le(t, S))) {
				_ && _();
				let e = ln;
				ln = m;
				try {
					let e = [
						t,
						S === sn ? void 0 : b && S[0] === sn ? [] : S,
						v
					];
					S = t, f ? f(n, 3, e) : n(...e);
				} finally {
					ln = e;
				}
			}
		} else m.run();
	};
	return u && u(te), m = new Ne(g), m.scheduler = l ? () => l(te, !1) : te, v = (e) => un(e, !1, m), _ = m.onStop = () => {
		let e = cn.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			cn.delete(m);
		}
	}, n ? a ? te(!0) : S = m.run() : l ? l(te.bind(null, !0), !0) : m.run(), ee.pause = m.pause.bind(m), ee.resume = m.resume.bind(m), ee.stop = ee, ee;
}
function fn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ j(e)) fn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) fn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		fn(e, t, n);
	});
	else if (S(e)) {
		for (let r in e) fn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && fn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function pn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		hn(e, t, n);
	}
}
function mn(e, t, n, r) {
	if (h(e)) {
		let i = pn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			hn(e, t, n);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(mn(e[a], t, n, r));
		return i;
	}
}
function hn(e, n, r, i = !0) {
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
			Je(), pn(o, null, 10, [
				e,
				i,
				a
			]), Ye();
			return;
		}
	}
	gn(e, r, a, i, s);
}
function gn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var _n = [], vn = -1, yn = [], bn = null, xn = 0, Sn = /* @__PURE__ */ Promise.resolve(), Cn = null;
function wn(e) {
	let t = Cn || Sn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Tn(e) {
	let t = vn + 1, n = _n.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = _n[r], a = jn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function En(e) {
	if (!(e.flags & 1)) {
		let t = jn(e), n = _n[_n.length - 1];
		!n || !(e.flags & 2) && t >= jn(n) ? _n.push(e) : _n.splice(Tn(t), 0, e), e.flags |= 1, Dn();
	}
}
function Dn() {
	Cn ||= Sn.then(Mn);
}
function On(e) {
	d(e) ? yn.push(...e) : bn && e.id === -1 ? bn.splice(xn + 1, 0, e) : e.flags & 1 || (yn.push(e), e.flags |= 1), Dn();
}
function kn(e, t, n = vn + 1) {
	for (; n < _n.length; n++) {
		let t = _n[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			_n.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function An(e) {
	if (yn.length) {
		let e = [...new Set(yn)].sort((e, t) => jn(e) - jn(t));
		if (yn.length = 0, bn) {
			bn.push(...e);
			return;
		}
		for (bn = e, xn = 0; xn < bn.length; xn++) {
			let e = bn[xn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		bn = null, xn = 0;
	}
}
var jn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Mn(e) {
	try {
		for (vn = 0; vn < _n.length; vn++) {
			let e = _n[vn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), pn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; vn < _n.length; vn++) {
			let e = _n[vn];
			e && (e.flags &= -2);
		}
		vn = -1, _n.length = 0, An(e), Cn = null, (_n.length || yn.length) && Mn(e);
	}
}
var P = null, Nn = null;
function Pn(e) {
	let t = P;
	return P = e, Nn = e && e.type.__scopeId || null, t;
}
function F(e, t = P, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Gi(-1);
		let i = Pn(t), a;
		try {
			a = e(...n);
		} finally {
			Pn(i), r._d && Gi(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function I(e, n) {
	if (P === null) return e;
	let r = wa(P), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && fn(o), i.push({
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
function Fn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Je(), mn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ye());
	}
}
function In(e, t) {
	if (q) {
		let n = q.provides, r = q.parent && q.parent.provides;
		r === n && (n = q.provides = Object.create(r)), n[e] = t;
	}
}
function Ln(e, t, n = !1) {
	let r = la();
	if (r || Jr) {
		let i = Jr ? Jr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
function Rn() {
	return !!(la() || Jr);
}
var zn = /* @__PURE__ */ Symbol.for("v-scx"), Bn = () => Ln(zn);
function Vn(e, t, n) {
	return Hn(e, t, n);
}
function Hn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (ha) {
		if (c === "sync") {
			let e = Bn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = q;
	u.call = (e, t, n) => mn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		Ti(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : En(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = dn(e, n, u);
	return ha && (f ? f.push(h) : d && h()), h;
}
function Un(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Wn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = fa(this), s = Hn(i, a.bind(r), n);
	return o(), s;
}
function Wn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Gn = /* @__PURE__ */ Symbol("_vte"), Kn = (e) => e.__isTeleport, qn = /* @__PURE__ */ Symbol("_leaveCb");
function Jn(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, Jn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function Yn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Xn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Zn = /* @__PURE__ */ new WeakMap();
function Qn(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => Qn(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (er(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Qn(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? wa(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ A(v), b = v === t ? i : (e) => Xn(_, e) ? !1 : u(y, e), x = (e, t) => !(t && Xn(_, t));
	if (m != null && m !== p) {
		if ($n(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ j(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) pn(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ j(p);
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
					i(), Zn.delete(e);
				};
				t.id = -1, Zn.set(e, t), Ti(t, r);
			} else $n(e), i();
		}
	}
}
function $n(e) {
	let t = Zn.get(e);
	t && (t.flags |= 8, Zn.delete(e));
}
pe().requestIdleCallback, pe().cancelIdleCallback;
var er = (e) => !!e.type.__asyncLoader, tr = (e) => e.type.__isKeepAlive;
function nr(e, t) {
	ir(e, "a", t);
}
function rr(e, t) {
	ir(e, "da", t);
}
function ir(e, t, n = q) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (or(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) tr(e.parent.vnode) && ar(r, t, n, e), e = e.parent;
	}
}
function ar(e, t, n, r) {
	let i = or(t, e, r, !0);
	pr(() => {
		c(r[t], i);
	}, n);
}
function or(e, t, n = q, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Je();
			let i = fa(n), a = mn(t, n, e, r);
			return i(), Ye(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var sr = (e) => (t, n = q) => {
	(!ha || e === "sp") && or(e, (...e) => t(...e), n);
}, cr = sr("bm"), lr = sr("m"), ur = sr("bu"), dr = sr("u"), fr = sr("bum"), pr = sr("um"), mr = sr("sp"), hr = sr("rtg"), gr = sr("rtc");
function _r(e, t = q) {
	or("ec", e, t);
}
var vr = "components";
function yr(e, t) {
	return xr(vr, e, !0, t) || e;
}
var br = /* @__PURE__ */ Symbol.for("v-ndc");
function xr(e, t, n = !0, r = !1) {
	let i = P || q;
	if (i) {
		let n = i.type;
		if (e === vr) {
			let e = Ta(n, !1);
			if (e && (e === t || e === C(t) || e === se(C(t)))) return n;
		}
		let a = Sr(i[e] || n[e], t) || Sr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Sr(e, t) {
	return e && (e[t] || e[C(t)] || e[se(C(t))]);
}
function R(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Wt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Kt(e), s = /* @__PURE__ */ Gt(e), e = ct(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Xt(Yt(e[n])) : Yt(e[n]) : e[n], n, void 0, a && a[n]);
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
function Cr(e, t, n = {}, r, i) {
	if (P.ce || P.parent && er(P.parent) && P.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), B(), H(z, null, [W("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), B();
	let o = a && wr(a(n)), s = n.key || o && o.key, c = H(z, { key: (s && !_(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function wr(e) {
	return e.some((e) => qi(e) ? !(e.type === zi || e.type === z && !wr(e.children)) : !0) ? e : null;
}
var Tr = (e) => e ? ma(e) ? wa(e) : Tr(e.parent) : null, Er = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Tr(e.parent),
	$root: (e) => Tr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Fr(e),
	$forceUpdate: (e) => e.f ||= () => {
		En(e.update);
	},
	$nextTick: (e) => e.n ||= wn.bind(e.proxy),
	$watch: (e) => Un.bind(e)
}), Dr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Or = {
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
			else if (Dr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Ar && (s[n] = 0);
		}
		let d = Er[n], f, p;
		if (d) return n === "$attrs" && k(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Dr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Dr(n, c) || u(o, c) || u(i, c) || u(Er, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function kr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Ar = !0;
function jr(e) {
	let t = Fr(e), n = e.proxy, i = e.ctx;
	Ar = !1, t.beforeCreate && Nr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: ee, destroyed: S, unmounted: te, render: ne, renderTracked: re, renderTriggered: ie, errorCaptured: C, serverPrefetch: ae, expose: oe, inheritAttrs: se, components: ce, directives: le, filters: ue } = t;
	if (u && Mr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ Bt(t));
	}
	if (Ar = !0, o) for (let e in o) {
		let t = o[e], a = J({
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
	if (c) for (let e in c) Pr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			In(t, e[t]);
		});
	}
	f && Nr(f, e, "c");
	function w(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (w(cr, p), w(lr, m), w(ur, g), w(dr, _), w(nr, y), w(rr, b), w(_r, C), w(gr, re), w(hr, ie), w(fr, ee), w(pr, te), w(mr, ae), d(oe)) if (oe.length) {
		let t = e.exposed ||= {};
		oe.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ne && e.render === r && (e.render = ne), se != null && (e.inheritAttrs = se), ce && (e.components = ce), le && (e.directives = le), ae && Yn(e);
}
function Mr(e, t, n = r) {
	d(e) && (e = Br(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Ln(r.from || n, r.default, !0) : Ln(r.from || n) : Ln(r), /* @__PURE__ */ j(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Nr(e, t, n) {
	mn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Pr(e, t, n, r) {
	let i = r.includes(".") ? Wn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && Vn(i, n);
	} else if (h(e)) Vn(i, e.bind(n));
	else if (v(e)) if (d(e)) e.forEach((e) => Pr(e, t, n, r));
	else {
		let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
		h(r) && Vn(i, r, e);
	}
}
function Fr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Ir(c, e, o, !0)), Ir(c, t, o)), v(t) && a.set(t, c), c;
}
function Ir(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Ir(e, a, n, !0), i && i.forEach((t) => Ir(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Lr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Lr = {
	data: Rr,
	props: Ur,
	emits: Ur,
	methods: Hr,
	computed: Hr,
	beforeCreate: Vr,
	created: Vr,
	beforeMount: Vr,
	mounted: Vr,
	beforeUpdate: Vr,
	updated: Vr,
	beforeDestroy: Vr,
	beforeUnmount: Vr,
	destroyed: Vr,
	unmounted: Vr,
	activated: Vr,
	deactivated: Vr,
	errorCaptured: Vr,
	serverPrefetch: Vr,
	components: Hr,
	directives: Hr,
	watch: Wr,
	provide: Rr,
	inject: zr
};
function Rr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function zr(e, t) {
	return Hr(Br(e), Br(t));
}
function Br(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Vr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Hr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ur(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), kr(e), kr(t ?? {})) : t;
}
function Wr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Vr(e[r], t[r]);
	return n;
}
function Gr() {
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
var Kr = 0;
function qr(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Gr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Kr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Da,
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
					let u = l._ceVNode || W(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, wa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (mn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Jr;
				Jr = l;
				try {
					return e();
				} finally {
					Jr = t;
				}
			}
		};
		return l;
	};
}
var Jr = null, Yr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${C(t)}Modifiers`] || e[`${oe(t)}Modifiers`];
function Xr(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && Yr(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = r.map(de)));
	let c, l = i[c = ce(n)] || i[c = ce(C(n))];
	!l && o && (l = i[c = ce(oe(n))]), l && mn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, mn(u, e, 6, a);
	}
}
var Zr = /* @__PURE__ */ new WeakMap();
function Qr(e, t, n = !1) {
	let r = n ? Zr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = Qr(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function $r(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, oe(t)) || u(e, t));
}
function ei(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Pn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = ta(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = ta(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : ti(c);
		}
	} catch (t) {
		Vi.length = 0, hn(t, e, 1), v = W(zi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = ni(y, a)), b = $i(b, y, !1, !0));
	}
	return n.dirs && (b = $i(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Jn(b, n.transition), v = b, Pn(_), v;
}
var ti = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, ni = (e, t) => {
	let n = {};
	for (let r in e) (!o(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function ri(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? ii(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (ai(o, r, n) && !$r(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? ii(r, o, l) : !0 : !!o;
	return !1;
}
function ii(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (ai(t, e, a) && !$r(n, a)) return !0;
	}
	return !1;
}
function ai(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !Ce(r, i) : r !== i;
}
function oi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var si = {}, ci = () => Object.create(si), li = (e) => Object.getPrototypeOf(e) === si;
function ui(e, t, n, r = !1) {
	let i = {}, a = ci();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), fi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Vt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function di(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ A(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if ($r(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
				else {
					let t = C(o);
					i[t] = pi(c, s, t, d, e, !1);
				}
				else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		fi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !u(t, a) && ((r = oe(a)) === a || !u(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = pi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !u(t, e)) && (delete a[e], l = !0);
	}
	l && at(e.attrs, "set", "");
}
function fi(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ne(t)) continue;
		let l = n[t], d;
		a && u(a, d = C(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : $r(e.emitsOptions, t) || (!(t in i) || l !== i[t]) && (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ A(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = pi(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function pi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = fa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === oe(n)) && (r = !0));
	}
	return r;
}
var mi = /* @__PURE__ */ new WeakMap();
function hi(e, r, i = !1) {
	let a = i ? mi : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = hi(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = C(c[e]);
		gi(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = C(e);
		if (gi(t)) {
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
function gi(e) {
	return e[0] !== "$" && !ne(e);
}
var _i = (e) => e === "_" || e === "_ctx" || e === "$stable", vi = (e) => d(e) ? e.map(ta) : [ta(e)], yi = (e, t, n) => {
	if (t._n) return t;
	let r = F((...e) => vi(t(...e)), n);
	return r._c = !1, r;
}, bi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (_i(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = yi(n, i, r);
		else if (i != null) {
			let e = vi(i);
			t[n] = () => e;
		}
	}
}, xi = (e, t) => {
	let n = vi(t);
	e.slots.default = () => n;
}, Si = (e, t, n) => {
	for (let r in t) (n || !_i(r)) && (e[r] = t[r]);
}, Ci = (e, t, n) => {
	let r = e.slots = ci();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Si(r, t, n), n && w(r, "_", e, !0)) : bi(t, r);
	} else t && xi(e, t);
}, wi = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : Si(a, n, r) : (o = !n.$stable, bi(n, a)), s = n;
	} else n && (xi(e, n), s = { default: 1 });
	if (o) for (let e in a) !_i(e) && s[e] == null && delete a[e];
}, Ti = Li;
function Ei(e) {
	return Di(e);
}
function Di(e, i) {
	let a = pe();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Ji(e, t) && (r = Ce(e), T(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Ri:
				y(e, t, n, r);
				break;
			case zi:
				b(e, t, n, r);
				break;
			case Bi:
				e ?? x(t, n, r, o);
				break;
			case z:
				ce(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? te(e, t, n, r, i, a, o, s, c) : d & 6 ? le(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, E);
		}
		u != null && i ? Qn(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Qn(e.ref, null, a, e, !0);
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
	}, S = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, te = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) re(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ae(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, re = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && C(e.children, d, null, r, i, Oi(e, a), s, u), _ && Fn(e, null, r, "created"), ie(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ne(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && aa(f, r, e);
		}
		_ && Fn(e, null, r, "beforeMount");
		let v = Ai(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Ti(() => {
			try {
				f && aa(f, r, e), v && g.enter(d), _ && Fn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ie = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Ii(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ie(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, C = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? na(e[l]) : ta(e[l]), t, n, r, i, a, o, s);
	}, ae = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && ki(r, !1), (g = h.onVnodeBeforeUpdate) && aa(g, r, n, e), f && Fn(n, e, r, "beforeUpdate"), r && ki(r, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? oe(e.dynamicChildren, d, l, r, i, Oi(n, a), o) : s || he(e, n, l, null, r, i, Oi(n, a), o, !1), u > 0) {
			if (u & 16) se(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && se(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && Ti(() => {
			g && aa(g, r, n, e), f && Fn(n, e, r, "updated");
		}, i);
	}, oe = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === z || !Ji(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, se = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !ne(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (ne(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, ce = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), C(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (oe(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && ji(e, t, !0)) : he(e, t, n, f, i, a, s, c, l);
	}, le = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : w(t, n, r, i, a, o, c) : de(e, t, c);
	}, w = (e, t, n, r, i, a, o) => {
		let s = e.component = ca(e, r, i);
		if (tr(e) && (s.ctx.renderer = E), ga(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, fe, o), !e.el) {
				let r = s.subTree = W(zi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else fe(s, e, t, n, i, a, o);
	}, de = (e, t, n) => {
		let r = t.component = e.component;
		if (ri(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			me(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, fe = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ni(e);
					if (n) {
						t && (t.el = c.el, me(e, t, o)), n.asyncDep.then(() => {
							Ti(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				ki(e, !1), t ? (t.el = c.el, me(e, t, o)) : t = c, n && ue(n), (d = t.props && t.props.onVnodeBeforeUpdate) && aa(d, s, t, c), ki(e, !0);
				let f = ei(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), Ce(p), e, i, a), t.el = f.el, u === null && oi(e, f.el), r && Ti(r, i), (d = t.props && t.props.onVnodeUpdated) && Ti(() => aa(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = er(t);
				if (ki(e, !1), l && ue(l), !m && (o = c && c.onVnodeBeforeMount) && aa(o, d, t), ki(e, !0), s && De) {
					let t = () => {
						e.subTree = ei(e), De(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = ei(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Ti(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ti(() => aa(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && er(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ti(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ne(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => En(u), ki(e, !0), l();
	}, me = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, di(e, t.props, r, n), wi(e, t.children, n), Je(), kn(e), Ye();
	}, he = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				_e(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				ge(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && Se(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? _e(l, d, n, r, i, a, o, s, c) : Se(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && C(d, n, r, i, a, o, s, c));
	}, ge = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let n = t[p] = l ? na(t[p]) : ta(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? Se(e, a, o, !0, !1, f) : C(t, r, i, a, o, s, c, l, f);
	}, _e = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? na(t[u]) : ta(t[u]);
			if (Ji(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? na(t[p]) : ta(t[p]);
			if (Ji(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? na(t[u]) : ta(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) T(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? na(t[u]) : ta(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, ee = 0, S = Array(b);
			for (u = 0; u < b; u++) S[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					T(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (S[_ - h] === 0 && Ji(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? T(n, a, o, !0) : (S[i - h] = u + 1, i >= ee ? ee = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let te = x ? Mi(S) : n;
			for (_ = te.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Fi(f) : i;
				S[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== te[_] ? ve(n, r, p, 2) : _--);
			}
		}
	}, ve = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			ve(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, E);
			return;
		}
		if (c === z) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ve(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === Bi) {
			ee(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[qn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Ti(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[qn];
				a._isLeaving && a[qn](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, T = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Je(), Qn(s, null, n, e, !0), Ye()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !er(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && aa(_, t, e), u & 6) xe(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Fn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, E, r) : l && !l.hasOnce && (a !== z || d > 0 && d & 64) ? Se(l, t, n, !1, !0) : (a === z && d & 384 || !i && u & 16) && Se(c, t, n), r && ye(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ti(() => {
			_ && aa(_, t, e), h && Fn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ye = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === z) {
			be(n, r);
			return;
		}
		if (t === Bi) {
			S(e);
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, be = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, xe = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Pi(c), Pi(l), r && ue(r), i.stop(), a && (a.flags |= 8, T(o, e, t, n)), s && Ti(s, t), Ti(() => {
			e.isUnmounted = !0;
		}, t);
	}, Se = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) T(e[o], t, n, r, i);
	}, Ce = (e) => {
		if (e.shapeFlag & 6) return Ce(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Gn];
		return n ? h(n) : t;
	}, we = !1, Te = (e, t, n) => {
		let r;
		e == null ? t._vnode && (T(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, we ||= (we = !0, kn(r), An(), !1);
	}, E = {
		p: v,
		um: T,
		m: ve,
		r: ye,
		mt: w,
		mc: C,
		pc: he,
		pbc: oe,
		n: Ce,
		o: e
	}, Ee, De;
	return i && ([Ee, De] = i(E)), {
		render: Te,
		hydrate: Ee,
		createApp: qr(Te, Ee)
	};
}
function Oi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ki({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ai(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ji(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = na(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && ji(t, a)), a.type === Ri && (a.patchFlag === -1 && (a = i[e] = na(a)), a.el = t.el), a.type === zi && !a.el && (a.el = t.el);
	}
}
function Mi(e) {
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
function Ni(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ni(t);
}
function Pi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Fi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Fi(t.subTree) : null;
}
var Ii = (e) => e.__isSuspense;
function Li(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : On(e);
}
var z = /* @__PURE__ */ Symbol.for("v-fgt"), Ri = /* @__PURE__ */ Symbol.for("v-txt"), zi = /* @__PURE__ */ Symbol.for("v-cmt"), Bi = /* @__PURE__ */ Symbol.for("v-stc"), Vi = [], Hi = null;
function B(e = !1) {
	Vi.push(Hi = e ? null : []);
}
function Ui() {
	Vi.pop(), Hi = Vi[Vi.length - 1] || null;
}
var Wi = 1;
function Gi(e, t = !1) {
	Wi += e, e < 0 && Hi && t && (Hi.hasOnce = !0);
}
function Ki(e) {
	return e.dynamicChildren = Wi > 0 ? Hi || n : null, Ui(), Wi > 0 && Hi && Hi.push(e), e;
}
function V(e, t, n, r, i, a) {
	return Ki(U(e, t, n, r, i, a, !0));
}
function H(e, t, n, r, i) {
	return Ki(W(e, t, n, r, i, !0));
}
function qi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Ji(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Yi = ({ key: e }) => e ?? null, Xi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ j(e) || h(e) ? {
	i: P,
	r: e,
	k: t,
	f: !!n
} : e);
function U(e, t = null, n = null, r = 0, i = null, a = e === z ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Yi(t),
		ref: t && Xi(t),
		scopeId: Nn,
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
		ctx: P
	};
	return s ? (ra(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Wi > 0 && !o && Hi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Hi.push(c), c;
}
var W = Zi;
function Zi(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === br) && (e = zi), qi(e)) {
		let r = $i(e, t, !0);
		return n && ra(r, n), Wi > 0 && !a && Hi && (r.shapeFlag & 6 ? Hi[Hi.indexOf(e)] = r : Hi.push(r)), r.patchFlag = -2, r;
	}
	if (Ea(e) && (e = e.__vccOpts), t) {
		t = Qi(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = T(e)), v(n) && (/* @__PURE__ */ qt(n) && !d(n) && (n = s({}, n)), t.style = me(n));
	}
	let o = g(e) ? 1 : Ii(e) ? 128 : Kn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return U(e, t, n, r, i, o, a, !0);
}
function Qi(e) {
	return e ? /* @__PURE__ */ qt(e) || li(e) ? s({}, e) : e : null;
}
function $i(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ia(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Yi(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(Xi(t)) : [a, Xi(t)] : Xi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== z ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && $i(e.ssContent),
		ssFallback: e.ssFallback && $i(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && Jn(u, c.clone(u)), u;
}
function G(e = " ", t = 0) {
	return W(Ri, null, e, t);
}
function ea(e, t) {
	let n = W(Bi, null, e);
	return n.staticCount = t, n;
}
function K(e = "", t = !1) {
	return t ? (B(), H(zi, null, e)) : W(zi, null, e);
}
function ta(e) {
	return e == null || typeof e == "boolean" ? W(zi) : d(e) ? W(z, null, e.slice()) : qi(e) ? na(e) : W(Ri, null, String(e));
}
function na(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : $i(e);
}
function ra(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), ra(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !li(t) ? t._ctx = P : r === 3 && P && (P.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else h(t) ? (t = {
		default: t,
		_ctx: P
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [G(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function ia(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = T([t.class, r.class]));
		else if (e === "style") t.style = me([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function aa(e, t, n, r = null) {
	mn(e, t, 7, [n, r]);
}
var oa = Gr(), sa = 0;
function ca(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || oa, o = {
		uid: sa++,
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
		scope: new Oe(!0),
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
		propsOptions: hi(i, a),
		emitsOptions: Qr(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = Xr.bind(null, o), e.ce && e.ce(o), o;
}
var q = null, la = () => q || P, ua, da;
{
	let e = pe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ua = t("__VUE_INSTANCE_SETTERS__", (e) => q = e), da = t("__VUE_SSR_SETTERS__", (e) => ha = e);
}
var fa = (e) => {
	let t = q;
	return ua(e), e.scope.on(), () => {
		e.scope.off(), ua(t);
	};
}, pa = () => {
	q && q.scope.off(), ua(null);
};
function ma(e) {
	return e.vnode.shapeFlag & 4;
}
var ha = !1;
function ga(e, t = !1, n = !1) {
	t && da(t);
	let { props: r, children: i } = e.vnode, a = ma(e);
	ui(e, r, a, t), Ci(e, i, n || t);
	let o = a ? _a(e, t) : void 0;
	return t && da(!1), o;
}
function _a(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Or);
	let { setup: r } = n;
	if (r) {
		Je();
		let n = e.setupContext = r.length > 1 ? Ca(e) : null, i = fa(e), a = pn(r, e, 0, [e.props, n]), o = y(a);
		if (Ye(), i(), (o || e.sp) && !er(e) && Yn(e), o) {
			if (a.then(pa, pa), t) return a.then((n) => {
				va(e, n, t);
			}).catch((t) => {
				hn(t, e, 0);
			});
			e.asyncDep = a;
		} else va(e, a, t);
	} else xa(e, t);
}
function va(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = en(t)), xa(e, n);
}
var ya, ba;
function xa(e, t, n) {
	let i = e.type;
	if (!e.render) {
		if (!t && ya && !i.render) {
			let t = i.template || Fr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: r } = e.appContext.config, { delimiters: a, compilerOptions: o } = i;
				i.render = ya(t, s(s({
					isCustomElement: n,
					delimiters: a
				}, r), o));
			}
		}
		e.render = i.render || r, ba && ba(e);
	}
	{
		let t = fa(e);
		Je();
		try {
			jr(e);
		} finally {
			Ye(), t();
		}
	}
}
var Sa = { get(e, t) {
	return k(e, "get", ""), e[t];
} };
function Ca(e) {
	return {
		attrs: new Proxy(e.attrs, Sa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function wa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(en(Jt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Er) return Er[n](e);
		},
		has(e, t) {
			return t in e || t in Er;
		}
	}) : e.proxy;
}
function Ta(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ea(e) {
	return h(e) && "__vccOpts" in e;
}
var J = (e, t) => /* @__PURE__ */ on(e, t, ha), Da = "3.5.38", Oa = void 0, ka = typeof window < "u" && window.trustedTypes;
if (ka) try {
	Oa = /* @__PURE__ */ ka.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Aa = Oa ? (e) => Oa.createHTML(e) : (e) => e, ja = "http://www.w3.org/2000/svg", Ma = "http://www.w3.org/1998/Math/MathML", Na = typeof document < "u" ? document : null, Pa = Na && /* @__PURE__ */ Na.createElement("template"), Fa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Na.createElementNS(ja, e) : t === "mathml" ? Na.createElementNS(Ma, e) : n ? Na.createElement(e, { is: n }) : Na.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Na.createTextNode(e),
	createComment: (e) => Na.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Na.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Pa.innerHTML = Aa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Pa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Ia = /* @__PURE__ */ Symbol("_vtc");
function La(e, t, n) {
	let r = e[Ia];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ra = /* @__PURE__ */ Symbol("_vod"), za = /* @__PURE__ */ Symbol("_vsh"), Ba = /* @__PURE__ */ Symbol(""), Va = /(?:^|;)\s*display\s*:/;
function Ha(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) if (g(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Wa(r, t, "");
		}
		else for (let e in t) n[e] ?? Wa(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Wa(r, i, "") : Ja(e, i, !g(t) && t ? t[i] : void 0, o) || Wa(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Ba];
			e && (n += ";" + e), r.cssText = n, a = Va.test(n);
		}
	} else t && e.removeAttribute("style");
	Ra in e && (e[Ra] = a ? r.display : "", e[za] && (r.display = "none"));
}
var Ua = /\s*!important$/;
function Wa(e, t, n) {
	if (d(n)) n.forEach((n) => Wa(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = qa(e, t);
		Ua.test(n) ? e.setProperty(oe(r), n.replace(Ua, ""), "important") : e[r] = n;
	}
}
var Ga = [
	"Webkit",
	"Moz",
	"ms"
], Ka = {};
function qa(e, t) {
	let n = Ka[t];
	if (n) return n;
	let r = C(t);
	if (r !== "filter" && r in e) return Ka[t] = r;
	r = se(r);
	for (let n = 0; n < Ga.length; n++) {
		let i = Ga[n] + r;
		if (i in e) return Ka[t] = i;
	}
	return t;
}
function Ja(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var Ya = "http://www.w3.org/1999/xlink";
function Xa(e, t, n, r, i, a = be(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ya, t.slice(6, t.length)) : e.setAttributeNS(Ya, t, n) : n == null || a && !xe(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function Za(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Aa(n) : n);
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
		r === "boolean" ? n = xe(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Qa(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function $a(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var eo = /* @__PURE__ */ Symbol("_vei");
function to(e, t, n, r, i = null) {
	let a = e[eo] || (e[eo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = ro(t);
		r ? Qa(e, n, a[t] = so(r, i), s) : o && ($a(e, n, o, s), a[t] = void 0);
	}
}
var no = /(?:Once|Passive|Capture)$/;
function ro(e) {
	let t;
	if (no.test(e)) {
		t = {};
		let n;
		for (; n = e.match(no);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : oe(e.slice(2)), t];
}
var io = 0, ao = /* @__PURE__ */ Promise.resolve(), oo = () => io ||= (ao.then(() => io = 0), Date.now());
function so(e, t) {
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
				e && mn(e, t, 5, a);
			}
		} else mn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = oo(), n;
}
var co = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, lo = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? La(e, r, c) : t === "style" ? Ha(e, n, r) : a(t) ? o(t) || to(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : uo(e, t, r, c)) ? (Za(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Xa(e, t, r, c, s, t !== "value")) : e._isVueCE && (fo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? Za(e, C(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Xa(e, t, r, c));
};
function uo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && co(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return co(t) && g(n) ? !1 : t in e;
}
function fo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = C(t);
	return Array.isArray(n) ? n.some((e) => C(e) === r) : Object.keys(n).some((e) => C(e) === r);
}
var po = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => ue(t, e) : t;
};
function mo(e) {
	e.target.composing = !0;
}
function ho(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var go = /* @__PURE__ */ Symbol("_assign");
function _o(e, t, n) {
	return t && (e = e.trim()), n && (e = de(e)), e;
}
var vo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[go] = po(i);
		let a = r || i.props && i.props.type === "number";
		Qa(e, t ? "change" : "input", (t) => {
			t.target.composing || e[go](_o(e.value, n, a));
		}), (n || a) && Qa(e, "change", () => {
			e.value = _o(e.value, n, a);
		}), t || (Qa(e, "compositionstart", mo), Qa(e, "compositionend", ho), Qa(e, "change", ho));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[go] = po(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? de(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, yo = {
	deep: !0,
	created(e, t, n) {
		e[go] = po(n), Qa(e, "change", () => {
			let t = e._modelValue, n = Co(e), r = e.checked, i = e[go];
			if (d(t)) {
				let e = we(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (p(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(wo(e, r));
		});
	},
	mounted: bo,
	beforeUpdate(e, t, n) {
		e[go] = po(n), bo(e, t, n);
	}
};
function bo(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (d(t)) i = we(t, r.props.value) > -1;
	else if (p(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Ce(t, wo(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var xo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = p(t);
		Qa(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? de(Co(e)) : Co(e));
			e[go](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, wn(() => {
				e._assigning = !1;
			});
		}), e[go] = po(r);
	},
	mounted(e, { value: t }) {
		So(e, t);
	},
	beforeUpdate(e, t, n) {
		e[go] = po(n);
	},
	updated(e, { value: t }) {
		e._assigning || So(e, t);
	}
};
function So(e, t) {
	let n = e.multiple, r = d(t);
	if (!(n && !r && !p(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = Co(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = we(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Ce(Co(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Co(e) {
	return "_value" in e ? e._value : e.value;
}
function wo(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var To = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Eo = {
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
	exact: (e, t) => To.some((n) => e[`${n}Key`] && !t.includes(n))
}, Do = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Eo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Oo = /* @__PURE__ */ s({ patchProp: lo }, Fa), ko;
function Ao() {
	return ko ||= Ei(Oo);
}
var jo = ((...e) => {
	let t = Ao().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = No(e);
		if (!r) return;
		let i = t._component;
		!h(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Mo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Mo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function No(e) {
	return g(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/view/apps/mobile-journals/MobileJournalFolderTree.vue?vue&type=script&setup=true&lang.ts
var Po = { class: "mobile-journal-shell__folders" }, Fo = ["aria-expanded", "onClick"], Io = {
	key: 0,
	class: "mobile-journal-shell__folder-entries"
}, Lo = ["onClick"], Ro = /* @__PURE__ */ L({
	name: "MobileJournalFolderTree",
	__name: "MobileJournalFolderTree",
	props: {
		depth: {},
		folders: {},
		hasSearchQuery: { type: Boolean }
	},
	emits: ["openEntry"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ M(new Set(n.folders.map((e) => e.id)));
		function a(e) {
			let t = new Set(i.value);
			t.has(e) ? t.delete(e) : t.add(e), i.value = t;
		}
		function o(e) {
			return n.hasSearchQuery || i.value.has(e);
		}
		return (t, n) => {
			let i = yr("MobileJournalFolderTree", !0);
			return B(), V("div", Po, [(B(!0), V(z, null, R(e.folders, (t) => (B(), V("section", {
				key: t.id,
				class: "mobile-journal-shell__folder",
				style: me({ "--folder-depth": e.depth })
			}, [U("button", {
				type: "button",
				class: "mobile-journal-shell__folder-button",
				"aria-expanded": o(t.id),
				onClick: (e) => a(t.id)
			}, [
				U("i", {
					class: T(["fa-solid", o(t.id) ? "fa-folder-open" : "fa-folder"]),
					"aria-hidden": "true"
				}, null, 2),
				U("span", null, E(t.name), 1),
				U("small", null, E(t.journalCount), 1),
				n[1] ||= U("i", {
					class: "fa-solid fa-chevron-right mobile-journal-shell__folder-chevron",
					"aria-hidden": "true"
				}, null, -1)
			], 8, Fo), o(t.id) ? (B(), V("div", Io, [t.folders.length > 0 ? (B(), H(i, {
				key: 0,
				depth: e.depth + 1,
				folders: t.folders,
				"has-search-query": e.hasSearchQuery,
				onOpenEntry: n[0] ||= (e) => r("openEntry", e)
			}, null, 8, [
				"depth",
				"folders",
				"has-search-query"
			])) : K("", !0), (B(!0), V(z, null, R(t.journals, (t) => (B(), V("button", {
				key: t.id,
				type: "button",
				class: "mobile-journal-shell__journal-row",
				style: me({ "--folder-depth": e.depth + 1 }),
				onClick: (e) => r("openEntry", t)
			}, [n[2] ||= U("i", {
				class: "fa-solid fa-book-open",
				"aria-hidden": "true"
			}, null, -1), U("span", null, [U("strong", null, E(t.name), 1), U("small", null, E(t.pages.length) + " pages", 1)])], 12, Lo))), 128))])) : K("", !0)], 4))), 128))]);
		};
	}
}), zo = { class: "mobile-journal-shell__list-view" }, Bo = { class: "mobile-journal-shell__search" }, Vo = ["value"], Ho = { class: "mobile-journal-shell__list-summary" }, Uo = {
	class: "mobile-journal-shell__tabs",
	"aria-label": "Journal collections"
}, Wo = ["aria-selected", "onClick"], Go = {
	key: 0,
	class: "mobile-journal-shell__tab-panel"
}, Ko = { class: "mobile-journal-shell__tab-header" }, qo = {
	key: 1,
	class: "mobile-journal-shell__empty"
}, Jo = /* @__PURE__ */ L({
	__name: "MobileJournalList",
	props: {
		journalCount: {},
		searchText: {},
		tabs: {},
		totalPageCount: {}
	},
	emits: ["openEntry", "update:searchText"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ M(n.tabs[0]?.id ?? ""), a = J(() => n.searchText.trim().length > 0), o = J(() => n.tabs.find((e) => e.id === i.value) ?? n.tabs[0]);
		Vn(() => n.tabs.map((e) => e.id), () => {
			n.tabs.some((e) => e.id === i.value) || (i.value = n.tabs[0]?.id ?? "");
		});
		function s(e) {
			i.value = e;
		}
		function c(e) {
			let t = e.target;
			t instanceof HTMLInputElement && r("update:searchText", t.value);
		}
		return (t, n) => (B(), V("section", zo, [
			U("label", Bo, [n[1] ||= U("span", null, "Search Journals", -1), U("input", {
				value: e.searchText,
				type: "search",
				autocomplete: "off",
				class: "tw:dui-input",
				onInput: c
			}, null, 40, Vo)]),
			U("div", Ho, [U("span", null, E(e.journalCount) + " journals", 1), U("span", null, E(e.totalPageCount) + " pages", 1)]),
			U("nav", Uo, [(B(!0), V(z, null, R(e.tabs, (e) => (B(), V("button", {
				key: e.id,
				type: "button",
				class: "mobile-journal-shell__tab-button",
				"aria-selected": o.value?.id === e.id,
				onClick: (t) => s(e.id)
			}, [U("strong", null, E(e.label), 1), U("small", null, E(e.journalCount), 1)], 8, Wo))), 128))]),
			o.value ? (B(), V("section", Go, [U("header", Ko, [U("strong", null, E(o.value.label), 1), U("small", null, E(o.value.journalCount) + " journals / " + E(o.value.pageCount) + " pages", 1)]), o.value.folders.length > 0 ? (B(), H(Ro, {
				key: o.value.id,
				depth: 0,
				folders: o.value.folders,
				"has-search-query": a.value,
				onOpenEntry: n[0] ||= (e) => r("openEntry", e)
			}, null, 8, ["folders", "has-search-query"])) : (B(), V("section", qo, [...n[2] ||= [U("h2", null, "No Journals", -1)]]))])) : K("", !0)
		]));
	}
}), Yo = {
	key: 0,
	class: "mobile-journal-shell__reader"
}, Xo = { class: "mobile-journal-shell__reader-bar" }, Zo = { class: "mobile-journal-shell__reader-title" }, Qo = { class: "mobile-journal-shell__reader-controls" }, $o = ["disabled"], es = { class: "mobile-journal-shell__select-control" }, ts = ["value"], ns = ["value"], rs = ["disabled"], is = {
	key: 0,
	class: "mobile-journal-shell__select-control mobile-journal-shell__select-control--wide"
}, as = ["value"], os = ["innerHTML"], ss = /* @__PURE__ */ L({
	__name: "MobileJournalReader",
	props: {
		entry: {},
		pageId: {}
	},
	emits: ["back", "update:pageId"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ M(""), a = /* @__PURE__ */ M(null), o = J(() => n.entry.pages.find((e) => e.id === n.pageId) ?? n.entry.pages[0]), s = J(() => n.entry.pages.findIndex((e) => e.id === o.value?.id)), c = J(() => o.value ? h(o.value) : {
			headers: [],
			html: ""
		}), l = J(() => n.entry.folderName ? `${n.entry.source.label} / ${n.entry.folderName}` : n.entry.source.label);
		Vn(() => n.pageId, () => {
			i.value = "", wn(() => {
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
		return (t, n) => o.value ? (B(), V("article", Yo, [
			U("header", Xo, [U("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-square tw:dui-btn-ghost",
				"aria-label": "Back to journal list",
				onClick: n[0] ||= (e) => r("back")
			}, [...n[2] ||= [U("i", {
				class: "fa-solid fa-chevron-left",
				"aria-hidden": "true"
			}, null, -1)]]), U("div", Zo, [U("p", null, E(l.value), 1), U("h2", null, E(e.entry.name), 1)])]),
			U("div", Qo, [
				U("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-square tw:dui-btn-ghost",
					"aria-label": "Previous page",
					disabled: s.value <= 0,
					onClick: u
				}, [...n[3] ||= [U("i", {
					class: "fa-solid fa-arrow-left",
					"aria-hidden": "true"
				}, null, -1)]], 8, $o),
				U("label", es, [n[4] ||= U("span", null, "Page", -1), U("select", {
					value: e.pageId,
					class: "tw:dui-select",
					onChange: f
				}, [(B(!0), V(z, null, R(e.entry.pages, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, E(e.name), 9, ns))), 128))], 40, ts)]),
				U("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-square tw:dui-btn-ghost",
					"aria-label": "Next page",
					disabled: s.value >= e.entry.pages.length - 1,
					onClick: d
				}, [...n[5] ||= [U("i", {
					class: "fa-solid fa-arrow-right",
					"aria-hidden": "true"
				}, null, -1)]], 8, rs),
				c.value.headers.length > 0 ? (B(), V("label", is, [n[7] ||= U("span", null, "Headings", -1), I(U("select", {
					"onUpdate:modelValue": n[1] ||= (e) => i.value = e,
					class: "tw:dui-select",
					onChange: p
				}, [n[6] ||= U("option", { value: "" }, "Jump to heading", -1), (B(!0), V(z, null, R(c.value.headers, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, E("-".repeat(Math.max(0, e.level - 1))) + " " + E(e.text), 9, as))), 128))], 544), [[xo, i.value]])])) : K("", !0)
			]),
			U("section", {
				ref_key: "pageScrollElement",
				ref: a,
				class: "mobile-journal-shell__page"
			}, [U("h3", null, E(o.value.name), 1), U("div", {
				class: "mobile-journal-shell__content",
				innerHTML: c.value.html
			}, null, 8, os)], 512)
		])) : K("", !0);
	}
}), cs = {
	class: "mobile-journal-shell",
	"aria-label": "Journal browser"
}, ls = { class: "mobile-journal-shell__app-header" }, us = { class: "tw:dui-badge tw:dui-badge-primary" }, ds = "compendiums", fs = "No Folder", ps = "World", ms = "world", hs = /* @__PURE__ */ L({
	__name: "MobileJournalApp",
	props: { journals: {} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ M(!1), r = /* @__PURE__ */ M(""), i = /* @__PURE__ */ M(""), a = /* @__PURE__ */ M(""), o = J(() => {
			let e = r.value.trim().toLocaleLowerCase();
			return e ? t.journals.filter((t) => {
				let n = t.pages.some((t) => t.name.toLocaleLowerCase().includes(e));
				return t.name.toLocaleLowerCase().includes(e) || t.folderName?.toLocaleLowerCase().includes(e) || t.source.label.toLocaleLowerCase().includes(e) || n;
			}) : t.journals;
		}), s = J(() => {
			let e = u(ms, "World"), t = u(ds, "Compendiums"), n = /* @__PURE__ */ new Map();
			for (let r of o.value) r.source.type === "world" ? f(e, r) : p(t, n, r);
			return y(e.folders), y(t.folders), [e, t];
		}), c = J(() => o.value.reduce((e, t) => e + t.pages.length, 0)), l = J(() => t.journals.find((e) => e.id === i.value));
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
			let n = t.folderName ?? ps;
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
			let i = n.split("/").map((e) => e.trim()).filter((e) => e.length > 0), a = i.length > 0 ? i : [fs], o = e, s, c = [];
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
		function S() {
			n.value = !1;
		}
		return (e, t) => (B(), V("section", cs, [U("header", ls, [t[2] ||= U("div", null, [U("p", null, "Drowsy's WFRP4e On The Go"), U("h1", null, "Journals")], -1), U("span", us, E(o.value.length), 1)]), n.value ? l.value ? (B(), H(ss, {
			key: 1,
			"page-id": a.value,
			"onUpdate:pageId": t[1] ||= (e) => a.value = e,
			entry: l.value,
			onBack: S
		}, null, 8, ["page-id", "entry"])) : K("", !0) : (B(), H(Jo, {
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
}), gs = { class: "on-the-go-shell" }, _s = { class: "on-the-go-shell__top-bar" }, vs = {
	key: 1,
	class: "on-the-go-shell__top-bar-spacer",
	"aria-hidden": "true"
}, ys = {
	key: 0,
	class: "on-the-go-shell__home",
	"aria-label": "Main menu"
}, bs = {
	key: 1,
	class: "on-the-go-shell__content"
}, xs = { class: "on-the-go-shell__toggle tw:dui-card" }, Ss = { class: "on-the-go-shell__field" }, Cs = {
	class: "on-the-go-shell__gm-list",
	"aria-label": "Enabled users"
}, ws = ["checked", "onChange"], Ts = { class: "on-the-go-shell__actions" }, Es = { "aria-live": "polite" }, Ds = ["disabled"], Os = ["disabled"], ks = /* @__PURE__ */ L({
	__name: "MobileShellApp",
	props: {
		activationSettings: {},
		disableForcedMode: { type: Function },
		journals: {},
		saveActivationSettings: { type: Function }
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ M("home"), r = /* @__PURE__ */ M(!1), i = /* @__PURE__ */ M(""), a = /* @__PURE__ */ Bt(m(t.activationSettings)), o = J(() => n.value === "journals" ? "Journals" : n.value === "settings" ? "Settings" : "Home"), s = J(() => t.journals.reduce((e, t) => e + t.pages.length, 0));
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
		return (t, u) => (B(), V("main", gs, [U("header", _s, [
			n.value === "home" ? (B(), V("span", vs)) : (B(), V("button", {
				key: 0,
				type: "button",
				class: "tw:dui-btn tw:dui-btn-square tw:dui-btn-ghost",
				"aria-label": "Back to home",
				onClick: l
			}, [...u[4] ||= [U("i", {
				class: "fa-solid fa-chevron-left",
				"aria-hidden": "true"
			}, null, -1)]])),
			U("div", null, [u[5] ||= U("p", null, "Drowsy's WFRP4e On The Go", -1), U("h1", null, E(o.value), 1)]),
			u[6] ||= U("span", {
				class: "on-the-go-shell__top-bar-spacer",
				"aria-hidden": "true"
			}, null, -1)
		]), n.value === "home" ? (B(), V("section", ys, [U("button", {
			type: "button",
			class: "on-the-go-shell__menu-button tw:dui-card",
			onClick: u[0] ||= (e) => c("journals")
		}, [u[8] ||= U("i", {
			class: "fa-solid fa-book-open",
			"aria-hidden": "true"
		}, null, -1), U("span", null, [u[7] ||= U("strong", null, "Journals", -1), U("small", null, E(e.journals.length) + " entries, " + E(s.value) + " pages", 1)])]), U("button", {
			type: "button",
			class: "on-the-go-shell__menu-button tw:dui-card",
			onClick: u[1] ||= (e) => c("settings")
		}, [u[10] ||= U("i", {
			class: "fa-solid fa-sliders",
			"aria-hidden": "true"
		}, null, -1), U("span", null, [u[9] ||= U("strong", null, "Settings", -1), U("small", null, E(a.forceMobileUi ? "Forced on this client" : "Automatic activation"), 1)])])])) : n.value === "journals" ? (B(), V("section", bs, [W(hs, { journals: e.journals }, null, 8, ["journals"])])) : (B(), V("form", {
			key: 2,
			class: "on-the-go-shell__settings",
			onSubmit: Do(f, ["prevent"])
		}, [
			U("label", xs, [U("span", null, [u[11] ||= U("strong", null, "Force On This Client", -1), U("small", null, E(a.forceMobileUi ? "On" : "Off"), 1)]), I(U("input", {
				"onUpdate:modelValue": u[2] ||= (e) => a.forceMobileUi = e,
				type: "checkbox",
				class: "tw:dui-toggle tw:dui-toggle-primary"
			}, null, 512), [[yo, a.forceMobileUi]])]),
			U("label", Ss, [u[12] ||= U("span", null, "Mobile Width Threshold", -1), I(U("input", {
				"onUpdate:modelValue": u[3] ||= (e) => a.mobileWidthThreshold = e,
				type: "number",
				min: "320",
				max: "1400",
				step: "10",
				class: "tw:dui-input"
			}, null, 512), [[
				vo,
				a.mobileWidthThreshold,
				void 0,
				{ number: !0 }
			]])]),
			U("section", Cs, [u[13] ||= U("h2", null, "Enabled Users", -1), (B(!0), V(z, null, R(a.users, (e) => (B(), V("label", {
				key: e.id,
				class: T(["on-the-go-shell__toggle tw:dui-card", { "on-the-go-shell__toggle--current": e.isCurrentUser }])
			}, [U("span", null, [U("strong", null, E(e.name), 1), U("small", null, E(e.isGm ? "GM" : "Player") + E(e.isCurrentUser ? " · Current user" : ""), 1)]), U("input", {
				type: "checkbox",
				class: "tw:dui-toggle tw:dui-toggle-primary",
				checked: e.enabled,
				onChange: (t) => d(e.id, t)
			}, null, 40, ws)], 2))), 128))]),
			U("footer", Ts, [
				U("p", Es, E(i.value), 1),
				U("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-outline",
					disabled: r.value,
					onClick: p
				}, [...u[14] ||= [U("i", {
					class: "fa-solid fa-power-off",
					"aria-hidden": "true"
				}, null, -1), U("span", null, "Turn Off Forced Mode", -1)]], 8, Ds),
				U("button", {
					type: "submit",
					class: "tw:dui-btn tw:dui-btn-primary",
					disabled: r.value
				}, [u[15] ||= U("i", {
					class: "fa-solid fa-floppy-disk",
					"aria-hidden": "true"
				}, null, -1), U("span", null, E(r.value ? "Saving" : "Save"), 1)], 8, Os)
			])
		], 32))]));
	}
}), Y = "wfrp4e-on-the-go", As = "Drowsy's WFRP4e On The Go", js = "wfrp4e";
//#endregion
//#region src/module/journals/journal-permissions.ts
function Ms(e) {
	if (!Ns(e) || e.visible !== !0) return !1;
	let t = e.testUserPermission;
	if (typeof t != "function") return !1;
	try {
		return t.call(e, game.user, "OBSERVER") === !0;
	} catch {
		return !1;
	}
}
function Ns(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/module/journals/mobile-journal-adapter.ts
var Ps = {
	id: "world",
	label: "World Journals",
	type: "world"
};
async function Fs(e = !1) {
	let t = Ls(e), n = await Rs(e);
	return [...t, ...n].sort(Xs);
}
function Is() {
	return Fs(!0);
}
function Ls(e) {
	let t = {
		idPrefix: "world",
		source: Ps
	};
	return zs().filter((t) => !e || Ms(t)).map((n) => Ws(n, t, e)).filter((e) => e !== void 0);
}
async function Rs(e) {
	let t = [];
	for (let n of Bs()) {
		if (e && !Ms(n)) continue;
		let r = Us(n);
		if (!r) continue;
		let i = {
			idPrefix: `compendium:${r.id}`,
			source: {
				id: r.id,
				label: r.label,
				type: "compendium"
			}
		}, a = await Hs(n);
		t.push(...a.filter((t) => !e || Ms(t)).map((t) => Ws(t, i, e)).filter((e) => e !== void 0));
	}
	return t;
}
function zs() {
	let e = game.journal;
	return Array.isArray(e.contents) ? e.contents : [];
}
function Bs() {
	return Js(game.packs).filter(Vs);
}
function Vs(e) {
	if (!tc(e)) return !1;
	let t = $s(e.documentName), n = tc(e.metadata) ? e.metadata : {}, r = $s(n.type) ?? $s(n.documentName);
	return t === "JournalEntry" || r === "JournalEntry";
}
async function Hs(e) {
	if (!ec(e)) return [];
	let t = await e.getDocuments();
	return Array.isArray(t) ? t : [];
}
function Us(e) {
	if (!tc(e)) return;
	let t = tc(e.metadata) ? e.metadata : {}, n = $s(e.collection) ?? $s(t.id) ?? $s(t.name), r = $s(e.title) ?? $s(e.label) ?? $s(t.label) ?? n;
	if (!(!n || !r)) return {
		id: n,
		label: r
	};
}
function Ws(e, t, n) {
	if (!tc(e)) return;
	let r = qs(e);
	if (!r) return;
	let i = Ys(e.folder), a = Gs(e.pages, n), o = {
		id: `${t.idPrefix}:${r.id}`,
		name: r.name,
		pages: a,
		source: t.source
	};
	return i && (o.folderName = i), o;
}
function Gs(e, t) {
	return Js(e).filter((e) => !t || Ms(e)).map(Ks).filter((e) => e !== void 0).sort((e, t) => e.sort - t.sort || e.name.localeCompare(t.name));
}
function Ks(e) {
	if (!tc(e)) return;
	let t = qs(e);
	if (t) return {
		html: $s((tc(e.text) ? e.text : {}).content) ?? "",
		id: t.id,
		name: t.name,
		sort: Qs(e.sort) ?? 0,
		type: $s(e.type) ?? "unknown"
	};
}
function qs(e) {
	let t = $s(e.id), n = $s(e.name);
	if (!(!t || !n)) return {
		id: t,
		name: n
	};
}
function Js(e) {
	return Array.isArray(e) ? e : tc(e) && Array.isArray(e.contents) ? e.contents : [];
}
function Ys(e) {
	if (!tc(e)) return;
	let t = [], n = e;
	for (; tc(n);) {
		let e = $s(n.name);
		e && t.unshift(e), n = n.folder;
	}
	return t.length > 0 ? t.join(" / ") : void 0;
}
function Xs(e, t) {
	return Zs(e.source.type) - Zs(t.source.type) || e.source.label.localeCompare(t.source.label) || e.name.localeCompare(t.name);
}
function Zs(e) {
	return e === "world" ? 0 : 1;
}
function Qs(e) {
	if (typeof e == "number" && Number.isFinite(e)) return e;
}
function $s(e) {
	if (typeof e == "string" && e.trim() !== "") return e;
}
function ec(e) {
	return tc(e) && typeof e.getDocuments == "function";
}
function tc(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/module/settings/activation-settings.ts
var nc = 1, rc = "activationSettingsVersion", ic = "enabledUserIds", ac = "enabledGmUserIds", oc = "forceMobileUi", sc = "mobileWidthThreshold", cc = 800;
function lc() {
	_c(ic, []), _c(ac, []), _c(rc, 0), game.settings.register(Y, sc, {
		name: "WFRP_ON_THE_GO.settings.mobileWidthThreshold.name",
		hint: "WFRP_ON_THE_GO.settings.mobileWidthThreshold.hint",
		scope: "world",
		config: !0,
		restricted: !0,
		default: cc,
		type: Number,
		range: {
			min: 320,
			max: 1400,
			step: 10
		}
	}), game.settings.register(Y, oc, {
		name: "WFRP_ON_THE_GO.settings.forceMobileUi.name",
		hint: "WFRP_ON_THE_GO.settings.forceMobileUi.hint",
		scope: "client",
		config: !0,
		default: !1,
		type: Boolean
	});
}
async function uc() {
	if (!game.user.isGM || vc() >= nc) return;
	let e = bc(ic), t = bc(ac);
	await pc(e.length > 0 ? e : t), await game.settings.set(Y, rc, nc);
}
function dc() {
	let e = new Set(yc());
	return wc().map((t) => ({
		enabled: e.has(t.id),
		id: t.id,
		isCurrentUser: t.id === game.user.id,
		isGm: t.isGM,
		name: t.name
	}));
}
function fc() {
	return {
		forceMobileUi: xc(),
		mobileWidthThreshold: Sc(),
		users: dc()
	};
}
async function pc(e) {
	let t = new Set(wc().map((e) => e.id)), n = Array.from(new Set(e)).filter((e) => t.has(e));
	await game.settings.set(Y, ic, n);
}
async function mc(e) {
	await pc(e.users.filter((e) => e.enabled).map((e) => e.id)), await game.settings.set(Y, sc, Cc(e.mobileWidthThreshold)), await game.settings.set(Y, oc, e.forceMobileUi);
}
async function hc(e) {
	await game.settings.set(Y, oc, e);
}
function gc(e = window.innerWidth) {
	let t = yc().includes(game.user.id), n = xc() || e <= Sc();
	return !t || !n ? "none" : game.user.isGM ? "gm" : "player";
}
function _c(e, t) {
	game.settings.register(Y, e, {
		name: e,
		hint: e,
		scope: "world",
		config: !1,
		restricted: !0,
		default: t,
		type: typeof t == "number" ? Number : Object
	});
}
function vc() {
	let e = game.settings.get(Y, rc);
	return typeof e == "number" && Number.isFinite(e) ? e : 0;
}
function yc() {
	return bc(ic);
}
function bc(e) {
	let t = game.settings.get(Y, e);
	return Array.isArray(t) ? t.filter((e) => typeof e == "string") : [];
}
function xc() {
	return game.settings.get(Y, oc) === !0;
}
function Sc() {
	let e = game.settings.get(Y, sc);
	return typeof e != "number" || !Number.isFinite(e) ? cc : e;
}
function Cc(e) {
	return Number.isFinite(e) ? Math.min(1400, Math.max(320, Math.round(e))) : cc;
}
function wc() {
	return game.users.filter(() => !0);
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var Tc = typeof window < "u", Ec, Dc = (e) => Ec = e, Oc = Symbol();
function kc(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Ac;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Ac ||= {});
var jc = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Mc(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Nc(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Rc(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Pc(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Fc(e) {
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
var Ic = typeof navigator == "object" ? navigator : { userAgent: "" }, Lc = /Macintosh/.test(Ic.userAgent) && /AppleWebKit/.test(Ic.userAgent) && !/Safari/.test(Ic.userAgent), Rc = Tc ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Lc ? zc : "msSaveOrOpenBlob" in Ic ? Bc : Vc : () => {};
function zc(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Fc(r) : Pc(r.href) ? Nc(e, t, n) : (r.target = "_blank", Fc(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Fc(r);
	}, 0));
}
function Bc(e, t = "download", n) {
	if (typeof e == "string") if (Pc(e)) Nc(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			Fc(t);
		});
	}
	else navigator.msSaveOrOpenBlob(Mc(e, n), t);
}
function Vc(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Nc(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(jc.HTMLElement)) || "safari" in jc, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Lc) && typeof FileReader < "u") {
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
var { assign: Hc } = Object;
function Uc() {
	let e = ke(!0), t = e.run(() => /* @__PURE__ */ M({})), n = [], r = [], i = Jt({
		install(e) {
			Dc(i), i._a = e, e.provide(Oc, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var Wc = () => {};
function Gc(e, t, n, r = Wc) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ae() && je(i), i;
}
function Kc(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var qc = (e) => e(), Jc = Symbol(), Yc = Symbol();
function Xc(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		kc(i) && kc(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ j(r) && !/* @__PURE__ */ Wt(r) ? e[n] = Xc(i, r) : e[n] = r;
	}
	return e;
}
var Zc = Symbol();
function Qc(e) {
	return !kc(e) || !Object.prototype.hasOwnProperty.call(e, Zc);
}
var { assign: $c } = Object;
function el(e) {
	return !!(/* @__PURE__ */ j(e) && e.effect);
}
function tl(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), $c(/* @__PURE__ */ tn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Jt(J(() => {
			Dc(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = nl(e, l, t, n, r, !0), c;
}
function nl(e, t, n = {}, r, i, a) {
	let o, s = $c({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Ac.patchFunction,
			storeId: e,
			events: void 0
		}) : (Xc(r.state.value[e], t), n = {
			type: Ac.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		wn().then(() => {
			m === i && (l = !0);
		}), u = !0, Kc(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			$c(e, t);
		});
	} : Wc;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (Jc in t) return t[Yc] = n, t;
		let i = function() {
			Dc(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Kc(f, {
				args: n,
				name: i[Yc],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Kc(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Kc(a, e), e)).catch((e) => (Kc(o, e), Promise.reject(e))) : (Kc(a, l), l);
		};
		return i[Jc] = !0, i[Yc] = n, i;
	}, y = /* @__PURE__ */ Bt({
		_p: r,
		$id: e,
		$onAction: Gc.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = Gc(d, t, n.detached, () => a()), a = o.run(() => Vn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Ac.direct,
					events: void 0
				}, r);
			}, $c({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || qc)(() => r._e.run(() => (o = ke()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ j(n) && !el(n) || /* @__PURE__ */ Wt(n) ? a || (p && Qc(n) && (/* @__PURE__ */ j(n) ? n.value = p[t] : Xc(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return $c(y, b), $c(/* @__PURE__ */ A(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				$c(t, e);
			});
		}
	}), r._p.forEach((e) => {
		$c(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function rl(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Rn();
		return n ||= o ? Ln(Oc, null) : null, n && Dc(n), n = Ec, n._s.has(e) || (i ? nl(e, t, r, n) : tl(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
//#endregion
//#region src/module/apps/FoundryVueApplication.ts
var il = class extends foundry.applications.api.ApplicationV2 {
	#e = Uc();
	#t;
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp-on-the-go-root"), n.dataset.theme = "wfrp-on-the-go", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp-on-the-go-app"), t.replaceChildren(e), this.#t = jo(this.getVueComponent(), this.getVueProps()), this.#t.use(this.#e), this.#t.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#t?.unmount(), this.#t = void 0;
	}
}, al = "wfrp-on-the-go-mobile-shell-window", ol = "wfrp-on-the-go-mode-active", sl = /* @__PURE__ */ new Set();
function cl(e) {
	sl.add(e), document.body.classList.add(ol);
}
function ll(e) {
	sl.delete(e), sl.size === 0 && document.body.classList.remove(ol);
}
//#endregion
//#region src/module/apps/mobile-shell/MobileShellApplication.ts
var ul = class extends il {
	#e = [];
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${Y}-mobile-shell`,
		classes: [Y, al],
		tag: "section",
		window: {
			title: As,
			icon: "fa-solid fa-mobile-screen-button",
			resizable: !1
		},
		position: {
			left: 0,
			top: 0,
			width: 430,
			height: 800
		}
	};
	getVueComponent() {
		return ks;
	}
	getVueProps() {
		return {
			activationSettings: fc(),
			disableForcedMode: async () => {
				await hc(!1);
			},
			journals: this.#e,
			saveActivationSettings: mc
		};
	}
	async _renderHTML(e, t) {
		let [n] = await Promise.all([super._renderHTML(e, t), this.loadJournals()]);
		return n;
	}
	_replaceHTML(e, t, n) {
		cl(this), super._replaceHTML(e, t, n);
	}
	async _preClose(e) {
		ll(this), await super._preClose(e);
	}
	async loadJournals() {
		this.#e = await Fs();
	}
}, dl = rl("player-sheet", () => {
	let e = /* @__PURE__ */ M("status"), t = /* @__PURE__ */ M(!1), n = /* @__PURE__ */ M(), r = /* @__PURE__ */ M(""), i = /* @__PURE__ */ M(!1), a = J(() => r.value.trim().toLocaleLowerCase());
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
}), fl = {
	key: 0,
	class: "tw:grid tw:grid-cols-[auto_minmax(0,1fr)] tw:gap-3 tw:border-b tw:border-base-300 tw:bg-linear-to-br tw:from-base-200 tw:to-base-100 tw:p-4 tw:shadow-inner",
	"aria-labelledby": "character-name"
}, pl = { class: "tw:dui-avatar" }, ml = { class: "tw:h-[5.4rem] tw:w-[4.6rem] tw:overflow-hidden tw:rounded-field tw:border-2 tw:border-secondary tw:bg-neutral tw:ring-3 tw:ring-base-100" }, hl = ["src", "alt"], gl = { class: "tw:grid tw:min-w-0 tw:content-center" }, _l = { class: "tw:m-0 tw:text-xs tw:font-extrabold tw:text-secondary tw:uppercase" }, vl = {
	id: "character-name",
	class: "tw:my-1 tw:font-serif tw:text-2xl tw:leading-none tw:font-bold"
}, yl = { class: "tw:text-sm tw:opacity-75" }, bl = { class: "tw:col-span-full tw:grid tw:gap-1" }, xl = { class: "tw:flex tw:items-baseline tw:justify-between" }, Sl = { class: "tw:font-serif tw:text-lg tw:tabular-nums" }, Cl = ["value"], wl = {
	key: 1,
	class: "tw:grid tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:border-b tw:border-base-300 tw:bg-base-200 tw:px-3 tw:py-2 tw:shadow-inner",
	"aria-label": "Current character"
}, Tl = { class: "tw:dui-avatar" }, El = { class: "tw:size-10 tw:overflow-hidden tw:rounded-field tw:border tw:border-secondary" }, Dl = ["src"], Ol = { class: "tw:min-w-0" }, kl = { class: "tw:block tw:truncate tw:font-serif" }, Al = { class: "tw:block tw:truncate tw:opacity-65" }, jl = { class: "tw:text-right" }, Ml = { class: "tw:font-serif tw:tabular-nums" }, Nl = /* @__PURE__ */ L({
	__name: "CharacterBanner",
	props: { character: {} },
	setup(e) {
		let t = e, n = dl(), r = J(() => n.activeDestination === "status"), i = J(() => {
			let e = t.character.wounds.maximum ?? 0;
			return e > 0 ? Math.max(0, Math.min(100, t.character.wounds.current / e * 100)) : 0;
		});
		return (t, n) => r.value ? (B(), V("section", fl, [
			U("div", pl, [U("div", ml, [U("img", {
				src: e.character.imageUrl,
				alt: `${e.character.name} portrait`,
				width: "92",
				height: "108",
				class: "tw:h-full tw:w-full tw:object-cover"
			}, null, 8, hl)])]),
			U("div", gl, [
				U("p", _l, E(e.character.species || "Unknown species"), 1),
				U("h1", vl, E(e.character.name), 1),
				U("span", yl, E(e.character.career.name), 1)
			]),
			U("div", bl, [U("div", xl, [n[0] ||= U("span", { class: "tw:text-xs tw:font-extrabold tw:uppercase" }, "Wounds", -1), U("strong", Sl, E(e.character.wounds.current) + " / " + E(e.character.wounds.maximum), 1)]), U("progress", {
				class: "tw:dui-progress tw:dui-progress-error",
				value: i.value,
				max: "100",
				"aria-label": "Current wounds"
			}, null, 8, Cl)])
		])) : (B(), V("section", wl, [
			U("div", Tl, [U("div", El, [U("img", {
				src: e.character.imageUrl,
				alt: "",
				width: "40",
				height: "40",
				class: "tw:h-full tw:w-full tw:object-cover"
			}, null, 8, Dl)])]),
			U("div", Ol, [U("strong", kl, E(e.character.name), 1), U("small", Al, E(e.character.career.name), 1)]),
			U("div", jl, [n[1] ||= U("span", { class: "tw:block tw:text-[0.6rem] tw:font-black tw:uppercase" }, "Wounds", -1), U("strong", Ml, E(e.character.wounds.current) + " / " + E(e.character.wounds.maximum), 1)])
		]));
	}
}), Pl = { class: "tw:dui-navbar tw:min-h-14 tw:border-b tw:border-secondary/50 tw:bg-neutral tw:px-2 tw:py-2 tw:text-neutral-content" }, Fl = { class: "tw:dui-navbar-start tw:w-auto" }, Il = ["disabled", "aria-expanded"], Ll = { class: "tw:dui-navbar-center tw:min-w-0 tw:flex-1 tw:px-2" }, Rl = { class: "tw:min-w-0 tw:text-center" }, zl = { class: "tw:block tw:truncate tw:font-serif tw:text-base" }, Bl = { class: "tw:dui-navbar-end tw:w-auto" }, Vl = ["data-tip"], Hl = {
	class: "tw:dui-badge tw:dui-badge-ghost tw:dui-badge-sm",
	role: "status"
}, Ul = { class: "tw:sr-only" }, Wl = /* @__PURE__ */ L({
	__name: "ShellHeader",
	props: { characterState: {} },
	setup(e) {
		let t = e, n = dl(), r = {
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
		}, i = J(() => t.characterState.status === "ready" ? "Live character linked" : t.characterState.status === "missing" ? "No character assigned" : "Character needs attention");
		return (t, a) => (B(), V("header", Pl, [
			U("div", Fl, [U("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-sm tw:min-h-11",
				disabled: e.characterState.status !== "ready",
				"aria-expanded": N(n).menuOpen,
				"aria-controls": "player-adventure-menu-panel",
				onClick: a[0] ||= (e) => N(n).menuOpen = !0
			}, [...a[1] ||= [U("i", {
				class: "fa-solid fa-bars",
				"aria-hidden": "true"
			}, null, -1), G(" Menu ", -1)]], 8, Il)]),
			U("div", Ll, [U("div", Rl, [a[2] ||= U("p", { class: "tw:m-0 tw:text-[0.6rem] tw:font-black tw:tracking-[0.14em] tw:text-secondary tw:uppercase" }, " WFRP4e On The Go ", -1), U("strong", zl, E(r[N(n).activeDestination]), 1)])]),
			U("div", Bl, [U("span", {
				class: "tw:dui-tooltip tw:dui-tooltip-left",
				"data-tip": i.value
			}, [U("span", Hl, [U("span", {
				class: T(["tw:dui-status tw:dui-status-sm", {
					"tw:dui-status-success": e.characterState.status === "ready",
					"tw:dui-status-warning": e.characterState.status === "missing",
					"tw:dui-status-error": e.characterState.status === "unsupported"
				}]),
				"aria-hidden": "true"
			}, null, 2), U("span", Ul, E(i.value), 1)])], 8, Vl)])
		]));
	}
}), Gl = {
	class: "tw:flex tw:h-full tw:w-[84vw] tw:max-w-[340px] tw:flex-col tw:border-r tw:border-secondary/50 tw:bg-base-200 tw:text-base-content tw:shadow-2xl",
	"aria-label": "Adventure menu"
}, Kl = { class: "tw:grid tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:border-b tw:border-secondary/40 tw:bg-neutral tw:p-4 tw:text-neutral-content" }, ql = { class: "tw:dui-avatar" }, Jl = { class: "tw:size-12 tw:overflow-hidden tw:rounded-field tw:border tw:border-secondary tw:bg-base-300" }, Yl = ["src", "alt"], Xl = { class: "tw:min-w-0" }, Zl = { class: "tw:block tw:truncate tw:font-serif tw:text-lg" }, Ql = {
	class: "tw:min-h-0 tw:flex-1 tw:overflow-y-auto tw:p-3",
	"aria-label": "Character pages"
}, $l = { class: "tw:dui-menu tw:w-full tw:gap-2 tw:p-0" }, eu = ["aria-current", "onClick"], tu = {
	class: "tw:grid tw:size-9 tw:place-items-center tw:rounded-field tw:border tw:border-secondary/30 tw:bg-base-300 tw:text-secondary tw:shadow-inner",
	"aria-hidden": "true"
}, nu = { class: "tw:min-w-0" }, ru = { class: "tw:block tw:font-serif tw:text-base" }, iu = { class: "tw:block tw:truncate tw:opacity-65" }, au = /* @__PURE__ */ L({
	__name: "AdventureMenu",
	props: { character: {} },
	setup(e) {
		let t = dl(), n = [
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
		return (r, i) => (B(), V("aside", Gl, [
			U("header", Kl, [
				U("div", ql, [U("div", Jl, [U("img", {
					src: e.character.imageUrl,
					alt: `${e.character.name} portrait`,
					width: "48",
					height: "48",
					class: "tw:h-full tw:w-full tw:object-cover"
				}, null, 8, Yl)])]),
				U("div", Xl, [i[1] ||= U("p", { class: "tw:m-0 tw:text-[0.65rem] tw:font-black tw:tracking-[0.14em] tw:text-secondary tw:uppercase" }, " Adventure menu ", -1), U("strong", Zl, E(e.character.name), 1)]),
				U("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-sm tw:dui-btn-square",
					"aria-label": "Close menu",
					onClick: i[0] ||= (...e) => N(t).closeMenu && N(t).closeMenu(...e)
				}, [...i[2] ||= [U("i", {
					class: "fa-solid fa-xmark",
					"aria-hidden": "true"
				}, null, -1)]])
			]),
			U("nav", Ql, [U("ul", $l, [(B(), V(z, null, R(n, (e) => U("li", { key: e.id }, [U("button", {
				type: "button",
				class: T(["tw:dui-btn tw:dui-btn-ghost tw:grid tw:h-auto tw:min-h-16 tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:items-center tw:justify-start tw:gap-3 tw:border tw:border-transparent tw:bg-base-300/55 tw:px-3 tw:py-2 tw:text-left tw:text-base-content", { "tw:dui-menu-active tw:border-secondary/60": N(t).activeDestination === e.id }]),
				"aria-current": N(t).activeDestination === e.id ? "page" : void 0,
				onClick: (n) => N(t).showDestination(e.id)
			}, [
				U("span", tu, [U("i", { class: T(e.icon) }, null, 2)]),
				U("span", nu, [U("strong", ru, E(e.label), 1), U("small", iu, E(e.description), 1)]),
				i[3] ||= U("i", {
					class: "fa-solid fa-chevron-right tw:text-xs tw:opacity-45",
					"aria-hidden": "true"
				}, null, -1)
			], 10, eu)])), 64))])]),
			i[4] ||= U("footer", { class: "tw:border-t tw:border-base-300 tw:p-4 tw:text-xs tw:opacity-65" }, [U("i", {
				class: "fa-solid fa-scroll tw:mr-2 tw:text-secondary",
				"aria-hidden": "true"
			}), G(" Live updates are on while this sheet is open ")], -1)
		]));
	}
}), ou = ["role"], su = /* @__PURE__ */ L({
	__name: "ActionStatus",
	props: {
		message: {},
		tone: {}
	},
	setup(e) {
		return (t, n) => e.message ? (B(), V("div", {
			key: 0,
			class: T(["tw:dui-alert tw:items-start tw:text-sm", e.tone === "error" ? "tw:dui-alert-error" : "tw:dui-alert-success"]),
			role: e.tone === "error" ? "alert" : "status"
		}, [U("i", {
			class: T([e.tone === "error" ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-check", "tw:mt-1"]),
			"aria-hidden": "true"
		}, null, 2), U("span", null, E(e.message), 1)], 10, ou)) : K("", !0);
	}
}), cu = { class: "tw:dui-collapse tw:dui-collapse-arrow tw:rounded-box tw:border tw:border-base-300 tw:bg-base-200 tw:shadow-sm" }, lu = { class: "tw:dui-collapse-title tw:grid tw:min-h-16 tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:px-3 tw:py-2" }, uu = { class: "tw:grid tw:size-10 tw:place-items-center tw:overflow-hidden tw:rounded-field tw:border tw:border-secondary/35 tw:bg-base-300 tw:text-secondary" }, du = ["src"], fu = { class: "tw:min-w-0" }, pu = { class: "tw:block tw:[overflow-wrap:anywhere]" }, mu = {
	key: 0,
	class: "tw:block tw:opacity-65 tw:[overflow-wrap:anywhere]"
}, hu = { class: "tw:dui-collapse-content tw:grid tw:gap-3 tw:border-t tw:border-base-300 tw:px-4 tw:py-3" }, gu = ["innerHTML"], _u = {
	key: 1,
	class: "tw:m-0 tw:text-sm tw:opacity-65"
}, vu = /* @__PURE__ */ L({
	__name: "DescriptionCollapse",
	props: {
		descriptionHtml: {},
		imageUrl: {},
		subtitle: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (B(), V("details", cu, [U("summary", lu, [
			U("span", uu, [e.imageUrl ? (B(), V("img", {
				key: 0,
				src: e.imageUrl,
				alt: "",
				width: "40",
				height: "40",
				loading: "lazy",
				class: "tw:h-full tw:w-full tw:object-cover"
			}, null, 8, du)) : Cr(t.$slots, "icon", { key: 1 }, () => [n[0] ||= U("i", {
				class: "fa-solid fa-book-open",
				"aria-hidden": "true"
			}, null, -1)])]),
			U("span", fu, [U("strong", pu, E(e.title), 1), e.subtitle ? (B(), V("small", mu, E(e.subtitle), 1)) : K("", !0)]),
			Cr(t.$slots, "badge")
		]), U("div", hu, [e.descriptionHtml ? (B(), V("div", {
			key: 0,
			class: "player-rich-text",
			innerHTML: e.descriptionHtml
		}, null, 8, gu)) : (B(), V("p", _u, "No full description is recorded.")), Cr(t.$slots, "default")])]));
	}
}), yu = { class: "tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:items-end tw:gap-3" }, bu = { class: "tw:m-0 tw:text-xs tw:font-extrabold tw:tracking-[0.08em] tw:text-secondary tw:uppercase" }, xu = { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold" }, Su = {
	key: 0,
	class: "tw:dui-badge tw:dui-badge-sm"
}, Cu = /* @__PURE__ */ L({
	__name: "SectionHeading",
	props: {
		count: {},
		eyebrow: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (B(), V("header", yu, [U("div", null, [U("p", bu, E(e.eyebrow), 1), U("h2", xu, E(e.title), 1)]), e.count === void 0 ? K("", !0) : (B(), V("span", Su, E(e.count), 1))]));
	}
});
//#endregion
//#region src/view/apps/player-shell/usePlayerAction.ts
function wu() {
	let e = /* @__PURE__ */ M(""), t = /* @__PURE__ */ M("success"), n = /* @__PURE__ */ M(!1);
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
//#region src/view/apps/player-shell/abilities/AbilitiesSection.vue?vue&type=script&setup=true&lang.ts
var Tu = {
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Talents and traits"
}, Eu = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "talents-heading"
}, Du = { class: "tw:dui-badge tw:dui-badge-soft tw:dui-badge-sm" }, Ou = {
	key: 0,
	class: "tw:m-0 tw:text-sm tw:opacity-65"
}, ku = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "traits-heading"
}, Au = {
	key: 0,
	class: "tw:dui-badge tw:dui-badge-secondary tw:dui-badge-sm"
}, ju = ["disabled", "onClick"], Mu = {
	key: 0,
	class: "tw:m-0 tw:text-sm tw:opacity-65"
}, Nu = /* @__PURE__ */ L({
	__name: "AbilitiesSection",
	props: {
		actions: {},
		talents: {},
		traits: {}
	},
	setup(e) {
		let t = e, { actionMessage: n, actionTone: r, isBusy: i, runPlayerAction: a } = wu();
		function o(e) {
			a(() => t.actions.rollTrait(e.id), `${e.name} test sent to chat.`);
		}
		return (t, a) => (B(), V("section", Tu, [
			W(Cu, {
				count: e.talents.length + e.traits.length,
				eyebrow: "Gifts and abilities",
				title: "Talents & Traits"
			}, null, 8, ["count"]),
			a[5] ||= U("p", { class: "tw:m-0 tw:text-sm tw:opacity-70" }, "Tap any entry to open its complete rules text.", -1),
			W(su, {
				message: N(n),
				tone: N(r)
			}, null, 8, ["message", "tone"]),
			U("section", Eu, [
				a[1] ||= U("h3", {
					id: "talents-heading",
					class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
				}, "Talents", -1),
				(B(!0), V(z, null, R(e.talents, (e) => (B(), H(vu, {
					key: e.id || e.name,
					"description-html": e.descriptionHtml,
					subtitle: e.tests ? `Tests: ${e.tests}` : "No test specialization",
					title: e.name
				}, {
					icon: F(() => [...a[0] ||= [U("i", {
						class: "fa-solid fa-star",
						"aria-hidden": "true"
					}, null, -1)]]),
					badge: F(() => [U("span", Du, "Rank " + E(e.ranks), 1)]),
					_: 2
				}, 1032, [
					"description-html",
					"subtitle",
					"title"
				]))), 128)),
				e.talents.length === 0 ? (B(), V("p", Ou, " No talents recorded. ")) : K("", !0)
			]),
			U("section", ku, [
				a[4] ||= U("h3", {
					id: "traits-heading",
					class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
				}, "Traits", -1),
				(B(!0), V(z, null, R(e.traits, (e) => (B(), H(vu, {
					key: e.id,
					"description-html": e.descriptionHtml,
					subtitle: e.specification,
					title: e.name
				}, {
					icon: F(() => [...a[2] ||= [U("i", {
						class: "fa-solid fa-paw",
						"aria-hidden": "true"
					}, null, -1)]]),
					badge: F(() => [e.rollable ? (B(), V("span", Au, " Rollable ")) : K("", !0)]),
					default: F(() => [e.rollable ? (B(), V("button", {
						key: 0,
						type: "button",
						class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11 tw:w-full",
						disabled: N(i),
						onClick: (t) => o(e)
					}, [...a[3] ||= [U("i", {
						class: "fa-solid fa-dice-d20",
						"aria-hidden": "true"
					}, null, -1), G(" Set up trait test ", -1)]], 8, ju)) : K("", !0)]),
					_: 2
				}, 1032, [
					"description-html",
					"subtitle",
					"title"
				]))), 128)),
				e.traits.length === 0 ? (B(), V("p", Mu, "No traits recorded.")) : K("", !0)
			])
		]));
	}
});
//#endregion
//#region src/functions/player-sheet/advancement.ts
function Pu(e, t, n = 0) {
	if (e.length === 0 || e.some((e) => !Number.isFinite(e) || e < 0)) throw Error("The WFRP advancement cost table is invalid.");
	let r = Math.max(0, Math.floor(t / 5)), i = e[Math.min(r, e.length - 1)];
	if (i === void 0) throw Error("The WFRP advancement cost table is incomplete.");
	return i + n;
}
function Fu(e) {
	return (e + 1) * 100;
}
function Iu(e, t, n) {
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
function Lu(e, t, n, r) {
	let i = Math.max(1, Math.floor(e.level)) * 5, a = new Set(e.characteristicAdvances.map(Ru)), o = t.filter((e) => [
		e.key,
		e.abbreviation,
		e.label
	].some((e) => a.has(Ru(e)))).map((e) => zu(e, i)), s = new Map(n.map((e) => [Ru(e.name), e])), c = Bu(e.skillNames).map((e) => {
		let t = s.get(Ru(e)), n = t?.advances ?? 0;
		return {
			advancesNeeded: Math.max(0, i - n),
			complete: n >= i,
			name: e,
			...t ? { skill: t } : {}
		};
	}), l = new Set(e.talentNames.map(Ru)), u = r.filter((e) => l.has(Ru(e.name))), d = e.talentNames.length === 0 || u.length > 0, f = o.length + c.length + +!!e.talentNames.length;
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
function Ru(e) {
	return e.trim().toLowerCase();
}
function zu(e, t) {
	return {
		advancesNeeded: Math.max(0, t - e.advances),
		characteristic: e,
		complete: e.advances >= t
	};
}
function Bu(e) {
	let t = /* @__PURE__ */ new Set();
	return e.filter((e) => {
		let n = Ru(e);
		return !n || t.has(n) ? !1 : (t.add(n), !0);
	});
}
//#endregion
//#region src/view/apps/player-shell/common/ConfirmAction.vue?vue&type=script&setup=true&lang.ts
var Vu = { class: "tw:dui-modal-box tw:bg-base-200" }, Hu = { class: "tw:m-0 tw:font-serif tw:text-xl tw:font-bold" }, Uu = { class: "tw:dui-modal-action" }, Wu = /* @__PURE__ */ L({
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
		let n = t, r = /* @__PURE__ */ M();
		function i() {
			r.value?.close(), n("confirm");
		}
		return (t, n) => (B(), V(z, null, [U("button", {
			type: "button",
			class: T(["tw:dui-btn tw:min-h-11", e.danger ? "tw:dui-btn-outline tw:dui-btn-error" : "tw:dui-btn-primary"]),
			onClick: n[0] ||= (e) => r.value?.showModal()
		}, [U("i", {
			class: T(e.icon),
			"aria-hidden": "true"
		}, null, 2), G(" " + E(e.triggerLabel), 1)], 2), U("dialog", {
			ref_key: "dialog",
			ref: r,
			class: "tw:dui-modal"
		}, [U("div", Vu, [
			U("h3", Hu, E(e.title), 1),
			U("p", null, E(e.body), 1),
			U("div", Uu, [n[1] ||= U("form", { method: "dialog" }, [U("button", {
				type: "submit",
				class: "tw:dui-btn"
			}, "Cancel")], -1), U("button", {
				type: "button",
				class: T(["tw:dui-btn", e.danger ? "tw:dui-btn-error" : "tw:dui-btn-primary"]),
				onClick: i
			}, E(e.confirmLabel), 3)])
		]), n[2] ||= U("form", {
			method: "dialog",
			class: "tw:dui-modal-backdrop"
		}, [U("button", { type: "submit" }, "Close")], -1)], 512)], 64));
	}
}), Gu = {
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Advancement"
}, Ku = { class: "tw:dui-stats tw:grid tw:grid-cols-3 tw:bg-base-200 tw:shadow-md" }, qu = { class: "tw:dui-stat tw:min-w-0 tw:p-3" }, Ju = { class: "tw:dui-stat-value tw:text-xl tw:text-secondary" }, Yu = { class: "tw:dui-stat tw:min-w-0 tw:p-3" }, Xu = { class: "tw:dui-stat-value tw:text-xl" }, Zu = { class: "tw:dui-stat tw:min-w-0 tw:p-3" }, Qu = { class: "tw:dui-stat-value tw:text-xl" }, $u = {
	key: 0,
	class: "tw:m-0 tw:text-sm"
}, ed = { class: "tw:grid tw:gap-2 tw:min-[360px]:grid-cols-2" }, td = ["disabled"], nd = ["disabled"], rd = {
	key: 0,
	class: "tw:grid tw:gap-2 tw:rounded-box tw:bg-base-200 tw:p-3"
}, id = { class: "tw:flex tw:items-center tw:justify-between tw:gap-2 tw:text-sm" }, ad = { class: "tw:dui-badge tw:dui-badge-sm tw:dui-badge-outline" }, od = ["value", "max"], sd = { class: "tw:opacity-70" }, cd = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "advance-characteristics-heading"
}, ld = { class: "tw:grid tw:size-11 tw:place-items-center tw:rounded-field tw:bg-base-300 tw:font-serif tw:text-xl tw:text-secondary" }, ud = { class: "tw:min-w-0" }, dd = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, fd = { class: "tw:block tw:opacity-65" }, pd = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "advance-skills-heading"
}, md = { class: "tw:grid tw:size-11 tw:place-items-center tw:rounded-field tw:bg-base-300 tw:font-serif tw:text-xl tw:text-secondary" }, hd = { class: "tw:min-w-0" }, gd = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, _d = { class: "tw:[overflow-wrap:anywhere]" }, vd = { class: "tw:block tw:opacity-65" }, yd = ["disabled", "onClick"], bd = {
	key: 1,
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "advance-talents-heading"
}, xd = { class: "tw:min-w-0" }, Sd = { class: "tw:block tw:[overflow-wrap:anywhere]" }, Cd = { class: "tw:opacity-65" }, wd = /* @__PURE__ */ L({
	__name: "AdvancementSection",
	props: {
		actions: {},
		character: {}
	},
	setup(e) {
		let t = e, { actionMessage: n, actionTone: r, isBusy: i, runPlayerAction: a } = wu(), o = J(() => Lu(t.character.career, t.character.characteristics, t.character.skills, t.character.talents));
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
		return (t, a) => (B(), V("section", Gu, [
			W(Cu, {
				eyebrow: "Spend experience",
				title: "Advancement"
			}),
			W(su, {
				message: N(n),
				tone: N(r)
			}, null, 8, ["message", "tone"]),
			U("div", Ku, [
				U("div", qu, [a[0] ||= U("div", { class: "tw:dui-stat-title" }, "Available", -1), U("div", Ju, E(e.character.experience.available), 1)]),
				U("div", Yu, [a[1] ||= U("div", { class: "tw:dui-stat-title" }, "Spent", -1), U("div", Xu, E(e.character.experience.spent), 1)]),
				U("div", Zu, [a[2] ||= U("div", { class: "tw:dui-stat-title" }, "Total", -1), U("div", Qu, E(e.character.experience.total), 1)])
			]),
			W(vu, {
				"description-html": e.character.career.descriptionHtml,
				subtitle: [e.character.career.group, e.character.career.level && `Level ${e.character.career.level}`].filter(Boolean).join(" · "),
				title: e.character.career.name
			}, {
				icon: F(() => [...a[3] ||= [U("i", {
					class: "fa-solid fa-briefcase",
					"aria-hidden": "true"
				}, null, -1)]]),
				badge: F(() => [U("span", { class: T(["tw:dui-badge tw:dui-badge-sm", e.character.career.complete ? "tw:dui-badge-success" : "tw:dui-badge-warning"]) }, E(e.character.career.complete ? "Complete" : "In progress"), 3)]),
				default: F(() => [e.character.career.talentNames.length ? (B(), V("p", $u, [a[4] ||= U("strong", null, "Career talents:", -1), G(" " + E(e.character.career.talentNames.join(", ")), 1)])) : K("", !0), U("div", ed, [U("button", {
					type: "button",
					class: "tw:dui-btn tw:min-h-11",
					disabled: N(i) || !e.character.career.id,
					onClick: d
				}, [a[5] ||= U("i", {
					class: "fa-solid fa-check-double",
					"aria-hidden": "true"
				}, null, -1), G(" Mark " + E(e.character.career.complete ? "incomplete" : "complete"), 1)], 8, td), U("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-secondary tw:min-h-11",
					disabled: N(i),
					onClick: f
				}, [...a[6] ||= [U("i", {
					class: "fa-solid fa-route",
					"aria-hidden": "true"
				}, null, -1), G(" Change career ", -1)]], 8, nd)])]),
				_: 1
			}, 8, [
				"description-html",
				"subtitle",
				"title"
			]),
			o.value.totalRequirements ? (B(), V("div", rd, [
				U("div", id, [a[7] ||= U("strong", null, "Career completion", -1), U("span", ad, E(o.value.completedRequirements) + "/" + E(o.value.totalRequirements) + " ready ", 1)]),
				U("progress", {
					class: "tw:dui-progress",
					value: o.value.completedRequirements,
					max: o.value.totalRequirements,
					"aria-label": "Career completion requirements"
				}, null, 8, od),
				U("small", sd, [G(E(o.value.remainingAdvances) + " characteristic and skill advances remain. ", 1), e.character.career.talentNames.length ? (B(), V(z, { key: 0 }, [G(E(o.value.talentComplete ? "Career talent owned." : "Choose 1 career talent."), 1)], 64)) : K("", !0)])
			])) : K("", !0),
			U("section", cd, [a[8] ||= U("h3", {
				id: "advance-characteristics-heading",
				class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
			}, " Career characteristics ", -1), (B(!0), V(z, null, R(o.value.characteristics, (e) => (B(), V("article", {
				key: e.characteristic.key,
				class: "tw:grid tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:rounded-box tw:bg-base-200 tw:p-3"
			}, [
				U("strong", ld, E(e.characteristic.value), 1),
				U("span", ud, [U("span", dd, [U("strong", null, E(e.characteristic.label), 1), U("span", { class: T(["tw:dui-badge tw:dui-badge-sm", e.complete ? "tw:dui-badge-success" : "tw:dui-badge-warning"]) }, E(e.complete ? "Complete" : `${e.advancesNeeded} needed`), 3)]), U("small", fd, E(e.characteristic.advances) + "/" + E(o.value.advanceTarget) + " career advances · " + E(e.characteristic.nextAdvanceCost) + " XP next", 1)]),
				W(Wu, {
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
			U("section", pd, [a[9] ||= U("h3", {
				id: "advance-skills-heading",
				class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
			}, " Career skills ", -1), (B(!0), V(z, null, R(o.value.skills, (e) => (B(), V("article", {
				key: e.name,
				class: T(["tw:grid tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:rounded-box tw:bg-base-200 tw:p-3", { "tw:opacity-65": !e.skill }])
			}, [
				U("strong", md, E(e.skill?.total ?? "—"), 1),
				U("span", hd, [U("span", gd, [U("strong", _d, E(e.name), 1), U("span", { class: T(["tw:dui-badge tw:dui-badge-sm", e.complete ? "tw:dui-badge-success" : "tw:dui-badge-warning"]) }, E(e.complete ? "Complete" : `${e.advancesNeeded} needed`), 3)]), U("small", vd, [e.skill ? (B(), V(z, { key: 0 }, [G(E(e.skill.advances) + "/" + E(o.value.advanceTarget) + " career advances · " + E(e.skill.nextAdvanceCost) + " XP next ", 1)], 64)) : (B(), V(z, { key: 1 }, [G("Not on character sheet")], 64))])]),
				e.skill ? (B(), H(Wu, {
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
				])) : (B(), V("button", {
					key: 1,
					type: "button",
					class: "tw:dui-btn tw:dui-btn-sm tw:min-h-11",
					disabled: N(i),
					onClick: (t) => l(e.name)
				}, " Add to sheet ", 8, yd))
			], 2))), 128))]),
			o.value.talents.length ? (B(), V("section", bd, [a[10] ||= U("h3", {
				id: "advance-talents-heading",
				class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
			}, " Owned career talents ", -1), (B(!0), V(z, null, R(o.value.talents, (e) => (B(), V("article", {
				key: e.id,
				class: "tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:rounded-box tw:bg-base-200 tw:p-3"
			}, [U("span", xd, [U("strong", Sd, E(e.name), 1), U("small", Cd, "Rank " + E(e.ranks) + " · " + E(e.nextAdvanceCost) + " XP next", 1)]), W(Wu, {
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
			])]))), 128))])) : K("", !0)
		]));
	}
}), Td = {
	class: "tw:flex tw:h-full tw:min-h-0 tw:flex-col",
	"aria-label": "Chat and results"
}, Ed = { class: "tw:grid tw:gap-2 tw:border-b tw:border-base-300 tw:bg-base-100 tw:p-3" }, Dd = { class: "tw:dui-chat-header tw:flex tw:gap-2 tw:text-xs" }, Od = ["datetime"], kd = {
	key: 0,
	class: "tw:mt-0 tw:mb-2 tw:text-xs tw:font-bold tw:text-secondary"
}, Ad = ["innerHTML"], jd = {
	key: 0,
	class: "tw:dui-alert tw:items-start",
	role: "status"
}, Md = /* @__PURE__ */ L({
	__name: "ChatSection",
	props: { activity: {} },
	setup(e) {
		let t = /* @__PURE__ */ M();
		lr(() => {
			wn(() => t.value?.scrollTo({ top: t.value.scrollHeight }));
		});
		function n(e) {
			return e ? new Intl.DateTimeFormat(void 0, {
				hour: "numeric",
				minute: "2-digit"
			}).format(e) : "";
		}
		return (r, i) => (B(), V("section", Td, [U("header", Ed, [W(Cu, {
			count: e.activity.length,
			eyebrow: "Live from the table",
			title: "Chat & Results"
		}, null, 8, ["count"]), i[0] ||= U("div", { class: "tw:flex tw:items-center tw:gap-2 tw:text-xs tw:opacity-70" }, [U("span", {
			class: "tw:dui-status tw:dui-status-success",
			"aria-hidden": "true"
		}), G(" New visible messages appear automatically ")], -1)]), U("div", {
			ref_key: "feed",
			ref: t,
			class: "tw:min-h-0 tw:flex-1 tw:overflow-y-auto tw:p-3",
			"aria-live": "polite"
		}, [(B(!0), V(z, null, R(e.activity, (e) => (B(), V("article", {
			key: e.id,
			class: T(["tw:dui-chat", e.isOwn ? "tw:dui-chat-end" : "tw:dui-chat-start"])
		}, [U("div", Dd, [U("strong", null, E(e.author), 1), e.timestamp ? (B(), V("time", {
			key: 0,
			datetime: new Date(e.timestamp).toISOString()
		}, E(n(e.timestamp)), 9, Od)) : K("", !0)]), U("div", { class: T(["tw:dui-chat-bubble tw:max-w-[92%] tw:bg-base-200 tw:text-base-content tw:shadow-md", { "tw:border tw:border-secondary/50": e.isOwn }]) }, [e.flavor ? (B(), V("p", kd, E(e.flavor), 1)) : K("", !0), U("div", {
			class: "player-chat-content",
			innerHTML: e.contentHtml
		}, null, 8, Ad)], 2)], 2))), 128)), e.activity.length === 0 ? (B(), V("div", jd, [...i[1] ||= [U("i", {
			class: "fa-solid fa-comments tw:mt-1",
			"aria-hidden": "true"
		}, null, -1), U("span", null, "No visible chat messages yet. Tests and rolls will appear here.", -1)]])) : K("", !0)], 512)]));
	}
}), Nd = {
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Combat"
}, Pd = {
	class: "tw:grid tw:grid-cols-2 tw:gap-2",
	"aria-label": "Combat state"
}, Fd = { class: "tw:rounded-box tw:bg-base-200 tw:p-3 tw:shadow-md" }, Id = { class: "tw:block tw:font-serif tw:text-xl tw:tabular-nums" }, Ld = { class: "tw:dui-join tw:mt-2 tw:w-full" }, Rd = ["disabled"], zd = ["disabled"], Bd = { class: "tw:rounded-box tw:bg-base-200 tw:p-3 tw:shadow-md" }, Vd = { class: "tw:block tw:font-serif tw:text-xl tw:tabular-nums" }, Hd = { class: "tw:dui-join tw:mt-2 tw:w-full" }, Ud = ["disabled"], Wd = ["disabled"], Gd = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "weapons-heading"
}, Kd = { class: "tw:flex tw:items-center tw:justify-between" }, qd = { class: "tw:dui-badge tw:dui-badge-sm" }, Jd = {
	key: 0,
	class: "tw:dui-badge tw:dui-badge-secondary tw:dui-badge-sm",
	title: "Equipped",
	"aria-label": "Equipped"
}, Yd = { class: "tw:m-0 tw:grid tw:grid-cols-2 tw:gap-2 tw:text-sm" }, Xd = { key: 0 }, Zd = { class: "tw:m-0 tw:font-bold" }, Qd = { key: 1 }, $d = { class: "tw:m-0 tw:font-bold" }, ef = { key: 2 }, tf = { class: "tw:m-0" }, nf = { key: 3 }, rf = { class: "tw:m-0" }, af = {
	key: 0,
	class: "tw:m-0 tw:text-sm"
}, of = { class: "tw:grid tw:gap-2 tw:min-[360px]:grid-cols-2" }, sf = ["disabled", "onClick"], cf = ["disabled", "onClick"], lf = {
	key: 0,
	class: "tw:m-0 tw:text-sm tw:opacity-65"
}, uf = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "armour-heading"
}, df = { class: "tw:grid tw:grid-cols-3 tw:gap-2" }, ff = { class: "tw:block tw:opacity-65" }, pf = { class: "tw:font-serif tw:text-xl tw:text-secondary" }, mf = {
	key: 0,
	class: "tw:dui-badge tw:dui-badge-secondary tw:dui-badge-sm"
}, hf = {
	key: 0,
	class: "tw:m-0 tw:text-sm"
}, gf = {
	key: 1,
	class: "tw:m-0 tw:text-sm"
}, _f = /* @__PURE__ */ L({
	__name: "CombatSection",
	props: {
		actions: {},
		character: {}
	},
	setup(e) {
		let t = e, { actionMessage: n, actionTone: r, isBusy: i, runPlayerAction: a } = wu(), o = J(() => t.character.resources.find((e) => e.key === "advantage"));
		function s(e, n) {
			a(() => t.actions.adjustResource(e, n), "Combat state updated.");
		}
		function c(e) {
			a(() => t.actions.rollWeapon(e.id), `${e.name} test sent to chat.`);
		}
		function l(e) {
			a(() => t.actions.reloadWeapon(e.id), `${e.name} reload updated.`);
		}
		return (t, a) => (B(), V("section", Nd, [
			W(Cu, {
				eyebrow: "At the ready",
				title: "Combat"
			}),
			W(su, {
				message: N(n),
				tone: N(r)
			}, null, 8, ["message", "tone"]),
			U("section", Pd, [U("article", Fd, [
				a[4] ||= U("span", { class: "tw:text-xs tw:font-bold tw:opacity-65" }, "Wounds", -1),
				U("strong", Id, E(e.character.wounds.current) + " / " + E(e.character.wounds.maximum), 1),
				U("div", Ld, [U("button", {
					class: "tw:dui-btn tw:dui-btn-sm tw:dui-join-item tw:min-h-11 tw:flex-1",
					disabled: N(i),
					onClick: a[0] ||= (e) => s("wounds", -1)
				}, " − ", 8, Rd), U("button", {
					class: "tw:dui-btn tw:dui-btn-sm tw:dui-join-item tw:min-h-11 tw:flex-1",
					disabled: N(i),
					onClick: a[1] ||= (e) => s("wounds", 1)
				}, " + ", 8, zd)])
			]), U("article", Bd, [
				a[5] ||= U("span", { class: "tw:text-xs tw:font-bold tw:opacity-65" }, "Advantage", -1),
				U("strong", Vd, E(o.value?.current ?? 0), 1),
				U("div", Hd, [U("button", {
					class: "tw:dui-btn tw:dui-btn-sm tw:dui-join-item tw:min-h-11 tw:flex-1",
					disabled: N(i),
					onClick: a[2] ||= (e) => s("advantage", -1)
				}, " − ", 8, Ud), U("button", {
					class: "tw:dui-btn tw:dui-btn-sm tw:dui-join-item tw:min-h-11 tw:flex-1",
					disabled: N(i),
					onClick: a[3] ||= (e) => s("advantage", 1)
				}, " + ", 8, Wd)])
			])]),
			U("section", Gd, [
				U("div", Kd, [a[6] ||= U("h3", {
					id: "weapons-heading",
					class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
				}, "Weapons", -1), U("span", qd, E(e.character.combat.weapons.length), 1)]),
				(B(!0), V(z, null, R(e.character.combat.weapons, (e) => (B(), H(vu, {
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
					badge: F(() => [e.equipped ? (B(), V("span", Jd, [...a[7] ||= [U("i", {
						class: "fa-solid fa-check",
						"aria-hidden": "true"
					}, null, -1)]])) : K("", !0)]),
					default: F(() => [
						U("dl", Yd, [
							e.ammunitionName ? (B(), V("div", Xd, [a[8] ||= U("dt", { class: "tw:opacity-60" }, "Ammunition", -1), U("dd", Zd, E(e.ammunitionName), 1)])) : K("", !0),
							e.range ? (B(), V("div", Qd, [a[9] ||= U("dt", { class: "tw:opacity-60" }, "Loaded", -1), U("dd", $d, E(e.loaded ? "Yes" : "No"), 1)])) : K("", !0),
							e.qualities.length ? (B(), V("div", ef, [a[10] ||= U("dt", { class: "tw:opacity-60" }, "Qualities", -1), U("dd", tf, E(e.qualities.join(", ")), 1)])) : K("", !0),
							e.flaws.length ? (B(), V("div", nf, [a[11] ||= U("dt", { class: "tw:opacity-60" }, "Flaws", -1), U("dd", rf, E(e.flaws.join(", ")), 1)])) : K("", !0)
						]),
						e.special ? (B(), V("p", af, [a[12] ||= U("strong", null, "Special:", -1), G(" " + E(e.special), 1)])) : K("", !0),
						U("div", of, [U("button", {
							type: "button",
							class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11",
							disabled: N(i),
							onClick: (t) => c(e)
						}, [...a[13] ||= [U("i", {
							class: "fa-solid fa-dice-d20",
							"aria-hidden": "true"
						}, null, -1), G(" Set up attack ", -1)]], 8, sf), e.range ? (B(), V("button", {
							key: 0,
							type: "button",
							class: "tw:dui-btn tw:min-h-11",
							disabled: N(i),
							onClick: (t) => l(e)
						}, [...a[14] ||= [U("i", {
							class: "fa-solid fa-rotate",
							"aria-hidden": "true"
						}, null, -1), G(" Reload ", -1)]], 8, cf)) : K("", !0)])
					]),
					_: 2
				}, 1032, [
					"description-html",
					"image-url",
					"subtitle",
					"title"
				]))), 128)),
				e.character.combat.weapons.length === 0 ? (B(), V("p", lf, " No weapons recorded. ")) : K("", !0)
			]),
			U("section", uf, [
				a[17] ||= U("h3", {
					id: "armour-heading",
					class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
				}, " Armour by location ", -1),
				U("div", df, [(B(!0), V(z, null, R(e.character.combat.armourByLocation, (e) => (B(), V("div", {
					key: e.key,
					class: "tw:rounded-field tw:bg-base-300 tw:p-2 tw:text-center"
				}, [U("small", ff, E(e.label), 1), U("strong", pf, E(e.armourPoints), 1)]))), 128))]),
				(B(!0), V(z, null, R(e.character.combat.armour, (e) => (B(), H(vu, {
					key: e.id,
					"description-html": e.descriptionHtml,
					"image-url": e.imageUrl,
					subtitle: e.locations.map((e) => `${e.label} ${e.armourPoints}`).join(" · "),
					title: e.name
				}, {
					badge: F(() => [e.worn ? (B(), V("span", mf, "Worn")) : K("", !0)]),
					default: F(() => [e.qualities.length ? (B(), V("p", hf, [a[15] ||= U("strong", null, "Qualities:", -1), G(" " + E(e.qualities.join(", ")), 1)])) : K("", !0), e.flaws.length ? (B(), V("p", gf, [a[16] ||= U("strong", null, "Flaws:", -1), G(" " + E(e.flaws.join(", ")), 1)])) : K("", !0)]),
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
}), vf = {
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Effects and health"
}, yf = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "conditions-heading"
}, bf = { class: "tw:grid tw:gap-2 tw:min-[360px]:grid-cols-2" }, xf = { class: "tw:min-w-0" }, Sf = { class: "tw:block tw:[overflow-wrap:anywhere]" }, Cf = { class: "tw:opacity-65" }, wf = { class: "tw:dui-join" }, Tf = [
	"disabled",
	"aria-label",
	"onClick"
], Ef = [
	"disabled",
	"aria-label",
	"onClick"
], Df = {
	key: 0,
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "extended-heading"
}, Of = { class: "tw:dui-badge tw:dui-badge-secondary tw:dui-badge-sm" }, kf = ["value", "max"], Af = ["disabled", "onClick"], jf = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "ailments-heading"
}, Mf = {
	key: 0,
	class: "tw:m-0 tw:text-sm tw:opacity-65"
}, Nf = {
	class: "tw:grid tw:gap-2",
	"aria-labelledby": "active-effects-heading"
}, Pf = {
	key: 0,
	class: "tw:dui-badge tw:dui-badge-ghost tw:dui-badge-sm"
}, Ff = {
	key: 0,
	class: "tw:m-0 tw:text-sm tw:opacity-65"
}, If = /* @__PURE__ */ L({
	__name: "EffectsSection",
	props: {
		actions: {},
		effects: {}
	},
	setup(e) {
		let t = e, { actionMessage: n, actionTone: r, isBusy: i, runPlayerAction: a } = wu();
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
		return (t, a) => (B(), V("section", vf, [
			W(Cu, {
				eyebrow: "What ails you",
				title: "Effects & Health"
			}),
			W(su, {
				message: N(n),
				tone: N(r)
			}, null, 8, ["message", "tone"]),
			U("section", yf, [a[0] ||= U("div", { class: "tw:flex tw:items-center tw:justify-between" }, [U("h3", {
				id: "conditions-heading",
				class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
			}, " Conditions "), U("span", { class: "tw:dui-badge tw:dui-badge-sm" }, "Immediate controls")], -1), U("div", bf, [(B(!0), V(z, null, R(e.effects.conditions, (e) => (B(), V("article", {
				key: e.id,
				class: T(["tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:rounded-box tw:border tw:border-base-300 tw:bg-base-200 tw:p-3", { "tw:border-secondary/60": e.value > 0 }])
			}, [U("div", xf, [U("strong", Sf, E(e.name), 1), U("small", Cf, "Current " + E(e.value), 1)]), U("div", wf, [U("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-sm tw:dui-join-item tw:min-h-11",
				disabled: N(i) || e.value <= 0,
				"aria-label": `Remove one ${e.name}`,
				onClick: (t) => o(e, -1)
			}, " − ", 8, Tf), U("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-sm tw:dui-join-item tw:min-h-11",
				disabled: N(i),
				"aria-label": `Add one ${e.name}`,
				onClick: (t) => o(e, 1)
			}, " + ", 8, Ef)])], 2))), 128))])]),
			e.effects.extendedTests.length ? (B(), V("section", Df, [a[2] ||= U("h3", {
				id: "extended-heading",
				class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
			}, " Extended tests ", -1), (B(!0), V(z, null, R(e.effects.extendedTests, (e) => (B(), H(vu, {
				key: e.id,
				"description-html": e.descriptionHtml,
				"image-url": e.imageUrl,
				subtitle: `${e.test} · ${e.difficulty || "Challenging"}`,
				title: e.name
			}, {
				badge: F(() => [U("span", Of, E(e.currentSL) + " / " + E(e.targetSL) + " SL", 1)]),
				default: F(() => [U("progress", {
					class: "tw:dui-progress tw:dui-progress-secondary",
					value: e.currentSL,
					max: Math.max(1, e.targetSL)
				}, null, 8, kf), U("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11 tw:w-full",
					disabled: N(i),
					onClick: (t) => s(e)
				}, [...a[1] ||= [U("i", {
					class: "fa-solid fa-dice-d20",
					"aria-hidden": "true"
				}, null, -1), G(" Continue test ", -1)]], 8, Af)]),
				_: 2
			}, 1032, [
				"description-html",
				"image-url",
				"subtitle",
				"title"
			]))), 128))])) : K("", !0),
			U("section", jf, [
				a[3] ||= U("h3", {
					id: "ailments-heading",
					class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
				}, " Injuries & Ailments ", -1),
				(B(!0), V(z, null, R(e.effects.ailments, (e) => (B(), H(vu, {
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
				e.effects.ailments.length === 0 ? (B(), V("p", Mf, " No injuries, diseases, mutations, critical wounds, or psychology entries. ")) : K("", !0)
			]),
			U("section", Nf, [
				a[4] ||= U("h3", {
					id: "active-effects-heading",
					class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold"
				}, " Active effects ", -1),
				(B(!0), V(z, null, R(e.effects.active, (e) => (B(), H(vu, {
					key: e.id,
					"description-html": e.descriptionHtml,
					"image-url": e.imageUrl,
					subtitle: e.source,
					title: e.name
				}, {
					badge: F(() => [e.disabled ? (B(), V("span", Pf, "Disabled")) : K("", !0)]),
					_: 2
				}, 1032, [
					"description-html",
					"image-url",
					"subtitle",
					"title"
				]))), 128)),
				e.effects.active.length === 0 ? (B(), V("p", Ff, " No additional active effects. ")) : K("", !0)
			])
		]));
	}
}), Lf = {
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Inventory item"
}, Rf = {
	class: "tw:dui-breadcrumbs tw:text-sm",
	"aria-label": "Inventory location"
}, zf = { class: "tw:dui-card tw:dui-card-border tw:overflow-hidden tw:bg-base-200 tw:shadow-lg" }, Bf = { class: "tw:relative tw:h-40 tw:bg-base-300" }, Vf = ["src", "alt"], Hf = {
	key: 1,
	class: "tw:grid tw:h-full tw:place-items-center tw:text-4xl tw:text-secondary"
}, Uf = {
	key: 2,
	class: "tw:dui-badge tw:dui-badge-secondary tw:absolute tw:top-3 tw:right-3"
}, Wf = { class: "tw:dui-card-body tw:gap-4 tw:p-4" }, Gf = { class: "tw:m-0 tw:text-xs tw:font-black tw:text-secondary tw:uppercase" }, Kf = { class: "tw:dui-card-title tw:font-serif tw:text-2xl" }, qf = { class: "tw:grid tw:grid-cols-2 tw:rounded-box tw:bg-base-300" }, Jf = { class: "tw:p-3" }, Yf = { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold" }, Xf = { class: "tw:p-3" }, Zf = { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold" }, Qf = { class: "tw:flex tw:gap-2" }, $f = ["disabled"], ep = ["disabled"], tp = { class: "tw:flex tw:gap-2" }, np = ["disabled"], rp = ["value"], ip = ["disabled"], ap = ["disabled"], op = /* @__PURE__ */ L({
	__name: "InventoryItemDetail",
	props: {
		actions: {},
		containers: {},
		item: {}
	},
	emits: ["back"],
	setup(e, { emit: t }) {
		let n = e, r = t, { actionMessage: i, actionTone: a, isBusy: o, runPlayerAction: s } = wu(), c = /* @__PURE__ */ M(n.item.quantity), l = /* @__PURE__ */ M(n.item.containerId), u = J(() => c.value !== n.item.quantity);
		Vn(() => [
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
		return (t, n) => (B(), V("article", Lf, [
			U("nav", Rf, [U("ul", null, [U("li", null, [U("button", {
				type: "button",
				class: "tw:font-bold tw:text-secondary",
				onClick: n[0] ||= (e) => r("back")
			}, " Inventory ")]), U("li", null, E(e.item.name), 1)])]),
			W(su, {
				message: N(i),
				tone: N(a)
			}, null, 8, ["message", "tone"]),
			U("section", zf, [U("figure", Bf, [e.item.imageUrl ? (B(), V("img", {
				key: 0,
				src: e.item.imageUrl,
				alt: `${e.item.name} illustration`,
				width: "400",
				height: "240",
				class: "tw:h-full tw:w-full tw:object-cover"
			}, null, 8, Vf)) : (B(), V("div", Hf, [...n[3] ||= [U("i", {
				class: "fa-solid fa-sack-xmark",
				"aria-hidden": "true"
			}, null, -1)]])), e.item.equipped ? (B(), V("span", Uf, "Equipped")) : K("", !0)]), U("div", Wf, [
				U("div", null, [U("p", Gf, E(e.item.category), 1), U("h2", Kf, E(e.item.name), 1)]),
				U("dl", qf, [U("div", Jf, [n[4] ||= U("dt", { class: "tw:text-xs tw:opacity-65" }, "Encumbrance", -1), U("dd", Yf, E(e.item.encumbrance), 1)]), U("div", Xf, [n[5] ||= U("dt", { class: "tw:text-xs tw:opacity-65" }, "Quantity", -1), U("dd", Zf, E(e.item.quantity), 1)])]),
				W(vu, {
					"description-html": e.item.descriptionHtml,
					title: "Full description"
				}, {
					icon: F(() => [...n[6] ||= [U("i", {
						class: "fa-solid fa-scroll",
						"aria-hidden": "true"
					}, null, -1)]]),
					_: 1
				}, 8, ["description-html"]),
				U("form", {
					class: "tw:grid tw:gap-2",
					onSubmit: Do(d, ["prevent"])
				}, [n[7] ||= U("label", {
					for: "inventory-item-quantity",
					class: "tw:text-sm tw:font-bold"
				}, "Quantity", -1), U("div", Qf, [I(U("input", {
					id: "inventory-item-quantity",
					"onUpdate:modelValue": n[1] ||= (e) => c.value = e,
					type: "number",
					min: "0",
					step: "1",
					inputmode: "numeric",
					class: "tw:dui-input tw:min-h-11 tw:min-w-0 tw:flex-1",
					disabled: N(o)
				}, null, 8, $f), [[
					vo,
					c.value,
					void 0,
					{ number: !0 }
				]]), U("button", {
					type: "submit",
					class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11",
					disabled: N(o) || !u.value
				}, " Apply ", 8, ep)])], 32),
				U("form", {
					class: "tw:grid tw:gap-2",
					onSubmit: Do(p, ["prevent"])
				}, [n[9] ||= U("label", {
					for: "inventory-container",
					class: "tw:text-sm tw:font-bold"
				}, "Stored in", -1), U("div", tp, [I(U("select", {
					id: "inventory-container",
					"onUpdate:modelValue": n[2] ||= (e) => l.value = e,
					class: "tw:dui-select tw:min-h-11 tw:min-w-0 tw:flex-1",
					disabled: N(o)
				}, [n[8] ||= U("option", { value: "" }, "Carried gear", -1), (B(!0), V(z, null, R(e.containers.filter((t) => t.id !== e.item.id), (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, E(e.name), 9, rp))), 128))], 8, np), [[xo, l.value]]), U("button", {
					type: "submit",
					class: "tw:dui-btn tw:min-h-11",
					disabled: N(o) || l.value === e.item.containerId
				}, " Move ", 8, ip)])], 32),
				e.item.canEquip ? (B(), V("button", {
					key: 0,
					type: "button",
					class: T(["tw:dui-btn tw:min-h-11 tw:w-full", e.item.equipped ? "tw:dui-btn-outline" : "tw:dui-btn-secondary"]),
					disabled: N(o),
					onClick: f
				}, [U("i", {
					class: T(e.item.equipped ? "fa-solid fa-box-archive" : "fa-solid fa-hand-fist"),
					"aria-hidden": "true"
				}, null, 2), G(" " + E(e.item.equipped ? "Unequip" : "Equip"), 1)], 10, ap)) : K("", !0),
				W(Wu, {
					body: `Delete ${e.item.name} from this character? This cannot be undone.`,
					"confirm-label": "Delete item",
					title: "Delete item?",
					"trigger-label": "Delete item",
					onConfirm: m
				}, null, 8, ["body"])
			])])
		]));
	}
}), sp = {
	key: 1,
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Inventory"
}, cp = { class: "tw:rounded-box tw:border tw:border-secondary/35 tw:bg-base-200 tw:p-3 tw:shadow-inner" }, lp = { class: "tw:flex tw:items-baseline tw:justify-between tw:gap-3" }, up = { class: "tw:font-serif tw:text-lg tw:tabular-nums" }, dp = ["value"], fp = { class: "tw:dui-collapse tw:dui-collapse-arrow tw:rounded-box tw:border tw:border-base-300 tw:bg-base-200" }, pp = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, mp = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, hp = ["disabled"], gp = { class: "tw:grid tw:gap-4" }, _p = { class: "tw:mb-2 tw:flex tw:items-center tw:justify-between tw:px-1" }, vp = { class: "tw:m-0 tw:font-serif tw:text-base tw:font-bold" }, yp = { class: "tw:text-xs tw:font-bold tw:opacity-55" }, bp = { class: "tw:dui-list tw:m-0 tw:overflow-hidden tw:rounded-box tw:border tw:border-base-300 tw:bg-base-200 tw:p-0 tw:[list-style:none]" }, xp = ["onClick"], Sp = { class: "tw:grid tw:size-11 tw:place-items-center tw:overflow-hidden tw:rounded-field tw:bg-base-300 tw:text-secondary" }, Cp = ["src"], wp = {
	key: 1,
	class: "fa-solid fa-sack-xmark",
	"aria-hidden": "true"
}, Tp = { class: "tw:min-w-0" }, Ep = { class: "tw:block tw:[overflow-wrap:anywhere]" }, Dp = { class: "tw:flex tw:flex-wrap tw:gap-x-2 tw:opacity-65" }, Op = {
	key: 0,
	class: "tw:font-bold tw:text-secondary"
}, kp = { class: "tw:grid tw:justify-items-end tw:gap-1" }, Ap = { class: "tw:dui-badge tw:dui-badge-sm tw:tabular-nums" }, jp = {
	key: 0,
	class: "tw:dui-alert",
	role: "status"
}, Mp = /* @__PURE__ */ L({
	__name: "InventorySection",
	props: {
		actions: {},
		inventory: {}
	},
	setup(e) {
		let t = e, n = dl(), { actionMessage: r, actionTone: i, isBusy: a, runPlayerAction: o } = wu(), s = /* @__PURE__ */ M(""), c = /* @__PURE__ */ M("trapping"), l = [
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
		], u = J(() => l.map((e) => ({
			...e,
			items: t.inventory.items.filter((t) => t.group === e.id)
		})).filter((e) => e.items.length > 0)), d = J(() => t.inventory.items.find((e) => e.id === n.selectedInventoryItemId)), f = J(() => t.inventory.items.filter((e) => e.type === "container")), p = J(() => t.inventory.maximumEncumbrance > 0 ? Math.max(0, Math.min(100, t.inventory.currentEncumbrance / t.inventory.maximumEncumbrance * 100)) : 0);
		function m() {
			o(() => t.actions.createInventoryItem({
				name: s.value,
				type: c.value
			}), `${s.value.trim()} created.`).then(() => {
				i.value === "success" && (s.value = "");
			});
		}
		return (t, o) => d.value ? (B(), H(op, {
			key: 0,
			actions: e.actions,
			containers: f.value,
			item: d.value,
			onBack: N(n).showInventoryList
		}, null, 8, [
			"actions",
			"containers",
			"item",
			"onBack"
		])) : (B(), V("section", sp, [
			W(Cu, {
				count: e.inventory.items.length,
				eyebrow: "Pack and purse",
				title: "Inventory"
			}, null, 8, ["count"]),
			W(su, {
				message: N(r),
				tone: N(i)
			}, null, 8, ["message", "tone"]),
			U("section", cp, [U("div", lp, [o[2] ||= U("h3", { class: "tw:m-0 tw:text-sm tw:font-bold" }, "Encumbrance", -1), U("strong", up, E(e.inventory.currentEncumbrance) + " / " + E(e.inventory.maximumEncumbrance), 1)]), U("progress", {
				class: T(["tw:dui-progress tw:mt-2", { "tw:dui-progress-warning": e.inventory.currentEncumbrance >= e.inventory.maximumEncumbrance }]),
				value: p.value,
				max: "100",
				"aria-label": "Current encumbrance"
			}, null, 10, dp)]),
			U("details", fp, [o[7] ||= U("summary", { class: "tw:dui-collapse-title tw:font-bold" }, "Create a simple item", -1), U("form", {
				class: "tw:dui-collapse-content tw:grid tw:gap-3",
				onSubmit: Do(m, ["prevent"])
			}, [
				U("label", pp, [o[3] ||= G(" Name ", -1), I(U("input", {
					"onUpdate:modelValue": o[0] ||= (e) => s.value = e,
					class: "tw:dui-input tw:min-h-11 tw:w-full",
					required: ""
				}, null, 512), [[vo, s.value]])]),
				U("label", mp, [o[5] ||= G(" Type ", -1), I(U("select", {
					"onUpdate:modelValue": o[1] ||= (e) => c.value = e,
					class: "tw:dui-select tw:min-h-11 tw:w-full"
				}, [...o[4] ||= [ea("<option value=\"trapping\">Trapping</option><option value=\"weapon\">Weapon</option><option value=\"armour\">Armour</option><option value=\"ammunition\">Ammunition</option><option value=\"container\">Container</option><option value=\"money\">Money</option>", 6)]], 512), [[xo, c.value]])]),
				U("button", {
					type: "submit",
					class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11",
					disabled: N(a) || !s.value.trim()
				}, [...o[6] ||= [U("i", {
					class: "fa-solid fa-plus",
					"aria-hidden": "true"
				}, null, -1), G(" Create item ", -1)]], 8, hp)
			], 32)]),
			U("div", gp, [(B(!0), V(z, null, R(u.value, (e) => (B(), V("section", { key: e.id }, [U("div", _p, [U("h3", vp, E(e.label), 1), U("span", yp, E(e.items.length), 1)]), U("ul", bp, [(B(!0), V(z, null, R(e.items, (e) => (B(), V("li", {
				key: e.id,
				class: "tw:dui-list-row tw:block tw:border-b tw:border-base-300 tw:p-0 last:tw:border-b-0"
			}, [U("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-ghost tw:grid tw:h-auto tw:min-h-16 tw:w-full tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:gap-3 tw:rounded-none tw:p-3 tw:text-left tw:text-base-content",
				onClick: (t) => N(n).selectInventoryItem(e.id)
			}, [
				U("span", Sp, [e.imageUrl ? (B(), V("img", {
					key: 0,
					src: e.imageUrl,
					alt: "",
					width: "44",
					height: "44",
					class: "tw:h-full tw:w-full tw:object-cover"
				}, null, 8, Cp)) : (B(), V("i", wp))]),
				U("span", Tp, [U("strong", Ep, E(e.name), 1), U("small", Dp, [
					U("span", null, E(e.category), 1),
					U("span", null, "Enc " + E(e.encumbrance), 1),
					e.equipped ? (B(), V("span", Op, "Equipped")) : K("", !0)
				])]),
				U("span", kp, [U("span", Ap, "×" + E(e.quantity), 1), o[8] ||= U("i", {
					class: "fa-solid fa-chevron-right tw:text-xs tw:opacity-45",
					"aria-hidden": "true"
				}, null, -1)])
			], 8, xp)]))), 128))])]))), 128))]),
			e.inventory.items.length === 0 ? (B(), V("div", jp, " No carried items yet. ")) : K("", !0)
		]));
	}
}), Np = {
	class: "player-journals tw:flex tw:h-full tw:min-h-0 tw:flex-col",
	"aria-label": "Journals"
}, Pp = { class: "tw:border-b tw:border-base-300 tw:p-3" }, Fp = { class: "tw:flex tw:items-center tw:justify-between" }, Ip = { class: "tw:dui-badge tw:dui-badge-sm" }, Lp = {
	key: 0,
	role: "alert",
	class: "tw:dui-alert tw:dui-alert-error tw:m-3 tw:text-sm"
}, Rp = { class: "tw:min-h-0 tw:flex-1" }, zp = /* @__PURE__ */ L({
	__name: "JournalsSection",
	props: {
		error: {},
		journals: {}
	},
	setup(e) {
		return (t, n) => (B(), V("section", Np, [
			U("header", Pp, [
				n[1] ||= U("p", { class: "tw:m-0 tw:text-xs tw:font-extrabold tw:text-secondary tw:uppercase" }, " Player handouts ", -1),
				U("div", Fp, [n[0] ||= U("h2", { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold" }, "Journals", -1), U("span", Ip, E(e.journals.length), 1)]),
				n[2] ||= U("p", { class: "tw:mt-1 tw:mb-0 tw:text-xs tw:opacity-65" }, " Only entries your user can observe are shown. ", -1)
			]),
			e.error ? (B(), V("div", Lp, [U("span", null, "Journals could not refresh: " + E(e.error), 1)])) : K("", !0),
			U("div", Rp, [W(hs, { journals: e.journals }, null, 8, ["journals"])])
		]));
	}
}), Bp = {
	class: "tw:grid tw:gap-3 tw:p-3",
	"aria-label": "Magic"
}, Vp = { class: "tw:grid tw:gap-2" }, Hp = { class: "tw:dui-badge tw:dui-badge-soft tw:dui-badge-sm" }, Up = { class: "tw:m-0 tw:grid tw:grid-cols-2 tw:gap-2 tw:text-sm" }, Wp = { key: 0 }, Gp = { class: "tw:m-0 tw:font-bold" }, Kp = { key: 1 }, qp = { class: "tw:m-0 tw:font-bold" }, Jp = { key: 2 }, Yp = { class: "tw:m-0 tw:font-bold" }, Xp = { key: 3 }, Zp = { class: "tw:m-0 tw:font-bold" }, Qp = { class: "tw:grid tw:grid-cols-2 tw:gap-2" }, $p = ["disabled", "onClick"], em = ["disabled", "onClick"], tm = {
	key: 0,
	class: "tw:dui-alert tw:items-start",
	role: "status"
}, nm = /* @__PURE__ */ L({
	__name: "MagicSection",
	props: {
		actions: {},
		spells: {}
	},
	setup(e) {
		let t = e, { actionMessage: n, actionTone: r, isBusy: i, runPlayerAction: a } = wu();
		function o(e, n) {
			a(() => t.actions.rollSpell(e.id, n), `${e.name} ${n === "cast" ? "casting" : "channelling"} result sent to chat.`);
		}
		return (t, a) => (B(), V("section", Bp, [
			W(Cu, {
				count: e.spells.length,
				eyebrow: "The Winds of Magic",
				title: "Spells"
			}, null, 8, ["count"]),
			W(su, {
				message: N(n),
				tone: N(r)
			}, null, 8, ["message", "tone"]),
			U("div", Vp, [(B(!0), V(z, null, R(e.spells, (e) => (B(), H(vu, {
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
				badge: F(() => [U("span", Hp, "SL " + E(e.channellingSL), 1)]),
				default: F(() => [U("dl", Up, [
					e.range ? (B(), V("div", Wp, [a[0] ||= U("dt", { class: "tw:opacity-60" }, "Range", -1), U("dd", Gp, E(e.range), 1)])) : K("", !0),
					e.target ? (B(), V("div", Kp, [a[1] ||= U("dt", { class: "tw:opacity-60" }, "Target", -1), U("dd", qp, E(e.target), 1)])) : K("", !0),
					e.duration ? (B(), V("div", Jp, [a[2] ||= U("dt", { class: "tw:opacity-60" }, "Duration", -1), U("dd", Yp, E(e.duration), 1)])) : K("", !0),
					e.damage ? (B(), V("div", Xp, [a[3] ||= U("dt", { class: "tw:opacity-60" }, "Damage", -1), U("dd", Zp, E(e.damage), 1)])) : K("", !0)
				]), U("div", Qp, [U("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11",
					disabled: N(i),
					onClick: (t) => o(e, "cast")
				}, [...a[4] ||= [U("i", {
					class: "fa-solid fa-wand-sparkles",
					"aria-hidden": "true"
				}, null, -1), G(" Cast ", -1)]], 8, $p), U("button", {
					type: "button",
					class: "tw:dui-btn tw:min-h-11",
					disabled: N(i),
					onClick: (t) => o(e, "channel")
				}, [...a[5] ||= [U("i", {
					class: "fa-solid fa-bolt",
					"aria-hidden": "true"
				}, null, -1), G(" Channel ", -1)]], 8, em)])]),
				_: 2
			}, 1032, [
				"description-html",
				"image-url",
				"subtitle",
				"title"
			]))), 128))]),
			e.spells.length === 0 ? (B(), V("div", tm, [...a[6] ||= [U("i", {
				class: "fa-solid fa-wand-sparkles tw:mt-1",
				"aria-hidden": "true"
			}, null, -1), U("span", null, "No spells are recorded on this character.", -1)]])) : K("", !0)
		]));
	}
}), rm = {
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Notes and character record"
}, im = { class: "tw:dui-card tw:dui-card-border tw:bg-base-200" }, am = { class: "tw:dui-card-body tw:gap-3 tw:p-4" }, om = { class: "tw:m-0 tw:grid tw:grid-cols-2 tw:gap-2" }, sm = { class: "tw:text-xs tw:opacity-60" }, cm = { class: "tw:m-0 tw:font-bold tw:[overflow-wrap:anywhere]" }, lm = { class: "tw:dui-card tw:dui-card-border tw:bg-base-200" }, um = { class: "tw:dui-card-body tw:gap-3 tw:p-4" }, dm = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, fm = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, pm = { class: "tw:dui-card tw:dui-card-border tw:bg-base-200" }, mm = { class: "tw:dui-card-body tw:gap-3 tw:p-4" }, hm = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, gm = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, _m = { class: "tw:dui-card tw:dui-card-border tw:bg-base-200" }, vm = { class: "tw:dui-card-body tw:gap-3 tw:p-4" }, ym = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, bm = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, xm = { class: "tw:grid tw:gap-1 tw:text-sm tw:font-bold" }, Sm = ["disabled"], Cm = /* @__PURE__ */ L({
	__name: "NotesSection",
	props: {
		actions: {},
		character: {}
	},
	setup(e) {
		let t = e, { actionMessage: n, actionTone: r, isBusy: i, runPlayerAction: a } = wu(), o = /* @__PURE__ */ Bt({ ...t.character.notes });
		Vn(() => t.character.notes, (e) => Object.assign(o, e), { deep: !0 });
		function s() {
			a(() => t.actions.updateNotes({ ...o }), "Character notes saved.");
		}
		return (t, a) => (B(), V("section", rm, [
			W(Cu, {
				eyebrow: "Your story",
				title: "Notes & Record"
			}),
			W(su, {
				message: N(n),
				tone: N(r)
			}, null, 8, ["message", "tone"]),
			U("section", im, [U("div", am, [a[7] ||= U("h3", { class: "tw:dui-card-title tw:font-serif" }, "Personal details", -1), U("dl", om, [(B(!0), V(z, null, R(e.character.personalDetails, (e) => (B(), V("div", {
				key: e.key,
				class: "tw:rounded-field tw:bg-base-300 tw:p-2"
			}, [U("dt", sm, E(e.label), 1), U("dd", cm, E(e.value || "—"), 1)]))), 128))])])]),
			U("form", {
				class: "tw:grid tw:gap-4",
				onSubmit: Do(s, ["prevent"])
			}, [
				U("section", lm, [U("div", um, [
					a[10] ||= U("h3", { class: "tw:dui-card-title tw:font-serif" }, "Biography & Motivation", -1),
					U("label", dm, [a[8] ||= G(" Motivation ", -1), I(U("input", {
						"onUpdate:modelValue": a[0] ||= (e) => o.motivation = e,
						class: "tw:dui-input tw:min-h-11 tw:w-full"
					}, null, 512), [[vo, o.motivation]])]),
					U("label", fm, [a[9] ||= G(" Biography ", -1), I(U("textarea", {
						"onUpdate:modelValue": a[1] ||= (e) => o.biography = e,
						rows: "8",
						class: "tw:dui-textarea tw:w-full"
					}, null, 512), [[vo, o.biography]])])
				])]),
				U("section", pm, [U("div", mm, [
					a[13] ||= U("h3", { class: "tw:dui-card-title tw:font-serif" }, "Personal ambitions", -1),
					U("label", hm, [a[11] ||= G("Short term", -1), I(U("textarea", {
						"onUpdate:modelValue": a[2] ||= (e) => o.personalShortTermAmbition = e,
						rows: "3",
						class: "tw:dui-textarea tw:w-full"
					}, null, 512), [[vo, o.personalShortTermAmbition]])]),
					U("label", gm, [a[12] ||= G("Long term", -1), I(U("textarea", {
						"onUpdate:modelValue": a[3] ||= (e) => o.personalLongTermAmbition = e,
						rows: "3",
						class: "tw:dui-textarea tw:w-full"
					}, null, 512), [[vo, o.personalLongTermAmbition]])])
				])]),
				U("section", _m, [U("div", vm, [
					a[17] ||= U("h3", { class: "tw:dui-card-title tw:font-serif" }, "Party ambitions", -1),
					U("label", ym, [a[14] ||= G("Party name", -1), I(U("input", {
						"onUpdate:modelValue": a[4] ||= (e) => o.partyName = e,
						class: "tw:dui-input tw:min-h-11 tw:w-full"
					}, null, 512), [[vo, o.partyName]])]),
					U("label", bm, [a[15] ||= G("Short term", -1), I(U("textarea", {
						"onUpdate:modelValue": a[5] ||= (e) => o.partyShortTermAmbition = e,
						rows: "3",
						class: "tw:dui-textarea tw:w-full"
					}, null, 512), [[vo, o.partyShortTermAmbition]])]),
					U("label", xm, [a[16] ||= G("Long term", -1), I(U("textarea", {
						"onUpdate:modelValue": a[6] ||= (e) => o.partyLongTermAmbition = e,
						rows: "3",
						class: "tw:dui-textarea tw:w-full"
					}, null, 512), [[vo, o.partyLongTermAmbition]])])
				])]),
				U("button", {
					type: "submit",
					class: "tw:dui-btn tw:dui-btn-primary tw:min-h-12 tw:w-full",
					disabled: N(i)
				}, [a[18] ||= U("i", {
					class: "fa-solid fa-floppy-disk",
					"aria-hidden": "true"
				}, null, -1), G(" " + E(N(i) ? "Saving…" : "Save notes"), 1)], 8, Sm)
			], 32)
		]));
	}
}), wm = {
	class: "tw:grid tw:gap-3 tw:p-3",
	"aria-label": "Religion"
}, Tm = {
	key: 0,
	class: "tw:dui-alert tw:items-center",
	role: "status"
}, Em = { class: "tw:grid tw:gap-2" }, Dm = { class: "tw:m-0 tw:grid tw:grid-cols-2 tw:gap-2 tw:text-sm" }, Om = { key: 0 }, km = { class: "tw:m-0 tw:font-bold" }, Am = { key: 1 }, jm = { class: "tw:m-0 tw:font-bold" }, Mm = { key: 2 }, Nm = { class: "tw:m-0 tw:font-bold" }, Pm = { key: 3 }, Fm = { class: "tw:m-0 tw:font-bold" }, Im = ["disabled", "onClick"], Lm = {
	key: 1,
	class: "tw:dui-alert tw:items-start",
	role: "status"
}, Rm = /* @__PURE__ */ L({
	__name: "ReligionSection",
	props: {
		actions: {},
		god: {},
		prayers: {}
	},
	setup(e) {
		let t = e, { actionMessage: n, actionTone: r, isBusy: i, runPlayerAction: a } = wu();
		function o(e) {
			a(() => t.actions.rollPrayer(e.id), `${e.name} result sent to chat.`);
		}
		return (t, a) => (B(), V("section", wm, [
			W(Cu, {
				count: e.prayers.length,
				eyebrow: "Faith and favour",
				title: "Religion"
			}, null, 8, ["count"]),
			e.god ? (B(), V("div", Tm, [a[1] ||= U("i", {
				class: "fa-solid fa-place-of-worship",
				"aria-hidden": "true"
			}, null, -1), U("span", null, [a[0] ||= U("strong", null, "Deity:", -1), G(" " + E(e.god), 1)])])) : K("", !0),
			W(su, {
				message: N(n),
				tone: N(r)
			}, null, 8, ["message", "tone"]),
			U("div", Em, [(B(!0), V(z, null, R(e.prayers, (t) => (B(), H(vu, {
				key: t.id,
				"description-html": t.descriptionHtml,
				"image-url": t.imageUrl,
				subtitle: [t.god || e.god, t.type].filter(Boolean).join(" · "),
				title: t.name
			}, {
				default: F(() => [U("dl", Dm, [
					t.range ? (B(), V("div", Om, [a[2] ||= U("dt", { class: "tw:opacity-60" }, "Range", -1), U("dd", km, E(t.range), 1)])) : K("", !0),
					t.target ? (B(), V("div", Am, [a[3] ||= U("dt", { class: "tw:opacity-60" }, "Target", -1), U("dd", jm, E(t.target), 1)])) : K("", !0),
					t.duration ? (B(), V("div", Mm, [a[4] ||= U("dt", { class: "tw:opacity-60" }, "Duration", -1), U("dd", Nm, E(t.duration), 1)])) : K("", !0),
					t.damage ? (B(), V("div", Pm, [a[5] ||= U("dt", { class: "tw:opacity-60" }, "Damage", -1), U("dd", Fm, E(t.damage), 1)])) : K("", !0)
				]), U("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11 tw:w-full",
					disabled: N(i),
					onClick: (e) => o(t)
				}, [...a[6] ||= [U("i", {
					class: "fa-solid fa-hands-praying",
					"aria-hidden": "true"
				}, null, -1), G(" Set up prayer test ", -1)]], 8, Im)]),
				_: 2
			}, 1032, [
				"description-html",
				"image-url",
				"subtitle",
				"title"
			]))), 128))]),
			e.prayers.length === 0 ? (B(), V("div", Lm, [...a[7] ||= [U("i", {
				class: "fa-solid fa-hands-praying tw:mt-1",
				"aria-hidden": "true"
			}, null, -1), U("span", null, "No prayers or blessings are recorded on this character.", -1)]])) : K("", !0)
		]));
	}
}), zm = {
	class: "tw:grid tw:gap-3 tw:p-3",
	"aria-label": "Skills"
}, Bm = { class: "tw:flex tw:min-h-11 tw:items-center tw:justify-between tw:gap-3" }, Vm = { class: "tw:grid tw:gap-2" }, Hm = { class: "tw:dui-badge tw:dui-badge-secondary tw:font-bold tw:tabular-nums" }, Um = ["disabled", "onClick"], Wm = {
	key: 0,
	class: "tw:m-0 tw:p-4 tw:text-center tw:opacity-70"
}, Gm = /* @__PURE__ */ L({
	__name: "SkillsSection",
	props: {
		actions: {},
		skills: {}
	},
	setup(e) {
		let t = e, n = dl(), { actionMessage: r, actionTone: i, isBusy: a, runPlayerAction: o } = wu(), s = J(() => {
			let e = n.trainedSkillsOnly ? t.skills.filter((e) => e.advances > 0) : t.skills, r = n.normalizedSkillFilter;
			return r ? e.filter((e) => e.name.toLocaleLowerCase().includes(r)) : e;
		});
		function c(e) {
			o(() => t.actions.rollSkill(e.id), `${e.name} test sent to chat.`);
		}
		return (e, t) => (B(), V("section", zm, [
			W(Cu, {
				count: s.value.length,
				eyebrow: "Tests at a glance",
				title: "Skills"
			}, null, 8, ["count"]),
			W(su, {
				message: N(r),
				tone: N(i)
			}, null, 8, ["message", "tone"]),
			t[4] ||= U("label", {
				for: "player-skill-filter",
				class: "tw:text-xs tw:font-bold"
			}, "Filter skills", -1),
			I(U("input", {
				id: "player-skill-filter",
				"onUpdate:modelValue": t[0] ||= (e) => N(n).skillFilter = e,
				type: "search",
				class: "tw:dui-input tw:min-h-11 tw:w-full",
				placeholder: "Name or specialization"
			}, null, 512), [[vo, N(n).skillFilter]]),
			U("label", Bm, [t[2] ||= U("span", { class: "tw:text-sm tw:font-bold" }, "Trained skills only", -1), I(U("input", {
				"onUpdate:modelValue": t[1] ||= (e) => N(n).trainedSkillsOnly = e,
				type: "checkbox",
				class: "tw:dui-toggle tw:dui-toggle-secondary"
			}, null, 512), [[yo, N(n).trainedSkillsOnly]])]),
			U("div", Vm, [(B(!0), V(z, null, R(s.value, (e) => (B(), H(vu, {
				key: e.id,
				"description-html": e.descriptionHtml,
				subtitle: `${e.characteristic} · ${e.advances} advances`,
				title: e.name
			}, {
				badge: F(() => [U("span", Hm, E(e.total), 1)]),
				default: F(() => [U("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11 tw:w-full",
					disabled: N(a),
					onClick: (t) => c(e)
				}, [t[3] ||= U("i", {
					class: "fa-solid fa-dice-d20",
					"aria-hidden": "true"
				}, null, -1), G(" Set up " + E(e.name) + " test ", 1)], 8, Um)]),
				_: 2
			}, 1032, [
				"description-html",
				"subtitle",
				"title"
			]))), 128))]),
			s.value.length === 0 ? (B(), V("p", Wm, " No skills match that filter. ")) : K("", !0)
		]));
	}
}), Km = {
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Status"
}, qm = { class: "tw:dui-card tw:dui-card-border tw:bg-base-200 tw:shadow-md" }, Jm = { class: "tw:dui-card-body tw:gap-2 tw:p-3" }, Ym = { class: "tw:grid tw:gap-2 tw:min-[360px]:grid-cols-2" }, Xm = { class: "tw:min-w-0" }, Zm = { class: "tw:block tw:text-xs tw:font-bold tw:opacity-65" }, Qm = { class: "tw:font-serif tw:text-xl tw:text-secondary tw:tabular-nums" }, $m = { class: "tw:dui-join" }, eh = [
	"disabled",
	"aria-label",
	"onClick"
], th = [
	"disabled",
	"aria-label",
	"onClick"
], nh = { class: "tw:dui-card tw:dui-card-border tw:bg-base-200 tw:shadow-md" }, rh = { class: "tw:dui-card-body tw:gap-3 tw:p-3" }, ih = { class: "tw:grid tw:grid-cols-2 tw:gap-2 tw:min-[360px]:grid-cols-5" }, ah = [
	"disabled",
	"aria-label",
	"onClick"
], oh = { class: "tw:text-xs tw:font-black tw:text-secondary" }, sh = { class: "tw:font-serif tw:text-xl tw:tabular-nums" }, ch = { class: "tw:text-[0.6rem] tw:opacity-65" }, lh = { class: "tw:dui-stats tw:grid tw:grid-cols-3 tw:bg-base-200 tw:shadow-md" }, uh = { class: "tw:dui-stat tw:min-w-0 tw:p-3" }, dh = { class: "tw:dui-stat-value tw:text-xl" }, fh = { class: "tw:dui-stat tw:min-w-0 tw:p-3" }, ph = { class: "tw:dui-stat-value tw:text-xl" }, mh = { class: "tw:dui-stat tw:min-w-0 tw:p-3" }, hh = { class: "tw:dui-stat-value tw:text-xl" }, gh = /* @__PURE__ */ L({
	__name: "StatusSection",
	props: {
		actions: {},
		character: {}
	},
	setup(e) {
		let t = e, { actionMessage: n, actionTone: r, isBusy: i, runPlayerAction: a } = wu(), o = J(() => [t.character.wounds, ...t.character.resources]);
		function s(e) {
			return e.maximum === void 0 ? String(e.current) : `${e.current} / ${e.maximum}`;
		}
		function c(e, n) {
			a(() => t.actions.adjustResource(e.key, n), `${e.label} ${n > 0 ? "increased" : "decreased"}.`);
		}
		function l(e, n) {
			a(() => t.actions.rollCharacteristic(e), `${n} test sent to chat.`);
		}
		return (t, a) => (B(), V("section", Km, [
			W(Cu, {
				eyebrow: "At the table",
				title: "Status & Controls"
			}),
			a[5] ||= U("p", { class: "tw:m-0 tw:text-sm tw:opacity-70" }, " Changes write to the character immediately and refresh every open mobile sheet. ", -1),
			W(su, {
				message: N(n),
				tone: N(r)
			}, null, 8, ["message", "tone"]),
			U("section", qm, [U("div", Jm, [a[0] ||= U("h3", { class: "tw:dui-card-title tw:font-serif" }, "State controls", -1), U("div", Ym, [(B(!0), V(z, null, R(o.value, (e) => (B(), V("article", {
				key: e.key,
				class: "tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:rounded-box tw:bg-base-300 tw:p-3"
			}, [U("div", Xm, [U("span", Zm, E(e.label), 1), U("strong", Qm, E(s(e)), 1)]), U("div", $m, [U("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-sm tw:dui-join-item tw:min-h-11",
				disabled: N(i) || e.current <= 0,
				"aria-label": `Decrease ${e.label}`,
				onClick: (t) => c(e, -1)
			}, " − ", 8, eh), U("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-sm tw:dui-join-item tw:min-h-11",
				disabled: N(i) || e.maximum !== void 0 && e.current >= e.maximum,
				"aria-label": `Increase ${e.label}`,
				onClick: (t) => c(e, 1)
			}, " + ", 8, th)])]))), 128))])])]),
			U("section", nh, [U("div", rh, [a[1] ||= U("div", { class: "tw:flex tw:items-center tw:justify-between tw:gap-2" }, [U("h3", { class: "tw:dui-card-title tw:font-serif" }, "Characteristics"), U("span", { class: "tw:dui-badge tw:dui-badge-sm" }, "Tap to test")], -1), U("div", ih, [(B(!0), V(z, null, R(e.character.characteristics, (e) => (B(), V("button", {
				key: e.key,
				type: "button",
				class: "tw:dui-btn tw:dui-btn-ghost tw:grid tw:h-auto tw:min-h-20 tw:min-w-0 tw:place-items-center tw:gap-0 tw:border tw:border-secondary/30 tw:bg-base-300 tw:px-1 tw:py-2 tw:text-base-content",
				disabled: N(i),
				"aria-label": `Set up ${e.label} test`,
				onClick: (t) => l(e.key, e.label)
			}, [
				U("span", oh, E(e.abbreviation), 1),
				U("strong", sh, E(e.value), 1),
				U("small", ch, "Bonus " + E(e.bonus), 1)
			], 8, ah))), 128))])])]),
			U("div", lh, [
				U("div", uh, [a[2] ||= U("div", { class: "tw:dui-stat-title" }, "Move", -1), U("div", dh, E(e.character.movement.move), 1)]),
				U("div", fh, [a[3] ||= U("div", { class: "tw:dui-stat-title" }, "Walk", -1), U("div", ph, E(e.character.movement.walk), 1)]),
				U("div", mh, [a[4] ||= U("div", { class: "tw:dui-stat-title" }, "Run", -1), U("div", hh, E(e.character.movement.run), 1)])
			])
		]));
	}
}), _h = /* @__PURE__ */ L({
	__name: "PlayerContent",
	props: {
		actions: {},
		activity: {},
		character: {},
		journalError: {},
		journals: {}
	},
	setup(e) {
		let t = dl();
		return (n, r) => (B(), V("div", { class: T(["tw:min-h-0 tw:flex-1 tw:overscroll-contain", ["chat", "journals"].includes(N(t).activeDestination) ? "tw:overflow-hidden" : "tw:overflow-y-auto"]) }, [N(t).activeDestination === "status" ? (B(), H(gh, {
			key: 0,
			actions: e.actions,
			character: e.character
		}, null, 8, ["actions", "character"])) : N(t).activeDestination === "skills" ? (B(), H(Gm, {
			key: 1,
			actions: e.actions,
			skills: e.character.skills
		}, null, 8, ["actions", "skills"])) : N(t).activeDestination === "abilities" ? (B(), H(Nu, {
			key: 2,
			actions: e.actions,
			talents: e.character.talents,
			traits: e.character.traits
		}, null, 8, [
			"actions",
			"talents",
			"traits"
		])) : N(t).activeDestination === "combat" ? (B(), H(_f, {
			key: 3,
			actions: e.actions,
			character: e.character
		}, null, 8, ["actions", "character"])) : N(t).activeDestination === "inventory" ? (B(), H(Mp, {
			key: 4,
			actions: e.actions,
			inventory: e.character.inventory
		}, null, 8, ["actions", "inventory"])) : N(t).activeDestination === "magic" ? (B(), H(nm, {
			key: 5,
			actions: e.actions,
			spells: e.character.magic.spells
		}, null, 8, ["actions", "spells"])) : N(t).activeDestination === "religion" ? (B(), H(Rm, {
			key: 6,
			actions: e.actions,
			god: e.character.god,
			prayers: e.character.magic.prayers
		}, null, 8, [
			"actions",
			"god",
			"prayers"
		])) : N(t).activeDestination === "effects" ? (B(), H(If, {
			key: 7,
			actions: e.actions,
			effects: e.character.effects
		}, null, 8, ["actions", "effects"])) : N(t).activeDestination === "notes" ? (B(), H(Cm, {
			key: 8,
			actions: e.actions,
			character: e.character
		}, null, 8, ["actions", "character"])) : N(t).activeDestination === "advancement" ? (B(), H(wd, {
			key: 9,
			actions: e.actions,
			character: e.character
		}, null, 8, ["actions", "character"])) : N(t).activeDestination === "chat" ? (B(), H(Md, {
			key: 10,
			activity: e.activity
		}, null, 8, ["activity"])) : (B(), H(zp, {
			key: 11,
			error: e.journalError,
			journals: e.journals
		}, null, 8, ["error", "journals"]))], 2));
	}
}), vh = { class: "tw:grid tw:flex-1 tw:place-items-start tw:p-4" }, yh = {
	key: 0,
	role: "alert",
	class: "tw:dui-alert tw:dui-alert-warning tw:dui-alert-vertical"
}, bh = {
	key: 1,
	role: "alert",
	class: "tw:dui-alert tw:dui-alert-error tw:dui-alert-vertical"
}, xh = { class: "tw:grid tw:gap-1" }, Sh = { class: "tw:m-0 tw:font-serif tw:text-xl tw:font-bold" }, Ch = { class: "tw:m-0" }, wh = /* @__PURE__ */ L({
	__name: "PlayerSheetStateAlert",
	props: { characterState: {} },
	setup(e) {
		return (t, n) => (B(), V("section", vh, [e.characterState.status === "missing" ? (B(), V("div", yh, [...n[0] ||= [U("i", {
			class: "fa-solid fa-user-shield",
			"aria-hidden": "true"
		}, null, -1), U("div", { class: "tw:grid tw:gap-1" }, [U("h1", { class: "tw:m-0 tw:font-serif tw:text-xl tw:font-bold" }, "No character assigned"), U("p", { class: "tw:m-0" }, " Ask your GM to assign your character to this Foundry user, then refresh. ")], -1)]])) : e.characterState.status === "unsupported" ? (B(), V("div", bh, [n[2] ||= U("i", {
			class: "fa-solid fa-triangle-exclamation",
			"aria-hidden": "true"
		}, null, -1), U("div", xh, [
			U("h1", Sh, E(e.characterState.actorName), 1),
			U("p", Ch, E(e.characterState.reason), 1),
			n[1] ||= U("p", { class: "tw:m-0" }, "Ask your GM to check the assigned character, then refresh.", -1)
		])])) : K("", !0)]));
	}
}), Th = { class: "tw:dui-drawer tw:mx-auto tw:h-full tw:min-h-0 tw:w-full tw:max-w-[430px] tw:overflow-hidden tw:[&_*]:box-border tw:[&_*::after]:box-border tw:[&_*::before]:box-border" }, Eh = ["disabled"], Dh = { class: "tw:dui-drawer-content tw:min-h-0" }, Oh = { class: "tw:flex tw:h-full tw:min-h-0 tw:w-full tw:flex-col tw:overflow-hidden tw:border-x tw:border-base-300 tw:bg-base-100 tw:text-base-content tw:shadow-2xl" }, kh = {
	key: 0,
	id: "player-adventure-menu-panel",
	class: "tw:dui-drawer-side tw:z-50"
}, Ah = /* @__PURE__ */ L({
	__name: "PlayerShellApp",
	props: {
		actions: {},
		activity: {},
		characterState: {},
		journalError: {},
		journals: {}
	},
	setup(e) {
		let t = e, n = dl(), r = J(() => t.characterState.status === "ready" ? t.characterState.character : void 0);
		return (t, i) => (B(), V("div", Th, [
			I(U("input", {
				id: "player-adventure-menu",
				"onUpdate:modelValue": i[0] ||= (e) => N(n).menuOpen = e,
				type: "checkbox",
				class: "tw:dui-drawer-toggle",
				disabled: !r.value,
				"aria-label": "Open adventure menu"
			}, null, 8, Eh), [[yo, N(n).menuOpen]]),
			U("div", Dh, [U("main", Oh, [W(Wl, { "character-state": e.characterState }, null, 8, ["character-state"]), e.characterState.status === "ready" ? r.value ? (B(), V(z, { key: 1 }, [W(Nl, { character: r.value }, null, 8, ["character"]), W(_h, {
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
			])], 64)) : K("", !0) : (B(), H(wh, {
				key: 0,
				"character-state": e.characterState
			}, null, 8, ["character-state"]))])]),
			r.value ? (B(), V("div", kh, [i[1] ||= U("label", {
				for: "player-adventure-menu",
				class: "tw:dui-drawer-overlay",
				"aria-label": "Close adventure menu"
			}, null, -1), W(au, { character: r.value }, null, 8, ["character"])])) : K("", !0)
		]));
	}
});
//#endregion
//#region src/functions/player-sheet/sorting.ts
function jh(e, t) {
	return e.name.localeCompare(t.name);
}
//#endregion
//#region src/functions/player-sheet/inventory.ts
var Mh = [
	"arms-armour",
	"packs-containers",
	"provisions",
	"tools-lore",
	"belongings",
	"coin"
];
function Nh(e, t = "") {
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
function Ph(e, t) {
	return Mh.indexOf(e.group) - Mh.indexOf(t.group) || e.name.localeCompare(t.name);
}
//#endregion
//#region src/module/wfrp4e/value-readers.ts
function X(e) {
	return typeof e == "object" && e ? e : void 0;
}
function Z(e) {
	return typeof e == "string" ? e : "";
}
function Fh(e) {
	return typeof e == "number" && Number.isFinite(e) ? e : void 0;
}
function Ih(e) {
	return e === !0;
}
function Lh(e) {
	let t = X(e);
	return t ? Object.entries(t).filter(([, e]) => Ih(e)).map(([e]) => e) : [];
}
function Rh(e) {
	if (typeof e == "number" && Number.isFinite(e)) return e;
	if (typeof e != "string" || !e.trim()) return;
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function Q(e, t, n) {
	return Z(X(e?.[t])?.[n]);
}
function zh(e, t, n) {
	return Fh(X(e?.[t])?.[n]);
}
function Bh(e, t, n) {
	return Rh(X(e?.[t])?.[n]);
}
function Vh(e, t, n) {
	return X(e?.[t])?.[n] === !0;
}
function Hh(e) {
	return Q(e, "description", "value");
}
//#endregion
//#region src/module/wfrp4e/player-inventory-adapter.ts
var Uh = new Set([
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
]);
function Wh(e, t) {
	let n = X(e.encumbrance), r = t.map(qh).filter((e) => e !== void 0).sort(Ph);
	return {
		currentEncumbrance: Rh(n?.current) ?? 0,
		items: r,
		maximumEncumbrance: Rh(n?.max) ?? 0
	};
}
async function Gh(e, t) {
	if (!Number.isInteger(t) || t < 0) throw Error("Quantity must be a whole number of zero or more.");
	await Yh(e).update({ "system.quantity.value": t });
}
async function Kh(e) {
	let t = Yh(e), n = X(t.system)?.toggleEquip;
	if (typeof n != "function") throw Error(`${t.name} cannot be equipped.`);
	await n.call(t.system);
}
function qh(e) {
	let t = X(e), n = Z(t?.type);
	if (!t || !Jh(n)) return;
	let r = Z(t.id) || Z(t._id), i = Z(t.name), a = X(t.system);
	if (!r || !i || !a) return;
	let o = Math.max(0, Math.floor(Bh(a, "quantity", "value") ?? 1)), s = Bh(a, "encumbrance", "value") ?? 0, { category: c, group: l } = Nh(n, Q(a, "trappingType", "value"));
	return {
		canEquip: typeof a.toggleEquip == "function",
		category: c,
		containerId: Q(a, "location", "value"),
		descriptionHtml: Hh(a),
		encumbrance: Bh(a, "encumbrance", "total") ?? s * o,
		equipped: Ih(a.equipped) || Ih(a.worn) || Vh(a, "equipped", "value") || Vh(a, "worn", "value"),
		group: l,
		id: r,
		imageUrl: Z(t.img),
		name: i,
		quantity: o,
		type: n
	};
}
function Jh(e) {
	return Uh.has(e);
}
function Yh(e) {
	let t = game.user.character;
	if (!t || t.type !== "character") throw Error("No supported player character is assigned.");
	let n = Xh(t.items).find((t) => Z(X(t)?.id) === e);
	if (!Zh(n)) throw Error("That inventory item is no longer available.");
	return n;
}
function Xh(e) {
	return Array.isArray(e.contents) ? e.contents : [];
}
function Zh(e) {
	let t = X(e);
	return t !== void 0 && Uh.has(Z(t.type)) && typeof t.update == "function";
}
//#endregion
//#region src/module/wfrp4e/player/data.ts
function Qh(e) {
	return (Array.isArray(e.items.contents) ? e.items.contents : []).filter(ig);
}
function $() {
	let e = game.user.character;
	if (!e || e.type !== "character") throw Error("No supported player character is assigned.");
	return e;
}
function $h(e, t, n) {
	let r = Qh(e).find((e) => e.id === t);
	if (!r || n && !n.includes(r.type)) throw Error("That character entry is no longer available.");
	return r;
}
function eg(e) {
	return X(X(e)?.system);
}
function tg(e) {
	let t = X(e);
	return Z(t?.id) || Z(t?._id);
}
function ng(e) {
	if (Array.isArray(e)) return e;
	let t = X(e);
	return Array.isArray(t?.contents) ? t.contents : [];
}
function rg(e) {
	return Array.isArray(e) ? e.map((e) => {
		if (typeof e == "string") return e;
		let t = X(e), n = Z(t?.display || t?.name || t?.label), r = Rh(t?.value);
		return n && r ? `${n} ${r}` : n;
	}).filter(Boolean) : [];
}
function ig(e) {
	let t = X(e);
	return !!(t && Z(t.id) && Z(t.type) && typeof t.update == "function");
}
//#endregion
//#region src/module/wfrp4e/player/abilities.ts
function ag(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.filter((e) => e.type === "talent")) {
		let e = eg(n), r = t.get(n.name), i = zh(e, "advances", "value") ?? 1;
		r ? (r.ranks += i, r.nextAdvanceCost = Fu(r.ranks)) : t.set(n.name, {
			descriptionHtml: Hh(e),
			id: n.id,
			name: n.name,
			nextAdvanceCost: Fu(i),
			ranks: i,
			tests: Q(e, "tests", "value")
		});
	}
	return [...t.values()].sort(jh);
}
function og(e) {
	return e.filter((e) => e.type === "trait").map((e) => {
		let t = eg(e);
		return {
			descriptionHtml: Hh(t),
			id: e.id,
			name: e.name,
			rollable: Vh(t, "rollable", "value"),
			specification: Q(t, "specification", "value")
		};
	}).sort(jh);
}
function sg(e, t) {
	let n = t.find((e) => {
		let t = eg(e);
		return e.type === "career" && (Vh(t, "current", "value") || Ih(t?.current));
	}), r = n ? eg(n) : void 0, i = X(e.career), a = n?.name || Z(i?.name) || Z(i?.value), o = lg([...rg(r?.skills), ...rg(r?.addedSkills)]);
	return {
		characteristicAdvances: cg(r?.characteristics),
		complete: Vh(r, "complete", "value") || Ih(r?.complete),
		descriptionHtml: Hh(r),
		group: Q(r, "careergroup", "value"),
		id: n?.id ?? "",
		level: Bh(r, "level", "value") ?? 0,
		name: a || "No current career",
		skillNames: o,
		talentNames: rg(r?.talents)
	};
}
function cg(e) {
	let t = rg(e);
	return t.length ? t : Lh(e);
}
function lg(e) {
	let t = /* @__PURE__ */ new Set();
	return e.filter((e) => {
		let n = e.trim().toLowerCase();
		return !n || t.has(n) ? !1 : (t.add(n), !0);
	});
}
//#endregion
//#region src/module/wfrp4e/player/advancement.ts
function ug(e, t, n = 0) {
	return Pu(dg()[t], e, n);
}
function dg() {
	return {
		characteristic: fg("characteristic"),
		skill: fg("skill")
	};
}
function fg(e) {
	let t = game.wfrp4e?.config?.xpCost?.[e];
	if (!Array.isArray(t) || t.length === 0 || !t.every((e) => typeof e == "number")) throw Error(`The WFRP ${e} advancement costs are unavailable.`);
	return t;
}
async function pg(e) {
	let t = $(), n = X(t.system), r = X(X(n?.characteristics)?.[e]);
	if (!r) throw Error("That characteristic is no longer available.");
	let i = Fh(r.advances) ?? 0, a = ug(i, "characteristic", Fh(r.costModifier) ?? 0), o = gg(n, a), s = {
		[`system.characteristics.${e}.advances`]: i + 1,
		"system.details.experience.spent": o
	};
	_g(s, t, a, e.toUpperCase(), o), await t.update(s, { skipExperienceChecks: !0 });
}
async function mg(e) {
	let t = $(), n = $h(t, e, ["skill"]), r = X(t.system), i = eg(n), a = zh(i, "advances", "value") ?? 0, o = ug(a, "skill", zh(i, "advances", "costModifier") ?? 0), s = gg(r, o), c = {
		items: [{
			_id: n.id,
			"system.advances.value": a + 1
		}],
		"system.details.experience.spent": s
	};
	_g(c, t, o, n.name, s), await t.update(c, { skipExperienceChecks: !0 });
}
async function hg(e) {
	let t = $(), n = $h(t, e, ["talent"]), r = X(t.system), i = Fu(Qh(t).filter((e) => e.type === "talent" && e.name === n.name).reduce((e, t) => e + (zh(eg(t), "advances", "value") ?? 1), 0)), a = gg(r, i), o = { "system.details.experience.spent": a };
	if (_g(o, t, i, n.name, a), !t.createEmbeddedDocuments || !n.toObject) throw Error("Talent advancement is unavailable.");
	await t.update(o, { skipExperienceChecks: !0 });
	let s = n.toObject();
	delete s._id, delete s.id, await t.createEmbeddedDocuments("Item", [s]);
}
function gg(e, t) {
	let n = X(X(e?.details)?.experience), r = Fh(n?.total), i = Fh(n?.spent);
	if (r === void 0 || i === void 0) throw Error("The character experience values are unavailable.");
	return Iu(r, i, t).spent;
}
function _g(e, t, n, r, i) {
	let a = X(t.system)?.addToExpLog;
	if (typeof a != "function") throw Error("The WFRP experience log is unavailable.");
	e["system.details.experience.log"] = a.call(t.system, n, r, i);
}
//#endregion
//#region src/module/wfrp4e/player/combat.ts
var vg = [
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
function yg(e, t) {
	return {
		armour: t.map(xg).filter((e) => e !== void 0),
		armourByLocation: Sg(e),
		weapons: t.map((e) => bg(e, t)).filter((e) => e !== void 0)
	};
}
function bg(e, t) {
	let n = X(e), r = eg(e);
	if (n?.type !== "weapon" || !r) return;
	let i = Q(r, "currentAmmo", "value") || Z(r.currentAmmo);
	return {
		ammunitionName: Z(X(t.find((e) => tg(e) === i))?.name),
		damage: Q(r, "damage", "value"),
		descriptionHtml: Hh(r),
		equipped: Ih(r.equipped) || Vh(r, "equipped", "value"),
		flaws: rg(X(r.flaws)?.value),
		id: tg(e),
		imageUrl: Z(n.img),
		loaded: Ih(X(r.loaded)?.value),
		name: Z(n.name),
		qualities: rg(X(r.qualities)?.value),
		range: Q(r, "range", "value"),
		reach: Q(r, "reach", "value"),
		special: Q(r, "special", "value")
	};
}
function xg(e) {
	let t = X(e), n = eg(e);
	if (t?.type !== "armour" || !n) return;
	let r = X(n.AP);
	return {
		descriptionHtml: Hh(n),
		flaws: rg(X(n.flaws)?.value),
		id: tg(e),
		imageUrl: Z(t.img),
		locations: vg.map(({ key: e, label: t }) => ({
			armourPoints: Rh(r?.[e]) ?? 0,
			key: e,
			label: t
		})).filter((e) => e.armourPoints > 0),
		name: Z(t.name),
		qualities: rg(X(n.qualities)?.value),
		worn: Ih(n.worn) || Vh(n, "worn", "value")
	};
}
function Sg(e) {
	let t = X(e.armour);
	return vg.map(({ key: e, label: n }) => ({
		armourPoints: Rh(X(t?.[e])?.value) ?? Rh(t?.[e]) ?? 0,
		key: e,
		label: n
	}));
}
//#endregion
//#region src/module/wfrp4e/player/details.ts
var Cg = [
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
function wg(e) {
	let t = X(e["personal-ambitions"]), n = X(e["party-ambitions"]);
	return {
		biography: Q(e, "biography", "value"),
		motivation: Q(e, "motivation", "value"),
		partyLongTermAmbition: Z(n?.["long-term"]),
		partyName: Z(n?.name),
		partyShortTermAmbition: Z(n?.["short-term"]),
		personalLongTermAmbition: Z(t?.["long-term"]),
		personalShortTermAmbition: Z(t?.["short-term"])
	};
}
function Tg(e) {
	return Cg.map(([t, n]) => ({
		key: t,
		label: n,
		value: Q(e, t, "value")
	}));
}
//#endregion
//#region src/module/wfrp4e/player/effects.ts
var Eg = [
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
], Dg = new Set([
	"critical",
	"disease",
	"injury",
	"mutation",
	"psychology"
]);
function Og(e, t) {
	let n = ng(e.appliedEffects ?? e.effects);
	return {
		active: n.map(Ag).filter((e) => e !== void 0).sort(jh),
		ailments: t.map(jg).filter((e) => e !== void 0).sort(jh),
		conditions: kg(n),
		extendedTests: t.map(Ng).filter((e) => e !== void 0).sort(jh)
	};
}
function kg(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = X(n);
		if (!e || e.isCondition !== !0) continue;
		let r = X(X(e.system)?.condition), i = Z(e.conditionId) || Z(e.key) || Z(e.statusId);
		i && t.set(i, {
			id: i,
			imageUrl: Z(e.img || e.icon),
			name: Z(e.name) || Pg(i),
			value: Rh(e.conditionValue) ?? Rh(r?.value) ?? 1
		});
	}
	return Eg.map(([e, n]) => t.get(e) ?? {
		id: e,
		imageUrl: "",
		name: n,
		value: 0
	});
}
function Ag(e) {
	let t = X(e);
	if (!t || t.isCondition === !0 || t.show === !1) return;
	let n = Z(t.id), r = Z(t.name);
	if (!n || !r) return;
	let i = X(t.system);
	return {
		descriptionHtml: Z(t.description) || Hh(i) || Z(i?.description),
		disabled: Ih(t.disabled),
		id: n,
		imageUrl: Z(t.img || t.icon),
		name: r,
		source: Z(t.sourceName || t.origin)
	};
}
function jg(e) {
	let t = X(e), n = Z(t?.type), r = eg(e);
	if (!(!t || !r || !Dg.has(n))) return {
		descriptionHtml: Hh(r),
		details: Mg(n, r),
		id: tg(e),
		imageUrl: Z(t.img),
		name: Z(t.name),
		type: Pg(n)
	};
}
function Mg(e, t) {
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
function Ng(e) {
	let t = X(e), n = eg(e);
	if (t?.type !== "extendedTest" || !n) return;
	let r = X(n.SL);
	return {
		currentSL: Rh(r?.current) ?? 0,
		descriptionHtml: Hh(n),
		difficulty: Q(n, "difficulty", "value"),
		id: tg(e),
		imageUrl: Z(t.img),
		name: Z(t.name),
		targetSL: Rh(r?.target) ?? 0,
		test: Q(n, "test", "value")
	};
}
function Pg(e) {
	return e.replaceAll(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (e) => e.toUpperCase());
}
//#endregion
//#region src/module/wfrp4e/player/magic.ts
function Fg(e) {
	return {
		prayers: e.map(Lg).filter((e) => e !== void 0).sort(jh),
		spells: e.map(Ig).filter((e) => e !== void 0).sort(jh)
	};
}
function Ig(e) {
	let t = X(e), n = eg(e);
	if (!(t?.type !== "spell" || !n)) return {
		castingNumber: zh(n, "cn", "value") ?? 0,
		channellingSL: zh(n, "cn", "SL") ?? 0,
		damage: Q(n, "damage", "value"),
		descriptionHtml: Hh(n),
		duration: Q(n, "duration", "value"),
		id: tg(e),
		imageUrl: Z(t.img),
		lore: Q(n, "lore", "value"),
		memorized: Vh(n, "memorized", "value"),
		name: Z(t.name),
		range: Q(n, "range", "value"),
		target: Q(n, "target", "value")
	};
}
function Lg(e) {
	let t = X(e), n = eg(e);
	if (!(t?.type !== "prayer" || !n)) return {
		damage: Q(n, "damage", "value"),
		descriptionHtml: Hh(n),
		duration: Q(n, "duration", "value"),
		god: Q(n, "god", "value"),
		id: tg(e),
		imageUrl: Z(t.img),
		name: Z(t.name),
		range: Q(n, "range", "value"),
		target: Q(n, "target", "value"),
		type: Q(n, "type", "value")
	};
}
//#endregion
//#region src/module/wfrp4e/player-character-adapter.ts
var Rg = [
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
function zg() {
	let e = game.user.character;
	if (!e) return { status: "missing" };
	if (e.type !== "character") return {
		actorName: e.name,
		reason: "The assigned actor is not a WFRP4e player character.",
		status: "unsupported"
	};
	let t;
	try {
		t = Bg(e, dg());
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
function Bg(e, t) {
	let n = X(e.system), r = X(n?.status), i = X(n?.details), a = Ug(r, "wounds", "Wounds");
	if (!n || !r || !i || !a) return;
	let o = Vg(n, t.characteristic);
	if (!o) return;
	let s = Qh(e);
	return {
		career: sg(i, s),
		characteristics: o,
		combat: yg(r, s),
		effects: Og(e, s),
		experience: Wg(i),
		god: Q(i, "god", "value"),
		id: e.id,
		imageUrl: e.img,
		inventory: Wh(r, s),
		magic: Fg(s),
		movement: {
			move: Bh(i, "move", "value") ?? 0,
			run: Bh(i, "move", "run") ?? 0,
			walk: Bh(i, "move", "walk") ?? 0
		},
		name: e.name,
		notes: wg(i),
		personalDetails: Tg(i),
		resources: Hg(r),
		skills: Gg(s, o, t.skill),
		species: Q(i, "species", "value"),
		talents: ag(s),
		traits: og(s),
		wounds: a
	};
}
function Vg(e, t) {
	let n = X(e.characteristics);
	if (!n) return;
	let r = Rg.map(([e, r, i]) => {
		let a = X(n[r]), o = Fh(a?.value);
		return o === void 0 ? void 0 : {
			abbreviation: e,
			advances: Fh(a?.advances) ?? 0,
			bonus: Fh(a?.bonus) ?? Math.floor(o / 10),
			key: r,
			label: i,
			nextAdvanceCost: Pu(t, Fh(a?.advances) ?? 0, Fh(a?.costModifier) ?? 0),
			value: o
		};
	}).filter((e) => e !== void 0);
	return r.length === Rg.length ? r : void 0;
}
function Hg(e) {
	return [
		Ug(e, "fortune", "Fortune"),
		Ug(e, "fate", "Fate"),
		Ug(e, "resolve", "Resolve"),
		Ug(e, "resilience", "Resilience"),
		Ug(e, "advantage", "Advantage"),
		Ug(e, "criticalWounds", "Critical wounds"),
		Ug(e, "corruption", "Corruption"),
		Ug(e, "sin", "Sin")
	].filter((e) => e !== void 0);
}
function Ug(e, t, n) {
	let r = X(e?.[t]), i = Rh(r?.value);
	if (i === void 0) return;
	let a = Rh(r?.max);
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
function Wg(e) {
	let t = X(e.experience), n = Fh(t?.total) ?? 0, r = Fh(t?.spent) ?? 0;
	return {
		available: Math.max(0, n - r),
		spent: r,
		total: n
	};
}
function Gg(e, t, n) {
	let r = new Map(t.map((e) => [e.key, e.value]));
	return e.filter((e) => e.type === "skill").map((e) => {
		let t = eg(e), i = Q(t, "characteristic", "value"), a = zh(t, "advances", "value") ?? 0, o = zh(t, "modifier", "value") ?? 0;
		return {
			advances: a,
			characteristic: i.toUpperCase(),
			descriptionHtml: Hh(t),
			id: e.id,
			name: e.name,
			nextAdvanceCost: Pu(n, a, zh(t, "advances", "costModifier") ?? 0),
			total: zh(t, "total", "value") ?? (r.get(i) ?? 0) + a + o
		};
	}).sort(jh);
}
//#endregion
//#region src/functions/player-sheet/resources.ts
function Kg(e, t, n) {
	if (![e, t].every(Number.isFinite) || n !== void 0 && !Number.isFinite(n)) throw Error("The resource values are invalid.");
	return Math.max(0, Math.min(n ?? Infinity, e + t));
}
//#endregion
//#region src/module/wfrp4e/player/notes.ts
async function qg(e) {
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
//#region src/module/wfrp4e/player/actions.ts
var Jg = new Set([
	"corruption",
	"criticalWounds",
	"fate",
	"fortune",
	"resilience",
	"resolve",
	"sin"
]), Yg = {
	addCondition: async (e) => {
		let t = $();
		i_(t.addCondition, "Condition controls are unavailable."), await t.addCondition(e, 1);
	},
	addCareerSkill: Xg,
	adjustResource: Qg,
	advanceCharacteristic: pg,
	advanceSkill: mg,
	advanceTalent: hg,
	createInventoryItem: $g,
	deleteInventoryItem: e_,
	moveInventoryItem: t_,
	openCareerSelector: r_,
	reloadWeapon: n_,
	removeCondition: async (e) => {
		let t = $();
		i_(t.removeCondition, "Condition controls are unavailable."), await t.removeCondition(e, 1);
	},
	rollCharacteristic: async (e) => {
		let t = $();
		i_(t.setupCharacteristic, "Characteristic tests are unavailable."), await Zg(() => t.setupCharacteristic(e));
	},
	rollExtendedTest: async (e) => {
		let t = $(), n = $h(t, e, ["extendedTest"]);
		i_(t.setupExtendedTest, "Extended tests are unavailable."), await t.setupExtendedTest(n);
	},
	rollPrayer: async (e) => {
		let t = $(), n = $h(t, e, ["prayer"]);
		i_(t.setupPrayer, "Prayer tests are unavailable."), await Zg(() => t.setupPrayer(n));
	},
	rollSkill: async (e) => {
		let t = $(), n = $h(t, e, ["skill"]);
		i_(t.setupSkill, "Skill tests are unavailable."), await Zg(() => t.setupSkill(n));
	},
	rollSpell: async (e, t) => {
		let n = $(), r = $h(n, e, ["spell"]), i = t === "channel" ? n.setupChannell : n.setupCast;
		i_(i, `${t === "channel" ? "Channelling" : "Casting"} is unavailable.`), await Zg(() => i.call(n, r));
	},
	rollTrait: async (e) => {
		let t = $(), n = $h(t, e, ["trait"]);
		i_(t.setupTrait, "Trait tests are unavailable."), await Zg(() => t.setupTrait(n));
	},
	rollWeapon: async (e) => {
		let t = $(), n = $h(t, e, ["weapon"]);
		i_(t.setupWeapon, "Weapon tests are unavailable."), await Zg(() => t.setupWeapon(n));
	},
	setCareerComplete: async (e, t) => {
		await $h($(), e, ["career"]).update({ "system.complete.value": t });
	},
	toggleInventoryEquipped: Kh,
	updateInventoryQuantity: Gh,
	updateNotes: qg
};
async function Xg(e) {
	let t = $(), n = e.trim().toLowerCase();
	if (!n) throw Error("That career skill is unavailable.");
	if (Qh(t).some((e) => e.type === "skill" && e.name.trim().toLowerCase() === n)) return;
	let r = game.wfrp4e?.utility?.findSkill;
	i_(r, "The WFRP skill library is unavailable.");
	let i = (await r(e)).toObject?.();
	if (!i) throw Error(`The ${e} skill could not be prepared.`);
	i_(t.createEmbeddedDocuments, "Adding skills is unavailable."), await t.createEmbeddedDocuments("Item", [i], { career: !0 });
}
async function Zg(e) {
	let t = await e();
	if (!t || typeof t.roll != "function") throw Error("The WFRP test setup was cancelled or unavailable.");
	await t.roll();
}
async function Qg(e, t) {
	let n = $();
	if (e === "wounds") {
		i_(n.modifyWounds, "Wound controls are unavailable."), await n.modifyWounds(t);
		return;
	}
	if (e === "advantage") {
		i_(n.modifyAdvantage, "Advantage controls are unavailable."), await n.modifyAdvantage(t);
		return;
	}
	if (!Jg.has(e)) throw Error("That resource cannot be changed here.");
	let r = X(X(X(n.system)?.status)?.[e]), i = Rh(r?.value), a = Rh(r?.max);
	if (i === void 0) throw Error("That resource is no longer available.");
	let o = Kg(i, t, a);
	await n.update({ [`system.status.${e}.value`]: o });
}
async function $g(e) {
	let t = $(), n = e.name.trim();
	if (!n) throw Error("Enter a name for the new item.");
	i_(t.createEmbeddedDocuments, "Creating items is unavailable."), await t.createEmbeddedDocuments("Item", [{
		name: n,
		type: e.type
	}]);
}
async function e_(e) {
	let t = $();
	$h(t, e, [
		"ammunition",
		"armour",
		"container",
		"money",
		"trapping",
		"weapon"
	]), i_(t.deleteEmbeddedDocuments, "Deleting items is unavailable."), await t.deleteEmbeddedDocuments("Item", [e]);
}
async function t_(e, t) {
	let n = $(), r = $h(n, e);
	t && $h(n, t, ["container"]), await r.update({ "system.location.value": t });
}
async function n_(e) {
	let t = $(), n = $h(t, e, ["weapon"]);
	if (t.rollReloadTest) await t.rollReloadTest(n);
	else if (t.checkReloadExtendedTest) await t.checkReloadExtendedTest(n, t);
	else throw Error("Reload tests are unavailable.");
}
async function r_() {
	let e = $(), t = game.wfrp4e?.apps?.CareerSelector;
	if (!t) throw Error("The WFRP career selector is unavailable.");
	await Promise.resolve(new t(e).render(!0));
}
function i_(e, t) {
	if (typeof e != "function") throw Error(t);
}
//#endregion
//#region src/module/wfrp4e/player/activity.ts
function a_() {
	return ng(game.messages).map(o_).filter((e) => e !== void 0).sort((e, t) => e.timestamp - t.timestamp).slice(-80);
}
function o_(e) {
	let t = X(e);
	if (!t || t.visible !== !0 || t.isContentVisible !== !0) return;
	let n = Z(t.id), r = Z(t.content);
	if (!n || !r) return;
	let i = X(t.author ?? t.user), a = X(t.speaker), o = Z(i?.id);
	return {
		author: Z(a?.alias) || Z(i?.name) || "The Old World",
		contentHtml: r,
		flavor: Z(t.flavor),
		id: n,
		isOwn: o ? o === game.user.id : Ih(t.isAuthor),
		timestamp: Rh(t.timestamp ?? t.time) ?? 0
	};
}
//#endregion
//#region src/module/apps/player-shell/PlayerShellApplication.ts
var s_ = class extends il {
	#e = [];
	#t = "";
	#n = [];
	#r = !1;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${Y}-player-shell`,
		classes: [Y, al],
		tag: "section",
		window: {
			title: `${As} Character`,
			icon: "fa-solid fa-shield-halved",
			resizable: !1
		},
		position: {
			left: 0,
			top: 0,
			width: 430,
			height: 800
		}
	};
	getVueComponent() {
		return Ah;
	}
	getVueProps() {
		return {
			actions: Yg,
			activity: a_(),
			characterState: zg(),
			journalError: this.#t,
			journals: this.#n
		};
	}
	async _renderHTML(e, t) {
		let [n] = await Promise.all([super._renderHTML(e, t), this.loadJournals()]);
		return n;
	}
	_replaceHTML(e, t, n) {
		cl(this), super._replaceHTML(e, t, n), this.registerRefreshHooks();
	}
	async _preClose(e) {
		for (let [e, t] of this.#e) Hooks.off(e, t);
		this.#e = [], ll(this), await super._preClose(e);
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
			this.#n = await Is(), this.#t = "";
		} catch (e) {
			this.#n = [], this.#t = e instanceof Error ? e.message : "The available journals could not be loaded.", console.error(`${As} could not load player journals.`, e);
		} finally {
			this.#r = !0;
		}
	}
}, c_ = { class: "starter-workbench" }, l_ = {
	class: "starter-workbench__panel",
	"aria-labelledby": "status-heading"
}, u_ = { class: "starter-workbench__facts" }, d_ = /* @__PURE__ */ L({
	__name: "StarterWorkbenchApp",
	props: {
		hostName: { default: "Unknown user" },
		systemId: { default: "preview" }
	},
	setup(e) {
		return (t, n) => (B(), V("main", c_, [
			n[3] ||= U("header", { class: "starter-workbench__header" }, [U("p", { class: "starter-workbench__eyebrow" }, "Drowsy's WFRP4e On The Go"), U("h1", null, "Diagnostic Workbench")], -1),
			U("section", l_, [n[2] ||= U("h2", { id: "status-heading" }, "Runtime Context", -1), U("dl", u_, [U("div", null, [n[0] ||= U("dt", null, "User", -1), U("dd", null, E(e.hostName), 1)]), U("div", null, [n[1] ||= U("dt", null, "System", -1), U("dd", null, E(e.systemId), 1)])])]),
			n[4] ||= U("section", {
				class: "starter-workbench__panel",
				"aria-labelledby": "next-heading"
			}, [U("h2", { id: "next-heading" }, "Current Slice"), U("p", null, " On The Go now routes enabled GMs to mobile prep and enabled players to a read-only assigned character sheet. Keep Foundry document work in the module layer, then pass plain data into Vue. ")], -1)
		]));
	}
}), f_ = class extends il {
	static DEFAULT_OPTIONS = {
		id: `${Y}-starter-workbench`,
		tag: "section",
		window: {
			title: `${As} Diagnostic Workbench`,
			icon: "fa-solid fa-flask",
			resizable: !0
		},
		position: {
			width: 720,
			height: "auto"
		}
	};
	getVueComponent() {
		return d_;
	}
	getVueProps() {
		return {
			hostName: game.user.name,
			systemId: game.system.id
		};
	}
};
//#endregion
//#region src/module/api/create-module-api.ts
function p_() {
	return {
		getMobileUiMode: gc,
		isMobileUiActive() {
			return gc() !== "none";
		},
		async openDiagnosticWorkbench() {
			await new f_().render(!0);
		},
		async openMobileJournals() {
			await new ul().render(!0);
		},
		async openMobileUi() {
			await new (game.user.isGM ? ul : s_)().render(!0);
		},
		async openPlayerUi() {
			await new s_().render(!0);
		}
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function m_() {
	let e = game.modules.get(Y);
	if (!e) throw Error(`Foundry module registry entry was not found for ${Y}.`);
	e.api = p_();
}
//#endregion
//#region src/module/open-mobile-ui.ts
async function h_() {
	let e = gc();
	e === "gm" && await new ul().render(!0), e === "player" && await new s_().render(!0);
}
//#endregion
//#region src/view/apps/activation-settings/ActivationSettingsApp.vue?vue&type=script&setup=true&lang.ts
var g_ = { class: "wfrp-on-the-go-settings" }, __ = {
	key: 0,
	class: "wfrp-on-the-go-settings__users"
}, v_ = ["value"], y_ = {
	key: 1,
	class: "wfrp-on-the-go-settings__empty"
}, b_ = { class: "wfrp-on-the-go-settings__actions" }, x_ = { "aria-live": "polite" }, S_ = ["disabled"], C_ = /* @__PURE__ */ L({
	__name: "ActivationSettingsApp",
	props: {
		saveEnabledUserIds: { type: Function },
		users: {}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ M(s()), r = /* @__PURE__ */ M(!1), i = /* @__PURE__ */ M(!1), a = J(() => t.users.length > 0);
		Vn(() => t.users, () => {
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
		return (t, s) => (B(), V("main", g_, [s[1] ||= U("header", { class: "wfrp-on-the-go-settings__header" }, [U("p", { class: "wfrp-on-the-go-settings__eyebrow" }, "Drowsy's WFRP4e On The Go"), U("h1", null, "Enabled Users")], -1), U("form", {
			class: "wfrp-on-the-go-settings__form",
			onSubmit: Do(o, ["prevent"])
		}, [a.value ? (B(), V("div", __, [(B(!0), V(z, null, R(e.users, (e) => (B(), V("label", {
			key: e.id,
			class: T(["wfrp-on-the-go-settings__user", { "wfrp-on-the-go-settings__user--current": e.isCurrentUser }])
		}, [
			I(U("input", {
				"onUpdate:modelValue": s[0] ||= (e) => n.value = e,
				type: "checkbox",
				value: e.id
			}, null, 8, v_), [[yo, n.value]]),
			U("span", null, E(e.name), 1),
			U("strong", null, E(e.isGm ? "GM" : "Player") + E(e.isCurrentUser ? " · Current" : ""), 1)
		], 2))), 128))])) : (B(), V("p", y_, "No Foundry users are available.")), U("footer", b_, [U("p", x_, E(i.value ? "Saved" : ""), 1), U("button", {
			type: "submit",
			class: "tw:dui-btn tw:dui-btn-primary",
			disabled: r.value || !a.value
		}, E(r.value ? "Saving" : "Save"), 9, S_)])], 32)]));
	}
}), w_ = class extends il {
	static DEFAULT_OPTIONS = {
		id: `${Y}-activation-settings`,
		tag: "section",
		window: {
			title: `${As} Activation`,
			icon: "fa-solid fa-mobile-screen-button",
			resizable: !0
		},
		position: {
			width: 520,
			height: "auto"
		}
	};
	getVueComponent() {
		return C_;
	}
	getVueProps() {
		return {
			saveEnabledUserIds: pc,
			users: dc()
		};
	}
};
//#endregion
//#region src/module/register-module-settings.ts
function T_() {
	lc(), game.settings.registerMenu(Y, "enabledUsers", {
		name: "WFRP_ON_THE_GO.settings.activation.enabledUsers.name",
		label: "WFRP_ON_THE_GO.settings.activation.enabledUsers.label",
		hint: "WFRP_ON_THE_GO.settings.activation.enabledUsers.hint",
		icon: "fa-solid fa-mobile-screen-button",
		restricted: !0,
		type: w_
	}), game.settings.registerMenu(Y, "openDiagnosticWorkbench", {
		name: "WFRP_ON_THE_GO.settings.openDiagnosticWorkbench.name",
		label: "WFRP_ON_THE_GO.settings.openDiagnosticWorkbench.label",
		hint: "WFRP_ON_THE_GO.settings.openDiagnosticWorkbench.hint",
		icon: "fa-solid fa-window-restore",
		restricted: !0,
		type: f_
	}), game.settings.registerMenu(Y, "openMobileUi", {
		name: "WFRP_ON_THE_GO.settings.openMobileUi.name",
		label: "WFRP_ON_THE_GO.settings.openMobileUi.label",
		hint: "WFRP_ON_THE_GO.settings.openMobileUi.hint",
		icon: "fa-solid fa-mobile-screen-button",
		restricted: !0,
		type: ul
	});
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function E_() {
	Hooks.once("init", () => {
		T_();
	}), Hooks.once("ready", async () => {
		if (game.system.id !== "wfrp4e") {
			console.warn(`${Y} | Loaded outside ${js}; activation skipped.`);
			return;
		}
		await uc(), m_(), await h_();
	});
}
//#endregion
//#region src/main.ts
E_();
//#endregion

//# sourceMappingURL=wfrp4e-on-the-go.mjs.map