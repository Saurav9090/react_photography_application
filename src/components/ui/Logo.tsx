"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "light" | "dark";
  showText?: boolean;
}

export function Logo({ 
  className, 
  size = "md", 
  variant = "default", 
  showText = true 
}: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-20 w-20"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl"
  };

  const colorClasses = {
    default: {
      bg: "bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700",
      text: "text-gray-800",
      accent: "text-orange-500"
    },
    light: {
      bg: "bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-500",
      text: "text-white",
      accent: "text-orange-300"
    },
    dark: {
      bg: "bg-gradient-to-br from-blue-800 via-cyan-700 to-blue-900",
      text: "text-white",
      accent: "text-orange-400"
    }
  };

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {/* Logo Icon */}
      <div className={cn(
        "relative flex items-center justify-center rounded-full shadow-lg transform transition-all duration-300 hover:scale-105",
        sizeClasses[size],
        colorClasses[variant].bg
      )}>
        {/* Camera Lens Icon */}
        {/* <div className="relative">
          <div className="absolute inset-1 bg-white/20 rounded-full"></div>
          <div className="absolute inset-2 bg-white/30 rounded-full"></div>
          <div className="absolute inset-3 bg-white/40 rounded-full"></div>
          <div className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full",
            size === "sm" ? "w-2 h-2" : size === "md" ? "w-3 h-3" : size === "lg" ? "w-4 h-4" : "w-5 h-5"
          )}></div> */}
          
          {/* Wave Elements for Island Theme */}
          {/* <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-px">
              <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div> */}
        {/* Logo Icon */}
<div className={cn(
  "relative flex items-center justify-center rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 overflow-hidden",
  sizeClasses[size],
  colorClasses[variant].bg
)}>
  <Image
    src="/images/logo.png"
    alt="Logo"
    fill
    className="object-contain rounded-full"
  />
</div>

      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <div className={cn(
            "font-bold leading-tight font-playfair tracking-wide",
            textSizeClasses[size],
            colorClasses[variant].text
          )}>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Andaman
            </span>
            <span className={colorClasses[variant].accent}>click</span>
          </div>
          {size !== "sm" && (
            <div className={cn(
              "text-xs font-medium tracking-widest uppercase opacity-75",
              colorClasses[variant].text
            )}>
              Photography
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Logo;