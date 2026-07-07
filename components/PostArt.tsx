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
} as const;

export type ArtIcon = keyof typeof ICONS;

export default function PostArt({ icon, className = "" }: { icon: ArtIcon; className?: string }) {
  const Icon = ICONS[icon];

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
        <Icon className="h-16 w-16 text-white/25 sm:h-24 sm:w-24" />
      </div>
    </div>
  );
}
