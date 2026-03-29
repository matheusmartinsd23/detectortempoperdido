interface EfficiencyGaugeProps {
  eficiencia: number;
}

export const EfficiencyGauge = ({ eficiencia }: EfficiencyGaugeProps) => {
  const color = eficiencia < 60 ? "bg-destructive" : eficiencia <= 80 ? "bg-warning" : "bg-primary";
  const label = eficiencia < 60 ? "Crítico" : eficiencia <= 80 ? "Médio" : "Eficiente";

  return (
    <div className="rounded-lg bg-card p-4 border border-border">
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        📈 Indicador de Eficiência
      </h2>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-3 rounded-full bg-secondary overflow-hidden">
          <div
            className={`h-full rounded-full ${color} transition-all duration-700 ease-out`}
            style={{ width: `${eficiencia}%` }}
          />
        </div>
        <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">{label}</span>
      </div>
    </div>
  );
};
