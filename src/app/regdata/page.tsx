"use client";

import { useEffect, useMemo, useState } from "react";

type Registration = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  qualification: string;
  address: string;
  registeredAt: string;
  age?: string; // Optional age field
};

type RegistrationDay = {
  date: string;
  count: number;
  registrations: Registration[];
};

export default function RegistrationDataPage() {
  const [data, setData] = useState<RegistrationDay[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedDate, setSelectedDate] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadRegistrations = async () => {
      try {
        const response = await fetch(
          "/api/registrations/files"
        );

        const result = await response.json();

        if (result.success) {
          setData(result.data);

          /*
           * Automatically select the latest
           * available registration date.
           */
          if (result.data.length > 0) {
            setSelectedDate(result.data[0].date);
          }
        }
      } catch (error) {
        console.error(
          "Failed to load registrations:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadRegistrations();
  }, []);

  /*
   * Total registrations
   */
  const totalRegistrations = useMemo(() => {
    return data.reduce(
      (total, day) => total + day.count,
      0
    );
  }, [data]);

  /*
   * Selected day
   */
  const selectedDay = data.find(
    (day) => day.date === selectedDate
  );

  /*
   * Search selected day's registrations
   */
  const filteredRegistrations =
    selectedDay?.registrations.filter(
      (registration) => {
        const searchText = search
          .toLowerCase()
          .trim();

        if (!searchText) {
          return true;
        }

        return (
          registration.name
            .toLowerCase()
            .includes(searchText) ||
          registration.email
            .toLowerCase()
            .includes(searchText) ||
          registration.mobile
            .toLowerCase()
            .includes(searchText) ||
          registration.id
            .toLowerCase()
            .includes(searchText) ||
          registration.qualification
            .toLowerCase()
            .includes(searchText) ||
          registration.address
            .toLowerCase()
            .includes(searchText) 
        );
      }
    ) || [];

  /*
   * Today's date
   */
  const today = new Date()
    .toISOString()
    .split("T")[0];

  /*
   * Latest registration date
   */
  const latestDate =
    data.length > 0 ? data[0].date : "";

  /*
   * Date formatting
   */
  const formatDate = (date: string) => {
    if (!date) return "-";

    const parsedDate = new Date(
      `${date}T00:00:00`
    );

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatDateTime = (date: string) => {
    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  /*
   * Change date
   */
  const handleDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const date = event.target.value;

    setSelectedDate(date);
    setSearch("");
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="border-b border-white/10 bg-[#061A33]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-xl font-black text-white sm:text-2xl">
              Registration Data
            </h1>

            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              ACME Skill Development Center
            </p>
          </div>

          <a
            href="/"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Back to Website
          </a>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* =====================================================
            SUMMARY CARDS
        ===================================================== */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Total */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Total Registrations
            </p>

            <p className="mt-2 text-3xl font-black text-slate-950">
              {totalRegistrations}
            </p>
          </div>

          {/* Registration days */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Registration Days
            </p>

            <p className="mt-2 text-3xl font-black text-slate-950">
              {data.length}
            </p>
          </div>

          {/* Selected date */}
          <div className="rounded-2xl border border-green-100 bg-green-50 p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-green-600">
              Selected Date
            </p>

            <p className="mt-2 text-lg font-black text-green-800">
              {selectedDate
                ? formatDate(selectedDate)
                : "-"}
            </p>
          </div>
        </div>

        {/* =====================================================
            DATE SELECTOR
        ===================================================== */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            {/* Heading */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600">
                Registration History
              </p>

              <h2 className="mt-2 text-xl font-black text-slate-950 sm:text-2xl">
                Select Registration Date
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Choose a date to view registrations.
                Future dates are not available.
              </p>
            </div>

            {/* Calendar */}
            <div className="w-full lg:max-w-xs">
              <label
                htmlFor="registration-date"
                className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                Date
              </label>

              <div className="relative">
                <input
                  id="registration-date"
                  type="date"
                  value={selectedDate}
                  max={today}
                  onChange={handleDateChange}
                  className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                />
              </div>
            </div>
          </div>

          {/* Selected date info */}
          <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-[#082B57] p-5 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400">
                Selected Date
              </p>

              <h3 className="mt-1 text-lg font-black">
                {selectedDate
                  ? formatDate(selectedDate)
                  : "No date selected"}
              </h3>
            </div>

            <div className="rounded-xl bg-white/10 px-5 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                Registrations
              </p>

              <p className="mt-1 text-2xl font-black text-green-400">
                {selectedDay?.count || 0}
              </p>
            </div>
          </div>

          {/* Available dates */}
          {data.length > 0 && (
            <div className="mt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                Available Registration Dates
              </p>

              <div className="flex flex-wrap gap-2">
                {data.map((day) => (
                  <button
                    key={day.date}
                    type="button"
                    onClick={() => {
                      setSelectedDate(day.date);
                      setSearch("");
                    }}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                      selectedDate === day.date
                        ? "bg-green-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-green-50 hover:text-green-700"
                    }`}
                  >
                    {formatDate(day.date)}
                    <span className="ml-2 opacity-60">
                      ({day.count})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* =====================================================
            REGISTRATION TABLE
        ===================================================== */}
        <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Table header */}
          <div className="border-b border-slate-200 p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-black text-slate-950">
                  {selectedDate
                    ? formatDate(selectedDate)
                    : "Registrations"}
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  {selectedDay?.count || 0} registration
                  {(selectedDay?.count || 0) !== 1
                    ? "s"
                    : ""}
                </p>
              </div>

              {/* Search */}
              <div className="w-full sm:max-w-sm">
                <input
                  type="text"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search name, mobile, email..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-10 text-center text-sm text-slate-400">
                Loading registrations...
              </div>
            ) : !selectedDate ? (
              <div className="p-10 text-center">
                <div className="text-4xl">📅</div>

                <p className="mt-3 text-sm font-bold text-slate-700">
                  Select a registration date
                </p>
              </div>
            ) : filteredRegistrations.length ===
              0 ? (
              <div className="p-10 text-center">
                <div className="text-4xl">📋</div>

                <p className="mt-3 text-sm font-bold text-slate-700">
                  No registrations found
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  There are no registrations for this
                  date.
                </p>
              </div>
            ) : (
              <table className="w-full min-w-[950px] text-left">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      ID
                    </th>

                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Candidate
                    </th>

                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Mobile
                    </th>

                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Age
                    </th>

                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Qualification
                    </th>

                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Address
                    </th>

                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Registered
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredRegistrations.map(
                    (registration) => (
                      <tr
                        key={registration.id}
                        className="border-b border-slate-100 transition hover:bg-slate-50"
                      >
                        {/* ID */}
                        <td className="whitespace-nowrap px-5 py-4">
                          <span className="rounded-lg bg-green-50 px-2.5 py-1.5 text-xs font-bold text-green-700">
                            {registration.id}
                          </span>
                        </td>

                        {/* Candidate */}
                        <td className="px-5 py-4">
                          <div>
                            <p className="text-sm font-bold text-slate-900">
                              {registration.name}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                              {registration.email}
                            </p>
                          </div>
                        </td>

                        {/* Mobile */}
                        <td className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-slate-700">
                          {registration.mobile}
                        </td>

                        <td className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-slate-700">
                          {registration.age || "-"}
                        </td>

                        {/* Qualification */}
                        <td className="whitespace-nowrap px-5 py-4">
                          <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                            {registration.qualification ||
                              "-"}
                          </span>
                        </td>

                        {/* Address */}
                        <td className="max-w-[220px] px-5 py-4 text-sm text-slate-500">
                          <p className="truncate">
                            {registration.address}
                          </p>
                        </td>

                        {/* Registered */}
                        <td className="whitespace-nowrap px-5 py-4 text-xs text-slate-500">
                          {formatDateTime(
                            registration.registeredAt
                          )}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}