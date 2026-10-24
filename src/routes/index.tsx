import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import zoraFoto from "@/assets/zora-foto.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Altar de Zora · Siempre en nuestro corazón" },
      { name: "description", content: "Un altar digital de Día de Muertos para recordar a Zora, nuestra gatita amada." },
      { property: "og:title", content: "Altar de Zora" },
      { property: "og:description", content: "Altar digital con cempasúchil, papel picado y veladoras para Zora." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Marigold({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
      {[0, 30, 60, 90, 120, 150].map((r) => (
        <ellipse key={r} cx="20" cy="20" rx="18" ry="7" transform={`rotate(${r} 20 20)`} className="fill-marigold-deep" />
      ))}
      {[15, 45, 75, 105, 135, 165].map((r) => (
        <ellipse key={r} cx="20" cy="20" rx="13" ry="5.5" transform={`rotate(${r} 20 20)`} className="fill-marigold" />
      ))}
      <circle cx="20" cy="20" r="5" className="fill-marigold-deep" />
    </svg>
  );
}

function SugarSkull({ size = 64, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className}>
      <path d="M13 20 L8 4 L26 13 Z" className="fill-rosa" />
      <path d="M51 20 L56 4 L38 13 Z" className="fill-rosa" />
      <path d="M32 5 C49 5 56 16 56 30 C56 46 46 58 32 58 C18 58 8 46 8 30 C8 16 15 5 32 5Z" className="fill-wax" />
      <circle cx="23" cy="28" r="8" className="fill-marigold-deep" />
      <circle cx="23" cy="28" r="4.5" className="fill-wax" />
      <circle cx="41" cy="28" r="8" className="fill-marigold-deep" />
      <circle cx="41" cy="28" r="4.5" className="fill-wax" />
      <path d="M32 40 C30 38 27 38.5 27 41 C27 43 30 45 32 46 C34 45 37 43 37 41 C37 38.5 34 38 32 40Z" className="fill-accent" />
      <circle cx="18" cy="44" r="1.6" className="fill-marigold-deep" />
      <circle cx="46" cy="44" r="1.6" className="fill-marigold-deep" />
      <path d="M26 50 h12 M28 50 v6 M32.6 50 v6 M37.2 50 v6" className="stroke-marigold-deep" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <circle cx="32" cy="14" r="4" className="fill-rosa" />
      <circle cx="32" cy="14" r="1.6" className="fill-wax" />
    </svg>
  );
}

function Petals() {
  const petals = useMemo(
    () => Array.from({ length: 36 }, (_, i) => ({
      left: (i * 37) % 100, delay: (i * 0.7) % 12, dur: 9 + (i % 6) * 1.5, size: 9 + (i % 5) * 4, drift: ((i % 5) - 2) * 40,
      color: i % 7 === 3 ? "bg-rosa" : i % 5 === 2 ? "bg-marigold-deep" : "bg-marigold",
    })), []);
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {petals.map((p, i) => (
        <span key={i} className={`animate-fall absolute top-0 rounded-[60%_0_60%_0] ${p.color}`}
          style={{ left: `${p.left}%`, width: p.size, height: p.size, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s`, ["--drift" as string]: `${p.drift}px` }} />
      ))}
    </div>
  );
}

function Stars() {
  const stars = useMemo(
    () => Array.from({ length: 24 }, (_, i) => ({
      left: (i * 43) % 100, top: (i * 29) % 92, delay: (i * 0.53) % 3, size: 3 + (i % 3) * 2,
    })), []);
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((s, i) => (
        <span key={i} className="animate-twinkle absolute rounded-full bg-marigold"
          style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }} />
      ))}
    </div>
  );
}

const flagColors = ["bg-marigold", "bg-rosa", "bg-secondary", "bg-marigold-deep", "bg-accent", "bg-primary"];

function PapelPicado() {
  return (
    <div className="relative z-30 flex justify-center gap-2 border-t-2 border-wax/60 pt-0">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className={`animate-sway pop h-24 w-16 sm:w-20 ${flagColors[i % 6]} relative`}
          style={{ animationDelay: `${i * 0.25}s`, clipPath: "polygon(0 0,100% 0,100% 85%,90% 100%,80% 85%,70% 100%,60% 85%,50% 100%,40% 85%,30% 100%,20% 85%,10% 100%,0 85%)" }}>
          <div className="absolute inset-3 grid grid-cols-3 gap-1 opacity-70">
            {Array.from({ length: 9 }).map((_, j) => (
              <span key={j} className={`bg-background ${j % 2 ? "rounded-full" : "rotate-45"} scale-75`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Arch() {
  const n = 19;
  return (
    <div className="relative mx-auto aspect-square w-[min(90vw,520px)]">
      {Array.from({ length: n }).map((_, i) => {
        const a = Math.PI - (i / (n - 1)) * Math.PI;
        const x = 50 + Math.cos(a) * 44;
        const y = 52 - Math.sin(a) * 44;
        return (
          <div key={i} className="pop animate-bloom absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.06}s` }}>
            <Marigold size={i % 2 ? 46 : 58} />
          </div>
        );
      })}
      {[60, 72, 84, 96].map((y) => (
        <div key={y} className="contents">
          <div className="pop absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "6%", top: `${y}%` }}><Marigold size={50} /></div>
          <div className="pop absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "94%", top: `${y}%` }}><Marigold size={50} /></div>
        </div>
      ))}
      <div className="pop absolute left-1/2 top-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-t-full border-4 border-marigold glow">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-t-full border-2 border-wax/70" />
        <img src={zoraFoto.url} alt="Zora, mi gatita" className="aspect-[3/4] w-full object-cover object-[50%_15%]" />
      </div>
    </div>
  );
}

