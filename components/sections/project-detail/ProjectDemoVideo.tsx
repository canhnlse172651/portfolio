import { type Project } from "@/lib/data/projects";
import { resolveVideoEmbed } from "@/lib/utils/video";

type ProjectDemoVideoProps = {
  project: Project;
};

export function ProjectDemoVideo({ project }: ProjectDemoVideoProps) {
  if (!project.demoVideo) {
    return (
      <div className="project-demo-video overflow-hidden rounded-3xl border border-border bg-card">
        <div className="flex aspect-video w-full items-center justify-center bg-black/40 px-6">
          <p className="text-center text-sm text-muted">
            Video demo coming soon.
          </p>
        </div>
      </div>
    );
  }

  const embed = resolveVideoEmbed(project.demoVideo);

  return (
    <div className="project-demo-video overflow-hidden rounded-3xl border border-border bg-card">
      <div className="relative aspect-video w-full bg-black">
        {embed.provider === "file" ? (
          <video
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={project.heroImage}
          >
            <source src={embed.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe
            src={embed.embedUrl}
            title={`${project.title} demo video`}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
      <p className="border-t border-border px-6 py-4 text-center text-sm text-muted">
        Product walkthrough — {project.title}
      </p>
    </div>
  );
}
