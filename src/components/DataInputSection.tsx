interface DataInputSectionProps {
  horasOnline: string;
  horasCorrida: string;
  ganhoBruto: string;
  onHorasOnlineChange: (v: string) => void;
  onHorasCorridaChange: (v: string) => void;
  onGanhoBrutoChange: (v: string) => void;
  onCalculate: () => void;
}

export const DataInputSection = ({
  horasOnline, horasCorrida, ganhoBruto,
  onHorasOnlineChange, onHorasCorridaChange, onGanhoBrutoChange,
  onCalculate,
}: DataInputSectionProps) => {
  const inputs = [
    { label: "Horas online totais", value: horasOnline, onChange: onHorasOnlineChange, placeholder: "Ex: 10" },
    { label: "Horas em corrida", value: horasCorrida, onChange: onHorasCorridaChange, placeholder: "Ex: 6" },
    { label: "Ganho bruto (R$)", value: ganhoBruto, onChange: onGanhoBrutoChange, placeholder: "Ex: 250" },
  ];

  return (
    <div className="rounded-lg bg-card p-4 border border-border">
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
        📋 Dados do Dia
      </h2>
      <div className="space-y-3">
        {inputs.map((input) => (
          <div key={input.label}>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">
              {input.label}
            </label>
            <input
              type="number"
              inputMode="decimal"
              value={input.value}
              onChange={(e) => input.onChange(e.target.value)}
              placeholder={input.placeholder}
              className="w-full rounded-md bg-secondary px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            />
          </div>
        ))}
      </div>
      <button
        onClick={onCalculate}
        className="mt-4 w-full rounded-md bg-primary py-3 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98] glow-primary"
      >
        Calcular Meu Tempo Perdido
      </button>
    </div>
  );
};
