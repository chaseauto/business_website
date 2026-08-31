"use client";

import { useEffect, useState } from "react";

export type BusinessStatus = {
  isOpen: boolean;
  statusText: string;
};

export function getBusinessStatus(date: Date = new Date()): BusinessStatus {
  // Use Lagos timezone (Africa/Lagos is UTC+1)
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Lagos",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const weekday = parts.find((p) => p.type === "weekday")?.value;
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10);
  const minute = parseInt(parts.find((p) => p.type === "minute")?.value || "0", 10);
  const totalMinutes = hour * 60 + minute;

  // Operating Hours based on Workshop Schedule:
  // Mon–Fri: 8:00 AM (480 min) – 6:00 PM (1080 min)
  // Saturday: 8:00 AM (480 min) – 2:00 PM (840 min)
  // Sunday: Closed

  const isWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(weekday || "");
  const isSaturday = weekday === "Sat";
  const isSunday = weekday === "Sun";

  if (isWeekday) {
    if (totalMinutes >= 8 * 60 && totalMinutes < 18 * 60) {
      return {
        isOpen: true,
        statusText: "Open Now · Closes 6PM",
      };
    } else if (totalMinutes < 8 * 60) {
      return {
        isOpen: false,
        statusText: "Closed · Opens Today 8AM",
      };
    } else {
      if (weekday === "Fri") {
        return {
          isOpen: false,
          statusText: "Closed · Opens Sat 8AM",
        };
      }
      return {
        isOpen: false,
        statusText: "Closed · Opens Tomorrow 8AM",
      };
    }
  }

  if (isSaturday) {
    if (totalMinutes >= 8 * 60 && totalMinutes < 14 * 60) {
      return {
        isOpen: true,
        statusText: "Open Now · Closes 2PM",
      };
    } else if (totalMinutes < 8 * 60) {
      return {
        isOpen: false,
        statusText: "Closed · Opens Today 8AM",
      };
    } else {
      return {
        isOpen: false,
        statusText: "Closed · Opens Mon 8AM",
      };
    }
  }

  if (isSunday) {
    return {
      isOpen: false,
      statusText: "Closed · Opens Mon 8AM",
    };
  }

  return {
    isOpen: false,
    statusText: "Closed · Opens 8AM",
  };
}

export default function HeaderStatus() {
  const [status, setStatus] = useState<BusinessStatus>(() => getBusinessStatus());

  useEffect(() => {
    // Recompute immediately on client mount
    setStatus(getBusinessStatus());

    // Update status every 30 seconds
    const interval = setInterval(() => {
      setStatus(getBusinessStatus());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-charcoal py-3 px-6 sm:px-12 flex items-center justify-center shrink-0">
      <span
        className={`inline-flex items-center font-bold uppercase text-[11px] tracking-wide ${
          status.isOpen ? "text-hazard" : "text-concrete/90"
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full mr-2 shrink-0 ${
            status.isOpen
              ? "bg-hazard animate-pulse"
              : "bg-steel"
          }`}
        />
        {status.statusText}
      </span>
    </div>
  );
}
