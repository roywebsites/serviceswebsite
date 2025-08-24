"use client";

import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const ScaleIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#1A4331",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="scaleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#DAA520", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#B8860B", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
      stroke="url(#scaleGrad)"
      strokeWidth="2"
      fill="url(#scaleGrad)"
      opacity="0.9"
    />
    <path
      d="M12 7L15.5 12L12 17L8.5 12L12 7Z"
      stroke="#1A4331"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="12" cy="12" r="2" fill="#DAA520" />
  </svg>
);

export const BuildingIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#2E8B57",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#4169E1", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#1E90FF", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="7"
      width="18"
      height="13"
      stroke="url(#buildingGrad)"
      strokeWidth="2"
      fill="url(#buildingGrad)"
      opacity="0.2"
    />
    <path d="M8 21V7L16 7V21" stroke="#1A4331" strokeWidth="2" fill="none" />
    <rect x="10" y="10" width="2" height="2" fill="#DAA520" />
    <rect x="12" y="10" width="2" height="2" fill="#DAA520" />
    <rect x="10" y="13" width="2" height="2" fill="#DAA520" />
    <rect x="12" y="13" width="2" height="2" fill="#DAA520" />
    <rect x="11" y="16" width="2" height="3" fill="#8B4513" />
  </svg>
);

export const FamilyIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#FF6B6B",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="familyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#FF6B6B", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#FF8E8E", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle
      cx="9"
      cy="7"
      r="2"
      stroke="url(#familyGrad)"
      strokeWidth="2"
      fill="url(#familyGrad)"
      opacity="0.3"
    />
    <circle
      cx="15"
      cy="7"
      r="2"
      stroke="url(#familyGrad)"
      strokeWidth="2"
      fill="url(#familyGrad)"
      opacity="0.3"
    />
    <circle
      cx="7"
      cy="14"
      r="1.5"
      stroke="#4ECDC4"
      strokeWidth="1.5"
      fill="#4ECDC4"
      opacity="0.4"
    />
    <circle
      cx="17"
      cy="14"
      r="1.5"
      stroke="#4ECDC4"
      strokeWidth="1.5"
      fill="#4ECDC4"
      opacity="0.4"
    />
    <path
      d="M6 21V17C6 15.9 6.9 15 8 15H10C11.1 15 12 15.9 12 17V21"
      stroke="#1A4331"
      strokeWidth="2"
      fill="#FFE4E1"
      opacity="0.5"
    />
    <path
      d="M12 21V17C12 15.9 12.9 15 14 15H16C17.1 15 18 15.9 18 17V21"
      stroke="#1A4331"
      strokeWidth="2"
      fill="#FFE4E1"
      opacity="0.5"
    />
  </svg>
);

export const ShieldIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#32CD32",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#32CD32", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#228B22", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M12 2L20 6V12C20 16.4 16.4 20 12 22C7.6 20 4 16.4 4 12V6L12 2Z"
      stroke="url(#shieldGrad)"
      strokeWidth="2"
      fill="url(#shieldGrad)"
      opacity="0.2"
    />
    <path
      d="M9 12L11 14L16 9"
      stroke="#FFFFFF"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="12"
      r="8"
      stroke="#DAA520"
      strokeWidth="1"
      fill="none"
      opacity="0.6"
    />
  </svg>
);

export const BulbIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#FFD700",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="bulbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#FFA500", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle
      cx="12"
      cy="10"
      r="6"
      stroke="url(#bulbGrad)"
      strokeWidth="2"
      fill="url(#bulbGrad)"
      opacity="0.3"
    />
    <rect
      x="9"
      y="16"
      width="6"
      height="2"
      stroke="#1A4331"
      strokeWidth="2"
      fill="#C0C0C0"
      opacity="0.7"
    />
    <rect x="10" y="18" width="4" height="1" fill="#808080" />
    <path
      d="M12 6V4M6.3 7.7L5.2 6.6M17.7 7.7L18.8 6.6M4 12H2M22 12H20"
      stroke="#DAA520"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="10" r="2" fill="#FFF8DC" opacity="0.8" />
  </svg>
);

