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
}, ie = /-\w/g, C = re((e) => e.replace(ie, (e) => e.slice(1).toUpperCase())), ae = /\B([A-Z])/g, w = re((e) => e.replace(ae, "-$1").toLowerCase()), oe = re((e) => e.charAt(0).toUpperCase() + e.slice(1)), se = re((e) => e ? `on${oe(e)}` : ""), T = (e, t) => !Object.is(e, t), ce = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, E = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, le = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ue, de = () => ue ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function fe(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? ge(r) : fe(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (g(e) || v(e)) return e;
}
var pe = /;(?![^(]*\))/g, me = /:([^]+)/, he = /\/\*[^]*?\*\//g;
function ge(e) {
	let t = {};
	return e.replace(he, "").split(pe).forEach((e) => {
		if (e) {
			let n = e.split(me);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function D(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = D(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var _e = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ve = /* @__PURE__ */ e(_e);
_e + "";
function ye(e) {
	return !!e || e === "";
}
function be(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = xe(e[r], t[r]);
	return n;
}
function xe(e, t) {
	if (e === t) return !0;
	let n = m(e), r = m(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = _(e), r = _(t), n || r) return e === t;
	if (n = d(e), r = d(t), n || r) return n && r ? be(e, t) : !1;
	if (n = v(e), r = v(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !xe(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function Se(e, t) {
	return e.findIndex((e) => xe(e, t));
}
var Ce = (e) => !!(e && e.__v_isRef === !0), O = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? Ce(e) ? O(e.value) : JSON.stringify(e, we, 2) : String(e), we = (e, t) => Ce(t) ? we(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Te(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Te(e)) } : _(t) ? Te(t) : v(t) && !d(t) && !S(t) ? String(t) : t, Te = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, k, Ee = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && k && (k.active ? (this.parent = k, this.index = (k.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = k;
			try {
				return k = this, e();
			} finally {
				k = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = k, k = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (k === this) k = this.prevScope;
			else {
				let e = k;
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
function De(e) {
	return new Ee(e);
}
function Oe() {
	return k;
}
function ke(e, t = !1) {
	k && k.cleanups.push(e);
}
var A, Ae = /* @__PURE__ */ new WeakSet(), je = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, k && (k.active ? k.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ae.has(this) && (Ae.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fe(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Je(this), Re(this);
		let e = A, t = We;
		A = this, We = !0;
		try {
			return this.fn();
		} finally {
			ze(this), A = e, We = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) He(e);
			this.deps = this.depsTail = void 0, Je(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ae.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Be(this) && this.run();
	}
	get dirty() {
		return Be(this);
	}
}, Me = 0, Ne, Pe;
function Fe(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Pe, Pe = e;
		return;
	}
	e.next = Ne, Ne = e;
}
function Ie() {
	Me++;
}
function Le() {
	if (--Me > 0) return;
	if (Pe) {
		let e = Pe;
		for (Pe = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ne;) {
		let t = Ne;
		for (Ne = void 0; t;) {
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
function Re(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ze(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), He(r), Ue(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Be(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ve(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ve(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ye) || (e.globalVersion = Ye, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Be(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = A, r = We;
	A = e, We = !0;
	try {
		Re(e);
		let n = e.fn(e._value);
		(t.version === 0 || T(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		A = n, We = r, ze(e), e.flags &= -3;
	}
}
function He(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) He(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ue(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var We = !0, Ge = [];
function Ke() {
	Ge.push(We), We = !1;
}
function qe() {
	let e = Ge.pop();
	We = e === void 0 ? !0 : e;
}
function Je(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = A;
		A = void 0;
		try {
			t();
		} finally {
			A = e;
		}
	}
}
var Ye = 0, Xe = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Ze = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!A || !We || A === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== A) t = this.activeLink = new Xe(A, this), A.deps ? (t.prevDep = A.depsTail, A.depsTail.nextDep = t, A.depsTail = t) : A.deps = A.depsTail = t, Qe(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = A.depsTail, t.nextDep = void 0, A.depsTail.nextDep = t, A.depsTail = t, A.deps === t && (A.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Ye++, this.notify(e);
	}
	notify(e) {
		Ie();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Le();
		}
	}
};
function Qe(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Qe(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var $e = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ Symbol(""), tt = /* @__PURE__ */ Symbol(""), nt = /* @__PURE__ */ Symbol("");
function j(e, t, n) {
	if (We && A) {
		let t = $e.get(e);
		t || $e.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ze()), r.map = t, r.key = n), r.track();
	}
}
function rt(e, t, n, r, i, a) {
	let o = $e.get(e);
	if (!o) {
		Ye++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ie(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && te(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === nt || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(nt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(et)), f(e) && s(o.get(tt)));
				break;
			case "delete":
				i || (s(o.get(et)), f(e) && s(o.get(tt)));
				break;
			case "set":
				f(e) && s(o.get(et));
				break;
		}
	}
	Le();
}
function it(e, t) {
	let n = $e.get(e);
	return n && n.get(t);
}
function at(e) {
	let t = /* @__PURE__ */ N(e);
	return t === e ? t : (j(t, "iterate", nt), /* @__PURE__ */ M(e) ? t : t.map(Kt));
}
function ot(e) {
	return j(e = /* @__PURE__ */ N(e), "iterate", nt), e;
}
function st(e, t) {
	return /* @__PURE__ */ Ut(e) ? qt(/* @__PURE__ */ Ht(e) ? Kt(t) : t) : Kt(t);
}
var ct = {
	__proto__: null,
	[Symbol.iterator]() {
		return lt(this, Symbol.iterator, (e) => st(this, e));
	},
	concat(...e) {
		return at(this).concat(...e.map((e) => d(e) ? at(e) : e));
	},
	entries() {
		return lt(this, "entries", (e) => (e[1] = st(this, e[1]), e));
	},
	every(e, t) {
		return dt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return dt(this, "filter", e, t, (e) => e.map((e) => st(this, e)), arguments);
	},
	find(e, t) {
		return dt(this, "find", e, t, (e) => st(this, e), arguments);
	},
	findIndex(e, t) {
		return dt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return dt(this, "findLast", e, t, (e) => st(this, e), arguments);
	},
	findLastIndex(e, t) {
		return dt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return dt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return pt(this, "includes", e);
	},
	indexOf(...e) {
		return pt(this, "indexOf", e);
	},
	join(e) {
		return at(this).join(e);
	},
	lastIndexOf(...e) {
		return pt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return dt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return mt(this, "pop");
	},
	push(...e) {
		return mt(this, "push", e);
	},
	reduce(e, ...t) {
		return ft(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ft(this, "reduceRight", e, t);
	},
	shift() {
		return mt(this, "shift");
	},
	some(e, t) {
		return dt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return mt(this, "splice", e);
	},
	toReversed() {
		return at(this).toReversed();
	},
	toSorted(e) {
		return at(this).toSorted(e);
	},
	toSpliced(...e) {
		return at(this).toSpliced(...e);
	},
	unshift(...e) {
		return mt(this, "unshift", e);
	},
	values() {
		return lt(this, "values", (e) => st(this, e));
	}
};
function lt(e, t, n) {
	let r = ot(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ M(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ut = Array.prototype;
function dt(e, t, n, r, i, a) {
	let o = ot(e), s = o !== e && !/* @__PURE__ */ M(e), c = o[t];
	if (c !== ut[t]) {
		let t = c.apply(e, a);
		return s ? Kt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, st(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ft(e, t, n, r) {
	let i = ot(e), a = i !== e && !/* @__PURE__ */ M(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = st(e, t)), n.call(this, t, st(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? st(e, c) : c;
}
function pt(e, t, n) {
	let r = /* @__PURE__ */ N(e);
	j(r, "iterate", nt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Wt(n[0]) ? (n[0] = /* @__PURE__ */ N(n[0]), r[t](...n)) : i;
}
function mt(e, t, n = []) {
	Ke(), Ie();
	let r = (/* @__PURE__ */ N(e))[t].apply(e, n);
	return Le(), qe(), r;
}
var ht = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), gt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function _t(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ N(this);
	return j(t, "has", e), t.hasOwnProperty(e);
}
var vt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? It : Ft : i ? Pt : Nt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = ct[t])) return e;
			if (t === "hasOwnProperty") return _t;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ P(e) ? e : n);
		if ((_(t) ? gt.has(t) : ht(t)) || (r || j(e, "get", t), i)) return o;
		if (/* @__PURE__ */ P(o)) {
			let e = a && te(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Bt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Bt(o) : /* @__PURE__ */ Rt(o) : o;
	}
}, yt = class extends vt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && te(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Ut(i);
			if (!/* @__PURE__ */ M(n) && !/* @__PURE__ */ Ut(n) && (i = /* @__PURE__ */ N(i), n = /* @__PURE__ */ N(n)), !a && /* @__PURE__ */ P(i) && !/* @__PURE__ */ P(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ P(e) ? e : r);
		return e === /* @__PURE__ */ N(r) && (o ? T(n, i) && rt(e, "set", t, n, i) : rt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && rt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!_(t) || !gt.has(t)) && j(e, "has", t), n;
	}
	ownKeys(e) {
		return j(e, "iterate", d(e) ? "length" : et), Reflect.ownKeys(e);
	}
}, bt = class extends vt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, xt = /* @__PURE__ */ new yt(), St = /* @__PURE__ */ new bt(), Ct = /* @__PURE__ */ new yt(!0), wt = (e) => e, Tt = (e) => Reflect.getPrototypeOf(e);
function Et(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ N(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? wt : t ? qt : Kt;
		return !t && j(a, "iterate", l ? tt : et), s(Object.create(u), { next() {
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
function Dt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Ot(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ N(r), a = /* @__PURE__ */ N(n);
			e || (T(n, a) && j(i, "get", n), j(i, "get", a));
			let { has: o } = Tt(i), s = t ? wt : e ? qt : Kt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && j(/* @__PURE__ */ N(t), "iterate", et), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ N(n), i = /* @__PURE__ */ N(t);
			return e || (T(t, i) && j(r, "has", t), j(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ N(a), s = t ? wt : e ? qt : Kt;
			return !e && j(o, "iterate", et), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Dt("add"),
		set: Dt("set"),
		delete: Dt("delete"),
		clear: Dt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ N(this), r = Tt(n), i = /* @__PURE__ */ N(e), a = !t && !/* @__PURE__ */ M(e) && !/* @__PURE__ */ Ut(e) ? i : e;
			return r.has.call(n, a) || T(e, a) && r.has.call(n, e) || T(i, a) && r.has.call(n, i) || (n.add(a), rt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ M(n) && !/* @__PURE__ */ Ut(n) && (n = /* @__PURE__ */ N(n));
			let r = /* @__PURE__ */ N(this), { has: i, get: a } = Tt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ N(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? T(n, s) && rt(r, "set", e, n, s) : rt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ N(this), { has: n, get: r } = Tt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ N(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && rt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ N(this), t = e.size !== 0, n = e.clear();
			return t && rt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Et(r, e, t);
	}), n;
}
function kt(e, t) {
	let n = Ot(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(u(n, r) && r in t ? n : t, r, i);
}
var At = { get: /* @__PURE__ */ kt(!1, !1) }, jt = { get: /* @__PURE__ */ kt(!1, !0) }, Mt = { get: /* @__PURE__ */ kt(!0, !1) }, Nt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap();
function Lt(e) {
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
function Rt(e) {
	return /* @__PURE__ */ Ut(e) ? e : Vt(e, !1, xt, At, Nt);
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
	return Vt(e, !1, Ct, jt, Pt);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
	return Vt(e, !0, St, Mt, Ft);
}
function Vt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Lt(ee(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return /* @__PURE__ */ Ut(e) ? /* @__PURE__ */ Ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function M(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function N(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ N(t) : e;
}
function Gt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && E(e, "__v_skip", !0), e;
}
var Kt = (e) => v(e) ? /* @__PURE__ */ Rt(e) : e, qt = (e) => v(e) ? /* @__PURE__ */ Bt(e) : e;
// @__NO_SIDE_EFFECTS__
function P(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function F(e) {
	return Jt(e, !1);
}
function Jt(e, t) {
	return /* @__PURE__ */ P(e) ? e : new Yt(e, t);
}
var Yt = class {
	constructor(e, t) {
		this.dep = new Ze(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ N(e), this._value = t ? e : Kt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ M(e) || /* @__PURE__ */ Ut(e);
		e = n ? e : /* @__PURE__ */ N(e), T(e, t) && (this._rawValue = e, this._value = n ? e : Kt(e), this.dep.trigger());
	}
};
function I(e) {
	return /* @__PURE__ */ P(e) ? e.value : e;
}
var Xt = {
	get: (e, t, n) => t === "__v_raw" ? e : I(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ P(i) && !/* @__PURE__ */ P(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Zt(e) {
	return /* @__PURE__ */ Ht(e) ? e : new Proxy(e, Xt);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
	let t = d(e) ? Array(e.length) : {};
	for (let n in e) t[n] = en(e, n);
	return t;
}
var $t = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ N(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !te(this._key)) do
			r = !/* @__PURE__ */ Wt(i) || /* @__PURE__ */ M(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = I(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ P(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ P(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return it(this._raw, this._key);
	}
};
function en(e, t, n) {
	return new $t(e, t, n);
}
var tn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ze(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ye - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && A !== this) return Fe(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ve(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function nn(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new tn(r, i, n);
}
var rn = {}, an = /* @__PURE__ */ new WeakMap(), on = void 0;
function sn(e, t = !1, n = on) {
	if (n) {
		let t = an.get(n);
		t || an.set(n, t = []), t.push(e);
	}
}
function cn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ M(e) || o === !1 || o === 0 ? ln(e, 1) : ln(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ P(e) ? (g = () => e.value, y = /* @__PURE__ */ M(e)) : /* @__PURE__ */ Ht(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Ht(e) || /* @__PURE__ */ M(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ P(e)) return e.value;
		if (/* @__PURE__ */ Ht(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			Ke();
			try {
				_();
			} finally {
				qe();
			}
		}
		let t = on;
		on = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			on = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => ln(e(), t);
	}
	let x = Oe(), ee = () => {
		m.stop(), x && x.active && c(x.effects, m);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			let n = e(...t);
			return ee(), n;
		};
	}
	let S = b ? Array(e.length).fill(rn) : rn, te = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (n) {
			let t = m.run();
			if (e || o || y || (b ? t.some((e, t) => T(e, S[t])) : T(t, S))) {
				_ && _();
				let e = on;
				on = m;
				try {
					let e = [
						t,
						S === rn ? void 0 : b && S[0] === rn ? [] : S,
						v
					];
					S = t, f ? f(n, 3, e) : n(...e);
				} finally {
					on = e;
				}
			}
		} else m.run();
	};
	return u && u(te), m = new je(g), m.scheduler = l ? () => l(te, !1) : te, v = (e) => sn(e, !1, m), _ = m.onStop = () => {
		let e = an.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			an.delete(m);
		}
	}, n ? a ? te(!0) : S = m.run() : l ? l(te.bind(null, !0), !0) : m.run(), ee.pause = m.pause.bind(m), ee.resume = m.resume.bind(m), ee.stop = ee, ee;
}
function ln(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ P(e)) ln(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) ln(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		ln(e, t, n);
	});
	else if (S(e)) {
		for (let r in e) ln(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && ln(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function un(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		fn(e, t, n);
	}
}
function dn(e, t, n, r) {
	if (h(e)) {
		let i = un(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			fn(e, t, n);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(dn(e[a], t, n, r));
		return i;
	}
}
function fn(e, n, r, i = !0) {
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
			Ke(), un(o, null, 10, [
				e,
				i,
				a
			]), qe();
			return;
		}
	}
	pn(e, r, a, i, s);
}
function pn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var L = [], mn = -1, hn = [], gn = null, _n = 0, vn = /* @__PURE__ */ Promise.resolve(), yn = null;
function bn(e) {
	let t = yn || vn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function xn(e) {
	let t = mn + 1, n = L.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = L[r], a = Dn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Sn(e) {
	if (!(e.flags & 1)) {
		let t = Dn(e), n = L[L.length - 1];
		!n || !(e.flags & 2) && t >= Dn(n) ? L.push(e) : L.splice(xn(t), 0, e), e.flags |= 1, Cn();
	}
}
function Cn() {
	yn ||= vn.then(On);
}
function wn(e) {
	d(e) ? hn.push(...e) : gn && e.id === -1 ? gn.splice(_n + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1), Cn();
}
function Tn(e, t, n = mn + 1) {
	for (; n < L.length; n++) {
		let t = L[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			L.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function En(e) {
	if (hn.length) {
		let e = [...new Set(hn)].sort((e, t) => Dn(e) - Dn(t));
		if (hn.length = 0, gn) {
			gn.push(...e);
			return;
		}
		for (gn = e, _n = 0; _n < gn.length; _n++) {
			let e = gn[_n];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		gn = null, _n = 0;
	}
}
var Dn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function On(e) {
	try {
		for (mn = 0; mn < L.length; mn++) {
			let e = L[mn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), un(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; mn < L.length; mn++) {
			let e = L[mn];
			e && (e.flags &= -2);
		}
		mn = -1, L.length = 0, En(e), yn = null, (L.length || hn.length) && On(e);
	}
}
var kn = null, An = null;
function jn(e) {
	let t = kn;
	return kn = e, An = e && e.type.__scopeId || null, t;
}
function Mn(e, t = kn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && zi(-1);
		let i = jn(t), a;
		try {
			a = e(...n);
		} finally {
			jn(i), r._d && zi(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Nn(e, n) {
	if (kn === null) return e;
	let r = ba(kn), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && ln(o), i.push({
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
function Pn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ke(), dn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), qe());
	}
}
function Fn(e, t) {
	if (J) {
		let n = J.provides, r = J.parent && J.parent.provides;
		r === n && (n = J.provides = Object.create(r)), n[e] = t;
	}
}
function In(e, t, n = !1) {
	let r = aa();
	if (r || Wr) {
		let i = Wr ? Wr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
function Ln() {
	return !!(aa() || Wr);
}
var Rn = /* @__PURE__ */ Symbol.for("v-scx"), zn = () => In(Rn);
function Bn(e, t, n) {
	return Vn(e, t, n);
}
function Vn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (da) {
		if (c === "sync") {
			let e = zn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = J;
	u.call = (e, t, n) => dn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		V(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Sn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = cn(e, n, u);
	return da && (f ? f.push(h) : d && h()), h;
}
function Hn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Un(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = ca(this), s = Vn(i, a.bind(r), n);
	return o(), s;
}
function Un(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Wn = /* @__PURE__ */ Symbol("_vte"), Gn = (e) => e.__isTeleport, Kn = /* @__PURE__ */ Symbol("_leaveCb");
function qn(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, qn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function R(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function Jn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Yn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Xn = /* @__PURE__ */ new WeakMap();
function Zn(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => Zn(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if ($n(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Zn(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? ba(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ N(v), b = v === t ? i : (e) => Yn(_, e) ? !1 : u(y, e), x = (e, t) => !(t && Yn(_, t));
	if (m != null && m !== p) {
		if (Qn(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ P(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) un(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ P(p);
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
					i(), Xn.delete(e);
				};
				t.id = -1, Xn.set(e, t), V(t, r);
			} else Qn(e), i();
		}
	}
}
function Qn(e) {
	let t = Xn.get(e);
	t && (t.flags |= 8, Xn.delete(e));
}
de().requestIdleCallback, de().cancelIdleCallback;
var $n = (e) => !!e.type.__asyncLoader, er = (e) => e.type.__isKeepAlive;
function tr(e, t) {
	rr(e, "a", t);
}
function nr(e, t) {
	rr(e, "da", t);
}
function rr(e, t, n = J) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (ar(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) er(e.parent.vnode) && ir(r, t, n, e), e = e.parent;
	}
}
function ir(e, t, n, r) {
	let i = ar(t, e, r, !0);
	fr(() => {
		c(r[t], i);
	}, n);
}
function ar(e, t, n = J, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ke();
			let i = ca(n), a = dn(t, n, e, r);
			return i(), qe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var or = (e) => (t, n = J) => {
	(!da || e === "sp") && ar(e, (...e) => t(...e), n);
}, sr = or("bm"), cr = or("m"), lr = or("bu"), ur = or("u"), dr = or("bum"), fr = or("um"), pr = or("sp"), mr = or("rtg"), hr = or("rtc");
function gr(e, t = J) {
	ar("ec", e, t);
}
var _r = "components";
function vr(e, t) {
	return br(_r, e, !0, t) || e;
}
var yr = /* @__PURE__ */ Symbol.for("v-ndc");
function br(e, t, n = !0, r = !1) {
	let i = kn || J;
	if (i) {
		let n = i.type;
		if (e === _r) {
			let e = xa(n, !1);
			if (e && (e === t || e === C(t) || e === oe(C(t)))) return n;
		}
		let a = xr(i[e] || n[e], t) || xr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function xr(e, t) {
	return e && (e[t] || e[C(t)] || e[oe(C(t))]);
}
function z(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Ht(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ M(e), s = /* @__PURE__ */ Ut(e), e = ot(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? qt(Kt(e[n])) : Kt(e[n]) : e[n], n, void 0, a && a[n]);
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
var Sr = (e) => e ? ua(e) ? ba(e) : Sr(e.parent) : null, Cr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Sr(e.parent),
	$root: (e) => Sr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Mr(e),
	$forceUpdate: (e) => e.f ||= () => {
		Sn(e.update);
	},
	$nextTick: (e) => e.n ||= bn.bind(e.proxy),
	$watch: (e) => Hn.bind(e)
}), wr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Tr = {
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
			else if (wr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Dr && (s[n] = 0);
		}
		let d = Cr[n], f, p;
		if (d) return n === "$attrs" && j(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return wr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || wr(n, c) || u(o, c) || u(i, c) || u(Cr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Er(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Dr = !0;
function Or(e) {
	let t = Mr(e), n = e.proxy, i = e.ctx;
	Dr = !1, t.beforeCreate && Ar(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: ee, destroyed: S, unmounted: te, render: ne, renderTracked: re, renderTriggered: ie, errorCaptured: C, serverPrefetch: ae, expose: w, inheritAttrs: oe, components: se, directives: T, filters: ce } = t;
	if (u && kr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ Rt(t));
	}
	if (Dr = !0, o) for (let e in o) {
		let t = o[e], a = Y({
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
	if (c) for (let e in c) jr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Fn(t, e[t]);
		});
	}
	f && Ar(f, e, "c");
	function E(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (E(sr, p), E(cr, m), E(lr, g), E(ur, _), E(tr, y), E(nr, b), E(gr, C), E(hr, re), E(mr, ie), E(dr, ee), E(fr, te), E(pr, ae), d(w)) if (w.length) {
		let t = e.exposed ||= {};
		w.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ne && e.render === r && (e.render = ne), oe != null && (e.inheritAttrs = oe), se && (e.components = se), T && (e.directives = T), ae && Jn(e);
}
function kr(e, t, n = r) {
	d(e) && (e = Lr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? In(r.from || n, r.default, !0) : In(r.from || n) : In(r), /* @__PURE__ */ P(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Ar(e, t, n) {
	dn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function jr(e, t, n, r) {
	let i = r.includes(".") ? Un(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && Bn(i, n);
	} else if (h(e)) Bn(i, e.bind(n));
	else if (v(e)) if (d(e)) e.forEach((e) => jr(e, t, n, r));
	else {
		let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
		h(r) && Bn(i, r, e);
	}
}
function Mr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Nr(c, e, o, !0)), Nr(c, t, o)), v(t) && a.set(t, c), c;
}
function Nr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Nr(e, a, n, !0), i && i.forEach((t) => Nr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Pr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Pr = {
	data: Fr,
	props: zr,
	emits: zr,
	methods: Rr,
	computed: Rr,
	beforeCreate: B,
	created: B,
	beforeMount: B,
	mounted: B,
	beforeUpdate: B,
	updated: B,
	beforeDestroy: B,
	beforeUnmount: B,
	destroyed: B,
	unmounted: B,
	activated: B,
	deactivated: B,
	errorCaptured: B,
	serverPrefetch: B,
	components: Rr,
	directives: Rr,
	watch: Br,
	provide: Fr,
	inject: Ir
};
function Fr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Ir(e, t) {
	return Rr(Lr(e), Lr(t));
}
function Lr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function B(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Rr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function zr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Er(e), Er(t ?? {})) : t;
}
function Br(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = B(e[r], t[r]);
	return n;
}
function Vr() {
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
var Hr = 0;
function Ur(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Vr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Hr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Ca,
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
					let u = l._ceVNode || Ki(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, ba(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (dn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Wr;
				Wr = l;
				try {
					return e();
				} finally {
					Wr = t;
				}
			}
		};
		return l;
	};
}
var Wr = null, Gr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${C(t)}Modifiers`] || e[`${w(t)}Modifiers`];
function Kr(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && Gr(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = r.map(le)));
	let c, l = i[c = se(n)] || i[c = se(C(n))];
	!l && o && (l = i[c = se(w(n))]), l && dn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, dn(u, e, 6, a);
	}
}
var qr = /* @__PURE__ */ new WeakMap();
function Jr(e, t, n = !1) {
	let r = n ? qr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = Jr(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function Yr(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, w(t)) || u(e, t));
}
function Xr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = jn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Zi(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = Zi(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : Zr(c);
		}
	} catch (t) {
		Ii.length = 0, fn(t, e, 1), v = Ki(Pi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = Qr(y, a)), b = Yi(b, y, !1, !0));
	}
	return n.dirs && (b = Yi(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && qn(b, n.transition), v = b, jn(_), v;
}
var Zr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Qr = (e, t) => {
	let n = {};
	for (let r in e) (!o(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function $r(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? ei(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (ti(o, r, n) && !Yr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? ei(r, o, l) : !0 : !!o;
	return !1;
}
function ei(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (ti(t, e, a) && !Yr(n, a)) return !0;
	}
	return !1;
}
function ti(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !xe(r, i) : r !== i;
}
function ni({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var ri = {}, ii = () => Object.create(ri), ai = (e) => Object.getPrototypeOf(e) === ri;
function oi(e, t, n, r = !1) {
	let i = {}, a = ii();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ci(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ zt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function si(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ N(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Yr(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
				else {
					let t = C(o);
					i[t] = li(c, s, t, d, e, !1);
				}
				else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		ci(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !u(t, a) && ((r = w(a)) === a || !u(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = li(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !u(t, e)) && (delete a[e], l = !0);
	}
	l && rt(e.attrs, "set", "");
}
function ci(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ne(t)) continue;
		let l = n[t], d;
		a && u(a, d = C(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : Yr(e.emitsOptions, t) || (!(t in i) || l !== i[t]) && (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ N(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = li(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function li(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = ca(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === w(n)) && (r = !0));
	}
	return r;
}
var ui = /* @__PURE__ */ new WeakMap();
function di(e, r, i = !1) {
	let a = i ? ui : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = di(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = C(c[e]);
		fi(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = C(e);
		if (fi(t)) {
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
function fi(e) {
	return e[0] !== "$" && !ne(e);
}
var pi = (e) => e === "_" || e === "_ctx" || e === "$stable", mi = (e) => d(e) ? e.map(Zi) : [Zi(e)], hi = (e, t, n) => {
	if (t._n) return t;
	let r = Mn((...e) => mi(t(...e)), n);
	return r._c = !1, r;
}, gi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (pi(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = hi(n, i, r);
		else if (i != null) {
			let e = mi(i);
			t[n] = () => e;
		}
	}
}, _i = (e, t) => {
	let n = mi(t);
	e.slots.default = () => n;
}, vi = (e, t, n) => {
	for (let r in t) (n || !pi(r)) && (e[r] = t[r]);
}, yi = (e, t, n) => {
	let r = e.slots = ii();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (vi(r, t, n), n && E(r, "_", e, !0)) : gi(t, r);
	} else t && _i(e, t);
}, bi = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : vi(a, n, r) : (o = !n.$stable, gi(n, a)), s = n;
	} else n && (_i(e, n), s = { default: 1 });
	if (o) for (let e in a) !pi(e) && s[e] == null && delete a[e];
}, V = Mi;
function xi(e) {
	return Si(e);
}
function Si(e, i) {
	let a = de();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Ui(e, t) && (r = xe(e), D(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Ni:
				y(e, t, n, r);
				break;
			case Pi:
				b(e, t, n, r);
				break;
			case Fi:
				e ?? x(t, n, r, o);
				break;
			case H:
				se(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? te(e, t, n, r, i, a, o, s, c) : d & 6 ? T(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, O);
		}
		u != null && i ? Zn(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Zn(e.ref, null, a, e, !0);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && C(e.children, d, null, r, i, Ci(e, a), s, u), _ && Pn(e, null, r, "created"), ie(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ne(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ta(f, r, e);
		}
		_ && Pn(e, null, r, "beforeMount");
		let v = Ti(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && V(() => {
			try {
				f && ta(f, r, e), v && g.enter(d), _ && Pn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ie = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || ji(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ie(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, C = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? Qi(e[l]) : Zi(e[l]), t, n, r, i, a, o, s);
	}, ae = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && wi(r, !1), (g = h.onVnodeBeforeUpdate) && ta(g, r, n, e), f && Pn(n, e, r, "beforeUpdate"), r && wi(r, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? w(e.dynamicChildren, d, l, r, i, Ci(n, a), o) : s || pe(e, n, l, null, r, i, Ci(n, a), o, !1), u > 0) {
			if (u & 16) oe(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && oe(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && V(() => {
			g && ta(g, r, n, e), f && Pn(n, e, r, "updated");
		}, i);
	}, w = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === H || !Ui(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, oe = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !ne(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (ne(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, se = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), C(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (w(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Ei(e, t, !0)) : pe(e, t, n, f, i, a, s, c, l);
	}, T = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : E(t, n, r, i, a, o, c) : le(e, t, c);
	}, E = (e, t, n, r, i, a, o) => {
		let s = e.component = ia(e, r, i);
		if (er(e) && (s.ctx.renderer = O), fa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ue, o), !e.el) {
				let r = s.subTree = Ki(Pi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ue(s, e, t, n, i, a, o);
	}, le = (e, t, n) => {
		let r = t.component = e.component;
		if ($r(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			fe(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, ue = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Oi(e);
					if (n) {
						t && (t.el = c.el, fe(e, t, o)), n.asyncDep.then(() => {
							V(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				wi(e, !1), t ? (t.el = c.el, fe(e, t, o)) : t = c, n && ce(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ta(d, s, t, c), wi(e, !0);
				let f = Xr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), xe(p), e, i, a), t.el = f.el, u === null && ni(e, f.el), r && V(r, i), (d = t.props && t.props.onVnodeUpdated) && V(() => ta(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = $n(t);
				if (wi(e, !1), l && ce(l), !m && (o = c && c.onVnodeBeforeMount) && ta(o, d, t), wi(e, !0), s && Te) {
					let t = () => {
						e.subTree = Xr(e), Te(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Xr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && V(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					V(() => ta(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && $n(d.vnode) && d.vnode.shapeFlag & 256) && e.a && V(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new je(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Sn(u), wi(e, !0), l();
	}, fe = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, si(e, t.props, r, n), bi(e, t.children, n), Ke(), Tn(e), qe();
	}, pe = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				he(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				me(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && be(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? he(l, d, n, r, i, a, o, s, c) : be(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && C(d, n, r, i, a, o, s, c));
	}, me = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let n = t[p] = l ? Qi(t[p]) : Zi(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? be(e, a, o, !0, !1, f) : C(t, r, i, a, o, s, c, l, f);
	}, he = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? Qi(t[u]) : Zi(t[u]);
			if (Ui(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? Qi(t[p]) : Zi(t[p]);
			if (Ui(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? Qi(t[u]) : Zi(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) D(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Qi(t[u]) : Zi(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, ee = 0, S = Array(b);
			for (u = 0; u < b; u++) S[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					D(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (S[_ - h] === 0 && Ui(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? D(n, a, o, !0) : (S[i - h] = u + 1, i >= ee ? ee = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let te = x ? Di(S) : n;
			for (_ = te.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ai(f) : i;
				S[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== te[_] ? ge(n, r, p, 2) : _--);
			}
		}
	}, ge = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			ge(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, O);
			return;
		}
		if (c === H) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ge(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === Fi) {
			ee(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[Kn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), V(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[Kn];
				a._isLeaving && a[Kn](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, D = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ke(), Zn(s, null, n, e, !0), qe()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !$n(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ta(_, t, e), u & 6) ye(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Pn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, O, r) : l && !l.hasOnce && (a !== H || d > 0 && d & 64) ? be(l, t, n, !1, !0) : (a === H && d & 384 || !i && u & 16) && be(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && V(() => {
			_ && ta(_, t, e), h && Pn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, _e = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === H) {
			ve(n, r);
			return;
		}
		if (t === Fi) {
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
	}, ve = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ye = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		ki(c), ki(l), r && ce(r), i.stop(), a && (a.flags |= 8, D(o, e, t, n)), s && V(s, t), V(() => {
			e.isUnmounted = !0;
		}, t);
	}, be = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) D(e[o], t, n, r, i);
	}, xe = (e) => {
		if (e.shapeFlag & 6) return xe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Wn];
		return n ? h(n) : t;
	}, Se = !1, Ce = (e, t, n) => {
		let r;
		e == null ? t._vnode && (D(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, Se ||= (Se = !0, Tn(r), En(), !1);
	}, O = {
		p: v,
		um: D,
		m: ge,
		r: _e,
		mt: E,
		mc: C,
		pc: pe,
		pbc: w,
		n: xe,
		o: e
	}, we, Te;
	return i && ([we, Te] = i(O)), {
		render: Ce,
		hydrate: we,
		createApp: Ur(Ce, we)
	};
}
function Ci({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function wi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ti(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ei(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Qi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Ei(t, a)), a.type === Ni && (a.patchFlag === -1 && (a = i[e] = Qi(a)), a.el = t.el), a.type === Pi && !a.el && (a.el = t.el);
	}
}
function Di(e) {
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
function Oi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Oi(t);
}
function ki(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ai(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Ai(t.subTree) : null;
}
var ji = (e) => e.__isSuspense;
function Mi(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : wn(e);
}
var H = /* @__PURE__ */ Symbol.for("v-fgt"), Ni = /* @__PURE__ */ Symbol.for("v-txt"), Pi = /* @__PURE__ */ Symbol.for("v-cmt"), Fi = /* @__PURE__ */ Symbol.for("v-stc"), Ii = [], U = null;
function W(e = !1) {
	Ii.push(U = e ? null : []);
}
function Li() {
	Ii.pop(), U = Ii[Ii.length - 1] || null;
}
var Ri = 1;
function zi(e, t = !1) {
	Ri += e, e < 0 && U && t && (U.hasOnce = !0);
}
function Bi(e) {
	return e.dynamicChildren = Ri > 0 ? U || n : null, Li(), Ri > 0 && U && U.push(e), e;
}
function G(e, t, n, r, i, a) {
	return Bi(K(e, t, n, r, i, a, !0));
}
function Vi(e, t, n, r, i) {
	return Bi(Ki(e, t, n, r, i, !0));
}
function Hi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Ui(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Wi = ({ key: e }) => e ?? null, Gi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ P(e) || h(e) ? {
	i: kn,
	r: e,
	k: t,
	f: !!n
} : e);
function K(e, t = null, n = null, r = 0, i = null, a = e === H ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Wi(t),
		ref: t && Gi(t),
		scopeId: An,
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
		ctx: kn
	};
	return s ? ($i(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Ri > 0 && !o && U && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && U.push(c), c;
}
var Ki = qi;
function qi(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === yr) && (e = Pi), Hi(e)) {
		let r = Yi(e, t, !0);
		return n && $i(r, n), Ri > 0 && !a && U && (r.shapeFlag & 6 ? U[U.indexOf(e)] = r : U.push(r)), r.patchFlag = -2, r;
	}
	if (Sa(e) && (e = e.__vccOpts), t) {
		t = Ji(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = D(e)), v(n) && (/* @__PURE__ */ Wt(n) && !d(n) && (n = s({}, n)), t.style = fe(n));
	}
	let o = g(e) ? 1 : ji(e) ? 128 : Gn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return K(e, t, n, r, i, o, a, !0);
}
function Ji(e) {
	return e ? /* @__PURE__ */ Wt(e) || ai(e) ? s({}, e) : e : null;
}
function Yi(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ea(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Wi(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(Gi(t)) : [a, Gi(t)] : Gi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== H ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Yi(e.ssContent),
		ssFallback: e.ssFallback && Yi(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && qn(u, c.clone(u)), u;
}
function Xi(e = " ", t = 0) {
	return Ki(Ni, null, e, t);
}
function q(e = "", t = !1) {
	return t ? (W(), Vi(Pi, null, e)) : Ki(Pi, null, e);
}
function Zi(e) {
	return e == null || typeof e == "boolean" ? Ki(Pi) : d(e) ? Ki(H, null, e.slice()) : Hi(e) ? Qi(e) : Ki(Ni, null, String(e));
}
function Qi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Yi(e);
}
function $i(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), $i(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !ai(t) ? t._ctx = kn : r === 3 && kn && (kn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else h(t) ? (t = {
		default: t,
		_ctx: kn
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Xi(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function ea(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = D([t.class, r.class]));
		else if (e === "style") t.style = fe([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function ta(e, t, n, r = null) {
	dn(e, t, 7, [n, r]);
}
var na = Vr(), ra = 0;
function ia(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || na, o = {
		uid: ra++,
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
		scope: new Ee(!0),
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
		propsOptions: di(i, a),
		emitsOptions: Jr(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = Kr.bind(null, o), e.ce && e.ce(o), o;
}
var J = null, aa = () => J || kn, oa, sa;
{
	let e = de(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	oa = t("__VUE_INSTANCE_SETTERS__", (e) => J = e), sa = t("__VUE_SSR_SETTERS__", (e) => da = e);
}
var ca = (e) => {
	let t = J;
	return oa(e), e.scope.on(), () => {
		e.scope.off(), oa(t);
	};
}, la = () => {
	J && J.scope.off(), oa(null);
};
function ua(e) {
	return e.vnode.shapeFlag & 4;
}
var da = !1;
function fa(e, t = !1, n = !1) {
	t && sa(t);
	let { props: r, children: i } = e.vnode, a = ua(e);
	oi(e, r, a, t), yi(e, i, n || t);
	let o = a ? pa(e, t) : void 0;
	return t && sa(!1), o;
}
function pa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Tr);
	let { setup: r } = n;
	if (r) {
		Ke();
		let n = e.setupContext = r.length > 1 ? ya(e) : null, i = ca(e), a = un(r, e, 0, [e.props, n]), o = y(a);
		if (qe(), i(), (o || e.sp) && !$n(e) && Jn(e), o) {
			if (a.then(la, la), t) return a.then((n) => {
				ma(e, n, t);
			}).catch((t) => {
				fn(t, e, 0);
			});
			e.asyncDep = a;
		} else ma(e, a, t);
	} else _a(e, t);
}
function ma(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = Zt(t)), _a(e, n);
}
var ha, ga;
function _a(e, t, n) {
	let i = e.type;
	if (!e.render) {
		if (!t && ha && !i.render) {
			let t = i.template || Mr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: r } = e.appContext.config, { delimiters: a, compilerOptions: o } = i;
				i.render = ha(t, s(s({
					isCustomElement: n,
					delimiters: a
				}, r), o));
			}
		}
		e.render = i.render || r, ga && ga(e);
	}
	{
		let t = ca(e);
		Ke();
		try {
			Or(e);
		} finally {
			qe(), t();
		}
	}
}
var va = { get(e, t) {
	return j(e, "get", ""), e[t];
} };
function ya(e) {
	return {
		attrs: new Proxy(e.attrs, va),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function ba(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(Zt(Gt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Cr) return Cr[n](e);
		},
		has(e, t) {
			return t in e || t in Cr;
		}
	}) : e.proxy;
}
function xa(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Sa(e) {
	return h(e) && "__vccOpts" in e;
}
var Y = (e, t) => /* @__PURE__ */ nn(e, t, da), Ca = "3.5.38", wa = void 0, Ta = typeof window < "u" && window.trustedTypes;
if (Ta) try {
	wa = /* @__PURE__ */ Ta.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ea = wa ? (e) => wa.createHTML(e) : (e) => e, Da = "http://www.w3.org/2000/svg", Oa = "http://www.w3.org/1998/Math/MathML", ka = typeof document < "u" ? document : null, Aa = ka && /* @__PURE__ */ ka.createElement("template"), ja = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? ka.createElementNS(Da, e) : t === "mathml" ? ka.createElementNS(Oa, e) : n ? ka.createElement(e, { is: n }) : ka.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => ka.createTextNode(e),
	createComment: (e) => ka.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => ka.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Aa.innerHTML = Ea(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Aa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Ma = /* @__PURE__ */ Symbol("_vtc");
function Na(e, t, n) {
	let r = e[Ma];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Pa = /* @__PURE__ */ Symbol("_vod"), Fa = /* @__PURE__ */ Symbol("_vsh"), Ia = /* @__PURE__ */ Symbol(""), La = /(?:^|;)\s*display\s*:/;
function Ra(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) if (g(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Ba(r, t, "");
		}
		else for (let e in t) n[e] ?? Ba(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ba(r, i, "") : Wa(e, i, !g(t) && t ? t[i] : void 0, o) || Ba(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Ia];
			e && (n += ";" + e), r.cssText = n, a = La.test(n);
		}
	} else t && e.removeAttribute("style");
	Pa in e && (e[Pa] = a ? r.display : "", e[Fa] && (r.display = "none"));
}
var za = /\s*!important$/;
function Ba(e, t, n) {
	if (d(n)) n.forEach((n) => Ba(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Ua(e, t);
		za.test(n) ? e.setProperty(w(r), n.replace(za, ""), "important") : e[r] = n;
	}
}
var Va = [
	"Webkit",
	"Moz",
	"ms"
], Ha = {};
function Ua(e, t) {
	let n = Ha[t];
	if (n) return n;
	let r = C(t);
	if (r !== "filter" && r in e) return Ha[t] = r;
	r = oe(r);
	for (let n = 0; n < Va.length; n++) {
		let i = Va[n] + r;
		if (i in e) return Ha[t] = i;
	}
	return t;
}
function Wa(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var Ga = "http://www.w3.org/1999/xlink";
function Ka(e, t, n, r, i, a = ve(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ga, t.slice(6, t.length)) : e.setAttributeNS(Ga, t, n) : n == null || a && !ye(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function qa(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ea(n) : n);
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
		r === "boolean" ? n = ye(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Ja(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Ya(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Xa = /* @__PURE__ */ Symbol("_vei");
function Za(e, t, n, r, i = null) {
	let a = e[Xa] || (e[Xa] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = $a(t);
		r ? Ja(e, n, a[t] = ro(r, i), s) : o && (Ya(e, n, o, s), a[t] = void 0);
	}
}
var Qa = /(?:Once|Passive|Capture)$/;
function $a(e) {
	let t;
	if (Qa.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Qa);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : w(e.slice(2)), t];
}
var eo = 0, to = /* @__PURE__ */ Promise.resolve(), no = () => eo ||= (to.then(() => eo = 0), Date.now());
function ro(e, t) {
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
				e && dn(e, t, 5, a);
			}
		} else dn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = no(), n;
}
var io = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ao = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? Na(e, r, c) : t === "style" ? Ra(e, n, r) : a(t) ? o(t) || Za(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : oo(e, t, r, c)) ? (qa(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ka(e, t, r, c, s, t !== "value")) : e._isVueCE && (so(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? qa(e, C(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ka(e, t, r, c));
};
function oo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && io(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return io(t) && g(n) ? !1 : t in e;
}
function so(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = C(t);
	return Array.isArray(n) ? n.some((e) => C(e) === r) : Object.keys(n).some((e) => C(e) === r);
}
var co = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => ce(t, e) : t;
};
function lo(e) {
	e.target.composing = !0;
}
function uo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var fo = /* @__PURE__ */ Symbol("_assign");
function po(e, t, n) {
	return t && (e = e.trim()), n && (e = le(e)), e;
}
var mo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[fo] = co(i);
		let a = r || i.props && i.props.type === "number";
		Ja(e, t ? "change" : "input", (t) => {
			t.target.composing || e[fo](po(e.value, n, a));
		}), (n || a) && Ja(e, "change", () => {
			e.value = po(e.value, n, a);
		}), t || (Ja(e, "compositionstart", lo), Ja(e, "compositionend", uo), Ja(e, "change", uo));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[fo] = co(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? le(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, ho = {
	deep: !0,
	created(e, t, n) {
		e[fo] = co(n), Ja(e, "change", () => {
			let t = e._modelValue, n = yo(e), r = e.checked, i = e[fo];
			if (d(t)) {
				let e = Se(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (p(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(bo(e, r));
		});
	},
	mounted: go,
	beforeUpdate(e, t, n) {
		e[fo] = co(n), go(e, t, n);
	}
};
function go(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (d(t)) i = Se(t, r.props.value) > -1;
	else if (p(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = xe(t, bo(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var _o = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = p(t);
		Ja(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? le(yo(e)) : yo(e));
			e[fo](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, bn(() => {
				e._assigning = !1;
			});
		}), e[fo] = co(r);
	},
	mounted(e, { value: t }) {
		vo(e, t);
	},
	beforeUpdate(e, t, n) {
		e[fo] = co(n);
	},
	updated(e, { value: t }) {
		e._assigning || vo(e, t);
	}
};
function vo(e, t) {
	let n = e.multiple, r = d(t);
	if (!(n && !r && !p(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = yo(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Se(t, o) > -1;
			} else a.selected = t.has(o);
			else if (xe(yo(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function yo(e) {
	return "_value" in e ? e._value : e.value;
}
function bo(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var xo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], So = {
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
	exact: (e, t) => xo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Co = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = So[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, wo = /* @__PURE__ */ s({ patchProp: ao }, ja), To;
function Eo() {
	return To ||= xi(wo);
}
var Do = ((...e) => {
	let t = Eo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = ko(e);
		if (!r) return;
		let i = t._component;
		!h(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Oo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Oo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function ko(e) {
	return g(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/view/apps/mobile-journals/MobileJournalFolderTree.vue?vue&type=script&setup=true&lang.ts
var Ao = { class: "mobile-journal-shell__folders" }, jo = ["aria-expanded", "onClick"], Mo = {
	key: 0,
	class: "mobile-journal-shell__folder-entries"
}, No = ["onClick"], Po = /* @__PURE__ */ R({
	name: "MobileJournalFolderTree",
	__name: "MobileJournalFolderTree",
	props: {
		depth: {},
		folders: {},
		hasSearchQuery: { type: Boolean }
	},
	emits: ["openEntry"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ F(new Set(n.folders.map((e) => e.id)));
		function a(e) {
			let t = new Set(i.value);
			t.has(e) ? t.delete(e) : t.add(e), i.value = t;
		}
		function o(e) {
			return n.hasSearchQuery || i.value.has(e);
		}
		return (t, n) => {
			let i = vr("MobileJournalFolderTree", !0);
			return W(), G("div", Ao, [(W(!0), G(H, null, z(e.folders, (t) => (W(), G("section", {
				key: t.id,
				class: "mobile-journal-shell__folder",
				style: fe({ "--folder-depth": e.depth })
			}, [K("button", {
				type: "button",
				class: "mobile-journal-shell__folder-button",
				"aria-expanded": o(t.id),
				onClick: (e) => a(t.id)
			}, [
				K("i", {
					class: D(["fa-solid", o(t.id) ? "fa-folder-open" : "fa-folder"]),
					"aria-hidden": "true"
				}, null, 2),
				K("span", null, O(t.name), 1),
				K("small", null, O(t.journalCount), 1),
				n[1] ||= K("i", {
					class: "fa-solid fa-chevron-right mobile-journal-shell__folder-chevron",
					"aria-hidden": "true"
				}, null, -1)
			], 8, jo), o(t.id) ? (W(), G("div", Mo, [t.folders.length > 0 ? (W(), Vi(i, {
				key: 0,
				depth: e.depth + 1,
				folders: t.folders,
				"has-search-query": e.hasSearchQuery,
				onOpenEntry: n[0] ||= (e) => r("openEntry", e)
			}, null, 8, [
				"depth",
				"folders",
				"has-search-query"
			])) : q("", !0), (W(!0), G(H, null, z(t.journals, (t) => (W(), G("button", {
				key: t.id,
				type: "button",
				class: "mobile-journal-shell__journal-row",
				style: fe({ "--folder-depth": e.depth + 1 }),
				onClick: (e) => r("openEntry", t)
			}, [n[2] ||= K("i", {
				class: "fa-solid fa-book-open",
				"aria-hidden": "true"
			}, null, -1), K("span", null, [K("strong", null, O(t.name), 1), K("small", null, O(t.pages.length) + " pages", 1)])], 12, No))), 128))])) : q("", !0)], 4))), 128))]);
		};
	}
}), Fo = { class: "mobile-journal-shell__list-view" }, Io = { class: "mobile-journal-shell__search" }, Lo = ["value"], Ro = { class: "mobile-journal-shell__list-summary" }, zo = {
	class: "mobile-journal-shell__tabs",
	"aria-label": "Journal collections"
}, Bo = ["aria-selected", "onClick"], Vo = {
	key: 0,
	class: "mobile-journal-shell__tab-panel"
}, Ho = { class: "mobile-journal-shell__tab-header" }, Uo = {
	key: 1,
	class: "mobile-journal-shell__empty"
}, Wo = /* @__PURE__ */ R({
	__name: "MobileJournalList",
	props: {
		journalCount: {},
		searchText: {},
		tabs: {},
		totalPageCount: {}
	},
	emits: ["openEntry", "update:searchText"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ F(n.tabs[0]?.id ?? ""), a = Y(() => n.searchText.trim().length > 0), o = Y(() => n.tabs.find((e) => e.id === i.value) ?? n.tabs[0]);
		Bn(() => n.tabs.map((e) => e.id), () => {
			n.tabs.some((e) => e.id === i.value) || (i.value = n.tabs[0]?.id ?? "");
		});
		function s(e) {
			i.value = e;
		}
		function c(e) {
			let t = e.target;
			t instanceof HTMLInputElement && r("update:searchText", t.value);
		}
		return (t, n) => (W(), G("section", Fo, [
			K("label", Io, [n[1] ||= K("span", null, "Search Journals", -1), K("input", {
				value: e.searchText,
				type: "search",
				autocomplete: "off",
				class: "tw:dui-input",
				onInput: c
			}, null, 40, Lo)]),
			K("div", Ro, [K("span", null, O(e.journalCount) + " journals", 1), K("span", null, O(e.totalPageCount) + " pages", 1)]),
			K("nav", zo, [(W(!0), G(H, null, z(e.tabs, (e) => (W(), G("button", {
				key: e.id,
				type: "button",
				class: "mobile-journal-shell__tab-button",
				"aria-selected": o.value?.id === e.id,
				onClick: (t) => s(e.id)
			}, [K("strong", null, O(e.label), 1), K("small", null, O(e.journalCount), 1)], 8, Bo))), 128))]),
			o.value ? (W(), G("section", Vo, [K("header", Ho, [K("strong", null, O(o.value.label), 1), K("small", null, O(o.value.journalCount) + " journals / " + O(o.value.pageCount) + " pages", 1)]), o.value.folders.length > 0 ? (W(), Vi(Po, {
				key: o.value.id,
				depth: 0,
				folders: o.value.folders,
				"has-search-query": a.value,
				onOpenEntry: n[0] ||= (e) => r("openEntry", e)
			}, null, 8, ["folders", "has-search-query"])) : (W(), G("section", Uo, [...n[2] ||= [K("h2", null, "No Journals", -1)]]))])) : q("", !0)
		]));
	}
}), Go = {
	key: 0,
	class: "mobile-journal-shell__reader"
}, Ko = { class: "mobile-journal-shell__reader-bar" }, qo = { class: "mobile-journal-shell__reader-title" }, Jo = { class: "mobile-journal-shell__reader-controls" }, Yo = ["disabled"], Xo = { class: "mobile-journal-shell__select-control" }, Zo = ["value"], Qo = ["value"], $o = ["disabled"], es = {
	key: 0,
	class: "mobile-journal-shell__select-control mobile-journal-shell__select-control--wide"
}, ts = ["value"], ns = ["innerHTML"], rs = /* @__PURE__ */ R({
	__name: "MobileJournalReader",
	props: {
		entry: {},
		pageId: {}
	},
	emits: ["back", "update:pageId"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ F(""), a = /* @__PURE__ */ F(null), o = Y(() => n.entry.pages.find((e) => e.id === n.pageId) ?? n.entry.pages[0]), s = Y(() => n.entry.pages.findIndex((e) => e.id === o.value?.id)), c = Y(() => o.value ? h(o.value) : {
			headers: [],
			html: ""
		}), l = Y(() => n.entry.folderName ? `${n.entry.source.label} / ${n.entry.folderName}` : n.entry.source.label);
		Bn(() => n.pageId, () => {
			i.value = "", bn(() => {
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
		return (t, n) => o.value ? (W(), G("article", Go, [
			K("header", Ko, [K("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-square tw:dui-btn-ghost",
				"aria-label": "Back to journal list",
				onClick: n[0] ||= (e) => r("back")
			}, [...n[2] ||= [K("i", {
				class: "fa-solid fa-chevron-left",
				"aria-hidden": "true"
			}, null, -1)]]), K("div", qo, [K("p", null, O(l.value), 1), K("h2", null, O(e.entry.name), 1)])]),
			K("div", Jo, [
				K("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-square tw:dui-btn-ghost",
					"aria-label": "Previous page",
					disabled: s.value <= 0,
					onClick: u
				}, [...n[3] ||= [K("i", {
					class: "fa-solid fa-arrow-left",
					"aria-hidden": "true"
				}, null, -1)]], 8, Yo),
				K("label", Xo, [n[4] ||= K("span", null, "Page", -1), K("select", {
					value: e.pageId,
					class: "tw:dui-select",
					onChange: f
				}, [(W(!0), G(H, null, z(e.entry.pages, (e) => (W(), G("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, Qo))), 128))], 40, Zo)]),
				K("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-square tw:dui-btn-ghost",
					"aria-label": "Next page",
					disabled: s.value >= e.entry.pages.length - 1,
					onClick: d
				}, [...n[5] ||= [K("i", {
					class: "fa-solid fa-arrow-right",
					"aria-hidden": "true"
				}, null, -1)]], 8, $o),
				c.value.headers.length > 0 ? (W(), G("label", es, [n[7] ||= K("span", null, "Headings", -1), Nn(K("select", {
					"onUpdate:modelValue": n[1] ||= (e) => i.value = e,
					class: "tw:dui-select",
					onChange: p
				}, [n[6] ||= K("option", { value: "" }, "Jump to heading", -1), (W(!0), G(H, null, z(c.value.headers, (e) => (W(), G("option", {
					key: e.id,
					value: e.id
				}, O("-".repeat(Math.max(0, e.level - 1))) + " " + O(e.text), 9, ts))), 128))], 544), [[_o, i.value]])])) : q("", !0)
			]),
			K("section", {
				ref_key: "pageScrollElement",
				ref: a,
				class: "mobile-journal-shell__page"
			}, [K("h3", null, O(o.value.name), 1), K("div", {
				class: "mobile-journal-shell__content",
				innerHTML: c.value.html
			}, null, 8, ns)], 512)
		])) : q("", !0);
	}
}), is = { class: "mobile-journal-shell" }, as = { class: "mobile-journal-shell__app-header" }, os = { class: "tw:dui-badge tw:dui-badge-primary" }, ss = "compendiums", cs = "No Folder", ls = "World", us = "world", ds = /* @__PURE__ */ R({
	__name: "MobileJournalApp",
	props: { journals: {} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(!1), r = /* @__PURE__ */ F(""), i = /* @__PURE__ */ F(""), a = /* @__PURE__ */ F(""), o = Y(() => {
			let e = r.value.trim().toLocaleLowerCase();
			return e ? t.journals.filter((t) => {
				let n = t.pages.some((t) => t.name.toLocaleLowerCase().includes(e));
				return t.name.toLocaleLowerCase().includes(e) || t.folderName?.toLocaleLowerCase().includes(e) || t.source.label.toLocaleLowerCase().includes(e) || n;
			}) : t.journals;
		}), s = Y(() => {
			let e = u(us, "World"), t = u(ss, "Compendiums"), n = /* @__PURE__ */ new Map();
			for (let r of o.value) r.source.type === "world" ? f(e, r) : p(t, n, r);
			return y(e.folders), y(t.folders), [e, t];
		}), c = Y(() => o.value.reduce((e, t) => e + t.pages.length, 0)), l = Y(() => t.journals.find((e) => e.id === i.value));
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
			let n = t.folderName ?? ls;
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
			let i = n.split("/").map((e) => e.trim()).filter((e) => e.length > 0), a = i.length > 0 ? i : [cs], o = e, s, c = [];
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
		return (e, t) => (W(), G("main", is, [K("header", as, [t[2] ||= K("div", null, [K("p", null, "Drowsy's WFRP4e On The Go"), K("h1", null, "Journals")], -1), K("span", os, O(o.value.length), 1)]), n.value ? l.value ? (W(), Vi(rs, {
			key: 1,
			"page-id": a.value,
			"onUpdate:pageId": t[1] ||= (e) => a.value = e,
			entry: l.value,
			onBack: S
		}, null, 8, ["page-id", "entry"])) : q("", !0) : (W(), Vi(Wo, {
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
}), fs = { class: "on-the-go-shell" }, ps = { class: "on-the-go-shell__top-bar" }, ms = {
	key: 1,
	class: "on-the-go-shell__top-bar-spacer",
	"aria-hidden": "true"
}, hs = {
	key: 0,
	class: "on-the-go-shell__home",
	"aria-label": "Main menu"
}, gs = {
	key: 1,
	class: "on-the-go-shell__content"
}, _s = { class: "on-the-go-shell__toggle tw:dui-card" }, vs = { class: "on-the-go-shell__field" }, ys = {
	class: "on-the-go-shell__gm-list",
	"aria-label": "Enabled users"
}, bs = ["checked", "onChange"], xs = { class: "on-the-go-shell__actions" }, Ss = { "aria-live": "polite" }, Cs = ["disabled"], ws = ["disabled"], Ts = /* @__PURE__ */ R({
	__name: "MobileShellApp",
	props: {
		activationSettings: {},
		disableForcedMode: { type: Function },
		journals: {},
		saveActivationSettings: { type: Function }
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ F("home"), r = /* @__PURE__ */ F(!1), i = /* @__PURE__ */ F(""), a = /* @__PURE__ */ Rt(m(t.activationSettings)), o = Y(() => n.value === "journals" ? "Journals" : n.value === "settings" ? "Settings" : "Home"), s = Y(() => t.journals.reduce((e, t) => e + t.pages.length, 0));
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
		return (t, u) => (W(), G("main", fs, [K("header", ps, [
			n.value === "home" ? (W(), G("span", ms)) : (W(), G("button", {
				key: 0,
				type: "button",
				class: "tw:dui-btn tw:dui-btn-square tw:dui-btn-ghost",
				"aria-label": "Back to home",
				onClick: l
			}, [...u[4] ||= [K("i", {
				class: "fa-solid fa-chevron-left",
				"aria-hidden": "true"
			}, null, -1)]])),
			K("div", null, [u[5] ||= K("p", null, "Drowsy's WFRP4e On The Go", -1), K("h1", null, O(o.value), 1)]),
			u[6] ||= K("span", {
				class: "on-the-go-shell__top-bar-spacer",
				"aria-hidden": "true"
			}, null, -1)
		]), n.value === "home" ? (W(), G("section", hs, [K("button", {
			type: "button",
			class: "on-the-go-shell__menu-button tw:dui-card",
			onClick: u[0] ||= (e) => c("journals")
		}, [u[8] ||= K("i", {
			class: "fa-solid fa-book-open",
			"aria-hidden": "true"
		}, null, -1), K("span", null, [u[7] ||= K("strong", null, "Journals", -1), K("small", null, O(e.journals.length) + " entries, " + O(s.value) + " pages", 1)])]), K("button", {
			type: "button",
			class: "on-the-go-shell__menu-button tw:dui-card",
			onClick: u[1] ||= (e) => c("settings")
		}, [u[10] ||= K("i", {
			class: "fa-solid fa-sliders",
			"aria-hidden": "true"
		}, null, -1), K("span", null, [u[9] ||= K("strong", null, "Settings", -1), K("small", null, O(a.forceMobileUi ? "Forced on this client" : "Automatic activation"), 1)])])])) : n.value === "journals" ? (W(), G("section", gs, [Ki(ds, { journals: e.journals }, null, 8, ["journals"])])) : (W(), G("form", {
			key: 2,
			class: "on-the-go-shell__settings",
			onSubmit: Co(f, ["prevent"])
		}, [
			K("label", _s, [K("span", null, [u[11] ||= K("strong", null, "Force On This Client", -1), K("small", null, O(a.forceMobileUi ? "On" : "Off"), 1)]), Nn(K("input", {
				"onUpdate:modelValue": u[2] ||= (e) => a.forceMobileUi = e,
				type: "checkbox",
				class: "tw:dui-toggle tw:dui-toggle-primary"
			}, null, 512), [[ho, a.forceMobileUi]])]),
			K("label", vs, [u[12] ||= K("span", null, "Mobile Width Threshold", -1), Nn(K("input", {
				"onUpdate:modelValue": u[3] ||= (e) => a.mobileWidthThreshold = e,
				type: "number",
				min: "320",
				max: "1400",
				step: "10",
				class: "tw:dui-input"
			}, null, 512), [[
				mo,
				a.mobileWidthThreshold,
				void 0,
				{ number: !0 }
			]])]),
			K("section", ys, [u[13] ||= K("h2", null, "Enabled Users", -1), (W(!0), G(H, null, z(a.users, (e) => (W(), G("label", {
				key: e.id,
				class: D(["on-the-go-shell__toggle tw:dui-card", { "on-the-go-shell__toggle--current": e.isCurrentUser }])
			}, [K("span", null, [K("strong", null, O(e.name), 1), K("small", null, O(e.isGm ? "GM" : "Player") + O(e.isCurrentUser ? " · Current user" : ""), 1)]), K("input", {
				type: "checkbox",
				class: "tw:dui-toggle tw:dui-toggle-primary",
				checked: e.enabled,
				onChange: (t) => d(e.id, t)
			}, null, 40, bs)], 2))), 128))]),
			K("footer", xs, [
				K("p", Ss, O(i.value), 1),
				K("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-outline",
					disabled: r.value,
					onClick: p
				}, [...u[14] ||= [K("i", {
					class: "fa-solid fa-power-off",
					"aria-hidden": "true"
				}, null, -1), K("span", null, "Turn Off Forced Mode", -1)]], 8, Cs),
				K("button", {
					type: "submit",
					class: "tw:dui-btn tw:dui-btn-primary",
					disabled: r.value
				}, [u[15] ||= K("i", {
					class: "fa-solid fa-floppy-disk",
					"aria-hidden": "true"
				}, null, -1), K("span", null, O(r.value ? "Saving" : "Save"), 1)], 8, ws)
			])
		], 32))]));
	}
}), X = "wfrp4e-on-the-go", Es = "Drowsy's WFRP4e On The Go", Ds = "wfrp4e", Os = {
	id: "world",
	label: "World Journals",
	type: "world"
};
async function ks() {
	let e = As(), t = await js();
	return [...e, ...t].sort(Us);
}
function As() {
	let e = {
		idPrefix: "world",
		source: Os
	};
	return Ms().map((t) => Ls(t, e)).filter((e) => e !== void 0);
}
async function js() {
	let e = [];
	for (let t of Ns()) {
		let n = Is(t);
		if (!n) continue;
		let r = {
			idPrefix: `compendium:${n.id}`,
			source: {
				id: n.id,
				label: n.label,
				type: "compendium"
			}
		}, i = await Fs(t);
		e.push(...i.map((e) => Ls(e, r)).filter((e) => e !== void 0));
	}
	return e;
}
function Ms() {
	let e = game.journal;
	return Array.isArray(e.contents) ? e.contents : [];
}
function Ns() {
	return Vs(game.packs).filter(Ps);
}
function Ps(e) {
	if (!qs(e)) return !1;
	let t = Z(e.documentName), n = qs(e.metadata) ? e.metadata : {}, r = Z(n.type) ?? Z(n.documentName);
	return t === "JournalEntry" || r === "JournalEntry";
}
async function Fs(e) {
	if (!Ks(e)) return [];
	let t = await e.getDocuments();
	return Array.isArray(t) ? t : [];
}
function Is(e) {
	if (!qs(e)) return;
	let t = qs(e.metadata) ? e.metadata : {}, n = Z(e.collection) ?? Z(t.id) ?? Z(t.name), r = Z(e.title) ?? Z(e.label) ?? Z(t.label) ?? n;
	if (!(!n || !r)) return {
		id: n,
		label: r
	};
}
function Ls(e, t) {
	if (!qs(e)) return;
	let n = Bs(e);
	if (!n) return;
	let r = Hs(e.folder), i = Rs(e.pages), a = {
		id: `${t.idPrefix}:${n.id}`,
		name: n.name,
		pages: i,
		source: t.source
	};
	return r && (a.folderName = r), a;
}
function Rs(e) {
	return Vs(e).map(zs).filter((e) => e !== void 0).sort((e, t) => e.sort - t.sort || e.name.localeCompare(t.name));
}
function zs(e) {
	if (!qs(e)) return;
	let t = Bs(e);
	if (t) return {
		html: Z((qs(e.text) ? e.text : {}).content) ?? "",
		id: t.id,
		name: t.name,
		sort: Gs(e.sort) ?? 0,
		type: Z(e.type) ?? "unknown"
	};
}
function Bs(e) {
	let t = Z(e.id), n = Z(e.name);
	if (!(!t || !n)) return {
		id: t,
		name: n
	};
}
function Vs(e) {
	return Array.isArray(e) ? e : qs(e) && Array.isArray(e.contents) ? e.contents : [];
}
function Hs(e) {
	if (!qs(e)) return;
	let t = [], n = e;
	for (; qs(n);) {
		let e = Z(n.name);
		e && t.unshift(e), n = n.folder;
	}
	return t.length > 0 ? t.join(" / ") : void 0;
}
function Us(e, t) {
	return Ws(e.source.type) - Ws(t.source.type) || e.source.label.localeCompare(t.source.label) || e.name.localeCompare(t.name);
}
function Ws(e) {
	return e === "world" ? 0 : 1;
}
function Gs(e) {
	if (typeof e == "number" && Number.isFinite(e)) return e;
}
function Z(e) {
	if (typeof e == "string" && e.trim() !== "") return e;
}
function Ks(e) {
	return qs(e) && typeof e.getDocuments == "function";
}
function qs(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/module/settings/activation-settings.ts
var Js = 1, Ys = "activationSettingsVersion", Xs = "enabledUserIds", Zs = "enabledGmUserIds", Qs = "forceMobileUi", $s = "mobileWidthThreshold", ec = 800;
function tc() {
	lc(Xs, []), lc(Zs, []), lc(Ys, 0), game.settings.register(X, $s, {
		name: "WFRP_ON_THE_GO.settings.mobileWidthThreshold.name",
		hint: "WFRP_ON_THE_GO.settings.mobileWidthThreshold.hint",
		scope: "world",
		config: !0,
		restricted: !0,
		default: ec,
		type: Number,
		range: {
			min: 320,
			max: 1400,
			step: 10
		}
	}), game.settings.register(X, Qs, {
		name: "WFRP_ON_THE_GO.settings.forceMobileUi.name",
		hint: "WFRP_ON_THE_GO.settings.forceMobileUi.hint",
		scope: "client",
		config: !0,
		default: !1,
		type: Boolean
	});
}
async function nc() {
	if (!game.user.isGM || uc() >= Js) return;
	let e = fc(Xs), t = fc(Zs);
	await ac(e.length > 0 ? e : t), await game.settings.set(X, Ys, Js);
}
function rc() {
	let e = new Set(dc());
	return gc().map((t) => ({
		enabled: e.has(t.id),
		id: t.id,
		isCurrentUser: t.id === game.user.id,
		isGm: t.isGM,
		name: t.name
	}));
}
function ic() {
	return {
		forceMobileUi: pc(),
		mobileWidthThreshold: mc(),
		users: rc()
	};
}
async function ac(e) {
	let t = new Set(gc().map((e) => e.id)), n = Array.from(new Set(e)).filter((e) => t.has(e));
	await game.settings.set(X, Xs, n);
}
async function oc(e) {
	await ac(e.users.filter((e) => e.enabled).map((e) => e.id)), await game.settings.set(X, $s, hc(e.mobileWidthThreshold)), await game.settings.set(X, Qs, e.forceMobileUi);
}
async function sc(e) {
	await game.settings.set(X, Qs, e);
}
function cc(e = window.innerWidth) {
	let t = dc().includes(game.user.id), n = pc() || e <= mc();
	return !t || !n ? "none" : game.user.isGM ? "gm" : "player";
}
function lc(e, t) {
	game.settings.register(X, e, {
		name: e,
		hint: e,
		scope: "world",
		config: !1,
		restricted: !0,
		default: t,
		type: typeof t == "number" ? Number : Object
	});
}
function uc() {
	let e = game.settings.get(X, Ys);
	return typeof e == "number" && Number.isFinite(e) ? e : 0;
}
function dc() {
	return fc(Xs);
}
function fc(e) {
	let t = game.settings.get(X, e);
	return Array.isArray(t) ? t.filter((e) => typeof e == "string") : [];
}
function pc() {
	return game.settings.get(X, Qs) === !0;
}
function mc() {
	let e = game.settings.get(X, $s);
	return typeof e != "number" || !Number.isFinite(e) ? ec : e;
}
function hc(e) {
	return Number.isFinite(e) ? Math.min(1400, Math.max(320, Math.round(e))) : ec;
}
function gc() {
	return game.users.filter(() => !0);
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var _c = typeof window < "u", vc, yc = (e) => vc = e, bc = Symbol();
function xc(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Sc;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Sc ||= {});
var Cc = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function wc(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Tc(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Ac(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Ec(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Dc(e) {
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
var Oc = typeof navigator == "object" ? navigator : { userAgent: "" }, kc = /Macintosh/.test(Oc.userAgent) && /AppleWebKit/.test(Oc.userAgent) && !/Safari/.test(Oc.userAgent), Ac = _c ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !kc ? jc : "msSaveOrOpenBlob" in Oc ? Mc : Nc : () => {};
function jc(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Dc(r) : Ec(r.href) ? Tc(e, t, n) : (r.target = "_blank", Dc(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Dc(r);
	}, 0));
}
function Mc(e, t = "download", n) {
	if (typeof e == "string") if (Ec(e)) Tc(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			Dc(t);
		});
	}
	else navigator.msSaveOrOpenBlob(wc(e, n), t);
}
function Nc(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Tc(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Cc.HTMLElement)) || "safari" in Cc, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || kc) && typeof FileReader < "u") {
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
var { assign: Pc } = Object;
function Fc() {
	let e = De(!0), t = e.run(() => /* @__PURE__ */ F({})), n = [], r = [], i = Gt({
		install(e) {
			yc(i), i._a = e, e.provide(bc, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var Ic = () => {};
function Lc(e, t, n, r = Ic) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Oe() && ke(i), i;
}
function Rc(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var zc = (e) => e(), Bc = Symbol(), Vc = Symbol();
function Hc(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		xc(i) && xc(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ P(r) && !/* @__PURE__ */ Ht(r) ? e[n] = Hc(i, r) : e[n] = r;
	}
	return e;
}
var Uc = Symbol();
function Wc(e) {
	return !xc(e) || !Object.prototype.hasOwnProperty.call(e, Uc);
}
var { assign: Gc } = Object;
function Kc(e) {
	return !!(/* @__PURE__ */ P(e) && e.effect);
}
function qc(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), Gc(/* @__PURE__ */ Qt(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Gt(Y(() => {
			yc(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Jc(e, l, t, n, r, !0), c;
}
function Jc(e, t, n = {}, r, i, a) {
	let o, s = Gc({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Sc.patchFunction,
			storeId: e,
			events: void 0
		}) : (Hc(r.state.value[e], t), n = {
			type: Sc.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		bn().then(() => {
			m === i && (l = !0);
		}), u = !0, Rc(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Gc(e, t);
		});
	} : Ic;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (Bc in t) return t[Vc] = n, t;
		let i = function() {
			yc(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Rc(f, {
				args: n,
				name: i[Vc],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Rc(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Rc(a, e), e)).catch((e) => (Rc(o, e), Promise.reject(e))) : (Rc(a, l), l);
		};
		return i[Bc] = !0, i[Vc] = n, i;
	}, y = /* @__PURE__ */ Rt({
		_p: r,
		$id: e,
		$onAction: Lc.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = Lc(d, t, n.detached, () => a()), a = o.run(() => Bn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Sc.direct,
					events: void 0
				}, r);
			}, Gc({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || zc)(() => r._e.run(() => (o = De()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ P(n) && !Kc(n) || /* @__PURE__ */ Ht(n) ? a || (p && Wc(n) && (/* @__PURE__ */ P(n) ? n.value = p[t] : Hc(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return Gc(y, b), Gc(/* @__PURE__ */ N(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				Gc(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Gc(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function Yc(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Ln();
		return n ||= o ? In(bc, null) : null, n && yc(n), n = vc, n._s.has(e) || (i ? Jc(e, t, r, n) : qc(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
//#endregion
//#region src/module/apps/FoundryVueApplication.ts
var Xc = class extends foundry.applications.api.ApplicationV2 {
	#e = Fc();
	#t;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp-on-the-go-root"), n.dataset.theme = "wfrp-on-the-go", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp-on-the-go-app"), t.replaceChildren(e), this.#t = Do(this.getVueComponent(), this.getVueProps() ?? {}), this.#t.use(this.#e), this.#t.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#t?.unmount(), this.#t = void 0;
	}
}, Zc = "wfrp-on-the-go-mobile-shell-window", Qc = "wfrp-on-the-go-mode-active";
function $c() {
	document.body.classList.add(Qc);
}
//#endregion
//#region src/module/apps/mobile-shell/MobileShellApplication.ts
var el = class extends Xc {
	#e = [];
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${X}-mobile-shell`,
		classes: [X, Zc],
		tag: "section",
		window: {
			title: Es,
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
		return Ts;
	}
	getVueProps() {
		return {
			activationSettings: ic(),
			disableForcedMode: async () => {
				await sc(!1);
			},
			journals: this.#e,
			saveActivationSettings: oc
		};
	}
	async _renderHTML(e, t) {
		let [n] = await Promise.all([super._renderHTML(e, t), this.loadJournals()]);
		return n;
	}
	_replaceHTML(e, t, n) {
		$c(), super._replaceHTML(e, t, n);
	}
	async loadJournals() {
		this.#e = await ks();
	}
}, tl = Yc("player-sheet", () => {
	let e = /* @__PURE__ */ F("status"), t = /* @__PURE__ */ F(!1), n = /* @__PURE__ */ F(), r = /* @__PURE__ */ F(""), i = /* @__PURE__ */ F(!1), a = Y(() => r.value.trim().toLocaleLowerCase());
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
}), nl = {
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-labelledby": "inventory-item-heading"
}, rl = {
	class: "tw:dui-breadcrumbs tw:text-sm",
	"aria-label": "Inventory location"
}, il = { "aria-current": "page" }, al = { class: "tw:dui-card tw:dui-card-border tw:overflow-hidden tw:bg-base-200 tw:shadow-lg" }, ol = { class: "tw:relative tw:h-40 tw:bg-base-300" }, sl = ["src", "alt"], cl = {
	key: 1,
	class: "tw:dui-avatar tw:dui-avatar-placeholder tw:grid tw:h-full tw:w-full tw:place-items-center"
}, ll = { class: "tw:grid tw:size-20 tw:place-items-center tw:rounded-full tw:bg-base-300 tw:text-base-content" }, ul = {
	class: "tw:font-serif tw:text-2xl tw:font-bold tw:text-secondary",
	"aria-hidden": "true"
}, dl = {
	key: 2,
	class: "tw:dui-badge tw:dui-badge-secondary tw:absolute tw:top-3 tw:right-3 tw:shadow-md"
}, fl = { class: "tw:dui-card-body tw:gap-4 tw:p-4" }, pl = { class: "tw:m-0 tw:text-xs tw:font-black tw:tracking-[0.1em] tw:text-secondary tw:uppercase" }, ml = {
	id: "inventory-item-heading",
	class: "tw:dui-card-title tw:font-serif tw:text-2xl"
}, hl = { class: "tw:grid tw:grid-cols-2 tw:divide-x tw:divide-base-content/10 tw:rounded-box tw:bg-base-300 tw:shadow-inner" }, gl = { class: "tw:p-3" }, _l = { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold tw:tabular-nums" }, vl = { class: "tw:p-3" }, yl = { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold tw:tabular-nums" }, bl = { class: "tw:flex tw:items-stretch tw:gap-2" }, xl = { class: "tw:dui-join tw:flex tw:min-w-0 tw:flex-1" }, Sl = ["disabled"], Cl = ["disabled"], wl = ["disabled"], Tl = ["disabled"], El = ["disabled"], Dl = {
	key: 0,
	role: "alert",
	class: "tw:dui-alert tw:dui-alert-error tw:items-start"
}, Ol = {
	key: 1,
	role: "status",
	class: "tw:dui-alert tw:dui-alert-success tw:items-start"
}, kl = /* @__PURE__ */ R({
	__name: "InventoryItemDetail",
	props: {
		item: {},
		onToggleEquipped: { type: Function },
		onUpdateQuantity: { type: Function }
	},
	emits: ["back"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ F(""), a = /* @__PURE__ */ F(""), o = /* @__PURE__ */ F(!1), s = /* @__PURE__ */ F(n.item.quantity), c = Y(() => s.value !== n.item.quantity);
		Bn(() => [n.item.id, n.item.quantity], ([, e]) => {
			s.value = e;
		});
		function l(e) {
			s.value = Math.max(0, s.value + e), u();
		}
		function u() {
			i.value = "", a.value = "";
		}
		async function d() {
			if (!Number.isInteger(s.value) || s.value < 0) {
				a.value = "Quantity must be a whole number of zero or more.";
				return;
			}
			await p(() => n.onUpdateQuantity(n.item.id, s.value), "Quantity updated.");
		}
		async function f() {
			await p(() => n.onToggleEquipped(n.item.id), n.item.equipped ? "Item unequipped." : "Item equipped.");
		}
		async function p(e, t) {
			u(), o.value = !0;
			try {
				await e(), i.value = t;
			} catch (e) {
				a.value = e instanceof Error ? e.message : "The item could not be updated.";
			} finally {
				o.value = !1;
			}
		}
		return (t, n) => (W(), G("article", nl, [
			K("nav", rl, [K("ul", null, [K("li", null, [K("button", {
				type: "button",
				class: "tw:font-bold tw:text-secondary",
				onClick: n[0] ||= (e) => r("back")
			}, " Inventory ")]), K("li", il, O(e.item.name), 1)])]),
			K("section", al, [K("figure", ol, [e.item.imageUrl ? (W(), G("img", {
				key: 0,
				src: e.item.imageUrl,
				alt: `${e.item.name} illustration`,
				width: "400",
				height: "240",
				class: "tw:h-full tw:w-full tw:object-cover"
			}, null, 8, sl)) : (W(), G("div", cl, [K("div", ll, [K("span", ul, O(e.item.name.slice(0, 2).toUpperCase()), 1)])])), e.item.equipped ? (W(), G("span", dl, [...n[4] ||= [K("i", {
				class: "fa-solid fa-check tw:mr-1",
				"aria-hidden": "true"
			}, null, -1), Xi(" Equipped ", -1)]])) : q("", !0)]), K("div", fl, [
				K("div", null, [K("p", pl, O(e.item.category), 1), K("h2", ml, O(e.item.name), 1)]),
				K("dl", hl, [K("div", gl, [n[5] ||= K("dt", { class: "tw:text-xs tw:opacity-65" }, "Encumbrance", -1), K("dd", _l, O(e.item.encumbrance), 1)]), K("div", vl, [n[6] ||= K("dt", { class: "tw:text-xs tw:opacity-65" }, "Current quantity", -1), K("dd", yl, O(e.item.quantity), 1)])]),
				K("form", {
					class: "tw:grid tw:gap-2",
					onSubmit: Co(d, ["prevent"])
				}, [
					n[9] ||= K("label", {
						for: "inventory-item-quantity",
						class: "tw:text-sm tw:font-bold"
					}, "Quantity", -1),
					K("div", bl, [K("div", xl, [
						K("button", {
							type: "button",
							class: "tw:dui-btn tw:dui-join-item tw:min-h-11",
							disabled: o.value || s.value <= 0,
							"aria-label": "Decrease quantity",
							onClick: n[1] ||= (e) => l(-1)
						}, [...n[7] ||= [K("span", {
							class: "tw:text-xl",
							"aria-hidden": "true"
						}, "−", -1)]], 8, Sl),
						Nn(K("input", {
							id: "inventory-item-quantity",
							"onUpdate:modelValue": n[2] ||= (e) => s.value = e,
							type: "number",
							min: "0",
							step: "1",
							inputmode: "numeric",
							class: "tw:dui-input tw:dui-join-item tw:min-h-11 tw:min-w-0 tw:flex-1 tw:text-center tw:font-bold tw:tabular-nums",
							disabled: o.value,
							onInput: u
						}, null, 40, Cl), [[
							mo,
							s.value,
							void 0,
							{ number: !0 }
						]]),
						K("button", {
							type: "button",
							class: "tw:dui-btn tw:dui-join-item tw:min-h-11",
							disabled: o.value,
							"aria-label": "Increase quantity",
							onClick: n[3] ||= (e) => l(1)
						}, [...n[8] ||= [K("span", {
							class: "tw:text-xl",
							"aria-hidden": "true"
						}, "+", -1)]], 8, wl)
					]), K("button", {
						type: "submit",
						class: "tw:dui-btn tw:dui-btn-primary tw:min-h-11",
						disabled: o.value || !c.value
					}, O(o.value ? "Saving..." : "Apply"), 9, Tl)]),
					n[10] ||= K("small", { class: "tw:opacity-65" }, "Set zero to mark the item as used up.", -1)
				], 32),
				e.item.canEquip ? (W(), G("button", {
					key: 0,
					type: "button",
					class: D(["tw:dui-btn tw:min-h-11 tw:w-full", e.item.equipped ? "tw:dui-btn-outline" : "tw:dui-btn-secondary"]),
					disabled: o.value,
					onClick: f
				}, [K("i", {
					class: D(e.item.equipped ? "fa-solid fa-box-archive" : "fa-solid fa-hand-fist"),
					"aria-hidden": "true"
				}, null, 2), Xi(" " + O(e.item.equipped ? "Unequip" : "Equip"), 1)], 10, El)) : q("", !0)
			])]),
			a.value ? (W(), G("div", Dl, [n[11] ||= K("i", {
				class: "fa-solid fa-triangle-exclamation tw:mt-1",
				"aria-hidden": "true"
			}, null, -1), K("span", null, O(a.value), 1)])) : i.value ? (W(), G("div", Ol, [n[12] ||= K("i", {
				class: "fa-solid fa-check tw:mt-1",
				"aria-hidden": "true"
			}, null, -1), K("span", null, O(i.value), 1)])) : q("", !0)
		]));
	}
}), Al = {
	key: 1,
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-labelledby": "inventory-heading"
}, jl = { class: "tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:items-end tw:gap-3" }, Ml = { class: "tw:dui-badge tw:dui-badge-sm" }, Nl = {
	class: "tw:rounded-box tw:border tw:border-secondary/35 tw:bg-base-200 tw:p-3 tw:shadow-inner",
	"aria-labelledby": "encumbrance-heading"
}, Pl = { class: "tw:flex tw:items-baseline tw:justify-between tw:gap-3" }, Fl = { class: "tw:font-serif tw:text-lg tw:tabular-nums" }, Il = ["value"], Ll = {
	key: 0,
	class: "tw:grid tw:gap-4"
}, Rl = ["aria-labelledby"], zl = { class: "tw:mb-2 tw:flex tw:items-center tw:justify-between tw:px-1" }, Bl = ["id"], Vl = { class: "tw:text-xs tw:font-bold tw:opacity-55" }, Hl = { class: "tw:dui-list tw:m-0 tw:overflow-hidden tw:rounded-box tw:border tw:border-base-300 tw:bg-base-200 tw:p-0 tw:shadow-md tw:[list-style:none]" }, Ul = ["onClick"], Wl = {
	key: 0,
	class: "tw:dui-avatar"
}, Gl = { class: "tw:size-11 tw:overflow-hidden tw:rounded-field tw:border tw:border-secondary/35 tw:bg-base-300" }, Kl = ["src"], ql = {
	key: 1,
	class: "tw:dui-avatar tw:dui-avatar-placeholder"
}, Jl = { class: "tw:grid tw:size-11 tw:place-items-center tw:rounded-field tw:bg-base-300 tw:text-base-content" }, Yl = {
	class: "tw:font-serif tw:font-bold tw:text-secondary",
	"aria-hidden": "true"
}, Xl = { class: "tw:min-w-0" }, Zl = { class: "tw:block tw:[overflow-wrap:anywhere]" }, Ql = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-x-2 tw:opacity-65" }, $l = {
	key: 0,
	class: "tw:font-bold tw:text-secondary"
}, eu = { class: "tw:grid tw:justify-items-end tw:gap-1" }, tu = { class: "tw:dui-badge tw:dui-badge-sm tw:font-bold tw:tabular-nums" }, nu = {
	key: 1,
	class: "tw:dui-alert tw:items-start",
	role: "status"
}, ru = /* @__PURE__ */ R({
	__name: "InventorySection",
	props: {
		inventory: {},
		onToggleEquipped: { type: Function },
		onUpdateQuantity: { type: Function }
	},
	setup(e) {
		let t = e, n = tl(), r = [
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
		], i = Y(() => r.map((e) => ({
			...e,
			items: t.inventory.items.filter((t) => t.group === e.id)
		})).filter((e) => e.items.length > 0)), a = Y(() => t.inventory.items.find((e) => e.id === n.selectedInventoryItemId)), o = Y(() => t.inventory.maximumEncumbrance <= 0 ? 0 : Math.min(100, Math.max(0, t.inventory.currentEncumbrance / t.inventory.maximumEncumbrance * 100)));
		return (t, r) => a.value ? (W(), Vi(kl, {
			key: 0,
			item: a.value,
			"on-toggle-equipped": e.onToggleEquipped,
			"on-update-quantity": e.onUpdateQuantity,
			onBack: I(n).showInventoryList
		}, null, 8, [
			"item",
			"on-toggle-equipped",
			"on-update-quantity",
			"onBack"
		])) : (W(), G("section", Al, [
			K("header", jl, [r[0] ||= K("div", null, [K("p", { class: "tw:m-0 tw:text-xs tw:font-extrabold tw:tracking-[0.08em] tw:text-secondary tw:uppercase" }, " Pack & purse "), K("h2", {
				id: "inventory-heading",
				class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold"
			}, " Inventory ")], -1), K("span", Ml, O(e.inventory.items.length) + " items", 1)]),
			K("section", Nl, [
				K("div", Pl, [r[1] ||= K("h3", {
					id: "encumbrance-heading",
					class: "tw:m-0 tw:text-sm tw:font-bold"
				}, "Encumbrance", -1), K("strong", Fl, O(e.inventory.currentEncumbrance) + " / " + O(e.inventory.maximumEncumbrance), 1)]),
				K("progress", {
					class: D(["tw:dui-progress tw:mt-2", { "tw:dui-progress-warning": e.inventory.maximumEncumbrance > 0 && e.inventory.currentEncumbrance >= e.inventory.maximumEncumbrance }]),
					value: o.value,
					max: "100",
					"aria-label": "Current encumbrance"
				}, null, 10, Il),
				r[2] ||= K("p", { class: "tw:mt-2 tw:mb-0 tw:text-xs tw:opacity-65" }, " Choose an item to adjust its quantity or equip it. ", -1)
			]),
			i.value.length > 0 ? (W(), G("div", Ll, [(W(!0), G(H, null, z(i.value, (e) => (W(), G("section", {
				key: e.id,
				"aria-labelledby": `inventory-group-${e.id}`
			}, [K("div", zl, [K("h3", {
				id: `inventory-group-${e.id}`,
				class: "tw:m-0 tw:font-serif tw:text-base tw:font-bold"
			}, O(e.label), 9, Bl), K("span", Vl, O(e.items.length), 1)]), K("ul", Hl, [(W(!0), G(H, null, z(e.items, (e) => (W(), G("li", {
				key: e.id,
				class: "tw:dui-list-row tw:block tw:border-b tw:border-base-300 tw:p-0 last:tw:border-b-0"
			}, [K("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-ghost tw:grid tw:h-auto tw:min-h-16 tw:w-full tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:items-center tw:justify-start tw:gap-3 tw:rounded-none tw:bg-base-200 tw:p-3 tw:text-left tw:text-base-content tw:transition-colors hover:tw:bg-base-300 focus-visible:tw:outline-2 focus-visible:tw:outline-offset-[-2px] focus-visible:tw:outline-secondary",
				onClick: (t) => I(n).selectInventoryItem(e.id)
			}, [
				e.imageUrl ? (W(), G("div", Wl, [K("div", Gl, [K("img", {
					src: e.imageUrl,
					alt: "",
					width: "44",
					height: "44",
					loading: "lazy",
					class: "tw:h-full tw:w-full tw:object-cover"
				}, null, 8, Kl)])])) : (W(), G("div", ql, [K("div", Jl, [K("span", Yl, O(e.name.slice(0, 1).toUpperCase()), 1)])])),
				K("span", Xl, [K("strong", Zl, O(e.name), 1), K("small", Ql, [
					K("span", null, O(e.category), 1),
					K("span", null, "Enc " + O(e.encumbrance), 1),
					e.equipped ? (W(), G("span", $l, "Equipped")) : q("", !0)
				])]),
				K("span", eu, [K("span", tu, " ×" + O(e.quantity), 1), r[3] ||= K("i", {
					class: "fa-solid fa-chevron-right tw:text-xs tw:opacity-45",
					"aria-hidden": "true"
				}, null, -1)])
			], 8, Ul)]))), 128))])], 8, Rl))), 128))])) : (W(), G("div", nu, [...r[4] ||= [K("i", {
				class: "fa-solid fa-sack-xmark tw:mt-1",
				"aria-hidden": "true"
			}, null, -1), K("span", null, "This character is not carrying any supported trappings yet.", -1)]]))
		]));
	}
}), iu = {
	class: "tw:flex tw:h-full tw:w-[84vw] tw:max-w-[340px] tw:flex-col tw:border-r tw:border-secondary/50 tw:bg-base-200 tw:text-base-content tw:shadow-2xl",
	"aria-label": "Adventure menu"
}, au = { class: "tw:grid tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:border-b tw:border-secondary/40 tw:bg-neutral tw:p-4 tw:text-neutral-content" }, ou = { class: "tw:dui-avatar" }, su = { class: "tw:size-12 tw:overflow-hidden tw:rounded-field tw:border tw:border-secondary tw:bg-base-300" }, cu = ["src", "alt"], lu = { class: "tw:min-w-0" }, uu = { class: "tw:block tw:truncate tw:font-serif tw:text-lg" }, du = {
	class: "tw:min-h-0 tw:flex-1 tw:overflow-y-auto tw:p-3",
	"aria-label": "Character pages"
}, fu = { class: "tw:dui-menu tw:w-full tw:gap-2 tw:p-0" }, pu = ["aria-current", "onClick"], mu = {
	class: "tw:grid tw:size-9 tw:place-items-center tw:rounded-field tw:border tw:border-secondary/30 tw:bg-base-300 tw:text-secondary tw:shadow-inner",
	"aria-hidden": "true"
}, hu = { class: "tw:min-w-0" }, gu = { class: "tw:block tw:font-serif tw:text-base" }, _u = { class: "tw:block tw:truncate tw:opacity-65" }, vu = /* @__PURE__ */ R({
	__name: "AdventureMenu",
	props: { character: {} },
	setup(e) {
		let t = tl(), n = [
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
				description: "Gifts and abilities",
				icon: "fa-solid fa-star",
				id: "talents",
				label: "Talents"
			},
			{
				description: "Carried gear and coin",
				icon: "fa-solid fa-sack-xmark",
				id: "inventory",
				label: "Inventory"
			}
		];
		return (r, i) => (W(), G("aside", iu, [
			K("header", au, [
				K("div", ou, [K("div", su, [K("img", {
					src: e.character.imageUrl,
					alt: `${e.character.name} portrait`,
					width: "48",
					height: "48",
					class: "tw:h-full tw:w-full tw:object-cover"
				}, null, 8, cu)])]),
				K("div", lu, [i[1] ||= K("p", { class: "tw:m-0 tw:text-[0.65rem] tw:font-black tw:tracking-[0.14em] tw:text-secondary tw:uppercase" }, " Adventure menu ", -1), K("strong", uu, O(e.character.name), 1)]),
				K("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-sm tw:dui-btn-square",
					"aria-label": "Close menu",
					onClick: i[0] ||= (...e) => I(t).closeMenu && I(t).closeMenu(...e)
				}, [...i[2] ||= [K("i", {
					class: "fa-solid fa-xmark",
					"aria-hidden": "true"
				}, null, -1)]])
			]),
			K("nav", du, [K("ul", fu, [(W(), G(H, null, z(n, (e) => K("li", { key: e.id }, [K("button", {
				type: "button",
				class: D(["tw:dui-btn tw:dui-btn-ghost tw:grid tw:h-auto tw:min-h-16 tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:items-center tw:justify-start tw:gap-3 tw:border tw:border-transparent tw:bg-base-300/55 tw:px-3 tw:py-2 tw:text-left tw:text-base-content", { "tw:dui-menu-active tw:border-secondary/60": I(t).activeDestination === e.id }]),
				"aria-current": I(t).activeDestination === e.id ? "page" : void 0,
				onClick: (n) => I(t).showDestination(e.id)
			}, [
				K("span", mu, [K("i", { class: D(e.icon) }, null, 2)]),
				K("span", hu, [K("strong", gu, O(e.label), 1), K("small", _u, O(e.description), 1)]),
				i[3] ||= K("i", {
					class: "fa-solid fa-chevron-right tw:text-xs tw:opacity-45",
					"aria-hidden": "true"
				}, null, -1)
			], 10, pu)])), 64))])]),
			i[4] ||= K("footer", { class: "tw:border-t tw:border-base-300 tw:p-4 tw:text-xs tw:opacity-65" }, [K("i", {
				class: "fa-solid fa-scroll tw:mr-2 tw:text-secondary",
				"aria-hidden": "true"
			}), Xi(" Drowsy's WFRP4e On The Go ")], -1)
		]));
	}
}), yu = {
	class: "tw:grid tw:gap-4 tw:p-3",
	"aria-label": "Overview"
}, bu = { class: "tw:dui-stats tw:grid tw:w-full tw:grid-flow-row tw:grid-cols-1 tw:gap-px tw:overflow-visible tw:bg-base-300 tw:min-[350px]:grid-cols-2" }, xu = {
	key: 0,
	class: "tw:dui-stat-figure tw:text-secondary"
}, Su = ["aria-label", "aria-valuenow"], Cu = { class: "tw:dui-stat-title" }, wu = { class: "tw:dui-stat-value tw:font-serif tw:text-2xl tw:text-secondary tw:tabular-nums" }, Tu = {
	key: 0,
	class: "tw:text-xs"
}, Eu = { class: "tw:dui-stat tw:min-w-0 tw:bg-base-200 tw:p-3" }, Du = { class: "tw:dui-stat-title" }, Ou = { class: "tw:dui-stat-value tw:font-serif tw:text-2xl tw:text-secondary tw:tabular-nums" }, ku = { class: "tw:dui-stat-desc" }, Au = {
	class: "tw:dui-card tw:dui-card-border tw:bg-base-200 tw:shadow-md",
	"aria-labelledby": "characteristics-heading"
}, ju = { class: "tw:dui-card-body tw:gap-3 tw:p-3" }, Mu = { class: "tw:grid tw:grid-cols-2 tw:gap-2 tw:min-[360px]:grid-cols-5" }, Nu = ["data-tip", "aria-label"], Pu = { class: "tw:text-xs tw:font-black tw:text-secondary" }, Fu = { class: "tw:font-serif tw:text-xl tw:leading-tight tw:tabular-nums" }, Iu = { class: "tw:whitespace-nowrap tw:text-[0.65rem] tw:opacity-65" }, Lu = /* @__PURE__ */ R({
	__name: "PlayerOverviewSection",
	props: { character: {} },
	setup(e) {
		function t(e, t) {
			return !t || t <= 0 ? 0 : Math.max(0, Math.min(100, Math.round(e / t * 100)));
		}
		return (n, r) => (W(), G("section", yu, [K("div", bu, [(W(!0), G(H, null, z(e.character.resources, (e) => (W(), G("div", {
			key: e.label,
			class: "tw:dui-stat tw:min-w-0 tw:bg-base-200 tw:p-3"
		}, [
			e.label === "Advantage" ? (W(), G("div", xu, [K("div", {
				class: "tw:dui-radial-progress tw:size-11 tw:text-xs tw:font-bold tw:tabular-nums",
				style: fe(`--value:${t(e.current, e.maximum)}; --size:2.75rem; --thickness:0.25rem;`),
				role: "progressbar",
				"aria-label": `${e.label} progress`,
				"aria-valuenow": t(e.current, e.maximum),
				"aria-valuemin": "0",
				"aria-valuemax": "100"
			}, O(t(e.current, e.maximum)) + "% ", 13, Su)])) : q("", !0),
			K("div", Cu, O(e.label), 1),
			K("div", wu, [Xi(O(e.current), 1), e.maximum === void 0 ? q("", !0) : (W(), G("small", Tu, " / " + O(e.maximum), 1))])
		]))), 128)), K("div", Eu, [
			K("div", Du, O(e.character.experience.label), 1),
			K("div", Ou, O(e.character.experience.current), 1),
			K("div", ku, O(e.character.experience.maximum) + " earned", 1)
		])]), K("section", Au, [K("div", ju, [r[0] ||= K("h2", {
			id: "characteristics-heading",
			class: "tw:dui-card-title tw:font-serif"
		}, " Characteristics ", -1), K("div", Mu, [(W(!0), G(H, null, z(e.character.characteristics, (e) => (W(), G("article", {
			key: e.key,
			class: "tw:dui-tooltip tw:grid tw:min-w-0 tw:place-items-center tw:rounded-field tw:border tw:border-secondary/30 tw:bg-base-300 tw:px-1 tw:py-2 tw:text-center tw:shadow-inner",
			"data-tip": e.label,
			"aria-label": e.label
		}, [
			K("span", Pu, O(e.abbreviation), 1),
			K("strong", Fu, O(e.value), 1),
			K("small", Iu, " Bonus " + O(e.bonus), 1)
		], 8, Nu))), 128))])])])]));
	}
}), Ru = {
	class: "tw:grid tw:gap-3 tw:p-3",
	"aria-labelledby": "skills-heading"
}, zu = { class: "tw:flex tw:items-center tw:justify-between" }, Bu = { class: "tw:dui-badge tw:dui-badge-sm" }, Vu = { class: "tw:flex tw:items-center tw:justify-between tw:gap-2" }, Hu = ["checked"], Uu = { class: "tw:dui-list tw:m-0 tw:rounded-box tw:border tw:border-base-300 tw:bg-base-200 tw:p-0 tw:[list-style:none]" }, Wu = { class: "tw:min-w-12 tw:rounded-field tw:border tw:border-secondary/40 tw:bg-base-300 tw:p-2 tw:text-center tw:font-serif tw:text-xl tw:font-bold tw:text-secondary tw:tabular-nums tw:shadow-inner" }, Gu = { class: "tw:grid tw:min-w-0" }, Ku = { class: "tw:[overflow-wrap:anywhere]" }, qu = { class: "tw:opacity-70 tw:[overflow-wrap:anywhere]" }, Ju = {
	key: 0,
	class: "tw:m-0 tw:p-4 tw:text-center tw:opacity-70"
}, Yu = /* @__PURE__ */ R({
	__name: "PlayerSkillsSection",
	props: { skills: {} },
	setup(e) {
		let t = e, n = tl(), r = Y(() => {
			let e = n.trainedSkillsOnly ? t.skills.filter((e) => e.advances > 0) : t.skills;
			return n.normalizedSkillFilter ? e.filter((e) => e.name.toLocaleLowerCase().includes(n.normalizedSkillFilter)) : e;
		});
		return (e, t) => (W(), G("section", Ru, [
			K("header", zu, [t[3] ||= K("div", null, [K("p", { class: "tw:m-0 tw:text-xs tw:font-extrabold tw:tracking-[0.08em] tw:text-secondary tw:uppercase" }, " Tests at a glance "), K("h2", {
				id: "skills-heading",
				class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold"
			}, "Skills")], -1), K("span", Bu, O(r.value.length) + " shown", 1)]),
			t[6] ||= K("label", {
				for: "player-skill-filter",
				class: "tw:text-xs tw:font-bold"
			}, "Filter skills", -1),
			Nn(K("input", {
				id: "player-skill-filter",
				"onUpdate:modelValue": t[0] ||= (e) => I(n).skillFilter = e,
				type: "search",
				class: "tw:dui-input tw:dui-input-sm tw:min-h-11 tw:w-full",
				placeholder: "Name or specialization"
			}, null, 512), [[mo, I(n).skillFilter]]),
			K("div", Vu, [t[5] ||= K("span", { class: "tw:text-xs tw:font-bold" }, "Training", -1), K("form", {
				class: "tw:dui-filter",
				"aria-label": "Skill list filters",
				onReset: t[2] ||= (...e) => I(n).showAllSkills && I(n).showAllSkills(...e)
			}, [t[4] ||= K("input", {
				class: "tw:dui-btn tw:dui-btn-sm tw:dui-filter-reset tw:min-h-11",
				type: "reset",
				value: "All",
				"aria-label": "Show all skills"
			}, null, -1), K("input", {
				class: "tw:dui-btn tw:dui-btn-sm tw:min-h-11",
				type: "radio",
				name: "player-skill-training",
				"aria-label": "Trained only",
				checked: I(n).trainedSkillsOnly,
				onChange: t[1] ||= (...e) => I(n).showTrainedSkills && I(n).showTrainedSkills(...e)
			}, null, 40, Hu)], 32)]),
			K("ul", Uu, [(W(!0), G(H, null, z(r.value, (e) => (W(), G("li", {
				key: e.id,
				class: "tw:dui-list-row tw:grid-cols-[auto_minmax(0,1fr)] tw:items-center tw:border-b tw:border-base-300 tw:p-3 last:tw:border-b-0"
			}, [K("span", Wu, O(e.total), 1), K("div", Gu, [K("strong", Ku, O(e.name), 1), K("small", qu, O(e.characteristic) + " · " + O(e.advances) + " advances ", 1)])]))), 128))]),
			r.value.length === 0 ? (W(), G("p", Ju, " No skills match that filter. Clear it to see every recorded skill. ")) : q("", !0)
		]));
	}
}), Xu = { class: "tw:grid tw:flex-1 tw:place-items-start tw:p-4" }, Zu = {
	key: 0,
	role: "alert",
	class: "tw:dui-alert tw:dui-alert-warning tw:dui-alert-vertical"
}, Qu = {
	key: 1,
	role: "alert",
	class: "tw:dui-alert tw:dui-alert-error tw:dui-alert-vertical"
}, $u = { class: "tw:grid tw:gap-1" }, ed = { class: "tw:m-0 tw:font-serif tw:text-xl tw:font-bold" }, td = { class: "tw:m-0" }, nd = /* @__PURE__ */ R({
	__name: "PlayerSheetStateAlert",
	props: { characterState: {} },
	setup(e) {
		return (t, n) => (W(), G("section", Xu, [e.characterState.status === "missing" ? (W(), G("div", Zu, [...n[0] ||= [K("i", {
			class: "fa-solid fa-user-shield",
			"aria-hidden": "true"
		}, null, -1), K("div", { class: "tw:grid tw:gap-1" }, [K("h1", { class: "tw:m-0 tw:font-serif tw:text-xl tw:font-bold" }, "No character assigned"), K("p", { class: "tw:m-0" }, " Ask your GM to assign your character to this Foundry user, then refresh. ")], -1)]])) : e.characterState.status === "unsupported" ? (W(), G("div", Qu, [n[2] ||= K("i", {
			class: "fa-solid fa-triangle-exclamation",
			"aria-hidden": "true"
		}, null, -1), K("div", $u, [
			K("h1", ed, O(e.characterState.actorName), 1),
			K("p", td, O(e.characterState.reason), 1),
			n[1] ||= K("p", { class: "tw:m-0" }, "Ask your GM to check the assigned character, then refresh.", -1)
		])])) : q("", !0)]));
	}
}), rd = {
	class: "tw:grid tw:gap-3 tw:p-3",
	"aria-labelledby": "talents-heading"
}, id = { class: "tw:flex tw:items-center tw:justify-between" }, ad = { class: "tw:dui-badge tw:dui-badge-sm" }, od = { class: "tw:dui-list tw:m-0 tw:rounded-box tw:border tw:border-base-300 tw:bg-base-200 tw:p-0 tw:[list-style:none]" }, sd = { class: "tw:dui-badge tw:dui-badge-soft tw:dui-badge-sm tw:tabular-nums" }, cd = { class: "tw:grid tw:min-w-0" }, ld = { class: "tw:[overflow-wrap:anywhere]" }, ud = {
	key: 0,
	class: "tw:opacity-70 tw:[overflow-wrap:anywhere]"
}, dd = {
	key: 1,
	class: "tw:opacity-70"
}, fd = {
	key: 0,
	class: "tw:m-0 tw:p-4 tw:text-center tw:opacity-70"
}, pd = /* @__PURE__ */ R({
	__name: "PlayerTalentsSection",
	props: { talents: {} },
	setup(e) {
		return (t, n) => (W(), G("section", rd, [
			K("header", id, [n[0] ||= K("div", null, [K("p", { class: "tw:m-0 tw:text-xs tw:font-extrabold tw:tracking-[0.08em] tw:text-secondary tw:uppercase" }, " Natural gifts and training "), K("h2", {
				id: "talents-heading",
				class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold"
			}, "Talents")], -1), K("span", ad, O(e.talents.length) + " recorded", 1)]),
			K("ul", od, [(W(!0), G(H, null, z(e.talents, (e) => (W(), G("li", {
				key: e.id || e.name,
				class: "tw:dui-list-row tw:grid-cols-[auto_minmax(0,1fr)] tw:items-center tw:border-b tw:border-base-300 tw:p-3 last:tw:border-b-0"
			}, [K("span", sd, " Rank " + O(e.ranks), 1), K("div", cd, [K("strong", ld, O(e.name), 1), e.tests ? (W(), G("small", ud, " Tests: " + O(e.tests), 1)) : (W(), G("small", dd, "No test specialization"))])]))), 128))]),
			e.talents.length === 0 ? (W(), G("p", fd, " No talents are recorded on this character. Ask your GM if that seems wrong. ")) : q("", !0)
		]));
	}
}), md = { class: "tw:dui-drawer tw:mx-auto tw:h-full tw:min-h-0 tw:w-full tw:max-w-[430px] tw:overflow-hidden tw:[&_*]:box-border tw:[&_*::after]:box-border tw:[&_*::before]:box-border" }, hd = ["disabled"], gd = { class: "tw:dui-drawer-content tw:min-h-0" }, _d = { class: "tw:flex tw:h-full tw:min-h-0 tw:w-full tw:flex-col tw:overflow-hidden tw:border-x tw:border-base-300 tw:bg-base-100 tw:text-base-content tw:shadow-2xl" }, vd = { class: "tw:dui-navbar tw:min-h-14 tw:border-b tw:border-secondary/50 tw:bg-neutral tw:px-2 tw:py-2 tw:text-neutral-content" }, yd = { class: "tw:dui-navbar-start tw:w-auto" }, bd = ["disabled", "aria-expanded"], xd = { class: "tw:dui-navbar-center tw:min-w-0 tw:flex-1 tw:px-2" }, Sd = { class: "tw:min-w-0 tw:text-center" }, Cd = { class: "tw:block tw:truncate tw:font-serif tw:text-base" }, wd = { class: "tw:dui-navbar-end tw:w-auto" }, Td = ["aria-label"], Ed = { class: "tw:sr-only" }, Dd = {
	key: 0,
	class: "tw:grid tw:grid-cols-[auto_minmax(0,1fr)] tw:gap-3 tw:border-b tw:border-base-300 tw:bg-linear-to-br tw:from-base-200 tw:to-base-100 tw:p-4 tw:shadow-inner",
	"aria-labelledby": "character-name"
}, Od = { class: "tw:dui-avatar" }, kd = { class: "tw:h-[5.4rem] tw:w-[4.6rem] tw:overflow-hidden tw:rounded-field tw:border-2 tw:border-secondary tw:bg-neutral tw:ring-3 tw:ring-base-100" }, Ad = ["src", "alt"], jd = { class: "tw:grid tw:min-w-0 tw:content-center" }, Md = { class: "tw:m-0 tw:text-xs tw:font-extrabold tw:tracking-[0.08em] tw:text-secondary tw:uppercase" }, Nd = {
	id: "character-name",
	class: "tw:my-1 tw:font-serif tw:text-2xl tw:leading-none tw:font-bold tw:[overflow-wrap:anywhere]"
}, Pd = { class: "tw:text-sm tw:opacity-75 tw:[overflow-wrap:anywhere]" }, Fd = { class: "tw:col-span-full tw:grid tw:gap-1" }, Id = { class: "tw:flex tw:items-baseline tw:justify-between" }, Ld = { class: "tw:font-serif tw:text-lg tw:text-error-content tw:tabular-nums" }, Rd = ["value"], zd = {
	key: 1,
	class: "tw:grid tw:grid-cols-[auto_minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:border-b tw:border-base-300 tw:bg-base-200 tw:px-3 tw:py-2 tw:shadow-inner",
	"aria-label": "Current character"
}, Bd = { class: "tw:dui-avatar" }, Vd = { class: "tw:size-10 tw:overflow-hidden tw:rounded-field tw:border tw:border-secondary tw:bg-base-300" }, Hd = ["src", "alt"], Ud = { class: "tw:min-w-0" }, Wd = { class: "tw:block tw:truncate tw:font-serif" }, Gd = { class: "tw:block tw:truncate tw:opacity-65" }, Kd = { class: "tw:text-right" }, qd = { class: "tw:font-serif tw:text-base tw:tabular-nums" }, Jd = { class: "tw:min-h-0 tw:flex-1 tw:overflow-y-auto tw:overscroll-contain" }, Yd = {
	key: 0,
	id: "player-adventure-menu-panel",
	class: "tw:dui-drawer-side tw:z-50"
}, Xd = /* @__PURE__ */ R({
	__name: "PlayerShellApp",
	props: {
		characterState: {},
		onToggleInventoryEquipped: { type: Function },
		onUpdateInventoryQuantity: { type: Function }
	},
	setup(e) {
		let t = e, n = tl(), r = Y(() => t.characterState.status === "ready" ? t.characterState.character : void 0), i = Y(() => n.activeDestination === "status" ? "Status" : n.activeDestination === "skills" ? "Skills" : n.activeDestination === "talents" ? "Talents" : "Inventory"), a = Y(() => t.characterState.status === "ready" ? "Character linked" : t.characterState.status === "missing" ? "No character" : "Check character"), o = Y(() => {
			let e = r.value?.wounds;
			return !e?.maximum || e.maximum <= 0 ? 0 : Math.max(0, Math.min(100, e.current / e.maximum * 100));
		});
		return (t, s) => (W(), G("div", md, [
			Nn(K("input", {
				id: "player-adventure-menu",
				"onUpdate:modelValue": s[0] ||= (e) => I(n).menuOpen = e,
				type: "checkbox",
				class: "tw:dui-drawer-toggle",
				disabled: !r.value,
				"aria-label": "Open adventure menu"
			}, null, 8, hd), [[ho, I(n).menuOpen]]),
			K("div", gd, [K("main", _d, [K("header", vd, [
				K("div", yd, [K("button", {
					type: "button",
					class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-sm tw:min-h-10",
					disabled: !r.value,
					"aria-expanded": I(n).menuOpen,
					"aria-controls": "player-adventure-menu-panel",
					onClick: s[1] ||= (e) => I(n).menuOpen = !0
				}, [...s[2] ||= [K("i", {
					class: "fa-solid fa-bars",
					"aria-hidden": "true"
				}, null, -1), Xi(" Menu ", -1)]], 8, bd)]),
				K("div", xd, [K("div", Sd, [s[3] ||= K("p", { class: "tw:m-0 tw:text-[0.6rem] tw:font-black tw:tracking-[0.14em] tw:text-secondary tw:uppercase" }, " Drowsy's WFRP4e On The Go ", -1), K("strong", Cd, O(i.value), 1)])]),
				K("div", wd, [K("span", {
					class: "tw:dui-badge tw:dui-badge-ghost tw:dui-badge-sm",
					role: "status",
					"aria-label": a.value
				}, [K("span", {
					class: D(["tw:dui-status tw:dui-status-sm", {
						"tw:dui-status-success": e.characterState.status === "ready",
						"tw:dui-status-warning": e.characterState.status === "missing",
						"tw:dui-status-error": e.characterState.status === "unsupported"
					}]),
					"aria-hidden": "true"
				}, null, 2), K("span", Ed, O(a.value), 1)], 8, Td)])
			]), e.characterState.status === "ready" ? r.value ? (W(), G(H, { key: 1 }, [I(n).activeDestination === "status" ? (W(), G("section", Dd, [
				K("div", Od, [K("div", kd, [K("img", {
					src: r.value.imageUrl,
					alt: `${r.value.name} portrait`,
					width: "92",
					height: "108",
					class: "tw:h-full tw:w-full tw:object-cover"
				}, null, 8, Ad)])]),
				K("div", jd, [
					K("p", Md, O(r.value.species || "Unknown species"), 1),
					K("h1", Nd, O(r.value.name), 1),
					K("span", Pd, O(r.value.career), 1)
				]),
				K("div", Fd, [K("div", Id, [s[4] ||= K("span", { class: "tw:text-xs tw:font-extrabold tw:tracking-[0.08em] tw:uppercase" }, " Wounds ", -1), K("strong", Ld, O(r.value.wounds.current) + " / " + O(r.value.wounds.maximum), 1)]), K("progress", {
					class: "tw:dui-progress tw:dui-progress-error tw:accent-error",
					value: o.value,
					max: "100",
					"aria-label": "Current wounds"
				}, null, 8, Rd)])
			])) : (W(), G("section", zd, [
				K("div", Bd, [K("div", Vd, [K("img", {
					src: r.value.imageUrl,
					alt: `${r.value.name} portrait`,
					width: "40",
					height: "40",
					class: "tw:h-full tw:w-full tw:object-cover"
				}, null, 8, Hd)])]),
				K("div", Ud, [K("strong", Wd, O(r.value.name), 1), K("small", Gd, O(r.value.career), 1)]),
				K("div", Kd, [s[5] ||= K("span", { class: "tw:block tw:text-[0.6rem] tw:font-black tw:tracking-wide tw:uppercase" }, " Wounds ", -1), K("strong", qd, O(r.value.wounds.current) + " / " + O(r.value.wounds.maximum), 1)])
			])), K("div", Jd, [I(n).activeDestination === "status" ? (W(), Vi(Lu, {
				key: 0,
				character: r.value
			}, null, 8, ["character"])) : I(n).activeDestination === "skills" ? (W(), Vi(Yu, {
				key: 1,
				skills: r.value.skills
			}, null, 8, ["skills"])) : I(n).activeDestination === "talents" ? (W(), Vi(pd, {
				key: 2,
				talents: r.value.talents
			}, null, 8, ["talents"])) : (W(), Vi(ru, {
				key: 3,
				inventory: r.value.inventory,
				"on-toggle-equipped": e.onToggleInventoryEquipped,
				"on-update-quantity": e.onUpdateInventoryQuantity
			}, null, 8, [
				"inventory",
				"on-toggle-equipped",
				"on-update-quantity"
			]))])], 64)) : q("", !0) : (W(), Vi(nd, {
				key: 0,
				"character-state": e.characterState
			}, null, 8, ["character-state"]))])]),
			r.value ? (W(), G("div", Yd, [s[6] ||= K("label", {
				for: "player-adventure-menu",
				class: "tw:dui-drawer-overlay",
				"aria-label": "Close adventure menu"
			}, null, -1), Ki(vu, { character: r.value }, null, 8, ["character"])])) : q("", !0)
		]));
	}
});
//#endregion
//#region src/module/wfrp4e/value-readers.ts
function Q(e) {
	return typeof e == "object" && e ? e : void 0;
}
function $(e) {
	return typeof e == "string" ? e : "";
}
function Zd(e) {
	return typeof e == "number" && Number.isFinite(e) ? e : void 0;
}
function Qd(e) {
	if (typeof e == "number" && Number.isFinite(e)) return e;
	if (typeof e != "string" || !e.trim()) return;
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function $d(e, t, n) {
	return $(Q(e?.[t])?.[n]);
}
function ef(e, t, n) {
	return Zd(Q(e?.[t])?.[n]);
}
function tf(e, t, n) {
	return Qd(Q(e?.[t])?.[n]);
}
function nf(e, t, n) {
	return Q(e?.[t])?.[n] === !0;
}
//#endregion
//#region src/module/wfrp4e/player-inventory-adapter.ts
var rf = new Set([
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
]), af = [
	"arms-armour",
	"packs-containers",
	"provisions",
	"tools-lore",
	"belongings",
	"coin"
];
function of(e, t) {
	let n = Q(e.encumbrance), r = t.map(lf).filter((e) => e !== void 0).sort(df);
	return {
		currentEncumbrance: Qd(n?.current) ?? 0,
		items: r,
		maximumEncumbrance: Qd(n?.max) ?? 0
	};
}
async function sf(e, t) {
	if (!Number.isInteger(t) || t < 0) throw Error("Quantity must be a whole number of zero or more.");
	await ff(e).update({ "system.quantity.value": t });
}
async function cf(e) {
	let t = ff(e), n = Q(t.system)?.toggleEquip;
	if (typeof n != "function") throw Error(`${t.name} cannot be equipped.`);
	await n.call(t.system);
}
function lf(e) {
	let t = Q(e), n = $(t?.type);
	if (!t || !rf.has(n)) return;
	let r = $(t.id) || $(t._id), i = $(t.name), a = Q(t.system);
	if (!r || !i || !a) return;
	let o = Math.max(0, Math.floor(tf(a, "quantity", "value") ?? 1)), s = tf(a, "encumbrance", "value") ?? 0, { category: c, group: l } = uf(n, a);
	return {
		canEquip: typeof a.toggleEquip == "function",
		category: c,
		encumbrance: tf(a, "encumbrance", "total") ?? s * o,
		equipped: nf(a, "equipped", "value"),
		group: l,
		id: r,
		imageUrl: $(t.img),
		name: i,
		quantity: o
	};
}
function uf(e, t) {
	if (e === "weapon") return {
		category: "Weapon",
		group: "arms-armour"
	};
	if (e === "armour") return {
		category: "Armour",
		group: "arms-armour"
	};
	if (e === "ammunition") return {
		category: "Ammunition",
		group: "arms-armour"
	};
	if (e === "container") return {
		category: "Container",
		group: "packs-containers"
	};
	if (e === "money") return {
		category: "Coin",
		group: "coin"
	};
	let n = $d(t, "trappingType", "value");
	return [
		"foodAndDrink",
		"drugsPoisonsHerbsDraughts",
		"ingredient"
	].includes(n) ? {
		category: "Provision",
		group: "provisions"
	} : [
		"booksAndDocuments",
		"toolsAndKits",
		"tradeTools"
	].includes(n) ? {
		category: "Tool or lore",
		group: "tools-lore"
	} : n === "clothingAccessories" ? {
		category: "Clothing",
		group: "belongings"
	} : {
		category: "Belonging",
		group: "belongings"
	};
}
function df(e, t) {
	return af.indexOf(e.group) - af.indexOf(t.group) || e.name.localeCompare(t.name);
}
function ff(e) {
	let t = game.user.character;
	if (!t || t.type !== "character") throw Error("No supported player character is assigned.");
	let n = pf(t.items).find((t) => $(Q(t)?.id) === e);
	if (!mf(n)) throw Error("That inventory item is no longer available.");
	return n;
}
function pf(e) {
	return Array.isArray(e.contents) ? e.contents : [];
}
function mf(e) {
	let t = Q(e);
	return t !== void 0 && rf.has($(t.type)) && typeof t.update == "function";
}
//#endregion
//#region src/module/wfrp4e/player-character-adapter.ts
var hf = [
	{
		abbreviation: "WS",
		key: "ws",
		label: "Weapon Skill"
	},
	{
		abbreviation: "BS",
		key: "bs",
		label: "Ballistic Skill"
	},
	{
		abbreviation: "S",
		key: "s",
		label: "Strength"
	},
	{
		abbreviation: "T",
		key: "t",
		label: "Toughness"
	},
	{
		abbreviation: "I",
		key: "i",
		label: "Initiative"
	},
	{
		abbreviation: "Ag",
		key: "ag",
		label: "Agility"
	},
	{
		abbreviation: "Dex",
		key: "dex",
		label: "Dexterity"
	},
	{
		abbreviation: "Int",
		key: "int",
		label: "Intelligence"
	},
	{
		abbreviation: "WP",
		key: "wp",
		label: "Willpower"
	},
	{
		abbreviation: "Fel",
		key: "fel",
		label: "Fellowship"
	}
];
function gf() {
	let e = game.user.character;
	if (!e) return { status: "missing" };
	if (e.type !== "character") return {
		actorName: e.name,
		reason: "The assigned actor is not a WFRP4e player character.",
		status: "unsupported"
	};
	let t = _f(e);
	return t ? {
		character: t,
		status: "ready"
	} : {
		actorName: e.name,
		reason: "The assigned character data does not match the supported WFRP4e shape.",
		status: "unsupported"
	};
}
function _f(e) {
	let t = Q(e.system), n = Q(t?.status), r = Q(t?.details), i = vf(n), a = yf(t);
	if (!t || !n || !r || !i || !a) return;
	let o = Ef(e.items);
	return {
		career: Tf(r, o),
		characteristics: a,
		experience: Sf(r),
		id: e.id,
		imageUrl: e.img,
		inventory: of(n, o),
		name: e.name,
		resources: bf(n),
		skills: Cf(o, a),
		species: $d(r, "species", "value"),
		talents: wf(o),
		wounds: i
	};
}
function vf(e) {
	let t = Q(e?.wounds), n = Zd(t?.value), r = Zd(t?.max);
	if (!(n === void 0 || r === void 0)) return {
		current: n,
		label: "Wounds",
		maximum: r
	};
}
function yf(e) {
	let t = Q(e?.characteristics);
	if (!t) return;
	let n = [];
	for (let e of hf) {
		let r = Q(t[e.key]), i = Zd(r?.value);
		if (i === void 0) return;
		n.push({
			...e,
			bonus: Zd(r?.bonus) ?? Math.floor(i / 10),
			value: i
		});
	}
	return n;
}
function bf(e) {
	return [
		xf(e, "fortune", "Fortune"),
		xf(e, "fate", "Fate"),
		xf(e, "resolve", "Resolve"),
		xf(e, "resilience", "Resilience"),
		xf(e, "advantage", "Advantage")
	].filter((e) => e !== void 0);
}
function xf(e, t, n) {
	let r = Q(e[t]), i = Zd(r?.value);
	if (i === void 0) return;
	let a = Zd(r?.max);
	return a === void 0 ? {
		current: i,
		label: n
	} : {
		current: i,
		label: n,
		maximum: a
	};
}
function Sf(e) {
	let t = Q(e.experience), n = Zd(t?.total) ?? 0, r = Zd(t?.spent) ?? 0;
	return {
		current: Math.max(0, n - r),
		label: "XP available",
		maximum: n
	};
}
function Cf(e, t) {
	let n = new Map(t.map((e) => [e.key, e.value])), r = [];
	for (let t of e) {
		let e = Q(t);
		if (e?.type !== "skill") continue;
		let i = Q(e.system), a = $d(i, "characteristic", "value"), o = ef(i, "advances", "value") ?? 0, s = ef(i, "modifier", "value") ?? 0, c = (n.get(a) ?? 0) + o + s;
		r.push({
			advances: o,
			characteristic: a.toUpperCase(),
			id: $(e.id) || $(e._id),
			name: $(e.name),
			total: ef(i, "total", "value") ?? c
		});
	}
	return r.filter((e) => e.id && e.name).sort((e, t) => e.name.localeCompare(t.name));
}
function wf(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Q(n);
		if (e?.type !== "talent") continue;
		let r = $(e.name), i = Q(e.system), a = ef(i, "advances", "value") ?? 1;
		if (!r) continue;
		let o = t.get(r);
		if (o) {
			o.ranks += a;
			continue;
		}
		t.set(r, {
			id: $(e.id) || $(e._id),
			name: r,
			ranks: a,
			tests: $d(i, "tests", "value")
		});
	}
	return Array.from(t.values()).sort((e, t) => e.name.localeCompare(t.name));
}
function Tf(e, t) {
	let n = $(Q(e.career)?.name);
	if (n) return n;
	for (let e of t) {
		let t = Q(e), n = Q(t?.system);
		if (t?.type === "career" && nf(n, "current", "value")) return $(t.name);
	}
	return "No current career";
}
function Ef(e) {
	return Array.isArray(e.contents) ? e.contents : [];
}
//#endregion
//#region src/module/apps/player-shell/PlayerShellApplication.ts
var Df = class extends Xc {
	#e;
	#t;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${X}-player-shell`,
		classes: [X, Zc],
		tag: "section",
		window: {
			title: `${Es} Character`,
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
		return Xd;
	}
	getVueProps() {
		return {
			characterState: gf(),
			onToggleInventoryEquipped: cf,
			onUpdateInventoryQuantity: sf
		};
	}
	_replaceHTML(e, t, n) {
		$c(), super._replaceHTML(e, t, n), this.#e ??= Hooks.on("updateActor", (e) => {
			e.id === game.user.character?.id && this.render(!0);
		}), this.#t ??= Hooks.on("updateItem", (e) => {
			e.parent?.id === game.user.character?.id && this.render(!0);
		});
	}
	async _preClose(e) {
		this.#e !== void 0 && (Hooks.off("updateActor", this.#e), this.#e = void 0), this.#t !== void 0 && (Hooks.off("updateItem", this.#t), this.#t = void 0), await super._preClose(e);
	}
}, Of = { class: "starter-workbench" }, kf = {
	class: "starter-workbench__panel",
	"aria-labelledby": "status-heading"
}, Af = { class: "starter-workbench__facts" }, jf = /* @__PURE__ */ R({
	__name: "StarterWorkbenchApp",
	props: {
		hostName: { default: "Unknown user" },
		systemId: { default: "preview" }
	},
	setup(e) {
		return (t, n) => (W(), G("main", Of, [
			n[3] ||= K("header", { class: "starter-workbench__header" }, [K("p", { class: "starter-workbench__eyebrow" }, "Drowsy's WFRP4e On The Go"), K("h1", null, "Diagnostic Workbench")], -1),
			K("section", kf, [n[2] ||= K("h2", { id: "status-heading" }, "Runtime Context", -1), K("dl", Af, [K("div", null, [n[0] ||= K("dt", null, "User", -1), K("dd", null, O(e.hostName), 1)]), K("div", null, [n[1] ||= K("dt", null, "System", -1), K("dd", null, O(e.systemId), 1)])])]),
			n[4] ||= K("section", {
				class: "starter-workbench__panel",
				"aria-labelledby": "next-heading"
			}, [K("h2", { id: "next-heading" }, "Current Slice"), K("p", null, " On The Go now routes enabled GMs to mobile prep and enabled players to a read-only assigned character sheet. Keep Foundry document work in the module layer, then pass plain data into Vue. ")], -1)
		]));
	}
}), Mf = class extends Xc {
	static DEFAULT_OPTIONS = {
		id: `${X}-starter-workbench`,
		tag: "section",
		window: {
			title: `${Es} Diagnostic Workbench`,
			icon: "fa-solid fa-flask",
			resizable: !0
		},
		position: {
			width: 720,
			height: "auto"
		}
	};
	getVueComponent() {
		return jf;
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
function Nf() {
	return {
		getMobileUiMode: cc,
		isMobileUiActive() {
			return cc() !== "none";
		},
		async openDiagnosticWorkbench() {
			await new Mf().render(!0);
		},
		async openMobileJournals() {
			await new el().render(!0);
		},
		async openMobileUi() {
			await new (game.user.isGM ? el : Df)().render(!0);
		},
		async openPlayerUi() {
			await new Df().render(!0);
		}
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function Pf() {
	let e = game.modules.get(X);
	if (!e) throw Error(`Foundry module registry entry was not found for ${X}.`);
	e.api = Nf();
}
//#endregion
//#region src/module/open-mobile-ui.ts
async function Ff() {
	let e = cc();
	e === "gm" && await new el().render(!0), e === "player" && await new Df().render(!0);
}
//#endregion
//#region src/view/apps/activation-settings/ActivationSettingsApp.vue?vue&type=script&setup=true&lang.ts
var If = { class: "wfrp-on-the-go-settings" }, Lf = {
	key: 0,
	class: "wfrp-on-the-go-settings__users"
}, Rf = ["value"], zf = {
	key: 1,
	class: "wfrp-on-the-go-settings__empty"
}, Bf = { class: "wfrp-on-the-go-settings__actions" }, Vf = { "aria-live": "polite" }, Hf = ["disabled"], Uf = /* @__PURE__ */ R({
	__name: "ActivationSettingsApp",
	props: {
		saveEnabledUserIds: { type: Function },
		users: {}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(s()), r = /* @__PURE__ */ F(!1), i = /* @__PURE__ */ F(!1), a = Y(() => t.users.length > 0);
		Bn(() => t.users, () => {
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
		return (t, s) => (W(), G("main", If, [s[1] ||= K("header", { class: "wfrp-on-the-go-settings__header" }, [K("p", { class: "wfrp-on-the-go-settings__eyebrow" }, "Drowsy's WFRP4e On The Go"), K("h1", null, "Enabled Users")], -1), K("form", {
			class: "wfrp-on-the-go-settings__form",
			onSubmit: Co(o, ["prevent"])
		}, [a.value ? (W(), G("div", Lf, [(W(!0), G(H, null, z(e.users, (e) => (W(), G("label", {
			key: e.id,
			class: D(["wfrp-on-the-go-settings__user", { "wfrp-on-the-go-settings__user--current": e.isCurrentUser }])
		}, [
			Nn(K("input", {
				"onUpdate:modelValue": s[0] ||= (e) => n.value = e,
				type: "checkbox",
				value: e.id
			}, null, 8, Rf), [[ho, n.value]]),
			K("span", null, O(e.name), 1),
			K("strong", null, O(e.isGm ? "GM" : "Player") + O(e.isCurrentUser ? " · Current" : ""), 1)
		], 2))), 128))])) : (W(), G("p", zf, "No Foundry users are available.")), K("footer", Bf, [K("p", Vf, O(i.value ? "Saved" : ""), 1), K("button", {
			type: "submit",
			class: "tw:dui-btn tw:dui-btn-primary",
			disabled: r.value || !a.value
		}, O(r.value ? "Saving" : "Save"), 9, Hf)])], 32)]));
	}
}), Wf = class extends Xc {
	static DEFAULT_OPTIONS = {
		id: `${X}-activation-settings`,
		tag: "section",
		window: {
			title: `${Es} Activation`,
			icon: "fa-solid fa-mobile-screen-button",
			resizable: !0
		},
		position: {
			width: 520,
			height: "auto"
		}
	};
	getVueComponent() {
		return Uf;
	}
	getVueProps() {
		return {
			saveEnabledUserIds: ac,
			users: rc()
		};
	}
};
//#endregion
//#region src/module/register-module-settings.ts
function Gf() {
	tc(), game.settings.registerMenu(X, "enabledUsers", {
		name: "WFRP_ON_THE_GO.settings.activation.enabledUsers.name",
		label: "WFRP_ON_THE_GO.settings.activation.enabledUsers.label",
		hint: "WFRP_ON_THE_GO.settings.activation.enabledUsers.hint",
		icon: "fa-solid fa-mobile-screen-button",
		restricted: !0,
		type: Wf
	}), game.settings.registerMenu(X, "openDiagnosticWorkbench", {
		name: "WFRP_ON_THE_GO.settings.openDiagnosticWorkbench.name",
		label: "WFRP_ON_THE_GO.settings.openDiagnosticWorkbench.label",
		hint: "WFRP_ON_THE_GO.settings.openDiagnosticWorkbench.hint",
		icon: "fa-solid fa-window-restore",
		restricted: !0,
		type: Mf
	}), game.settings.registerMenu(X, "openMobileUi", {
		name: "WFRP_ON_THE_GO.settings.openMobileUi.name",
		label: "WFRP_ON_THE_GO.settings.openMobileUi.label",
		hint: "WFRP_ON_THE_GO.settings.openMobileUi.hint",
		icon: "fa-solid fa-mobile-screen-button",
		restricted: !0,
		type: el
	});
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function Kf() {
	Hooks.once("init", () => {
		Gf();
	}), Hooks.once("ready", async () => {
		if (game.system.id !== "wfrp4e") {
			console.warn(`${X} | Loaded outside ${Ds}; activation skipped.`);
			return;
		}
		await nc(), Pf(), await Ff();
	});
}
//#endregion
//#region src/main.ts
Kf();
//#endregion

//# sourceMappingURL=wfrp4e-on-the-go.mjs.map