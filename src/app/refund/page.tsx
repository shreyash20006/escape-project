import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl space-y-8">
      <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">
        Refund Policy
      </h1>
      <p className="text-zinc-400">Last Updated: June 2026</p>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">
          Eligibility for Refunds
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>Refund requests must be made within 7 days of receiving the order.</li>
          <li>The item must be unused, unwashed, and in its original condition.</li>
          <li>All original tags and packaging must be intact.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">
          Non‑Refundable Items
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>Items purchased during special sales or clearance events.</li>
          <li>Gift cards and promotional items.</li>
          <li>Products damaged due to misuse by the customer.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">
          Refund Process
        </h2>
        <p className="text-zinc-300 mb-2">
          Once your return is received and inspected, we will notify you of the approval or rejection of your refund.
        </p>
        <p className="text-zinc-300">
          Approved refunds will be processed to the original payment method within 5–10 business days.
        </p>
      </section>

      <p className="text-zinc-400 mt-8">
        For any queries, please contact us at <Link href="mailto:support@escapeclothing.shop" className="text-white underline">support@escapeclothing.shop</Link>.
      </p>
    </div>
  );
}
