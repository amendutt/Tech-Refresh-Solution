import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Tic Tac Toe: Neon Clash" },
      {
        name: "description",
        content:
          "Privacy Policy for Tic Tac Toe: Neon Clash mobile application.",
      },
      {
        property: "og:title",
        content: "Privacy Policy | Tic Tac Toe: Neon Clash",
      },
      {
        property: "og:description",
        content:
          "Privacy Policy for Tic Tac Toe: Neon Clash mobile application.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#070b13] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 flex flex-col items-center justify-center font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top back navigation */}
      <div className="w-full max-w-[760px] mb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Card Container */}
      <main className="w-full max-w-[760px] rounded-2xl border border-slate-800/80 bg-[#0d1527]/95 p-6 sm:p-10 md:p-12 shadow-2xl shadow-cyan-950/30 text-slate-300">
        {/* Header */}
        <header className="border-b border-slate-800/60 pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-cyan-400 font-sans">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Effective Date: September 10, 2026 | App: Tic Tac Toe: Neon Clash
          </p>
        </header>

        {/* Intro */}
        <div className="mt-6 text-sm sm:text-base leading-relaxed text-slate-300">
          <p>
            This Privacy Policy explains how{" "}
            <strong className="font-semibold text-slate-100">
              Tic Tac Toe: Neon Clash
            </strong>{" "}
            (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and
            discloses information when you use our mobile application.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mt-8">
          <h2 className="text-base sm:text-lg font-bold text-white">
            1. Information Collection and Use
          </h2>
          <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-400">
            <strong className="font-semibold text-slate-200">
              Tic Tac Toe: Neon Clash
            </strong>{" "}
            is designed to respect user privacy. We do{" "}
            <strong className="font-semibold text-white">NOT</strong> collect,
            transmit, store, or share any Personally Identifiable Information
            (PII) such as your name, address, phone number, location, or device
            identifiers.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-8">
          <h2 className="text-base sm:text-lg font-bold text-white">
            2. Local Device Storage
          </h2>
          <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-400">
            The application stores gameplay preferences locally on your device
            using standard mobile storage. This data includes:
          </p>
          <ul className="mt-3 space-y-1.5 text-sm sm:text-base text-slate-400 list-disc list-inside pl-1 sm:pl-2">
            <li>Sound effects and haptic vibration toggles</li>
            <li>Dark/Light theme selection</li>
            <li>AI difficulty level preferences</li>
            <li>
              Local gameplay statistics (total games played, wins, losses, draws,
              and streaks)
            </li>
          </ul>
          <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-400">
            All of this data remains strictly on your local device and is never
            uploaded to any remote server or third party.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-8">
          <h2 className="text-base sm:text-lg font-bold text-white">
            3. Third-Party Services
          </h2>
          <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-400">
            Our application does{" "}
            <strong className="font-semibold text-white">NOT</strong> integrate
            third-party advertising SDKs, tracking tools, analytics services, or
            social media plugins that gather or track user information across
            websites or apps.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mt-8">
          <h2 className="text-base sm:text-lg font-bold text-white">
            4. Children&apos;s Privacy
          </h2>
          <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-400">
            Our application does not knowingly collect any personal information
            from children under the age of 13. Since no data is collected, the
            application is safe for users of all age groups.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mt-8">
          <h2 className="text-base sm:text-lg font-bold text-white">
            5. App Permissions
          </h2>
          <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-400">
            The application requires minimal system permissions solely necessary
            for core features (such as haptic feedback and local audio playback).
            It does not request access to your contacts, camera, microphone,
            precise location, or device storage files.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mt-8">
          <h2 className="text-base sm:text-lg font-bold text-white">
            6. Changes to This Privacy Policy
          </h2>
          <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-400">
            We may update our Privacy Policy from time to time. Any changes will
            be published on this page with an updated effective date.
          </p>
        </section>

        {/* Section 7 - Contact Us Callout Box */}
        <section className="mt-8 rounded-xl border border-cyan-950/60 bg-[#081323]/90 p-5 sm:p-6">
          <h2 className="text-base sm:text-lg font-bold text-white">
            7. Contact Us
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
            If you have any questions or suggestions about this Privacy Policy,
            please feel free to contact us at:
          </p>
          <div className="mt-3 flex items-center gap-2 text-sm sm:text-base">
            <span className="text-slate-300">Email:</span>
            <a
              href="mailto:patelsanto44@gmail.com"
              className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
            >
              <Mail size={15} className="inline opacity-80" />
              patelsanto44@gmail.com
            </a>
          </div>
        </section>

        {/* Bottom Footer inside card */}
        <footer className="mt-10 pt-4 text-center">
          <p className="text-xs text-slate-500">
            © 2026 Tic Tac Toe: Neon Clash. All Rights Reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
