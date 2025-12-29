import { Zap, Clock } from "lucide-react";

const VIPBanner = () => {
  return (
    <div className="mx-4 my-4 vip-banner rounded-xl p-4">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-semibold text-vip-foreground">
            Prévia disponível por 9:56
          </span>
          <Clock className="w-4 h-4 text-vip-foreground opacity-70" />
        </div>
        <button className="bg-background text-foreground text-sm font-semibold px-4 py-1.5 rounded-lg">
          Tornar-se VIP
        </button>
      </div>
      <p className="text-sm text-vip-foreground opacity-90 leading-relaxed">
        Você ganhou 10 minutos para testar gratuitamente nossa ferramenta, mas para liberar todas as funcionalidades e ter acesso permanente é necessário ser um membro VIP.
      </p>
    </div>
  );
};

export default VIPBanner;
