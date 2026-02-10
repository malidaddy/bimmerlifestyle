import { cn } from "@/lib/utils";
import { Info, AlertTriangle, CheckCircle } from "lucide-react";

interface CalloutProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "success";
}

const calloutConfig = {
  info: {
    icon: Info,
    className: "border-primary/30 bg-primary/5 text-primary",
  },
  warning: {
    icon: AlertTriangle,
    className: "border-yellow-500/30 bg-yellow-500/5 text-yellow-700",
  },
  success: {
    icon: CheckCircle,
    className: "border-green-500/30 bg-green-500/5 text-green-700",
  },
};

export function Callout({ children, type = "info" }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "my-6 flex gap-3 rounded-lg border-l-4 p-4",
        config.className
      )}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      <div className="text-sm [&>p]:m-0">{children}</div>
    </div>
  );
}
