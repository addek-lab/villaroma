"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, MapPin, Clock, X } from "lucide-react";

export interface CalendarEvent {
    title: string;
    description: string;
    location: string;
    date: string;
    duration: string;
    type: string;
    featured: boolean;
    startDate?: string; // ISO date string YYYY-MM-DD
    endDate?: string;   // ISO date string YYYY-MM-DD
}

const WEEKDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const MONTHS = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember",
];

function getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
    const day = new Date(year, month, 1).getDay();
    // Convert Sunday=0 to Monday-based (Mon=0 … Sun=6)
    return day === 0 ? 6 : day - 1;
}

function isSameDay(d1: Date, d2: Date): boolean {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}

function isDateInRange(date: Date, start: Date, end: Date): boolean {
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
    const s = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
    const e = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime();
    return d >= s && d <= e;
}

export default function SeminarCalendar({ events }: { events: CalendarEvent[] }) {
    const today = new Date();
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

    // Build a map: day number → events for that day
    const eventsByDay = useMemo(() => {
        const map: Record<number, CalendarEvent[]> = {};
        events.forEach((event) => {
            if (!event.startDate) return;
            const start = new Date(event.startDate + "T00:00:00");
            const end = event.endDate ? new Date(event.endDate + "T00:00:00") : start;

            for (let day = 1; day <= daysInMonth; day++) {
                const cellDate = new Date(currentYear, currentMonth, day);
                if (isDateInRange(cellDate, start, end)) {
                    if (!map[day]) map[day] = [];
                    map[day].push(event);
                }
            }
        });
        return map;
    }, [events, currentYear, currentMonth, daysInMonth]);

    const goToPrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear((y) => y - 1);
        } else {
            setCurrentMonth((m) => m - 1);
        }
        setSelectedDay(null);
    };

    const goToNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear((y) => y + 1);
        } else {
            setCurrentMonth((m) => m + 1);
        }
        setSelectedDay(null);
    };

    const isToday = (day: number) => {
        return isSameDay(new Date(currentYear, currentMonth, day), today);
    };

    const selectedEvents = selectedDay ? eventsByDay[selectedDay] || [] : [];

    // Build the grid cells: leading blanks + days
    const cells: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);

    // Color coding by event type
    const typeColor = (type: string) => {
        switch (type) {
            case "Seminar": return "bg-forest text-white";
            case "Vortrag": return "bg-leaf text-white";
            case "Webinar": return "bg-sage text-earth";
            case "Workshop": return "bg-earth text-white";
            case "Studienreise": return "bg-bark text-white";
            default: return "bg-forest text-white";
        }
    };

    const typeDot = (type: string) => {
        switch (type) {
            case "Seminar": return "bg-forest";
            case "Vortrag": return "bg-leaf";
            case "Webinar": return "bg-sage";
            case "Workshop": return "bg-earth";
            case "Studienreise": return "bg-bark";
            default: return "bg-forest";
        }
    };

    return (
        <section className="section-padding !pt-0 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section label */}
                <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">
                    Kalender
                </span>

                <div className="card p-6 sm:p-8">
                    {/* Month Navigation */}
                    <div className="flex items-center justify-between mb-8">
                        <button
                            onClick={goToPrevMonth}
                            className="w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-sage-light transition-colors"
                            aria-label="Vorheriger Monat"
                        >
                            <ChevronLeft size={20} className="text-forest" />
                        </button>
                        <h3 className="text-xl sm:text-2xl font-bold text-forest">
                            {MONTHS[currentMonth]} {currentYear}
                        </h3>
                        <button
                            onClick={goToNextMonth}
                            className="w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-sage-light transition-colors"
                            aria-label="Nächster Monat"
                        >
                            <ChevronRight size={20} className="text-forest" />
                        </button>
                    </div>

                    {/* Weekday header */}
                    <div className="grid grid-cols-7 mb-2">
                        {WEEKDAYS.map((wd) => (
                            <div key={wd} className="text-center text-xs font-semibold text-bark uppercase tracking-wider py-2">
                                {wd}
                            </div>
                        ))}
                    </div>

                    {/* Days grid */}
                    <div className="grid grid-cols-7 gap-1">
                        {cells.map((day, idx) => {
                            if (day === null) {
                                return <div key={`empty-${idx}`} className="aspect-square" />;
                            }

                            const dayEvents = eventsByDay[day];
                            const hasEvents = !!dayEvents;
                            const isSelected = selectedDay === day;
                            const todayFlag = isToday(day);

                            return (
                                <button
                                    key={day}
                                    onClick={() => {
                                        if (hasEvents) {
                                            setSelectedDay(isSelected ? null : day);
                                        }
                                    }}
                                    className={`
                                        aspect-square rounded-xl flex flex-col items-center justify-center relative
                                        transition-all duration-200 text-sm font-medium
                                        ${todayFlag && !isSelected ? "ring-2 ring-forest/30" : ""}
                                        ${isSelected
                                            ? "bg-forest text-white shadow-lg shadow-forest/20 scale-105"
                                            : hasEvents
                                                ? "bg-sage/15 text-forest hover:bg-sage/30 cursor-pointer"
                                                : "text-bark/70 hover:bg-cream/60"
                                        }
                                    `}
                                >
                                    <span className={`${todayFlag && !isSelected ? "font-bold text-forest" : ""}`}>
                                        {day}
                                    </span>
                                    {hasEvents && !isSelected && (
                                        <div className="flex gap-0.5 mt-0.5">
                                            {dayEvents.slice(0, 3).map((ev, i) => (
                                                <span
                                                    key={i}
                                                    className={`w-1.5 h-1.5 rounded-full ${typeDot(ev.type)}`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                    {isSelected && (
                                        <div className="flex gap-0.5 mt-0.5">
                                            {dayEvents?.slice(0, 3).map((_, i) => (
                                                <span key={i} className="w-1.5 h-1.5 rounded-full bg-white/60" />
                                            ))}
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Selected day event details */}
                    {selectedDay !== null && selectedEvents.length > 0 && (
                        <div className="mt-6 space-y-3 animate-fade-in">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold text-forest">
                                    {selectedDay}. {MONTHS[currentMonth]} {currentYear}
                                </h4>
                                <button
                                    onClick={() => setSelectedDay(null)}
                                    className="w-7 h-7 rounded-full bg-cream flex items-center justify-center hover:bg-sage-light transition-colors"
                                    aria-label="Schließen"
                                >
                                    <X size={14} className="text-bark" />
                                </button>
                            </div>
                            {selectedEvents.map((event, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-cream/70 border border-sage-light/50"
                                >
                                    <div className={`px-2.5 py-1 rounded-full text-xs font-bold shrink-0 ${typeColor(event.type)}`}>
                                        {event.type}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h5 className="font-bold text-earth text-sm mb-1">{event.title}</h5>
                                        <p className="text-bark text-xs leading-relaxed mb-2">{event.description}</p>
                                        <div className="flex flex-wrap gap-3 text-xs text-bark">
                                            <span className="flex items-center gap-1">
                                                <MapPin size={11} className="text-leaf" /> {event.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={11} className="text-leaf" /> {event.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Legend */}
                    <div className="mt-6 pt-4 border-t border-sage-light/30">
                        <div className="flex flex-wrap gap-4 text-xs text-bark">
                            <span className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-forest" /> Seminar
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-leaf" /> Vortrag
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-sage" /> Webinar
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-earth" /> Workshop
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-bark" /> Studienreise
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