export const StoreIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#9932CC",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="storeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#9932CC", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#8A2BE2", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M3 7L5 2H19L21 7V9C21 10.1 20.1 11 19 11C17.9 11 17 10.1 17 9C17 10.1 16.1 11 15 11C13.9 11 13 10.1 13 9C13 10.1 12.1 11 11 11C9.9 11 9 10.1 9 9C9 10.1 8.1 11 7 11C5.9 11 5 10.1 5 9V7Z"
      stroke="url(#storeGrad)"
      strokeWidth="2"
      fill="url(#storeGrad)"
      opacity="0.2"
    />
    <rect
      x="5"
      y="11"
      width="14"
      height="9"
      stroke="#1A4331"
      strokeWidth="2"
      fill="#F0E68C"
      opacity="0.3"
    />
    <rect x="9" y="15" width="2" height="3" fill="#8B4513" />
    <rect x="13" y="15" width="2" height="3" fill="#DAA520" />
    <circle cx="10" cy="16" r="0.5" fill="#FF6347" />
    <circle cx="14" cy="16" r="0.5" fill="#FF6347" />
  </svg>
);

export const ChartIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#FF4500",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#FF4500", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#DC143C", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path d="M3 3V21H21" stroke="#1A4331" strokeWidth="2" fill="none" />
    <path
      d="M7 14L12 9L16 13L21 8"
      stroke="url(#chartGrad)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="7" cy="14" r="3" fill="#32CD32" opacity="0.8" />
    <circle cx="12" cy="9" r="3" fill="#FFD700" opacity="0.8" />
    <circle cx="16" cy="13" r="3" fill="#FF6347" opacity="0.8" />
    <circle cx="21" cy="8" r="3" fill="#4169E1" opacity="0.8" />
    <rect x="3" y="18" width="3" height="3" fill="#32CD32" opacity="0.6" />
    <rect x="8" y="15" width="3" height="6" fill="#FFD700" opacity="0.6" />
    <rect x="13" y="16" width="3" height="5" fill="#FF6347" opacity="0.6" />
    <rect x="18" y="12" width="3" height="9" fill="#4169E1" opacity="0.6" />
  </svg>
);

export const WorkerIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#FF8C00",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="workerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#FF8C00", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#FF6347", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle
      cx="12"
      cy="7"
      r="3"
      stroke="url(#workerGrad)"
      strokeWidth="2"
      fill="url(#workerGrad)"
      opacity="0.4"
    />
    <path
      d="M6 21V19C6 16.8 7.8 15 10 15H14C16.2 15 18 16.8 18 19V21"
      stroke="#1A4331"
      strokeWidth="2"
      fill="#87CEEB"
      opacity="0.3"
    />
    <rect
      x="8"
      y="3"
      width="8"
      height="3"
      stroke="#DAA520"
      strokeWidth="2"
      fill="#DAA520"
      opacity="0.7"
      rx="1"
    />
    <rect
      x="10"
      y="1"
      width="4"
      height="2"
      fill="#FFD700"
      opacity="0.8"
      rx="1"
    />
    <circle cx="9" cy="5" r="0.5" fill="#FFFFFF" />
    <circle cx="15" cy="5" r="0.5" fill="#FFFFFF" />
  </svg>
);

export const HandshakeIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#20B2AA",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="handshakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#20B2AA", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#48CAE4", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M8 12L10 10L14 14L16 12"
      stroke="url(#handshakeGrad)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12C3 8.7 5.7 6 9 6H15C18.3 6 21 8.7 21 12V18H3V12Z"
      stroke="#1A4331"
      strokeWidth="2"
      fill="url(#handshakeGrad)"
      opacity="0.2"
    />
    <circle cx="7" cy="9" r="1.5" fill="#DAA520" />
    <circle cx="17" cy="9" r="1.5" fill="#DAA520" />
    <path
      d="M6 16L8 14L10 16L12 14L14 16L16 14L18 16"
      stroke="#FFD700"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export const DocumentIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#4682B4",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#4682B4", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#5F9EA0", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
      stroke="url(#docGrad)"
      strokeWidth="2"
      fill="url(#docGrad)"
      opacity="0.2"
    />
    <path
      d="M14 2V8H20"
      stroke="#1A4331"
      strokeWidth="2"
      fill="#F0F8FF"
      opacity="0.8"
    />
    <path d="M8 13H16" stroke="#DAA520" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 17H16" stroke="#DAA520" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 9H12" stroke="#DAA520" strokeWidth="2" strokeLinecap="round" />
    <circle cx="7" cy="13" r="1" fill="#FF6347" />
    <circle cx="7" cy="17" r="1" fill="#32CD32" />
    <circle cx="7" cy="9" r="1" fill="#4169E1" />
  </svg>
);

