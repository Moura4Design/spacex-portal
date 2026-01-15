import { Badge } from "@/components/ui/badge";

type LaunchStatusBadgeProps = {
  launchSuccess: boolean | null;
};

export function LaunchStatusBadge({
  launchSuccess,
}: LaunchStatusBadgeProps) {
  if (launchSuccess === true) {
    return (
      <Badge
        className="bg-green-600 hover:bg-green-600"
        aria-label="Lançamento com sucesso"
      >
        Sucesso
      </Badge>
    );
  }

  if (launchSuccess === false) {
    return (
      <Badge
        className="bg-red-600 hover:bg-red-600"
        aria-label="Lançamento falhou"
      >
        Falhou
      </Badge>
    );
  }

  return (
    <Badge variant="outline" aria-label="Status indisponível">
      Indisponível
    </Badge>
  );
}