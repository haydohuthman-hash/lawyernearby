import EmailCaptureForm from "./EmailCaptureForm";

export default function FinalCta() {
  return (
    <section className="bg-[#0e1a14] py-20 text-center sm:py-28">
      <div className="mx-auto max-w-[700px] px-5 sm:px-8">
        <h2 className="text-[32px] font-extrabold leading-tight tracking-[-0.01em] text-white sm:text-[44px]">
          Your next $10K month starts with one email.
        </h2>
        <p className="mx-auto mt-5 max-w-[440px] text-[15.5px] leading-relaxed text-white/60">
          Join 12,400+ founders who grabbed the blueprint. Free, instant, no catch.
        </p>
        <div className="mt-9 flex justify-center">
          <EmailCaptureForm align="center" />
        </div>
      </div>
    </section>
  );
}