export const ClipboardIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#CD853F",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="clipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#CD853F", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#D2691E", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect
      x="5"
      y="4"
      width="14"
      height="16"
      stroke="url(#clipGrad)"
      strokeWidth="2"
      fill="url(#clipGrad)"
      opacity="0.2"
      rx="2"
    />
    <rect
      x="8"
      y="2"
      width="8"
      height="4"
      stroke="#1A4331"
      strokeWidth="2"
      fill="#F5F5DC"
      rx="1"
    />
    <path d="M9 11H15" stroke="#DAA520" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 15H15" stroke="#DAA520" strokeWidth="2" strokeLinecap="round" />
    <circle cx="8" cy="11" r="1" fill="#32CD32" />
    <circle cx="8" cy="15" r="1" fill="#FF6347" />
    <rect x="9" y="3" width="6" height="1" fill="#C0C0C0" rx="0.5" />
  </svg>
);

export const EmailIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#4169E1",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="emailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#4169E1", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#1E90FF", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect
      x="2"
      y="6"
      width="20"
      height="12"
      stroke="url(#emailGrad)"
      strokeWidth="2"
      fill="url(#emailGrad)"
      opacity="0.2"
      rx="2"
    />
    <path
      d="M2 8L12 14L22 8"
      stroke="#DAA520"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="6" cy="10" r="1" fill="#FFD700" />
    <circle cx="18" cy="10" r="1" fill="#FFD700" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#32CD32",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#32CD32", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#228B22", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M22 16.92V19.92C22 20.51 21.39 21 20.8 21C9.28 21 2 13.72 2 2.2C2 1.61 2.49 1 3.08 1H6.08C6.67 1 7.18 1.51 7.18 2.1V5.1C7.18 5.69 6.67 6.2 6.08 6.2H4.18C5.29 10.2 8.8 13.71 12.8 14.82V12.92C12.8 12.33 13.31 11.82 13.9 11.82H16.9C17.49 11.82 18 12.33 18 12.92V15.92C18 16.51 17.49 17.02 16.9 17.02H14.18"
      stroke="url(#phoneGrad)"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="12" cy="8" r="3" fill="#FFD700" opacity="0.6" />
    <path d="M8 6L16 14" stroke="#DAA520" strokeWidth="1" opacity="0.8" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#25D366",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="whatsappGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#25D366", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#128C7E", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#whatsappGrad)" opacity="0.2" />
    <path
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"
      stroke="url(#whatsappGrad)"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9.09 7.95C8.92 7.58 8.74 7.57 8.59 7.56C8.47 7.56 8.33 7.56 8.19 7.56C8.05 7.56 7.82 7.61 7.63 7.82C7.44 8.03 6.96 8.47 6.96 9.36C6.96 10.25 7.66 11.11 7.74 11.25C7.82 11.39 9.05 13.24 10.94 14.01C12.83 14.78 12.83 14.52 13.19 14.48C13.55 14.44 14.29 14.04 14.46 13.62C14.63 13.2 14.63 12.84 14.58 12.76C14.53 12.68 14.39 12.63 14.18 12.52C13.97 12.41 13.08 11.97 12.91 11.9C12.74 11.83 12.62 11.79 12.48 12C12.34 12.21 11.99 12.63 11.87 12.77C11.75 12.91 11.63 12.93 11.42 12.82C11.21 12.71 10.5 12.49 9.65 11.74C8.99 11.16 8.55 10.45 8.43 10.24C8.31 10.03 8.42 9.91 8.53 9.8C8.63 9.7 8.74 9.55 8.85 9.43C8.96 9.31 9 9.22 9.07 9.08C9.14 8.94 9.11 8.82 9.05 8.71C9 8.6 8.57 7.71 8.4 7.29C8.23 6.87 8.06 6.92 7.94 6.91C7.82 6.9 7.68 6.9 7.54 6.9"
      stroke="#FFFFFF"
      strokeWidth="1.2"
      fill="none"
    />
    <circle
      cx="12"
      cy="12"
      r="6"
      stroke="#DAA520"
      strokeWidth="1"
      fill="none"
      opacity="0.6"
    />
  </svg>
);

export const LocationIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#FF6347",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="locationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#FF6347", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#DC143C", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02 7.02 1 12 1S21 5.02 21 10Z"
      stroke="url(#locationGrad)"
      strokeWidth="2"
      fill="url(#locationGrad)"
      opacity="0.2"
    />
    <circle
      cx="12"
      cy="10"
      r="3"
      stroke="#1A4331"
      strokeWidth="2"
      fill="#FFD700"
      opacity="0.8"
    />
    <circle cx="12" cy="10" r="1" fill="#FFFFFF" />
  </svg>
);

