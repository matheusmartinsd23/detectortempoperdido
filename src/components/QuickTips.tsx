export const QuickTips = () => {
  const tips = [
    { icon: "🕐", text: "Evite horários de baixa demanda" },
    { icon: "📍", text: "Mude de região se ficar muito tempo parado" },
    { icon: "⏳", text: "Defina um limite de tempo sem corrida" },
  ];

  return (
    <div className="rounded-lg bg-card p-4 border border-border">
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        💡 Dicas Rápidas
      </h2>
      <div className="space-y-2.5">
        {tips.map((tip) => (
          <div key={tip.text} className="flex items-start gap-2.5 text-sm text-foreground">
            <span>{tip.icon}</span>
            <span>{tip.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
