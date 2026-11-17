import React from "react";
import { ArrowRight } from "lucide-react";

export function PortfonSparkIcon({
  className = "w-4 h-4",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2L14.4 7.8L20.6 7L17 12L20.6 17L14.4 16.2L12 22L9.6 16.2L3.4 17L7 12L3.4 7L9.6 7.8L12 2Z"
        stroke={light ? "#ffffff" : "#3458ff"}
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill={light ? "rgba(255,255,255,0.16)" : "rgba(52,88,255,0.12)"}
      />
      <circle
        cx="12"
        cy="12"
        r="2.2"
        fill={light ? "#ffffff" : "#3458ff"}
      />
    </svg>
  );
}

export function SectionEyebrow({
  label,
  light = false,
  centered = false,
}: {
  label: string;
  light?: boolean;
  centered?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-sm font-medium tracking-[-0.01em] ${
        centered ? "justify-center" : ""
      } ${light ? "text-white/90" : "text-foreground/85"}`}
    >
      <PortfonSparkIcon className="w-4 h-4 shrink-0" light={light} />
      <span>{label}</span>
    </div>
  );
}

interface PortfonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: "dark" | "light" | "blue" | "glass";
  size?: "md" | "lg";
  icon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
}

/**
 * Portfon signature pill + paired circular arrow button with sliding label/icon micro-interaction.
 */
export function PortfonButton({
  children,
  onClick,
  href,
  target,
  rel,
  variant = "dark",
  size = "md",
  icon,
  className = "",
  type = "button",
  disabled = false,
  fullWidth = false,
}: PortfonButtonProps) {
  const pillColors =
    variant === "light"
      ? "bg-white text-[#101010] hover:bg-white/95"
      : variant === "blue"
        ? "bg-[#3458ff] text-white hover:bg-[#2748e8]"
        : variant === "glass"
          ? "bg-white/15 text-white border border-white/25 backdrop-blur-md hover:bg-white/25"
          : "bg-[#101010] text-white dark:bg-white dark:text-[#101010]";

  const paddingClass = size === "lg" ? "px-7 h-12 text-[15px]" : "px-5 h-11 text-[14px]";
  const circleSize = size === "lg" ? "w-12 h-12" : "w-11 h-11";
  const arrowNode = icon || <ArrowRight className="w-4 h-4" />;

  const content = (
    <>
      <span
        className={`relative overflow-hidden rounded-full font-medium flex items-center justify-center transition-colors duration-300 ${pillColors} ${paddingClass} ${
          fullWidth ? "flex-1" : ""
        }`}
      >
        <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/pbtn:-translate-y-[150%]">
          {children}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/pbtn:translate-y-0"
        >
          {children}
        </span>
      </span>
      <span
        className={`relative overflow-hidden rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/pbtn:scale-105 ${pillColors} ${circleSize}`}
      >
        <span className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/pbtn:translate-x-[180%]">
          {arrowNode}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center -translate-x-[180%] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/pbtn:translate-x-0"
        >
          {arrowNode}
        </span>
      </span>
    </>
  );

  const wrapperClass = `group/pbtn inline-flex items-center gap-0.5 select-none ${
    fullWidth ? "w-full" : ""
  } ${disabled ? "opacity-60 pointer-events-none" : ""} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={wrapperClass}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={wrapperClass}>
      {content}
    </button>
  );
}
