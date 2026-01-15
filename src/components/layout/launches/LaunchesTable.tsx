import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LaunchStatusBadge } from "@/components/layout/launches/LaunchStatusBadge";

type LaunchItem = {
  id: string;
  mission_name: string;
  launch_date_utc: string;
  launch_success: boolean | null;
};

export function LaunchesTable({
  launches,
  formatDate
}: {
  launches: LaunchItem[];
  formatDate: (iso: string) => string;
}) {
  return (
    <div className="hidden md:block mx-auto max-w-4xl rounded-lg border bg-muted text-foreground">
      <Table className="text-sm">
        <TableHeader>
          <TableRow>
            <TableHead scope="col">Missão</TableHead>
            <TableHead scope="col">Data</TableHead>
            <TableHead scope="col">Status</TableHead>
            <TableHead scope="col" className="text-right">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {launches.map((launch) => (
            <TableRow key={launch.id}>
              <TableCell className="font-medium">{launch.mission_name}</TableCell>

              <TableCell className="text-muted-foreground">
                {formatDate(launch.launch_date_utc)}
              </TableCell>

              <TableCell><LaunchStatusBadge launchSuccess={launch.launch_success} /></TableCell>

              <TableCell className="text-right">
                <Button asChild size="sm" className="h-7 px-2 text-xs">
                  <Link href={`/launches/${launch.id}`}>Detalhes</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
