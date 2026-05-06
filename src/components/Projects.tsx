"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const professionalProjects = [
  {
    title: "Honda Pakistan Portal",
    description:
      "Enterprise booking portal for Honda Pakistan — vehicle catalogue, online booking, dealer locator, and full admin CMS secured with Content Security Policy headers.",
    tech: ["Laravel", "Next.js", "MySQL", "REST API", "CSP"],
    color: "#ef4444",
    mockup: "honda",
    live: "#",
  },
  {
    title: "MG Pakistan Website",
    description:
      "Official digital presence for MG Pakistan. Next.js frontend + Laravel API backend covering vehicle showcase, dealer network, specifications, and lead generation.",
    tech: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"],
    color: "#38bdf8",
    mockup: "mg",
    live: "#",
  },
  {
    title: "Jazz Pakistan SSP",
    description:
      "Self-Service Portal for Jazz Pakistan — account management, bill viewing, plan upgrades, and support requests in one unified, responsive interface.",
    tech: ["Laravel", "PHP", "MySQL", "API Integration"],
    color: "#f59e0b",
    mockup: "jazz",
    live: "#",
  },
];

const personalProjects = [
  {
    title: "Sogaat POS System",
    description:
      "Full-featured Point of Sale on the MERN stack — real-time sales tracking, inventory management, reporting dashboards, and multi-user access control.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    color: "#8b5cf6",
    mockup: "pos",
    live: "#",
  },
  {
    title: "Go VPN",
    description:
      "Secure VPN application with encrypted communication channels, user authentication, and server connection management built for network security.",
    tech: ["PHP", "Laravel", "MySQL", "Encryption"],
    color: "#10b981",
    mockup: "vpn",
    live: "#",
  },
  {
    title: "BreknBall — Shopify Store",
    description:
      "High-performance eCommerce store with custom Liquid theme development, advanced technical SEO, and conversion-rate optimisation.",
    tech: ["Shopify", "Liquid", "SEO", "Performance"],
    color: "#84cc16",
    mockup: "ecommerce-sport",
    live: "#",
  },
  {
    title: "Pet Experts — Shopify",
    description:
      "Subscription-based pet-products store with recurring billing, personalised recommendations, and a full customer subscription management portal.",
    tech: ["Shopify", "Liquid", "Subscriptions", "API"],
    color: "#c084fc",
    mockup: "ecommerce-pet",
    live: "#",
  },
  {
    title: "Yumeaz App Integration",
    description:
      "RESTful API integration layer for a mobile app — designed for seamless, scalable communication between mobile client and Laravel backend.",
    tech: ["PHP", "Laravel", "REST API", "MySQL"],
    color: "#06b6d4",
    mockup: "api",
    live: "#",
  },
  {
    title: "Russells International Institute",
    description:
      "Fully dynamic Next.js + Laravel website for an educational institute with admin panel for courses, announcements, and programs. Serves IT education and study-abroad programmes.",
    tech: ["Next.js", "Laravel", "MySQL", "Admin CMS"],
    color: "#6366f1",
    mockup: "institute",
    live: "#",
  },
];

/* ─── Shared browser chrome ─── */
function BrowserChrome({ dark = true }: { dark?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 10px", background: dark ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.07)", flexShrink: 0 }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57" }} />
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e" }} />
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840" }} />
      <span style={{ flex: 1, height: 10, borderRadius: 3, background: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)", marginLeft: 6 }} />
    </div>
  );
}

