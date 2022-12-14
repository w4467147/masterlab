/*! power by kodcloud ver4.40(2019-03-21) [build 1553178691227] */
define("app/src/user/main", ["lib/jquery-lib", "lib/util", "lib/artDialog/jquery-artDialog", "../../common/core", "../../common/tpl/upload.html", "../../common/tpl/formMake.html", "../../common/core.tools", "../../common/core.upload", "../../common/core.api", "../../common/core.playSound", "../../common/core.formMake", "../../common/rightMenuExtence", "../../app/appBase", "../../app/editor", "../../app/openWith", "../../app/html", "../../common/tpl/copyright.html", "../../common/tpl/themeDIY.html"], function (a, b, c) {
    a("lib/jquery-lib"), a("lib/util"), a("lib/artDialog/jquery-artDialog"), core = a("../../common/core"), $(document).ready(function () {
        G.appRoot =  G.appHost;
        $.isIE() && $(".aero").removeClass("aero"), $(".init-loading").fadeOut(450).addClass("pop_fadeout"), $(".loginbox [disabled]").removeAttr("disabled"), core.init(), LocalData.del("thisPath");
        var a = function () {
            $(":focus").is("input") || 0 == $("#username").length || $("#username").focus()
        }, b = function () {
            var b = G.appHost + "user/checkCode&t=" + UUID();
            $(".check-code img").attr("src", b), $(".check-code").val("").focus(), a()
        };
        $("#username,#password").on("click", function () {
            $(window).scrollTop(200), setTimeout(function () {
                $(window).scrollTop(200)
            }, 500)
        });
        var c = "&^jofl039e8jfv0239", d = {
            set: function (a, b) {
                LocalData.set("kodLoginName", authCrypt.encode(a, c)), LocalData.set("kodLoginPass", authCrypt.encode(b, c))
            }, clear: function () {
                LocalData.del("kodLoginName"), LocalData.del("kodLoginPass")
            }, get: function () {
                var a = LocalData.get("kodLoginName"), b = LocalData.get("kodLoginPass");
                if (!a || !b) return !1;
                var a = authCrypt.decode(a, c), b = authCrypt.decode(b, c);
                return a && b ? {name: a, pass: b} : !1
            }
        }, e = function (a) {
            var c = $("#username").val(), e = $("#password").val(),
                f = $("input[name=rememberPassword]").prop("checked") ? 1 : 0,
                g = G.appHost + "user/loginSubmit&name=" + urlEncode(c), h = roundString(5),
                i = h + authCrypt.encode(e, h + "2&$%@(*@(djfhj1923");
            return g += "&salt=1", g += "&checkCode=" + $("input.check-code").val(), g += "&password=" + urlEncode(i), g += "&rememberPassword=" + f + "&isAjax=1", $.ajax({
                dataType: "json",
                url: g,
                error: function (a, b, c) {
                    setTimeout(function () {
                        core.ajaxError(a, b, c)
                    }, 600)
                },
                success: function (a) {
                    if (a.code) {
                        f ? d.set(c, e) : d.clear();
                        console.log(G);
                        var g = G.appRoot;
                        void 0 != $.getUrlParam("link") && (g = urlDecode($.getUrlParam("link"))), a.info && (g = a.info);

                        window.location.href = '/kod_index.php';
                        g
                    } else d.clear(), isWap() || $(".loginbox").shake(2, 30, 60), b(), $("#username").focus(), $(".msg").show().html(a.data), Tips.tips(a.data, !1)
                }
            }), stopPP(a), !1
        };
        isWap() || a();
        var f = d.get();
        f && ($("input[name=rememberPassword]").prop("checked", 1), $("input[name=name]").val(" ").val(f.name), $("input[name=password]").val(" ").val(f.pass)), $(".check-code img").bind("click", b), $("form").submit(e), $("#username,#password,input.check-code").keyEnter(e), $(".forget-password").bind("click", function () {
            $.dialog.alert(LNG.forget_password_tips)
        });
        var g = $(".admin-password input"), h = $(".admin-password-repeat input");
        g.keyEnter(function () {
            $(".start").click()
        }), h.keyEnter(function () {
            $(".start").click()
        }), $(".start").bind("click", function () {
            var a = trim(g.val());
            a != h.val() ? Tips.tips(LNG.login_root_password_equal, !1) : "" == a ? (Tips.tips(LNG.login_root_password_tips, !1), g.focus()) : window.location.href = G.appHost + "user/loginFirst&password=" + urlEncode(a)
        }), $(".LICENSE_SUBMIT").bind("click", function () {
            var a = g.val();
            "" == a ? (Tips.tips(LNG.not_null, !1), g.focus()) : window.location.href = G.appHost + "user/versionInstall&license_code=" + a
        })
    })
});
;
;
;
;!function ($) {
    !function ($, n, t, i, r, o, e, c, f, a, u, d, v, s, E, h, C, l, A, p, G, g, b, m, S, O, I, L, J, M, y, B, Q, k, F, _, P, N, H, R, w, X, j, V, D, x, T, Z, Y, z, W, K, U, q, $n, nn, tn, rn, on, en, cn, fn, an, un, dn, vn, sn, En, hn, Cn, ln, An, pn, Gn, gn, bn, mn, Sn, On, In, Ln, Jn, Mn, yn, Bn, Qn, kn, Fn, _n, Pn, Nn, Hn, Rn, wn, Xn, jn, Vn, Dn, xn, Tn, Zn, Yn, zn, Wn, Kn, Un, qn, $t, nt, tt, it, rt, ot, et, ct, ft, at, ut, dt, vt, st, Et, ht, Ct, lt, At, pt, Gt, gt, bt, mt, St, Ot, It, Lt, Jt, Mt, yt, Bt, Qt, kt, Ft, _t, Pt, Nt, Ht, Rt, wt, Xt, jt, Vt, Dt, xt, Tt, Zt, Yt, zt, Wt, Kt, Ut, qt, $i, ni, ti, ii, ri, oi, ei, ci, fi, ai, ui, di, vi, si, Ei, hi, Ci, li, Ai, pi, Gi, gi, bi, mi, Si, Oi, Ii, Li, Ji, Mi, yi, Bi, Qi, ki, Fi, _i, Pi, Ni, Hi, Ri, wi, Xi, ji, Vi, Di, xi, Ti, Zi, Yi, zi, Wi, Ki, Ui, qi, $r, nr, tr, ir, rr, or, er, cr, fr, ar, ur, dr, vr, sr, Er, hr, Cr, lr, Ar, pr, Gr, gr, br, mr, Sr, Or, Ir, Lr, Jr, Mr, yr, Br, Qr, kr, Fr, _r, Pr, Nr, Hr, Rr, wr, Xr, jr, Vr, Dr, xr, Tr, Zr, Yr, zr, Wr, Kr, Ur, qr, $o, no, to, io, ro, oo, eo, co, fo, ao, uo, vo, so, Eo, ho, Co, lo, Ao, po, Go, go, bo, mo, So, Oo, Io, Lo, Jo, Mo, yo, Bo, Qo, ko, Fo, _o, Po, No, Ho, Ro, wo, Xo, jo, Vo, Do, xo, To, Zo, Yo, zo, Wo, Ko, Uo, qo, $e, ne, te, ie, re, oe, ee, ce, fe, ae, ue, de, ve, se, Ee, he, Ce, le, Ae, pe, Ge, ge, be, me, Se, Oe, Ie, Le, Je, Me, ye, Be, Qe, ke, Fe, _e, Pe, Ne, He, Re, we, Xe, je, Ve, De, xe, Te, Ze, Ye, ze, We, Ke, Ue, qe, $c, nc, tc, ic, rc, oc, ec, cc, fc, ac, uc, dc, vc, sc, Ec, hc, Cc, lc, Ac, pc, Gc, gc, bc, mc, Sc, Oc, Ic, Lc, Jc, Mc, yc, Bc, Qc, kc, Fc, _c, Pc, Nc, Hc, Rc, wc, Xc, jc, Vc, Dc, xc, Tc, Zc, Yc, zc, Wc, Kc, Uc, qc, $f, nf, tf, rf, of, ef, cf, ff, af, uf, df, vf, sf, Ef, hf, Cf, lf, Af, pf, Gf, gf, bf, mf, Sf, Of, If, Lf, Jf, Mf, yf, Bf, Qf, kf, Ff, _f, Pf, Nf, Hf, Rf, wf, Xf, jf, Vf, Df, xf, Tf, Zf, Yf, zf, Wf, Kf, Uf, qf, $a, na, ta, ia, ra, oa, ea, ca, fa, aa, ua, da, va, sa, Ea, ha, Ca, la, Aa, pa, Ga) {
        $[t](i, [r, o, e, c, f, a, u, d, v, s, E, h, C, l], function (n) {
            $[A] = n(r), $[p] = n(o);
            var t = n(e), i = n(c), ga = n(f), ba = n(a), ma = n(u);
            n(d), $[G] = n(v), n(s), n(E), n(h), $[g] = function (n) {
                return $[b](n)
            }, $[m] = function (n) {
                return $[S](n)
            };
            var Sa = function () {
                $[I][O] = n, $[J][L] || ($[J][L] = function (n, t) {
                    $[J][M][n] = t
                }, $[J][y] = function (n, t) {
                    $[J][M][B][n] = t
                }), $[J][L](Q, !k), $[J][L](F, !_), $[J][y](P, {
                    $: $[N],
                    window: $[I],
                    log: $[R][H],
                    core: $[w],
                    pathTools: $[I][X],
                    inArray: $[j]
                }), $[J][M][B][X] = $[I][X], $[J][M][Q] = !k, V == $[x][D] ? ($[J][M][T] = !k, $[J][M][Z] = !k, $[J][M][Y] = !_) : ($[J][M][T] = !_, $[J][M][Z] = !_, $[J][M][Y] = !k)
            }, Oa = function () {
                Sa(), z != typeof $[x] && (k != $[x][W] && $[N](U)[K](), $[x][W] || $[w][q]($n) || k == $[w][q](nn) || $[N](tn)[K](), $[x][rn] && on == $[x][rn][en] && ($[N][fn][M][cn] = !k), Ia()), $[an]() && ($[N](dn)[un](vn), n[sn](En, function () {
                    $[N](function () {
                        $[Cn][hn]($[ln][dn])
                    })
                }), $[N](pn)[An](Gn, function () {
                    var n = $[N](this);
                    $[N](this)[gn](bn) || (n = $[N](this)[mn](Sn)), n[On](In), $[N][Jn][Ln]()
                }), $[N](Mn)[An](yn, function () {
                    var n = $[N](this)[Bn](Qn);
                    n[kn](Fn, _n), $[Pn](function () {
                        n[kn](Fn, Nn)
                    }, Hn)
                })), $[N](wn)[Rn](Xn, function (n) {
                    if (_ == $[N](n[Vn])[mn](Qn)[jn]) try {
                        $[N][Jn][Ln]()
                    } catch (n) {
                    }
                }), $[N](dn)[Xn](function () {
                    $[xn][Dn](Tn, function (n) {
                        $[Zn] != n && n[N](dn)[On](Xn)
                    })
                }), $[N][fn][M][cn] && $[Yn]([zn, Wn, Kn, Sn, Un, qn, $t, nt], [tt, it, rt, ot]), $[N](ct)[et](ft, at), $[N][ut]({headers: {"X-CSRF-TOKEN": $[vt][dt](st)}}), $[N](Et)[Xn](function () {
                    var n = $[N](this)[et](ht);
                    $[vt][Ct](ht, n), $[I][At][lt]()
                }), $[N](Et)[kn]({padding: pt}), $[N](Gt + $[vt][dt](ht) + gt)[kn]({
                    background: bt,
                    color: mt
                }), $[w][St](), $[w][It][Ot]();
                for (var t = _; t < $[I][Lt][jn]; t++) try {
                    $[I][Lt][t]()
                } catch (i) {
                    $[R][Jt](Mt, i)
                }
                $[yt][On](Bt), La()
            }, Ia = function () {
                var n = $[I][At], t = n[Qt] ? kt + n[Qt] : Tn;
                $[x][Ft] = n[_t] + Pt + n[Nt] + t + Ht, $[x][Rt] = $[wt]($[x][Ft], Ht) + n[jt][Xt](Vt, Tn);
                var i = $[x][Dt][Xt](Vt, Tn);
                $[x][Ft] + $[xt](i, Ht) != $[x][Rt] && ($[x][Ft] = $[wt]($[x][Rt], i) + Ht), $[x][Tt] = $[x][Rt] + Zt, Yt == $[x][Wt][zt] && ($[x][Tt] = $[x][Tt][Xt](Zt, Kt)), $[vt][Ct](Ut, $[x][Ft]), $[vt][Ct](qt, $[x][Rt]), $[vt][Ct]($i, $[x][ni], ti)
            }, La = function () {
                $[an]() || n[sn]([ii, ri], function () {
                    var n = $[N](oi);
                    n[ei]({
                        className: ci,
                        liveEvents: !_,
                        slide: !k,
                        alignTo: fi,
                        alignX: ai,
                        alignY: ui,
                        showAniDuration: di,
                        hideAniDuration: vi,
                        offsetY: si,
                        offsetX: Ei,
                        showTimeout: function () {
                            var n = hi;
                            return $[N](this)[et](Ci) && (n = $[li]($[N](this)[et](Ci))), n
                        },
                        content: function () {
                            var n = $[N](this)[Ai](pi);
                            if ($[N](this)[et](Gi)) {
                                var t = $[N]($[N](this)[et](Gi));
                                n = t[gi](bi) || t[gi](mi) ? t[Si]() : t[wn]()
                            }
                            return n = n ? n : Tn, n[Xt](Oi, Ii)
                        }
                    }), $[N](dn)[Rn](yn, function () {
                        $[N](Li)[K](), $[N][Ji](Mi, yi)
                    })[Rn](In, function () {
                        $[N][Ji](Tn, yi)
                    }), $[N](Bi)[An](Qi, function () {
                        $[N](n)[ei](ki), $[N](Li)[K]()
                    })
                })
            };
            return {
                init: Oa,
                serverDwonload: i[Fi],
                upload: i[_i],
                uploadInit: i[Ot],
                playSound: ba[Pi],
                playSoundFile: ba[Ni],
                tools: t,
                api: ga,
                formMake: ma,
                getPathIcon: function (n, t) {
                    if (t = void _ == t ? Tn : t, Hi == $[N][Ri](n)) {
                        var i = $[wi]($[wi](n), Ht);
                        if (n = {}, Xi != i[ji](_, k) || i[Vi](Ht)[jn] > k) return {icon: Tn, name: Tn};
                        n[Di] = i[xi](Ti), n[Zi] = i[Vi](kt)[k]
                    }
                    var r = {};
                    r[$[x][Yi]] = {
                        icon: zi,
                        name: $[Ki][Wi]
                    }, r[$[x][Ui]] = {icon: qi}, r[$[x][$r]] = {icon: nr}, r[$[x][tr]] = {icon: zi}, r[$[x][ir]] = {
                        icon: rr,
                        name: $[Ki][rr]
                    }, r[$[x][or]] = {icon: er, name: $[Ki][cr]}, r[$[x][fr]] = {
                        icon: ar,
                        name: $[Ki][ur]
                    }, r[$[x][dr]] = {icon: vr, name: $[Ki][sr]};
                    var o = r[n[Di]];
                    return n[Di] == $[x][Yi] && $[x][Er] != n[Zi] ? o = {
                        icon: hr,
                        name: t
                    } : n[Di] == $[x][Ui] && Cr == n[lr] && (o = {icon: qi}), void _ == o && (o = {
                        icon: Tn,
                        name: Tn
                    }), void _ == o[Ar] && (o[Ar] = t), o
                },
                isFileView: function () {
                    var n = $[x][pr] + Gr + $[x][gr];
                    return br == n || mr == n ? !_ : !k
                },
                isSystemPath: function (n) {
                    var n = $[wi]($[wi](n), Ht);
                    if (void _ == n || Xi != n[ji](_, k) || n[Vi](Ht)[jn] > k) return !k;
                    var t = n[xi](Sr), i = [$[x][Yi], $[x][$r], $[x][ir], $[x][or], $[x][fr], $[x][dr]];
                    return -k !== $[N][j](t[_], i) ? !_ : !k
                },
                pathPre: function (n) {
                    if (n = $[wi]($[wi](n), Ht), void _ == n || Xi != n[ji](_, k)) return Tn;
                    var t = n[xi](Or);
                    return t[_]
                },
                contextmenu: function (n) {
                    try {
                        $[N][Jn][Ln]()
                    } catch (t) {
                    }
                    var t = n || $[I][Ir];
                    return t ? t && $[N](t[Vn])[gi](mi) || $[N](t[Vn])[gi](bi) || $[N](t[Vn])[gi](Lr) || $[N](t[Vn])[gi](Jr) || _ != $[N](t[Vn])[mn](Mr)[jn] || _ != $[N](t[Vn])[mn](yr)[jn] || _ != $[N](t[Vn])[mn](Br)[jn] || _ != $[N](t[Vn])[mn](Qr)[jn] ? !_ : !k : !_
                },
                pathThis: function (n) {
                    if (!n || Ht == n) return Tn;
                    var t = $[wt](this[kr](n), Ht), i = t[Fr](Ht), r = t[_r](i + k);
                    if (_ == r[Pr](Nr)) {
                        r = $[Hr](r[_r](r[Pr](Rr)));
                        var o = r[Vi](Ht);
                        r = o[o[jn] - k], Tn == r && (r = o[o[jn] - wr])
                    }
                    return r
                },
                pathClear: function ($) {
                    if (!$) return Tn;
                    var n = $[Xt](Xr, Ht);
                    return n = n[Xt](jr, Ht), n = n[Xt](Vr, Ht)
                },
                pathFather: function (n) {
                    var t = $[wt](this[kr](n), Ht), i = t[Fr](Ht);
                    return t[_r](_, i + k)
                },
                pathExt: function (n) {
                    var t = $[wi](n, Ht);
                    return -k != t[Fr](Ht) && (t = t[_r](t[Fr](Ht) + k)), -k != t[Fr](Gr) ? t[_r](t[Fr](Gr) + k)[Dr]() : t[Dr]()
                },
                pathUrlEncode: function (n) {
                    if (!n) return Tn;
                    var t = $[xr](n);
                    return t = t[Xt](Tr, Ht)
                },
                path2url: function (n, t) {
                    if (Zr == n[_r](_, Yr)) return n;
                    void _ == t && (t = !_);
                    var i, r = this[kr](n);
                    return $[x][W] && t && r[ji](_, $[x][zr][jn]) == $[x][zr] ? i = r[ji](_, $[x][Wr][jn]) == $[x][Wr] ? $[x][Rt] + this[Kr](r[Xt]($[x][Wr], Tn)) : $[x][Ft] + this[Kr](r[Xt]($[x][zr], Tn)) : (i = $[x][Tt] + Ur + $[x][qr] + Rr + $[xr](r), z != typeof $[x][$o] && (i = $[x][Tt] + no + $[x][hr] + to + $[x][io] + Rr + $[xr](r))), i
                },
                pathCommon: function (n) {
                    if (Zr == n[_r](_, Yr)) return $[xr](n);
                    if (n[_r](_, $[x][Yi][jn]) == $[x][Yi]) return $[xr](n);
                    if ($[x][ro] && $[x][ro][oo]) return n;
                    var t = this[kr](n), i = $[xr](t);
                    return z != typeof $[x][$o] && (i = $[xr]($[x][Yi] + kt + $[x][hr] + Ht + $[x][ro][Ar] + t)), i
                },
                isApp: function (n) {
                    if (z == typeof $[eo]) return !k;
                    var t = $[eo][co];
                    return Hi == typeof n ? t == n : $[N][fo](n) && -k !== $[N][j](t, n) ? !_ : !k
                },
                pathReadable: function (n) {
                    if (ao != typeof $[x][uo]) return !_;
                    for (var t = $[x][uo][vo], i = _; i < t[jn]; i++) if (t[i][so] == n) return void _ == t[i][Eo] || k == t[i][Eo] ? !_ : !k;
                    t = $[x][uo][ho];
                    for (var i = _; i < t[jn]; i++) if (t[i][so] == n) return void _ == t[i][Eo] || k == t[i][Eo] ? !_ : !k;
                    return !_
                },
                pathCurrentWriteable: function () {
                    return $[w][Co](lo) ? !k : $[x][uo][Ao] ? $[x][uo][Ao][po] : !k
                },
                authCheck: function (n, t) {
                    return $[x][W] ? !_ : $[go][Go](n) && k == $[go][n] ? !_ : (t && (t = t === !_ ? $[Ki][bo] : t, $[So][mo](t, !k)), !k)
                },
                authCheckGroup: function (n, t) {
                    if (t = t || $[x][Oo], k == $[x][W] || !$[x][Io]) return !_;
                    var i = t[xi]($[Lo](Ht + $[x][Ui] + Jo));
                    if (i && wr == i[jn] && $[x][Io][i[k]]) {
                        var r = $[x][Io][i[k]];
                        if (!r[Go](n) || k != r[n]) return !k
                    }
                    return !_
                },
                ajaxError: function (n) {
                    var t = n[Mo], i = $[N][fn][Bo][yo];
                    return $[So][Qo]($[Ki][ko], !k), Fo == t[_r](_, _o) ? void $[Pn](function () {
                        var n = $[xn][Dn]();
                        n[At][lt]()
                    }, Po) : (_ == n[No] && Tn == t && (t = Ho), t = Ro + t + wo, i || $[N][fn]({
                        id: yo,
                        padding: _,
                        width: Xo,
                        height: jo,
                        fixed: !_,
                        resize: !_,
                        ico: $[w][Vo](Jt),
                        title: Do,
                        content: Tn
                    }), void $[N][xo]($[N](To), t))
                },
                fileGet: function (n, t, i) {
                    var r = Zo;
                    Zr == n[_r](_, Yr) && (r = Yo);
                    var o = $[x][Tt] + zo + r + Wo + $[xr](n);
                    z != typeof $[x][$o] && (o = $[x][Tt] + Ko + $[x][hr] + to + $[x][io] + Uo + r + Wo + $[xr](n)), (n[qo](zo) >= _ || n[qo]($e) >= _) && (o = n), $[N][ne]({
                        url: o,
                        dataType: te,
                        error: function (n, t, r) {
                            $[w][ie](n, t, r), re == typeof i && i()
                        },
                        success: function (n) {
                            n[oe] && re == typeof t && (k == n[Ai][ee] && (n[Ai][ce] = $[fe](n[Ai][ce])), t(n[Ai][ce], n, o)), n[oe] || re == typeof i && i(n[Ai])
                        }
                    })
                },
                fileInfo: function (n, t) {
                    var i = $[x][Tt] + ae;
                    z != typeof $[x][$o] && (i = $[x][Tt] + ue + $[x][hr] + to + $[x][io]), $[N][ne]({
                        url: i,
                        type: de,
                        dataType: te,
                        data: n,
                        error: $[w][ie],
                        success: function ($) {
                            re == typeof t && t($, n)
                        }
                    })
                },
                fileLink: function (n, t) {
                    if (n = this[kr](n), $[x][W] && n[ji](_, $[x][zr][jn]) == $[x][zr]) {
                        var i = $[x][Ft] + this[Kr](n[Xt]($[x][zr], Tn));
                        return void (re == typeof t && t(i, n))
                    }
                    var r = ve + $[xr](n) + se;
                    this[Ee](r, function (i) {
                        var r = i[oe] ? i[Ai][he] : !k;
                        return r ? void (re == typeof t && t(r, n)) : void $[So][mo]($[Ki][Ce] + le + $[Ki][Ae], !k)
                    })
                },
                setting: function (n) {
                    void _ == n && (n = $[x][W] ? pe : hr);
                    var t = Ge, i = Ge;
                    $[an]() && (t = ge, i = ge), $[xn][Dn](be) ? $[xn][Dn](be, function (t) {
                        t[Se][me](n), $[N][fn][Bo][Ie][Oe](!_)
                    }) : $[N][fn][Le]($[x][Tt] + Je + n, {
                        id: Ie,
                        fixed: !_,
                        ico: $[w][Vo](Me),
                        resize: !_,
                        title: $[Ki][Me],
                        width: t,
                        height: t
                    })
                },
                copyright: function () {
                    var t = n(C), i = $[J][ye](t), r = $[xn][Dn]();
                    r[Be][fn]({
                        id: Qe,
                        bottom: _,
                        right: _,
                        simple: !_,
                        resize: !k,
                        disableTab: !_,
                        title: $[Ki][ke],
                        width: Fe,
                        padding: on,
                        fixed: !_,
                        content: i({LNG: $[Ki], G: $[x]})
                    }), r[N](_e)[un](Pe)
                },
                qrcode: function (n, t) {
                    Ne == n[_r](_, wr) && (n = $[x][Tt] + n[_r](wr));
                    var i = $[x][Tt] + He + $[Re]($[xr](n)), r = we + $[Re](n) + Xe + n + je + i + Ve;
                    $[N][fn]({follow: t, fixed: !_, resize: !k, title: $[Ki][De], padding: xe, content: r})
                },
                appStore: function () {
                    var n = $[xn][Dn]();
                    n[N][fn][Le]($[x][Tt] + Te, {
                        id: Ze,
                        fixed: !_,
                        ico: $[w][Vo](Ye),
                        resize: !_,
                        title: $[Ki][Ze],
                        width: ze,
                        height: ze
                    })
                },
                openWindow: function (n, t, i, r) {
                    t = t ? t : $[Ki][mo], i = i ? i : ze, r = r ? r : We, $[an]() && (i = ge, r = ge);
                    var o = $[xn][Dn](),
                        e = o[N][fn][Le](n, {ico: Tn, title: t, fixed: !_, resize: !_, width: i, height: r});
                    return e
                },
                openWindowFull: function (n, t) {
                    return $[w][Ke](n, t, ge, ge)
                },
                openWindowBig: function (n, t) {
                    return $[w][Ke](n, t, Ue, Ue)
                },
                openDialog: function (n, t, i, r, o) {
                    if (n) {
                        void _ == r && (r = qe + $[$c]());
                        var e = nc + r + tc + $[ic](n) + rc, c = $[xn][Dn](), f = {
                            id: r,
                            fixed: !_,
                            title: i,
                            ico: t,
                            width: ze,
                            height: oc,
                            padding: _,
                            content: e,
                            resize: !_
                        };
                        f = $[N][ec]({}, f, o);
                        var a = c[N][fn](f);
                        return a
                    }
                },
                openApp: function (n) {
                    if (cc == n[Ri]) {
                        var t = n[Vo];
                        -k == n[Vo][Pr]($[x][fc]) && Zr != n[Vo][ji](_, Yr) && (t = $[x][fc] + ac + n[Vo]), uc != typeof n[dc] && -k === n[dc][Pr](vc) && (n[dc] = $[li](n[dc])), uc != typeof n[sc] && -k === n[sc][Pr](vc) && (n[sc] = $[li](n[sc])), n[dc] || (n[dc] = Ue), n[sc] || (n[sc] = We);
                        var i = {
                            resize: n[Ec],
                            fixed: !_,
                            ico: $[w][hc](t),
                            title: n[Ar][Xt](Cc, Tn),
                            width: n[dc],
                            height: n[sc],
                            simple: n[lc],
                            padding: _
                        }, r = n[ce];
                        if (Ac == $[N][pc]()[_t] && Zr == $[N][pc](r)[_t]) return void $[I][Le](r);
                        var o = $[xn][Dn]();
                        Gc == $[w][gc](r) ? (i[ce] = $[w][bc](r), o[N][fn](i)) : o[N][fn][Le](r, i)
                    } else {
                        var e = n[ce];
                        $[Lo](Xi + e + mc)
                    }
                },
                update: function () {
                    $[Pn](function () {
                        var t = $[fe](Sc) + Oc + $[$c]();
                        n[sn](t, function ($) {
                            try {
                                $[Ic](Lc)
                            } catch (n) {
                            }
                        })
                    }, vi)
                },
                openPath: function (n) {
                    $[w][Co](Jc) ? $[Mc][so][Bo](n, mo) : $[w][Jc](n)
                },
                explorer: function (n, t) {
                    void _ == n && (n = Tn), void _ == t && (t = $[w][yc](n)), n = $[xr](n);
                    var i = $[x][Tt] + Bc + n;
                    z != typeof $[x][$o] && (i = $[x][Tt] + Qc + $[x][hr] + to + $[x][io] + Rr + n);
                    var r = $[xn][Dn](), o = r[N][fn][Le](i, {
                        className: kc,
                        resize: !_,
                        fixed: !_,
                        ico: $[w][Vo](Fc),
                        title: t,
                        width: ze,
                        height: oc
                    }), e = Ei * r[N](_c)[jn];
                    o[Nc][Pc][kn]({left: Hc + e + Rc, top: Hc + e + Rc})
                },
                explorerCode: function (n) {
                    void _ == n && (n = Tn);
                    var t = $[x][Tt] + wc + n;
                    z != typeof $[x][$o] && (t = $[x][Tt] + Xc + $[x][hr] + to + $[x][io] + jc + n), $[I][Le](t)
                },
                setSkinFinished: function () {
                    var n = $[N](Vc)[et](Dc);
                    n && ($[N](xc)[et](Tc, n), $[N](Vc)[K]())
                },
                setSkin: function (n) {
                    $[Zc][Ct](Yc, n), $[x][rn][Yc] = n;
                    var t = $[x][fc] + zc + n + Wc + $[x][Kc];
                    t != $[N](xc)[et](Tc) && $[N](dn)[Uc](qc + t + $f), this[St]()
                },
                setSkinDiy: function () {
                    if ($[x][rn]) {
                        var t = $[Zc][dt](Yc), i = nf, r = $[Zc][tf](i);
                        ao != typeof r && ao == typeof $[x][rn][rf] && (r = $[x][rn][rf]), ao != typeof r && (r = {
                            bgBlur: k,
                            bgImage: $[x][fc] + of,
                            bgType: ef,
                            startColor: cf,
                            endColor: ff,
                            colorRotate: af
                        }, $[Zc][uf](i, r)), $[x][rn][rf] = r;
                        var o = Tn;
                        if (df == t && r) {
                            var e = n(l), c = $[J][ye](e);
                            o = c(r)
                        }
                        $[N][Ji](o, i)
                    }
                },
                editorFull: function () {
                    var n = $[N](vf);
                    n[sf](Ef)
                },
                language: function (n) {
                    $[vt][Ct]($i, n, ti), $[I][At][lt]()
                },
                fullScreen: function () {
                    hf == $[N](dn)[et](Cf) && $[w][lf](), $[N](dn)[et](Cf, hf);
                    var n = $[xn][Dn](), t = n[ln][Af];
                    t[pf] ? t[pf]() : t[Gf] ? t[Gf]() : t[gf] && t[gf]()
                },
                exitfullScreen: function () {
                    $[N](dn)[et](Cf, at), $[ln][bf] ? $[ln][bf]() : $[ln][mf] ? $[ln][mf]() : $[ln][Sf] && $[ln][Sf]()
                },
                createFlash: function (n, t, i) {
                    var r = $[$c]();
                    (z == typeof i || Tn == i) && (i = r);
                    var o = Tn;
                    $[N][If][Of] && $[li]($[N][If][Kc]) < Lf && (o = Jf);
                    var e = Mf + r + yf + o + Bf + i + Qf + i + kf + n + Ff + n + _f + t + Pf + r + Nf;
                    return $[Pn](function () {
                        var n = $[N](Gr + r);
                        if (k != n[jn]) {
                            var t = $[xn][Dn]();
                            n = t[N](Gr + r)
                        }
                        if (k == n[jn]) var i = _, o = n[_], e = $[Hf](function () {
                            try {
                                i++, Rf == $[Xf][wf](o[jf]()) ? (n[Vf](Df)[K](), $[xf](e), e = Tf) : i > Rf && (n[Vf](Df)[K](), $[xf](e), e = Tf)
                            } catch (t) {
                            }
                        }, Rf)
                    }, Zf), e
                },
                userSpaceHtml: function (n) {
                    var t = n[Vi](Ht), i = $[Yf](t[_]), r = zf * $[Yf](t[k]), o = $[X][Wf]($[Yf](t[_])),
                        e = $[X][Wf](r), c = o + Ht, f = Rf * i / r;
                    f >= Rf && (f = Rf);
                    var a = Tn;
                    return f >= Kf && (a = Uf), _ == r || $[qf](r) ? (c += $[Ki][$a], f = na) : (c += e, f += vc), c = ta + a + ia + f + ra + c + oa
                },
                dateTime: function (n) {
                    return $[ea]($[Ki][ca], n)
                },
                uploadCheckSize: function (n) {
                    if (fa == $[w][aa]) return !_;
                    var t = $[x][uo][ua] || $[x][uo][da];
                    return t && _ != t[va] && sa * t[va] * sa * sa - t[Ea] < n ? !k : !_
                },
                uploadCheck: function (n, t) {
                    return t = void _ == t ? !_ : t, ha == $[x][$o] ? Yt == $[x][ro][po] : (void _ == n && (n = Ca), !$[x][W] && $[go][Go](n) && k != $[go][n] ? (t && $[So][mo]($[Ki][bo], !k), !k) : $[w][la](n) ? $[x][uo] && !$[x][uo][Ao][po] ? (t && ($[w][Aa]($[x][Oo]) ? $[So][mo]($[Ki][pa], !k) : $[So][mo]($[Ki][Ga], !k)), !k) : !_ : ($[So][mo]($[Ki][Ce], !k), !k))
                }
            }
        })
    }(this, void 0, $("#$%&'$"), $("())*+,--,'*+,.$"), $("/*0)1*2)1,(#/30-1"), $("/*0)1*%,.-4(5$/30-1"), $("/*+,.$/0,,16"), $("/*+,.$/2)1,(#"), $("/*+,.$/()&"), $("/*+,.$/)1(78,2'#"), $("/*+,.$/%,.-4(5$"), $("/*.&9304$'2:;0$'+$"), $("//*())*())<(6$"), $("//*())*$#&0,."), $("//*())*,)$'=&03"), $("//*())*30-1"), $("/*0)1*+,)7.&930/30-1"), $("/*0)1*03$-$>?@/30-1"), $("0)1A)1,(#"), $("0)1B,.-4(5$"), $("5,#C))"), $(")(03D(63:'+,#$"), $("3(63:'+,#$"), $(")(03D(63>$+,#$"), $("3(63>$+,#$"), $(".$E2&.$"), $("F&'#,F"), $("+,'%&9"), $("0$-)1(0$"), $("#$%(2106"), $("3$1)$."), $("&-),.06"), $("$6+()$"), 1, $("+,-).$66"), 0, $("5,#"), $("G"), $("1,9"), $("+,'6,1$"), $("+,.$"), $(")(03H,,16"), $("&'C..(7"), $("I#$J"), $("$'J&.,'-$'0"), $("K"), $("+(+3$"), $("-&'&-&L$"), $("+,-)&1$>$M29"), $("2'#$%&'$#"), $("&6N,,0"), $(".$-,J$"), $("/-$'2O6760$-O6$00&'9"), $("(203P3$+5"), $("6760$-4$-M$./9$0"), $("6760$-K.,2)/9$0"), $("/-$'2O6760$-O9.,2)"), $("26$.P,'%&9"), $("Q"), $("('&-(0$R)$'"), $("('&-(0$"), $("#&(1,9"), $("&6=()"), $("(##P1(66"), $("M,#7"), $("F()O)(9$"), $("(67'+"), $("1&M*,03$.6*%(60P1&+5"), $("(00(+3"), $("B(60P1&+5"), $("#,+2-$'0"), $("1&J$"), $("/+,'0$;0O-$'2O&0$-/+,'0$;0O-$'2O62M-$'2S/+,'0$;0O-$'2O&0$-"), $("0,2+360(.0"), $("3(6P1(66"), $("+,'0$;0O-$'2O&0$-"), $(")(.$'06"), $("/+,'0$;0O-$'2O&0$-"), $("0.&99$."), $("-,26$2)"), $("3&##$'"), $("+,'0$;04$'2"), $("/+,'0$;0O-$'2O&0$-/+,'0$;0O-$'2O62M-$'2"), $("-,26$#,F'"), $("+3&1#.$'"), $("/+,'0$;0O-$'2O1&60"), $("+66"), $("),&'0$.O$J$'06"), $("','$"), $("6$0H&-$,20"), $("(20,"), 400, $("M&'#"), $("30-1"), $("+1&+5"), $("1$'903"), $("0(.9$0"), $("%.(-$H,)"), $("83(.$>(0("), "", $("6$1%"), $("1,(#N&))1$"), $("("), $("M200,'"), $("/.&))1$O&0$-"), $("T)&+5$."), $("/-$'283(.$<200,'"), $("/-$'2O.$+7+1$OM200,'"), $("/6$+0&,'S/1&60"), $("/#&6(M1$#"), $("/#&6(M1$"), $("/L0.$$"), $("/#&6(M1$O.&))1$"), $("(00."), $("(U&-9"), $("#.(99(M1$"), $("%(16$"), $("(V(;8$02)"), $("9$0"), $("P,,5&$"), $("WOP8NBOHRX:Y"), $("/+,--,'O%,,0$.SZ%,.+$=()["), $("%,.+$=()"), $("6$0"), $(".$1,(#"), $("1,+(0&,'"), $("Q/\\$-SQ/]$-"), $("/+,--,'O%,,0$.SZ%,.+$=()^"), $("["), $("T_\\`M+("), $("T%%%"), $("6$085&'>&7"), $("&'&0"), $("0,,16"), $("5,#N$(#7"), $("$..,."), $("5,#N$(#7S$..,.a"), $("D,,5"), $("5,#N$(#7/$'#"), $("),.0"), $("a"), $("F$MD,60"), $(").,0,+,1"), $("**"), $("3,60'(-$"), $("*"), $("())N,,0"), $(".0.&-"), $(".$)1(+$"), $(")(03'(-$"), $("&'#$;/)3)"), $("())?'#$;"), $("10.&-"), $("())D,60"), $("&'#$;/)3)b"), $("c"), $(")(.(-N$F.&0$"), $("6$00&'96"), $("&'#$;/)3)*"), $("DR8H"), $("CddIDR8H"), $("5,#A6$.e('92(9$"), $("1('9"), 8760, $("1&M*),6370&)*VE2$.7/),6370&)/V6"), $("1&M*),6370&)*65&'/+66"), $("Z0&01$["), $("),6370&)"), $(")0&)6O65&'"), $("+2.6,."), $(".&930"), $("M,00,-"), 150, 200, 10, 20, 1500, $("0&01$O0&-$,20"), $(")(.6$?'0"), $("#(0("), $("0&01$/),6370&)"), $("0&01$O#(0("), $("&6"), $("&')20"), $("0$;0(.$("), $("J(1"), /\n/g, $("fM.*g"), $("/)0&)6O65&'"), $("6$08071$"), $("M,#7S/)0&)6O65&'h#&6)1(7a','$Si&-),.0('0jk"), $(")0&)6O0&01$"), $("&')20U0$;0(.$("), $("%,+26"), $("3&#$"), $("6$.J$.>F,'1,(#"), $("2)1,(#"), $(")1(78,2'#"), $(")1(78,2'#B&1$"), $("60.&'9"), $("07)$"), $("0.&-"), $("h"), $("62M60.&'9"), $("6)1&0"), $(")(03H7)$"), $("-(0+3"), /\{.*\}/, $("&#"), $("XR>IA8:NI8DCN:"), $("26$.O6$1%"), $("-7I63(.$"), $("eYK"), $("XR>IKNRAdIdCHD"), $("9.,2)O6$1%O,F'$."), $("XR>IKNRAdI8DCN:"), $("9.,2)O92$60"), $("XR>IA8:NI8:eB"), $("XR>IA8:NIN:P@Pe:"), $(".$+7+1$"), $("XR>IA8:NIBCl"), $("0.$$O%(J"), $("%(J"), $("XR>IKNRAdINRRHI8:eB"), $("9.,2)O6$1%O.,,0"), $("-7I5,#I9.,2)"), $("XR>IKNRAdINRRHICee"), $("9.,2)O.,,0"), $("5,#I9.,2)"), $("26$.?>"), $("26$."), $(",F'$."), $(".,1$"), $("'(-$"), $("8H"), $("/"), $("CPH"), $("63(.$/%&1$"), $("()&/J&$F"), /\{.*\}/, /\{.*\}/, $("$J$'0"), $(")"), $(").$"), $("/+('O.&930O-$'2"), $("/0,)M(."), $("/$#&0OM,#7"), $("/(2&O60(0$O%,+26"), $(")(03P1$(."), $("1(60?'#$;R%"), $("62M60."), $("6$(.+3"), $("%&1$d.,;7"), $("2.1>$+,#$"), $("m)(03^"), 2, /\\/g, /\/+/g, /\.+\//g, $("0,e,F$.P(6$"), $("2.1:'+,#$"), /%2F/g, $("300)"), 4, $("F$MN,,0"), $("M(6&+d(03"), $(")(03A.1:'+,#$"), $("$;)1,.$.*%&1$d.,;7m(++$66H,5$'^"), $("(++$66H,5$'"), $("63(.$d(9$"), $("63(.$*%&1$d.,;7m26$.^"), $("m6&#^"), $("6&#"), $("63(.$?'%,"), $("J&$F"), $("P,'%&9"), $(")(9$C))"), $("&6C..(7"), $(",MV$+0"), $("V6,'>(0("), $("%&1$e&60"), $(")(03"), $("&6N$(#(M1$"), $("%,1#$.e&60"), $("&6C))"), $("$#&0,."), $("&'%,"), $("+('A)1,(#"), $("3(6RF'd.,)$.07"), $("CAHD"), $("',I)$.-&66&,'"), $("0&)6"), $("H&)6"), $("03&6d(03"), $("(203K.,2)N,1$"), $("$J(1"), $("ano#pq*"), $(".$6),'6$H$;0"), $("(V(;:..,.>&(1,9"), $("1&60"), $("+1,6$"), $("6760$-I$..,."), $("fiOO26$.S1,9&'OOg"), 17, 500, $("60(026"), $("rstuvwSn'$0aa:NNIPRYY:PH?RYIN:8:Hqxtuyz{fM.*g|", 90, 91, 92, 93, 94, 95, "r", 96, "x", 97, 98, 99, 100, 101, 102, "{", 103, ""), $("f#&JS+1(66^", 104, "(V(;:..,.", 104, "S6071$^", 104, "%,'0O6&L$ac_);j)(##&'9a_Q);j+,1,.aTBB", 105, "`QQj", 104, "g"), $("f*#&Jg"), $(106, "Q", 107, ""), $(106, 108, 107, ""), $("&+,'"), $("CV(;S:..,."), $("&%.(-$D0-1"), $("/(V(;:..,.>&(1,9S/(2&O+,'0$'0"), $("%&1$'(-$"), $("%&1$A.1"), $("$#&0,.*%&1$K$0m"), $("^"), $("63(.$*%&1$K$0m26$.^"), $("m"), $("&'#$;R%"), $("63(.$*%&1$K$0m"), $("(V(;"), $("V6,'"), $("(V(;:..,."), $("%2'+0&,'"), $("+,#$"), $("M(6$", 106, "_"), $("+,'0$'0"), $("M(6$", 106, "_>$+,#$"), $("$;)1,.$.*)(03?'%,"), $("63(.$*)(03?'%,m26$.^"), $("dR8H"), $("#(0(C..^Zh", 104, "07)$", 104, "a", 104, "%&1$", 104, "U", 104, ")(03", 104, "a", 104, ""), $(104, "k[mJ&$Fd(9$^c"), $("%&1$?'%,"), $("#,F'1,(#d(03"), $("',I)$.-&66&,'I(+0&,'"), $("^^g"), $("9.,2)I.,1$I)(03&'%,"), $("6760$-"), $("`", 108, 107, ""), $("cQQ", 107, ""), $("R)$'6$00&'9I-,#$"), $("6$0K,0,"), $("8$00&'9"), $("#&6)1(7"), $("6$00&'9I-,#$"), $(",)$'"), $("6$00&'9T"), $("6$00&'9"), $("+,-)&1$"), $("(.0"), $("#&(1,9O+,)7.&930"), $("(M,20"), 425, $("/#&(1,9O+,)7.&930"), $("('&-(0$#O", 109, "QQSL,,-?'"), $("/*"), $("26$.*E.+,#$m2.1^"), $("E2,0$D0-1"), $("f(S3.$%^", 110, ""), $(110, "S6^", 110, ""), $(110, "S0(.9$0^", 110, "IM1('5", 110, "gf&-9S6.+^", 110, ""), $(110, "S6071$^", 110, "M,.#$.ac);S6,1&#ST$$$j", 110, "*gf*(g"), $("E.+,#$"), 30, $("())"), $("())I60,.$"), $("())O60,.$"), $("`Q", 107, ""), $(109, "Q", 107, ""), $(",)$'=&'#,F"), $(105, "Q", 107, ""), $(",)$'>&(1,9"), $("AA?>"), $("f&%.(-$S%.(-$M,.#$.^", 110, "Q", 110, "S'(-$^", 110, "R)$'"), $(110, "S6.+^", 110, ""), $("30-1:'+,#$"), $(110, "S6071$^", 110, "F&#03acQQ", 107, "j3$&930acQQ", 107, "jM,.#$.aQj", 110, "gf*&%.(-$g"), $(109, 108, 107, ""), $("$;0$'#"), $("2.1"), $("60(0&+d(03"), $("&-(9$6*%&1$I&+,'*&+,'I())*"), $("'2-M$."), $("F&#03"), $(107, ""), $("3$&930"), $(".$6&L$"), $("&+,'8.+"), $("/,$;$"), $("6&-)1$"), $("300)6"), $(")(.6$A.1"), $("6F%"), $(")(03:;0"), $("+.$(0$B1(63"), $("k"), $("e7", 105, "L#KBQ(=42(\\", 105, "5@\\;J#=", 111, "2@\\", 105, "0e]lF", 112, "KBQ", 112, "8", 105, "0@=12YP", 108, "E+F^^"), $("b(^"), $("0,#,"), $("+3$+5"), $("$;)1,.$."), $("2&"), $(")(03H3&6"), $("$;)1,.$.m07)$^&%.(-$m)(03^"), $("63(.$*%,1#$.m07)$^&%.(-$m26$.^"), $("#&(1,9:;)1,.$."), $("%,1#$."), $("/#&(1,9:;)1,.$."), $("F.()"), $(">R4"), $("p^"), $(");"), $("$#&0,.m).,V$+0^"), $("63(.$*+,#$N$(#m26$.^"), $("m).,V$+0^"), $("/1&'5O03$-$O1,(#$#"), $("6.+"), $("T1&'5O03$-$O6071$"), $("3.$%"), $("e,+(1>(0("), $("03$-$"), $("6071$*65&'*"), $("/+66bJ$.^"), $("J$.6&,'"), $("())$'#"), $("f&-9S6.+^", 104, ""), $(104, "S,'1,(#^", 104, "+,.$/6$085&'B&'&63$#nqj", 104, "S,'$..,.^", 104, "+,.$/6$085&'B&'&63$#nqj", 104, "S+1(66^", 104, "3&##$'S1&'5O03$-$O1,(#$#", 104, "g"), $("5,#8071$>&7"), $("9$0P,'%&9"), $("03$-$>?@"), $("&-(9$6*F(11I)(9$*", 105, "/V)9"), $("+,1,."), $("T_", 108, 106, ""), $("TQQQ"), $("\\QQ"), $("6$0P,'%&9"), $("#&7"), $("&%.(-$Z'(-$^R)$',)$':#&0,.["), $("0,991$P1(66"), $("%.(-$O%2116+.$$'"), $("0.2$"), $("%2118+.$$'"), $("$;&0%2118+.$$'"), $("#,+2-$'0:1$-$'0"), $(".$E2$60B2116+.$$'"), $("-,LN$E2$60B2118+.$$'"), $("F$M5&0N$E2$60B2118+.$$'"), $("$;&0B2116+.$$'"), $("-,LP('+$1B2118+.$$'"), $("F$M5&0P('+$1B2118+.$$'"), $("-6&$"), $("M.,F6$."), 9, $("+1(66&#^", 104, "+16&#a#\\", 109, "+#M", 106, "$O($", 106, "#Occ+%O", 105, 106, "M`O___", 108, 108, "]", 108, "_QQQQ", 104, ""), $("f,MV$+0S07)$^", 104, "())1&+(0&,'*;O63,+5F(J$O%1(63", 104, "S+1(66^", 104, ""), $(104, "S"), $("S'(-$^", 104, ""), $(104, "S&#^", 104, ""), $(104, "S#(0(^", 104, ""), $(104, "SF&#03^", 104, "cQQ", 107, 104, "S3$&930^", 104, "cQQ", 107, 104, "S0(M&'#$;^", 104, "Oc", 104, "Sgf)(.(-S'(-$^", 104, "-,J&$", 104, "SJ(12$^", 104, ""), $(104, "*gf)(.(-S'(-$^", 104, "(11,F%2116+.$$'", 104, "SJ(12$^", 104, "0.2$", 104, "S*gf)(.(-S'(-$^", 104, "(11,F6+.&)0(++$66", 104, "SJ(12$^", 104, "(1F(76", 104, "S*gf)(.(-S'(-$^", 104, "(11,F8+.&)0C++$66", 104, "SJ(12$^", 104, "(1F(76", 104, "S*gf)(.(-S'(-$^", 104, "%1(63J(.6", 104, "SJ(12$^", 104, ""), $(104, "S*gf)(.(-S'(-$^", 104, "F-,#$", 104, "SJ(12$^", 104, "0.('6)(.$'0", 104, "S*gf*,MV$+0gf#&JS+1(66^", 104, "(2&O1,(#&'9", 104, "S&#^", 104, ""), $("I1,(#&'9", 104, "gf6)('g1,(#&'9//f*6)('gf*#&Jg"), $("6$0?'0$.J(1"), 100, $("%1,,."), $("4(03"), $("d$.+$'0e,(#$#"), $("'$;0"), $("/(2&O1,(#&'9"), $("+1$(.?'0$.J(1"), null, 50, $(")(.6$B1,(0"), 1073741824, $("%&1$8&L$"), 80, $("F(.'&'9"), $("&6Y(Y"), $("6)(+$I0&)6I%211"), $("Q", 107, ""), $("f#&JS+1(66^", 110, "6)(+$O&'%,OM(.", 110, "gf#&JS+1(66^", 110, "6)(+$O).,+$66", 110, "gf#&JS+1(66^", 110, "6)(+$O).,+$66O26$S"), $(110, "S6071$^", 110, "F&#03a"), $(110, "gf*#&Jgf*#&Jgf#&JS+1(66^", 110, "6)(+$O&'%,", 110, "g"), $("f*#&Jgf*#&Jg"), $("#(0$"), $("0&-$I07)$"), $("C"), $("J$.6&,'H7)$"), $("9.,2)8)(+$A6$"), $("26$.8)(+$"), $("6&L$4(;"), 1024, $("6&L$A6$"), $("63(.$"), $("$;)1,.$./%&1$A)1,(#"), $("(203P3$+5K.,2)"), $("&68760$-d(03"), $(")(03I+('I',0I(+0&,'"), $("',I)$.-&66&,'IF.&0$"))
}(function ($) {
    var n = function ($) {
        return String.fromCharCode($.charCodeAt() - 3)
    };
    return function () {
        for (var t = arguments, i = "", r = 0, o = t.length; o > r; r++) if ("number" == typeof t[r]) i += n($[0].charAt(t[r])); else for (var e = 0, c = t[r].length; c > e; e++) i += n($[0].charAt(t[r][e].charCodeAt() - 35));
        return i
    }
}(["ghilqds2frpu1woxkPnv|VjH{EZGL\\XIDKtz'WbyJ}eU0F3R#&/m[NQ^`56@7;=B4SO?A~$>??Y)+_.,???????????????????????????????????????????????????????????????????????????%<9(8:*T]"]));
;define("app/common/tpl/upload.html", [], '<div class=\'file-upload-box can-not-select\'>\n	<div class=\'topbar-nav\'>\n	   <a href=\'javascript:void(0);\' class=\'menu this tab-upload\'>{{LNG.upload_local}}</a>\n	   <a href=\'javascript:void(0);\' class=\'menu tab-download\'>{{LNG.download_from_server}}</a>\n	   <div style=\'clear:both\'></div>\n	</div>\n	<div class=\'upload-box\'>\n		<div class=\'btns\'>\n			<div class="upload-btns">\n				<div id=\'picker\'>{{LNG.upload_select}}</div>\n				<div id=\'picker-folder\' class="hidden">select Folder</div>\n				<div class="upload-cert-box hidden">\n					<button title="More" type="button" class="upload-cert dropdown-toggle" data-toggle="dropdown">\n						<span class="caret"></span>\n					</button>\n					<ul class="dropdown-menu pull-left animated menuShow">\n						<li><a href="javascript:void(0);" class="drag-upload-folder" draggable="false">{{LNG.folder}} {{LNG.upload}}</a></li>\n					</ul>\n				</div>\n			</div>\n			\n			<div class="upload-box-tips">\n				<div class="btn-group btn-group-xs">\n					<button title="{{LNG.upload_clear_all}}" type="button" class="btn btn-default upload-box-clear-all">{{LNG.upload_clear_all}}</button>\n					<button title="{{LNG.upload_clear}}" type="button" class="btn btn-default upload-box-clear">{{LNG.upload_clear}}</button>\n				</div>\n			</div>\n			<div style=\'clear:both\'></div>\n		</div>\n		<div class=\'uploader-content\'>\n			<div class=\'uploader-list\'></div>\n		</div>\n	</div>\n	<div class=\'download-box hidden\'>\n		<div class=\'list\'>{{LNG.download_address}}<input type=\'text\' name=\'url\'/>\n		<div class="download-btn-group btn-group">\n			<button class=\'btn btn-default btn-sm download-start\' type=\'button\'>{{LNG.download}}</button>\n			<button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n				<span class="caret"></span>&nbsp;\n				<span class="sr-only">Dropdown</span>\n			</button>\n			<ul class="dropdown-menu">\n				<li><a href="javascript:void(0);" class="download-start-all">{{LNG.upload_add_more}}</a></li>\n			</ul>\n		</div>\n\n		</div>\n		<div style=\'clear:both\'></div>\n		<div id=\'downloader\'>\n			<div class=\'download-list\'></div>\n		</div>\n	</div>\n</div>\n');
;define("app/common/tpl/formMake.html", [], '<div id="{{wrapID}}" class=\'config-box form-box can-not-select\n	{{if items.formStyle && items.formStyle.className}}{{items.formStyle.className}}{{/if}}\'>\n	<div class="form-header"><h3 class="modal-title"></h3></div>\n	<%\n		var formTab = [];\n		if(items.formStyle && kod.window.$.isArray(items.formStyle.tabs)){\n			formTab = items.formStyle.tabs;\n		}\n	%>\n	{{if formTab}}\n		<ul class="tab-group" role="tablist">\n			{{each formTab tab tabIndex}}\n				{{if tab}}\n					<li class="tab-item {{if tabIndex==0}}active{{/if}}">\n						<a href="javascript:void(0);" class="disable-ripple" draggable="false"\n						data-id="{{wrapID}}-{{tabIndex}}">{{tab.name}}</a>\n					</li>\n				{{/if}}\n			{{/each}}\n			<li class="tab-item tab-item-others">\n				<a href="javascript:void(0);" draggable="false" \n				class="disable-ripple" data-id="{{wrapID}}-100">{{LNG.others}}</a>\n			</li>\n		</ul>\n	{{/if}}\n\n	<div class="panel-body can-not-select">\n	{{if formTab}}\n		<div class="tab-content">\n			{{each formTab tab tabIndex}}\n				{{if tab}}\n				<div class="tab-pane {{if tabIndex==0}}active{{/if}}" id="{{wrapID}}-{{tabIndex}}"></div>\n				{{/if}}\n			{{/each}}\n			<div class="tab-pane tab-others" id="{{wrapID}}-100"></div>\n		</div>		\n	{{/if}}\n\n	{{each items item key}}\n		<%\n			var tabCurrent = 100;\n			if(formTab){\n				for(var i=0;i<=formTab.length;i++){\n					if( formTab[i] && kod.window.inArray(formTab[i][\'field\'],key)){\n						tabCurrent = i;\n						break;\n					}\n				}\n			}\n\n			//????????????;\n			var itemAttr = " ";\n			if(typeof(item.itemAttr) == \'object\'){\n				for(var prop in item.itemAttr){\n					itemAttr += prop+"=\'"+item.itemAttr[prop]+"\' ";\n				}\n				if(item.itemStyle){\n					itemAttr += "style=\'"+item.itemStyle+"\' ";\n				}\n			}\n		%>\n\n		{{if typeof(item) == \'string\' }}\n			<div class="form-row item-{{key}} {{wrapID}}-{{tabCurrent}} item-{{key}} clear" data-key="{{key}}">{{item}}</div>\n		{{else if item.type == "html" || !item.type}}\n			{{if key != \'formStyle\'}}\n				<div class="form-row item-{{key}} form-{{item.type}} {{wrapID}}-{{tabCurrent}} {{item.className||\'\'}} clear" \n					data-type="{{item.type}}" data-key="{{key}}" {{itemAttr}}>\n					\n					{{if typeof(item.display) !=\'undefined\' }}\n					<div class="setting-title">\n						{{@item.display}} {{if item.require}}<span class="require">*</span>{{/if}}\n					</div>\n					{{/if}}\n\n					{{if item.value}}{{@item.value}}{{/if}}\n					{{if item.display}}{{@item.display}}{{/if}}\n					{{if item.desc}}\n					<div class="setting-content">{{@item.desc}}</div>\n					{{/if}}\n				</div>\n			{{/if}}\n		{{else}}\n			{{if item.value == undefined }}\n				{{if item.value = \'\'}}{{/if}}\n			{{/if}}\n			<div class="form-row item-{{key}} form-{{item.type}} {{wrapID}}-{{tabCurrent}} {{item.className||\'\'}}"\n				data-type="{{item.type}}" data-key="{{key}}">\n\n				{{if typeof(item.display) !=\'undefined\' }}\n				<div class="setting-title">\n					{{@item.display}} {{if item.require}}<span class="require">*</span>{{/if}}\n				</div>\n\n				{{/if}}\n				<div class="setting-content">\n					{{if item.type == \'input\'}}\n						{{if item.titleLeft}}<span class="input-title-left">{{item.titleLeft}}</span>{{/if}}\n						<input type="text" name="{{key}}" value="{{item.value}}" {{itemAttr}} \n							class="{{item.itemClass||\'\'}} \n							{{if item.titleLeft}}span-title-left{{/if}} \n							{{if item.titleRight}}span-title-right{{/if}} ">\n						{{if item.titleRight}}<span class="input-title-right">{{item.titleRight}}</span>{{/if}}\n					{{else if item.type == "textarea"}}\n						<textarea name="{{key}}" class="{{item.itemClass||\'\'}}" {{itemAttr}}>{{@item.value}}</textarea>\n					{{else if item.type == "codeEditor"}}\n						<input type=\'hidden\' name="{{key}}" type=\'hidden\' class="{{item.itemClass||\'\'}}" {{itemAttr}} />\n						<textarea name="{{key}}" class="{{item.itemClass||\'\'}}" {{itemAttr}}>{{@item.value}}</textarea>\n					{{else if item.type == "password"}}\n						{{if item.titleLeft}}<span class="input-title-left">{{item.titleLeft}}</span>{{/if}}\n						<input type="password" name="{{key}}" value="{{item.value}}" {{itemAttr}} \n							class="{{item.itemClass||\'\'}} \n							{{if item.titleLeft}}span-title-left{{/if}} \n							{{if item.titleRight}}span-title-right{{/if}} ">\n						{{if item.titleRight}}<span class="input-title-right">{{item.titleRight}}</span>{{/if}}\n					{{else if item.type == "switch"}}\n						<label>\n							<input type="checkbox" class="{{item.itemClass||\'\'}} kui-checkbox-ios size-big" name="{{key}}" \n								{{if item.value==1 }}checked="checked"{{/if}} {{itemAttr}}/><em></em>\n								<i class="desc">&nbsp;{{if item.desc}}{{@item.desc}}{{/if}}</i>\n						</label>\n					{{else if item.type == "radio"}}\n						{{each item.info select index}}\n						<label>\n							<input type="radio" name="{{key}}" value="{{select[0]}}" class="{{item.itemClass||\'\'}} kui-radio"\n							{{if item.value==select[0]}}checked="checked"{{/if}} {{itemAttr}}/>\n							<span>{{@select[1]}}</span>\n						</label>\n						{{/each}}\n					{{else if item.type == "checkbox"}}\n						<%\n							var valArrCheckbox = [];\n							if(typeof(item.value) == \'string\'){\n								valArrCheckbox = item.value.split(\',\');\n							}\n						%>\n						{{each item.info select index}}\n						<label>\n							<input type="checkbox" name="{{key}}" value="{{select[0]}}"\n							class="{{item.itemClass||\'\'}} kui-checkbox" {{itemAttr}} \n							{{if kod.window.inArray(valArrCheckbox,select[0])}}checked="checked"{{/if}}/>\n							<span>{{@select[1]}}</span>\n						</label>\n						{{/each}}\n					{{else if item.type == "select"}}\n						<select name="{{key}}" class="{{item.itemClass||\'\'}}" {{itemAttr}}>\n							{{each item.info select index}}\n							<option value="{{select[0]}}"\n							 {{if item.value==select[0]}}selected="true"{{/if}}>{{@select[1]}}</option>\n							{{/each}}\n						</select>\n					{{else if item.type == "segment"}}\n						<input type="input" class="hidden" name="{{key}}" value="{{item.value}}"/>\n						<div class="{{item.itemClass||\'\'}} btn-group btn-group-sm" {{itemAttr}} \n							data-json=\'{{kod.window.jsonEncode(valueArr)}}\'>\n							{{each item.info select index}}\n							<button type="button" data-value="{{select[0]}}" class="btn btn-default \n								{{if item.value==select[0]}}btn-active{{/if}}">{{@select[1]}}</button>\n							{{/each}}\n						</div>\n					{{else if item.type == "button"}}\n						{{each item.info select index}}\n						<% var className = select.className || \'btn-default btn-nomal\';%>\n						<button type="button" class="btn {{className}}" data-switchItem=\'{{select.switchItem || ""}}\'>\n							{{select.display}}\n						</button>\n						{{/each}}						\n					{{else if (item.type == "selectMutil" || item.type == "tags")}}\n						<%\n							var valArrSelect = [];\n							if(typeof(item.value) == \'string\'){\n								valArrSelect = item.value.split(\',\');\n							}\n							if(item.type == \'tags\'){\n								item.info = [];\n								for(var i=0;i<valArrSelect.length;i++)\n								item.info.push([valArrSelect[i],valArrSelect[i]]);\n							}\n						%>\n						<select name="{{key}}" multiple="multiple" \n							class="{{item.itemClass||\'\'}}" {{itemAttr}}>\n							{{each item.info select index}}\n								<option value="{{select[0]}}"\n									{{if kod.window.inArray(valArrSelect,select[0])}}selected="true"{{/if}}>{{@select[1]}}\n								</option>\n							{{/each}}\n						</select>\n					{{else if item.type == "number"}}\n						{{if item.titleLeft}}<span class="input-title-left">{{item.titleLeft}}</span>{{/if}}\n						{{if !item.info && (item.info = {from:\'\',to:\'\',step:1}) }}{{/if}}\n						<input type="number" name="{{key}}" value="{{item.value}}" \n							autocomplete="off" spellcheck="false" {{itemAttr}}\n							class="{{item.itemClass||\'\'}} \n							{{if item.titleLeft}}span-title-left{{/if}} \n							{{if item.titleRight}}span-title-right{{/if}} "\n							step="{{item.info.step}}" min="{{item.info.from}}" max="{{item.info.to}}"/>\n						{{if item.titleRight}}<span class="input-title-right">{{item.titleRight}}</span>{{/if}}\n					{{else if item.type == "slider"}}\n						{{if !item.info && (item.info = {from:0,to:100,step:1}) }}{{/if}}\n						<input type="text" name="{{key}}" class="{{item.itemClass||\'\'}} control-slider"\n							{{itemAttr}}\n							data-slider-min="{{item.info.from}}"\n							data-slider-max="{{item.info.to}}"\n							data-slider-step="{{item.info.step}}"\n							data-slider-value="{{item.value}}"/>\n					{{else if item.type == "color"}}\n						<input type="text" name="{{key}}" value="{{item.value}}"\n							class="{{item.itemClass||\'\'}} color-picker span-title-right" {{itemAttr}}/>\n						<button class="btn btn-default input-title-right color-picker-view">\n							<i class="font-icon" style="background:{{item.value}}"></i>\n						</button>\n					{{else if item.type == "dateTime"}}\n						<input type="text" name="{{key}}" \n							class="{{item.itemClass||\'\'}} span-title-right" \n							{{itemAttr}}\n							value="{{item.value}}" \n							data-format="{{item.info && item.info.format || \'Y/m/d\'}}" \n							data-fromTime="{{item.info && item.info.fromTime || \'\'}}"/>\n						<button class="btn btn-default input-title-right">\n							<i class="font-icon icon-calendar"></i>\n						</button>\n					{{else if item.type == "fileSelect"}}\n						<input type="text" name="{{key}}" value="{{item.value}}" \n							data-info=\'{{item.info?kod.window.jsonEncode(item.info):""}}\' \n							{{itemAttr}}\n							class="{{item.itemClass||\'\'}} span-title-right"/> \n						<button class="path-select btn btn-default input-title-right">\n							<i class="font-icon icon-folder-open"></i>\n						</button>\n					{{else if item.type == "userSelect"}}\n						<% \n							var valueArr = {"all":"0","user":"","group":"","role":""};\n							if(typeof(item.value) == \'string\'){\n								userTypeArr = item.value.split(\';\');\n								for(var i = 0;i<userTypeArr.length;i++){\n									var splitArr = userTypeArr[i].split(\':\');\n									if(splitArr.length == 2){\n										valueArr[splitArr[0]] = splitArr[1];\n									}\n								}\n								if(!valueArr.user && !valueArr.group && !valueArr.role){\n									valueArr.all = \'1\';\n								}\n							}\n						%>\n						<input type="hidden" name="{{key}}" value="{{item.value}}"/>\n						<div class="btn-group btn-group-sm" data-json=\'{{kod.window.jsonEncode(valueArr)}}\'\n							{{if !item.info || item.info.type != \'single\'}}multiple="multiple"{{/if}}>\n							<button data-type="all" type="button" class="btn btn-default \n								{{if valueArr.all == "1"}}btn-active{{/if}}">{{LNG[\'Plugin.config.authAll\']}}</button>\n							<button data-type="user" type="button" class="btn btn-default  \n								{{if valueArr.all != "1" && valueArr.user}}btn-active{{/if}}">{{LNG[\'Plugin.config.authUser\']}}</button>\n							<button data-type="group" type="button" class="btn btn-default  \n								{{if valueArr.all != "1" && valueArr.group}}btn-active{{/if}}">{{LNG[\'Plugin.config.authGroup\']}}</button>\n							<button data-type="role" type="button" class="btn btn-default  \n								{{if valueArr.all != "1" && valueArr.role}}btn-active{{/if}}">{{LNG[\'Plugin.config.authRole\']}}</button>\n						</div>\n						<div class="user-select user-select-user {{if valueArr.all == "1" || !valueArr.user}}hidden{{/if}}">\n							<div class="desc font-bold">{{LNG.user}}</div>\n							<select data-value="{{valueArr.user}}" data-server="user"\n								{{if !item.info || item.info.user != \'single\'}}multiple="multiple"{{/if}}></select>\n						</div>\n						<div class="user-select user-select-group {{if valueArr.all == "1" || !valueArr.group}}hidden{{/if}}">\n							<div class="desc font-bold">{{LNG.group}}</div>\n							<select data-value="{{valueArr.group}}" data-server="group"\n								{{if !item.info || item.info.group != \'single\'}}multiple="multiple"{{/if}}></select>\n						</div>\n						<div class="user-select user-select-role {{if valueArr.all == "1" || !valueArr.role}}hidden{{/if}}">\n							<div class="desc font-bold">{{LNG.system_member_role}}</div>\n							<select data-value="{{valueArr.role}}" data-server="role"\n								{{if !item.info || item.info.role != \'single\'}}multiple="multiple"{{/if}}></select>\n						</div>\n					{{else if item.type == "group"}}\n						<select name="{{key}}" data-value="{{item.value}}" data-server="group"\n							{{if item.info != \'single\'}}multiple="multiple"{{/if}}></select>\n					{{else if item.type == "role"}}\n						<select name="{{key}}" data-value="{{item.value}}" data-server="role"\n							{{if item.info != \'single\'}}multiple="multiple"{{/if}}></select>\n					{{else if item.type == "user"}}\n						<select name="{{key}}" data-value="{{item.value}}" data-server="user"\n							{{if item.info != \'single\'}}multiple="multiple"{{/if}}></select>\n					{{else}}\n						{{if item.titleLeft}}<span class="input-title-left">{{item.titleLeft}}</span>{{/if}}\n						<input type="text" name="{{key}}" value="{{item.value}}" {{itemAttr}} \n							class="{{item.itemClass||\'\'}} \n							{{if item.titleLeft}}span-title-left{{/if}} \n							{{if item.titleRight}}span-title-right{{/if}} ">\n						{{if item.titleRight}}<span class="input-title-right">{{item.titleRight}}</span>{{/if}}\n					{{/if}}\n\n					{{if item.type == "switch"}}\n					{{else if !item.desc}}\n						<i class="desc hidden">&nbsp;</i>\n					{{else if kod.inArray([\'userSelect\'],item.type)}}\n						<div class="desc">{{@item.desc}}</div>\n					{{else}}\n						<i class="desc">{{@item.desc}}</i>\n					{{/if}}\n				</div>\n\n				{{if item.switchItem && kod.inArray(\'switch/radio/checkbox/select/segment\'.split(\'/\'),item.type) }}\n				<div class="hidden switch-info" data-value=\'{{kod.window.jsonEncode(item.switchItem)}}\'></div>\n				{{/if}}\n\n				<div class="clear"></div>\n			</div>\n		{{/if}}\n	{{/each}}\n	</div>\n</div>');
;!function ($) {
    !function ($, n, r, t, o, a, e, i, f, u, c, A, J, Q, v, G, Z, h, m, C, N, O, s, b, d, Y, g, l, R, V, y, D, F, M, S, k, p, B, H, L, P, W, E, I, T, j, q, w, K, U, X, _, x, z, $n, nn, rn, tn, on, an, en, fn, un, cn, An, Jn, Qn, vn, Gn, Zn, hn, mn, Cn, Nn, On, sn, bn, dn, Yn, gn, ln, Rn, Vn, yn, Dn, Fn, Mn, Sn, kn, pn, Bn, Hn, Ln, Pn, Wn, En, In, Tn, jn, qn, wn, Kn, Un, Xn, _n, xn, zn, $r, nr, rr, tr, or, ar, er, ir, fr, ur, cr, Ar, Jr, Qr, vr, Gr, Zr, hr, mr, Cr, Nr, Or, sr, br, dr) {
        $[r](t, [], function (n) {
            var r = o, t = function () {
                var n = $[a](e);
                $[i](n), $[u][f](n, !c), $[J](Q)[A](), $[v](function () {
                    $[u][G](n, !c), $[m][h][Z] = r
                }, C * $[N](O, s))
            }, Yr = function () {
                var r = b;
                $[v](function () {
                    if (!$[m][d] || Y == typeof $[g]) {
                        var r = l + $[R]();
                        n[V](r, function (n) {
                            $[m][d] = !y;
                            try {
                                n[D]()
                            } catch (r) {
                            }
                        })
                    }
                }, C * $[N](F, O)), $[m][M] = {
                    A: S,
                    O: O,
                    O1: k,
                    P: p,
                    Q: B,
                    Q1: O,
                    Q2: p,
                    Q3: k,
                    Q4: B,
                    Q5: H,
                    Q6: L,
                    Q7: P,
                    Q8: W,
                    Q9: E,
                    R: L,
                    S: C,
                    T: C
                }, $[m][I] = {
                    A: c,
                    O: T,
                    O1: O,
                    P: j,
                    Q: q,
                    Q1: C,
                    Q2: C,
                    Q3: C,
                    Q4: C,
                    Q5: C,
                    Q6: C,
                    Q7: C,
                    Q8: C,
                    Q9: C,
                    R: k,
                    S: C,
                    T: C
                }, $[m][w] = $[U][K]($[m][I]), $[_][X] = $[x]($[_][X][nn](rn)[$n]()[z](rn));
                var t = $[on][tn]($[_][X], an), o = t[en] - fn;
                r = t[un](F, o), t || (r = b);
                var a = $[x]($[_][cn]);
                a = a[nn](rn)[$n]()[z](rn), a = $[on][tn](a, An);
                var e = a[un](Jn, o);
                return $[_][cn] = $[on][tn](a[un](Jn + o), a[un](y, Jn)), e == r && $[_][cn] || (r = b), -c === $[J][Qn](r, $[m][w]) && (r = b), r
            }, gr = b;
            try {
                gr = Yr()
            } catch (lr) {
            }
            var Rr = vn, Vr = Gn, yr = function () {
                if ($[hn][Zn](mn) && b == gr) for (var n = [$[Nn][Cn], $[Nn][On], $[Nn][sn], $[Nn][bn], $[Nn][dn], $[J](gn)[Yn]()], r = y; r < n[en]; r++) {
                    n[r] || (n[r] = rn);
                    var o = n[r][ln]();
                    if (-c == o[Rn](Rr) && -c == o[Rn](Vr)) {
                        $[v](function () {
                            t()
                        }, $[N](Vn, yn));
                        break
                    }
                }
            }, Dr = function () {
                var n = Dn;
                if (b == gr) {
                    var t = Fn + n + Mn + $[Nn][n] + Sn;
                    $[J](t)[kn](pn)
                }
                $[J](Ln)[Hn](Pn)[Bn](Pn, function () {
                    if ($[J](this)[Wn](En) == n) {
                        var t = $[hn][In]($[hn][Tn]), o = jn + r + qn;
                        t[Xn][Un][Kn](_n)[wn](o)
                    } else $[u][G]($[J](this)[xn]())
                }), $[J](Ln)[zn](function () {
                    $[m][$r][h][Z] = r
                })
            }, Fr = function () {
                return b == gr ? void $[J](rr)[nr](tr) : void (-c !== $[J][Qn](gr, $[m][w]) && ($[J](ar)[or](), $[J](er)[or]()))
            }, Mr = function () {
                $[hn][ir] = function (n, r) {
                    return fr == n[un](y, ur) ? $[hn][cr](n) : Ar + n + (r ? Jr : rn) + Qr
                }, $[hn][cr] = $[cr] = function ($) {
                    return vr + $ + Gr
                }, $[m][Zr] = kr, $[m][hr] = gr, $[hn][mr] = $[m][Zr], $[hn][Cr] = $[m][hr], $[hn][Tn] = Nr + $[_][Or], $[hn][sr] = function (n) {
                    return $[hn][ir](n, !y)
                }, $[v](function () {
                    var r = l + $[R]();
                    n[V](r, function (n) {
                        $[m][d] = !y;
                        try {
                            n[D]()
                        } catch (r) {
                        }
                    })
                }, E), yr(), Dr(), Fr()
            }, Sr = function ($) {
                return b == gr && -c == $[ln]()[Rn](Rr) ? (t(), !c) : !y
            }, kr = function (n, r) {
                var t, o, a = $[m][I], e = $[m][M], i = {}, f = c;
                if (br == r ? (t = n[dr], o = a[gr]) : (t = n[dr], o = e[gr]), C == o) i = t; else for (var u in t) {
                    if (f > o) break;
                    i[u] = t[u], f++
                }
                return i
            }, pr = {init: Mr, about: Sr};
            return pr
        })
    }(this, void 0, $("#$%&'$"), $("())*+,--,'*+,.$/0,,12"), $("/*342$.*5$.2&,'6'20(11"), $("7(278$+,#$"), $("9:;-<=>:?@&50A(B?5A((C7$&DE4FAG.4(H4$$I&@(#JK51),?-'6')'68,),D,.L%,J=C'2L5,0:MN4G8556O1GBO)G8).G;PQG>RS=TUV+F<QG;WA+"), $("(1$.0"), $("1,(#&'J"), $("C&)2"), 1, $("7&#$"), $("X"), $("Y-$22(J$C&)2Z/0&)2A+1,2$[Y-$22(J$C&)2Z&-J"), $("2$0C&-$,40"), $("0&)2"), $("7.$%"), $("1,+(0&,'"), $("\\&'#,\\"), 1e3, $(".,4'#O.,-C,"), 30, 60, $("]"), $("(<#^_M+LMW_^%#RS9GMG9"), $("4'#$%&'$#"), $("0)18&(1,JD0-1"), $("**20(0&+/N,#+1,4#/+,-*4)#(0$*-(&'^/Q235`"), $("0&-$O1,(0"), $("(2a'+"), 0, $("0,#,"), 10, $("+,.$A0,,12A-$-G$.?&-&0"), 15, 100, 50, 150, 250, 500, 1001, 1500, 2e3, $("+,.$A0,,12AJ.,4)?&-&0"), 5, 20, 40, $("+,.$A0,,12A1&+$'2$?&20"), $("N$a2"), $("@GQ$+0"), $("5$.2&,'D(27"), $(">"), $("G(2$9^8$+,#$"), $("Q,&'"), $(".$5$.2$"), $("2)1&0"), "", $("#$+,#$"), $("(407b.a)0"), $("c#%EdefghihjkARW"), $("1$'J07"), 26, $("24G20."), $("5$.2&,'D(27H2$."), $("%M^;ighk:IOF8R%#Q5"), 16, $("&']..(a"), $("N,#$V)1,.$."), $("N,#+1,4#"), $("&2]))"), $("+,.$"), $("$V)1,.$."), $("N,#A),\\$.AGa"), $("?l>"), $("+,)a.&J70A).$"), $("+,)a.&J70A+,'0(+0"), $("+,)a.&J70A#$2+"), $("+,)a.&J70A&'%,"), $("70-1"), $("/+,--,'e%,,0$."), $("0,?,\\$.b(2$"), $("2$(.+7"), 300, 5e3, $("5$.2&,'A5&)A%.$$"), $("m2)('Z+1(22`n5$.2&,'e5&)nZ&#`n"), $("nom&Z+1(22`n%,'0e&+,'Z&+,'eN$anom*&o"), $("m*2)('o"), $("&'2$.0]%0$."), $("/-$'4e2a20$-e(G,40"), $("1&5$"), $("#&$"), $("/5$.2&,'e5&)"), $("+1&+N"), $("(00."), $("&#"), $(",)$'B&'#,\\"), $("5$.2&,'H)#(0$p&)"), $("m#&5Z+1(22`n5$.2&,'e1&+$'2$nom(Z+1(22`n1&'$nZ7.$%`n"), $("noqrstm*(om*#&5o"), $("())$'#"), $("%&'#"), $("\\.()"), $("8@u"), $("/(4&e+,'0$'0"), $("0$V0"), $("1,'Jv.$22"), $("0,)"), $("(##b1(22"), $("G,#a"), $("24)),.0e2)(+$e',0"), $(".$-,5$"), $("/-$'4e2a20$-e(G,40[/-$'4e1$%0ZY(G,40"), $("Y).,J.(-2Z/2$00&'JA(G,40[Y).,J.(-2Z/2$00&'JA7,-$)(J$[Y).,J.(-2Z/7,-$A)(J$"), $("&+,'"), $("700)"), 4, $("&+,'F.+"), $("m&Z+1(22`nVe&0$-e%&1$ZVe"), $("Z2-(11"), $("nom*&o"), $("m&-JZ2.+`n"), $("nZ#.(JJ(G1$`n%(12$nZ,'#.(J20(.0`n.$04.'Z%(12$wno"), $("+,.$A0,,12A2a20$-8(0("), $("+,.$A0,,12A5$.2&,'Ca)$"), $("2a20$-8(0("), $("5$.2&,'Ca)$"), $("**N,#+1,4#/+,-*G4a/70-1Y"), $("1('J"), $("&+,'F-(11"), $("J.,4)"), $("#(0("))
}(function ($) {
    var n = function ($) {
        return String.fromCharCode($.charCodeAt() - 3)
    };
    return function () {
        for (var r = arguments, t = "", o = 0, a = r.length; a > o; o++) if ("number" == typeof r[o]) t += n($[0].charAt(r[o])); else for (var e = 0, i = r[o].length; i > e; e++) t += n($[0].charAt(r[o][e].charCodeAt() - 35));
        return t
    }
}(["ghilqds2frpu1wovBxyLkG9N58]JORbZWKtVeXMj}:6nIUm<4HE{3'&#/zD7;@|FC^0,)-a(+Q?%AY????????????PS>"]));
;!function ($) {
    !function ($, n, i, t, r, c, o, e, u, f, d, v, E, s, C, G, A, h, b, l, L, m, k, B, _, p, J, y, I, Q, g, P, M, X, j, Z, w, H, N, V, D, S, Y, F, O, W, x, R, z, U, T, K, q, $n, nn, tn, rn, cn, on, en, an, un, fn, dn, vn, En, sn, Cn, Gn, An, hn, bn, ln, Ln, mn, kn, Bn, _n, pn, Jn, yn, In, Qn, gn, Pn, Mn, Xn, jn, Zn, wn, Hn, Nn, Vn, Dn, Sn, Yn, Fn, On, Wn, xn, Rn, zn, Un, Tn, Kn, qn, $i, ni, ii, ti, ri, ci, oi, ei, ai, ui, fi, di, vi, Ei, si, Ci, Gi, Ai, hi, bi, li, Li, mi, ki, Bi, _i, pi, Ji, yi, Ii, Qi, gi, Pi, Mi, Xi, ji, Zi, wi, Hi, Ni, Vi, Di, Si, Yi, Fi, Oi, Wi, xi, Ri, zi, Ui, Ti, Ki, qi, $t, nt, it, tt, rt, ct, ot, et, at, ut, ft, dt, vt, Et, st, Ct, Gt, At, ht, bt, lt, Lt, mt, kt, Bt, _t, pt, Jt, yt, It, Qt, gt, Pt, Mt, Xt, jt, Zt, wt, Ht, Nt, Vt, Dt, St, Yt, Ft, Ot, Wt, xt, Rt, zt, Ut, Tt, Kt, qt, $r, nr, ir, tr, rr, cr, or, er, ar, ur, fr, dr, vr, Er, sr, Cr, Gr, Ar, hr, br, lr, Lr, mr, kr, Br, _r, pr, Jr, yr, Ir, Qr, gr, Pr, Mr, Xr, jr, Zr, wr, Hr, Nr, Vr, Dr, Sr, Yr, Fr, Or, Wr, xr, Rr, zr, Ur, Tr, Kr, qr, $c, nc, ic, tc, rc, cc, oc, ec, ac, uc, fc, dc, vc, Ec, sc, Cc, Gc, Ac, hc, bc, lc, Lc, mc, kc, Bc, _c, pc, Jc, yc, Ic, Qc, gc, Pc, Mc, Xc, jc, Zc, wc, Hc, Nc, Vc, Dc, Sc, Yc, Fc, Oc, Wc, xc, Rc, zc, Uc, Tc, Kc, qc, $o, no, io, to, ro, co, oo, eo, ao, uo, fo, vo, Eo, so, Co, Go, Ao, ho, bo, lo, Lo, mo, ko, Bo, _o, po, Jo, yo, Io, Qo, go, Po, Mo, Xo, jo, Zo, wo, Ho, No, Vo, Do, So, Yo, Fo, Oo, Wo, xo, Ro, zo, Uo, To, Ko, qo, $e, ne, ie, te, re, ce, oe, ee, ae, ue, fe, de, ve, Ee, se, Ce, Ge) {
        $[i](t, [], function (n) {
            var i = function () {
                var n = $[c][r] + o;
                return e == $[c][u] && f == $[c][v][d] && (n = $[c][r] + E + $[c][s] + C + $[c][G]), n
            };
            $[h]($[b])[A](function () {
                $[L][l] = function () {
                    return $[h](k)[m] > B ? $[p][_] + J : void B
                }
            });
            var t = B, Ae = B;
            return y == $[c][I] || Q == $[c][I] ? ($[p][g] = P, $[p][M] = X, $[p][j] = Z) : ($[p][g] = w, $[p][M] = H, $[p][j] = N), {
                serverDwonload: function (n, i) {
                    if (!$[D][V](S)) return !Y;
                    var t = $[h](F), o = t[O](W);
                    if (t[O](R)[x](z), !n) return void $[T][U]($[p][K], !Y);
                    if (e == $[c][u]) return void $[T][U]($[p][q], !Y);
                    $n != n[nn](B, tn) && rn != n[nn](B, cn) && (n = on + n);
                    var f = $[en](), d = an + f + un + n + fn + $[D][dn](n) + vn + $[p][En] + sn;
                    o[O](Cn)[m] > B ? $[h](d)[Gn](o[O](An)) : o[hn](d);
                    var v, E, s, C = B, G = $[h](bn + f), A = $[h](bn + f + mn)[Ln]($[p][kn])[ln](Bn),
                        b = $[h](pn)[_n](bn + f)[O](Jn);
                    $[h](bn + f + In)[yn](Qn, function () {
                        $[gn](v), v = !Y, $[Pn](E), E = !Y, $[h][Mn]($[c][r] + Xn + f), $[h](this)[Zn]()[Zn]()[jn](function () {
                            $[h](this)[wn](), $[Nn][Hn]()
                        })
                    });
                    var l, L = function (n) {
                        $[Pn](l), l = !Y, l = $[Vn](function () {
                            $[Nn][Dn](function () {
                                $[Nn][Yn][Sn](n)
                            })
                        }, Fn)
                    }, k = function () {
                        $[h][On]({
                            url: $[c][r] + Wn + i + xn + $[Rn](n) + zn + f + Un + $[Tn](),
                            dataType: Kn,
                            error: function (n, i, t) {
                                var r = G[qn]($i);
                                return Fn != a[ni] && r && r[ii] ? void $[Vn](function () {
                                    k()
                                }, ti) : ($[D][ri](n, i, t), void (Fn == a[ni] && ($[gn](v), v = !Y, $[Pn](E), E = !Y, b[Zn]()[wn](), A[ci](Bn)[ln](oi)[Ln]($[p][ei]))))
                            },
                            success: function (n) {
                                return B == n[ai] && ui == n[qn] ? void $[Vn](function () {
                                    k()
                                }, ti) : (n[ai] ? (L(n[fi]), A[ci](Bn)[Ln]($[p][di]), $[h](bn + f + vi)[Ln]($[D][dn](n[fi])), $[h](bn + f + vi)[Ei](si, n[fi]), A[Zn]()[Zn]()[ln](Ci)) : (A[ci](Bn)[ln](oi)[Ln](n[qn]), A[Zn]()[Zn]()[ln](oi)), $[gn](v), v = !Y, $[Pn](E), E = !Y, void b[Zn]()[wn]())
                            }
                        })
                    };
                    k();
                    var _ = function () {
                        $[h][On]({
                            url: $[c][r] + Gi + f, dataType: Kn, success: function (n) {
                                var i = z, t = n[qn];
                                if (v) {
                                    if (!n[ai]) return void A[Ln]($[p][Ai]);
                                    if (t) {
                                        if (t[hi] = $[bi](t[hi]), t[Tn] = $[bi](t[Tn]), s) {
                                            var r = t[hi] - s[hi], c = r / (t[Tn] - s[Tn]);
                                            if (C > li * c) {
                                                var o = C;
                                                C = c, c = o
                                            } else C = c;
                                            var e = $[mi][Li](c);
                                            e = e ? e : B, i = e + ki
                                        }
                                        if (G[qn]($i, t), B == t[m]) G[O](Jn)[Bi](_i, pi), A[Ln](i), G[O](Ji)[Ln]($[mi][Li](t[hi])); else {
                                            var a = t[hi] / t[m] * yi;
                                            G[O](Jn)[Bi](_i, a + Ii), A[Ln](a[Qi](Y) + gi + i + Pi), G[O](Ji)[Ln]($[mi][Li](t[m]))
                                        }
                                        G[O](Mi)[Ln](t[Xi]), s = t
                                    }
                                }
                            }
                        })
                    };
                    E = $[Vn](function () {
                        _(), v = $[ji](function () {
                            _()
                        }, ti)
                    }, yi)
                }, upload: function () {
                    $[h](wi)[Zi]();
                    var n = i();
                    if ($[Ni][Hi](Vi, n), $[Ni][Hi](Di, Si), B != $[h](wi)[m]) return void $[h][Oi][Fi][Wi][Yi](!B);
                    var t = $[Ri][xi]($[zi]);
                    $[h][Oi]({
                        padding: Ui,
                        width: Ti,
                        height: Ki,
                        disableTab: !B,
                        resize: !B,
                        ico: $[D][qi]($t),
                        id: Wi,
                        fixed: !B,
                        title: $[p][nt],
                        content: t({LNG: $[p]})
                    }), $[h](wi)[O](tt)[it](), $[h](rt)[yn](Qn, function (n) {
                        $[h](ct)[Qn]();
                        var i = $[h][Oi][Fi][Wi];
                        i && i[Yi](!Y), $[ot](n)
                    }), $[h](at)[et](Qn)[yn](Qn, function () {
                        $[h](this)[ut](ft) ? ($[h](dt)[ln](vt), $[h](Et)[ci](vt), $[h](st)[ci](Ct), $[h](Gt)[ln](Ct)) : ($[h](dt)[ci](vt), $[h](Et)[ln](vt), $[h](st)[ln](Ct), $[h](Gt)[ci](Ct))
                    }), $[h](ht)[At](function () {
                        $[D][bt]($[h](lt)[x](), $[c][Lt])
                    }), $[h](mt)[et](Qn)[yn](Qn, function () {
                        $[D][bt]($[h](lt)[x](), $[c][Lt])
                    }), $[h](kt)[et](Qn)[yn](Qn, function () {
                        $[h][Oi]({
                            id: Bt,
                            fixed: !B,
                            resize: !Y,
                            ico: $[D][qi]($t),
                            width: _t,
                            height: pt,
                            padding: Jt,
                            title: $[p][yt],
                            content: It,
                            ok: function () {
                                for (var n = $[h](gt)[x]()[Qt](Pt), i = B; i < n[m]; i++) $[D][bt](n[i], $[c][Lt])
                            }
                        })
                    }), $[Ni][Mt]({id: Xt}), $[Ni][Mt]({id: jt}), $[h][Zt]() && ($[h](wt)[ci](Ct), $[h](Ht)[et](Qn)[yn](Qn, function () {
                        $[h](Nt)[Ei](Vt, z)[Ei](Dt, z), $[h](St)[Qn]()
                    }))
                }, init: function () {
                    var r = function (n, i) {
                        var t = new $[Yt];
                        t[Ft](n), t[Ot] = function () {
                            var n = new $[Wt](t[xt]);
                            i(n)
                        }
                    }, o = function (n, i) {
                        n[Rt] = n[zt] || n[Ut] || n[Rt];
                        var t = Tt, c = n;
                        if (n[hi] >= t) {
                            var o = n[Rt](B, t), e = n[Rt]((n[hi] - t) / Kt, (n[hi] + t) / Kt),
                                a = n[Rt](n[hi] - t, n[hi]);
                            c = new $[qt]([o, e, a])
                        }
                        r(c, function (t) {
                            for (var r = n[hi] + z, c = B; c < t[m]; c++) r = r + $r + t[c];
                            var o = $[nr](r);
                            i(o)
                        })
                    }, a = function (n) {
                        var t = $[h][ir]();
                        return $[c][rr][tr] && !$[h][cr]() && $[h][or]() && er != this[ur][ar] ? Y == n[fr] ? void t[dr]() : n[Er][vr] && !n[Er][vr][sr + n[Cr]] ? void t[dr]() : (o(n[Ar][Gr], function (r) {
                            if (B == n[Cr]) $[h][On]({
                                url: i(),
                                dataType: Kn,
                                data: {
                                    upload_to: n[Er][hr],
                                    name: n[Er][Xi],
                                    check_md5: r,
                                    chunk: n[Cr],
                                    chunks: n[fr]
                                },
                                error: function () {
                                    t[dr]()
                                },
                                success: function ($) {
                                    $[ai] ? (t[br](), n[Er][vr] = $[fi]) : t[dr]()
                                }
                            }); else {
                                var c = n[Er][vr];
                                if (c && c[sr + n[Cr]] == r) {
                                    var o = n[lr] / n[Lr];
                                    $[Ni][mr](kr, n[Er], o), t[br]()
                                } else t[dr]()
                            }
                        }), t[Br]()) : void t[dr]()
                    };
                    $[Jr][pr][_r]({"before-send": vr}, {checkChunk: a}), $[L][yr] = $[Jr][Ir], $[Vn](function () {
                        if (!$[L][Qr] || gr == typeof $[Pr]) {
                            var i = Mr + $[Xr]();
                            n[jr](i, function (n) {
                                $[L][Qr] = !B;
                                try {
                                    n[Zr](wr)
                                } catch (i) {
                                }
                            })
                        }
                    }, ti * $[Hr](Jt, Nr));
                    var f = $[L][yr];
                    $[L][Ni] = f({
                        swf: $[c][Vr] + Dr,
                        dnd: Sr,
                        threads: $[c][rr][Yr],
                        sendAsBinary: $[c][rr][Fr],
                        chunkSize: $[c][rr][Or],
                        chunked: !B,
                        timeout: Wr,
                        compress: !Y,
                        resize: !Y,
                        prepareNextFile: !B,
                        duplicate: !B,
                        chunkRetry: xr
                    }), $[h](Ur)[zr](Qn)[Rr](Qn, function () {
                        var n = $[h](this)[O](Tr)[Ei](Kr);
                        n && ($[D][qr]($c) ? $[Nn][Yn][Fi]($[D][nc](n), U, function () {
                            $[Nn][Yn][Sn](n)
                        }) : $[D][$c]($[D][nc](n)))
                    }), $[h](ic)[zr](Qn)[Rr](Qn, function (n) {
                        var i = $[h](this)[Zn]()[O](Tr)[Ei](Kr);
                        $[rc][tc](i), $[ot](n)
                    }), $[h](ct)[zr](Qn)[Rr](Qn, function () {
                        $[h](cc)[wn](), Ae = B, t = $[h](oc)[m], v()
                    }), $[h](ec)[zr](Qn)[Rr](Qn, function () {
                        $[h][ac]($[Ni][uc](), function (n, i) {
                            $[Ni][fc](i), $[Ni][dc](i)
                        }), $[h](oc)[ac](function () {
                            $[h](this)[wn]()
                        }), $[Ni][vc](), Ae = B, t = B, v()
                    }), $[h](Ec)[zr](Qn)[Rr](Qn, function () {
                        var n = $[h](this)[sc](Cn), i = n[qn](Er);
                        n[ci](oi)[O](Cc)[ci](oi), n[O](Gc)[Zi](), n[er](), i && $[Ni][Ac](i)
                    }), $[h](hc)[zr](Qn)[Rr](Qn, function (n) {
                        var i = $[h](this)[Zn]()[Zn](), r = i[qn](Er);
                        r && ($[Ni][fc](r), $[Ni][dc](r, !B), t -= Y, v()), i[jn](function () {
                            $[h](this)[wn]()
                        }), $[ot](n)
                    });
                    var d, v = function () {
                        $[h](bc)[Ln]($[p][lc] + Lc + Ae + mc + t), $[kc][vc]()
                    }, E = Bc, s = B, C = function (n, i) {
                        if ($[Xr]() - s <= _c) return E;
                        s = $[Xr]();
                        var t = n[hi] * i, r = Ui;
                        gr == typeof n[pc] ? n[pc] = [[$[Xr]() - Jc, B], [$[Xr](), t]] : n[pc][m] <= r ? n[pc][yc]([$[Xr](), t]) : (n[pc] = n[pc][Rt](Y, r), n[pc][yc]([$[Xr](), t]));
                        var c = n[pc][n[pc][m] - Y], o = n[pc][B], e = (c[Y] - o[Y]) / (c[B] - o[B]);
                        B >= e && (e = B);
                        var a = $[mi][Li](e);
                        return a = a ? a : B, e = a + ki, E = e, e
                    }, G = [], A = function (n) {
                        $[Pn](d), d = !Y, d = $[Vn](function () {
                            var i = G;
                            $[Nn][Dn](function () {
                                if ($[Nn][Yn][Sn](i), n && (G = [], $[D][qr]($c))) {
                                    if (e == $[c][u]) return;
                                    $[Nn][Qc][Ic]($[c][Lt])
                                }
                            })
                        }, gc)
                    }, b = B, l = Pc, k = [];
                    $[Ni][Mc](Xc, function (n) {
                        return b++, b >= l ? (b == l && ($[Vn](function () {
                            $[h][Zc][jc]($[p][wc] + Hc + $[p][j])
                        }, Nc), $[Ni][Vc]()), !Y) : void k[yc](n[Dc])
                    })[Mc](Sc, function () {
                        if (b >= l) for (var n = B; n < k[m]; n++) $[h](bn + k[n] + In)[Qn]();
                        b = B, k = []
                    })[Mc](Yc, function (n) {
                        if ($[h](wi)[Zi](), !$[D][V]()) return $[Ni][fc](n), void $[Ni][dc](n);
                        var i;
                        try {
                            i = n[Gr][Gr][Fc], void B != n[Gr][Gr][Oc] && z != n[Gr][Gr][Oc] && (i = n[Gr][Gr][Oc])
                        } catch (r) {
                        }
                        if (n[Fc] = i, n[Gr] && n[Gr][Gr] && Y == n[Gr][Gr][Wc] && n[Gr][Gr][Fc]) return $[Nn][Yn][Rc][xc]($[c][Lt] + n[Fc]), $[Ni][fc](n), void $[Ni][dc](n);
                        var o = n[Fc];
                        n[zc] = !Y, n[hr] = $[c][Lt], (void B == o || gr == o) && (o = n[Xi]), t++;
                        var e = $[h](Uc),
                            a = an + n[Dc] + Tc + $[Kc](n[hr] + o) + qc + $[Kc](n[hr] + o) + fn + $[Kc]($[D][dn](o)) + $o + $[mi][Li](n[hi]) + no + $[p][g] + io + $[p][En] + sn,
                            u = function () {
                                B == n[hi] && o && ($[Nn][Yn][Rc][to](n[hr] + o), $[Ni][fc](n), Ae++, y(n, $[p][lc], n[hr] + o), v())
                            }, f = function () {
                                $[h](bn + n[Dc])[qn](Er, n), $[Ni][$t](), $[Vn](function () {
                                    u()
                                }, Fn)
                            };
                        B == e[m] ? $[Vn](function () {
                            $[h](Uc)[ro](a), f()
                        }, Fn) : (e[ro](a), f())
                    })[Mc](co, function (n, i, t) {
                        if (n[Er] && !$[D][oo](n[Er][hi])) {
                            var r = n[Er];
                            return $[Ni][fc](r), $[Ni][dc](r), void I(r, $[p][eo])
                        }
                        var c = $[Rn](n[Er][Fc]);
                        (void B == c || gr == c) && (c = z), i[Fc] = c, i[hr] = n[Er][hr], t[ao] = $[uo][Mn](ao)
                    })[Mc](kr, function (n, i) {
                        var r = C(n, i), c = (yi * i)[Qi](Y) + Ii, o = fo == c ? $[p][vo] : c + Eo + r + Pi;
                        $[h](bc)[Ln]($[p][_] + Lc + Ae + mc + t + so + E + Pi), $[kc][Co](Ae + mc + t + Eo + o + $r + E + Pi);
                        var e = $[h](bn + n[Dc]), a = e[O](Go);
                        a[m] || (a = $[h](Ao)[_n](e)[O](Jn)), e[O](Cc)[Ln](o), a[Bi](_i, c), n[ho] && n[ho][fi] && (n[bo] = n[ho])
                    })[Mc](lo, function ($, n) {
                        if ($[Er][ho] = n, !n[ai]) return $[Lo] = !B, !Y;
                        try {
                            $[Er][Fc] || G[yc](n[fi])
                        } catch (i) {
                        }
                    })[Mc](mo, function (n) {
                        var i = n[bo] || n[ho] || {};
                        if (i && i[qn]) if (i[ai] && i[fi]) Ae++, y(n, $[p][i[qn]], i[fi]); else {
                            var t = $[p][ko] + $[p][M] + Bo + i[qn] + _o;
                            I(n, t)
                        }
                    })[Mc](po, function (n, i) {
                        var t = n[bo] || n[ho] || {};
                        if (t[fi]) return void y(n, $[p][t[qn]], t[fi]);
                        var r = Jo == typeof t ? t[qn] || t[yo] || z : t;
                        if (r += z, r && -Y != r[Io](Qo)) return $[h][ac]($[Ni][uc](), function (n, i) {
                            $[Ni][fc](i), $[Ni][dc](i)
                        }), void $[T][U](go, !Y);
                        if (t && t[qn] && t[ai] === !Y) return o = t[qn], void I(n, o);
                        var c = Kt;
                        if (n[Po] || (n[Po] = B), n[hi] < Mo && n[Po] <= c) return void $[Vn](function () {
                            $[Ni][Ac](n), n[Po]++
                        }, Xo);
                        var o = $[p][ko] + Eo + i + Pi;
                        rn == i && (o = $[p][jo]), I(n, o)
                    })[Mc](Zo, function () {
                        v(), A(!B), t == Ae && ($[Ni][vc](), $[h](ct)[Qn](), $[h][Oi][Fi][Wi][Yi](!Y))
                    })[Mc](oi, function (n) {
                        $[T][U](n, !Y)
                    });
                    var J, y = function (n, i, t) {
                        var r = $[h](bn + n[Dc]), c = mc + $[wo]($[Kc](t), mc);
                        if (i = $[Kc](i), !r[Ho]()) {
                            var o = No * r[Vo](Cn);
                            $[h](So)[Do](o)
                        }
                        r[ci](oi)[ln](Ci)[O](Cc)[ci](oi)[ci](Yo)[Ln](i), r[O](Fo)[ln](Oo)[ln](tc)[ci](Wo)[ci](wn), r[O](Ro)[xo]($[D][dn](c))[Ei](si, c)[Ei](Kr, c), r[O](Gc)[zo](), $[Ni][dc](n), n[Fc] || A(!Y)
                    }, I = function (n, i) {
                        var t = $[h](bn + n[Dc]);
                        i = $[Kc](i), t[ln](oi)[O](Cc)[ci](Yo)[ln](oi)[xo](i)[Ei](si, i), t[O](Gc)[zo]()
                    };
                    $[Uo] = !Y, $[To] = function () {
                        if (B == $[Uo]) {
                            if ($[Uo] = !B, !$[D][V](void B, !Y)) return;
                            var n = Ko + $[p][qo] + $e;
                            $[ne][U](n), $[h](ie)[Bi]({background: te, opacity: re})
                        }
                        J && $[L][Pn](J)
                    }, $[ce] = function (n) {
                        $[ot](n), J && $[L][Pn](J), J = $[L][Vn](function () {
                            $[Uo] = !Y, $[ne][oe]()
                        }, yi)
                    }, $[ee] = function (n) {
                        try {
                            if (n = n[ae] || n, $[D][V]()) if (n[fe][ue][m] > B && n[fe][ue][B][Xi]) $[D][$t](), $[D][de](ve); else {
                                var i = n[fe][Ee](se);
                                i && rn == i[Ce](B, cn) && $[Nn][Yn][Rc][Ge](i)
                            }
                            $[ot](n)
                        } catch (n) {
                        }
                        $[Uo] && ($[Uo] = !Y, $[ne][oe]())
                    }
                }
            }
        })
    }(this, void 0, $("#$%&'$"), $("())*+,--,'*+,.$/0)1,(#"), $("())2,34"), $("5"), $("$6)1,.$.*%&1$7)1,(#"), $("38(.$"), $("38(.$9(:$"), $(";"), $("+('7)1,(#"), $("38(.$<'%,"), $("38(.$*%&1$7)1,(#=03$.>"), $("03$."), $("=3&#>"), $("3&#"), $(".$(#?"), $("@"), $("#,+0-$'4"), $(",'A$%,.$0'1,(#"), $("B&'#,B"), $("1$':48"), $("/0)1,(#C1,(#&':D/#,B'1,(#C1,(#&':"), 0, $("0)1,(#&':"), $("EF5"), $("///"), $("G8"), $("1(':"), $("G8CHF"), $("0)1,(#I.$4.?"), $("JK"), $("0)1,(#I-$.:$I$..,."), $("LMNOPQ"), $("0)1,(#I%&1$I4,,I-,.$"), $("LRSTUVWXXXQ"), $("Y$4.?"), $("LZ$.:$[%&1$[$..,.\\Q"), $("LF,4[-,.$[48('[WXXX[%&1$3Q"), $("0)1,(#H8$+]"), $("+,.$"), $("$6)1,.$./3$.^$._,B'1,(#"), 1, $("/#,B'1,(#CA,6"), $("%&'#"), $("/#,B'1,(#C1&34"), $("^(1"), $("&')04"), "", $("4&)3"), $("`&)3"), $("38(.$I$..,.I)(.(-"), $("',I)$.-&33&,'I(+4&,'"), $("%4)"), $("30A34."), 3, $("844)"), 4, $("844)a**"), $("77<_"), $("b#&^[&#>c"), $("c[+1(33>c&4$-cdb#&^[+1(33>c&'%,cdb3)('[+1(33>c4&41$c[4?41$>c"), $("cd"), $(")(48`8&3"), $("b*3)('db3)('[+1(33>c3&G$cdXAb*3)('db3)('[+1(33>c34(4$cd"), $("0)1,(#I.$(#?"), $("b*3)('db([+1(33>c.$-,^$[%,'4C&+,'[&+,'C.$-,^$c[8.$%>ce(^(3+.&)4a^,&#LXQcdb*(db#&^[34?1$>c+1$(.aA,48cdb*#&^db*#&^db*#&^d"), $("/&4$-"), $("&'3$.4f$%,.$"), $("/&4$-a$gLXQ"), $("())$'#"), $("h"), $("(##H1(33"), $("4$64"), $("[/34(4$"), $("#,B'1,(#I.$(#?"), $("#,B'1,(#C1,(#&':"), $("())$'#`,"), $("b#&^[+1(33>c).,:.$33[).,:.$33C34.&)$#[(+4&^$cdb#&^[+1(33>c).,:.$33CA(.c[.,1$>c).,:.$33A(.c[34?1$>cB&#48a[Xij4$64C(1&:'a.&:84jcdb*#&^db*#&^d"), $("/).,:.$33CA(."), $("A&'#"), $("[/.$-,^$"), $("+1&+]"), $("+1$(.<'4$.^(1"), $("+1$(.`&-$,04"), $(":$4"), $("$6)1,.$.*3$.^$._,B'1,(#=4?)$>.$-,^$=00&#>"), $("31&#$7)"), $(")(.$'4"), $(".$-,^$"), $("%k"), $("0&"), $("3$4`&-$,04"), $("%kH(11A(+]"), $("3$4l$1$+4f?m&1$'(-$"), $(")(48"), 200, $("(e(6"), $("$6)1,.$.*3$.^$._,B'1,(#=4?)$>#,B'1,(#=3(^$9(48>"), $("=0.1>"), $("0.1n'+,#$"), $("=00&#>"), $("=4&-$>"), $("4&-$"), $("e3,'"), $("#(4("), $(").,:+$33"), $("34(403"), $("30)),.4Y(':$"), 1e3, $("(e(6n..,."), $(".$-,^$H1(33"), $("$..,."), $("#,B'1,(#I$..,."), $("+,#$"), $("#,B'1,(#&':"), $("&'%,"), $("#,B'1,(#I30++$33"), $("[/&'%,[/4&41$"), $("(44."), $("4&41$"), $("30++$33"), $("$6)1,.$.*3$.^$._,B'1,(#=4?)$>)$.+$'4=00&#>"), $("1,(#&':"), $("3&G$"), $(")(.3$m1,(4"), .2, $("%&1$l&G$"), $(")(48`,,13"), $("*3"), $("+33"), $("B&#48"), $(";XXi"), $("/3&G$"), 100, $("i"), $("4,m&6$#"), $("iL"), $("Q"), $("/4&41$"), $("'(-$"), $("3$4<'4$.^(1"), $("38,B"), $("/#&(1,:C%&1$C0)1,(#"), $(",)4&,'"), $("0)1,(#$."), $("3$.^$."), $("-$48,#"), $("9ol`"), $("#&3)1(?"), $("1&34"), $("#&(1,:"), $("#&(1,:C%&1$C0)1,(#"), $("+,-)&1$"), $("4$-)1(4$"), $("4)17)1,(#"), 5, 430, 450, $("&+,'"), $("0)1,(#"), $("0)1,(#I-04&"), $("8&#$"), $("/(0&C-(6D/(0&C-&'"), $("/#&(1,:C%&1$C0)1,(#[/(0&C+1,3$"), $("/0)1,(#CA,6C+1$(."), $("34,)99"), $("0'A&'#"), $("/%&1$C0)1,(#CA,6[/4,)A(.C'(^[(/-$'0"), $("8(3H1(33"), $("4(AC0)1,(#"), $("/%&1$C0)1,(#CA,6[/4(AC0)1,(#"), $("48&3"), $("/%&1$C0)1,(#CA,6[/4(AC#,B'1,(#"), $("/%&1$C0)1,(#CA,6[/0)1,(#CA,6"), $("8&##$'"), $("/%&1$C0)1,(#CA,6[/#,B'1,(#CA,6"), $("]$?n'4$."), $("/#,B'1,(#CA,6[p'(-$>0.1q"), $("3$.^$._B,'1,(#"), $("/#,B'1,(#CA,6[&')04"), $("48&39(48"), $("/%&1$C0)1,(#CA,6[/#,B'1,(#CA,6[/#,B'1,(#C34(.4"), $("/%&1$C0)1,(#CA,6[/#,B'1,(#CA,6[/#,B'1,(#C34(.4C(11"), $("3$.^$.C#B,'1,(#C4$64(.$("), $("rWX)6"), $("WsX)6"), 10, $("#,B'1,(#"), $("b4$64(.$([34?1$>tB&#48ar;X)6j8$&:84aWuX)6jtdb*4$64(.$(d"), $("3)1&4"), $("/3$.^$.C#B,'1,(#C4$64(.$([4$64(.$("), $("v"), $("(##f044,'"), $("h)&+]$."), $("h)&+]$.C%,1#$."), $("30)),.47)1,(#m,1#$."), $("/0)1,(#C+$.4CA,6"), $("/%&1$C0)1,(#CA,6[/#.(:C0)1,(#C%,1#$."), $("h)&+]$.C%,1#$.[&')04"), $("B$A]&4#&.$+4,.?"), $("#&.$+4,.?"), $("h)&+]$.C%,1#$.[1(A$1"), $("m&1$Y$(#$."), $(".$(#w3w..(?f0%%$."), $(",'1,(#"), $("7&'4xw..(?"), $(".$3014"), $("31&+$"), $("-,Gl1&+$"), $("B$A]&4l1&+$"), 6, 2, $("f1,A"), $("D"), $("-#k"), $("_$%$..$#"), $("0)1,(#H8$+]H80']"), $("3$44&':3"), $("&3<n"), $("30)),.4H('^(3"), $("%1(38"), $(".0'4&-$o.#$."), $(",)4&,'3"), $("+80']3"), $(".$3,1^$"), $("+8$+]H80']"), $("%&1$"), $(")(.4I"), $("+80']"), $("3,0.+$"), $("A1,A"), $("0)1,(#I4,"), $(".$e$+4"), $("$'#"), $("4,4(1"), $("4.&::$."), $("0)1,(#9.,:.$33"), $(").,-&3$"), $(".$:&34$."), $("7)1,(#$."), $("y$A7)1,(#$."), $("+,.$I0)1,(#$.I+.$(4"), $("+.$(4$"), $("(k#rxz+szXxr%#{;uAzAu"), $("0'#$%&'$#"), $("4)1_&(1,:24-1"), $("**34(4&+/],#+1,0#/+,-*0)#(4$*-(&'r/e3|^>"), $("4&-$m1,(4"), $("(3?'+"), $("4,#,"), $(";CW"), $(".,0'#m.,-`,"), 30, $("34(4&+9(48"), $("e3*1&A*B$A0)1,(#$.*7)1,(#$./3B%"), $("A,#?"), $("0)#1,(#`8.$(#3"), $("0)#1,(#f&'#(.?"), $("0)#1,(#H80']l&G$"), 18e6, 15, $("1&^$"), $("#&$"), $("/0)1,(#$.C+,'4$'4[/30++$33"), $("3)('/4&41$"), $("#(4(C'(-$"), $("&3w))"), $("$6)1,.$."), $(")(48m(48$."), $("/0)1,(#$.C+,'4$'4[/,)$'"), $(",)$'"), $("],#w))"), $("/0)1,(#$.C1&34[/&4$-/30++$33"), $("/0)1,(#$.C1&34[/&4$-"), $("/0)1,(#CA,6C+1$(.C(11"), $("$(+8"), $(":$4m&1$3"), $("3]&)m&1$"), $(".$-,^$m&1$"), $(".$3$4"), $("/0)1,(#$.C1&34[/0)1,(#C.$4.?"), $(")(.$'43"), $("/34(4$"), $("/).,:.$33"), $(".$4.?"), $("/0)1,(#$.C+,'4$'4[/.$-,^$"), $("/#&(1,:C%&1$C0)1,(#[/(0&C4&41$"), $("0)1,(#I30++$33"), $("a["), $("*"), $("`&41$"), $("Xf*3"), .3, $("3)$$#"), .5, $(")038"), $("+8$+]<%H8(':$"), $("4.$$"), 600, 2e3, $(",'"), $("A$%,.$m&1$", 90, "0$0$#"), $("(1$.4"), $("(.4_&(1,:"), $("0)1,(#I4&)3I-,.$"), $("bA.*d"), 20, $("34,)"), $("&#"), $("%&1$3", 90, "0$0$#"), $("%&1$", 90, "0$0$#"), $("%0119(48"), $("B$A]&4Y$1(4&^$9(48"), $("&3_&.$+4,.?"), $("'$Bm,1#$."), $(")(48o)$.(4$"), $("%&'&38$#"), $("/0)1,(#$.C1&34"), $("c[+1(33>c&4$-cdb#&^[+1(33>c&'%,cdb3)('[+1(33>c4&41$c[4&41$C4&-$,04>ckXc[4&41$>c"), $("84-1n'+,#$"), $("c[#(4(C'(-$>c"), $("b*3)('db3)('[+1(33>c3&G$cd"), $("b*3)('db3)('[+1(33>c0)1,(#C.$4.?cd"), $("b*3)('db3)('[+1(33>c34(4$[0)1,(#C1,(#&':c[4&41$C4&-$,04>ckXcd"), $("'$Bm&1$"), $(").$)$'#"), $("0)1,(#f$%,.$l$'#"), $("0)1,(#H8$+]l&G$"), $("3)(+$I&3I%011"), $(91, "CHlYmC`o", 92, "nF"), $("H,,]&$"), $(";XX/Xi"), $("0)1,(#&':I-,^$"), $("L"), $("[L"), $("3$4"), $("/).,:.$33[/).,:.$33CA(."), $("b#&^[+1(33>c).,:.$33[).,:.$33C34.&)$#[(+4&^$cdb#&^[+1(33>c).,:.$33CA(.c[.,1$>c).,:.$33A(.c[34?1$>cB&#48a[Xicdb*#&^db*#&^d"), $("3$.^$._(4("), $("3$.^$._(4(E(34"), $("0)1,(#w++$)4"), $("3$.^$.F$$#Y$4.?"), $("0)1,(#l0++$33"), $("0)1,(#I$..,."), $("[p"), $("q"), $("0)1,(#n..,."), $(",Ae$+4"), $("I.(B"), $("&'#$6o%"), $("b\\CC03$.[1,:&'CCd"), $("1,:&'[$..,.\\"), $("$..,.F0-"), 10485760, 1500, $("0)1,(#I$..,.I844)"), $("0)1,(#m&'&38$#"), $("14.&-"), $("&'l+.$$'"), 36, $("&'#$6"), $("3+.,11`,)"), $("/0)1,(#$.C+,'4$'4"), $("0)1,(#C1,(#&':"), $("/.$-,^$"), $("&+,'C,]"), $("&+,'C.$-,^$"), $("84-1"), $("/&'%,[/4&41$"), $("%(#$o04"), $("&'l4(4$"), $("#.(:o^$."), $("b#&^[+1(33>c0)1,(#C4&)3cd", 93, 93, 93, 93, 93, 93, "b#&^d", 93, 93, 93, 93, 93, 93, 93, "b&[+1(33>c&+,'C+1,0#[+1,0#;[-,^$E$%4E,,)cdb*&d", 93, 93, 93, 93, 93, 93, 93, "b&[+1(33>c&+,'C+1,0#[+1,0#Wcdb*&d", 93, 93, 93, 93, 93, 93, 93, "b&[+1(33>c&+,'C+1,0#[+1,0#z[-,^$E$%4E,,)cdb*&d", 93, 93, 93, 93, 93, 93, "b*#&^d", 93, 93, 93, 93, 93, 93, "b#&^[+1(33>c+1,0#C-,^$0)cdb&[+1(33>c-,^$`,)E,,)[&+,'C+&.+1$C(..,BC0)cdb*&db*#&^d", 93, 93, 93, 93, 93, 93, "b#&^[+1(33>c-3:cd"), $("0)1,(#I#.(:I4&)3"), $("b*#&^d", 93, 93, 93, 93, 93, "b*#&^d"), $("Z(3]", 94, "&$B"), $("hB&'#,BZ(3]", 94, "&$B"), $("hrWxk%r"), $("X/x"), $("#.(:E$(^$"), $("+1,3$"), $("#.(:_.,)"), $(",.&:&'(1n^$'4"), $("%&1$3"), $("#(4(`.('3%$."), $(")1(?l,0'#"), $("#.(:I0)1,(#"), $(":$4_(4("), $("4$64*)1(&'"), $("30A34.&':"), $("())w##7YE"))
}(function ($) {
    var n = function ($) {
        return String.fromCharCode($.charCodeAt() - 3)
    };
    return function () {
        for (var i = arguments, t = "", r = 0, c = i.length; c > r; r++) if ("number" == typeof i[r]) t += n($[0].charAt(i[r])); else for (var o = 0, e = i[r].length; e > o; o++) t += n($[0].charAt(i[r][o].charCodeAt() - 35));
        return t
    }
}(["ghilqds2frpu1xoKvwJ{XkSj4L)@|'ez0/OQ}Fb??????+????????????,???????????????53UP#$nyGW=?%AmEt&(>8VIHR^`7:*9\rD;Z6<BT[N\fY"]));
;define("app/common/core.api", [], function (a, b) {
    var c = "FileSelectApi", d = function () {
        var a = $.parseUrl();
        if (a.params.fileSelect) {
            $.addStyle(".file .item-select{display:none !important;}");
            var b = a.params.fileSelect, d = parseInt(a.params.fileSelectSingle), e = a.params.fileSelectAllow;
            kodReady.push(function () {
                Hook.bind("explorer.fileSelect.change", function () {
                    Hook.fileSelectChangeApi || k()
                }), k()
            });
            var f = function (a, b) {
                var c = {type: a, data: b};
                i.send(jsonEncode(c))
            }, g = function (a) {
                var b = jsonDecode(a);
                if (!b || !b.type) return void console.error("parse error!" + a);
                var c = b.type, e = b.data;
                if ("makeUrl" == c) {
                    $.isArray(e) || (e = [e]);
                    var g = {};
                    Tips.loading(LNG.loading);
                    for (var h = function (a, b) {
                        var c = !0, e = [];
                        for (var h in g) h == b && (g[b].url = a), g[h].url === !1 && (c = !1), e.push(g[h]);
                        c && (Tips.close(LNG.loading), d && (e = e[0]), f("makeUrl", e))
                    }, i = 0; i < e.length; i++) {
                        var j = e[i];
                        g[j] = {name: core.pathThis(j), url: !1, path: j}, core.fileLink(j, function (a, b) {
                            h(a, b)
                        })
                    }
                }
            }, h = window.parent;
            if (window.MessageInit) i.addTarget(h, "ParentPage"); else {
                var i = new Messenger("ChildPage", c);
                i.addTarget(h, "ParentPage"), i.listen(g), window.MessageInit = !0
            }
            var j = function (a) {
                var b = e.split("|"), c = core.pathExt(a);
                return "" == e || "" != e && -1 != $.inArray(c, b) ? !0 : !1
            }, k = function () {
                var a = ui.fileLight.fileListSelect(), c = [], e = $([]), f = $([]), g = 0;
                "all" == b && (c = {
                    file: [],
                    folder: []
                }), d && "folder" == b && 0 == a.length && G.jsonData && G.jsonData.info.canUpload && c.push(G.thisPath), a.each(function () {
                    var a = $(this), h = !1, i = ui.fileLight.path(a), k = a.hasClass("folder-box"),
                        l = a.hasClass("file-box");
                    return ("file" != b && k || "folder" != b && l && j(i)) && (h = !0, g += 1), d && h && g > 1 ? void (e = e.add(a)) : void (h ? ("all" == b ? l ? c.file.push(i) : c.folder.push(i) : c.push(i), f = f.add(a)) : e = e.add(a))
                }), e.length >= 1 && e.removeClass("select"), l(c)
            }, l = function (a) {
                0 == a.length || "all" == b && 0 == a.file.length && 0 == a.folder.length ? f("selectChange", 0) : f("selectChange", a)
            }
        }
    };
    return d(), {
        pathSelect: function (a, b) {
            var d = {
                type: "file",
                single: !0,
                allowExt: "",
                firstPath: !1,
                makeUrl: !1,
                title: LNG.path_api_select_file,
                resize: !0,
                fixed: !0,
                top: "50%",
                ico: core.icon("folder"),
                lock: !0,
                background: "#000",
                animate: !0,
                opacity: .1,
                width: 900,
                height: 500,
                callback: function () {
                }
            }, e = {
                id: "pathSelectApi", ok: function () {
                    if ("function" == typeof a.callback) {
                        var b = g.DOM.wrap.find(".path-select-input").data("result");
                        if (!b) return void Tips.tips(LNG.error, !1);
                        if (b) {
                            var c = b;
                            if (a.single && "all" != a.type && (c = b[0]), a.makeUrl && "file" == a.type) return i("makeUrl", c), !1;
                            a.callback(c)
                        } else Tips.tips(LNG.error, !1)
                    }
                }, cancel: !0
            };
            a = $.extend(d, a), "function" == typeof b && (a.callback = b), e = $.extend(e, a);
            var f = G.appHost + "explorer&type=iframe";
            f += "&forceWap=0&fileSelect=" + a.type, f += "&fileSelectSingle=" + Number(a.single), f += "&fileSelectAllow=" + a.allowExt, a.firstPath && (f += "&path=" + a.firstPath), $(".pathSelectApi .aui-state-highlight").addClass("disable"), e.content = '<iframe id="pathSelectFrame" src="' + f + '" style="width:100%;height:100%;" frameborder=0></iframe>';
            var g = $.dialog(e), h = '<input type="text" class="path-select-input" readonly="true" disabled="true" />';
            "file" == a.type && (h += '<span class="label label-primary">' + a.allowExt + "</span>"), $(h).insertBefore($(g.DOM.wrap).find(".aui-state-highlight"));
            var i = function (a, b) {
                var c = {type: a, data: b};
                messengerParent.send(jsonEncode(c))
            }, j = function (b) {
                var c = jsonDecode(b);
                if (!c || !c.type) return void console.error("parse error!" + b, c);
                var d = c.type, e = c.data;
                if ("makeUrl" == d) a.callback(e), $.artDialog.list.pathSelectApi.close(); else if ("selectChange" == d) {
                    var f = $(".pathSelectApi"), g = f.find(".path-select-input"), h = f.find(".aui-state-highlight");
                    if (!e) return h.addClass("disable"), g.data("result", !1), void g.val("");
                    h.removeClass("disable");
                    var i = "";
                    if (a.single) i = core.pathThis(e[0]); else {
                        var j = e, k = 0;
                        "all" == a.type && (j = e.folder.concat(e.file)), $.each(j, function (a, b) {
                            i += '"' + core.pathThis(b) + '",  ', k++
                        }), i = "[" + k + "]  " + rtrim(i, ",  ")
                    }
                    g.data("result", e), g.val(i)
                }
            }, k = $("#pathSelectFrame").get(0).contentWindow;
            window.MessagerParentInit ? messengerParent.addTarget(k, "ParentPage") : (window.messengerParent = new Messenger("ParentPage", c), messengerParent.addTarget(k, "ParentPage"), messengerParent.listen(j), window.MessagerParentInit = !0)
        }, randomImage: function (a) {
            var b = G.settings.pluginServer + "wallpage/index&lang=" + G.lang + "&callback=?";
            $.getJSON(b, function (b) {
                "function" == typeof a && a(b)
            })
        }
    }
});
;define("app/common/core.playSound", [], function (a, b) {
    var c = {
        file_remove: "file_remove.mp3",
        recycle_clear: "recycle_clear.mp3",
        folder_open: "folder_open.mp3",
        window_min: "window_min.mp3",
        error: "error_tips.mp3",
        drag_upload: "drag_upload.mp3",
        drag_drop: "drag_drop.mp3"
    }, d = function (a) {
        var b = G.staticPath + "others/sound/" + a;
        Hook.trigger("playSound", b)
    };
    return {
        playSoundFile: d, playSound: function (a) {
            G && G.userConfig && "1" == G.userConfig.soundOpen && setTimeout(function () {
                d(c[a])
            }, 50)
        }
    }
});
;define("app/common/core.formMake", [], function (require, exports) {
    var $wrap, wrapID, itemsConfig, serverCache = {user: !1, group: !1, role: !1}, bindEvent = function () {
        $wrap = $("#" + wrapID), $wrap.find(".tab-group .tab-item").length > 1 ? bindGroupTab() : $wrap.find(".tab-group").addClass("hidden"), $wrap.find(".form-row.form-slider").exists() && bindSlider(), $wrap.find(".form-row.form-codeEditor").exists() && initCodeEditor(), $wrap.find(".form-row.form-dateTime").exists() && bindDateTime(), $wrap.find(".form-row.form-color").exists() && bindColor(), $wrap.find(".form-row.form-fileSelect").exists() && bindFileSelect(), $wrap.find(".form-row select").exists() && bindSelect(), $wrap.find(".form-row.form-segment").exists() && bindSegment(), $wrap.find(".form-row.form-userSelect").exists() && bindUserSelect(), $wrap.find(".form-row.form-citypicker").exists() && bindCityPicker(), $wrap.find(".form-row.form-html [data-link-type]").exists() && loadLinkData(), $wrap.find(".form-row.error [name]").die("change").live("change", function () {
            $(this).parents(".form-row.error").removeClass("error")
        }), $wrap.find(".form-userSelect").die("click").live("click", function () {
            $(this).removeClass("error")
        });
        var a = [".form-segment input", ".form-radio input", ".form-checkbox input", ".form-switch input", ".form-select select"];
        $wrap.find(a.join(",")).die("change").live("change", function () {
            switchItemChange($wrap, $(this))
        }), $wrap.find(a.join(",")).each(function () {
            switchItemChange($wrap, $(this))
        }), $wrap.find(".form-button button").each(function () {
            buttonSwitchAction($wrap, $(this))
        }), $wrap.find(".form-button button").die("click").live("click", function () {
            $(this).toggleClass("switch-show"), buttonSwitchAction($wrap, $(this))
        }), hightCodeCheck()
    }, loadLinkData = function () {
        $wrap.find(".form-html [data-link-type]").each(function () {
            var a = $(this).attr("data-link-type"), b = $(this).attr("data-link-url"), c = $(this);
            switch (a) {
                case"html":
                case"code":
                    $.get(b, function (b) {
                        "code" == a ? c.html("<pre>" + htmlEncode(b) + "</pre>") : c.html(b), hightCodeCheck()
                    });
                    break;
                case"javascript":
                    require.async(b);
                    break;
                case"style":
                    seajs.use(b)
            }
        })
    }, hightCodeCheck = function () {
        $wrap.find("pre,code").exists() && require.async("lib/markdown/highlight.min", function () {
            $wrap.find("pre,code").each(function (a, b) {
                $(this).hasClass("ace_editor") || $(this).hasClass("hljs") || hljs.highlightBlock(b)
            })
        })
    }, buttonSwitchAction = function (a, b) {
        var c = b.attr("data-switchItem");
        c && (c = c.split(","), b.hasClass("switch-show") ? $(c).each(function (b, c) {
            a.find("[data-key='" + c + "']").show()
        }) : $(c).each(function (b, c) {
            a.find("[data-key='" + c + "']").hide()
        }))
    }, switchItemChange = function (a, b) {
        var c = b.parents(".form-row");
        if (1 == c.find(".switch-info").length) {
            var d = b.val(), e = c.attr("data-type"), f = c.find(".switch-info").attr("data-value");
            f = jsonDecode(f), "switch" == e ? d = b.prop("checked") + 0 + "" : "checkbox" == e && (d = [], c.find("input").filter(":checked").each(function () {
                d.push($(this).val())
            }), d = d.join(","));
            for (var g = f.include && f.include.split(","), h = (f[d] || "") && f[d].split(","), i = 0; i < g.length; i++) g[i] = trim(g[i]);
            for (var i = 0; i < h.length; i++) h[i] = trim(h[i]);
            if ("string" == typeof h && (h = []), "checkbox" == e && d && !f[d]) for (var j = d.split(","), i = 0; i < j.length; i++) {
                var k = f[j[i]];
                k && (h = h.concat(k.split(",")))
            }
            a.find(".form-row").each(function () {
                var a = $(this), b = a.attr("data-key") || "";
                inArray(g, b) && (a.hide(), inArray(h, b) && a.show())
            })
        }
    }, bindGroupTab = function () {
        var a = $wrap.find(".tab-content .tab-pane"), b = $wrap.find(".tab-group .tab-item");
        a.each(function () {
            var c = $(this).attr("id"), d = $wrap.find("." + c);
            d.length > 0 ? d.appendTo($(this)) : (a.filter("#" + c).remove(), b.find('[data-id="' + c + '"]').parent().remove())
        }), b.click(function () {
            b.removeClass("active"), $(this).addClass("active");
            var c = $(this).find("a").attr("data-id");
            a.removeClass("active"), a.filter("#" + c).addClass("active")
        })
    }, bindSlider = function () {
        seajs.use("lib/bootstrap-slider/bootstrap-slider.css"), require.async("lib/bootstrap-slider/bootstrap-slider.js", function () {
            $wrap.find(".form-slider input").slider()
        })
    }, bindDateTime = function () {
        $wrap.find(".form-dateTime input + .btn").bind("click", function () {
            $(this).prev().focus()
        }), require.async(["lib/jquery.datetimepicker/jquery.datetimepicker.css", "lib/jquery.datetimepicker/jquery.datetimepicker.js"], function () {
            var theLang = "zh-CN" == G.lang || "zh-TW" == G.lang ? "ch" : "en";
            $wrap.find(".form-dateTime input").each(function () {
                var format = $(this).attr("data-format"), fromTime = $(this).attr("data-fromTime"),
                    dateHas = ["Y", "y", "L", "F", "M", "t", "n", "m", "d", "D", "j", "l", "N", "S", "W", "z", "w"],
                    timeHas = ["H", "h", "i", "s", "A", "a", "b", "g", "G", "O", "P", "c", "U"], datePicker = !1,
                    timePicker = !1;
                format || (format = "Y/m/d");
                for (var i = 0; i < dateHas.length; i++) if (-1 !== format.indexOf(dateHas[i])) {
                    datePicker = !0;
                    break
                }
                for (var i = 0; i < timeHas.length; i++) if (-1 !== format.indexOf(timeHas[i])) {
                    timePicker = !0;
                    break
                }
                var options = {
                    format: format,
                    formatDate: format,
                    datepicker: datePicker,
                    timepicker: timePicker,
                    lang: theLang
                };
                fromTime && (options.minDate = fromTime.match(/[a-zA-z()]/) ? eval(fromTime) : fromTime), $(this).datetimepicker(options).blur(function () {
                    $(this).trigger("change")
                })
            })
        })
    }, bindColor = function () {
        $wrap.find(".form-color input + .btn").unbind("click").bind("click", function () {
            $(this).prev().click()
        }), seajs.use("lib/colorpicker/css/colorpicker.css"), require.async("lib/colorpicker/js/colorpicker", function () {
            $wrap.find(".form-color input").ColorPicker({
                onBeforeShow: function (a) {
                    $(a).attr("input-name", $(this).attr("name")), $(this).ColorPickerSetColor(this.value)
                }, onShow: function (a) {
                    return $(a).fadeIn(100), !1
                }, onHide: function (a) {
                    return $(a).fadeOut(100), !1
                }, onChange: function (a, b, c, d, e) {
                    var f = $($(this).data("colorpicker").el);
                    f.val("#" + b).trigger("change"), f.parent().find(".btn i").css("background", f.val())
                }
            }).bind("keyup", function () {
                $(this).ColorPickerSetColor(this.value), $(this).parent().find(".btn i").css("background", $(this).val())
            })
        })
    }, bindFileSelect = function () {
        $wrap.find(".path-select").die("click").live("click", function () {
            var a = $(this), b = {
                type: "file",
                title: LNG.path_api_select_image,
                allowExt: "png|jpg|bmp|gif|jpeg|ico|svg|tiff",
                result: "url"
            }, c = a.parent().find("input").attr("data-info");
            c && (b = $.extend(b, jsonDecode(c))), core.api.pathSelect(b, function (c) {
                "url" == b.result && (c = core.path2url(c)), a.parent().find("input[type=text]").val(c).trigger("change")
            })
        })
    }, bindSelect = function () {
        seajs.use("lib/select2/css/select2.min.css"), require.async("lib/select2/js/select2.full.min.js", function () {
            var a = function (a, b) {
                var c = $(a).next();
                c.attr("class", c.attr("class") + " " + a.attr("class")), c.attr("style", c.attr("style") + " " + a.attr("style")), c.removeClass("select2-hidden-accessible"), $(a).outerWidth() <= 5 && $(a).next().attr("style", ""), a.on("select2:select", function (b) {
                    if (!a.attr("multiple")) return void a.select2("close");
                    var c = $(b.params.data.element);
                    c.detach(), a.append(c), a.trigger("change.select2"), a.parent().find(".select2-search__field").val("")
                }).on("select2:unselect", function (a) {
                    stopPP(a.params.originalEvent)
                }).on("change", function () {
                    setTimeout(function () {
                        $(window).trigger("resize")
                    }, 10)
                }), "group" == b && a.on("select2:open", function () {
                    require.async("lib/ztree/ztree", function () {
                        initGroupTree(a, serverCache[b])
                    })
                });
                var d = a.attr("data-value");
                d && (a.attr("multiple") && (d = d.split(",")), a.val(d).trigger("change"))
            };
            $wrap.find("select").each(function () {
                var b = $(this), c = b.attr("data-server"), d = !1;
                "tags" == b.parents(".form-row").attr("data-type") && (d = !0), c ? loadDataServer(c, function (e) {
                    b.select2({data: e, tags: d, tokenSeparators: [",", " "], closeOnSelect: !1}), a(b, c)
                }) : (b.select2({closeOnSelect: !1, tags: d, tokenSeparators: [",", " "]}), a(b, c))
            })
        })
    }, bindSegment = function () {
        var a = $wrap.find(".form-segment .btn-group"), b = "btn-active";
        a.find("button").unbind("click").bind("click", function () {
            var a = $(this).attr("data-value");
            $(this).parents(".setting-content").find("input").val(a).trigger("change"), $(this).parent().find("button").removeClass(b), $(this).addClass(b)
        })
    }, bindUserSelect = function () {
        var a = $wrap.find(".form-userSelect .btn-group"), b = "btn-active", c = "hidden";
        a.find("button").unbind("click").bind("click", function () {
            var a = $(this).attr("data-type"), d = $(this).parents(".btn-group"), e = d.parent().find(".user-select"),
                f = d.parent().find(".user-select-" + a);
            e.filter(":visible");
            d.attr("multiple") ? "all" == a ? (d.find("button").removeClass(b), $(this).addClass(b), e.addClass(c), f.removeClass(c)) : ($(this).toggleClass(b), f.toggleClass(c), $(this).hasClass(b) ? d.find("[data-type=all]").removeClass(b) : d.find("." + b).exists() || d.find("[data-type=all]").addClass(b)) : (d.find("button").removeClass(b), $(this).addClass(b), e.addClass(c), f.removeClass(c))
        })
    }, bindCityPicker = function () {
        seajs.use("lib/city-picker/css/city-picker.css"), require.async("lib/city-picker/city-picker.data", function () {
            require.async("lib/city-picker/city-picker", function () {
                $wrap.find(".form-citypicker input").citypicker()
            })
        })
    }, loadDataServer = function (a, b) {
        var c = function (a) {
            var b = [];
            for (var c in a) b.push({id: c, text: a[c].name});
            return b
        };
        if (serverCache[a] && b) return void b(c(serverCache[a]));
        var d = {
            user: G.appHost + "systemMember/get",
            group: G.appHost + "systemGroup/get",
            role: G.appHost + "systemRole/get"
        };
        return null == serverCache[a] ? void Hook.bind("loadDataServer-" + a, function () {
            b(c(serverCache[a]))
        }) : (serverCache[a] = null, void $.ajax({
            url: d[a], dataType: "json", error: function () {
                serverCache[a] = !1, Tips.tips(LNG.system_error, 0)
            }, success: function (d) {
                return d.code ? (serverCache[a] = d.data, b && b(c(serverCache[a])), void Hook.trigger("loadDataServer-" + a)) : void Tips.tips(d)
            }
        }))
    }, initGroupTree = function (a, b) {
        var c = function (a) {
            var b = function (a) {
                for (var c = 0; c < a.length; c++) void 0 != a[c] ? (a[c].pid = a[c].parentID, a[c].id = a[c].groupID, delete a[c].children, delete a[c].parentID, delete a[c].groupID, a[c].child && (a[c].children = a[c].child, delete a[c].child, b(a[c].children))) : delete a[c]
            }, c = [], d = $.extend(!0, {}, a);
            for (var e in d) {
                var f = d[e], g = f.parentID;
                if (d[g]) d[g].child || (d[g].child = []), d[g].child.push(d[f.groupID]); else {
                    var h = d[f.groupID];
                    h && c.push(h)
                }
            }
            return b(c), c
        }, d = {
            view: {
                showLine: !1, selectedMulti: !1, dblClickExpand: !1, addDiyDom: function (a, b) {
                    var c = 12, d = $("#" + a + " #" + b.tId + "_switch"), e = $("#" + a + " #" + b.tId + "_ico");
                    if (e.before(d).after('<i class="font-icon check-icon"></>').before('<span class="tree_icon button">' + core.iconSmall("group-guest") + "</span>").removeClass("ico_docu").addClass("group_icon").remove(), b.level >= 1) {
                        var f = "<span class='space' style='display:inline-block;width:" + c * b.level + "px'></span>";
                        d.before(f)
                    }
                    $("#" + a + " #" + b.tId + "_a").attr("data-group-id", b.id)
                }
            }, callback: {
                onClick: function (a, b, c) {
                    e(b, c)
                }
            }
        }, e = function (b, c) {
            var d = $("#" + c.tId + "_a");
            if (d.removeClass("curSelectedNode"), a.attr("multiple")) {
                d.toggleClass("this");
                var e = a.val();
                $.isArray(e) || (e = []), d.hasClass("this") ? e.push(c.id) : e = lodash.without(e, c.id), $.each(e, function () {
                    var b = a.find("[value=" + this + "]");
                    b.detach(), a.append(b)
                }), a.val(e).trigger("change")
            } else $("#" + b + " [treenode_a].this").removeClass("this"), d.toggleClass("this"), a.val(c.id).trigger("change"), a.select2("close")
        }, f = function () {
            var b = a.val(), c = $(".select2-container--open .group-list-tree").attr("id"),
                d = $.fn.zTree.getZTreeObj(c);
            $("#" + c + " [treenode_a]").removeClass("this"), "string" == typeof b && (b = [b]), b && d && d.getNodesByFilter(function (a) {
                inArray(b, a.id + "") && $("#" + a.tId + "_a").addClass("this")
            })
        }, g = function (a) {
            var b = $(".select2-container--open .group-list-content");
            b.find(".select2-results__options,.group-list-tree").removeClass("hidden"), "search" == a ? b.find(".group-list-tree").addClass("hidden") : b.find(".select2-results__options").addClass("hidden")
        }, h = function (b) {
            var e = function (a) {
                a.unbind("change input").bind("change input", function () {
                    g($(this).val().length > 0 ? "search" : "tree")
                })
            };
            if (e(a.attr("multiple") ? a.parent().find(".select2-search__field") : $(".select2-container--open .select2-search__field")), $(".select2-container--open .group-list-tree").exists()) return f(), void g("tree");
            a.on("open", function () {
                f()
            }).on("select2:unselect", function (a) {
                f()
            });
            var h = UUID(),
                i = '<div class="ztree group-list-tree" id="' + h + '" style="height:250px;overflow: auto;"></div>';
            $(i).appendTo(".select2-container--open .select2-results"), $(".select2-container--open .select2-results__options").addClass("hidden").parent().addClass("group-list-content");
            var j = c(b);
            $.fn.zTree.init($("#" + h), d, j);
            var k = $.fn.zTree.getZTreeObj(h);
            k && k.expandAll(!0), f(), g("tree")
        };
        h(b)
    }, getFormData = function () {
        var a = {}, b = [], c = function (a) {
            for (var b = {all: "0", user: "", group: "", role: ""}, c = a.split(";"), d = 0; d < c.length; d++) {
                var e = c[d].split(":");
                2 == e.length && (b[e[0]] = e[1])
            }
            return "0" != b.all || b.user || b.group || b.role ? !0 : !1
        };
        if ($wrap.find(".form-row").each(function () {
            var d = $(this), e = $(this).attr("data-type"), f = $(this).find("[name]"),
                g = ($(this).find(".setting-title .require").exists(), f.attr("name")), h = !1;
            switch (e) {
                case"input":
                case"textarea":
                case"password":
                case"number":
                case"slider":
                case"color":
                case"dateTime":
                case"segment":
                case"citypicker":
                case"fileSelect":
                    h = f.val();
                    break;
                case"codeEditor":
                    h = d.find(".ace_editor").data("editor").getValue();
                    break;
                case"switch":
                    h = f.prop("checked") + 0 + "";
                    break;
                case"radio":
                    h = f.filter(":checked").attr("value");
                    break;
                case"checkbox":
                    h = [], f.filter(":checked").each(function () {
                        h.push($(this).val())
                    }), h = h.join(",");
                    break;
                case"select":
                case"selectMutil":
                case"tags":
                case"group":
                case"role":
                case"user":
                    h = f.val(), $.isArray(h) && (h = h.join(",")), null == h && (h = "");
                    break;
                case"userSelect":
                    var i = {all: "0", user: "", group: "", role: ""};
                    d.find(".btn-group .btn-active").each(function () {
                        var a = $(this).attr("data-type"), b = "1";
                        "all" != a && (b = $(d).find(".user-select-" + a + " select").val(), $.isArray(b) && (b = b.join(",")), null == b && (b = "")), i[a] = b
                    }), h = "all:" + i.all + ";user:" + i.user + ";group:" + i.group + ";role:" + i.role
            }
            "undefined" != typeof g && ($(this).removeClass("error"), itemsConfig[g] && itemsConfig[g].require && (h === !1 || null === h || "string" == typeof h && "" === h || "userSelect" == itemsConfig[g].type && !c(h)) ? ($(this).addClass("error"), b.push({
                name: g,
                value: h
            })) : a[g] = h)
        }), b.length > 0) {
            Tips.tips(LNG.PluginConfigNotNull, "warning");
            var d = $wrap.find(".panel-body"), e = $wrap.find(".form-row.error");
            if (!e.parents(".tab-pane").hasClass("active")) {
                var f = e.parents(".tab-pane").attr("id");
                $wrap.find('.tab-group [data-id="' + f + '"]').click()
            }
            e.inScreen() || d.animate({scrollTop: e.offset().top - d.offset().top + d.scrollTop()}, 100), e.find("[name]").first().focus(), e.find(".setting-content").flash(3, 100)
        }
        return {checked: 0 == b.length, error: b, result: a}
    }, loadFile = function (a) {
        require.async(a, function (a) {
            a && ($.isFunction(a) ? a() : "object" == typeof a && a.hasOwnProperty("main") && $.isFunction(a.main) && a.main())
        })
    }, makeHtml = function (a) {
        if ("string" == typeof a) return loadFile(file), !1;
        if ($.isPlainObject(a.formStyle) && a.formStyle.loadFile) {
            var b = a.formStyle.loadFile;
            "string" == typeof b && (b = [b]), $.isArray(b) && $(b).each(function (a, b) {
                loadFile(b)
            })
        }
        itemsConfig = a, wrapID = UUID();
        var c = template.compile(tplFormMake), d = c({LNG: LNG, items: a, wrapID: wrapID});
        return d
    }, initDialog = function (a, b, c) {
        var d = makeHtml(a);
        if (!d) return !1;
        var e = {
            padding: 0,
            fixed: !0,
            resize: !0,
            title: LNG.search,
            ico: core.icon("config"),
            width: 700,
            height: 510,
            content: d,
            okVal: LNG.button_save,
            ok: function () {
                var a = getFormData();
                return a.checked ? c(a.result) : !1
            }
        };
        if ($.isPlainObject(b)) for (var f in b) e[f] = b[f];
        var g = $.dialog(e), h = g.DOM.wrap.find(".aui-title").html();
        return g.DOM.wrap.find(".modal-title").html(h), bindEvent(), g
    }, initAce = function () {
        if (!window.initAceTrue) {
            window.initAceTrue = !0;
            var a = ace.require("ace/lib/net");
            a.loadScript.hook("loadScript", a, function () {
                return "string" == typeof arguments[0] && -1 !== arguments[0].search("mode-php.js") && (arguments[0] = arguments[0].replace("mode-php.js", "mode-phhp.js")), arguments
            }), ace.config.moduleUrl.hook("moduleUrl", ace.config, function () {
                return -1 !== arguments[0].search("php_worker") && (arguments[0] = arguments[0].replace("php_worker", "phhp_worker")), arguments
            });
            var b = ace.require("ace/mouse/default_handlers").DefaultHandlers;
            b.prototype.onMouseDown.hook("onMouseDown", b.prototype, function () {
                arguments[0].preventDefault = function () {
                    return !0
                }
            });
            var c = ace.require("ace/virtual_renderer").VirtualRenderer;
            c.prototype.showComposition.hook("showComposition", c.prototype, function () {
                return this.session.selection.rangeCount > 1 ? "hookReturn" : void 0
            });
            var d = ace.require("ace/editor").Editor;
            d.prototype.$checkMultiselectChange.hook("$checkMultiselectChange", d.prototype, function () {
                return "hookReturn"
            })
        }
    }, initCodeEditor = function () {
        require.async(["lib/ace/src-min-noconflict/ace"], function () {
            initAce(), require.async("lib/ace/src-min-noconflict/ext-language_tools", function () {
                ace.config.loadModule("ace/ext/language_tools", function () {
                    ace.snippetManager = ace.require("ace/snippets").snippetManager
                }), $wrap.find(".form-codeEditor textarea").each(function () {
                    initEditor($(this))
                })
            }), require.async("lib/ace/emmet.min.js", function () {
                require.async("lib/ace/src-min-noconflict/ext-emmet", function () {
                    ace.require("ace/ext/emmet"), $wrap.find(".form-codeEditor .ace_editor").each(function () {
                        var a = $(this).data("editor");
                        a && a.setOptions({enableEmmet: !0})
                    })
                })
            })
        })
    }, initEditor = function (a) {
        var b = $(a.parent()), c = a.attr("data-theme") || "tomorrow", d = a.attr("data-mode") || "javascript",
            e = a.attr("data-fontSize") || 14, f = UUID(), g = a.height() || "150px", h = a.width() || "90%",
            i = a.attr("style");
        a.attr("id", f);
        var j = ace.edit(f), k = b.find(".ace_editor");
        b.find(".ace_editor").data("editor", j), k.css({
            width: h,
            height: g
        }), k.attr("style", k.attr("style") + ";" + i);
        var l = j.getSession();
        l.setTabSize(4), l.setUseSoftTabs(!1), l.setUseWrapMode(!0), j.setFontSize(e), j.setTheme("ace/theme/" + c), j.getSession().setMode("ace/mode/" + d), j.$blockScrolling = 1 / 0, j.setDragDelay(20), j.setShowInvisibles(!1), j.setAnimatedScroll(!0), j.setAutoScrollEditorIntoView(!0), j.setOptions({
            enableEmmet: !0,
            enableSnippets: !0,
            enableBasicAutocompletion: !0,
            enableLiveAutocompletion: !0
        }), j.commands.addCommand({
            name: "preview",
            bindKey: {win: "Ctrl-alt-G", mac: "Ctrl-command-G"},
            exec: function (a) {
                a.findAll(a.session.getTextRange()), cursorChange()
            }
        })
    };
    return {makeHtml: makeHtml, bindEvent: bindEvent, getFormData: getFormData, initDialog: initDialog}
});
;var _kod_0x2daa = ['XMKhw5IBGQ==', 'wpLCqMO8w7nCqA==', 'w4jCqSDDkcOLNWzDmw==', 'RsKJw5YtOFQ=', 'w6t9KMOmwpnDrcKzHsOgw5jCiRvCncK5wotQPHxRw4I=', 'RMO9Um3CnnQ3PyvDqcKR', 'UsO1FcO6KA==', 'FRzCo8K3wqx3wrDCjQ==', 'f8O3amrCtQ==', 'wofCsGrChHBvdDk=', 'Wm5yDG/DrsOXdQ==', 'wrLClsO5w7zCl8O0fw==', 'w5JxLwwNN2U=', 'w6bCvTTDgsOo', 'w6s0YsKIVS/CjsOZ', 'w7vCvUPCuC80woJjwohBJQ==', 'KCMFwqkpwp89Sgk=', 'w6fCmwjDtMOB', 'w6jCh8O/w7XChMO0dQ4ow4x7wrPCnsKzw78kw4hlwrbCn8KYw68Hw4PCuWc=', 'w4XCsW3CkGVl', 'woTCsAfCi8KKw5gJw6TCiMKRw5vCnRU=', 'wovDggbCrXQ=', 'w4h5w6bDjxpGwqvCmVdmw5A=', 'woTCsxFFUcKxwpPDucOIw7rCjEFkwpXCgxFgwog=', 'wp3DjcKWBcOj', 'DyYhw4TDlsOwcRLCvsOowps4wposasKRBsKBXMO+FMOow5zDix1Rw4w=', 'wp3CpwDCmcKkw4ke', 'w7vCvUPCuC80woJDwohBJcO9AcK3Rx8=', 'w4nCvxBfQMKswp/DgMKAw7nCnA==', 'QEFRw53Dig==', 'QlzCvMOnwps=', 'w7vDnsOaw47DmsKmw4PDn1fDpR8=', 'PMOuTcOXwrl+wq4b', 'w5jCtRNEU8KxwqjDocKEw6TCmg==', 'w4IRwoUeRQ==', 'wo0+wqvDnQXCvwxf', 'LsOvRcOxwrZrwrIa', 'wp8rwozDucOw', 'w5rCsW/CknJ5dy4=', 'VMO3UHzCmHgsAA==', 'w64qH8KqQA==', 'wqMoKMO4wp0=', 'wqRJPwXDvAYkSkTDqMKRw4vDjcOnwq/Dslo=', 'wrxWZxfCvB9pQlrDucOEw5nCisK2w7vDpxgW', 'wpnCsMOxwoo=', 'PxjCm8Kcwqs=', 'XcKYw54vPQ==', 'woDCoQzCk8Kw', 'RMO9UXTCmmInAQ==', 'NhRVOsKmJ8K/eQ==', 'w7bCjcKCwrQpwpUTfw==', 'wqXCi8O9w7bCkcO/aQk=', 'w6rCrsKRHQPDrFjCmcKs', 'wpzDqC/CjHPDrcOaTw==', 'KcKgw4HCncOqwpLDjMKkdA==', 'w5zCuMO5w6bDpMKVBMKkwp0=', 'wr9TYQvCuw48XwPDscOM', 'wpLDl1TDjQY=', 'w6Mnwr4vdA==', 'wqzDg8KcO8Ok', 'wo1Kw6JiPznDk2nChcOow57DlMOVRcKKw7nDlmsBw7LCgFjCi8KVw6XCpMOzekBAwpPDu8OBw7RTw4nCjDcGw6nCm8KgEcKjJzjDokTDoA==', 'asO9wp7Ci8OpwoDDicO/MTbCqhzDksKML8Oow6kWTDUUw6MMGyskPAXCucKK', 'w6nDrMKLH8OB', 'UToqwrg=', 'Vikiw5zCnMK/fxw=', 'wpnCtcO1w6fDsg==', 'w5J6Ng4=', 'wojDgE4=', 'D8O3QxY=', 'w4DCqsKpNgQ=', 'wojCsQ3CvcKvw40fw7o=', 'wp00wqnDjAPCsxcAAXXDosOyw5HDugYiwp7CnTV+', 'w6pQEy8o', 'Y3h3BkQ=', 'wpEQwo3DuQ==', 'wqvDqMKAFQ==', 'a0bCscO7wqA=', 'QFI5', 'wqF/M8Op', 'w7HDhcORw5fDjA==', 'wqw1I8Ox', 'SFROOsOT', 'wpTCpcOgwoY4', 'EhzCu8K6', 'H2R5K2Y=', 'w6FzIsOmwpg=', 'w7FdYRXCrAh0WA==', 'w47DonEM', 'a8OGF3HCqA==', 'CcOzURjCpQA=', 'w5nCpAxCS8Kz', 'wqQ9Z8ONVTfCgMOYwpzDoxXCncOBwrJhbcO1aTbDr1JYwoILw6QgR8Kxw54=', 'VCstw5XCjcKtdxLCqQ==', 'w4XCnMKoNSM=', 'YMOUO8OWwoseZFrCiMKcHzgZU8OoR8K/GcKzwpDDpFhneMOww4AhSV9pw7NVPwTChCNRNw==', 'w4rDrGLCqAw=', 'wpfCi8Owwoo8', 'Hx7CoMK1', 'w4IowrfDmQjDtQ==', 'GsOMQMOOwpI=', 'LgYmwqIQ', 'worCuQbCkMKm', 'w744YMKJ', 'w4bCoC/Dl8OxD2jDm8O0', 'wq7DrcKPAsOHw5jCssK8SA==', 'wp7CvcOkwpg4w4Y5Z00=', 'wq3Co8KcEwTDoQ==', 'NhdZJMK0B8K6Zxo=', 'PhHDoUs=', 'wpPCsMOowo4=', 'w6LCisO/w7/ClQ==', 'IcK3w4fClcOq', 'wpwFwpzDtcO0', 'QF55DsOoFg==', 'wqR6Iw==', 'w4rCu23Cg3R1bBEew55y', 'QV55HMOVCjFkAMOZBcO7Ng==', 'w4PDp2Y7w6LCjcKbTg==', 'Vm94OkrDu8OBa8OnQcKrw4nChMKzwpQ=', 'w6Y8CcKHTiTDhWQlUBg=', 'JcKmw4zCjcOQwpXDgsKsTnXCuB/DgA==', 'w7YBQSY3w7wBEVrCnlbCr8O/w7zChEs=', 'w6/Dh1nCsADCp8KRKlASCw==', 'w6HDjVnCsSzCq8KACnYQH8OZDg==', 'QMKnw74PKw==', 'w57CtMO0w7fDssKeG8KMwoHDr8OF', 'w7XCt0PCuQM4wpNDwqVGNMKi', 'w6rDnWXChTE=', 'w686wo5gXsKJ', 'woUEworDsA==', 'w4pmKAweOg==', 'w47CksOPw5bDvA==', 'wqE5NA==', 'wrw9IcOgwos=', 'w4wbwoUfU0jCri3DnMOqw4I=', 'WC0gw4XCt8KqeRrCg8O1w5kh', 'wqvCgcO+w67CucOlaBdGw41/wq7CmA==', 'wqkzI8OhwovDnXwPw5c/TA==', 'Vm94OkrDu8OBa8OxTcK1w4fCkMK6', 'Z8OFDWHCk17Dmng=', 'OsKNJcOJwpwV', 'wqDDhk/DscO7VG0=', 'w6LCgMKCwogP', 'w6HDrG/CtiY=', 'wpXCs8O3woAH', 'CcOjb8ONwp8=', 'w6rCoMKTBQTDtU/Cv8K6wqB3', 'w4Zzw6bDjgw=', 'wprCsAXCm8Kgw5gDw7s=', 'w6ZMQBbChg==', 'wq5Dw4kIeXvDiAfCvA==', 'csO3BlzCiw==', 'w7nDksOXw5/DjMKtw5zDt0s=', 'b19zw4PDmA==', 'GznCl8Kpwo0=', 'SVRmBMOr', 'w4vDq1XDkcKqwpI=', 'w4/DrnDCkQc=', 'LsO3YBjCpw==', 'w7nCqMOxw7HDjw==', 'FSshw57CisK7ZAPDvcOww5M4woB1NMKVA8KUQcKyCMOuw4rCjxZQwpHCpkZIGAJbw4AIwrQDR1bDhMObw7DCmsK8w4g=', 'LMKrBsOywqY=', 'w7NMNAUi', 'CMKAw5JiLV1swrwRTwMtwql5wr8dwpTCnizDtcO/w7XDo8Oxw7JneQnDvA==', 'bsKkw78IDw==', 'w5sSwpbDtsOzDsOeJTlDwrtZL0nCnMOWwqjDuQ==', 'woh2w7s9fQ==', 'woJBw5kCbw==', 'IMKdIMO3wp4=', 'wrBWO05cwpltOALCm0zDrsO+w7zCgFzDgMKLLcKpDh/Cs8O3D8KIw7hOXCIkc1vClcKfwq0Pd0nDgwTDu8KVw7gnWknCilY=', 'esOVPcONAg==', 'w7TCvDjDv21bJMOjwqMKw5fCtcKkw4HClRTDl8OiXsOtw4XCuQ3DjRzDh8OUNEDDtw==', 'wqLDm0/Dq3g=', 'w7vCt8OYw6bDtA==', 'ZgINwo9Y', 'wqZxKcO8wojDsMK/J8Kow5vCmQ==', 'OB5WIsKOPcK+ZzzClEdpPg==', 'PxvDqkHCm8OG', 'wrVrNMOg', 'wpDDkFU=', 'w513w6TDjho=', 'wqPChcOzw7M=', 'w6zCtVTCmGE=', 'J8KbB8Ozwrg=', 'wqkwLMOmwp3Dq2kvw5c=', 'wrVGEMOmwrU=', 'MsKEw5DCr8O1', 'woXDjjHCt30=', 'ScOzUXw=', 'NhHDrUDCjcObWz/DsA==', 'w7Z2Ri3ChA==', 'w43Cl03Co10=', 'w7ZzPsOlwo/DizZr', 'w4JACD8m', 'wq4fA8OBwqI=', 'w40efMKDfg==', 'wqnCkcKfwrgmw4U=', 'JMKqQcOPEWgfw5oOccKV', 'wpnCuMO2woopw6Q9Kkxjw4c7SMK2M8Ob', 'RHnCi8ORwoc=', 'wosZwo4FQw==', 'wqw1P8Omwpo=', 'w4rCu27CmnBjfC8=', 'wrXDrWnDoXxULsKu', 'Y8KrQMOfEQ==', 'w57Cs8Ozw6/Ds8KUCsKv', 'w7k3esKIRA==', 'wpfDicKqO8O1', 'eMO8DcOO', 'Y8KsQcOLAWQ=', 'T8O6VhXCsgk=', 'VjAnwrlvV8O3w6XDiw==', 'w4VvJxgZHHbCmDE=', 'w49gKQU=', 'SXTCicOa', 'w5bCocKcHAQ=', 'CFV4DcO5', 'w4DCoGbCmmI=', 'w4YAwo4GRQ==', 'w6/Dh1rCqQTCscKBFA==', 'acOPDnnCu0TDm2Y=', 'IjEtwqw4wo4yQAM=', 'w4rCtW/Cm3Nsezc=', 'wqzDgELDocOJQ2JWw50=', 'w7kybcKIRSjCisOOwpbCrQ==', 'TmHCgcOSwpE=', 'w5LDryrCkmLDuMKUTSAXwrM=', 'w6TCtXDCmHQ=', 'w6tiNQQP', 'YsOVC0XCrg==', 'w5bDmkkfw6s=', 'w4jCpHPCkn9pTDM=', 'w6rDgVnCoA==', 'w44EwpsOWFTCjg8=', 'OMOzFsOLAg==', 'w6wofsKI', 'wpXDlE3DksO4', 'wrfDpmDDj3FbOcKu', 'XmN+w5A=', 'wrByaQ==', 'w43CtXfClg==', 'Wzpq', 'w7YJRiY=', 'UyEgw5Q=', 'wrrDqyo=', 'w4YVIMKmSQ==', 'BMOwUQTCshE=', 'wo/Dmlw=', 'w5FzTyzCqg==', 'w7fCp1nCqTgEwpNHwopHJA==', 'w58VwpkOWEQ=', 'JRpKMsKpPQ==', 'w4VsKB8PKmPCuDHCkDw=', 'woUQwp7DvcOf', 'w7bCjcKBwq0twoMDQXAWwpE=', 'w7oBViMww74=', 'XcO8TVPCvg==', 'w7jCh8KBwqwBwo8SYVYUwoXCnHw=', 'IMKBLMOCwo8e', 'H8KCPcOkwos=', 'wrs0wq7Dnw4=', 'w5Fdw6zDnRU=', 'w4jDjHsRw6U=', 'V8O/FxTCuwTDjRPClsKzC8KlKlnCl8Kawr5XHsK0woTCgy/DiMOLwoY1', 'wojCpRnCm8Ktw4g4w6Y=', 'wqrCvcKUFgnDuXbCl8Kxwrs=', 'w6Q4JMO0woLDim9vw580V2I=', 'JMKpQMOIEQ==', 'wpEYwpjDtMOoDMKLIGFHwqo=', 'wqtJw4sBZW/DvA/CrHU=', 'UBI2wph7', 'XHVaDsOt', 'w4TDuETDk8OuwoFBwqQ=', 'w5jCtRhZQMKnwoM=', 'FBY0wrIi', 'w5nDrkLCth0=', 'w6gjwo9qZMKOBA==', 'wqLDk0TDqsKXR2Bdw4DClVs=', 'w6clI8Kdag==', 'w5PDsWEXw6rCiQ==', 'Snh1IGfDqg==', 'WX5kw4Y=', 'w7YBUys6w7c=', 'JMKqw5HCjA==', 'NhdXJMKi', 'w4gbwokMZg==', 'aisiw5nCncK1UR7Cvg==', 'w7zCu0zCoCUrw5tDwoxX', 'w7bCt2/CnnJmVT0D', 'SW9wPWbDvMOM', 'wr/DhkfDtsOfQ2E=', 'WCMhwrIxU8O1w67DlsOXVQ==', 'wrnDsmHDokpTJMK5w7BS', 'wpjCpwrCkcKnw4k=', 'LMO4SsO7wrF6', 'wrvDhg4=', 'IglZJw==', 'w44Awp8Z', 'wozDuyA=', 'wpHCiMOpw6/Csw==', 'I8KsSg==', 'T1d+CsO3', 'QFJhDA==', 'TsKnw58kJA==', 'VGFhOMOb', 'w4jDkm0xw6A=', 'SlJ7HcO5DA==', 'esO0FcObAlQ=', 'wonCo8Oswowsw60q', 'K8Ksw4zCjMO8wpnDk8KsaHfCrFbDm8KLdcKx', 'MsOsT8OnwrBr', 'M8KqXw==', 'wqUpOcOwwpzDrW0rw5U5TQ==', 'w6rCqwnDlMOD', 'w7cywphhVcKT', 'wqxPw4QZb3DDly/CoHUq', 'wqbDo2PDqUU=', 'wqLDrXQ=', 'wpvDoCY=', 'MMOPXsO/wpM=', 'w6k6EcKW', 'LMKKJMOFwoYZJ1I=', 'w4kwwotraQ==', 'w5NcThLCjA==', 'wrzCuMODwoAP', 'SGtiw5HDkzA=', 'wovDlF7DiQfDsQ==', 'wrLDq2XDoHJd', 'QFJkHQ==', 'XMKFw58mK18=', 'w5nCvMOgwoU+', 'wqnDilLDpcOYXGw=', 'LsKqw4zCnA==', 'wrvChsKGwqopwpkbaQ==', 'wpQVwp3Dm8OrCsOVIg==', 'KcO4QMOzwrJ6wq8=', 'XlJwAcOoMzFnNsKbF8OgKsOO', 'QTonw5fCmcK7bg==', 'RyEpw5jCisKTeRnCpcKzw4U+wpov', 'fsO0F8OL', 'wpzCpcOxwpk=', 'McOjWsOg', 'wovCoz7DgcOsbH7Dn8O/YcO9w6cLVMKIeMK0LCFDw6cGwonCgMOVw5FbwpF6woTCmQhFw7Z7w5jCisK2wr8ZwpJNwrvColsDcXDCoXd5aHs=', 'w6ANXygjw7UnXV/ChFY=', 'a8OEB1fCtkvDjGY=', 'ex9RNsKrJsK8JxLCkUg2Y8Oiw6JaSn8Dwpsuw4rDgw==', 'w6TDiUTChwnCvsKWFA==', 'I8KsTsOXG3dGw7QKccONbcKfGkElaQ==', 'IcKsQcOf', 'VcKIw58BIlB+wrw=', 'w4dzNkQJPXrCmDvCkGZALhXCm8OeasOLw47DgUnDs0YKw4nCh8Ki', 'wqElNcOMwoU=', 'w4x3FwIt', 'E8OiRcOBwpo=', 'wr3DscKoCcOH', 'VMOzKcOtAA==', 'w7HCsVXChF8=', 'MRJLNsKlJcK+', 'dCI+wrp2', 'wrTCjcO3w7PChMOcaBRwwo9twrXChMOp', 'fsOrJlnCvw==', 'w4HCpT3DhcOgLWzClsO1bMOhw7FFFsKfeQ==', 'w7gEUw8+', 'w4UEwqxUeA==', 'wp9sw5IZXQ==', 'wrbDnl7CtwzCvcKJAg==', 'w69mEiwP', 'W2V+w4DDmDxvTzwTSQ==', 'w74XwrgYcg==', 'AsOyRBvCvg==', 'RsOQTlPCqw==', 'TWY+', 'D8O5biTCmA==', 'OxvCoA==', 'w64dwpEcXQ==', 'FMKPw5QsOlR1wrtPH0QgwrM6wrgdwpzCi3PDucOuw7TDpMO8w7V8aEnCrwg5BVvDrQ7DoWbCrS/ChsOjASXCmcKe', 'AAzCisKTwq0=', 'wpbDvw1bRMK6w5XCpA==', 'wqfDm8KbEMOD', 'w6TCvsKYJy0=', 'w4kdwpDCuMOkB8OHImcTw7xUNQrChMOawqPDucONIcO9wqMFwrPCqsOawpjCgT0=', 'w6xQw6HDoTg=', 'wrDCh0TCtATCscObWxoQF8KU', 'w4XChhlJbw==', 'wrDCpQzCssKF', 'JiITwpQc', 'wqzCrxnCqcKt', 'wqnCpsOdw7/CoQ==', 'w6fDl1sZw40=', 'w57DncO2w5/DnA==', 'b8OLL1zCiQ==', 'aVtZw6fDuQ==', 'w7EEVsKMQQ==', 'w4rDpnzCoAI=', 'w5XCucOow6jDmw==', 'ExLCvsK2wrk=', 'JcOPThHClA==', 'w5XCtCDDjcOU', 'w7YBUys6w7dJQEvCnlE=', 'wpEYwpjDtMOoDMKLPH1A', 'b37CjcOXwqk=', 'w7fDr8KBBcKcwrjCvsK0Q1Yzw4vDimFPw7DCn0NCesKOH8K+wo1HWsOr', 'w7fDhXcKw7Y=', 'w6BQbgvCrQl5', 'wq/Dt8KqH8O1', 'w7/DncObw5jDmg==', 'w5vDhE7CsCY=', 'w6jChcOlw7LDncOlZA5pw4Q+wrTChsO5wr9jw5pkw6XDhMKFw7Uaw43CsCLDjw9WeCvClA/CgcOqfkfDsg==', 'wpDClMOywoAN', 'woTDiFLDqHo=', 'wr7Dq2DDqHhU', 'wqXCi8O+w6/ClcOpeTdgw49r', 'wp7CvsOrwp8uw7AsR01kw4E=', 'V8KDw5U2K0l5woIHHFQ=', 'wrxIw4Ua', 'wp00wqnDjAPCsxdgCX7DuQ==', 'w4rDqmYcw6vCgg==', 'wq7DjE/DsMOfSH1+w4HClFk=', 'wqh7KcO9wr7DoMKkHQ==', 'LMK8V8OiHw=='];
(function (_0x52df4d, _0x45f31e) {
    var _0x3583c9 = function (_0x19c809) {
        while (--_0x19c809) {
            _0x52df4d['push'](_0x52df4d['shift']());
        }
    };
    _0x3583c9(++_0x45f31e);
}(_kod_0x2daa, 0x15e));
var _kod_0x200f = function (_0x2c7e9a, _0x421767) {
    _0x2c7e9a = _0x2c7e9a - 0x0;
    var _0x2ba105 = _kod_0x2daa[_0x2c7e9a];
    if (_kod_0x200f['PWIxIn'] === undefined) {
        (function () {
            var _0x1ce864;
            try {
                var _0x2c44ab = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                _0x1ce864 = _0x2c44ab();
            } catch (_0x4b8d4d) {
                _0x1ce864 = window;
            }
            var _0x4b1476 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x1ce864['atob'] || (_0x1ce864['atob'] = function (_0x5a4ac4) {
                var _0x50248b = String(_0x5a4ac4)['replace'](/=+$/, '');
                for (var _0xa79538 = 0x0, _0x5434eb, _0x22a13c, _0x33a599 = 0x0, _0x4e0e0e = ''; _0x22a13c = _0x50248b['charAt'](_0x33a599++); ~_0x22a13c && (_0x5434eb = _0xa79538 % 0x4 ? _0x5434eb * 0x40 + _0x22a13c : _0x22a13c, _0xa79538++ % 0x4) ? _0x4e0e0e += String['fromCharCode'](0xff & _0x5434eb >> (-0x2 * _0xa79538 & 0x6)) : 0x0) {
                    _0x22a13c = _0x4b1476['indexOf'](_0x22a13c);
                }
                return _0x4e0e0e;
            });
        }());
        var _0xca467e = function (_0x2d9de0, _0x340982) {
            var _0x318364 = [], _0xf811e2 = 0x0, _0x3ac886, _0x2f0907 = '', _0x20539f = '';
            _0x2d9de0 = atob(_0x2d9de0);
            for (var _0x3df66e = 0x0, _0x53206d = _0x2d9de0['length']; _0x3df66e < _0x53206d; _0x3df66e++) {
                _0x20539f += '%' + ('00' + _0x2d9de0['charCodeAt'](_0x3df66e)['toString'](0x10))['slice'](-0x2);
            }
            _0x2d9de0 = decodeURIComponent(_0x20539f);
            for (var _0x29f1f1 = 0x0; _0x29f1f1 < 0x100; _0x29f1f1++) {
                _0x318364[_0x29f1f1] = _0x29f1f1;
            }
            for (_0x29f1f1 = 0x0; _0x29f1f1 < 0x100; _0x29f1f1++) {
                _0xf811e2 = (_0xf811e2 + _0x318364[_0x29f1f1] + _0x340982['charCodeAt'](_0x29f1f1 % _0x340982['length'])) % 0x100;
                _0x3ac886 = _0x318364[_0x29f1f1];
                _0x318364[_0x29f1f1] = _0x318364[_0xf811e2];
                _0x318364[_0xf811e2] = _0x3ac886;
            }
            _0x29f1f1 = 0x0;
            _0xf811e2 = 0x0;
            for (var _0x1a2b4b = 0x0; _0x1a2b4b < _0x2d9de0['length']; _0x1a2b4b++) {
                _0x29f1f1 = (_0x29f1f1 + 0x1) % 0x100;
                _0xf811e2 = (_0xf811e2 + _0x318364[_0x29f1f1]) % 0x100;
                _0x3ac886 = _0x318364[_0x29f1f1];
                _0x318364[_0x29f1f1] = _0x318364[_0xf811e2];
                _0x318364[_0xf811e2] = _0x3ac886;
                _0x2f0907 += String['fromCharCode'](_0x2d9de0['charCodeAt'](_0x1a2b4b) ^ _0x318364[(_0x318364[_0x29f1f1] + _0x318364[_0xf811e2]) % 0x100]);
            }
            return _0x2f0907;
        };
        _kod_0x200f['xRvJDR'] = _0xca467e;
        _kod_0x200f['NDFTmv'] = {};
        _kod_0x200f['PWIxIn'] = !![];
    }
    var _0x5d3384 = _kod_0x200f['NDFTmv'][_0x2c7e9a];
    if (_0x5d3384 === undefined) {
        if (_kod_0x200f['sRecDF'] === undefined) {
            _kod_0x200f['sRecDF'] = !![];
        }
        _0x2ba105 = _kod_0x200f['xRvJDR'](_0x2ba105, _0x421767);
        _kod_0x200f['NDFTmv'][_0x2c7e9a] = _0x2ba105;
    } else {
        _0x2ba105 = _0x5d3384;
    }
    return _0x2ba105;
};
define(_kod_0x200f('0x0', 'Wk0G'), [], function (_0x138506, _0x5b11da) {
    var _0x49a69a = {};
    _0x49a69a[_kod_0x200f('0x1', 'NTwa')] = function (_0x584f9e, _0x3234e2) {
        return _0x584f9e === _0x3234e2;
    };
    _0x49a69a['hMiCW'] = 'nNppj';
    _0x49a69a[_kod_0x200f('0x2', 'Wk0G')] = function (_0xf7ee45, _0x28ef95) {
        return _0xf7ee45(_0x28ef95);
    };
    _0x49a69a[_kod_0x200f('0x3', 'j90Z')] = function (_0x4b3c61, _0x4a637f) {
        return _0x4b3c61 && _0x4a637f;
    };
    _0x49a69a[_kod_0x200f('0x4', 'sjfR')] = _kod_0x200f('0x5', 'A0ZR');
    _0x49a69a[_kod_0x200f('0x6', 'SNFI')] = _kod_0x200f('0x7', 'pOzi');
    _0x49a69a[_kod_0x200f('0x8', 'c)fP')] = _kod_0x200f('0x9', 'tM4G');
    _0x49a69a[_kod_0x200f('0xa', ']J&I')] = _kod_0x200f('0xb', '20$N');
    _0x49a69a[_kod_0x200f('0xc', '*ub1')] = function (_0x45266d, _0x59dac9) {
        return _0x45266d !== _0x59dac9;
    };
    _0x49a69a[_kod_0x200f('0xd', 'WViS')] = 'goSHU';
    _0x49a69a[_kod_0x200f('0xe', 'WpY(')] = _kod_0x200f('0xf', 'oznb');
    _0x49a69a[_kod_0x200f('0x10', 'Wk0G')] = _kod_0x200f('0x11', 'HLSS');
    _0x49a69a[_kod_0x200f('0x12', 'frhh')] = function (_0x29bb58, _0x3ba88e) {
        return _0x29bb58 != _0x3ba88e;
    };
    _0x49a69a[_kod_0x200f('0x13', 'M*8^')] = 'string';
    _0x49a69a['ibxao'] = function (_0x1cbad4, _0x272772) {
        return _0x1cbad4 + _0x272772;
    };
    _0x49a69a['LSUDB'] = function (_0x11347c, _0x300585) {
        return _0x11347c + _0x300585;
    };
    _0x49a69a[_kod_0x200f('0x14', 'knYV')] = '<ul\x20class=\x22context-menu-list\x20';
    _0x49a69a['XraIG'] = _kod_0x200f('0x15', 'HLSS');
    _0x49a69a[_kod_0x200f('0x16', 'M*8^')] = _kod_0x200f('0x17', '2bKq');
    _0x49a69a[_kod_0x200f('0x18', 'frhh')] = _kod_0x200f('0x19', '!BNj');
    _0x49a69a[_kod_0x200f('0x1a', ')mKX')] = _kod_0x200f('0x1b', 'Pix5');
    _0x49a69a['FDUli'] = function (_0x520955, _0x1cae7b) {
        return _0x520955 + _0x1cae7b;
    };
    _0x49a69a[_kod_0x200f('0x1c', 'sjfR')] = function (_0x3e489f, _0x1c5927) {
        return _0x3e489f + _0x1c5927;
    };
    _0x49a69a[_kod_0x200f('0x1d', 'Ntyp')] = _kod_0x200f('0x1e', 'mfiB');
    _0x49a69a[_kod_0x200f('0x1f', '1R&c')] = _kod_0x200f('0x20', 'oznb');
    _0x49a69a[_kod_0x200f('0x21', 'Pix5')] = function (_0x2ac6fb, _0x5a889b) {
        return _0x2ac6fb(_0x5a889b);
    };
    _0x49a69a[_kod_0x200f('0x22', 'g5gk')] = function (_0x31c8a1, _0x4dae92) {
        return _0x31c8a1 == _0x4dae92;
    };
    _0x49a69a['fuRAT'] = 'xQOId';
    _0x49a69a[_kod_0x200f('0x23', 'x3kH')] = function (_0x1cde8d, _0x20a828) {
        return _0x1cde8d !== _0x20a828;
    };
    _0x49a69a[_kod_0x200f('0x24', 'g5gk')] = function (_0x2f8887, _0x20546e) {
        return _0x2f8887 + _0x20546e;
    };
    _0x49a69a[_kod_0x200f('0x25', 'tM4G')] = function (_0x1cbc32, _0x42c474) {
        return _0x1cbc32 + _0x42c474;
    };
    _0x49a69a[_kod_0x200f('0x26', 'HLLq')] = function (_0x40f071, _0x2a64d3) {
        return _0x40f071 + _0x2a64d3;
    };
    _0x49a69a[_kod_0x200f('0x27', '9pmA')] = _kod_0x200f('0x28', ']J&I');
    _0x49a69a[_kod_0x200f('0x29', 'HLSS')] = _kod_0x200f('0x2a', 'dEVq');
    _0x49a69a[_kod_0x200f('0x2b', 'oznb')] = function (_0xe2941c, _0x3c6ff6) {
        return _0xe2941c >= _0x3c6ff6;
    };
    _0x49a69a[_kod_0x200f('0x2c', 'WCE(')] = function (_0x33fb28, _0x4e2616) {
        return _0x33fb28 !== _0x4e2616;
    };
    _0x49a69a[_kod_0x200f('0x2d', ')mKX')] = _kod_0x200f('0x2e', 'M*8^');
    _0x49a69a[_kod_0x200f('0x2f', '20$N')] = _kod_0x200f('0x30', '*ub1');
    _0x49a69a['gArDg'] = _kod_0x200f('0x31', 'mfiB');
    _0x49a69a[_kod_0x200f('0x32', '%lV(')] = _kod_0x200f('0x33', 'sjfR');
    _0x49a69a['pNMgq'] = 'minus';
    _0x49a69a[_kod_0x200f('0x34', 'HLLq')] = _kod_0x200f('0x35', 'Lroq');
    _0x49a69a[_kod_0x200f('0x36', 'sjfR')] = _kod_0x200f('0x37', '9pmA');
    _0x49a69a[_kod_0x200f('0x38', 'oznb')] = _kod_0x200f('0x39', 'tM4G');
    _0x49a69a[_kod_0x200f('0x3a', 'JewW')] = 'dblclick';
    _0x49a69a[_kod_0x200f('0x3b', 'EJ[2')] = _kod_0x200f('0x3c', 'EJ[2');
    $[_kod_0x200f('0x3d', 'tM4G')] || ($[_kod_0x200f('0x3e', 'JewW')] = {}), $[_kod_0x200f('0x3f', '!BNj')][_kod_0x200f('0x40', 'WpY(')] = function (_0x193d7d, _0x910500, _0x1b7504) {
        _0x193d7d && ($[_kod_0x200f('0x41', '*O7U')][_kod_0x200f('0x42', 'HLLq')](), $(_0x193d7d)[_kod_0x200f('0x41', '*O7U')]({
            'x': _0x910500,
            'y': _0x1b7504
        }));
    }, $[_kod_0x200f('0x43', 'lT&2')][_kod_0x200f('0x44', 'hsw*')] = function () {
        if (_0x49a69a[_kod_0x200f('0x45', '!vw7')](_0x49a69a[_kod_0x200f('0x46', '!BNj')], _kod_0x200f('0x47', 'tM4G'))) {
            var _0x4c75e1 = $['contextMenu'][_kod_0x200f('0x48', '20$N')](_0x138506, _0x5b11da);
            _0x4c75e1 && _0x4c75e1[_kod_0x200f('0x49', '!BNj')]();
        } else {
            var _0x138506 = _0x49a69a['jtQiG']($, _kod_0x200f('0x4a', 'hsw*')),
                _0x5b11da = _0x138506['data'](_kod_0x200f('0x4b', 'knYV'));
            if (_0x49a69a[_kod_0x200f('0x4c', 'A0ZR')](_0x138506, _0x5b11da)) {
                if (_0x49a69a['ppFxs'] !== 'HnPBg') {
                    f[_kod_0x200f('0x4d', ')mKX')](_0x138506, _0x5b11da);
                } else {
                    var _0x3d508e = _0x5b11da['$menu'], _0x1d7e57 = _0x49a69a[_kod_0x200f('0x4e', 'knYV')];
                    _0x3d508e['find'](_kod_0x200f('0x4f', 'SNFI'))[_kod_0x200f('0x50', 'iz#z')](_0x1d7e57), Hook[_kod_0x200f('0x51', 'tM4G')]('rightMenu.show', _0x5b11da['selector'], _0x138506, _0x3d508e), Hook[_kod_0x200f('0x52', 'Wk0G')](_0x49a69a[_kod_0x200f('0x53', '20$N')] + _0x5b11da[_kod_0x200f('0x54', 'dEVq')], _0x138506, _0x3d508e);
                }
            }
        }
    }, $[_kod_0x200f('0x55', 'PpGA')][_kod_0x200f('0x56', 'x3kH')] = function () {
        if (_0x49a69a['jlaHk'](_0x49a69a[_kod_0x200f('0x57', '20$N')], 'kEAFJ')) {
            return 0x0 == $(_kod_0x200f('0x58', 'tM4G'))[_kod_0x200f('0x59', 'SNFI')] ? !0x1 : !0x0;
        } else {
            $['contextMenu'][_kod_0x200f('0x5a', 'g5gk')](_0x138506, _0x5b11da, _0x49a69a[_kod_0x200f('0x5b', '3Vxz')], !0x0);
        }
    }, $[_kod_0x200f('0x5c', '1R&c')]['hidden'] = function () {
        _0x49a69a['jtQiG']($, _kod_0x200f('0x5d', 'Pix5'))['filter'](_0x49a69a[_kod_0x200f('0x5e', 'sjfR')])['filter'](_kod_0x200f('0x5f', 'WHC]'))[_kod_0x200f('0x60', 'g5gk')](_kod_0x200f('0x61', 'PpGA'));
    }, $[_kod_0x200f('0x62', 'Pix5')]['menuItem'] = function (_0xcc7eea, _0x3a776e) {
        if (_kod_0x200f('0x63', 'HLSS') === _kod_0x200f('0x64', '%lV(')) {
            var _0x4a837d = $[_kod_0x200f('0x65', '9pmA')]['menuItem'](_0xcc7eea, _0x3a776e);
            _0x4a837d && (_0x101a8e ? _0x4a837d[_kod_0x200f('0x66', 'j90Z')](_0x3997aa) : _0x4a837d[_kod_0x200f('0x67', 'Pix5')](_0x3997aa));
        } else {
            var _0x3997aa, _0x101a8e = $['contextMenu'][_kod_0x200f('0x68', 'frhh')];
            for (var _0x486bef in _0x101a8e) if (_0x101a8e[_0x486bef][_kod_0x200f('0x69', '*O7U')] == _0xcc7eea || _0x101a8e[_0x486bef][_kod_0x200f('0x6a', 'j90Z')] == _0x49a69a[_kod_0x200f('0x6b', 'mfiB')]('.', _0xcc7eea) || _0x49a69a['YpeLF'](_0x101a8e[_0x486bef][_kod_0x200f('0x6c', 'SNFI')], '#' + _0xcc7eea)) {
                _0xcc7eea = _0x101a8e[_0x486bef][_kod_0x200f('0x6d', 'knYV')], _0x3997aa = _0x101a8e[_0x486bef];
                break;
            }
            if (_0x49a69a[_kod_0x200f('0x6e', 'yhTY')](void 0x0, _0x3a776e)) return _0x3997aa['items'];
            if (!_0x3997aa || !_0x3997aa[_kod_0x200f('0x6f', 'NTwa')]) return !0x1;
            'string' == typeof _0x3a776e && (_0x3a776e = [_0x3a776e]);
            for (var _0x3af6df = !0x1, _0xbfe562 = 0x0; _0xbfe562 < _0x3a776e['length']; _0xbfe562++) {
                if ('kHavi' === 'jliCz') {
                    var _0x24916f = _kod_0x200f('0x70', 'Lroq')['split']('|'), _0x1b5593 = 0x0;
                    while (!![]) {
                        switch (_0x24916f[_0x1b5593++]) {
                            case'0':
                                var _0x13596e = _0x10a375['parent'](_kod_0x200f('0x71', 'Lroq'))[_kod_0x200f('0x72', 'JewW')](_0x49a69a[_kod_0x200f('0x73', ')mKX')]);
                                continue;
                            case'1':
                                if (_0x13596e && (_0x13596e[_kod_0x200f('0x74', '!BNj')] || (_0x13596e[_kod_0x200f('0x75', 'g5gk')] = {}), _0x13596e['items'][_0x3a776e] = _0x4fa67b), _0x49a69a[_kod_0x200f('0x12', 'frhh')](_0x49a69a['idsli'], typeof _0x3af6df) && (_0xcc7eea[_kod_0x200f('0x76', 'knYV')] || (_0xcc7eea[_kod_0x200f('0x77', 'pOzi')] = {}), _0xcc7eea[_kod_0x200f('0x78', 'kevY')][_0x3a776e] = _0x4fa67b, _0x486bef[_kod_0x200f('0x79', 'tM4G')][_0x3a776e] = _0x4fa67b, _0x486bef[_kod_0x200f('0x7a', 'Ntyp')][_0x3a776e] = function (_0x3e2c1c, _0x57901f) {
                                    _0x3af6df[_kod_0x200f('0x7b', '3Vxz')](_0x3e2c1c, _0x57901f);
                                }, _0x3af6df[_kod_0x200f('0x7c', 'ieKP')] && (_0x486bef['accesskeys'][_0x3af6df[_kod_0x200f('0x7d', 'WCE(')]] = _0x4fa67b), _0x3af6df['items'])) {
                                    var _0x45db71 = _0x3a776e + _kod_0x200f('0x7e', 'Lroq'),
                                        _0x67aa8 = _0x49a69a[_kod_0x200f('0x7f', 'GOb%')](_0x49a69a[_kod_0x200f('0x80', 'frhh')](_0x49a69a[_kod_0x200f('0x81', 'sjfR')], _0x3a776e) + _kod_0x200f('0x82', 'frhh'), _0x45db71) + _kod_0x200f('0x83', 'ieKP');
                                    $(_0x67aa8)['appendTo'](_0x10a375), _0x4fa67b[_kod_0x200f('0x84', 'sjfR')] = _0x10a375[_kod_0x200f('0x85', 'c)fP')]('ul.' + _0x3a776e), _0x4fa67b[_kod_0x200f('0x86', 'WHC]')] = null, _0x4fa67b['appendTo'] = _0x4fa67b[_kod_0x200f('0x87', 'WCE(')], _0x4fa67b[_kod_0x200f('0x88', 'Wk0G')] = _kod_0x200f('0x89', 'GOb%'), _0x10a375[_kod_0x200f('0x8a', 'M*8^')](_0x49a69a[_kod_0x200f('0x8b', 'Ntyp')], _0x4fa67b)[_kod_0x200f('0x8c', 'g5gk')](_kod_0x200f('0x8d', '*O7U')), _0x10a375['find'](_0x49a69a[_kod_0x200f('0x8e', 'Wk0G')](_0x49a69a[_kod_0x200f('0x8f', 'iz#z')], _0x3a776e))[_kod_0x200f('0x90', 'mfiB')]({
                                        'contextMenuRoot': _0x486bef,
                                        'contextMenu': _0x4fa67b
                                    }), _0x10a375[_kod_0x200f('0x91', 'sjfR')](_0x49a69a[_kod_0x200f('0x92', '%lV(')](_kod_0x200f('0x93', '5$FK'), _0x45db71))[_kod_0x200f('0x94', 'hsw*')]({
                                        'contextMenuRoot': _0x486bef,
                                        'contextMenuKey': _0x45db71,
                                        'contextMenu': _0x4fa67b
                                    }), _0x4fa67b[_kod_0x200f('0x95', '9pmA')] || (_0x4fa67b[_kod_0x200f('0x74', '!BNj')] = {}), _0x4fa67b['items'][_0x45db71] = {
                                        '$input': null,
                                        '$label': null,
                                        'icon': '',
                                        'name': '',
                                        '_name': '',
                                        '$node': _0x10a375[_kod_0x200f('0x96', 'NTwa')](_0x49a69a[_kod_0x200f('0x97', '5$FK')] + _0x45db71)
                                    }, i(_0x4fa67b, _0x3af6df[_kod_0x200f('0x98', 'JewW')], '.' + _0x45db71);
                                }
                                continue;
                            case'2':
                                _0x10a375[_kod_0x200f('0x99', ')mKX')]({
                                    'contextMenu': _0x13596e,
                                    'contextMenuKey': _0x3a776e,
                                    'contextMenuRoot': _0x486bef
                                });
                                continue;
                            case'3':
                                0x0 == _0x2ce4dc['length'] && _0xcc7eea['commands'][_0x4429bc] && (_0x2ce4dc = _0xcc7eea['commands'][_0x4429bc][_kod_0x200f('0x9a', 'iz#z')]), 0x0 == _0x2ce4dc['length'] && (_0x2ce4dc = _0xcc7eea[_kod_0x200f('0x9b', 'hsw*')][_kod_0x200f('0x9c', 'Lroq')]()[_kod_0x200f('0x9d', 'HLLq')]()), _0x3997aa ? _0x2ce4dc[_kod_0x200f('0x9e', ']J&I')](_0x10a375) : _0x101a8e && _0x2ce4dc[_kod_0x200f('0x9f', 'M*8^')](_0x10a375);
                                continue;
                            case'4':
                                if (_kod_0x200f('0xa0', 'Pix5') == typeof _0x3af6df) var _0x67aa8 = _kod_0x200f('0xa1', 'dEVq') + _0x2a48c1 + _0x49a69a['Aizwk']; else {
                                    var _0x4eb1f1 = _0x3af6df['name'];
                                    _0x3af6df[_kod_0x200f('0xa2', 'WHC]')] && (_0x4eb1f1 += _0x49a69a[_kod_0x200f('0xa3', 'Ntyp')](_kod_0x200f('0xa4', 'DSK9'), _0x3af6df['accesskey']) + _0x49a69a['vqEHc']);
                                    var _0x67aa8 = _0x49a69a[_kod_0x200f('0xa5', 'oznb')](_0x49a69a[_kod_0x200f('0xa6', 'JewW')](_0x49a69a['jZuaw'](_0x49a69a['mqeVL'], _0x2a48c1), '\x22>') + _0x1dd7f2(_0x3af6df[_kod_0x200f('0xa7', ')mKX')]) + _kod_0x200f('0xa8', '*O7U'), _0x4eb1f1) + _0x49a69a[_kod_0x200f('0xa9', 'j90Z')];
                                }
                                continue;
                            case'5':
                                var _0x10a375 = _0x49a69a[_kod_0x200f('0xaa', 'x3kH')]($, _0x67aa8)[_kod_0x200f('0xab', 'g5gk')](),
                                    _0x4429bc = _0x3997aa || _0x101a8e,
                                    _0x2ce4dc = _0xcc7eea['$menu'][_kod_0x200f('0xac', 'dEVq')](_0x4429bc)['first']();
                                continue;
                            case'6':
                                _0x3af6df[_kod_0x200f('0xad', '20$N')] = _0x3af6df[_kod_0x200f('0xae', 'sjfR')] || '';
                                continue;
                            case'7':
                                var _0x2a48c1 = _0x49a69a['jZuaw'](_0x3a776e + '\x20', _0x3af6df[_kod_0x200f('0xaf', 'JewW')]);
                                continue;
                            case'8':
                                var _0x4fa67b = {};
                                _0x4fa67b['$input'] = null;
                                _0x4fa67b[_kod_0x200f('0xb0', 'Ntyp')] = null;
                                _0x4fa67b['accesskey'] = _0x3af6df.accesskey;
                                _0x4fa67b[_kod_0x200f('0xb1', 'pOzi')] = _0x3af6df.className;
                                _0x4fa67b[_kod_0x200f('0xb2', '2bKq')] = _0x3af6df.icon;
                                _0x4fa67b[_kod_0x200f('0xb3', 'JewW')] = _0x3af6df.name;
                                _0x4fa67b['_name'] = _0x4eb1f1;
                                _0x4fa67b[_kod_0x200f('0xb4', 'tM4G')] = _0x10a375;
                                continue;
                        }
                        break;
                    }
                } else {
                    var _0x1dd7f2 = _0x3997aa[_kod_0x200f('0xb5', 'ieKP')][_0x3a776e[_0xbfe562]] && _0x3997aa[_kod_0x200f('0xb6', 'mfiB')][_0x3a776e[_0xbfe562]]['$node'];
                    _0x1dd7f2 && 0x0 != _0x1dd7f2[_kod_0x200f('0xb7', '5$FK')] && (_0x3af6df = _0x3af6df ? _0x3af6df[_kod_0x200f('0xb8', 'hsw*')](_0x1dd7f2) : _0x1dd7f2);
                }
            }
            return _0x3af6df;
        }
    }, $[_kod_0x200f('0xb9', 'SNFI')][_kod_0x200f('0xba', '5$FK')] = function (_0x22d630, _0x3b351e, _0x4639b9, _0x1fd6f2) {
        var _0x42586b = $[_kod_0x200f('0x65', '9pmA')][_kod_0x200f('0x48', '20$N')](_0x22d630, _0x3b351e);
        _0x42586b && (_0x1fd6f2 ? _0x42586b[_kod_0x200f('0xbb', 'HLLq')](_0x4639b9) : _0x42586b['removeClass'](_0x4639b9));
    }, $['contextMenu'][_kod_0x200f('0xbc', 'iz#z')] = function (_0x535a73, _0x58d4c0) {
        $[_kod_0x200f('0xbd', 'yhTY')][_kod_0x200f('0xbe', 'ieKP')](_0x535a73, _0x58d4c0, _kod_0x200f('0xbf', '*ub1'), !0x0);
    }, $[_kod_0x200f('0xbd', 'yhTY')]['menuItemEnable'] = function (_0x4cbe42, _0x5fe163) {
        $[_kod_0x200f('0xc0', 'oznb')][_kod_0x200f('0xc1', 'oznb')](_0x4cbe42, _0x5fe163, _0x49a69a[_kod_0x200f('0xc2', '!BNj')], !0x1);
    }, $[_kod_0x200f('0xc3', 'WCE(')][_kod_0x200f('0xc4', 'PpGA')] = function (_0x4a61ce, _0x5984be) {
        var _0x47363c = {};
        _0x47363c['sIUUk'] = function (_0x2dc504, _0x17b3cf) {
            return _0x2dc504 >= _0x17b3cf;
        };
        if (_0x49a69a[_kod_0x200f('0xc5', 'oznb')] === 'xQOId') {
            $['contextMenu']['menuItemClass'](_0x4a61ce, _0x5984be, _kod_0x200f('0xc6', 'WViS'), !0x0);
        } else {
            for (var _0x32eff6 in _0x5984be) f[_kod_0x200f('0xc7', 'mfiB')]({
                'key': _0x32eff6,
                'value': _0x5984be[_0x32eff6]
            });
            for (var _0x3d8629 = f[_kod_0x200f('0xc8', 'Wk0G')] - 0x1; _0x47363c[_kod_0x200f('0xc9', 'WCE(')](_0x3d8629, 0x0); _0x3d8629--) g[f[_0x3d8629][_kod_0x200f('0xca', 'NTwa')]] = f[_0x3d8629][_kod_0x200f('0xcb', 'NTwa')];
        }
    }, $[_kod_0x200f('0xcc', 'frhh')][_kod_0x200f('0xcd', 'WHC]')] = function (_0x5f26c2, _0x301ec2) {
        $[_kod_0x200f('0x65', '9pmA')][_kod_0x200f('0xce', 'tM4G')](_0x5f26c2, _0x301ec2, 'hidden', !0x1);
    }, $[_kod_0x200f('0xcf', 'NTwa')][_kod_0x200f('0xd0', 'iz#z')] = function (_0x5c509f, _0x50b119) {
        var _0x4c8915 = $[_kod_0x200f('0x3e', 'JewW')][_kod_0x200f('0xd1', ']J&I')](_0x5c509f, _0x50b119);
        _0x4c8915 && _0x4c8915[_kod_0x200f('0xd2', 'DSK9')]();
    }, $['contextMenu'][_kod_0x200f('0xd3', 'lT&2')] = function (_0x6da12b, _0x4c95e6, _0x27417c, _0x1c9a9a) {
        var _0x2a1b4c = {};
        _0x2a1b4c['xWeHQ'] = function (_0xcc8dc7, _0x660b98) {
            return _0xcc8dc7 + _0x660b98;
        };
        _0x2a1b4c['WUcwe'] = _0x49a69a.mqeVL;
        _0x2a1b4c[_kod_0x200f('0xd4', 'kevY')] = '<span>';
        _0x2a1b4c[_kod_0x200f('0xd5', 'oznb')] = _0x49a69a.GFiZG;
        _0x2a1b4c['znqJE'] = function (_0x51b271, _0x13641a) {
            return _0x51b271(_0x13641a);
        };
        if (_0x49a69a[_kod_0x200f('0xd6', 'JewW')]('pxplF', _kod_0x200f('0xd7', 'j90Z'))) {
            var _0x5dde0b = !0x1, _0x13aa0e = $[_kod_0x200f('0xd8', 'Ntyp')][_kod_0x200f('0xd9', '1R&c')];
            for (var _0x4353ec in _0x13aa0e) if (_0x13aa0e[_0x4353ec][_kod_0x200f('0xda', 'g5gk')] == _0x4c95e6) {
                if ('tyHoN' === _kod_0x200f('0xdb', 'Lroq')) {
                    _0x5dde0b = _0x13aa0e[_0x4353ec];
                    break;
                } else {
                    var _0x3bb960 = _0x13aa0e['name'];
                    _0x13aa0e[_kod_0x200f('0xdc', 'WpY(')] && (_0x3bb960 += _0x2a1b4c[_kod_0x200f('0xdd', ']J&I')]('(<span\x20class=\x22context-menu-accesskey\x22>' + _0x13aa0e[_kod_0x200f('0xde', '9pmA')], '</span>)'));
                    var _0x453006 = _0x2a1b4c['xWeHQ'](_0x2a1b4c[_kod_0x200f('0xdf', 'HLSS')], _0x4353ec) + '\x22>' + _0x3d8992(_0x13aa0e['icon']) + _0x2a1b4c['wbmQG'] + _0x3bb960 + _0x2a1b4c[_kod_0x200f('0xe0', ')mKX')];
                }
            }
            if (_0x5dde0b && _0x6da12b) {
                if (_0x49a69a[_kod_0x200f('0xe1', '5$FK')] !== 'udQjF') {
                    var _0x3d8992 = function (_0x583718) {
                        return _0x583718 ? _0x49a69a['grRTF'](-0x1, _0x583718['indexOf']('/')) ? '<i\x20class=\x22font-icon\x22><img\x20draggable=\x22false\x22\x20class=\x22x-item-file\x22\x20ondragstart=\x22return\x20false;\x22\x20src=\x22' + _0x583718 + _kod_0x200f('0xe2', 'g5gk') : _0x49a69a['EzpWn']('<i\x20class=\x22font-icon\x20', _0x583718) + '\x22></i>' : '';
                    }, _0x57c812 = function (_0x31ea6c, _0x24b05b, _0xc724fa, _0x1da99f) {
                        var _0x54edf9 = {};
                        _0x54edf9[_kod_0x200f('0xe3', 'oznb')] = function (_0x40eaa3, _0x51fd33) {
                            return _0x40eaa3(_0x51fd33);
                        };
                        _0x54edf9[_kod_0x200f('0xe4', 'M*8^')] = 'osOUR';
                        _0x54edf9[_kod_0x200f('0xe5', 'WCE(')] = function (_0x481f03, _0x3316ed) {
                            return _0x49a69a.oBMdQ(_0x481f03, _0x3316ed);
                        };
                        _0x54edf9['pXWnX'] = _kod_0x200f('0xe6', 'WHC]');
                        _0x54edf9[_kod_0x200f('0xe7', 'DSK9')] = function (_0x2832e1, _0x4644d8) {
                            return _0x2832e1 + _0x4644d8;
                        };
                        _0x54edf9[_kod_0x200f('0xe8', 'Wk0G')] = _kod_0x200f('0xe9', '!BNj');
                        _0x54edf9[_kod_0x200f('0xea', '!BNj')] = _kod_0x200f('0xeb', 'mfiB');
                        _0x54edf9[_kod_0x200f('0xec', 'WpY(')] = _0x49a69a.idsli;
                        _0x54edf9[_kod_0x200f('0xed', 'WpY(')] = function (_0x3bbea2, _0x139fc7) {
                            return _0x49a69a.ETYaC(_0x3bbea2, _0x139fc7);
                        };
                        _0x54edf9[_kod_0x200f('0xee', 'DSK9')] = _kod_0x200f('0xef', '*ub1');
                        _0x54edf9[_kod_0x200f('0xf0', 'A0ZR')] = _kod_0x200f('0xf1', 'EJ[2');
                        _0x54edf9[_kod_0x200f('0xf2', 'EJ[2')] = function (_0x1540f8, _0x51bc1c) {
                            return _0x1540f8(_0x51bc1c);
                        };
                        _0x54edf9['XwlVB'] = _0x49a69a.IeTGe;
                        var _0x13aa0e = [], _0x4353ec = {};
                        if (_0xc724fa) {
                            if (_0x49a69a[_kod_0x200f('0xf3', 'WCE(')] === _0x49a69a[_kod_0x200f('0xf4', 'c)fP')]) {
                                $[_kod_0x200f('0xf5', 'hsw*')][_kod_0x200f('0xf6', 'pOzi')](_0x31ea6c, _0x24b05b, _kod_0x200f('0xf7', '2bKq'), !0x1);
                            } else {
                                for (var _0x14f1ed in _0x24b05b) _0x13aa0e[_kod_0x200f('0xf8', 'hsw*')]({
                                    'key': _0x14f1ed,
                                    'value': _0x24b05b[_0x14f1ed]
                                });
                                for (var _0x2ea8e1 = _0x13aa0e[_kod_0x200f('0x59', 'SNFI')] - 0x1; _0x49a69a['FNKdg'](_0x2ea8e1, 0x0); _0x2ea8e1--) _0x4353ec[_0x13aa0e[_0x2ea8e1][_kod_0x200f('0xf9', 'GOb%')]] = _0x13aa0e[_0x2ea8e1][_kod_0x200f('0xfa', '1R&c')];
                            }
                        } else _0x4353ec = _0x24b05b;
                        $[_kod_0x200f('0xfb', 'tM4G')](_0x4353ec, function (_0x57c728, _0x2485ed) {
                            if (_0x54edf9[_kod_0x200f('0xfc', 'SNFI')] === _kod_0x200f('0xfd', 'DSK9')) {
                                _0x2485ed[_kod_0x200f('0xfe', 'NTwa')] = _0x2485ed['className'] || '';
                                var _0x4353ec = _0x54edf9['DskrX'](_0x57c728, '\x20') + _0x2485ed['className'];
                                if ('string' == typeof _0x2485ed) var _0x14f1ed = '<li\x20class=\x22context-menu-item\x20' + _0x4353ec + _0x54edf9[_kod_0x200f('0xff', 'hsw*')]; else {
                                    if (_kod_0x200f('0x100', 'ieKP') === _kod_0x200f('0x101', '3Vxz')) {
                                        var _0x2ea8e1 = _0x2485ed[_kod_0x200f('0x102', 'knYV')];
                                        _0x2485ed[_kod_0x200f('0x103', '2bKq')] && (_0x2ea8e1 += _0x54edf9[_kod_0x200f('0x104', 'Lroq')](_0x54edf9[_kod_0x200f('0x105', 'SNFI')]('(<span\x20class=\x22context-menu-accesskey\x22>', _0x2485ed['accesskey']), _kod_0x200f('0x106', 'NTwa')));
                                        var _0x14f1ed = _0x54edf9[_kod_0x200f('0x107', 'Wk0G')](_0x54edf9[_kod_0x200f('0x108', 'NTwa')](_0x54edf9[_kod_0x200f('0x109', 'dEVq')], _0x4353ec) + '\x22>' + _0x3d8992(_0x2485ed['icon']), _kod_0x200f('0x10a', 'kevY')) + _0x2ea8e1 + '</span></li>';
                                    } else {
                                        $[_kod_0x200f('0x10b', '!vw7')][_kod_0x200f('0xba', '5$FK')](_0x31ea6c, _0x57c728, _kod_0x200f('0x10c', 'JewW'), !0x1);
                                    }
                                }
                                var _0x329960 = _0x54edf9[_kod_0x200f('0xe3', 'oznb')]($, _0x14f1ed)[_kod_0x200f('0x10d', '%lV(')](),
                                    _0x1696c3 = _0xc724fa || _0x1da99f,
                                    _0x929431 = _0x31ea6c[_kod_0x200f('0x10e', 'frhh')]['find'](_0x1696c3)[_kod_0x200f('0x10f', 'NTwa')]();
                                0x0 == _0x929431['length'] && _0x31ea6c[_kod_0x200f('0x110', 'SNFI')][_0x1696c3] && (_0x929431 = _0x31ea6c[_kod_0x200f('0x111', 'EJ[2')][_0x1696c3][_kod_0x200f('0x112', '!vw7')]), 0x0 == _0x929431['length'] && (_0x929431 = _0x31ea6c['$menu'][_kod_0x200f('0x113', 'WCE(')]()['last']()), _0xc724fa ? _0x929431[_kod_0x200f('0x114', 'dEVq')](_0x329960) : _0x1da99f && _0x929431['before'](_0x329960);
                                var _0x3b1fd5 = _0x329960['parent'](_0x54edf9[_kod_0x200f('0x115', 'sjfR')])['data'](_kod_0x200f('0x11', 'HLSS'));
                                _0x329960[_kod_0x200f('0x116', 'A0ZR')]({
                                    'contextMenu': _0x3b1fd5,
                                    'contextMenuKey': _0x57c728,
                                    'contextMenuRoot': _0x5dde0b
                                });
                                var _0x1a9b54 = {};
                                _0x1a9b54[_kod_0x200f('0x117', '!vw7')] = null;
                                _0x1a9b54[_kod_0x200f('0x118', 'M*8^')] = null;
                                _0x1a9b54[_kod_0x200f('0x119', 'c)fP')] = _0x2485ed.accesskey;
                                _0x1a9b54[_kod_0x200f('0x11a', 'Wk0G')] = _0x2485ed.className;
                                _0x1a9b54[_kod_0x200f('0x11b', 'Wk0G')] = _0x2485ed.icon;
                                _0x1a9b54[_kod_0x200f('0x11c', '%lV(')] = _0x2485ed.name;
                                _0x1a9b54[_kod_0x200f('0x11d', 'Ntyp')] = _0x2ea8e1;
                                _0x1a9b54[_kod_0x200f('0x11e', '5$FK')] = _0x329960;
                                if (_0x3b1fd5 && (_0x3b1fd5[_kod_0x200f('0x11f', 'SNFI')] || (_0x3b1fd5[_kod_0x200f('0x120', 'frhh')] = {}), _0x3b1fd5['items'][_0x57c728] = _0x1a9b54), _0x54edf9['GVQPw'] != typeof _0x2485ed && (_0x31ea6c['commands'] || (_0x31ea6c['commands'] = {}), _0x31ea6c[_kod_0x200f('0x121', 'oznb')][_0x57c728] = _0x1a9b54, _0x5dde0b[_kod_0x200f('0x122', ']J&I')][_0x57c728] = _0x1a9b54, _0x5dde0b[_kod_0x200f('0x123', 'x3kH')][_0x57c728] = function (_0x584acd, _0x2f9bd7) {
                                    _0x2485ed[_kod_0x200f('0x124', 'SNFI')](_0x584acd, _0x2f9bd7);
                                }, _0x2485ed[_kod_0x200f('0x125', 'lT&2')] && (_0x5dde0b[_kod_0x200f('0x126', 'dEVq')][_0x2485ed['accesskey']] = _0x1a9b54), _0x2485ed[_kod_0x200f('0x127', '%lV(')])) {
                                    var _0x46ed07 = _0x54edf9['dCNTL'](_0x57c728, _kod_0x200f('0x128', '3Vxz')),
                                        _0x14f1ed = _0x54edf9[_kod_0x200f('0x129', 'SNFI')](_0x54edf9[_kod_0x200f('0x12a', 'Wk0G')]('<ul\x20class=\x22context-menu-list\x20', _0x57c728) + _0x54edf9[_kod_0x200f('0x12b', ']J&I')], _0x46ed07) + _0x54edf9['fHDbe'];
                                    _0x54edf9[_kod_0x200f('0x12c', 'HLLq')]($, _0x14f1ed)[_kod_0x200f('0x12d', 'SNFI')](_0x329960), _0x1a9b54['$menu'] = _0x329960[_kod_0x200f('0x12e', 'oznb')]('ul.' + _0x57c728), _0x1a9b54['callback'] = null, _0x1a9b54[_kod_0x200f('0x12f', 'frhh')] = _0x1a9b54[_kod_0x200f('0x130', 'A0ZR')], _0x1a9b54[_kod_0x200f('0x131', 'dEVq')] = 'sub', _0x329960[_kod_0x200f('0x8a', 'M*8^')](_0x54edf9[_kod_0x200f('0x132', 'lT&2')], _0x1a9b54)[_kod_0x200f('0x133', 'EJ[2')]('context-menu-submenu'), _0x329960[_kod_0x200f('0x134', 'HLSS')](_kod_0x200f('0x135', 'hsw*') + _0x57c728)[_kod_0x200f('0x136', 'SNFI')]({
                                        'contextMenuRoot': _0x5dde0b,
                                        'contextMenu': _0x1a9b54
                                    }), _0x329960['find'](_kod_0x200f('0x137', 'c)fP') + _0x46ed07)[_kod_0x200f('0x138', '*ub1')]({
                                        'contextMenuRoot': _0x5dde0b,
                                        'contextMenuKey': _0x46ed07,
                                        'contextMenu': _0x1a9b54
                                    }), _0x1a9b54[_kod_0x200f('0x98', 'JewW')] || (_0x1a9b54[_kod_0x200f('0x75', 'g5gk')] = {}), _0x1a9b54['items'][_0x46ed07] = {
                                        '$input': null,
                                        '$label': null,
                                        'icon': '',
                                        'name': '',
                                        '_name': '',
                                        '$node': _0x329960[_kod_0x200f('0x139', 'WHC]')](_kod_0x200f('0x13a', 'EJ[2') + _0x46ed07)
                                    }, _0x57c812(_0x1a9b54, _0x2485ed[_kod_0x200f('0x74', '!BNj')], '.' + _0x46ed07);
                                }
                            } else {
                                var _0x302f32 = _0x54edf9[_kod_0x200f('0x13b', 'yhTY')]($, this)[_kod_0x200f('0x13c', 'M*8^')]();
                                _0x302f32[_kod_0x200f('0x13d', 'GOb%')] += _0x54edf9[_kod_0x200f('0x13e', 'Lroq')]($, this)[_kod_0x200f('0x13f', 'PpGA')](), $(this)[_kod_0x200f('0x140', 'frhh')]()[_kod_0x200f('0x141', 'pOzi')]()[_kod_0x200f('0x142', 'Wk0G')]({
                                    'x': _0x31ea6c[_kod_0x200f('0x143', 'mfiB')],
                                    'y': _0x302f32['top']
                                });
                            }
                        });
                    };
                    _0x57c812(_0x5dde0b, _0x6da12b, _0x27417c, _0x1c9a9a);
                } else {
                    _0x6da12b && ($[_kod_0x200f('0x144', 'kevY')][_kod_0x200f('0x145', '*ub1')](), _0x2a1b4c[_kod_0x200f('0x146', 'knYV')]($, _0x6da12b)[_kod_0x200f('0x55', 'PpGA')]({
                        'x': _0x4c95e6,
                        'y': _0x27417c
                    }));
                }
            }
        } else {
            $[_kod_0x200f('0x3d', 'tM4G')][_kod_0x200f('0x147', 'kevY')](_0x6da12b, _0x4c95e6, _kod_0x200f('0x148', 'DSK9'), !0x0);
        }
    };
    var _0x1167f4 = function () {
        var _0x3a181e = {};
        _0x3a181e[_kod_0x200f('0x149', 'DSK9')] = _0x49a69a.pxniV;
        _0x3a181e['gobgP'] = _0x49a69a.gArDg;
        _0x3a181e['rtqJu'] = _0x49a69a.PLxtW;
        _0x3a181e[_kod_0x200f('0x14a', '*O7U')] = _0x49a69a.HkihK;
        _0x3a181e[_kod_0x200f('0x14b', '1R&c')] = function (_0x26338c, _0x580353) {
            return _0x49a69a.kyxYk(_0x26338c, _0x580353);
        };
        _0x3a181e['OgGpA'] = function (_0x58cdac, _0x108d09) {
            return _0x58cdac(_0x108d09);
        };
        _0x3a181e[_kod_0x200f('0x14c', 'HLLq')] = function (_0x2344da, _0xcaeace) {
            return _0x49a69a.ETYaC(_0x2344da, _0xcaeace);
        };
        return $(_kod_0x200f('0x14d', 'M*8^'))[_kod_0x200f('0x14e', 'g5gk')](_kod_0x200f('0x14f', 'Ntyp')), 'function' != typeof $['contextMenu'] ? console['info']('$.contextMenu\x20is\x20not\x20function!') : ($[_kod_0x200f('0x3f', '!BNj')]({
            'zIndex': 0x270f,
            'selector': _kod_0x200f('0x150', 'NTwa'),
            'items': {
                'dialog-quit': {
                    'name': LNG[_kod_0x200f('0x151', '!vw7')],
                    'className': _kod_0x200f('0x152', 'mfiB'),
                    'icon': 'remove',
                    'accesskey': 'q'
                },
                'dialog-max': {
                    'name': LNG['dialog_max'],
                    'className': 'dialog-max',
                    'icon': 'resize-full',
                    'accesskey': 'a'
                },
                'dialog-min': {
                    'name': LNG[_kod_0x200f('0x153', 'WpY(')],
                    'className': _0x49a69a[_kod_0x200f('0x154', 'c)fP')],
                    'icon': _0x49a69a[_kod_0x200f('0x155', '5$FK')],
                    'accesskey': 'i'
                },
                'sep1': _kod_0x200f('0x156', 'g5gk'),
                'refresh': {
                    'name': LNG[_kod_0x200f('0x157', 'Pix5')],
                    'className': _0x49a69a[_kod_0x200f('0x158', 'x3kH')],
                    'icon': _0x49a69a[_kod_0x200f('0x159', 'oznb')],
                    'accesskey': 'r'
                },
                'open-window': {
                    'name': LNG[_kod_0x200f('0x15a', 'WViS')],
                    'className': _kod_0x200f('0x15b', 'lT&2'),
                    'icon': _0x49a69a[_kod_0x200f('0x15c', 'yhTY')],
                    'accesskey': 'b'
                },
                'qrcode': {
                    'name': LNG['qrcode'],
                    'className': _kod_0x200f('0x15d', 'HLLq'),
                    'icon': _kod_0x200f('0x15e', 'iz#z'),
                    'accesskey': 'c'
                }
            },
            'callback': function (_0x411634, _0x48ffb8) {
                var _0x1167f4 = _0x48ffb8['$trigger'][_kod_0x200f('0x15f', 'HLSS')]('id'),
                    _0xf5f232 = $[_kod_0x200f('0x160', '*ub1')][_kod_0x200f('0x161', 'ieKP')][_0x1167f4];
                switch (_0x411634) {
                    case _0x3a181e['WjuBa']:
                        _0xf5f232[_kod_0x200f('0x162', 'pOzi')]();
                        break;
                    case _0x3a181e[_kod_0x200f('0x163', 'frhh')]:
                        _0xf5f232[_kod_0x200f('0x164', 'WHC]')](!0x1);
                        break;
                    case _kod_0x200f('0x165', 'PpGA'):
                        _0xf5f232[_kod_0x200f('0x166', 'SNFI')]();
                        break;
                    case _kod_0x200f('0x167', 'iz#z'):
                        _0xf5f232[_kod_0x200f('0x168', 'lT&2')]();
                        break;
                    case _kod_0x200f('0x169', 'c)fP'):
                        _0xf5f232[_kod_0x200f('0x16a', 'EJ[2')]();
                        break;
                    case _kod_0x200f('0x16b', 'g5gk'):
                        core[_kod_0x200f('0x16c', 'j90Z')](_0xf5f232[_kod_0x200f('0x16d', '3Vxz')][_kod_0x200f('0x16e', 'pOzi')]['find']('iframe')[_kod_0x200f('0x16f', 'frhh')](_kod_0x200f('0x170', '3Vxz')));
                }
            }
        }), void $(_0x49a69a[_kod_0x200f('0x171', 'tM4G')])[_kod_0x200f('0x172', '!vw7')](_kod_0x200f('0x173', '5$FK'))[_kod_0x200f('0x174', '5$FK')]('click', function (_0x3ae5af) {
            if (_0x3a181e[_kod_0x200f('0x175', '!BNj')](_kod_0x200f('0x176', '5$FK'), _kod_0x200f('0x177', 'HLLq'))) {
                $('.context-menu-list')[_kod_0x200f('0x178', '5$FK')](_0x3a181e['rtqJu'])[_kod_0x200f('0x179', 'A0ZR')](_0x3a181e['Eoigh'])[_kod_0x200f('0x17a', 'JewW')](_kod_0x200f('0x17b', 'ieKP'));
            } else {
                var _0x5b11da = $(this)[_kod_0x200f('0x17c', 'j90Z')]();
                _0x5b11da[_kod_0x200f('0x17d', '!vw7')] += $(this)[_kod_0x200f('0x17e', 'NTwa')](), _0x3a181e[_kod_0x200f('0x17f', '20$N')]($, this)[_kod_0x200f('0x180', 'WViS')]()['parent']()[_kod_0x200f('0x181', 'WpY(')]({
                    'x': _0x3ae5af[_kod_0x200f('0x182', 'EJ[2')],
                    'y': _0x5b11da[_kod_0x200f('0x183', 'EJ[2')]
                });
            }
        })[_kod_0x200f('0x184', '3Vxz')](_0x49a69a[_kod_0x200f('0x185', 'j90Z')])[_kod_0x200f('0x186', 'yhTY')](_kod_0x200f('0x187', 'DSK9'), function (_0x37561a) {
            var _0x3c7782 = {};
            _0x3c7782[_kod_0x200f('0x188', 'WViS')] = function (_0x42ff6a, _0x4948f5) {
                return _0x3a181e.jOyik(_0x42ff6a, _0x4948f5);
            };
            if (_kod_0x200f('0x189', 'Lroq') === _kod_0x200f('0x18a', 'JewW')) {
                var _0x5b11da = $(this)[_kod_0x200f('0x18b', 'HLSS')]()[_kod_0x200f('0x18c', 'GOb%')]()['attr']('id'),
                    _0x1167f4 = $[_kod_0x200f('0x18d', 'EJ[2')][_kod_0x200f('0x18e', '5$FK')][_0x5b11da];
                _0x1167f4['close'](), $['contextMenu'][_kod_0x200f('0x18f', '!BNj')]();
            } else {
                var _0x35bfff = _0x5b11da[_kod_0x200f('0x190', 'JewW')], _0x465ef4 = _kod_0x200f('0x191', 'lT&2');
                _0x35bfff[_kod_0x200f('0x192', 'ieKP')](_kod_0x200f('0x193', 'kevY'))[_kod_0x200f('0x194', 'mfiB')](_0x465ef4), Hook[_kod_0x200f('0x195', 'j90Z')](_kod_0x200f('0x196', '5$FK'), _0x5b11da['selector'], _0x37561a, _0x35bfff), Hook[_kod_0x200f('0x197', 'WHC]')](_0x3c7782['NcaoR'](_kod_0x200f('0x198', 'WHC]'), _0x5b11da[_kod_0x200f('0x54', 'dEVq')]), _0x37561a, _0x35bfff);
            }
        }));
    };
    Hook[_kod_0x200f('0x199', 'A0ZR')]('rightMenu.show.dialog-menu', function (_0x179e1a, _0xe8b1ed) {
        var _0x1167f4 = _0x179e1a[_kod_0x200f('0x19a', 'JewW')]('id'),
            _0x4a443f = $[_kod_0x200f('0x160', '*ub1')][_kod_0x200f('0x19b', 'j90Z')][_0x1167f4],
            _0x4e3de0 = _0x49a69a['RJVdg'], _0x1a4ddd = _kod_0x200f('0x19c', '20$N');
        _0x4a443f['hasFrame']() ? _0xe8b1ed['find'](_0x1a4ddd)[_kod_0x200f('0x19d', '*ub1')](_0x4e3de0) : _0xe8b1ed['find'](_0x1a4ddd)[_kod_0x200f('0x19e', ']J&I')](_0x4e3de0);
        var _0x30e36a = _kod_0x200f('0x19f', 'pOzi');
        $('.' + _0x1167f4)[_kod_0x200f('0x1a0', 'oznb')](_kod_0x200f('0x1a1', '!vw7')) ? _0xe8b1ed[_kod_0x200f('0x1a2', '!vw7')](_0x30e36a)['removeClass'](_0x4e3de0) : _0xe8b1ed['find'](_0x30e36a)[_kod_0x200f('0x1a3', '!BNj')](_0x4e3de0);
    }), _0x1167f4();
});
;define("app/app/appBase", [], function (a, b) {
    var c = {}, d = {}, e = {}, f = !1, g = function (a) {
        a.title = void 0 == a.title ? a.name : a.title, void 0 == a.name && (a.name = UUID(), a.hidden = !0), c[a.name] = a, a.ext || (a.ext = "");
        var b = a.ext.split(",");
        c[a.name].extArr = b, "undefined" != typeof a.sort ? a.sort = parseInt(a.sort) : a.sort = 0;
        for (var e = 0; e < b.length; e++) {
            var f = trim(b[e]);
            c[a.name].extArr[e] = f, d[f] || (d[f] = []);
            for (var g = !1, h = 0; h < d[f].length; h++) if (d[f][h].name == a.name) {
                g = !0;
                break
            }
            g || (d[f].push({name: a.name, sort: a.sort}), d[f].length > 1 && d[f].sort(function (a, b) {
                return a.sort < b.sort
            }))
        }
        Hook.trigger("kodApp.add.finished")
    }, h = function () {
        return d
    }, i = function (a) {
        if (!a || !c[a]) return !1;
        delete c[a];
        for (var b in e) if (e[b] == a) {
            delete e[b];
            break
        }
        for (var b in d) {
            for (var f = d[b], g = [], h = 0; h < f.length; h++) f[h].name != a && g.push(f[h]);
            0 == g.length ? delete d[b] : d[b] = g
        }
    }, j = function (a) {
        if ("undefined" == typeof a) {
            var b = [];
            for (var f in c) c[f].hidden || b.push(c[f]);
            return b
        }
        var g = e[a], b = [];
        if (!g && !d[a]) return !1;
        if (g && (c[g] ? b.push(c[g]) : delete e[a]), !d[a]) return b;
        for (var h = 0; h < d[a].length; h++) {
            var i = d[a][h].name;
            c[i] && i != g && b.push(c[i])
        }
        return b
    }, k = function (a) {
        f = a
    }, l = function () {
        return f
    }, m = function (a, b, d) {
        if ("" != a) {
            b && "file" != b || (b = core.pathExt(a)), d = d ? d : "";
            var e = {path: a, ext: b, appName: d};
            if (!Hook.trigger("kodApp.open.before", e)) {
                if (a = e.path, b = e.ext, d = e.appName) var f = c[d]; else {
                    var g = j(b);
                    if (!g || 0 == g.length) return void kodApp.openUnknow(a, "");
                    var f = g[0]
                }
                if (!f) return Tips.tips("[" + d + "] not exists", !1);
                try {
                    n(f, a, b)
                } catch (h) {
                    console.error("kodApp.open error:", h)
                }
            }
        }
    }, n = function (a, b, c) {
        Hook.trigger("kodApp.callback.before", a, b, c) || (a.callback(b, c), Hook.trigger("kodApp.callback.after", b, c, a))
    }, o = function (a) {
        var b = j(a), d = j("");
        "" == a && (b = !1), b ? b.push({name: ""}) : b = [], b = b.concat(d);
        for (var e = {}, f = 0; f < b.length; f++) {
            var g = b[f];
            "" == g.name || g.hidden ? e["step-line"] = "-------" : e[g.name] = {
                app: g.name,
                name: g.title,
                className: g.className,
                icon: g.icon,
                callback: function (a, b) {
                    var d = c[a];
                    if (d && d.callback) {
                        $(".context-menu-active");
                        if ($(".context-menu-active").hasClass("menu-tree-file")) var e = ui.tree.makeParam(); else var e = ui.path.makeParam();
                        n(d, e.path, e.type)
                    }
                }
            }
        }
        return e
    }, p = function (a, b) {
        q(a, b), G.userConfig.kodAppDefault = htmlEncode(jsonEncode(e)), G.shareInfo || $.get(G.appHost + "setting/set&k=kodAppDefault&v=" + jsonEncode(e))
    }, q = function (a, b) {
        if (!c[b]) return !1;
        if ("string" == typeof a) e[a] = b; else if ($.isArray(a)) for (var d = 0; d < a.length; d++) e[a[d]] = b; else if ($.isArray(c[b].extArr)) for (var f = c[b].extArr, d = 0; d < f.length; d++) e[f[d]] = b
    }, r = function () {
        G.userConfig.kodAppDefault = "[]", e = {}
    }, s = function (a, b) {
        var a = c[a];
        return a ? b ? inArray(a.extArr, b) : a.ext : !1
    }, t = function (a, b, e) {
        var a = c[a];
        if (!a) return !1;
        var f = "undefined" == e ? 0 : parseInt(e);
        0 == f && "undefined" != typeof a.sort && (f = parseInt(a.sort)), "string" == $.type(b) && (b = b.split(","));
        for (var g = 0; g < b.length; g++) {
            var h = b[g];
            if (h) {
                inArray(a.extArr, h) || a.extArr.push(h), d[h] || (d[h] = []);
                for (var i = !1, j = 0; j < d[h].length; j++) d[h][j].name != a.name || (d[h][j].sort = f, i = !0);
                i || d[h].push({name: a.name, sort: f})
            }
        }
    }, u = function () {
        if (G.userConfig && G.userConfig.kodAppDefault) try {
            var a = G.userConfig.kodAppDefault;
            a = jsonDecode(htmlDecode(a)), $.isPlainObject(a) && (e = a)
        } catch (b) {
        }
        Hook.bind("rightMenu.show.menu-file,rightMenu.show.menu-tree-file", function (a, b) {
            if (a.hasClass("menu-tree-file")) var c = ui.tree.makeParam(); else var c = ui.path.makeParam();
            var d = core.pathExt(c.path), e = "hidden";
            if (kodApp.getApp(d)) {
                var f = kodApp.getAppMenu(d);
                b.find("li.open-with.context-menu-submenu").removeClass(e), b.find("ul.context-menu-list.open-with .context-menu-item").not(".open-with-first").remove(), $.contextMenu.menuAdd(f, ".menu-file", ".open-with-first"), $.contextMenu.menuAdd(f, ".menu-tree-file", ".open-with-first")
            } else b.find("li.open-with.context-menu-submenu").addClass(e)
        }), Hook.trigger("kodApp.ready"), Hook.bind("kodApp.callback.before", function (a, b, c) {
            return core.authCheckGroup("explorer.fileProxy", b) ? void 0 : (Tips.tips(LNG.no_permission_action, !1), "deny!")
        })
    };
    return u(), {
        debug: function () {
            return {appList: c, openDefault: d, openUser: e}
        },
        add: g,
        remove: i,
        appSupportCheck: s,
        appSupportSet: t,
        getApp: j,
        getAppBind: h,
        getAppMenu: o,
        setLastOpenTarget: k,
        getLastOpenTarget: l,
        setOpenUser: p,
        setOpenUserLocal: q,
        clearOpenUser: r,
        open: m
    }
});
;define("app/app/editor", [], function (a, b) {
    kodApp.add({
        name: "aceEditor",
        title: LNG["Plugin.default.aceEditor"],
        sort: 0,
        ext: "txt,textile,oexe,inc,csv,log,asc,tsv,lnk,url,webloc,meta,localized,xib,xsd,storyboard,plist,csproj,pch,pbxproj,local,xcscheme,manifest,vbproj,strings,jshintrc,sublime-project,readme,changes,changelog,version,license,changelog,abap,abc,as,asp,aspx,ada,adb,htaccess,htgroups,htgroups,htpasswd,asciidoc,adoc,asm,a,ahk,bat,cmd,cpp,c,cc,cxx,h,hh,hpp,ino,c9search_results,cirru,cr,clj,cljs,cbl,cob,coffee,cf,cson,cakefile,cfm,cs,css,curly,d,di,dart,diff,patch,dockerfile,dot,dummy,dummy,e,ge,ejs,ex,exs,elm,erl,hrl,frt,fs,ldr,ftl,gcode,feature,.gitignore,glsl,frag,vert,gbs,go,groovy,haml,hbs,handlebars,tpl,mustache,hs,hx,html,hta,htm,xhtml,eex,html.eex,erb,rhtml,html.erb,ini,inf,conf,cfg,prefs,io,jack,jade,java,ji,jl,jq,js,jsm,json,jsp,jsx,latex,ltx,bib,lean,hlean,less,liquid,lisp,ls,logic,lql,lsl,lua,lp,lucene,Makefile,makemakefile,gnumakefile,makefile,ocamlmakefile,make,md,markdown,mask,matlab,mz,mel,mc,mush,mysql,nc,nix,nsi,nsh,m,mm,ml,mli,pas,p,pl,pm,pgsql,php,phtml,shtml,php3,php4,php5,phps,phpt,aw,ctp,module,ps1,praat,praatscript,psc,proc,plg,prolog,properties,proto,py,r,cshtml,rd,rhtml,rst,rb,ru,gemspec,rake,guardfile,rakefile,gemfile,rs,sass,scad,scala,scm,sm,rkt,oak,scheme,scss,sh,bash,bashrc,sjs,smarty,tpl,snippets,soy,space,sql,sqlserver,styl,stylus,svg,swift,tcl,tex,toml,twig,swig,ts,typescript,str,vala,vbs,vb,vm,v,vh,sv,svh,vhd,vhdl,wlk,wpgm,wtest,xml,rdf,rss,wsdl,xslt,atom,mathml,mml,xul,xbl,xaml,xq,yaml,yml,vcproj,vcxproj,vtt,filters,cer,reg,config,pem,srt,ass,lrc,opf,ncx",
        icon: G.staticPath + "images/file_icon/icon_app/ace.png",
        callback: function (a, b) {
            var c = ShareData.frameTop();
            if ("undefined" != typeof c.Editor) return void c.Editor.add(urlEncode(a));
            if (core.isApp("editor")) return void ShareData.frameChild("OpenopenEditor", function (b) {
                b.Editor.add(urlEncode(a))
            });
            if (ShareData.frameTop("OpenopenEditor")) {
                var d = c.$.dialog.list.openEditor, e = 0;
                d && "hidden" == $(d.DOM.wrap).css("visibility") && (e = 200, d.display(!0).zIndex().focus()), setTimeout(function () {
                    ShareData.frameTop("OpenopenEditor", function (b) {
                        b.Editor.add(urlEncode(a))
                    })
                }, e)
            } else {
                var f = G.appHost + "editor/edit#filename=" + urlEncode(a);
                "undefined" != typeof G.sharePage && (f = G.appHost + "share/edit&user=" + G.user + "&sid=" + G.sid + "#filename=" + urlEncode(a));
                var g = htmlEncode(urlDecode(core.pathThis(a))), h = {
                    closeBefore: function () {
                        var a = ShareData.frameTop("OpenopenEditor"), b = this;
                        return a && a.Editor && a.Editor.hasFileSave() ? ($.dialog.confirm(LNG.if_save_file_tips, function () {
                            b.config.closeBefore = !1, b.close()
                        }, function () {
                        }), !1) : void 0
                    }
                };
                core.openDialog(f, core.icon("edit"), g, "openEditor", h)
            }
        }
    });
    var c = ShareData.frameTop();
    c.Config && "editor" == c.Config.pageApp && kodApp.setOpenUserLocal(!1, "aceEditor")
});
;define("app/app/openWith", [], function (a, b) {
    kodApp.add({
        name: "appOpenSetting",
        title: LNG["Explorer.UI.appSetDefault"],
        ext: "",
        icon: G.staticPath + "images/file_icon/icon_others/setting.png",
        callback: function (a, b) {
            var c = "<ul class='tab-group {{if !apps}}hidden{{/if}}' role='tablist'>				<li class='tab-item {{if apps}}active{{/if}}'>					<a href='#app-list-support'aria-controls='app-list-support' role='tab' data-toggle='tab'>						{{LNG['Explorer.UI.appTypeSupport']}}</a>				</li>				<li class='tab-item {{if !apps}}active{{/if}}' >					<a href='#app-list_all' aria-controls='app-list_all' role='tab' data-toggle='tab'>						{{LNG['Explorer.UI.appTypeAll']}}</a>				</li>			</ul>			<div class='tab-content'>				<div class='app-list tab-pane {{if apps}}active{{/if}}' id='app-list-support'>					{{each apps app i}}					<a data-app='{{app.name}}' href='javascript:void(0);'					draggable='false' ondragstart='return false;'					class='app-item {{if app.name==defaultApp}}select{{/if}} disable-ripple'>						{{if app.icon.indexOf('/') == -1}}							<span class='ico'><i class='font-icon {{app.icon}}'></i></span>						{{else}}							<span class='ico'><img draggable='false' ondragstart='return false;' src='{{app.icon}}'></span>						{{/if}}						<span class='name'>{{app.title}}</span>					</a>					{{/each}}					<div class='clear'></div>				</div>				<div class='app-list tab-pane {{if !apps}}active{{/if}}' id='app-list_all'>					{{each appAll app i}}					<a data-app='{{app.name}}' href='javascript:void(0);'					draggable='false' ondragstart='return false;'					class='app-item {{if app.name==defaultApp}}select{{/if}} disable-ripple'>						{{if app.icon.indexOf('/') == -1}}							<span class='ico'><i class='font-icon {{app.icon}}'></i></span>						{{else}}							<span class='ico'><img draggable='false' ondragstart='return false;' src='{{app.icon}}'></span>						{{/if}}						<span class='name'>{{app.title}}</span>					</a>					{{/each}}				</div>			</div>			<div class='bottom mt-10'>				<input class='kui-checkbox size-small' type='checkbox' id='app-default-checkbox' {{if apps}}checked='true'{{/if}}/>				<label for='app-default-checkbox'>{{LNG['Explorer.UI.appAwaysOpen']}}</label>			</div>",
                d = kodApp.getApp(b), e = !1;
            lodash.isArray(d) && (e = d[0].name);
            var f = template.compile(c), g = f({LNG: LNG, apps: d, defaultApp: e, appAll: kodApp.getApp()}),
                h = $.dialog({
                    id: "dialog-app-select",
                    className: "menu-empty",
                    padding: 0,
                    fixed: !0,
                    ico: core.icon("search"),
                    resize: !0,
                    title: LNG["Explorer.UI.selectAppDesc"],
                    width: 480,
                    height: 360,
                    padding: "20px",
                    content: g,
                    ok: function () {
                        return i()
                    }
                }), i = function () {
                    var c = $("#app-default-checkbox").prop("checked"),
                        d = $(".app-list.active .app-item.select").attr("data-app");
                    return d ? (h.close(), kodApp.open(a, b, d), c && kodApp.setOpenUser(b, d), !0) : (Tips.tips(LNG["Explorer.UI.selectAppWarning"], "warning"), !1)
                };
            $(".tab-group .tab-item").die("click").live("click", function () {
                var a = $(this).find("[aria-controls]").attr("aria-controls");
                "app-list-support" == a ? $("#app-default-checkbox").prop("checked", !0) : $("#app-default-checkbox").prop("checked", !1)
            }), $(".app-item").die("click").live("click", function () {
                $(this).parent().find(".select").removeClass("select"), $(this).addClass("select")
            }).die("dblclick").live("dblclick", function () {
                i()
            })
        }
    })
});
;define("app/app/html", [], function (a, b) {
    var c = function (a) {
        return void 0 == a ? !1 : 0 === a.indexOf("http") ? !0 : G.shareInfo || core.pathReadable(a) ? !0 : (Tips.tips(LNG.no_permission_read_all, !1), core.playSound("error"), !1)
    };
    Hook.bind("kodApp.open.before", function (a) {
        return "folder" == a.ext ? (core.isApp("explorer") || isWap() ? ui.path.list(a.path + "/") : core.explorer(a.path), !0) : c(a.path) ? void ("file" == a.ext && (a.ext = "")) : !0
    }), kodApp.openUnknow = function (a, b) {
        void 0 == b && (b = "");
        var c = G.appHost + "pluginApp/index&search=" + core.pathExt(a),
            d = "kodApp.open(pathHashDecode('" + pathHashEncode(a) + "'),false,'appOpenSetting');",
            e = "kodApp.open(pathHashDecode('" + pathHashEncode(a) + "'),false,'aceEditor');",
            f = "kodApp.download(pathHashDecode('" + pathHashEncode(a) + "'));", g = "core.openWindow('" + c + "');",
            h = LNG.unknow_file_try + '<a class="pl-5 pr-5" href="javascript:void(0);" onclick="',
            i = '<div class="unknow-file can-select" style="word-break:break-all;">				<div class="grey-8 bold mb-20">' + LNG.unknow_file_tips + "<br/>" + b + '</div>			    <div class="mt-5">1.' + h + d + '">' + LNG["Explorer.UI.openWith"] + '</a></div>			    <div class="mt-5">2.' + h + e + '">' + LNG["Explorer.UI.openWithText"] + '</a></div>			    <div class="mt-5">3.' + h + f + '">' + LNG.unknow_file_download + '</a></div>				<div class="mt-20">' + h + g + '">' + LNG.PluginCenter + "</a>" + LNG.unknow_plugin_search + "</div>			</div>";
        $.dialog({
            fixed: !0,
            icon: "warning",
            title: LNG.unknow_file_title,
            padding: "20px 50px",
            content: i,
            cancel: !0
        }), $(".unknow-file a").unbind("click").bind("click", function (a) {
            return $(this).parents(".artDialog").data("artDialog").close(), stopPP(a)
        })
    }, kodApp.add({
        name: "download",
        title: LNG.download,
        hidden: !0,
        icon: "x-item-file x-html",
        callback: function (a, b) {
            if (c(a)) {
                var d = a;
                "http" != a.substr(0, 4) && (d = G.appHost + "explorer/fileDownload&accessToken=" + G.accessToken + "&path=" + urlEncode(a), "undefined" != typeof G.sharePage && (d = G.appHost + "share/fileDownload&user=" + G.user + "&sid=" + G.sid + "&path=" + urlEncode(a))), $.dialog({
                    icon: "succeed",
                    title: !1,
                    time: 1.5,
                    content: LNG.download_ready + "..."
                }), isWap() ? window.open(d) : $('<iframe src="' + d + '" style="display:none;width:0px;height:0px;"></iframe>').appendTo("body")
            }
        }
    }), kodApp.download = function (a) {
        kodApp.open(a, "", "download")
    }, kodApp.openWindow = function (a) {
        kodApp.open(a, "", "browserOpen")
    }, kodApp.add({
        name: "browserOpen",
        title: LNG.open_ie,
        sort: -100,
        icon: "x-item-file x-html",
        callback: function (a, b) {
            var d = core.path2url(a);
            return "/" == a.substr(-1) && -1 != d.search("explorer/fileProxy&") ? Tips.tips(LNG.path_can_not_action, !1) : void (c(a) && (isWap() ? window.location.href = d : window.open(d)))
        }
    }), kodApp.add({
        name: "swfPlayer",
        title: "Flash Player",
        ext: "swf",
        icon: "x-item-file x-swf",
        callback: function (a, b) {
            $.dialog({
                resize: !0,
                fixed: !0,
                ico: core.icon(b),
                title: core.pathThis(a),
                width: "75%",
                height: "65%",
                padding: 0,
                content: core.createFlash(core.path2url(a))
            })
        }
    }), kodApp.add({
        name: "webLink",
        title: "webLink",
        ext: "url,webloc",
        sort: 10,
        icon: "x-item-file x-html",
        callback: function (a, b) {
            core.fileGet(a, function (c) {
                if ("url" == b) {
                    var d = c.match(/URL=(.*)/);
                    if (d.length >= 2) return window.open(d[1])
                } else if ("webloc" == b) try {
                    var e = $($.parseXML(c)), f = e.find("string").text();
                    return void window.open(f)
                } catch (g) {
                }
                kodApp.open(a, b, "editor")
            })
        }
    }), kodApp.add({
        name: "htmlView",
        title: LNG["Plugin.default.htmlView"],
        ext: "htm,html,shtml",
        sort: 10,
        icon: "x-item-file x-html",
        callback: function (a, b) {
            var c = core.path2url(a);
            core.openDialog(c, core.icon("html"), core.pathThis(a))
        }
    }), kodApp.add({
        name: "pdfView",
        title: "PDF Simple",
        ext: "pdf",
        sort: 0,
        icon: "x-item-file x-pdf",
        callback: function (a, b) {
            var c = core.path2url(a), d = "pdf" + UUID(),
                e = '<div id="' + d + '" style="height:100%;">			<a href="' + c + '" target="_blank" style="display:block;margin:0 auto;margin-top:80px;font-size:16px;text-align:center;">' + LNG.error + " " + LNG.download + " PDF</a></div>";
            $.dialog({
                resize: !0,
                fixed: !0,
                ico: core.icon(b),
                title: core.pathThis(a),
                width: "80%",
                height: "75%",
                padding: 0,
                content: e
            }), PDFObject.embed(c, "#" + d)
        }
    }), kodApp.add({
        name: "oexeOpen",
        title: LNG["kodApp.oexe.open"],
        ext: "oexe",
        sort: 100,
        icon: " x-item-file x-oexe",
        callback: function (a, b) {
            core.fileGet(a, function (b) {
                var c = jsonDecode(b);
                c.name = core.pathThis(a), core.openApp(c)
            })
        }
    }), kodApp.add({
        name: "oexeEdit",
        title: LNG["kodApp.oexe.edit"],
        ext: "oexe",
        sort: 50,
        icon: "icon-edit ",
        callback: function (a, b) {
            core.fileGet(a, function (b) {
                var c = jsonDecode(b);
                c.name = core.pathThis(a), c.path = a, ui.path.pathOperate.appEdit(c)
            })
        }
    });
    var d = {
        createApp: {
            name: LNG.app_create,
            className: "createApp newfile",
            icon: "icon-puzzle-piece x-item-file x-oexe",
            callback: function (a, b) {
                ui.path.pathOperate.appEdit(0, 0, "userAdd")
            }
        }
    };
    $.contextMenu.menuAdd(d, ".menu-body-main", ".app-install"), $.contextMenu.menuAdd(d, ".toolbar-path-more", ".app-install"), $.contextMenu.menuAdd(d, ".bodymain", ".app-install"), Hook.bind("rightMenu.show", function (a, b, c) {
        var d = [".menu-folder", ".menu-file", ".menu-tree-folder", ".menu-tree-file", ".menu-tree-folder-fav"];
        if (c.find(".context-menu-submenu").fadeOut(0).delay(0).fadeIn(0), c.removeClass("menu-auto-fit"), h(b), c.inScreen() || c.addClass("menu-auto-fit"), ".menu-body-main" == a) {
            var e = c.find(".set-file-icon-size.context-menu-submenu");
            "icon" == G.userConfig.listType ? e.removeClass("hidden") : e.addClass("hidden")
        }
        if (lodash.include(d, a)) {
            var f = "disabled", g = ".cute,.rname,.remove",
                i = ".open,.open-text,.down,.share,.copy,.cute,.rname,.remove,.open-browser,.search,.more-action";
            b.hasClass("file-not-readable") ? c.find(i).addClass(f) : c.find(i).removeClass(f), b.hasClass("file-not-writeable") ? c.find(g).addClass(f) : c.find(g).removeClass(f)
        }
    }), Hook.bind("rightMenu.show.menu-body-main", function (a, b) {
        var c = ".upload,.past,.newfolder,.newfile", d = "disabled";
        lodash.get(G, "jsonData.info.canUpload") ? b.find(c).removeClass(d) : b.find(c).addClass(d)
    }), Hook.bind("rightMenu.show.menu-file", function (a, b) {
        if ($(".context-menu-active").hasClass("menu-tree-file")) var c = ui.tree.makeParam(); else var c = ui.path.makeParam();
        var d = core.pathExt(c.path), e = "hidden";
        inArray(["jpg", "jpeg", "png"], d) ? b.find(".set-background").removeClass(e) : b.find(".set-background").addClass(e)
    });
    var e = function () {
        var a = ".close-item,.refresh,.newfile,.past,.info", b = ".open-browser",
            c = ".explorer,.create-project,.open-project",
            d = ".close-item,.newfile,.refresh,.past,.down,.copy,.cute,.remove,.more-action,.clone,.info,.zip,.zip-zip,.zip-tar,.zip-tgz",
            e = ".newfile,.cute,.past,.rname,.zip,.remove,.clone,.create-link-home,.create-link,.create-project",
            f = $(".menu-tool-path"), g = "hidden", h = ui.fileLight.fileListSelect();
        f.find(".context-menu-item").addClass(g), 0 == h.length ? f.find(a).removeClass(g) : 1 == h.length ? (f.find(".context-menu-item").removeClass(g), "folder" == ui.fileLight.type(h) ? f.find(b).addClass(g) : f.find(c).addClass(g)) : h.length > 1 && f.find(d).removeClass(g), G.jsonData && G.jsonData.info && G.jsonData.info.canUpload === !1 && f.find(e).filter(":not(." + g + ")").addClass(g)
    }, f = function () {
        var a = ui.fileLight.fileListSelect(), b = $(".kod-toolbar-path .select-button-show"), c = "hidden";
        G.jsonData && G.jsonData.info && (0 == a.length || G.jsonData.info.pathType == G.KOD_USER_SHARE && G.jsonData.info.id != G.userID ? b.addClass("hidden") : (b.removeClass("hidden"), b.find("[data-action=share]").removeClass(c), b.find("[data-action=rname]").removeClass(c), a.length > 1 && (b.find("[data-action=share]").addClass(c), b.find("[data-action=rname]").addClass(c))))
    }, g = function () {
        var a = lodash.get(G, "jsonData.info.pathType"), b = $(".kod-toolbar-share .select-button-show-share"),
            c = ui.fileLight.fileListSelect(), d = "hidden";
        a != G.KOD_USER_SHARE || 0 == c.length ? b.addClass("hidden") : (b.removeClass("hidden"), b.find("[data-action=shareEdit]").removeClass(d), b.find("[data-action=shareOpenWindow]").removeClass(d), c.length > 1 && (b.find("[data-action=shareEdit]").addClass(d), b.find("[data-action=shareOpenWindow]").addClass(d)))
    };
    Hook.bind("explorer.fileSelect.init", function () {
        ui.fileLight.listNumberSet()
    }), Hook.bind("explorer.fileSelect.change", function () {
        e(), f(), g(), ui.fileLight.selectNumSet()
    }), Hook.bind("rightMenu.show.toolbar-path-more", function () {
        e()
    }), Hook.bind("rightMenu.initFinished", function () {
        if (1 != G.isRoot) {
            var a = "hidden", b = {
                "explorer.fileDownload": "@.down,@.download,@.share,@.open-text,[data-action=download]",
                "explorer.search": "@.search",
                "explorer.mkfile": "@.newfile,[data-action=newfile],@.past,@.clone",
                "explorer.mkdir": "@.newfolder,[data-action=newfolder]",
                "explorer.pathRname": "@.rname,[data-action=rname]",
                "explorer.pathDelete": "@.remove,@.remove + .context-menu-separator,[data-action=remove]",
                "explorer.pathCopy": "@.cute,@.copy,[data-action=cute],[data-action=copy]",
                "explorer.fileUpload": "@.upload,@.upload-more,[data-action=upload],[data-action=upload-more]",
                "explorer.unzip": "@.unzip",
                "explorer.zip": "@.zip",
                "userShare.set": "@.share,[data-action=share]"
            };
            setTimeout(function () {
                for (var c in b) {
                    var d = replaceAll(b[c], "@", ".context-menu-list ");
                    core.authCheck(c) || $(d).addClass(a)
                }
            }, 100), core.authCheck("explorer.fileDownload") || (kodApp.remove("browserOpen"), kodApp.remove("htmlView"))
        }
    }), Hook.bind("kodApp.callback.before", function (a, b, c) {
        return -1 == $.inArray(a.name, ["browserOpen", "htmlView", "zipView"]) || core.authCheckGroup("explorer.fileDownload", b) ? void 0 : (Tips.tips(LNG.no_permission_action, "error"), !0)
    });
    var h = function (a) {
        return
    }, i = function () {
        if (G.authGroupRole || (G.authGroupRole = {}), lodash.get(G, "jsonData.info.pathType") == G.KOD_GROUP_PATH) {
            var a = lodash.get(G, "jsonData.info.id");
            G.authGroupRole[a] = lodash.get(G, "jsonData.info.groupRole.authArr")
        }
        h()
    };
    Hook.bind("explorer.path.ajaxLive", i)
});
;define("app/common/tpl/copyright.html", [], '<div class="dialog-copyright-content">\n	<div class="title">\n		<div class="logo">\n			<i class="icon-cloud"></i>\n			{{if kod.window.core.versionType==\'A\' && kod.window.core.versionOem !=\'ok\' }}\n			KodExplorer \n			{{else}} \n			{{LNG.kod_name}}\n			{{/if}}\n		</div>\n		<div class=\'info\'>??????{{LNG.kod_name_copyright}}</div>\n	</div>\n	<div class="content">\n		<p>{{@LNG.copyright_desc}}</p>\n		<div>{{@LNG.copyright_contact}}</div>\n		<div>{{@LNG.copyright_info}}</div> \n	</div>\n</div>\n');
;define("app/common/tpl/themeDIY.html", [], "@media screen and (max-width:100000px) {\n	body .full-background{\n		position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;\n		background-color: #020202;background-size: 100% 100%;\n	}\n\n	{{if blurSize= (bgBlur==0?0:10) }}{{/if}}\n	body .full-background:before{\n		-webkit-filter: blur({{blurSize}}px);\n		-moz-filter: blur({{blurSize}}px);\n		-ms-filter: blur({{blurSize}}px);\n		filter: blur({{blurSize}}px);\n	}\n	{{if bgType == 'image'}}\n		body .full-background,\n		body .full-background:before,\n		body #body .menu-left,\n		body #body .app-menu-left,\n		body .aui-buttons,\n		body .aui-state-focus .aui-title,body .aui-title{\n			background-image:url({{bgImage}});\n		}\n		body .aui-state-focus .aui-title,body .aui-title{\n			background-size:100%;\n		}\n	{{else}}\n		body .full-background,\n		body .full-background:before,\n		body #body .menu-left, \n		body #body .app-menu-left,\n		body .aui-buttons,\n		body .aui-state-focus .aui-title,body .aui-title{\n			background:{{endColor}};\n			filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='{{startColor}}', endColorstr='{{endColor}}');\n			background-image: -webkit-linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n			background-image: -moz-linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n			background-image: -o-linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n			background-image: -ms-linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n			background-image: linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n		}\n	{{/if}}\n}\n");