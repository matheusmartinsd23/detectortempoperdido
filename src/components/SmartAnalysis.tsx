interface SmartAnalysisProps {
  eficiencia: number;
}

export const SmartAnalysis = ({ eficiencia }: SmartAnalysisProps) => {
  let message: string;
  let emoji: string;

  if (eficiencia < 60) {
    emoji = "🚨";
    message = "Você está perdendo muito tempo parado. Foque em regiões com maior demanda.";
  } else if (eficiencia <= 80) {
    emoji = "⚡";
    message = "Seu dia está ok, mas ainda dá pra melhorar sua eficiência.";
  } else {
    emoji = "🔥";
    message = "Ótima eficiência! Você está aproveitando bem seu tempo.";
  }

  const borderColor = eficiencia < 60 ? "border-destructive/40" : eficiencia <= 80 ? "border-warning/40" : "border-primary/40";

  return (
    <div className={`rounded-lg bg-card p-4 border ${borderColor}`}>
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        🧠 Análise Inteligente
      </h2>
      <p className="text-sm text-foreground leading-relaxed">
        {emoji} {message}
      </p>
    </div>
  );
};
