(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/chronoverse/glass-panel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlassPanel",
    ()=>GlassPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function GlassPanel({ children, className, glowOnHover = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `glass-panel rounded-xl p-6 transition-all duration-300 ${glowOnHover && "hover:glow-border hover:scale-[1.02]"} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/chronoverse/glass-panel.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = GlassPanel;
var _c;
__turbopack_context__.k.register(_c, "GlassPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chronoverse/glow-button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlowButton",
    ()=>GlowButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function GlowButton({ children, className, variant = "primary", size = "md", ...props }) {
    const variants = {
        primary: "bg-primary/20 border-primary/50 text-primary hover:bg-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]",
        secondary: "bg-secondary border-border text-foreground hover:bg-secondary/80 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
        accent: "bg-accent/20 border-accent/50 text-accent hover:bg-accent/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
    };
    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `relative rounded-lg border font-sans tracking-wider uppercase transition-all duration-300 backdrop-blur-sm ${variants[variant]} ${sizes[size]} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/chronoverse/glow-button.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = GlowButton;
var _c;
__turbopack_context__.k.register(_c, "GlowButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chronoverse/chrono-card.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChronoCard",
    ()=>ChronoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chronoverse$2f$glass$2d$panel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chronoverse/glass-panel.jsx [app-client] (ecmascript)");
"use client";
;
;
function ChronoCard({ title, subtitle, description, year, image, children, className, badge, badgeVariant = "default" }) {
    const badgeStyles = {
        live: "bg-green-500/20 text-green-400 border-green-500/50 animate-pulse",
        upcoming: "bg-primary/20 text-primary border-primary/50",
        completed: "bg-muted text-muted-foreground border-muted",
        default: "bg-accent/20 text-accent border-accent/50"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chronoverse$2f$glass$2d$panel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassPanel"], {
        glowOnHover: true,
        className: `group relative overflow-hidden ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-x-0 h-0.5 bg-linear-to-r from-transparent via-primary/50 to-transparent animate-[scan-line_2s_linear_infinite]"
                }, void 0, false, {
                    fileName: "[project]/components/chronoverse/chrono-card.jsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chronoverse/chrono-card.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-40 mb-4 rounded-lg overflow-hidden bg-muted",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-linear-to-t from-background/80 to-transparent z-10"
                    }, void 0, false, {
                        fileName: "[project]/components/chronoverse/chrono-card.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-muted-foreground text-sm",
                            children: "Image"
                        }, void 0, false, {
                            fileName: "[project]/components/chronoverse/chrono-card.jsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/chronoverse/chrono-card.jsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chronoverse/chrono-card.jsx",
                lineNumber: 34,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-3 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary font-mono text-sm mb-1 block",
                                        children: year
                                    }, void 0, false, {
                                        fileName: "[project]/components/chronoverse/chrono-card.jsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-sans tracking-wide text-foreground group-hover:text-primary transition-colors",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/components/chronoverse/chrono-card.jsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground mt-1",
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/components/chronoverse/chrono-card.jsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chronoverse/chrono-card.jsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-2 py-1 text-xs rounded-full border whitespace-nowrap ${badgeStyles[badgeVariant]}`,
                                children: badge
                            }, void 0, false, {
                                fileName: "[project]/components/chronoverse/chrono-card.jsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chronoverse/chrono-card.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-sm leading-relaxed mt-3",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/chronoverse/chrono-card.jsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/components/chronoverse/chrono-card.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chronoverse/chrono-card.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = ChronoCard;
var _c;
__turbopack_context__.k.register(_c, "ChronoCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chronoverse/chrono-tabs.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChronoTabs",
    ()=>ChronoTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ChronoTabs({ tabs, className }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tabs[0]?.id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 mb-8 p-2 glass-panel rounded-xl",
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab.id),
                        className: `px-4 py-2 rounded-lg font-sans text-sm tracking-wider uppercase transition-all duration-300 ${activeTab === tab.id ? "bg-primary/20 text-primary border border-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,
                        children: tab.label
                    }, tab.id, false, {
                        fileName: "[project]/components/chronoverse/chrono-tabs.jsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/chronoverse/chrono-tabs.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transition-all duration-500 ${activeTab === tab.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"}`,
                        children: tab.content
                    }, tab.id, false, {
                        fileName: "[project]/components/chronoverse/chrono-tabs.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/chronoverse/chrono-tabs.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chronoverse/chrono-tabs.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(ChronoTabs, "p8bPsltEc8mPHodAC/3SsCKK5P4=");
_c = ChronoTabs;
var _c;
__turbopack_context__.k.register(_c, "ChronoTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chronoverse/timeline-item.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimelineItem",
    ()=>TimelineItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function TimelineItem({ title, date, time, venue, description, children, isLast = false, status = "upcoming" }) {
    const statusColors = {
        live: "bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]",
        upcoming: "bg-primary shadow-[0_0_15px_rgba(59,130,246,0.6)]",
        completed: "bg-muted-foreground"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-4 h-4 rounded-full z-10 transition-all duration-300 ${statusColors[status]} ${status === "live" && "animate-pulse"}`
                    }, void 0, false, {
                        fileName: "[project]/components/chronoverse/timeline-item.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-0.5 flex-1 bg-linear-to-b from-primary/50 to-transparent min-h-25"
                    }, void 0, false, {
                        fileName: "[project]/components/chronoverse/timeline-item.jsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chronoverse/timeline-item.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-8 flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-panel rounded-xl p-5 hover:glow-border transition-all duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-start justify-between gap-3 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-sans tracking-wide text-foreground",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/components/chronoverse/timeline-item.jsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                status === "live" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/50 animate-pulse",
                                    children: "LIVE"
                                }, void 0, false, {
                                    fileName: "[project]/components/chronoverse/timeline-item.jsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chronoverse/timeline-item.jsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-4 text-sm text-muted-foreground mb-3",
                            children: [
                                date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chronoverse/timeline-item.jsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/chronoverse/timeline-item.jsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this),
                                        date
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/chronoverse/timeline-item.jsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chronoverse/timeline-item.jsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/chronoverse/timeline-item.jsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this),
                                        time
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/chronoverse/timeline-item.jsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                venue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chronoverse/timeline-item.jsx",
                                                    lineNumber: 90,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chronoverse/timeline-item.jsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/chronoverse/timeline-item.jsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this),
                                        venue
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/chronoverse/timeline-item.jsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chronoverse/timeline-item.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-sm leading-relaxed",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/components/chronoverse/timeline-item.jsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this),
                        children
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chronoverse/timeline-item.jsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chronoverse/timeline-item.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chronoverse/timeline-item.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = TimelineItem;
var _c;
__turbopack_context__.k.register(_c, "TimelineItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chronoverse/page-transition-wrapper.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageTransitionWrapper",
    ()=>PageTransitionWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function PageTransitionWrapper({ children, className }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageTransitionWrapper.useEffect": ()=>{
            setIsVisible(true);
        }
    }["PageTransitionWrapper.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/chronoverse/page-transition-wrapper.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(PageTransitionWrapper, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = PageTransitionWrapper;
var _c;
__turbopack_context__.k.register(_c, "PageTransitionWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chronoverse/star-field.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StarField",
    ()=>StarField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function StarField() {
    _s();
    const [stars, setStars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [shootingStars, setShootingStars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StarField.useEffect": ()=>{
            // Generate static stars
            const generatedStars = Array.from({
                length: 150
            }, {
                "StarField.useEffect.generatedStars": (_, i)=>({
                        id: i,
                        x: Math.random() * 100,
                        y: Math.random() * 100,
                        size: Math.random() * 2 + 1,
                        opacity: Math.random() * 0.5 + 0.2,
                        animationDuration: Math.random() * 3 + 2
                    })
            }["StarField.useEffect.generatedStars"]);
            setStars(generatedStars);
            // Shooting star spawner (Sequential)
            let timeoutId;
            const spawnShootingStar = {
                "StarField.useEffect.spawnShootingStar": ()=>{
                    const id = Date.now();
                    const duration = Math.random() * 1000 + 2000; // 2000ms - 3000ms
                    const newStar = {
                        id: id,
                        x: Math.random() * 50 + 50,
                        y: Math.random() * 50,
                        angle: 135,
                        size: Math.random() * 2 + 1,
                        duration: duration / 1000 + 's'
                    };
                    setShootingStars({
                        "StarField.useEffect.spawnShootingStar": (prev)=>{
                            if (prev.length > 5) return [
                                newStar
                            ];
                            return [
                                ...prev,
                                newStar
                            ];
                        }
                    }["StarField.useEffect.spawnShootingStar"]);
                    // Cleanup
                    setTimeout({
                        "StarField.useEffect.spawnShootingStar": ()=>{
                            setShootingStars({
                                "StarField.useEffect.spawnShootingStar": (prev)=>prev.filter({
                                        "StarField.useEffect.spawnShootingStar": (s)=>s.id !== id
                                    }["StarField.useEffect.spawnShootingStar"])
                            }["StarField.useEffect.spawnShootingStar"]);
                        }
                    }["StarField.useEffect.spawnShootingStar"], duration + 500);
                    // Schedule next
                    // Wait for current to finish (duration) + gap (0.5s - 2s)
                    const nextDelay = duration + (Math.random() * 1500 + 500);
                    timeoutId = setTimeout(spawnShootingStar, nextDelay);
                }
            }["StarField.useEffect.spawnShootingStar"];
            spawnShootingStar();
            return ({
                "StarField.useEffect": ()=>clearTimeout(timeoutId)
            })["StarField.useEffect"];
        }
    }["StarField.useEffect"], []);
    // Handler still used for immediate cleanup if animation works
    const handleAnimationEnd = (id)=>{
        setShootingStars((prev)=>prev.filter((s)=>s.id !== id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none overflow-hidden z-0",
        children: [
            stars.map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute rounded-full bg-white",
                    style: {
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        animation: `twinkle ${star.animationDuration}s ease-in-out infinite`
                    }
                }, star.id, false, {
                    fileName: "[project]/components/chronoverse/star-field.jsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)),
            shootingStars.map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute",
                    style: {
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        transform: `rotate(${star.angle}deg)`,
                        width: `${star.size}px`,
                        height: `${star.size}px`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full bg-white/80 animate-shooting-star",
                        style: {
                            boxShadow: `0 0 10px 2px rgba(255, 255, 255, 0.4)`,
                            animationDuration: star.duration
                        },
                        onAnimationEnd: ()=>handleAnimationEnd(star.id),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/2 left-0 w-[500px] h-[1px] bg-linear-to-r from-transparent to-white -translate-y-1/2 -translate-x-full origin-right"
                        }, void 0, false, {
                            fileName: "[project]/components/chronoverse/star-field.jsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/chronoverse/star-field.jsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                }, star.id, false, {
                    fileName: "[project]/components/chronoverse/star-field.jsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/chronoverse/star-field.jsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(StarField, "BocwZNC5/g6t0UYjh4LT7tNk4NI=");
_c = StarField;
var _c;
__turbopack_context__.k.register(_c, "StarField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chronoverse/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chronoverse$2f$glass$2d$panel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chronoverse/glass-panel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chronoverse$2f$glow$2d$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chronoverse/glow-button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chronoverse$2f$chrono$2d$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chronoverse/chrono-card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chronoverse$2f$chrono$2d$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chronoverse/chrono-tabs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chronoverse$2f$timeline$2d$item$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chronoverse/timeline-item.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chronoverse$2f$page$2d$transition$2d$wrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chronoverse/page-transition-wrapper.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chronoverse$2f$star$2d$field$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chronoverse/star-field.jsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/present.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ongoingEvents",
    ()=>ongoingEvents,
    "registrations",
    ()=>registrations,
    "scheduleData",
    ()=>scheduleData,
    "upcomingEvents",
    ()=>upcomingEvents
]);
const ongoingEvents = [
    {
        id: "code-marathon-2026",
        name: "Code Marathon 2026",
        status: "LIVE_BROADCAST",
        date: "Jan 25-26",
        venue: "Innovation Hub",
        viewers: "1,240 Watching",
        bandwidth: "84%",
        theme: "cyan",
        description: "48-hour coding challenge with real-world problem statements.",
        details: {
            tagline: "BUILD THE FUTURE",
            fullDescription: "Join elite developers from around the globe in this high-intensity 48-hour hackathon. Teams will tackle problems ranging from AI ethics to quantum cryptography.",
            speakers: [
                "Dr. Sarah Chen",
                "Marcus Neo"
            ],
            schedule: [
                "Kickoff: 09:00",
                "Hacking Begins: 10:00",
                "Midpoint Check: 24:00"
            ]
        }
    },
    {
        id: "tech-talks-series",
        name: "Tech Talks Series",
        status: "STREAMING",
        date: "Jan 25",
        venue: "Auditorium A",
        viewers: "856 Watching",
        bandwidth: "62%",
        theme: "violet",
        description: "Industry experts sharing insights on emerging technologies.",
        details: {
            tagline: "KNOWLEDGE TRANSMISSION",
            fullDescription: "A curated series of talks by industry pioneers. Topics include Generative AI, Space Logistics, and Neuro-Link interfaces.",
            speakers: [
                "Elon Z.",
                "Ada L."
            ],
            schedule: [
                "Intro: 14:00",
                "Keynote: 14:15",
                "Panel: 15:30"
            ]
        }
    }
];
const upcomingEvents = [
    {
        id: "robo-championship",
        name: "Robo Championship",
        time: "T-Minus 14h",
        venue: "Tech Arena",
        priority: "HIGH",
        theme: "crimson",
        details: {
            tagline: "STEEL ON STEEL",
            fullDescription: "The ultimate battle of engineering. Autonomous bots fight for supremacy in a hazard-filled arena.",
            speakers: [
                "Referee BOT-9"
            ],
            schedule: [
                "Qualifiers: 09:00",
                "Finals: 16:00"
            ]
        }
    },
    {
        id: "ai-workshop",
        name: "AI Workshop",
        time: "Jan 28, 09:00",
        venue: "Lab Complex",
        priority: "MEDIUM",
        theme: "emerald",
        details: {
            tagline: "NEURAL NETWORKS DECODED",
            fullDescription: "Hands-on workshop on building your first transformer model. Prerequisites: Python and basic calculus.",
            speakers: [
                "Prof. Turing"
            ],
            schedule: [
                "Theory: 09:00",
                "Lab: 11:00"
            ]
        }
    },
    {
        id: "cultural-night",
        name: "Cultural Night",
        time: "Jan 29, 18:00",
        venue: "Open Air Theatre",
        priority: "MAX",
        theme: "amber",
        details: {
            tagline: "HARMONY IN CHAOS",
            fullDescription: "A fusion of traditional art and digital projection mapping. Celebrating diversity through light and sound.",
            speakers: [
                "DJ Pulse"
            ],
            schedule: [
                "Gates Open: 17:00",
                "Show Start: 18:00"
            ]
        }
    }
];
const scheduleData = [
    {
        day: "Day 1",
        date: "Jan 25",
        active: true,
        events: [
            {
                id: "opening-ceremony",
                time: "09:00",
                name: "Opening Ceremony",
                venue: "Main Stage",
                status: "Done",
                theme: "cyan",
                details: {
                    tagline: "INITIATION",
                    fullDescription: "Welcome address.",
                    speakers: [
                        "Dean"
                    ],
                    schedule: []
                }
            },
            {
                id: "code-marathon-kickoff",
                time: "10:30",
                name: "Code Marathon Kickoff",
                venue: "Innovation Hub",
                status: "Live",
                theme: "cyan",
                details: {
                    tagline: "START YOUR ENGINES",
                    fullDescription: "Rules explanation.",
                    speakers: [],
                    schedule: []
                }
            },
            {
                id: "tech-talks-ai",
                time: "14:00",
                name: "Tech Talks - AI & ML",
                venue: "Auditorium A",
                status: "Next",
                theme: "violet",
                details: {
                    tagline: "INTELLIGENCE",
                    fullDescription: "AI deep dive.",
                    speakers: [],
                    schedule: []
                }
            },
            {
                id: "workshop-reg",
                time: "16:00",
                name: "Workshop Registration",
                venue: "Registration Desk",
                status: "Pending",
                theme: "emerald",
                details: {
                    tagline: "SIGN UP",
                    fullDescription: "Registration flow.",
                    speakers: [],
                    schedule: []
                }
            }
        ]
    },
    {
        day: "Day 2",
        date: "Jan 26",
        active: false,
        events: [
            {
                id: "workshop-sessions",
                time: "09:00",
                name: "Workshop Sessions",
                venue: "Lab Complex",
                status: "Pending",
                theme: "emerald",
                details: {
                    tagline: "LEARN",
                    fullDescription: "Deep work.",
                    speakers: [],
                    schedule: []
                }
            },
            {
                id: "tech-talks-blockchain",
                time: "11:00",
                name: "Tech Talks - Blockchain",
                venue: "Auditorium B",
                status: "Pending",
                theme: "violet",
                details: {
                    tagline: "DECENTRALIZE",
                    fullDescription: "Crypto future.",
                    speakers: [],
                    schedule: []
                }
            },
            {
                id: "robo-trials",
                time: "14:00",
                name: "Robo Trials",
                venue: "Tech Arena",
                status: "Pending",
                theme: "crimson",
                details: {
                    tagline: "TESTING",
                    fullDescription: "Qualifier rounds.",
                    speakers: [],
                    schedule: []
                }
            },
            {
                id: "gaming-tournament",
                time: "20:00",
                name: "Gaming Tournament",
                venue: "E-Sports Zone",
                status: "Pending",
                theme: "cyan",
                details: {
                    tagline: "GLHF",
                    fullDescription: "FPS & MOBA finals.",
                    speakers: [],
                    schedule: []
                }
            }
        ]
    },
    {
        day: "Day 3",
        date: "Jan 27",
        active: false,
        events: [
            {
                id: "robo-finals",
                time: "10:00",
                name: "Robo Finals",
                venue: "Tech Arena",
                status: "Pending",
                theme: "crimson",
                details: {
                    tagline: "CHAMPIONS",
                    fullDescription: "Final battle.",
                    speakers: [],
                    schedule: []
                }
            },
            {
                id: "marathon-pres",
                time: "13:00",
                name: "Marathon Presentations",
                venue: "Main Stage",
                status: "Pending",
                theme: "cyan",
                details: {
                    tagline: "SHOWCASE",
                    fullDescription: "Project demos.",
                    speakers: [],
                    schedule: []
                }
            },
            {
                id: "cultural-night-ev",
                time: "18:00",
                name: "Cultural Night",
                venue: "Open Air Theatre",
                status: "Pending",
                theme: "amber",
                details: {
                    tagline: "CELEBRATE",
                    fullDescription: "Closing party.",
                    speakers: [],
                    schedule: []
                }
            }
        ]
    }
];
const registrations = [
    {
        id: "reg-code-marathon",
        name: "Code Marathon",
        spots: 45,
        total: 100,
        status: "Open",
        theme: "cyan",
        details: {
            tagline: "REGISTER NOW",
            fullDescription: "Secure your spot.",
            speakers: [],
            schedule: []
        }
    },
    {
        id: "reg-robo",
        name: "Robo Championship",
        spots: 28,
        total: 50,
        status: "Open",
        theme: "crimson",
        details: {
            tagline: "ENTER ARENA",
            fullDescription: "Register bot.",
            speakers: [],
            schedule: []
        }
    },
    {
        id: "reg-ai",
        name: "AI Workshop",
        spots: 0,
        total: 60,
        status: "Closed",
        theme: "emerald",
        details: {
            tagline: "WAITLIST",
            fullDescription: "Full capacity.",
            speakers: [],
            schedule: []
        }
    },
    {
        id: "reg-culture",
        name: "Cultural Night",
        spots: 999,
        total: 1000,
        status: "Free Entry",
        theme: "amber",
        details: {
            tagline: "OPEN TO ALL",
            fullDescription: "No pass needed.",
            speakers: [],
            schedule: []
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/present/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PresentPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chronoverse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/chronoverse/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chronoverse$2f$page$2d$transition$2d$wrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chronoverse/page-transition-wrapper.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chronoverse$2f$star$2d$field$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chronoverse/star-field.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$present$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/present.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Blue stylized corner for the dashboard feel
const OpsCorner = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `absolute w-4 h-4 text-blue-500 ${className}`,
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 2h20v20",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "square",
                className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            }, void 0, false, {
                fileName: "[project]/app/present/page.jsx",
                lineNumber: 20,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 2h8M2 2v8",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/present/page.jsx",
                lineNumber: 27,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/present/page.jsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = OpsCorner;
// Animated Audio Waveform
const AudioWave = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-0.5 items-end h-4",
        children: [
            ...Array(6)
        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1 bg-blue-400 animate-music-bar",
                style: {
                    animationDelay: `${i * 0.1}s`
                }
            }, i, false, {
                fileName: "[project]/app/present/page.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/app/present/page.jsx",
        lineNumber: 33,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = AudioWave;
// Live Blinking Indicator
const LiveIndicator = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 px-2 py-1 bg-red-500/10 border border-red-500/50 rounded text-red-500 text-[10px] font-bold tracking-widest uppercase",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-2 h-2 rounded-full bg-red-500 animate-pulse"
            }, void 0, false, {
                fileName: "[project]/app/present/page.jsx",
                lineNumber: 47,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            "LIVE"
        ]
    }, void 0, true, {
        fileName: "[project]/app/present/page.jsx",
        lineNumber: 46,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = LiveIndicator;
function PresentPage() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Real-time Clock Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PresentPage.useEffect": ()=>{
            setMounted(true);
            const interval = setInterval({
                "PresentPage.useEffect.interval": ()=>{
                    const now = new Date();
                    setCurrentTime(now.toLocaleTimeString("en-US", {
                        hour12: false
                    }));
                }
            }["PresentPage.useEffect.interval"], 1000);
            return ({
                "PresentPage.useEffect": ()=>clearInterval(interval)
            })["PresentPage.useEffect"];
        }
    }["PresentPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chronoverse$2f$page$2d$transition$2d$wrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageTransitionWrapper"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "jsx-8a970fc105ef947" + " " + "relative min-h-screen bg-[#030712] overflow-hidden selection:bg-blue-500/30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chronoverse$2f$star$2d$field$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarField"], {}, void 0, false, {
                    fileName: "[project]/app/present/page.jsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8a970fc105ef947" + " " + "absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-size-[50px_50px] opacity-40"
                }, void 0, false, {
                    fileName: "[project]/app/present/page.jsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8a970fc105ef947" + " " + "absolute top-0 left-0 w-full h-125 bg-linear-to-b from-blue-900/20 to-transparent pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/app/present/page.jsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8a970fc105ef947" + " " + "absolute inset-0 overflow-hidden pointer-events-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8a970fc105ef947" + " " + "absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_340deg,rgba(59,130,246,0.1)_360deg)] animate-[spin_10s_linear_infinite] opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/app/present/page.jsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/present/page.jsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8a970fc105ef947" + " " + "relative z-10 px-4 py-6 md:py-10 flex flex-col min-h-screen",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8a970fc105ef947" + " " + "max-w-7xl mx-auto w-full mb-8 border-b border-blue-500/20 pb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8a970fc105ef947" + " " + "flex flex-col md:flex-row justify-between items-end md:items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8a970fc105ef947" + " " + "flex items-center gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/?state=navigation",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "jsx-8a970fc105ef947" + " " + "flex items-center gap-2 text-blue-400/60 hover:text-white transition-colors group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8a970fc105ef947" + " " + "w-6 h-6 border border-blue-500/30 rounded flex items-center justify-center group-hover:bg-blue-500/20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                className: "jsx-8a970fc105ef947" + " " + "w-3 h-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M15 19l-7-7 7-7",
                                                                    className: "jsx-8a970fc105ef947"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 96,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/present/page.jsx",
                                                                lineNumber: 90,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/present/page.jsx",
                                                            lineNumber: 89,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-8a970fc105ef947" + " " + "text-[10px] font-mono tracking-widest uppercase",
                                                            children: "Ops Center"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/present/page.jsx",
                                                            lineNumber: 104,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/present/page.jsx",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/present/page.jsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8a970fc105ef947" + " " + "h-4 w-px bg-blue-500/20"
                                            }, void 0, false, {
                                                fileName: "[project]/app/present/page.jsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "jsx-8a970fc105ef947" + " " + "text-xl md:text-2xl font-bold text-white tracking-tighter flex items-center gap-2",
                                                children: [
                                                    "INGENIUM ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-8a970fc105ef947" + " " + "text-blue-500",
                                                        children: "LIVE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/present/page.jsx",
                                                        lineNumber: 111,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/present/page.jsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/present/page.jsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8a970fc105ef947" + " " + "flex items-center gap-6 text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8a970fc105ef947" + " " + "hidden md:block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8a970fc105ef947" + " " + "text-[9px] text-blue-500/50 uppercase tracking-wider font-mono",
                                                        children: "System Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/present/page.jsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8a970fc105ef947" + " " + "text-xs text-green-400 font-mono flex items-center gap-2 justify-end",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-8a970fc105ef947",
                                                                children: "OPTIMAL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/present/page.jsx",
                                                                lineNumber: 122,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-8a970fc105ef947" + " " + "w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/present/page.jsx",
                                                                lineNumber: 123,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/present/page.jsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/present/page.jsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8a970fc105ef947" + " " + "bg-blue-950/30 border border-blue-500/30 px-4 py-2 rounded",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8a970fc105ef947" + " " + "text-[9px] text-blue-400/60 uppercase tracking-wider font-mono text-center",
                                                        children: "Local Time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/present/page.jsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8a970fc105ef947" + " " + "text-xl md:text-2xl font-mono text-white tracking-widest font-bold tabular-nums",
                                                        children: currentTime || "00:00:00"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/present/page.jsx",
                                                        lineNumber: 131,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/present/page.jsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/present/page.jsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/present/page.jsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/present/page.jsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8a970fc105ef947" + " " + "max-w-7xl mx-auto w-full mb-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8a970fc105ef947" + " " + "flex-wrap gap-2 p-1 bg-black/40 border border-blue-500/20 rounded-lg backdrop-blur-md inline-flex",
                                children: [
                                    "dashboard",
                                    "schedule",
                                    "access"
                                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab(tab),
                                        className: "jsx-8a970fc105ef947" + " " + `px-6 py-2 rounded text-xs font-bold uppercase tracking-widest transition-all duration-300 relative overflow-hidden ${activeTab === tab ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]" : "text-blue-500/50 hover:text-blue-300 hover:bg-blue-500/10"}`,
                                        children: [
                                            activeTab === tab && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8a970fc105ef947" + " " + "absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-scan-fast"
                                            }, void 0, false, {
                                                fileName: "[project]/app/present/page.jsx",
                                                lineNumber: 152,
                                                columnNumber: 21
                                            }, this),
                                            tab === "access" ? "Registrations" : tab.charAt(0).toUpperCase() + tab.slice(1)
                                        ]
                                    }, tab, true, {
                                        fileName: "[project]/app/present/page.jsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/present/page.jsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/present/page.jsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8a970fc105ef947" + " " + "max-w-7xl mx-auto w-full flex-1",
                            children: [
                                activeTab === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8a970fc105ef947" + " " + "grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-8a970fc105ef947" + " " + "lg:col-span-8 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-8a970fc105ef947" + " " + "flex items-center justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "jsx-8a970fc105ef947" + " " + "text-sm font-mono text-blue-400 uppercase tracking-widest flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    className: "jsx-8a970fc105ef947" + " " + "w-4 h-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                                                                        className: "jsx-8a970fc105ef947"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/present/page.jsx",
                                                                        lineNumber: 177,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Active Feeds"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/present/page.jsx",
                                                            lineNumber: 170,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-8a970fc105ef947" + " " + "text-[10px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded border border-blue-500/20",
                                                            children: "2 SIGNALS FOUND"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/present/page.jsx",
                                                            lineNumber: 186,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/present/page.jsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$present$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ongoingEvents"].map((event, i)=>{
                                                    const themeColors = {
                                                        cyan: "blue",
                                                        violet: "purple",
                                                        crimson: "red",
                                                        emerald: "green",
                                                        amber: "yellow"
                                                    };
                                                    const color = themeColors[event.theme || "cyan"];
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/present/event/${event.id}`,
                                                        className: "block w-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8a970fc105ef947" + " " + `group relative bg-[#050a14] border border-${color}-500/30 rounded-lg overflow-hidden hover:border-${color}-400 transition-all duration-300 mb-6`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-8a970fc105ef947" + " " + "absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.4)_50%)] bg-size-[100%_4px] opacity-20 pointer-events-none z-10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-8a970fc105ef947" + " " + `absolute inset-0 bg-linear-to-r from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-8a970fc105ef947" + " " + "p-6 relative z-20 flex flex-col md:flex-row gap-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-8a970fc105ef947" + " " + `w-full md:w-48 h-32 bg-${color}-900/20 rounded border border-${color}-500/20 flex items-center justify-center relative overflow-hidden`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-8a970fc105ef947" + " " + "absolute inset-0 flex items-center justify-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-8a970fc105ef947" + " " + `w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-${color}-400 group-hover:scale-110 transition-all cursor-pointer`,
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            fill: "currentColor",
                                                                                            viewBox: "0 0 24 24",
                                                                                            className: "jsx-8a970fc105ef947" + " " + "w-4 h-4 text-white ml-1",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                d: "M8 5v14l11-7z",
                                                                                                className: "jsx-8a970fc105ef947"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/present/page.jsx",
                                                                                                lineNumber: 214,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/present/page.jsx",
                                                                                            lineNumber: 209,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/present/page.jsx",
                                                                                        lineNumber: 208,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/present/page.jsx",
                                                                                    lineNumber: 207,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-8a970fc105ef947" + " " + "absolute top-2 left-2",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiveIndicator, {}, void 0, false, {
                                                                                        fileName: "[project]/app/present/page.jsx",
                                                                                        lineNumber: 219,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/present/page.jsx",
                                                                                    lineNumber: 218,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/present/page.jsx",
                                                                            lineNumber: 206,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-8a970fc105ef947" + " " + "flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-8a970fc105ef947" + " " + "flex justify-between items-start mb-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                            className: "jsx-8a970fc105ef947" + " " + `text-xl font-bold text-white group-hover:text-${color}-300 transition-colors`,
                                                                                            children: event.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/present/page.jsx",
                                                                                            lineNumber: 226,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AudioWave, {}, void 0, false, {
                                                                                            fileName: "[project]/app/present/page.jsx",
                                                                                            lineNumber: 229,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/present/page.jsx",
                                                                                    lineNumber: 225,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-8a970fc105ef947" + " " + `flex flex-wrap gap-4 text-xs font-mono text-${color}-400/60 mb-4`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "jsx-8a970fc105ef947" + " " + "flex items-center gap-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "jsx-8a970fc105ef947" + " " + `w-1.5 h-1.5 bg-${color}-500 rounded-full`
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/present/page.jsx",
                                                                                                    lineNumber: 234,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                " ",
                                                                                                event.venue
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/present/page.jsx",
                                                                                            lineNumber: 233,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "jsx-8a970fc105ef947" + " " + "flex items-center gap-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                    fill: "none",
                                                                                                    viewBox: "0 0 24 24",
                                                                                                    stroke: "currentColor",
                                                                                                    className: "jsx-8a970fc105ef947" + " " + "w-3 h-3",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                            strokeLinecap: "round",
                                                                                                            strokeLinejoin: "round",
                                                                                                            strokeWidth: 2,
                                                                                                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                                                                                            className: "jsx-8a970fc105ef947"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/app/present/page.jsx",
                                                                                                            lineNumber: 244,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                            strokeLinecap: "round",
                                                                                                            strokeLinejoin: "round",
                                                                                                            strokeWidth: 2,
                                                                                                            d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                                                                                                            className: "jsx-8a970fc105ef947"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/app/present/page.jsx",
                                                                                                            lineNumber: 250,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/app/present/page.jsx",
                                                                                                    lineNumber: 238,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                " ",
                                                                                                event.viewers
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/present/page.jsx",
                                                                                            lineNumber: 237,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/present/page.jsx",
                                                                                    lineNumber: 232,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "jsx-8a970fc105ef947" + " " + "text-sm text-gray-400 mb-4",
                                                                                    children: event.description
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/present/page.jsx",
                                                                                    lineNumber: 261,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-8a970fc105ef947" + " " + `w-full h-1 bg-${color}-900/30 rounded-full overflow-hidden flex items-center`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            width: event.bandwidth
                                                                                        },
                                                                                        className: "jsx-8a970fc105ef947" + " " + `h-full bg-${color}-500`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/present/page.jsx",
                                                                                        lineNumber: 267,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/present/page.jsx",
                                                                                    lineNumber: 266,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-8a970fc105ef947" + " " + `text-[9px] text-right text-${color}-500/40 font-mono mt-1`,
                                                                                    children: [
                                                                                        "STREAM STABILITY: ",
                                                                                        event.bandwidth
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/present/page.jsx",
                                                                                    lineNumber: 272,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/present/page.jsx",
                                                                            lineNumber: 224,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 204,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/present/page.jsx",
                                                            lineNumber: 197,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, i, false, {
                                                        fileName: "[project]/app/present/page.jsx",
                                                        lineNumber: 196,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/present/page.jsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-8a970fc105ef947" + " " + "lg:col-span-4 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-8a970fc105ef947" + " " + "bg-[#050a14] border border-blue-500/20 rounded-lg p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-8a970fc105ef947" + " " + "text-xs font-bold text-white uppercase tracking-widest mb-4 border-b border-blue-500/20 pb-2",
                                                            children: "Upcoming Transmissions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/present/page.jsx",
                                                            lineNumber: 286,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8a970fc105ef947" + " " + "space-y-4",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$present$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upcomingEvents"].map((ev, i)=>{
                                                                const themeColors = {
                                                                    cyan: "blue",
                                                                    violet: "purple",
                                                                    crimson: "red",
                                                                    emerald: "green",
                                                                    amber: "yellow"
                                                                };
                                                                const color = themeColors[ev.theme || "cyan"];
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/present/event/${ev.id}`,
                                                                    className: "block",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-8a970fc105ef947" + " " + "flex items-center gap-3 group cursor-pointer hover:bg-blue-500/5 p-2 rounded transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-8a970fc105ef947" + " " + `w-1 h-8 rounded-full ${ev.priority === "MAX" ? "bg-red-500" : ev.priority === "HIGH" ? "bg-orange-500" : "bg-blue-500"} group-hover:h-10 transition-all`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/present/page.jsx",
                                                                                lineNumber: 298,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-8a970fc105ef947" + " " + "flex-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-8a970fc105ef947" + " " + `text-sm font-bold text-gray-200 group-hover:text-${color}-300`,
                                                                                        children: ev.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/present/page.jsx",
                                                                                        lineNumber: 302,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-8a970fc105ef947" + " " + "text-[10px] font-mono text-blue-500/50",
                                                                                        children: [
                                                                                            ev.time,
                                                                                            " | ",
                                                                                            ev.venue
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/present/page.jsx",
                                                                                        lineNumber: 305,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/present/page.jsx",
                                                                                lineNumber: 301,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "jsx-8a970fc105ef947" + " " + `text-${color}-500 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] border border-${color}-500 px-2 py-1 rounded hover:bg-${color}-500 hover:text-white`,
                                                                                children: "VIEW"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/present/page.jsx",
                                                                                lineNumber: 309,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/present/page.jsx",
                                                                        lineNumber: 295,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, i, false, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 294,
                                                                    columnNumber: 27
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/present/page.jsx",
                                                            lineNumber: 289,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/present/page.jsx",
                                                    lineNumber: 285,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-8a970fc105ef947" + " " + "bg-black border border-blue-500/30 rounded-lg p-4 font-mono text-[10px] h-40 overflow-hidden relative opacity-70",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8a970fc105ef947" + " " + "absolute inset-0 bg-blue-500/5 pointer-events-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/present/page.jsx",
                                                            lineNumber: 321,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8a970fc105ef947" + " " + "space-y-1 text-blue-400/80",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-8a970fc105ef947",
                                                                    children: " connecting to server_node_alpha..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 323,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-8a970fc105ef947" + " " + "text-green-400",
                                                                    children: [
                                                                        " ",
                                                                        "connection established (12ms)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 324,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-8a970fc105ef947",
                                                                    children: " fetching event_manifest.json"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 328,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-8a970fc105ef947",
                                                                    children: " loading assets..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 329,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-8a970fc105ef947" + " " + "animate-pulse",
                                                                    children: [
                                                                        " ",
                                                                        "monitoring system health..."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/present/page.jsx",
                                                            lineNumber: 322,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/present/page.jsx",
                                                    lineNumber: 320,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/present/page.jsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/present/page.jsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                activeTab === "schedule" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8a970fc105ef947" + " " + "grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$present$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleData"].map((day, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-8a970fc105ef947" + " " + `relative flex flex-col h-full rounded-xl border ${day.active ? "border-blue-400 bg-blue-900/10" : "border-blue-500/20 bg-[#050a14]/50"} overflow-hidden transition-all duration-300 hover:border-blue-500/50`,
                                            children: [
                                                day.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-8a970fc105ef947" + " " + "absolute top-0 inset-x-0 h-0.5 bg-blue-400 shadow-[0_0_10px_#3b82f6]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/present/page.jsx",
                                                    lineNumber: 349,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-8a970fc105ef947" + " " + "p-4 border-b border-blue-500/10 bg-black/20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8a970fc105ef947" + " " + "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-8a970fc105ef947" + " " + `text-lg font-bold ${day.active ? "text-white" : "text-gray-400"}`,
                                                                children: day.day
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/present/page.jsx",
                                                                lineNumber: 355,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-8a970fc105ef947" + " " + "text-xs font-mono text-blue-500/60",
                                                                children: day.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/present/page.jsx",
                                                                lineNumber: 360,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/present/page.jsx",
                                                        lineNumber: 354,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/present/page.jsx",
                                                    lineNumber: 353,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-8a970fc105ef947" + " " + "p-4 space-y-4 flex-1 relative",
                                                    children: [
                                                        day.active && /* The "Current Time" Laser Line */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8a970fc105ef947" + " " + "absolute left-0 right-0 top-1/3 h-px bg-red-500 z-10 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-8a970fc105ef947" + " " + "w-full h-px bg-red-500 animate-pulse shadow-[0_0_8px_red]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 371,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-8a970fc105ef947" + " " + "absolute right-2 text-[8px] bg-red-500 text-black font-bold px-1 rounded-sm",
                                                                    children: "NOW"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 372,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/present/page.jsx",
                                                            lineNumber: 370,
                                                            columnNumber: 25
                                                        }, this),
                                                        day.events.map((ev, j)=>{
                                                            const themeColors = {
                                                                cyan: "blue",
                                                                violet: "purple",
                                                                crimson: "red",
                                                                emerald: "green",
                                                                amber: "yellow"
                                                            };
                                                            const color = themeColors[ev.theme || "cyan"];
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/present/event/${ev.id}`,
                                                                className: "block mb-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-8a970fc105ef947" + " " + "flex gap-3 relative z-0 opacity-90 hover:opacity-100 transition-opacity group cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-8a970fc105ef947" + " " + `w-12 text-[10px] font-mono text-${color}-400 pt-1 text-right group-hover:text-${color}-300`,
                                                                            children: ev.time
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/present/page.jsx",
                                                                            lineNumber: 387,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-8a970fc105ef947" + " " + `relative flex-1 pb-4 border-l border-${color}-500/10 pl-4 group-hover:border-${color}-500/30 transition-colors`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-8a970fc105ef947" + " " + `absolute -left-1.25 top-1.5 w-2.5 h-2.5 rounded-full border-2 ${ev.status === "Live" ? "bg-red-500 border-red-500 animate-pulse" : ev.status === "Done" ? `bg-${color}-900 border-${color}-700` : `bg-black border-${color}-500/30`}`
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/present/page.jsx",
                                                                                    lineNumber: 391,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "jsx-8a970fc105ef947" + " " + `text-sm font-medium ${ev.status === "Live" ? "text-white" : "text-gray-400"} group-hover:text-${color}-200`,
                                                                                    children: ev.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/present/page.jsx",
                                                                                    lineNumber: 394,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "jsx-8a970fc105ef947" + " " + `text-[10px] text-${color}-500/50`,
                                                                                    children: ev.venue
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/present/page.jsx",
                                                                                    lineNumber: 399,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/present/page.jsx",
                                                                            lineNumber: 390,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, j, false, {
                                                                fileName: "[project]/app/present/page.jsx",
                                                                lineNumber: 383,
                                                                columnNumber: 27
                                                            }, this);
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/present/page.jsx",
                                                    lineNumber: 367,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/present/page.jsx",
                                            lineNumber: 344,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/present/page.jsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this),
                                activeTab === "access" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8a970fc105ef947" + " " + "grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$present$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registrations"].map((reg, i)=>{
                                        const percent = reg.spots / reg.total * 100;
                                        const isFull = reg.spots === 0;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-8a970fc105ef947" + " " + "group relative bg-[#080c14] border border-blue-500/20 rounded-xl overflow-hidden hover:bg-blue-900/5 transition-all duration-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpsCorner, {
                                                    className: "top-0 right-0 rotate-90"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/present/page.jsx",
                                                    lineNumber: 425,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpsCorner, {
                                                    className: "bottom-0 left-0 -rotate-90"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/present/page.jsx",
                                                    lineNumber: 426,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-8a970fc105ef947" + " " + "absolute inset-0 bg-linear-to-tr from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/present/page.jsx",
                                                    lineNumber: 429,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-8a970fc105ef947" + " " + "p-6 flex flex-col h-full justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8a970fc105ef947",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-8a970fc105ef947" + " " + "flex justify-between items-start mb-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-8a970fc105ef947" + " " + "p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 text-blue-400",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                stroke: "currentColor",
                                                                                className: "jsx-8a970fc105ef947" + " " + "w-6 h-6",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 1.5,
                                                                                    d: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0c0 .883-.393 1.627-1.08 1.998",
                                                                                    className: "jsx-8a970fc105ef947"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/present/page.jsx",
                                                                                    lineNumber: 441,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/present/page.jsx",
                                                                                lineNumber: 435,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/present/page.jsx",
                                                                            lineNumber: 434,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-8a970fc105ef947" + " " + `text-[10px] font-bold px-2 py-1 rounded border uppercase ${isFull ? "border-red-500/30 text-red-500 bg-red-500/5" : "border-green-500/30 text-green-500 bg-green-500/5"}`,
                                                                            children: reg.status
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/present/page.jsx",
                                                                            lineNumber: 449,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 433,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "jsx-8a970fc105ef947" + " " + "text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors",
                                                                    children: reg.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 455,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-8a970fc105ef947" + " " + "text-xs text-blue-500/50 font-mono",
                                                                    children: [
                                                                        "ACCESS_ID: REG-",
                                                                        1000 + i
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 458,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/present/page.jsx",
                                                            lineNumber: 432,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8a970fc105ef947" + " " + "mt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-8a970fc105ef947" + " " + "flex justify-between text-[10px] font-mono text-gray-400 mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-8a970fc105ef947",
                                                                            children: "CAPACITY"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/present/page.jsx",
                                                                            lineNumber: 465,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-8a970fc105ef947" + " " + ((isFull ? "text-red-500" : "text-blue-400") || ""),
                                                                            children: reg.spots === 999 ? "UNLIMITED" : `${reg.spots} / ${reg.total}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/present/page.jsx",
                                                                            lineNumber: 466,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 464,
                                                                    columnNumber: 27
                                                                }, this),
                                                                reg.spots !== 999 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-8a970fc105ef947" + " " + "h-1.5 w-full bg-gray-800 rounded-full overflow-hidden",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: `${reg.spots / reg.total * 100}%`
                                                                        },
                                                                        className: "jsx-8a970fc105ef947" + " " + `h-full rounded-full ${isFull ? "bg-red-500" : "bg-blue-500"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/present/page.jsx",
                                                                        lineNumber: 479,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 478,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: isFull ? '#' : `/present/registration?event=${encodeURIComponent(reg.name)}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        disabled: isFull,
                                                                        className: "jsx-8a970fc105ef947" + " " + `w-full mt-4 py-3 text-xs font-bold uppercase tracking-widest transition-all ${isFull ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/50"}`,
                                                                        children: isFull ? "Access Denied" : "Initialize Registration"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/present/page.jsx",
                                                                        lineNumber: 489,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/present/page.jsx",
                                                                    lineNumber: 488,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/present/page.jsx",
                                                            lineNumber: 463,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/present/page.jsx",
                                                    lineNumber: 431,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/present/page.jsx",
                                            lineNumber: 421,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/present/page.jsx",
                                    lineNumber: 415,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/present/page.jsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/present/page.jsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "8a970fc105ef947",
                    children: "@keyframes music-bar{0%,to{height:20%}50%{height:100%}}.animate-music-bar{animation:1s ease-in-out infinite music-bar}.animate-scan-fast{animation:2s linear infinite scan}@keyframes scan{0%{transform:translate(-100%)}to{transform:translate(100%)}}@keyframes fade-in-up{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in-up{animation:.5s ease-out forwards fade-in-up}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/present/page.jsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/present/page.jsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(PresentPage, "5rCwBB7fEPyUeywosjcLuJDxyPI=");
_c3 = PresentPage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "OpsCorner");
__turbopack_context__.k.register(_c1, "AudioWave");
__turbopack_context__.k.register(_c2, "LiveIndicator");
__turbopack_context__.k.register(_c3, "PresentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_10da5064._.js.map