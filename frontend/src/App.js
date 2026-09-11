## `/app/frontend/package.json`

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@hookform/resolvers": "5.0.1",
    "@radix-ui/react-accordion": "1.2.8",
    "@radix-ui/react-alert-dialog": "1.1.11",
    "@radix-ui/react-aspect-ratio": "1.1.4",
    "@radix-ui/react-avatar": "1.1.7",
    "@radix-ui/react-checkbox": "1.2.3",
    "@radix-ui/react-collapsible": "1.1.8",
    "@radix-ui/react-context-menu": "2.2.8",
    "@radix-ui/react-dialog": "1.1.11",
    "@radix-ui/react-dropdown-menu": "2.1.12",
    "@radix-ui/react-hover-card": "1.1.11",
    "@radix-ui/react-label": "2.1.4",
    "@radix-ui/react-menubar": "1.1.12",
    "@radix-ui/react-navigation-menu": "1.2.10",
    "@radix-ui/react-popover": "1.1.11",
    "@radix-ui/react-progress": "1.1.7",
    "@radix-ui/react-radio-group": "1.3.8",
    "@radix-ui/react-scroll-area": "1.2.9",
    "@radix-ui/react-select": "2.2.5",
    "@radix-ui/react-separator": "1.1.7",
    "@radix-ui/react-slider": "1.3.5",
    "@radix-ui/react-slot": "1.2.3",
    "@radix-ui/react-switch": "1.2.5",
    "@radix-ui/react-tabs": "1.1.12",
    "@radix-ui/react-toast": "1.2.11",
    "@radix-ui/react-toggle": "1.1.9",
    "@radix-ui/react-toggle-group": "1.1.10",
    "@radix-ui/react-tooltip": "1.2.8",
    "@tanstack/react-query": "5.56.2",
    "axios": "1.18.0",
    "class-variance-authority": "0.7.1",
    "clsx": "2.1.1",
    "cmdk": "1.1.1",
    "cra-template": "1.2.0",
    "date-fns": "4.1.0",
    "dayjs": "1.11.13",
    "embla-carousel-react": "8.6.0",
    "framer-motion": "11.18.0",
    "input-otp": "1.4.2",
    "lodash": "4.18.1",
    "lucide-react": "0.516.0",
    "next-themes": "0.4.6",
    "react": "19.0.0",
    "react-day-picker": "8.10.1",
    "react-dom": "19.0.0",
    "react-hook-form": "7.56.0",
    "react-resizable-panels": "3.0.1",
    "react-router-dom": "7.15.0",
    "react-scripts": "5.0.1",
    "recharts": "3.6.0",
    "sonner": "2.0.3",
    "swr": "2.3.8",
    "tailwind-merge": "3.2.0",
    "tailwindcss-animate": "1.0.7",
    "vaul": "1.1.2",
    "zod": "3.24.4"
  },
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@babel/plugin-proposal-private-property-in-object": "7.21.11",
    "@craco/craco": "7.1.0",
    "@emergentbase/visual-edits": "https://assets.emergent.sh/npm/emergentbase-visual-edits-1.0.13.tgz",
    "@eslint/js": "9.23.0",
    "@types/lodash": "4.17.24",
    "autoprefixer": "10.4.20",
    "dotenv": "16.4.5",
    "eslint": "9.23.0",
    "eslint-plugin-import": "2.31.0",
    "eslint-plugin-jsx-a11y": "6.10.2",
    "eslint-plugin-react": "7.37.4",
    "eslint-plugin-react-hooks": "5.2.0",
    "globals": "15.15.0",
    "postcss": "8.5.10",
    "tailwindcss": "3.4.17"
  },
  "packageManager": "yarn@1.22.22"
}
```

## `/app/frontend/src/App.js`

```jsx
import {useEffect,useState} from "react";
import axios from "axios";
import {BrowserRouter,useNavigate,useLocation} from "react-router-dom";
import {ChevronLeft,ChevronRight,Download,FileText,GraduationCap,LayoutDashboard,LogOut,Menu,ShieldCheck,BookOpen,IndianRupee,Users,Plus, Pencil, X} from "lucide-react";
import {Toaster,toast} from "sonner";
import "@/App.css";

const API=`${process.env.REACT_APP_BACKEND_URL}/api`;
const sessionStore=window.localStorage;
const api=(path,config={})=>axios.get(`${API}${path}`,config);
const post=(path,data,config={})=>axios.post(`${API}${path}`,data,config);

