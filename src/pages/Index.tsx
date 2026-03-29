import { useState, useMemo } from "react";
import { StatsHeader } from "@/components/StatsHeader";
import { DataInputSection } from "@/components/DataInputSection";
import { SmartAnalysis } from "@/components/SmartAnalysis";
import { EfficiencyGauge } from "@/components/EfficiencyGauge";
import { QuickTips } from "@/components/QuickTips";

const Index = () => {
  const [horasOnline, setHorasOnline] = useState("");
  const [horasCorrida, setHorasCorrida] = useState("");
  const [ganhoBruto, setGanhoBruto] = useState("");
  const [calculated, setCalculated] = useState(false);

  const stats = useMemo(() => {
    const online = parseFloat(horasOnline) || 0;
    const corrida = parseFloat(horasCorrida) || 0;
    const ganho = parseFloat(ganhoBruto) || 0;

    if (!calculated || online <= 0 || corrida <= 0 || ganho <= 0) {
      return { tempoParado: 0, dinheiroPerdido: 0, eficiencia: 0, ganhoPorHora: 0 };
    }

    const tempoParado = Math.max(online - corrida, 0);
    const ganhoPorHora = ganho / corrida;
    const dinheiroPerdido = tempoParado * ganhoPorHora;
    const eficiencia = Math.min((corrida / online) * 100, 100);

    return { tempoParado, dinheiroPerdido, eficiencia, ganhoPorHora };
  }, [horasOnline, horasCorrida, ganhoBruto, calculated]);

  const handleCalculate = () => {
    setCalculated(true);
  };

  const formatTime = (hours: number) => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m}min`;
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-black tracking-tight text-foreground">
            ⏱️ Detector de <span className="text-primary text-glow">Tempo Perdido</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Descubra quanto dinheiro você perde parado
          </p>
        </div>

        {/* Stats Cards */}
        <StatsHeader
          tempoParado={formatTime(stats.tempoParado)}
          dinheiroPerdido={stats.dinheiroPerdido}
          eficiencia={stats.eficiencia}
          show={calculated}
        />

        {/* Input Section */}
        <DataInputSection
          horasOnline={horasOnline}
          horasCorrida={horasCorrida}
          ganhoBruto={ganhoBruto}
          onHorasOnlineChange={setHorasOnline}
          onHorasCorridaChange={setHorasCorrida}
          onGanhoBrutoChange={setGanhoBruto}
          onCalculate={handleCalculate}
        />

        {/* Results */}
        {calculated && stats.eficiencia > 0 && (
          <div className="mt-5 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <EfficiencyGauge eficiencia={stats.eficiencia} />
            <SmartAnalysis eficiencia={stats.eficiencia} />
            <QuickTips />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
