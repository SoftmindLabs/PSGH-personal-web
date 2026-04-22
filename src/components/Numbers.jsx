"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SEQUENCE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function buildSequence(target, reverse = false) {
  const seq = [...SEQUENCE];
  seq.push(parseInt(target, 10));
  return reverse ? seq.reverse() : seq;
}

function DigitReel({
  digit,
  index,
  color,
  redColor,
  isAccent,
  className = "",
}) {
  const reelRef = useRef(null);
  const isReversed = index % 2 !== 0;

  useEffect(() => {
    if (isAccent || !/[0-9]/.test(digit)) return;
    const el = reelRef.current;
    if (!el) return;

    // Set starting position explicitly before trigger fires
    gsap.set(el, { y: isReversed ? "-90.9%" : "0%" });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top bottom",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          y: isReversed ? "0%" : "-90.9%",
          duration: 2.5 + index * 0.3,
          ease: "power3.out",
        });
      },
    });

    return () => {
      trigger.kill();
      gsap.killTweensOf(el);
    };
  }, [digit, index, isReversed, isAccent]);

  if (isAccent) {
    return (
      <span
        className={className}
        style={{ lineHeight: 1.2, color: redColor, display: "inline-block" }}
      >
        {digit}
      </span>
    );
  }

  const sequence = buildSequence(digit, isReversed);

  return (
    <div
      className={className}
      style={{
        height: "1.2em",
        overflow: "hidden",
        display: "inline-block",
        lineHeight: 1.2,
      }}
    >
      <div
        ref={reelRef}
        style={{
          display: "flex",
          flexDirection: "column",
          color,
        }}
      >
        {sequence.map((d, i) => (
          <span
            key={i}
            style={{
              height: "1.2em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1.2,
            }}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}

export function AnimatedNumber({
  value = "100+",
  color,
  redColor,
  className = "",
}) {
  const match = value.match(/^([^0-9.]*)([0-9.]+)([^0-9.]*)$/);
  const [, prefix = "", digits = value, suffix = ""] = match || [];

  const chars = [
    ...prefix.split("").map((c) => ({ char: c, isAccent: true })),
    ...digits.split("").map((c) => ({ char: c, isAccent: c === "." })),
    ...suffix.split("").map((c) => ({ char: c, isAccent: true })),
  ];

  let digitIndex = 0;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {chars.map((item, i) => (
        <DigitReel
          key={i}
          digit={item.char}
          index={item.isAccent ? 0 : digitIndex++}
          isAccent={item.isAccent}
          color={color}
          redColor={redColor}
          className={className}
        />
      ))}
    </div>
  );
}

export function StatCard({
  value,
  label,
  color = "black",
  redColor = "#b91c1c",
  numberClassName = "text-5xl font-light",
  labelClassName = "text-black/60 text-base font-light",
  className = "",
  colSpan = 1,
  rowSpan = 1,
  children,
}) {
  return (
    <div
      className={`bg-white rounded-2xl border border-black/8 py-6 flex flex-col items-start  justify-center min-h-20 md:min-h-40 ${className}`}
      style={{
        gridColumn: colSpan > 1 ? `span ${colSpan}` : undefined,
        gridRow: rowSpan > 1 ? `span ${rowSpan}` : undefined,
      }}
    >
      {value && (
        <AnimatedNumber
          value={value}
          color={color}
          redColor={redColor}
          className={numberClassName}
        />
      )}
      {label && (
        <p
          className={labelClassName}
          style={{ textAlign: "center", marginTop: "8px" }}
        >
          {label}
        </p>
      )}
      {children}
    </div>
  );
}

export default function Extras({
  stats = [],
  color = "black",
  redColor = "#b91c1c",
  numberClassName = "text-5xl font-light",
  labelClassName = "text-black/60 text-base font-light mt-4",
  gridCols = stats.length,
  gridRows,
  gap = "12px",
}) {
  return (
    <section className="w-full py-7">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
          gridTemplateRows: gridRows ? `repeat(${gridRows}, 1fr)` : undefined,
          gap,
        }}
      >
        {stats.map((stat, i) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            color={color}
            redColor={redColor}
            numberClassName={stat.numberClassName || numberClassName}
            labelClassName={stat.labelClassName || labelClassName}
            className={stat.className || ""}
            colSpan={stat.colSpan || 1}
            rowSpan={stat.rowSpan || 1}
          />
        ))}
      </div>
    </section>
  );
}