export const ZapIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#FFD700",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="zapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#FF8C00", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
      stroke="url(#zapGrad)"
      strokeWidth="2"
      fill="url(#zapGrad)"
      opacity="0.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="13" cy="8" r="2" fill="#FFFFFF" opacity="0.9" />
    <circle cx="11" cy="16" r="2" fill="#FFFFFF" opacity="0.9" />
  </svg>
);

export const TargetIcon: React.FC<IconProps> = ({
  size = 32,
  color = "#FF4500",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="targetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#FF4500", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#FF6347", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="url(#targetGrad)"
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="12"
      cy="12"
      r="6"
      stroke="#DAA520"
      strokeWidth="2"
      fill="url(#targetGrad)"
      opacity="0.2"
    />
    <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
    <circle cx="12" cy="12" r="0.5" fill="#1A4331" />
  </svg>
);

export const BookIcon: React.FC<IconProps> = ({
  size = 32,
  color = "#4169E1",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#4169E1", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#1E90FF", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M4 19.5C4 18.12 5.12 17 6.5 17H20V3H6.5C5.12 3 4 4.12 4 5.5V19.5Z"
      stroke="url(#bookGrad)"
      strokeWidth="2"
      fill="url(#bookGrad)"
      opacity="0.2"
    />
    <path
      d="M4 19.5C4 20.88 5.12 22 6.5 22H20V17H6.5C5.12 17 4 18.12 4 19.5Z"
      stroke="#1A4331"
      strokeWidth="2"
      fill="#F0F8FF"
      opacity="0.6"
    />
    <path d="M9 7H16" stroke="#DAA520" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 11H16" stroke="#DAA520" strokeWidth="2" strokeLinecap="round" />
    <circle cx="7" cy="7" r="1" fill="#FF6347" />
    <circle cx="7" cy="11" r="1" fill="#32CD32" />
  </svg>
);

export const TrophyIcon: React.FC<IconProps> = ({
  size = 32,
  color = "#DAA520",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="trophyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#DAA520", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#B8860B", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M6 9H4.5C3.12 9 2 7.88 2 6.5S3.12 4 4.5 4H6"
      stroke="#FF6347"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M18 9H19.5C20.88 9 22 7.88 22 6.5S20.88 4 19.5 4H18"
      stroke="#FF6347"
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="6"
      y="4"
      width="12"
      height="10"
      stroke="url(#trophyGrad)"
      strokeWidth="2"
      fill="url(#trophyGrad)"
      opacity="0.3"
      rx="2"
    />
    <rect
      x="8"
      y="18"
      width="8"
      height="4"
      stroke="#1A4331"
      strokeWidth="2"
      fill="#C0C0C0"
      opacity="0.6"
      rx="1"
    />
    <path d="M12 14V18" stroke="#1A4331" strokeWidth="3" />
    <circle cx="12" cy="9" r="3" fill="#FFD700" opacity="0.8" />
    <circle cx="12" cy="9" r="1" fill="#FFFFFF" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({
  size = 32,
  color = "#20B2AA",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="clockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#20B2AA", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#48CAE4", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="url(#clockGrad)"
      strokeWidth="2"
      fill="url(#clockGrad)"
      opacity="0.2"
    />
    <path
      d="M12 6V12L16 14"
      stroke="#1A4331"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="1.5" fill="#DAA520" />
    <circle cx="12" cy="4" r="1" fill="#FF6347" />
    <circle cx="20" cy="12" r="1" fill="#FF6347" />
    <circle cx="12" cy="20" r="1" fill="#FF6347" />
    <circle cx="4" cy="12" r="1" fill="#FF6347" />
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({
  size = 32,
  color = "#9932CC",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="usersGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#9932CC", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#8A2BE2", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle
      cx="9"
      cy="7"
      r="4"
      stroke="url(#usersGrad)"
      strokeWidth="2"
      fill="url(#usersGrad)"
      opacity="0.3"
    />
    <path
      d="M1 21V19C1 16.79 2.79 15 5 15H13C15.21 15 17 16.79 17 19V21"
      stroke="#1A4331"
      strokeWidth="2"
      fill="#DDA0DD"
      opacity="0.4"
    />
    <circle
      cx="17"
      cy="5"
      r="3"
      stroke="#FF6347"
      strokeWidth="2"
      fill="#FF6347"
      opacity="0.4"
    />
    <path
      d="M23 21V19C23 17.35 21.65 16 20 16C19.24 16 18.54 16.29 18.04 16.76"
      stroke="#1A4331"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="9" cy="7" r="1.5" fill="#FFFFFF" />
    <circle cx="17" cy="5" r="1" fill="#FFFFFF" />
  </svg>
);