/* ─── UNIQUE mockup per project ─── */
function ProjectMockup({ type, accent }: { type: string; accent: string }) {
  const base: React.CSSProperties = { height: "100%", display: "flex", flexDirection: "column", fontFamily: "system-ui,sans-serif", overflow: "hidden" };

  /* ── HONDA: Red automotive CMS dashboard ── */
  if (type === "honda") return (
    <div style={{ ...base, background: "linear-gradient(155deg,#0c0404 0%,#1a0707 50%,#0f0404 100%)" }}>
      <BrowserChrome />
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px", background:"rgba(220,38,38,0.1)", borderBottom:"1px solid rgba(220,38,38,0.2)", flexShrink:0 }}>
        <div style={{ display:"flex", alignItems:"center", gap:5 }}>
          <div style={{ width:16, height:16, borderRadius:3, background:"#ef4444", display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, color:"#fff", fontWeight:800 }}>H</div>
          <span style={{ color:"#ef4444", fontSize:8.5, fontWeight:700, letterSpacing:1 }}>HONDA CMS</span>
        </div>
        <div style={{ display:"flex", gap:8 }}>
          {["Bookings","Fleet","Reports"].map(t => <span key={t} style={{ fontSize:7, color:"rgba(255,255,255,0.32)" }}>{t}</span>)}
        </div>
      </div>
      <div style={{ display:"flex", gap:5, padding:"6px 10px", flexShrink:0 }}>
        {[["142","Orders","#ef4444"],["38","Active","#f97316"],["2.4M","Revenue","#4ade80"]].map(([v,l,c]) => (
          <div key={l} style={{ flex:1, borderRadius:6, padding:"5px 6px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:c, opacity:0.6, borderRadius:"6px 6px 0 0" }} />
            <div style={{ fontSize:11, fontWeight:800, color:c as string }}>{v}</div>
            <div style={{ fontSize:6.5, color:"rgba(255,255,255,0.28)", marginTop:1 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ padding:"0 10px", flex:1 }}>
        <div style={{ display:"flex", gap:5, paddingBottom:4, marginBottom:3, borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
          {["Customer","Vehicle","Status"].map((h,i) => <span key={h} style={{ flex:i===0?2:1, fontSize:6.5, color:"rgba(255,255,255,0.2)", fontWeight:700, textTransform:"uppercase" as const }}>{h}</span>)}
        </div>
        {[["Ali Hassan","Civic 2024","#4ade80","✓ Done"],["Sara Khan","City 2024","#fbbf24","⏳ Pending"],["U. Farooq","HR-V 2024","#60a5fa","↻ Processing"]].map(([name,car,clr,status]) => (
          <div key={name} style={{ display:"flex", gap:5, padding:"4px 0", borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
            <span style={{ flex:2, fontSize:7.5, color:"rgba(255,255,255,0.52)" }}>{name}</span>
            <span style={{ flex:1, fontSize:7, color:"rgba(255,255,255,0.3)" }}>{car}</span>
            <span style={{ flex:1.5, fontSize:7, color:clr as string, fontWeight:600 }}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );

  /* ── MG: Cool blue vehicle showcase ── */
  if (type === "mg") return (
    <div style={{ ...base, background: "linear-gradient(155deg,#020812 0%,#040f24 60%,#061030 100%)" }}>
      <BrowserChrome />
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px", background:"rgba(56,189,248,0.06)", borderBottom:"1px solid rgba(56,189,248,0.14)", flexShrink:0 }}>
        <span style={{ color:"#38bdf8", fontSize:12, fontWeight:900, letterSpacing:3 }}>MG</span>
        <div style={{ display:"flex", gap:10 }}>
          {["Models","Dealers","Test Drive"].map(t => <span key={t} style={{ fontSize:7, color:"rgba(255,255,255,0.32)" }}>{t}</span>)}
        </div>
        <span style={{ fontSize:7, padding:"2px 9px", borderRadius:10, background:"linear-gradient(90deg,#38bdf8,#6366f1)", color:"#000", fontWeight:700 }}>Book Now</span>
      </div>
      <div style={{ padding:"7px 10px 4px", borderBottom:"1px solid rgba(255,255,255,0.05)", flexShrink:0 }}>
        <div style={{ fontSize:10, fontWeight:800, color:"rgba(255,255,255,0.88)" }}>Drive the Future</div>
        <div style={{ height:2, width:"55%", borderRadius:2, background:"linear-gradient(90deg,#38bdf8,#6366f1)", marginTop:4, opacity:0.8 }} />
      </div>
      <div style={{ display:"flex", gap:5, padding:"6px 10px", flex:1 }}>
        {[["MG HS","1,950,000"],["MG ZS","1,650,000"],["MG 5","2,100,000"]].map(([model,price]) => (
          <div key={model} style={{ flex:1, borderRadius:7, overflow:"hidden", border:"1px solid rgba(56,189,248,0.15)" }}>
            <div style={{ height:50, background:"linear-gradient(160deg,rgba(56,189,248,0.14),rgba(99,102,241,0.09))", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>🚘</div>
            <div style={{ padding:"4px 5px", background:"rgba(56,189,248,0.04)" }}>
              <div style={{ fontSize:7.5, fontWeight:700, color:"rgba(255,255,255,0.72)" }}>{model}</div>
              <div style={{ fontSize:6.5, color:"#38bdf8", marginTop:1 }}>PKR {price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  /* ── JAZZ: Amber telecom self-service ── */
  if (type === "jazz") return (
    <div style={{ ...base, background: "linear-gradient(155deg,#0c0600 0%,#180e00 60%,#0e0700 100%)" }}>
      <BrowserChrome />
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px", background:"rgba(245,158,11,0.08)", borderBottom:"1px solid rgba(245,158,11,0.18)", flexShrink:0 }}>
        <div>
          <div style={{ fontSize:10, fontWeight:800, color:"#f59e0b" }}>Jazz SSP</div>
          <div style={{ fontSize:6, color:"rgba(255,255,255,0.28)" }}>Self Service Portal</div>
        </div>
        <div style={{ width:26, height:26, borderRadius:"50%", background:"rgba(245,158,11,0.18)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, border:"1px solid rgba(245,158,11,0.3)" }}>👤</div>
      </div>
      <div style={{ padding:"6px 10px 4px", flexShrink:0 }}>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:3 }}>
          <span style={{ fontSize:7, color:"rgba(255,255,255,0.3)" }}>Monthly Data</span>
          <span style={{ fontSize:7, color:"#f59e0b", fontWeight:600 }}>68%</span>
        </div>
        <div style={{ height:8, borderRadius:4, background:"rgba(255,255,255,0.08)", overflow:"hidden" }}>
          <div style={{ height:"100%", width:"68%", borderRadius:4, background:"linear-gradient(90deg,#f59e0b,#ef4444)", boxShadow:"0 0 8px rgba(245,158,11,0.5)" }} />
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", marginTop:3 }}>
          <span style={{ fontSize:6.5, color:"rgba(255,255,255,0.28)" }}>6.8 GB used</span>
          <span style={{ fontSize:6.5, color:"rgba(255,255,255,0.28)" }}>10 GB</span>
        </div>
      </div>
      <div style={{ display:"flex", gap:5, padding:"4px 10px", flexShrink:0 }}>
        {[["Bill","PKR 699"],["Plan","Jazz 4G+"],["Exp","Jun 30"]].map(([l,v]) => (
          <div key={l} style={{ flex:1, borderRadius:6, padding:"5px 4px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", textAlign:"center" as const }}>
            <div style={{ fontSize:6.5, color:"rgba(255,255,255,0.22)", textTransform:"uppercase" as const }}>{l}</div>
            <div style={{ fontSize:8.5, fontWeight:700, color:"#f59e0b", marginTop:1 }}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{ display:"flex", gap:4, padding:"5px 10px" }}>
        {["Pay Bill","Upgrade","Support"].map(a => (
          <div key={a} style={{ flex:1, borderRadius:5, padding:"4px 0", textAlign:"center" as const, fontSize:7, fontWeight:600, background:"rgba(245,158,11,0.09)", color:"#f59e0b", border:"1px solid rgba(245,158,11,0.22)" }}>{a}</div>
        ))}
      </div>
    </div>
  );

  /* ── POS: Purple retail dashboard with charts ── */
  if (type === "pos") return (
    <div style={{ ...base, background: "linear-gradient(155deg,#080418 0%,#0f0528 60%,#0a0320 100%)" }}>
      <BrowserChrome />
      {/* Top bar with mini chart */}
      <div style={{ padding:"5px 10px 0", display:"flex", gap:5, flexShrink:0 }}>
        <div style={{ flex:2 }}>
          <div style={{ fontSize:6.5, color:"rgba(255,255,255,0.25)", marginBottom:3, textTransform:"uppercase" as const, letterSpacing:0.5 }}>Today&apos;s Revenue</div>
          <div style={{ fontSize:14, fontWeight:800, color:"#8b5cf6" }}>₨ 24,680</div>
          <div style={{ fontSize:6.5, color:"#4ade80", marginTop:1 }}>↑ 12% vs yesterday</div>
        </div>
        {/* Mini bar chart */}
        <div style={{ flex:1.5, display:"flex", alignItems:"flex-end", gap:2, paddingBottom:2 }}>
          {[40,65,45,80,55,90,72].map((h,i) => (
            <div key={i} style={{ flex:1, height:`${h}%`, maxHeight:28, borderRadius:"2px 2px 0 0", background:`rgba(139,92,246,${0.3 + h/200})` }} />
          ))}
        </div>
      </div>
      <div style={{ display:"flex", flex:1, padding:"4px 8px 5px", gap:6, overflow:"hidden" }}>
        {/* Product grid */}
        <div style={{ flex:3 }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:3 }}>
            {[["☕","Latte","350","#8b5cf6"],["🥐","Croisst","180","#6366f1"],["🍕","Slice","420","#8b5cf6"],["🧃","Juice","250","#6366f1"],["🍰","Cake","550","#8b5cf6"],["🥤","Brew","380","#6366f1"]].map(([ico,name,price,c]) => (
              <div key={name} style={{ borderRadius:5, padding:"4px 3px", background:"rgba(139,92,246,0.1)", border:`1px solid ${c as string}33`, textAlign:"center" as const }}>
                <div style={{ fontSize:14 }}>{ico}</div>
                <div style={{ fontSize:6, color:"rgba(255,255,255,0.5)", marginTop:1 }}>{name}</div>
                <div style={{ fontSize:7, fontWeight:700, color:c as string }}>₨{price}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Cart */}
        <div style={{ flex:2, display:"flex", flexDirection:"column" }}>
          <div style={{ flex:1 }}>
            {[["Latte ×2","700"],["Croissant","180"],["Cold Brew","380"]].map(([item,price]) => (
              <div key={item} style={{ display:"flex", justifyContent:"space-between", padding:"3.5px 0", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ fontSize:7, color:"rgba(255,255,255,0.45)" }}>{item}</span>
                <span style={{ fontSize:7, color:"rgba(255,255,255,0.62)", fontWeight:600 }}>₨{price}</span>
              </div>
            ))}
          </div>
          <div style={{ borderTop:"1px solid rgba(139,92,246,0.3)", paddingTop:5 }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
              <span style={{ fontSize:7.5, color:"rgba(255,255,255,0.38)", fontWeight:600 }}>Total</span>
              <span style={{ fontSize:10, color:"#8b5cf6", fontWeight:800 }}>₨1,260</span>
            </div>
            <div style={{ borderRadius:5, padding:"5px 0", textAlign:"center" as const, fontSize:8, fontWeight:700, background:"linear-gradient(90deg,#6366f1,#8b5cf6)", color:"#fff", boxShadow:"0 2px 8px rgba(99,102,241,0.35)" }}>Checkout</div>
          </div>
        </div>
      </div>
    </div>
  );

  /* ── VPN: Neon green cybersecurity interface ── */
  if (type === "vpn") return (
    <div style={{ ...base, background: "linear-gradient(155deg,#010c07 0%,#02150d 60%,#011008 100%)" }}>
      <BrowserChrome />
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px", borderBottom:"1px solid rgba(16,185,129,0.14)", flexShrink:0 }}>
        <div style={{ display:"flex", alignItems:"center", gap:5 }}>
          <div style={{ width:16, height:16, borderRadius:"50%", background:"rgba(16,185,129,0.2)", border:"1px solid rgba(16,185,129,0.4)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:9 }}>🔒</div>
          <span style={{ fontSize:10, fontWeight:800, color:"#10b981" }}>GoVPN</span>
        </div>
        <span style={{ fontSize:7, padding:"2px 8px", borderRadius:10, background:"rgba(16,185,129,0.12)", color:"#10b981", border:"1px solid rgba(16,185,129,0.3)" }}>● Connected</span>
      </div>
      {/* Central connection button */}
      <div style={{ display:"flex", justifyContent:"center", padding:"10px 0 6px", flexShrink:0 }}>
        <div style={{ position:"relative" }}>
          <div style={{ width:54, height:54, borderRadius:"50%", border:"2.5px solid #10b981", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 24px rgba(16,185,129,0.32), 0 0 48px rgba(16,185,129,0.12)" }}>
            <div style={{ fontSize:24 }}>⚡</div>
          </div>
          {/* Pulse rings */}
          <div style={{ position:"absolute", inset:-6, borderRadius:"50%", border:"1px solid rgba(16,185,129,0.2)", animation:"none" }} />
          <div style={{ position:"absolute", inset:-12, borderRadius:"50%", border:"1px solid rgba(16,185,129,0.1)" }} />
        </div>
      </div>
      {/* Stats */}
      <div style={{ display:"flex", gap:5, padding:"0 10px 5px", flexShrink:0 }}>
        {[["🇩🇪","Frankfurt","14ms"],["↓","4.2 MB/s","Download"],["↑","1.8 MB/s","Upload"]].map(([ico,v,l]) => (
          <div key={l} style={{ flex:1, borderRadius:5, padding:"4px 4px", background:"rgba(16,185,129,0.06)", border:"1px solid rgba(16,185,129,0.14)", textAlign:"center" as const }}>
            <div style={{ fontSize:10 }}>{ico}</div>
            <div style={{ fontSize:7.5, fontWeight:700, color:"#10b981", marginTop:1 }}>{v}</div>
            <div style={{ fontSize:6, color:"rgba(255,255,255,0.25)" }}>{l}</div>
          </div>
        ))}
      </div>
      {/* Encrypted traffic lines */}
      <div style={{ padding:"3px 10px", flex:1 }}>
        <div style={{ fontSize:6, color:"rgba(16,185,129,0.5)", fontFamily:"monospace", lineHeight:1.8 }}>
          {["AES-256 encrypted ✓","No-logs policy active","Kill switch enabled","DNS leak protection ON"].map(l => (
            <div key={l}>{"›"} {l}</div>
          ))}
        </div>
      </div>
    </div>
  );

  /* ── SPORT ECOMMERCE: Clean retail product grid ── */
  if (type === "ecommerce-sport") return (
    <div style={{ ...base, background: "linear-gradient(155deg,#020b02 0%,#081508 60%,#040f04 100%)" }}>
      <BrowserChrome />
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px", borderBottom:"1px solid rgba(132,204,22,0.18)", background:"rgba(132,204,22,0.05)", flexShrink:0 }}>
        <span style={{ fontSize:10, fontWeight:800, color:"#84cc16", letterSpacing:1 }}>BREKN</span>
        <div style={{ display:"flex", gap:8 }}>
          {["Shop","Drops","Cart"].map(t => <span key={t} style={{ fontSize:7, color:"rgba(255,255,255,0.32)" }}>{t}</span>)}
        </div>
        <div style={{ position:"relative" }}>
          <span style={{ fontSize:7, color:"rgba(255,255,255,0.4)" }}>🛒</span>
          <span style={{ position:"absolute", top:-3, right:-3, width:8, height:8, borderRadius:"50%", background:"#84cc16", display:"flex", alignItems:"center", justifyContent:"center", fontSize:5, color:"#000", fontWeight:800 }}>3</span>
        </div>
      </div>
      {/* Hero banner */}
      <div style={{ padding:"6px 10px", borderBottom:"1px solid rgba(255,255,255,0.05)", background:"rgba(132,204,22,0.04)", flexShrink:0 }}>
        <div style={{ fontSize:9, fontWeight:800, color:"rgba(255,255,255,0.85)" }}>New Drop 🔥</div>
        <div style={{ fontSize:7, color:"#84cc16", marginTop:1 }}>Custom Shopify Theme — Liquid</div>
      </div>
      {/* Product grid */}
      <div style={{ display:"flex", gap:4, padding:"5px 10px", flex:1 }}>
        {[["⚽","BreknBall","PKR 2,499","New"],["🏀","Pro Ball","PKR 3,299","Hot"],["🎽","Jersey","PKR 1,899","Sale"]].map(([ico,name,price,badge]) => (
          <div key={name} style={{ flex:1, borderRadius:7, overflow:"hidden", border:"1px solid rgba(132,204,22,0.15)" }}>
            <div style={{ height:48, background:"linear-gradient(160deg,rgba(132,204,22,0.14),rgba(34,197,94,0.07))", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, position:"relative" }}>
              {ico}
              <span style={{ position:"absolute", top:3, right:3, fontSize:5, padding:"1px 4px", borderRadius:8, background:"#84cc16", color:"#000", fontWeight:800 }}>{badge}</span>
            </div>
            <div style={{ padding:"4px 5px", background:"rgba(0,0,0,0.2)" }}>
              <div style={{ fontSize:7, fontWeight:700, color:"rgba(255,255,255,0.7)" }}>{name}</div>
              <div style={{ fontSize:7, color:"#84cc16", marginTop:1 }}>{price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  /* ── PET ECOMMERCE: Purple pet subscription store ── */
  if (type === "ecommerce-pet") return (
    <div style={{ ...base, background: "linear-gradient(155deg,#0a0318 0%,#12062a 60%,#0c0420 100%)" }}>
      <BrowserChrome />
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px", borderBottom:"1px solid rgba(192,132,252,0.16)", background:"rgba(192,132,252,0.04)", flexShrink:0 }}>
        <span style={{ fontSize:9, fontWeight:800, color:"#c084fc" }}>🐾 Pet Experts</span>
        <span style={{ fontSize:7, color:"rgba(255,255,255,0.3)" }}>Subscriptions</span>
      </div>
      {/* Subscription tiers */}
      <div style={{ padding:"6px 10px", flex:1, display:"flex", gap:5 }}>
        {([["Basic","₨699/mo",["Weekly treats","Vitamins","Free shipping"],false],["Premium","₨1,299/mo",["All Basic +","Vet Support","Custom box"],true]] as [string,string,string[],boolean][]).map(([plan,price,features,featured]) => (
          <div key={plan} style={{ flex:1, borderRadius:8, padding:"7px 6px", border:`1.5px solid ${featured ? "rgba(192,132,252,0.45)" : "rgba(255,255,255,0.08)"}`, background:featured ? "rgba(192,132,252,0.08)" : "rgba(255,255,255,0.02)", display:"flex", flexDirection:"column", gap:3 }}>
            {featured && <div style={{ fontSize:5.5, padding:"1.5px 5px", borderRadius:10, background:"linear-gradient(90deg,#8b5cf6,#c084fc)", color:"#fff", fontWeight:800, textAlign:"center" as const, marginBottom:1 }}>POPULAR</div>}
            <div style={{ fontSize:9, fontWeight:800, color:featured ? "#c084fc" : "rgba(255,255,255,0.55)" }}>{plan}</div>
            <div style={{ fontSize:11, fontWeight:900, color:featured ? "#c084fc" : "rgba(255,255,255,0.4)" }}>{price}</div>
            <div style={{ flex:1 }}>
              {features.map(f => <div key={f} style={{ fontSize:6.5, color:"rgba(255,255,255,0.4)", marginBottom:2 }}>✓ {f}</div>)}
            </div>
            <div style={{ borderRadius:5, padding:"4px 0", textAlign:"center" as const, fontSize:7.5, fontWeight:700, background:featured ? "linear-gradient(90deg,#8b5cf6,#c084fc)" : "rgba(255,255,255,0.06)", color:"#fff", boxShadow:featured ? "0 2px 8px rgba(192,132,252,0.3)" : "none" }}>Subscribe</div>
          </div>
        ))}
      </div>
    </div>
  );

  /* ── API: Cyan API explorer with live endpoints ── */
  if (type === "api") return (
    <div style={{ ...base, background: "linear-gradient(155deg,#010c10 0%,#021520 60%,#011018 100%)" }}>
      <BrowserChrome />
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px", borderBottom:"1px solid rgba(6,182,212,0.16)", flexShrink:0 }}>
        <div style={{ display:"flex", alignItems:"center", gap:5 }}>
          <div style={{ width:6, height:6, borderRadius:"50%", background:"#4ade80", boxShadow:"0 0 6px #4ade80" }} />
          <span style={{ fontSize:9, fontWeight:800, color:"#06b6d4" }}>Yumeaz API</span>
        </div>
        <div style={{ display:"flex", gap:5 }}>
          <span style={{ fontSize:6.5, padding:"2px 6px", borderRadius:4, background:"rgba(6,182,212,0.12)", color:"#06b6d4", border:"1px solid rgba(6,182,212,0.25)", fontFamily:"monospace" }}>v2.1.0</span>
          <span style={{ fontSize:6.5, padding:"2px 6px", borderRadius:4, background:"rgba(74,222,128,0.1)", color:"#4ade80", border:"1px solid rgba(74,222,128,0.25)" }}>Live</span>
        </div>
      </div>
      {/* Perf metrics */}
      <div style={{ display:"flex", gap:5, padding:"5px 10px", flexShrink:0 }}>
        {[["99.9%","Uptime","#4ade80"],["47ms","Avg Res","#06b6d4"],["1.2k","Req/min","#a78bfa"]].map(([v,l,c]) => (
          <div key={l} style={{ flex:1, borderRadius:5, padding:"4px 5px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", textAlign:"center" as const }}>
            <div style={{ fontSize:9, fontWeight:800, color:c as string }}>{v}</div>
            <div style={{ fontSize:6, color:"rgba(255,255,255,0.22)", marginTop:1 }}>{l}</div>
          </div>
        ))}
      </div>
      {/* Endpoint list */}
      <div style={{ padding:"0 10px", flex:1 }}>
        <div style={{ fontSize:6.5, color:"rgba(255,255,255,0.2)", marginBottom:4, textTransform:"uppercase" as const, fontWeight:600, letterSpacing:0.5 }}>Endpoints</div>
        {([["GET","/api/v2/users","200","34ms","#4ade80"],["POST","/api/v2/auth","201","67ms","#60a5fa"],["GET","/api/v2/products","200","29ms","#4ade80"],["PUT","/api/v2/orders/{id}","200","51ms","#4ade80"]] as string[][]).map(([method,endpoint,status,time,statusColor]) => (
          <div key={endpoint} style={{ display:"flex", alignItems:"center", gap:5, padding:"4px 6px", borderRadius:4, marginBottom:3, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ fontSize:6, fontWeight:700, padding:"1.5px 5px", borderRadius:3, background:method==="GET"?"rgba(74,222,128,0.14)":method==="POST"?"rgba(96,165,250,0.14)":"rgba(251,191,36,0.14)", color:method==="GET"?"#4ade80":method==="POST"?"#60a5fa":"#fbbf24", flexShrink:0, minWidth:26, textAlign:"center" as const, fontFamily:"monospace" }}>{method}</span>
            <span style={{ flex:1, fontSize:7, color:"rgba(255,255,255,0.42)", fontFamily:"monospace" }}>{endpoint}</span>
            <span style={{ fontSize:6.5, color:statusColor as string, fontWeight:700 }}>{status}</span>
            <span style={{ fontSize:6, color:"rgba(255,255,255,0.2)", fontFamily:"monospace" }}>{time}</span>
          </div>
        ))}
      </div>
    </div>
  );

  /* ── INSTITUTE: Indigo education CMS ── */
  if (type === "institute") return (
    <div style={{ ...base, background: "linear-gradient(155deg,#04021a 0%,#0a0530 60%,#060220 100%)" }}>
      <BrowserChrome />
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px", borderBottom:"1px solid rgba(99,102,241,0.2)", background:"rgba(99,102,241,0.06)", flexShrink:0 }}>
        <div>
          <div style={{ fontSize:10, fontWeight:900, color:"#818cf8" }}>Russells</div>
          <div style={{ fontSize:5.5, color:"rgba(255,255,255,0.28)", letterSpacing:0.3 }}>International Institute</div>
        </div>
        <div style={{ display:"flex", gap:8 }}>
          {["Courses","Study Abroad","Admin"].map(t => <span key={t} style={{ fontSize:6.5, color:"rgba(255,255,255,0.3)" }}>{t}</span>)}
        </div>
        <span style={{ fontSize:7, padding:"2px 8px", borderRadius:4, background:"linear-gradient(90deg,#6366f1,#8b5cf6)", color:"#fff", fontWeight:700 }}>Apply</span>
      </div>
      <div style={{ padding:"6px 10px 4px", borderBottom:"1px solid rgba(255,255,255,0.05)", flexShrink:0 }}>
        <div style={{ fontSize:10, fontWeight:800, color:"rgba(255,255,255,0.85)" }}>IT Education &</div>
        <div style={{ fontSize:10, fontWeight:800, color:"#818cf8" }}>Study Abroad Services</div>
        <div style={{ height:2, width:"60%", borderRadius:2, background:"linear-gradient(90deg,#6366f1,#c084fc)", marginTop:5 }} />
      </div>
      <div style={{ display:"flex", gap:5, padding:"5px 10px", flex:1 }}>
        {[["💻","Web Dev","Enroll"],["🌍","UK Visa","Apply"],["📊","Data Sci","Enroll"]].map(([ico,name,cta]) => (
          <div key={name} style={{ flex:1, borderRadius:7, padding:"6px 5px", background:"rgba(99,102,241,0.08)", border:"1px solid rgba(99,102,241,0.2)", display:"flex", flexDirection:"column", alignItems:"center" as const, gap:3 }}>
            <span style={{ fontSize:18 }}>{ico}</span>
            <span style={{ fontSize:7, fontWeight:600, color:"rgba(255,255,255,0.6)", textAlign:"center" as const }}>{name}</span>
            <span style={{ fontSize:6.5, padding:"2px 6px", borderRadius:10, background:"rgba(99,102,241,0.2)", color:"#818cf8", fontWeight:600 }}>{cta}</span>
          </div>
        ))}
      </div>
      <div style={{ margin:"0 10px 8px", borderRadius:5, padding:"4px 7px", background:"rgba(99,102,241,0.08)", border:"1px solid rgba(99,102,241,0.2)", display:"flex", alignItems:"center", gap:5, flexShrink:0 }}>
        <span style={{ fontSize:9 }}>⚙️</span>
        <span style={{ fontSize:6.5, color:"rgba(255,255,255,0.4)" }}>Admin Panel — Edit content without code</span>
        <span style={{ fontSize:6, padding:"1.5px 5px", borderRadius:3, background:"#6366f1", color:"#fff", marginLeft:"auto", fontWeight:700, flexShrink:0 }}>CMS</span>
      </div>
    </div>
  );

  return (
    <div style={{ height:"100%", background:`linear-gradient(135deg,${accent}18 0%,${accent}08 100%)`, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ width:40, height:40, borderRadius:"50%", background:`${accent}22`, border:`2px solid ${accent}44` }} />
    </div>
  );
}

function LinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".proj-card",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".proj-grid", start: "top 78%" } }
      );
      gsap.fromTo(".personal-card",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".personal-grid", start: "top 78%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const cardContent = (p: typeof professionalProjects[0], badgeLabel: string) => (
    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <span className="text-[11px] font-bold font-mono uppercase tracking-wider"
            style={{ color: p.color }}>{badgeLabel}</span>
          <h3 className="text-base font-bold text-text mt-0.5 leading-snug">{p.title}</h3>
        </div>
        <a href={p.live} target="_blank" rel="noopener noreferrer"
          className="flex-shrink-0 p-2 rounded-lg text-text-dim hover:text-accent hover:bg-accent/10 transition-all duration-300"
          aria-label={`Visit ${p.title}`}>
          <LinkIcon />
        </a>
      </div>
      <p className="text-sm text-text-muted leading-relaxed flex-1 mb-4">{p.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {p.tech.map((t) => (
          <span key={t} className="text-[11px] px-2 py-1 rounded-lg font-mono font-medium"
            style={{ background: `${p.color}12`, color: p.color, border: `1px solid ${p.color}28` }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)", filter: "blur(100px)" }} />

      <div className="container-custom">

        <div className="mb-10 sm:mb-16 lg:mb-20 text-center">
          <div className="section-label mx-auto">Portfolio</div>
          <h2 className="text-4xl sm:text-5xl font-black text-text">My Work</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        {/* Professional Work */}
        <div className="mb-10 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.22)" }}>💼</div>
              <div>
                <h3 className="text-xl font-black text-text">Professional Work</h3>
                <p className="text-xs font-mono text-text-dim mt-0.5">
                  Built at <span className="text-accent font-semibold">Multilynx, Lahore</span>
                </p>
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent hidden sm:block" />
          </div>

          <div className="mb-6 px-4 py-3 rounded-xl flex items-start gap-3"
            style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.18)" }}>
            <span className="text-accent mt-0.5 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <p className="text-xs text-text-muted leading-relaxed">
              Enterprise client projects built during my full-time role at{" "}
              <span className="font-semibold text-text">Multilynx, Lahore</span>.
            </p>
          </div>

          <div className="proj-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalProjects.map((p) => (
              <div key={p.title} className="proj-card card card-hover group flex flex-col overflow-hidden">
                {/* Top accent bar */}
                <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}44)` }} />
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <ProjectMockup type={p.mockup} accent={p.color} />
                </div>
                {cardContent(p, "Enterprise")}
              </div>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.22)" }}>🚀</div>
              <div>
                <h3 className="text-xl font-black text-text">Personal Projects</h3>
                <p className="text-xs font-mono text-text-dim mt-0.5">Side projects, freelance &amp; open exploration</p>
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent hidden sm:block" />
          </div>

          <div className="personal-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((p) => (
              <div key={p.title} className="personal-card card card-hover group flex flex-col overflow-hidden">
                <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}44)` }} />
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <ProjectMockup type={p.mockup} accent={p.color} />
                </div>
                {cardContent(p as typeof professionalProjects[0], "Personal")}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