function Veladora({ i }: { i: number }) {
  return (
    <div className="pop flex flex-col items-center">
      <div className="animate-flicker relative mb-1 h-10 w-5 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-flame glow"
        style={{ animationDelay: `${i * 0.2}s` }}>
        <span className="absolute inset-x-1.5 bottom-1 top-4 rounded-full bg-marigold-deep" />
      </div>
      <div className="relative flex h-32 w-24 items-center justify-center rounded-b-xl rounded-t-md bg-wax shadow-lg">
        <div className="absolute inset-x-0 top-0 h-3 rounded-t-md bg-rosa" />
        <img src={zoraFoto.url} alt="" className="h-16 w-16 rounded-full border-2 border-marigold object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-3 rounded-b-xl bg-secondary" />
      </div>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <main className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden px-6 text-center">
        <Stars />
        <Petals />
        <div className="absolute inset-x-0 top-0"><PapelPicado /></div>
        <div className="pop relative mb-2 w-52 rounded-full border-4 border-marigold glow">
          <img src={zoraFoto.url} alt="Zora, mi gatita" className="aspect-square w-full rounded-full object-cover object-[50%_12%]" />
          <div className="absolute -right-3 -top-2"><Marigold size={44} /></div>
          <div className="absolute -left-3 -top-3"><Marigold size={36} /></div>
          <div className="absolute -bottom-1 -left-4"><Marigold size={30} /></div>
          <div className="absolute -bottom-2 -right-4"><Marigold size={34} /></div>
        </div>
        <p className="font-hand text-3xl text-marigold">Para entrar al altar…</p>
        <button onClick={() => setOpen(true)} aria-label="Apretar la naricita"
          className="pop animate-boop rounded-full p-4 focus:outline-none">
          <svg width="200" height="170" viewBox="0 0 100 85">
            <path d="M50 80 C20 80 5 55 8 35 C10 18 30 10 50 10 C70 10 90 18 92 35 C95 55 80 80 50 80Z" className="fill-nose" />
            <ellipse cx="35" cy="32" rx="9" ry="5" className="fill-wax opacity-60" />
            <path d="M50 80 L50 92" className="stroke-nose" strokeWidth="4" />
          </svg>
        </button>
        <h1 className="font-display text-4xl sm:text-5xl">¡Boop! a la naricita de Zora</h1>
        <p className="text-muted-foreground">Toca la nariz 🐾</p>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen pb-24">
      <Stars />
      <Petals />
      <PapelPicado />
      <section className="animate-in fade-in duration-1000 px-6 pt-10 text-center">
        <p className="font-hand text-2xl text-rosa">✦ Altar de Día de Muertos · 1 y 2 de noviembre ✦</p>
        <p className="font-hand text-3xl text-marigold">Siempre en nuestro corazón</p>
        <h1 className="pop inline-block font-display text-7xl font-bold text-primary text-glow sm:text-9xl">Zora</h1>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">Nuestra gatita, la de los ronroneos y las siestas al sol. Esta noche el camino de flores te trae a casa.</p>
      </section>
      <section className="mt-6 px-4"><Arch /></section>
      <section className="mx-auto mt-10 max-w-4xl px-6">
        <div className="flex flex-wrap items-end justify-center gap-8 rounded-t-3xl border-x-2 border-t-2 border-marigold/60 bg-card/60 px-4 py-8 glow-soft">
          {[0, 1, 2, 3, 4].map((i) => <Veladora key={i} i={i} />)}
        </div>
        <div className="mx-auto h-3 w-[94%] rounded-b-2xl bg-marigold-deep/80" />
        <div className="mx-auto h-2 w-[80%] rounded-b-xl bg-secondary/60" />
      </section>
      <section className="mx-auto mt-16 max-w-4xl px-6 text-center">
        <p className="font-display text-3xl font-bold text-marigold text-glow">La Ofrenda</p>
        <p className="mt-1 font-hand text-2xl text-muted-foreground">Lo que Zora más quería, para que no le falte en el camino</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[["🍞", "Pan de muerto"], ["💧", "Agua fresquita"], ["🧂", "Salita del camino"], ["🐟", "Su pescadito favorito"], ["🧶", "Su bolita de estambre"], ["🥛", "Un platito de leche"]].map(([e, t]) => (
            <div key={t} className="pop rounded-lg border-2 border-marigold/50 bg-card p-6 text-center">
              <div className="text-5xl">{e}</div>
              <p className="mt-3 font-hand text-2xl text-marigold">{t}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto mt-14 max-w-xl px-6 text-center">
        <div className="pop rounded-3xl border-2 border-rosa/60 bg-card p-8 glow-soft">
          <SugarSkull size={76} className="mx-auto" />
          <p className="mt-4 font-display text-2xl font-bold text-rosa">Calaverita de Zora</p>
          <p className="mt-4 font-hand text-2xl leading-relaxed">
            "Vinimos a visitarla<br />
            con pan, con sal y con flor;<br />
            Zora ronronea en su altar<br />
            y nos regala su amor."<br /><br />
            No llores, que en cada vela<br />
            su lucecita está ardiendo:<br />
            los que se van no se marchan,<br />
            viven mientras los seguimos queriendo.
          </p>
        </div>
      </section>
      <div className="mt-14 flex items-center justify-center gap-3 px-6">
        {Array.from({ length: 9 }).map((_, i) => <Marigold key={i} size={i === 4 ? 46 : 30} className={i % 2 ? "opacity-80" : ""} />)}
      </div>
      <p className="mt-8 text-center font-hand text-3xl text-rosa text-glow">Te queremos por siempre, Zora 🐾</p>
    </main>
  );
}
