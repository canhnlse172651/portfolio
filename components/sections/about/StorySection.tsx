import Image from "next/image";

const storyItems = [
  {
    type: "image" as const,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    alt: "Workspace setup",
  },
  {
    type: "text" as const,
    label: "MY STORY",
    title: "How I started as a web developer",
    description:
      "My journey began in 2010 when I built my first website for a local business. That experience sparked a passion for creating digital experiences that make a difference. Since then, I've honed my skills across front-end and back-end technologies.",
  },
  {
    type: "text" as const,
    label: "MY WORK",
    title: "My first website design back in 2011",
    description:
      "That first project taught me the fundamentals of HTML, CSS, and user-centered design. It wasn't perfect, but it was the foundation that led me to pursue web development as a career and eventually work with amazing companies worldwide.",
  },
  {
    type: "image" as const,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    alt: "Developer working on laptop",
  },
];

export function StorySection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="grid gap-6 md:grid-cols-2">
          {storyItems.map((item, index) =>
            item.type === "image" ? (
              <div
                key={index}
                className="relative h-64 overflow-hidden rounded-3xl md:h-80"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ) : (
              <div
                key={index}
                className="flex h-full flex-col justify-center rounded-3xl bg-card p-8 md:p-10"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {item.label}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
