import { BASE_PATH } from "@/lib/site";
import {
  TruckIcon,
  BoxIcon,
  ShieldIcon,
  PersonIcon,
  HouseIcon,
  HandIcon,
  TrashIcon,
  SparkleIcon,
  StarIcon,
  PianoIcon,
  TableIcon,
  SpaIcon,
  PawIcon,
  CalendarIcon,
  TagIcon,
  KeyIcon,
  RoadIcon,
  LeafIcon,
  CloudRainIcon,
  MonitorIcon,
  StairsIcon,
} from "./icons";

const ICONS = {
  truck: TruckIcon,
  box: BoxIcon,
  shield: ShieldIcon,
  person: PersonIcon,
  house: HouseIcon,
  hand: HandIcon,
  trash: TrashIcon,
  sparkle: SparkleIcon,
  star: StarIcon,
  piano: PianoIcon,
  table: TableIcon,
  spa: SpaIcon,
  paw: PawIcon,
  calendar: CalendarIcon,
  tag: TagIcon,
  key: KeyIcon,
  road: RoadIcon,
  leaf: LeafIcon,
  cloud: CloudRainIcon,
  monitor: MonitorIcon,
  stairs: StairsIcon,
} as const;

export type ArtIcon = keyof typeof ICONS;

export default function PostArt({
  icon,
  photo,
  className = "",
}: {
  icon: ArtIcon;
  /** Path under public/ (e.g. "/blog/headers/my-post.jpg") for a generated photo header. Falls back to the icon treatment when omitted. */
  photo?: string;
  className?: string;
}) {
  const Icon = ICONS[icon];

  if (photo) {
    return (
      <div className={`grain relative overflow-hidden bg-ink ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element -- static export with images.unoptimized, see next.config.mjs */}
        <img
          src={`${BASE_PATH}${photo}`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
      </div>
    );
  }

  return (
    <div className={`grain relative overflow-hidden bg-ink ${className}`}>
      <div
        className="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
      />
      <div className="relative flex h-full items-center justify-center">
        <span aria-hidden="true">
          <Icon className="h-16 w-16 text-white/25 sm:h-24 sm:w-24" />
        </span>
      </div>
    </div>
  );
}
