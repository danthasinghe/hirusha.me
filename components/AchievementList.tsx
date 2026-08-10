"use client";

import { useMemo, useState } from "react";
import {
  achievements,
  type Achievement,
  type AchievementCategory,
} from "@/data/achievements";

const filters: {
  label: string;
  value: "all" | AchievementCategory;
}[] = [
  { label: "all", value: "all" },
  { label: "competitions", value: "competition" },
  { label: "awards", value: "award" },
  { label: "other", value: "other" },
];

const categoryLabels: Record<AchievementCategory, string> = {
  competition: "competition",
  award: "award",
  other: "other",
};

function getOrdinal(number: number) {
  if (number === 1) return "st";
  if (number === 2) return "nd";
  if (number === 3) return "rd";
  return "th";
}

function formatResult(result: Achievement["result"]) {
  switch (result.type) {
    case "placement":
      return `${result.place}${getOrdinal(result.place)} Place`;

    case "runner-up":
      return `${result.position}${getOrdinal(result.position)} Runner-up`;

    case "status":
      return result.status
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("-");

    case "award":
      return result.label;
  }
}

function isFirstPlace(result: Achievement["result"]) {
  return result.type === "placement" && result.place === 1;
}

export default function AchievementList() {
  const [activeFilter, setActiveFilter] = useState<"all" | AchievementCategory>(
    "all",
  );

  const filteredAchievements = useMemo(() => {
    if (activeFilter === "all") {
      return achievements;
    }

    return achievements.filter(
      (achievement) => achievement.category === activeFilter,
    );
  }, [activeFilter]);

  const groupedAchievements = useMemo(() => {
    return filteredAchievements.reduce<Record<number, Achievement[]>>(
      (groups, achievement) => {
        if (!groups[achievement.year]) {
          groups[achievement.year] = [];
        }

        groups[achievement.year].push(achievement);

        return groups;
      },
      {},
    );
  }, [filteredAchievements]);

  const years = Object.keys(groupedAchievements)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div>
      {/* Filters */}
      <div className="mb-12 flex flex-wrap gap-x-5 gap-y-3 border-b border-neutral-800 pb-6 font-mono text-xs">
        {filters.map((filter) => {
          const active = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`transition-colors ${
                active
                  ? "text-white"
                  : "text-neutral-700 hover:text-neutral-400"
              }`}
            >
              {active && <span className="mr-2 text-[var(--accent)]">●</span>}

              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Achievement list */}
      {years.length > 0 ? (
        <div className="space-y-16">
          {years.map((year) => (
            <div key={year}>
              {/* Year */}
              <div className="mb-5 font-mono text-xs text-neutral-600">
                {year}
              </div>

              <div className="border-t border-neutral-800">
                {groupedAchievements[year].map((achievement, index) => {
                  const firstPlace = isFirstPlace(achievement.result);

                  return (
                    <article
                      key={achievement.id}
                      className="group border-b border-neutral-800 py-7"
                    >
                      <div className="grid grid-cols-[36px_1fr] gap-4 sm:grid-cols-[50px_1fr_120px]">
                        {/* Number */}
                        <span className="font-mono text-xs text-neutral-700 transition-colors group-hover:text-[var(--accent)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Content */}
                        <div>
                          {/* Title + result */}
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                            <h2 className="text-sm text-neutral-200 transition-colors group-hover:text-white">
                              {achievement.title}
                            </h2>

                            <span
                              className={`font-mono text-[10px] ${
                                firstPlace
                                  ? "text-[var(--accent)]"
                                  : "text-neutral-600"
                              }`}
                            >
                              {formatResult(achievement.result)}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-500">
                            {achievement.description}
                          </p>

                          {/* Metadata */}
                          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] text-neutral-700">
                            <span>{achievement.organization}</span>

                            <span>{categoryLabels[achievement.category]}</span>
                          </div>
                        </div>

                        {/* Year */}
                        <span className="hidden text-right font-mono text-xs text-neutral-800 transition-colors group-hover:text-neutral-600 sm:block">
                          {year}
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-neutral-800 py-16 text-center font-mono text-xs text-neutral-700">
          no achievements found
        </div>
      )}
    </div>
  );
}
