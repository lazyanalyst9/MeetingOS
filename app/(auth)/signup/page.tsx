export default function SignupPage() {
  return (
    <div className="card mx-auto max-w-md p-8">
      <h1 className="mb-6 text-2xl font-semibold">Create account</h1>
      <form className="space-y-4">
        <input className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3" placeholder="Full name" />
        <input className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3" placeholder="Email" type="email" />
        <input className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3" placeholder="Password" type="password" />
        <button className="w-full rounded-xl bg-brand-500 p-3 font-medium">Sign up</button>
      </form>
    </div>
  );
}
