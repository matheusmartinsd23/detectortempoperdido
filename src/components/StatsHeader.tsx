interface StatsHeaderProps {
  tempoParado: string;
  dinheiroPerdido: number;
  eficiencia: number;
  show: boolean;
}

export const StatsHeader = ({ tempoParado, dinheiroPerdido, eficiencia, show }: StatsHeaderProps) => {
  if (!show) {
    return (
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { icon: "⏱️", label: "Tempo Perdido", value: "--" },
          { icon: "💸", label: "Dinheiro Perdido", value: "--" },
          { icon: "📊", label: "Eficiência", value: "--" },
        ].map((item) => (
          <div key={item.label} className="rounded-lg bg-card p-3 text-center">
            <div className="text-lg">{item.icon}</div>
            <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
            <div className="text-lg font-bold text-muted-foreground mt-1">{item.value}</div>
          </div>
        ))}
      </div>
    );
  }

  const stats = [
    { icon: "⏱️", label: "Tempo Perdido", value: tempoParado },
    { icon: "💸", label: "Dinheiro Perdido", value: `R$ ${dinheiroPerdido.toFixed(2)}` },
    { icon: "📊", label: "Eficiência", value: `${eficiencia.toFixed(0)}%` },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 mb-5">
      {stats.map((item) => (
        <div key={item.label} className="rounded-lg bg-card p-3 text-center glow-primary border border-primary/20">
          <div className="text-lg">{item.icon}</div>
          <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
          <div className="text-base font-bold text-primary mt-1">{item.value}</div>
        </div>
      ))}
    </div>
  );
};
