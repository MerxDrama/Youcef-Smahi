# Menodi

AI-receptionist för svenska hantverkare — VVS, el, bygg, våtrum.

**menodi.se** · En del av [Noderum AB](https://noderum.se)

---

## Stack

- [Next.js 16](https://nextjs.org) — App Router
- [Tailwind CSS](https://tailwindcss.com) — custom Menodi palette
- [Familjen Grotesk](https://fonts.google.com/specimen/Familjen+Grotesk) — brand typeface
- Vercel — hosting

## Kom igång

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Miljövariabler

```bash
cp .env.example .env.local
# Fyll i WEBHOOK_URL för demo-formuläret
```

## Deploy

```bash
vercel --prod
```
