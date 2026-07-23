import { m as zt, n as _e } from "./F0CanvasPanel-DrV1MNII.js";
import { c as Rt } from "./_commonjs-dynamic-modules-BpilXLfW.js";
var jt = { exports: {} };
var Yt;
function we() {
  return Yt || (Yt = 1, (function(c, e) {
    (function(t) {
      c.exports = t();
    })(function() {
      return (function t(r, a, n) {
        function o(_, S) {
          if (!a[_]) {
            if (!r[_]) {
              var v = typeof Rt == "function" && Rt;
              if (!S && v) return v(_, !0);
              if (i) return i(_, !0);
              var y = new Error("Cannot find module '" + _ + "'");
              throw y.code = "MODULE_NOT_FOUND", y;
            }
            var d = a[_] = { exports: {} };
            r[_][0].call(d.exports, function(k) {
              var u = r[_][1][k];
              return o(u || k);
            }, d, d.exports, t, r, a, n);
          }
          return a[_].exports;
        }
        for (var i = typeof Rt == "function" && Rt, h = 0; h < n.length; h++) o(n[h]);
        return o;
      })({ 1: [function(t, r, a) {
        var n = t("./utils"), o = t("./support"), i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        a.encode = function(h) {
          for (var _, S, v, y, d, k, u, m = [], f = 0, b = h.length, x = b, E = n.getTypeOf(h) !== "string"; f < h.length; ) x = b - f, v = E ? (_ = h[f++], S = f < b ? h[f++] : 0, f < b ? h[f++] : 0) : (_ = h.charCodeAt(f++), S = f < b ? h.charCodeAt(f++) : 0, f < b ? h.charCodeAt(f++) : 0), y = _ >> 2, d = (3 & _) << 4 | S >> 4, k = 1 < x ? (15 & S) << 2 | v >> 6 : 64, u = 2 < x ? 63 & v : 64, m.push(i.charAt(y) + i.charAt(d) + i.charAt(k) + i.charAt(u));
          return m.join("");
        }, a.decode = function(h) {
          var _, S, v, y, d, k, u = 0, m = 0, f = "data:";
          if (h.substr(0, f.length) === f) throw new Error("Invalid base64 input, it looks like a data url.");
          var b, x = 3 * (h = h.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (h.charAt(h.length - 1) === i.charAt(64) && x--, h.charAt(h.length - 2) === i.charAt(64) && x--, x % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
          for (b = o.uint8array ? new Uint8Array(0 | x) : new Array(0 | x); u < h.length; ) _ = i.indexOf(h.charAt(u++)) << 2 | (y = i.indexOf(h.charAt(u++))) >> 4, S = (15 & y) << 4 | (d = i.indexOf(h.charAt(u++))) >> 2, v = (3 & d) << 6 | (k = i.indexOf(h.charAt(u++))), b[m++] = _, d !== 64 && (b[m++] = S), k !== 64 && (b[m++] = v);
          return b;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(t, r, a) {
        var n = t("./external"), o = t("./stream/DataWorker"), i = t("./stream/Crc32Probe"), h = t("./stream/DataLengthProbe");
        function _(S, v, y, d, k) {
          this.compressedSize = S, this.uncompressedSize = v, this.crc32 = y, this.compression = d, this.compressedContent = k;
        }
        _.prototype = { getContentWorker: function() {
          var S = new o(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new h("data_length")), v = this;
          return S.on("end", function() {
            if (this.streamInfo.data_length !== v.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), S;
        }, getCompressedWorker: function() {
          return new o(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, _.createWorkerFrom = function(S, v, y) {
          return S.pipe(new i()).pipe(new h("uncompressedSize")).pipe(v.compressWorker(y)).pipe(new h("compressedSize")).withStreamInfo("compression", v);
        }, r.exports = _;
      }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(t, r, a) {
        var n = t("./stream/GenericWorker");
        a.STORE = { magic: "\0\0", compressWorker: function() {
          return new n("STORE compression");
        }, uncompressWorker: function() {
          return new n("STORE decompression");
        } }, a.DEFLATE = t("./flate");
      }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(t, r, a) {
        var n = t("./utils"), o = (function() {
          for (var i, h = [], _ = 0; _ < 256; _++) {
            i = _;
            for (var S = 0; S < 8; S++) i = 1 & i ? 3988292384 ^ i >>> 1 : i >>> 1;
            h[_] = i;
          }
          return h;
        })();
        r.exports = function(i, h) {
          return i !== void 0 && i.length ? n.getTypeOf(i) !== "string" ? (function(_, S, v, y) {
            var d = o, k = y + v;
            _ ^= -1;
            for (var u = y; u < k; u++) _ = _ >>> 8 ^ d[255 & (_ ^ S[u])];
            return -1 ^ _;
          })(0 | h, i, i.length, 0) : (function(_, S, v, y) {
            var d = o, k = y + v;
            _ ^= -1;
            for (var u = y; u < k; u++) _ = _ >>> 8 ^ d[255 & (_ ^ S.charCodeAt(u))];
            return -1 ^ _;
          })(0 | h, i, i.length, 0) : 0;
        };
      }, { "./utils": 32 }], 5: [function(t, r, a) {
        a.base64 = !1, a.binary = !1, a.dir = !1, a.createFolders = !0, a.date = null, a.compression = null, a.compressionOptions = null, a.comment = null, a.unixPermissions = null, a.dosPermissions = null;
      }, {}], 6: [function(t, r, a) {
        var n = null;
        n = typeof Promise < "u" ? Promise : t("lie"), r.exports = { Promise: n };
      }, { lie: 37 }], 7: [function(t, r, a) {
        var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", o = t("pako"), i = t("./utils"), h = t("./stream/GenericWorker"), _ = n ? "uint8array" : "array";
        function S(v, y) {
          h.call(this, "FlateWorker/" + v), this._pako = null, this._pakoAction = v, this._pakoOptions = y, this.meta = {};
        }
        a.magic = "\b\0", i.inherits(S, h), S.prototype.processChunk = function(v) {
          this.meta = v.meta, this._pako === null && this._createPako(), this._pako.push(i.transformTo(_, v.data), !1);
        }, S.prototype.flush = function() {
          h.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
        }, S.prototype.cleanUp = function() {
          h.prototype.cleanUp.call(this), this._pako = null;
        }, S.prototype._createPako = function() {
          this._pako = new o[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
          var v = this;
          this._pako.onData = function(y) {
            v.push({ data: y, meta: v.meta });
          };
        }, a.compressWorker = function(v) {
          return new S("Deflate", v);
        }, a.uncompressWorker = function() {
          return new S("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(t, r, a) {
        function n(d, k) {
          var u, m = "";
          for (u = 0; u < k; u++) m += String.fromCharCode(255 & d), d >>>= 8;
          return m;
        }
        function o(d, k, u, m, f, b) {
          var x, E, A = d.file, L = d.compression, F = b !== _.utf8encode, H = i.transformTo("string", b(A.name)), T = i.transformTo("string", _.utf8encode(A.name)), V = A.comment, Q = i.transformTo("string", b(V)), w = i.transformTo("string", _.utf8encode(V)), I = T.length !== A.name.length, l = w.length !== V.length, D = "", et = "", $ = "", rt = A.dir, W = A.date, tt = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          k && !u || (tt.crc32 = d.crc32, tt.compressedSize = d.compressedSize, tt.uncompressedSize = d.uncompressedSize);
          var z = 0;
          k && (z |= 8), F || !I && !l || (z |= 2048);
          var M = 0, J = 0;
          rt && (M |= 16), f === "UNIX" ? (J = 798, M |= (function(X, ct) {
            var mt = X;
            return X || (mt = ct ? 16893 : 33204), (65535 & mt) << 16;
          })(A.unixPermissions, rt)) : (J = 20, M |= (function(X) {
            return 63 & (X || 0);
          })(A.dosPermissions)), x = W.getUTCHours(), x <<= 6, x |= W.getUTCMinutes(), x <<= 5, x |= W.getUTCSeconds() / 2, E = W.getUTCFullYear() - 1980, E <<= 4, E |= W.getUTCMonth() + 1, E <<= 5, E |= W.getUTCDate(), I && (et = n(1, 1) + n(S(H), 4) + T, D += "up" + n(et.length, 2) + et), l && ($ = n(1, 1) + n(S(Q), 4) + w, D += "uc" + n($.length, 2) + $);
          var K = "";
          return K += `
\0`, K += n(z, 2), K += L.magic, K += n(x, 2), K += n(E, 2), K += n(tt.crc32, 4), K += n(tt.compressedSize, 4), K += n(tt.uncompressedSize, 4), K += n(H.length, 2), K += n(D.length, 2), { fileRecord: v.LOCAL_FILE_HEADER + K + H + D, dirRecord: v.CENTRAL_FILE_HEADER + n(J, 2) + K + n(Q.length, 2) + "\0\0\0\0" + n(M, 4) + n(m, 4) + H + D + Q };
        }
        var i = t("../utils"), h = t("../stream/GenericWorker"), _ = t("../utf8"), S = t("../crc32"), v = t("../signature");
        function y(d, k, u, m) {
          h.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = k, this.zipPlatform = u, this.encodeFileName = m, this.streamFiles = d, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
        }
        i.inherits(y, h), y.prototype.push = function(d) {
          var k = d.meta.percent || 0, u = this.entriesCount, m = this._sources.length;
          this.accumulate ? this.contentBuffer.push(d) : (this.bytesWritten += d.data.length, h.prototype.push.call(this, { data: d.data, meta: { currentFile: this.currentFile, percent: u ? (k + 100 * (u - m - 1)) / u : 100 } }));
        }, y.prototype.openedSource = function(d) {
          this.currentSourceOffset = this.bytesWritten, this.currentFile = d.file.name;
          var k = this.streamFiles && !d.file.dir;
          if (k) {
            var u = o(d, k, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({ data: u.fileRecord, meta: { percent: 0 } });
          } else this.accumulate = !0;
        }, y.prototype.closedSource = function(d) {
          this.accumulate = !1;
          var k = this.streamFiles && !d.file.dir, u = o(d, k, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          if (this.dirRecords.push(u.dirRecord), k) this.push({ data: (function(m) {
            return v.DATA_DESCRIPTOR + n(m.crc32, 4) + n(m.compressedSize, 4) + n(m.uncompressedSize, 4);
          })(d), meta: { percent: 100 } });
          else for (this.push({ data: u.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, y.prototype.flush = function() {
          for (var d = this.bytesWritten, k = 0; k < this.dirRecords.length; k++) this.push({ data: this.dirRecords[k], meta: { percent: 100 } });
          var u = this.bytesWritten - d, m = (function(f, b, x, E, A) {
            var L = i.transformTo("string", A(E));
            return v.CENTRAL_DIRECTORY_END + "\0\0\0\0" + n(f, 2) + n(f, 2) + n(b, 4) + n(x, 4) + n(L.length, 2) + L;
          })(this.dirRecords.length, u, d, this.zipComment, this.encodeFileName);
          this.push({ data: m, meta: { percent: 100 } });
        }, y.prototype.prepareNextSource = function() {
          this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
        }, y.prototype.registerPrevious = function(d) {
          this._sources.push(d);
          var k = this;
          return d.on("data", function(u) {
            k.processChunk(u);
          }), d.on("end", function() {
            k.closedSource(k.previous.streamInfo), k._sources.length ? k.prepareNextSource() : k.end();
          }), d.on("error", function(u) {
            k.error(u);
          }), this;
        }, y.prototype.resume = function() {
          return !!h.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
        }, y.prototype.error = function(d) {
          var k = this._sources;
          if (!h.prototype.error.call(this, d)) return !1;
          for (var u = 0; u < k.length; u++) try {
            k[u].error(d);
          } catch {
          }
          return !0;
        }, y.prototype.lock = function() {
          h.prototype.lock.call(this);
          for (var d = this._sources, k = 0; k < d.length; k++) d[k].lock();
        }, r.exports = y;
      }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(t, r, a) {
        var n = t("../compressions"), o = t("./ZipFileWorker");
        a.generateWorker = function(i, h, _) {
          var S = new o(h.streamFiles, _, h.platform, h.encodeFileName), v = 0;
          try {
            i.forEach(function(y, d) {
              v++;
              var k = (function(b, x) {
                var E = b || x, A = n[E];
                if (!A) throw new Error(E + " is not a valid compression method !");
                return A;
              })(d.options.compression, h.compression), u = d.options.compressionOptions || h.compressionOptions || {}, m = d.dir, f = d.date;
              d._compressWorker(k, u).withStreamInfo("file", { name: y, dir: m, date: f, comment: d.comment || "", unixPermissions: d.unixPermissions, dosPermissions: d.dosPermissions }).pipe(S);
            }), S.entriesCount = v;
          } catch (y) {
            S.error(y);
          }
          return S;
        };
      }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(t, r, a) {
        function n() {
          if (!(this instanceof n)) return new n();
          if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
          this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
            var o = new n();
            for (var i in this) typeof this[i] != "function" && (o[i] = this[i]);
            return o;
          };
        }
        (n.prototype = t("./object")).loadAsync = t("./load"), n.support = t("./support"), n.defaults = t("./defaults"), n.version = "3.10.1", n.loadAsync = function(o, i) {
          return new n().loadAsync(o, i);
        }, n.external = t("./external"), r.exports = n;
      }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(t, r, a) {
        var n = t("./utils"), o = t("./external"), i = t("./utf8"), h = t("./zipEntries"), _ = t("./stream/Crc32Probe"), S = t("./nodejsUtils");
        function v(y) {
          return new o.Promise(function(d, k) {
            var u = y.decompressed.getContentWorker().pipe(new _());
            u.on("error", function(m) {
              k(m);
            }).on("end", function() {
              u.streamInfo.crc32 !== y.decompressed.crc32 ? k(new Error("Corrupted zip : CRC32 mismatch")) : d();
            }).resume();
          });
        }
        r.exports = function(y, d) {
          var k = this;
          return d = n.extend(d || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: i.utf8decode }), S.isNode && S.isStream(y) ? o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : n.prepareContent("the loaded zip file", y, !0, d.optimizedBinaryString, d.base64).then(function(u) {
            var m = new h(d);
            return m.load(u), m;
          }).then(function(u) {
            var m = [o.Promise.resolve(u)], f = u.files;
            if (d.checkCRC32) for (var b = 0; b < f.length; b++) m.push(v(f[b]));
            return o.Promise.all(m);
          }).then(function(u) {
            for (var m = u.shift(), f = m.files, b = 0; b < f.length; b++) {
              var x = f[b], E = x.fileNameStr, A = n.resolve(x.fileNameStr);
              k.file(A, x.decompressed, { binary: !0, optimizedBinaryString: !0, date: x.date, dir: x.dir, comment: x.fileCommentStr.length ? x.fileCommentStr : null, unixPermissions: x.unixPermissions, dosPermissions: x.dosPermissions, createFolders: d.createFolders }), x.dir || (k.file(A).unsafeOriginalName = E);
            }
            return m.zipComment.length && (k.comment = m.zipComment), k;
          });
        };
      }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(t, r, a) {
        var n = t("../utils"), o = t("../stream/GenericWorker");
        function i(h, _) {
          o.call(this, "Nodejs stream input adapter for " + h), this._upstreamEnded = !1, this._bindStream(_);
        }
        n.inherits(i, o), i.prototype._bindStream = function(h) {
          var _ = this;
          (this._stream = h).pause(), h.on("data", function(S) {
            _.push({ data: S, meta: { percent: 0 } });
          }).on("error", function(S) {
            _.isPaused ? this.generatedError = S : _.error(S);
          }).on("end", function() {
            _.isPaused ? _._upstreamEnded = !0 : _.end();
          });
        }, i.prototype.pause = function() {
          return !!o.prototype.pause.call(this) && (this._stream.pause(), !0);
        }, i.prototype.resume = function() {
          return !!o.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
        }, r.exports = i;
      }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(t, r, a) {
        var n = t("readable-stream").Readable;
        function o(i, h, _) {
          n.call(this, h), this._helper = i;
          var S = this;
          i.on("data", function(v, y) {
            S.push(v) || S._helper.pause(), _ && _(y);
          }).on("error", function(v) {
            S.emit("error", v);
          }).on("end", function() {
            S.push(null);
          });
        }
        t("../utils").inherits(o, n), o.prototype._read = function() {
          this._helper.resume();
        }, r.exports = o;
      }, { "../utils": 32, "readable-stream": 16 }], 14: [function(t, r, a) {
        r.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(n, o) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(n, o);
          if (typeof n == "number") throw new Error('The "data" argument must not be a number');
          return new Buffer(n, o);
        }, allocBuffer: function(n) {
          if (Buffer.alloc) return Buffer.alloc(n);
          var o = new Buffer(n);
          return o.fill(0), o;
        }, isBuffer: function(n) {
          return Buffer.isBuffer(n);
        }, isStream: function(n) {
          return n && typeof n.on == "function" && typeof n.pause == "function" && typeof n.resume == "function";
        } };
      }, {}], 15: [function(t, r, a) {
        function n(A, L, F) {
          var H, T = i.getTypeOf(L), V = i.extend(F || {}, S);
          V.date = V.date || /* @__PURE__ */ new Date(), V.compression !== null && (V.compression = V.compression.toUpperCase()), typeof V.unixPermissions == "string" && (V.unixPermissions = parseInt(V.unixPermissions, 8)), V.unixPermissions && 16384 & V.unixPermissions && (V.dir = !0), V.dosPermissions && 16 & V.dosPermissions && (V.dir = !0), V.dir && (A = f(A)), V.createFolders && (H = m(A)) && b.call(this, H, !0);
          var Q = T === "string" && V.binary === !1 && V.base64 === !1;
          F && F.binary !== void 0 || (V.binary = !Q), (L instanceof v && L.uncompressedSize === 0 || V.dir || !L || L.length === 0) && (V.base64 = !1, V.binary = !0, L = "", V.compression = "STORE", T = "string");
          var w = null;
          w = L instanceof v || L instanceof h ? L : k.isNode && k.isStream(L) ? new u(A, L) : i.prepareContent(A, L, V.binary, V.optimizedBinaryString, V.base64);
          var I = new y(A, w, V);
          this.files[A] = I;
        }
        var o = t("./utf8"), i = t("./utils"), h = t("./stream/GenericWorker"), _ = t("./stream/StreamHelper"), S = t("./defaults"), v = t("./compressedObject"), y = t("./zipObject"), d = t("./generate"), k = t("./nodejsUtils"), u = t("./nodejs/NodejsStreamInputAdapter"), m = function(A) {
          A.slice(-1) === "/" && (A = A.substring(0, A.length - 1));
          var L = A.lastIndexOf("/");
          return 0 < L ? A.substring(0, L) : "";
        }, f = function(A) {
          return A.slice(-1) !== "/" && (A += "/"), A;
        }, b = function(A, L) {
          return L = L !== void 0 ? L : S.createFolders, A = f(A), this.files[A] || n.call(this, A, null, { dir: !0, createFolders: L }), this.files[A];
        };
        function x(A) {
          return Object.prototype.toString.call(A) === "[object RegExp]";
        }
        var E = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(A) {
          var L, F, H;
          for (L in this.files) H = this.files[L], (F = L.slice(this.root.length, L.length)) && L.slice(0, this.root.length) === this.root && A(F, H);
        }, filter: function(A) {
          var L = [];
          return this.forEach(function(F, H) {
            A(F, H) && L.push(H);
          }), L;
        }, file: function(A, L, F) {
          if (arguments.length !== 1) return A = this.root + A, n.call(this, A, L, F), this;
          if (x(A)) {
            var H = A;
            return this.filter(function(V, Q) {
              return !Q.dir && H.test(V);
            });
          }
          var T = this.files[this.root + A];
          return T && !T.dir ? T : null;
        }, folder: function(A) {
          if (!A) return this;
          if (x(A)) return this.filter(function(T, V) {
            return V.dir && A.test(T);
          });
          var L = this.root + A, F = b.call(this, L), H = this.clone();
          return H.root = F.name, H;
        }, remove: function(A) {
          A = this.root + A;
          var L = this.files[A];
          if (L || (A.slice(-1) !== "/" && (A += "/"), L = this.files[A]), L && !L.dir) delete this.files[A];
          else for (var F = this.filter(function(T, V) {
            return V.name.slice(0, A.length) === A;
          }), H = 0; H < F.length; H++) delete this.files[F[H].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(A) {
          var L, F = {};
          try {
            if ((F = i.extend(A || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: o.utf8encode })).type = F.type.toLowerCase(), F.compression = F.compression.toUpperCase(), F.type === "binarystring" && (F.type = "string"), !F.type) throw new Error("No output type specified.");
            i.checkSupport(F.type), F.platform !== "darwin" && F.platform !== "freebsd" && F.platform !== "linux" && F.platform !== "sunos" || (F.platform = "UNIX"), F.platform === "win32" && (F.platform = "DOS");
            var H = F.comment || this.comment || "";
            L = d.generateWorker(this, F, H);
          } catch (T) {
            (L = new h("error")).error(T);
          }
          return new _(L, F.type || "string", F.mimeType);
        }, generateAsync: function(A, L) {
          return this.generateInternalStream(A).accumulate(L);
        }, generateNodeStream: function(A, L) {
          return (A = A || {}).type || (A.type = "nodebuffer"), this.generateInternalStream(A).toNodejsStream(L);
        } };
        r.exports = E;
      }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(t, r, a) {
        r.exports = t("stream");
      }, { stream: void 0 }], 17: [function(t, r, a) {
        var n = t("./DataReader");
        function o(i) {
          n.call(this, i);
          for (var h = 0; h < this.data.length; h++) i[h] = 255 & i[h];
        }
        t("../utils").inherits(o, n), o.prototype.byteAt = function(i) {
          return this.data[this.zero + i];
        }, o.prototype.lastIndexOfSignature = function(i) {
          for (var h = i.charCodeAt(0), _ = i.charCodeAt(1), S = i.charCodeAt(2), v = i.charCodeAt(3), y = this.length - 4; 0 <= y; --y) if (this.data[y] === h && this.data[y + 1] === _ && this.data[y + 2] === S && this.data[y + 3] === v) return y - this.zero;
          return -1;
        }, o.prototype.readAndCheckSignature = function(i) {
          var h = i.charCodeAt(0), _ = i.charCodeAt(1), S = i.charCodeAt(2), v = i.charCodeAt(3), y = this.readData(4);
          return h === y[0] && _ === y[1] && S === y[2] && v === y[3];
        }, o.prototype.readData = function(i) {
          if (this.checkOffset(i), i === 0) return [];
          var h = this.data.slice(this.zero + this.index, this.zero + this.index + i);
          return this.index += i, h;
        }, r.exports = o;
      }, { "../utils": 32, "./DataReader": 18 }], 18: [function(t, r, a) {
        var n = t("../utils");
        function o(i) {
          this.data = i, this.length = i.length, this.index = 0, this.zero = 0;
        }
        o.prototype = { checkOffset: function(i) {
          this.checkIndex(this.index + i);
        }, checkIndex: function(i) {
          if (this.length < this.zero + i || i < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + i + "). Corrupted zip ?");
        }, setIndex: function(i) {
          this.checkIndex(i), this.index = i;
        }, skip: function(i) {
          this.setIndex(this.index + i);
        }, byteAt: function() {
        }, readInt: function(i) {
          var h, _ = 0;
          for (this.checkOffset(i), h = this.index + i - 1; h >= this.index; h--) _ = (_ << 8) + this.byteAt(h);
          return this.index += i, _;
        }, readString: function(i) {
          return n.transformTo("string", this.readData(i));
        }, readData: function() {
        }, lastIndexOfSignature: function() {
        }, readAndCheckSignature: function() {
        }, readDate: function() {
          var i = this.readInt(4);
          return new Date(Date.UTC(1980 + (i >> 25 & 127), (i >> 21 & 15) - 1, i >> 16 & 31, i >> 11 & 31, i >> 5 & 63, (31 & i) << 1));
        } }, r.exports = o;
      }, { "../utils": 32 }], 19: [function(t, r, a) {
        var n = t("./Uint8ArrayReader");
        function o(i) {
          n.call(this, i);
        }
        t("../utils").inherits(o, n), o.prototype.readData = function(i) {
          this.checkOffset(i);
          var h = this.data.slice(this.zero + this.index, this.zero + this.index + i);
          return this.index += i, h;
        }, r.exports = o;
      }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(t, r, a) {
        var n = t("./DataReader");
        function o(i) {
          n.call(this, i);
        }
        t("../utils").inherits(o, n), o.prototype.byteAt = function(i) {
          return this.data.charCodeAt(this.zero + i);
        }, o.prototype.lastIndexOfSignature = function(i) {
          return this.data.lastIndexOf(i) - this.zero;
        }, o.prototype.readAndCheckSignature = function(i) {
          return i === this.readData(4);
        }, o.prototype.readData = function(i) {
          this.checkOffset(i);
          var h = this.data.slice(this.zero + this.index, this.zero + this.index + i);
          return this.index += i, h;
        }, r.exports = o;
      }, { "../utils": 32, "./DataReader": 18 }], 21: [function(t, r, a) {
        var n = t("./ArrayReader");
        function o(i) {
          n.call(this, i);
        }
        t("../utils").inherits(o, n), o.prototype.readData = function(i) {
          if (this.checkOffset(i), i === 0) return new Uint8Array(0);
          var h = this.data.subarray(this.zero + this.index, this.zero + this.index + i);
          return this.index += i, h;
        }, r.exports = o;
      }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(t, r, a) {
        var n = t("../utils"), o = t("../support"), i = t("./ArrayReader"), h = t("./StringReader"), _ = t("./NodeBufferReader"), S = t("./Uint8ArrayReader");
        r.exports = function(v) {
          var y = n.getTypeOf(v);
          return n.checkSupport(y), y !== "string" || o.uint8array ? y === "nodebuffer" ? new _(v) : o.uint8array ? new S(n.transformTo("uint8array", v)) : new i(n.transformTo("array", v)) : new h(v);
        };
      }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(t, r, a) {
        a.LOCAL_FILE_HEADER = "PK", a.CENTRAL_FILE_HEADER = "PK", a.CENTRAL_DIRECTORY_END = "PK", a.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", a.ZIP64_CENTRAL_DIRECTORY_END = "PK", a.DATA_DESCRIPTOR = "PK\x07\b";
      }, {}], 24: [function(t, r, a) {
        var n = t("./GenericWorker"), o = t("../utils");
        function i(h) {
          n.call(this, "ConvertWorker to " + h), this.destType = h;
        }
        o.inherits(i, n), i.prototype.processChunk = function(h) {
          this.push({ data: o.transformTo(this.destType, h.data), meta: h.meta });
        }, r.exports = i;
      }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(t, r, a) {
        var n = t("./GenericWorker"), o = t("../crc32");
        function i() {
          n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
        }
        t("../utils").inherits(i, n), i.prototype.processChunk = function(h) {
          this.streamInfo.crc32 = o(h.data, this.streamInfo.crc32 || 0), this.push(h);
        }, r.exports = i;
      }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(t, r, a) {
        var n = t("../utils"), o = t("./GenericWorker");
        function i(h) {
          o.call(this, "DataLengthProbe for " + h), this.propName = h, this.withStreamInfo(h, 0);
        }
        n.inherits(i, o), i.prototype.processChunk = function(h) {
          if (h) {
            var _ = this.streamInfo[this.propName] || 0;
            this.streamInfo[this.propName] = _ + h.data.length;
          }
          o.prototype.processChunk.call(this, h);
        }, r.exports = i;
      }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(t, r, a) {
        var n = t("../utils"), o = t("./GenericWorker");
        function i(h) {
          o.call(this, "DataWorker");
          var _ = this;
          this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, h.then(function(S) {
            _.dataIsReady = !0, _.data = S, _.max = S && S.length || 0, _.type = n.getTypeOf(S), _.isPaused || _._tickAndRepeat();
          }, function(S) {
            _.error(S);
          });
        }
        n.inherits(i, o), i.prototype.cleanUp = function() {
          o.prototype.cleanUp.call(this), this.data = null;
        }, i.prototype.resume = function() {
          return !!o.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, n.delay(this._tickAndRepeat, [], this)), !0);
        }, i.prototype._tickAndRepeat = function() {
          this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
        }, i.prototype._tick = function() {
          if (this.isPaused || this.isFinished) return !1;
          var h = null, _ = Math.min(this.max, this.index + 16384);
          if (this.index >= this.max) return this.end();
          switch (this.type) {
            case "string":
              h = this.data.substring(this.index, _);
              break;
            case "uint8array":
              h = this.data.subarray(this.index, _);
              break;
            case "array":
            case "nodebuffer":
              h = this.data.slice(this.index, _);
          }
          return this.index = _, this.push({ data: h, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
        }, r.exports = i;
      }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(t, r, a) {
        function n(o) {
          this.name = o || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
        }
        n.prototype = { push: function(o) {
          this.emit("data", o);
        }, end: function() {
          if (this.isFinished) return !1;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = !0;
          } catch (o) {
            this.emit("error", o);
          }
          return !0;
        }, error: function(o) {
          return !this.isFinished && (this.isPaused ? this.generatedError = o : (this.isFinished = !0, this.emit("error", o), this.previous && this.previous.error(o), this.cleanUp()), !0);
        }, on: function(o, i) {
          return this._listeners[o].push(i), this;
        }, cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        }, emit: function(o, i) {
          if (this._listeners[o]) for (var h = 0; h < this._listeners[o].length; h++) this._listeners[o][h].call(this, i);
        }, pipe: function(o) {
          return o.registerPrevious(this);
        }, registerPrevious: function(o) {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = o.streamInfo, this.mergeStreamInfo(), this.previous = o;
          var i = this;
          return o.on("data", function(h) {
            i.processChunk(h);
          }), o.on("end", function() {
            i.end();
          }), o.on("error", function(h) {
            i.error(h);
          }), this;
        }, pause: function() {
          return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
        }, resume: function() {
          if (!this.isPaused || this.isFinished) return !1;
          var o = this.isPaused = !1;
          return this.generatedError && (this.error(this.generatedError), o = !0), this.previous && this.previous.resume(), !o;
        }, flush: function() {
        }, processChunk: function(o) {
          this.push(o);
        }, withStreamInfo: function(o, i) {
          return this.extraStreamInfo[o] = i, this.mergeStreamInfo(), this;
        }, mergeStreamInfo: function() {
          for (var o in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, o) && (this.streamInfo[o] = this.extraStreamInfo[o]);
        }, lock: function() {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = !0, this.previous && this.previous.lock();
        }, toString: function() {
          var o = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + o : o;
        } }, r.exports = n;
      }, {}], 29: [function(t, r, a) {
        var n = t("../utils"), o = t("./ConvertWorker"), i = t("./GenericWorker"), h = t("../base64"), _ = t("../support"), S = t("../external"), v = null;
        if (_.nodestream) try {
          v = t("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
        function y(k, u) {
          return new S.Promise(function(m, f) {
            var b = [], x = k._internalType, E = k._outputType, A = k._mimeType;
            k.on("data", function(L, F) {
              b.push(L), u && u(F);
            }).on("error", function(L) {
              b = [], f(L);
            }).on("end", function() {
              try {
                var L = (function(F, H, T) {
                  switch (F) {
                    case "blob":
                      return n.newBlob(n.transformTo("arraybuffer", H), T);
                    case "base64":
                      return h.encode(H);
                    default:
                      return n.transformTo(F, H);
                  }
                })(E, (function(F, H) {
                  var T, V = 0, Q = null, w = 0;
                  for (T = 0; T < H.length; T++) w += H[T].length;
                  switch (F) {
                    case "string":
                      return H.join("");
                    case "array":
                      return Array.prototype.concat.apply([], H);
                    case "uint8array":
                      for (Q = new Uint8Array(w), T = 0; T < H.length; T++) Q.set(H[T], V), V += H[T].length;
                      return Q;
                    case "nodebuffer":
                      return Buffer.concat(H);
                    default:
                      throw new Error("concat : unsupported type '" + F + "'");
                  }
                })(x, b), A);
                m(L);
              } catch (F) {
                f(F);
              }
              b = [];
            }).resume();
          });
        }
        function d(k, u, m) {
          var f = u;
          switch (u) {
            case "blob":
            case "arraybuffer":
              f = "uint8array";
              break;
            case "base64":
              f = "string";
          }
          try {
            this._internalType = f, this._outputType = u, this._mimeType = m, n.checkSupport(f), this._worker = k.pipe(new o(f)), k.lock();
          } catch (b) {
            this._worker = new i("error"), this._worker.error(b);
          }
        }
        d.prototype = { accumulate: function(k) {
          return y(this, k);
        }, on: function(k, u) {
          var m = this;
          return k === "data" ? this._worker.on(k, function(f) {
            u.call(m, f.data, f.meta);
          }) : this._worker.on(k, function() {
            n.delay(u, arguments, m);
          }), this;
        }, resume: function() {
          return n.delay(this._worker.resume, [], this._worker), this;
        }, pause: function() {
          return this._worker.pause(), this;
        }, toNodejsStream: function(k) {
          if (n.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
          return new v(this, { objectMode: this._outputType !== "nodebuffer" }, k);
        } }, r.exports = d;
      }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(t, r, a) {
        if (a.base64 = !0, a.array = !0, a.string = !0, a.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", a.nodebuffer = typeof Buffer < "u", a.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") a.blob = !1;
        else {
          var n = new ArrayBuffer(0);
          try {
            a.blob = new Blob([n], { type: "application/zip" }).size === 0;
          } catch {
            try {
              var o = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              o.append(n), a.blob = o.getBlob("application/zip").size === 0;
            } catch {
              a.blob = !1;
            }
          }
        }
        try {
          a.nodestream = !!t("readable-stream").Readable;
        } catch {
          a.nodestream = !1;
        }
      }, { "readable-stream": 16 }], 31: [function(t, r, a) {
        for (var n = t("./utils"), o = t("./support"), i = t("./nodejsUtils"), h = t("./stream/GenericWorker"), _ = new Array(256), S = 0; S < 256; S++) _[S] = 252 <= S ? 6 : 248 <= S ? 5 : 240 <= S ? 4 : 224 <= S ? 3 : 192 <= S ? 2 : 1;
        _[254] = _[254] = 1;
        function v() {
          h.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function y() {
          h.call(this, "utf-8 encode");
        }
        a.utf8encode = function(d) {
          return o.nodebuffer ? i.newBufferFrom(d, "utf-8") : (function(k) {
            var u, m, f, b, x, E = k.length, A = 0;
            for (b = 0; b < E; b++) (64512 & (m = k.charCodeAt(b))) == 55296 && b + 1 < E && (64512 & (f = k.charCodeAt(b + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (f - 56320), b++), A += m < 128 ? 1 : m < 2048 ? 2 : m < 65536 ? 3 : 4;
            for (u = o.uint8array ? new Uint8Array(A) : new Array(A), b = x = 0; x < A; b++) (64512 & (m = k.charCodeAt(b))) == 55296 && b + 1 < E && (64512 & (f = k.charCodeAt(b + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (f - 56320), b++), m < 128 ? u[x++] = m : (m < 2048 ? u[x++] = 192 | m >>> 6 : (m < 65536 ? u[x++] = 224 | m >>> 12 : (u[x++] = 240 | m >>> 18, u[x++] = 128 | m >>> 12 & 63), u[x++] = 128 | m >>> 6 & 63), u[x++] = 128 | 63 & m);
            return u;
          })(d);
        }, a.utf8decode = function(d) {
          return o.nodebuffer ? n.transformTo("nodebuffer", d).toString("utf-8") : (function(k) {
            var u, m, f, b, x = k.length, E = new Array(2 * x);
            for (u = m = 0; u < x; ) if ((f = k[u++]) < 128) E[m++] = f;
            else if (4 < (b = _[f])) E[m++] = 65533, u += b - 1;
            else {
              for (f &= b === 2 ? 31 : b === 3 ? 15 : 7; 1 < b && u < x; ) f = f << 6 | 63 & k[u++], b--;
              1 < b ? E[m++] = 65533 : f < 65536 ? E[m++] = f : (f -= 65536, E[m++] = 55296 | f >> 10 & 1023, E[m++] = 56320 | 1023 & f);
            }
            return E.length !== m && (E.subarray ? E = E.subarray(0, m) : E.length = m), n.applyFromCharCode(E);
          })(d = n.transformTo(o.uint8array ? "uint8array" : "array", d));
        }, n.inherits(v, h), v.prototype.processChunk = function(d) {
          var k = n.transformTo(o.uint8array ? "uint8array" : "array", d.data);
          if (this.leftOver && this.leftOver.length) {
            if (o.uint8array) {
              var u = k;
              (k = new Uint8Array(u.length + this.leftOver.length)).set(this.leftOver, 0), k.set(u, this.leftOver.length);
            } else k = this.leftOver.concat(k);
            this.leftOver = null;
          }
          var m = (function(b, x) {
            var E;
            for ((x = x || b.length) > b.length && (x = b.length), E = x - 1; 0 <= E && (192 & b[E]) == 128; ) E--;
            return E < 0 || E === 0 ? x : E + _[b[E]] > x ? E : x;
          })(k), f = k;
          m !== k.length && (o.uint8array ? (f = k.subarray(0, m), this.leftOver = k.subarray(m, k.length)) : (f = k.slice(0, m), this.leftOver = k.slice(m, k.length))), this.push({ data: a.utf8decode(f), meta: d.meta });
        }, v.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: a.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, a.Utf8DecodeWorker = v, n.inherits(y, h), y.prototype.processChunk = function(d) {
          this.push({ data: a.utf8encode(d.data), meta: d.meta });
        }, a.Utf8EncodeWorker = y;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(t, r, a) {
        var n = t("./support"), o = t("./base64"), i = t("./nodejsUtils"), h = t("./external");
        function _(u) {
          return u;
        }
        function S(u, m) {
          for (var f = 0; f < u.length; ++f) m[f] = 255 & u.charCodeAt(f);
          return m;
        }
        t("setimmediate"), a.newBlob = function(u, m) {
          a.checkSupport("blob");
          try {
            return new Blob([u], { type: m });
          } catch {
            try {
              var f = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              return f.append(u), f.getBlob(m);
            } catch {
              throw new Error("Bug : can't construct the Blob.");
            }
          }
        };
        var v = { stringifyByChunk: function(u, m, f) {
          var b = [], x = 0, E = u.length;
          if (E <= f) return String.fromCharCode.apply(null, u);
          for (; x < E; ) m === "array" || m === "nodebuffer" ? b.push(String.fromCharCode.apply(null, u.slice(x, Math.min(x + f, E)))) : b.push(String.fromCharCode.apply(null, u.subarray(x, Math.min(x + f, E)))), x += f;
          return b.join("");
        }, stringifyByChar: function(u) {
          for (var m = "", f = 0; f < u.length; f++) m += String.fromCharCode(u[f]);
          return m;
        }, applyCanBeUsed: { uint8array: (function() {
          try {
            return n.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
          } catch {
            return !1;
          }
        })(), nodebuffer: (function() {
          try {
            return n.nodebuffer && String.fromCharCode.apply(null, i.allocBuffer(1)).length === 1;
          } catch {
            return !1;
          }
        })() } };
        function y(u) {
          var m = 65536, f = a.getTypeOf(u), b = !0;
          if (f === "uint8array" ? b = v.applyCanBeUsed.uint8array : f === "nodebuffer" && (b = v.applyCanBeUsed.nodebuffer), b) for (; 1 < m; ) try {
            return v.stringifyByChunk(u, f, m);
          } catch {
            m = Math.floor(m / 2);
          }
          return v.stringifyByChar(u);
        }
        function d(u, m) {
          for (var f = 0; f < u.length; f++) m[f] = u[f];
          return m;
        }
        a.applyFromCharCode = y;
        var k = {};
        k.string = { string: _, array: function(u) {
          return S(u, new Array(u.length));
        }, arraybuffer: function(u) {
          return k.string.uint8array(u).buffer;
        }, uint8array: function(u) {
          return S(u, new Uint8Array(u.length));
        }, nodebuffer: function(u) {
          return S(u, i.allocBuffer(u.length));
        } }, k.array = { string: y, array: _, arraybuffer: function(u) {
          return new Uint8Array(u).buffer;
        }, uint8array: function(u) {
          return new Uint8Array(u);
        }, nodebuffer: function(u) {
          return i.newBufferFrom(u);
        } }, k.arraybuffer = { string: function(u) {
          return y(new Uint8Array(u));
        }, array: function(u) {
          return d(new Uint8Array(u), new Array(u.byteLength));
        }, arraybuffer: _, uint8array: function(u) {
          return new Uint8Array(u);
        }, nodebuffer: function(u) {
          return i.newBufferFrom(new Uint8Array(u));
        } }, k.uint8array = { string: y, array: function(u) {
          return d(u, new Array(u.length));
        }, arraybuffer: function(u) {
          return u.buffer;
        }, uint8array: _, nodebuffer: function(u) {
          return i.newBufferFrom(u);
        } }, k.nodebuffer = { string: y, array: function(u) {
          return d(u, new Array(u.length));
        }, arraybuffer: function(u) {
          return k.nodebuffer.uint8array(u).buffer;
        }, uint8array: function(u) {
          return d(u, new Uint8Array(u.length));
        }, nodebuffer: _ }, a.transformTo = function(u, m) {
          if (m = m || "", !u) return m;
          a.checkSupport(u);
          var f = a.getTypeOf(m);
          return k[f][u](m);
        }, a.resolve = function(u) {
          for (var m = u.split("/"), f = [], b = 0; b < m.length; b++) {
            var x = m[b];
            x === "." || x === "" && b !== 0 && b !== m.length - 1 || (x === ".." ? f.pop() : f.push(x));
          }
          return f.join("/");
        }, a.getTypeOf = function(u) {
          return typeof u == "string" ? "string" : Object.prototype.toString.call(u) === "[object Array]" ? "array" : n.nodebuffer && i.isBuffer(u) ? "nodebuffer" : n.uint8array && u instanceof Uint8Array ? "uint8array" : n.arraybuffer && u instanceof ArrayBuffer ? "arraybuffer" : void 0;
        }, a.checkSupport = function(u) {
          if (!n[u.toLowerCase()]) throw new Error(u + " is not supported by this platform");
        }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(u) {
          var m, f, b = "";
          for (f = 0; f < (u || "").length; f++) b += "\\x" + ((m = u.charCodeAt(f)) < 16 ? "0" : "") + m.toString(16).toUpperCase();
          return b;
        }, a.delay = function(u, m, f) {
          setImmediate(function() {
            u.apply(f || null, m || []);
          });
        }, a.inherits = function(u, m) {
          function f() {
          }
          f.prototype = m.prototype, u.prototype = new f();
        }, a.extend = function() {
          var u, m, f = {};
          for (u = 0; u < arguments.length; u++) for (m in arguments[u]) Object.prototype.hasOwnProperty.call(arguments[u], m) && f[m] === void 0 && (f[m] = arguments[u][m]);
          return f;
        }, a.prepareContent = function(u, m, f, b, x) {
          return h.Promise.resolve(m).then(function(E) {
            return n.blob && (E instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(E)) !== -1) && typeof FileReader < "u" ? new h.Promise(function(A, L) {
              var F = new FileReader();
              F.onload = function(H) {
                A(H.target.result);
              }, F.onerror = function(H) {
                L(H.target.error);
              }, F.readAsArrayBuffer(E);
            }) : E;
          }).then(function(E) {
            var A = a.getTypeOf(E);
            return A ? (A === "arraybuffer" ? E = a.transformTo("uint8array", E) : A === "string" && (x ? E = o.decode(E) : f && b !== !0 && (E = (function(L) {
              return S(L, n.uint8array ? new Uint8Array(L.length) : new Array(L.length));
            })(E))), E) : h.Promise.reject(new Error("Can't read the data of '" + u + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(t, r, a) {
        var n = t("./reader/readerFor"), o = t("./utils"), i = t("./signature"), h = t("./zipEntry"), _ = t("./support");
        function S(v) {
          this.files = [], this.loadOptions = v;
        }
        S.prototype = { checkSignature: function(v) {
          if (!this.reader.readAndCheckSignature(v)) {
            this.reader.index -= 4;
            var y = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + o.pretty(y) + ", expected " + o.pretty(v) + ")");
          }
        }, isSignature: function(v, y) {
          var d = this.reader.index;
          this.reader.setIndex(v);
          var k = this.reader.readString(4) === y;
          return this.reader.setIndex(d), k;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var v = this.reader.readData(this.zipCommentLength), y = _.uint8array ? "uint8array" : "array", d = o.transformTo(y, v);
          this.zipComment = this.loadOptions.decodeFileName(d);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var v, y, d, k = this.zip64EndOfCentralSize - 44; 0 < k; ) v = this.reader.readInt(2), y = this.reader.readInt(4), d = this.reader.readData(y), this.zip64ExtensibleData[v] = { id: v, length: y, value: d };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var v, y;
          for (v = 0; v < this.files.length; v++) y = this.files[v], this.reader.setIndex(y.localHeaderOffset), this.checkSignature(i.LOCAL_FILE_HEADER), y.readLocalPart(this.reader), y.handleUTF8(), y.processAttributes();
        }, readCentralDir: function() {
          var v;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(i.CENTRAL_FILE_HEADER); ) (v = new h({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(v);
          if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var v = this.reader.lastIndexOfSignature(i.CENTRAL_DIRECTORY_END);
          if (v < 0) throw this.isSignature(0, i.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
          this.reader.setIndex(v);
          var y = v;
          if (this.checkSignature(i.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === o.MAX_VALUE_16BITS || this.diskWithCentralDirStart === o.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === o.MAX_VALUE_16BITS || this.centralDirRecords === o.MAX_VALUE_16BITS || this.centralDirSize === o.MAX_VALUE_32BITS || this.centralDirOffset === o.MAX_VALUE_32BITS) {
            if (this.zip64 = !0, (v = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(v), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, i.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var d = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (d += 20, d += 12 + this.zip64EndOfCentralSize);
          var k = y - d;
          if (0 < k) this.isSignature(y, i.CENTRAL_FILE_HEADER) || (this.reader.zero = k);
          else if (k < 0) throw new Error("Corrupted zip: missing " + Math.abs(k) + " bytes.");
        }, prepareReader: function(v) {
          this.reader = n(v);
        }, load: function(v) {
          this.prepareReader(v), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, r.exports = S;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(t, r, a) {
        var n = t("./reader/readerFor"), o = t("./utils"), i = t("./compressedObject"), h = t("./crc32"), _ = t("./utf8"), S = t("./compressions"), v = t("./support");
        function y(d, k) {
          this.options = d, this.loadOptions = k;
        }
        y.prototype = { isEncrypted: function() {
          return (1 & this.bitFlag) == 1;
        }, useUTF8: function() {
          return (2048 & this.bitFlag) == 2048;
        }, readLocalPart: function(d) {
          var k, u;
          if (d.skip(22), this.fileNameLength = d.readInt(2), u = d.readInt(2), this.fileName = d.readData(this.fileNameLength), d.skip(u), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if ((k = (function(m) {
            for (var f in S) if (Object.prototype.hasOwnProperty.call(S, f) && S[f].magic === m) return S[f];
            return null;
          })(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + o.pretty(this.compressionMethod) + " unknown (inner file : " + o.transformTo("string", this.fileName) + ")");
          this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, k, d.readData(this.compressedSize));
        }, readCentralPart: function(d) {
          this.versionMadeBy = d.readInt(2), d.skip(2), this.bitFlag = d.readInt(2), this.compressionMethod = d.readString(2), this.date = d.readDate(), this.crc32 = d.readInt(4), this.compressedSize = d.readInt(4), this.uncompressedSize = d.readInt(4);
          var k = d.readInt(2);
          if (this.extraFieldsLength = d.readInt(2), this.fileCommentLength = d.readInt(2), this.diskNumberStart = d.readInt(2), this.internalFileAttributes = d.readInt(2), this.externalFileAttributes = d.readInt(4), this.localHeaderOffset = d.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          d.skip(k), this.readExtraFields(d), this.parseZIP64ExtraField(d), this.fileComment = d.readData(this.fileCommentLength);
        }, processAttributes: function() {
          this.unixPermissions = null, this.dosPermissions = null;
          var d = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), d == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), d == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
        }, parseZIP64ExtraField: function() {
          if (this.extraFields[1]) {
            var d = n(this.extraFields[1].value);
            this.uncompressedSize === o.MAX_VALUE_32BITS && (this.uncompressedSize = d.readInt(8)), this.compressedSize === o.MAX_VALUE_32BITS && (this.compressedSize = d.readInt(8)), this.localHeaderOffset === o.MAX_VALUE_32BITS && (this.localHeaderOffset = d.readInt(8)), this.diskNumberStart === o.MAX_VALUE_32BITS && (this.diskNumberStart = d.readInt(4));
          }
        }, readExtraFields: function(d) {
          var k, u, m, f = d.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); d.index + 4 < f; ) k = d.readInt(2), u = d.readInt(2), m = d.readData(u), this.extraFields[k] = { id: k, length: u, value: m };
          d.setIndex(f);
        }, handleUTF8: function() {
          var d = v.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = _.utf8decode(this.fileName), this.fileCommentStr = _.utf8decode(this.fileComment);
          else {
            var k = this.findExtraFieldUnicodePath();
            if (k !== null) this.fileNameStr = k;
            else {
              var u = o.transformTo(d, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(u);
            }
            var m = this.findExtraFieldUnicodeComment();
            if (m !== null) this.fileCommentStr = m;
            else {
              var f = o.transformTo(d, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(f);
            }
          }
        }, findExtraFieldUnicodePath: function() {
          var d = this.extraFields[28789];
          if (d) {
            var k = n(d.value);
            return k.readInt(1) !== 1 || h(this.fileName) !== k.readInt(4) ? null : _.utf8decode(k.readData(d.length - 5));
          }
          return null;
        }, findExtraFieldUnicodeComment: function() {
          var d = this.extraFields[25461];
          if (d) {
            var k = n(d.value);
            return k.readInt(1) !== 1 || h(this.fileComment) !== k.readInt(4) ? null : _.utf8decode(k.readData(d.length - 5));
          }
          return null;
        } }, r.exports = y;
      }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(t, r, a) {
        function n(k, u, m) {
          this.name = k, this.dir = m.dir, this.date = m.date, this.comment = m.comment, this.unixPermissions = m.unixPermissions, this.dosPermissions = m.dosPermissions, this._data = u, this._dataBinary = m.binary, this.options = { compression: m.compression, compressionOptions: m.compressionOptions };
        }
        var o = t("./stream/StreamHelper"), i = t("./stream/DataWorker"), h = t("./utf8"), _ = t("./compressedObject"), S = t("./stream/GenericWorker");
        n.prototype = { internalStream: function(k) {
          var u = null, m = "string";
          try {
            if (!k) throw new Error("No output type specified.");
            var f = (m = k.toLowerCase()) === "string" || m === "text";
            m !== "binarystring" && m !== "text" || (m = "string"), u = this._decompressWorker();
            var b = !this._dataBinary;
            b && !f && (u = u.pipe(new h.Utf8EncodeWorker())), !b && f && (u = u.pipe(new h.Utf8DecodeWorker()));
          } catch (x) {
            (u = new S("error")).error(x);
          }
          return new o(u, m, "");
        }, async: function(k, u) {
          return this.internalStream(k).accumulate(u);
        }, nodeStream: function(k, u) {
          return this.internalStream(k || "nodebuffer").toNodejsStream(u);
        }, _compressWorker: function(k, u) {
          if (this._data instanceof _ && this._data.compression.magic === k.magic) return this._data.getCompressedWorker();
          var m = this._decompressWorker();
          return this._dataBinary || (m = m.pipe(new h.Utf8EncodeWorker())), _.createWorkerFrom(m, k, u);
        }, _decompressWorker: function() {
          return this._data instanceof _ ? this._data.getContentWorker() : this._data instanceof S ? this._data : new i(this._data);
        } };
        for (var v = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], y = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, d = 0; d < v.length; d++) n.prototype[v[d]] = y;
        r.exports = n;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(t, r, a) {
        (function(n) {
          var o, i, h = n.MutationObserver || n.WebKitMutationObserver;
          if (h) {
            var _ = 0, S = new h(k), v = n.document.createTextNode("");
            S.observe(v, { characterData: !0 }), o = function() {
              v.data = _ = ++_ % 2;
            };
          } else if (n.setImmediate || n.MessageChannel === void 0) o = "document" in n && "onreadystatechange" in n.document.createElement("script") ? function() {
            var u = n.document.createElement("script");
            u.onreadystatechange = function() {
              k(), u.onreadystatechange = null, u.parentNode.removeChild(u), u = null;
            }, n.document.documentElement.appendChild(u);
          } : function() {
            setTimeout(k, 0);
          };
          else {
            var y = new n.MessageChannel();
            y.port1.onmessage = k, o = function() {
              y.port2.postMessage(0);
            };
          }
          var d = [];
          function k() {
            var u, m;
            i = !0;
            for (var f = d.length; f; ) {
              for (m = d, d = [], u = -1; ++u < f; ) m[u]();
              f = d.length;
            }
            i = !1;
          }
          r.exports = function(u) {
            d.push(u) !== 1 || i || o();
          };
        }).call(this, typeof zt < "u" ? zt : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 37: [function(t, r, a) {
        var n = t("immediate");
        function o() {
        }
        var i = {}, h = ["REJECTED"], _ = ["FULFILLED"], S = ["PENDING"];
        function v(f) {
          if (typeof f != "function") throw new TypeError("resolver must be a function");
          this.state = S, this.queue = [], this.outcome = void 0, f !== o && u(this, f);
        }
        function y(f, b, x) {
          this.promise = f, typeof b == "function" && (this.onFulfilled = b, this.callFulfilled = this.otherCallFulfilled), typeof x == "function" && (this.onRejected = x, this.callRejected = this.otherCallRejected);
        }
        function d(f, b, x) {
          n(function() {
            var E;
            try {
              E = b(x);
            } catch (A) {
              return i.reject(f, A);
            }
            E === f ? i.reject(f, new TypeError("Cannot resolve promise with itself")) : i.resolve(f, E);
          });
        }
        function k(f) {
          var b = f && f.then;
          if (f && (typeof f == "object" || typeof f == "function") && typeof b == "function") return function() {
            b.apply(f, arguments);
          };
        }
        function u(f, b) {
          var x = !1;
          function E(F) {
            x || (x = !0, i.reject(f, F));
          }
          function A(F) {
            x || (x = !0, i.resolve(f, F));
          }
          var L = m(function() {
            b(A, E);
          });
          L.status === "error" && E(L.value);
        }
        function m(f, b) {
          var x = {};
          try {
            x.value = f(b), x.status = "success";
          } catch (E) {
            x.status = "error", x.value = E;
          }
          return x;
        }
        (r.exports = v).prototype.finally = function(f) {
          if (typeof f != "function") return this;
          var b = this.constructor;
          return this.then(function(x) {
            return b.resolve(f()).then(function() {
              return x;
            });
          }, function(x) {
            return b.resolve(f()).then(function() {
              throw x;
            });
          });
        }, v.prototype.catch = function(f) {
          return this.then(null, f);
        }, v.prototype.then = function(f, b) {
          if (typeof f != "function" && this.state === _ || typeof b != "function" && this.state === h) return this;
          var x = new this.constructor(o);
          return this.state !== S ? d(x, this.state === _ ? f : b, this.outcome) : this.queue.push(new y(x, f, b)), x;
        }, y.prototype.callFulfilled = function(f) {
          i.resolve(this.promise, f);
        }, y.prototype.otherCallFulfilled = function(f) {
          d(this.promise, this.onFulfilled, f);
        }, y.prototype.callRejected = function(f) {
          i.reject(this.promise, f);
        }, y.prototype.otherCallRejected = function(f) {
          d(this.promise, this.onRejected, f);
        }, i.resolve = function(f, b) {
          var x = m(k, b);
          if (x.status === "error") return i.reject(f, x.value);
          var E = x.value;
          if (E) u(f, E);
          else {
            f.state = _, f.outcome = b;
            for (var A = -1, L = f.queue.length; ++A < L; ) f.queue[A].callFulfilled(b);
          }
          return f;
        }, i.reject = function(f, b) {
          f.state = h, f.outcome = b;
          for (var x = -1, E = f.queue.length; ++x < E; ) f.queue[x].callRejected(b);
          return f;
        }, v.resolve = function(f) {
          return f instanceof this ? f : i.resolve(new this(o), f);
        }, v.reject = function(f) {
          var b = new this(o);
          return i.reject(b, f);
        }, v.all = function(f) {
          var b = this;
          if (Object.prototype.toString.call(f) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var x = f.length, E = !1;
          if (!x) return this.resolve([]);
          for (var A = new Array(x), L = 0, F = -1, H = new this(o); ++F < x; ) T(f[F], F);
          return H;
          function T(V, Q) {
            b.resolve(V).then(function(w) {
              A[Q] = w, ++L !== x || E || (E = !0, i.resolve(H, A));
            }, function(w) {
              E || (E = !0, i.reject(H, w));
            });
          }
        }, v.race = function(f) {
          var b = this;
          if (Object.prototype.toString.call(f) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var x = f.length, E = !1;
          if (!x) return this.resolve([]);
          for (var A = -1, L = new this(o); ++A < x; ) F = f[A], b.resolve(F).then(function(H) {
            E || (E = !0, i.resolve(L, H));
          }, function(H) {
            E || (E = !0, i.reject(L, H));
          });
          var F;
          return L;
        };
      }, { immediate: 36 }], 38: [function(t, r, a) {
        var n = {};
        (0, t("./lib/utils/common").assign)(n, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), r.exports = n;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(t, r, a) {
        var n = t("./zlib/deflate"), o = t("./utils/common"), i = t("./utils/strings"), h = t("./zlib/messages"), _ = t("./zlib/zstream"), S = Object.prototype.toString, v = 0, y = -1, d = 0, k = 8;
        function u(f) {
          if (!(this instanceof u)) return new u(f);
          this.options = o.assign({ level: y, method: k, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: d, to: "" }, f || {});
          var b = this.options;
          b.raw && 0 < b.windowBits ? b.windowBits = -b.windowBits : b.gzip && 0 < b.windowBits && b.windowBits < 16 && (b.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new _(), this.strm.avail_out = 0;
          var x = n.deflateInit2(this.strm, b.level, b.method, b.windowBits, b.memLevel, b.strategy);
          if (x !== v) throw new Error(h[x]);
          if (b.header && n.deflateSetHeader(this.strm, b.header), b.dictionary) {
            var E;
            if (E = typeof b.dictionary == "string" ? i.string2buf(b.dictionary) : S.call(b.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(b.dictionary) : b.dictionary, (x = n.deflateSetDictionary(this.strm, E)) !== v) throw new Error(h[x]);
            this._dict_set = !0;
          }
        }
        function m(f, b) {
          var x = new u(b);
          if (x.push(f, !0), x.err) throw x.msg || h[x.err];
          return x.result;
        }
        u.prototype.push = function(f, b) {
          var x, E, A = this.strm, L = this.options.chunkSize;
          if (this.ended) return !1;
          E = b === ~~b ? b : b === !0 ? 4 : 0, typeof f == "string" ? A.input = i.string2buf(f) : S.call(f) === "[object ArrayBuffer]" ? A.input = new Uint8Array(f) : A.input = f, A.next_in = 0, A.avail_in = A.input.length;
          do {
            if (A.avail_out === 0 && (A.output = new o.Buf8(L), A.next_out = 0, A.avail_out = L), (x = n.deflate(A, E)) !== 1 && x !== v) return this.onEnd(x), !(this.ended = !0);
            A.avail_out !== 0 && (A.avail_in !== 0 || E !== 4 && E !== 2) || (this.options.to === "string" ? this.onData(i.buf2binstring(o.shrinkBuf(A.output, A.next_out))) : this.onData(o.shrinkBuf(A.output, A.next_out)));
          } while ((0 < A.avail_in || A.avail_out === 0) && x !== 1);
          return E === 4 ? (x = n.deflateEnd(this.strm), this.onEnd(x), this.ended = !0, x === v) : E !== 2 || (this.onEnd(v), !(A.avail_out = 0));
        }, u.prototype.onData = function(f) {
          this.chunks.push(f);
        }, u.prototype.onEnd = function(f) {
          f === v && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = f, this.msg = this.strm.msg;
        }, a.Deflate = u, a.deflate = m, a.deflateRaw = function(f, b) {
          return (b = b || {}).raw = !0, m(f, b);
        }, a.gzip = function(f, b) {
          return (b = b || {}).gzip = !0, m(f, b);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(t, r, a) {
        var n = t("./zlib/inflate"), o = t("./utils/common"), i = t("./utils/strings"), h = t("./zlib/constants"), _ = t("./zlib/messages"), S = t("./zlib/zstream"), v = t("./zlib/gzheader"), y = Object.prototype.toString;
        function d(u) {
          if (!(this instanceof d)) return new d(u);
          this.options = o.assign({ chunkSize: 16384, windowBits: 0, to: "" }, u || {});
          var m = this.options;
          m.raw && 0 <= m.windowBits && m.windowBits < 16 && (m.windowBits = -m.windowBits, m.windowBits === 0 && (m.windowBits = -15)), !(0 <= m.windowBits && m.windowBits < 16) || u && u.windowBits || (m.windowBits += 32), 15 < m.windowBits && m.windowBits < 48 && (15 & m.windowBits) == 0 && (m.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new S(), this.strm.avail_out = 0;
          var f = n.inflateInit2(this.strm, m.windowBits);
          if (f !== h.Z_OK) throw new Error(_[f]);
          this.header = new v(), n.inflateGetHeader(this.strm, this.header);
        }
        function k(u, m) {
          var f = new d(m);
          if (f.push(u, !0), f.err) throw f.msg || _[f.err];
          return f.result;
        }
        d.prototype.push = function(u, m) {
          var f, b, x, E, A, L, F = this.strm, H = this.options.chunkSize, T = this.options.dictionary, V = !1;
          if (this.ended) return !1;
          b = m === ~~m ? m : m === !0 ? h.Z_FINISH : h.Z_NO_FLUSH, typeof u == "string" ? F.input = i.binstring2buf(u) : y.call(u) === "[object ArrayBuffer]" ? F.input = new Uint8Array(u) : F.input = u, F.next_in = 0, F.avail_in = F.input.length;
          do {
            if (F.avail_out === 0 && (F.output = new o.Buf8(H), F.next_out = 0, F.avail_out = H), (f = n.inflate(F, h.Z_NO_FLUSH)) === h.Z_NEED_DICT && T && (L = typeof T == "string" ? i.string2buf(T) : y.call(T) === "[object ArrayBuffer]" ? new Uint8Array(T) : T, f = n.inflateSetDictionary(this.strm, L)), f === h.Z_BUF_ERROR && V === !0 && (f = h.Z_OK, V = !1), f !== h.Z_STREAM_END && f !== h.Z_OK) return this.onEnd(f), !(this.ended = !0);
            F.next_out && (F.avail_out !== 0 && f !== h.Z_STREAM_END && (F.avail_in !== 0 || b !== h.Z_FINISH && b !== h.Z_SYNC_FLUSH) || (this.options.to === "string" ? (x = i.utf8border(F.output, F.next_out), E = F.next_out - x, A = i.buf2string(F.output, x), F.next_out = E, F.avail_out = H - E, E && o.arraySet(F.output, F.output, x, E, 0), this.onData(A)) : this.onData(o.shrinkBuf(F.output, F.next_out)))), F.avail_in === 0 && F.avail_out === 0 && (V = !0);
          } while ((0 < F.avail_in || F.avail_out === 0) && f !== h.Z_STREAM_END);
          return f === h.Z_STREAM_END && (b = h.Z_FINISH), b === h.Z_FINISH ? (f = n.inflateEnd(this.strm), this.onEnd(f), this.ended = !0, f === h.Z_OK) : b !== h.Z_SYNC_FLUSH || (this.onEnd(h.Z_OK), !(F.avail_out = 0));
        }, d.prototype.onData = function(u) {
          this.chunks.push(u);
        }, d.prototype.onEnd = function(u) {
          u === h.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = u, this.msg = this.strm.msg;
        }, a.Inflate = d, a.inflate = k, a.inflateRaw = function(u, m) {
          return (m = m || {}).raw = !0, k(u, m);
        }, a.ungzip = k;
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(t, r, a) {
        var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
        a.assign = function(h) {
          for (var _ = Array.prototype.slice.call(arguments, 1); _.length; ) {
            var S = _.shift();
            if (S) {
              if (typeof S != "object") throw new TypeError(S + "must be non-object");
              for (var v in S) S.hasOwnProperty(v) && (h[v] = S[v]);
            }
          }
          return h;
        }, a.shrinkBuf = function(h, _) {
          return h.length === _ ? h : h.subarray ? h.subarray(0, _) : (h.length = _, h);
        };
        var o = { arraySet: function(h, _, S, v, y) {
          if (_.subarray && h.subarray) h.set(_.subarray(S, S + v), y);
          else for (var d = 0; d < v; d++) h[y + d] = _[S + d];
        }, flattenChunks: function(h) {
          var _, S, v, y, d, k;
          for (_ = v = 0, S = h.length; _ < S; _++) v += h[_].length;
          for (k = new Uint8Array(v), _ = y = 0, S = h.length; _ < S; _++) d = h[_], k.set(d, y), y += d.length;
          return k;
        } }, i = { arraySet: function(h, _, S, v, y) {
          for (var d = 0; d < v; d++) h[y + d] = _[S + d];
        }, flattenChunks: function(h) {
          return [].concat.apply([], h);
        } };
        a.setTyped = function(h) {
          h ? (a.Buf8 = Uint8Array, a.Buf16 = Uint16Array, a.Buf32 = Int32Array, a.assign(a, o)) : (a.Buf8 = Array, a.Buf16 = Array, a.Buf32 = Array, a.assign(a, i));
        }, a.setTyped(n);
      }, {}], 42: [function(t, r, a) {
        var n = t("./common"), o = !0, i = !0;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch {
          o = !1;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch {
          i = !1;
        }
        for (var h = new n.Buf8(256), _ = 0; _ < 256; _++) h[_] = 252 <= _ ? 6 : 248 <= _ ? 5 : 240 <= _ ? 4 : 224 <= _ ? 3 : 192 <= _ ? 2 : 1;
        function S(v, y) {
          if (y < 65537 && (v.subarray && i || !v.subarray && o)) return String.fromCharCode.apply(null, n.shrinkBuf(v, y));
          for (var d = "", k = 0; k < y; k++) d += String.fromCharCode(v[k]);
          return d;
        }
        h[254] = h[254] = 1, a.string2buf = function(v) {
          var y, d, k, u, m, f = v.length, b = 0;
          for (u = 0; u < f; u++) (64512 & (d = v.charCodeAt(u))) == 55296 && u + 1 < f && (64512 & (k = v.charCodeAt(u + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (k - 56320), u++), b += d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4;
          for (y = new n.Buf8(b), u = m = 0; m < b; u++) (64512 & (d = v.charCodeAt(u))) == 55296 && u + 1 < f && (64512 & (k = v.charCodeAt(u + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (k - 56320), u++), d < 128 ? y[m++] = d : (d < 2048 ? y[m++] = 192 | d >>> 6 : (d < 65536 ? y[m++] = 224 | d >>> 12 : (y[m++] = 240 | d >>> 18, y[m++] = 128 | d >>> 12 & 63), y[m++] = 128 | d >>> 6 & 63), y[m++] = 128 | 63 & d);
          return y;
        }, a.buf2binstring = function(v) {
          return S(v, v.length);
        }, a.binstring2buf = function(v) {
          for (var y = new n.Buf8(v.length), d = 0, k = y.length; d < k; d++) y[d] = v.charCodeAt(d);
          return y;
        }, a.buf2string = function(v, y) {
          var d, k, u, m, f = y || v.length, b = new Array(2 * f);
          for (d = k = 0; d < f; ) if ((u = v[d++]) < 128) b[k++] = u;
          else if (4 < (m = h[u])) b[k++] = 65533, d += m - 1;
          else {
            for (u &= m === 2 ? 31 : m === 3 ? 15 : 7; 1 < m && d < f; ) u = u << 6 | 63 & v[d++], m--;
            1 < m ? b[k++] = 65533 : u < 65536 ? b[k++] = u : (u -= 65536, b[k++] = 55296 | u >> 10 & 1023, b[k++] = 56320 | 1023 & u);
          }
          return S(b, k);
        }, a.utf8border = function(v, y) {
          var d;
          for ((y = y || v.length) > v.length && (y = v.length), d = y - 1; 0 <= d && (192 & v[d]) == 128; ) d--;
          return d < 0 || d === 0 ? y : d + h[v[d]] > y ? d : y;
        };
      }, { "./common": 41 }], 43: [function(t, r, a) {
        r.exports = function(n, o, i, h) {
          for (var _ = 65535 & n | 0, S = n >>> 16 & 65535 | 0, v = 0; i !== 0; ) {
            for (i -= v = 2e3 < i ? 2e3 : i; S = S + (_ = _ + o[h++] | 0) | 0, --v; ) ;
            _ %= 65521, S %= 65521;
          }
          return _ | S << 16 | 0;
        };
      }, {}], 44: [function(t, r, a) {
        r.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, {}], 45: [function(t, r, a) {
        var n = (function() {
          for (var o, i = [], h = 0; h < 256; h++) {
            o = h;
            for (var _ = 0; _ < 8; _++) o = 1 & o ? 3988292384 ^ o >>> 1 : o >>> 1;
            i[h] = o;
          }
          return i;
        })();
        r.exports = function(o, i, h, _) {
          var S = n, v = _ + h;
          o ^= -1;
          for (var y = _; y < v; y++) o = o >>> 8 ^ S[255 & (o ^ i[y])];
          return -1 ^ o;
        };
      }, {}], 46: [function(t, r, a) {
        var n, o = t("../utils/common"), i = t("./trees"), h = t("./adler32"), _ = t("./crc32"), S = t("./messages"), v = 0, y = 4, d = 0, k = -2, u = -1, m = 4, f = 2, b = 8, x = 9, E = 286, A = 30, L = 19, F = 2 * E + 1, H = 15, T = 3, V = 258, Q = V + T + 1, w = 42, I = 113, l = 1, D = 2, et = 3, $ = 4;
        function rt(s, O) {
          return s.msg = S[O], O;
        }
        function W(s) {
          return (s << 1) - (4 < s ? 9 : 0);
        }
        function tt(s) {
          for (var O = s.length; 0 <= --O; ) s[O] = 0;
        }
        function z(s) {
          var O = s.state, R = O.pending;
          R > s.avail_out && (R = s.avail_out), R !== 0 && (o.arraySet(s.output, O.pending_buf, O.pending_out, R, s.next_out), s.next_out += R, O.pending_out += R, s.total_out += R, s.avail_out -= R, O.pending -= R, O.pending === 0 && (O.pending_out = 0));
        }
        function M(s, O) {
          i._tr_flush_block(s, 0 <= s.block_start ? s.block_start : -1, s.strstart - s.block_start, O), s.block_start = s.strstart, z(s.strm);
        }
        function J(s, O) {
          s.pending_buf[s.pending++] = O;
        }
        function K(s, O) {
          s.pending_buf[s.pending++] = O >>> 8 & 255, s.pending_buf[s.pending++] = 255 & O;
        }
        function X(s, O) {
          var R, g, p = s.max_chain_length, P = s.strstart, j = s.prev_length, U = s.nice_match, N = s.strstart > s.w_size - Q ? s.strstart - (s.w_size - Q) : 0, Z = s.window, Y = s.w_mask, G = s.prev, q = s.strstart + V, lt = Z[P + j - 1], nt = Z[P + j];
          s.prev_length >= s.good_match && (p >>= 2), U > s.lookahead && (U = s.lookahead);
          do
            if (Z[(R = O) + j] === nt && Z[R + j - 1] === lt && Z[R] === Z[P] && Z[++R] === Z[P + 1]) {
              P += 2, R++;
              do
                ;
              while (Z[++P] === Z[++R] && Z[++P] === Z[++R] && Z[++P] === Z[++R] && Z[++P] === Z[++R] && Z[++P] === Z[++R] && Z[++P] === Z[++R] && Z[++P] === Z[++R] && Z[++P] === Z[++R] && P < q);
              if (g = V - (q - P), P = q - V, j < g) {
                if (s.match_start = O, U <= (j = g)) break;
                lt = Z[P + j - 1], nt = Z[P + j];
              }
            }
          while ((O = G[O & Y]) > N && --p != 0);
          return j <= s.lookahead ? j : s.lookahead;
        }
        function ct(s) {
          var O, R, g, p, P, j, U, N, Z, Y, G = s.w_size;
          do {
            if (p = s.window_size - s.lookahead - s.strstart, s.strstart >= G + (G - Q)) {
              for (o.arraySet(s.window, s.window, G, G, 0), s.match_start -= G, s.strstart -= G, s.block_start -= G, O = R = s.hash_size; g = s.head[--O], s.head[O] = G <= g ? g - G : 0, --R; ) ;
              for (O = R = G; g = s.prev[--O], s.prev[O] = G <= g ? g - G : 0, --R; ) ;
              p += G;
            }
            if (s.strm.avail_in === 0) break;
            if (j = s.strm, U = s.window, N = s.strstart + s.lookahead, Z = p, Y = void 0, Y = j.avail_in, Z < Y && (Y = Z), R = Y === 0 ? 0 : (j.avail_in -= Y, o.arraySet(U, j.input, j.next_in, Y, N), j.state.wrap === 1 ? j.adler = h(j.adler, U, Y, N) : j.state.wrap === 2 && (j.adler = _(j.adler, U, Y, N)), j.next_in += Y, j.total_in += Y, Y), s.lookahead += R, s.lookahead + s.insert >= T) for (P = s.strstart - s.insert, s.ins_h = s.window[P], s.ins_h = (s.ins_h << s.hash_shift ^ s.window[P + 1]) & s.hash_mask; s.insert && (s.ins_h = (s.ins_h << s.hash_shift ^ s.window[P + T - 1]) & s.hash_mask, s.prev[P & s.w_mask] = s.head[s.ins_h], s.head[s.ins_h] = P, P++, s.insert--, !(s.lookahead + s.insert < T)); ) ;
          } while (s.lookahead < Q && s.strm.avail_in !== 0);
        }
        function mt(s, O) {
          for (var R, g; ; ) {
            if (s.lookahead < Q) {
              if (ct(s), s.lookahead < Q && O === v) return l;
              if (s.lookahead === 0) break;
            }
            if (R = 0, s.lookahead >= T && (s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + T - 1]) & s.hash_mask, R = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h], s.head[s.ins_h] = s.strstart), R !== 0 && s.strstart - R <= s.w_size - Q && (s.match_length = X(s, R)), s.match_length >= T) if (g = i._tr_tally(s, s.strstart - s.match_start, s.match_length - T), s.lookahead -= s.match_length, s.match_length <= s.max_lazy_match && s.lookahead >= T) {
              for (s.match_length--; s.strstart++, s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + T - 1]) & s.hash_mask, R = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h], s.head[s.ins_h] = s.strstart, --s.match_length != 0; ) ;
              s.strstart++;
            } else s.strstart += s.match_length, s.match_length = 0, s.ins_h = s.window[s.strstart], s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask;
            else g = i._tr_tally(s, 0, s.window[s.strstart]), s.lookahead--, s.strstart++;
            if (g && (M(s, !1), s.strm.avail_out === 0)) return l;
          }
          return s.insert = s.strstart < T - 1 ? s.strstart : T - 1, O === y ? (M(s, !0), s.strm.avail_out === 0 ? et : $) : s.last_lit && (M(s, !1), s.strm.avail_out === 0) ? l : D;
        }
        function at(s, O) {
          for (var R, g, p; ; ) {
            if (s.lookahead < Q) {
              if (ct(s), s.lookahead < Q && O === v) return l;
              if (s.lookahead === 0) break;
            }
            if (R = 0, s.lookahead >= T && (s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + T - 1]) & s.hash_mask, R = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h], s.head[s.ins_h] = s.strstart), s.prev_length = s.match_length, s.prev_match = s.match_start, s.match_length = T - 1, R !== 0 && s.prev_length < s.max_lazy_match && s.strstart - R <= s.w_size - Q && (s.match_length = X(s, R), s.match_length <= 5 && (s.strategy === 1 || s.match_length === T && 4096 < s.strstart - s.match_start) && (s.match_length = T - 1)), s.prev_length >= T && s.match_length <= s.prev_length) {
              for (p = s.strstart + s.lookahead - T, g = i._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - T), s.lookahead -= s.prev_length - 1, s.prev_length -= 2; ++s.strstart <= p && (s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + T - 1]) & s.hash_mask, R = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h], s.head[s.ins_h] = s.strstart), --s.prev_length != 0; ) ;
              if (s.match_available = 0, s.match_length = T - 1, s.strstart++, g && (M(s, !1), s.strm.avail_out === 0)) return l;
            } else if (s.match_available) {
              if ((g = i._tr_tally(s, 0, s.window[s.strstart - 1])) && M(s, !1), s.strstart++, s.lookahead--, s.strm.avail_out === 0) return l;
            } else s.match_available = 1, s.strstart++, s.lookahead--;
          }
          return s.match_available && (g = i._tr_tally(s, 0, s.window[s.strstart - 1]), s.match_available = 0), s.insert = s.strstart < T - 1 ? s.strstart : T - 1, O === y ? (M(s, !0), s.strm.avail_out === 0 ? et : $) : s.last_lit && (M(s, !1), s.strm.avail_out === 0) ? l : D;
        }
        function st(s, O, R, g, p) {
          this.good_length = s, this.max_lazy = O, this.nice_length = R, this.max_chain = g, this.func = p;
        }
        function pt() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = b, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new o.Buf16(2 * F), this.dyn_dtree = new o.Buf16(2 * (2 * A + 1)), this.bl_tree = new o.Buf16(2 * (2 * L + 1)), tt(this.dyn_ltree), tt(this.dyn_dtree), tt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new o.Buf16(H + 1), this.heap = new o.Buf16(2 * E + 1), tt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new o.Buf16(2 * E + 1), tt(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function ht(s) {
          var O;
          return s && s.state ? (s.total_in = s.total_out = 0, s.data_type = f, (O = s.state).pending = 0, O.pending_out = 0, O.wrap < 0 && (O.wrap = -O.wrap), O.status = O.wrap ? w : I, s.adler = O.wrap === 2 ? 0 : 1, O.last_flush = v, i._tr_init(O), d) : rt(s, k);
        }
        function kt(s) {
          var O = ht(s);
          return O === d && (function(R) {
            R.window_size = 2 * R.w_size, tt(R.head), R.max_lazy_match = n[R.level].max_lazy, R.good_match = n[R.level].good_length, R.nice_match = n[R.level].nice_length, R.max_chain_length = n[R.level].max_chain, R.strstart = 0, R.block_start = 0, R.lookahead = 0, R.insert = 0, R.match_length = R.prev_length = T - 1, R.match_available = 0, R.ins_h = 0;
          })(s.state), O;
        }
        function vt(s, O, R, g, p, P) {
          if (!s) return k;
          var j = 1;
          if (O === u && (O = 6), g < 0 ? (j = 0, g = -g) : 15 < g && (j = 2, g -= 16), p < 1 || x < p || R !== b || g < 8 || 15 < g || O < 0 || 9 < O || P < 0 || m < P) return rt(s, k);
          g === 8 && (g = 9);
          var U = new pt();
          return (s.state = U).strm = s, U.wrap = j, U.gzhead = null, U.w_bits = g, U.w_size = 1 << U.w_bits, U.w_mask = U.w_size - 1, U.hash_bits = p + 7, U.hash_size = 1 << U.hash_bits, U.hash_mask = U.hash_size - 1, U.hash_shift = ~~((U.hash_bits + T - 1) / T), U.window = new o.Buf8(2 * U.w_size), U.head = new o.Buf16(U.hash_size), U.prev = new o.Buf16(U.w_size), U.lit_bufsize = 1 << p + 6, U.pending_buf_size = 4 * U.lit_bufsize, U.pending_buf = new o.Buf8(U.pending_buf_size), U.d_buf = 1 * U.lit_bufsize, U.l_buf = 3 * U.lit_bufsize, U.level = O, U.strategy = P, U.method = R, kt(s);
        }
        n = [new st(0, 0, 0, 0, function(s, O) {
          var R = 65535;
          for (R > s.pending_buf_size - 5 && (R = s.pending_buf_size - 5); ; ) {
            if (s.lookahead <= 1) {
              if (ct(s), s.lookahead === 0 && O === v) return l;
              if (s.lookahead === 0) break;
            }
            s.strstart += s.lookahead, s.lookahead = 0;
            var g = s.block_start + R;
            if ((s.strstart === 0 || s.strstart >= g) && (s.lookahead = s.strstart - g, s.strstart = g, M(s, !1), s.strm.avail_out === 0) || s.strstart - s.block_start >= s.w_size - Q && (M(s, !1), s.strm.avail_out === 0)) return l;
          }
          return s.insert = 0, O === y ? (M(s, !0), s.strm.avail_out === 0 ? et : $) : (s.strstart > s.block_start && (M(s, !1), s.strm.avail_out), l);
        }), new st(4, 4, 8, 4, mt), new st(4, 5, 16, 8, mt), new st(4, 6, 32, 32, mt), new st(4, 4, 16, 16, at), new st(8, 16, 32, 32, at), new st(8, 16, 128, 128, at), new st(8, 32, 128, 256, at), new st(32, 128, 258, 1024, at), new st(32, 258, 258, 4096, at)], a.deflateInit = function(s, O) {
          return vt(s, O, b, 15, 8, 0);
        }, a.deflateInit2 = vt, a.deflateReset = kt, a.deflateResetKeep = ht, a.deflateSetHeader = function(s, O) {
          return s && s.state ? s.state.wrap !== 2 ? k : (s.state.gzhead = O, d) : k;
        }, a.deflate = function(s, O) {
          var R, g, p, P;
          if (!s || !s.state || 5 < O || O < 0) return s ? rt(s, k) : k;
          if (g = s.state, !s.output || !s.input && s.avail_in !== 0 || g.status === 666 && O !== y) return rt(s, s.avail_out === 0 ? -5 : k);
          if (g.strm = s, R = g.last_flush, g.last_flush = O, g.status === w) if (g.wrap === 2) s.adler = 0, J(g, 31), J(g, 139), J(g, 8), g.gzhead ? (J(g, (g.gzhead.text ? 1 : 0) + (g.gzhead.hcrc ? 2 : 0) + (g.gzhead.extra ? 4 : 0) + (g.gzhead.name ? 8 : 0) + (g.gzhead.comment ? 16 : 0)), J(g, 255 & g.gzhead.time), J(g, g.gzhead.time >> 8 & 255), J(g, g.gzhead.time >> 16 & 255), J(g, g.gzhead.time >> 24 & 255), J(g, g.level === 9 ? 2 : 2 <= g.strategy || g.level < 2 ? 4 : 0), J(g, 255 & g.gzhead.os), g.gzhead.extra && g.gzhead.extra.length && (J(g, 255 & g.gzhead.extra.length), J(g, g.gzhead.extra.length >> 8 & 255)), g.gzhead.hcrc && (s.adler = _(s.adler, g.pending_buf, g.pending, 0)), g.gzindex = 0, g.status = 69) : (J(g, 0), J(g, 0), J(g, 0), J(g, 0), J(g, 0), J(g, g.level === 9 ? 2 : 2 <= g.strategy || g.level < 2 ? 4 : 0), J(g, 3), g.status = I);
          else {
            var j = b + (g.w_bits - 8 << 4) << 8;
            j |= (2 <= g.strategy || g.level < 2 ? 0 : g.level < 6 ? 1 : g.level === 6 ? 2 : 3) << 6, g.strstart !== 0 && (j |= 32), j += 31 - j % 31, g.status = I, K(g, j), g.strstart !== 0 && (K(g, s.adler >>> 16), K(g, 65535 & s.adler)), s.adler = 1;
          }
          if (g.status === 69) if (g.gzhead.extra) {
            for (p = g.pending; g.gzindex < (65535 & g.gzhead.extra.length) && (g.pending !== g.pending_buf_size || (g.gzhead.hcrc && g.pending > p && (s.adler = _(s.adler, g.pending_buf, g.pending - p, p)), z(s), p = g.pending, g.pending !== g.pending_buf_size)); ) J(g, 255 & g.gzhead.extra[g.gzindex]), g.gzindex++;
            g.gzhead.hcrc && g.pending > p && (s.adler = _(s.adler, g.pending_buf, g.pending - p, p)), g.gzindex === g.gzhead.extra.length && (g.gzindex = 0, g.status = 73);
          } else g.status = 73;
          if (g.status === 73) if (g.gzhead.name) {
            p = g.pending;
            do {
              if (g.pending === g.pending_buf_size && (g.gzhead.hcrc && g.pending > p && (s.adler = _(s.adler, g.pending_buf, g.pending - p, p)), z(s), p = g.pending, g.pending === g.pending_buf_size)) {
                P = 1;
                break;
              }
              P = g.gzindex < g.gzhead.name.length ? 255 & g.gzhead.name.charCodeAt(g.gzindex++) : 0, J(g, P);
            } while (P !== 0);
            g.gzhead.hcrc && g.pending > p && (s.adler = _(s.adler, g.pending_buf, g.pending - p, p)), P === 0 && (g.gzindex = 0, g.status = 91);
          } else g.status = 91;
          if (g.status === 91) if (g.gzhead.comment) {
            p = g.pending;
            do {
              if (g.pending === g.pending_buf_size && (g.gzhead.hcrc && g.pending > p && (s.adler = _(s.adler, g.pending_buf, g.pending - p, p)), z(s), p = g.pending, g.pending === g.pending_buf_size)) {
                P = 1;
                break;
              }
              P = g.gzindex < g.gzhead.comment.length ? 255 & g.gzhead.comment.charCodeAt(g.gzindex++) : 0, J(g, P);
            } while (P !== 0);
            g.gzhead.hcrc && g.pending > p && (s.adler = _(s.adler, g.pending_buf, g.pending - p, p)), P === 0 && (g.status = 103);
          } else g.status = 103;
          if (g.status === 103 && (g.gzhead.hcrc ? (g.pending + 2 > g.pending_buf_size && z(s), g.pending + 2 <= g.pending_buf_size && (J(g, 255 & s.adler), J(g, s.adler >> 8 & 255), s.adler = 0, g.status = I)) : g.status = I), g.pending !== 0) {
            if (z(s), s.avail_out === 0) return g.last_flush = -1, d;
          } else if (s.avail_in === 0 && W(O) <= W(R) && O !== y) return rt(s, -5);
          if (g.status === 666 && s.avail_in !== 0) return rt(s, -5);
          if (s.avail_in !== 0 || g.lookahead !== 0 || O !== v && g.status !== 666) {
            var U = g.strategy === 2 ? (function(N, Z) {
              for (var Y; ; ) {
                if (N.lookahead === 0 && (ct(N), N.lookahead === 0)) {
                  if (Z === v) return l;
                  break;
                }
                if (N.match_length = 0, Y = i._tr_tally(N, 0, N.window[N.strstart]), N.lookahead--, N.strstart++, Y && (M(N, !1), N.strm.avail_out === 0)) return l;
              }
              return N.insert = 0, Z === y ? (M(N, !0), N.strm.avail_out === 0 ? et : $) : N.last_lit && (M(N, !1), N.strm.avail_out === 0) ? l : D;
            })(g, O) : g.strategy === 3 ? (function(N, Z) {
              for (var Y, G, q, lt, nt = N.window; ; ) {
                if (N.lookahead <= V) {
                  if (ct(N), N.lookahead <= V && Z === v) return l;
                  if (N.lookahead === 0) break;
                }
                if (N.match_length = 0, N.lookahead >= T && 0 < N.strstart && (G = nt[q = N.strstart - 1]) === nt[++q] && G === nt[++q] && G === nt[++q]) {
                  lt = N.strstart + V;
                  do
                    ;
                  while (G === nt[++q] && G === nt[++q] && G === nt[++q] && G === nt[++q] && G === nt[++q] && G === nt[++q] && G === nt[++q] && G === nt[++q] && q < lt);
                  N.match_length = V - (lt - q), N.match_length > N.lookahead && (N.match_length = N.lookahead);
                }
                if (N.match_length >= T ? (Y = i._tr_tally(N, 1, N.match_length - T), N.lookahead -= N.match_length, N.strstart += N.match_length, N.match_length = 0) : (Y = i._tr_tally(N, 0, N.window[N.strstart]), N.lookahead--, N.strstart++), Y && (M(N, !1), N.strm.avail_out === 0)) return l;
              }
              return N.insert = 0, Z === y ? (M(N, !0), N.strm.avail_out === 0 ? et : $) : N.last_lit && (M(N, !1), N.strm.avail_out === 0) ? l : D;
            })(g, O) : n[g.level].func(g, O);
            if (U !== et && U !== $ || (g.status = 666), U === l || U === et) return s.avail_out === 0 && (g.last_flush = -1), d;
            if (U === D && (O === 1 ? i._tr_align(g) : O !== 5 && (i._tr_stored_block(g, 0, 0, !1), O === 3 && (tt(g.head), g.lookahead === 0 && (g.strstart = 0, g.block_start = 0, g.insert = 0))), z(s), s.avail_out === 0)) return g.last_flush = -1, d;
          }
          return O !== y ? d : g.wrap <= 0 ? 1 : (g.wrap === 2 ? (J(g, 255 & s.adler), J(g, s.adler >> 8 & 255), J(g, s.adler >> 16 & 255), J(g, s.adler >> 24 & 255), J(g, 255 & s.total_in), J(g, s.total_in >> 8 & 255), J(g, s.total_in >> 16 & 255), J(g, s.total_in >> 24 & 255)) : (K(g, s.adler >>> 16), K(g, 65535 & s.adler)), z(s), 0 < g.wrap && (g.wrap = -g.wrap), g.pending !== 0 ? d : 1);
        }, a.deflateEnd = function(s) {
          var O;
          return s && s.state ? (O = s.state.status) !== w && O !== 69 && O !== 73 && O !== 91 && O !== 103 && O !== I && O !== 666 ? rt(s, k) : (s.state = null, O === I ? rt(s, -3) : d) : k;
        }, a.deflateSetDictionary = function(s, O) {
          var R, g, p, P, j, U, N, Z, Y = O.length;
          if (!s || !s.state || (P = (R = s.state).wrap) === 2 || P === 1 && R.status !== w || R.lookahead) return k;
          for (P === 1 && (s.adler = h(s.adler, O, Y, 0)), R.wrap = 0, Y >= R.w_size && (P === 0 && (tt(R.head), R.strstart = 0, R.block_start = 0, R.insert = 0), Z = new o.Buf8(R.w_size), o.arraySet(Z, O, Y - R.w_size, R.w_size, 0), O = Z, Y = R.w_size), j = s.avail_in, U = s.next_in, N = s.input, s.avail_in = Y, s.next_in = 0, s.input = O, ct(R); R.lookahead >= T; ) {
            for (g = R.strstart, p = R.lookahead - (T - 1); R.ins_h = (R.ins_h << R.hash_shift ^ R.window[g + T - 1]) & R.hash_mask, R.prev[g & R.w_mask] = R.head[R.ins_h], R.head[R.ins_h] = g, g++, --p; ) ;
            R.strstart = g, R.lookahead = T - 1, ct(R);
          }
          return R.strstart += R.lookahead, R.block_start = R.strstart, R.insert = R.lookahead, R.lookahead = 0, R.match_length = R.prev_length = T - 1, R.match_available = 0, s.next_in = U, s.input = N, s.avail_in = j, R.wrap = P, d;
        }, a.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(t, r, a) {
        r.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
        };
      }, {}], 48: [function(t, r, a) {
        r.exports = function(n, o) {
          var i, h, _, S, v, y, d, k, u, m, f, b, x, E, A, L, F, H, T, V, Q, w, I, l, D;
          i = n.state, h = n.next_in, l = n.input, _ = h + (n.avail_in - 5), S = n.next_out, D = n.output, v = S - (o - n.avail_out), y = S + (n.avail_out - 257), d = i.dmax, k = i.wsize, u = i.whave, m = i.wnext, f = i.window, b = i.hold, x = i.bits, E = i.lencode, A = i.distcode, L = (1 << i.lenbits) - 1, F = (1 << i.distbits) - 1;
          t: do {
            x < 15 && (b += l[h++] << x, x += 8, b += l[h++] << x, x += 8), H = E[b & L];
            e: for (; ; ) {
              if (b >>>= T = H >>> 24, x -= T, (T = H >>> 16 & 255) === 0) D[S++] = 65535 & H;
              else {
                if (!(16 & T)) {
                  if ((64 & T) == 0) {
                    H = E[(65535 & H) + (b & (1 << T) - 1)];
                    continue e;
                  }
                  if (32 & T) {
                    i.mode = 12;
                    break t;
                  }
                  n.msg = "invalid literal/length code", i.mode = 30;
                  break t;
                }
                V = 65535 & H, (T &= 15) && (x < T && (b += l[h++] << x, x += 8), V += b & (1 << T) - 1, b >>>= T, x -= T), x < 15 && (b += l[h++] << x, x += 8, b += l[h++] << x, x += 8), H = A[b & F];
                r: for (; ; ) {
                  if (b >>>= T = H >>> 24, x -= T, !(16 & (T = H >>> 16 & 255))) {
                    if ((64 & T) == 0) {
                      H = A[(65535 & H) + (b & (1 << T) - 1)];
                      continue r;
                    }
                    n.msg = "invalid distance code", i.mode = 30;
                    break t;
                  }
                  if (Q = 65535 & H, x < (T &= 15) && (b += l[h++] << x, (x += 8) < T && (b += l[h++] << x, x += 8)), d < (Q += b & (1 << T) - 1)) {
                    n.msg = "invalid distance too far back", i.mode = 30;
                    break t;
                  }
                  if (b >>>= T, x -= T, (T = S - v) < Q) {
                    if (u < (T = Q - T) && i.sane) {
                      n.msg = "invalid distance too far back", i.mode = 30;
                      break t;
                    }
                    if (I = f, (w = 0) === m) {
                      if (w += k - T, T < V) {
                        for (V -= T; D[S++] = f[w++], --T; ) ;
                        w = S - Q, I = D;
                      }
                    } else if (m < T) {
                      if (w += k + m - T, (T -= m) < V) {
                        for (V -= T; D[S++] = f[w++], --T; ) ;
                        if (w = 0, m < V) {
                          for (V -= T = m; D[S++] = f[w++], --T; ) ;
                          w = S - Q, I = D;
                        }
                      }
                    } else if (w += m - T, T < V) {
                      for (V -= T; D[S++] = f[w++], --T; ) ;
                      w = S - Q, I = D;
                    }
                    for (; 2 < V; ) D[S++] = I[w++], D[S++] = I[w++], D[S++] = I[w++], V -= 3;
                    V && (D[S++] = I[w++], 1 < V && (D[S++] = I[w++]));
                  } else {
                    for (w = S - Q; D[S++] = D[w++], D[S++] = D[w++], D[S++] = D[w++], 2 < (V -= 3); ) ;
                    V && (D[S++] = D[w++], 1 < V && (D[S++] = D[w++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (h < _ && S < y);
          h -= V = x >> 3, b &= (1 << (x -= V << 3)) - 1, n.next_in = h, n.next_out = S, n.avail_in = h < _ ? _ - h + 5 : 5 - (h - _), n.avail_out = S < y ? y - S + 257 : 257 - (S - y), i.hold = b, i.bits = x;
        };
      }, {}], 49: [function(t, r, a) {
        var n = t("../utils/common"), o = t("./adler32"), i = t("./crc32"), h = t("./inffast"), _ = t("./inftrees"), S = 1, v = 2, y = 0, d = -2, k = 1, u = 852, m = 592;
        function f(w) {
          return (w >>> 24 & 255) + (w >>> 8 & 65280) + ((65280 & w) << 8) + ((255 & w) << 24);
        }
        function b() {
          this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new n.Buf16(320), this.work = new n.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function x(w) {
          var I;
          return w && w.state ? (I = w.state, w.total_in = w.total_out = I.total = 0, w.msg = "", I.wrap && (w.adler = 1 & I.wrap), I.mode = k, I.last = 0, I.havedict = 0, I.dmax = 32768, I.head = null, I.hold = 0, I.bits = 0, I.lencode = I.lendyn = new n.Buf32(u), I.distcode = I.distdyn = new n.Buf32(m), I.sane = 1, I.back = -1, y) : d;
        }
        function E(w) {
          var I;
          return w && w.state ? ((I = w.state).wsize = 0, I.whave = 0, I.wnext = 0, x(w)) : d;
        }
        function A(w, I) {
          var l, D;
          return w && w.state ? (D = w.state, I < 0 ? (l = 0, I = -I) : (l = 1 + (I >> 4), I < 48 && (I &= 15)), I && (I < 8 || 15 < I) ? d : (D.window !== null && D.wbits !== I && (D.window = null), D.wrap = l, D.wbits = I, E(w))) : d;
        }
        function L(w, I) {
          var l, D;
          return w ? (D = new b(), (w.state = D).window = null, (l = A(w, I)) !== y && (w.state = null), l) : d;
        }
        var F, H, T = !0;
        function V(w) {
          if (T) {
            var I;
            for (F = new n.Buf32(512), H = new n.Buf32(32), I = 0; I < 144; ) w.lens[I++] = 8;
            for (; I < 256; ) w.lens[I++] = 9;
            for (; I < 280; ) w.lens[I++] = 7;
            for (; I < 288; ) w.lens[I++] = 8;
            for (_(S, w.lens, 0, 288, F, 0, w.work, { bits: 9 }), I = 0; I < 32; ) w.lens[I++] = 5;
            _(v, w.lens, 0, 32, H, 0, w.work, { bits: 5 }), T = !1;
          }
          w.lencode = F, w.lenbits = 9, w.distcode = H, w.distbits = 5;
        }
        function Q(w, I, l, D) {
          var et, $ = w.state;
          return $.window === null && ($.wsize = 1 << $.wbits, $.wnext = 0, $.whave = 0, $.window = new n.Buf8($.wsize)), D >= $.wsize ? (n.arraySet($.window, I, l - $.wsize, $.wsize, 0), $.wnext = 0, $.whave = $.wsize) : (D < (et = $.wsize - $.wnext) && (et = D), n.arraySet($.window, I, l - D, et, $.wnext), (D -= et) ? (n.arraySet($.window, I, l - D, D, 0), $.wnext = D, $.whave = $.wsize) : ($.wnext += et, $.wnext === $.wsize && ($.wnext = 0), $.whave < $.wsize && ($.whave += et))), 0;
        }
        a.inflateReset = E, a.inflateReset2 = A, a.inflateResetKeep = x, a.inflateInit = function(w) {
          return L(w, 15);
        }, a.inflateInit2 = L, a.inflate = function(w, I) {
          var l, D, et, $, rt, W, tt, z, M, J, K, X, ct, mt, at, st, pt, ht, kt, vt, s, O, R, g, p = 0, P = new n.Buf8(4), j = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!w || !w.state || !w.output || !w.input && w.avail_in !== 0) return d;
          (l = w.state).mode === 12 && (l.mode = 13), rt = w.next_out, et = w.output, tt = w.avail_out, $ = w.next_in, D = w.input, W = w.avail_in, z = l.hold, M = l.bits, J = W, K = tt, O = y;
          t: for (; ; ) switch (l.mode) {
            case k:
              if (l.wrap === 0) {
                l.mode = 13;
                break;
              }
              for (; M < 16; ) {
                if (W === 0) break t;
                W--, z += D[$++] << M, M += 8;
              }
              if (2 & l.wrap && z === 35615) {
                P[l.check = 0] = 255 & z, P[1] = z >>> 8 & 255, l.check = i(l.check, P, 2, 0), M = z = 0, l.mode = 2;
                break;
              }
              if (l.flags = 0, l.head && (l.head.done = !1), !(1 & l.wrap) || (((255 & z) << 8) + (z >> 8)) % 31) {
                w.msg = "incorrect header check", l.mode = 30;
                break;
              }
              if ((15 & z) != 8) {
                w.msg = "unknown compression method", l.mode = 30;
                break;
              }
              if (M -= 4, s = 8 + (15 & (z >>>= 4)), l.wbits === 0) l.wbits = s;
              else if (s > l.wbits) {
                w.msg = "invalid window size", l.mode = 30;
                break;
              }
              l.dmax = 1 << s, w.adler = l.check = 1, l.mode = 512 & z ? 10 : 12, M = z = 0;
              break;
            case 2:
              for (; M < 16; ) {
                if (W === 0) break t;
                W--, z += D[$++] << M, M += 8;
              }
              if (l.flags = z, (255 & l.flags) != 8) {
                w.msg = "unknown compression method", l.mode = 30;
                break;
              }
              if (57344 & l.flags) {
                w.msg = "unknown header flags set", l.mode = 30;
                break;
              }
              l.head && (l.head.text = z >> 8 & 1), 512 & l.flags && (P[0] = 255 & z, P[1] = z >>> 8 & 255, l.check = i(l.check, P, 2, 0)), M = z = 0, l.mode = 3;
            case 3:
              for (; M < 32; ) {
                if (W === 0) break t;
                W--, z += D[$++] << M, M += 8;
              }
              l.head && (l.head.time = z), 512 & l.flags && (P[0] = 255 & z, P[1] = z >>> 8 & 255, P[2] = z >>> 16 & 255, P[3] = z >>> 24 & 255, l.check = i(l.check, P, 4, 0)), M = z = 0, l.mode = 4;
            case 4:
              for (; M < 16; ) {
                if (W === 0) break t;
                W--, z += D[$++] << M, M += 8;
              }
              l.head && (l.head.xflags = 255 & z, l.head.os = z >> 8), 512 & l.flags && (P[0] = 255 & z, P[1] = z >>> 8 & 255, l.check = i(l.check, P, 2, 0)), M = z = 0, l.mode = 5;
            case 5:
              if (1024 & l.flags) {
                for (; M < 16; ) {
                  if (W === 0) break t;
                  W--, z += D[$++] << M, M += 8;
                }
                l.length = z, l.head && (l.head.extra_len = z), 512 & l.flags && (P[0] = 255 & z, P[1] = z >>> 8 & 255, l.check = i(l.check, P, 2, 0)), M = z = 0;
              } else l.head && (l.head.extra = null);
              l.mode = 6;
            case 6:
              if (1024 & l.flags && (W < (X = l.length) && (X = W), X && (l.head && (s = l.head.extra_len - l.length, l.head.extra || (l.head.extra = new Array(l.head.extra_len)), n.arraySet(l.head.extra, D, $, X, s)), 512 & l.flags && (l.check = i(l.check, D, X, $)), W -= X, $ += X, l.length -= X), l.length)) break t;
              l.length = 0, l.mode = 7;
            case 7:
              if (2048 & l.flags) {
                if (W === 0) break t;
                for (X = 0; s = D[$ + X++], l.head && s && l.length < 65536 && (l.head.name += String.fromCharCode(s)), s && X < W; ) ;
                if (512 & l.flags && (l.check = i(l.check, D, X, $)), W -= X, $ += X, s) break t;
              } else l.head && (l.head.name = null);
              l.length = 0, l.mode = 8;
            case 8:
              if (4096 & l.flags) {
                if (W === 0) break t;
                for (X = 0; s = D[$ + X++], l.head && s && l.length < 65536 && (l.head.comment += String.fromCharCode(s)), s && X < W; ) ;
                if (512 & l.flags && (l.check = i(l.check, D, X, $)), W -= X, $ += X, s) break t;
              } else l.head && (l.head.comment = null);
              l.mode = 9;
            case 9:
              if (512 & l.flags) {
                for (; M < 16; ) {
                  if (W === 0) break t;
                  W--, z += D[$++] << M, M += 8;
                }
                if (z !== (65535 & l.check)) {
                  w.msg = "header crc mismatch", l.mode = 30;
                  break;
                }
                M = z = 0;
              }
              l.head && (l.head.hcrc = l.flags >> 9 & 1, l.head.done = !0), w.adler = l.check = 0, l.mode = 12;
              break;
            case 10:
              for (; M < 32; ) {
                if (W === 0) break t;
                W--, z += D[$++] << M, M += 8;
              }
              w.adler = l.check = f(z), M = z = 0, l.mode = 11;
            case 11:
              if (l.havedict === 0) return w.next_out = rt, w.avail_out = tt, w.next_in = $, w.avail_in = W, l.hold = z, l.bits = M, 2;
              w.adler = l.check = 1, l.mode = 12;
            case 12:
              if (I === 5 || I === 6) break t;
            case 13:
              if (l.last) {
                z >>>= 7 & M, M -= 7 & M, l.mode = 27;
                break;
              }
              for (; M < 3; ) {
                if (W === 0) break t;
                W--, z += D[$++] << M, M += 8;
              }
              switch (l.last = 1 & z, M -= 1, 3 & (z >>>= 1)) {
                case 0:
                  l.mode = 14;
                  break;
                case 1:
                  if (V(l), l.mode = 20, I !== 6) break;
                  z >>>= 2, M -= 2;
                  break t;
                case 2:
                  l.mode = 17;
                  break;
                case 3:
                  w.msg = "invalid block type", l.mode = 30;
              }
              z >>>= 2, M -= 2;
              break;
            case 14:
              for (z >>>= 7 & M, M -= 7 & M; M < 32; ) {
                if (W === 0) break t;
                W--, z += D[$++] << M, M += 8;
              }
              if ((65535 & z) != (z >>> 16 ^ 65535)) {
                w.msg = "invalid stored block lengths", l.mode = 30;
                break;
              }
              if (l.length = 65535 & z, M = z = 0, l.mode = 15, I === 6) break t;
            case 15:
              l.mode = 16;
            case 16:
              if (X = l.length) {
                if (W < X && (X = W), tt < X && (X = tt), X === 0) break t;
                n.arraySet(et, D, $, X, rt), W -= X, $ += X, tt -= X, rt += X, l.length -= X;
                break;
              }
              l.mode = 12;
              break;
            case 17:
              for (; M < 14; ) {
                if (W === 0) break t;
                W--, z += D[$++] << M, M += 8;
              }
              if (l.nlen = 257 + (31 & z), z >>>= 5, M -= 5, l.ndist = 1 + (31 & z), z >>>= 5, M -= 5, l.ncode = 4 + (15 & z), z >>>= 4, M -= 4, 286 < l.nlen || 30 < l.ndist) {
                w.msg = "too many length or distance symbols", l.mode = 30;
                break;
              }
              l.have = 0, l.mode = 18;
            case 18:
              for (; l.have < l.ncode; ) {
                for (; M < 3; ) {
                  if (W === 0) break t;
                  W--, z += D[$++] << M, M += 8;
                }
                l.lens[j[l.have++]] = 7 & z, z >>>= 3, M -= 3;
              }
              for (; l.have < 19; ) l.lens[j[l.have++]] = 0;
              if (l.lencode = l.lendyn, l.lenbits = 7, R = { bits: l.lenbits }, O = _(0, l.lens, 0, 19, l.lencode, 0, l.work, R), l.lenbits = R.bits, O) {
                w.msg = "invalid code lengths set", l.mode = 30;
                break;
              }
              l.have = 0, l.mode = 19;
            case 19:
              for (; l.have < l.nlen + l.ndist; ) {
                for (; st = (p = l.lencode[z & (1 << l.lenbits) - 1]) >>> 16 & 255, pt = 65535 & p, !((at = p >>> 24) <= M); ) {
                  if (W === 0) break t;
                  W--, z += D[$++] << M, M += 8;
                }
                if (pt < 16) z >>>= at, M -= at, l.lens[l.have++] = pt;
                else {
                  if (pt === 16) {
                    for (g = at + 2; M < g; ) {
                      if (W === 0) break t;
                      W--, z += D[$++] << M, M += 8;
                    }
                    if (z >>>= at, M -= at, l.have === 0) {
                      w.msg = "invalid bit length repeat", l.mode = 30;
                      break;
                    }
                    s = l.lens[l.have - 1], X = 3 + (3 & z), z >>>= 2, M -= 2;
                  } else if (pt === 17) {
                    for (g = at + 3; M < g; ) {
                      if (W === 0) break t;
                      W--, z += D[$++] << M, M += 8;
                    }
                    M -= at, s = 0, X = 3 + (7 & (z >>>= at)), z >>>= 3, M -= 3;
                  } else {
                    for (g = at + 7; M < g; ) {
                      if (W === 0) break t;
                      W--, z += D[$++] << M, M += 8;
                    }
                    M -= at, s = 0, X = 11 + (127 & (z >>>= at)), z >>>= 7, M -= 7;
                  }
                  if (l.have + X > l.nlen + l.ndist) {
                    w.msg = "invalid bit length repeat", l.mode = 30;
                    break;
                  }
                  for (; X--; ) l.lens[l.have++] = s;
                }
              }
              if (l.mode === 30) break;
              if (l.lens[256] === 0) {
                w.msg = "invalid code -- missing end-of-block", l.mode = 30;
                break;
              }
              if (l.lenbits = 9, R = { bits: l.lenbits }, O = _(S, l.lens, 0, l.nlen, l.lencode, 0, l.work, R), l.lenbits = R.bits, O) {
                w.msg = "invalid literal/lengths set", l.mode = 30;
                break;
              }
              if (l.distbits = 6, l.distcode = l.distdyn, R = { bits: l.distbits }, O = _(v, l.lens, l.nlen, l.ndist, l.distcode, 0, l.work, R), l.distbits = R.bits, O) {
                w.msg = "invalid distances set", l.mode = 30;
                break;
              }
              if (l.mode = 20, I === 6) break t;
            case 20:
              l.mode = 21;
            case 21:
              if (6 <= W && 258 <= tt) {
                w.next_out = rt, w.avail_out = tt, w.next_in = $, w.avail_in = W, l.hold = z, l.bits = M, h(w, K), rt = w.next_out, et = w.output, tt = w.avail_out, $ = w.next_in, D = w.input, W = w.avail_in, z = l.hold, M = l.bits, l.mode === 12 && (l.back = -1);
                break;
              }
              for (l.back = 0; st = (p = l.lencode[z & (1 << l.lenbits) - 1]) >>> 16 & 255, pt = 65535 & p, !((at = p >>> 24) <= M); ) {
                if (W === 0) break t;
                W--, z += D[$++] << M, M += 8;
              }
              if (st && (240 & st) == 0) {
                for (ht = at, kt = st, vt = pt; st = (p = l.lencode[vt + ((z & (1 << ht + kt) - 1) >> ht)]) >>> 16 & 255, pt = 65535 & p, !(ht + (at = p >>> 24) <= M); ) {
                  if (W === 0) break t;
                  W--, z += D[$++] << M, M += 8;
                }
                z >>>= ht, M -= ht, l.back += ht;
              }
              if (z >>>= at, M -= at, l.back += at, l.length = pt, st === 0) {
                l.mode = 26;
                break;
              }
              if (32 & st) {
                l.back = -1, l.mode = 12;
                break;
              }
              if (64 & st) {
                w.msg = "invalid literal/length code", l.mode = 30;
                break;
              }
              l.extra = 15 & st, l.mode = 22;
            case 22:
              if (l.extra) {
                for (g = l.extra; M < g; ) {
                  if (W === 0) break t;
                  W--, z += D[$++] << M, M += 8;
                }
                l.length += z & (1 << l.extra) - 1, z >>>= l.extra, M -= l.extra, l.back += l.extra;
              }
              l.was = l.length, l.mode = 23;
            case 23:
              for (; st = (p = l.distcode[z & (1 << l.distbits) - 1]) >>> 16 & 255, pt = 65535 & p, !((at = p >>> 24) <= M); ) {
                if (W === 0) break t;
                W--, z += D[$++] << M, M += 8;
              }
              if ((240 & st) == 0) {
                for (ht = at, kt = st, vt = pt; st = (p = l.distcode[vt + ((z & (1 << ht + kt) - 1) >> ht)]) >>> 16 & 255, pt = 65535 & p, !(ht + (at = p >>> 24) <= M); ) {
                  if (W === 0) break t;
                  W--, z += D[$++] << M, M += 8;
                }
                z >>>= ht, M -= ht, l.back += ht;
              }
              if (z >>>= at, M -= at, l.back += at, 64 & st) {
                w.msg = "invalid distance code", l.mode = 30;
                break;
              }
              l.offset = pt, l.extra = 15 & st, l.mode = 24;
            case 24:
              if (l.extra) {
                for (g = l.extra; M < g; ) {
                  if (W === 0) break t;
                  W--, z += D[$++] << M, M += 8;
                }
                l.offset += z & (1 << l.extra) - 1, z >>>= l.extra, M -= l.extra, l.back += l.extra;
              }
              if (l.offset > l.dmax) {
                w.msg = "invalid distance too far back", l.mode = 30;
                break;
              }
              l.mode = 25;
            case 25:
              if (tt === 0) break t;
              if (X = K - tt, l.offset > X) {
                if ((X = l.offset - X) > l.whave && l.sane) {
                  w.msg = "invalid distance too far back", l.mode = 30;
                  break;
                }
                ct = X > l.wnext ? (X -= l.wnext, l.wsize - X) : l.wnext - X, X > l.length && (X = l.length), mt = l.window;
              } else mt = et, ct = rt - l.offset, X = l.length;
              for (tt < X && (X = tt), tt -= X, l.length -= X; et[rt++] = mt[ct++], --X; ) ;
              l.length === 0 && (l.mode = 21);
              break;
            case 26:
              if (tt === 0) break t;
              et[rt++] = l.length, tt--, l.mode = 21;
              break;
            case 27:
              if (l.wrap) {
                for (; M < 32; ) {
                  if (W === 0) break t;
                  W--, z |= D[$++] << M, M += 8;
                }
                if (K -= tt, w.total_out += K, l.total += K, K && (w.adler = l.check = l.flags ? i(l.check, et, K, rt - K) : o(l.check, et, K, rt - K)), K = tt, (l.flags ? z : f(z)) !== l.check) {
                  w.msg = "incorrect data check", l.mode = 30;
                  break;
                }
                M = z = 0;
              }
              l.mode = 28;
            case 28:
              if (l.wrap && l.flags) {
                for (; M < 32; ) {
                  if (W === 0) break t;
                  W--, z += D[$++] << M, M += 8;
                }
                if (z !== (4294967295 & l.total)) {
                  w.msg = "incorrect length check", l.mode = 30;
                  break;
                }
                M = z = 0;
              }
              l.mode = 29;
            case 29:
              O = 1;
              break t;
            case 30:
              O = -3;
              break t;
            case 31:
              return -4;
            default:
              return d;
          }
          return w.next_out = rt, w.avail_out = tt, w.next_in = $, w.avail_in = W, l.hold = z, l.bits = M, (l.wsize || K !== w.avail_out && l.mode < 30 && (l.mode < 27 || I !== 4)) && Q(w, w.output, w.next_out, K - w.avail_out) ? (l.mode = 31, -4) : (J -= w.avail_in, K -= w.avail_out, w.total_in += J, w.total_out += K, l.total += K, l.wrap && K && (w.adler = l.check = l.flags ? i(l.check, et, K, w.next_out - K) : o(l.check, et, K, w.next_out - K)), w.data_type = l.bits + (l.last ? 64 : 0) + (l.mode === 12 ? 128 : 0) + (l.mode === 20 || l.mode === 15 ? 256 : 0), (J == 0 && K === 0 || I === 4) && O === y && (O = -5), O);
        }, a.inflateEnd = function(w) {
          if (!w || !w.state) return d;
          var I = w.state;
          return I.window && (I.window = null), w.state = null, y;
        }, a.inflateGetHeader = function(w, I) {
          var l;
          return w && w.state ? (2 & (l = w.state).wrap) == 0 ? d : ((l.head = I).done = !1, y) : d;
        }, a.inflateSetDictionary = function(w, I) {
          var l, D = I.length;
          return w && w.state ? (l = w.state).wrap !== 0 && l.mode !== 11 ? d : l.mode === 11 && o(1, I, D, 0) !== l.check ? -3 : Q(w, I, D, D) ? (l.mode = 31, -4) : (l.havedict = 1, y) : d;
        }, a.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(t, r, a) {
        var n = t("../utils/common"), o = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], i = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], h = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], _ = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        r.exports = function(S, v, y, d, k, u, m, f) {
          var b, x, E, A, L, F, H, T, V, Q = f.bits, w = 0, I = 0, l = 0, D = 0, et = 0, $ = 0, rt = 0, W = 0, tt = 0, z = 0, M = null, J = 0, K = new n.Buf16(16), X = new n.Buf16(16), ct = null, mt = 0;
          for (w = 0; w <= 15; w++) K[w] = 0;
          for (I = 0; I < d; I++) K[v[y + I]]++;
          for (et = Q, D = 15; 1 <= D && K[D] === 0; D--) ;
          if (D < et && (et = D), D === 0) return k[u++] = 20971520, k[u++] = 20971520, f.bits = 1, 0;
          for (l = 1; l < D && K[l] === 0; l++) ;
          for (et < l && (et = l), w = W = 1; w <= 15; w++) if (W <<= 1, (W -= K[w]) < 0) return -1;
          if (0 < W && (S === 0 || D !== 1)) return -1;
          for (X[1] = 0, w = 1; w < 15; w++) X[w + 1] = X[w] + K[w];
          for (I = 0; I < d; I++) v[y + I] !== 0 && (m[X[v[y + I]]++] = I);
          if (F = S === 0 ? (M = ct = m, 19) : S === 1 ? (M = o, J -= 257, ct = i, mt -= 257, 256) : (M = h, ct = _, -1), w = l, L = u, rt = I = z = 0, E = -1, A = (tt = 1 << ($ = et)) - 1, S === 1 && 852 < tt || S === 2 && 592 < tt) return 1;
          for (; ; ) {
            for (H = w - rt, V = m[I] < F ? (T = 0, m[I]) : m[I] > F ? (T = ct[mt + m[I]], M[J + m[I]]) : (T = 96, 0), b = 1 << w - rt, l = x = 1 << $; k[L + (z >> rt) + (x -= b)] = H << 24 | T << 16 | V | 0, x !== 0; ) ;
            for (b = 1 << w - 1; z & b; ) b >>= 1;
            if (b !== 0 ? (z &= b - 1, z += b) : z = 0, I++, --K[w] == 0) {
              if (w === D) break;
              w = v[y + m[I]];
            }
            if (et < w && (z & A) !== E) {
              for (rt === 0 && (rt = et), L += l, W = 1 << ($ = w - rt); $ + rt < D && !((W -= K[$ + rt]) <= 0); ) $++, W <<= 1;
              if (tt += 1 << $, S === 1 && 852 < tt || S === 2 && 592 < tt) return 1;
              k[E = z & A] = et << 24 | $ << 16 | L - u | 0;
            }
          }
          return z !== 0 && (k[L + z] = w - rt << 24 | 64 << 16 | 0), f.bits = et, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(t, r, a) {
        r.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(t, r, a) {
        var n = t("../utils/common"), o = 0, i = 1;
        function h(p) {
          for (var P = p.length; 0 <= --P; ) p[P] = 0;
        }
        var _ = 0, S = 29, v = 256, y = v + 1 + S, d = 30, k = 19, u = 2 * y + 1, m = 15, f = 16, b = 7, x = 256, E = 16, A = 17, L = 18, F = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], H = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], T = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], V = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], Q = new Array(2 * (y + 2));
        h(Q);
        var w = new Array(2 * d);
        h(w);
        var I = new Array(512);
        h(I);
        var l = new Array(256);
        h(l);
        var D = new Array(S);
        h(D);
        var et, $, rt, W = new Array(d);
        function tt(p, P, j, U, N) {
          this.static_tree = p, this.extra_bits = P, this.extra_base = j, this.elems = U, this.max_length = N, this.has_stree = p && p.length;
        }
        function z(p, P) {
          this.dyn_tree = p, this.max_code = 0, this.stat_desc = P;
        }
        function M(p) {
          return p < 256 ? I[p] : I[256 + (p >>> 7)];
        }
        function J(p, P) {
          p.pending_buf[p.pending++] = 255 & P, p.pending_buf[p.pending++] = P >>> 8 & 255;
        }
        function K(p, P, j) {
          p.bi_valid > f - j ? (p.bi_buf |= P << p.bi_valid & 65535, J(p, p.bi_buf), p.bi_buf = P >> f - p.bi_valid, p.bi_valid += j - f) : (p.bi_buf |= P << p.bi_valid & 65535, p.bi_valid += j);
        }
        function X(p, P, j) {
          K(p, j[2 * P], j[2 * P + 1]);
        }
        function ct(p, P) {
          for (var j = 0; j |= 1 & p, p >>>= 1, j <<= 1, 0 < --P; ) ;
          return j >>> 1;
        }
        function mt(p, P, j) {
          var U, N, Z = new Array(m + 1), Y = 0;
          for (U = 1; U <= m; U++) Z[U] = Y = Y + j[U - 1] << 1;
          for (N = 0; N <= P; N++) {
            var G = p[2 * N + 1];
            G !== 0 && (p[2 * N] = ct(Z[G]++, G));
          }
        }
        function at(p) {
          var P;
          for (P = 0; P < y; P++) p.dyn_ltree[2 * P] = 0;
          for (P = 0; P < d; P++) p.dyn_dtree[2 * P] = 0;
          for (P = 0; P < k; P++) p.bl_tree[2 * P] = 0;
          p.dyn_ltree[2 * x] = 1, p.opt_len = p.static_len = 0, p.last_lit = p.matches = 0;
        }
        function st(p) {
          8 < p.bi_valid ? J(p, p.bi_buf) : 0 < p.bi_valid && (p.pending_buf[p.pending++] = p.bi_buf), p.bi_buf = 0, p.bi_valid = 0;
        }
        function pt(p, P, j, U) {
          var N = 2 * P, Z = 2 * j;
          return p[N] < p[Z] || p[N] === p[Z] && U[P] <= U[j];
        }
        function ht(p, P, j) {
          for (var U = p.heap[j], N = j << 1; N <= p.heap_len && (N < p.heap_len && pt(P, p.heap[N + 1], p.heap[N], p.depth) && N++, !pt(P, U, p.heap[N], p.depth)); ) p.heap[j] = p.heap[N], j = N, N <<= 1;
          p.heap[j] = U;
        }
        function kt(p, P, j) {
          var U, N, Z, Y, G = 0;
          if (p.last_lit !== 0) for (; U = p.pending_buf[p.d_buf + 2 * G] << 8 | p.pending_buf[p.d_buf + 2 * G + 1], N = p.pending_buf[p.l_buf + G], G++, U === 0 ? X(p, N, P) : (X(p, (Z = l[N]) + v + 1, P), (Y = F[Z]) !== 0 && K(p, N -= D[Z], Y), X(p, Z = M(--U), j), (Y = H[Z]) !== 0 && K(p, U -= W[Z], Y)), G < p.last_lit; ) ;
          X(p, x, P);
        }
        function vt(p, P) {
          var j, U, N, Z = P.dyn_tree, Y = P.stat_desc.static_tree, G = P.stat_desc.has_stree, q = P.stat_desc.elems, lt = -1;
          for (p.heap_len = 0, p.heap_max = u, j = 0; j < q; j++) Z[2 * j] !== 0 ? (p.heap[++p.heap_len] = lt = j, p.depth[j] = 0) : Z[2 * j + 1] = 0;
          for (; p.heap_len < 2; ) Z[2 * (N = p.heap[++p.heap_len] = lt < 2 ? ++lt : 0)] = 1, p.depth[N] = 0, p.opt_len--, G && (p.static_len -= Y[2 * N + 1]);
          for (P.max_code = lt, j = p.heap_len >> 1; 1 <= j; j--) ht(p, Z, j);
          for (N = q; j = p.heap[1], p.heap[1] = p.heap[p.heap_len--], ht(p, Z, 1), U = p.heap[1], p.heap[--p.heap_max] = j, p.heap[--p.heap_max] = U, Z[2 * N] = Z[2 * j] + Z[2 * U], p.depth[N] = (p.depth[j] >= p.depth[U] ? p.depth[j] : p.depth[U]) + 1, Z[2 * j + 1] = Z[2 * U + 1] = N, p.heap[1] = N++, ht(p, Z, 1), 2 <= p.heap_len; ) ;
          p.heap[--p.heap_max] = p.heap[1], (function(nt, bt) {
            var xt, yt, Pt, ut, Mt, Dt, _t = bt.dyn_tree, Xt = bt.max_code, ve = bt.stat_desc.static_tree, ke = bt.stat_desc.has_stree, ye = bt.stat_desc.extra_bits, Kt = bt.stat_desc.extra_base, At = bt.stat_desc.max_length, Bt = 0;
            for (ut = 0; ut <= m; ut++) nt.bl_count[ut] = 0;
            for (_t[2 * nt.heap[nt.heap_max] + 1] = 0, xt = nt.heap_max + 1; xt < u; xt++) At < (ut = _t[2 * _t[2 * (yt = nt.heap[xt]) + 1] + 1] + 1) && (ut = At, Bt++), _t[2 * yt + 1] = ut, Xt < yt || (nt.bl_count[ut]++, Mt = 0, Kt <= yt && (Mt = ye[yt - Kt]), Dt = _t[2 * yt], nt.opt_len += Dt * (ut + Mt), ke && (nt.static_len += Dt * (ve[2 * yt + 1] + Mt)));
            if (Bt !== 0) {
              do {
                for (ut = At - 1; nt.bl_count[ut] === 0; ) ut--;
                nt.bl_count[ut]--, nt.bl_count[ut + 1] += 2, nt.bl_count[At]--, Bt -= 2;
              } while (0 < Bt);
              for (ut = At; ut !== 0; ut--) for (yt = nt.bl_count[ut]; yt !== 0; ) Xt < (Pt = nt.heap[--xt]) || (_t[2 * Pt + 1] !== ut && (nt.opt_len += (ut - _t[2 * Pt + 1]) * _t[2 * Pt], _t[2 * Pt + 1] = ut), yt--);
            }
          })(p, P), mt(Z, lt, p.bl_count);
        }
        function s(p, P, j) {
          var U, N, Z = -1, Y = P[1], G = 0, q = 7, lt = 4;
          for (Y === 0 && (q = 138, lt = 3), P[2 * (j + 1) + 1] = 65535, U = 0; U <= j; U++) N = Y, Y = P[2 * (U + 1) + 1], ++G < q && N === Y || (G < lt ? p.bl_tree[2 * N] += G : N !== 0 ? (N !== Z && p.bl_tree[2 * N]++, p.bl_tree[2 * E]++) : G <= 10 ? p.bl_tree[2 * A]++ : p.bl_tree[2 * L]++, Z = N, lt = (G = 0) === Y ? (q = 138, 3) : N === Y ? (q = 6, 3) : (q = 7, 4));
        }
        function O(p, P, j) {
          var U, N, Z = -1, Y = P[1], G = 0, q = 7, lt = 4;
          for (Y === 0 && (q = 138, lt = 3), U = 0; U <= j; U++) if (N = Y, Y = P[2 * (U + 1) + 1], !(++G < q && N === Y)) {
            if (G < lt) for (; X(p, N, p.bl_tree), --G != 0; ) ;
            else N !== 0 ? (N !== Z && (X(p, N, p.bl_tree), G--), X(p, E, p.bl_tree), K(p, G - 3, 2)) : G <= 10 ? (X(p, A, p.bl_tree), K(p, G - 3, 3)) : (X(p, L, p.bl_tree), K(p, G - 11, 7));
            Z = N, lt = (G = 0) === Y ? (q = 138, 3) : N === Y ? (q = 6, 3) : (q = 7, 4);
          }
        }
        h(W);
        var R = !1;
        function g(p, P, j, U) {
          K(p, (_ << 1) + (U ? 1 : 0), 3), (function(N, Z, Y, G) {
            st(N), J(N, Y), J(N, ~Y), n.arraySet(N.pending_buf, N.window, Z, Y, N.pending), N.pending += Y;
          })(p, P, j);
        }
        a._tr_init = function(p) {
          R || ((function() {
            var P, j, U, N, Z, Y = new Array(m + 1);
            for (N = U = 0; N < S - 1; N++) for (D[N] = U, P = 0; P < 1 << F[N]; P++) l[U++] = N;
            for (l[U - 1] = N, N = Z = 0; N < 16; N++) for (W[N] = Z, P = 0; P < 1 << H[N]; P++) I[Z++] = N;
            for (Z >>= 7; N < d; N++) for (W[N] = Z << 7, P = 0; P < 1 << H[N] - 7; P++) I[256 + Z++] = N;
            for (j = 0; j <= m; j++) Y[j] = 0;
            for (P = 0; P <= 143; ) Q[2 * P + 1] = 8, P++, Y[8]++;
            for (; P <= 255; ) Q[2 * P + 1] = 9, P++, Y[9]++;
            for (; P <= 279; ) Q[2 * P + 1] = 7, P++, Y[7]++;
            for (; P <= 287; ) Q[2 * P + 1] = 8, P++, Y[8]++;
            for (mt(Q, y + 1, Y), P = 0; P < d; P++) w[2 * P + 1] = 5, w[2 * P] = ct(P, 5);
            et = new tt(Q, F, v + 1, y, m), $ = new tt(w, H, 0, d, m), rt = new tt(new Array(0), T, 0, k, b);
          })(), R = !0), p.l_desc = new z(p.dyn_ltree, et), p.d_desc = new z(p.dyn_dtree, $), p.bl_desc = new z(p.bl_tree, rt), p.bi_buf = 0, p.bi_valid = 0, at(p);
        }, a._tr_stored_block = g, a._tr_flush_block = function(p, P, j, U) {
          var N, Z, Y = 0;
          0 < p.level ? (p.strm.data_type === 2 && (p.strm.data_type = (function(G) {
            var q, lt = 4093624447;
            for (q = 0; q <= 31; q++, lt >>>= 1) if (1 & lt && G.dyn_ltree[2 * q] !== 0) return o;
            if (G.dyn_ltree[18] !== 0 || G.dyn_ltree[20] !== 0 || G.dyn_ltree[26] !== 0) return i;
            for (q = 32; q < v; q++) if (G.dyn_ltree[2 * q] !== 0) return i;
            return o;
          })(p)), vt(p, p.l_desc), vt(p, p.d_desc), Y = (function(G) {
            var q;
            for (s(G, G.dyn_ltree, G.l_desc.max_code), s(G, G.dyn_dtree, G.d_desc.max_code), vt(G, G.bl_desc), q = k - 1; 3 <= q && G.bl_tree[2 * V[q] + 1] === 0; q--) ;
            return G.opt_len += 3 * (q + 1) + 5 + 5 + 4, q;
          })(p), N = p.opt_len + 3 + 7 >>> 3, (Z = p.static_len + 3 + 7 >>> 3) <= N && (N = Z)) : N = Z = j + 5, j + 4 <= N && P !== -1 ? g(p, P, j, U) : p.strategy === 4 || Z === N ? (K(p, 2 + (U ? 1 : 0), 3), kt(p, Q, w)) : (K(p, 4 + (U ? 1 : 0), 3), (function(G, q, lt, nt) {
            var bt;
            for (K(G, q - 257, 5), K(G, lt - 1, 5), K(G, nt - 4, 4), bt = 0; bt < nt; bt++) K(G, G.bl_tree[2 * V[bt] + 1], 3);
            O(G, G.dyn_ltree, q - 1), O(G, G.dyn_dtree, lt - 1);
          })(p, p.l_desc.max_code + 1, p.d_desc.max_code + 1, Y + 1), kt(p, p.dyn_ltree, p.dyn_dtree)), at(p), U && st(p);
        }, a._tr_tally = function(p, P, j) {
          return p.pending_buf[p.d_buf + 2 * p.last_lit] = P >>> 8 & 255, p.pending_buf[p.d_buf + 2 * p.last_lit + 1] = 255 & P, p.pending_buf[p.l_buf + p.last_lit] = 255 & j, p.last_lit++, P === 0 ? p.dyn_ltree[2 * j]++ : (p.matches++, P--, p.dyn_ltree[2 * (l[j] + v + 1)]++, p.dyn_dtree[2 * M(P)]++), p.last_lit === p.lit_bufsize - 1;
        }, a._tr_align = function(p) {
          K(p, 2, 3), X(p, x, Q), (function(P) {
            P.bi_valid === 16 ? (J(P, P.bi_buf), P.bi_buf = 0, P.bi_valid = 0) : 8 <= P.bi_valid && (P.pending_buf[P.pending++] = 255 & P.bi_buf, P.bi_buf >>= 8, P.bi_valid -= 8);
          })(p);
        };
      }, { "../utils/common": 41 }], 53: [function(t, r, a) {
        r.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, {}], 54: [function(t, r, a) {
        (function(n) {
          (function(o, i) {
            if (!o.setImmediate) {
              var h, _, S, v, y = 1, d = {}, k = !1, u = o.document, m = Object.getPrototypeOf && Object.getPrototypeOf(o);
              m = m && m.setTimeout ? m : o, h = {}.toString.call(o.process) === "[object process]" ? function(E) {
                process.nextTick(function() {
                  b(E);
                });
              } : (function() {
                if (o.postMessage && !o.importScripts) {
                  var E = !0, A = o.onmessage;
                  return o.onmessage = function() {
                    E = !1;
                  }, o.postMessage("", "*"), o.onmessage = A, E;
                }
              })() ? (v = "setImmediate$" + Math.random() + "$", o.addEventListener ? o.addEventListener("message", x, !1) : o.attachEvent("onmessage", x), function(E) {
                o.postMessage(v + E, "*");
              }) : o.MessageChannel ? ((S = new MessageChannel()).port1.onmessage = function(E) {
                b(E.data);
              }, function(E) {
                S.port2.postMessage(E);
              }) : u && "onreadystatechange" in u.createElement("script") ? (_ = u.documentElement, function(E) {
                var A = u.createElement("script");
                A.onreadystatechange = function() {
                  b(E), A.onreadystatechange = null, _.removeChild(A), A = null;
                }, _.appendChild(A);
              }) : function(E) {
                setTimeout(b, 0, E);
              }, m.setImmediate = function(E) {
                typeof E != "function" && (E = new Function("" + E));
                for (var A = new Array(arguments.length - 1), L = 0; L < A.length; L++) A[L] = arguments[L + 1];
                var F = { callback: E, args: A };
                return d[y] = F, h(y), y++;
              }, m.clearImmediate = f;
            }
            function f(E) {
              delete d[E];
            }
            function b(E) {
              if (k) setTimeout(b, 0, E);
              else {
                var A = d[E];
                if (A) {
                  k = !0;
                  try {
                    (function(L) {
                      var F = L.callback, H = L.args;
                      switch (H.length) {
                        case 0:
                          F();
                          break;
                        case 1:
                          F(H[0]);
                          break;
                        case 2:
                          F(H[0], H[1]);
                          break;
                        case 3:
                          F(H[0], H[1], H[2]);
                          break;
                        default:
                          F.apply(i, H);
                      }
                    })(A);
                  } finally {
                    f(E), k = !1;
                  }
                }
              }
            }
            function x(E) {
              E.source === o && typeof E.data == "string" && E.data.indexOf(v) === 0 && b(+E.data.slice(v.length));
            }
          })(typeof self > "u" ? n === void 0 ? this : n : self);
        }).call(this, typeof zt < "u" ? zt : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}] }, {}, [10])(10);
    });
  })(jt)), jt.exports;
}
var Se = we();
const Ce = /* @__PURE__ */ _e(Se);
var dt;
(function(c) {
  c.OfficeDocument = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", c.FontTable = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable", c.Image = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", c.Numbering = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering", c.Styles = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", c.StylesWithEffects = "http://schemas.microsoft.com/office/2007/relationships/stylesWithEffects", c.Theme = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme", c.Settings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings", c.WebSettings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings", c.Hyperlink = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", c.Footnotes = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes", c.Endnotes = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes", c.Footer = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer", c.Header = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header", c.ExtendedProperties = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", c.CoreProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", c.CustomProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/custom-properties", c.Comments = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments", c.CommentsExtended = "http://schemas.microsoft.com/office/2011/relationships/commentsExtended", c.AltChunk = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/aFChunk";
})(dt || (dt = {}));
function xe(c, e) {
  return e.elements(c).map((t) => ({
    id: e.attr(t, "Id"),
    type: e.attr(t, "Type"),
    target: e.attr(t, "Target"),
    targetMode: e.attr(t, "TargetMode")
  }));
}
function Pe(c) {
  return c?.replace(/[ .]+/g, "-").replace(/[&]+/g, "and").toLowerCase();
}
function Ht(c) {
  return /^[^"'].*\s.*[^"']$/.test(c) ? `'${c}'` : c;
}
function Ft(c) {
  let e = c.lastIndexOf("/") + 1, t = e == 0 ? "" : c.substring(0, e), r = e == 0 ? c : c.substring(e);
  return [t, r];
}
function Ut(c, e) {
  try {
    const t = "http://docx/";
    return new URL(c, t + e).toString().substring(t.length);
  } catch {
    return `${e}${c}`;
  }
}
function wt(c, e) {
  return c.reduce((t, r) => (t[e(r)] = r, t), {});
}
function Ae(c) {
  return new Promise((e, t) => {
    const r = new FileReader();
    r.onloadend = () => e(r.result), r.onerror = () => t(), r.readAsDataURL(c);
  });
}
function $t(c) {
  return c && typeof c == "object" && !Array.isArray(c);
}
function Wt(c) {
  return typeof c == "string" || c instanceof String;
}
function Ot(c, ...e) {
  if (!e.length)
    return c;
  const t = e.shift();
  if ($t(c) && $t(t))
    for (const r in t)
      if ($t(t[r])) {
        const a = c[r] ?? (c[r] = {});
        Ot(a, t[r]);
      } else
        c[r] = t[r];
  return Ot(c, ...e);
}
function Et(c) {
  return Array.isArray(c) ? c : [c];
}
function Ee(c, e, t) {
  return e > c ? e : t < c ? t : c;
}
const se = {
  wordml: "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
}, ft = {
  Dxa: { mul: 0.05, unit: "pt" },
  Emu: { mul: 1 / 12700, unit: "pt" },
  FontSize: { mul: 0.5, unit: "pt" },
  Border: { mul: 0.125, unit: "pt", min: 0.25, max: 12 },
  Point: { mul: 1, unit: "pt" },
  Percent: { mul: 0.02, unit: "%" }
};
function ie(c, e = ft.Dxa) {
  if (c == null || /.+(p[xt]|[%])$/.test(c))
    return c;
  var t = parseInt(c) * e.mul;
  return e.min && e.max && (t = Ee(t, e.min, e.max)), `${t.toFixed(2)}${e.unit}`;
}
function Ne(c, e = !1) {
  switch (c) {
    case "1":
      return !0;
    case "0":
      return !1;
    case "on":
      return !0;
    case "off":
      return !1;
    case "true":
      return !0;
    case "false":
      return !1;
    default:
      return e;
  }
}
function oe(c, e, t) {
  if (c.namespaceURI != se.wordml)
    return !1;
  switch (c.localName) {
    case "color":
      e.color = t.attr(c, "val");
      break;
    case "sz":
      e.fontSize = t.lengthAttr(c, "val", ft.FontSize);
      break;
    default:
      return !1;
  }
  return !0;
}
function Me(c, e = !1) {
  e && (c = c.replace(/<[?].*[?]>/, "")), c = ze(c);
  const t = new DOMParser().parseFromString(c, "application/xml"), r = Be(t);
  if (r)
    throw new Error(r);
  return t;
}
function Be(c) {
  return c.getElementsByTagName("parsererror")[0]?.textContent;
}
function ze(c) {
  return c.charCodeAt(0) === 65279 ? c.substring(1) : c;
}
function Re(c) {
  return new XMLSerializer().serializeToString(c);
}
class le {
  elements(e, t = null) {
    const r = [];
    for (let a = 0, n = e.childNodes.length; a < n; a++) {
      let o = e.childNodes.item(a);
      o.nodeType == Node.ELEMENT_NODE && (t == null || o.localName == t) && r.push(o);
    }
    return r;
  }
  element(e, t) {
    for (let r = 0, a = e.childNodes.length; r < a; r++) {
      let n = e.childNodes.item(r);
      if (n.nodeType == 1 && n.localName == t)
        return n;
    }
    return null;
  }
  elementAttr(e, t, r) {
    var a = this.element(e, t);
    return a ? this.attr(a, r) : void 0;
  }
  attrs(e) {
    return Array.from(e.attributes);
  }
  attr(e, t) {
    for (let r = 0, a = e.attributes.length; r < a; r++) {
      let n = e.attributes.item(r);
      if (n.localName == t)
        return n.value;
    }
    return null;
  }
  intAttr(e, t, r = null) {
    var a = this.attr(e, t);
    return a ? parseInt(a) : r;
  }
  hexAttr(e, t, r = null) {
    var a = this.attr(e, t);
    return a ? parseInt(a, 16) : r;
  }
  floatAttr(e, t, r = null) {
    var a = this.attr(e, t);
    return a ? parseFloat(a) : r;
  }
  boolAttr(e, t, r = null) {
    return Ne(this.attr(e, t), r);
  }
  lengthAttr(e, t, r = ft.Dxa) {
    return ie(this.attr(e, t), r);
  }
}
const C = new le();
class gt {
  constructor(e, t) {
    this._package = e, this.path = t;
  }
  async load() {
    this.rels = await this._package.loadRelationships(this.path);
    const e = await this._package.load(this.path), t = this._package.parseXmlDocument(e);
    this._package.options.keepOrigin && (this._xmlDocument = t), this.parseXml(t.firstElementChild);
  }
  save() {
    this._package.update(this.path, Re(this._xmlDocument));
  }
  parseXml(e) {
  }
}
const Te = {
  embedRegular: "regular",
  embedBold: "bold",
  embedItalic: "italic",
  embedBoldItalic: "boldItalic"
};
function Fe(c, e) {
  return e.elements(c).map((t) => Ie(t, e));
}
function Ie(c, e) {
  let t = {
    name: e.attr(c, "name"),
    embedFontRefs: []
  };
  for (let r of e.elements(c))
    switch (r.localName) {
      case "family":
        t.family = e.attr(r, "val");
        break;
      case "altName":
        t.altName = e.attr(r, "val");
        break;
      case "embedRegular":
      case "embedBold":
      case "embedItalic":
      case "embedBoldItalic":
        t.embedFontRefs.push(Oe(r, e));
        break;
    }
  return t;
}
function Oe(c, e) {
  return {
    id: e.attr(c, "id"),
    key: e.attr(c, "fontKey"),
    type: Te[c.localName]
  };
}
class Le extends gt {
  parseXml(e) {
    this.fonts = Fe(e, this._package.xmlParser);
  }
}
function De(c, e) {
  return e.elements(c).map((t) => ({
    extension: e.attr(t, "Extension"),
    partName: e.attr(t, "PartName"),
    contentType: e.attr(t, "ContentType")
  }));
}
class Zt {
  constructor(e, t) {
    this._zip = e, this.options = t, this.xmlParser = new le();
  }
  get(e) {
    const t = je(e);
    return this._zip.files[t] ?? this._zip.files[t.replace(/\//g, "\\")];
  }
  update(e, t) {
    this._zip.file(e, t);
  }
  static async load(e, t) {
    const r = await Ce.loadAsync(e);
    return new Zt(r, t);
  }
  save(e = "blob") {
    return this._zip.generateAsync({ type: e });
  }
  load(e, t = "string") {
    return this.get(e)?.async(t) ?? Promise.resolve(null);
  }
  async loadRelationships(e = null) {
    let t = "_rels/.rels";
    if (e != null) {
      const [a, n] = Ft(e);
      t = `${a}_rels/${n}.rels`;
    }
    const r = await this.load(t);
    return r ? xe(this.parseXmlDocument(r).firstElementChild, this.xmlParser) : null;
  }
  async loadContentTypes() {
    const e = await this.load("[Content_Types].xml");
    return e ? De(this.parseXmlDocument(e).firstElementChild, this.xmlParser) : [];
  }
  parseXmlDocument(e) {
    return Me(e, this.options.trimXmlDeclaration);
  }
}
function je(c) {
  return c.startsWith("/") ? c.substr(1) : c;
}
class Ue extends gt {
  constructor(e, t, r) {
    super(e, t), this._documentParser = r;
  }
  parseXml(e) {
    this.body = this._documentParser.parseDocumentFile(e);
  }
}
function Tt(c, e) {
  return {
    type: e.attr(c, "val"),
    color: e.attr(c, "color"),
    size: e.lengthAttr(c, "sz", ft.Border),
    offset: e.lengthAttr(c, "space", ft.Point),
    frame: e.boolAttr(c, "frame"),
    shadow: e.boolAttr(c, "shadow")
  };
}
function $e(c, e) {
  var t = {};
  for (let r of e.elements(c))
    switch (r.localName) {
      case "left":
        t.left = Tt(r, e);
        break;
      case "top":
        t.top = Tt(r, e);
        break;
      case "right":
        t.right = Tt(r, e);
        break;
      case "bottom":
        t.bottom = Tt(r, e);
        break;
    }
  return t;
}
var qt;
(function(c) {
  c.Continuous = "continuous", c.NextPage = "nextPage", c.NextColumn = "nextColumn", c.EvenPage = "evenPage", c.OddPage = "oddPage";
})(qt || (qt = {}));
function ce(c, e = C) {
  var t = {};
  for (let r of e.elements(c))
    switch (r.localName) {
      case "pgSz":
        t.pageSize = {
          width: e.lengthAttr(r, "w"),
          height: e.lengthAttr(r, "h"),
          orientation: e.attr(r, "orient")
        };
        break;
      case "type":
        t.type = e.attr(r, "val");
        break;
      case "pgMar":
        t.pageMargins = {
          left: e.lengthAttr(r, "left"),
          right: e.lengthAttr(r, "right"),
          top: e.lengthAttr(r, "top"),
          bottom: e.lengthAttr(r, "bottom"),
          header: e.lengthAttr(r, "header"),
          footer: e.lengthAttr(r, "footer"),
          gutter: e.lengthAttr(r, "gutter")
        };
        break;
      case "cols":
        t.columns = He(r, e);
        break;
      case "headerReference":
        (t.headerRefs ?? (t.headerRefs = [])).push(Jt(r, e));
        break;
      case "footerReference":
        (t.footerRefs ?? (t.footerRefs = [])).push(Jt(r, e));
        break;
      case "titlePg":
        t.titlePage = e.boolAttr(r, "val", !0);
        break;
      case "pgBorders":
        t.pageBorders = $e(r, e);
        break;
      case "pgNumType":
        t.pageNumber = We(r, e);
        break;
    }
  return t;
}
function He(c, e) {
  return {
    numberOfColumns: e.intAttr(c, "num"),
    space: e.lengthAttr(c, "space"),
    separator: e.boolAttr(c, "sep"),
    equalWidth: e.boolAttr(c, "equalWidth", !0),
    columns: e.elements(c, "col").map((t) => ({
      width: e.lengthAttr(t, "w"),
      space: e.lengthAttr(t, "space")
    }))
  };
}
function We(c, e) {
  return {
    chapSep: e.attr(c, "chapSep"),
    chapStyle: e.attr(c, "chapStyle"),
    format: e.attr(c, "fmt"),
    start: e.intAttr(c, "start")
  };
}
function Jt(c, e) {
  return {
    id: e.attr(c, "id"),
    type: e.attr(c, "type")
  };
}
function Ze(c, e) {
  return {
    before: e.lengthAttr(c, "before"),
    after: e.lengthAttr(c, "after"),
    line: e.intAttr(c, "line"),
    lineRule: e.attr(c, "lineRule")
  };
}
function Vt(c, e) {
  let t = {};
  for (let r of e.elements(c))
    Ve(r, t, e);
  return t;
}
function Ve(c, e, t) {
  return !!oe(c, e, t);
}
function he(c, e) {
  let t = {};
  for (let r of e.elements(c))
    ue(r, t, e);
  return t;
}
function ue(c, e, t) {
  if (c.namespaceURI != se.wordml)
    return !1;
  if (oe(c, e, t))
    return !0;
  switch (c.localName) {
    case "tabs":
      e.tabs = Ge(c, t);
      break;
    case "sectPr":
      e.sectionProps = ce(c, t);
      break;
    case "numPr":
      e.numbering = Xe(c, t);
      break;
    case "spacing":
      return e.lineSpacing = Ze(c, t), !1;
    case "textAlignment":
      return e.textAlignment = t.attr(c, "val"), !1;
    case "keepLines":
      e.keepLines = t.boolAttr(c, "val", !0);
      break;
    case "keepNext":
      e.keepNext = t.boolAttr(c, "val", !0);
      break;
    case "pageBreakBefore":
      e.pageBreakBefore = t.boolAttr(c, "val", !0);
      break;
    case "outlineLvl":
      e.outlineLevel = t.intAttr(c, "val");
      break;
    case "pStyle":
      e.styleName = t.attr(c, "val");
      break;
    case "rPr":
      e.runProps = Vt(c, t);
      break;
    default:
      return !1;
  }
  return !0;
}
function Ge(c, e) {
  return e.elements(c, "tab").map((t) => ({
    position: e.lengthAttr(t, "pos"),
    leader: e.attr(t, "leader"),
    style: e.attr(t, "val")
  }));
}
function Xe(c, e) {
  var t = {};
  for (let r of e.elements(c))
    switch (r.localName) {
      case "numId":
        t.id = e.attr(r, "val");
        break;
      case "ilvl":
        t.level = e.intAttr(r, "val");
        break;
    }
  return t;
}
function Ke(c, e) {
  let t = {
    numberings: [],
    abstractNumberings: [],
    bulletPictures: []
  };
  for (let r of e.elements(c))
    switch (r.localName) {
      case "num":
        t.numberings.push(Ye(r, e));
        break;
      case "abstractNum":
        t.abstractNumberings.push(qe(r, e));
        break;
      case "numPicBullet":
        t.bulletPictures.push(Qe(r, e));
        break;
    }
  return t;
}
function Ye(c, e) {
  let t = {
    id: e.attr(c, "numId"),
    overrides: []
  };
  for (let r of e.elements(c))
    switch (r.localName) {
      case "abstractNumId":
        t.abstractId = e.attr(r, "val");
        break;
      case "lvlOverride":
        t.overrides.push(Je(r, e));
        break;
    }
  return t;
}
function qe(c, e) {
  let t = {
    id: e.attr(c, "abstractNumId"),
    levels: []
  };
  for (let r of e.elements(c))
    switch (r.localName) {
      case "name":
        t.name = e.attr(r, "val");
        break;
      case "multiLevelType":
        t.multiLevelType = e.attr(r, "val");
        break;
      case "numStyleLink":
        t.numberingStyleLink = e.attr(r, "val");
        break;
      case "styleLink":
        t.styleLink = e.attr(r, "val");
        break;
      case "lvl":
        t.levels.push(de(r, e));
        break;
    }
  return t;
}
function de(c, e) {
  let t = {
    level: e.intAttr(c, "ilvl")
  };
  for (let r of e.elements(c))
    switch (r.localName) {
      case "start":
        t.start = e.attr(r, "val");
        break;
      case "lvlRestart":
        t.restart = e.intAttr(r, "val");
        break;
      case "numFmt":
        t.format = e.attr(r, "val");
        break;
      case "lvlText":
        t.text = e.attr(r, "val");
        break;
      case "lvlJc":
        t.justification = e.attr(r, "val");
        break;
      case "lvlPicBulletId":
        t.bulletPictureId = e.attr(r, "val");
        break;
      case "pStyle":
        t.paragraphStyle = e.attr(r, "val");
        break;
      case "pPr":
        t.paragraphProps = he(r, e);
        break;
      case "rPr":
        t.runProps = Vt(r, e);
        break;
    }
  return t;
}
function Je(c, e) {
  let t = {
    level: e.intAttr(c, "ilvl")
  };
  for (let r of e.elements(c))
    switch (r.localName) {
      case "startOverride":
        t.start = e.intAttr(r, "val");
        break;
      case "lvl":
        t.numberingLevel = de(r, e);
        break;
    }
  return t;
}
function Qe(c, e) {
  var t = e.element(c, "pict"), r = t && e.element(t, "shape"), a = r && e.element(r, "imagedata");
  return a ? {
    id: e.attr(c, "numPicBulletId"),
    referenceId: e.attr(a, "id"),
    style: e.attr(r, "style")
  } : null;
}
class tr extends gt {
  constructor(e, t, r) {
    super(e, t), this._documentParser = r;
  }
  parseXml(e) {
    Object.assign(this, Ke(e, this._package.xmlParser)), this.domNumberings = this._documentParser.parseNumberingFile(e);
  }
}
class er extends gt {
  constructor(e, t, r) {
    super(e, t), this._documentParser = r;
  }
  parseXml(e) {
    this.styles = this._documentParser.parseStylesFile(e);
  }
}
var B;
(function(c) {
  c.Document = "document", c.Paragraph = "paragraph", c.Run = "run", c.Break = "break", c.NoBreakHyphen = "noBreakHyphen", c.Table = "table", c.Row = "row", c.Cell = "cell", c.Hyperlink = "hyperlink", c.SmartTag = "smartTag", c.Drawing = "drawing", c.Image = "image", c.Text = "text", c.Tab = "tab", c.Symbol = "symbol", c.BookmarkStart = "bookmarkStart", c.BookmarkEnd = "bookmarkEnd", c.Footer = "footer", c.Header = "header", c.FootnoteReference = "footnoteReference", c.EndnoteReference = "endnoteReference", c.Footnote = "footnote", c.Endnote = "endnote", c.SimpleField = "simpleField", c.ComplexField = "complexField", c.Instruction = "instruction", c.VmlPicture = "vmlPicture", c.MmlMath = "mmlMath", c.MmlMathParagraph = "mmlMathParagraph", c.MmlFraction = "mmlFraction", c.MmlFunction = "mmlFunction", c.MmlFunctionName = "mmlFunctionName", c.MmlNumerator = "mmlNumerator", c.MmlDenominator = "mmlDenominator", c.MmlRadical = "mmlRadical", c.MmlBase = "mmlBase", c.MmlDegree = "mmlDegree", c.MmlSuperscript = "mmlSuperscript", c.MmlSubscript = "mmlSubscript", c.MmlPreSubSuper = "mmlPreSubSuper", c.MmlSubArgument = "mmlSubArgument", c.MmlSuperArgument = "mmlSuperArgument", c.MmlNary = "mmlNary", c.MmlDelimiter = "mmlDelimiter", c.MmlRun = "mmlRun", c.MmlEquationArray = "mmlEquationArray", c.MmlLimit = "mmlLimit", c.MmlLimitLower = "mmlLimitLower", c.MmlMatrix = "mmlMatrix", c.MmlMatrixRow = "mmlMatrixRow", c.MmlBox = "mmlBox", c.MmlBar = "mmlBar", c.MmlGroupChar = "mmlGroupChar", c.VmlElement = "vmlElement", c.Inserted = "inserted", c.Deleted = "deleted", c.DeletedText = "deletedText", c.Comment = "comment", c.CommentReference = "commentReference", c.CommentRangeStart = "commentRangeStart", c.CommentRangeEnd = "commentRangeEnd", c.AltChunk = "altChunk";
})(B || (B = {}));
class St {
  constructor() {
    this.children = [], this.cssStyle = {};
  }
}
class rr extends St {
  constructor() {
    super(...arguments), this.type = B.Header;
  }
}
class ar extends St {
  constructor() {
    super(...arguments), this.type = B.Footer;
  }
}
class fe extends gt {
  constructor(e, t, r) {
    super(e, t), this._documentParser = r;
  }
  parseXml(e) {
    this.rootElement = this.createRootElement(), this.rootElement.children = this._documentParser.parseBodyElements(e);
  }
}
class nr extends fe {
  createRootElement() {
    return new rr();
  }
}
class sr extends fe {
  createRootElement() {
    return new ar();
  }
}
function ir(c, e) {
  const t = {};
  for (let r of e.elements(c))
    switch (r.localName) {
      case "Template":
        t.template = r.textContent;
        break;
      case "Pages":
        t.pages = Nt(r.textContent);
        break;
      case "Words":
        t.words = Nt(r.textContent);
        break;
      case "Characters":
        t.characters = Nt(r.textContent);
        break;
      case "Application":
        t.application = r.textContent;
        break;
      case "Lines":
        t.lines = Nt(r.textContent);
        break;
      case "Paragraphs":
        t.paragraphs = Nt(r.textContent);
        break;
      case "Company":
        t.company = r.textContent;
        break;
      case "AppVersion":
        t.appVersion = r.textContent;
        break;
    }
  return t;
}
function Nt(c) {
  if (!(typeof c > "u"))
    return parseInt(c);
}
class or extends gt {
  parseXml(e) {
    this.props = ir(e, this._package.xmlParser);
  }
}
function lr(c, e) {
  const t = {};
  for (let r of e.elements(c))
    switch (r.localName) {
      case "title":
        t.title = r.textContent;
        break;
      case "description":
        t.description = r.textContent;
        break;
      case "subject":
        t.subject = r.textContent;
        break;
      case "creator":
        t.creator = r.textContent;
        break;
      case "keywords":
        t.keywords = r.textContent;
        break;
      case "language":
        t.language = r.textContent;
        break;
      case "lastModifiedBy":
        t.lastModifiedBy = r.textContent;
        break;
      case "revision":
        r.textContent && (t.revision = parseInt(r.textContent));
        break;
    }
  return t;
}
class cr extends gt {
  parseXml(e) {
    this.props = lr(e, this._package.xmlParser);
  }
}
class hr {
}
function ur(c, e) {
  var t = new hr(), r = e.element(c, "themeElements");
  for (let a of e.elements(r))
    switch (a.localName) {
      case "clrScheme":
        t.colorScheme = dr(a, e);
        break;
      case "fontScheme":
        t.fontScheme = fr(a, e);
        break;
    }
  return t;
}
function dr(c, e) {
  var t = {
    name: e.attr(c, "name"),
    colors: {}
  };
  for (let n of e.elements(c)) {
    var r = e.element(n, "srgbClr"), a = e.element(n, "sysClr");
    r ? t.colors[n.localName] = e.attr(r, "val") : a && (t.colors[n.localName] = e.attr(a, "lastClr"));
  }
  return t;
}
function fr(c, e) {
  var t = {
    name: e.attr(c, "name")
  };
  for (let r of e.elements(c))
    switch (r.localName) {
      case "majorFont":
        t.majorFont = Qt(r, e);
        break;
      case "minorFont":
        t.minorFont = Qt(r, e);
        break;
    }
  return t;
}
function Qt(c, e) {
  return {
    latinTypeface: e.elementAttr(c, "latin", "typeface"),
    eaTypeface: e.elementAttr(c, "ea", "typeface"),
    csTypeface: e.elementAttr(c, "cs", "typeface")
  };
}
class pr extends gt {
  constructor(e, t) {
    super(e, t);
  }
  parseXml(e) {
    this.theme = ur(e, this._package.xmlParser);
  }
}
class pe {
}
class mr extends pe {
  constructor() {
    super(...arguments), this.type = B.Footnote;
  }
}
class gr extends pe {
  constructor() {
    super(...arguments), this.type = B.Endnote;
  }
}
class me extends gt {
  constructor(e, t, r) {
    super(e, t), this._documentParser = r;
  }
}
class br extends me {
  constructor(e, t, r) {
    super(e, t, r);
  }
  parseXml(e) {
    this.notes = this._documentParser.parseNotes(e, "footnote", mr);
  }
}
class vr extends me {
  constructor(e, t, r) {
    super(e, t, r);
  }
  parseXml(e) {
    this.notes = this._documentParser.parseNotes(e, "endnote", gr);
  }
}
function kr(c, e) {
  var t = {};
  for (let r of e.elements(c))
    switch (r.localName) {
      case "defaultTabStop":
        t.defaultTabStop = e.lengthAttr(r, "val");
        break;
      case "footnotePr":
        t.footnoteProps = te(r, e);
        break;
      case "endnotePr":
        t.endnoteProps = te(r, e);
        break;
      case "autoHyphenation":
        t.autoHyphenation = e.boolAttr(r, "val");
        break;
    }
  return t;
}
function te(c, e) {
  var t = {
    defaultNoteIds: []
  };
  for (let r of e.elements(c))
    switch (r.localName) {
      case "numFmt":
        t.nummeringFormat = e.attr(r, "val");
        break;
      case "footnote":
      case "endnote":
        t.defaultNoteIds.push(e.attr(r, "id"));
        break;
    }
  return t;
}
class yr extends gt {
  constructor(e, t) {
    super(e, t);
  }
  parseXml(e) {
    this.settings = kr(e, this._package.xmlParser);
  }
}
function _r(c, e) {
  return e.elements(c, "property").map((t) => {
    const r = t.firstChild;
    return {
      formatId: e.attr(t, "fmtid"),
      name: e.attr(t, "name"),
      type: r.nodeName,
      value: r.textContent
    };
  });
}
class wr extends gt {
  parseXml(e) {
    this.props = _r(e, this._package.xmlParser);
  }
}
class Sr extends gt {
  constructor(e, t, r) {
    super(e, t), this._documentParser = r;
  }
  parseXml(e) {
    this.comments = this._documentParser.parseComments(e), this.commentMap = wt(this.comments, (t) => t.id);
  }
}
class Cr extends gt {
  constructor(e, t) {
    super(e, t), this.comments = [];
  }
  parseXml(e) {
    const t = this._package.xmlParser;
    for (let r of t.elements(e, "commentEx"))
      this.comments.push({
        paraId: t.attr(r, "paraId"),
        paraIdParent: t.attr(r, "paraIdParent"),
        done: t.boolAttr(r, "done")
      });
    this.commentMap = wt(this.comments, (r) => r.paraId);
  }
}
const xr = [
  { type: dt.OfficeDocument, target: "word/document.xml" },
  { type: dt.ExtendedProperties, target: "docProps/app.xml" },
  { type: dt.CoreProperties, target: "docProps/core.xml" },
  { type: dt.CustomProperties, target: "docProps/custom.xml" }
];
class Gt {
  constructor() {
    this.parts = [], this.partsMap = {}, this.contentTypes = [];
  }
  static async load(e, t, r) {
    var a = new Gt();
    return a._options = r, a._parser = t, a._package = await Zt.load(e, r), a.rels = await a._package.loadRelationships(), a.contentTypes = await a._package.loadContentTypes(), await Promise.all(xr.map((n) => {
      const o = a.rels.find((i) => i.type === n.type) ?? n;
      return a.loadRelationshipPart(o.target, o.type);
    })), a;
  }
  save(e = "blob") {
    return this._package.save(e);
  }
  async loadRelationshipPart(e, t) {
    if (this.partsMap[e])
      return this.partsMap[e];
    if (!this._package.get(e))
      return null;
    let r = null;
    switch (t) {
      case dt.OfficeDocument:
        this.documentPart = r = new Ue(this._package, e, this._parser);
        break;
      case dt.FontTable:
        this.fontTablePart = r = new Le(this._package, e);
        break;
      case dt.Numbering:
        this.numberingPart = r = new tr(this._package, e, this._parser);
        break;
      case dt.Styles:
        this.stylesPart = r = new er(this._package, e, this._parser);
        break;
      case dt.Theme:
        this.themePart = r = new pr(this._package, e);
        break;
      case dt.Footnotes:
        this.footnotesPart = r = new br(this._package, e, this._parser);
        break;
      case dt.Endnotes:
        this.endnotesPart = r = new vr(this._package, e, this._parser);
        break;
      case dt.Footer:
        r = new sr(this._package, e, this._parser);
        break;
      case dt.Header:
        r = new nr(this._package, e, this._parser);
        break;
      case dt.CoreProperties:
        this.corePropsPart = r = new cr(this._package, e);
        break;
      case dt.ExtendedProperties:
        this.extendedPropsPart = r = new or(this._package, e);
        break;
      case dt.CustomProperties:
        r = new wr(this._package, e);
        break;
      case dt.Settings:
        this.settingsPart = r = new yr(this._package, e);
        break;
      case dt.Comments:
        this.commentsPart = r = new Sr(this._package, e, this._parser);
        break;
      case dt.CommentsExtended:
        this.commentsExtendedPart = r = new Cr(this._package, e);
        break;
    }
    if (r == null)
      return Promise.resolve(null);
    if (this.partsMap[e] = r, this.parts.push(r), await r.load(), r.rels?.length > 0) {
      const [a] = Ft(r.path);
      await Promise.all(r.rels.map((n) => this.loadRelationshipPart(Ut(n.target, a), n.type)));
    }
    return r;
  }
  async loadDocumentImage(e, t) {
    const r = this.getPathById(t ?? this.documentPart, e);
    return r ? this.blobToURL(await this._package.load(r, "blob"), r) : null;
  }
  async loadNumberingImage(e) {
    const t = this.getPathById(this.numberingPart, e);
    return t ? this.blobToURL(await this._package.load(t, "blob"), t) : null;
  }
  async loadFont(e, t) {
    const r = this.getPathById(this.fontTablePart, e);
    if (!r)
      return null;
    const a = await this._package.load(r, "uint8array");
    return a && this.blobToURL(new Blob([Pr(a, t)]), r);
  }
  async loadAltChunk(e, t) {
    const r = this.getPathById(t ?? this.documentPart, e);
    return r ? this._package.load(r, "string") : Promise.resolve(null);
  }
  blobToURL(e, t) {
    if (!e)
      return null;
    if (t) {
      const r = this.contentTypes.find((a) => a.partName === t || a.extension && t.endsWith(`.${a.extension}`));
      e = r ? new Blob([e], { type: r.contentType }) : e;
    }
    return this._options.useBase64URL ? Ae(e) : URL.createObjectURL(e);
  }
  findPartByRelId(e, t = null) {
    var r = (t.rels ?? this.rels).find((n) => n.id == e);
    const a = t ? Ft(t.path)[0] : "";
    return r ? this.partsMap[Ut(r.target, a)] : null;
  }
  getPathById(e, t) {
    const r = e.rels.find((n) => n.id == t), [a] = Ft(e.path);
    return r ? Ut(r.target, a) : null;
  }
}
function Pr(c, e) {
  const r = e.replace(/{|}|-/g, ""), a = new Array(16);
  for (let n = 0; n < 16; n++)
    a[16 - n - 1] = parseInt(r.substring(n * 2, n * 2 + 2), 16);
  for (let n = 0; n < 32; n++)
    c[n] = c[n] ^ a[n % 16];
  return c;
}
function Ar(c, e) {
  return {
    type: B.BookmarkStart,
    id: e.attr(c, "id"),
    name: e.attr(c, "name"),
    colFirst: e.intAttr(c, "colFirst"),
    colLast: e.intAttr(c, "colLast")
  };
}
function Er(c, e) {
  return {
    type: B.BookmarkEnd,
    id: e.attr(c, "id")
  };
}
class Nr extends St {
  constructor() {
    super(...arguments), this.type = B.VmlElement, this.attrs = {};
  }
}
function ge(c, e) {
  var t = new Nr();
  switch (c.localName) {
    case "rect":
      t.tagName = "rect", Object.assign(t.attrs, { width: "100%", height: "100%" });
      break;
    case "oval":
      t.tagName = "ellipse", Object.assign(t.attrs, { cx: "50%", cy: "50%", rx: "50%", ry: "50%" });
      break;
    case "line":
      t.tagName = "line";
      break;
    case "shape":
      t.tagName = "g";
      break;
    case "textbox":
      t.tagName = "foreignObject", Object.assign(t.attrs, { width: "100%", height: "100%" });
      break;
    default:
      return null;
  }
  for (const r of C.attrs(c))
    switch (r.localName) {
      case "style":
        t.cssStyleText = r.value;
        break;
      case "fillcolor":
        t.attrs.fill = r.value;
        break;
      case "from":
        const [a, n] = ee(r.value);
        Object.assign(t.attrs, { x1: a, y1: n });
        break;
      case "to":
        const [o, i] = ee(r.value);
        Object.assign(t.attrs, { x2: o, y2: i });
        break;
    }
  for (const r of C.elements(c))
    switch (r.localName) {
      case "stroke":
        Object.assign(t.attrs, Mr(r));
        break;
      case "fill":
        Object.assign(t.attrs, Br());
        break;
      case "imagedata":
        t.tagName = "image", Object.assign(t.attrs, { width: "100%", height: "100%" }), t.imageHref = {
          id: C.attr(r, "id"),
          title: C.attr(r, "title")
        };
        break;
      case "txbxContent":
        t.children.push(...e.parseBodyElements(r));
        break;
      default:
        const a = ge(r, e);
        a && t.children.push(a);
        break;
    }
  return t;
}
function Mr(c) {
  return {
    stroke: C.attr(c, "color"),
    "stroke-width": C.lengthAttr(c, "weight", ft.Emu) ?? "1px"
  };
}
function Br(c) {
  return {};
}
function ee(c) {
  return c.split(",");
}
class zr extends St {
  constructor() {
    super(...arguments), this.type = B.Comment;
  }
}
class Rr extends St {
  constructor(e) {
    super(), this.id = e, this.type = B.CommentReference;
  }
}
class Tr extends St {
  constructor(e) {
    super(), this.id = e, this.type = B.CommentRangeStart;
  }
}
class Fr extends St {
  constructor(e) {
    super(), this.id = e, this.type = B.CommentRangeEnd;
  }
}
var It = {
  shd: "inherit",
  color: "black",
  borderColor: "black",
  highlight: "transparent"
};
const Ir = [], re = {
  oMath: B.MmlMath,
  oMathPara: B.MmlMathParagraph,
  f: B.MmlFraction,
  func: B.MmlFunction,
  fName: B.MmlFunctionName,
  num: B.MmlNumerator,
  den: B.MmlDenominator,
  rad: B.MmlRadical,
  deg: B.MmlDegree,
  e: B.MmlBase,
  sSup: B.MmlSuperscript,
  sSub: B.MmlSubscript,
  sPre: B.MmlPreSubSuper,
  sup: B.MmlSuperArgument,
  sub: B.MmlSubArgument,
  d: B.MmlDelimiter,
  nary: B.MmlNary,
  eqArr: B.MmlEquationArray,
  lim: B.MmlLimit,
  limLow: B.MmlLimitLower,
  m: B.MmlMatrix,
  mr: B.MmlMatrixRow,
  box: B.MmlBox,
  bar: B.MmlBar,
  groupChr: B.MmlGroupChar
};
class Or {
  constructor(e) {
    this.options = {
      ignoreWidth: !1,
      debug: !1,
      ...e
    };
  }
  parseNotes(e, t, r) {
    var a = [];
    for (let n of C.elements(e, t)) {
      const o = new r();
      o.id = C.attr(n, "id"), o.noteType = C.attr(n, "type"), o.children = this.parseBodyElements(n), a.push(o);
    }
    return a;
  }
  parseComments(e) {
    var t = [];
    for (let r of C.elements(e, "comment")) {
      const a = new zr();
      a.id = C.attr(r, "id"), a.author = C.attr(r, "author"), a.initials = C.attr(r, "initials"), a.date = C.attr(r, "date"), a.children = this.parseBodyElements(r), t.push(a);
    }
    return t;
  }
  parseDocumentFile(e) {
    var t = C.element(e, "body"), r = C.element(e, "background"), a = C.element(t, "sectPr");
    return {
      type: B.Document,
      children: this.parseBodyElements(t),
      props: a ? ce(a, C) : {},
      cssStyle: r ? this.parseBackground(r) : {}
    };
  }
  parseBackground(e) {
    var t = {}, r = Ct.colorAttr(e, "color");
    return r && (t["background-color"] = r), t;
  }
  parseBodyElements(e) {
    var t = [];
    for (const r of C.elements(e))
      switch (r.localName) {
        case "p":
          t.push(this.parseParagraph(r));
          break;
        case "altChunk":
          t.push(this.parseAltChunk(r));
          break;
        case "tbl":
          t.push(this.parseTable(r));
          break;
        case "sdt":
          t.push(...this.parseSdt(r, (a) => this.parseBodyElements(a)));
          break;
      }
    return t;
  }
  parseStylesFile(e) {
    var t = [];
    for (const r of C.elements(e))
      switch (r.localName) {
        case "style":
          t.push(this.parseStyle(r));
          break;
        case "docDefaults":
          t.push(this.parseDefaultStyles(r));
          break;
      }
    return t;
  }
  parseDefaultStyles(e) {
    var t = {
      id: null,
      name: null,
      target: null,
      basedOn: null,
      styles: []
    };
    for (const n of C.elements(e))
      switch (n.localName) {
        case "rPrDefault":
          var r = C.element(n, "rPr");
          r && t.styles.push({
            target: "span",
            values: this.parseDefaultProperties(r, {})
          });
          break;
        case "pPrDefault":
          var a = C.element(n, "pPr");
          a && t.styles.push({
            target: "p",
            values: this.parseDefaultProperties(a, {})
          });
          break;
      }
    return t;
  }
  parseStyle(e) {
    var t = {
      id: C.attr(e, "styleId"),
      isDefault: C.boolAttr(e, "default"),
      name: null,
      target: null,
      basedOn: null,
      styles: [],
      linked: null
    };
    switch (C.attr(e, "type")) {
      case "paragraph":
        t.target = "p";
        break;
      case "table":
        t.target = "table";
        break;
      case "character":
        t.target = "span";
        break;
    }
    for (const r of C.elements(e))
      switch (r.localName) {
        case "basedOn":
          t.basedOn = C.attr(r, "val");
          break;
        case "name":
          t.name = C.attr(r, "val");
          break;
        case "link":
          t.linked = C.attr(r, "val");
          break;
        case "next":
          t.next = C.attr(r, "val");
          break;
        case "aliases":
          t.aliases = C.attr(r, "val").split(",");
          break;
        case "pPr":
          t.styles.push({
            target: "p",
            values: this.parseDefaultProperties(r, {})
          }), t.paragraphProps = he(r, C);
          break;
        case "rPr":
          t.styles.push({
            target: "span",
            values: this.parseDefaultProperties(r, {})
          }), t.runProps = Vt(r, C);
          break;
        case "tblPr":
        case "tcPr":
          t.styles.push({
            target: "td",
            values: this.parseDefaultProperties(r, {})
          });
          break;
        case "tblStylePr":
          for (let a of this.parseTableStyle(r))
            t.styles.push(a);
          break;
        case "rsid":
        case "qFormat":
        case "hidden":
        case "semiHidden":
        case "unhideWhenUsed":
        case "autoRedefine":
        case "uiPriority":
          break;
        default:
          this.options.debug && console.warn(`DOCX: Unknown style element: ${r.localName}`);
      }
    return t;
  }
  parseTableStyle(e) {
    var t = [], r = C.attr(e, "type"), a = "", n = "";
    switch (r) {
      case "firstRow":
        n = ".first-row", a = "tr.first-row td";
        break;
      case "lastRow":
        n = ".last-row", a = "tr.last-row td";
        break;
      case "firstCol":
        n = ".first-col", a = "td.first-col";
        break;
      case "lastCol":
        n = ".last-col", a = "td.last-col";
        break;
      case "band1Vert":
        n = ":not(.no-vband)", a = "td.odd-col";
        break;
      case "band2Vert":
        n = ":not(.no-vband)", a = "td.even-col";
        break;
      case "band1Horz":
        n = ":not(.no-hband)", a = "tr.odd-row";
        break;
      case "band2Horz":
        n = ":not(.no-hband)", a = "tr.even-row";
        break;
      default:
        return [];
    }
    for (const o of C.elements(e))
      switch (o.localName) {
        case "pPr":
          t.push({
            target: `${a} p`,
            mod: n,
            values: this.parseDefaultProperties(o, {})
          });
          break;
        case "rPr":
          t.push({
            target: `${a} span`,
            mod: n,
            values: this.parseDefaultProperties(o, {})
          });
          break;
        case "tblPr":
        case "tcPr":
          t.push({
            target: a,
            mod: n,
            values: this.parseDefaultProperties(o, {})
          });
          break;
      }
    return t;
  }
  parseNumberingFile(e) {
    const t = [], r = [], a = [];
    for (const n of C.elements(e))
      switch (n.localName) {
        case "abstractNum":
          t.push(...this.parseAbstractNumbering(n, a));
          break;
        case "numPicBullet":
          a.push(this.parseNumberingPicBullet(n));
          break;
        case "num":
          r.push({
            numId: C.attr(n, "numId"),
            abstractNumId: C.elementAttr(n, "abstractNumId", "val")
          });
          break;
      }
    return r.flatMap((n) => t.filter((o) => n.abstractNumId == o.id).map((o) => ({ ...o, id: n.numId })));
  }
  parseNumberingPicBullet(e) {
    var t = C.element(e, "pict"), r = t && C.element(t, "shape"), a = r && C.element(r, "imagedata");
    return a ? {
      id: C.intAttr(e, "numPicBulletId"),
      src: C.attr(a, "id"),
      style: C.attr(r, "style")
    } : null;
  }
  parseAbstractNumbering(e, t) {
    var r = [], a = C.attr(e, "abstractNumId");
    for (const n of C.elements(e))
      n.localName === "lvl" && r.push(this.parseNumberingLevel(a, n, t));
    return r;
  }
  parseNumberingLevel(e, t, r) {
    var a = {
      id: e,
      level: C.intAttr(t, "ilvl"),
      start: 1,
      pStyleName: void 0,
      pStyle: {},
      rStyle: {},
      suff: "tab"
    };
    for (const o of C.elements(t))
      switch (o.localName) {
        case "start":
          a.start = C.intAttr(o, "val");
          break;
        case "pPr":
          this.parseDefaultProperties(o, a.pStyle);
          break;
        case "rPr":
          this.parseDefaultProperties(o, a.rStyle);
          break;
        case "lvlPicBulletId":
          var n = C.intAttr(o, "val");
          a.bullet = r.find((i) => i?.id == n);
          break;
        case "lvlText":
          a.levelText = C.attr(o, "val");
          break;
        case "pStyle":
          a.pStyleName = C.attr(o, "val");
          break;
        case "numFmt":
          a.format = C.attr(o, "val");
          break;
        case "suff":
          a.suff = C.attr(o, "val");
          break;
      }
    return a;
  }
  parseSdt(e, t) {
    const r = C.element(e, "sdtContent");
    return r ? t(r) : [];
  }
  parseChange(e, t, r) {
    return {
      type: e,
      children: r(t)?.children ?? [],
      id: C.attr(t, "id"),
      author: C.attr(t, "author"),
      date: C.attr(t, "date")
    };
  }
  parseAltChunk(e) {
    return { type: B.AltChunk, children: [], id: C.attr(e, "id") };
  }
  parseParagraph(e) {
    var t = { type: B.Paragraph, children: [] };
    for (let r of C.elements(e))
      switch (r.localName) {
        case "pPr":
          this.parseParagraphProperties(r, t);
          break;
        case "r":
          t.children.push(this.parseRun(r, t));
          break;
        case "hyperlink":
          t.children.push(this.parseHyperlink(r, t));
          break;
        case "smartTag":
          t.children.push(this.parseSmartTag(r, t));
          break;
        case "bookmarkStart":
          t.children.push(Ar(r, C));
          break;
        case "bookmarkEnd":
          t.children.push(Er(r, C));
          break;
        case "commentRangeStart":
          t.children.push(new Tr(C.attr(r, "id")));
          break;
        case "commentRangeEnd":
          t.children.push(new Fr(C.attr(r, "id")));
          break;
        case "oMath":
        case "oMathPara":
          t.children.push(this.parseMathElement(r));
          break;
        case "sdt":
          t.children.push(...this.parseSdt(r, (a) => this.parseParagraph(a).children));
          break;
        case "ins":
          t.children.push(this.parseChange(B.Inserted, r, (a) => this.parseParagraph(a)));
          break;
        case "del":
          t.children.push(this.parseChange(B.Deleted, r, (a) => this.parseParagraph(a)));
          break;
      }
    return t;
  }
  parseParagraphProperties(e, t) {
    this.parseDefaultProperties(e, t.cssStyle = {}, null, (r) => {
      if (ue(r, t, C))
        return !0;
      switch (r.localName) {
        case "pStyle":
          t.styleName = C.attr(r, "val");
          break;
        case "cnfStyle":
          t.className = ot.classNameOfCnfStyle(r);
          break;
        case "framePr":
          this.parseFrame(r, t);
          break;
        case "rPr":
          break;
        default:
          return !1;
      }
      return !0;
    });
  }
  parseFrame(e, t) {
    var r = C.attr(e, "dropCap");
    r == "drop" && (t.cssStyle.float = "left");
  }
  parseHyperlink(e, t) {
    var r = { type: B.Hyperlink, parent: t, children: [] };
    r.anchor = C.attr(e, "anchor"), r.id = C.attr(e, "id");
    for (const a of C.elements(e))
      a.localName === "r" && r.children.push(this.parseRun(a, r));
    return r;
  }
  parseSmartTag(e, t) {
    var r = { type: B.SmartTag, parent: t, children: [] }, a = C.attr(e, "uri"), n = C.attr(e, "element");
    a && (r.uri = a), n && (r.element = n);
    for (const o of C.elements(e))
      switch (o.localName) {
        case "r":
          r.children.push(this.parseRun(o, r));
          break;
        case "smartTag":
          r.children.push(this.parseSmartTag(o, r));
          break;
      }
    return r;
  }
  parseRun(e, t) {
    var r = { type: B.Run, parent: t, children: [] };
    for (let a of C.elements(e))
      switch (a = this.checkAlternateContent(a), a.localName) {
        case "t":
          r.children.push({
            type: B.Text,
            text: a.textContent
          });
          break;
        case "delText":
          r.children.push({
            type: B.DeletedText,
            text: a.textContent
          });
          break;
        case "commentReference":
          r.children.push(new Rr(C.attr(a, "id")));
          break;
        case "fldSimple":
          r.children.push({
            type: B.SimpleField,
            instruction: C.attr(a, "instr"),
            lock: C.boolAttr(a, "lock", !1),
            dirty: C.boolAttr(a, "dirty", !1)
          });
          break;
        case "instrText":
          r.fieldRun = !0, r.children.push({
            type: B.Instruction,
            text: a.textContent
          });
          break;
        case "fldChar":
          r.fieldRun = !0, r.children.push({
            type: B.ComplexField,
            charType: C.attr(a, "fldCharType"),
            lock: C.boolAttr(a, "lock", !1),
            dirty: C.boolAttr(a, "dirty", !1)
          });
          break;
        case "noBreakHyphen":
          r.children.push({ type: B.NoBreakHyphen });
          break;
        case "br":
          r.children.push({
            type: B.Break,
            break: C.attr(a, "type") || "textWrapping"
          });
          break;
        case "lastRenderedPageBreak":
          r.children.push({
            type: B.Break,
            break: "lastRenderedPageBreak"
          });
          break;
        case "sym":
          r.children.push({
            type: B.Symbol,
            font: Ht(C.attr(a, "font")),
            char: C.hexAttr(a, "char")
          });
          break;
        case "tab":
          r.children.push({ type: B.Tab });
          break;
        case "footnoteReference":
          r.children.push({
            type: B.FootnoteReference,
            id: C.attr(a, "id")
          });
          break;
        case "endnoteReference":
          r.children.push({
            type: B.EndnoteReference,
            id: C.attr(a, "id")
          });
          break;
        case "drawing":
          let n = this.parseDrawing(a);
          n && r.children.push(n);
          break;
        case "pict":
          r.children.push(this.parseVmlPicture(a));
          break;
        case "rPr":
          this.parseRunProperties(a, r);
          break;
      }
    return r;
  }
  parseMathElement(e) {
    const t = `${e.localName}Pr`, r = { type: re[e.localName], children: [] };
    for (const n of C.elements(e))
      if (re[n.localName])
        r.children.push(this.parseMathElement(n));
      else if (n.localName == "r") {
        var a = this.parseRun(n);
        a.type = B.MmlRun, r.children.push(a);
      } else n.localName == t && (r.props = this.parseMathProperies(n));
    return r;
  }
  parseMathProperies(e) {
    const t = {};
    for (const r of C.elements(e))
      switch (r.localName) {
        case "chr":
          t.char = C.attr(r, "val");
          break;
        case "vertJc":
          t.verticalJustification = C.attr(r, "val");
          break;
        case "pos":
          t.position = C.attr(r, "val");
          break;
        case "degHide":
          t.hideDegree = C.boolAttr(r, "val");
          break;
        case "begChr":
          t.beginChar = C.attr(r, "val");
          break;
        case "endChr":
          t.endChar = C.attr(r, "val");
          break;
      }
    return t;
  }
  parseRunProperties(e, t) {
    this.parseDefaultProperties(e, t.cssStyle = {}, null, (r) => {
      switch (r.localName) {
        case "rStyle":
          t.styleName = C.attr(r, "val");
          break;
        case "vertAlign":
          t.verticalAlign = ot.valueOfVertAlign(r, !0);
          break;
        default:
          return !1;
      }
      return !0;
    });
  }
  parseVmlPicture(e) {
    const t = { type: B.VmlPicture, children: [] };
    for (const r of C.elements(e)) {
      const a = ge(r, this);
      a && t.children.push(a);
    }
    return t;
  }
  checkAlternateContent(e) {
    if (e.localName != "AlternateContent")
      return e;
    var t = C.element(e, "Choice");
    if (t) {
      var r = C.attr(t, "Requires"), a = e.lookupNamespaceURI(r);
      if (Ir.includes(a))
        return t.firstElementChild;
    }
    return C.element(e, "Fallback")?.firstElementChild;
  }
  parseDrawing(e) {
    for (var t of C.elements(e))
      switch (t.localName) {
        case "inline":
        case "anchor":
          return this.parseDrawingWrapper(t);
      }
  }
  parseDrawingWrapper(e) {
    var t = { type: B.Drawing, children: [], cssStyle: {} }, r = e.localName == "anchor";
    let a = null, n = C.boolAttr(e, "simplePos");
    C.boolAttr(e, "behindDoc");
    let o = { relative: "page", align: "left", offset: "0" }, i = { relative: "page", align: "top", offset: "0" };
    for (var h of C.elements(e))
      switch (h.localName) {
        case "simplePos":
          n && (o.offset = C.lengthAttr(h, "x", ft.Emu), i.offset = C.lengthAttr(h, "y", ft.Emu));
          break;
        case "extent":
          t.cssStyle.width = C.lengthAttr(h, "cx", ft.Emu), t.cssStyle.height = C.lengthAttr(h, "cy", ft.Emu);
          break;
        case "positionH":
        case "positionV":
          if (!n) {
            let y = h.localName == "positionH" ? o : i;
            var _ = C.element(h, "align"), S = C.element(h, "posOffset");
            y.relative = C.attr(h, "relativeFrom") ?? y.relative, _ && (y.align = _.textContent), S && (y.offset = ie(S.textContent, ft.Emu));
          }
          break;
        case "wrapTopAndBottom":
          a = "wrapTopAndBottom";
          break;
        case "wrapNone":
          a = "wrapNone";
          break;
        case "graphic":
          var v = this.parseGraphic(h);
          v && t.children.push(v);
          break;
      }
    return a == "wrapTopAndBottom" ? (t.cssStyle.display = "block", o.align && (t.cssStyle["text-align"] = o.align, t.cssStyle.width = "100%")) : a == "wrapNone" ? (t.cssStyle.display = "block", t.cssStyle.position = "relative", t.cssStyle.width = "0px", t.cssStyle.height = "0px", o.offset && (t.cssStyle.left = o.offset), i.offset && (t.cssStyle.top = i.offset)) : r && (o.align == "left" || o.align == "right") && (t.cssStyle.float = o.align), t;
  }
  parseGraphic(e) {
    var t = C.element(e, "graphicData");
    for (let r of C.elements(t))
      if (r.localName === "pic")
        return this.parsePicture(r);
    return null;
  }
  parsePicture(e) {
    var t = { type: B.Image, src: "", cssStyle: {} }, r = C.element(e, "blipFill"), a = C.element(r, "blip"), n = C.element(r, "srcRect");
    t.src = C.attr(a, "embed"), n && (t.srcRect = [
      C.intAttr(n, "l", 0) / 1e5,
      C.intAttr(n, "t", 0) / 1e5,
      C.intAttr(n, "r", 0) / 1e5,
      C.intAttr(n, "b", 0) / 1e5
    ]);
    var o = C.element(e, "spPr"), i = C.element(o, "xfrm");
    if (t.cssStyle.position = "relative", i) {
      t.rotation = C.intAttr(i, "rot", 0) / 6e4;
      for (var h of C.elements(i))
        switch (h.localName) {
          case "ext":
            t.cssStyle.width = C.lengthAttr(h, "cx", ft.Emu), t.cssStyle.height = C.lengthAttr(h, "cy", ft.Emu);
            break;
          case "off":
            t.cssStyle.left = C.lengthAttr(h, "x", ft.Emu), t.cssStyle.top = C.lengthAttr(h, "y", ft.Emu);
            break;
        }
    }
    return t;
  }
  parseTable(e) {
    var t = { type: B.Table, children: [] };
    for (const r of C.elements(e))
      switch (r.localName) {
        case "tr":
          t.children.push(this.parseTableRow(r));
          break;
        case "tblGrid":
          t.columns = this.parseTableColumns(r);
          break;
        case "tblPr":
          this.parseTableProperties(r, t);
          break;
      }
    return t;
  }
  parseTableColumns(e) {
    var t = [];
    for (const r of C.elements(e))
      r.localName === "gridCol" && t.push({ width: C.lengthAttr(r, "w") });
    return t;
  }
  parseTableProperties(e, t) {
    switch (t.cssStyle = {}, t.cellStyle = {}, this.parseDefaultProperties(e, t.cssStyle, t.cellStyle, (r) => {
      switch (r.localName) {
        case "tblStyle":
          t.styleName = C.attr(r, "val");
          break;
        case "tblLook":
          t.className = ot.classNameOftblLook(r);
          break;
        case "tblpPr":
          this.parseTablePosition(r, t);
          break;
        case "tblStyleColBandSize":
          t.colBandSize = C.intAttr(r, "val");
          break;
        case "tblStyleRowBandSize":
          t.rowBandSize = C.intAttr(r, "val");
          break;
        case "hidden":
          t.cssStyle.display = "none";
          break;
        default:
          return !1;
      }
      return !0;
    }), t.cssStyle["text-align"]) {
      case "center":
        delete t.cssStyle["text-align"], t.cssStyle["margin-left"] = "auto", t.cssStyle["margin-right"] = "auto";
        break;
      case "right":
        delete t.cssStyle["text-align"], t.cssStyle["margin-left"] = "auto";
        break;
    }
  }
  parseTablePosition(e, t) {
    var r = C.lengthAttr(e, "topFromText"), a = C.lengthAttr(e, "bottomFromText"), n = C.lengthAttr(e, "rightFromText"), o = C.lengthAttr(e, "leftFromText");
    t.cssStyle.float = "left", t.cssStyle["margin-bottom"] = ot.addSize(t.cssStyle["margin-bottom"], a), t.cssStyle["margin-left"] = ot.addSize(t.cssStyle["margin-left"], o), t.cssStyle["margin-right"] = ot.addSize(t.cssStyle["margin-right"], n), t.cssStyle["margin-top"] = ot.addSize(t.cssStyle["margin-top"], r);
  }
  parseTableRow(e) {
    var t = { type: B.Row, children: [] };
    for (const r of C.elements(e))
      switch (r.localName) {
        case "tc":
          t.children.push(this.parseTableCell(r));
          break;
        case "trPr":
        case "tblPrEx":
          this.parseTableRowProperties(r, t);
          break;
      }
    return t;
  }
  parseTableRowProperties(e, t) {
    t.cssStyle = this.parseDefaultProperties(e, {}, null, (r) => {
      switch (r.localName) {
        case "cnfStyle":
          t.className = ot.classNameOfCnfStyle(r);
          break;
        case "tblHeader":
          t.isHeader = C.boolAttr(r, "val");
          break;
        case "gridBefore":
          t.gridBefore = C.intAttr(r, "val");
          break;
        case "gridAfter":
          t.gridAfter = C.intAttr(r, "val");
          break;
        default:
          return !1;
      }
      return !0;
    });
  }
  parseTableCell(e) {
    var t = { type: B.Cell, children: [] };
    for (const r of C.elements(e))
      switch (r.localName) {
        case "tbl":
          t.children.push(this.parseTable(r));
          break;
        case "p":
          t.children.push(this.parseParagraph(r));
          break;
        case "tcPr":
          this.parseTableCellProperties(r, t);
          break;
      }
    return t;
  }
  parseTableCellProperties(e, t) {
    t.cssStyle = this.parseDefaultProperties(e, {}, null, (r) => {
      switch (r.localName) {
        case "gridSpan":
          t.span = C.intAttr(r, "val", null);
          break;
        case "vMerge":
          t.verticalMerge = C.attr(r, "val") ?? "continue";
          break;
        case "cnfStyle":
          t.className = ot.classNameOfCnfStyle(r);
          break;
        default:
          return !1;
      }
      return !0;
    }), this.parseTableCellVerticalText(e, t);
  }
  parseTableCellVerticalText(e, t) {
    const r = {
      btLr: {
        writingMode: "vertical-rl",
        transform: "rotate(180deg)"
      },
      lrTb: {
        writingMode: "vertical-lr",
        transform: "none"
      },
      tbRl: {
        writingMode: "vertical-rl",
        transform: "none"
      }
    };
    for (const a of C.elements(e))
      if (a.localName === "textDirection") {
        const n = C.attr(a, "val"), o = r[n] || { writingMode: "horizontal-tb" };
        t.cssStyle["writing-mode"] = o.writingMode, t.cssStyle.transform = o.transform;
      }
  }
  parseDefaultProperties(e, t = null, r = null, a = null) {
    t = t || {};
    for (const n of C.elements(e))
      if (!a?.(n))
        switch (n.localName) {
          case "jc":
            t["text-align"] = ot.valueOfJc(n);
            break;
          case "textAlignment":
            t["vertical-align"] = ot.valueOfTextAlignment(n);
            break;
          case "color":
            t.color = Ct.colorAttr(n, "val", null, It.color);
            break;
          case "sz":
            t["font-size"] = t["min-height"] = C.lengthAttr(n, "val", ft.FontSize);
            break;
          case "shd":
            t["background-color"] = Ct.colorAttr(n, "fill", null, It.shd);
            break;
          case "highlight":
            t["background-color"] = Ct.colorAttr(n, "val", null, It.highlight);
            break;
          case "vertAlign":
            break;
          case "position":
            t.verticalAlign = C.lengthAttr(n, "val", ft.FontSize);
            break;
          case "tcW":
            if (this.options.ignoreWidth)
              break;
          case "tblW":
            t.width = ot.valueOfSize(n, "w");
            break;
          case "trHeight":
            this.parseTrHeight(n, t);
            break;
          case "strike":
            t["text-decoration"] = C.boolAttr(n, "val", !0) ? "line-through" : "none";
            break;
          case "b":
            t["font-weight"] = C.boolAttr(n, "val", !0) ? "bold" : "normal";
            break;
          case "i":
            t["font-style"] = C.boolAttr(n, "val", !0) ? "italic" : "normal";
            break;
          case "caps":
            t["text-transform"] = C.boolAttr(n, "val", !0) ? "uppercase" : "none";
            break;
          case "smallCaps":
            t["font-variant"] = C.boolAttr(n, "val", !0) ? "small-caps" : "none";
            break;
          case "u":
            this.parseUnderline(n, t);
            break;
          case "ind":
          case "tblInd":
            this.parseIndentation(n, t);
            break;
          case "rFonts":
            this.parseFont(n, t);
            break;
          case "tblBorders":
            this.parseBorderProperties(n, r || t);
            break;
          case "tblCellSpacing":
            t["border-spacing"] = ot.valueOfMargin(n), t["border-collapse"] = "separate";
            break;
          case "pBdr":
            this.parseBorderProperties(n, t);
            break;
          case "bdr":
            t.border = ot.valueOfBorder(n);
            break;
          case "tcBorders":
            this.parseBorderProperties(n, t);
            break;
          case "vanish":
            C.boolAttr(n, "val", !0) && (t.display = "none");
            break;
          case "kern":
            break;
          case "noWrap":
            break;
          case "tblCellMar":
          case "tcMar":
            this.parseMarginProperties(n, r || t);
            break;
          case "tblLayout":
            t["table-layout"] = ot.valueOfTblLayout(n);
            break;
          case "vAlign":
            t["vertical-align"] = ot.valueOfTextAlignment(n);
            break;
          case "spacing":
            e.localName == "pPr" && this.parseSpacing(n, t);
            break;
          case "wordWrap":
            C.boolAttr(n, "val") && (t["overflow-wrap"] = "break-word");
            break;
          case "suppressAutoHyphens":
            t.hyphens = C.boolAttr(n, "val", !0) ? "none" : "auto";
            break;
          case "lang":
            t.$lang = C.attr(n, "val");
            break;
          case "rtl":
          case "bidi":
            C.boolAttr(n, "val", !0) && (t.direction = "rtl");
            break;
          case "bCs":
          case "iCs":
          case "szCs":
          case "tabs":
          case "outlineLvl":
          case "contextualSpacing":
          case "tblStyleColBandSize":
          case "tblStyleRowBandSize":
          case "webHidden":
          case "pageBreakBefore":
          case "suppressLineNumbers":
          case "keepLines":
          case "keepNext":
          case "widowControl":
          case "noProof":
            break;
          default:
            this.options.debug && console.warn(`DOCX: Unknown document element: ${e.localName}.${n.localName}`);
            break;
        }
    return t;
  }
  parseUnderline(e, t) {
    var r = C.attr(e, "val");
    if (r != null) {
      switch (r) {
        case "dash":
        case "dashDotDotHeavy":
        case "dashDotHeavy":
        case "dashedHeavy":
        case "dashLong":
        case "dashLongHeavy":
        case "dotDash":
        case "dotDotDash":
          t["text-decoration"] = "underline dashed";
          break;
        case "dotted":
        case "dottedHeavy":
          t["text-decoration"] = "underline dotted";
          break;
        case "double":
          t["text-decoration"] = "underline double";
          break;
        case "single":
        case "thick":
          t["text-decoration"] = "underline";
          break;
        case "wave":
        case "wavyDouble":
        case "wavyHeavy":
          t["text-decoration"] = "underline wavy";
          break;
        case "words":
          t["text-decoration"] = "underline";
          break;
        case "none":
          t["text-decoration"] = "none";
          break;
      }
      var a = Ct.colorAttr(e, "color");
      a && (t["text-decoration-color"] = a);
    }
  }
  parseFont(e, t) {
    var r = C.attr(e, "ascii"), a = ot.themeValue(e, "asciiTheme"), n = C.attr(e, "eastAsia"), o = [r, a, n].filter((i) => i).map((i) => Ht(i));
    o.length > 0 && (t["font-family"] = [...new Set(o)].join(", "));
  }
  parseIndentation(e, t) {
    var r = C.lengthAttr(e, "firstLine"), a = C.lengthAttr(e, "hanging"), n = C.lengthAttr(e, "left"), o = C.lengthAttr(e, "start"), i = C.lengthAttr(e, "right"), h = C.lengthAttr(e, "end");
    r && (t["text-indent"] = r), a && (t["text-indent"] = `-${a}`), (n || o) && (t["margin-inline-start"] = n || o), (i || h) && (t["margin-inline-end"] = i || h);
  }
  parseSpacing(e, t) {
    var r = C.lengthAttr(e, "before"), a = C.lengthAttr(e, "after"), n = C.intAttr(e, "line", null), o = C.attr(e, "lineRule");
    if (r && (t["margin-top"] = r), a && (t["margin-bottom"] = a), n !== null)
      switch (o) {
        case "auto":
          t["line-height"] = `${(n / 240).toFixed(2)}`;
          break;
        case "atLeast":
          t["line-height"] = `calc(100% + ${n / 20}pt)`;
          break;
        default:
          t["line-height"] = t["min-height"] = `${n / 20}pt`;
          break;
      }
  }
  parseMarginProperties(e, t) {
    for (const r of C.elements(e))
      switch (r.localName) {
        case "left":
          t["padding-left"] = ot.valueOfMargin(r);
          break;
        case "right":
          t["padding-right"] = ot.valueOfMargin(r);
          break;
        case "top":
          t["padding-top"] = ot.valueOfMargin(r);
          break;
        case "bottom":
          t["padding-bottom"] = ot.valueOfMargin(r);
          break;
      }
  }
  parseTrHeight(e, t) {
    C.attr(e, "hRule"), t.height = C.lengthAttr(e, "val");
  }
  parseBorderProperties(e, t) {
    for (const r of C.elements(e))
      switch (r.localName) {
        case "start":
        case "left":
          t["border-left"] = ot.valueOfBorder(r);
          break;
        case "end":
        case "right":
          t["border-right"] = ot.valueOfBorder(r);
          break;
        case "top":
          t["border-top"] = ot.valueOfBorder(r);
          break;
        case "bottom":
          t["border-bottom"] = ot.valueOfBorder(r);
          break;
      }
  }
}
const Lr = ["black", "blue", "cyan", "darkBlue", "darkCyan", "darkGray", "darkGreen", "darkMagenta", "darkRed", "darkYellow", "green", "lightGray", "magenta", "none", "red", "white", "yellow"];
class Ct {
  static colorAttr(e, t, r = null, a = "black") {
    var n = C.attr(e, t);
    if (n)
      return n == "auto" ? a : Lr.includes(n) ? n : `#${n}`;
    var o = C.attr(e, "themeColor");
    return o ? `var(--docx-${o}-color)` : r;
  }
}
class ot {
  static themeValue(e, t) {
    var r = C.attr(e, t);
    return r ? `var(--docx-${r}-font)` : null;
  }
  static valueOfSize(e, t) {
    var r = ft.Dxa;
    switch (C.attr(e, "type")) {
      case "dxa":
        break;
      case "pct":
        r = ft.Percent;
        break;
      case "auto":
        return "auto";
    }
    return C.lengthAttr(e, t, r);
  }
  static valueOfMargin(e) {
    return C.lengthAttr(e, "w");
  }
  static valueOfBorder(e) {
    var t = ot.parseBorderType(C.attr(e, "val"));
    if (t == "none")
      return "none";
    var r = Ct.colorAttr(e, "color"), a = C.lengthAttr(e, "sz", ft.Border);
    return `${a} ${t} ${r == "auto" ? It.borderColor : r}`;
  }
  static parseBorderType(e) {
    switch (e) {
      case "single":
        return "solid";
      case "dashDotStroked":
        return "solid";
      case "dashed":
        return "dashed";
      case "dashSmallGap":
        return "dashed";
      case "dotDash":
        return "dotted";
      case "dotDotDash":
        return "dotted";
      case "dotted":
        return "dotted";
      case "double":
        return "double";
      case "doubleWave":
        return "double";
      case "inset":
        return "inset";
      case "nil":
        return "none";
      case "none":
        return "none";
      case "outset":
        return "outset";
      case "thick":
        return "solid";
      case "thickThinLargeGap":
        return "solid";
      case "thickThinMediumGap":
        return "solid";
      case "thickThinSmallGap":
        return "solid";
      case "thinThickLargeGap":
        return "solid";
      case "thinThickMediumGap":
        return "solid";
      case "thinThickSmallGap":
        return "solid";
      case "thinThickThinLargeGap":
        return "solid";
      case "thinThickThinMediumGap":
        return "solid";
      case "thinThickThinSmallGap":
        return "solid";
      case "threeDEmboss":
        return "solid";
      case "threeDEngrave":
        return "solid";
      case "triple":
        return "double";
      case "wave":
        return "solid";
    }
    return "solid";
  }
  static valueOfTblLayout(e) {
    var t = C.attr(e, "val");
    return t == "fixed" ? "fixed" : "auto";
  }
  static classNameOfCnfStyle(e) {
    const t = C.attr(e, "val"), r = [
      "first-row",
      "last-row",
      "first-col",
      "last-col",
      "odd-col",
      "even-col",
      "odd-row",
      "even-row",
      "ne-cell",
      "nw-cell",
      "se-cell",
      "sw-cell"
    ];
    if (t)
      return r.filter((n, o) => t[o] == "1").join(" ");
    const a = [
      "firstRow",
      "lastRow",
      "firstColumn",
      "lastColumn",
      "oddVBand",
      "evenVBand",
      "oddHBand",
      "evenHBand",
      "firstRowLastColumn",
      "firstRowFirstColumn",
      "lastRowLastColumn",
      "lastRowFirstColumn"
    ];
    return r.filter((n, o) => C.boolAttr(e, a[o])).join(" ");
  }
  static valueOfJc(e) {
    var t = C.attr(e, "val");
    switch (t) {
      case "start":
      case "left":
        return "left";
      case "center":
        return "center";
      case "end":
      case "right":
        return "right";
      case "both":
        return "justify";
    }
    return t;
  }
  static valueOfVertAlign(e, t = !1) {
    var r = C.attr(e, "val");
    switch (r) {
      case "subscript":
        return "sub";
      case "superscript":
        return t ? "sup" : "super";
    }
    return t ? null : r;
  }
  static valueOfTextAlignment(e) {
    var t = C.attr(e, "val");
    switch (t) {
      case "auto":
      case "baseline":
        return "baseline";
      case "top":
        return "top";
      case "center":
        return "middle";
      case "bottom":
        return "bottom";
    }
    return t;
  }
  static addSize(e, t) {
    return e == null ? t : t == null ? e : `calc(${e} + ${t})`;
  }
  static classNameOftblLook(e) {
    const t = C.hexAttr(e, "val", 0);
    let r = "";
    return (C.boolAttr(e, "firstRow") || t & 32) && (r += " first-row"), (C.boolAttr(e, "lastRow") || t & 64) && (r += " last-row"), (C.boolAttr(e, "firstColumn") || t & 128) && (r += " first-col"), (C.boolAttr(e, "lastColumn") || t & 256) && (r += " last-col"), (C.boolAttr(e, "noHBand") || t & 512) && (r += " no-hband"), (C.boolAttr(e, "noVBand") || t & 1024) && (r += " no-vband"), r.trim();
  }
}
const ae = { pos: 0, leader: "none", style: "left" }, Dr = 50;
function jr(c = document.body) {
  const e = document.createElement("div");
  e.style.width = "100pt", c.appendChild(e);
  const t = 100 / e.offsetWidth;
  return c.removeChild(e), t;
}
function Ur(c, e, t, r = 72 / 96) {
  const a = c.closest("p"), n = c.getBoundingClientRect(), o = a.getBoundingClientRect(), i = getComputedStyle(a), h = e?.length > 0 ? e.map((b) => ({
    pos: ne(b.position),
    leader: b.leader,
    style: b.style
  })).sort((b, x) => b.pos - x.pos) : [ae], _ = h[h.length - 1], S = o.width * r, v = ne(t);
  let y = _.pos + v;
  if (y < S)
    for (; y < S && h.length < Dr; y += v)
      h.push({ ...ae, pos: y });
  const d = parseFloat(i.marginLeft), k = o.left + d, u = (n.left - k) * r, m = h.find((b) => b.style != "clear" && b.pos > u);
  if (m == null)
    return;
  let f = 1;
  if (m.style == "right" || m.style == "center") {
    const b = Array.from(a.querySelectorAll(`.${c.className}`)), x = b.indexOf(c) + 1, E = document.createRange();
    E.setStart(c, 1), x < b.length ? E.setEndBefore(b[x]) : E.setEndAfter(a);
    const A = m.style == "center" ? 0.5 : 1, L = E.getBoundingClientRect(), F = L.left + A * L.width - (o.left - d);
    f = m.pos - F * r;
  } else
    f = m.pos - u;
  switch (c.innerHTML = "&nbsp;", c.style.textDecoration = "inherit", c.style.wordSpacing = `${f.toFixed(0)}pt`, m.leader) {
    case "dot":
    case "middleDot":
      c.style.textDecoration = "underline", c.style.textDecorationStyle = "dotted";
      break;
    case "hyphen":
    case "heavy":
    case "underscore":
      c.style.textDecoration = "underline";
      break;
  }
}
function ne(c) {
  return parseFloat(c);
}
var it;
(function(c) {
  c.html = "http://www.w3.org/1999/xhtml", c.svg = "http://www.w3.org/2000/svg", c.mathML = "http://www.w3.org/1998/Math/MathML";
})(it || (it = {}));
function Lt(c) {
  if (Wt(c))
    return document.createTextNode(c);
  if (c instanceof Node)
    return c;
  const { ns: e, tagName: t, className: r, style: a, children: n, ...o } = c;
  if (t === "#fragment")
    return document.createDocumentFragment();
  if (t === "#comment")
    return document.createComment(n[0]);
  const i = e ? document.createElementNS(e, t) : document.createElement(t);
  if (r && i.setAttribute("class", r), a && (Wt(a) ? i.setAttribute("style", a) : Object.assign(i.style, a)), o)
    for (const [h, _] of Object.entries(o))
      _ !== void 0 && (i[h] = _);
  return n && n.forEach((h) => i.appendChild(Lt(h))), i;
}
function $r(...c) {
  return c.filter(Boolean).join(" ");
}
class Hr {
  constructor() {
    this.className = "docx", this.styleMap = {}, this.currentPart = null, this.tableVerticalMerges = [], this.currentVerticalMerge = null, this.tableCellPositions = [], this.currentCellPosition = null, this.footnoteMap = {}, this.endnoteMap = {}, this.currentEndnoteIds = [], this.usedHederFooterParts = [], this.currentTabs = [], this.commentMap = {}, this.tasks = [], this.postRenderTasks = [], this.h = Lt;
  }
  async render(e, t) {
    this.document = e, this.options = t, this.className = t.className, this.rootSelector = t.inWrapper ? `.${this.className}-wrapper` : ":root", this.h = t.h ?? Lt, this.styleMap = null, this.tasks = [], this.options.renderComments && globalThis.Highlight && (this.commentHighlight = new Highlight());
    const r = [...this.renderDefaultStyle()];
    e.themePart && r.push(...this.renderTheme(e.themePart)), e.stylesPart != null && (this.styleMap = this.processStyles(e.stylesPart.styles), r.push(...this.renderStyles(e.stylesPart.styles))), e.numberingPart && (this.prodessNumberings(e.numberingPart.domNumberings), r.push(...await this.renderNumbering(e.numberingPart.domNumberings))), e.footnotesPart && (this.footnoteMap = wt(e.footnotesPart.notes, (n) => n.id)), e.endnotesPart && (this.endnoteMap = wt(e.endnotesPart.notes, (n) => n.id)), e.settingsPart && (this.defaultTabSize = e.settingsPart.settings?.defaultTabStop), !t.ignoreFonts && e.fontTablePart && r.push(...await this.renderFontTable(e.fontTablePart));
    var a = this.renderSections(e.documentPart.body);
    return this.options.inWrapper ? r.push(this.renderWrapper(a)) : r.push(...a), this.commentHighlight && t.renderComments && CSS.highlights.set(`${this.className}-comments`, this.commentHighlight), this.postRenderTasks.forEach((n) => n()), await Promise.allSettled(this.tasks), this.refreshTabStops(), r;
  }
  renderTheme(e) {
    const t = {}, r = e.theme?.fontScheme;
    r && (r.majorFont && (t["--docx-majorHAnsi-font"] = r.majorFont.latinTypeface), r.minorFont && (t["--docx-minorHAnsi-font"] = r.minorFont.latinTypeface));
    const a = e.theme?.colorScheme;
    if (a)
      for (let [o, i] of Object.entries(a.colors))
        t[`--docx-${o}-color`] = `#${i}`;
    const n = this.styleToString(`.${this.className}`, t);
    return [
      this.h({ tagName: "#comment", children: ["docxjs document theme values"] }),
      this.h({ tagName: "style", children: [n] })
    ];
  }
  async renderFontTable(e) {
    const t = [];
    for (let r of e.fonts)
      for (let a of r.embedFontRefs)
        try {
          const n = await this.document.loadFont(a.id, a.key), o = {
            "font-family": Ht(r.name),
            src: `url(${n})`
          };
          (a.type == "bold" || a.type == "boldItalic") && (o["font-weight"] = "bold"), (a.type == "italic" || a.type == "boldItalic") && (o["font-style"] = "italic"), t.push(this.h({ tagName: "#comment", children: [`docxjs ${r.name} font`] })), t.push(this.h({ tagName: "style", children: [this.styleToString("@font-face", o)] }));
        } catch {
          this.options.debug && console.warn(`Can't load font with id ${a.id} and key ${a.key}`);
        }
    return t;
  }
  processStyleName(e) {
    return e ? `${this.className}_${Pe(e)}` : this.className;
  }
  processStyles(e) {
    const t = wt(e.filter((a) => a.id != null), (a) => a.id);
    for (const a of e.filter((n) => n.basedOn)) {
      var r = t[a.basedOn];
      if (r) {
        a.paragraphProps = Ot(a.paragraphProps, r.paragraphProps), a.runProps = Ot(a.runProps, r.runProps);
        for (const n of r.styles) {
          const o = a.styles.find((i) => i.target == n.target);
          o ? this.copyStyleProperties(n.values, o.values) : a.styles.push({ ...n, values: { ...n.values } });
        }
      } else this.options.debug && console.warn(`Can't find base style ${a.basedOn}`);
    }
    for (let a of e)
      a.cssName = this.processStyleName(a.id);
    return t;
  }
  prodessNumberings(e) {
    for (let t of e.filter((r) => r.pStyleName)) {
      const r = this.findStyle(t.pStyleName);
      r?.paragraphProps?.numbering && (r.paragraphProps.numbering.level = t.level);
    }
  }
  processElement(e) {
    if (e.children)
      for (var t of e.children)
        t.parent = e, t.type == B.Table ? this.processTable(t) : this.processElement(t);
  }
  processTable(e) {
    for (var t of e.children)
      for (var r of t.children)
        r.cssStyle = this.copyStyleProperties(e.cellStyle, r.cssStyle, [
          "border-left",
          "border-right",
          "border-top",
          "border-bottom",
          "padding-left",
          "padding-right",
          "padding-top",
          "padding-bottom"
        ]), this.processElement(r);
  }
  copyStyleProperties(e, t, r = null) {
    if (!e)
      return t;
    t == null && (t = {}), r == null && (r = Object.getOwnPropertyNames(e));
    for (var a of r)
      e.hasOwnProperty(a) && !t.hasOwnProperty(a) && (t[a] = e[a]);
    return t;
  }
  createPageElement(e, t, r) {
    const a = { ...r };
    return t && (t.pageMargins && (a.paddingLeft = t.pageMargins.left, a.paddingRight = t.pageMargins.right, a.paddingTop = t.pageMargins.top, a.paddingBottom = t.pageMargins.bottom), t.pageSize && (this.options.ignoreWidth || (a.width = t.pageSize.width), this.options.ignoreHeight || (a.minHeight = t.pageSize.height))), this.h({ tagName: "section", className: e, style: a });
  }
  createSectionContent(e) {
    const t = {};
    return e.columns && e.columns.numberOfColumns && (t.columnCount = `${e.columns.numberOfColumns}`, t.columnGap = e.columns.space, e.columns.separator && (t.columnRule = "1px solid black")), this.h({ tagName: "article", style: t });
  }
  renderSections(e) {
    const t = [];
    this.processElement(e);
    const r = this.splitBySection(e.children, e.props), a = this.groupByPageBreaks(r);
    let n = null;
    for (let i = 0, h = a.length; i < h; i++) {
      this.currentFootnoteIds = [];
      let S = a[i][0].sectProps;
      const v = this.createPageElement(this.className, S, e.cssStyle);
      this.options.renderHeaders && this.renderHeaderFooter(S.headerRefs, S, t.length, n != S, v);
      for (const y of a[i]) {
        var o = this.createSectionContent(y.sectProps);
        this.renderElements(y.elements, o), v.appendChild(o), S = y.sectProps;
      }
      if (this.options.renderFootnotes) {
        const y = this.renderNotes(this.currentFootnoteIds, this.footnoteMap);
        y && v.appendChild(y);
      }
      if (this.options.renderEndnotes && i == h - 1) {
        const y = this.renderNotes(this.currentEndnoteIds, this.endnoteMap);
        y && v.appendChild(y);
      }
      this.options.renderFooters && this.renderHeaderFooter(S.footerRefs, S, t.length, n != S, v), t.push(v), n = S;
    }
    return t;
  }
  renderHeaderFooter(e, t, r, a, n) {
    if (e) {
      var o = (t.titlePage && a ? e.find((h) => h.type == "first") : null) ?? (r % 2 == 1 ? e.find((h) => h.type == "even") : null) ?? e.find((h) => h.type == "default"), i = o && this.document.findPartByRelId(o.id, this.document.documentPart);
      if (i) {
        this.currentPart = i, this.usedHederFooterParts.includes(i.path) || (this.processElement(i.rootElement), this.usedHederFooterParts.push(i.path));
        const [h] = this.renderElements([i.rootElement], n);
        t?.pageMargins && (i.rootElement.type === B.Header ? (h.style.marginTop = `calc(${t.pageMargins.header} - ${t.pageMargins.top})`, h.style.minHeight = `calc(${t.pageMargins.top} - ${t.pageMargins.header})`) : i.rootElement.type === B.Footer && (h.style.marginBottom = `calc(${t.pageMargins.footer} - ${t.pageMargins.bottom})`, h.style.minHeight = `calc(${t.pageMargins.bottom} - ${t.pageMargins.footer})`)), this.currentPart = null;
      }
    }
  }
  isPageBreakElement(e) {
    return e.type != B.Break ? !1 : e.break == "lastRenderedPageBreak" ? !this.options.ignoreLastRenderedPageBreak : e.break == "page";
  }
  isPageBreakSection(e, t) {
    return !e || !t ? !1 : e.pageSize?.orientation != t.pageSize?.orientation || e.pageSize?.width != t.pageSize?.width || e.pageSize?.height != t.pageSize?.height;
  }
  splitBySection(e, t) {
    var r = { sectProps: null, elements: [], pageBreak: !1 }, a = [r];
    for (let v of e)
      if (v.type == B.Paragraph && this.findStyle(v.styleName)?.paragraphProps?.pageBreakBefore && (r.sectProps = n, r.pageBreak = !0, r = { sectProps: null, elements: [], pageBreak: !1 }, a.push(r)), r.elements.push(v), v.type == B.Paragraph) {
        const y = v;
        var n = y.sectionProps, o = -1, i = -1;
        if (this.options.breakPages && y.children && (o = y.children.findIndex((d) => (i = d.children?.findIndex(this.isPageBreakElement.bind(this)) ?? -1, i != -1))), (n || o != -1) && (r.sectProps = n, r.pageBreak = o != -1, r = { sectProps: null, elements: [], pageBreak: !1 }, a.push(r)), o != -1) {
          let d = y.children[o], k = i < d.children.length - 1;
          if (o < y.children.length - 1 || k) {
            var h = v.children, _ = { ...v, children: h.slice(o) };
            if (v.children = h.slice(0, o), r.elements.push(_), k) {
              let u = d.children, m = { ...d, children: u.slice(0, i) };
              v.children.push(m), d.children = u.slice(i);
            }
          }
        }
      }
    let S = null;
    for (let v = a.length - 1; v >= 0; v--)
      a[v].sectProps == null ? a[v].sectProps = S ?? t : S = a[v].sectProps;
    return a;
  }
  groupByPageBreaks(e) {
    let t = [], r;
    const a = [t];
    for (let n of e)
      t.push(n), (this.options.ignoreLastRenderedPageBreak || n.pageBreak || this.isPageBreakSection(r, n.sectProps)) && a.push(t = []), r = n.sectProps;
    return a.filter((n) => n.length > 0);
  }
  renderWrapper(e) {
    return this.h({ tagName: "div", className: `${this.className}-wrapper`, children: e });
  }
  renderDefaultStyle() {
    var e = this.className, t = `
.${e}-wrapper { background: gray; padding: 30px; padding-bottom: 0px; display: flex; flex-flow: column; align-items: center; } 
.${e}-wrapper>section.${e} { background: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); margin-bottom: 30px; }`;
    this.options.hideWrapperOnPrint && (t = `@media not print { ${t} }`);
    var r = `${t}
.${e} { color: black; hyphens: auto; text-underline-position: from-font; }
section.${e} { box-sizing: border-box; display: flex; flex-flow: column nowrap; position: relative; overflow: hidden; }
section.${e}>article { margin-bottom: auto; z-index: 1; }
section.${e}>footer { z-index: 1; }
.${e} table { border-collapse: collapse; }
.${e} table td, .${e} table th { vertical-align: top; }
.${e} p { margin: 0pt; min-height: 1em; }
.${e} span { white-space: pre-wrap; overflow-wrap: break-word; }
.${e} a { color: inherit; text-decoration: inherit; }
.${e} svg { fill: transparent; }
`;
    return this.options.renderComments && (r += `
.${e}-comment-ref { cursor: default; }
.${e}-comment-popover { display: none; z-index: 1000; padding: 0.5rem; background: white; position: absolute; box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.25); width: 30ch; }
.${e}-comment-ref:hover~.${e}-comment-popover { display: block; }
.${e}-comment-author,.${e}-comment-date { font-size: 0.875rem; color: #888; }
`), [
      this.h({ tagName: "#comment", children: ["docxjs library predefined styles"] }),
      this.h({ tagName: "style", children: [r] })
    ];
  }
  async renderNumbering(e) {
    var t = "", r = [];
    for (var a of e) {
      var n = `p.${this.numberingClass(a.id, a.level)}`, o = "none";
      if (a.bullet) {
        let i = `--${this.className}-${a.bullet.src}`.toLowerCase();
        t += this.styleToString(`${n}:before`, {
          content: "' '",
          display: "inline-block",
          background: `var(${i})`
        }, a.bullet.style);
        try {
          const h = await this.document.loadNumberingImage(a.bullet.src);
          t += `${this.rootSelector} { ${i}: url(${h}) }`;
        } catch {
          this.options.debug && console.warn(`Can't load numbering image with src ${a.bullet.src}`);
        }
      } else if (a.levelText) {
        let i = this.numberingCounter(a.id, a.level);
        const h = i + " " + (a.start - 1);
        a.level > 0 && (t += this.styleToString(`p.${this.numberingClass(a.id, a.level - 1)}`, {
          "counter-set": h
        })), r.push(h), t += this.styleToString(`${n}:before`, {
          content: this.levelTextToContent(a.levelText, a.suff, a.id, this.numFormatToCssValue(a.format)),
          "counter-increment": i,
          ...a.rStyle
        });
      } else
        o = this.numFormatToCssValue(a.format);
      t += this.styleToString(n, {
        display: "list-item",
        "list-style-position": "inside",
        "list-style-type": o,
        ...a.pStyle
      });
    }
    return r.length > 0 && (t += this.styleToString(this.rootSelector, {
      "counter-reset": r.join(" ")
    })), [
      this.h({ tagName: "#comment", children: ["docxjs document numbering styles"] }),
      this.h({ tagName: "style", children: [t] })
    ];
  }
  renderStyles(e) {
    var t = "";
    const r = this.styleMap, a = wt(e.filter((h) => h.isDefault), (h) => h.target);
    for (const h of e) {
      var n = h.styles;
      if (h.linked) {
        var o = h.linked && r[h.linked];
        o ? n = n.concat(o.styles) : this.options.debug && console.warn(`Can't find linked style ${h.linked}`);
      }
      for (const _ of n) {
        var i = `${h.target ?? ""}.${h.cssName}`;
        h.target != _.target && (i += ` ${_.target}`), a[h.target] == h && (i = `.${this.className} ${h.target}, ` + i), t += this.styleToString(i, _.values);
      }
    }
    return [
      this.h({ tagName: "#comment", children: ["docxjs document styles"] }),
      this.h({ tagName: "style", children: [t] })
    ];
  }
  renderNotes(e, t) {
    var r = e.map((a) => t[a]).filter((a) => a);
    if (r.length > 0)
      return this.h({ tagName: "ol", children: this.renderElements(r) });
  }
  renderElement(e) {
    switch (e.type) {
      case B.Paragraph:
        return this.renderParagraph(e);
      case B.BookmarkStart:
        return this.renderBookmarkStart(e);
      case B.BookmarkEnd:
        return null;
      case B.Run:
        return this.renderRun(e);
      case B.Table:
        return this.renderTable(e);
      case B.Row:
        return this.renderTableRow(e);
      case B.Cell:
        return this.renderTableCell(e);
      case B.Hyperlink:
        return this.renderHyperlink(e);
      case B.SmartTag:
        return this.renderSmartTag(e);
      case B.Drawing:
        return this.renderDrawing(e);
      case B.Image:
        return this.renderImage(e);
      case B.Text:
        return this.renderText(e);
      case B.Text:
        return this.renderText(e);
      case B.DeletedText:
        return this.renderDeletedText(e);
      case B.Tab:
        return this.renderTab(e);
      case B.Symbol:
        return this.renderSymbol(e);
      case B.Break:
        return this.renderBreak(e);
      case B.Footer:
        return this.renderContainer(e, "footer");
      case B.Header:
        return this.renderContainer(e, "header");
      case B.Footnote:
      case B.Endnote:
        return this.renderContainer(e, "li");
      case B.FootnoteReference:
        return this.renderFootnoteReference(e);
      case B.EndnoteReference:
        return this.renderEndnoteReference(e);
      case B.NoBreakHyphen:
        return this.h({ tagName: "wbr" });
      case B.VmlPicture:
        return this.renderVmlPicture(e);
      case B.VmlElement:
        return this.renderVmlElement(e);
      case B.MmlMath:
        return this.renderContainerNS(e, it.mathML, "math", { xmlns: it.mathML });
      case B.MmlMathParagraph:
        return this.renderContainer(e, "span");
      case B.MmlFraction:
        return this.renderContainerNS(e, it.mathML, "mfrac");
      case B.MmlBase:
        return this.renderContainerNS(e, it.mathML, e.parent.type == B.MmlMatrixRow ? "mtd" : "mrow");
      case B.MmlNumerator:
      case B.MmlDenominator:
      case B.MmlFunction:
      case B.MmlLimit:
      case B.MmlBox:
        return this.renderContainerNS(e, it.mathML, "mrow");
      case B.MmlGroupChar:
        return this.renderMmlGroupChar(e);
      case B.MmlLimitLower:
        return this.renderContainerNS(e, it.mathML, "munder");
      case B.MmlMatrix:
        return this.renderContainerNS(e, it.mathML, "mtable");
      case B.MmlMatrixRow:
        return this.renderContainerNS(e, it.mathML, "mtr");
      case B.MmlRadical:
        return this.renderMmlRadical(e);
      case B.MmlSuperscript:
        return this.renderContainerNS(e, it.mathML, "msup");
      case B.MmlSubscript:
        return this.renderContainerNS(e, it.mathML, "msub");
      case B.MmlDegree:
      case B.MmlSuperArgument:
      case B.MmlSubArgument:
        return this.renderContainerNS(e, it.mathML, "mn");
      case B.MmlFunctionName:
        return this.renderContainerNS(e, it.mathML, "ms");
      case B.MmlDelimiter:
        return this.renderMmlDelimiter(e);
      case B.MmlRun:
        return this.renderMmlRun(e);
      case B.MmlNary:
        return this.renderMmlNary(e);
      case B.MmlPreSubSuper:
        return this.renderMmlPreSubSuper(e);
      case B.MmlBar:
        return this.renderMmlBar(e);
      case B.MmlEquationArray:
        return this.renderMllList(e);
      case B.Inserted:
        return this.renderInserted(e);
      case B.Deleted:
        return this.renderDeleted(e);
      case B.CommentRangeStart:
        return this.renderCommentRangeStart(e);
      case B.CommentRangeEnd:
        return this.renderCommentRangeEnd(e);
      case B.CommentReference:
        return this.renderCommentReference(e);
      case B.AltChunk:
        return this.renderAltChunk(e);
    }
    return null;
  }
  renderElements(e, t) {
    if (e == null)
      return null;
    var r = e.flatMap((a) => this.renderElement(a)).filter((a) => a != null);
    return t && r.forEach((a) => t.appendChild(Wt(a) ? document.createTextNode(a) : a)), r;
  }
  renderContainer(e, t, r) {
    return this.h({ tagName: t, children: this.renderElements(e.children), ...r });
  }
  renderContainerNS(e, t, r, a) {
    return this.h({ ns: t, tagName: r, children: this.renderElements(e.children), ...a });
  }
  renderParagraph(e) {
    var t = this.toHTML(e, it.html, "p");
    const r = this.findStyle(e.styleName);
    e.tabs ?? (e.tabs = r?.paragraphProps?.tabs);
    const a = e.numbering ?? r?.paragraphProps?.numbering;
    return a && t.classList.add(this.numberingClass(a.id, a.level)), t;
  }
  renderHyperlink(e) {
    const t = this.toH(e, it.html, "a");
    if (t.href = "", e.id) {
      const r = this.document.documentPart.rels.find((a) => a.id == e.id && a.targetMode === "External");
      t.href = r?.target ?? t.href;
    }
    return e.anchor && (t.href += `#${e.anchor}`), this.h(t);
  }
  renderSmartTag(e) {
    return this.renderContainer(e, "span");
  }
  renderCommentRangeStart(e) {
    if (!this.options.renderComments)
      return null;
    const t = new Range();
    this.commentHighlight?.add(t);
    const r = this.h({ tagName: "#comment", children: [`start of comment #${e.id}`] });
    return this.later(() => t.setStart(r, 0)), this.commentMap[e.id] = t, r;
  }
  renderCommentRangeEnd(e) {
    if (!this.options.renderComments)
      return null;
    const t = this.commentMap[e.id], r = this.h({ tagName: "#comment", children: [`end of comment #${e.id}`] });
    return this.later(() => t?.setEnd(r, 0)), r;
  }
  renderCommentReference(e) {
    if (!this.options.renderComments)
      return null;
    var t = this.document.commentsPart?.commentMap[e.id];
    if (!t)
      return null;
    const r = this.h({ tagName: "span", className: `${this.className}-comment-ref`, children: ["💬"] }), a = this.h({
      tagName: "div",
      className: `${this.className}-comment-popover`,
      children: [
        this.h({ tagName: "div", className: `${this.className}-comment-author`, children: [t.author] }),
        this.h({ tagName: "div", className: `${this.className}-comment-date`, children: [new Date(t.date).toLocaleString()] }),
        ...this.renderElements(t.children)
      ]
    });
    return this.h({ tagName: "#fragment", children: [
      this.h({ tagName: "#comment", children: [`comment #${t.id} by ${t.author} on ${t.date}`] }),
      r,
      a
    ] });
  }
  renderAltChunk(e) {
    if (!this.options.renderAltChunks)
      return null;
    var t = this.h({ tagName: "iframe" });
    return this.tasks.push(this.document.loadAltChunk(e.id, this.currentPart).then((r) => {
      t.srcdoc = r;
    })), t;
  }
  renderDrawing(e) {
    var t = this.toHTML(e, it.html, "div");
    return t.style.display = "inline-block", t.style.position = "relative", t.style.textIndent = "0px", t;
  }
  renderImage(e) {
    let t = this.toHTML(e, it.html, "img", []), r = e.cssStyle?.transform;
    if (e.srcRect && e.srcRect.some((h) => h != 0)) {
      var [a, n, o, i] = e.srcRect;
      r = `scale(${1 / (1 - a - o)}, ${1 / (1 - n - i)})`, t.style["clip-path"] = `rect(${(100 * n).toFixed(2)}% ${(100 * (1 - o)).toFixed(2)}% ${(100 * (1 - i)).toFixed(2)}% ${(100 * a).toFixed(2)}%)`;
    }
    return e.rotation && (r = `rotate(${e.rotation}deg) ${r ?? ""}`), t.style.transform = r?.trim(), this.document && this.tasks.push(this.document.loadDocumentImage(e.src, this.currentPart).then((h) => {
      t.src = h;
    })), t;
  }
  renderText(e) {
    return this.h(e.text);
  }
  renderDeletedText(e) {
    return this.options.renderChanges ? this.renderText(e) : null;
  }
  renderBreak(e) {
    return e.break == "textWrapping" ? this.h({ tagName: "br" }) : null;
  }
  renderInserted(e) {
    return this.options.renderChanges ? this.renderChange(e, "ins") : this.renderElements(e.children);
  }
  renderDeleted(e) {
    return this.options.renderChanges ? this.renderChange(e, "del") : null;
  }
  renderChange(e, t) {
    return this.renderContainer(e, t, {
      dateTime: e.date
    });
  }
  renderSymbol(e) {
    return this.h({ tagName: "span", children: [String.fromCharCode(e.char)], style: { fontFamily: e.font } });
  }
  renderFootnoteReference(e) {
    return this.currentFootnoteIds.push(e.id), this.h({ tagName: "sup", children: [`${this.currentFootnoteIds.length}`] });
  }
  renderEndnoteReference(e) {
    return this.currentEndnoteIds.push(e.id), this.h({ tagName: "sup", children: [`${this.currentEndnoteIds.length}`] });
  }
  renderTab(e) {
    var t = this.h({ tagName: "span", children: [" "] });
    if (this.options.experimental) {
      t.className = this.tabStopClass();
      var r = Wr(e, B.Paragraph)?.tabs;
      this.currentTabs.push({ stops: r, span: t });
    }
    return t;
  }
  renderBookmarkStart(e) {
    return this.h({ tagName: "span", id: e.name });
  }
  renderRun(e) {
    if (e.fieldRun)
      return null;
    let t = this.renderElements(e.children);
    e.verticalAlign && (t = [this.h({ tagName: e.verticalAlign, children: this.renderElements(e.children) })]);
    const r = this.toHTML(e, it.html, "span", t);
    return e.id && (r.id = e.id), r;
  }
  renderTable(e) {
    this.tableCellPositions.push(this.currentCellPosition), this.tableVerticalMerges.push(this.currentVerticalMerge), this.currentVerticalMerge = {}, this.currentCellPosition = { col: 0, row: 0 };
    const t = [];
    return e.columns && t.push(this.renderTableColumns(e.columns)), t.push(...this.renderElements(e.children)), this.currentVerticalMerge = this.tableVerticalMerges.pop(), this.currentCellPosition = this.tableCellPositions.pop(), this.toHTML(e, it.html, "table", t);
  }
  renderTableColumns(e) {
    const t = e.map((r) => this.h({ tagName: "col", style: { width: r.width } }));
    return this.h({ tagName: "colgroup", children: t });
  }
  renderTableRow(e) {
    this.currentCellPosition.col = 0;
    const t = [];
    return e.gridBefore && t.push(this.renderTableCellPlaceholder(e.gridBefore)), t.push(...this.renderElements(e.children)), e.gridAfter && t.push(this.renderTableCellPlaceholder(e.gridAfter)), this.currentCellPosition.row++, this.toHTML(e, it.html, "tr", t);
  }
  renderTableCellPlaceholder(e) {
    return this.h({ tagName: "td", colSpan: e, style: { border: "none" } });
  }
  renderTableCell(e) {
    let t = this.toHTML(e, it.html, "td");
    const r = this.currentCellPosition.col;
    return e.verticalMerge ? e.verticalMerge == "restart" ? (this.currentVerticalMerge[r] = t, t.rowSpan = 1) : this.currentVerticalMerge[r] && (this.currentVerticalMerge[r].rowSpan += 1, t.style.display = "none") : this.currentVerticalMerge[r] = null, e.span && (t.colSpan = e.span), this.currentCellPosition.col += t.colSpan, t;
  }
  renderVmlPicture(e) {
    return this.renderContainer(e, "div");
  }
  renderVmlElement(e) {
    var t = this.h({ ns: it.svg, tagName: "svg", style: e.cssStyleText });
    const r = this.renderVmlChildElement(e);
    return e.imageHref?.id && this.tasks.push(this.document?.loadDocumentImage(e.imageHref.id, this.currentPart).then((a) => r.setAttribute("href", a))), t.appendChild(r), requestAnimationFrame(() => {
      const a = t.firstElementChild.getBBox();
      t.setAttribute("width", `${Math.ceil(a.x + a.width)}`), t.setAttribute("height", `${Math.ceil(a.y + a.height)}`);
    }), t;
  }
  renderVmlChildElement(e) {
    const t = this.createSvgElement(e.tagName);
    Object.entries(e.attrs).forEach(([r, a]) => t.setAttribute(r, a));
    for (let r of e.children)
      r.type == B.VmlElement ? t.appendChild(this.renderVmlChildElement(r)) : t.appendChild(...Et(this.renderElement(r)));
    return t;
  }
  renderMmlRadical(e) {
    const t = e.children.find((a) => a.type == B.MmlBase);
    if (e.props?.hideDegree)
      return this.createMathMLElement("msqrt", null, this.renderElements([t]));
    const r = e.children.find((a) => a.type == B.MmlDegree);
    return this.createMathMLElement("mroot", null, this.renderElements([t, r]));
  }
  renderMmlDelimiter(e) {
    const t = [];
    return t.push(this.createMathMLElement("mo", null, [e.props.beginChar ?? "("])), t.push(...this.renderElements(e.children)), t.push(this.createMathMLElement("mo", null, [e.props.endChar ?? ")"])), this.createMathMLElement("mrow", null, t);
  }
  renderMmlNary(e) {
    const t = [], r = wt(e.children, (_) => _.type), a = r[B.MmlSuperArgument], n = r[B.MmlSubArgument], o = a ? this.createMathMLElement("mo", null, Et(this.renderElement(a))) : null, i = n ? this.createMathMLElement("mo", null, Et(this.renderElement(n))) : null, h = this.createMathMLElement("mo", null, [e.props?.char ?? "∫"]);
    return o || i ? t.push(this.createMathMLElement("munderover", null, [h, i, o])) : o ? t.push(this.createMathMLElement("mover", null, [h, o])) : i ? t.push(this.createMathMLElement("munder", null, [h, i])) : t.push(h), t.push(...this.renderElements(r[B.MmlBase].children)), this.createMathMLElement("mrow", null, t);
  }
  renderMmlPreSubSuper(e) {
    const t = [], r = wt(e.children, (_) => _.type), a = r[B.MmlSuperArgument], n = r[B.MmlSubArgument], o = a ? this.createMathMLElement("mo", null, Et(this.renderElement(a))) : null, i = n ? this.createMathMLElement("mo", null, Et(this.renderElement(n))) : null, h = this.createMathMLElement("mo", null);
    return t.push(this.createMathMLElement("msubsup", null, [h, i, o])), t.push(...this.renderElements(r[B.MmlBase].children)), this.createMathMLElement("mrow", null, t);
  }
  renderMmlGroupChar(e) {
    const t = e.props.verticalJustification === "bot" ? "mover" : "munder", r = this.renderContainerNS(e, it.mathML, t);
    return e.props.char && r.appendChild(this.createMathMLElement("mo", null, [e.props.char])), r;
  }
  renderMmlBar(e) {
    const t = {};
    switch (e.props.position) {
      case "top":
        t.textDecoration = "overline";
        break;
      case "bottom":
        t.textDecoration = "underline";
        break;
    }
    return this.renderContainerNS(e, it.mathML, "mrow", { style: t });
  }
  renderMmlRun(e) {
    return this.toHTML(e, it.mathML, "ms");
  }
  renderMllList(e) {
    const t = this.renderElements(e.children).map((r) => this.createMathMLElement("mtr", null, [
      this.createMathMLElement("mtd", null, [r])
    ]));
    return this.toHTML(e, it.mathML, "mtable", t);
  }
  toH(e, t, r, a = null) {
    const { $lang: n, ...o } = e.cssStyle ?? {}, i = $r(e.className, e.styleName && this.processStyleName(e.styleName));
    return { ns: t, tagName: r, className: i, lang: n, style: o, children: a ?? this.renderElements(e.children) };
  }
  toHTML(e, t, r, a = null) {
    return this.h(this.toH(e, t, r, a));
  }
  findStyle(e) {
    return e && this.styleMap?.[e];
  }
  numberingClass(e, t) {
    return `${this.className}-num-${e}-${t}`;
  }
  tabStopClass() {
    return `${this.className}-tab-stop`;
  }
  styleToString(e, t, r = null) {
    let a = `${e} {\r
`;
    for (const n in t)
      n.startsWith("$") || (a += `  ${n}: ${t[n]};\r
`);
    return r && (a += r), a + `}\r
`;
  }
  numberingCounter(e, t) {
    return `${this.className}-num-${e}-${t}`;
  }
  levelTextToContent(e, t, r, a) {
    const n = {
      tab: "\\9",
      space: "\\a0"
    };
    var o = e.replace(/%\d*/g, (i) => {
      let h = parseInt(i.substring(1), 10) - 1;
      return `"counter(${this.numberingCounter(r, h)}, ${a})"`;
    });
    return `"${o}${n[t] ?? ""}"`;
  }
  numFormatToCssValue(e) {
    var t = {
      none: "none",
      bullet: "disc",
      decimal: "decimal",
      lowerLetter: "lower-alpha",
      upperLetter: "upper-alpha",
      lowerRoman: "lower-roman",
      upperRoman: "upper-roman",
      decimalZero: "decimal-leading-zero",
      aiueo: "katakana",
      aiueoFullWidth: "katakana",
      chineseCounting: "simp-chinese-informal",
      chineseCountingThousand: "simp-chinese-informal",
      chineseLegalSimplified: "simp-chinese-formal",
      chosung: "hangul-consonant",
      ideographDigital: "cjk-ideographic",
      ideographTraditional: "cjk-heavenly-stem",
      ideographLegalTraditional: "trad-chinese-formal",
      ideographZodiac: "cjk-earthly-branch",
      iroha: "katakana-iroha",
      irohaFullWidth: "katakana-iroha",
      japaneseCounting: "japanese-informal",
      japaneseDigitalTenThousand: "cjk-decimal",
      japaneseLegal: "japanese-formal",
      thaiNumbers: "thai",
      koreanCounting: "korean-hangul-formal",
      koreanDigital: "korean-hangul-formal",
      koreanDigital2: "korean-hanja-informal",
      hebrew1: "hebrew",
      hebrew2: "hebrew",
      hindiNumbers: "devanagari",
      ganada: "hangul",
      taiwaneseCounting: "cjk-ideographic",
      taiwaneseCountingThousand: "cjk-ideographic",
      taiwaneseDigital: "cjk-decimal"
    };
    return t[e] ?? e;
  }
  refreshTabStops() {
    this.options.experimental && setTimeout(() => {
      const e = jr();
      for (let t of this.currentTabs)
        Ur(t.span, t.stops, this.defaultTabSize, e);
    }, 500);
  }
  createElementNS(e, t, r, a) {
    return this.h({ ns: e, tagName: t, children: a, ...r });
  }
  createElement(e, t, r) {
    return this.createElementNS(it.html, e, t, r);
  }
  createMathMLElement(e, t, r) {
    return this.createElementNS(it.mathML, e, t, r);
  }
  createSvgElement(e, t, r) {
    return this.createElementNS(it.svg, e, t, r);
  }
  later(e) {
    this.postRenderTasks.push(e);
  }
}
function Wr(c, e) {
  for (var t = c.parent; t != null && t.type != e; )
    t = t.parent;
  return t;
}
const be = {
  ignoreHeight: !1,
  ignoreWidth: !1,
  ignoreFonts: !1,
  breakPages: !0,
  debug: !1,
  experimental: !1,
  className: "docx",
  inWrapper: !0,
  hideWrapperOnPrint: !1,
  trimXmlDeclaration: !0,
  ignoreLastRenderedPageBreak: !0,
  renderHeaders: !0,
  renderFooters: !0,
  renderFootnotes: !0,
  renderEndnotes: !0,
  useBase64URL: !1,
  renderChanges: !1,
  renderComments: !1,
  renderAltChunks: !0,
  h: Lt
};
function Zr(c, e) {
  const t = { ...be, ...e };
  return Gt.load(c, new Or(t), t);
}
async function Vr(c, e) {
  const t = { ...be, ...e };
  return await new Hr().render(c, t);
}
async function Kr(c, e, t, r) {
  const a = await Zr(c, r), n = await Vr(a, r);
  t ?? (t = e), t.innerHTML = "", e.innerHTML = "";
  for (let o of n)
    (o.nodeName === "STYLE" ? t : e).appendChild(o);
  return a;
}
export {
  Kr as r
};
