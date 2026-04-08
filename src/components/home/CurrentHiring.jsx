"use client";

import { useEffect, useState } from "react";
import { httpClient } from "@/services";

export function CurrentHiring() {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    httpClient("/careers/positions")
      .then((data) => setPositions(data))
      .catch(() => setPositions([]))
      .finally(() => setLoading(false));
  }, []);

  if (!loading && positions.length === 0) return null;

  return (
    <section className="py-20 px-6 lg:px-40 bg-white dark:bg-slate-900">
      <div className="text-center mb-12">
        <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
          Join Our Team
        </p>
        <h2 className="text-4xl font-black text-gray-900 dark:text-white">
          Current Openings
        </h2>
        <p className="text-gray-500 dark:text-slate-400 mt-4 max-w-xl mx-auto text-lg">
          We&apos;re growing fast. Explore open positions and become part of the
          Babu Lime family.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {positions.map((pos) => (
            <div
              key={pos._id}
              className="group relative bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all duration-200"
            >
              {pos.isNew && (
                <span className="absolute top-4 right-4 text-xs bg-green-100 text-green-700 font-semibold px-2.5 py-0.5 rounded-full">
                  New
                </span>
              )}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 pr-12">
                {pos.title}
              </h3>
              {pos.description && (
                <p className="text-sm text-gray-500 dark:text-slate-400 mb-3 leading-relaxed">
                  {pos.description}
                </p>
              )}
              <div className="space-y-2 text-sm text-gray-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-primary">
                    business
                  </span>
                  <span>{pos.department}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-primary">
                    location_on
                  </span>
                  <span>{pos.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-primary">
                    schedule
                  </span>
                  <span>{pos.type}</span>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Apply Now
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
