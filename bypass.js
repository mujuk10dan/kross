(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3590], {
        8e3: function(e, a, n) {
            Promise.resolve().then(n.bind(n, 40953))
        },
        40953: function(e, a, n) {
            "use strict";
            n.r(a), n.d(a, {
                default: function() {
                    return I
                }
            });
            var t = n(57437);
            n(37154);
            var l = n(55194),
                i = n.n(l),
                s = n(16691),
                d = n.n(s),
                o = n(85294),
                c = n(95945),
                r = n(2265),
                u = n(93770),
                h = n(23741),
                _ = n(54285);
            let v = () => {
                var e;
                let {
                    user: a
                } = (0, h.aC)(), [n, t] = (0, r.useState)("all"), {
                    withdrawalModalOpen: l,
                    setWithdrawalModalOpen: s,
                    setWithdrawalInitData: d,
                    setAmountInWon: v,
                    amountInWon: x
                } = (0, o.qr)(e => ({
                    withdrawalModalOpen: e.withdrawalModalOpen,
                    setWithdrawalModalOpen: e.setWithdrawalModalOpen,
                    setWithdrawalInitData: e.setWithdrawalInitData,
                    setAmountInWon: e.setAmountInWon,
                    amountInWon: e.amountInWon
                }), c.X), [m, j] = (0, r.useState)(!1), [p, f] = (0, r.useState)(!1), [b, w] = (0, r.useState)(1), {
                    startDate: N,
                    setStartDate: g,
                    endDate: I,
                    setEndDate: C
                } = (0, h.Sy)(), {
                    UserClient: y,
                    AccountClient: S
                } = (0, h.G2)(), {
                    accountData: k,
                    releaseDepositControl: D
                } = y.useUserHooks(), O = () => {
                    let e = "processDate||$between||".concat((0, u.PlainDateFormatter)(N), ",").concat((0, u.PlainDateFormatter)(I));
                    return "all" === n ? e : e + ";category||$eq||".concat(n)
                }, {
                    skip: A,
                    offSet: P,
                    totalPage: W,
                    hasNextPage: E,
                    currentPage: M,
                    setTotalCount: F,
                    handlePageClick: L,
                    setCurrentPage: T,
                    handlePrevPageClick: B,
                    handleNextPageClick: H
                } = (0, h.Qt)(10), V = O(), R = {
                    filter: V,
                    order: "id.desc",
                    take: String(P),
                    skip: A
                }, q = [M, n, N, I], {
                    response: J,
                    isLoading: G,
                    refetch: Q,
                    fetchData: U
                } = (0, h.ib)({
                    key: "transactionLogsData",
                    client: "InvestmentsClient",
                    query: "transactionLogs",
                    queryParams: R
                }, null !== a, F, q), {
                    data: Z,
                    isLoading: $,
                    refetch: z
                } = k({
                    accountQuery: {
                        offset: "0",
                        limit: "1"
                    }
                }), {
                    withdrawInit: X
                } = S.useAccountHooks(), {
                    mutate: Y
                } = X(), {
                    mutate: K
                } = D(), [ee, ea] = (0, r.useState)(null), [en, et] = (0, r.useState)(!1), el = null == Z ? void 0 : null === (e = Z.data) || void 0 === e ? void 0 : e.available_withdraw_amount, ei = e => e === _.En.DEPOSIT || e === _.En.DISTRIBUTE || e === _.En.MERCHANT_DEPOSIT, es = e => e.map(e => ({
                    구분: (0, _.JH)(e),
                    "(구) 상품번호": "".concat((null == e ? void 0 : e.loan) ? "".concat(e.loan.no, "호") : ""),
                    "금액(원)": ei(e.category) ? e.amount : -1 * e.amount,
                    "잔액(원)": e.balance,
                    날짜: formatDateTime(new Date(null == e ? void 0 : e.createdAt), "yyyy-MM-dd HH:mm:ss")
                }));
                return (0, r.useEffect)(() => {
                    x > el ? et(!0) : et(!1)
                }, [x, el]), {
                    totalPage: W,
                    handleAdd: e => {
                        if (0 === e) {
                            v(0);
                            return
                        }
                        let a = x.toString().replace(/\D/gi, "");
                        v(parseInt(a || 0) + parseInt(1e4 * e))
                    },
                    inputInt: e => {
                        0 == e.target.value && v("")
                    },
                    isActive: en,
                    endDate: I,
                    maxValue: el,
                    category: n,
                    startDate: N,
                    loadScreen: p,
                    setEndDate: C,
                    currentPage: M,
                    hasNextPage: E,
                    amountInWon: x,
                    setCategory: t,
                    activeButton: ee,
                    downloadFile: () => {
                        j(!0);
                        let e = {
                            filter: O(),
                            order: "id.desc"
                        };
                        U("InvestmentsClient", "transactionLogs", e).then(e => {
                            let a = es(e),
                                n = "".concat((0, u.ISODateFormatter)(new Date), " 입출금내역");
                            (0, _.rJ)(a, ["날짜", "구분", "(구) 상품번호", "금액(원)", "잔액(원)"], n, j)
                        })
                    },
                    setStartDate: g,
                    isDownloading: m,
                    filterByMonth: b,
                    setCurrentPage: T,
                    accountDetails: Z,
                    setAmountInWon: v,
                    handlePageClick: L,
                    isLoadingAccount: $,
                    setFilterByMonth: w,
                    handleInputChange: e => {
                        let a = e.target.value,
                            n = a.replace(/\D/gi, "");
                        v(parseInt(n, 10)), parseInt(n) > el ? et(!0) : et(!1)
                    },
                    handleButtonClick: e => {
                        ea(e)
                    },
                    transactionLogsData: J,
                    handlePrevPageClick: B,
                    handleNextPageClick: H,
                    isLoadingTransactionLogs: G,
                    handleConfirmationOfPayment: () => {
                        f(!0), z(), Q(), setTimeout(() => {
                            f(!1)
                        }, 300)
                    },
                    handleReleaseDepositControl: () => {
                        K(void 0, {
                            onSuccess: e => {
                                e.data.okay ? (0, _.CF)("입금제한 해제가 완료되었습니다.", "success") : (0, _.CF)("입금제한 해제에 실패했습니다.", "error")
                            },
                            onError: e => {
                                (0, _.CF)((null == e ? void 0 : e.message) || "입금제한 해제에 실패했습니다.", "error")
                            }
                        })
                    },
                    handleVerificationOnWithDrawAmount: () => {
                        var e;
                        let n = i()(x).value(),
                            t = parseInt(null == a ? void 0 : a.memberNo, 10);
                        n < 1 || n > (null == Z ? void 0 : null === (e = Z.data) || void 0 === e ? void 0 : e.available_withdraw_amount) || l || Y({
                            amount: n,
                            member_no: t
                        }, {
                            onSuccess: e => {
                                var a, n, t;
                                if (null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : a.okay) {
                                    let a = Date.now();
                                    localStorage.setItem("withdrawExpireTime", a + 3e5), s(!0), d(null == e ? void 0 : e.data)
                                } else(0, _.CF)("".concat(null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : null === (n = t.error) || void 0 === n ? void 0 : n.message), "error")
                            },
                            onError: e => {
                                (0, _.CF)((null == e ? void 0 : e.message) || "출금요청에 실패하였습니다. 관리자에게 문의하세요.", "error")
                            }
                        })
                    }
                }
            };
            var x = n(40084),
                m = n(61396),
                j = n.n(m),
                p = n(35415),
                f = n(86969);
            let b = e => {
                var a, n, l;
                let {
                    deposit: s
                } = e, d = e => {
                    let {
                        title: a,
                        number: n,
                        amount: l
                    } = e;
                    return (0, t.jsx)("button", {
                        className: s.activeButton === n ? "active" : "",
                        onClick: () => {
                            4 == n ? s.setAmountInWon(s.maxValue) : s.handleAdd(l), s.handleButtonClick(n)
                        },
                        children: a
                    })
                };
                return (0, t.jsxs)("div", {
                    children: [(0, t.jsx)("h5", {
                        className: "account__title",
                        children: "예치금 출금"
                    }), (0, t.jsxs)("div", {
                        className: "account__info account__info2",
                        children: [(0, t.jsxs)("div", {
                            className: "flex__lrc",
                            children: [(0, t.jsxs)("div", {
                                children: [(0, t.jsxs)("div", {
                                    className: "account__detail__btn",
                                    children: [(0, t.jsx)(d, {
                                        number: 1,
                                        title: "+1만원",
                                        amount: 1
                                    }), (0, t.jsx)(d, {
                                        number: 2,
                                        title: "+10만원",
                                        amount: 10
                                    }), (0, t.jsx)(d, {
                                        number: 3,
                                        title: " +100만원",
                                        amount: 100
                                    }), (0, t.jsx)(d, {
                                        number: 4,
                                        title: "전액출금",
                                        amount: s.maxValue
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "withdraw__detail__input ".concat(s.isActive ? "active mb0" : "mb0"),
                                    children: [(0, t.jsx)("p", {
                                        children: "출금 가능한 금액이 아닙니다."
                                    }), (0, t.jsx)("input", {
                                        type: "text",
                                        onClick: s.inputInt,
                                        value: i()(s.amountInWon).format(),
                                        onChange: e => {
                                            s.setAmountInWon(parseInt(e.target.value)), s.handleInputChange(e)
                                        }
                                    }), (0, t.jsx)("span", {
                                        children: "원"
                                    })]
                                })]
                            }), (0, t.jsx)("div", {
                                className: "withdraw__money",
                                children: (0, t.jsx)("button", {
                                    disabled: !s.amountInWon || s.amountInWon > s.maxValue,
                                    onClick: () => s.handleVerificationOnWithDrawAmount(),
                                    children: s.withdrawalModalOpen ? (0, t.jsx)(p.TF, {}) : "출금하기"
                                })
                            })]
                        }), (0, t.jsxs)("h6", {
                            className: "flex__c",
                            children: [(0, t.jsx)("span", {
                                className: "charge1",
                                children: "받을 계좌"
                            }), null === (a = f.bankCodeString.find(e => {
                                var a, n;
                                return e.code === (null === (n = s.accountDetails) || void 0 === n ? void 0 : null === (a = n.data) || void 0 === a ? void 0 : a.bank_code)
                            })) || void 0 === a ? void 0 : a.title, " ", null === (l = s.accountDetails) || void 0 === l ? void 0 : null === (n = l.data) || void 0 === n ? void 0 : n.account_no]
                        }), (0, t.jsxs)("div", {
                            className: "account__info__row2 ver1 flex__lrc",
                            children: [(0, t.jsx)("div", {
                                children: (0, t.jsx)("span", {
                                    children: "변경하기"
                                })
                            }), (0, t.jsx)("div", {
                                children: (0, t.jsx)(j(), {
                                    href: "/bank-account-change",
                                    className: "popup__btn1",
                                    children: "받을 계좌 변경하기"
                                })
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "account__desc",
                        children: [(0, t.jsx)("p", {
                            children: "예치금 중 투자 신청 금액, 출금 요청 금액은 출금 가능 금액에서 제외됩니다."
                        }), (0, t.jsx)("p", {
                            children: "출금 가능 시간은 2:00 ~ 23:00 입니다."
                        }), (0, t.jsx)("p", {
                            children: "출금요청 후 4자리 인증코드가 SMS로 전송됩니다."
                        }), (0, t.jsxs)("p", {
                            children: ["SMS가 수신되지 않을 경우, ", (0, t.jsx)("span", {
                                children: "My Account > 회원정보변경"
                            }), "에서 올바른 휴대폰번호가 등록되어 있는지 확인해주세요."]
                        })]
                    })]
                })
            };
            var w = n(47453),
                N = function(e) {
                    let {
                        transactionLogsData: a = [],
                        currentPage: n,
                        totalPage: l,
                        hasNextPage: s,
                        isFetching: o,
                        handlePageClick: c,
                        handlePrevPageClick: r,
                        handleNextPageClick: u
                    } = e, h = (e, a) => {
                        let n = "";
                        return ("invest" === a || "withdraw" === a) && (n += "-"), "".concat(n).concat(i()(e).format())
                    };
                    return (0, t.jsxs)("div", {
                        children: [(0, t.jsxs)("div", {
                            children: [(0, t.jsxs)("div", {
                                className: "board__table mt15",
                                children: [(0, t.jsxs)("div", {
                                    className: "board__table__row head",
                                    children: [(0, t.jsx)("div", {
                                        className: "board__table__cell",
                                        children: "날짜"
                                    }), (0, t.jsx)("div", {
                                        className: "board__table__cell",
                                        children: "구분"
                                    }), (0, t.jsx)("div", {
                                        className: "board__table__cell",
                                        children: "금액"
                                    }), (0, t.jsx)("div", {
                                        className: "board__table__cell",
                                        children: "잔액"
                                    })]
                                }), !o && (null == a ? void 0 : a.length) > 0 ? a.map((e, a) => (0, t.jsxs)("div", {
                                    className: "board__table__row content",
                                    children: [(0, t.jsx)("div", {
                                        className: "board__table__cell ",
                                        "data-title": "날짜",
                                        children: (0, t.jsx)("div", {
                                            children: (0, t.jsx)("span", {
                                                children: (0, w.default)(new Date(null == e ? void 0 : e.createdAt), "yyyy-MM-dd HH:mm:ss")
                                            })
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "board__table__cell no__title",
                                        "data-title": "구분",
                                        children: (0, t.jsx)("div", {
                                            children: (0, t.jsx)("a", {
                                                href: "#",
                                                children: (0, _.JH)(e)
                                            })
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "board__table__cell",
                                        "data-title": "금액",
                                        children: (0, t.jsxs)("div", {
                                            children: [(0, t.jsx)("span", {
                                                children: h(e.amount, e.category)
                                            }), "원"]
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "board__table__cell",
                                        "data-title": "잔액",
                                        children: (0, t.jsxs)("div", {
                                            children: [(0, t.jsx)("span", {
                                                children: i()(e.balance).format()
                                            }), "원"]
                                        })
                                    })]
                                }, a)) : null]
                            }), o && (0, t.jsx)("div", {
                                className: "flex h-50 flex-row justify-center",
                                children: (0, t.jsx)(d(), {
                                    src: x.Z,
                                    alt: "Loading Spinner",
                                    width: 56,
                                    height: 56
                                })
                            }), !o && (!a || 0 === a.length) && (0, t.jsx)("div", {
                                className: "flex flex-row w-full row align-center justify-center my-[5%] m-auto",
                                children: (0, t.jsx)("span", {
                                    className: "text-[#808080ab] font-bold ",
                                    children: "데이터 없음"
                                })
                            })]
                        }), !o && (0, t.jsx)(p.Po, {
                            hasNextPage: s,
                            fetchNextPage: u,
                            fetchPrevPage: r,
                            fetchSpecificPage: c,
                            currentPage: n,
                            totalPage: l
                        })]
                    })
                };
            let g = e => {
                let {
                    title: a,
                    amount: n
                } = e;
                return (0, t.jsxs)("div", {
                    className: "account__info__row flex__lrc",
                    children: [(0, t.jsx)("span", {
                        children: a
                    }), (0, t.jsxs)("div", {
                        children: [(0, t.jsx)("p", {
                            children: i()(n).format()
                        }), (0, t.jsx)("span", {
                            children: "원"
                        })]
                    })]
                })
            };
            var I = function() {
                var e, a, n, l, i, s;
                let o = v(),
                    {
                        accountDetails: c
                    } = o;
                return (0, t.jsxs)("div", {
                    className: "sub account",
                    children: [(0, t.jsx)(p.GY, {
                        title: "계좌관리"
                    }), o.withdrawalModalOpen && (0, t.jsx)("div", {
                        className: "overlay"
                    }), (0, t.jsx)("main", {
                        children: (0, t.jsxs)("div", {
                            className: "inner",
                            children: [(0, t.jsx)(p.uI, {}), o.isLoadingAccount || o.loadScreen && (0, t.jsx)("div", {
                                className: "absolute flex h-screen top-[40%] z-30 left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex-row justify-center",
                                children: (0, t.jsx)(d(), {
                                    src: x.Z,
                                    alt: "Loading Spinner",
                                    width: 56,
                                    height: 56
                                })
                            }), (0, t.jsxs)("div", {
                                className: "account__box1 flex__lrt ",
                                children: [(0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("h5", {
                                        className: "account__title",
                                        children: "예치금 계좌 정보"
                                    }), (0, t.jsxs)("div", {
                                        className: "account__info account__info1",
                                        children: [(0, t.jsx)(g, {
                                            title: "예치금",
                                            amount: null == c ? void 0 : null === (e = c.data) || void 0 === e ? void 0 : e.amount
                                        }), (0, t.jsx)(g, {
                                            title: "출금 요청 금액",
                                            amount: null == c ? void 0 : null === (a = c.data) || void 0 === a ? void 0 : a.pending_withdrawal
                                        }), (0, t.jsx)(g, {
                                            title: "투자 신청 금액",
                                            amount: null == c ? void 0 : null === (n = c.data) || void 0 === n ? void 0 : n.pending_investment
                                        }), (0, t.jsx)(g, {
                                            title: "출금 가능 금액",
                                            amount: null == c ? void 0 : null === (l = c.data) || void 0 === l ? void 0 : l.available_withdraw_amount
                                        }), (0, t.jsxs)("h6", {
                                            children: [null === (i = f.bankCodeString.find(e => {
                                                var a;
                                                return e.code === (null == c ? void 0 : null === (a = c.data) || void 0 === a ? void 0 : a.v_bank_code)
                                            })) || void 0 === i ? void 0 : i.title, " ", null == c ? void 0 : null === (s = c.data) || void 0 === s ? void 0 : s.v_account_no]
                                        }), (0, t.jsxs)("div", {
                                            className: "account__info__row2 flex__lrc account__info__row2__type1",
                                            children: [(0, t.jsx)("div", {
                                                children: (0, t.jsx)("span", {
                                                    children: "입금하기"
                                                })
                                            }), (0, t.jsxs)("div", {
                                                children: [(0, t.jsx)("button", {
                                                    className: "popup__btn1",
                                                    onClick: e => {
                                                        var a, n;
                                                        return (0, _.O3)(e, null === (n = o.accountDetails) || void 0 === n ? void 0 : null === (a = n.data) || void 0 === a ? void 0 : a.v_account_no)
                                                    },
                                                    children: "계좌복사"
                                                }), (0, t.jsx)("button", {
                                                    className: "popup__btn1",
                                                    onClick: o.handleConfirmationOfPayment,
                                                    children: "입금확인"
                                                }), (0, t.jsx)("button", {
                                                    className: "popup__btn1",
                                                    onClick: () => o.handleReleaseDepositControl(),
                                                    children: "입금계좌 제한해제"
                                                })]
                                            })]
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "account__desc",
                                        children: [(0, t.jsx)("p", {
                                            children: "받을 계좌(출금 계좌)로 인증 받은 계좌에서만 입금이 가능합니다."
                                        }), (0, t.jsxs)("p", {
                                            children: ["일부 증권사, 은행계좌에는 입금에 제한이 있을 수 있습니다. 이러한 경우 `입금계좌 제한 해제`", (0, t.jsx)("br", {}), "버튼을 눌러주세요."]
                                        }), (0, t.jsx)("p", {
                                            children: "23:30 ~ 00:30 사이에는 은행 금융망 자체 점검 시간으로 이체가 불가할 수 있습니다."
                                        }), (0, t.jsx)("p", {
                                            children: "입출금 내역의 잔액은 23/05/18일 이후의 내역부터 표시됩니다."
                                        }), (0, t.jsx)("p", {
                                            children: "관련 문의: 1599-9860"
                                        })]
                                    })]
                                }), (0, t.jsx)(b, {
                                    deposit: o
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "com__board deposit__body",
                                children: [(0, t.jsx)("h5", {
                                    children: "입출금 내역"
                                }), (0, t.jsx)(p.mu, {
                                    name: "transaction",
                                    ...o,
                                    filterByCategory: !0
                                }), (0, t.jsx)("div", {
                                    className: "board__wrap",
                                    children: (0, t.jsx)("div", {
                                        className: "active",
                                        children: (0, t.jsx)(N, {
                                            ...o
                                        })
                                    })
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        37154: function() {}
    },
    function(e) {
        e.O(0, [6576, 1425, 7326, 7841, 8218, 6990, 6964, 1501, 1596, 2543, 6386, 3823, 2464, 8668, 198, 2971, 9119, 2452, 1744], function() {
            return e(e.s = 8e3)
        }), _N_E = e.O()
    }
]);
function formatDateTime(date) {
    if (!(date instanceof Date)) {
        date = new Date(date); // 입력값이 Date 객체가 아닐 경우, Date 객체로 변환
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