function Header({onLogout,admin=false}){return <header className="topbar"><div className="brand"><span className="brand-mark"><GraduationCap size={22}/></span><span>SFA <b>Classes</b><small>{admin?"Admin Console":"Learn. Grow. Shine."}</small></span></div>{onLogout&&<button className="icon-btn" data-testid="logout-button" onClick={onLogout}><LogOut size={17}/> Logout</button>}</header>}

function Home(){const nav=useNavigate(),[slides,setSlides]=useState([]),[i,setI]=useState(0);useEffect(()=>{api("/public").then(r=>setSlides(r.data.slider)).catch(()=>{});},[]);const s=slides[i]||{Name:"Ananya Gupta",Class:"10th",Score:"96.8%",Quote:"Mehnat ka koi shortcut nahi hota!",Color:"orange"};return <div className="home"><div className="home-nav"><div className="brand light"><span className="brand-mark"><GraduationCap size={22}/></span><span>SFA <b>Classes</b><small>Delhi's learning hub</small></span></div><div className="nav-actions"><button className="ghost-light" data-testid="admin-login-nav" onClick={()=>nav("/admin-login")}><ShieldCheck size={17}/> Admin Login</button></div></div><main className="home-main"><section className="home-copy"><div className="eyebrow">SFA CLASSES · 1st — 12th</div><h1>Padho dil se,<br/><em>shine karo</em> har din.</h1><p>Smart learning, personal guidance aur bright future — sab ek hi jagah.</p><div className="home-buttons"><button className="primary-btn" data-testid="student-login-button" onClick={()=>nav("/student-login")}>Student Login <ChevronRight size={18}/></button><button className="outline-btn" data-testid="admin-login-button" onClick={()=>nav("/admin-login")}><ShieldCheck size={17}/> Admin Login</button></div><div className="home-stats"><span><b>1st–12th</b><small>All classes</small></span><span><b>100%</b><small>Personal care</small></span><span><b>Delhi</b><small>Our home</small></span></div></section><section className="topper-wrap"><div className="topper-label"><span className="star">★</span><span><b>Student of the Week</b><small>Is hafte ka star</small></span><span className="slide-count">0{i+1} / 0{Math.max(slides.length,3)}</span></div><div className={`topper-card ${s.Color}`}><div className="trophy">🏆</div><div className="topper-info"><span className="rank">TOP PERFORMER · {s.Class}</span><h2>{s.Name}</h2><p>“{s.Quote}”</p><div className="score"><b>{s.Score}</b><small>Latest score</small></div></div></div><div className="slider-controls"><button data-testid="slider-previous-button" onClick={()=>setI((i-1+slides.length)%slides.length)}><ChevronLeft/></button><button data-testid="slider-next-button" onClick={()=>setI((i+1)%slides.length)}><ChevronRight/></button><span>Keep going, champion!</span></div></section></main><footer className="home-footer"><span>© 2025 SFA Classes</span><span>Made for curious minds in Delhi <span className="heart">♥</span></span></footer></div>}

function Login({admin=false}){const nav=useNavigate(),[form,setForm]=useState({email:admin?"sfaadmin@gmail.com":"",password:"",mobile:""}),[err,setErr]=useState("");const submit=async e=>{e.preventDefault();setErr("");try{const r=await post(admin?"/auth/admin-login":"/auth/student-login",admin?form:{mobile:form.mobile,password:form.password});sessionStore.setItem("sfa_token",r.data.token);sessionStore.setItem("sfa_user",JSON.stringify(r.data.user));nav(admin?"/admin":"/student")}catch(e){setErr(e.response?.data?.detail||"Login failed. Please try again.")}};return <div className="auth-page"><Header/><div className="auth-shell"><div className="auth-art"><div className="art-icon">{admin?<ShieldCheck size={34}/>:<GraduationCap size={34}/>}</div><div className="eyebrow">{admin?"SFA ADMIN CONSOLE":"STUDENT PORTAL"}</div><h1>{admin?<>Manage every<br/><em>bright mind.</em></>:<>Welcome back,<br/><em>champion.</em></>}</h1><p>{admin?"Keep classes, marks aur student progress beautifully organised.":"Aaj ka goal? Learn something new and make yourself proud."}</p></div><form className="auth-form" onSubmit={submit}><button type="button" className="back-link" data-testid="back-home-button" onClick={()=>nav("/")}><ChevronLeft size={16}/> Back to home</button><h2>{admin?"Admin Login":"Student Login"}</h2><p className="form-sub">{admin?"Sign in to manage SFA Classes":"Apni details se login karein"}</p>{admin?<label>Email address<input data-testid="admin-email-input" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></label>:<label>Mobile number<input data-testid="student-mobile-input" inputMode="numeric" placeholder="10-digit mobile number" value={form.mobile} onChange={e=>setForm({...form,mobile:e.target.value})}/></label>}<label>Password<input data-testid="login-password-input" type="password" placeholder="Enter password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/></label>{err&&<div className="error" data-testid="login-error">{err}</div>}<button className="primary-btn full" data-testid="login-submit-button">{admin?"Open Admin Console":"Enter My Dashboard"}<ChevronRight size={18}/></button>{!admin&&<p className="demo-hint">Demo: <b>9876543210</b> · <b>aarav123</b></p>}{admin&&<p className="demo-hint">Demo password: <b>SFA@2025</b></p>}</form></div></div>}

function Student(){const nav=useNavigate(),[d,setD]=useState(null);useEffect(()=>{api("/student/dashboard",{headers:{Authorization:`Bearer ${localStorage.getItem("sfa_token")}`}}).then(r=>setD(r.data)).catch(()=>nav("/student-login"))},[nav]);if(!d)return <div className="loading">Loading your dashboard…</div>;const p=d.profile,avg=Math.round(d.marks.reduce((a,m)=>a+m.Marks,0)/(d.marks.length||1));const download=async f=>{const r=await axios.get(`${API}/fees/${f.Receipt_No}/receipt`,{headers:{Authorization:`Bearer ${localStorage.getItem("sfa_token")}`},responseType:"blob"});const u=URL.createObjectURL(r.data),a=document.createElement("a");a.href=u;a.download=`${f.Receipt_No}.pdf`;a.click();URL.revokeObjectURL(u)};return <div className="portal"><Header onLogout={()=>{localStorage.clear();nav("/")}}/><main className="portal-main"><div className="welcome-row"><div><div className="eyebrow blue">STUDENT DASHBOARD</div><h1>Namaste, {p.Name.split(" ")[0]} <span>👋</span></h1><p>Your learning journey, all in one place.</p></div><div className="class-chip"><span>CLASS</span><b>{p.Class}</b><small>Section {p.Section}</small></div></div><div className="dash-grid"><section className="profile-panel"><div className="avatar">{p.Name[0]}</div><h2>{p.Name}</h2><span className="id-pill">{p.Student_ID}</span><div className="profile-details"><span>Parent / Guardian<b>{p.Parent_Name}</b></span><span>Mobile<b>{p.Parent_Mobile}</b></span><span>Attendance<b className="green-text">{p.Attendance}</b></span></div></section><section className="marks-panel"><div className="section-head"><div><span className="eyebrow blue">RECENT PERFORMANCE</span><h2>Marks snapshot</h2></div><span className="avg-score">{avg}% <small>Average</small></span></div><div className="bars">{d.marks.map(m=><div className="bar-item" key={m.id}><div className="bar-value">{m.Marks}</div><div className="bar-track"><div style={{height:`${m.Marks}%`}}/></div><small>{m.Subject.slice(0,4)}</small></div>)}</div></section></div><div className="content-grid"><section className="content-section"><div className="section-head"><div><span className="eyebrow blue">STUDY MATERIAL</span><h2>Keep learning <span>↗</span></h2></div><span className="count-badge">{d.materials.length} files</span></div><div className="material-list">{d.materials.map(m=><a className="material-row" data-testid={`material-${m.id}`} href={m.Url} target="_blank" rel="noreferrer" key={m.id}><span className="file-icon"><FileText size={18}/></span><span><b>{m.Title}</b><small>{m.Subject} · {m.Type}</small></span><Download size={17}/></a>)}</div></section><section className="content-section"><div className="section-head"><div><span className="eyebrow blue">FEE PAYMENTS</span><h2>Payment history</h2></div><span className="paid-badge">Paid up to date</span></div><div className="fee-list">{d.fees.map(f=><div className="fee-row" key={f.id}><span className="fee-month"><b>{f.Month}</b><small>{f.Receipt_No}</small></span><strong>₹{f.Amount.toLocaleString("en-IN")}</strong><button data-testid={`download-receipt-${f.id}`} className="download-btn" onClick={()=>download(f)}><Download size={15}/> PDF</button></div>)}</div></section></div><section className="notice-strip"><div className="notice-heading"><span className="notice-icon">!</span><div><span className="eyebrow blue">NOTICES</span><h2>Stay in the loop</h2></div></div><div className="notice-cards">{d.notices.map(n=><div className="notice" key={n.id}><span>{n.Tag}</span><b>{n.Title}</b><small>{n.Date}</small></div>)}</div></section></main></div>}

function Admin(){const nav=useNavigate(),[data,setData]=useState(null),[sheet,setSheet]=useState("Students"),[show,setShow]=useState(false),[newRow,setNewRow]=useState({});const token=localStorage.getItem("sfa_token"),headers={Authorization:`Bearer ${token}`};useEffect(()=>{api("/admin/sheets",{headers}).then(r=>setData(r.data)).catch(()=>nav("/admin-login"))},[nav]);if(!data)return <div className="loading">Loading admin console…</div>;const fields={Students:["Student_ID","Name","Class","Mobile_No_Login","Password"],Marks:["Student_ID","Subject","Exam","Marks"],Fees_Structure:["Class","Monthly_Fee","Annual_Fee"],Study_Material:["Title","Subject","Class","Type","Url"],Fees_Payments:["Student_ID","Receipt_No","Month","Amount","Payment_Date","Status","Mode"],Top_Students_Slider:["Name","Class","Score","Quote"],Notices:["Title","Body","Date","Tag"]};const add=async e=>{e.preventDefault();const r=await post(`/admin/sheets/${sheet}`,{data:newRow},{headers});setData({...data,[sheet]:[...data[sheet],r.data]});setShow(false);setNewRow({});toast.success("Record added");};return <div className="admin-page"><Header admin onLogout={()=>{localStorage.clear();nav("/")}}/><main className="admin-main"><div className="admin-title"><div><div className="eyebrow blue">ADMIN CONSOLE</div><h1>Good morning, Admin <span>✦</span></h1><p>Manage your SFA Classes data from one place.</p></div><button className="primary-btn" data-testid="add-record-button" onClick={()=>setShow(true)}><Plus size={17}/> Add record</button></div><div className="admin-layout"><aside className="sheet-nav"><span className="eyebrow blue">GOOGLE SHEET TABS</span>{Object.keys(data).map(k=><button className={sheet===k?"active":""} data-testid={`sheet-tab-${k}`} onClick={()=>setSheet(k)} key={k}><LayoutDashboard size={16}/>{k.replaceAll("_"," ")}<small>{data[k].length}</small></button>)}<div className="connect-note"><span>●</span><b>Demo data mode</b><small>Ready for your Google Sheet connection</small></div></aside><section className="sheet-view"><div className="sheet-head"><div><h2>{sheet.replaceAll("_"," ")}</h2><p>Manage records · {data[sheet].length} total</p></div><span className="sync-pill">● Demo synced</span></div><div className="table-wrap"><table><thead><tr>{fields[sheet].map(f=><th key={f}>{f.replaceAll("_"," ")}</th>)}<th>Action</th></tr></thead><tbody>{data[sheet].map((r,idx)=><tr key={r.id||idx}>{fields[sheet].map(f=><td key={f}>{String(r[f]??"—").slice(0,48)}</td>)}<td><button className="table-action" data-testid={`edit-record-${r.id||idx}`} onClick={()=>toast.info("Editing can be connected to your live Google Sheet") }><Pencil size={14}/></button></td></tr>)}</tbody></table></div></section></div></main>{show&&<div className="modal-bg"><form className="modal" onSubmit={add}><button type="button" className="modal-close" data-testid="close-modal-button" onClick={()=>setShow(false)}><X/></button><div className="eyebrow blue">NEW RECORD</div><h2>Add to {sheet.replaceAll("_"," ")}</h2>{fields[sheet].slice(0,5).map(f=><label key={f}>{f.replaceAll("_"," ")}<input data-testid={`new-record-${f}`} onChange={e=>setNewRow({...newRow,[f]:e.target.value})}/></label>)}<button className="primary-btn full" data-testid="save-record-button">Save record <Plus size={17}/></button></form></div>}</div>}

function App(){return <BrowserRouter><Toaster/><HomeRoutes/></BrowserRouter>};

function HomeRoutes(){const {pathname}=useLocation();return pathname==="/student-login"?<Login/>:pathname==="/admin-login"?<Login admin/>:pathname==="/student"?<Student/>:pathname==="/admin"?<Admin/>:<Home/>}

export default App;
```

## `/app/frontend/src/App.css`

```css
:root{--blue:#0A4A9C;--dark:#073575;--orange:#ff6b00;--ink:#10213b;--muted:#718096;--line:#e3eaf3;--bg:#f7f9fc}h1,h2{font-family:'Outfit',sans-serif;margin:0}.brand{display:flex;align-items:center;gap:10px;font:700 20px Outfit}.brand b{font-weight:400}.brand small{display:block;font:500 10px 'DM Sans';letter-spacing:.06em;color:#8ca0bb}.brand-mark{display:grid;place-items:center;background:#0a4a9c;color:#fff;border-radius:10px;width:38px;height:38px}.topbar{height:78px;background:#fff;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;padding:0 5vw}.icon-btn,.ghost-light,.outline-btn,.back-link,.slider-controls button,.download-btn,.table-action,.modal-close{border:0;background:none;display:flex;align-items:center;gap:8px}.icon-btn{color:#64748b;font-size:13px}.home{min-height:100vh;background:var(--blue);color:#fff;padding:0 6vw;display:flex;flex-direction:column}.home-nav{height:90px;display:flex;align-items:center;justify-content:space-between}.light small{color:#a9c8ec}.light .brand-mark{background:#fff;color:var(--blue)}.ghost-light{color:#dceafe;border:1px solid #4c7abd;border-radius:5px;padding:10px 14px}.home-main{display:grid;grid-template-columns:1fr 1fr;gap:8vw;align-items:center;max-width:1180px;margin:auto;width:100%;padding:40px 0}.eyebrow{font-size:11px;letter-spacing:.14em;font-weight:700;color:#9fc5f2}.eyebrow.blue{color:var(--blue)}.home-copy h1{font-size:clamp(48px,6vw,84px);line-height:.98;letter-spacing:-.03em;margin:24px 0}.home-copy h1 em,.auth-art em{font-style:normal;color:#ffbc4c}.home-copy p{color:#c5d9f1;font-size:18px;max-width:420px;line-height:1.6}.home-buttons{display:flex;gap:12px;margin:34px 0}.primary-btn{display:inline-flex;justify-content:center;align-items:center;gap:10px;background:var(--orange);color:#fff;border:0;border-radius:5px;padding:13px 18px;font-weight:700;transition:transform .2s,background .2s}.primary-btn:hover{transform:translateY(-2px);background:#ed5c00}.outline-btn{border:1px solid #cbd9eb;color:var(--blue);border-radius:5px;padding:12px 18px;background:#fff;font-weight:700}.home .outline-btn{color:#fff;background:transparent;border-color:#78a4d8}.home-stats{display:flex;gap:40px;border-top:1px solid #4778b6;padding-top:22px;max-width:470px}.home-stats b{display:block;font:700 22px Outfit}.home-stats small{color:#a9c8ec;font-size:11px}.topper-label{display:flex;align-items:center;gap:10px;margin-bottom:14px}.star{font-size:30px;color:#ffbc4c}.topper-label b{display:block;font:600 16px Outfit}.topper-label small{color:#a9c8ec}.slide-count{margin-left:auto;color:#b8d1ef;font-size:12px}.topper-card{min-height:390px;border-radius:10px;padding:35px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;box-shadow:0 25px 60px #052e653d}.topper-card:after{content:'✦';position:absolute;right:-25px;top:-35px;font-size:260px;color:#ffffff1c}.topper-card.orange{background:linear-gradient(140deg,#ff7b22,#d93d12)}.topper-card.green{background:linear-gradient(140deg,#13a77d,#057b82)}.topper-card.pink{background:linear-gradient(140deg,#d9578a,#7540a9)}.trophy{font-size:65px}.rank{font-size:10px;letter-spacing:.16em;color:#fff9;font-weight:700}.topper-info h2{font-size:40px;margin:12px 0 5px}.topper-info p{margin:0;font-size:16px;color:#fffde6}.score{margin-top:22px;display:flex;align-items:baseline;gap:8px}.score b{font:800 44px Outfit}.score small{color:#fff9}.slider-controls{display:flex;align-items:center;gap:10px;margin-top:16px}.slider-controls button{background:#fff;color:var(--blue);padding:8px;border-radius:4px}.slider-controls span{font-size:12px;color:#a9c8ec;margin-left:8px}.home-footer{border-top:1px solid #4778b6;padding:20px 0;display:flex;justify-content:space-between;font-size:11px;color:#a9c8ec}.heart{color:#ffbc4c}.auth-page{min-height:100vh;background:var(--bg)}.auth-shell{max-width:980px;margin:65px auto;display:grid;grid-template-columns:1fr 1fr;background:#fff;box-shadow:0 20px 60px #15345c12;min-height:510px}.auth-art{background:var(--blue);color:#fff;padding:52px;display:flex;flex-direction:column;justify-content:flex-end;position:relative}.art-icon{position:absolute;top:46px;left:52px;background:#fff;color:var(--blue);padding:12px;border-radius:10px}.auth-art h1{font-size:49px;line-height:1.02;margin:20px 0}.auth-art p{color:#c5d9f1;line-height:1.6}.auth-form{padding:48px 55px;display:flex;flex-direction:column;justify-content:center}.back-link{color:#7890ab;font-size:12px;margin-bottom:45px}.auth-form h2{font-size:32px}.form-sub{color:var(--muted);margin:7px 0 28px;font-size:14px}.auth-form label,.modal label{font-size:12px;color:#455a75;font-weight:700;margin:9px 0;display:flex;flex-direction:column;gap:7px}.auth-form input,.modal input{border:1px solid var(--line);padding:13px;border-radius:4px;outline-color:var(--blue)}.full{width:100%;margin-top:20px}.error{font-size:12px;color:#c62828;background:#fff0f0;padding:10px}.demo-hint{text-align:center;color:#a2afbf;font-size:11px}.loading{text-align:center;padding:120px;color:var(--blue)}.portal-main,.admin-main{max-width:1200px;margin:0 auto;padding:54px 28px}.welcome-row,.admin-title{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:38px}.welcome-row h1,.admin-title h1{font-size:38px;margin:12px 0 5px}.welcome-row p,.admin-title p{margin:0;color:var(--muted)}.class-chip{background:#eaf2fc;padding:15px 22px;border-left:3px solid var(--blue);min-width:130px}.class-chip span,.class-chip small{display:block;font-size:10px;color:#6e86a2}.class-chip b{display:block;font:700 25px Outfit;color:var(--blue)}.dash-grid{display:grid;grid-template-columns:270px 1fr;gap:20px}.profile-panel,.marks-panel,.content-section,.notice-strip{background:#fff;border:1px solid var(--line);padding:25px}.profile-panel{text-align:center}.avatar{background:#ffb34b;color:#fff;width:70px;height:70px;border-radius:50%;display:grid;place-items:center;font:700 30px Outfit;margin:0 auto 12px}.profile-panel h2{font-size:22px}.id-pill,.count-badge,.paid-badge,.sync-pill{font-size:10px;padding:5px 9px;border-radius:20px}.id-pill{background:#edf3fb;color:var(--blue)}.profile-details{border-top:1px solid var(--line);margin-top:22px;padding-top:15px;text-align:left}.profile-details span{display:block;color:var(--muted);font-size:11px;margin:12px 0}.profile-details b{display:block;color:var(--ink);font-size:13px;margin-top:3px}.green-text{color:#0b9b70!important}.section-head{display:flex;justify-content:space-between;align-items:flex-start}.section-head h2{font-size:23px;margin-top:7px}.avg-score{color:var(--orange);font:700 30px Outfit}.avg-score small{display:block;color:var(--muted);font:11px 'DM Sans'}.bars{height:195px;display:flex;gap:24px;align-items:end;padding:15px 10px 0}.bar-item{height:100%;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:end;gap:7px}.bar-track{height:135px;width:100%;background:#edf3fa;display:flex;align-items:end;border-radius:4px 4px 0 0}.bar-track div{background:var(--blue);width:100%;border-radius:4px 4px 0 0}.bar-value{font-size:11px;color:var(--blue);font-weight:700}.bar-item small{font-size:10px;color:var(--muted)}.content-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px}.content-section{min-height:250px}.count-badge{color:var(--blue);background:#eaf2fc}.paid-badge{color:#0b9b70;background:#e7f8f1}.material-list,.fee-list{margin-top:20px}.material-row,.fee-row{display:flex;align-items:center;gap:12px;border-top:1px solid var(--line);padding:13px 0}.material-row>span:nth-child(2){flex:1}.material-row b,.fee-month b{display:block;font-size:13px}.material-row small,.fee-month small{display:block;font-size:10px;color:var(--muted);margin-top:3px}.file-icon{display:grid;place-items:center;background:#fff1e7;color:var(--orange);width:34px;height:34px}.material-row>svg{color:#a2b3c7}.fee-month{flex:1}.fee-row strong{font:700 15px Outfit}.download-btn{font-size:11px;color:var(--blue);padding:7px 9px;background:#edf3fb}.notice-strip{margin-top:20px;display:flex;gap:35px;align-items:center}.notice-heading{display:flex;align-items:center;gap:12px;min-width:170px}.notice-icon{display:grid;place-items:center;background:#fff1e7;color:var(--orange);width:32px;height:32px;border-radius:50%;font-weight:700}.notice-cards{display:flex;gap:12px;flex:1}.notice{border-left:2px solid #f4b05a;padding-left:12px;flex:1}.notice span{font-size:9px;color:var(--orange);font-weight:700}.notice b{display:block;font-size:12px;margin:4px 0}.notice small{font-size:10px;color:var(--muted)}.admin-title{align-items:center}.admin-layout{display:grid;grid-template-columns:245px 1fr;gap:20px}.sheet-nav,.sheet-view{background:#fff;border:1px solid var(--line)}.sheet-nav{padding:20px}.sheet-nav>span{display:block;margin-bottom:15px}.sheet-nav button{width:100%;background:none;border:0;display:flex;align-items:center;gap:10px;padding:12px 8px;text-align:left;color:#64748b;font-size:12px;border-left:3px solid transparent}.sheet-nav button.active{background:#edf4fc;color:var(--blue);border-left-color:var(--blue);font-weight:700}.sheet-nav button small{margin-left:auto}.connect-note{margin-top:35px;padding:14px;background:#f5fbf8;color:#0b9b70;font-size:11px}.connect-note span{margin-right:7px}.connect-note b,.connect-note small{display:block}.connect-note small{color:#7a9d8f;margin-top:5px}.sheet-view{overflow:hidden}.sheet-head{padding:20px 25px;display:flex;justify-content:space-between;align-items:center}.sheet-head h2{font-size:23px;text-transform:capitalize}.sheet-head p{margin:5px 0;color:var(--muted);font-size:12px}.sync-pill{color:#0b9b70;background:#e7f8f1}.table-wrap{overflow:auto;border-top:1px solid var(--line)}table{border-collapse:collapse;width:100%;font-size:12px}th,td{text-align:left;padding:14px 17px;border-bottom:1px solid var(--line);white-space:nowrap}th{font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:#7c91aa;background:#fbfcfe}td{color:#465c77}.table-action{padding:6px;color:var(--blue)}.modal-bg{position:fixed;inset:0;background:#05255299;display:grid;place-items:center;padding:20px}.modal{background:#fff;padding:30px;width:min(460px,100%);position:relative}.modal h2{font-size:25px;margin:10px 0 15px}.modal-close{position:absolute;right:15px;top:15px;color:#778ca5}

@media(max-width:800px){.home{padding:0 5vw}.home-main,.auth-shell,.dash-grid,.content-grid,.admin-layout{grid-template-columns:1fr}.home-main{padding:28px 0;gap:45px}.home-copy h1{font-size:55px}.home-stats{gap:20px}.topper-card{min-height:300px}.auth-shell{margin:20px}.auth-art{min-height:300px;padding:35px}.auth-art h1{font-size:39px}.auth-form{padding:35px}.portal-main,.admin-main{padding:35px 16px}.welcome-row,.admin-title,.notice-strip{align-items:flex-start;gap:20px;flex-direction:column}.notice-cards{flex-direction:column;width:100%}.notice-heading{min-width:0}.sheet-nav{display:flex;flex-wrap:wrap;gap:5px}.sheet-nav>span,.connect-note{width:100%}.sheet-nav button{width:auto;flex:1;min-width:120px}.home-footer{margin-top:auto}}
```
