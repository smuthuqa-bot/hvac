"use client";

import { useEffect, useMemo, useState } from "react";

type CorporateInquiry = {
  id: string;
  companyName: string;
  gstin: string;
  address: string;
  mobile: string | null;
  email: string | null;
  employeesRequired: number;
  employmentType: "Permanent" | "Temporary";
  temporaryDuration: string | null;
  enquiredAt: string;
};

type CorporateInquiryDay = {
  date: string;
  count: number;
  inquiries: CorporateInquiry[];
};

export default function CorporateDataPage() {
  const [data, setData] = useState<CorporateInquiryDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadCorporateInquiries = async () => {
      try {
        const response = await fetch("/api/corporate-inquiries");
        const result = await response.json();

        if (result.success) {
          setData(result.data);

          if (result.data.length > 0) {
            setSelectedDate(result.data[0].date);
          }
        }
      } catch (error) {
        console.error(
          "Failed to load corporate enquiries:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadCorporateInquiries();
  }, []);

  const totalInquiries = useMemo(() => {
    return data.reduce(
      (total, day) => total + day.count,
      0
    );
  }, [data]);

  const selectedDay = data.find(
    (day) => day.date === selectedDate
  );

  const filteredInquiries =
    selectedDay?.inquiries.filter((inquiry) => {
      const searchText = search.toLowerCase().trim();

      if (!searchText) {
        return true;
      }

      return (
        inquiry.companyName
          .toLowerCase()
          .includes(searchText) ||
        inquiry.gstin
          .toLowerCase()
          .includes(searchText) ||
        inquiry.address
          .toLowerCase()
          .includes(searchText) ||
        inquiry.id
          .toLowerCase()
          .includes(searchText) ||
        (inquiry.mobile || "")
          .toLowerCase()
          .includes(searchText) ||
        (inquiry.email || "")
          .toLowerCase()
          .includes(searchText) ||
        inquiry.employmentType
          .toLowerCase()
          .includes(searchText) ||
        String(inquiry.employeesRequired).includes(
          searchText
        ) ||
        (inquiry.temporaryDuration || "")
          .toLowerCase()
          .includes(searchText)
      );
    }) || [];

  const today = new Date()
    .toISOString()
    .split("T")[0];

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
              Corporate Enquiry Data
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
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Total Corporate Enquiries
            </p>

            <p className="mt-2 text-3xl font-black text-slate-950">
              {totalInquiries}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Enquiry Days
            </p>

            <p className="mt-2 text-3xl font-black text-slate-950">
              {data.length}
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Selected Date
            </p>

            <p className="mt-2 text-lg font-black text-blue-800">
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
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Corporate Enquiry History
              </p>

              <h2 className="mt-2 text-xl font-black text-slate-950 sm:text-2xl">
                Select Enquiry Date
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Choose a date to view corporate enquiries.
                Future dates are not available.
              </p>
            </div>

            <div className="w-full lg:max-w-xs">
              <label
                htmlFor="corporate-date"
                className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                Date
              </label>

              <input
                id="corporate-date"
                type="date"
                value={selectedDate}
                max={today}
                onChange={handleDateChange}
                className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Selected Date Info */}
          <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-[#082B57] p-5 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
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
                Enquiries
              </p>

              <p className="mt-1 text-2xl font-black text-blue-400">
                {selectedDay?.count || 0}
              </p>
            </div>
          </div>

          {/* Available Dates */}
          {data.length > 0 && (
            <div className="mt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                Available Enquiry Dates
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
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
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
            CORPORATE ENQUIRY TABLE
        ===================================================== */}
        <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Table Header */}
          <div className="border-b border-slate-200 p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-black text-slate-950">
                  {selectedDate
                    ? formatDate(selectedDate)
                    : "Corporate Enquiries"}
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  {filteredInquiries.length} corporate enquiry
                  {filteredInquiries.length !== 1
                    ? "ies"
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
                  placeholder="Search company, GSTIN, mobile, email..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-10 text-center text-sm text-slate-400">
                Loading corporate enquiries...
              </div>
            ) : !selectedDate ? (
              <div className="p-10 text-center">
                <div className="text-4xl">
                  📅
                </div>

                <p className="mt-3 text-sm font-bold text-slate-700">
                  Select an enquiry date
                </p>
              </div>
            ) : filteredInquiries.length === 0 ? (
              <div className="p-10 text-center">
                <div className="text-4xl">
                  🏢
                </div>

                <p className="mt-3 text-sm font-bold text-slate-700">
                  No corporate enquiries found
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  There are no enquiries matching your
                  selection.
                </p>
              </div>
            ) : (
              <table className="w-full min-w-[1500px] text-left">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    {/* Enquiry ID */}
                    <th className="whitespace-nowrap px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Enquiry ID
                    </th>

                    {/* Company */}
                    <th className="whitespace-nowrap px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Company
                    </th>

                    {/* GSTIN */}
                    <th className="whitespace-nowrap px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      GSTIN
                    </th>

                    {/* Mobile */}
                    <th className="whitespace-nowrap px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Mobile
                    </th>

                    {/* Email */}
                    <th className="whitespace-nowrap px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Email
                    </th>

                    {/* Employees */}
                    <th className="whitespace-nowrap px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Employees
                    </th>

                    {/* Employment Type */}
                    <th className="whitespace-nowrap px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Employment Type
                    </th>

                    {/* Duration */}
                    <th className="whitespace-nowrap px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Duration
                    </th>

                    {/* Address */}
                    <th className="whitespace-nowrap px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Address
                    </th>

                    {/* Enquired */}
                    <th className="whitespace-nowrap px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Enquired
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredInquiries.map(
                    (inquiry) => (
                      <tr
                        key={inquiry.id}
                        className="border-b border-slate-100 transition hover:bg-slate-50"
                      >
                        {/* ID */}
                        <td className="whitespace-nowrap px-5 py-4">
                          <span className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-bold text-blue-700">
                            {inquiry.id}
                          </span>
                        </td>

                        {/* Company */}
                        <td className="px-5 py-4">
                          <p className="text-sm font-bold text-slate-900">
                            {inquiry.companyName}
                          </p>
                        </td>

                        {/* GSTIN */}
                        <td className="whitespace-nowrap px-5 py-4">
                          <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold uppercase text-slate-700">
                            {inquiry.gstin}
                          </span>
                        </td>

                        {/* Mobile */}
                        <td className="whitespace-nowrap px-5 py-4">
                          {inquiry.mobile ? (
                            <a
                              href={`tel:${inquiry.mobile}`}
                              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800 hover:underline"
                            >
                              <span>📱</span>
                              <span>
                                {inquiry.mobile}
                              </span>
                            </a>
                          ) : (
                            <span className="text-sm text-slate-400">
                              -
                            </span>
                          )}
                        </td>

                        {/* Email */}
                        <td className="px-5 py-4">
                          {inquiry.email ? (
                            <a
                              href={`mailto:${inquiry.email}`}
                              className="inline-flex max-w-[260px] items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800 hover:underline"
                            >
                              <span>✉️</span>
                              <span className="truncate">
                                {inquiry.email}
                              </span>
                            </a>
                          ) : (
                            <span className="text-sm text-slate-400">
                              -
                            </span>
                          )}
                        </td>

                        {/* Employees */}
                        <td className="whitespace-nowrap px-5 py-4">
                          <span className="text-sm font-black text-slate-800">
                            {inquiry.employeesRequired}
                          </span>
                        </td>

                        {/* Employment Type */}
                        <td className="whitespace-nowrap px-5 py-4">
                          <span
                            className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                              inquiry.employmentType ===
                              "Permanent"
                                ? "bg-green-50 text-green-700"
                                : "bg-orange-50 text-orange-700"
                            }`}
                          >
                            {inquiry.employmentType}
                          </span>
                        </td>

                        {/* Duration */}
                        <td className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-slate-600">
                          {inquiry.temporaryDuration ||
                            "-"}
                        </td>

                        {/* Address */}
                        <td className="max-w-[250px] px-5 py-4 text-sm text-slate-500">
                          <p
                            className="truncate"
                            title={inquiry.address}
                          >
                            {inquiry.address}
                          </p>
                        </td>

                        {/* Enquired */}
                        <td className="whitespace-nowrap px-5 py-4 text-xs text-slate-500">
                          {formatDateTime(
                            inquiry.enquiredAt
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