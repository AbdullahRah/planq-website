"use client";

const features = [
  {
    title: "Reads the drawings.",
    description: "Extraction",
    body: "PDF, image, or DXF. Multilingual labels — Spanish, French, English. Multi-page packages handled per page.",
  },
  {
    title: "Knows the code.",
    description: "Reference",
    body: "1,953 indexed sections of the 2020 NBC Alberta Edition. Section-aware retrieval, every time.",
  },
  {
    title: "Cites the section.",
    description: "Citation",
    body: "Every flag links to a real clause — §9.9.6.4, §3.4.3.2. No vague \"looks off\" comments.",
  },
  {
    title: "Knows Part 9 from Part 3.",
    description: "Routing",
    body: "850 mm door is fine for a single-detached dwelling, undersized for a Group A assembly. Planq never confuses the two.",
  },
  {
    title: "Cross-checks every sheet.",
    description: "Consistency",
    body: "Door D-01 is 900 mm on A-1 and 850 mm on the schedule? Caught. Stair on A-2 missing from A-1? Caught.",
  },
  {
    title: "Grades the severity.",
    description: "Triage",
    body: "Critical, major, minor. Know what to fix before submission and what can wait until the next revision.",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="what-it-finds" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          The first reviewer
          <br />
          your package never had.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          What planq does
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-px bg-border px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20 md:rounded-2xl md:overflow-hidden md:border md:border-border">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group flex flex-col bg-background p-8 md:p-10 lg:p-12"
          >
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
              {feature.description}
            </p>
            <h3 className="text-foreground text-2xl font-medium tracking-tight md:text-3xl">
              {feature.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {feature.body}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20">

      </div>
    </section>
  );
}
